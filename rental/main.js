// Database tetap sama
const items = [

    {
        id: 1, kodeItem: "C600D", kategori: "Kamera", nama: "Canon EOS 600D", 
        desc: "Paket Kamera: 1x Kamera ● 1x Baterai Kamera LP-E8 ● 1x Charger LP-E8 ● 1x Tali Kamera ● 1x Tas Kamera", status: "PROMO!",
        gambar: "./img/alatrental/canon 600d body only (Canon EOS 600D Body Only, B - CeX (UK) - Buy, Sell, Donate).webp", 
        variants: [
            { nama: "Paket Kamera + Lensa Kit 18-55 🕓12 Jam", kodeVar: "A", harga: 50000 },
            { nama: "Paket Kamera + Lensa Kit 18-55 🕓24 Jam", kodeVar: "B", harga: 100000 },
            { nama: "Paket Kamera + Lensa Fix 50mm 🕓12 Jam", kodeVar: "C", harga: 50000 },
            { nama: "Paket Kamera + Lensa Fix 50mm 🕓24 Jam", kodeVar: "D", harga: 100000 },
            { nama: "+ Tambahan Baterai Kamera LP-E8", kodeVar: "E", harga: 10000 },
        ] 
    },
    {
        id: 2, kodeItem: "C700D", kategori: "Kamera", nama: "Canon EOS 700D", 
        desc: "Paket Kamera: 1x Kamera ● 1x Baterai Kamera LP-E8 ● 1x Charger LP-E8 ● 1x Tali Kamera ● 1x Tas Kamera", status: "Tersedia",
        gambar: "./img/alatrental/canon 700d body only (Buy Canon EOS 700D Digital SLR Camera Body best price online  Camera Warehouse  Camera Warehouse).webp", 
        variants: [
            { nama: "Paket Kamera + Lensa Kit 18-55 🕓12 Jam", kodeVar: "A", harga: 100000 },
            { nama: "Paket Kamera + Lensa Kit 18-55 🕓24 Jam", kodeVar: "B", harga: 150000 },
            { nama: "Paket Kamera + Lensa Fix 50mm 🕓12 Jam", kodeVar: "C", harga: 100000 },
            { nama: "Paket Kamera + Lensa Fix 50mm 🕓24 Jam", kodeVar: "D", harga: 150000 },
            { nama: "+ Tambahan Baterai Kamera LP-E8", kodeVar: "E", harga: 10000 },
        ] 
    },
    {
        id: 3, kodeItem: "C50mm", kategori: "Lensa", nama: "Canon EF 50mm f/1.8 STM", 
        desc: "Lensa Canon EF", status: "PROMO!",
        gambar: "./img/alatrental/canon ef 50mm f1.8 stm (Canon EF 50mm F1.8 STM real-world samples gallery DPReview Photography News, Gear Reviews & Community).webp", 
        variants: [
            { nama: "Lensa 🕓12 Jam", kodeVar: "A", harga: 40000 },
            { nama: "Lensa 🕓24 Jam", kodeVar: "B", harga: 60000 },
        ] 
    },
    {
        id: 4, kodeItem: "YN50mm", kategori: "Lensa", nama: "Yongnuo 50mm f/1.8 for Canon", 
        desc: "Lensa Yongnuo buat Kamera Canon", status: "PROMO!",
        gambar: "./img/alatrental/yongnuo 50mm f1.8 (Yongnuo 50mm f1.8 Lens Review ePHOTOzine).webp", 
        variants: [
            { nama: "Lensa 🕓12 Jam", kodeVar: "A", harga: 30000 },
            { nama: "Lensa 🕓24 Jam", kodeVar: "B", harga: 50000 },
        ] 
    },
    {
        id: 5, kodeItem: "C1855mm", kategori: "Lensa", nama: "Canon EF-S 18-55mm f/3.5-5.6", 
        desc: "Lensa Canon EF-S IS/non IS (tergantung stok)", status: "PROMO!",
        gambar: "./img/alatrental/Canon EF-S 18-55mm f3.5-5.6 IS II Lens 2042B002 B&H Photo Video.webp", 
        variants: [
            { nama: "Lensa 🕓12 Jam", kodeVar: "A", harga: 30000 },
            { nama: "Lensa 🕓24 Jam", kodeVar: "B", harga: 50000 },
        ] 
    },
    {
        id: 6, kodeItem: "C18135mm", kategori: "Lensa", nama: "Canon EF-S 18-135mm f/3.5-5-6 IS", 
        desc: "Lensa Canon EF-S IS", status: "Tersedia",
        gambar: "./img/alatrental/Canon EF-S 18-135mm f3.5-5.6 IS STM Lens 6097B002 B&H Photo.webp", 
        variants: [
            { nama: "Lensa 🕓12 Jam", kodeVar: "A", harga: 100000 },
            { nama: "Lensa 🕓24 Jam", kodeVar: "B", harga: 150000 },
        ] 
    },
    {
        id: 7, kodeItem: "GdxTT600", kategori: "Kamera - Aksesoris", nama: "Godox TT600", 
        desc: "Flash External (Speedlight) manual universal", status: "Tersedia",
        gambar: "./img/alatrental/Godox TT600 (Jual Flash Godox TT600 - Batamkamera.com).webp", 
        variants: [
            { nama: "Flash External 🕓12 Jam", kodeVar: "A", harga: 50000 },
            { nama: "Flash External 🕓24 Jam", kodeVar: "B", harga: 90000 },
        ] 
    },
    {
        id: 8, kodeItem: "WLNKDC1", kategori: "Komunikasi", nama: "HT WLN KD-C1", 
        desc: "HT/Walkie Talkie UHF (400-470MHz), 16 Channel, baterai Li-ion 1000mAh, jangkauan 1-3 km (tergantung kondisi lapangan)", status: "PROMO!",
        gambar: "./img/alatrental/HT WLN KD-C1 (HANDY TALKY WLN KD-C1(ISI 1 PCS) , 16 Channel Walkie Talkie Transceiver Two Way, Channel 400 - 470MHz untuk berkomunikasi antar walkie talkie Lazada).webp", 
        variants: [
            { nama: "HT/Walkie Talkie 🕓12 Jam", kodeVar: "A", harga: 50000 },
            { nama: "HT/Walkie Talkie 🕓24 Jam", kodeVar: "B", harga: 70000 },
        ] 
    },
    {
        id: 9, kodeItem: "WLNKDC1", kategori: "Pendingin Ruangan", nama: "Kipas Angin Blower Uap", 
        desc: "Kipas Angin Blower Uap", status: "Tersedia",
        gambar: "./img/alatrental/kipas angin blower (Krisbow 60 Ltr Kipas Angin Uap 330 Watt - Hitamputih).webp", 
        variants: [
            { nama: "Kipas Angin Blower Uap 🕓6 Jam", kodeVar: "A", harga: 450000 },
            { nama: "Kipas Angin Blower Uap 🕓12 Jam", kodeVar: "B", harga: 650000 },
        ] 
    },
    {
        id: 10, kodeItem: "TripodLightStandKecil", kategori: "Kamera - Aksesoris", nama: "Tripod Light Stand Kecil", 
        desc: "Tripod Light Stand Kecil", status: "Tersedia",
        gambar: "./img/alatrental/tripod lampu kecil (Light Stand EA2TT Klein 260).webp", 
        variants: [
            { nama: "Tripod Light Stand Kecil 🕓12 Jam", kodeVar: "A", harga: 20000 },
            { nama: "Tripod Light Stand Kecil 🕓24 Jam", kodeVar: "B", harga: 30000 },
        ] 
    },
    {
        id: 11, kodeItem: "TV", kategori: "Layar", nama: "Televisi", 
        desc: "Paket TV: 1x Televisi ● 1x Standing / Floor (Matador) Bracket ● 1x Kabel Listrik 30 meter ● 1x Kabel HDMI 30 meter", status: "PROMO!",
        gambar: "./img/alatrental/tv on tripod (Portable Tripod TV Stand 35 to 75 VIVO - desk solutions, screen mounting, and more).webp", 
        variants: [
            { nama: "Paket TV ukuran 40-43 inch Standing 🕓12 Jam", kodeVar: "A", harga: 500000 },
            { nama: "Paket TV ukuran 40-43 inch Standing 🕓12 Jam", kodeVar: "B", harga: 500000 },
            { nama: "Paket TV ukuran 60-65 inch Floor (Matador) 🕓12 Jam", kodeVar: "C", harga: 1500000 },
            { nama: "Paket TV ukuran 60-65 inch Floor (Matador) 🕓12 Jam", kodeVar: "D", harga: 1500000 },
        ] 
    },
    {
        id: 12, kodeItem: "Videotron", kategori: "Layar", nama: "Videotron/Layar LED", 
        desc: "Paket Layar LED: Panel sesuai ukuran (dihitung per 1 meter persegi) contoh 8m x 4m = 32m² x 700rb = 22,4jt ● Prosesor Videotron ● 1x Kabel HDMI 2 meter ● Operator Videotron ● Ukuran minimal 8m² ● Biaya bisa dinego untuk ukuran besar", status: "Tersedia",
        gambar: "./img/alatrental/Led screen backdrop Vectors - Download Free High-Quality Vectors from Freepik Freepik.webp", 
        variants: [
            { nama: "Paket Videotron per 1 meter persegi 🕓1 Hari", kodeVar: "A", harga: 700000 },
            { nama: "Paket Videotron per 1 meter persegi 🕓2 Hari", kodeVar: "B", harga: 600000 },
        ] 
    },

    //tambahkan catatan:
    //ada kompensasi 1 jam terlambat, semenit setalah akan dicharge 30% dari harga sewa
    //promo berubah sewaktu-waktu, hubungi kami terus untuk mengecek promo terkini
    //item-item baru akan segera hadir, pantau terus media sosial kami!
    //harga diatas belum termasuk biaya antar-jemput jika tidak langsung di studio kami, hubungi kami untuk pengecekan biayanya.


    // { 
    //     id: 1, kodeItem: "In4", kategori: "Kamera", nama: "Insta360 X4", 
    //     desc: "Kamera 360 resolusi 8K untuk event interaktif.", status: "Tersedia",
    //     gambar: "https://images.unsplash.com/photo-1623912733306-4444654924c5?q=80&w=200", 
    //     variants: [{ nama: "6 Jam", kodeVar: "A", harga: 150000 }, { nama: "24 Jam", kodeVar: "B", harga: 250000 }] 
    // },
    // { 
    //     id: 2, kodeItem: "Ca6", kategori: "Kamera", nama: "Canon EOS R6", 
    //     desc: "Mirrorless Full-frame andalan cinematic.", status: "PROMO!",
    //     gambar: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=200", 
    //     variants: [{ nama: "Body Only", kodeVar: "A", harga: 300000 }, { nama: "Full Kit", kodeVar: "B", harga: 450000 }] 
    // },
    // { 
    //     id: 3, kodeItem: "Op1", kategori: "Service", nama: "Operator Livestream", 
    //     desc: "Tenaga ahli untuk vMix & OBS.", status: "Tersedia",
    //     gambar: "https://images.unsplash.com/photo-1478737270239-2fccd27ee086?q=80&w=200", 
    //     variants: [{ nama: "Half Day", kodeVar: "A", harga: 500000 }, { nama: "Full Day", kodeVar: "B", harga: 850000 }] 
    // }
];

