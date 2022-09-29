---
title: "Arrays in C"
date: 'September 29 2022'
excerpt: 'Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.'
cover_image: 'images/posts/Array.png'
---

# Arrays in C

What is array?

 Ans. An array is a collection of items of same data type stored at contiguous memory locations. 

This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array). The base value is index 0 and the difference between the two indexes is the offset.

# Types of arrays in C : 
-  One dimensional array (1-D arrays)
-  Multidimensional array

# How an Array is initialized?
 By default the array is uninitialized, and no elements of the array are set to any value. However, for the proper working of the array, array initialization becomes important. Array initialization can be done by the following methods:

   **1. Passing no value within the initializer: One can initialize the array by defining the size of the array and passing no values within the initializer.**

 **Syntax:**

           int arr[ 5 ] = {  };


  **2.By passing specific values within the initializer: One can initialize the array by defining the size of the array and passing specific values within the initializer.**

 **Syntax:**

     int arr[ 5 ] = { 1 , 2 , 3 , 4 , 5 };

**Note**: The count of elements within the “{ }”, must be less than the size of the array 
If the count of elements within the “{ }” is less than the size of the array, the remaining positions are considered to be ‘0’.



**3. By passing specific values within the initializer but not declaring the size: One can initialize the array by passing specific values within the initializer and not particularly mentioning the size, the size is interpreted by the compiler.**

 **Syntax:**
    
    int arr[  ] = { 1 , 2 , 3 , 4 , 5 };

**4. Universal Initialization: After the adoption of universal initialization in C++, one can avoid using the equals sign between the declaration and the initializer.** 

 **Syntax:**

    int arr[ ]  { 1 , 2 , 3 , 4 , 5 };


# What are the different operations on the array?
Arrays allow random access to elements. This makes accessing elements by position faster. Hence operation like searching, insertion, and access becomes really efficient. Array elements can be accessed using the loops.

***1. Insertion in Array :***

**We try to insert a value to a particular array index position, as the array provides random access it can be done easily using the assignment operator.**

**Pseudo Code :**

    // to insert a value= 10 at index position 2;
           arr[ 2 ] = 10;

**Time Complexity :** 

- 0(1) to insert a single element
- 0(N) to insert all the array elements [where N is the size of the array]
 **2. Access elements in Array:**

***Accessing array elements become extremely important, in order to perform operations on arrays.***

***Pseudo Code:***

            // to access array element at index position 2, we simply can write
                    return arr[ 2 ] ;

**Time Complexity: O(1)**

**3. Searching in Array :** 

We try to find a particular value in the array, in order to do that we need to access all the array elements and look for the particular value.

**Pseudo Code:**
          
          // searching for value 2 in the array;

                Loop from i = 0 to 5:
                check if  arr[i] = 2:
                return true;



**Time Complexity:** O(N), where N is the size of the array.

**Here is the code for working with an array:**


         #include <stdio.h>
 
            int main()
            {
 
                    // Creating an integer array
                    // named arr of size 10.
               int arr[10];
                    // accessing element at 0 index
                    // and setting its value to 5.
                arr[0] = 5;
                    // access and print value at 0
                    // index we get the output as 5.
                 printf("%d", arr[0]);

               return 0;
            }


**Output**
            
            5

Here the value 5 is printed because the first element has index zero and at the zeroth index, we already assigned the value 5.







