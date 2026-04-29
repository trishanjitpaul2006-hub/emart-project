const PRODUCT_KEY = "emartProducts";
const CART_KEY = "emartCart";
const ORDER_KEY = "emartOrders";
const ROLE_KEY = "emartRole";
const USER_KEY = "emartUser";
const USER_LIST_KEY = "emartUsers";
const DEAL_END_KEY = "emartDealEndTime";
const RAZORPAY_CHECKOUT_URL = "https://checkout.razorpay.com/v1/checkout.js";
const RAZORPAY_TEST_KEY = "rzp_test_YOUR_KEY_HERE";
const ADMIN_PASSWORD = "admin123";
const DEMO_CUSTOMER = { email: "customer@emart.com", password: "customer123", name: "Customer Demo" };
const DEMO_VENDOR = { email: "vendor@emart.com", password: "vendor123", name: "Vendor Demo" };
const DEMO_ADMIN = { username: "admin", password: "admin123", name: "Admin", email: "admin@emart.com" };

const categories = [
  {
    name: "Electronics",
    description: "Audio, wearables, smart essentials",
    value: "electronics",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Fashion",
    description: "Modern fits and elevated basics",
    value: "fashion",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Home & Kitchen",
    description: "Useful upgrades for every room",
    value: "home-kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Beauty",
    description: "Premium daily care picks",
    value: "beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Sports",
    description: "Active gear and training picks",
    value: "sports",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Books",
    description: "Smart reads for study and focus",
    value: "books",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Accessories",
    description: "Everyday carry and style extras",
    value: "accessories",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=85"
  }
];

const DEMO_PRODUCTS = [
  {
    id: "grand-deal-earbuds",
    name: "Wireless Bluetooth Earbuds",
    category: "electronics",
    price: 999,
    oldPrice: 2999,
    discount: 67,
    stock: 40,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=90",
    description: "Grand Deal earbuds with glossy charging case, deep bass, clear calls, and all-day comfort."
  },
  {
    id: "demo-wireless-bluetooth-earbuds",
    name: "Wireless Bluetooth Earbuds",
    category: "electronics",
    price: 1299,
    oldPrice: 2499,
    discount: 45,
    stock: 34,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=85",
    description: "Glossy true wireless earbuds with rich bass, clear calls, and a pocket-friendly charging case."
  },
  {
    id: "demo-smart-watch",
    name: "Smart Watch",
    category: "electronics",
    price: 2499,
    oldPrice: 3999,
    discount: 35,
    stock: 21,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    description: "Premium fitness smartwatch with health tracking, bright display, and all-day battery support."
  },
  {
    id: "demo-gaming-keyboard",
    name: "Gaming Keyboard",
    category: "electronics",
    price: 1799,
    oldPrice: 2999,
    discount: 40,
    stock: 18,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=900&q=85",
    description: "Mechanical-style RGB keyboard built for fast typing, smooth gaming, and a sharp desk setup."
  },
  {
    id: "demo-men-sneakers",
    name: "Men Sneakers",
    category: "fashion",
    price: 1799,
    oldPrice: 3599,
    discount: 50,
    stock: 27,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    description: "Lightweight street sneakers with cushioned soles and a clean finish for everyday outfits."
  },
  {
    id: "demo-women-handbag",
    name: "Women Handbag",
    category: "fashion",
    price: 2499,
    oldPrice: 3999,
    discount: 35,
    stock: 16,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    description: "Elegant structured handbag with premium texture, roomy storage, and polished metal accents."
  },
  {
    id: "demo-bluetooth-speaker",
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 999,
    oldPrice: 1999,
    discount: 50,
    stock: 30,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
    description: "Portable speaker with punchy sound, modern styling, and splash-resistant party-ready design."
  },
  {
    id: "demo-coffee-mug-set",
    name: "Coffee Mug Set",
    category: "home-kitchen",
    price: 799,
    oldPrice: 999,
    discount: 20,
    stock: 55,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=900&q=85",
    description: "Minimal ceramic mug set with a glossy finish, perfect for coffee corners and gifting."
  },
  {
    id: "demo-skincare-kit",
    name: "Skincare Kit",
    category: "beauty",
    price: 1299,
    oldPrice: 1999,
    discount: 35,
    stock: 24,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    description: "Daily glow skincare combo with cleanser, serum, and moisturizer for a fresh routine."
  },
  {
    id: "demo-sports-shoes",
    name: "Sports Shoes",
    category: "sports",
    price: 3999,
    oldPrice: 6999,
    discount: 45,
    stock: 19,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=85",
    description: "High-energy running shoes with breathable mesh, soft cushioning, and grippy outsoles."
  },
  {
    id: "demo-travel-backpack",
    name: "Travel Backpack",
    category: "accessories",
    price: 999,
    oldPrice: 1799,
    discount: 45,
    stock: 38,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    description: "Smart everyday backpack with laptop space, clean pockets, and a durable urban look."
  },
  {
    id: "demo-study-lamp",
    name: "Study Lamp",
    category: "home-kitchen",
    price: 499,
    oldPrice: 799,
    discount: 35,
    stock: 48,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    description: "Adjustable desk lamp with focused warm light for late study sessions and tidy workspaces."
  },
  {
    id: "demo-productivity-notebook",
    name: "Productivity Notebook",
    category: "books",
    price: 499,
    oldPrice: 999,
    discount: 50,
    stock: 60,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85",
    description: "Premium study notebook with smooth pages, sturdy binding, and a clean planning layout."
  }
];

const filterState = { quick: "all", query: "", sort: "newest", price: "all" };

function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  // TODO: Replace localStorage with backend API later.
  localStorage.setItem(key, JSON.stringify(value));
}

function getCurrentRole() {
  return localStorage.getItem(ROLE_KEY) || localStorage.getItem("emartUserRole") || "";
}

function getCurrentUser() {
  return readStorage(USER_KEY, null) || readStorage("emartCurrentUser", null);
}

function setSession(role, user) {
  localStorage.setItem(ROLE_KEY, role);
  const sessionUser = { role, ...user };
  writeStorage(USER_KEY, sessionUser);
  const users = getUsers();
  const key = sessionUser.email || sessionUser.username;
  if (key && !users.some((item) => (item.email || item.username) === key)) {
    users.push(sessionUser);
    saveUsers(users);
  }
}

function requireRole(role) {
  if (getCurrentRole() !== role) {
    alert(role === "admin" ? "Admin access required" : "Access denied");
    window.location.href = "login.html";
    return false;
  }
  return true;
}

function requireAnyRole(roles) {
  if (!roles.includes(getCurrentRole())) {
    alert(roles.length === 1 && roles[0] === "admin" ? "Admin access required" : "Access denied");
    window.location.href = "login.html";
    return false;
  }
  return true;
}

