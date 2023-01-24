/** 
document.getElementById('botton').onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en js";
}

document.addEventListener('clic', function() {
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en js"
});
*/

document.getElementById('botton').addEventListener('click', function() {
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en js"
});


document.getElementById('botton_color').addEventListener('click', function() {
   document.body.style.backgroundColor = '#A8FF33';
});

document.getElementById('botton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = 'cornflowerblue';
});


document.getElementById('botton_ocultar').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none';
});



const collection = document.getElementsByClassName("prueba");

for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "green";
}


