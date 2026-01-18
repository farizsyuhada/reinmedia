const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");

function renderProducts(list) {
  productList.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="product-meta">Merek: ${p.brand} • Warna: ${p.color}</div>
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

searchInput.addEventListener("input", filterProducts);
brandFilter.addEventListener("change", filterProducts);

renderProducts(products);
