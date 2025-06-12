$(document).ready(function () {
  // Initialize the datepicker
  $("#datepicker").datepicker({
    dateFormat: "mm/dd/yy",
    onSelect: function (dateText) {
      alert("Selected date: " + dateText);
    }
  });

  // Handle form submission
  $("#myForm").submit(function (event) {
    event.preventDefault(); // Prevent the default form submission
    var selectedDate = $("#datepicker").val();
    alert("Form submitted with date: " + selectedDate);
  });
});
    