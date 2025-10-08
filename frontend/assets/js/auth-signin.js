document.addEventListener("DOMContentLoaded", function () {
      const toggleBtns = document.querySelectorAll(".toggle-password");
      toggleBtns.forEach((btn) => {
        const targetId = btn.dataset.target;
        const input = document.getElementById(targetId);

        btn.addEventListener("click", () => {
          const isHidden = input.type === "password";
          input.type = isHidden ? "text" : "password";
          btn.textContent = isHidden ? "Hide" : "Show";
          btn.setAttribute("aria-pressed", String(isHidden));
          input.focus();
        });
      });
    });