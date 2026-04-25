const categories = [
  { name: "Electronics", description: "Audio, wearables, smart essentials", icon: '<svg viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 20h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' },
  { name: "Fashion", description: "Modern fits and elevated basics", icon: '<svg viewBox="0 0 24 24"><path d="M8 5l4 3 4-3 2 4-3 2v8H9v-8L6 9l2-4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>' },
  { name: "Home", description: "Glossy upgrades for every room", icon: '<svg viewBox="0 0 24 24"><path d="M4 11.5L12 5l8 6.5V19a1 1 0 0 1-1 1h-4v-5H9v5H5a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>' },
  { name: "Beauty", description: "Premium daily care picks", icon: '<svg viewBox="0 0 24 24"><path d="M10 4h4v4.2l2.5 2.8A5 5 0 0 1 12.8 19h-1.6A5 5 0 0 1 7.5 11l2.5-2.8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>' },
  { name: "Grocery", description: "Fresh pantry and daily needs", icon: '<svg viewBox="0 0 24 24"><path d="M8 4c2 1 3 3 3 5c0 1.5-.7 3.1-2.1 4.4C7.3 14.9 6 16.5 6 19h12c0-3.2-1.9-5-3.3-6.3C13.6 11.7 13 10.3 13 9c0-2 1.1-4 3-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' }
];

const products = [
  { id: 1, name: "Nova X Wireless Headphones", category: "electronics", shortCategory: "Audio", price: 3999, oldPrice: 5499, rating: 4.8, discount: 27, imageClass: "visual-electronics", imageLabel: "Spatial sound", stock: 14 },
  { id: 2, name: "Luma Smart Watch S8", category: "electronics", shortCategory: "Wearables", price: 2499, oldPrice: 3299, rating: 4.7, discount: 24, imageClass: "visual-home", imageLabel: "Daily health", stock: 22 },
  { id: 3, name: "Aura Knit Street Jacket", category: "fashion", shortCategory: "Outerwear", price: 1299, oldPrice: 1899, rating: 4.5, discount: 32, imageClass: "visual-fashion", imageLabel: "Limited drop", stock: 38 },
  { id: 4, name: "FreshBox Organic Essentials", category: "grocery", shortCategory: "Pantry", price: 799, oldPrice: 1099, rating: 4.6, discount: 27, imageClass: "visual-grocery", imageLabel: "Daily fresh", stock: 12 },
  { id: 5, name: "Halo Desk Lamp Pro", category: "home", shortCategory: "Lighting", price: 2499, oldPrice: 3199, rating: 4.4, discount: 22, imageClass: "visual-home", imageLabel: "Ambient glow", stock: 9 },
  { id: 6, name: "PureVeil Skin Serum", category: "beauty", shortCategory: "Skincare", price: 599, oldPrice: 899, rating: 4.3, discount: 33, imageClass: "visual-beauty", imageLabel: "Glow routine", stock: 44 },
  { id: 7, name: "StrideFlex Training Shoes", category: "fashion", shortCategory: "Footwear", price: 2999, oldPrice: 3999, rating: 4.9, discount: 25, imageClass: "visual-sports", imageLabel: "Performance fit", stock: 18 },
  { id: 8, name: "ZenBrew Coffee Set", category: "home", shortCategory: "Kitchen", price: 1499, oldPrice: 1999, rating: 4.6, discount: 25, imageClass: "visual-luxury", imageLabel: "Morning ritual", stock: 7 }
];

const quickFilters = ["all", "electronics", "fashion", "home", "deal"];
const categoryFilters = [{ label: "All", value: "all" }, { label: "Electronics", value: "electronics" }, { label: "Fashion", value: "fashion" }, { label: "Home", value: "home" }, { label: "Beauty", value: "beauty" }, { label: "Grocery", value: "grocery" }];
const priceFilters = [{ label: "All", value: "all" }, { label: "Under \u20B91,000", value: "under-1000" }, { label: "\u20B91,000 - \u20B92,500", value: "1000-2500" }, { label: "Above \u20B92,500", value: "above-2500" }];
const ratingFilters = [{ label: "All", value: "all" }, { label: "4.0+", value: "4" }, { label: "4.5+", value: "4.5" }, { label: "4.8+", value: "4.8" }];
const discountFilters = [{ label: "All", value: "all" }, { label: "10%+", value: "10" }, { label: "20%+", value: "20" }, { label: "30%+", value: "30" }];

