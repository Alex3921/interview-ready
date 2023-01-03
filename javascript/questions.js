//-------------------------------------Java questions-------------------------------------//
const questions_java = [
    "What is JDK, JRE, JVM and JIT (basically talk about the Java architecture)?",
    "Why java is platform-independent?",
    "What is source code, byte code and binary code and what are their relation in Java?",
    "What is java and javac and how they work with each other?",
    "Explain main() method in java?",
    "What kind of data types we have in Java?",
    "Explain primitive data types in Java?",
    "What is variable declaration and assignment in Java?",
    "What are identifiers in Java?",
    "What is String in Java?",
    "What is String concatenation in Java and how can we concatenate Strings?",
    "What is method chaining?",
    "What are different types of operators in Java?",
    "What are if-else statements in Java and what they are used for?",
    "What is ternary operator in Java?",
    "What is switch statement in Java?",
    "What is break statement in Java?",
    "What is type casting in Java?",
    "What are autoboxing and unboxing in Java?",
    "What are wrapper classes in Java?",
    "What is the purpose of having wrapper classes in Java?",
    "What are different loops in Java and the reasons to use loops?",
    "What is Array and ArrayList and their differences in Java?",
    "What are differences between ArrayList and LinkedList?",
    "What is Class and Object in Java?",
    "What are the class members in Java?",
    "What is local variable and instance variable and their differences?",
    "What does null keyword mean in Java?",
    "What are the advantages of using methods in Java?",
    "What is method overloading?",
    "What is method overriding?",
    "What is the difference between method overloading and overriding?",
    "What is this and this() in Java?",
    "What is super and super() in Java?",
    "What is constructor chaining?",
    "What are the differences between constructors and methods?",
    "What is mutable/immutable in Java?",
    "What is StringBuilder and StringBuffer and their differences?",
    "What is Stack and Heap in Java?",
    "What is Garbage Collection?",
    "What does System.gc() or Runtime.getRunTime().gc() methods do in Java?",
    "What is finalize() method and what it is used for?",
    "What are access modifiers in Java?",
    "What is final keyword in Java and where to use it?",
    "What is static keyword in Java and where to use it?",
    "What are Object-Oriented Programming Principles?",
    "What is encapsulation? Why we need it? How we achieve it?",
    "What is inheritance? Why we need it? How it can be achieved? What are some rules for inheritance?",
    "What is abstraction? How it can be achieved? Talk about Abstract and Interface classes?",
    "WHY WE NEED ABSTRACTION - ABSTRACT CLASSES AND INTERFACES?",
    "What is polymorphism? When we need polymorphism?",
    "What are the similarities and differences between Abstract classes and Interfaces?",
    "What is Dynamic Polymorphism vs Static Polymorphism in Java?",
    "What is IS-A and HAS-A relationship in Java?",
    "What is Java Collections framework?",
    "What is List in Java?",
    "What is Set in Java?",
    "What is Map in Java?",
    "What is Iterator in Java?",
    "What are the differences between List, Set and Map?",
    "When to use List, Set and Map in Java?",
    "What are the similarities and differences between HashMap and HashTable?",
    "What does thread-safe mean in Java?",
    "What are errors and exceptions in Java?",
    "What is throwing exception in Java?",
    "What are checked and unchecked exceptions in Java?",
    "How to handle exceptions in Java?",
    "What is finally block and its relationship with try-catch blocks?",
    "What are final, finalize, finally keywords in Java and their differences?",
    "What are throw and throws keywords in Java and their differences?",
    "What are the restrictions of Arrays?",
    "How to convert String to an int?",
    "How to convert primitive int to a String?",
    "What is the difference between = and == operators?",
    "What is the difference between == operator and equals() method?",
    "How can we use primitive data types as objects?",
    "Is it possible to override and overload main, private, final, static or abstract methods?",
    "Can we have abstract class without having any abstract method in it?",
    "Can we have two methods in a class with the same name?",
    "Is it possible to have static methods in an Interface?",
    "Can we declare the main() method as private?",
    "How we can execute any code even before main() method?",
    "Can main() method return any data in Java?",
    "Is it possible to make constructor final?",
    "How objects of a class are created if no constructor is defined in the class?",
    "Is it possible to call a constructor from another constructor's body?",
    "Can we use a default constructor of a class even if a custom constructor is created?",
    "Is it possible to create an object of any Interface?",
    "Can one interface implement another interface in java?",
    "Can a class be a super class and a sub-class at the same time?",
    "Can a class in Java be inherited from more than one class?",
    "How can we restrict inheritance for a class so that no class can extend to it?",
    "What is the base class for all the classes in Java?",
    "Can you list down some of important method from object class?",
    "What are the types of comments in Java?",
    "Why String is immutable?",
    "What are two different ways to call garbage collector explicitly?",
    "Can we have try block without catch block in Java?",
    "How can you generate random numbers in Java?",
    "What are Java packages? What's the significance of packages?",
    "What is the purpose of using break in each case of switch statement?",
    "Can a variable be local and static at the same time?",
    "Is Java 100% Object-Oriented Programming Language?",
    "What is Enum in Java?",
    "What is multi-threading in Java?",
];