function protectCurrentPage() {
  const page = document.body.dataset.page;
  const vendorPages = ["vendor-dashboard", "add-product", "manage-products", "vendor-orders", "dashboard"];
  const adminPages = ["admin-dashboard"];
  if (vendorPages.includes(page)) requireAnyRole(["vendor", "admin"]);
  if (adminPages.includes(page)) requireRole("admin");
}

function protectPage() {
  return protectCurrentPage();
}

function loginCustomer(event) {
  if (event) event.preventDefault();
  const email = document.getElementById("customerEmail")?.value.trim();
  const password = document.getElementById("customerPassword")?.value;
  const message = document.getElementById("customerLoginMessage");
  if (email === DEMO_CUSTOMER.email && password === DEMO_CUSTOMER.password) {
    setSession("customer", { id: "customer-demo", email, name: DEMO_CUSTOMER.name });
    showFormMessage(message, "Login successful, redirecting...", "success");
    setTimeout(() => window.location.href = "index.html", 450);
    return;
  }
  showFormMessage(message, "Wrong email or password.", "error");
}

function loginVendor(event) {
  if (event) event.preventDefault();
  const email = document.getElementById("vendorEmail")?.value.trim();
  const password = document.getElementById("vendorPassword")?.value;
  const message = document.getElementById("vendorLoginMessage");
  if (email === DEMO_VENDOR.email && password === DEMO_VENDOR.password) {
    setSession("vendor", { id: "vendor-demo", email, name: DEMO_VENDOR.name });
    ensureDemoVendor();
    showFormMessage(message, "Login successful, redirecting...", "success");
    setTimeout(() => window.location.href = "vendor-dashboard.html", 450);
    return;
  }
  showFormMessage(message, "Wrong email or password.", "error");
}

function loginAdmin(event) {
  if (event) event.preventDefault();
  const username = document.getElementById("adminUsername")?.value.trim();
  const password = document.getElementById("adminPassword")?.value;
  const message = document.getElementById("adminLoginMessage");
  if (username === DEMO_ADMIN.username && password === DEMO_ADMIN.password) {
    setSession("admin", { id: "admin-demo", username, email: DEMO_ADMIN.email, name: DEMO_ADMIN.name });
    showFormMessage(message, "Login successful, redirecting...", "success");
    setTimeout(() => window.location.href = "admin-dashboard.html", 450);
    return;
  }
  showFormMessage(message, "Wrong username or password.", "error");
}

function logoutUser() {
  localStorage.removeItem(ROLE_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem("emartUserRole");
  localStorage.removeItem("emartCurrentUser");
  localStorage.removeItem("emartAdminSession");
  window.location.href = "login.html";
}

function checkAdmin() {
  return getCurrentRole() === "admin";
}

function adminLogin(event) {
  return loginAdmin(event);
}

function adminLogout() {
  logoutUser();
}

function showFormMessage(node, text, type) {
  if (!node) return;
  node.textContent = text;
  node.className = `form-message ${type}`;
}

function getProducts() {
  return readStorage(PRODUCT_KEY, []);
}

function saveProducts(products) {
  writeStorage(PRODUCT_KEY, products);
}

function getUsers() {
  const stored = readStorage(USER_LIST_KEY, []);
  const defaults = [
    { id: "customer-demo", name: DEMO_CUSTOMER.name, email: DEMO_CUSTOMER.email, role: "customer" },
    { id: "vendor-demo", name: DEMO_VENDOR.name, email: DEMO_VENDOR.email, role: "vendor" },
    { id: "admin-demo", name: DEMO_ADMIN.name, username: DEMO_ADMIN.username, email: DEMO_ADMIN.email, role: "admin" }
  ];
  defaults.forEach((user) => {
    const key = user.email || user.username;
    if (!stored.some((item) => (item.email || item.username) === key)) stored.push(user);
  });
  return stored;
}

function saveUsers(users) {
  writeStorage(USER_LIST_KEY, users);
}

function normalizeCategory(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (normalized === "home") return "home-kitchen";
  const match = categories.find((category) => category.name.toLowerCase() === normalized || category.value === normalized);
  if (match) return match.value;
  return normalized;
}

function ensureDemoProducts() {
  const products = getProducts();
  const existingIds = new Set(products.map((product) => String(product.id)));
  const existingNames = new Set(products.map((product) => String(product.name || "").trim().toLowerCase()));
  let changed = false;

  products.forEach((product) => {
    const category = normalizeCategory(product.category);
    if (product.category !== category) {
      product.category = category;
      changed = true;
    }
    if (!product.rating) {
      product.rating = Number((4.2 + (Math.abs(String(product.id).length % 7) / 10)).toFixed(1));
      changed = true;
    }
    if (!product.sold) {
      product.sold = 0;
      changed = true;
    }
  });

  DEMO_PRODUCTS.forEach((product, index) => {
    const productName = product.name.trim().toLowerCase();
    if (existingIds.has(product.id) || existingNames.has(productName)) return;
    products.push({
      ...product,
      vendorEmail: DEMO_VENDOR.email,
      createdAt: Date.now() - index * 60000,
      rating: Number((4.3 + ((index % 6) / 10)).toFixed(1)),
      sold: 0,
      demoProduct: true
    });
    existingIds.add(product.id);
    existingNames.add(productName);
    changed = true;
  });

  if (changed) saveProducts(products);
}

function getOrders() {
  return readStorage(ORDER_KEY, []);
}

function saveOrders(orders) {
  writeStorage(ORDER_KEY, orders);
}

function getCart() {
  return readStorage(CART_KEY, []);
}

function saveCart(cart) {
  writeStorage(CART_KEY, cart);
  updateCartCount();
}

function getVisibleProductsForRole() {
  const role = getCurrentRole();
  const user = getCurrentUser();
  const products = getProducts();
  if (role === "vendor") return products.filter((product) => product.vendorEmail === user?.email);
  return products;
}

function createProductFromForm(form) {
  const formData = new FormData(form);
  const editingId = form.dataset.editingId;
  const existing = getProducts().find((item) => String(item.id) === String(editingId));
  const currentUser = getCurrentUser();
  return {
    id: editingId || `prod-${Date.now()}`,
    vendorEmail: existing?.vendorEmail || currentUser?.email || DEMO_VENDOR.email,
    name: (formData.get("name") || "").trim(),
    category: normalizeCategory(formData.get("category")),
    price: Number(formData.get("price") || 0),
    oldPrice: Number(formData.get("oldPrice") || 0),
    discount: Number(formData.get("discount") || 0),
    stock: Number(formData.get("stock") || 0),
    image: (formData.get("image") || "").trim(),
    description: (formData.get("description") || "").trim(),
    rating: existing?.rating || 4.5,
    sold: existing?.sold || 0,
    createdAt: existing?.createdAt || Date.now()
  };
}

function saveProduct(event) {
  if (event) event.preventDefault();
  if (!requireAnyRole(["vendor", "admin"])) return;
  const form = document.getElementById("addProductForm");
  const message = document.getElementById("productFormMessage");
  if (!form) return;
  const product = createProductFromForm(form);
  if (!product.name || !product.category || product.price <= 0 || product.stock < 0 || !product.image || !product.description) {
    showFormMessage(message, "Please fill all required product details.", "error");
    return;
  }
  const products = getProducts();
  const index = products.findIndex((item) => String(item.id) === String(product.id));
  if (index >= 0) products[index] = product;
  else products.unshift(product);
  saveProducts(products);
  form.reset();
  updateImagePreview();
  delete form.dataset.editingId;
  form.querySelector("button[type='submit']").textContent = "Save Product";
  showFormMessage(message, index >= 0 ? "Product updated successfully." : "Product saved successfully.", "success");
  renderRoleDashboards();
}

function addToCart(productId) {
  if (getCurrentRole() !== "customer") {
    window.location.href = "login.html?next=cart";
    return;
  }
  const product = getProducts().find((item) => String(item.id) === String(productId));
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((item) => String(item.id) === String(productId));
  if (existing) existing.quantity += 1;
  else cart.push({ id: product.id, quantity: 1 });
  saveCart(cart);
  renderCart();
  showToast("Product added to cart");
}

function buyNow(productId) {
  addToCart(productId);
  if (getCurrentRole() === "customer") window.location.href = "cart.html";
}

function heroDealBuyNow(productId) {
  const button = document.querySelector("[data-hero-buy-now]");
  if (button?.disabled) return;
  buyNow(productId);
}

function getDealEndTime() {
  const stored = Number(localStorage.getItem(DEAL_END_KEY) || 0);
  if (stored && stored > Date.now()) return stored;
  const nextEnd = Date.now() + 2.5 * 60 * 60 * 1000;
  localStorage.setItem(DEAL_END_KEY, String(nextEnd));
  return nextEnd;
}

function formatCountdown(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function initHeroDealCountdown() {
  const countdown = document.getElementById("dealCountdown");
  const button = document.querySelector("[data-hero-buy-now]");
  if (!countdown || !button) return;
  const endTime = getDealEndTime();

  const tick = () => {
    const remaining = endTime - Date.now();
    if (remaining <= 0) {
      countdown.textContent = "Deal expired";
      button.textContent = "Deal Expired";
      button.disabled = true;
      button.classList.add("is-disabled");
      return;
    }
    countdown.textContent = formatCountdown(remaining);
  };

  tick();
  const timer = setInterval(() => {
    tick();
    if (button.disabled) clearInterval(timer);
  }, 1000);
}

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + Number(item.quantity || 0), 0);
  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    badge.textContent = count;
    badge.hidden = count === 0;
  });
}

