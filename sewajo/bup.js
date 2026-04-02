let items = []; // Awalnya kosong, akan diisi dari JSON
let cart = {}; 
let currentCategory = "Semua";

// Gunakan async agar kita bisa menunggu data JSON selesai didownload
window.addEventListener('load', async () => {
    try {
        // 1. Ambil data dari file JSON
        // Tambahkan timestamp agar browser selalu menganggap ini file baru
const response = await fetch('peralatan.json?v=' + new Date().getTime());
        items = await response.json();

        // 2. Sembunyikan loader
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => { document.getElementById('loader').style.display = 'none'; }, 500);
        
        // 3. Jalankan logika inisialisasi seperti biasa
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.has('kategori')) { currentCategory = urlParams.get('kategori'); }
        
        setupCategories(); // Pastikan kategori muncul berdasarkan data JSON
        
        if(urlParams.has('cari')) { document.getElementById('searchInput').value = urlParams.get('cari'); }
        if(urlParams.has('kode')) {
            urlParams.get('kode').split('-').forEach(k => parseAndAddCodeToCart(k));
        }

        renderItems(); // Render barang dari hasil fetch
        updateUI();
        
    } catch (error) {
        console.error("Gagal memuat data barang:", error);
        alert("Terjadi kesalahan saat memuat katalog. Silakan refresh halaman.");
    }
});

// LOGIK BARU: Update state tanpa re-render HTML gambar
function updateUI() {
    let totalItems = 0;
    let totalPrice = 0;
    
    // 1. Hitung Total
    Object.values(cart).forEach(c => {
        totalItems += c.qty;
        totalPrice += (c.varRef.harga * c.qty);
    });

    // 2. Update Footer
    const footer = document.getElementById('mainFooter');
    footer.style.display = totalItems > 0 ? 'flex' : 'none';
    document.getElementById('cartCount').innerText = `${totalItems} Unit`;
    document.getElementById('cartTotal').innerText = `Rp ${totalPrice.toLocaleString()}`;
    
    // 3. Update String Kode
    const codeString = generateCartCode();
    const codeDisplay = document.getElementById('cartCodeString');
    if(codeDisplay) codeDisplay.innerText = codeString || "-";

    // 4. Update visual tombol-tombol yang ada di DOM tanpa hapus HTML
    items.forEach(item => {
        item.variants.forEach((v) => {
            const cartKey = `${item.kodeItem}${v.kodeVar}`;
            const btn = document.getElementById(`btn-${cartKey}`);
            const qtyBox = document.getElementById(`qtybox-${cartKey}`);
            const qtyText = document.getElementById(`qtytext-${cartKey}`);

            if (btn && qtyBox) {
                if (cart[cartKey]) {
                    btn.classList.add('active');
                    qtyBox.classList.add('show');
                    qtyText.innerText = cart[cartKey].qty;
                } else {
                    btn.classList.remove('active');
                    qtyBox.classList.remove('show');
                }
            }
        });
    });
}

