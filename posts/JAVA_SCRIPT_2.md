---
title: "Expressions,Operators,Comments and Condition in JavaScripts"
date: 'October 10 2022'
excerpt: 'Arithmatic Operator,Assignment Operator,Logical Operator,ternary operator, comments and conditions'
cover_image: 'images/posts/js.png'
---

[**Click here to access Javascript repository**](https://github.com/Devkant21/Javascript)
<br>

## **Expression and Operators in JavaScript**  
<br> 

## Expression in JavaScript
<br>
A fragment of code that produces a value is called an expression. Every value written literally is an expression. For eg. 77 or "Harry"

<br>
<br>

## Operators in JavaScript
<br>

- **Arithmatic operator**
<br>
"+"  Addition <br>
"-"  Subtraction <br>
"/"  Division <br>
"*"  Multiplication <br>
"**" Exponential <br>
"%"  Modulus <br>
"++" Increment <br>
"--" Decrement 
<br>
- **Assignment operator**
<br>
"=" x=y
<br>
"+=" x=x+y
<br>
"-=" x=x-y
<br>
"/=" x=x/y
<br>
"%=" x=x%y
<br>
"*=" x=x*y
<br>
"**+" x=x**y
<br>

- **Comparision operators**
<br>
"==" Equal to 
<br>
"!=" Not equal
<br>
"===" equal value and type 
<br>
"!==" not equal or not equal type
<br>
">"  greater than 
<br>
"<" less than
 <br>
">=" greater than or equal to 
<br>
"<=" less than or equal to 
<br>
"?" ternary operator
<br>

- **Logical Operators**
<br>
"&&" logical AND
<br>
"||" logical OR
<br>
"!" logical NOT
<br>
Apart from these, we also have type and bitwise operators. Bitwise operators perform bit by bit operations on numbers. 
<br>
   eg.     7 + 8 = 15 
   <br> Here 7 and 8 is operands 
   <br> "+" is operator "15" is result
<br><br>

## Comments in JavaScript
<br>

Sometiimes we want our programs to contain a text which is not executed by the JS engine. <br>
Such a text is called comment in JavaScrit. <br>
A comment in javascript can be written as follows: <br>

            let a=2; 
            //this is a single line comment.
            
            /*
               I am a 
               multiline comment
            */ 
<br>
Sometimes comments are used to prevent the execution of some lines of code <br>

               let switch = true;
               // switch = false; ---- commented line won't execute.
<br><br>

## Conditional Statements
<br>
Sometimes we might have to execute a block of code based off some conditions.
<br> For example a prompt might ask for the age of the user and if its greater than 18, display a special message.
<br>
In javascript we have three forms of if..else statement.
<br>

1. **if statement**
<br>

2. **if....else statement**
<br>

3. **if..else if...else statement**

<br>
<br>

1. **If statement**
<br>
<br>

The if statement in javascript looks like this: <br>

                if(condition){
                   //execute this code
                }
<br>
The if statement evaluates the condition inside the ( ).<br>
If the condition is evaluated to true, the code inside the body of if is executed else the is not executed.
<br><br>

2. **If-else statement**
<br>
The if statement can have an optional else clause.<br>
<br>

The syntax looks something like this <br>

         if(condition){
         // block of code if condition true 
         }
         else{
         //block of code if condition is false         
         }

If the condition is true code inside if is executed else code inside else block is executed.
<br><br>

3. **If-else if statement**
 <br>
Sometimes we might want to keep rechecking a set of conditions one by one matches.<br>
We use if else if for achieving this. 
<br>
<br>

Syntax of if..else if looks like this <br>

      if (age>0){
      console.log("A valid age");
      }
      else if(age>10 && age<15){ 
      console.log("You are a kid");
      }
      else if(age>18){ 
      console.log("You are not a kid");
      }
      else{
      console.log("Invalid Age");
      }

- **Ternary Operator**
<br>
Evaluates a condition and executes a block of code based on the condition.
<br>
condition? exp1: exp2
<br><br>




            