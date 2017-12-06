// Get file name of current HTML-document.
var path = window.location.pathname;
var page = path.split("/").pop();

// Check if on start page.
if(page == "") {
    // Find menu item with link to current HTML page.
    var link = $("nav li > [href='index.html']")[0];
    
    // Mark active item in menu.
    link.removeAttribute("href");
    link.parentElement.setAttribute("class", "active");
} 

// Check if page starts with "korledare".
else if(page.startsWith("korledare")) {
    // Find menu item with link to current HTML page.
    var link = $("nav li > [href='korledarna.html']")[0];

    // Mark active item in menu.
    link.removeAttribute("href");
    link.parentElement.setAttribute("class", "active");

    // Make dropdown parent marked active too.
    link.parentElement.parentElement.parentElement.setAttribute("class", "active");
}

else {
    // Find menu item with link to current HTML page.
    var link = $("nav li > [href='" + page + "']")[0];

    // Mark active item in menu.
    link.removeAttribute("href");
    link.parentElement.setAttribute("class", "active");

    // Make dropdown parent marked active too.
    if(link.parentElement.parentElement.getAttribute("class") == "dropdown-menu") 
        link.parentElement.parentElement.parentElement.setAttribute("class", "active");
}
