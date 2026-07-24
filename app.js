/* ============================================
   GRAKA EATERY - Standalone JavaScript
   Cart, Animations, Navigation, Paystack
   ============================================ */

// --- DATA ---
const menuData = {
  "Local Dishes": [
    { name: "Jollof Rice", description: "Signature smoky jollof with grilled chicken and plantains", price: "GH₵ 85", image: "jollof-rice.jpg" },
    { name: "Waakye", description: "Rice & beans with shito, gari, egg, and spaghetti", price: "GH₵ 55", image: "waakye.jpg" },
    { name: "Fufu & Light Soup", description: "Smooth pounded fufu in rich palm nut soup with goat", price: "GH₵ 90", image: "fufu-soup.jpg" },
  ],
  "Continental": [
    { name: "Fried Rice", description: "Wok-tossed rice with shrimp, vegetables, and egg", price: "GH₵ 75", image: "fried-rice.jpg" },
    { name: "Grilled Tilapia", description: "Whole tilapia char-grilled with herbs and pepper sauce", price: "GH₵ 110", image: "grilled-tilapia.jpg" },
    { name: "Banku & Tilapia", description: "Traditional banku with grilled tilapia and hot pepper", price: "GH₵ 95", image: "grilled-tilapia.jpg" },
  ],
  "Grills": [
    { name: "Grilled Chicken", description: "Half chicken marinated in African spices, char-grilled", price: "GH₵ 80", image: "grilled-chicken.jpg" },
    { name: "Beef Kebab", description: "Tender beef skewers with suya spice and peanut sauce", price: "GH₵ 70", image: "grilled-chicken.jpg" },
    { name: "Lamb Chops", description: "Herb-crusted lamb with mint chutney and roasted veggies", price: "GH₵ 120", image: "grilled-chicken.jpg" },
  ],
  "Drinks": [
    { name: "Sobolo", description: "Refreshing hibiscus drink with ginger and pineapple", price: "GH₵ 15", image: "gallery5.jpg" },
    { name: "Fresh Fruit Punch", description: "Tropical blend of mango, pineapple, and passion fruit", price: "GH₵ 20", image: "gallery5.jpg" },
    { name: "Palm Wine", description: "Traditional fresh palm wine, naturally fermented", price: "GH₵ 25", image: "gallery5.jpg" },
  ],
  "Desserts": [
    { name: "Chocolate Mousse", description: "Rich dark chocolate mousse with gold leaf and berries", price: "GH₵ 45", image: "dessert.jpg" },
    { name: "Bofrot", description: "Golden fried dough balls with caramelized sugar", price: "GH₵ 20", image: "dessert.jpg" },
    { name: "Kelewele", description: "Spiced fried plantains with peanuts and chili", price: "GH₵ 25", image: "dessert.jpg" },
  ],
};

const signatureMeals = [
  { name: "Jollof Rice", description: "Our signature smoky jollof rice, slow-cooked with rich tomato stew, aromatic spices, and served with grilled chicken and golden fried plantains. A celebration of West African flavors.", image: "jollof-rice.jpg" },
  { name: "Waakye", description: "The iconic Ghanaian comfort food — rice and beans cooked with sorghum leaves, served with shito, gari, fried plantains, and a perfectly boiled egg. Pure nostalgia on a plate.", image: "waakye.jpg" },
  { name: "Banku & Tilapia", description: "Fermented corn and cassava dough, smooth and tangy, paired with char-grilled tilapia, hot pepper sauce, and fresh garden vegetables. An authentic coastal experience.", image: "grilled-tilapia.jpg" },
  { name: "Fried Rice", description: "A fusion of Chinese and African techniques — wok-tossed rice with fresh shrimp, seasonal vegetables, and a perfectly seasoned egg, garnished with crispy shallots.", image: "fried-rice.jpg" },
  { name: "Grilled Chicken", description: "Free-range chicken marinated in our secret blend of African spices, charcoal-grilled to perfection. Served with jollof sauce and hand-cut fries.", image: "grilled-chicken.jpg" },
  { name: "Fufu & Light Soup", description: "Hand-pounded fufu served with rich palm nut soup, tender goat meat, and garden vegetables. A dish that speaks of tradition and love.", image: "fufu-soup.jpg" },
];