function increaseQuantity(productId) {
  if (!requireRole("customer")) return;
  saveCart(getCart().map((item) => String(item.id) === String(productId) ? { ...item, quantity: item.quantity + 1 } : item));
  renderCart();
}

function decreaseQuantity(productId) {
  if (!requireRole("customer")) return;
  saveCart(getCart().map((item) => String(item.id) === String(productId) ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0));
  renderCart();
}

function removeFromCart(productId) {
  if (!requireRole("customer")) return;
  saveCart(getCart().filter((item) => String(item.id) !== String(productId)));
  renderCart();
}

function loadRazorpayCheckout() {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) return resolve();
    const script = document.createElement("script");
    script.src = RAZORPAY_CHECKOUT_URL;
    script.onload = resolve;
    script.onerror = () => reject(new Error("Unable to load Razorpay checkout"));
    document.body.append(script);
  });
}

function currentCartItems() {
  const products = getProducts();
  return getCart().map((cartItem) => {
    const product = products.find((item) => String(item.id) === String(cartItem.id));
    return product ? { productId: product.id, id: product.id, vendorEmail: product.vendorEmail, name: product.name, price: product.price, quantity: cartItem.quantity } : null;
  }).filter(Boolean);
}

async function openRazorpayCheckout(total, items) {
  await loadRazorpayCheckout();
  const user = getCurrentUser();

  return new Promise((resolve, reject) => {
    // Replace frontend Razorpay test key with backend-generated order later for production security.
    const razorpay = new window.Razorpay({
      key: RAZORPAY_TEST_KEY,
      amount: Math.round(total * 100),
      currency: "INR",
      name: "EMART",
      description: "Product Purchase",
      prefill: {
        name: user?.name || "",
        email: user?.email || ""
      },
      notes: { product_count: String(items.length) },
      theme: { color: "#FF7A00" },
      handler: (response) => resolve(response),
      modal: {
        ondismiss: () => reject(new Error("Payment cancelled"))
      }
    });
    razorpay.open();
  });
}

function saveOrderAfterPayment(payment, items, total) {
  const user = getCurrentUser();
  const orders = getOrders();
  const order = {
    id: `order-${Date.now()}`,
    customerEmail: user?.email || "",
    items,
    total,
    paymentId: payment.razorpay_payment_id || `demo-pay-${Date.now()}`,
    status: "Paid",
    createdAt: Date.now()
  };
  orders.unshift(order);
  saveOrders(orders);
  const products = getProducts();
  items.forEach((item) => {
    const product = products.find((entry) => String(entry.id) === String(item.productId || item.id));
    if (product) {
      product.sold = Number(product.sold || 0) + Number(item.quantity || 1);
      product.stock = Math.max(0, Number(product.stock || 0) - Number(item.quantity || 1));
    }
  });
  saveProducts(products);
  return order;
}

function checkoutWithRazorpay() {
  return placeOrder();
}

async function placeOrder() {
  if (!requireRole("customer")) return;
  const items = currentCartItems();
  if (!items.length) return;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  showToast("Opening secure payment...");
  try {
    const payment = await openRazorpayCheckout(total, items);
    const order = saveOrderAfterPayment(payment, items, total);
    saveCart([]);
    renderCart();
    showToast("Payment successful. Order confirmed.");
    setTimeout(() => window.location.href = `order-success.html?id=${encodeURIComponent(order.id)}`, 600);
  } catch (error) {
    showToast(error.message || "Payment failed");
  }
}

function renderOrderConfirmation() {
  const host = document.getElementById("orderConfirmation");
  if (!host) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const order = getOrders().find((item) => String(item.id) === String(id));
  if (!order) {
    host.innerHTML = `<span class="eyebrow">Order</span><h1>Order not found</h1><p class="product-subtle">Your order may still be syncing from the backend.</p><a class="primary-button" href="products.html">Continue Shopping</a>`;
    return;
  }
  host.innerHTML = `<span class="eyebrow">Payment success</span><h1>Order confirmed</h1><p>Your EMART order #${escapeHtml(order.id)} has been saved successfully.</p><div class="summary-line"><span>Total paid</span><strong>${formatRupees(order.total || order.total_amount)}</strong></div><div class="summary-line"><span>Status</span><strong>${escapeHtml(order.status)}</strong></div><div class="hero-actions"><a class="primary-button" href="products.html">Continue Shopping</a><a class="secondary-button" href="cart.html">View Orders</a></div>`;
}

