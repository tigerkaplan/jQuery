$(document).ready(function(){
//$().css()
//$("#p1").css("color", "red");
//$("#p1").css("color","red").css("background-color", "blue");

// * Multi Selectors
//Object

// $(".p2").css({
//     "color": "red",
//     "background-color": "blue",
//     "font-size": "25px"
// });

// * Object Var   Selectors
// var styleObject = {
//     "color": "yellow",
//     "background-color": "blue",
//     "font-size": "25px",
//     "opacity": "0.1",
// }

// $(".p2").css(styleObject);

//* object CamelCase

var styleObjectCamelCase = {
    color: "yellow",
    backgroundColor: "blue",
    fontSize: "25px",
    opacity: "0.9"
};

$(".p2").css(styleObjectCamelCase);
});