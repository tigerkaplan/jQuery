

// $ (document).ready(function () {
//     $("p").css("color", "red");
// }); 

// $ (function () {
//     $("h1,h2,h3").css("color", "red");
// }); 



$(function () {
    $("#test").click(function () {
        $("tr td:first").css("background-color", "yellow").css("height", "105px");
    });
});