const mraa = require('mraa');
console.log('Mraa version:'+ mraa.getVersion());

var digitalPin0 = new mraa.Gpio(2); // No need to define pin direction
var digitalPin1 = new mraa.Gpio(6);
digitalPin0.dir(mraa.DIR_IN)
digitalPin1.dir(mraa.DIR_OUT) 
var analogValue = 0;

function readValue(){
    analogValue = digitalPin0.read();
    console.log(analogValue);
    digitalPin1.write(analogValue);
}
setInterval(readValue,10);
