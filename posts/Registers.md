---
title: "CPU Registers"
date: 'September 22, 2022'
excerpt: 'Registers are high-speed storage areas within the CPU, but have the least storage capacity. Registers are not referenced by their address, but are directly accessed and manipulated by the CPU during instruction execution'
cover_image: '/images/posts/Registers.png'
---

1. Registers store data, instructions, addresses and intermediate results of processing. Registers are often referred to as the CPU’s working memory.
2. The data and instructions that require processing must be brought in the registers of CPU before they can be processed. For example, if two numbers are to be added, both numbers are brought in the registers, added and the result is also placed in a register.
3. Registers are used for different purposes, with each register serving a specific purpose. Some of the important registers in CPU are as follows :
    - Accumulator (ACC) stores the result of arithmetic and logic operations.
    - Instruction Register (IR) contains the current instruction most recently fetched. o Program Counter (PC) contains the address of next instruction to be processed. o Memory Address Register (MAR) contains the address of next location in the memory to be accessed.
    - Memory Buffer Register (MBR) temporarily stores data from memory or the data to be sent to memory.
    - Data Register (DR) stores the operands and any other data.

4. The number of registers and the size of each (number of bits) register in a CPU helps to determine the power and the speed of a CPU.
5. The overall number of registers can vary from about ten to many hundreds, depending on the type and complexity of the processor.
6. The size of register, also called word size, indicates the amount of data with which the computer can work at any given time. The bigger the size, the more quickly it can process data. The size of a register may be 8, 16, 32 or 64 bits. For example, a 32–bit CPU is one in which each register is 32 bits wide and its CPU can manipulate 32 bits of data at a time. Nowadays, PCs have 32–bit or 64–bit registers.
7. 32-bit processor and 64-bit processor are the terms used to refer to the size of the registers. Other factors remaining the same, a 64-bit processor can process the data twice as fast as one with 32-bit processor.
