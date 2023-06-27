//Sidebar toggle

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
function openSidebar() {
  if (sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

// JavaScript to handle showing the content when a link is clicked
function showContent(contentId) {
  // Hide all content divs
  var contentDivs = document.getElementsByClassName("content");
  for (var i = 0; i < contentDivs.length; i++) {
    contentDivs[i].style.display = "none";
  }

  // Show the clicked content div
  var selectedContent = document.getElementById(contentId);
  selectedContent.style.display = "block";
}
