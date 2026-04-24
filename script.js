const categories = [
  {
    name: "Electronics",
    description: "Audio, wearables, smart essentials",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="6" width="16" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path d="M9 20h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>`
  },
  {
    name: "Fashion",
    description: "Modern fits and elevated basics",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 5l4 3 4-3 2 4-3 2v8H9v-8L6 9l2-4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      </svg>`
  },
  {
    name: "Home",
    description: "Glossy upgrades for every room",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 11.5L12 5l8 6.5V19a1 1 0 0 1-1 1h-4v-5H9v5H5a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      </svg>`
  },
  {
    name: "Beauty",
    description: "Premium daily care picks",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 4h4v4.2l2.5 2.8A5 5 0 0 1 12.8 19h-1.6A5 5 0 0 1 7.5 11l2.5-2.8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      </svg>`
  },
  {
    name: "Grocery",
    description: "Fresh pantry and daily needs",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4c2 1 3 3 3 5c0 1.5-.7 3.1-2.1 4.4C7.3 14.9 6 16.5 6 19h12c0-3.2-1.9-5-3.3-6.3C13.6 11.7 13 10.3 13 9c0-2 1.1-4 3-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>`
  }
];

const products = [
  {
    id: 1,
    name: "Nova X Wireless Headphones",
    category: "electronics",
    shortCategory: "Audio",
    price: 3999,
    oldPrice: 5499,
    rating: 4.8,
    discount: 27,
    imageClass: "visual-electronics",
    imageLabel: "Spatial sound"
  },
  {
    id: 2,
    name: "Luma Smart Watch S8",
    category: "electronics",
    shortCategory: "Wearables",
    price: 2499,
    oldPrice: 3299,
    rating: 4.7,
    discount: 24,
    imageClass: "visual-home",
    imageLabel: "Daily health"
  },
  {
    id: 3,
    name: "Aura Knit Street Jacket",
    category: "fashion",
    shortCategory: "Outerwear",
    price: 1299,
    oldPrice: 1899,
    rating: 4.5,
    discount: 32,
    imageClass: "visual-fashion",
    imageLabel: "Limited drop"
  },
  {
    id: 4,
    name: "FreshBox Organic Essentials",
    category: "grocery",
    shortCategory: "Pantry",
    price: 799,
    oldPrice: 1099,
    rating: 4.6,
    discount: 27,
    imageClass: "visual-grocery",
    imageLabel: "Daily fresh"
  },
  {
    id: 5,
    name: "Halo Desk Lamp Pro",
    category: "home",
    shortCategory: "Lighting",
    price: 2499,
    oldPrice: 3199,
    rating: 4.4,
    discount: 22,
    imageClass: "visual-home",
    imageLabel: "Ambient glow"
  },
  {
    id: 6,
    name: "PureVeil Skin Serum",
    category: "beauty",
    shortCategory: "Skincare",
    price: 599,
    oldPrice: 899,
    rating: 4.3,
    discount: 33,
    imageClass: "visual-beauty",
    imageLabel: "Glow routine"
  },
  {
    id: 7,
    name: "StrideFlex Training Shoes",
    category: "fashion",
    shortCategory: "Footwear",
    price: 2999,
    oldPrice: 3999,
    rating: 4.9,
    discount: 25,
    imageClass: "visual-sports",
    imageLabel: "Performance fit"
  },
  {
    id: 8,
    name: "ZenBrew Coffee Set",
    category: "home",
    shortCategory: "Kitchen",
    price: 1499,
    oldPrice: 1999,
    rating: 4.6,
    discount: 25,
    imageClass: "visual-luxury",
    imageLabel: "Morning ritual"
  }
];

const quickFilters = ["all", "electronics", "fashion", "home", "deal"];
const categoryFilters = [
  { label: "All", value: "all" },
  { label: "Electronics", value: "electronics" },
  { label: "Fashion", value: "fashion" },
  { label: "Home", value: "home" },
  { label: "Beauty", value: "beauty" },
  { label: "Grocery", value: "grocery" }
];
const priceFilters = [
  { label: "All", value: "all" },
  { label: "Under ₹1,000", value: "under-1000" },
  { label: "₹1,000 - ₹2,500", value: "1000-2500" },
  { label: "Above ₹2,500", value: "above-2500" }
];
const ratingFilters = [
  { label: "All", value: "all" },
  { label: "4.0+", value: "4" },
  { label: "4.5+", value: "4.5" },
  { label: "4.8+", value: "4.8" }
];
const discountFilters = [
  { label: "All", value: "all" },
  { label: "10%+", value: "10" },
  { label: "20%+", value: "20" },
  { label: "30%+", value: "30" }
];

