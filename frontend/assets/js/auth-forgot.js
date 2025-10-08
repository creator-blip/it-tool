document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("forgotForm");
      const email = document.getElementById("email");
      const success = document.getElementById("forgotSuccess");

      form?.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!email.checkValidity()) {
          email.reportValidity();
          return;
        }
        success.classList.remove("d-none");
      });
    });