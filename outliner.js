
$("h1").on("click", function () {
    $(this).nextUntil("h1").toggle();
    $(this).toggleClass("more");
});
$("h2").on("click", function () {
    $(this).nextUntil("h1, h2").toggle();
    $(this).toggleClass("more");
});
$("h3").on("click", function () {
    $(this).nextUntil("h1, h2, h3").toggle();
    $(this).toggleClass("more");
});
$("h4").on("click", function () {
    $(this).nextUntil("h1, h2, h3, h4").toggle();
    $(this).toggleClass("more");
});
$("h5").on("click", function () {
    $(this).nextUntil("h1, h2, h3, h4, h5").toggle();
    $(this).toggleClass("more");
});
$("h6").on("click", function () {
    $(this).nextUntil("h1, h2, h3, h4, h5, h6").toggle();
    $(this).toggleClass("more");
});

$("li").hover(function (e) {
    e.stopPropagation();
    if ($(this).children("ul, ol").length > 0) {
        $(this).css("cursor", "pointer");
    }
});
$("h1, h2, h3, h4, h5, h6").hover(function () {
    $(this).css("cursor", "pointer");
});

$("li").click(function(e) {
    e.stopPropagation();
    if ($(this).children("ul, ol").length > 0) {
        $(this).toggleClass("more");
        $(this).children("ul, ol").toggle();
    }
});
