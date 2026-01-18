const list = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");
const brandFilter = document.getElementById("brandFilter");

function renderProducts(data) {
  list.innerHTML = "";

  data.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-img">
      <h3>${p.name}</h3>
      <p class="brand"><strong>Merek:</strong> ${p.brand}</p>
      <p class="color"><strong>Warna:</strong> ${p.color}</p>
      <p class="desc">${p.desc}</p>

      <div class="product-actions">
        <a href="detail.html?id=${p.id}" class="btn-outline">Lihat Detail</a>
        <a href="${p.link}" target="_blank" class="btn">Beli di Shopee</a>
      </div>
    `;

    list.appendChild(div);
  });
}

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedBrand = brandFilter.value;

  const filtered = products.filter(p => {
    const matchName = p.name.toLowerCase().includes(searchText);
    const matchBrand = selectedBrand === "all" || p.brand === selectedBrand;
    return matchName && matchBrand;
  });

  renderProducts(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterProducts);
brandFilter.addEventListener("change", filterProducts);

// Load awal
renderProducts(products);
