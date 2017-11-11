/* Thermometer

Connect Intel Edison with Seedstudio Grove Starter Kit Plus Temperature sensor and display to make a Thermometer.

Hardware:
Intel Edison Kit for Arduino
Grove Starter Kit Plus, containing - 
    Base Shield
    Temperature Sensor
    LCD Display
    
Connect the LCD to and I2C Port
Connect the temperature sensor to A2 port
Set shield for 5 volts

pete@hoffswell.com
June, 2016
*/

var mraa = require('mraa'); //require mraa
console.log('Thermometer');
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console
var lcd = require('jsupm_i2clcd');
var display = new lcd.Jhd1313m1(0, 0x3E, 0x62);
var analogPin0 = new mraa.Aio(0); //setup access analog input Analog pin #0 (A0)
var B = 3975; // B value of termistor 
var delay = 3000; // delay between reads/display

display.setColor(0, 100, 50);  // R G B display background color

read_display(); // start the loop

function read_display() {
    // read the temperature sensor, convert to celsius/fahrenheit, display on console and LCD.
    var analogValue = analogPin0.read(); //read the value of the analog pin
    var resistance = (1023 - analogValue) * 10000 / analogValue; //get the resistance of the sensor;
    var celsius_temperature = 1 / (Math.log(resistance / 10000) / B + 1 / 298.15) - 273.15; //convert to temperature via datasheet ;
    var fahrenheit_temperature = (celsius_temperature * (9 / 5)) + 32;
    var display_temp = fahrenheit_temperature;
    
    display.setCursor(0,0);
    display.write('Temp: ' + display_temp);  
    console.log('Temp: ' + display_temp);
    setTimeout(read_display,delay);
    
}