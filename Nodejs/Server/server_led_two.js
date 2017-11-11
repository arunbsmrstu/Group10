const express = require('express');
const mraa = require('mraa'); //require mraa
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var pin1;
var pin2;
var light1;
var light2;
app.get('/gpio/:pin',(req,res)=>{
    
   var p = parseInt(req.params.pin);
    // var myLed1 = new mraa.Gpio(parseInt(pin1)); //LED hooked up to digital pin 13 (or built in pin on Galileo Gen1 & Gen2)
    //var myLed2 = new mraa.Gpio(parseInt(pin2));
    //myLed1.dir(mraa.DIR_OUT); //set the gpio direction to output
    //myLed2.dir(mraa.DIR_OUT);
    //myLed1.write(1);
    //myLed2.write(0);


	pin = req.params.pin;
    
        var myLed1 = new mraa.Gpio(parseInt(pin)); //LED hooked up to digital pin 13 (or built in pin on Galileo Gen1 & Gen2)
	console.log(myLed1.read());

        res.end('LED:'+pin+"Ligth status:"+myLed1.read());
  
});

app.post('/gpio/:pin1/:pin2',(req,res)=>{
    console.log('Got a POST request');
    console.log(req.body.led1);
    console.log(req.body.led2);
     light1 = parseInt(req.body.led1);
     light2 = parseInt(req.body.led2);
     pin1 = req.params.pin1;
     pin2 = req.params.pin2;
    var myLed1 = new mraa.Gpio(parseInt(pin1)); //LED hooked up to digital pin 13 (or built in pin on Galileo Gen1 & Gen2)
    var myLed2 = new mraa.Gpio(parseInt(pin2));
    //myLed1.dir(mraa.DIR_OUT); //set the gpio direction to output
    //myLed2.dir(mraa.DIR_OUT);
    myLed1.write(light1);
    myLed2.write(light2);
    res.end("Group 10");
   

});



app.listen(5000,()=>{
    console.log('Server Running at Port 5000');
});


