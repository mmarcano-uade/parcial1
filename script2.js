    document.addEventListener("DOMContentLoaded", () => {
        const toggleBtn = document.getElementById("darkmode")

        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark")
        });

    });