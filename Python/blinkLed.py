#!/usr/bin/env python  
  
import mraa  
import time  
  
led = mraa.Gpio(6)  
led.dir(mraa.DIR_OUT)  
  
while True:  
    led.write(0)  
   