const filterState = {
  quick: "all",
  category: "all",
  price: "all",
  rating: "all",
  discount: "all",
  query: ""
};

function formatRupees(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function createCategoryMarkup(category) {
  return `
    <article class="category-card">
      <div class="category-icon">${category.icon}</div>
      <div>
        <h3>${category.name}</h3>
        <p>${category.description}</p>
      </div>
    </article>`;
}

function createProductMarkup(product) {
  return `
    <article class="product-card">
      <div class="product-visual ${product.imageClass}">
        <span class="visual-label">${product.imageLabel}</span>
      </div>
      <div class="product-copy">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-subtle">${product.shortCategory}</p>
        <div class="product-meta">
          <span class="rating-pill">${product.rating} &#9733;</span>
          <span class="discount-tag">${product.discount}% OFF</span>
        </div>
        <div class="price-row">
          <span class="price-badge">${formatRupees(product.price)}</span>
          <span class="old-price">${formatRupees(product.oldPrice)}</span>
        </div>
        <div class="product-bottom">
          <span class="product-subtle">Fast delivery available</span>
          <button class="action-button" type="button" data-loading-button>Add to Cart</button>
        </div>
      </div>
    </article>`;
}

function createDealMarkup(product) {
  return `
    <article class="deal-card">
      <div class="deal-visual ${product.imageClass}">
        <span class="visual-label">${product.imageLabel}</span>
      </div>
      <div class="deal-copy">
        <span class="deal-tag">Deal of the day</span>
        <h3>${product.name}</h3>
        <p>Save big on a polished everyday essential with premium styling and standout value.</p>
        <div class="price-row">
          <span class="price-badge">${formatRupees(product.price)}</span>
          <span class="old-price">${formatRupees(product.oldPrice)}</span>
          <span class="discount-tag">${product.discount}% OFF</span>
        </div>
        <div class="deal-bottom">
          <span class="product-subtle">Highly rated pick</span>
          <button class="action-button" type="button" data-loading-button>Grab Deal</button>
        </div>
      </div>
    </article>`;
}

function createFilterButtons(items, type, activeValue) {
  return items.map((item) => {
    const activeClass = item.value === activeValue ? " active" : "";
    return `<button class="filter-option${activeClass}" type="button" data-filter-type="${type}" data-filter-value="${item.value}">${item.label}</button>`;
  }).join("");
}

function renderHomePage() {
  const categoryRow = document.getElementById("categoryRow");
  const featuredProducts = document.getElementById("featuredProducts");
  const bestDeals = document.getElementById("bestDeals");

  if (categoryRow) {
    categoryRow.innerHTML = categories.map(createCategoryMarkup).join("");
  }

  if (featuredProducts) {
    featuredProducts.innerHTML = products.slice(0, 4).map(createProductMarkup).join("");
  }

  if (bestDeals) {
    bestDeals.innerHTML = [...products]
      .sort((a, b) => b.discount - a.discount)
      .slice(0, 3)
      .map(createDealMarkup)
      .join("");
  }
}

function productMatchesFilters(product) {
  const queryMatch = !filterState.query || [product.name, product.shortCategory, product.category]
    .some((value) => value.toLowerCase().includes(filterState.query));

  const quickMatch = filterState.quick === "all"
    || (filterState.quick === "deal" ? product.discount >= 25 : product.category === filterState.quick);

  const categoryMatch = filterState.category === "all" || product.category === filterState.category;

  let priceMatch = true;
  if (filterState.price === "under-1000") {
    priceMatch = product.price < 1000;
  } else if (filterState.price === "1000-2500") {
    priceMatch = product.price >= 1000 && product.price <= 2500;
  } else if (filterState.price === "above-2500") {
    priceMatch = product.price > 2500;
  }

  const ratingMatch = filterState.rating === "all" || product.rating >= Number(filterState.rating);
  const discountMatch = filterState.discount === "all" || product.discount >= Number(filterState.discount);

  return queryMatch && quickMatch && categoryMatch && priceMatch && ratingMatch && discountMatch;
}

function updateCatalog(productsToRender, label) {
  const productGrid = document.getElementById("allProducts");
  const productCount = document.getElementById("productCount");
  const catalogHeading = document.getElementById("catalogHeading");

  if (!productGrid) {
    return;
  }

  productGrid.innerHTML = productsToRender.length
    ? productsToRender.map(createProductMarkup).join("")
    : `
      <article class="empty-state glass-panel">
        <div>
          <span class="eyebrow">No match</span>
          <h3>No products found</h3>
          <p>Try a broader search or reset the filters for more results.</p>
        </div>
      </article>`;

  productCount.textContent = `${productsToRender.length} item${productsToRender.length === 1 ? "" : "s"}`;
  catalogHeading.textContent = label;
}

function getCatalogLabel() {
  if (filterState.query) {
    return `Search results for \"${filterState.query}\"`;
  }

  if (filterState.quick === "deal") {
    return "Best deals";
  }

  if (filterState.quick !== "all") {
    return `${filterState.quick.charAt(0).toUpperCase()}${filterState.quick.slice(1)} picks`;
  }

  if (filterState.category !== "all") {
    return `${filterState.category.charAt(0).toUpperCase()}${filterState.category.slice(1)} products`;
  }

  return "All products";
}

function renderFilterGroups() {
  const categoryFiltersHost = document.getElementById("categoryFilters");
  const priceFiltersHost = document.getElementById("priceFilters");
  const ratingFiltersHost = document.getElementById("ratingFilters");
  const discountFiltersHost = document.getElementById("discountFilters");

  if (categoryFiltersHost) {
    categoryFiltersHost.innerHTML = createFilterButtons(categoryFilters, "category", filterState.category);
  }

  if (priceFiltersHost) {
    priceFiltersHost.innerHTML = createFilterButtons(priceFilters, "price", filterState.price);
  }

  if (ratingFiltersHost) {
    ratingFiltersHost.innerHTML = createFilterButtons(ratingFilters, "rating", filterState.rating);
  }

  if (discountFiltersHost) {
    discountFiltersHost.innerHTML = createFilterButtons(discountFilters, "discount", filterState.discount);
  }
}

function syncQuickFilters() {
  document.querySelectorAll("[data-quick-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.quickFilter === filterState.quick);
  });
}