const galleryImages = [
  { src: "gallery1.jpg", alt: "Chef preparing African cuisine", h: 350 },
  { src: "jollof-rice.jpg", alt: "Jollof Rice", h: 280 },
  { src: "gallery2.jpg", alt: "Restaurant interior", h: 400 },
  { src: "grilled-tilapia.jpg", alt: "Grilled Tilapia", h: 300 },
  { src: "gallery3.jpg", alt: "Food plating", h: 320 },
  { src: "dessert.jpg", alt: "Dessert", h: 380 },
  { src: "gallery4.jpg", alt: "Kitchen preparation", h: 290 },
  { src: "gallery5.jpg", alt: "Drinks", h: 340 },
];

const testimonials = [
  { name: "Ama Serwaa", role: "Food Enthusiast", text: "The Jollof Rice at Graka is unlike anything I've tasted. The smoky flavor, the perfect texture — it's a masterpiece. This is the best restaurant in Ho, hands down.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face" },
  { name: "Kwame Mensah", role: "Business Executive", text: "I bring all my clients here. The ambiance is unmatched in the Volta Region, and the food quality is consistently excellent. The grilled tilapia is out of this world.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" },
  { name: "Nana Adjoa", role: "Food Blogger", text: "Graka Eatery has redefined what African fine dining looks like. From the presentation to the flavors, everything is perfection. A must-visit in Ho!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" },
  { name: "Yaw Asante", role: "Regular Customer", text: "The waakye here reminds me of my grandmother's cooking. Authentic, comforting, and served with love. I drive 30 minutes just for this food.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" },
];

const deliveryZones = [
  { id: "ho-central", name: "Ho Central & Town Centre", distance: "0 - 2 km", fee: 5.0, eta: "15-20 min" },
  { id: "ho-denu", name: "Ho-Denu & Sokode", distance: "2 - 4 km", fee: 8.0, eta: "15-25 min" },
  { id: "ho-vota", name: "Vota & Adaklu Junction", distance: "3 - 6 km", fee: 10.0, eta: "20-30 min" },
  { id: "ho-kpeme", name: "Kpeme & Kpetoe", distance: "5 - 8 km", fee: 12.0, eta: "25-35 min" },
  { id: "ho-dzolokpota", name: "Dzolokpota & Dzodze Junction", distance: "6 - 10 km", fee: 15.0, eta: "30-40 min" },
  { id: "ho-azatoe", name: "Azatoe & Kpeve", distance: "8 - 15 km", fee: 18.0, eta: "35-50 min" },
  { id: "ho-adaklu", name: "Adaklu & Waya", distance: "10 - 20 km", fee: 20.0, eta: "40-55 min" },
  { id: "ho-keta", name: "Keta & Anloga Direction", distance: "15 - 30 km", fee: 25.0, eta: "50-70 min" },
  { id: "ho-akuse", name: "Akuse & Sogakope", distance: "20 - 40 km", fee: 30.0, eta: "60-90 min" },
  { id: "ho-other", name: "Other Areas", distance: "30+ km", fee: 35.0, eta: "90+ min" },
];

const PAYSTACK_PUBLIC_KEY = "pk_test_5c141c098cbdf209fcb1258ce762861f7573f8f7";

// --- STATE ---
let cart = [];
let selectedZoneId = "ho-central";
let activeCategory = "Local Dishes";
let currentTestimonial = 0;

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderSignatureMeals();
  renderGallery();
  renderTestimonials();
  initScrollAnimations();
  initNavbar();
  initCart();
  initWhatsApp();

  // Loading screen
  setTimeout(() => {
    document.getElementById("loadingScreen").classList.add("hidden");
  }, 2000);
});

