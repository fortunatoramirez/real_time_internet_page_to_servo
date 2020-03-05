var socket;

function init() {
	try {
		socket = io.connect('http://192.168.26.216:5001', {'forceNew': true});

		socket.on('messages', function(data){
		    render(data);
		});

	}
	catch(ex){ 
		console.log(ex); 
	}
}

function render(data){

	var html = "Muestra: "+data;
	document.getElementById('messages').innerHTML = html;
}



function funcion_1()
{
	var valor_1 = document.getElementById("txt_1").value;
	socket.emit("boton_1", valor_1);

}




