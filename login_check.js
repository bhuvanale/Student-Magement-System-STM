document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const predefinedEmail = "admin@example.com";
            const predefinedPassword = "admin123";

            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("password").value.trim();

            if (email === predefinedEmail && password === predefinedPassword) {
                window.location.href = "index.html"; // Redirect to dashboard
            } else {
                window.location.href = "error.html";;
            }
        });
    }
});

