var express=require('express');
var app= express();
var mraa = require('mraa');

app.get('/gpio/:pin',function(req,res){

	 res.send('Group 10');
	console.log(req.params.pin);
	var p=parseInt(req.params.pin);
	
	function off(){
		var pin = new mraa.Gpio(p);
                pin.dir(mraa.DIR_OUT);
                pin.write(0); 
	}
	function on(){
		var pin = new mraa.Gpio(p);
                pin.dir(mraa.DIR_OUT);
                pin.write(1);	}
	
		 

	setInterval(on,250);

	setInterval(off,500);
              

})

app.listen(5000,()=>{

	console.log("Server is running !!!!");
	

})