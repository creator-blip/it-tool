// =============================================================
// auth-signup.js
// Password validation + show/hide toggle for both fields
// =============================================================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const pwd = document.getElementById("password");
  const cpw = document.getElementById("confirmPassword");
  const toggleBtns = document.querySelectorAll(".toggle-password");

  // 1) Password match validation
  form?.addEventListener("submit", (e) => {
    if (pwd.value !== cpw.value) {
      e.preventDefault();
      cpw.setCustomValidity("Passwords do not match");
      cpw.reportValidity();
    } else {
      cpw.setCustomValidity("");
    }
  });

  // 2) Show/Hide toggle for both fields
  toggleBtns.forEach((btn) => {
    const targetId = btn.dataset.target;
    const input = document.getElementById(targetId);

    btn.addEventListener("click", () => {
      const isHidden = input.type === "password";
      input.type = isHidden ? "text" : "password";
      btn.textContent = isHidden ? "Hide" : "Show";
      btn.setAttribute("aria-pressed", String(isHidden));

      // Keep alignment and focus consistent
      input.focus();
    });
  });
});
