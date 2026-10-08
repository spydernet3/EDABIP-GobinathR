document.addEventListener("DOMContentLoaded", () => {
  // 1. Payment Method Default Switcher
  const cardItems = document.querySelectorAll(".card-list .saved-card");

  cardItems.forEach((card) => {
    const setDefaultBtn = card.querySelector(".btn-text");

    if (setDefaultBtn) {
      setDefaultBtn.addEventListener("click", () => {
        // Reset all cards
        cardItems.forEach((c) => {
          c.classList.remove("active");
          const existingBadge = c.querySelector(".badge-default");
          if (existingBadge) {
            existingBadge.remove();
            const newBtn = document.createElement("button");
            newBtn.type = "button";
            newBtn.className = "btn-text";
            newBtn.textContent = "Set Default";
            c.appendChild(newBtn);
            // Re-attach listener
            attachDefaultListener(c, newBtn);
          }
        });

        // Set current card as active
        card.classList.add("active");
        setDefaultBtn.remove();

        const badge = document.createElement("span");
        badge.className = "badge-default";
        badge.textContent = "Default";
        card.appendChild(badge);
      });
    }
  });

  function attachDefaultListener(cardElement, buttonElement) {
    buttonElement.addEventListener("click", () => {
      cardItems.forEach((c) => {
        c.classList.remove("active");
        const badge = c.querySelector(".badge-default");
        if (badge) {
          badge.remove();
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "btn-text";
          btn.textContent = "Set Default";
          c.appendChild(btn);
          attachDefaultListener(c, btn);
        }
      });
      cardElement.classList.add("active");
      buttonElement.remove();
      const badge = document.createElement("span");
      badge.className = "badge-default";
      badge.textContent = "Default";
      cardElement.appendChild(badge);
    });
  }

  // 2. Add Payment Method Action
  const addPaymentBtn = document.querySelector(".btn-add-card");
  if (addPaymentBtn) {
    addPaymentBtn.addEventListener("click", () => {
      alert("Opening secure payment method gateway...");
    });
  }

  // 3. Pricing Tier Selector
  const planBoxes = document.querySelectorAll(".plans-grid .plan-box");
  planBoxes.forEach((box) => {
    const selectBtn = box.querySelector(".btn-outline-pill");
    if (selectBtn) {
      selectBtn.addEventListener("click", () => {
        planBoxes.forEach((b) => b.classList.remove("highlighted"));
        box.classList.add("highlighted");
      });
    }
  });

  // 4. Refresh Button Feedback
  const refreshBtn = document.querySelector(".btn-refresh");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      const originalText = refreshBtn.textContent;
      refreshBtn.textContent = "Updating...";
      refreshBtn.disabled = true;

      setTimeout(() => {
        refreshBtn.textContent = originalText;
        refreshBtn.disabled = false;
      }, 1000);
    });
  }

  // 5. Search Bar Handling
  const searchInput = document.querySelector(".search-input-wrap input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      // Filters stat cards based on title text
      const statCards = document.querySelectorAll(".stats-row .stat-card");
      statCards.forEach((card) => {
        const title = card.querySelector(".card-title")?.textContent.toLowerCase() || "";
        const val = card.querySelector(".card-number")?.textContent.toLowerCase() || "";
        if (title.includes(query) || val.includes(query)) {
          card.style.display = "flex";
        } else {
          card.style.display = query === "" ? "flex" : "none";
        }
      });
    });
  }
});