function deleteProduct(productId) {
  const role = getCurrentRole();
  const user = getCurrentUser();
  const product = getProducts().find((item) => String(item.id) === String(productId));
  if (!product) return;
  if (role !== "admin" && !(role === "vendor" && product.vendorEmail === user?.email)) {
    alert("Access denied");
    return;
  }
  saveProducts(getProducts().filter((item) => String(item.id) !== String(productId)));
  saveCart(getCart().filter((item) => String(item.id) !== String(productId)));
  renderProducts();
  renderRoleDashboards();
  showToast("Product deleted");
}

function editProduct(productId) {
  const role = getCurrentRole();
  const user = getCurrentUser();
  const product = getProducts().find((item) => String(item.id) === String(productId));
  if (!product) return;
  if (role !== "admin" && !(role === "vendor" && product.vendorEmail === user?.email)) {
    alert("Access denied");
    return;
  }
  const form = document.getElementById("addProductForm");
  if (!form) {
    window.location.href = `add-product.html?edit=${encodeURIComponent(productId)}`;
    return;
  }
  form.dataset.editingId = product.id;
  form.elements.name.value = product.name;
  form.elements.category.value = product.category;
  form.elements.price.value = product.price;
  form.elements.oldPrice.value = product.oldPrice;
  form.elements.discount.value = product.discount;
  form.elements.stock.value = product.stock;
  form.elements.image.value = product.image;
  form.elements.description.value = product.description;
  form.querySelector("button[type='submit']").textContent = "Update Product";
  updateImagePreview();
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function formatRupees(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number(value || 0));
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function productImage(product) {
  return escapeHtml(product.image || "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80");
}

function categoryLabel(value) {
  const match = categories.find((item) => item.value === value);
  return match ? match.name : value ? value.charAt(0).toUpperCase() + value.slice(1) : "General";
}

function productCard(product) {
  const description = product.description || "";
  return `<article class="product-card real-product-card">
    <a class="product-visual product-image-card" href="product-details.html?id=${encodeURIComponent(product.id)}">
      <img src="${productImage(product)}" alt="${escapeHtml(product.name)}" loading="lazy" />
      ${product.discount ? `<span class="discount-tag">${product.discount}% OFF</span>` : ""}
    </a>
    <div class="product-card-body">
      <div class="product-card-meta"><span class="product-subtle">${escapeHtml(categoryLabel(product.category))}</span><span class="rating-pill">★ ${Number(product.rating || 4.5).toFixed(1)}</span></div>
      <h3>${escapeHtml(product.name)}</h3>
      <p>${escapeHtml(description).slice(0, 92)}${description.length > 92 ? "..." : ""}</p>
      <div class="price-row"><span class="price-badge">${formatRupees(product.price)}</span>${product.oldPrice ? `<span class="old-price">${formatRupees(product.oldPrice)}</span>` : ""}</div>
      <span class="stock-pill">${Number(product.stock) > 0 ? `${product.stock} in stock` : "Out of stock"}</span>
      <div class="product-bottom">
        <button class="action-button" type="button" data-add-cart="${escapeHtml(product.id)}">Add to Cart</button>
        <a class="secondary-button compact-button" href="product-details.html?id=${encodeURIComponent(product.id)}">View Details</a>
      </div>
    </div>
  </article>`;
}

function dealStripCard(product, label) {
  if (!product) return "";
  return `<article class="deal-strip-card glass-panel"><img src="${productImage(product)}" alt="${escapeHtml(product.name)}" /><div><span class="eyebrow">${label}</span><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(categoryLabel(product.category))} | ${Number(product.rating || 4.5).toFixed(1)} rating</p><strong>${formatRupees(product.price)}</strong></div><a class="secondary-button compact-button" href="product-details.html?id=${encodeURIComponent(product.id)}">View</a></article>`;
}

function emptyProductsMarkup() {
  return `<article class="empty-state glass-panel"><span class="eyebrow">No products</span><h3>No products added yet.</h3>${["vendor", "admin"].includes(getCurrentRole()) ? '<a class="primary-button" href="add-product.html">Add Product</a>' : ""}</article>`;
}

function renderProducts(hostId, productsToRender = getProducts()) {
  const host = document.getElementById(hostId || "allProducts");
  if (!host) return;
  host.innerHTML = productsToRender.length ? productsToRender.map(productCard).join("") : emptyProductsMarkup();
}

function renderCategoryRow() {
  const host = document.getElementById("categoryRow");
  if (!host) return;
  const activeCategory = normalizeCategory(new URLSearchParams(window.location.search).get("category") || "");
  host.innerHTML = categories.map((category) => `<a class="category-card ${activeCategory === category.value ? "active" : ""}" href="products.html?category=${encodeURIComponent(category.value)}" data-category="${escapeHtml(category.name)}" data-category-card="${category.value}">
    <img src="${category.image}" alt="${escapeHtml(category.name)} products" loading="lazy" />
    <div class="category-card-copy">
      <span class="category-icon">${category.name.charAt(0)}</span>
      <div><h3>${category.name}</h3><p>${category.description}</p></div>
    </div>
  </a>`).join("");
}

function applyProductFilters() {
  const query = filterState.query.toLowerCase();
  let filtered = getProducts().filter((product) => {
    const queryMatch = !query || [product.name, product.category, product.description].some((value) => String(value).toLowerCase().includes(query));
    const quickMatch = filterState.quick === "all" || (filterState.quick === "deal" ? Number(product.discount) > 0 : product.category === filterState.quick);
    const price = Number(product.price || 0);
    const priceMatch = filterState.price === "all" || (filterState.price === "under999" ? price <= 999 : filterState.price === "1000-2499" ? price >= 1000 && price <= 2499 : price >= 2500);
    return queryMatch && quickMatch && priceMatch;
  });
  if (filterState.sort === "price-low") filtered.sort((a, b) => a.price - b.price);
  if (filterState.sort === "price-high") filtered.sort((a, b) => b.price - a.price);
  if (filterState.sort === "discount") filtered.sort((a, b) => b.discount - a.discount);
  if (filterState.sort === "rating") filtered.sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0));
  if (filterState.sort === "newest") filtered.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  return filtered;
}

function updateProductPage() {
  const filtered = applyProductFilters();
  renderProducts("allProducts", filtered);
  const productCount = document.getElementById("productCount");
  const catalogHeading = document.getElementById("catalogHeading");
  if (productCount) productCount.textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"}`;
  if (catalogHeading) catalogHeading.textContent = filterState.query ? `Search results for "${filterState.query}"` : "All products";
}