const dashboardStats = [
  { label: "Total Products", value: "248", change: "+12 this week", icon: '<svg viewBox="0 0 24 24"><path d="M6 7.5 12 4l6 3.5v9L12 20l-6-3.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>' },
  { label: "Total Orders", value: "1,482", change: "+8.4% growth", icon: '<svg viewBox="0 0 24 24"><path d="M7 4h10l2 3v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>' },
  { label: "Total Revenue", value: "\u20B94.86L", change: "+18.4% month", icon: '<svg viewBox="0 0 24 24"><path d="M12 3v18M8 7.5c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5-1.8 2.5-4 2.5-4 1-4 2.5 1.8 2.5 4 2.5 4 1 4 2.5-1.8 2.5-4 2.5-4-1-4-2.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' },
  { label: "Pending Orders", value: "36", change: "Needs review", icon: '<svg viewBox="0 0 24 24"><path d="M12 6v6l4 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>' },
  { label: "Customers", value: "8,294", change: "+314 new users", icon: '<svg viewBox="0 0 24 24"><path d="M16 19a4 4 0 0 0-8 0M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' }
];

const salesSeries = [
  { label: "Mon", value: 52 },
  { label: "Tue", value: 74 },
  { label: "Wed", value: 63 },
  { label: "Thu", value: 88 },
  { label: "Fri", value: 96 },
  { label: "Sat", value: 71 },
  { label: "Sun", value: 84 }
];

const orders = [
  { id: "#EM-2012", customer: "Aarav D.", product: "Nova X Wireless Headphones", status: "shipped", amount: 3999 },
  { id: "#EM-2011", customer: "Mira S.", product: "Halo Desk Lamp Pro", status: "pending", amount: 2499 },
  { id: "#EM-2010", customer: "Rohan K.", product: "StrideFlex Training Shoes", status: "processing", amount: 2999 },
  { id: "#EM-2009", customer: "Anika P.", product: "ZenBrew Coffee Set", status: "delivered", amount: 1499 },
  { id: "#EM-2008", customer: "Dev M.", product: "PureVeil Skin Serum", status: "shipped", amount: 599 }
];

const lowStockItems = [
  { name: "ZenBrew Coffee Set", stock: 7, note: "Kitchen bundle demand increased 18%." },
  { name: "Halo Desk Lamp Pro", stock: 9, note: "Home category sales picked up this weekend." },
  { name: "FreshBox Organic Essentials", stock: 12, note: "Bundle reorder suggested within 2 days." }
];

const testimonials = [
  { name: "Priya S.", initials: "PS", product: "Nova X Wireless Headphones", review: "The finish feels premium and the sound isolation is way better than I expected. Delivery was quick too.", status: "Active", rating: 5, tone: "High audio satisfaction" },
  { name: "Arjun R.", initials: "AR", product: "Halo Desk Lamp Pro", review: "Looks elegant on my desk and the brightness control feels premium. Packaging was secure and neat.", status: "Active", rating: 5, tone: "Design praised" },
  { name: "Megha T.", initials: "MT", product: "PureVeil Skin Serum", review: "The texture is light and the product presentation is beautiful. Customers clearly notice the quality.", status: "Hidden", rating: 4, tone: "Awaiting recheck" },
  { name: "Soham B.", initials: "SB", product: "StrideFlex Training Shoes", review: "Comfortable from day one and the product page matched the real item perfectly. Very happy with the purchase.", status: "Active", rating: 5, tone: "Fit and comfort win" },
  { name: "Nisha K.", initials: "NK", product: "ZenBrew Coffee Set", review: "Bought it as a gift and it felt much more expensive than the price. Clean finish, classy box, lovely experience.", status: "Active", rating: 5, tone: "Gift-ready feedback" },
  { name: "Rahul V.", initials: "RV", product: "Luma Smart Watch S8", review: "Battery life and display are strong for the segment. The watch looks modern and the order arrived before expected.", status: "Hidden", rating: 4, tone: "Needs moderation review" }
];