let cart = {}; 
let currentCategory = "Semua";

window.addEventListener('load', () => {
    document.getElementById('loader').style.opacity = '0';
    setTimeout(() => { document.getElementById('loader').style.display = 'none'; }, 500);
    
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('kategori')) { currentCategory = urlParams.get('kategori'); }
    setupCategories();
    if(urlParams.has('cari')) { document.getElementById('searchInput').value = urlParams.get('cari'); }
    
    if(urlParams.has('kode')) {
        urlParams.get('kode').split('-').forEach(k => parseAndAddCodeToCart(k));
    }

    renderItems(); // Render pertama kali
    updateUI();    // Update tampilan cart awal
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
    if(status === "PROMO!" || status === "Lagi PROMO!") return { card: "card-promo", badge: "badge-promo" };
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
    let text = `*KODE PESANAN: ${codeString}*\n--------------------------\n`;
    let total = 0;
    Object.values(cart).forEach(c => {
        const subtotal = c.varRef.harga * c.qty;
        text += `- ${c.qty}x ${c.itemRef.nama} (${c.varRef.nama}): Rp ${subtotal.toLocaleString()}\n`;
        total += subtotal;
    });
    text += `--------------------------\n*TOTAL BAYAR: Rp ${total.toLocaleString()}*`;
    window.open(`https://api.whatsapp.com/send?phone=628123456789&text=${encodeURIComponent(text)}`);
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