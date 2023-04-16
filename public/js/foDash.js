function showPage(pageName) {
    var iframe = document.getElementById("page-content");
    switch (pageName) {
        case "foRegistrartion":
            iframe.src = "foRegistrartion";
            break;
        case "foApprove":
            iframe.src = "foApprove";
            break;
        case "approve":
            iframe.src = "approve.html";
            break;
        case "bookingAndOrders":
            iframe.src = "bookingAndOrders.html";
            break;
        case "foAuth":
            iframe.src = "foAuth";
            break;
    }

    // Update active class on sidebar items
    var sidebarItems = document.getElementsByClassName("sidebar-item");
    for (var i = 0; i < sidebarItems.length; i++) {
        if (sidebarItems[i].innerHTML.toLowerCase().indexOf(pageName.toLowerCase()) > -1) {
            sidebarItems[i].classList.add("active");
        } else {
            sidebarItems[i].classList.remove("active");
        }
    }
}