import DataHandler from "../utilities/data_handler.js"

export default class Scenario extends DataHandler {
    constructor() {
        super();
    }

    questions = new Map([
        [1, "Assume that you get a NoSuchElementException. What would you do to troubleshoot the issue?"],
        [2, "Assume that you get a ElementClickInterceptedException. What would you do? How would you troubleshoot the issue?"],
        [3, "Assume that you navigated to a page and loads a pop-up. However, this happens sometimes and most of the times, the pop-up does not show. How would you handle this situation?"],
        [4, "Assume that you will need to run your test suites like Smoke and Regression against different browsers like Chrome, Firefox, Edge and more. How would you handle this situation?"],
        [5, "What is an interesting bug you found lately?"],
        [6, "What do you include in your bug ticket?"],
        [7, "How do you handle conflicts?"],
        [8, "Why did you apply for our company?"],
        [9, "Where do you see yourself in 5 years/future?"],
        [10, "When do you think testing should start in SDLC? (Which phase and why? What can you test in each phase of SDLC?)"],
        [11, "How do you decide if a test case should be manual or automated?"],
        [12, "How do you decide if you have enough test coverage for requirements (Acceptance Criteria)?"],
        [13, "What do you do when the requirements are not clear?"],
        [14, "What are some daily challenges you face in your current job?"],
        [15, "What do you do in a regular sprint?"],
        [16, "What are your roles and responsibilities in the company/team?"],
        [17, "Tell me about a regular day of your work, what do you do?"],
        [18, "What is the interesting bug you found lately?"],
        [19, "What questions do you have for me?"],
        [20, "Can you tell me about your project."],
        [21, "Can you tell me about your Smoke and Regression Suites? How many tests? How long they run?"],
        [22, "How do you decide if a test case is a Smoke or Regression test case?"],
        [23, "How do you read test data in your framework?"],
        [24, "How much time do you spend on testing within the Sprint?"],
        [25, "How do you manage different sets of test data for different environments?"],
        [26, "Can you tell me a tough automation problem you faced in the past and how you solved it?"],
        [27, "Which side of the automation do you feel comfortable UI or API?"],
        [28, "How did you maintain your test scripts?"],
        [29, "Tell me about yourself."],
        [30, "Tell me about your framework."]
    ])