function refreshCatalog() {
  const filteredProducts = products.filter(productMatchesFilters);
  updateCatalog(filteredProducts, getCatalogLabel());
  renderFilterGroups();
  syncQuickFilters();
  attachLoadingButtons();
}

function attachFilterListeners() {
  document.addEventListener("click", (event) => {
    const quickButton = event.target.closest("[data-quick-filter]");
    if (quickButton) {
      filterState.quick = quickButton.dataset.quickFilter;
      refreshCatalog();
      return;
    }

    const filterButton = event.target.closest("[data-filter-type]");
    if (filterButton) {
      const { filterType, filterValue } = filterButton.dataset;
      filterState[filterType] = filterValue;
      refreshCatalog();
    }
  });

  const clearFilters = document.getElementById("clearFilters");
  if (clearFilters) {
    clearFilters.addEventListener("click", () => {
      filterState.quick = "all";
      filterState.category = "all";
      filterState.price = "all";
      filterState.rating = "all";
      filterState.discount = "all";
      filterState.query = "";

      const searchInput = document.querySelector('.nav-search input[name="q"]');
      if (searchInput) {
        searchInput.value = "";
      }

      refreshCatalog();
    });
  }
}

function renderProductsPage() {
  renderFilterGroups();
  attachFilterListeners();

  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");
  const deal = params.get("deal");

  if (query) {
    filterState.query = query.trim().toLowerCase();
    const searchInput = document.querySelector('.nav-search input[name="q"]');
    if (searchInput) {
      searchInput.value = query;
    }
  }

  if (deal === "top") {
    filterState.quick = "deal";
  }

  refreshCatalog();
}

function attachLoadingButtons() {
  document.querySelectorAll("[data-loading-button]").forEach((button) => {
    if (button.dataset.bound === "true") {
      return;
    }

    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      const originalText = button.textContent;
      button.classList.add("is-loading");
      setTimeout(() => {
        button.classList.remove("is-loading");
        button.textContent = "Added";
        setTimeout(() => {
          button.textContent = originalText;
        }, 900);
      }, 900);
    });
  });
}

function attachMobileNav() {
  const toggle = document.querySelector(".mobile-nav-toggle");
  const panel = document.getElementById("navPanel");

  if (!toggle || !panel) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("is-open", !isOpen);
  });
}

const page = document.body.dataset.page;
attachMobileNav();

if (page === "home") {
  renderHomePage();
  attachLoadingButtons();
}

if (page === "products") {
  renderProductsPage();
}