const filterState = { quick: "all", category: "all", price: "all", rating: "all", discount: "all", query: "" };

function formatRupees(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}

function createCategoryMarkup(category) {
  return `<article class="category-card"><div class="category-icon">${category.icon}</div><div><h3>${category.name}</h3><p>${category.description}</p></div></article>`;
}

function createProductMarkup(product) {
  return `<article class="product-card"><div class="product-visual ${product.imageClass}"><span class="visual-label">${product.imageLabel}</span></div><div><h3>${product.name}</h3><p class="product-subtle">${product.shortCategory}</p><div class="product-meta"><span class="rating-pill">${product.rating} \u2605</span><span class="discount-tag">${product.discount}% OFF</span></div><div class="price-row"><span class="price-badge">${formatRupees(product.price)}</span><span class="old-price">${formatRupees(product.oldPrice)}</span></div><div class="product-bottom"><span class="product-subtle">Fast delivery available</span><button class="action-button" type="button" data-loading-button>Add to Cart</button></div></div></article>`;
}

function createDealMarkup(product) {
  return `<article class="deal-card"><div class="deal-visual ${product.imageClass}"><span class="visual-label">${product.imageLabel}</span></div><div><span class="deal-tag">Deal of the day</span><h3>${product.name}</h3><p>Save big on a polished everyday essential with premium styling and standout value.</p><div class="price-row"><span class="price-badge">${formatRupees(product.price)}</span><span class="old-price">${formatRupees(product.oldPrice)}</span><span class="discount-tag">${product.discount}% OFF</span></div><div class="deal-bottom"><span class="product-subtle">Highly rated pick</span><button class="action-button" type="button" data-loading-button>Grab Deal</button></div></div></article>`;
}

function createFilterButtons(items, type, activeValue) {
  return items.map((item) => `<button class="filter-option${item.value === activeValue ? " active" : ""}" type="button" data-filter-type="${type}" data-filter-value="${item.value}">${item.label}</button>`).join("");
}

function renderHomePage() {
  const categoryRow = document.getElementById("categoryRow");
  const featuredProducts = document.getElementById("featuredProducts");
  const bestDeals = document.getElementById("bestDeals");
  if (categoryRow) categoryRow.innerHTML = categories.map(createCategoryMarkup).join("");
  if (featuredProducts) featuredProducts.innerHTML = products.slice(0, 4).map(createProductMarkup).join("");
  if (bestDeals) bestDeals.innerHTML = [...products].sort((a, b) => b.discount - a.discount).slice(0, 3).map(createDealMarkup).join("");
}

function productMatchesFilters(product) {
  const queryMatch = !filterState.query || [product.name, product.shortCategory, product.category].some((value) => value.toLowerCase().includes(filterState.query));
  const quickMatch = filterState.quick === "all" || (filterState.quick === "deal" ? product.discount >= 25 : product.category === filterState.quick);
  const categoryMatch = filterState.category === "all" || product.category === filterState.category;
  const priceMatch = filterState.price === "all" || (filterState.price === "under-1000" && product.price < 1000) || (filterState.price === "1000-2500" && product.price >= 1000 && product.price <= 2500) || (filterState.price === "above-2500" && product.price > 2500);
  const ratingMatch = filterState.rating === "all" || product.rating >= Number(filterState.rating);
  const discountMatch = filterState.discount === "all" || product.discount >= Number(filterState.discount);
  return queryMatch && quickMatch && categoryMatch && priceMatch && ratingMatch && discountMatch;
}

function updateCatalog(productsToRender, label) {
  const productGrid = document.getElementById("allProducts");
  const productCount = document.getElementById("productCount");
  const catalogHeading = document.getElementById("catalogHeading");
  if (!productGrid) return;
  productGrid.innerHTML = productsToRender.length ? productsToRender.map(createProductMarkup).join("") : '<article class="empty-state glass-panel"><div><span class="eyebrow">No match</span><h3>No products found</h3><p>Try a broader search or reset the filters for more results.</p></div></article>';
  if (productCount) productCount.textContent = `${productsToRender.length} item${productsToRender.length === 1 ? "" : "s"}`;
  if (catalogHeading) catalogHeading.textContent = label;
}