// --- MENU RENDERING ---
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const items = menuData[activeCategory] || [];
  grid.innerHTML = items.map((item, i) => `
    <div class="menu-card scroll-reveal" style="transition-delay:${i * 0.1}s;">
      <div class="menu-card-image">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="menu-card-content">
        <div class="menu-card-header">
          <h3 class="menu-card-name">${item.name}</h3>
          <span class="menu-card-price">${item.price}</span>
        </div>
        <p class="menu-card-desc">${item.description}</p>
        <button class="btn-add-cart" onclick='addToCart(${JSON.stringify(item)})'>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          Add to Cart
        </button>
      </div>
    </div>
  `).join("");

  // Re-observe new elements
  setTimeout(() => observeNewElements(), 100);
}

// Category tabs
document.getElementById("categoryTabs").addEventListener("click", (e) => {
  const tab = e.target.closest(".category-tab");
  if (!tab) return;
  document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");
  activeCategory = tab.dataset.cat;
  renderMenu();
});

// --- SIGNATURE MEALS ---
function renderSignatureMeals() {
  const container = document.getElementById("signatureMeals");
  container.innerHTML = signatureMeals.map((meal, i) => `
    <div class="signature-item scroll-reveal" style="transition-delay:${i * 0.1}s;">
      <div class="signature-image">
        <div class="signature-accent"></div>
        <img src="${meal.image}" alt="${meal.name}" />
      </div>
      <div class="signature-text">
        <h3>${meal.name}</h3>
        <div class="gold-bar"></div>
        <p>${meal.description}</p>
      </div>
    </div>
  `).join("");
}

// --- GALLERY ---
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = galleryImages.map((img, i) => `
    <div class="gallery-item scroll-reveal" style="transition-delay:${i * 0.05}s;" onclick="openLightbox('${img.src}', '${img.alt}')">
      <img src="${img.src}" alt="${img.alt}" style="height:${img.h}px;object-fit:cover;width:100%;" />
      <div class="gallery-overlay"><span>View</span></div>
    </div>
  `).join("");
}

function openLightbox(src, alt) {
  const lb = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxImg").alt = alt;
  lb.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

// --- TESTIMONIALS ---
function renderTestimonials() {
  const track = document.getElementById("testimonialTrack");
  const dots = document.getElementById("testimonialDots");
  track.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-quote">&ldquo;</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-stars">
        ${Array(5).fill('<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>').join('')}
      </div>
      <div class="testimonial-author">
        <img src="${t.image}" alt="${t.name}" />
        <div class="testimonial-author-info">
          <h4>${t.name}</h4>
          <p>${t.role}</p>
        </div>
      </div>
    </div>
  `).join("");

  dots.innerHTML = testimonials.map((_, i) => `
    <button class="testimonial-dot ${i === 0 ? 'active' : ''}" onclick="goToTestimonial(${i})"></button>
  `).join("");

  // Auto-rotate
  setInterval(() => moveTestimonial(1), 5000);
}

function moveTestimonial(dir) {
  currentTestimonial = (currentTestimonial + dir + testimonials.length) % testimonials.length;
  updateTestimonialPosition();
}

function goToTestimonial(index) {
  currentTestimonial = index;
  updateTestimonialPosition();
}

function updateTestimonialPosition() {
  document.getElementById("testimonialTrack").style.transform = `translateX(-${currentTestimonial * 100}%)`;
  document.querySelectorAll(".testimonial-dot").forEach((d, i) => {
    d.classList.toggle("active", i === currentTestimonial);
  });
}

// --- SCROLL ANIMATIONS ---
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1, rootMargin: "-50px" });

  document.querySelectorAll(".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right").forEach(el => {
    observer.observe(el);
  });

  // Counter animation
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || "";
        animateCounter(el, target, suffix);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".stat-number").forEach(el => counterObserver.observe(el));
}

function observeNewElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1, rootMargin: "-50px" });

  document.querySelectorAll(".scroll-reveal:not(.visible)").forEach(el => {
    observer.observe(el);
  });
}

function animateCounter(el, target, suffix) {
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);
    el.textContent = value.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// --- NAVBAR ---
function initNavbar() {
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    // Scroll progress
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    document.getElementById("scrollProgress").style.width = progress + "%";

    // Hero parallax
    const heroBg = document.getElementById("heroBg");
    if (heroBg) {
      heroBg.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.1)`;
    }
  });
}

