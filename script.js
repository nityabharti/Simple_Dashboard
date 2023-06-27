//Sidebar toggle

var SidebarOpen = false;
var Sidebar = document.getElementById("sidebar");
function openSidebar() {
  if (SidebarOpen) {
    Sidebar.classList.add("sidebar-responsive");
    SidebarOpen = true;
  }
}

function closeSidebar() {
  if (SidebarOpen) {
    Sidebar.classList.remove("sidebar-responsive");
    SidebarOpen = false;
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