//-------------------------------------Soft skills questions-------------------------------------//
const questions_soft_skills = [
    "What is SDLC?",
    "Why do we need SDLC?",
    "What are the SDLC phases? Can you briefly explain them?",
    "What are the roles and responsibilities in SDLC?",
    "What is Waterfall Model?",
    "What is the Agile Model?",
    "What are the values of Agile? (Agile Manifesto)?",
    "What are the differences between Agile and Waterfall?",
    "What is SCRUM?",
    "Who are the Scrum Team Members?",
    "What is a user story? What are some components of a user story? Who writes the user story?",
    "What is the acceptance criteria? How should it be defined? Who writes acceptance criteria?",
    "What is Sprint?",
    "What is a Product Backlog?",
    "What is the Sprint Backlog?",
    "What are the Scrum Ceremonies?",
    "What is the Backlog Grooming Meeting (Product Backlog Refinement)?",
    "What is the Sprint Planning Meeting?",
    "What is the Daily Scrum Meeting?",
    "What is the Sprint Review/Demo Meeting?",
    "What is the Sprint Retrospective (Retro) Meeting?",
    "What are the SCRUM Artefacts?",
    "What are the Scrum Values?",
    "What is the Parking Lot Meeting?",
    "Do all team members attend the Parking Lot meeting?",
    "What is the Three Amigos Meeting?",
    "What is Burndown Chart?",
    "What are the test scenario, test case, and test script, and what are their differences?",
    "How do you write a test case? What should you consider while writing test cases?",
    "What are the benefits of writing Test Cases?",
    "What are positive and negative test cases?",
    "What is happy path testing?",
    "What are boundary-edge cases?",
    "What are the most important skills a Tester must have to perform their job well?",
    "What is SAFe?",
    "What are the disadvantages of Scaling Agile?",
    "What are the differences between Scrum and SAFe?",
    "What is ART?",
    "What are the ART roles?",
    "What is PI Planning?",
    "Can you tell me how your company performs the PI Planning?",
    "What is SMART? Can you explain what each letter means?",
    "Can you explain the bug life cycle?",
    "What is the list of Items Included in an Ideal Bug Report?",
    "What is the severity?",
    "What are the severity levels?",
    "What is Priority?",
    "What is the Definition of Ready (DoR)?",
    "What is the Definition of Done (DoD)?",
    "What is Software Testing? What is the goal?",
    "What are the benefits of Software Testing?",
    "What are the differences between manual and automation testing?",
    "What are the advantages of automation testing over manual testing?",
    "What is Unit Testing?",
    "Benefits of Unit Testing?",
    "What is Integration Testing?",
    "What is Smoke Testing?",
    "When do you do Smoke Testing?",
    "What is Sanity Testing?",
    "The difference between Smoke and Sanity Testing?",
    "What is Regression Testing?",
    "When to apply Regression Testing?",
    "What is System Testing?",
    "What is Interface Testing?",
    "How to do Interface Testing?",
    "What is End-to-End (E2E) Testing?",
    "Difference between System Testing and End-to-End Testing?",
    "What is Acceptance Testing?",
    "What is User Acceptance Testing?",
    "What is Alpha Testing?",
    "What is Beta Testing?",
    "What is Black Box Testing?",
    "What is White Box Testing?",
    "What is Non-Functional Testing?",
    "What is Documentation Testing?",
    "What is Installation Testing?",
    "What is Performance Testing?",
    "Types of Performance testing?",
    "What is Reliability Testing?",
    "What is Security Testing?",
    "What is Software Testing?",
    "Why is Testing important?",
];
