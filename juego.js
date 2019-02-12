opciones=["1","2","3","mina"];

function func(esto){
	var campo=Math.round(Math.random()*(3-0)+0);
	esto.value=opciones[campo];
	esto.disabled=true;
}