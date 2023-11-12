setTimeout(function () {
    document.querySelector(".loading-container").style.display = "none";
  }, 1500);
  // Function to disable right-click
  function disableRightClick(e) {
    if (e.button === 2 || e.which === 3) {
        e.preventDefault();
        return false;
    }
}

// Attach the event listener
document.addEventListener('contextmenu', disableRightClick);