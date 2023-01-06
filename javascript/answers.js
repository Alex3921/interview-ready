//-------------------------------------Java answers-------------------------------------//
const answers_java = {
    "What is JDK, JRE, JVM and JIT (basically talk about the Java architecture)?": `
    • <b>JDK</b> stands for Java Development Kit and is used to create Java programs with help of its component like developments tools, libraries, JRE, JVM and JIT
    • <b>JRE</b> stands for Java Runtime Environment and is a component of Java that comes with JDK. It holds all the Java libraries like lang, io, util and java classes. It has JVM inside too which runs the code
    • <b>JVM</b> stands for Java Virtual Machine and used to run the programs. JVM makes java platform independent, which means, any machine with JVM can run Java programs but JVM itself is platform dependent
    • <b>JIT</b> stands for Just in Time Compiler and it stands inside the JVM. It is used to increase the speed of execution

    <i>JDK = development tools + JRE + JVM</i>
    <i>JRE = all the java libraries + java classes + JVM</i>
    <i>JVM = Java Virtual Machine and it holds JIT as well</i>
    `,
    "Why java is platform-independent?": `
    • Java is platform independent as it has JVM. There is JVM available for every operating system and JVM can read byte code. So, different JVM is designed for different operating systems. That is why JVM is platform dependent, but it makes java platform independent.
    `,
    "What is source code, byte code and binary code and what are their relation in Java?": `
    • Source code is the code written by using any programming language
    • Byte code is the compiled Java code (Java source code)
    • Binary code is the computer understanding code which is basically ones and zeros
    
    <i>Source code -> compiled by javac -> Byte Code -> JVM -> Binary Code</i>
    <i>javac compiles .java file and returns .class file</i>
    <i>.class file has the Byte Code</i>
    
    EX/ MyFirstProgram.java (Source code)-> javac -> MyFirstProgram.class (Byte code) -> java -> Result of the program on my screen
    `,
    "What is java and javac and how they work with each other?": `
    • <b>javac</b> stands for java compiler and it used to compile source code
    • <b>java</b> is used to run the compiled code by javac

    • In java the flow of the execution will be as below:
    <i>source code (actual code that we write) -> compiled by javac -> Byte Code -> JVM -> Binary Code</i>
    `,
    "Explain main() method in java?": `
    • It is one of the most important methods in java as it tells java where the programs start
    • We cannot run our programs without main method and all our programs should be in main() method
    • JVM always look for this method to start running an application 
    
    <i>More to say about main() method</i>
    • main() method is public which makes it to be used in any class
    • main() method is static which makes it be called without creating an object
    • main() method is void as it does not return anything
    `,
    "What kind of data types we have in Java?": `
    • We have primitive and non-primitive data types in Java
    • Non-primitives are also known as reference types (Example: String)
    • Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot
    `,
    "Explain primitive data types in Java?": `
    • Java has 8 primitive data types to store data
    • Those are simply <i>boolean, byte, char, short, int, long, float, double</i>
    • byte, short, int and long are used for numeric data
    • float and double can be used for numeric data but they have floating points
    • char to store every single character
    • boolean can store either true or false
    `,
    "What is variable declaration and assignment in Java?": `
    • Variable in java is kind of a special container that stores data
    • Variables are labels that describe a particular location in memory and associate it with its data type
    • We can simply say variable is reserved area allocated in the memory
    `,
    "What are identifiers in Java?": `
    • All java variables must be identified with unique names and these unique names are called as identifiers
    • Identifiers can be short names like a, b or c or more descriptive names like age, balance, name
    • <b>NOTE:</b> it is highly recommended to use more descriptive names in order to create readable and maintainable code
    `,
    "What is String in Java?": `
    • String is a Java class
    • We can create String objects to store a sequence of characters
    • String is an immutable data type and value cannot be changed once it is initialized
    • String class has many useful methods to manipulate data based on our need like charAt(), indexOf() and so on...
    `,
    "What is String concatenation in Java and how can we concatenate Strings?": `
    • String concatenation is forming a new String that is the combination of multiple Strings
    • There are 2 ways of String concatenation
            1. we can concatenate Strings by using + (plus) operator
            2. we can use concat() method to concatenate Strings
    `,
    "What is method chaining?": `
    • Method chaining means repeatedly calling one method after another on an object, in one statement
    `,
    "What are different types of operators in Java?": `
    • Firstly, operators in Java are used to perform operations on variables and values and there are so many different operators in java
    • <b>Assignment operators</b> are used to assign values into variables ( =, += , -=, *=, /=, %=)
    • <b>Arithmetic operators</b> are used to perform common mathematical operations (+, -, *, /, %)
    • <b>Increment and decrement operators</b> are also arithmetic operators (++, --)
    • <b>Comparison (Relational) operators</b> are used to compare two values (<, >, <=, >=, ==, !=)
    • <b>Logical operators</b> are used to determine the logic between variables or values (&&, ||, !)
    `,
    "What are if-else statements in Java and what they are used for?": `
    • Java if-else statements are used to test specific conditions and they control the flow of the program based on the condition.
    • It will execute a block of code if given condition is true, and another code of block if condition is false
    `,
    "What is ternary operator in Java?": `
    • Java ternary operator is kind of a short-hand if else and it can be used instead of simple if else statements
    • It is helpful to replace multiple lines of code with a single line
    • <i>Syntax -> variable = (condition) ? expressionTrue : expressionFalse;</i>
    `,
    "What is switch statement in Java?": `
    • switch statement can be used to select one of many code blocks to be executed
    • switch statement can be used with byte, short, int, char, String and Enums in Java
    • Java allows to have any number of cases within a switch statement
    
    How it works:
        • The switch expression is evaluated once
        • The value of the expression is compared with the values of each case
        • If there is a match,the associated block of code is executed.
        • The break key word is optional and used to break the switch expression
        • The default key word is also optional and usually used at the end of switch statement. It is used to perform a last block of code if none of the cases matched. No break is needed in the default case
    `,
    "What is break statement in Java?": `
    • break is used for termination in Java
    • It is used with switch statements and loops 
    `,
    "What is type casting in Java?": `
    • Type casting is known as assigning value of one primitive data type into another primitive
    • In Java, there are two types of casting: implicit and explicit casting
    • <b>Implicit casting</b> is known as converting a smaller data type to a larger data type size and performed automatically by the compiler
    • <b>Explicit casting</b> is known as converting a larger data type to a smaller data type size and performed manually by users
    • <b>Widening casting or up-casting (automatically)</b> - converting a smaller type to a larger type size the flow of widening: byte -> short -> char -> int -> long -> float -> double
    • <b>Narrowing casting or down-casting (manually)</b> - converting a larger type to a smaller size type the flow of narrowing: double -> float -> long -> int -> char -> short -> byte
    
    • <b>NOTE:</b> boolean is the only primitive data type that cannot be cast to any other primitive
    `,
    "What are autoboxing and unboxing in Java?": `
    • Autoboxing is known as storing primitive type into object/wrapper class
    • Unboxing is known as storing object/wrapper class into primitive type
    `,
    "What are wrapper classes in Java?": `
    • Wrapper classes are object representations of primitives
    • There is a wrapper class for each primitive type
    
    • Wrapper class names are usually same as with primitive data types:
            <b>Wrapper class</b>           <b>Primitive type</b>
            Boolean                      boolean
            Byte                            byte
            Short                           short
            Integer                        int
            Long                           long
            Float                           float
            Double                       double
            Character                   char`,
    "What is the purpose of having wrapper classes in Java?": `
    • Wrapper class object can store all data that primitives store and can be used instead of primitives
    • But wrapper classes are mostly used with their useful methods to manipulate the data
    `,
    "What are different loops in Java and the reasons to use loops?": `
    • Loops in Java are used to execute a block of code repeatedly
    • Loops will run until a termination condition is met
    • Loops are helpful to eliminate duplicating codes and time saving
    • There are 4 types of loops in Java
            1. <b>for loop (traditional i loop)</b> -> is used when start and end point is exact
            2. <b>for each loop</b> -> similar to fori loop but preferred with collections
            3. <b>while loop</b> -> is used when termination is based on a condition
            4. <b>do while loop</b> -> similar to while loop but preferred if block of code executes at least once
    
    • <i>for loop vs while loop</i>
            a. For loop is used to execute a block of code and preferred when we know the exact number of iterations
            b. While loop is used to execute a block of based on a condition and total number of iterations is not certain (dynamic)
    • <i>Loop control statements</i>
        a. break is used to terminate the loop
        b. continue is used to skip only current iteration if a specified condition occurs, and continues with the next iteration in the loop
    `,
    "What is Array and ArrayList and their differences in Java?": `
    • Array is one of the collection types in java
    • Collection is storing multiple similar items in one place
    • By using an Array, we can store many similar items/elements in one variable
    • Arrays in Java have fixed size and once the size of an array is declared, it's not possible to change it
    
    • To handle this issue, we can use the ArrayList class. It allows us to create dynamic sized arrays
    • Unlike Arrays, ArrayLists can automatically adjust its capacity when we add or remove elements from it and hence, ArrayLists are also known as dynamic arrays
    
    • Array members are accessed using [index] while ArrayList has a set of methods to access elements and modify them like get(), add(), set() and so on...
    • Array can store both primitive data types as well as objects while ArrayList only supports object entries, not the primitive data types
    `,
    "What are differences between ArrayList and LinkedList?": `
    • LinkedList is very similar to ArrayList and can be used for the same purposes
    • ArrayList stores the value in a single position while LinkedList stores 3 values (previous address, data, and next address) in a single position
    • Whenever an element is added or removed to an ArrayList in the middle, all elements after that position are shifted but Whenever an element is added or removed to a LinkedList, only the address of previous and next elements are changed
    • LinkedList allocates more memory compared to ArrayList but more proper to use if we will add or remove data frequently but ArrayList allocates less memory and preferred when there is not too much data change
    • ArrayList is slower compared to LinkedList when we add or remove new data
    `,
    "What is Class and Object in Java?": `
    • <b>Class</b> in Java is a blueprint or template from which objects are created
    • We can think of the class as a sketch (prototype) of a car. It contains all the details about the engine, doors, windows, etc. Based on these descriptions we build the car. Car is the object as well
    • Since many cars can be made from the same description, we can create many objects from the car class
    
    • <b>Object</b> is instance of a class
    • Class is a template or blueprint from which objects are created.
    • So, object is the instance(result) of a class
    • EXAMPLE: if car is a class, then BMW or Audi can be an object of that class. BMW or Audi is known as instance of car class
    `,
    "What are the class members in Java?": `
    • <b>Instance variables - fields</b>
        • They are used to define all the attributes of the objects of that class
        • Fields are used to store data
        • Fields can be accessed by objects of that class
        
        • For example: If car is a class, fields can be year, make, model, trim, color, etc.
        
        • <b>NOTE:</b> There could be final attributes of a class and those can be declared as final. Final attribute values cannot be changed anywhere in the project
        • <b>NOTE:</b> There could be static attributes of a class and this means, these static attributes belong to class itself and can be called with className. There is no need to create object to call static fields
    • <b>Methods - functions</b>
        • A method is a block of code that performs a specific task
        • Methods are functions or behaviors of the class
        • There are void and return types of methods
        • <b>returnType</b> - It specifies what type of value a method returns. For example, if a method has an int return type then it returns an integer value. If, the method does not return a value, its return type is void
        • <b>methodName</b> - It is an identifier that is used to refer to the method in a program, could be any name but should be meaningful to increase readability of your code
        • <b>method body</b> - It includes the programming statements that are used to perform some tasks. The method body is enclosed inside the curly braces { }
        • <b>method parameters</b> - Arguments that we pass inside the method parentheses
        
        • A Java method may or may not return a value
        • We use the return statement to return any value for return type methods
        • Other methods are known as void methods and these methods do not return any value
        • Both void and return type methods can be final and static
        
        • <b>NOTE:</b> There could be final methods of a class and those can be declared as final. Final methods cannot be overriden
        • <b>NOTE:</b> There could be static methods of a class and this means, these static methods belong to class itself and can be called with className. There is no need to create object to call static methods
    • <b>Constructors</b>
        • A constructor in Java is a special method that is used to initialize objects
        • Constructors have always same name as a ClassName they belong to
        • The constructor is called when an object of a class is created
        • It can be used to set initial values for object attributes
        • Object cannot get created without constructors
        • Constructors can be used only next to new keyword
        • Java will provide no argument constructor if we don't create one. That constructor is called <i>Default Constructor</i>
        • Default constructor is no-argument. It doesn't take anything
        • Constructors can be overloaded
        • We can have multiple constructors. Overloading constructors follow the same rules as method overloading
        • <i>Why do we create custom constructor?</i> We may give initial values for every object that is getting created
    • <b>Blocks</b>
        • A block in Java is a set of code enclosed within curly braces { } within any class, method, or constructor
        • It begins with an opening brace { and ends with a closing braces }
        • Between the opening and closing braces, we can write codes which may be a group of one or more statements
        • There are three types of blocks in Java. They are as follows:
        • <b>Local block</b> -> regular block used with methods, if else , switch, loops statements
        • <b>Instance initialization block (Non-static initialization block)</b> -> used to initialize non-static instance variables of a class
        • <b>Static initialization block</b> -> used to initialize static instance variables of a class
    `,
    "What is local variable and instance variable and their differences?": `
    • </b>Local variables:</b> variables that are created within the method. Scope for local variables: it stays within the method
    • </b>Instance variables:</b> variables that belongs to an object. The variables that are created right under the class. It can be used within the class
    • When we have instance variable and local variables which have same variable name, java accepts local variable as a priority
    • <i>this</i> keyword is a reference to the current object of its type
    • <i>this</i> keyword is useful when we have instance variable and method parameter with same name and helps us to differentiate instance variables from local variables
    `,
    "What does null keyword mean in Java?": `
    • null means an object reference is not pointing an object
    • Primitives cannot be null
    • If object variable holds null and programmer tries to execute some methods over null value, then NullPointerException will be thrown as a run-time error
    `,
    "What are the advantages of using methods in Java?": `
    • The main advantage is code reusability. We can write a method once and use it multiple times. We do not have to rewrite the entire code each time
    • Methods make code more readable and easier to debug
    `,
    "What is method overloading?": `
    • In Java, two or more methods may have the same name
    • This is allowed if they differ in parameters (different number of parameters, different types of parameters, or both).
    • These methods are called overloaded methods and this feature is called method overloading
    • <b>Note:</b> Multiple methods can have the same name if the number and/or type of parameters are different
    • How to achieve method overloading
    • Method overloading is achieved by either:
            • changing the number of arguments
            • or changing the data type of arguments
    `,
    "What is method overriding?": `
    • It is a concept of implementing a new body to an inherited method
    • It is common to use when we want to specify body in the child classes method. So, we override the parent class' methods in child
    • @Override annotation is used to override a parent class' method
    • Rules of Method Overriding
    • Method signature should be same (parameters and name)
    • Return type should be same
    • Access modifier should be same or can be more accessible
    • @Override annotation is highly recommended to use in case of overriding but it is not mandatory
    `,
    "What is the difference between method overloading and overriding?": `
    • Method overriding is implementing a new body to an inherited method from parent class
    • Overriding methods can happen only when a child class inheriting a parent class
    • Overriding is writing same method from parent class with a different implementation in the child class
    • Method overloading is creating a method which has same name with another method in the class
    • Overloading happens in the same class with different parameters
    • Overloaded methods are sharing same name but different signature
    • Method overloading is not related to inheritance
    `,
    "What is this and this() in Java?": `
    • <i>this</i> is a reserved keyword in Java and used as reference to the current object of its type in a class
    • <i>this()</i> is used to call a custom constructor in another custom constructor and provides code reusability
    • <i>this()</i> must be the first statement in the constructor block it is called
    `,
    "What is super and super() in Java?": `
    • <i>super</i> is a reserved keyword in Java and used as reference to the parent class object
    • <i>super()</i> is used to call a custom constructor of parent class in to be used in child class constructor and provides code reusability
    • <i>super()</i> must be the first statement in the constructor block it is called
    `,
    "What is constructor chaining?": `
    • It is calling a custom constructor in another custom constructor It can be achieved by using <b>this()</b> or <b>super()</b>
    `,
    "What are the differences between constructors and methods?": `
    • Constructors cannot be return type while methods can be
    • Constructor name should always be same as the class name while method name can be any identifier based on need
    • Constructor is called automatically (implicitly) when a new object is created while methods can be called with class name or with an object
    • Java compiler provides a default constructor if custom constructor is not created but methods may or may not be created based on need
    • Both methods and constructor can be overloaded
    • Constructor cannot be overridden but method can be overridden
    `,
    "What is mutable/immutable in Java?": `
    • <b>Immutable:</b> it means once an object is created, value for the object cannot be changed like String
    • <b>Mutable:</b> it means when an object is created, value for it can be changed like StringBuffer and StringBuilder
    `,
    "What is StringBuilder and StringBuffer and their differences?": `
    • These are 2 Java classes located in java.lang package
    • They can be considered as mutable type of String
    • Both has many useful methods to manipulate data like append(), insert(), delete(), reverse() and so on…
    • Both can be converted to String by using toString() method
    • <b>DIFFERENCE:<b> StringBuffer is thread safe, that is why it is slower compared to StringBuilder and StringBuilder is faster compared to StringBuffer
    `,
    "What is Stack and Heap in Java?": `
    • These terms are coming from Java Memory Management System
    • <b>Stack</b> is where methods, local variables and object references are stored
    • When you run a program, different layers will be created in stack and they will be executed in the order of program (Last in, first out)
    • <b>Heap</b> is where objects (instances) are stored
    • Accessing object is slower compared to accessing an instance variable
    `,
    "What is Garbage Collection?": `
    • Garbage means unreferenced objects (objects that lost their references)
    • Garbage Collection is a process of destroying objects that lost references
    • Garbage Collection runs automatically (implicitly) for better memory management in Java
    
    • <b>NOTE:</b> Garbage Collection applies only to reference types data (objects)
    `,
    "What does System.gc() or Runtime.getRunTime().gc() methods do in Java?": `
    • In Java, Garbage Collection happens automatically (implicitly)
    • However, it can be done explicitly as well by calling System.gc() method or Runtime.getRunTime().gc()
    `,
    "What is finalize() method and what it is used for?": `
    • finalize() method can be used to run a block of code before object reference is garbage collected
    • Purpose of using this method is to do proper clean up before removing the object
    • By default, finalize method is empty. However, you can write your own finalize method to take certain action
    • This method is located in Object class and can be overridden wherever it is needed
    `,
    "What are access modifiers in Java?": `
    • Access modifiers are used to define the scope of accessibility for the members of the class
        • <b>Members of a class = constructors, instance variables, methods, blocks</b>
    • <b>There are 4 access modifiers -> public, protected, default and private</b>
    
    • A class itself in a Java can only be public or default
        • public class -> can be accessed by any other class in the project
        • default class -> can be accessed by classes in the same package
    
        • More accessible to less accessible: public > protected > default > private
    
        • We can give access class methods, fields and constructors at 3 access levels
    1. Only within the class:
        • private keyword is used to make fields and methods to be accessible only within the class
    2. Only within the package:
        • protected and default keywords are used to make fields and methods to be accessible only within the same package
        • HOWEVER, protected can be used outside of the package as well in case of inheritance
    3. Anywhere within the project:
        • public keyword is used to make fields and methods to be accessible anywhere in the project
        
    • <b>NOTE:</b> Access modifiers cannot be applied to local variables
    `,
    "What is final keyword in Java and where to use it?": `
    • final keyword: it is kind of a non-access modifier and do not control the access level for class members, but it provides some other functionalities
        • <b>A field can be final</b> -> final field must be initialized, and this value cannot be changed
        • <b>A method can be final</b> -> this method cannot be overridden (it can still be overloaded)
        • <b>A class can be final</b> -> this class cannot be extended
        • <b>Constructors cannot be final</b>
    `,
    "What is static keyword in Java and where to use it?": `
    • static keyword: it is used define some class members to be called by class name
        • <b>A field can be static</b> -> static field means, it belongs to class can be called with className
        • <b>A method can be static</b> -> static method means, it belongs to class can be called with className
        • <b>A block can be static</b> -> static blocks are executed before everything else once an object of that class is created
        • <b>A class cannot be static</b> -> It is better to say outer class cannot be static (There can be static inner classes)
        • <b>Constructors cannot be static</b>
    `,
    "What are Object-Oriented Programming Principles?": `
    • Java is an object-oriented programming
    • The core concept of the object-oriented approach is to break complex problems into smaller objects. So, Object-oriented simply known as an approach to programming that breaks a programming problem into objects
    • Everything in Java is associated with classes and objects
    • Different Java objects can interact with each other
    • There are 4 main principles of Object-Oriented Programming Languages
        • Encapsulation
        • Inheritance
        • Abstraction (Abstract Classes vs Interfaces)
        • Polymorphism
    `,
    "What is encapsulation? Why we need it? How we achieve it?": `
    • Encapsulation is making sure that "sensitive" data is hidden from users
    • We need encapsulation to protect instance variables from being accessed directly
    
    • HOW ACHIEVE ENCAPSULATION?
        • Make instance variables private
        • Provide public setters and getters methods
        • <b>Note:</b> These public getters and setters' method will help us to access and update private fields
    
    • WHY WE NEED ENCAPSULATION?
        • Better control of class attributes and methods
        • Class attributes can be made read-only (if you only use the get method), or write-only (if you only use the set method)
        • Flexible: the programmer can change one part of the code without affecting other parts
        • Increased security of data
    `,
    "What is inheritance? Why we need it? How it can be achieved? What are some rules for inheritance?": `
    • Inheritance in Java is inheriting attributes and methods from one class to another. This will create "inheritance concept" into two classes
    • subclass (child) - the class that inherits from super (parent) class
    • superclass (parent) - the class being inherited from sub (child) class
    • To inherit from a class, use the extends keyword
    
    • WHAT CAN BE INHERITED FROM SUPER-PARENT-BASE CLASS?
        • Methods and variables of parent class can be inherited
        • Access modifiers decide which methods and variables will be inherited
        • private methods and variables cannot be inherited as they are private to the class
        • default methods and variables can only be inherited if parent and child classes are in the same package
        • protected and public members can be inherited by any class within the project
    
    • RULES OF INHERITANCE:
        • A child class can only 1 parent class
        • A parent class can be parent of multiple child classes
        • Making a class final means this class cannot be extended (inherited)
        • By default, each class will be extended to Object class

    • WHY WE NEED INHERITANCE?
        • It is useful for code reusability: with the help of inheritance, we can reuse attributes and methods of a parent class when we create a new child class
        • In most of the case, most of the methods and attributes are already created in parent and we don't need to create those again in child classes
        • By this way, we will be using common code with parent while we will create only some specific methods and attributes for the child classes
    `,
    "What is abstraction? How it can be achieved? Talk about Abstract and Interface classes?": `
    • Abstraction is a process of hiding the implementation details and showing only functionality to the user
    • Abstraction can be achieved in 2 ways
        • abstract classes & Interfaces
    
        • <b>NOTE:</b> Abstract classes or Interfaces are created to be used by other classes
    
    • Abstract Class: A class which is declared as abstract is known as an abstract class
        • An abstract class must be declared with an abstract keyword
        • It can have both abstract, non-abstract methods and static methods
        • It cannot be instantiated (object cannot be created)
        • It can have constructors
        • It can have final methods which cannot be overridden
        • Abstract method: can only be used in an abstract class, and it does not have a body
        • The body is provided by the subclass (inherited from) by using @Override annotation
    
    • MORE TO KNOW ABOUT ABSTRACT CLASSES:
        • An abstract class can be inherited by many subclasses same as non-abstract classes
        • Any class that extends to an abstract class MUST implement body for the abstract methods
        • An abstract class can be inherited by another abstract subclass and in this case:
            • abstract methods may not be implemented in the subclass
            • BUT, any third class that extends to abstract subclass MUST implement all abstract methods in both abstract classes
    
    • Interface: another way of achieving abstraction in Java and we can define additional features of objects by using interfaces
        • To access the interface methods, the interface must be "implemented" (like inherited) by another class with the implements keyword (instead of extends).
        • The body for the interface abstract methods is provided by the class that implements the interface
    
    • RULES TO KNOW:
        • Like abstract classes, interfaces cannot be used to create objects
        • Interface methods do not have a body - the body is provided by the class that implements interface
        • On implementation of an interface, you must override all its methods
        • Interface methods are by default abstract and public
        • Interface attributes are by default public, static and final
        • An interface cannot have a constructor
    
    • INTERFACE METHODS:
        • Abstract methods: Interfaces usually have ONLY abstract methods and they are public abstract by default
        • Default methods: Interfaces can have methods that has body by using default keyword 
            <b>NOTE:</b> default keyword is not defining access modifier here!!!
        • Static method: Interfaces can have regular static methods that has body
            <b>NOTE:</b> These methods are always public as well and can be called with interface name
    
    • MORE TO KNOW ABOUT INTERFACE:
        • Interfaces are created to define additional behavior of the object
        • One class can implement multiple interfaces
        • Interfaces can extend to another interface but cannot extend to a class
        • One Interface can extend to many Interfaces. In this case:
            • A class implementing the interface that extends many other should override all the abstract methods of all extended interfaces
        • Interfaces are usually named with <able> keyword. Rollable, Reliable, Scalable
    `,
    "WHY WE NEED ABSTRACTION - ABSTRACT CLASSES AND INTERFACES?": `
    • Abstraction in Java can be achieved by abstract classes and interfaces
    • Abstract classes and interfaces are created to be used by many similar subclasses and provides some common fields and methods to those subclasses and increases code reusability
    • A class can extend to only one class in Java (or one abstract class)
    • In this case, interfaces can be used to provide multiple inheritance (biggest difference between abstract class and interface)
    `,
    "What is polymorphism? When we need polymorphism?": `
    • Polymorphism is known as one object's being able get into many different shapes and it can be achieved only through multiple inheritance. (Parent-Child class concept, abstract classes and interfaces)
    • Polymorphism is also closely related to inheritance
    • When we create an object, reference of object can be all below:
        • 1. Itself
        • 2. Higher level super classes that the class is extending
        • 3. Interfaces that the class implementing
    
    • Polymorphism is not useful when creating very few Parent and Child classes in Java
    • It is meaningful when used with many parents and many child classes
    • One of the most important purpose of Polymorphism is using Polymorphic arrays
    • Polymorphic arrays: A collection which can store many different types in one array/collection
    
    • Up-casting vs down-casting in polymorphism
        • Up-casting: when reference is type of parent, but object is child
        • Up-casting happens implicitly
        • Down-casting: when reference is type of child, but object is parent
        • Down-casting happens explicitly
    `,
    "What are the similarities and differences between Abstract classes and Interfaces?": `
    • SIMILARITIES:
        • Both abstract class and interface are used to achieve abstraction where we can declare the abstract methods
        • Both abstract class and interface cannot be instantiated - meaning - we cannot create object from them
    
    • DIFFERENCES:
         • Abstract class: 
            • Abstract class can have abstract and non-abstract methods.
            • Abstract class doesn't support multiple inheritance. 
            • Abstract class can have final, non-final, static and non-static variables. 
            • Abstract class can provide the implementation of interface.
            • The abstract keyword is used to declare abstract class. 
            • An abstract class can extend another Java class and implement multiple Java interfaces.
            • An abstract class can be extended using keyword "extends". 
            • A Java abstract class can have class members like private, protected, etc.
    
         • Interface class: 
            • Interface can have only abstract methods. Since Java 8, it can have default and static methods also.
            • Interface supports multiple inheritance.
            • Interface has only static and final variables.
            • Interface can't provide the implementation of abstract class.
            • The interface keyword is used to declare interface.
            • An interface can extend another Java interface only.
            • An interface can be implemented using keyword "implements".
            • Members of a Java interface are public by default.
    `,
    "What is Dynamic Polymorphism vs Static Polymorphism in Java?": `
    • Dynamic Polymorphism - Runtime polymorphism -> it is method overriding
    • Java doesn't know which version of method implementation gets executed until we run the code
    
    • Static Polymorphism - Compile-time polymorphism -> it is method overloading
    • Java knows exactly which method it will pick based on the parameter you passed for a method
    `,
    "What is IS-A and HAS-A relationship in Java?": `
    • IS-A RELATIONSHIP is inheritance. Example/ Mercedes is a Car (Mercedes class extends to car class)
    • HAS-A-RELATIONSHIP is one class' having reference to an instance of another class. Example/ Author has a Book (Book class instance is referenced by Author class)
    `,
    "What is Java Collections framework?": `
    • Java Collections Framework is a set of pre-written classes and interfaces that helps us to organize and manipulate groups of objects
    • By using Java Collections Framework, we can organize our objects in different ways like lists, sets, or maps
    
    • The reason we need to use these types that Array is very useful, but it has some restriction
        • Array is fixed in terms of size (we cannot add elements or remove)
        • And Array does not have methods to manipulate data
    
        • Java Collections Framework interfaces and classes comes from java.util package (Iterable is in java.lang only)
    • Most important interfaces that are implemented by collection classes are List, Set and Map
    `,
    "What is List in Java?": `
    • List is an interface that specifies the methods required to process an ordered list of objects
    • There are 2 implementations provided for the List interface: ArrayList and LinkedList
    • Both ArrayList and LinkedList implements List interface
    • Both ArrayList and LinkedList allows us to store duplicated objects
    • Both ArrayList and LinkedList allows us to have unlimited null elements
    • LinkedList also implements Queue and Deque interfaces and this adds more methods to LinkedList for us to use to process or manipulate data like getFirst(), getLast(), poll(), peek()
    `,
    "What is Set in Java?": `
    • Set is an interface that defines the methods required to process an unordered collection of objects in which there is no duplication
    • HashSet implements Set interface and LinkedHashSet extends to HashSet LinkedHashSet extends HashSet | HashSet implements Set
    • Both HashSet and LinkedHashSet eventually implements the Set interface, and they allow ONLY 1 null element
    • HashSet is an unordered collection of the data set, whereas the LinkedHashSet is an ordered collection of HashSet. HashSet does not provide any method to maintain the insertion order, but
    • LinkedHashSet maintains the insertion order of the elements
    • We can use TreeSet to sort the elements, and TreeSet does not allow any null elements
    • HashSet is faster compared to LinkedHashSet and TreeSet and allocates less memory as it does not store insertion point or sorting the elements
    `,
    "What is Map in Java?": `
    • Map is an interface
    • Map is a data structure that helps us to store multiple items in a single unit as KEY and VALUE
    • It maps from key to value
    
    • Keys are always unique in a map
        • a single key only appears once in the Map
        • a key can map to only one value
    • Values do not have to be unique
    • We can use put(key, value) method to add elements to the map and get(key) method to get element
    
    • keySet() method returns all the keys as a Set (as they are all unique)
    • values() method returns all the values as a Collection
    • entrySet() method returns all key-value pairs
    • containsKey() method is used to check whether a particular key is being mapped into the HashMap or not and returns a boolean
    
    • There are 2 implementations provided for the Map interface: HashMap and HashTable
    • Both HashMap and HashTable implements the Map interface
    • LinkedHashMap extends to HashMap, and it maintains insertion order and TreeMap sorts the elements
    • HashMap allows only 1 null key and multiple null values
    • HashTable does not quarantee any kind of order and does not allow any null keys or values
    • TreeMap does not allow any null key, while it allows multiple null values
    • HashTable is synchronized and that is why thread safe while HashMap is not synchronized and not thread safe
    `,
    "What is Iterator in Java?": `
    • An Iterator is an object that can be used to loop through collections, like ArrayList, HashSet, etc.
    • We can use iterator to loop through all collections that extends to Iterable interface
    
    • Iterator provides 3 useful methods to use
        • hasNext() -> returns true if there are more elements in the collection or false otherwise
        • next() -> gets next element from the collection
        • remove() -> removes the element from collection that is currently retrieved
    
    • <b>NOTE:</b> Trying to remove items using a for loop or a for-each loop would not work correctly because the collection is changing size while the code is trying to loop. It is better to use iterator if we need to remove elements from collection while looping it.
    `,
    "What are the differences between List, Set and Map?": `
    • List, Set and Map are very commonly used interfaces and important in Java Collection Framework
    
    • List is an ordered and indexed collection and allows duplication.
        • It contains index-based methods as it stores elements with their indexes and those methods can be used to insert, update, delete and search elements in the collection.
        • It allows to store countless null elements
    
    • Set is an unordered collection of unique objects and it does not allow duplication.
        • There is no insertion point in Set collection which means we cannot use any methods that uses indexes to insert, update, delete or even get.
        • Since Set does not allow duplication, you can have only one null element.
    
    • Map is a data structure that helps us to store multiple items in a single unit as KEY and VALUE
        • Each key is linked to a specific value.
        • Each key MUST be unique in a Map.
        • Value for the keys can be duplicate.
        • Since keys are always unique, there can be only one null key but many null values.

    1.<b> Duplicity:</b>
    • List allows duplicate elements. List can have any number of duplicate elements.
    • Set does not allow duplicates. Set and all of the classes which implements Set interface should have unique elements.
    • Map stores the elements as key & value pairs and Map does not allow duplicate keys while it allows duplicate values.
    2.<b> Null values:</b>
    • List allows any number of null values.
    • Set allows only one null value.
    • Map can have only one null key and any number of null values.
    3.<b> Order:</b>
    • List and all of its implementation classes maintains the insertion order.
    • Set does not maintain any order but few of its classes sort the elements. For example, LinkedHashSet maintains the elements' in insertion order.
    • Similar to Set Map also does not store the elements in an order, however few of its classes does the same. For example, TreeMap sorts the map in the ascending order of keys and LinkedHashMap sorts the elements in the insertion order, the order in which the elements got added to the LinkedHashMap.

    4.<b> Commonly used classes:</b>
    • List: ArrayList, LinkedList etc.
    • Set: HashSet, LinkedHashSet, TreeSet, SortedSet etc.
    • Map: HashMap, TreeMap, WeakHashMap, LinkedHashMap, IdentityHashMap etc.
    `,
    "When to use List, Set and Map in Java?": `
    • If you do not want to have duplicate values in the collection, then Set should be your first choice as all of its classes do not allow duplicates.
    • If there is a need of frequent search operations based on the indexes, then List (ArrayList) is a better choice.
    • If there is a need of maintaining the insertion order, then also the List is a preferred collection interface.
    • If the requirement is to have the key & value mappings in the collection, then Map is best to use.
    `,
    "What are the similarities and differences between HashMap and HashTable?": `
    • <b>Similarities:</b>
        • Both HashMap and HashTable classes are implementing Map Interface.
        • Both HashMap and HashTable are used to store key/value pairs.
        • We specify an object that is used as a key, and the value that is linked to that key when use either HashMap or HashTable.

    • <b>Differences:</b>
        • HashMap is not synchronized which means it is not thread safe and cannot be shared between many threads without proper synchronization whereas HashTable is synchronized. It is thread-safe and can be shared with many threads.
        • HashMap allows one null key and multiple null values whereas HashTable does not allow any null key or value.
        • HashMap is generally preferred over HashTable if thread synchronization is not needed. So, we don't have issues with synchronization, then we will prefer to go with HashMap as it is faster than HashTable considering performance.
    `,
    "What does thread-safe mean in Java?": `
    • Java has Multithreading feature, and this feature allows us to run multiple threads simultaneously.
    • Imagine, few test scripts running at the same time in different threads. There might be possibility that these scripts are trying to use same data, and the value of that data might change due to other threads running. In this case, we might get un-expected results although our code is right. Issues we might get are because of changing data and threads not being synchronized. In such cases we are implementing multithreading, one thread should wait other in case of sensitive data and all threads must be synchronized in this way. This process is called Thread-Safety and easiest way to achieve it is synchronization.
    
    • REMEMBER, in the past we discussed that if you need multithreading for your script, you should consider using thread-safe classes for your scripts like HashTable for key/value pairs instead of HashMap or StringBuffer to manipulate strings instead of StringBuilder.
    `,
    "What are errors and exceptions in Java?": `
    • Error and exceptions are known as unexpected result that breaks flow of the program
    • Both errors and exceptions are the subclasses of java.lang.Throwable class.
    
    • ERRORS:
        • Errors are the conditions which cannot get recovered by any handling techniques.
        • Errors are unchecked types and mostly occur at runtime
        • These are serious and not programmer's responsibility like OutOfMemoryError
    
    • EXCEPTIONS:
        • Exceptions can get recovered by try catch blocks or throws keyword
        • Exceptions are divided into two categories
        • Checked exceptions are known to the compiler at compile time like IOException
        • Unchecked exceptions are known to the compiler at runtime like ArrayIndexOutOfBoundException
        • It is mostly caused by the program written by the programmer. It is a BUG needs to be fixed
    `,
    "What is throwing exception in Java?": `
    • Many different exceptions may be thrown when we execute a java program. It could be some coding errors made by the programmer or errors due to wrong input, or other unexpected things.
    • Execution of the code stops when an exception is thrown, and an error message is generated.
    • The technical term for this is throwing an exception in Java.
    `,
    "What are checked and unchecked exceptions in Java?": `
    • Checked exceptions are also known as compile-time exceptions
        • These kinds of exceptions must be handled before a program is run
        • We need to handle these with try-catch (sometimes finally) blocks before running program
        • Our program will not compile until checked exception is handled
        • EX: InterruptedException, FileNotFoundException, IOException
    
    • Unchecked exceptions are also known as run-time exceptions
        • These kinds of exceptions will be thrown when program is run
        • So, program compiles and does not show any error until we run the program
        • EX: StringOutOfBoundException, ClassCastException, NullPointerException
    `,
    "How to handle exceptions in Java?": `
    • We can handle checked exceptions by using try catch blocks
    • The try statement allows you to define a block of code to be tested for errors while it is being executed
    • The catch statement allows you to define a block of code to be executed, if an error occurs in the try block
    • try block can be used with multiple catch blocks in some cases. This might be used when code executed in try block might throw multiple different exceptions
    
    <b>NOTE:</b> We cannot catch child exception under parent exception type. In this case catch block used for child exception will be unreachable and cause a compiler error
    <b>NOTE:</b> We can add exception to method signature to handle as well but this is not the proper way!
    `,
    "What is finally block and its relationship with try-catch blocks?": `
    • The finally block allow us to execute a final code after try...catch, regardless of the result
    • It is used to run a final block of code after try catch
    <b>NOTE:</b> try can ONLY be used either with catch or finally block
    • BUT it is optional to have only catch or finally block or both after try block
    `,
    "What are final, finalize, finally keywords in Java and their differences?": `
    • final: it is kind of a non-access modifier and do not control the access level for class members, but it provides some other functionalities
        • A field can be final-> final field must be initialized, and this value cannot be changed
        • A method can be final-> this method cannot be overridden (it can still be overloaded)
        • A class can be final-> this class cannot be extended
    
    • finalize(): it is a method can be used to run a block of code before object reference is garbage collected
        • Purpose of using this method is to do proper clean up before removing the object
        • By default, finalize method is empty. However, you can write your own finalize method to take certain action
        • This method is in Object class and can be overridden wherever it is needed
    
    • finally: is a block used with try-catch block
        • The finally block allow us to execute a final code after try...catch, regardless of the result
        • It is used to run a final block of code after try catch
    `,
    "What are throw and throws keywords in Java and their differences?": `
    • Both of these keywords are related to Exceptions, but they are different from each other.
    • We can create our own exceptions in Java and throw keyword allows us to create a custom error/exception
    • The throw statement is used together with an exception type within a method block
    • We can create both checked and unchecked exceptions
    • On the other hand, throws keyword is used to add exception to method signature
    
    <b>NOTE:</b>
        • In method overriding concept, if parent class method throws an exception, then child class method should also throw an exception
        • This exception must be same or more specific exception, but it cannot be more general type of exception
    `,

    // ###Recently Asked Java Interview Questions
    "What are the restrictions of Arrays?": `
    • This question could be asked as “Why we need Collections in Java” as well
    • Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value
    • By using an Array, we can store many similar items/elements in one variable
    • Arrays can be used with both primitive and reference data types while all other collections can only be used with reference types (objects)
    
    • HOWEVER, Array has some restriction and that's why we need to have a good knowledge of using collections based on the need
    • Array does not provide methods to manipulate data as other collections
    `,
    "How to convert String to an int?": `
    • This question could be asked for all of the primitives except char.
    • We can convert String to related primitive by using their Wrapper classes
    • valueOf() and parseType() methods can be used for the conversion
    
    EXAMPLE:
    • String str = “235”;
    • int number1 = Integer.valueOf(str); or
    • int number2 = Integer.parseInt(str);
    
    • double d1 = Double.valueOf(str); or
    • double d2 = Double.parseDouble(str);
    
    • <b>NOTE:</b> parseInt(), parseDouble() or parseBoolean() and other parse methods from wrapper classes are used to convert given String into the primitive data types and return primitive while valueOf() methods converts given object to wrapper class objects.
    `,
    "How to convert primitive int to a String?": `
    • This could be asked for all other primitive data types
    • We can convert any primitive data type to a String
    • Using + (concatenation), will convert any data type to a String
    • Or String.valueOf(variable) method can be used
    
    • EXAMPLE:
    • int age = 45;
    • String stringAge1 = age + “”;	// “” is known as empty String String stringAge2 = String.valueOf(age);
    `,
    "What is the difference between = and == operators?": `
    • = is the assignment operator and used to assign values into variables.
        • EXAMPLE:
        • int age = 45; // 45 is assigned to the age variable
    
    • == is one of the relational operators and it is used to find if both sides of the operator are equal to each other. It will return a boolean, either true or false based on the comparison
        • EXAMPLE:
        • 5 == 5 // this comparison will return true and it can be assigned to a boolean as below boolean equal = (5 == 5); // in this statement, equal variable has value of true as 5 equals to 5
    `,
    "What is the difference between == operator and equals() method?": `
    • == is one of the relational operators and it is used to find if both sides of the operator are equal to each other. It will return a boolean, either true or false based on the comparison
    • == is mostly used with primitive data types and should not be used with reference types (objects)
    • When == is used with reference types, it compares their location in the memory and each object created with new keyword will have a unique location. That's why, although the object variable values are same, == will return a false since it compares their location and locations are obviously different.
    
    • equals() is mostly known to be used with String objects but String is not the only class that has equals() method. Wrapper classes, Arrays, ArrayList, Vector and other collections also has equals() method and this method is used to check 2 objects of same data type has same value or not and return a boolean as true or false
    
    • EXAMPLES
    • String str1 = “Tech”; String str2 = “Global”;
    • System.out.println(str1.equals(str2)); // this statement will print false as 2 String object values are not equal
    
    Or
    
    • Map<String, String> map1 = new HashTable<>(); map1.put(“SchoolName”, “TechGlobal”);
    • map1.put(“Address”, “2860 S River Rd Suite 350, Des Plaines IL 60018”); Map<String, String> map2 = new HashTable<b>(map1);
    • System.out.println(map1.equals(map2)); // this statement will print true as 2 HashTable object keys and values are equal
    `,
    "How can we use primitive data types as objects?": `
    • Primitive data types like int can be handled as objects by the use of their respective wrapper classes
    • For example, Integer is a wrapper class for primitive data type int
    • We can apply different methods to a wrapper class, just like any other object
    `,
    "Is it possible to override and overload main, private, final, static or abstract methods?": `
    • This question is frequently asked for final methods, abstract methods, static methods, private methods and main method. DO NOT MEMORIZE, LEARN LOGIC BELOW!
    
    REMEMBER:
    • <b>Method overloading</b> is creating a method which has same name with another method in the class but different signature
    • Overloading happens in the same class with different parameters
    • Overloaded methods are sharing same name but different signature
    • Method overloading is not related to inheritance
    
    • <b>Method overriding</b> is implementing a new body to an inherited method from parent class
    • Overriding methods can happen only when a child class inheriting a parent class
    • Overriding is writing same method from parent class with a different implementation in the child class
    
    • FROM INFORMATION GIVEN ABOVE,
    • <b>Private methods</b> are specific to the class they are created and are not visible to child classes. So, overriding a private method is not possible but they can be overloaded in the same class with different method signature
    • <b>Static methods</b> belong to the class they are created and cannot be overridden in the child class. On the other hand, they can be overloaded in the same class meaning that you can have 2 or more static methods with same name as long as they have different parameter types
    • <b>Abstract methods</b> do not have body and it is left to be implemented by non-abstract child classes, so the purpose of abstract methods is to be overridden. And they can also be overloaded in the same class
    • <b>Final methods</b> cannot be overridden and purpose of making a method final is to prevent overriding but they can be overloaded
    
    • <b>NOTE:</b> abstract methods cannot be final. These two modifiers are completely conflicting with each other. Making a method final means the method cannot be overridden while making a method abstract means it must be overridden in the child class. So, a method can never be final and abstract at the same time.
    • <b>NOTE:</b> abstract methods cannot be private. These two modifiers are also conflicting with each other. Making a method private means the method will be specific to the class it created and cannot be used in any other class while making a method abstract means it must be overridden in the child class. So, a method can never be private and abstract at the same time.
    
    • <b>main() method</b> in Java is used to run a program and it tells JVM where the starting point of the program is. Remember, we said static methods cannot be overridden and since main() method is also static, it cannot be overridden. However, it can be overloaded. You should know that if you overload main() method, JVM will still only use original main() method to run your program and your overloaded main method can only be executed if you call it in the original main() method
    `,
    "Can we have abstract class without having any abstract method in it?": `
    • Yes, we can have abstract class without having any abstract method
    • REMEMBER, abstract class can have both abstract and non-abstract methods and it may not have one of these
    `,
    "Can we have two methods in a class with the same name?": `
    • Yes, we can define two methods in a class with the same name but with different number/type of parameters
    • This is known as method overloading
    `,
    "Is it possible to have static methods in an Interface?": `
    • Methods are by default public abstract in the Interface
    • BUT we can have static methods in an Interface after Java 8
    • We can also have default methods that has body in an Interface
    `,
    "Can we declare the main() method as private?": `
    • main() method must be public static in order to run any application correctly
    • If main method is declared as private, programmer will not get any compilation error but, it will not get executed
    `,
    "How we can execute any code even before main() method?": `
    • We know that starting point of an application in Java is main() method and when we run a program JVM first finds the main() method and executes statements in it
    • If we want to execute any statements before even creation of objects, we can use a static block of code in the class
    • Any statements inside the static block of code will get executed once at the time of loading the class even before creation of objects in the main method
    `,
    "Can main() method return any data in Java?": `
    • No, main() method cannot return any data as it is a void type method
    `,
    "Is it possible to make constructor final?": `
    • No, we cannot declare constructor as final and we cannot declare constructor as static
    `,
    "How objects of a class are created if no constructor is defined in the class?": `
    • REMEMBER: Java always provides a default constructor even if we do not create a custom one
    • Objects are getting created successfully with default constructor
    • This constructor has no parameters
    `,
    "Is it possible to call a constructor from another constructor's body?": `
    • Yes. If a class has multiple constructors, then it is possible to call one constructor from the body of another one using this()
    `,
    "Can we use a default constructor of a class even if a custom constructor is created?": `
    • Java provides a default no argument constructor if we do not create any custom constructor
    • However, once we create a custom constructor, default constructor cannot be used anymore
    • If we still want to create objects with default constructor, we need to explicitly define it in the class
    `,
    "Is it possible to create an object of any Interface?": `
    • They may ask same question for abstract classes as well
    • NO, we cannot instantiate both abstract classes and interfaces meaning we cannot create objects for them
    
    REMEMBER:
        • Both abstract classes and interfaces are created to be used by other classes with inheritance
        • Abstract classes and interfaces are created to be used by many similar subclasses and provides some common fields and methods to those subclasses and increases code reusability
        • Abstract class can be parent to many other child classes but can extend to only one parent (single inheritance). To be able to have additional features, Java introduces interfaces and multiple inheritance is possible with interfaces. One interface can extend to many other interfaces while one class can implement many other interfaces
    `,
    "Can one interface implement another interface in java?": `
    • No, one interface cannot implement another interface. It can extend it using extends keyword
    `,
    "Can a class be a super class and a sub-class at the same time?": `
    • Yes, a class can be a super class for another class and a sub-class to another one at the same time
    `,
    "Can a class in Java be inherited from more than one class?": `
    • Yes, one class can be base (parent) to multiple classes, but one child cannot extend to multiple base classes
    `,
    "How can we restrict inheritance for a class so that no class can extend to it?": `
    • REMEMBER: when we make a class final, it means it cannot be inherited
    • So, if we want a class not to be extended further by any class, we can use the keyword final with the class name, and this will restrict it to be a parent class
    `,
    "What is the base class for all the classes in Java?": `
    • Base class means super class or parent class as well
    • Object class is the base class for all of the other classes in Java
    • Object class is coming from java.lang package
    `,
    "Can you list down some of important method from object class?": `
    • equals() - It compares the object references
    • toString() - Provides String representation of the object
    • finalize() - This method is called when object is being garbage collected
    `,
    "What are the types of comments in Java?": `
    • Single line comment with //This is a single line comment 
    • Multiple line comments /*This is multiple line comments*/ 
    `,
    "Why String is immutable?": `
    • String class is immutable in Java
    • It means unable to be changed or unchanging over time, so String is unchangeable or unmodifiable in Java
    • When we create a String as String s = “Text”; It will be stored in String Pool in the heap and this value might be referenced by some other variables as well. And if you were able to change the value, then it would change for all variables referencing to the same value. To prevent this, String is immutable
    • Another reason is being thread-safe (synchronized). String and all other immutable object are thread-safe by default, so you don't need to explicitly implement synchronization for them
    • It is also safe to use considering security as the value of String will not be changed
    `,
    "What are two different ways to call garbage collector explicitly?": `
    • Garbage collection is destroying objects that lose references and it happens implicitly in Java
    • BUT, we can do garbage collection explicitly using <b>System.gc()</b> or <b>Runtime.getRuntime().gc()</b> methods
    • These methods can be used as a hint to the JVM, in order to start a garbage collection. However, this it is up to the Java Virtual Machine (JVM) to start the garbage collection immediately or later in time
    `,
    "Can we have try block without catch block in Java?": `
    • Yes, we can have try block without catch block by using finally block
    • You can use try with either catch or finally block or with both
    `,
    "How can you generate random numbers in Java?": `
    • We can use Math.random() to generate random numbers
    • Also, Random class in package java.util can be used to generate Random numbers
    
    <b>NOTE:</b> Some third-party libraries can be added to project and be used to generate random data including numbers
    `,
    "What are Java packages? What's the significance of packages?": `
    • Package is a collection of classes and interfaces which are bundled together as they are related to each other
    • Use of packages helps programmers to modularize the code and group the code for proper re-use
    • Once code has been packaged in packages, it can be imported in other classes and used
    `,
    "What is the purpose of using break in each case of switch statement?": `
    • break is used after each case (except the default case) in a switch, so that code breaks after the valid case and does not flow in the proceeding cases too
    • If break is not used after each case, all cases after the valid case will get executed resulting in wrong results
    `,
    "Can a variable be local and static at the same time?": `
    • No, a variable cannot be static as well as local at the same time
    • Defining a local variable as static gives a compilation error
    • <b>NOTE:</b> Instance variables can be static, and it means it is shared by all objects of the class and belongs to the class anymore
    `,
    "Is Java 100% Object-Oriented Programming Language?": `
    • Java is an Object-Oriented Programming Language
    • BUT Java has primitive data types, and that is why Java is not 100% Object-Oriented
    `,
    "What is Enum in Java?": `
    • An enum is a special "class" that represents a group of constants (unchangeable variables, like final variables).
    • To create an enum, use the enum keyword (instead of class or interface), and separate the constants with a comma
    • Notethat they should be in uppercase letters
    • Enum is useful to use for values that will not change like months, days, colors, etc.
    `,
    "What is multi-threading in Java?": `
    • Multi-threading is a programming concept to run multiple tasks in a concurrent manner within a single program
    • Threads are used for that and they share same process stack and running in parallel for different tasks
    • It helps in performance improvement of any program
    `,
};