function getCatalogLabel() {
  if (filterState.query) return `Search results for "${filterState.query}"`;
  if (filterState.quick === "deal") return "Best deals";
  if (filterState.quick !== "all") return `${filterState.quick.charAt(0).toUpperCase()}${filterState.quick.slice(1)} picks`;
  if (filterState.category !== "all") return `${filterState.category.charAt(0).toUpperCase()}${filterState.category.slice(1)} products`;
  return "All products";
}

function renderFilterGroups() {
  const groups = [
    ["categoryFilters", categoryFilters, "category", filterState.category],
    ["priceFilters", priceFilters, "price", filterState.price],
    ["ratingFilters", ratingFilters, "rating", filterState.rating],
    ["discountFilters", discountFilters, "discount", filterState.discount]
  ];
  groups.forEach(([id, items, type, value]) => {
    const host = document.getElementById(id);
    if (host) host.innerHTML = createFilterButtons(items, type, value);
  });
}

function syncQuickFilters() {
  document.querySelectorAll("[data-quick-filter]").forEach((button) => button.classList.toggle("active", button.dataset.quickFilter === filterState.quick));
}

function refreshCatalog() {
  updateCatalog(products.filter(productMatchesFilters), getCatalogLabel());
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
      filterState[filterButton.dataset.filterType] = filterButton.dataset.filterValue;
      refreshCatalog();
    }
  });

  const clearFilters = document.getElementById("clearFilters");
  if (clearFilters) {
    clearFilters.addEventListener("click", () => {
      Object.assign(filterState, { quick: "all", category: "all", price: "all", rating: "all", discount: "all", query: "" });
      const searchInput = document.querySelector('.nav-search input[name="q"]');
      if (searchInput) searchInput.value = "";
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
    if (searchInput) searchInput.value = query;
  }
  if (deal === "top") filterState.quick = "deal";
  refreshCatalog();
}

function attachLoadingButtons() {
  document.querySelectorAll("[data-loading-button]").forEach((button) => {
    if (button.dataset.bound === "true") return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = "Added";
      setTimeout(() => {
        button.disabled = false;
        button.textContent = originalText;
      }, 900);
    });
  });
}

function attachMobileNav() {
  const toggle = document.querySelector(".mobile-nav-toggle");
  const panel = document.getElementById("navPanel");
  if (!toggle || !panel) return;
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("is-open", !isOpen);
  });
}

function renderDashboardStats() {
  const host = document.getElementById("dashboardStats");
  if (!host) return;
  host.innerHTML = dashboardStats.map((item) => `<article class="metric-card"><div class="metric-top"><span class="metric-label">${item.label}</span><span class="metric-icon">${item.icon}</span></div><strong>${item.value}</strong><div class="metric-change">${item.change}</div></article>`).join("");
}

function renderSalesChart() {
  const host = document.getElementById("salesChart");
  if (!host) return;
  host.innerHTML = salesSeries.map((item) => `<div class="chart-bar-group"><div class="chart-bar" style="height:${item.value * 2}px"></div><span class="chart-label">${item.label}</span></div>`).join("");
}

function renderLowStockAlerts() {
  const host = document.getElementById("lowStockAlerts");
  if (!host) return;
  host.innerHTML = lowStockItems.map((item) => `<article class="alert-item"><strong>${item.name}</strong><p>${item.note}</p><div class="alert-meta"><span>${item.stock} units left</span><span>Restock soon</span></div></article>`).join("");
}

function orderRowMarkup(order) {
  return `<tr data-search-row><td>${order.id}</td><td>${order.customer}</td><td>${order.product}</td><td><span class="table-status ${order.status}">${order.status}</span></td><td>${formatRupees(order.amount)}</td></tr>`;
}

function productRowMarkup(product) {
  return `<tr data-search-row><td>${product.name}</td><td>${product.shortCategory}</td><td>${product.stock}</td><td>${formatRupees(product.price)}</td><td>${product.rating} \u2605</td></tr>`;
}

function testimonialPreviewMarkup(item) {
  return `<article class="testimonial-preview-card"><strong>${item.name}</strong><p>${item.review.slice(0, 72)}...</p><span class="testimonial-product">${item.product}</span></article>`;
}

