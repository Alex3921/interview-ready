import DataHandler from "../utilities/data_handler.js";

export default class SQL extends DataHandler {
    constructor() {
        super();
    }

    questions = new Map([
        [1, "What is the difference between Relational and Non-Relational Database?"],
        [2, "What does SQL stand for?"],
        [3, "What is the primary key?"],
        [4, "What is the main role of a primary key in a table?"],
        [5, "What are foreign keys?"],
        [6, "Describe how NULL values work in SQL?"],
        [7, "Write the correct statement for WHERE clauses will return only rows that have a NULL in the column_name column?"],
        [8, "How do you get only unique values from the table using the SELECT query?"],
        [9, "How do you order the result in the query?"],
        [10, "What is the difference between AND, OR, and NOT operators?"],
        [11, "What is the difference between BETWEEN and IN operators?"],
        [12, "When do you use the GROUP BY?"],
        [13, "What are the Single Row Functions?"],
        [14, "What are the Multi-Row Functions?"],
        [15, "What is the difference between the WHERE and HAVING clauses?"],
        [16, "How do you use the subquery?"],
        [17, "What is a join?"],
        [18, "What kind of joins are you familiar?"],
        [19, "What is Self-Join?"],
        [20, "What are the SET Operators?"],
        [21, "What are DDL, DQL, DML, and DCL?"],
        [22, "What is the difference between DELETE, TRUNCATE and DROP?"],
        [23, "How do you connect the Database with java?"],
        [24, "How do you add a record to a table?"],
        [25, "How do you add a column to a table?"]
    ]);

