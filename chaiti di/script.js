document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("envelope");

    envelope.addEventListener("click", function() {
        envelope.classList.toggle("open");
    });
});