function renderDashboardTables() {
  const ordersHost = document.getElementById("ordersTableBody");
  const productsHost = document.getElementById("productsTableBody");
  const previewHost = document.getElementById("testimonialPreview");
  if (ordersHost) ordersHost.innerHTML = orders.map(orderRowMarkup).join("");
  if (productsHost) productsHost.innerHTML = products.map(productRowMarkup).join("");
  if (previewHost) previewHost.innerHTML = testimonials.slice(0, 3).map(testimonialPreviewMarkup).join("");
}

function renderTestimonialsPage(items = testimonials) {
  const host = document.getElementById("testimonialsGrid");
  if (!host) return;
  host.innerHTML = items.map((item) => `<article class="testimonial-card"><div class="testimonial-card-top"><div class="testimonial-user"><span class="testimonial-avatar">${item.initials}</span><div><strong>${item.name}</strong><span class="testimonial-product">${item.product}</span></div></div><span class="status-badge ${item.status.toLowerCase()}">${item.status}</span></div><div class="testimonial-meta"><span class="testimonial-rating">${"\u2605".repeat(item.rating)}</span><span class="testimonial-product">${item.tone}</span></div><p>${item.review}</p><div class="testimonial-card-footer"><span class="panel-link">Customer review</span><span class="testimonial-product">Verified buyer</span></div></article>`).join("");
}

function attachSidebarToggle() {
  const layout = document.querySelector(".vendor-layout");
  const sidebar = document.querySelector("[data-sidebar]");
  const toggle = document.querySelector("[data-sidebar-toggle]");
  if (!layout || !sidebar || !toggle) return;
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("is-collapsed");
    layout.classList.toggle("sidebar-collapsed");
  });
}

function attachNotificationDropdown() {
  const button = document.querySelector("[data-notification-toggle]");
  const menu = document.querySelector("[data-notification-menu]");
  if (!button || !menu) return;
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    menu.hidden = expanded;
  });
  document.addEventListener("click", (event) => {
    if (!menu.hidden && !event.target.closest(".notification-wrap")) {
      button.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }
  });
}

function attachFloatingActions() {
  const fab = document.querySelector("[data-fab]");
  const toggle = document.querySelector("[data-fab-toggle]");
  if (!fab || !toggle) return;
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    fab.classList.toggle("is-open", !expanded);
  });
}

function attachMenuHighlight() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-menu-item]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const isCurrent = href === currentPage || (currentPage === "dashboard.html" && href === "dashboard.html") || (currentPage === "testimonials.html" && href === "testimonials.html");
    if (isCurrent || (currentPage === "dashboard.html" && href.startsWith("#"))) {
      if (href === currentPage || href === "dashboard.html" && currentPage === "dashboard.html" || href === "testimonials.html" && currentPage === "testimonials.html") {
        link.classList.add("is-active");
      }
    }
  });
}

function attachBottomNavState() {
  document.querySelectorAll("[data-bottom-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-bottom-nav]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
    });
  });
}

function attachDashboardSearch() {
  const input = document.querySelector("[data-dashboard-search]");
  if (!input) return;
  const rows = Array.from(document.querySelectorAll("[data-search-row]"));
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    rows.forEach((row) => {
      row.hidden = !row.textContent.toLowerCase().includes(query);
    });
  });
}

function attachTestimonialSearch() {
  const input = document.querySelector("[data-testimonial-search]");
  if (!input) return;
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    const filtered = testimonials.filter((item) => [item.name, item.product, item.review, item.status].some((value) => value.toLowerCase().includes(query)));
    renderTestimonialsPage(filtered);
  });
}

function renderVendorDashboard() {
  renderDashboardStats();
  renderSalesChart();
  renderLowStockAlerts();
  renderDashboardTables();
  attachDashboardSearch();
}

const page = document.body.dataset.page;
attachMobileNav();
attachLoadingButtons();
attachSidebarToggle();
attachNotificationDropdown();
attachFloatingActions();
attachMenuHighlight();
attachBottomNavState();

if (page === "home") renderHomePage();
if (page === "products") renderProductsPage();
if (page === "dashboard") renderVendorDashboard();
if (page === "testimonials") {
  renderTestimonialsPage();
  attachTestimonialSearch();
}