    answers = new Map([
        ["Assume that you get a NoSuchElementException. What would you do to troubleshoot the issue?", `
        • This is a common issue that Automation Testers face especially when application is under development and not live yet
        • <b>NoSuchElementException</b> occurs when WebDriver is unable to find and locate an element
        
        • For such questions, try to list as many scenarios as you can come up with.
            1. Check your element locator and make sure it is correct. The locator might be changed with new developer code deployment. You may also realize, web element that throws NoSuchElementException is a dynamic element. In this case, you need to update your locator and make it stable
            
            2. Make sure that page is loading as expected
            
            3. If you are sure that your locator is correct and stable, then try to implement some waits as there might be some synchronization issues and your code is trying to take some actions on the web element before it is loaded
            
            4. If you implemented waits but still getting the exception, then check if element is not in an iframe. If so, then switch the frame before taking action on the web element and execute your test once again to see if it works
            
            5. Element might not be actually visible in screen and you may need to scroll down or scroll up to that element before actual action
            
            <i>NOTE:</i> In some cases, web element might not be existing and removed from the page. Check your requirements carefully and ask your PO, BA or developers to be clear about the issue.
        `],
        
        ["Assume that you get a ElementClickInterceptedException. What would you do? How would you troubleshoot the issue?", `
            • This is also a common exception that Automation Testers get during scripting
            • <b>ElementClickInterceptedException</b> occurs when the element receiving the actions is concealing the element which was requested to be clicked
            • Basically, imagine that you are trying to click on a web element, but another web element receives the click as your element is behind that second element
            
            • In this case, you can try below solutions
                o First, you may try to implement explicit wait for the action that you would like to perform on the web element and check if it works.
                o If explicit wait does not work, then you can use JavaScript Executor to perform the action.
        `],
        
        ["Assume that you navigated to a page and loads a pop-up. However, this happens sometimes and most of the times, the pop-up does not show. How would you handle this situation?", `
            • Some pages show a pop-up, but this is not constant, and pop-up needs to be handled before you continue with any other actions on the page
            • If you assume that it will always show and handle the pop-up, your code will throw an exception when pop-up does not show
            • So, the best practice to write your code in a try block and handle the pop-up only if it is present
        `],
        
        ["Assume that you will need to run your test suites like Smoke and Regression against different browsers like Chrome, Firefox, Edge and more. How would you handle this situation?", `
            • This is directly related to cross-browser testing and it is usually handled with your config file where all your global configurations are stored and controlled
            • So, you may tell I set my driver with a method before the execution starts and this method gets all required capabilities from my config file and able to set driver to be Chrome, Firefox, Edge, Safari, etc.
            • With that, it sets up the desired browser, environment and some other capabilities for the test execution
        `],

        ["What is an interesting bug you found lately?", `
            <b>What is the interviewer looking for:</b>
            The interviewer is likely looking to gain insight into your problem-solving skills, as well as your ability to think creatively and outside the box when it comes to troubleshooting issues.
            
            <b>How should you structure the answer:</b>
            When answering this question, it's important to provide a clear and concise description of the bug you found, as well as the steps you took to identify and resolve it. It's also a good idea to highlight any particularly creative or innovative solutions you came up with to address the issue.
        `],

        ["What do you include in your bug ticket?", `
            <b>What is the interviewer looking for:</b>
            The interviewer is interested in understanding your attention to detail, your understanding of the bug-tracking process, and your ability to communicate technical issues effectively.
            
            <b>How should you structure the answer:</b>
            Start by explaining the importance of bug tracking and the role of bug tickets. Then, describe the key components of a bug ticket, including the title, description, steps to reproduce the issue, and any relevant attachments or screenshots. Finally, discuss how you ensure that your bug tickets are clear, concise, and actionable.
        `],

        ["How do you handle conflicts?", `
            <b>What is the interviewer looking for:</b>
            The interviewer is interested in understanding your conflict resolution skills, how you deal with difficult situations, and your ability to maintain positive relationships with your colleagues.
        
            <b>How should you structure the answer:</b>
            Start by explaining your approach to conflict resolution, highlighting your communication and problem-solving skills. Then, provide an example of a conflict you faced, including the steps you took to resolve it and the situation's outcome. Finally, discuss what you learned from the experience and how you have applied it to future situations.
        `],

        ["Why did you apply for our company?", `
            <b>What is the interviewer looking for:</b>
            The interviewer is looking to gain insight into your motivation for applying to their company, and what specific factors about the company and the position appealed to you.

            <b>How should you structure the answer:</b>
            Your answer should provide specific reasons why you applied to this particular company, rather than a generic response that could apply to any company. You should highlight factors such as the company's mission, culture, industry reputation, and any other unique qualities that drew you to the position.
        `],

        ["Where do you see yourself in 5 years/future?", `
            <b>What is the interviewer looking for:</b>
            The interviewer wants to understand your long-term career goals and aspirations and how they align with the company's objectives. They want to know if you have a clear vision for your future and if you have thought about how this position will help you achieve your goals.
            
            <b>How should you structure the answer:</b>
            You should provide a realistic and thoughtful response that aligns with your career aspirations and the company's goals. You should demonstrate that you have done some research on the company and the industry and that you have a clear idea of how this position can help you achieve your long-term goals.
        `],

        ["When do you think testing should start in SDLC? (Which phase and why? What can you test in each phase of SDLC?)", `
            <b>What is the interviewer looking for:</b> 
            The interviewer is looking to assess your understanding of the software development lifecycle (SDLC) and your ability to plan and execute testing activities throughout the development process.
            
            <b>How should I structure the answer:</b>
            Start by explaining the different phases of the SDLC and their purpose. Then, discuss the different types of testing that can be conducted in each phase of the SDLC, including their objectives, inputs, and outputs. Finally, explain your approach to testing in each phase of the SDLC, including how you prioritize and plan your testing activities.
        `],

        ["How do you decide if a test case should be manual or automated?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to assess your understanding of the factors that should be considered when deciding whether to automate a test case or perform it manually.
            
            <b>How should I structure the answer:</b>
            Begin by discussing the benefits and limitations of manual and automated testing. Then, describe the factors that should be considered when deciding whether to automate a test case, such as the frequency of execution, the complexity of the test case, and the stability of the application under test. 
            Finally, provide examples of scenarios where manual testing might be more appropriate and scenarios where automated testing might be more appropriate.
        `],

        ["How do you decide if you have enough test coverage for requirements (Acceptance Criteria)?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to assess your understanding of how to determine whether test coverage is sufficient for meeting the acceptance criteria for a particular requirement.
            
            <b>How should I structure my answer:</b>
            Begin by discussing the importance of test coverage and its role in meeting the acceptance criteria for a requirement. Then, describe the steps involved in determining whether test coverage is sufficient, including analyzing the requirements, identifying test scenarios, mapping the scenarios to test cases, and executing the test cases. Finally, explain how you would evaluate the results to determine whether the test coverage is sufficient or if additional testing is required.
        `],

        ["What do you do when the requirements are not clear?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to assess your ability to handle situations when requirements are unclear.
            
            <b>How should I structure the answer:</b>
            Begin by discussing the importance of clear requirements and how they impact the software development process. Then, describe the steps you take to clarify the requirements, including discussing with stakeholders, asking questions, and seeking additional information. Finally, explain how you ensure that the requirements are well understood by the team and how you communicate any issues or concerns.
        `],

        ["What are some daily challenges you face in your current job?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to understand the typical challenges you face in your role and how you handle them.
            
            <b>How should I structure the answer:</b>
            Start by discussing some of the common challenges you face in your current job. Then, explain how you address these challenges, including any strategies or tactics you use. Finally, describe how you prioritize your work to manage these challenges and ensure that you meet your objectives.
        `],

        ["What do you do in a regular sprint?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to understand your typical activities during a sprint and how you work within an agile development environment.
            
            <b>How should I structure the answer:</b>
            Start by explaining your role in a typical sprint, including any specific responsibilities you have. Then, describe the various activities you perform during the sprint, such as testing, defect management, and communication with stakeholders. Finally, discuss how you work within an agile development environment, including any agile practices or methodologies you follow.
        `],

        ["What are your roles and responsibilities in the company/team?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know what kind of tasks and projects you are involved in as a SDET and how you contribute to the quality assurance of the software products. They also want to know how you collaborate with other developers, testers, or stakeholders in your team or across teams.
            
            <b>How should I structure the answer:</b>
            You should briefly describe your current or previous company and team and what kind of software products they develop or test. You should then highlight your main roles and responsibilities as a SDET and give some examples of how you perform them. You should also mention how you communicate and coordinate with other team members or external parties and what tools or methods you use for that.
        `],

        ["Tell me about a regular day of your work, what do you do?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know how you organize and prioritize your work as a SDET and what kind of tasks and activities you perform on a daily basis. They also want to know how you balance your time between automation and manual testing, how you handle unexpected issues or changes, and how you cope with stress or pressure.
            
            <b>How should I structure the answer:</b>
            You should give a brief overview of your typical workday as a SDET and mention the main tasks and activities that you do. You should also explain how you plan your work, what tools or methods you use to manage your time and tasks, how you communicate and collaborate with others, and how you deal with any challenges or difficulties that arise.
        `],

        ["What is the interesting bug you found lately?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know how you approach bug finding and reporting as a SDET and what kind of bugs you can identify and analyze. They also want to know how you communicate and collaborate with developers and other testers to resolve the bugs and what tools or techniques you use for that.
            
            <b>How should I structure the answer:</b>
            You should briefly describe the bug that you found recently and explain why it was interesting or challenging. You should also mention how you discovered the bug, what steps you took to reproduce it, what impact it had on the functionality or performance of the software product, and how you reported it using Jira tool. You should also mention how you worked with developers and other testers to verify the fix and prevent similar bugs in the future.
        `],

        ["What questions do you have for me?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know if you are interested and curious about the company and the role that you are applying for. They also want to know if you have done some research about the company and its products, culture, values, etc. They also want to see if you have any concerns or expectations that need to be addressed.
            
            <b>How should I structure the answer:</b>
            You should ask some relevant and specific questions that show your enthusiasm and knowledge about the company and the role. You should also avoid asking questions that are too personal, trivial, or negative. You should also avoid asking questions that can be easily found on the company website or job description.
        `],

        ["Can you tell me about your project.", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know what kind of software testing projects you have worked on or are working on and how you contributed to them as a SDET. They also want to know how you applied your skills and knowledge in software testing and automation, what challenges or achievements you had, and what results or outcomes you delivered.
            
            <b>How should I structure the answer:</b>
            You should briefly describe one or two projects that are relevant and recent and that demonstrate your skills and experience as a SDET. You should also use the STAR (Situation, Task, Action, Result) method to structure your answer. You should explain the situation or context of the project, the task or goal that you had as a SDET, the action or steps that you took to perform the task or achieve the goal, and the result or outcome that you delivered or measured.
        `],

        ["Can you tell me about your Smoke and Regression Suites? How many tests? How long they run?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know how you use smoke testing and regression testing in your projects. They also want to see how you organize and maintain your test suites.
            
            <b>How should I structure the answer:</b>
            You should explain what smoke testing and regression testing are, how you perform them, and what tools or frameworks you use. You should also give some examples of the test cases or scenarios that are included in your smoke and regression suites.
        `],

        ["How do you decide if a test case is a Smoke or Regression test case?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know how you apply your testing knowledge and judgment to classify your test cases. They also want to see how you balance the trade-off between speed and coverage.

            <b>How should I structure the answer:</b>
            You should explain the criteria or factors that you use to decide if a test case is a smoke or regression test case. You should also give some examples of how you apply those criteria or factors in your projects.
        `],

        ["How do you read test data in your framework?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know how you handle test data in your framework. They also want to see how you use external sources or files to store and retrieve test data.
            
            <b>How should I structure the answer:</b>
            You should explain what types of test data you use in your framework, what sources or files you use to store them, and what methods or libraries you use to read them. You should also give some examples of how you read test data in your code.

            <b>Answer:</b>
            I use different types of test data in my framework, such as:

            Static test data: These are the test data that do not change frequently and are common for most of the test cases. For example, user credentials, URLs, API keys, etc. I store these test data in a properties file and read them using the java.util.Properties class.
            Dynamic test data: These are the test data that change frequently and are specific for some of the test cases. For example, account numbers, transaction amounts, security codes, etc. I store these test data in an Excel file and read them using the Apache POI library.
            Random test data: These are the test data that are generated randomly at run time and are used for negative or boundary testing. For example, invalid user names, passwords, email addresses, etc. I generate these test data using the java.util.Random class or some third-party libraries such as Faker or RandomDataGenerator.
            Some examples of how I read test data in my code are:

            To read static test data from a properties file:
            //Create an object of Properties class
            Properties prop = new Properties();

            //Create an object of FileInputStream class
            FileInputStream fis = new FileInputStream("config.properties");

            //Load the properties file
            prop.load(fis);

            //Read the property value using getProperty() method
            String username = prop.getProperty("username");
            String password = prop.getProperty("password");
            To read dynamic test data from an Excel file:

            //Create an object of FileInputStream class
            FileInputStream fis = new FileInputStream("testdata.xlsx");

            //Create an object of Workbook class
            Workbook wb = WorkbookFactory.create(fis);

            //Get the sheet by name
            Sheet sh = wb.getSheet("Sheet1");

            //Get the row by index
            Row row = sh.getRow(0);

            //Get the cell by index
            Cell cell = row.getCell(0);

            //Read the cell value using getStringCellValue() method
            String accountNumber = cell.getStringCellValue();
            To generate random test data using Random class:

            //Create an object of Random class
            Random rand = new Random();

            //Generate a random integer between 0 and 9999 using nextInt() method
            int securityCode = rand.nextInt(10000);
        `],

        ["How much time do you spend on testing within the Sprint?", `
            <b>What is the interviewer looking for:</b>
            The interviewer wants to know how you manage your time and prioritize your tasks as an SDET in an agile environment. They also want to see if you follow the best practices of testing in a sprint.
            
            <b>How should I structure my answer:</b>
            You should start by explaining what a sprint is and how testing is integrated into it. Then you should give an estimate of how much time you spend on testing within a sprint and what factors influence it. You should also mention how you balance between manual and automated testing and how you collaborate with other team members.
        `],

        ["How do you manage different sets of test data for different environments?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know how you handle test data for different testing environments, such as development, testing, staging, or production. They also want to see how you ensure the consistency and accuracy of test data across environments.
            
            <b>How should I structure the answer:</b>
            You should explain what types of test data you use for different environments, how you store and access them, and how you synchronize and update them. You should also give some examples of how you manage test data for different environments in your framework.
            
            <b>Answer:</b>
            I use different types of test data for different environments, such as:
            Development environment: This is the environment where the developers work on their code and deploy their changes. I use mock or dummy test data for this environment, such as fake user names, passwords, email addresses, etc. I store these test data in a JSON file and access them using the org.json library.
            Testing environment: This is the environment where I perform most of my testing activities and execute my test cases. I use real or valid test data for this environment, such as actual user credentials, account numbers, transaction amounts, etc. I store these test data in a MySQL database and access them using the JDBC API.
            Staging environment: This is the environment where I perform some final testing before releasing the system to production. I use a subset or sample of production test data for this environment, such as some selected user accounts, transactions, etc. I store these test data in a MongoDB database and access them using the MongoDB Java Driver.
            Production environment: This is the environment where the system is live and used by real users. I do not use any test data for this environment as it may affect the system performance or functionality. However, sometimes I may need to verify some issues or bugs reported by users in this environment. In that case, I use only minimal or necessary test data provided by users or clients.
            Some examples of how I manage test data for different environments in my framework are:
            To store and access mock or dummy test data from a JSON file:
            //Create an object of FileReader class
            FileReader fr = new FileReader("mockdata.json");
            
            //Create an object of JSONParser class
            JSONParser parser = new JSONParser();
            
            //Parse the JSON file using parse() method
            Object obj = parser.parse(fr);
            
            //Cast the object to JSONObject
            JSONObject json = (JSONObject) obj;
            
            //Read the JSON value using get() method
            String username = (String) json.get("username");
            String password = (String) json.get("password");
            To store and access real or valid test data from a MySQL database:
            //Create an object of DriverManager class
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdata", "root", "password");
            
            //Create an object of Statement class
            Statement stmt = con.createStatement();
            
            //Execute a SQL query using executeQuery() method
            ResultSet rs = stmt.executeQuery("select * from users");
            
            //Read the result set using next() and getString() methods
            while(rs.next()) {
            String username = rs.getString("username");
            String password = rs.getString("password");
            }
            To store and access a subset or sample of production test data from a MongoDB database:
            //Create an object of MongoClient class
            MongoClient mongoClient = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
            
            //Get the database by name
            MongoDatabase db = mongoClient.getDatabase("testdata");
            
            //Get the collection by name
            MongoCollection<Document> col = db.getCollection("users");
            
            //Find all documents in the collection using find() method
            FindIterable<Document> docs = col.find();
            
            //Read each document using iterator() and get() methods
            for(Document doc : docs) {
            String username = doc.get("username").toString();
            String password = doc.get("password").toString();
            }
            To synchronize and update test data across environments:
            I use Jenkins as a continuous integration tool to automate the synchronization and update process. I create separate jobs for each environment that run periodically or on-demand. These jobs perform tasks such as copying files from one location to another location; executing SQL scripts to insert/update/delete records in databases; running commands to backup/restore databases; etc. 
            
            For example,
            To copy mockdata.json file from development server to testing server:
                scp -i key.pem mockdata.json user@testing-server:/home/user/
            
            To execute SQL script to insert records into MySQL database on testing server:
                mysql -u root -p password -h testing-server -D dbname <b insert.sql 
            
            To backup MongoDB database on staging server:
                mongodump -h staging-server -d dbname -o backup
            
            To restore MongoDB database on production server:
                mongorestore -h production-server -d dbname backup/dbname
        `],

        ["Can you tell me a tough automation problem you faced in the past and how you solved it?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know how you approach and solve automation challenges. They also want to see your technical skills, problem-solving skills, and learning ability.
            
            <b>How should I structure the answer:</b>
            You should use the STAR (Situation, Task, Action, Result) method to structure your answer. You should describe the situation or context of the problem, the task or goal that you had to achieve, the action or steps that you took to solve the problem, and the result or outcome that you achieved.
        `],

        ["Which side of the automation do you feel comfortable UI or API?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know your preference and expertise in UI or API testing. They also want to assess your understanding of the differences and advantages of each type of testing.
            
            <b>How should I structure the answer:</b>
            You should start by explaining what UI and API testing are and how they differ. Then you should state your preference and give a reason why. You should also mention that you are comfortable with both types of testing and give an example of a project where you used both.
        `],

        ["How did you maintain your test scripts?", `
            <b>What is the interviewer looking for:</b> 
            The interviewer wants to know how you keep your test scripts up-to-date and consistent with the changes in the application under test. They also want to see how you use version control tools, coding standards, and best practices to maintain your test scripts.
            
            <b>How should I structure the answer:</b>
            You should explain what steps or actions you take to maintain your test scripts. You should also give some examples of how you use version control tools, coding standards, and best practices to maintain your test scripts.

            <b>Answer:</b>
            I take the following steps or actions to maintain my test scripts:
                o I review and update my test scripts regularly based on the changes in the application under test. I use a defect tracking tool such as Jira or Bugzilla to track and monitor the changes in the application under test. I also communicate with developers and business analysts to understand the impact and scope of the changes in the application under test.

                o I use a version control tool such as Git or SVN to manage and store my test scripts. I create branches for each feature or functionality that I automate. I commit and push my code changes frequently to avoid conflicts or merge issues. I also pull and merge code changes from other team members regularly to keep my code base updated and consistent.

                o I follow coding standards and best practices such as naming conventions, indentation, comments, etc. to write clean and readable code. I use an IDE such as Eclipse or IntelliJ IDEA with plugins such as Checkstyle or PMD to check and enforce coding standards and best practices in my code. I also refactor my code periodically to remove any redundant or unused code.

                o I use a design pattern such as Page Object Model (POM) or Keyword Driven Framework (KDF) to structure and organize my code. I create separate classes for each web page or module that contains web elements and methods related to that page or module. I also create separate classes for common utilities such as reading data from files or databases; taking screenshots; logging results; etc.

                o I use a reporting tool such as Extent Reports or Allure Reports to generate detailed and interactive reports for each test execution. These reports contain information such as test name; status; duration; steps; screenshots; logs; etc. These reports help me analyze and troubleshoot any failures or errors in my test scripts.
        `],

        ["Tell me about yourself.", `
            <b>What is the interviewer looking for:</b>
            The interviewer is looking to learn more about you and your background. This question is often used as an icebreaker to get the conversation started. The interviewer wants to know about your experience, education, skills, and achievements.
            
            <b>How should I structure my answer:</b>
            You should structure your answer to highlight your relevant experiences, skills, and accomplishments. Keeping your response concise and focused on your professional background is essential. You can start by briefly introducing yourself, then mention your relevant education and work experience, and conclude by talking about your relevant skills and achievements to the position. Remember to keep your response professional and avoid talking about the personal information that is not relevant to the position.
        `],

        ["Tell me about your framework.", `
            <b>What is the interviewer looking for:</b>
            The interviewer wants to understand the automation framework you used in your previous projects and your level of expertise with it.
            
            <b>How should I structure my answer:</b>
            Begin by explaining the automation framework that you have used in your previous projects. Then, describe the advantages of using the framework, any challenges you faced while implementing it, and the level of expertise you have with the framework. Finally, give an example of a successful implementation of the framework.
        `]
    ])
}