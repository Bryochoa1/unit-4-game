
// 4 crystals random results...
// individual crystals different numbers 1-12
// new number should be generated everytime
// win lose optionis
// add everytime you hit a diff crystal
// if greater than win option we take one away
// if equal we add one


var randomResult;
var lose;
var win;


for (let i = 0; i < 4; i++) {

    var crystal = $("<div>");
        crystal.attr("class", 'crystal')
    $(".crystals").append(crystal);
      
}