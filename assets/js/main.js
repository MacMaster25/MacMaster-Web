// Main JavaScript for Jekyll E-commerce Site

document.addEventListener("DOMContentLoaded", function () {
  // Initialize cart functionality
  // initializeCart();

  // Initialize search functionality
  initializeSearch();

  // Initialize lazy loading for images
  initializeLazyLoading();

  // Initialize smooth scrolling
  initializeSmoothScrolling();

  // Initialize tooltips
  initializeTooltips();
});

// Cart functionality
function initializeCart() {
  // Load cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Update cart count
  function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadge = document.querySelector(".cart-badge");
    if (cartBadge) {
      cartBadge.textContent = cartCount;
    }
  }

  // Add to cart function
  window.addToCart = function (
    productId,
    productName,
    productPrice,
    quantity = 1
  ) {
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    // Show success message
    showNotification("Product added to cart!", "success");
  };

  // Remove from cart function
  window.removeFromCart = function (productId) {
    cart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    // Refresh cart page if on cart page
    if (window.location.pathname.includes("/cart")) {
      location.reload();
    }
  };

  // Update cart quantity
  window.updateCartQuantity = function (productId, quantity) {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId);
      } else {
        item.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
      }
    }
  };

  // Initialize cart count on page load
  updateCartCount();
}

// Search functionality
function initializeSearch() {
  const searchForm = document.querySelector('form[action*="search"]');
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = this.querySelector('input[name="q"]').value.trim();
      if (query) {
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
      }
    });
  }

  // Live search functionality
  const searchInput = document.querySelector('input[name="q"]');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener("input", function () {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        const query = this.value.trim();
        if (query.length >= 2) {
          performLiveSearch(query);
        }
      }, 300);
    });
  }
}

// Perform live search
function performLiveSearch(query) {
  // This would typically make an AJAX request to your search endpoint
  // For now, we'll just log the query
  console.log("Performing live search for:", query);

  // Example implementation:
  // fetch(`/api/search?q=${encodeURIComponent(query)}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     displaySearchResults(data);
  //   });
}

// Lazy loading for images
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Initialize tooltips
function initializeTooltips() {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
  notification.style.cssText =
    "top: 20px; right: 20px; z-index: 9999; min-width: 300px;";
  notification.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;

  document.body.appendChild(notification);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

// Form validation
function validateForm(form) {
  const inputs = form.querySelectorAll(
    "input[required], textarea[required], select[required]"
  );
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("is-invalid");
      isValid = false;
    } else {
      input.classList.remove("is-invalid");
    }
  });

  return isValid;
}

// Utility functions
function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for performance
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// URL parameter utilities
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function updateUrlParameter(key, value) {
  const url = new URL(window.location);
  url.searchParams.set(key, value);
  window.history.replaceState({}, "", url);
}

// Performance monitoring
function measurePerformance() {
  if ("performance" in window) {
    const perfData = performance.getEntriesByType("navigation")[0];
    console.log(
      "Page load time:",
      perfData.loadEventEnd - perfData.loadEventStart,
      "ms"
    );
  }
}

// Initialize performance monitoring
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", measurePerformance);
} else {
  measurePerformance();
}

// Error handling
window.addEventListener("error", function (e) {
  console.error("JavaScript error:", e.error);
  // You could send this to an error tracking service
});

// Unhandled promise rejection handling
window.addEventListener("unhandledrejection", function (e) {
  console.error("Unhandled promise rejection:", e.reason);
  // You could send this to an error tracking service
});
