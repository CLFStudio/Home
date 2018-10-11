//To Readmore
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