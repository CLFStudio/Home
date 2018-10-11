//To Readmore
! function readMore() {
    var winH = $(window).height();
    const tabBox = $(".tab:visible");
    var tabH = tabBox.height();

    if (tabH > winH) {
        tabBox.css({
            "height": "500px",
            "overflow": "hidden"
        });
        $("#btn_readMore").click(
            function () {
                $(".hide_box").remove();
                tabBox.css({
                    "height": "auto",
                    "overflow": "block"
                });
            }
        );
    } else {
        $(".hide_box").remove();
    }
}();


// HideHeader
! function hideHeader() {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $("header").outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $("header").removeClass("nav-down").addClass("nav-up");
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $("header").removeClass("nav-up").addClass("nav-down");
            }
        }

        lastScrollTop = st;
    }
}();

function playPause() {
    var myVideo = document.querySelector('.daily-life-video');
    myVideo.paused ? myVideo.play() : myVideo.pause();
}

function videoPlay() {
    $('video').click(
        function () {
            $('video').play();
        }
    );
}