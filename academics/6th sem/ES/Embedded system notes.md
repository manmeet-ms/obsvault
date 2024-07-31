| VON NEUMANN ARCHITECTURE                                                      | HARVARD ARCHITECTURE                                                          |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| It is ancient computer architecture based on stored program computer concept. | It is modern computer architecture based on Harvard Mark I relay based model. |
| Same physical memory address is used for instructions and data.               | Separate physical memory address is used for instructions and data.           |
| There is common bus for data and instruction transfer.                        | Separate buses are used for transferring data and instruction.                |
| Two clock cycles are required to execute single instruction.                  | An instruction is executed in a single cycle.                                 |
| It is cheaper in cost.                                                        | It is costly than Von Neumann Architecture.                                   |
| CPU can not access instructions and read/write at the same time.              | CPU can access instructions and read/write at the same time.                  |
| It is used in personal computers and small computers.                         | It is used in micro controllers and signal processing.                        |
|                                                                               |                                                                               |

![[Pasted image 20240602233244.png]] 

| RISC                                                                                                                                | CISC                                                                                                                                                    |                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Focus on software                                                                                                                   | Focus on hardware                                                                                                                                       |                                                                      |
| Uses only [Hardwired control unit](https://www.geeksforgeeks.org/computer-organization-hardwired-vs-micro-programmed-control-unit/) | Uses both hardwired and [microprogrammed control unit](https://www.geeksforgeeks.org/computer-organization-hardwired-vs-micro-programmed-control-unit/) |                                                                      |
| Transistors are used for more registers                                                                                             | Transistors are used for storing complex   <br>Instructions                                                                                             |                                                                      |
| Fixed sized instructions                                                                                                            | Variable sized instructions                                                                                                                             |                                                                      |
| Can perform only Register to Register Arithmetic operations                                                                         | Can perform REG to REG or REG to MEM or MEM to MEM                                                                                                      |                                                                      |
| Requires more number of registers                                                                                                   | Requires less number of registers                                                                                                                       |                                                                      |
| Code size is large                                                                                                                  | Code size is small                                                                                                                                      |                                                                      |
| An instruction executed in a single clock cycle                                                                                     | Instruction takes more than one clock cycle                                                                                                             |                                                                      |
| An instruction fit in one word.                                                                                                     | Instructions are larger than the size of one word                                                                                                       |                                                                      |
| Simple and limited addressing modes.                                                                                                | Complex and more addressing modes.                                                                                                                      |                                                                      |
| RISC is Reduced Instruction Cycle.                                                                                                  | CISC is Complex Instruction Cycle.                                                                                                                      |                                                                      |
| The number of instructions are less as compared to CISC.                                                                            | The number of instructions are more as compared to RISC.                                                                                                |                                                                      |
| It consumes the low power.                                                                                                          | It consumes more/high power.                                                                                                                            |                                                                      |
| RISC is highly pipelined.                                                                                                           | CISC is less pipelined.                                                                                                                                 |                                                                      |
| RISC required more [RAM](https://www.geeksforgeeks.org/different-types-ram-random-access-memory/).                                  | CISC required less RAM.                                                                                                                                 |                                                                      |
| Here, Addressing modes are less.                                                                                                    | Here, Addressing modes are more.                                                                                                                        |                                                                      |




| **Basis for Comparison**   | **Microprocessor**                                  | **Microcontroller**                                                  |
| -------------------------- | --------------------------------------------------- | -------------------------------------------------------------------- |
| Functional Units           | ALU, registers, CU.                                 | ALU, register, CU, IO ports, RAM, ROM, ADC, DAC, timer and counters. |
| Data transfer instructions | It has large number of data transfer instructions.  | Comparitively less number of such instructions.                      |
| Cost                       | High                                                | Comparatively low.                                                   |
| Size of PCB                | Large                                               | Small in comparison to microprocessor.                               |
| Weight                     | Bulky                                               | Less bulky                                                           |
| Processing speed           | 1 GHz                                               | 8 to 50 MHz.                                                         |
| Uses                       | Finds its use in general purpose computing systems. | Used in systems that are manufactured for specific application.      |
| Efficiency                 | Less efficient                                      | More efficient                                                       |
| Power consumption          | High                                                | Low in comparison to microcontroller                                 |
| Reliability                | Less reliable                                       | More reliable                                                        |
| Example                    | 8085, 8086 etc                                      | 8051, 8951 etc.                                                      |


| Category                        | Computer                                                                                                                                   | Embedded device                                                                                                                                                                                                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**                 | A computer is a combination of hardware and software resources that integrate and provide various functionalities to the user.             | An embedded device is part of an integrated system that is formed as a combination of computer hardware and software for a specific function and which can operate without human interaction.                                                                          |
| **Human Interaction**           | A computer needs Human Interaction to perform tasks.                                                                                       | Embedded devices do not need Human Interaction to perform tasks.                                                                                                                                                                                                       |
| **Types based on architecture** | Analog computer, Digital computer, Hybrid computer, Harvard architecture, Von Neumann architecture, Reduced instruction set computer       | Small Scale Embedded Systems, Medium Scale Embedded Systems, Sophisticated or Complex Embedded Systems                                                                                                                                                                 |
| **Parts**                       | It has 2 parts: Hardware and Software.                                                                                                     | It has 3 parts: Hardware, Firmware, and Software.                                                                                                                                                                                                                      |
| **Tasks**                       | It can perform many tasks.                                                                                                                 | It performs limited tasks.                                                                                                                                                                                                                                             |
| **Cost to user**                | The user has to pay more for a computer.                                                                                                   | The user incurs a lesser cost for an embedded system.                                                                                                                                                                                                                  |
| **Peripherals**                 | Computers have peripherals such as keyboards and mice, displays, printers, Hard disk drives, floppy disk drives, optical disc drives, etc. | Embedded Devices have peripherals such as Serial Communication Interfaces (SCI), Synchronous Serial Communication Interfaces, [Universal Serial Bus](https://www.geeksforgeeks.org/universal-serial-bus-usb/) (USB), Multi Media Cards (SD cards, Compact Flash), etc. |
| **Purpose**                     | Computers can be reprogrammed for a new purpose.                                                                                           | Embedded Devices are made only for a specific set of purposes.                                                                                                                                                                                                         |
| **Power Consumption**           | The computer needs more operational power than Embedded Devices.                                                                           | An embedded Device needs lesser operational power than a Computer.                                                                                                                                                                                                     |
| **Complexity**                  | Computers are more complex devices than Embedded Devices.                                                                                  | Embedded Devices are less complex devices than Computers.                                                                                                                                                                                                              |
| **Need of another device**      | Computers may be installed in other devices but are self-sufficient to exist.                                                              | Embedded Devices only exist inside other Systems.                                                                                                                                                                                                                      |
| **Usage Difficulty**            | Computers are more Difficult when used, compared to an Embedded System.                                                                    | Embedded are easier to use than Computers.                                                                                                                                                                                                                             |
| **User Interfaces**             | It requires more user interface than Embedded Devices.                                                                                     | It requires less to no user interface than Computers.                                                                                                                                                                                                                  |
| **Time Specificity**            | Computers are not time-specific. They may need to perform tasks that are not time-bound and take days to perform as well.                  | Embedded Devices are time-specific. The tasks assigned to them need to be performed within a specific time frame.                                                                                                                                                      |
| **Size**                        | Computers are usually bigger with larger hardware and input-output devices attached to them.                                               | Embedded Devices are smaller in size than Computers, with limited hardware.                                                                                                                                                                                            |
| **Developed in**                | 1833 A.D.                                                                                                                                  | 1965 A.D.                                                                                                                                                                                                                                                              |
| **Developer**                   | Charles Babbage                                                                                                                            | Charles Stark Draper                                                                                                                                                                                                                                                   |
| **Memory Requirement**          | Computers have larger memory requirements due to a lot of storage of data.                                                                 | Embedded Devices need less Memory.                                                                                                                                                                                                                                     |


## Normal Mode vs CTC Mode in AVR Timers: A Detailed Comparison

Here's a table summarizing the key differences between Normal Mode and CTC Mode (Clear Timer on Compare Match) in AVR timers:

| Feature                 | Normal Mode                                                            | CTC Mode (Clear Timer on Compare Match)                                                      |
| ----------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Function**            | Timer counts up to its maximum value (0xFF for 8-bit)                  | Timer counts up to a predefined value (OCRnA)                                                |
| **Overflow Behavior**   | Generates an interrupt (if enabled) on overflow                        | Generates an interrupt (if enabled) and clears the timer to zero                             |
| **Output Pin Control**  | Limited control: output pin can be toggled on overflow (if configured) | Flexible control: output pin behavior can be set based on compare match (Toggle, Clear, Set) |
| **PWM Generation**      | Not ideal: requires software manipulation for basic PWM                | Well-suited for generating precise PWM waveforms                                             |
| **Interrupt Frequency** | Interrupt occurs only on overflow (once per timer period)              | Interrupts can occur at multiple points based on OCRnA value                                 |
| **Applications**        | Simple timing measurements, basic delay generation                     | Precise timing control, PWM generation, output toggling based on timer events                |
| **Complexity**          | Simpler to configure                                                   | Requires setting both OCRnA and timer control bits                                           |

**Explanation:**

- **Normal Mode:**
    
    - In normal mode, the timer simply counts up from 0 to its maximum value (e.g., 0xFF for an 8-bit timer).
    - When the timer overflows (reaches the maximum value), it can be configured to generate an interrupt signal to the processor.
    - Normal mode offers limited control over the output pin. You can typically toggle the output pin on overflow, but the timing is not very precise.
    - Due to its simplicity, normal mode is suitable for basic timing measurements or generating short delays.
- **CTC Mode:**
    
    - CTC mode provides more flexibility and control. You can define a specific value (OCRnA) in the Output Compare Register.
    - The timer counts up to this OCRnA value and then performs two key actions:
        - **Generates an interrupt (if enabled):** This allows for precise timing control based on the OCRnA value.
        - **Clears the timer back to zero:** This eliminates the need for software intervention to handle overflow, simplifying code.
    - CTC mode also offers greater control over the output pin. You can configure it to toggle, clear, or set the output pin based on the compare match event, making it ideal for generating precise Pulse Width Modulation (PWM) waveforms.

**Choosing the Right Mode:**

The choice between normal mode and CTC mode depends on your specific application needs:

- **Normal mode:** Use it for simple timing measurements or short delays where high precision is not critical.
- **CTC mode:** Choose it for precise timing control, generating PWM waveforms, or controlling output pin behavior based on timer events.

By understanding these differences, you can effectively utilize AVR timers in your embedded system projects.




---

%% ![[Pasted image 20240603221216.png]]![[Pasted image 20240603221229.png]]![[Pasted image 20240603221241.png]]![[Pasted image 20240603221303.png]]![[Pasted image 20240603221312.png]]![[Pasted image 20240603221330.png]]![[Pasted image 20240603221335.png]]

 %%
![[Pasted image 20240603223315.png]]

### 5a 
![[Pasted image 20240603223305.png]]
I'll provide a response combining the strengths of previous answers and addressing potential issues:

**Default Clock Source:**
 **internal RC oscillator**. **8 MHz** 
 

**Clock Source Selection for Variable Frequency:**

- If you need a variable clock source, you'll need to **configure the clock select fuses** (CKSEL fuses) to use an **external oscillator** (crystal or ceramic resonator) along with appropriate external circuitry. This allows you to connect crystals or resonators with different frequencies to achieve your desired clock speed.

**Clock Source Selection for Minimum External Hardware:**

- To build a system with minimal external hardware, stick with the default **internal RC oscillator**. It provides a basic clock source without needing additional components. However, keep in mind that the internal RC oscillator's frequency can vary slightly due to temperature and voltage fluctuations, which might not be suitable for applications requiring high precision timing.

**Reset Mechanism for Power Source Fluctuations:**

- ATmega microcontrollers employ a **Brown-out Detection (BOD)** circuit as a safety mechanism against power source fluctuations. BOD monitors the power supply voltage. If the voltage drops below a predefined threshold for a specific duration, the BOD triggers a reset, bringing the microcontroller to a known state. This helps prevent erratic behavior or data corruption due to insufficient power.


#### (b) Upon power-on reset of the Atmega32, what memory area is assigned to the interrupt vector table? Can the programmer change the memory space assigned in the table? Show the instructions needed to enable the Timer0 compare match interrupt.

I'd be glad to address the prompt regarding the ATmega32 interrupt vector table and Timer0 compare match interrupt:

**Interrupt Vector Table on ATmega32:**

- **Memory Area:** Upon power-on reset (POR) of the ATmega32, the interrupt vector table is located in the **lowest 256 bytes of the program flash memory**. This is a fixed memory space reserved for interrupt vector addresses.
    
- **Programmer Modification:** No, the programmer cannot change the memory space assigned to the interrupt vector table in the ATmega32. This fixed location ensures consistency and eliminates the need for complex calculations during interrupt handling.
    

**Enabling Timer0 Compare Match Interrupt:**

Here's the code snippet to enable the Timer0 compare match interrupt on the ATmega32 (assuming C programming with AVR-GCC):

C

```c
#include <avr/interrupt.h>

// Define the desired compare match value (e.g., 100 for interrupt every 100 timer counts)
#define TIMER0_COMPARE_VALUE 100

int main(void) {
  // Set Timer0 to Normal mode (CTC) with OCR0A for compare match
  TCCR0A |= (1 << WGM01);

  // Set the compare match value in OCR0A
  OCR0A = TIMER0_COMPARE_VALUE;

  // Enable Timer0 overflow interrupt (used for interrupt generation)
  TIMSK0 |= (1 << OCIE0A);

  // Set prescaler (adjust as needed, e.g., no prescaler for fastest interrupt)
  TCCR0B = 0x00; // No prescaler

  // Enable global interrupts (sei() is usually placed at the end of initialization)
  sei();

  // Main program loop (can be empty if the interrupt handles everything)
  while (1) {
    // ... (code that executes between interrupts)
  }
}
```

**Explanation:**

1. **Include Header:** `#include <avr/interrupt.h>` is included for interrupt-related definitions.
2. **Define Compare Match Value:** `#define TIMER0_COMPARE_VALUE 100` defines the desired compare match value (e.g., 100 for an interrupt every 100 timer counts). Adjust this value based on your application's requirements.
3. **Set Timer0 Mode:** `TCCR0A |= (1 << WGM01);` configures Timer0 to Normal mode (CTC) using the Waveform Generation Mode bits (WGM01:WGM00). This mode is essential for compare match operation.
4. **Set Compare Match Value:** `OCR0A = TIMER0_COMPARE_VALUE;` sets the compare match value in the Output Compare Register A (OCR0A). When the timer counter (TCNT0) reaches this value, an interrupt will be triggered.
5. **Enable Interrupt:** `TIMSK0 |= (1 << OCIE0A);` enables the Timer0 overflow interrupt by setting the Output Compare Match A Interrupt Enable bit (OCIE0A) in the Timer/Counter0 Interrupt Mask Register (TIMSK0).
6. **Set Prescaler (Optional):** `TCCR0B = 0x00;` sets the Timer/Counter0 Control Register B (TCCR0B) to 0x00, which disables any prescaler and allows the timer to run at the system clock frequency. You can adjust the prescaler value (bits CS02:CS00) for different interrupt rates.
7. **Enable Global Interrupts:** `sei();` enables global interrupts, allowing the interrupt service routine (ISR) to be called when an interrupt occurs.
8. **Main Program Loop:** The `while (1)` loop holds your main program code (can be empty if the interrupt handles everything).

**Interrupt Service Routine (ISR):**

You'll need to define an ISR (Interrupt Service Routine) function to handle the Timer0 compare match interrupt. This function will typically:

- Clear the interrupt flag (using `TIFR0 |= (1 << OCF0A)`) to acknowledge the interrupt and prevent multiple executions.
- Perform any necessary actions based on the interrupt (e.g., toggle an LED, update a counter).
- Optionally, modify the compare match value for dynamic interrupt rates.

The ISR function name is usually declared with the `ISR` macro and the corresponding interrupt vector name (e.g., `ISR(TIMER0_COMPA_vect)`). Consult your specific Atmega32 documentation or online resources for more details on ISR setup.

By following these steps and understanding the interrupt vector table placement, you can effectively enable and utilize the Timer0 compare match interrupt on your AT