function renderHomePage() {
  const products = getProducts();
  renderCategoryRow();
  const sortedDeals = [...products].filter((item) => Number(item.discount) > 0).sort((a, b) => b.discount - a.discount);
  const todayDeal = sortedDeals[0] || products[0];
  renderProducts("featuredProducts", products.slice(0, 4));
  renderProducts("bestDeals", sortedDeals.slice(0, 3));
  renderProducts("under999Products", products.filter((item) => Number(item.price) <= 999).slice(0, 4));
  renderProducts("topDiscountProducts", sortedDeals.slice(0, 4));
  const todayHost = document.getElementById("todayBestDeal");
  if (todayHost) todayHost.innerHTML = dealStripCard(todayDeal, "Today's best deal");
  const vendorHost = document.getElementById("localVendorMarketplace");
  if (vendorHost) vendorHost.innerHTML = `<article class="marketplace-card glass-panel"><span class="eyebrow">Local Vendor Marketplace</span><h2>${new Set(products.map((item) => item.vendorEmail).filter(Boolean)).size || 1} active seller${products.length === 1 ? "" : "s"}</h2><p>EMART helps small vendors list products, track stock, and manage orders from one simple dashboard.</p><a class="primary-button" href="login.html">Start Selling</a></article>`;
  const stat = document.getElementById("homeProductCount");
  if (stat) stat.textContent = products.length;
}

function renderProductsPage() {
  const params = new URLSearchParams(window.location.search);
  filterState.query = (params.get("q") || "").trim();
  filterState.quick = params.get("deal") === "top" ? "deal" : normalizeCategory(params.get("category") || "all");
  filterState.price = params.get("price") || "all";
  const search = document.querySelector('.nav-search input[name="q"]');
  if (search) search.value = filterState.query;
  const pageSearch = document.getElementById("productSearchInput");
  if (pageSearch) pageSearch.value = filterState.query;
  const priceSelect = document.getElementById("priceFilter");
  if (priceSelect) priceSelect.value = filterState.price;
  document.querySelectorAll("[data-quick-filter]").forEach((button) => button.classList.toggle("active", button.dataset.quickFilter === filterState.quick));
  updateProductPage();
}

function renderProductDetails() {
  const host = document.getElementById("productDetails");
  if (!host) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const product = getProducts().find((item) => String(item.id) === String(id));
  if (!product) {
    host.innerHTML = `<article class="empty-state glass-panel"><h1>Product not found</h1><p>This product may have been removed.</p><a class="primary-button" href="products.html">Back to Products</a></article>`;
    return;
  }
  host.innerHTML = `<div class="detail-image glass-panel"><img src="${productImage(product)}" alt="${escapeHtml(product.name)}" /></div>
    <article class="detail-copy glass-panel">
      <span class="eyebrow">${escapeHtml(categoryLabel(product.category))}</span>
      <h1>${escapeHtml(product.name)}</h1>
      <p>${escapeHtml(product.description)}</p>
      <div class="price-row"><span class="price-badge">${formatRupees(product.price)}</span>${product.oldPrice ? `<span class="old-price">${formatRupees(product.oldPrice)}</span>` : ""}${product.discount ? `<span class="discount-tag">${product.discount}% OFF</span>` : ""}</div>
      <div class="detail-trust-grid">
        <span class="trust-pill">★ ${Number(product.rating || 4.5).toFixed(1)} rating</span>
        <span class="trust-pill">${Number(product.stock) > 0 ? `${product.stock} in stock` : "Out of stock"}</span>
        <span class="trust-pill">Fast delivery in 2-5 days</span>
        <span class="trust-pill">7 day easy returns</span>
      </div>
      <p class="product-subtle">Secure Razorpay checkout, responsive customer support, and seller-managed local inventory.</p>
      <div class="hero-actions"><button class="primary-button" type="button" data-add-cart="${escapeHtml(product.id)}">Add to Cart</button><button class="secondary-button" type="button" data-buy-now="${escapeHtml(product.id)}">Buy Now</button><a class="secondary-button" href="products.html">Back to Products</a></div>
    </article>`;
}

function renderCart() {
  const itemsHost = document.getElementById("cartItems");
  const summaryHost = document.getElementById("cartSummary");
  if (!itemsHost || !summaryHost) return;
  const cartItems = getCart().map((cartItem) => {
    const product = getProducts().find((item) => String(item.id) === String(cartItem.id));
    return product ? { ...product, quantity: cartItem.quantity } : null;
  }).filter(Boolean);
  if (!cartItems.length) {
    itemsHost.innerHTML = `<article class="empty-state"><h2>Your cart is empty</h2><p>Add products from the catalog to see them here.</p><a class="primary-button" href="products.html">Shop Products</a></article>`;
    summaryHost.innerHTML = `<h2>Cart total</h2><p class="product-subtle">No items selected.</p><strong class="cart-total">${formatRupees(0)}</strong>${orderHistoryMarkup()}`;
    return;
  }
  itemsHost.innerHTML = cartItems.map((item) => `<article class="cart-row">
    <img src="${productImage(item)}" alt="${escapeHtml(item.name)}" />
    <div><h3>${escapeHtml(item.name)}</h3><span class="product-subtle">${escapeHtml(categoryLabel(item.category))}</span><strong>${formatRupees(item.price)}</strong></div>
    <div class="quantity-control"><button type="button" data-decrease="${escapeHtml(item.id)}">-</button><span>${item.quantity}</span><button type="button" data-increase="${escapeHtml(item.id)}">+</button></div>
    <button class="ghost-button" type="button" data-remove-cart="${escapeHtml(item.id)}">Remove</button>
  </article>`).join("");
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  summaryHost.innerHTML = `<span class="eyebrow">Order summary</span><h2>Cart total</h2><div class="summary-line"><span>Items</span><strong>${cartItems.reduce((sum, item) => sum + item.quantity, 0)}</strong></div><div class="summary-line"><span>Total</span><strong>${formatRupees(total)}</strong></div><button class="primary-button checkout-button" type="button" data-place-order>Pay Now</button><p class="form-message" id="orderMessage"></p>${orderHistoryMarkup()}`;
}

function orderHistoryMarkup() {
  const user = getCurrentUser();
  if (!user) return "";
  const orders = getOrders().filter((order) => order.customerEmail === user.email || Number(order.user_id) === Number(user.id)).slice(0, 4);
  if (!orders.length) return `<div class="order-history" id="orders"><h3>Order history</h3><p class="product-subtle">Paid orders will appear here after checkout.</p></div>`;
  return `<div class="order-history" id="orders"><h3>Order history</h3>${orders.map((order) => `<article class="order-history-item"><strong>#${escapeHtml(order.id)}</strong><span>${formatRupees(order.total || order.total_amount)} | ${escapeHtml(order.status)}</span></article>`).join("")}</div>`;
}

function dashboardMetric(label, value, note) {
  return `<article class="metric-card"><div class="metric-top"><span class="metric-label">${label}</span></div><strong>${value}</strong><div class="metric-change">${note}</div></article>`;
}

