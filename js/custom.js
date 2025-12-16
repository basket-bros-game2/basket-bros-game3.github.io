


/*
Custom script

This file will not be overwritten by the updater
*/
(function() {
  var script = document.createElement('script');
  script.src = "https://analytics.ahrefs.com/analytics.js";
  script.setAttribute("data-key", "VSHMRhCtO2mqqIzel7qJAg");
  script.async = true;
  document.head.appendChild(script);
})();


// JavaScript code for search functionality
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}