    answers = new Map([    
        ["What is the difference between Relational and Non-Relational Database?", `
        <b>SQL Databases (Relational)</b>
        • It is a very firm way of sorting through data in the form of tables, columns, and rows. The data within these tables mostly have relationships with one another or dependencies.
        • MYSQL, ORACLE SQL, SQL SERVER, and POSTGRESQL are relational (SQL) databases and we are using currently oracle SQL DB.

        <b>NoSQL Databases (Non-Relational)</b>
        • In contrast to a relational database, a NoSQL database is one that is less structured/confined in format, and thus, allows for more flexibility and adaptability. A non-relational database is document-oriented, meaning, all information gets stored in more of a laundry list order. Within a single construct or document, you will have all of your data listed.
        • MongoDB, REDIS, and CASSANDRA are the NoSQL database examples.
        `],
            
        ["What does SQL stand for?", `
        • Structured Query Language
        `],
            
        ["What is the primary key?", `
        • The primary key is a special column in the table that should have unique values. At the same time, primary The key column in the table cannot take the null values.
        `],
            
        ["What is the main role of a primary key in a table?", `
        • The main role of a primary key in a data table is to maintain the internal integrity of a data table.
        `],
            
        ["What are foreign keys?", `
        • A foreign key is a key used to link two tables together. Other than the primary key, the foreign key can be null and it can have duplicate values. At the same time, we can have more than one foreign key in the table.
        `],
            
        ["Describe how NULL values work in SQL?", `
        • The NULL is how SQL handles missing values. Arithmetic operation with NULL in SQL will return a NULL.
        `],
            
        ["Write the correct statement for WHERE clauses will return only rows that have a NULL in the column_name column?", `
         • WHERE column_name IS NULL
         • When searching for a NULL value in a column, you must use the keyword IS. No quotes are required around the keyword NULL.
         • Therefore, these statements aren't correct.
             o <b>WHERE column_name</b>
             o <b>WHERE column_name = NULL</b>
             o <b>WHERE column_name NOT IN (*)</b>
        `],
            
        ["How do you get only unique values from the table using the SELECT query?", `
        • We can use the DISTINCT identifier to get only unique values from the table duplicate records.
        `],
            
        ["How do you order the result in the query?", `
        • The Order by keyword is used to sort the result in ascending or descending order.
        • By default, it will sort the result in ascending order but we can change it using the DESC keyword.
        • The numbers will be sorted from smallest to largest; the letters will be sorted in alphabetical order and the dates will be sorted from oldest to the current date.
        `],
            
        ["What is the difference between AND, OR, and NOT operators?", `
        • <b>AND</b> will check more than one condition. To get the data all conditions must be true. 
            <i>SELECT</i> * FROM tableName
            <i>WHERE</i> condition1 AND condition2 AND condition3;

        • <b>OR</b> will check more than one condition if one of the conditions is true it will return the data.
            <i>SELECT</i> * FROM tableName
            <i>WHERE</i> condition1 OR condition2 OR condition3;
        
        • <b>NOT</b> will show the data if the condition is not true.
            <i>SELECT</i> * FROM tableName
            <i>WHERE</i> NOT condition1;
        `],
            
        ["What is the difference between BETWEEN and IN operators?", `
        • To be able to get the data from a given range we can use the 'Between And' Operator.
        • Using IN operator we can specify multiple values.
        `],
            
        ["When do you use the GROUP BY?", `
        • The GROUP BY statement in SQL is used to arrange identical data into groups with the help of some functions.
        `],
            
        ["What are the Single Row Functions?", `
        • Single row functions are the ones that work on a single row and return one output per row.
        • LOWER, UPPER, INITCAP, CONCAT, LENGTH, SUBSTR, INSTR, ROUND, TRUNC, MOD
        
        <b>INITCAP:</b> It will make values first letter upper case in the result
        <b>INSTR:</b> It will give the index number of given parameters from the character value.
        <b>ROUND:</b> It will round the decimal numbers.
        <b>SUBSTR:</b> It gives the partial value from the String. It takes two parameters the first parameter is starting index (index starts from the 1 in SQL) and the second parameter is how many characters you want to see in your result. Substr () function implementation in SQL is little different than the substring() method in java.
        <b>MOD:</b> IT will find the remainder from the numbers.
        `],
            
        ["What are the Multi-Row Functions?", `
        • Multiple row functions are running for many rows and return a single value.
        • AVG, COUNT, MAX, MIN, SUM

        <b>AVG:</b> Returns the average value-form given numeric column
        <b>COUNT:</b> return the row number from the given column name
        <b>MAX:</b> returns MAX number or Last value from the given column
        <b>MIN:</b> returns min number or first value from the given column
        <b>SUM:</b> return the sum of the row from the given numeric column
        `],
            
        ["What is the difference between the WHERE and HAVING clauses?", `
        • <b>WHERE</b> Clause is used to filter the records from the table based on the specified condition. (Before grouping). We cannot use where keywords with multi-row functions.
        • <b>HAVING</b> Clause is used to filter the record from the groups based on the specified condition. (After grouping). We can use 'having' keywords with multi-row functions. Also, HAVING can be only used with Group By clause
        `],
            
        ["How do you use the subquery?", `
        • A Subquery (Inner query or a Nested query) is a query within another SQL query and embedded within the WHERE clause. Subqueries must be enclosed within parentheses.
        `],
            
        ["What is a join?", `
        • Join is a process of retrieving pieces of data from different sets (tables) and returns them to the user or program as one joined collection of data. A JOIN clause is used to combine rows from two or more tables, based on a related column between them
        `],
            
        ["What kind of joins are you familiar?", `
        • Most commonly used joins are: Inner Join, Full Outer Join, left (Outer) Join and Right (Outer) Join.

        <b>INNER JOIN:</b> It gives you only matching data from both tables.
        <b>FULL OUTER JOIN:</b> It gives all the records from both tables.
        <b>LEFT OUTER JOIN:</b> It gives us matched records from both table and non-matching data from left side of the table.
        <b>RIGHT OUTER JOIN:</b> It gives us matched records from both table and non-matching data from right side of the table.
        `],
            
        ["What is Self-Join?", `
        • A self-join is a join in which a table is joined with itself (which is also called Unary relationships), especially when the table has a FOREIGN KEY which references its own PRIMARY KEY.
        `],
            
        ["What are the SET Operators?", `
        <b>• UNION</b> is used to combine the results of two or more SELECT statements. However, it will eliminate duplicate rows from its result.
        <b>• UNION A</b>ll operators is similar to Union. But it also shows duplicate rows.
        <b>• INTERSECT</b> operation is used to combine two SELECT statements, but it only returns the records which are common from both SELECT statements.
        <b>• MINUS</b> operation combines results of two SELECT statements and returns only those in the final result, which belongs to the first set of the result.
        `],
            
        ["What are DDL, DQL, DML, and DCL?", `
         • DDL is Data Definition Language that is used to define data structures. For example: create table, drop a table and alter the table are instructions in SQL.
                -> DDL commands are the create, alter, drop, rename, truncate, and comment.
        
         • DQL stands for Data Query Language, and it is used for performing queries on the data within schema objects.
                -> The purpose of the DQL Command is to get some schema relation based on the query passed to it.
                -> Example of DQL: SELECT is used to retrieve data from the database.
         
         • DML is Data Manipulation Language that is used to manipulate data itself.
                -> DML commands are the insert, update, delete, merge, call, explain plan, and lock table.
         
          • DCL is a Data Control Language command that is used to manage transactions in the database.
                -> DDL commands are grant and revoke.
        `],
            
        ["What is the difference between DELETE, TRUNCATE and DROP?", `
        <b>• DELETE:</b> will only remove the selected row from the table. Deleted records can be rolled back or committed.
        <b>• TRUNCATE:</b> will delete all the rows from the table. We cannot rollback the data after truncate them.
        <b>• DROP:</b> it will delete the whole table with its' structure.
        `],
            
        ["How do you connect the Database with java?", `
        • With JDBC (Java Database Connectivity) and Oracle JDBC dependency. This connection helps to validate API response with the Database. 
        • For Database connection, database URL, username, and password are needed. 
        • To be able to set up the connection, three interfaces Connection, Statement, and ResultSet are needed. 
                -> The <b>connection</b> object establishes the connection in the database. 
                -> <b>Statement</b> object that sends the SQL queries to the database. 
                -> After that, the <b>ResultSet</b> object is used to store the data from the database.
        `],
            
        ["How do you add a record to a table?", `
        • INSERT into table_name VALUES (..., ...);
        `],
            
        ["How do you add a column to a table?", `
        • ALTER TABLE Department ADD (AGE, NUMBER);
        `]
    ]);
}