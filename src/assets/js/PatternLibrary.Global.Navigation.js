var PatternLibrary = PatternLibrary || {};
PatternLibrary.Global = PatternLibrary.Global || {};

PatternLibrary.Global.Navigation = function() {
  "use strict";

  var libraryContainer = null;
  var libraryContent = null;
  var menuLink = null;

  function initializeDomElements() {
    libraryContainer = document.getElementById("libraryContainer");
    libraryContent = document.getElementById("libraryContent");
    menuLink = document.getElementById("menuToggle");
  }

  // Checks if the menu is open, then closes it
  function closeMenu() {
    if (libraryContainer.classList) {
      if (libraryContainer.classList.contains("open")) {
        toggleMenu();
      }
    }
  }

  function toggleMenu() {
    event.preventDefault();

    if (libraryContainer.classList) {
      libraryContainer.classList.toggle("open");
    }
  }

  function wireEvents() {
    menuLink.addEventListener("click", toggleMenu, false);
    libraryContent.addEventListener("click", closeMenu, false);
  }

  function initialize() {
    hljs.initHighlightingOnLoad();    // initialize Highlight.js
    initializeDomElements();
    wireEvents();
  }

  // Expose our private functions
  return {
    initialize: initialize
  };
}();

// Run our code above
document.addEventListener("DOMContentLoaded", function(event) {
  "use strict";

  PatternLibrary.Global.Navigation.initialize();
});