function renderItems(data = items) {
    const list = document.getElementById('itemList');
    const filteredData = currentCategory.toLowerCase() === "semua" ? data : data.filter(i => i.kategori.toLowerCase() === currentCategory.toLowerCase());
    
    // innerHTML hanya dijalankan saat ganti kategori atau cari barang
    list.innerHTML = filteredData.map(item => {
        const sClass = getStatusClass(item.status);
        const isUnavailable = (item.status === "Kosong" || item.status === "Sedang di Service");

        return `
        <div class="item-card ${sClass.card}">
            <img src="${item.gambar}" class="item-img" loading="lazy">
            <div class="item-info">
                ${item.status !== "Tersedia" ? `<span class="status-badge ${sClass.badge}">${item.status}</span>` : ''}
                <div class="item-title">${item.nama} <span class="item-tag">${item.kategori}</span></div>
                <div class="item-desc">${item.desc}</div>
                <div class="variants">
                    ${item.variants.map((v, idx) => {
                        const cartKey = `${item.kodeItem}${v.kodeVar}`;
                        return `
                        <div class="variant-row">
                            <button id="btn-${cartKey}" class="variant-btn" 
                                    onclick="${isUnavailable ? '' : `toggleVariant('${item.kodeItem}', ${idx})`}"
                                    ${isUnavailable ? 'disabled' : ''}>
                                ${v.nama} • Rp ${v.harga.toLocaleString()}
                            </button>
                            <div class="qty-control" id="qtybox-${cartKey}">
                                <button class="btn-qty" onclick="changeQty('${cartKey}', -1)">-</button>
                                <span id="qtytext-${cartKey}">0</span>
                                <button class="btn-qty" onclick="changeQty('${cartKey}', 1)">+</button>
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
        `;
    }).join('');
    updateUI(); // Pastikan state tombol sesuai cart setelah filter
}

// Fungsi lainnya (toggleVariant, changeQty, dll) tetap sama tapi memanggil updateUI() yang sudah dioptimasi
function toggleVariant(kodeItem, variantIndex) {
    const item = items.find(i => i.kodeItem === kodeItem);
    const variant = item.variants[variantIndex];
    const cartKey = `${kodeItem}${variant.kodeVar}`;
    if (cart[cartKey]) { delete cart[cartKey]; } 
    else { cart[cartKey] = { itemRef: item, varRef: variant, qty: 1, varIndex: variantIndex }; }
    updateUI();
}

function changeQty(cartKey, amount) {
    if(cart[cartKey]) {
        cart[cartKey].qty += amount;
        if(cart[cartKey].qty <= 0) delete cart[cartKey];
        updateUI();
    }
}

function filterItems() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const data = currentCategory.toLowerCase() === "semua" ? items : items.filter(i => i.kategori.toLowerCase() === currentCategory.toLowerCase());
    const filtered = data.filter(i => i.nama.toLowerCase().includes(query));
    renderItems(filtered);
}

// Sisa fungsi setupCategories, generateCartCode, sendWhatsApp, dll tetap sama...
function setupCategories() {
    const categories = ["Semua", ...new Set(items.map(i => i.kategori))];
    document.getElementById('categoryBar').innerHTML = categories.map(cat => `
        <button class="cat-btn ${cat.toLowerCase() === currentCategory.toLowerCase() ? 'active' : ''}" 
                onclick="filterByCategory('${cat}')">${cat}</button>
    `).join('');
    updateSearchHint();
}

function updateSearchHint() {
    const searchInput = document.getElementById('searchInput');
    searchInput.placeholder = currentCategory === "Semua" ? "Cari sesuatu yang kamu butuhkan..." : `Cari alat di kategori ${currentCategory}...`;
}

function filterByCategory(cat) {
    currentCategory = cat;
    setupCategories();
    filterItems();
}

function getStatusClass(status) {
    if(status === "Kosong" || status === "Sedang di Service") return { card: "card-kosong", badge: "badge-kosong" };
    if(status === "PROMO! PROMO! PROMO! Lagi PROMO ini!" || status === "PROMO!") return { card: "card-promo", badge: "badge-promo" };
    return { card: "", badge: "" };
}

function generateCartCode() {
    return Object.keys(cart).map(key => `${key}${cart[key].qty}`).join('-');
}

function toggleCheckout(show) {
    const body = document.getElementById('bodyTag');
    if (show) {
        body.classList.add('checkout-mode');
        document.getElementById('checkout-page').style.display = 'block';
        renderReceipt();
    } else {
        body.classList.remove('checkout-mode');
        document.getElementById('checkout-page').style.display = 'none';
    }
    window.scrollTo(0,0);
}

function renderReceipt() {
    const receipt = document.getElementById('receiptContent');
    let total = 0;
    receipt.innerHTML = Object.values(cart).map(c => {
        const subtotal = c.varRef.harga * c.qty;
        total += subtotal;
        return `
            <div class="summary-card">
                <div style="display:flex; gap:12px; align-items:center;">
                    <img src="${c.itemRef.gambar}" style="width:45px; height:45px; border-radius:8px; object-fit:cover;">
                    <div>
                        <div style="font-size:1rem; font-weight:500;">${c.itemRef.nama} <span style="font-size:0.8rem">x${c.qty}</span></div>
                        <div style="font-size:0.8rem; color:var(--text-secondary);">${c.varRef.nama}</div>
                    </div>
                </div>
                <div style="font-weight:bold;">Rp ${subtotal.toLocaleString()}</div>
            </div>
        `;
    }).join('');
    document.getElementById('checkoutTotalText').innerText = `Rp ${total.toLocaleString()}`;
}

function sendWhatsApp() {
    const codeString = generateCartCode();
    // let text = `*KODE PESANAN: ${codeString}*\n--------------------------\n`;
    //jexxmodified 02-04-26 - supaya bisa langsung mudah terlacak kalo pake braket [[]]
    let text = `sewajo! by alphacast.id\n`
    text += `www.alphacast.id/sewajo\n`
    text += `*KODE PESANAN: [[${codeString}]]*\n--------------------------\n`;
    let total = 0;
    Object.values(cart).forEach(c => {
        const subtotal = c.varRef.harga * c.qty;
        text += `- ${c.qty}x ${c.itemRef.nama} (${c.varRef.nama}): Rp ${subtotal.toLocaleString()}\n`;
        total += subtotal;
    });
    text += `--------------------------\n*TOTAL BAYAR: Rp ${total.toLocaleString()}*\n\n`;
    text += `Mohon jangan merubah apapun yang ada di pesan ini dan langsung menekan tombol kirim pesan, terima kasih.`
    window.open(`https://api.whatsapp.com/send?phone=6285159556468&text=${encodeURIComponent(text)}`);
}

function showQR() {
    const codeString = generateCartCode();
    if(codeString) {
        document.getElementById('qrImage').src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=RENTALPRO:${codeString}`;
        document.getElementById('qrText').innerText = codeString;
        document.getElementById('qrModal').style.display = 'flex';
    } else { alert("Pilih barang terlebih dahulu!"); }
}
function hideQR() { document.getElementById('qrModal').style.display = 'none'; }

function resetOrder() {
    if(confirm("Hapus semua pesanan?")) {
        cart = {}; updateUI(); toggleCheckout(false);
    }
}

function parseAndAddCodeToCart(kodeString) {
    const match = kodeString.match(/^([a-zA-Z0-9]+?)([a-zA-Z])(\d+)$/);
    if(match) {
        const kItem = match[1];
        const kVar = match[2];
        const qty = parseInt(match[3]);
        const item = items.find(i => i.kodeItem === kItem);
        if(item) {
            const varIndex = item.variants.findIndex(v => v.kodeVar === kVar);
            if(varIndex !== -1) {
                const cartKey = `${kItem}${kVar}`;
                cart[cartKey] = { itemRef: item, varRef: item.variants[varIndex], qty: qty, varIndex: varIndex };
            }
        }
    }
}