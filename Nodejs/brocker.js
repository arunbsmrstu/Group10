var mraa= require('mraa');

var led = new mraa.Gpio(13);

led.dir(mraa.DIR_OUT);

const mqtt= require('mqtt');
const client =mqtt.connect('mqtt://iot.eclipse.org');

client.on('connect',function(){

	client.subscribe('IoT');
	console.log('Subscribed to the tropic = IoT');
	console.log('I get executed Once!!!');

});

client.on('message',function(topic,message){
	if(topic=="IoT"){
		if(message=="on"){
			led.write(1);
			console.log('LED Turned ON');
		}
		else if(message == 'off'){
			led.write(0);
			console.log('LED Truned OFF');
		}
	}

});

