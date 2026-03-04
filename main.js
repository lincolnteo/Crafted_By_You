document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Quotation request submitted successfully.");
  this.reset();
});

// Copy phone number on click
document.addEventListener("DOMContentLoaded", function() {
  const phoneElement = document.querySelector(".copy-phone");
  if (phoneElement) {
    phoneElement.addEventListener("click", function() {
      const phoneNumber = this.textContent;
      navigator.clipboard.writeText(phoneNumber).then(function() {
        // Visual feedback
        phoneElement.classList.add("copied");
        setTimeout(function() {
          phoneElement.classList.remove("copied");
        }, 2000);
      }).catch(function(err) {
        console.error("Failed to copy: ", err);
      });
    });
  }
});

