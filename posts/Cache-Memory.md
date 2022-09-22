---
title: 'Cache Memory'
date: 'September 22, 2022'
excerpt: 'The data and instructions that are required during the processing of data are brought from the secondary storage devices and stored in the RAM. For processing, it is required that the data and instructions are accessed from the RAM and stored in the registers. The time taken to move the data between RAM and CPU registers is large. This affects the speed of processing of computer, and results in decreasing the performance of CPU'
cover_image: 'images/posts/Cache.png'
---


1. Cache memory is a very high speed memory placed in between RAM and CPU. Cache memory increases the speed of processing.
2. Cache memory is a storage buffer that stores the data that is used more often, temporarily, and makes them available to CPU at a fast rate. During processing, CPU first checks cache for the required data. If data is not found in cache, then it looks in the RAM for data.
3. To access the cache memory, CPU does not have to use the motherboard’s system bus for data transfer. (The data transfer speed slows to the motherboard’s capability, when data is passed through system bus. CPU can process data at a much faster rate by avoiding the system bus.
4. Cache memory is built into the processor, and may also be located next to it on a separate chip between the CPU and RAM. Cache built into the CPU is faster than separate cache, running at the speed of the microprocessor itself. However, separate cache is roughly twice as fast as RAM.
5. The CPU has a built-in Level 1 (L1) cache and Level2 (L2) cache, as shown in Figure 2.3. In addition to the built-in L1 and L2 cache, some CPUs have a separate cache chip on the motherboard. This cache on the motherboard is called Level 3 (L3) cache. Nowadays, high-end processor comes with built-in L3 cache, like in Intel core i7. The L1, L2 and L3 cache store the most recently run instructions, the next ones and the possible ones, respectively. Typically, CPUs have cache size varying from 256KB (L1), 6 MB (L2), to 12MB (L3) cache.
6. Cache memory is very expensive, so it is smaller in size. Generally, computers have cache memory of sizes 256 KB to 2 MB.