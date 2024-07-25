document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.getElementById("envelope");
    var btnOpen = document.getElementById("open");
    var btnReset = document.getElementById("reset");
    var btnViewFull = document.getElementById("viewFull");
    var modal = document.getElementById("fullInvitationModal");
    var closeModal = document.getElementById("closeModal");

    function openEnvelope() {
        envelope.classList.add("open");
        envelope.classList.remove("close");
    }

    function closeEnvelope() {
        envelope.classList.add("close");
        envelope.classList.remove("open");
    }

    envelope.addEventListener("click", openEnvelope);
    btnOpen.addEventListener("click", openEnvelope);
    btnReset.addEventListener("click", closeEnvelope);

    btnViewFull.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});