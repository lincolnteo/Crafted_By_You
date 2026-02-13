document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Quotation request submitted successfully.");
  this.reset();
});
