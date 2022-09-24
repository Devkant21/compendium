---
title: "MS Excel Template"
date: 'September 24, 2022'
excerpt: 'A spreadsheet is a matrix of rows and columns, similar to an accounting notebook (ledger). A spreadsheet program is primarily used for mathematical calculations. A spreadsheet program is often used to prepare budgets, financial projections, billing, and other reports arranged in rows and columns. An electronic spreadsheet provides more flexibility, speed, and accuracy in comparison to a manually maintained spreadsheet.'
cover_image: 'images/posts/Excel.png'
---
**The following table gives year-wise sale figures of five salesmen in Rs.**

        |   Salesman     |   2004     |   2005     |    2006     |    2007     |
        ------------------------------------------------------------------------
        |   Salesman 1   |   10000    |   12000    |    20000    |    50000    |
        |   Salesman 2   |   15000    |   18000    |    50000    |    60000    |
        |   Salesman 3   |   20000    |   22000    |    70000    |    70000    |
        |   Salesman 4   |   30000    |   30000    |    100000   |    80000    |
        |   Salesman 5   |   40000    |   45000    |    125000   |    90000    |
        

- Calculate total sale year-wise.
- Calculate the net sales made by each salesman.
- Calculate the commission for each salesman — If total sales is greater than Rs.1,00,000/-, then commission is 5% of total sale made by the salesman, else it is 2% of total sale.
- Calculate the maximum sale made by each salesman.
- Calculate the maximum sale made in each year.
- Draw a bar graph representing the sale made by each salesman.
- Draw a pie graph representing the sales made by salesmen in year 2004.

*Solution*


1. Open blank workbook.   <New> <Create>
2. Enter the headings of the table
 - a. Double-click on the cell and type.
 - b. If name is too long, use Text Wrap: <Home><Alignment><   >
 - c. Use Text Orientation to change the direction of the text: <Home><Alignment><   >
3. Double-click on the cells and enter the data.
4. Total Year-wise Sales: Since you want to find the total, the function SUM is used.
 - If you already know that the SUM function is to be used, then type =SUM(. You will see that the format of the SUM function appears. Click on number1 in the format and select the cells for which you want to find the total. It will write =SUM(E10:E14. Close the brackets =SUM(E10:E14). This is the total sales of one year. Click on the cell in which you have found total and pull the plus sign to the other columns of the same row to get total year-wise sales of other years.
 - If you do not know that the SUM function is to be used, then use the options <Formulas> <Function Library>. Look for the appropriate function.
5. Net Sales for each Salesman: Same method as for Total Year-wise Sales.
6. Commission: Enter the IF formula.
 - Enter =IF(
 - Then select the cells whose value is to be checked. It will become =IF(I10 o Write the condition. >100000,0.05*(
 - Again select the cells. It will become =IF(I10>100000,0.05*(I10), 0.02*(
 - Again select the cells, and put brackets.The final formula will look like=IF(I10>100000,0.05*(I10), 0.02*(I10))
7. Maximum sale made by each salesman: Use MAX function: =MAX(E10:H10)
8. Maximum sale made in each year: Use MAX function: =MAX(E10:E14)