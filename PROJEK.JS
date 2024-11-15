

// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Show popup on page load
    const popup = document.getElementById("myPopup");
    popup.style.display = "flex";
  
    // Close popup functionality
    const closeBtn = document.querySelector(".closeBtn");
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  });