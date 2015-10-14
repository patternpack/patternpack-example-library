var PatternLibrary = PatternLibrary || {};
PatternLibrary.Global = PatternLibrary.Global || {};

PatternLibrary.Global.Navigation = function() {
  var _libraryContainer = null;
  var _libraryContent = null;
  var _menuLink = null;

  function initializeDomElements() {
    _libraryContainer = document.getElementById('libraryContainer');
    _libraryContent = document.getElementById('libraryContent');
    _menuLink = document.getElementById('menuToggle');
  }

  // Checks if the menu is open, then closes it
  function closeMenu() {
    if (_libraryContainer.classList) {
      if (_libraryContainer.classList.contains('open')) {
        toggleMenu();
      }
    }
  }

  function toggleMenu() {
    event.preventDefault();

    if (_libraryContainer.classList) {
      _libraryContainer.classList.toggle('open');
    }
  }

  function wireEvents() {
    _menuLink.addEventListener("click", toggleMenu, false);
    _libraryContent.addEventListener("click", closeMenu, false);
  }

  function initialize() {
    hljs.initHighlightingOnLoad();    // initialize Highlight.js
    initializeDomElements();
    wireEvents();
  }

  // Expose our private functions
  return {
    initialize: initialize
  }
}();

// Run our code above
document.addEventListener("DOMContentLoaded", function(event) {
  PatternLibrary.Global.Navigation.initialize();
});