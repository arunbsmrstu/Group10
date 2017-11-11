const mraa = require('mraa');
var led = new mraa.Pwm(6); 
led.period_us(700);
led.enable(true);
var analogPin0= new mraa.Aio(1);
var analogValue=0.0;

var analogVal;
var analog;

function readValue(){

    analogValue= analogPin0.read();
    analogVal=analogValue/1000;
    analog=analogVal.toFixed(1);
    console.log(analog);
    led.write(parseFloat(analog));

}

setInterval(readValue,10)
