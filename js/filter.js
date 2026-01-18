// =====================================================
// REINMEDIA – FILTER & RENDER PRODUK (FINAL VERSION)
// =====================================================

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");

function renderProducts(list) {
  if (!productList) return;

  productList.innerHTML = "";

  if (list.length === 0) {
    productList.innerHTML = "<p>Tidak ada produk ditemukan.</p>";
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="product-meta">${p.brand} • ${p.color}</div>
      <p class="product-desc">${p.desc}</p>
      <div class="product-actions">
        <a href="detail.html?id=${p.id}" class="btn-detail">Detail</a>
        <a href="${p.link}" target="_blank" class="btn-buy">Shopee</a>
      </div>
    `;

    productList.appendChild(card);
  });
}

function filterProducts() {
  const keyword = searchInput.value.toLowerCase();
  const brand = brandFilter.value;

  const filtered = products.filter(p => {
    const matchName = p.name.toLowerCase().includes(keyword);
    const matchBrand = brand === "" || p.brand === brand;
    return matchName && matchBrand;
  });

  renderProducts(filtered);
}

if (searchInput && brandFilter) {
  searchInput.addEventListener("input", filterProducts);
  brandFilter.addEventListener("change", filterProducts);
}

// Render awal
renderProducts(products);
