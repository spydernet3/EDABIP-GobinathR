document.addEventListener("DOMContentLoaded", () => {
  // 1. Payment Method Default Toggler
  const cardRows = document.querySelectorAll(".cards-stack .payment-card-row");

  function refreshCardListeners() {
    cardRows.forEach((row) => {
      const btn = row.querySelector(".btn-set-default");
      if (btn) {
        btn.onclick = () => {
          // Unset all rows
          cardRows.forEach((r) => {
            r.classList.remove("selected");
            const dot = r.querySelector(".radio-dot");
            if (dot) dot.classList.remove("active");

            const badge = r.querySelector(".card-status-badge");
            if (badge) {
              badge.remove();
              const newBtn = document.createElement("button");
              newBtn.type = "button";
              newBtn.className = "btn-set-default";
              newBtn.textContent = "Set Default";
              r.appendChild(newBtn);
            }
          });

          // Set clicked row
          row.classList.add("selected");
          const activeDot = row.querySelector(".radio-dot");
          if (activeDot) activeDot.classList.add("active");

          btn.remove();
          const newBadge = document.createElement("span");
          newBadge.className = "card-status-badge";
          newBadge.textContent = "Default";
          row.appendChild(newBadge);

          refreshCardListeners();
        };
      }
    });
  }
  refreshCardListeners();

  // 2. Add New Payment Method
  const addBtn = document.querySelector(".btn-add-method");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      alert("Opening payment method provider...");
    });
  }

  // 3. Plan Switcher
  const planCards = document.querySelectorAll(".plans-grid .plan-card");
  planCards.forEach((card) => {
    const actionBtn = card.querySelector(".btn-plan-action");
    if (actionBtn) {
      actionBtn.addEventListener("click", () => {
        planCards.forEach((c) => {
          c.classList.remove("featured-plan");
          const badge = c.querySelector(".featured-badge");
          if (badge) badge.remove();

          // Reset button to standard action
          const group = c.querySelector(".plan-btn-group");
          if (group) {
            group.remove();
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "btn-plan-action";
            btn.textContent = "Select Plan";
            c.appendChild(btn);
          }
        });

        // Set new featured card
        card.classList.add("featured-plan");
        const newBadge = document.createElement("div");
        newBadge.className = "featured-badge";
        newBadge.textContent = "Current Plan";
        card.prepend(newBadge);

        actionBtn.remove();
        const btnGroup = document.createElement("div");
        btnGroup.className = "plan-btn-group";
        btnGroup.innerHTML = `
          <button type="button" class="btn-plan-active">Active Plan</button>
          <button type="button" class="btn-plan-deactivate">Deactivate Plan</button>
        `;
        card.appendChild(btnGroup);
      });
    }
  });

  // 4. Refresh Button Feedback
  const refreshBtn = document.getElementById("btn-refresh");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      const textSpan = refreshBtn.querySelector("span");
      const originalText = textSpan.textContent;
      textSpan.textContent = "Updating...";
      refreshBtn.disabled = true;

      setTimeout(() => {
        textSpan.textContent = originalText;
        refreshBtn.disabled = false;
      }, 800);
    });
  }

  // 5. Clear Search Input
  const searchInput = document.getElementById("billing-search");
  const clearBtn = document.querySelector(".btn-clear");
  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchInput.focus();
    });
  }
});
