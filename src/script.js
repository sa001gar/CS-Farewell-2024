document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.getElementById("envelope");
    var letter = document.getElementById("letter");
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

    function openModal() {
        modal.style.display = "flex";
    }

    envelope.addEventListener("click", openEnvelope);
    btnOpen.addEventListener("click", openEnvelope);
    btnReset.addEventListener("click", closeEnvelope);
    letter.addEventListener("click", openModal);



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

    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');
    if (name) {
        namePlaceholder.textContent = name;
    } else {
        namePlaceholder.textContent = 'Guest'; // Default name if not provided
    }

});