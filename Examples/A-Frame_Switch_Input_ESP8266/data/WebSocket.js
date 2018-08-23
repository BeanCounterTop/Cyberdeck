var connection = new WebSocket('ws://'+location.hostname+':81/', ['arduino']);
connection.onopen = function () {
    connection.send('Connect ' + new Date());
};
connection.onerror = function (error) {
    console.log('WebSocket Error ', error);
};
connection.onmessage = function (e) {  
	var entityEl = document.querySelector('#bluebox');
	var message = event.data;
	
	if (message == 'SW_ONE:ON') {
		entityEl.setAttribute('material', 'color', 'crimson');
	}
	if (message == 'SW_ONE:OFF') {
		entityEl.setAttribute('material', 'color', 'blue');
	}
	

};
connection.onclose = function(){
    console.log('WebSocket connection closed');
};
