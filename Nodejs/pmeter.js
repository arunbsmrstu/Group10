const mraa=require('mraa');
console.log('MRAA Version:'+mraa.getVersion());

var analogPin0 = new mraa.Aio(1);


var analogValue=0.0;

function readValue(){

	analogValue= analogPin0.read();
        console.log(analogValue);

}

setInterval(readValue,10);