//-------------------------------------Soft skills answers-------------------------------------//
const answers_soft_skills = {
    "What is SDLC?": `
        • SDLC is a step-by-step procedure to develop any new software.
        `,
    "Why do we need SDLC?": `
    <b>• To know:</b>
        • Requirements
        • Cost of the project
        • Workforce requirements
        • Project Timeline
        • Profit from the project
        `,
    "What are the SDLC phases? Can you briefly explain them?": `
        <b>• Planning:</b>
        The planning is the first phase of the SDLC. There are also steps in the planning:
            <b>1. Business Idea:</b> Usually, the client has an idea to have an application to improve their business
            <b>2. Requirements Gathering:</b> PO (Product Owner) or BA (Business Analyst) gathers the requirements from the client.
            <b>3. Feasibility Study:</b> The product manager, finance team, HR team, architects, and PO get together and make a decision if they can take the project or not. They mainly talk about three topics.
                    a. Do they have enough resources to take the project? Meaning that if they have enough developers and test engineers.
                    b. Do they have a system set up, like a lab?
                    c. Do they have enough technology to develop this project?
            <b>4. Requirements Analysis:</b> Operations, developers, testers, architects, and PO get together and discuss the requirements in detail, and PO creates the user stories and puts them into Product Backlog in the project management tool.
        <b>Design:</b>
            • The design includes UI, UX design, Framework, development language, system server, and database design, the architecture of the application, different devices aspect, browsers, and much more.
        <b>Development:</b>
            • In this phase, developers start writing the code, test engineers analyze the requirements and build test cases for the test plan. Even in this stage, test engineers are incredibly valuable. They begin to imagine the application's usability and see how everything flows together. Sometimes when they write test cases, they can discover things that do not make sense and help redesign the flow in the early stages of the development.
        <b>Testing:</b>
            • Development is finished, and the application is ready to test. Test Engineers execute all the tests from the test plan and validate that all requirements have been met. Make sure all the functionalities are working as expected. Find as many bugs as possible and assign them to developers.
        <b>Deployment:</b>
        • Moving your code from localhost to remote host(server)
        • Setting up the product environment
        • Deploying the product to the actual user
        • Testing the main functionality again in production

        <b>Maintenance:</b>
        • Maintaining the application
        • Fixing the bug if any occurs
        • Keep monitoring the servicers
        • Monitoring the usage or if it is system up or down
        `,
    "What are the roles and responsibilities in SDLC?": `
        <b>Client (Customer)</b>
        • A person or organizationhas an idea and capital.
        • Willing to invest and provide better services to customers.

        <b>Product Owner</b>
        • Responsible for maximizing the value of the products created by a development team.
        <i>Responsibilities</i>
        • Defining the vision
        • Managing the project backlog
        • Prioritize the needs
        • Overseeing the development stages
        • Anticipating the client's needs

        <b>Scrum Master</b>
        • The SCRUM master is the team role responsible for ensuring the team lives agile values and principles and follows the processes and practices that the team agreed they would use.
        <i>Responsibilities</i>
            Responsible for facilitating the Scrum process
        • Helps builds self-organizing teams
        • Removes impediments, escalates when needed
        • Protects the team from disturbances

        <b>Software Developer</b>
        • A software developer writes code and develops the software application
        <i>Responsibilities</i>
        • Responsible for developing new software products or modifying the existing ones.
        • Researching, designing, implementing, and managing software programs
        • Identifying areas for modification in existing programs and subsequently developing these modifications
        • Writing and implementing efficient code
        • Determining operational practicality
        • Maintaining and upgrading existing systems
        • Working closely with other developers, UX designers, business, and systems analysts

        <b>Software Tester</b>
        • A Software Tester checks if the actual application matches the requirement, and it is a bug or defect-free.
        <i>Responsibilities</i>
        • Reviewing the software requirement
        • Preparing the test cases
        • Writing the automation test script
        • Executing the manual and automation test cases
        • Make sure the application meets customer requirements.

        <b>End User</b>
            End User is a person who ultimately uses a product.

        <b>UX Designer</b>
        • UX designers conduct user research, design, write UX copy, validate/test with users and sell/present the design solution to the business.
        <i>Responsibilities</i>
        • It's the UX designer's role to be the voice of the user and advocate for the users' needs while balancing the business goals.

        <b>UI Designer</b>
        • UI designer focuses on the user's visual experience.
        <i>Responsibilities</i>
        • It determines how a user interacts with an interface—an app, a video game, or a website. It's all about how the user navigates from A to B via different visual touchpoints.

        <b>Software Architect</b>
        • A software architect is a software development expert.
        <i>Responsibilities</i>
        • Software Architect makes high-level design choices and tries to enforce technical standards, including software coding standards, tools, and platforms.
        `,
    "What is Waterfall Model?": `
        • Waterfall Model is a breakdown of project activities into linear sequential phases, where each phase depends on the deliverables of the previous one and corresponds to a specialization of the task.
        `,
    "What is the Agile Model?": `
        • Agile is an incremental and iterative approach to manage the project. We can move back and forth between the phases. It is flexible.
            1. Planning
            2. Design
            3. Development
            4. Testing
            5. Deployment
            6. Maintenance
        `,
    "What are the values of Agile? (Agile Manifesto)?": `
        • People over process and tools
        • Working software over comprehensive documentation
        • Customer collaboration over rigid contracts
        • Responding to change rather than following a plan
        `,
    "What are the differences between Agile and Waterfall?": `
        • Agile follows incremental and sequesntial approaches
        • Waterfall is a Linear Sequential Life Cycle Model
        • Agile is flexible
        • Waterfall is structured
        • In Agile testing is performed concurrently with software development
        • In Waterfall the "Testing" phase comes after the "Development" phase
        `,
    "What is SCRUM?": `
        • Scrum is an agile process that allows us to focus on delivering the highest business value in the shortest time.
        • Scrum is not a methodology
        • Scrum is framework
        • A better way of building a product
        • Scrum solves the complex adaptive problems
        • Incremental and Iterative
        • Iteration of plan
        • Build
        • Test
        • Review
        `,
    "Who are the Scrum Team Members?": `
        • Scrum master
        • Development team
        • Product owner
        `,
    "What is a user story? What are some components of a user story? Who writes the user story?": `
        • A user story is the smallest unit of work in an agile framework. A user story is an informal, general explanation of a software feature written from the perspective of the end-user or customer.
        • The application is divided into small pieces called User Story.

        <b>Components of a User Story Summary (Title):</b>
        • User stories' summaries (header) must always have a user: It should start “As a [USER NAME] ….”
        • User stories' summaries should be simple and descriptive. “As a user, I should be able to log in.
        • User stories must contain acceptance criteria.
            <b>Examples are the following.</b>
                • “User should log in with valid credentials.”
                • “User should get the error message with the incorrect username.”
                • “User should get the error message with the incorrect password.”
        • User stories should be small and simple. So, the developer can develop the functionality within the given point of time.
        <i>In Agile Scrum, PO writes the user stories. In the SAFe, the team helps PO to write user stories.</i>
        `,
    "What is the acceptance criteria? How should it be defined? Who writes acceptance criteria?": `
        <b>Acceptance Criteria (AC):</b> Conditions that a software product must meet to be accepted by a user, a customer, or other systems. They are unique for each user story and define the feature behavior from the end-user's perspective.

        • Example: “User should log in”
            • Acceptance Criteria should be testable.
            • Acceptance Criteria should be clear and concise.
            • Acceptance Criteria should be understood by everyone on the team.
            • Acceptance Criteria should provide a user perspective.
            • Usually, Product Owners write the User Stories and Acceptance Criteria.
        `,
    "What is Sprint?": `
        • A sprint is a short, time-boxed period when a scrum team works to complete a set amount of work. Sprints are the heart of scrum and agile methodologies, and getting sprints right will help your agile team ship better software with fewer headaches.
        `,
    "What is a Product Backlog?": `
        • A product backlog is a prioritized list of user stories for the development team that is derived from the roadmap and its requirements. The most important items are shown at the top of the product backlog so the team knows what to deliver first.
        `,
    "What is the Sprint Backlog?": `
        • The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how).
        • PO manages both Product and Sprint backlogs. Also, Scrum Master contributes to the PO in terms of backlogs.
        `,
    "What are the Scrum Ceremonies?": `
        <b>There are 5 main events in Scrum or Scrum Meetings:</b>
            1. Backlog Grooming Meeting
            2. Sprint Planning Meeting
            3. Daily Scrum Meeting
            4. Sprint Review Meeting
            5. Sprint Retrospective Meeting

        `,
    "What is the Backlog Grooming Meeting (Product Backlog Refinement)?": `
        • This meeting is performed in the middle of each sprint to refine the user stories for the next sprint.
        • Product Owner, Scrum Master, and Development team attend this meeting
        • Prioritize user stories
        • Add details to the user stories
        • Estimate the time to deliver the user stories
        `,
    "What is the Sprint Planning Meeting?": `
        • Sprint Planning Meeting is conducted before the sprint start
        • Product Owner, Scrum Master, and Development Team attend. If necessary, SMEs or stakeholders may also attend upon the requirements.
        • The product owner describes the highest priority user stories
        • Determine which backlog items will be handled in the next sprint
        • Team objective and set sprint goal
        `,
    "What is the Daily Scrum Meeting?": `
        • Also known as a stand-up, it is a 15-minute daily meeting where the team has a chance to get on the same page and put together a strategy for the next 24 hours. The entire daily scrum meeting is based on discussing three-question listed below:
            • What was done yesterday by the scrum team that helped meet the sprint goal?
            • What will be done today that will help meet the sprint goal?
            • Are there any impediments that are preventing the team from meeting the sprint goal
        `,
    "What is the Sprint Review/Demo Meeting?": `
        • A Sprint Review/Demo meeting is held at the end of the Sprint to inspect the Increment. The Team demonstrates the Increment with a focus on the Sprint Goal according to the Definition of Done. The Product Owner reviews and accepts the delivered Increment.
        `,
    "What is the Sprint Retrospective (Retro) Meeting?": `
        <b>Answering the questions:</b>
            • What went well?
            • What went wrong?
            • How to improve?

        <b>In the Retro meeting team talks:</b>
            • How do fix the problems?
            • How create a plan for improvements?
            • There is always room to improve.
            • Focus on continuous improvement
        `,
    "What are the SCRUM Artefacts?": `
            • Product Backlog
            • Sprint Backlog
            • Increment
        `,
    "What are the Scrum Values?": `
            • Commitment
            • Courage
            • Focus
            • Openness
            • Respect
        `,
    "What is the Parking Lot Meeting?": `
        • There are legitimate things for a team to talk about in the morning that don't fit the tightly defined purpose of the Daily Scrum. Address those topics right after the Daily Scrum is over.
        • <b>Note:</b> In my team one or two times a week we are having a parking lot meetings. So, Parking lot meeting is so useful to understand the topic.
        `,
    "Do all team members attend the Parking Lot meeting?": `
        • It depends! :) If the topic is related to everyone in the team yes. But in my team usually System Architect, developers and QEs attend the Parking Lot Meeting.
        `,
    "What is the Three Amigos Meeting?": `
        • Three Amigos is an Agile development strategy to keep projects on track with specifications, timeline expectations, and more. Here's how to host the meetings, and who should join in. PO, developer, and QE get together to talk about requirements, development, and testing. This meeting can be held before the development, during the development, or after the development while testing is in progress.
        `,
    "What is Burndown Chart?": `
        • Burndown Chart-Track the total work remaining and project the likelihood of achieving the sprint goal. This helps your team manage its progress and respond accordingly.
        `,
    "What are the test scenario, test case, and test script, and what are their differences?": `
            1. A Test Scenario is a statement describing the application's functionality to be tested.
            2. In software development, a scenario is a user journey while using an application or website. A tester's job is to find out how people interact with the functionality and what problems they can face.
            3. Test Scenario is just a statement of acceptance criteria (“User should be able to log in”) in the user story. From the statement, we are writing our test cases. Then, we automate the test cases with a test script using the programming languages.
            • A test scenario is a set of manual or automated tests that helps determine the positive and negative project characteristics. It provides an overview of what needs to be tested by a QA company. Please check the website: https://www.qamadness.com/knowledge-base/test-scenario-definition-purpose-and-how-to-create/

        • A Test Case is a document with a set of test data, preconditions, expected results, and postconditions developed for a particular test scenario to verify compliance against a specific requirement.
        <b>Test Scenario</b>
            • Test Scenario is just a single line
            • It is difficult to test the application functionality only with the scenario if you do not know the application well.
            • It does not have the testing detail.
            • It is asking what to test
            • The test scenario is derived from the requirements
            • It requires less time
            • It requires less resource (Test Engineers)

        <b>Test Case</b>
            • Test Case has multiple components, and some components have multiple steps
            • With the help of the test case's steps, you can easily test the functionality.
            • You do need to have the deep knowledge to test the functionality.
            • It has all the details and steps to test
            • It is asking how to test
            • Test Case is derived from the Acceptance Criteria
            • It requires more time because of the steps
            • It requires more resources (Test Engineers)

        • Test Script is the programming code that automates the test cases to execute and validate the functionality.
        `,
    "How do you write a test case? What should you consider while writing test cases?": `
        <b>Writing Test Case:</b>
            • Select a tool for writing a test case.
            • Write a test case in the required formats:
                • Traditional format
                • BDD format
            • Write basic test statements.
            • Review written test cases thoroughly.

        <b>While writing the test case, you should consider:</b>
            • Check if a test case already exists. If yes, consider updating the test case rather than writing a new one.
            • Ensure the test case has certain characteristics like accuracy, tracing, repetition, re-usability, and independence.
            • Consider all the different scenarios possible before writing.
            • Give yourself enough time to write test cases.
        `,
    "What are the benefits of writing Test Cases?": `
        • The key purpose of a test case is to ensure that different features within an application are working as expected.
        • It helps the tester validate if the software is free of defects and if it is working as per the expectations of the end users.
        • Test cases ensure good test coverage.
        • Help improve the quality of software,
        • Decreases the maintenance and software support costs
        • Help verify and validate that the software meets the end user requirements
        • Allows the tester to think thoroughly and approach the tests from as many angles as possible
        • Test cases are reusable for the future - anyone can reference them and execute the test if they need
        `,
    "What are positive and negative test cases?": `
        <b>Positive Test Case:</b>
            • A type of testing that is performed on a software application by providing valid data sets as input.
            • It checks whether the software application behaves as expected with positive inputs or not.
            • Positive testing is performed in order to check whether the software application does exactly what it is expected to do.
        <b>Negative Test Case:</b>
            • A testing method is performed on the software application by providing invalid or improper data sets as input.
            • It checks whether the software application behaves as expected with negative or unwanted user inputs.
            • The purpose of negative testing is to ensure that the software application does not crash and remains stable with invalid data inputs.
        `,
    "What is happy path testing?": `
        • Happy path testing tests the application through a positive flow to generate a default output.
        • It is positive testing of the application. Happy path testing is done when an application is deployed to the testing environment.

        `,
    "What are boundary-edge cases?": `
        <b>Boundary Testing</b>
        • Boundary Testing is the process of testing between extreme ends or boundaries between partitions of the input values.
        <b>Example:</b>
        • Let's assume you are given an age functionality on your application that you need to test.
        • The input box should accept ages between 20 and 50.
        <b>Your boundaries for positive and negative tests are as follows:</b>
        • Positive test: Test data 20, 21, 35, 49,50.
        • Negative test: Test data 19, 51
        • As we see in the example, we do not need to test all the age samples. We can choose the upper, lower and middle boundaries for positive and negative testing.

        <b>Edge Cases</b>
        Edge Cases are the process of testing for boundary conditions. Essentially looking for extremes on product usability for maximums and minimums along with any outlier functionality.
        • Also, Edge Cases are bugs that are uncommon for a user to encounter.
        • They are also related to boundary analysis. When we write our test cases, we need to check our boundaries based on the interval of the test data to eliminate or reduce the (edge cases) bugs in the application.
        • Example: Let's assume that you are testing the “adding items to the cart” functionality in one of the shopping applications. One of the edge cases would be adding 1000 items to the cart. Typically, users do not add that many items to the cart.
        `,
    "What are the most important skills a Tester must have to perform their job well?": `
        • Critical Thinking
        • Flexibility
        • Excellent Communication Skills
        • Quick to learn
        • Collaboration and social skills
        • Automation Testing
        • Technologies in Web and Mobile
        • Testing Tools and Techniques
        • Cross-Browser Testing
        • Project Management
        `,
    "What is SAFe?": `
        • Scaled Agile Framework® (SAFe®) empowers complex organizations to achieve the benefits of Lean-Agile software and systems development at scale.
        `,
    "What are the disadvantages of Scaling Agile?": `
        • The huge number of teams to manage
        • Lack of long-term plan
        • In the regular product backlog, there are stories for two to three sprints
        • The product marketing team required a further plan to deliver the commitments to the market
        • Lack of Agile understanding at the management level
        • Lock of coordination and a common goal
        • Multiple requirements from multiple teams
        • Unmapped dependencies create unexpected issues and obstacles.
        `,
    "What are the differences between Scrum and SAFe?": `

        <b>Context of Implementation</b>
        • Scrum is a framework for Agile projects and works best when used by companies with a simple organizational structure
        • SAFe is an agile framework usually applied when large companies want to expand the “agile way of working” beyond the teams

        <b>Teams Structure & Roles</b>
        <i>Scrum Team usually has 7-11 persons with the following main roles:</i>
                • Product Owner
                • Scrum Master
                • Development Team

        <i>SAFe has different key roles at four different levels. Some key roles include:</i>
                • Releaser Train Engineer
                • Program Management
                • Value Stream Engineer
                • Solution Architect
                • Epic Owners, etc

        <b>Team Dependencies</b>
                • In Scrum, the level of dependencies between teams tends to be lower than within SAFe. Development Teams are given the freedom to organize themselves and manage their own work
                • SAFe requires a high level of coordination and alignment across teams and management levels which increase work dependency

        <b>Ceremonies & Time Frames</b>
                • Within Scrum, projects are conducted during a sprint, a specific timebox where various ceremonies occur. A cycle lasts from 1 to 4 weeks
                • SAFe follows more or less the same structure. A cycle lasts for about 2 weeks (Iteration in Team level). During this, they follow a plan-do-check-adjust method
        `,
    "What is ART?": `
        • An Agile Release Train (ART) is a team of several Agile teams working towards a common goal. ARTs are crucial to delivering value at the enterprise level.

        `,
    "What are the ART roles?": `
        <b>Product Management</b>
            • Responsible for 'what gets built,' as defined by the Vision, Roadmap, and new features in the Program Backlog.
            • Work with the customers and stakeholders.
            • Collects the requirements and feedback from the customers and stakeholders.
            • Make sure that Product Owners understand the requirements.
        <b>Release Train Engineer (RTE)</b>
            • A servant leader
            • Facilitates program execution, impediment removal, risk and dependency management, and continuous improvement
        <b>System Architect/Engineer</b>
            • An individual or team
            • Defines the overall architecture of the system.
            • Work at a level of abstraction above the teams and components
            • Define Nonfunctional Requirements (NFRs), major system elements, subsystems, and interfaces.
        <b>Business Owners</b>
            • Key stakeholders of the ART
            • Have ultimate responsibility for the business outcomes of the train
            • Provide feedback to the development teams
            • Not responsible for writing the features or acceptance criteria.
        <b>System Teams</b>
            • Assist in building and maintaining development
            • Assist continuous integration
            • Assist test environments
        `,
    "What is PI Planning?": `
        • Program Increment (PI) Planning is an event that serves as the heartbeat of the Agile Release Train (ART), aligning all the teams on the ART to a shared mission and vision.

        <i>PI Planning Event (These are detailed steps! You can only go with a high-level explanation)</i>
        • It takes 2-4 days, depending on the complexity, priority of the Features, and the team sizes. The PI planning event is planned, but sometimes the time is extended.
        <b>Business context:</b>
            • A senior executive describes the Current State and the business of upcoming objectives.

        <b>Product and Solution Vision:</b>
            • Product Management presents the Program vision
            • Prioritize features
            • Changes from previous PI Planning Meeting, Milestones

        <b>Planning context and lunch</b>
            • The release train engineer presented the planning process and expected outcomes of the event.

        <b>1st Team breakouts:</b>
        <i>Each Agile Team:</i>
            • Plan capacity (Team size, Vacations, Holidays)
            • Feature Selection
            • Story breakdown
            • Story point estimation
            • Identify risks and dependencies
            • High-level Iteration (Sprint) planning
            • Adding features to the program board

        <b>Draft Plan Review</b>
        <i>Each Agile Team:</i>
            • Presents draft plan
            • Risk
            • Impediments
            • Capacity
            • Load
            • Draft PI Objectives
        • All the above items are presented to Business Owner, Product Management, Stakeholders, and Other Team review.

        <b>Management Review and Problem Solving</b>
            • The adjustment made by Business Owner, Product Management, and Stakeholders, is based on challenges, risks, and impediments.

        <b>• 1st Team breakouts:</b>
        <i>Each Agile Team:</i>
        • Check the management review
        • Make any changes related to Features' objectives
        • Features' priorities
        • Review the capacity and load
        • Review the user stories for each Iteration
        • Review the points

        <b>Final Plan Review</b>

        • Each Team to Everyone
                • Presenting the Plan
                • Risk and Impediments
                • Taking Product Owners' confidence
                • Presenting PI Objectives
                • Plan Adjustment
            <b>Dependency and Risk</b>
                • Dependencies and risks are assigned to the experts
            <b>Confidence vote</b>
                • Each team member is voting for the confidence of the plan.
        `,
    "Can you tell me how your company performs the PI Planning?": `
        • <b>Note:</b> The following information gives you an idea about the flow of the PI Planning. You do not need to memorize all of them but talk about the flow.

        • Example: In my company, we have three days of PI planning. On the first day, in the morning, the senior executive describes the company's current state and upcoming business objectives. Product Management presents the Program vision and goes over the prioritized features.

        • RTE (Release Train Engineer) presents the planning process and expected outcome of the event.

        • Next, 1st breakouts happen. ☺ During the breakouts, the team plans the capacity, selects features, breaks down the stories, and points them. Also, the team identifies risks and dependencies.

        • After the breakout, teams present the draft Plan and go to the second breakout. In the second breakouts, the team checks the management review, makes changes if necessary, and reviews capacity, stories, and each iteration.

        • With the final review, PI is completed.
        `,
    "What is SMART? Can you explain what each letter means?": `
            1. SMART is an acronym that stands for Specific, Measurable, Achievable, Realistic, and Timely. Therefore, a SMART goal incorporates all of these criteria to help focus your efforts and increase the chances of achieving your goal.
            2. SMART is an evaluation technique that can be used when writing software requirements.
        • A goal without a plan is just a wish.

            • S - Specific: Specific requirements say exactly what is needed, be clear (unambiguous), consistent in terminology, simple, and with an adequate detail level. Answering the questions: What?, Where?, How?, When?"
            • M - Measurable: Break it down into measurable units
            • A - Achievable: Is your goal achievable?"
            • R - Realistic: How much is relevant to you?"
            • T - Timely: When do you achieve your goal?"
        `,
    "Can you explain the bug life cycle?": `
        • <i>New:</i> When a new defect is logged and posted for the first time. It is assigned a status as NEW.
        • <i>Assigned:</i> Once the bug is posted by the tester, the tester assigns it to the developer(s)
        • <i>Opened:</i> The developer starts analyzing and works on the defect fix
        • <i>Duplicate:</i> If the defect is repeated twice or the defect corresponds to the same concept of the bug, the status is changed to "duplicate."
        • <i>Rejected:</i> If the developer feels the defect is not a genuine defect, then it changes the defect to "rejected."
        • <i>Deferred:</i> If the present bug is not of a prime priority and if it is expected to get fixed in the next release, then the status "Deferred" is assigned to such bugs
        • <i>Not a Bug:</i> If it does not affect the functionality of the application then the status assigned to a bug is "Not a Bug".
        • <i>Fixed:</i> When a developer makes a necessary code change and verifies the change, he or she can make bug status as "Fixed."
        • <i>Retested:</i> Tester does the retesting of the code at this stage to check whether the defect is fixed by the developer or not and changes the status to "Re-test."
        • <i>Reopen:</i> If the bug persists even after the developer has fixed the bug, the tester changes the status to "reopened". Once again, the bug goes through the life cycle.
        • <i>Validate:</i> The tester re-tests the bug after it got fixed by the developer. If there is no bug detected in the software, then the bug is fixed, and the status assigned is "verified."
        • <i>Closed:</i> If the bug no longer exists then the tester assigns the status "Closed."
        `,
    "What is the list of Items Included in an Ideal Bug Report?": `
            • Summary
            • Environment
            • Steps to reproduce
            • Expected Result
            • Actual Result
            • Visual Proof (screenshots, videos, text)
            • Severity/Priority
        `,
    "What is the severity?": `
        • Impact of bug on the customer business workflow.
        `,
    "What are the severity levels?": `
        <b>Severity Levels</b>
        <i>• Blocker:</i>
            • This problem will block the progress
            • Ex: Customer is not able to log in with valid credentials.
            • Server is down
            • The next page is blank

        <i>• Critical:</i>
            • A serious problem that could block progress. I am not blocked but the main functionality of the application is not working.
            • Ex: When transferring money from one account to another, the amount is not correct on the recipient's side.

        <i>• Major</i>
            • The impact of the bug cannot be identified for the customer's business
            • Ex. Not receiving the confirmation email or message.

        <i>• Minor</i>
            • Trivial problem with little or no impact on progress.
            • Ex1: Look and feel of an application could be different from browser to browser.
            • Ex2: Alignment issue on the username and password.
        `,
    "What is Priority?": `
            • How soon do you want your developer to fix that bug
            • The importance is given to the bug to fix it
        `,
    "What is the Definition of Ready (DoR)?": `
        • Simply stated, the Definition of Ready defines the criteria that a specific user story has to meet before being considered for estimation or inclusion in a sprint.
            • A “ready” backlog item needs to be clear, feasible, and testable.
            • A user story is clear if all Scrum team members have a shared understanding of what it means. Collaboratively writing user stories and adding acceptance criteria to the high-priority ones facilitates clarity.
            • An item is testable if there is an effective way to determine if the functionality works as expected. Acceptance criteria ensure that each story can be tested
            • A user story is feasible if it can be completed in one sprint, according to the Definition of Done. If this is not achievable, it needs to be broken down further
        `,
    "What is the Definition of Done (DoD)?": `
            • The Definition of Done is an agreement between Development Team and the Product Owner on what needs to be completed for each user story, and it is often standardized across the company in order to guarantee consistent delivery of quality.
        `,
    "What is Software Testing? What is the goal?": `
        • Software Testing is a method to check whether the actual software product matches expected requirements and ensure that the software product is DEFECT free.
        • It is a process that verifies and validates the software product.
        • It checks if the product meets business and technical requirements.

        <i>Verification</i>
        • Verification is a static analysis technique. Here, testing is done without executing the code. Examples include - reviews, inspections, and walk-throughs.

        <i>Validation</i>
        • Validation is a dynamic analysis process where we perform testing by executing the code. Examples include functional and non-functional testing techniques.
        `,
    "What are the benefits of Software Testing?": `
        <i>• Cost-Effective:</i> It is one of the essential advantages of software testing. Testing any IT project on time helps you to save your money for the long term. In case if the bugs caught in the earlier stage of software testing, it costs less to fix.
        <i>• Security:</i> It is the most vulnerable and sensitive benefit of software testing. People are looking for trusted products. It helps in removing risks and problems earlier.
        <i>• Product quality:</i> It is an essential requirement of any software product. Testing ensures a quality product is delivered to customers.
        <i>• Customer Satisfaction:</i> The main aim of any product is to give satisfaction to their customers. UI/UX Testing ensures the best user experience.
        `,
    "What are the differences between manual and automation testing?": `
        <i>• Manual Testing:</i> Manual testing is a testing technique where the test engineer executes the test cases manually to identify the defect in the software.
        <i>• Automation Testing:</i> A testing technique where the test engineer develops test scripts to execute the test cases with the automation.
        `,
    "What are the advantages of automation testing over manual testing?": `
        <b>Disadvantages of Manual Testing:</b>
            • Time consuming and tedious: Since test cases are executed by human resources so it is very slow and tedious.
            • Huge investment in human resources: As test cases need to be executed manually so more testers are required in manual testing.
            • Less reliable: Manual testing is less reliable as tests may not be performed with precision each time because of human errors.
        <b>Advantages of the Automation Testing:</b>
            <i>• Fast:</i> It is faster than manual testing.
            <i>• Cost-Effective:</i>: Test cases are executed by using automation tools so fewer testers are required in automation testing.
            <i>• Repeatable:</i> The same test case (record and replay) can be re-executed using testing tools.
            <i>• Reusable:</i> Test suits can be re-used on different versions of the software.
            <i>• Programmable:</i> Testers can manage test execution times with different tools.
            <i>• Comprehensive:</i> Testers can build test suites of tests that cover every feature in the software application.
            <i>• More reliable:</i> Automation tests perform precisely the same operation each time they are run.
            <i>• Test Coverage:</i> Wider test coverage of application features.
        `,
    "What is Unit Testing?": `
            • Unit testing is a way of testing the smallest piece of code. Unit test is done by the Developer.`,
    "Benefits of Unit Testing?": `
            • Makes coding Agile
            • Helps finding Software Bug Early
            • Provides documentation
            • Make debugging easier
            • Reduce the testing cost
        `,
    "What is Integration Testing?": `
            • Integration Testing is a level of software testing where individual units are combined and tested to verify if they are working as they intended to when integrated. The main aim here is to test the interface between the modules.
        `,
    "What is Smoke Testing?": `
            • It is a type of test that makes sure that the critical functionalities of the program are working fine.
        `,
    "When do you do Smoke Testing?": `
            • whenever the new functionalities of the software are developed and integrated with an existing build
            • ensures that all critical functionalities are working correctly or not
            • Whenever there is a new build, the QA team determines the major functionality in the application to perform smoke testing
        `,
    "What is Sanity Testing?": `
            • Sanity testing checks the basic functionality of a software application after making a small change or fixing a bug. It doesn’t require documentation and is used to verify that the changes have not caused unintended consequences or broken any existing functionality.
        `,
    "The difference between Smoke and Sanity Testing?": `
        <b>• Smoke testing:</b>
            • Smoke Testing is performed to ascertain that the critical functionalities of the program is working fine
            • The objective of this testing is to verify the "stability" of the system in order to proceed with more rigorous testing This testing is performed by the developers or
            • testers Smoke testing is usually documented orscripted
            • Smoke testing is a subset of Regression testing Smoke testing exercises the entire system fromend to end
            • Smoke testing is like General Health Check Up

        <b>• Sanity testing:</b>
            • Sanity Testing is done to check the new functionality / bugs have been fixed
            • The objective of the testing is to verify the "rationality. of the system in order to proceed with more rigorous testing
            • Sanity testing is usually performed by testers Sanity testing is usually not documented and is unscripted
            • Sanity testing is a subset of Acceptance testing Sanity testing exercises only the particular
            • component of the entire system Sanity Testing is like specialized health check up
        `,
    "What is Regression Testing?": `
            • Regression testing is a type of testing that is done to verify that a change or modification to a software application has not adversely affected its existing functionality. 
            • When adding a new payment type to a shopping website, re-run old tests to ensure that the new code hasn't created new defects or re-introduced old ones.
        `,
    "When to apply Regression Testing?": `
            • At the end of each sprint cycle
            • Before a release
            • Whenever a codebase has been modified or altered in any way
        `,
    "What is System Testing?": `
            • Post Integration and After Acceptance testing
            • Testing joined components as one system
            • Detects the defects within the inter-components
            • Functional and non-functional testing
            • Non-functional tests are performed to ensure if the developed product meets the business expectation.
                • Response time of an application
                • Performance
                • Security
                • Load capability
        `,
    "What is Interface Testing?": `
            • Verifies whether the communication between two different software systems is done correctly
            • A connection that integrates two components is called interface. This interface in a computer world could be anything like API's, web services, etc. Testing of these connecting services or interface is referred to as Interface Testing.

        `,
    "How to do Interface Testing?": `
        <i>Interface Testing includes testing of two main segments:</i>
            • Web server and application server interface
            • Application server and Database server interface.
        • For the above-mentioned scenarios, the interface testing is done to
            • Check whether servers are executed properly or not
            • Errors are handled properly or return an error message for any query made by an application
            • Check the outcomes when the connection to a web server is reset in between
        `,
    "What is End-to-End (E2E) Testing?": `
            • Performed after the System Testing
            • Customer experiences for the whole flow
            <b>Example:</b>
                • Opening the app on user mobile ->finding a cab for entered destination ->Tracking the cab before or during the ride-> completing the ride and paying using one of the payment options -> finally credit settling into the driver's account.
                • validate the requirements from an end-user perspective.
        `,
    "Difference between System Testing and End-to-End Testing?": `
            <i>System Testing</i>
            • Developed product is tested against the product specific technical requirements identified based on business requirements.
            • Covers functional as well as non-functional aspects of testing.
            • Carried out towards end of software development life cycle.
            • All implemented features for the product would be scrutinized to uncover unexpected results.
            • Tester should have strong understanding of functionality of developed product.
            • System test engineer does not need to know the product development life cycle.

            <i>End-to-End Testing</i>
            • Developed product is tested along with dependent systems as per business requirements.
            • Covers interface-levels of testing considering all source and destination systems.
            • Performed once product qualifies integration testing.
            • Process flows will be checked along with front end & backend & middle-tier systems.
            • Tester should have strong understanding of data flows and workflows within the system.
            • End-to-End test engineer needs to understand all stages.
        `,
    "What is Acceptance Testing?": `
            • The purpose of this test is to evaluate the system's compliance with the business requirements and calculate whether it is acceptable at the user end.
        <b>• Example: </b>
        Consider the manufacturing of a chair. Wood, steel, plastic, paints, are the items needed for its manufacture. These units are separately produced, and unit tested. After that, these units are combined together, and integration testing is performed. After the integration process, system testing is performed. System testing is followed by acceptance testing where the final product is matched with the requirements of the end-users.
        `,
    "What is User Acceptance Testing?": `
            • User acceptance testing is used to determine whether the product is working as per the requirements of the user correctly.
            • Requirements as per the customers are picked up specifically for this purpose. This is also called as End-User Testing.
        `,
    "What is Alpha Testing?": `
            • Alpha Testing is a type of acceptance testing.
            • Performed to identify all possible issues and bugs before releasing the final product to the end users.
            • Alpha testing is carried out by the testers who are internal employees of the organization.
            • The main goal is to identify the tasks that a typical user might perform and test them.
            • To put it as simple as possible, this kind of testing is called alpha only because it is done early on, near the end of the development of the software, and before beta testing.
        `,
    "What is Beta Testing?": `
            • Beta Testing is performed by "real users" of the software application in "real environment" and it can be considered as a form of external User Acceptance Testing.
            • It is the final test before shipping a product to the customers. Direct feedback from customers is a major advantage of Beta Testing.
            • This testing helps to test products in customer's environment.
        `,
    "What is Black Box Testing?": `
            • https://www.guru99.com/black-box-testing.html
            • Black Box Testing is a software testing method in which the functionalities of software applications are tested without having knowledge of internal code structure, implementation details, and internal paths. Black Box Testing mainly focuses on the input and output of software applications, and it is entirely based on software requirements and specifications. It is also known as Behavioral Testing.
        `,
    "What is White Box Testing?": `
            • https://www.guru99.com/white-box-testing.html
            • internal structure, design, and coding of software are tested to verify the flow of input-output and to improve design, usability, and security.
            • Code is visible to testers, so it is also called Clear box testing, Open box testing, transparent box testing, Code-based testing, and Glass box testing.
            • Its counterpart, Blackbox testing, involves testing from an external or end-user type perspective. On the other hand, White box testing in software engineering is based on the inner workings of an application and revolves around internal testing.
        `,
    "What is Non-Functional Testing?": `
            • used to check the non-functional aspects like performance, usability, reliability, etc., of a software application which are not tested using functional testing.
            • Non-functional testing helps in testing the readiness of a system.
            • It defines the way a system operates rather than specific behaviors of that system. This is totally in contrast to functional testing, which tests against functional requirements that describe the functions of a system.
            • Non-functional testing is done to check and evaluate all the non-functional parameters which are not covered under functional testing.
            • Non-functional Testing is equally important as Functional testing.
            • All the non-functional parameters such as speed, scalability, security, reliability, and efficiency of an application are tested under the non-functional testing.
            • It makes an application robust and prepares it against certain vulnerabilities.
        `,
    "What is Documentation Testing?": `
            • It helps to estimate the required testing efforts and track the requirements. Software documentation includes a test plan, test cases, and requirements section. It tests the documented artifacts. .
        `,
    "What is Installation Testing?": `
            • It is a type of quality assurance work in the software industry that converges on what customers will need to do to install and set up the new software successfully. It checks if the software application is successfully installed and is working as expected. The testing process may involve full, partial or upgrades install/uninstall processes.
        `,
    "What is Performance Testing?": `
            • It is defined as a type of software testing that is used to ensure that the software applications will perform well under their expected workload. Performance testing is considered the heart of Non-functional testing. It is further divided into a few types.
        `,
    "Types of Performance testing?": `
        <b>Load Testing</b>
            • Load Testing is a type of performance testing conducted to evaluate the behavior of a system at an increasing workload.

        <b>Stress Testing</b>
            • Stress Testing is a type of performance testing conducted to evaluate the behavior of a system at or beyond the limits of its anticipated workload.

        <b>Endurance Testing</b>
            • Endurance Testing is a type of performance testing conducted to evaluate the behavior of a system when a significant workload is given continuously.

        <b>Spike Testing</b>
            • Spike Testing is a type of performance testing conducted to evaluate the behavior of a system when the load is suddenly and substantially increased.
        `,
    "What is Reliability Testing?": `
            • It assures that the product is fault-free and is reliable for its intended purpose. It is about exercising an application so that the failures are discovered before the system is deployed.
        `,
    "What is Security Testing?": `
            • It is a variant of software testing which ensures that the system and applications of the organization are free from loopholes. Security testing is about finding all possible weaknesses of the system which might result in a loss of information.
        `,
    "What is Software Testing?": `
            • It is a process of evaluating the functionality of a software application to find any software bugs.
            • It checks whether the developed software met the specified requirements and identifies any defect in the software to produce a quality product.
            • Meets the business and technical requirements that guided its design and development
            • Works as per the requirement
        `,
    "Why is Testing important?": `
            • If there are any bugs or errors in the software, they can be identified early and can be solved before the delivery of the software product.
            • Tested software product ensures reliability, security, and high performance which further results in time-saving, cost-effectiveness, and customer satisfaction
            • Software bugs could be expensive or even dangerous.
            • Software bugs can potentially cause monetary and human loss, and history is full of such examples
            `,
};
