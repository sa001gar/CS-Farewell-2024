document.addEventListener("DOMContentLoaded", function () {
    const validNames = [
        "Aniket Das", "Arnab Laha", "Atika Tasnim", "Ayan Pal", "Ditu Dey",
        "Iradri Das", "Jeet Biswas", "Kartick Saren", "Prosenjit Mondal", "Rikta Nayak",
        "Rohit Bhagat", "Ronit Banerjee", "Sabyasachi Patra", "Sananda Dutta", "Satyam Sinha",
        "Shayan Shome", "Shilpi Nag", "Sk Hazikul Alam", "Subhadeep Kumbhakar", "Sudip Mete",
        "Sudipta Koner", "Sudipto Nag", "Suman Pramanick", "Guest User"
    ];

    var envelope = document.getElementById("envelope");
    var letter = document.getElementById("letter");
    var btnOpen = document.getElementById("open");
    var btnReset = document.getElementById("reset");
    var btnViewFull = document.getElementById("viewFull");
    var modal = document.getElementById("fullInvitationModal");
    var closeModal = document.getElementById("closeModal");
    var namePlaceholder = document.getElementById("namePlaceholder");

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

    if (name && validNames.includes(name)) {
        namePlaceholder.textContent = name;
    } else {
        window.location.href = '404.html'; // Redirect to a 404 page if the name is not valid
    }

    // Disable right-click
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
});