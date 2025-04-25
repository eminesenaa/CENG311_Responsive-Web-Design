$(document).ready(function () {
  console.log("JS DOM loaded!");

  // Datepicker
  $("#birthday").datepicker();
  console.log("Datepicker initialized!");

  // City autocomplete
  var cities = [
    "New York",
    "Washington DC",
    "Charlotte",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Houston",
    "Atlanta",
    "Miami",
    "Boston",
    "Ankara",
    "Bursa",
  ];
  $("#city").autocomplete({ source: cities });
  console.log("City autocomplete initialized!");

  // Programming language autocomplete
  var languages = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
  ];
  $("#language").autocomplete({ source: languages });
  console.log("Language autocomplete initialized!");

  // Form submit alert
  $("#myForm").submit(function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  });
});
