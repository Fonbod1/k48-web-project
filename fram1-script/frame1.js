
  /*window.location.reload();*/


/*
//Check if sessionStorage is supported by the browser
if(typeof(Storage) !== "undefined") {
  // Retrieve the last visited page from sessionStorage
  var lastVisitedPage = sessionStorage.getItem("lastVisitedPage");

  // If last visited page is found, navigate to it
  if(/My projects/Index/index.html) {
    window.location.href = lastVisitedPage;
  }
}

// Save the current page to sessionStorage before leaving the page
// to correct this script
window.addEventListener("beforeunload", function() {
  if (typeof (this.sessionStorage) ! == "undefined") {
    this.sessionStorage.setItem("lastVisitedPage", this.window.location.href)
  }
}); */
/*
// Check if there's a saved state in localStorage
const savedState = localStorage.getItem('/My projects/Index/index.html');

if (/My projects/Index/index.html) {
  // If there's a saved state, use it to set the content
  document.body.innerHTML = /My projects/Index/index.html;
}

// Save the current state to localStorage
window.addEventListener('beforeunload', () => {
  localStorage.setItem('/My projects/Index/index.html', document.body.innerHTML);
});*/

  // Source code
/*// Check if there's a saved state in localStorage
    const savedState = localStorage.getItem('pageState');

    if (savedState) {
      // If there's a saved state, use it to set the content
      document.body.innerHTML = savedState;
    }

    // Save the current state to localStorage
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('pageState', document.body.innerHTML);
    });*/ 