function productRows(products, allowActions = true) {
  return products.map((product) => `<tr data-search-row>
    <td><img class="table-product-image" src="${productImage(product)}" alt="${escapeHtml(product.name)}" /></td>
    <td>${escapeHtml(product.name)}</td>
    <td>${escapeHtml(categoryLabel(product.category))}</td>
    <td>${formatRupees(product.price)}</td>
    <td>${product.stock}</td>
    ${allowActions ? `<td><button class="ghost-button compact-button" type="button" data-edit-product="${escapeHtml(product.id)}">Edit</button><button class="danger-button compact-button" type="button" data-delete-product="${escapeHtml(product.id)}">Delete</button></td>` : ""}
  </tr>`).join("") || `<tr><td colspan="${allowActions ? 6 : 5}">No products added yet.</td></tr>`;
}

function vendorOrderTotal(order, vendorEmail) {
  return (order.items || []).filter((item) => !vendorEmail || item.vendorEmail === vendorEmail).reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0);
}

function orderRows(orders, options = {}) {
  const { editable = false, vendorEmail = "" } = options;
  return orders.map((order) => {
    const visibleItems = vendorEmail ? (order.items || []).filter((item) => item.vendorEmail === vendorEmail) : (order.items || []);
    const total = vendorEmail ? vendorOrderTotal(order, vendorEmail) : (order.total || order.total_amount);
    const statusCell = editable ? `<select class="status-select" data-order-status="${escapeHtml(order.id)}">${["Paid", "Pending", "Packed", "Shipped", "Delivered"].map((status) => `<option value="${status}" ${order.status === status ? "selected" : ""}>${status}</option>`).join("")}</select>` : escapeHtml(order.status);
    return `<tr data-search-row><td>${escapeHtml(order.id)}</td><td>${escapeHtml(order.customerEmail)}</td><td>${visibleItems.map((item) => escapeHtml(item.name)).join(", ")}</td><td>${formatRupees(total)}</td><td>${statusCell}</td></tr>`;
  }).join("") || `<tr><td colspan="5">No orders yet.</td></tr>`;
}

function renderVendorDashboard() {
  const user = getCurrentUser();
  const products = getVisibleProductsForRole();
  const orders = getOrders().filter((order) => order.items.some((item) => item.vendorEmail === user?.email));
  const stock = products.reduce((sum, product) => sum + Number(product.stock || 0), 0);
  const lowStock = products.filter((product) => Number(product.stock) <= 5);
  const earnings = orders.reduce((sum, order) => sum + vendorOrderTotal(order, user?.email), 0);
  const bestSelling = [...products].sort((a, b) => Number(b.sold || 0) - Number(a.sold || 0))[0];
  const stats = document.getElementById("dashboardStats");
  if (stats) stats.innerHTML = [dashboardMetric("My Products", products.length, "Vendor catalog"), dashboardMetric("Total Stock", stock, "Available units"), dashboardMetric("Vendor Orders", orders.length, "Orders with your products"), dashboardMetric("Vendor Earnings", formatRupees(earnings), "From paid local orders"), dashboardMetric("Best Seller", bestSelling?.name || "No sales yet", `${bestSelling?.sold || 0} sold`)].join("");
  const lowHost = document.getElementById("lowStockAlerts");
  if (lowHost) lowHost.innerHTML = lowStock.length ? lowStock.map((product) => `<article class="alert-item"><strong>${escapeHtml(product.name)}</strong><p>${product.stock} units left.</p></article>`).join("") : `<article class="empty-state"><p>No low stock products.</p></article>`;
  const recentHost = document.getElementById("recentProducts");
  if (recentHost) recentHost.innerHTML = products.slice(0, 4).map((product) => `<article class="recent-product"><img src="${productImage(product)}" alt="${escapeHtml(product.name)}" /><div><strong>${escapeHtml(product.name)}</strong><span>${formatRupees(product.price)} | ${product.stock} stock</span></div></article>`).join("") || `<article class="empty-state"><p>No products added yet.</p><a class="primary-button" href="add-product.html">Add Product</a></article>`;
  const table = document.getElementById("productsTableBody");
  if (table) table.innerHTML = productRows(products);
  const orderTable = document.getElementById("vendorOrdersBody");
  const bestHost = document.getElementById("bestSellingProduct");
  if (bestHost) bestHost.innerHTML = bestSelling ? `<article class="recent-product"><img src="${productImage(bestSelling)}" alt="${escapeHtml(bestSelling.name)}" /><div><strong>${escapeHtml(bestSelling.name)}</strong><span>${bestSelling.sold || 0} sold | ${formatRupees(bestSelling.price)}</span></div></article>` : `<article class="empty-state"><p>No best-selling product yet.</p></article>`;
  const recentOrders = document.getElementById("recentVendorOrders");
  if (recentOrders) recentOrders.innerHTML = orderRows(orders.slice(0, 5), { vendorEmail: user?.email, editable: true });
  if (orderTable) orderTable.innerHTML = orderRows(orders, { vendorEmail: user?.email, editable: true });
}

function renderAdminDashboard() {
  const products = getProducts();
  const orders = getOrders();
  const users = getUsers();
  const vendors = users.filter((user) => user.role === "vendor");
  const customers = users.filter((user) => user.role === "customer");
  const paidOrders = orders.filter((order) => order.status === "Paid");
  const stats = document.getElementById("adminStats");
  if (stats) stats.innerHTML = [dashboardMetric("Total Products", products.length, "Saved catalog"), dashboardMetric("Total Vendors", vendors.length, "Registered vendors"), dashboardMetric("Total Customers", customers.length, "Registered customers"), dashboardMetric("Total Orders", orders.length, `${paidOrders.length} paid`)].join("");
  const vendorsBody = document.getElementById("vendorsTableBody");
  if (vendorsBody) vendorsBody.innerHTML = vendors.map((vendor) => `<tr><td>${vendor.name}</td><td>${vendor.email}</td><td>${products.filter((item) => item.vendorEmail === vendor.email).length}</td></tr>`).join("");
  const customersBody = document.getElementById("customersTableBody");
  if (customersBody) customersBody.innerHTML = customers.map((customer) => `<tr><td>${customer.name}</td><td>${customer.email}</td><td>${orders.filter((item) => item.customerEmail === customer.email).length}</td></tr>`).join("");
  const productsBody = document.getElementById("adminProductsTableBody");
  if (productsBody) productsBody.innerHTML = productRows(products);
  const ordersBody = document.getElementById("adminOrdersTableBody");
  if (ordersBody) ordersBody.innerHTML = orderRows(orders);
}

function renderRoleDashboards() {
  renderVendorDashboard();
  renderAdminDashboard();
  renderManageProducts();
  renderVendorOrders();
}

function renderManageProducts() {
  const body = document.getElementById("manageProductsBody");
  if (body) body.innerHTML = productRows(getVisibleProductsForRole());
}

