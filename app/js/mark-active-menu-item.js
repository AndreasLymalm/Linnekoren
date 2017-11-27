// Get file name of current HTML-document.
var path = window.location.pathname;
var page = path.split("/").pop();

// Find menu item with link to current HTML page.
var link = $("nav li > [href='" + page + "']")[0];

// Mark active item in menu.
link.removeAttribute("href");
link.parentElement.setAttribute("class", "active");

// Make dropdown parent marked active too.
if(link.parentElement.parentElement.getAttribute("class") == "dropdown-menu"){
    link.parentElement.parentElement.parentElement.setAttribute("class", "active");
}