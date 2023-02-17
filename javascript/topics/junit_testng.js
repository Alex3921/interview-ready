import DataHandler from "../utilities/data_handler.js";

export default class JUnitTestNG extends DataHandler {
    constructor() {
        super();
    }

    questions = new Map([
        [1, "What is Junit?"],
        [2, "What are some Junit annotations mostly used?"],
        [3, "What is TestNG and how is it better than JUnit?"],
        [4, "What are the categories of Assertions?"],
        [5, "What are different types of Assertions in JUnit and TestNG?"],
        [6, "How do you decide to use or when to use Soft and Hard Assertions?"],
        [7, "How do you use Soft Assertions?"],
        [8, "What is parameterization in testing and how do you achieve it?"],
        [9, "How to ignore some test scripts using JUnit or TestNG?"],
        [10, "How to set test script priority in TestNG?"],
        [11, "How to set dependency between tests in TestNG?"],
        [11, "What are JUnit and TestNG, how we use them in our testing frameworks and why?"]
        ]);

        answers = new Map([
            ["What are JUnit and TestNG, how we use them in our testing frameworks and why?", `
    <b>JUnit and TestNG:</b>
        • JUnit and TestNG are used for Unit Testing by developers and automation testers. 
        • They are integrated into automation frameworks to benefit from their annotations and assertions. 
        • JUnit provides hard assertions while TestNG provides soft and hard assertions. 
        • Both tools are integrated with Selenium to generate reports. 
        
        <b>Advantages:</b>
        o Annotations for the test flow control
        o Assertions for the verifications
        o Reports
        
        <b>Note:</b> TestNG has more advantages over JUnit and some other Unit Testing tools used are NUnit, XUnit etc.
    `],
    
    ["What is Junit?", `
    <b>JUnit:</b>
        • JUnit is a unit testing framework introduced by Apache and based on Java.
        • It is important in Test-Driven Development (TDD) and a family of unit testing frameworks.
        • JUnit is commonly used by developers for Unit Testing and by testers for annotations, assertions and reporting purposes.
    `],
    
    ["What are some Junit annotations mostly used?",`
    <b>JUnit annotations:</b>
        <b>1. @Test:</b>
            o Identifies the method as a test method.
        
        <b>2. @Before:</b>
            o Runs a method before each test method.
            o Useful for running tasks before each test.
        
        <b>3. @After:</b>
            o Runs a method after each test method.
            o Useful for running tasks after each test.
        
        <b>4. @BeforeClass:</b>
            o Runs a method before all tests in a class only once.
            o Usually used to create conditions for tests (e.g. setting up driver, creating driver instance, maximizing windows).
        
        <b>5. @AfterClass:</b>
            o Runs a method after all tests in a class only once.
            o Usually used for tear down conditions (e.g. quitting driver session).
        
        <b>6. @Ignore:</b>
            o Skips a test method. The test method annotated with @Ignore will not be executed.
    `],
    
    ["What is TestNG and how is it better than JUnit?", `
    <b>TestNG:</b>
        • TestNG is an open-source testing framework widely used in automation testing suite.
        • TestNG is designed to leverage benefits for both developers and testers.
        
        <b>Advantages over JUnit:</b>
        o More annotations for a better structure of tests.
        o Soft and hard assertions.
        o Easier parallel testing (concurrent execution).
        o Ability to set priority for tests.
                
            Syntax: @Test (priority = 1)
                § priority keyword allows tester to set certain running order for the test suite
                § The lower the number the earlier the test will run
                § Tester can also pass numbers that is under zero (-1, -2)
                § if you have same priority for more than one test, than for these particular tests will run in
                alphabetical order
            
            o TestNG enables testers to set dependencies between tests 
            
            Syntax: @Test (dependsOnMethods = “methodName”)
                § This can be useful if tester runs one test only if another test is passing. So, the test will have a dependency on another test being executed successfully
                § In this way, if the dependent test is failed, the other test will be ignored
                NOTE: If you have both priority and dependency setup for the same test, dependencies will override the priority.
                Syntax: @Test (priority = 1, dependsOnMethods = "methodName")
                `],
            
                ["What are the categories of Assertions?", `
            • In overall, there are 2 types of assertions:
                o Hard assertions (TestNG and JUnit)
                o Soft assertions (TestNG only)
    
            • You can clearly see above that JUnit provides only hard assertions while TestNG provides hard and soft assertions. This can be considered as another advantage of TestNG over JUnit
            
            • Hard assert throws an AssertException immediately when an assert statement fails, and test suite continues with next @Test.
                o If an assert step fails, execution of tests stops at that point and it will continue to the next test if present.
            
            • Soft assert collects errors during @Test.
                o Soft Assert does not throw an exception when an assert fails, it will report the failure and continue with the next step after the assert statement.
                `],
            
                ["What are different types of Assertions in JUnit and TestNG?",  `
            • Assertions are used to perform various kinds of validations in the test cases and they help us to decide whether the test script has passed or failed
            • We consider a test script as successful if it runs without any exception
            • Both JUnit and TestNG are used for Unit Testing purposes but testers are also using them very commonly as one of the advantages of these is to provide assertions
            
            • Some of the most common assertions that testers use from TestNG and JUnit:
                o Assert.assertEquals()
                o Assert.assertTrue()
                o Assert.assertFalse()
                o Assert.assertNull()
                o Assert.assertNotNull()
                o Assert.fail()
            EXAMPLES:
            1. Assert.assertEquals()
                • assertEquals() method compares the expected result with the actual result
                • It throws an AssertionError if the expected result does not match with the actual result and terminates the program
            
                String expectedURL = “https://www.google.com”; 
                String actualURL= “https://www.google.com”;
                
                Assert.assertEquals(expectedURL, actualURL); // This test will PASS as actual and expected URL are equal
            
            2. Assert.assertTrue()
                • assertTrue() method asserts that a specified condition is true
                • It throws an AssertionError if the condition passed to the assertTrue() method is not satisfied 
                
                Assert.assertTrue(2 == 3); // This test will FAIL as the condition is false
                `],
            
                ["How do you decide to use or when to use Soft and Hard Assertions?", `
            • If you need to execute all the steps of a test script to be executed even after an assertion fails, and you also want to report assertion exception, then use Soft Assertions as using Soft Assertions in your test scripts is a good practice and an effective way of handling your test execution
            • Real example for soft assert: Imagine you assert color of a button and then you click on it. Probably, you will not want to fail this scenario just because of color but you still want to add this color failure to the report
            • If you want your test script execution to proceed only after an assertion is passed or throw an exception if failed, then use Hard Assertions
            • Real example for hard assert: Imagine you need to login first to make a purchase on the application you are testing and requirement states that unauthenticated user should not be allowed to make purchase. In this case, you need to assert valid login and only after valid login other steps must run. If login fails, it should throw an exception immediately. So, use hard assertions for such case
            `],
            
            ["How do you use Soft Assertions?", `
            • SoftAssert is a class that is coming from TestNG libraries
            • Unlike hard assertions, soft assertions will not stop the execution if the assertion fails and it will continue until the end of the test
            • Soft assertions will store all the failures until the end of test, and will show the results at the end of the test
            • SoftAssert class methods are not static, therefore we need to create an instance of the class to use the methods
            
                Syntax:
                SoftAssert softAssert = new SoftAssert(); 
                softAssert.assertTrue(false); 
                softAssert.assertEquals(“a”, “b”); 
                softAssert.assertAll();
    
                NOTE: If we do not use the assertAll() method at the end, assertions results will not be added to the report
                `],
            
            ["What is parameterization in testing and how do you achieve it?", `
            • Parameterization in testing allows testers to run the same test script over and over again using different test data
            • Cucumber scenario outline can be considered as a good example for parameterized tests as you can run that scenario with different inputs
            • JUnit has @RunWith and @Parameter annotations to provide achieve parameterized tests
            • In TestNG, XML file or @DataProvider annotation is used to provide parameterized tests
            `],
            
            ["How to ignore some test scripts using JUnit or TestNG?", `
            • In some cases, we might need to skip some test scripts in the suites that we are running. The reason for that can be you already know that there is bug, and the script will already fail, or you are waiting for a deployment from developer etc.
            • For such cases, both JUnit and TestNG allows us to skip these certain test scripts
            
            • JUnit way to skip some test scripts - using @Ignore annotation
                @Ignore @Test
                public void test1() {
                System.out.println("This test execution will be ignored");
                }
    
            • TestNG way to skip some test scripts - using enabled = false
                @Test(enabled=false) public void test1() {
                System.out.println("This test execution will be ignored ");
                }
            `],
            
            ["How to set test script priority in TestNG?", `
            REMEMBER: One of the advantages of TestNG over JUnit is being able to set certain running order for test scripts in a suite. This can be achieved with priority keyword. 
            SYNTAX:
                public class TestPriority{
                    @Test (priority = 0) public void method1() {
                    System.out.println(“This is method1 running”);
                    }
    
                    @Test (priority = 2) public void method2() {
                    System.out.println(“This is method2 running”);
                    }
    
                    @Test (priority = 1) public void method3() {
                    System.out.println(“This is method3 running”);
                    }
                }
    
            TEST RESULT FOR CLASS ABOVE:
                This is method1 running
                This is method3 running
                This is method2 running
            `],
            
            ["How to set dependency between tests in TestNG?", `
            REMEMBER: One of the advantages of TestNG over JUnit is being able to set dependencies between test scripts in a suite. This can be achieved with dependsOnMethod keyword. 
            SYNTAX:
                public class TestDependency{
                    @Test (priority = 1, dependsOnMethod = “login”) public void validateHomePage() {
                    System.out.println(“This is validateHomePage running”);
                    }
    
                    @Test (priority = 2) public void login() {
                    System.out.println(“This is login running”);
                    }
                }
    
            TEST RESULT FOR CLASS ABOVE:
            This is login running
            This is validateHomePage running
    
            NOTE: You can clearly see above that login has priority of 2 while validateHomePage has priority of 1. Normally, validateHomePage would run before login as its priority is 1 but here dependsOnMethod overrides priority and since validateHomePage depends on login, login will run first.
            `]
            ]);
}

/*

*/