function renderVendorOrders() {
  const user = getCurrentUser();
  const body = document.getElementById("vendorOrdersBody");
  if (body) body.innerHTML = orderRows(getOrders().filter((order) => order.items.some((item) => item.vendorEmail === user?.email)), { vendorEmail: user?.email, editable: true });
}

function updateOrderStatus(orderId, status) {
  const orders = getOrders();
  const order = orders.find((item) => String(item.id) === String(orderId));
  if (!order) return;
  order.status = status;
  saveOrders(orders);
  renderRoleDashboards();
  showToast("Order status updated");
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.append(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1600);
}

function updateNavbarByRole() {
  const role = getCurrentRole();
  document.body.dataset.role = role || "guest";
  const menus = {
    guest: [["Home", "index.html"], ["Products", "products.html"], ["Cart", "cart.html"], ["Login", "login.html"]],
    customer: [["Home", "index.html"], ["Products", "products.html"], ["Cart", "cart.html"], ["Orders", "cart.html#orders"], ["Logout", "#logout"]],
    vendor: [["Home", "index.html"], ["Products", "products.html"], ["Vendor Dashboard", "vendor-dashboard.html"], ["Add Product", "add-product.html"], ["Logout", "#logout"]],
    admin: [["Home", "index.html"], ["Products", "products.html"], ["Admin Dashboard", "admin-dashboard.html"], ["Logout", "#logout"]]
  };
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar .nav-links").forEach((nav) => {
    nav.innerHTML = (menus[role || "guest"] || menus.guest).map(([label, href]) => {
      const page = href.split("#")[0];
      const active = page && page === currentPage ? " active" : "";
      const logout = href === "#logout" ? " data-logout" : "";
      return `<a href="${href}" class="nav-link${active}"${logout}>${label}</a>`;
    }).join("");
  });
  document.querySelectorAll("[data-role-only]").forEach((element) => {
    element.hidden = !element.dataset.roleOnly.split(" ").includes(role);
  });
  document.querySelectorAll("[data-guest-only]").forEach((element) => {
    element.hidden = Boolean(role);
  });
  document.querySelectorAll("[data-admin-only]").forEach((element) => {
    element.hidden = role !== "admin";
  });
  document.querySelectorAll(".header-cart").forEach((cart) => {
    cart.hidden = role === "vendor" || role === "admin";
  });
  document.querySelectorAll(".nav-actions .icon-button[href='cart.html']").forEach((cart) => {
    cart.hidden = role === "vendor" || role === "admin";
  });
}

function getRoleMenuItems() {
  const role = getCurrentRole();
  if (role === "customer") {
    return [
      ["Home", "index.html"],
      ["Products", "products.html"],
      ["Cart", "cart.html"],
      ["Orders", "cart.html#orders"],
      ["Logout", "#logout"]
    ];
  }
  if (role === "vendor") {
    return [
      ["Home", "index.html"],
      ["Products", "products.html"],
      ["Vendor Dashboard", "vendor-dashboard.html"],
      ["Add Product", "add-product.html"],
      ["Manage Products", "manage-products.html"],
      ["Vendor Orders", "vendor-orders.html"],
      ["Logout", "#logout"]
    ];
  }
  if (role === "admin") {
    return [
      ["Home", "index.html"],
      ["Products", "products.html"],
      ["Admin Dashboard", "admin-dashboard.html"],
      ["Vendors", "admin-dashboard.html#vendors"],
      ["Customers", "admin-dashboard.html#customers"],
      ["Products", "admin-dashboard.html#products"],
      ["Orders", "admin-dashboard.html#orders"],
      ["Settings", "admin-dashboard.html#settings"],
      ["Logout", "#logout"]
    ];
  }
  return [
    ["Home", "index.html"],
    ["Products", "products.html"],
    ["Login", "login.html"]
  ];
}

function ensureHamburgerMenu() {
  let menuToggle = document.getElementById("menuToggle");
  if (!menuToggle) {
    menuToggle = document.querySelector(".mobile-nav-toggle, .dashboard-menu-toggle");
    if (menuToggle) menuToggle.id = "menuToggle";
  }
  if (!menuToggle) {
    menuToggle = document.createElement("button");
    menuToggle.id = "menuToggle";
    menuToggle.className = "mobile-nav-toggle floating-menu-toggle";
    menuToggle.type = "button";
    document.body.prepend(menuToggle);
  }
  menuToggle.type = "button";
  menuToggle.setAttribute("aria-label", "Open menu");
  menuToggle.setAttribute("aria-controls", "sideMenu");
  menuToggle.innerHTML = "<span></span><span></span><span></span>";

  let sideMenu = document.getElementById("sideMenu");
  if (!sideMenu) {
    sideMenu = document.createElement("aside");
    sideMenu.id = "sideMenu";
    document.body.append(sideMenu);
  }

  let menuOverlay = document.getElementById("menuOverlay");
  if (!menuOverlay) {
    menuOverlay = document.createElement("div");
    menuOverlay.id = "menuOverlay";
    document.body.append(menuOverlay);
  }

  sideMenu.innerHTML = `<div class="side-menu-head"><a class="vendor-brand" href="index.html"><span class="vendor-brand-mark">E</span><span class="vendor-brand-copy"><strong>EMART</strong><small>${getCurrentRole() || "Guest"} menu</small></span></a><button id="closeMenu" type="button" aria-label="Close menu">×</button></div><nav class="side-menu-nav">${getRoleMenuItems().map(([label, href]) => `<a href="${href}" ${href === "#logout" ? "data-logout" : ""}>${label}</a>`).join("")}</nav>`;
}

function attachHamburgerMenu() {
  const bindMenu = () => {
    ensureHamburgerMenu();
    const menuToggle = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    if (menuToggle?.dataset.menuBound === "true") return;
    if (menuToggle) menuToggle.dataset.menuBound = "true";

    if (menuToggle && sideMenu && menuOverlay) {
      menuToggle.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");
        document.body.classList.add("menu-open");
        menuToggle.setAttribute("aria-expanded", "true");
      });
    }

    if (closeMenu && sideMenu && menuOverlay) {
      closeMenu.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
        menuToggle?.setAttribute("aria-expanded", "false");
      });
    }

    if (menuOverlay && sideMenu) {
      menuOverlay.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
        menuToggle?.setAttribute("aria-expanded", "false");
      });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindMenu);
  } else {
    bindMenu();
  }
}

