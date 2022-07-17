// Fade in on scroll
$(window).on("load", function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            var objectOffset = $(this).offset().top + 50;

            if (objectOffset < windowBottom) {
                if ($(this).css("opacity")==0) {
                    $(this).fadeTo(500, 1);
                }
            }
        });
    }).scroll();
});

// Read more function
function readMore(btn) {
    var parent = btn.parentElement;
    var panel = $(parent).find(".panel")[0];

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        btn.innerHTML = "Read more"
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.innerHTML = "Read less";
    }
}

// Show side nav on burger click
function showNav() {
    document.getElementById("js-sidenav").style.width = "250px";
    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("navBurger").style.display = "none";
}

// Hide side nav on cross click
function hideNav() {
    document.getElementById("js-sidenav").style.width = "0";
    document.getElementById("closeBtn").style.display = "none";
    document.getElementById("navBurger").style.display = "block";
}

// Scroll to Top
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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

// Show scroll to top button when scrolling down and hide scroll down hint
var topButton = document.getElementById("topBtn");
var downIcon = document.getElementById("scroll-down-icon");

var thresholdTop = $(window).innerHeight();
var thresholdDown = 150;

window.onscroll = function() {showOnScrollDown(thresholdTop, topButton), hideOnScrollDown(thresholdDown, downIcon)};

// Animate scroll down hint
var id = setInterval(frame, 75);
var xPos = downIcon.style.bottom;
var up;

function frame() {
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