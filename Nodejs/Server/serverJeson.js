var express=require('express');
var app= express();
var mraa = require('mraa');
var bodyParser =require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/gpio/:pin',function(req,res){

	 res.send('Group 10');
	console.log(req.params.pin);
	var p=parseInt(req.params.pin);
	
		var pin = new mraa.Gpio(p);
                pin.dir(mraa.DIR_OUT);
                pin.write(0); 
	              

})

app.post('/gpio/:pin',function(req,res){

        //var data=req.body

	 //res.send('Group 10');
	console.log(req.params.pin);
	var p=parseInt(req.params.pin);

	        
	console.log(req.body.LED);

	if(req.body.LED=='on'){

		var pin = new mraa.Gpio(p);
                pin.dir(mraa.DIR_OUT);
                pin.write(1); 
		res.end("aaaa");
	}
	else{

		var pin = new mraa.Gpio(p);
                pin.dir(mraa.DIR_OUT);
                pin.write(0); 
		res.end("aaaa");
	}

		
        //res.json(req.body)

	

      
})

app.listen(5000,()=>{

	console.log("Server is running !!!!");
	

})