function attachEvents() {
  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-cart]");
    if (addButton) addToCart(addButton.dataset.addCart);
    const buyButton = event.target.closest("[data-buy-now]");
    if (buyButton) buyNow(buyButton.dataset.buyNow);
    const heroBuy = event.target.closest("[data-hero-buy-now]");
    if (heroBuy) heroDealBuyNow(heroBuy.dataset.heroBuyNow);
    const increase = event.target.closest("[data-increase]");
    if (increase) increaseQuantity(increase.dataset.increase);
    const decrease = event.target.closest("[data-decrease]");
    if (decrease) decreaseQuantity(decrease.dataset.decrease);
    const remove = event.target.closest("[data-remove-cart]");
    if (remove) removeFromCart(remove.dataset.removeCart);
    const deleteButton = event.target.closest("[data-delete-product]");
    if (deleteButton) deleteProduct(deleteButton.dataset.deleteProduct);
    const editButton = event.target.closest("[data-edit-product]");
    if (editButton) editProduct(editButton.dataset.editProduct);
    const quick = event.target.closest("[data-quick-filter]");
    if (quick) {
      filterState.quick = quick.dataset.quickFilter;
      document.querySelectorAll("[data-quick-filter]").forEach((button) => button.classList.toggle("active", button === quick));
      updateProductPage();
    }
    const categoryCard = event.target.closest("[data-category-card]");
    if (categoryCard) {
      document.querySelectorAll("[data-category-card]").forEach((card) => card.classList.remove("active"));
      categoryCard.classList.add("active");
    }
    if (event.target.closest("[data-logout]") || event.target.closest("[data-admin-logout]")) logoutUser();
    if (event.target.closest("[data-place-order]")) placeOrder();
  });

  document.getElementById("customerLoginForm")?.addEventListener("submit", loginCustomer);
  document.getElementById("vendorLoginForm")?.addEventListener("submit", loginVendor);
  document.getElementById("adminLoginForm")?.addEventListener("submit", loginAdmin);
  document.getElementById("addProductForm")?.addEventListener("submit", saveProduct);
  document.getElementById("sortSelect")?.addEventListener("change", (event) => {
    filterState.sort = event.target.value;
    updateProductPage();
  });
  document.getElementById("priceFilter")?.addEventListener("change", (event) => {
    filterState.price = event.target.value;
    updateProductPage();
  });
  document.getElementById("productSearchInput")?.addEventListener("input", (event) => {
    filterState.query = event.target.value.trim();
    updateProductPage();
  });
  document.querySelector("[name='image']")?.addEventListener("input", updateImagePreview);
  document.addEventListener("change", (event) => {
    const status = event.target.closest("[data-order-status]");
    if (status) updateOrderStatus(status.dataset.orderStatus, status.value);
  });
  document.querySelectorAll("[data-auth-tab]").forEach((tab) => tab.addEventListener("click", () => switchLoginTab(tab.dataset.authTab)));
  document.querySelectorAll("[data-sidebar-toggle]:not(#menuToggle)").forEach((toggle) => toggle.addEventListener("click", () => {
    const panel = document.getElementById(toggle.getAttribute("aria-controls") || "navPanel");
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    if (panel) panel.classList.toggle("is-open", !open);
    document.querySelector(".vendor-layout")?.classList.toggle("sidebar-open");
  }));
}

function switchLoginTab(tabName) {
  document.querySelectorAll("[data-auth-tab]").forEach((tab) => tab.classList.toggle("active", tab.dataset.authTab === tabName));
  document.querySelectorAll("[data-auth-panel]").forEach((panel) => panel.hidden = panel.dataset.authPanel !== tabName);
}

function attachDashboardSearch() {
  const input = document.querySelector("[data-dashboard-search]");
  if (!input) return;
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    document.querySelectorAll("[data-search-row]").forEach((row) => {
      row.hidden = !row.textContent.toLowerCase().includes(query);
    });
  });
}

function attachMenuHighlight() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, [data-menu-item]").forEach((link) => {
    const hrefPage = (link.getAttribute("href") || "").split("#")[0];
    link.classList.toggle("active", hrefPage === currentPage);
    link.classList.toggle("is-active", hrefPage === currentPage);
  });
}

function loadEditProduct() {
  const id = new URLSearchParams(window.location.search).get("edit");
  if (id) editProduct(id);
  updateImagePreview();
}

function updateImagePreview() {
  const input = document.querySelector("[name='image']");
  const preview = document.getElementById("productImagePreview");
  if (!input || !preview) return;
  const url = input.value.trim();
  preview.innerHTML = url ? `<img src="${escapeHtml(url)}" alt="Product preview" />` : `<span>Image preview</span>`;
}

function ensureDemoVendor() {
  const products = getProducts();
  let changed = false;
  products.forEach((product) => {
    const category = normalizeCategory(product.category);
    if (product.category !== category) {
      product.category = category;
      changed = true;
    }
    if (!product.vendorEmail) {
      product.vendorEmail = DEMO_VENDOR.email;
      product.createdAt = product.createdAt || Date.now();
      changed = true;
    }
  });
  if (changed) saveProducts(products);
}

function init() {
  ensureDemoProducts();
  ensureDemoVendor();
  protectCurrentPage();
  updateNavbarByRole();
  ensureHamburgerMenu();
  attachEvents();
  attachMenuHighlight();
  updateCartCount();
  const page = document.body.dataset.page;
  if (page === "login") switchLoginTab("customer");
  if (page === "home") {
    renderHomePage();
    initHeroDealCountdown();
  }
  if (page === "products") renderProductsPage();
  if (page === "product-details") renderProductDetails();
  if (page === "cart") renderCart();
  if (page === "order-confirmation") renderOrderConfirmation();
  if (["vendor-dashboard", "dashboard"].includes(page)) {
    renderVendorDashboard();
    attachDashboardSearch();
  }
  if (page === "admin-dashboard") {
    renderAdminDashboard();
    attachDashboardSearch();
  }
  if (page === "add-product") loadEditProduct();
  if (page === "manage-products") renderManageProducts();
  if (page === "vendor-orders") renderVendorOrders();
}

window.getCurrentRole = getCurrentRole;
window.requireRole = requireRole;
window.requireAnyRole = requireAnyRole;
window.protectPage = protectPage;
window.loginCustomer = loginCustomer;
window.loginVendor = loginVendor;
window.loginAdmin = loginAdmin;
window.logoutUser = logoutUser;
window.updateNavbarByRole = updateNavbarByRole;
window.checkAdmin = checkAdmin;
window.adminLogin = adminLogin;
window.adminLogout = adminLogout;
window.saveProduct = saveProduct;
window.addProduct = saveProduct;
window.getProducts = getProducts;
window.renderProducts = renderProducts;
window.addToCart = addToCart;
window.buyNow = buyNow;
window.updateCartCount = updateCartCount;
window.renderCart = renderCart;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeFromCart = removeFromCart;
window.deleteProduct = deleteProduct;
window.openRazorpayCheckout = openRazorpayCheckout;
window.checkoutWithRazorpay = checkoutWithRazorpay;
window.saveOrderAfterPayment = saveOrderAfterPayment;
window.updateOrderStatus = updateOrderStatus;
window.searchProducts = updateProductPage;
window.filterProducts = updateProductPage;
window.sortProducts = updateProductPage;

init();
attachHamburgerMenu();
