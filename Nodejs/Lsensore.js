var mraa = require('mraa');
console.log('MRAA Version:'+mraa.getVersion());

var led = new mraa.Gpio(6);
var soundSensor = new mraa.Aio(0);

var analogValue = 0.0;
var dutycycle = 0.0;

led.dir(mraa.DIR_OUT);
//soundSensor.dir(mraa.DIR_IN);

function readSensorState(){
    analogValue = soundSensor.read()/1000.0;
	//dutycycle = analogValue.toFixed(1);
 console.log(analogValue);

    //console.log('Button state='+reading);
    if(analogValue <= 0.05){
        led.write(1);

    }
    else{
        led.write(0);
    }
}
setInterval(readSensorState,50);