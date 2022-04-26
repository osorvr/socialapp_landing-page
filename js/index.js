$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#navBg").toggleClass("bgColor");
    $("#mainListDiv").fadeIn();

});