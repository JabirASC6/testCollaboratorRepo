//This code is only for demp presentations to switch divs before it is set up
let presentSearch = document.getElementById("presentSearch");
let search = document.getElementById("search");
let home = document.getElementById("homePage");
let presentHome = document.getElementById("presentHome");

//making presentSearch switch from the home div to the search div
presentSearch.onclick = function(event){
  event.preventDefault();
  home.style.display = "none";
  search.style.display = "block";
}

//making presentHome switch from the search div to the home div
presentHome.onclick = function(event){
  event.preventDefault();
  home.style.display = "block";
  search.style.display = "none";
}