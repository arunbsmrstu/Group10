var mraa= require('mraa');
console.log('MRAA Version:' +mraa.getVersion());
var led = new mraa.Pwm(6);

led.period_us(700);
led.enable(true);

const mqtt= require('mqtt');
const client =mqtt.connect('mqtt://test.mosquitto.org');


client.on('connect',function(){

	client.subscribe('IoT');
	console.log('Subscribed to the tropic = IoT');
	console.log('I get executed Once!!!');

});

client.on('message',function(topic,message){
	if(topic=="IoT"){
		
		console.log(parseFloat(message));
		led.write(parseFloat(message));	

	}

});
