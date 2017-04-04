"use strict";

function zmienTlo(e) {
document.getElementsByTagName('p')[0].style.backgroundColor = "blue";
document.getElementsByTagName('p')[1].style.backgroundColor = "yellow";
}

document.getElementById('tlo').addEventListener('click', zmienTlo);


function pobierzDane(e) {
	e.preventDefault();
	var na = document.getElementsByName('Iname')[0].value;
	var sur = document.getElementsByName('fname')[0].value;
	
	
	console.log(na + " " + sur);
}

document.getElementById('przeslij').addEventListener('click', pobierzDane);


//nowa funkcja


function validateName() {
	var aaa = document.getElementsByName('name')[0];
	if ( aaa.value == null) {
		document.getElementById('kon').innerHTML = "wyszystkie pola muszą być wypełnione"
	}
	console.log('teksaaaaa');
}

document.getElementById('wysylam').addEventListener('click', validateName);
