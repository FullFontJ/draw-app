// document.ready(setColors);
document.addEventListener("DOMContentLoaded", setColors, false);



function setColors(){
    let colors_array = ["yellow", "pink", "orange", "gray", "red", "black", "white"];

    for(let i = 0; i<colors_array.length; i++){
        const insert = document.querySelector('#changeColor');
        insert.innerHTML += '<button class="set-color" id="'+colors_array[i]+'" style="background-color:'+colors_array[i]+';"></button>';
        // $('changeColor').append('<button class="set-color" id="'+colors_array[i]+'" style="background-color'+colors_array[i]+'"></button>');
    }

    var color = document.getElementById("changeColor");
    color.addEventListener("click", function(e){
        let selectedColor = e.srcElement.id;
        context.fillStyle = selectedColor;
        context.strokeStyle = selectedColor;
    });
}