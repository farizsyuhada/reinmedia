// =====================================================
// REINMEDIA – FILTER & RENDER PRODUK (MOBILE PREMIUM)
// =====================================================

const productList = document.getElementById("product-list") || document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");

function renderProducts(list) {
  if (!productList) return;

  productList.innerHTML = "";

  if (list.length === 0) {
    productList.innerHTML = "<p style='grid-column:1/-1'>Tidak ada produk ditemukan.</p>";
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <h3>${p.name}</h3>
      <p class="product-desc"><strong>Merek:</strong> ${p.brand}</p>
      <p class="product-desc"><strong>Warna:</strong> ${p.color}</p>
      <p class="product-desc">${p.desc}</p>
      <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
        <a href="detail.html?id=${p.id}" class="btn-outline">Detail</a>
        <a href="${p.link}" target="_blank" class="btn-primary">Shopee</a>
      </div>
    `;

    productList.appendChild(card);
  });
}

function filterProducts() {
  if (!searchInput && !brandFilter) return;

  const keyword = searchInput ? searchInput.value.toLowerCase() : "";
  const brand = brandFilter ? brandFilter.value : "";

  const filtered = products.filter(p => {
    const matchName = p.name.toLowerCase().includes(keyword);
    const matchBrand = brand === "" || p.brand === brand;
    return matchName && matchBrand;
  });

  renderProducts(filtered);
}

if (searchInput) searchInput.addEventListener("input", filterProducts);
if (brandFilter) brandFilter.addEventListener("change", filterProducts);

// Render awal
if (typeof products !== "undefined") {
  renderProducts(products);
}