// --- MOBILE MENU ---
document.getElementById("mobileToggle").addEventListener("click", () => {
  const toggle = document.getElementById("mobileToggle");
  const menu = document.getElementById("mobileMenu");
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "";
});

function closeMobile() {
  document.getElementById("mobileToggle").classList.remove("active");
  document.getElementById("mobileMenu").classList.remove("active");
  document.body.style.overflow = "";
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// --- CART ---
function initCart() {
  document.getElementById("cartBtn").addEventListener("click", openCart);
  document.getElementById("cartBody").innerHTML = renderEmptyCart();
}

function renderEmptyCart() {
  return `
    <div class="cart-empty">
      <div class="cart-empty-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      </div>
      <h4>Your cart is empty</h4>
      <p>Explore our menu and add some delicious dishes!</p>
    </div>
  `;
}

function addToCart(item) {
  const existing = cart.find(c => c.name === item.name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  updateCart();
  showToast(`${item.name} added to cart!`, "success");
}

function removeFromCart(name) {
  cart = cart.filter(c => c.name !== name);
  updateCart();
}

function updateQuantity(name, delta) {
  const item = cart.find(c => c.name === name);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(c => c.name !== name);
  }
  updateCart();
}

function updateCart() {
  const body = document.getElementById("cartBody");
  const footer = document.getElementById("cartFooter");
  const badge = document.getElementById("cartBadge");
  const mobileCount = document.getElementById("mobileCartCount");

  const totalItems = cart.reduce((sum, c) => sum + c.quantity, 0);
  badge.textContent = totalItems;
  badge.classList.toggle("active", totalItems > 0);
  mobileCount.textContent = totalItems;

  if (cart.length === 0) {
    body.innerHTML = renderEmptyCart();
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";

  // Render items
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${item.image}" alt="${item.name}" /></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price}</div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="updateQuantity('${item.name}', -1)">−</button>
          <span class="cart-qty">${item.quantity}</span>
          <button class="cart-qty-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
          <span class="cart-item-remove" onclick="removeFromCart('${item.name}')">Remove</span>
        </div>
      </div>
    </div>
  `).join("");

  // Delivery zone selector
  body.innerHTML += `
    <div class="cart-zone-section">
      <label class="cart-zone-label">Delivery Zone</label>
      <select class="cart-zone-select" id="zoneSelect" onchange="changeZone(this.value)">
        ${deliveryZones.map(z => `<option value="${z.id}" ${z.id === selectedZoneId ? 'selected' : ''}>${z.name} (${z.distance})</option>`).join("")}
      </select>
      <div class="cart-zone-info">
        <span class="fee">Fee: GH₵ ${getSelectedZone().fee.toFixed(2)}</span>
        <span class="eta">ETA: ${getSelectedZone().eta}</span>
      </div>
    </div>
  `;

  updateTotals();
}

function getSelectedZone() {
  return deliveryZones.find(z => z.id === selectedZoneId) || deliveryZones[0];
}

function changeZone(id) {
  selectedZoneId = id;
  updateTotals();
  // Update the info display
  const zone = getSelectedZone();
  const infoEl = document.querySelector(".cart-zone-info");
  if (infoEl) {
    infoEl.innerHTML = `<span class="fee">Fee: GH₵ ${zone.fee.toFixed(2)}</span><span class="eta">ETA: ${zone.eta}</span>`;
  }
}

function parsePrice(priceStr) {
  return parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;
}

function updateTotals() {
  const subtotal = cart.reduce((sum, c) => sum + parsePrice(c.price) * c.quantity, 0);
  const deliveryFee = getSelectedZone().fee;
  const total = subtotal + deliveryFee;

  document.getElementById("cartSubtotal").textContent = `GH₵ ${subtotal.toFixed(2)}`;
  document.getElementById("cartDelivery").textContent = `GH₵ ${deliveryFee.toFixed(2)}`;
  document.getElementById("cartTotal").textContent = `GH₵ ${total.toFixed(2)}`;
}

function openCart() {
  document.getElementById("cartOverlay").classList.add("active");
  document.getElementById("cartSidebar").classList.add("active");
  document.body.style.overflow = "hidden";
  hideCheckoutForm();
}

function closeCart() {
  document.getElementById("cartOverlay").classList.remove("active");
  document.getElementById("cartSidebar").classList.remove("active");
  document.body.style.overflow = "";
}

function showCheckoutForm() {
  document.getElementById("btnCheckout").style.display = "none";
  document.getElementById("checkoutFormSection").style.display = "block";
}

function hideCheckoutForm() {
  document.getElementById("btnCheckout").style.display = "block";
  document.getElementById("checkoutFormSection").style.display = "none";
}

// --- PAYSTACK ---
function processPayment() {
  const name = document.getElementById("checkName").value.trim();
  const phone = document.getElementById("checkPhone").value.trim();
  const email = document.getElementById("checkEmail").value.trim();
  const address = document.getElementById("checkAddress").value.trim();

  if (!name || !phone || !email || !address) {
    showToast("Please fill in all required fields.", "error");
    return;
  }

  const subtotal = cart.reduce((sum, c) => sum + parsePrice(c.price) * c.quantity, 0);
  const deliveryFee = getSelectedZone().fee;
  const total = subtotal + deliveryFee;

  // Show processing modal
  document.getElementById("paymentModal").classList.add("active");

  // Initialize Paystack Pop
  const handler = PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: email,
    amount: Math.round(total * 100),
    currency: "GHS",
    ref: "GE-" + Date.now(),
    metadata: {
      customer_name: name,
      customer_phone: phone,
      delivery_address: address,
      delivery_zone: getSelectedZone().name,
      order_items: cart.map(c => `${c.name} x${c.quantity}`).join(", "),
    },
    onClose: function () {
      document.getElementById("paymentModal").classList.remove("active");
      showToast("Payment cancelled.", "error");
    },
    callback: function (response) {
      document.getElementById("paymentModal").classList.remove("active");
      showToast("Payment successful! Order confirmed. Thank you!", "success");
      cart = [];
      selectedZoneId = "ho-central";
      updateCart();
      closeCart();
    },
  });

  handler.openIframe();
}

function closePaymentModal() {
  document.getElementById("paymentModal").classList.remove("active");
}

// --- WHATSAPP ---
function initWhatsApp() {
  // Tooltip auto-show after 5 seconds
  setTimeout(() => {
    document.getElementById("whatsappTooltip").classList.add("active");
  }, 5000);
}

function toggleWhatsApp() {
  document.getElementById("whatsappTooltip").classList.toggle("active");
}

// --- TOAST ---
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      ${type === "success"
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>'
      }
    </div>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- RESERVATION ---
function handleReservation(e) {
  e.preventDefault();
  const name = document.getElementById("resName").value.trim();
  const phone = document.getElementById("resPhone").value.trim();
  const date = document.getElementById("resDate").value;
  const time = document.getElementById("resTime").value;

  if (!name || !phone || !date || !time) {
    showToast("Please fill in all required fields.", "error");
    return;
  }

  showToast("Reservation submitted successfully! We'll confirm shortly.", "success");
  e.target.reset();
}

// --- LIGHTBOX CLOSE ON ESCAPE ---
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
    closeCart();
    closePaymentModal();
  }
});

// --- PAYSTACK POPUP SCRIPT ---
// Load Paystack inline script dynamically
(function() {
  const script = document.createElement("script");
  script.src = "https://js.paystack.co/v1/inline.js";
  script.async = true;
  document.head.appendChild(script);
})();
