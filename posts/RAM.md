---
title: 'RAM'
date: 'September 22, 2022'
excerpt: 'RAM is used for the temporary storage of input data, output data and intermediate results. The input data entered into the computer using the input device, is stored in RAM for processing. After processing, the output data is stored in RAM before being sent to the output device. Any intermediate results generated during the processing of program are also stored in RAM'
cover_image: '/images/posts/RAM.png'
---
* Primary memory is the main memory of computer. It is a chip mounted on the motherboard of computer. Primary memory is categorized into two main types :
    - Random Access Memory (RAM), and
    - Read Only Memory (ROM)

# Random Access Memory

1. RAM is used to store data and instructions during the operation of computer.
    - The data and instructions that need to be operated upon by CPU are first brought to RAM from the secondary storage devices like the hard disk.
    - CPU interacts with RAM to get the data and instructions for processing.
2. RAM loses information when the computer is powered off. It is a volatile memory. When the power is turned on, again, all files that are required by the CPU are loaded from the hard disk to RAM. Since RAM is a volatile memory, any information that needs to be saved for a longer duration of time must not be stored in RAM.
3. RAM provides random access to the stored bytes, words, or larger data units. This means that it requires same amount of time to access information from RAM, irrespective of where it is located in it.
4. RAM can be read from and written to with the same speed.
5. The size ofRAM is limited due to its high cost. The size of RAM is measured in MB or GB.
6. The performance of RAM is affected by :
    - Access speed (how quickly information can be retrieved). The speed of RAM is expressed in nanoseconds.
    - Data transfer unit size (how much information can be retrieved in one request).
7. RAM affects the speed and power of a computer. More the RAM, the better it is. Nowadays, computers generally have 512 MB to 4 GB of RAM.
8. RAM is a microchip implemented using semiconductors.
9. There are two categories of RAM, depending on the technology used to construct a RAM : 
    - (1) Dynamic RAM (DRAM)
    - (2) Static RAM (SRAM).

## DRAM

- DRAM is the most common type of memory chip. DRAM is mostly used as main memory since it is small and cheap.
- It uses transistors and capacitors. The transistors are arranged in a matrix of rows and columns. The capacitor holds the bit of information 0 and 1. The transistor and capacitor are paired to make a memory cell. The transistor acts as a switch that lets the control circuitry on the memory chip read the capacitor or change its state.
- DRAM must be refreshed continually to store information. For this, a memory controller is used. The memory controller recharges all the capacitors holding a 1 before they discharge. To do this, the memory controller reads the memory and then writes it right back.
- DRAM gets its name from the refresh operation that it requires to store the information; otherwise it will lose what it is holding. The refresh operation occurs automatically thousands of times per second. DRAM is slow because the refreshing takes time.
- Access speed of DRAM ranges from 50 to 150 ns.

## SRAM

- SRAM uses multiple transistors (four to six), for each memory cell. It does not have a capacitor in each cell.
- A SRAM memory cell has more parts so it takes more space on a chip than DRAM cell.
- It does not need constant refreshing and therefore is faster than DRAM.
- SRAM is more expensive than DRAM, and it takes up more space.
- It stores information as long as it is supplied with power.
- SRAM are easier to use and very fast. The access speed of SRAM ranges from 2–10 nanosecond.
- The memory chips (Figure 3.4) are available on a separate Printed Circuit Board (PCB) that is plugged into a special connector on the motherboard. Memory chips are generally available as part of a card called a memory module. There are generally two types of RAM modules—Single Inline Memory Module (SIMM) and Dual Inline Memory Module (DIMM). chip is usually used in cache memory due to its high speed.
- SIMM modules have memory chip on one side of the PCB. SIMM modules can store 8 bits to 32 bits of data simultaneously.
- DIMM modules have memory chips on both sides of the PCB. DIMM format are 64–bit memories. Smaller modules known as Small Outline DIMM (SO DIMM) are designed for portable computers. SO DIMM modules have 32–bit memory.