// VARIABLES //
var topButton = document.getElementById("js-top-btn");          // Reference to scroll to top button
var downIcon = document.getElementById("js-scroll-down-icon");  // Reference to scroll down hint
var xPos = downIcon.style.bottom;                               // xPos of scroll down hint
var up;                                                         // Hint moving up or not?

var thresholdTop = $(window).innerHeight();                     // When to show scroll to top button
var thresholdDown = 150;                                        // When to hide scroll down hint

var loadMoreButton = document.getElementById("js-load-more");   // Reference to load more button
const additionalArticles = 2;                                   // Number of additional articles to be loaded

var articles = $(document).find("article");                     // Collection of all articles
var panels = articles.find(".panel");                           // Collection of expandable panels
var input = document.getElementById("js-search-bar");           // Reference to search input

// INITIAL SETUP //
hideArticles();                                                 // First hide all articles
loadMore();                                                     // Then load first articles
for (var i = 0; i < panels.length; i++) {                       // Collapse all panels
    panels[i].style.maxHeight = "0px";
}

// MAIN LOOP //
setInterval(animateHint, 75);                                   // Animate scroll down hint
window.onscroll = function() {showOnScrollDown(thresholdTop, topButton), hideOnScrollDown(thresholdDown, downIcon)}; // Check if buttons should be shown or hidden

// INTERNAL FUNCTIONS //
function hideArticles() {
    for (var i = 0; i < articles.length; i++) {
        articles[i].style.display = "none";
    }
}

function animateHint() {
    if (xPos == 10) {
        up = false;
    } else if (xPos == 0) {
        up = true;
    }
    if (up) {
        xPos++;
    } else if (!up) {
        xPos--;
    }
    downIcon.style.bottom = xPos + "px";
}

function showOnScrollDown(threshold, element) {
    if (document.body.scrollTop > threshold || document.documentElement.scrollTop > threshold) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function hideOnScrollDown(threshold, element) {
    if (document.body.scrollTop > threshold || document.documentElement.scrollTop > threshold) {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}


// EXTERNAL FUNCTIONS //
function readMore(btn) {
    var parent = btn.parentElement;
    var panel = $(parent).find(".panel")[0];

    if (panel.style.maxHeight == "0px") {
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.innerHTML = "Read less";
    } else {
        panel.style.maxHeight = "0px";
        btn.innerHTML = "Read more"
    }
}

function loadMore() {
    var hiddenArticles = $(document).find("article:hidden");
    var i = 0;

    if (i + additionalArticles >= hiddenArticles.length) {
        loadMoreButton.style.visibility = "hidden";
    }

    while (i < hiddenArticles.length && i < additionalArticles) {
        hiddenArticles[i].style.display = "block";
        i++;
    }
}

// Search Articles 
function searchArticles() {
    var searchTerm = input.value.toLowerCase();
    var matches = [];
    // If search term is empty, reset articles and show load more
    if (searchTerm == "") {
        hideArticles();
        loadMore();
        articles[0].scrollIntoView();
        loadMoreButton.style.visibility = "visible";
        return;
    }

    // Loop through all articles
    for (var i = 0; i < articles.length; i++) {
        // If an article contains the exact search term, add it to results
        if (articles[i].innerText.toLowerCase().search(searchTerm) > -1) {
            matches.push(articles[i]);
        }
    }
    // Only display the matches and scroll to the first one, hide load more button
    hideArticles();
    for (var i = 0; i < matches.length; i++) {
        matches[i].style.display = "block";
    }
    if (matches[0]) {
        matches[0].scrollIntoView();
    }
    loadMoreButton.style.visibility = "hidden";

    // Add notifier if no results?
}

// Show side nav on burger click
function showNav() {
    document.getElementById("js-sidenav").style.width = "250px";
    document.getElementById("js-close-btn").style.display = "block";
    document.getElementById("js-nav-burger").style.display = "none";
}

// Hide side nav on cross click
function hideNav() {
    document.getElementById("js-sidenav").style.width = "0";
    document.getElementById("js-close-btn").style.display = "none";
    document.getElementById("js-nav-burger").style.display = "block";
}

// Scroll to Top
function scrollToTop() {
    //document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Scroll content into view
function scrollContent() {
    scrollTo(0, thresholdTop);
}