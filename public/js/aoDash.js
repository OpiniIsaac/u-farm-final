function showPage(pageName) {
    var iframe = document.getElementById("page-content");
    switch (pageName) {
      case "aoRegistrartion":
        iframe.src = "aoRegistrartion";
        break;
      case "registeredFarmerOne":
        iframe.src = "registeredFarmerOne";
        break;
      case "foAppoint":
        iframe.src = "foAppoint";
        break;
      case "aoAuth":
        iframe.src = "aoAuth";
        break;
    }
  }