document.addEventListener("DOMContentLoaded", function () {
  // List of valid names
  const validNames = [
    "Aniket Das",
    "Arnab Laha",
    "Atika Tasnim",
    "Ayan Pal",
    "Ditu Dey",
    "Iradri Das",
    "Jeet Biswas",
    "Kartick Saren",
    "Prosenjit Mondal",
    "Rikta Nayak",
    "Rohit Bhagat",
    "Ronit Banerjee",
    "Sabyasachi Patra",
    "Sananda Dutta",
    "Satyam Sinha",
    "Shayan Shome",
    "Shilpi Nag",
    "Sk Hazikul Alam",
    "Subhadeep Kumbhakar",
    "Sudip Mete",
    "Sudipta Koner",
    "Sudipto Nag",
    "Suman Pramanick",
    "Guest User",
  ];

  // Get elements by their IDs
  var envelope = document.getElementById("envelope");
  var letter = document.getElementById("letter");
  var btnOpen = document.getElementById("open");
  var btnReset = document.getElementById("reset");
  var btnViewFull = document.getElementById("viewFull");
  var modal = document.getElementById("fullInvitationModal");
  var closeModal = document.getElementById("closeModal");
  var namePlaceholder = document.getElementById("namePlaceholder");
  var tip = document.getElementById("tip");

  // Function to open the envelope
  function openEnvelope() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
    tip.style.display = "none"; // Hide the tip when envelope is opened
  }

  // Function to close the envelope
  function closeEnvelope() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
    tip.style.display = "block"; // Show the tip when envelope is closed
  }

  // Function to open the modal
  function openModal() {
    modal.style.display = "flex";
  }

  // Add event listeners to elements
  envelope.addEventListener("click", openEnvelope);
  btnOpen.addEventListener("click", openEnvelope);
  btnReset.addEventListener("click", closeEnvelope);
  letter.addEventListener("click", openModal);

  // Open the modal when "View Full Invitation" button is clicked
  btnViewFull.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // Get the name parameter from the URL
  var urlParams = new URLSearchParams(window.location.search);
  var name = urlParams.get("name");

  // Check if the name is valid and display it, otherwise redirect to a 404 page
  if (name && validNames.includes(name)) {
    namePlaceholder.textContent = name;
  } else {
    window.location.href = "/CS-Farewell-2024/404.html"; // Redirect to a 404 page if the name is not valid
  }

  // Disable right-click on the page
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
});
