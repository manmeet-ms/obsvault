
### Connect the display Board and print ‘Hello World’ on it. Scroll display from left to right.

```cpp
#include <LiquidCrystal.h>
int registerSelect = 12, enable = 11, DB4 = 5, DB5 = 4, DB6 = 3, DB7 = 2; 
LiquidCrystal lcd (registerSelect, enable, DB4, DB5, DB6, DB7); 
void setup(){
  lcd.print("HELLO WORLD!"); 
}
void loop(){
while(true){
  lcd.scrollDisplayLeft(); 
  delay(300); 
}      
  delay(100); 
}
```

### Speed control of stepper motor

```cpp
#include <Stepper.h>
int steps = 32;
int speedVar = 50; //sets motor speed
int in1Pin = 8;
int in2Pin = 9;
int in3Pin = 10;
int in4Pin = 11;
Stepper motor(steps, in1Pin, in2Pin, in3Pin, in4Pin);  
void setup()
{
  pinMode(in1Pin, OUTPUT);  pinMode(in2Pin, OUTPUT);
  pinMode(in3Pin, OUTPUT);  pinMode(in4Pin, OUTPUT);
  motor.setSpeed(speedVar);
}
void loop(){
  motor.step(steps);}
```
### Use the LDR and estimate a threshold for the LDR value and use that to turn the RGB LED on, to simulate an ‘automatic porch light’

```cpp
int LED_PIN = 5;
int LDR_PIN = A0;
int readData;
void setup(){
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}
void loop(){
  readData = analogRead(LDR_PIN);
  
  if(readData < 935) {// defines the desired darkness (depends on programmer)
    digitalWrite(LED_PIN, HIGH);
  }
  else {
    digitalWrite(LED_PIN, LOW);
  }
  delay(100); }
```
  
  
### To blink an LED at an observable rate.
Onboard LED of Arduino.
Any other pin.
```
#define LED_RED 13
#define LED_GREEN 8
void setup(){
  pinMode(LED_RED, OUTPUT);
  pinMode(LED_GREEN, OUTPUT);
}
void loop(){
  digitalWrite(LED_RED, HIGH);
  digitalWrite(LED_GREEN, HIGH);
  delay(1000);
  digitalWrite(LED_RED, LOW);
  digitalWrite(LED_GREEN, LOW);
  delay(1000);
}

```
###  To flash an LED at such rate so that it appears always ON. Estimate the onset of the rate when the LED appears to stay on.
	
```
 #define LED_RED 13
#define LED_GREEN 8
#define DELAY 50
void setup(){
  pinMode(LED_RED, OUTPUT);
  pinMode(LED_GREEN, OUTPUT);
}
void loop(){
  digitalWrite(LED_RED, HIGH);
  digitalWrite(LED_GREEN, HIGH);
  delay(DELAY); 
  digitalWrite(LED_RED, LOW);
  digitalWrite(LED_GREEN, LOW);
  delay(DELAY);
}
```
Observation:
Delay at which LED appears always ON = 50ms

### Controlling ON/OFF of an LED using switch.

```
const int LEDPIN = 12;
const int SWITCHPIN = 7;
void setup() {
  pinMode(LEDPIN, OUTPUT);
  pinMode(SWITCHPIN, INPUT_PULLUP);
}
void loop() {
  int state = digitalRead(SWITCHPIN);
  digitalWrite(LEDPIN, state == HIGH ? LOW : HIGH);
  delay(100);
}
```


### Use the potentiometer to change the red LED intensity from 0 to maximum in 256 steps.

```cpp
#define LEDPIN 11
#define INPUTPIN A1
void setup() {
  pinMode(LEDPIN, OUTPUT);
 }
 void loop()
{
  int potVal = analogRead(INPUTPIN);
  int potValScaledBrightness = potVal/4;
  analogWrite(LEDPIN, potValScaledBrightness);
  delay(10);
}
```

###  Implement a traffic light controller
 
 ```cpp
#define RED 9
#define YELLOW 11
#define GREEN 13
void setup() {
  pinMode(RED, OUTPUT);
  pinMode(YELLOW, OUTPUT);
  pinMode(GREEN, OUTPUT);
}
void loop(){
 int seconds = 1000; // in seconds
  digitalWrite(RED, HIGH);
  digitalWrite(YELLOW, LOW);
  digitalWrite(GREEN, LOW);
  delay((90*seconds));
    digitalWrite(YELLOW, HIGH);
  digitalWrite(RED, LOW);
  digitalWrite(GREEN, LOW);
  delay((2*seconds));
	    digitalWrite(GREEN, HIGH);
  digitalWrite(RED, LOW);
  digitalWrite(YELLOW, LOW);
  delay((100*seconds));
}
```


###  Write a code to rotate DC motor clockwise and anti-clockwise.
```cpp
#define pin2 2 
#define pin4 4
int flip=0;
void setup (){
pinMode (pin2 , OUTPUT);
pinMode (pin4 , OUTPUT);}
void loop (){
  if (flip){
    digitalWrite(pin2, HIGH);
    digitalWrite(pin4, LOW);
  }else{
    digitalWrite(pin4, HIGH);
    digitalWrite(pin2, LOW);
  }
  delay(3000);
  flip=flip?0:1;
}
```
###  Use the thermistor to estimate the temperature and print the raw value on the serial monitor.
```cpp
#define sensorPin A0
int sensorValue = 0;
void setup() {
Serial.begin(9600);
}
void loop() {
sensorValue = analogRead(sensorPin);
Serial.println(sensorValue);
delay(500);
}
```

###  Read the ADC value of the voltage divider involving the LDR. Print the value on the serial monitor.
```cpp
int sensorPin = A0; // select the input pin for LDR
int sensorValue = 0; // variable to store the value coming from the sensor
void setup() {
Serial.begin(9600); //sets serial port for communication
}
void loop() {
sensorValue = analogRead(sensorPin); // read the value from the sensor
Serial.println(sensorValue); //prints the values coming from the sensor on the screen
delay(100);
}
```


### Use (RGB led) and then the potentiometer to set the intensity of that LED and create different colors.

```cpp
#define inpRED A0
#define inpGREEN A1
#define inpBLUE A2
#define RED_write 11
#define GREEN_write 10
#define BLUE_write 9
int  redValue = 0; 
int  greenValue = 0; 
int  blueValue = 0; 
void setup() {
  pinMode(RED_write, OUTPUT);
  pinMode(GREEN_write, OUTPUT);
  pinMode(BLUE_write, OUTPUT);
}
void loop() {
  redValue = analogRead(inpRED)/4;
  greenValue = analogRead(inpGREEN)/4;
  blueValue = analogRead(inpBLUE)/4;
  analogWrite( RED_write,redValue);
  analogWrite( GREEN_write,greenValue);
  analogWrite( BLUE_write,blueValue);
  delay(10);
}
```