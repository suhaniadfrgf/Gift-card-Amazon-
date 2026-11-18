// Educational demo only: credentials are checked locally and never sent anywhere.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("demo-login");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const error = document.getElementById("login-error");
    if (username === "demo_user" && password === "demo123") {
      window.location.href = "verify.html";
    } else {
      error.textContent = "Demo details don't match. Try demo_user and demo123.";
    }
  });
});
