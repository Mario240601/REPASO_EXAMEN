function cambiar_edad() {
	var objeto_edad = document.getElementById('num_ninios');
	var numero_ninios= objeto_edad.value;
	var listas = document.getElementsByTagName('input');
		for(i=1; i<listas.length-1; i++)
		{
			listas[i].className="oculto";
		}
		for (i=1; i<=numero_ninios; i++)
		{
			listas[i].className="mostrado";
		}
}

function mostrar_alert(){
var nombre= document.getElementsByTagName('input')[0].value;

var ninios=document.getElementById('num_ninios');
var cant_ninios=ninios.value;
var adultos=document.getElementsByTagName('select')[0].value


if(nombre.length>3){
	alert("Introduce un nombre mas largo");
	document.getElementById('adulto').style.backgroundColor="green";

}

if (cant_ninios==0) {
	alert("El cliente " + nombre + " ha reservado una habitacion para "+ adultos);
}
else{alert("El cliente " + nombre + " ha reservado una habitacion para "+ adultos +" adultos y " + cant_ninios + " niños" );}


}

function cambia(){
	var mostrar = document.getElementsByTagName('button')[1];
	var ocultado =document.getElementsByTagName('input')[5].className;
	if (ocultado == "oculto"){
	
	
	document.getElementsByTagName('input')[5].className="mostrado";
	}
	else  {
		document.getElementsByTagName('input')[5].className="oculto";}}


  function entrar(){
  var entrar = document.getElementsByTagName('input')[6].style.backgroundColor="red";
}

function salir() {
	var salir = document.getElementsByTagName('input')[6].style.backgroundColor="indigo";
}
 

 function puedes() {
 	var edad = document.getElementById('edades').value;
 	var boton= document.getElementsByTagName('button')[3];
   
 	if (edad < 18){
 		document.getElementById('edades').style.backgroundColor="red";
 		document.getElementsByTagName('p')[1].className="mostrado";
 		document.getElementsByTagName('p')[0].className="oculto";
 	}
 	else{
 		document.getElementById('edades').style.backgroundColor="green";
 		document.getElementsByTagName('p')[0].className="mostrado";
 		document.getElementsByTagName('p')[1].className="oculto";
 	}

 }

 function encima () {
 var encima=document.getElementsByTagName('p')[2].style.backgroundColor="orange";


 }
function fuera() {
	var encima=document.getElementsByTagName('p')[2].style.backgroundColor="yellow";

}
 

 function parrafo (){
 	var recoge_nombre = document.getElementById('recoge').value;
 	var botoncio = document.getElementsByTagName('button')[4];
 	var parrafo = document.getElementById('texto_cambio').innerHTML=recoge_nombre;


 } 
  
