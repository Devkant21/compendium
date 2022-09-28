---
title: "Loops in C"
date: 'September 28 2022'
author: "Washiul Islam"
excerpt: 'Loops are required to run a particular codebase in order to execute a certain task'
cover_image: 'images/posts/Loopers.jpg'
---

Loops are of 3 types 
 -     1. While loop
 -     2. Do while loop
 -     3. For loop

    1. While loop :

                A while loop is used to execute and repeat a statement block depending on 
                a condition which is evaluated at the beginning of the loop.


        Syntax for while loop -
                                    while(conditon) {
                                       // statement(s);
                                    }
                                    
                            Example -
                                        int a = 10
                                        while(a < 20){
                                        printf("the value of a: %d\n", a);
                                        a++;
                                        }



    2. Do while loop :

                    A do-while loop is used to execute and repeat a statement block depending 
                    on a condition which is evaluated at the end of the loop.

     Syntax for do while loop -
                                    do {
                                        //statement(s);
                                    } while(condition)

                         Example -

                                    int a = 10
                                    do {
                                        printf("the value of a: %d \n",a);
                                        a++;
                                    } while(a < 20);


    3. For loop :

                A for loop is used to execute and repeat a statement block depending 
                on a condition which is evaluated at the beginning of the loop.

    Syntax for For loop -

                            for(condition)
                            {
                               // statement(s);
                            }

                     
                    Example -

                            int a = 10
                            for(a; a < 20; a++)
                            {
                                printf("the value of a: %d \n",a);
                            }