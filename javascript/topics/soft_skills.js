import DataHandler from "../utilities/data_handler.js";

export default class SoftSkills extends DataHandler {
    constructor() {
        super();
    }

    questions = new Map([
        [1, "What is SDLC?"],
        [2, "Why do we need SDLC?"],
        [3, "What are the SDLC phases? Can you briefly explain them?"],
        [4, "What are the roles and responsibilities in SDLC?"],
        [5, "What is Waterfall Model?"],
        [6, "What is the Agile Model?"],
        [7, "What are the values of Agile? (Agile Manifesto)?"],
        [8, "What are the differences between Agile and Waterfall?"],
        [9, "What is SCRUM?"],
        [10, "Who are the Scrum Team Members?"],
        [11, "What is a user story? What are some components of a user story? Who writes the user story?"],
        [12, "What is the acceptance criteria? How should it be defined? Who writes acceptance criteria?"],
        [13, "What is Sprint?"],
        [14, "What is a Product Backlog?"],
        [15, "What is the Sprint Backlog?"],
        [16, "What are the Scrum Ceremonies?"],
        [17, "What is the Backlog Grooming Meeting (Product Backlog Refinement)?"],
        [18, "What is the Sprint Planning Meeting?"],
        [19, "What is the Daily Scrum Meeting?"],
        [20, "What is the Sprint Review/Demo Meeting?"],
        [21, "What is the Sprint Retrospective (Retro) Meeting?"],
        [22, "What are the SCRUM Artefacts?"],
        [23, "What are the Scrum Values?"],
        [24, "What is the Parking Lot Meeting?"],
        [25, "Do all team members attend the Parking Lot meeting?"],
        [26, "What is the Three Amigos Meeting?"],
        [27, "What is Burndown Chart?"],
        [28, "What are the test scenario, test case and test script and what are their differences?"],
        [29, "How do you write a test case? What should you consider while writing test cases?"],
        [30, "What are the benefits of writing Test Cases?"],
        [31, "What are positive and negative test cases?"],
        [32, "What is happy path testing?"],
        [33, "What are boundary-edge cases?"],
        [34, "What are the most important skills a Tester must have to perform their job well?"],
        [35, "What is SAFe?"],
        [36, "What are the disadvantages of Scaling Agile?"],
        [37, "What are the differences between Scrum and SAFe?"],
        [38, "What is ART?"],
        [39, "What are the ART roles?"],
        [40, "What is PI Planning?"],
        [41, "Can you tell me how your company performs the PI Planning?"],
        [42, "What is SMART? Can you explain what each letter means?"],
        [43, "Can you explain the bug life cycle?"],
        [44, "What is the list of Items Included in an Ideal Bug Report?"],
        [45, "What is the severity?"],
        [46, "What are the severity levels?"],
        [47, "What is Priority?"],
        [48, "What is the Definition of Ready (DoR)?"],
        [49, "What is the Definition of Done (DoD)?"],
        [50, "What is Software Testing? What is the goal?"],
        [51, "What are the benefits of Software Testing?"],
        [52, "What are the differences between manual and automation testing?"],
        [53, "What are the advantages of automation testing over manual testing?"],
        [54, "What is Unit Testing?"],
        [55, "Benefits of Unit Testing?"],
        [56, "What is Integration Testing?"],
        [57, "What is Smoke Testing?"],
        [58, "When do you do Smoke Testing?"],
        [59, "What is Sanity Testing?"],
        [60, "The difference between Smoke and Sanity Testing?"],
        [61, "What is Regression Testing?"],
        [62, "When to apply Regression Testing?"],
        [63, "What is System Testing, what are the advantages of System Testing, and when do you perform it?"],
        [64, "What is Interface Testing?"],
        [65, "How to do Interface Testing?"],
        [66, "What is End-to-End (E2E) Testing?"],
        [67, "Difference between System Testing and End-to-End Testing?"],
        [68, "What is Acceptance Testing?"],
        [69, "What is User Acceptance Testing?"],
        [70, "What is Alpha Testing?"],
        [71, "What is Beta Testing?"],
        [72, "What is Black Box Testing?"],
        [73, "What is White Box Testing?"],
        [74, "What is Non-Functional Testing?"],
        [75, "What is Documentation Testing?"],
        [76, "What is Installation Testing?"],
        [77, "What is Performance Testing?"],
        [78, "Types of Performance testing?"],
        [79, "What is Reliability Testing?"],
        [80, "What is Security Testing?"],
        [81, "What is Software Testing?"],
        [82, "Why is Testing important?"],
    ]);

    answers = new Map([
        ["What is SDLC?", `
        • SDLC is a step-by-step procedure to develop any new software.
        `],

        ["Why do we need SDLC?", `
        <b>• To know:</b>
        • Requirements
        • Cost of the project
        • Workforce requirements
        • Project Timeline
        • Profit from the project
        `],

        ["What are the SDLC phases? Can you briefly explain them?", `
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
        `],

        ["What are the roles and responsibilities in SDLC?", `
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
        `],

        ["What is Waterfall Model?", `
        • Waterfall Model is a breakdown of project activities into linear sequential phases, where each phase depends on the deliverables of the previous one and corresponds to a specialization of the task.
        `],

        ["What is the Agile Model?", `
        • Agile is an incremental and iterative approach to manage the project. We can move back and forth between the phases. It is flexible.
            1. Planning
            2. Design
            3. Development
            4. Testing
            5. Deployment
            6. Maintenance
        `],

        ["What are the values of Agile? (Agile Manifesto)?", `
        • People over process and tools
        • Working software over comprehensive documentation
        • Customer collaboration over rigid contracts
        • Responding to change rather than following a plan
        `],

        ["What are the differences between Agile and Waterfall?", `
        • Agile follows incremental and sequesntial approaches
        • Waterfall is a Linear Sequential Life Cycle Model
        • Agile is flexible
        • Waterfall is structured
        • In Agile testing is performed concurrently with software development
        • In Waterfall the "Testing" phase comes after the "Development" phase
        `],

        ["What is SCRUM?", `
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
        `],

        ["Who are the Scrum Team Members?", `
        • Scrum master
        • Development team
        • Product owner
        `],

        ["What is a user story? What are some components of a user story? Who writes the user story?", `
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
        `],

        ["What is the acceptance criteria? How should it be defined? Who writes acceptance criteria?", `
        <b>Acceptance Criteria (AC):</b> Conditions that a software product must meet to be accepted by a user, a customer, or other systems. They are unique for each user story and define the feature behavior from the end-user's perspective.

        • Example: “User should log in”
            • Acceptance Criteria should be testable.
            • Acceptance Criteria should be clear and concise.
            • Acceptance Criteria should be understood by everyone on the team.
            • Acceptance Criteria should provide a user perspective.
            • Usually, Product Owners write the User Stories and Acceptance Criteria.
        `],

        ["What is Sprint?", `
        • A sprint is a short, time-boxed period when a scrum team works to complete a set amount of work. Sprints are the heart of scrum and agile methodologies, and getting sprints right will help your agile team ship better software with fewer headaches.
        `],

        ["What is a Product Backlog?", `
        • A product backlog is a prioritized list of user stories for the development team that is derived from the roadmap and its requirements. The most important items are shown at the top of the product backlog so the team knows what to deliver first.
        `],

        ["What is the Sprint Backlog?", `
        • The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how).
        • PO manages both Product and Sprint backlogs. Also, Scrum Master contributes to the PO in terms of backlogs.
        `],

        ["What are the Scrum Ceremonies?", `
        <b>There are 5 main events in Scrum or Scrum Meetings:</b>
            1. Backlog Grooming Meeting
            2. Sprint Planning Meeting
            3. Daily Scrum Meeting
            4. Sprint Review Meeting
            5. Sprint Retrospective Meeting

        `],

        ["What is the Backlog Grooming Meeting (Product Backlog Refinement)?", `
        • This meeting is performed in the middle of each sprint to refine the user stories for the next sprint.
        • Product Owner, Scrum Master, and Development team attend this meeting
        • Prioritize user stories
        • Add details to the user stories
        • Estimate the time to deliver the user stories
        `],

        ["What is the Sprint Planning Meeting?", `
        • Sprint Planning Meeting is conducted before the sprint start
        • Product Owner, Scrum Master, and Development Team attend. If necessary, SMEs or stakeholders may also attend upon the requirements.
        • The product owner describes the highest priority user stories
        • Determine which backlog items will be handled in the next sprint
        • Team objective and set sprint goal
        `],

        ["What is the Daily Scrum Meeting?", `
        • Also known as a stand-up, it is a 15-minute daily meeting where the team has a chance to get on the same page and put together a strategy for the next 24 hours. The entire daily scrum meeting is based on discussing three-question listed below:
            • What was done yesterday by the scrum team that helped meet the sprint goal?
            • What will be done today that will help meet the sprint goal?
            • Are there any impediments that are preventing the team from meeting the sprint goal
        `],

        ["What is the Sprint Review/Demo Meeting?", `
        • A Sprint Review/Demo meeting is held at the end of the Sprint to inspect the Increment. The Team demonstrates the Increment with a focus on the Sprint Goal according to the Definition of Done. The Product Owner reviews and accepts the delivered Increment.
        `],

        ["What is the Sprint Retrospective (Retro) Meeting?", `
        <b>Answering the questions:</b>
            • What went well?
            • What went wrong?
            • How to improve?

        <b>In the Retro meeting team talks:</b>
            • How do fix the problems?
            • How create a plan for improvements?
            • There is always room to improve.
            • Focus on continuous improvement
        `],

        ["What are the SCRUM Artefacts?", `
            • Product Backlog
            • Sprint Backlog
            • Increment
        `],

        ["What are the Scrum Values?", `
            • Commitment
            • Courage
            • Focus
            • Openness
            • Respect
        `],

        ["What is the Parking Lot Meeting?", `
        • There are legitimate things for a team to talk about in the morning that don't fit the tightly defined purpose of the Daily Scrum. Address those topics right after the Daily Scrum is over.
        • <b>Note:</b> In my team one or two times a week we are having a parking lot meetings. So, Parking lot meeting is so useful to understand the topic.
        `],

        ["Do all team members attend the Parking Lot meeting?", `
        • It depends! :) If the topic is related to everyone in the team yes. But in my team usually System Architect, developers and QEs attend the Parking Lot Meeting.
        `],

        ["What is the Three Amigos Meeting?", `
        • Three Amigos is an Agile development strategy to keep projects on track with specifications, timeline expectations, and more. Here's how to host the meetings, and who should join in. PO, developer, and QE get together to talk about requirements, development, and testing. This meeting can be held before the development, during the development, or after the development while testing is in progress.
        `],

        ["What is Burndown Chart?", `
        • Burndown Chart-Track the total work remaining and project the likelihood of achieving the sprint goal. This helps your team manage its progress and respond accordingly.
        `],

        ["What are the test scenario, test case, and test script, and what are their differences?", `
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
        `],

        ["How do you write a test case? What should you consider while writing test cases?", `
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
        `],

        ["What are the benefits of writing Test Cases?", `
        • The key purpose of a test case is to ensure that different features within an application are working as expected.
        • It helps the tester validate if the software is free of defects and if it is working as per the expectations of the end users.
        • Test cases ensure good test coverage.
        • Help improve the quality of software,
        • Decreases the maintenance and software support costs
        • Help verify and validate that the software meets the end user requirements
        • Allows the tester to think thoroughly and approach the tests from as many angles as possible
        • Test cases are reusable for the future - anyone can reference them and execute the test if they need
        `],

        ["What are positive and negative test cases?", `
        <b>Positive Test Case:</b>
            • A type of testing that is performed on a software application by providing valid data sets as input.
            • It checks whether the software application behaves as expected with positive inputs or not.
            • Positive testing is performed in order to check whether the software application does exactly what it is expected to do.
        <b>Negative Test Case:</b>
            • A testing method is performed on the software application by providing invalid or improper data sets as input.
            • It checks whether the software application behaves as expected with negative or unwanted user inputs.
            • The purpose of negative testing is to ensure that the software application does not crash and remains stable with invalid data inputs.
        `],

        ["What is happy path testing?", `
        • Happy path testing tests the application through a positive flow to generate a default output.
        • It is positive testing of the application. Happy path testing is done when an application is deployed to the testing environment.

        `],

        ["What are boundary-edge cases?", `
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
        `],

        ["What are the most important skills a Tester must have to perform their job well?", `
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
        `],

        ["What is SAFe?", `
        • Scaled Agile Framework® (SAFe®) empowers complex organizations to achieve the benefits of Lean-Agile software and systems development at scale.
        `],

        ["What are the disadvantages of Scaling Agile?", `
        • The huge number of teams to manage
        • Lack of long-term plan
        • In the regular product backlog, there are stories for two to three sprints
        • The product marketing team required a further plan to deliver the commitments to the market
        • Lack of Agile understanding at the management level
        • Lock of coordination and a common goal
        • Multiple requirements from multiple teams
        • Unmapped dependencies create unexpected issues and obstacles.
        `],

        ["What are the differences between Scrum and SAFe?", `

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
        `],

        ["What is ART?", `
        • An Agile Release Train (ART) is a team of several Agile teams working towards a common goal. ARTs are crucial to delivering value at the enterprise level.

        `],

        ["What are the ART roles?", `
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
        `],

        ["What is PI Planning?", `
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
        `],

        ["Can you tell me how your company performs the PI Planning?", `
        • <b>Note:</b> The following information gives you an idea about the flow of the PI Planning. You do not need to memorize all of them but talk about the flow.

        • Example: In my company, we have three days of PI planning. On the first day, in the morning, the senior executive describes the company's current state and upcoming business objectives. Product Management presents the Program vision and goes over the prioritized features.

        • RTE (Release Train Engineer) presents the planning process and expected outcome of the event.

        • Next, 1st breakouts happen. ☺ During the breakouts, the team plans the capacity, selects features, breaks down the stories, and points them. Also, the team identifies risks and dependencies.

        • After the breakout, teams present the draft Plan and go to the second breakout. In the second breakouts, the team checks the management review, makes changes if necessary, and reviews capacity, stories, and each iteration.

        • With the final review, PI is completed.
        `],

        ["What is SMART? Can you explain what each letter means?", `
            1. SMART is an acronym that stands for Specific, Measurable, Achievable, Realistic, and Timely. Therefore, a SMART goal incorporates all of these criteria to help focus your efforts and increase the chances of achieving your goal.
            2. SMART is an evaluation technique that can be used when writing software requirements.
        • A goal without a plan is just a wish.

            • S - Specific: Specific requirements say exactly what is needed, be clear (unambiguous), consistent in terminology, simple, and with an adequate detail level. Answering the questions: What?, Where?, How?, When?"
            • M - Measurable: Break it down into measurable units
            • A - Achievable: Is your goal achievable?"
            • R - Realistic: How much is relevant to you?"
            • T - Timely: When do you achieve your goal?"
        `],

        ["Can you explain the bug life cycle?", `
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
        `],

        ["What is the list of Items Included in an Ideal Bug Report?", `
            • Summary
            • Environment
            • Steps to reproduce
            • Expected Result
            • Actual Result
            • Visual Proof (screenshots, videos, text)
            • Severity/Priority
        `],

        ["What is the severity?", `
        • Impact of bug on the customer business workflow.
        `],

        ["What are the severity levels?", `
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
        `],

        ["What is Priority?", `
            • How soon do you want your developer to fix that bug
            • The importance is given to the bug to fix it
        `],

        ["What is the Definition of Ready (DoR)?", `
        • Simply stated, the Definition of Ready defines the criteria that a specific user story has to meet before being considered for estimation or inclusion in a sprint.
            • A “ready” backlog item needs to be clear, feasible, and testable.
            • A user story is clear if all Scrum team members have a shared understanding of what it means. Collaboratively writing user stories and adding acceptance criteria to the high-priority ones facilitates clarity.
            • An item is testable if there is an effective way to determine if the functionality works as expected. Acceptance criteria ensure that each story can be tested
            • A user story is feasible if it can be completed in one sprint, according to the Definition of Done. If this is not achievable, it needs to be broken down further
        `],

        ["What is the Definition of Done (DoD)?", `
            • The Definition of Done is an agreement between Development Team and the Product Owner on what needs to be completed for each user story, and it is often standardized across the company in order to guarantee consistent delivery of quality.
        `],

        ["What is Software Testing? What is the goal?", `
        • Software Testing is a method to check whether the actual software product matches expected requirements and ensure that the software product is DEFECT free.
        • It is a process that verifies and validates the software product.
        • It checks if the product meets business and technical requirements.

        <i>Verification</i>
        • Verification is a static analysis technique. Here, testing is done without executing the code. Examples include - reviews, inspections, and walk-throughs.

        <i>Validation</i>
        • Validation is a dynamic analysis process where we perform testing by executing the code. Examples include functional and non-functional testing techniques.
        `],

        ["What are the benefits of Software Testing?", `
        <i>• Cost-Effective:</i> It is one of the essential advantages of software testing. Testing any IT project on time helps you to save your money for the long term. In case if the bugs caught in the earlier stage of software testing, it costs less to fix.
        <i>• Security:</i> It is the most vulnerable and sensitive benefit of software testing. People are looking for trusted products. It helps in removing risks and problems earlier.
        <i>• Product quality:</i> It is an essential requirement of any software product. Testing ensures a quality product is delivered to customers.
        <i>• Customer Satisfaction:</i> The main aim of any product is to give satisfaction to their customers. UI/UX Testing ensures the best user experience.
        `],

        ["What are the differences between manual and automation testing?", `
        <i>• Manual Testing:</i> Manual testing is a testing technique where the test engineer executes the test cases manually to identify the defect in the software.
        <i>• Automation Testing:</i> A testing technique where the test engineer develops test scripts to execute the test cases with the automation.
        `],

        ["What are the advantages of automation testing over manual testing?", `
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
        `],

        ["What is Unit Testing?", `
            • Unit testing is a way of testing the smallest piece of code. Unit test is done by the Developer.`],

        ["Benefits of Unit Testing?", `
            • Makes coding Agile
            • Helps finding Software Bug Early
            • Provides documentation
            • Make debugging easier
            • Reduce the testing cost
        `],

        ["What is Integration Testing?", `
            • Integration Testing is a level of software testing where individual units are combined and tested to verify if they are working as they intended to when integrated. The main aim here is to test the interface between the modules.
        `],

        ["What is Smoke Testing?", `
            • It is a type of test that makes sure that the critical functionalities of the program are working fine.
        `],

        ["When do you do Smoke Testing?", `
            • whenever the new functionalities of the software are developed and integrated with an existing build
            • ensures that all critical functionalities are working correctly or not
            • Whenever there is a new build, the QA team determines the major functionality in the application to perform smoke testing
        `],

        ["What is Sanity Testing?", `
            • Sanity testing checks the basic functionality of a software application after making a small change or fixing a bug. It doesn’t require documentation and is used to verify that the changes have not caused unintended consequences or broken any existing functionality.
        `],

        ["The difference between Smoke and Sanity Testing?", `
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
        `],

        ["What is Regression Testing?", `
            • Regression testing is a type of testing that is done to verify that a change or modification to a software application has not adversely affected its existing functionality. 
            • When adding a new payment type to a shopping website, re-run old tests to ensure that the new code hasn't created new defects or re-introduced old ones.
        `],

        ["When to apply Regression Testing?", `
            • At the end of each sprint cycle
            • Before a release
            • Whenever a codebase has been modified or altered in any way
        `],

        ["What is System Testing, what are the advantages of System Testing, and when do you perform it?", `
            • System testing evaluates the software application as one whole unit through both functional and non-functional tests.
            • Non-functional tests are performed to ensure if the developed product meets the business expectation.
                • Response time of an application
                • Performance
                • Security
                • Load capability

            <b>Advantages of system testing:</b>
                • Ensures that the software is working as expected when all its components are connected and interacting with each other
                • Helps to identify and fix problems that may not have been discovered in earlier stages of testing
                • Increases confidence in the software's overall functionality and performance

            <b>When to perform system testing:</b>
                • Near the end of the development process, after all the individual components of the software have been tested
                • Before releasing the software to production
                • When making significant changes or updates to the software that may affect its overall functionality
        `],

        ["What is Interface Testing?", `
            • Verifies whether the communication between two different software systems is done correctly
            • A connection that integrates two components is called interface. This interface in a computer world could be anything like API's, web services, etc. Testing of these connecting services or interface is referred to as Interface Testing.

        `],

        ["How to do Interface Testing?", `
        <i>Interface Testing includes testing of two main segments:</i>
            • Web server and application server interface
            • Application server and Database server interface.
        • For the above-mentioned scenarios, the interface testing is done to
            • Check whether servers are executed properly or not
            • Errors are handled properly or return an error message for any query made by an application
            • Check the outcomes when the connection to a web server is reset in between
        `],

        ["What is End-to-End (E2E) Testing?", `
            • Performed after the System Testing
            • Customer experiences for the whole flow
            <b>Example:</b>
                • Opening the app on user mobile ->finding a cab for entered destination ->Tracking the cab before or during the ride-> completing the ride and paying using one of the payment options -> finally credit settling into the driver's account.
                • validate the requirements from an end-user perspective.
        `],

        ["Difference between System Testing and End-to-End Testing?", `
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
        `],

        ["What is Acceptance Testing?", `
            • The purpose of this test is to evaluate the system's compliance with the business requirements and calculate whether it is acceptable at the user end.
        <b>• Example: </b>
        Consider the manufacturing of a chair. Wood, steel, plastic, paints, are the items needed for its manufacture. These units are separately produced, and unit tested. After that, these units are combined together, and integration testing is performed. After the integration process, system testing is performed. System testing is followed by acceptance testing where the final product is matched with the requirements of the end-users.
        `],

        ["What is User Acceptance Testing?", `
            • User acceptance testing is used to determine whether the product is working as per the requirements of the user correctly.
            • Requirements as per the customers are picked up specifically for this purpose. This is also called as End-User Testing.
        `],

        ["What is Alpha Testing?", `
            • Alpha Testing is a type of acceptance testing.
            • Performed to identify all possible issues and bugs before releasing the final product to the end users.
            • Alpha testing is carried out by the testers who are internal employees of the organization.
            • The main goal is to identify the tasks that a typical user might perform and test them.
            • To put it as simple as possible, this kind of testing is called alpha only because it is done early on, near the end of the development of the software, and before beta testing.
        `],

        ["What is Beta Testing?", `
            • Beta Testing is performed by "real users" of the software application in "real environment" and it can be considered as a form of external User Acceptance Testing.
            • It is the final test before shipping a product to the customers. Direct feedback from customers is a major advantage of Beta Testing.
            • This testing helps to test products in customer's environment.
        `],

        ["What is Black Box Testing?", `
            • https://www.guru99.com/black-box-testing.html
            • Black Box Testing is a software testing method in which the functionalities of software applications are tested without having knowledge of internal code structure, implementation details, and internal paths. Black Box Testing mainly focuses on the input and output of software applications, and it is entirely based on software requirements and specifications. It is also known as Behavioral Testing.
        `],

        ["What is White Box Testing?", `
            • https://www.guru99.com/white-box-testing.html
            • internal structure, design, and coding of software are tested to verify the flow of input-output and to improve design, usability, and security.
            • Code is visible to testers, so it is also called Clear box testing, Open box testing, transparent box testing, Code-based testing, and Glass box testing.
            • Its counterpart, Blackbox testing, involves testing from an external or end-user type perspective. On the other hand, White box testing in software engineering is based on the inner workings of an application and revolves around internal testing.
        `],

        ["What is Non-Functional Testing?", `
            • used to check the non-functional aspects like performance, usability, reliability, etc., of a software application which are not tested using functional testing.
            • Non-functional testing helps in testing the readiness of a system.
            • It defines the way a system operates rather than specific behaviors of that system. This is totally in contrast to functional testing, which tests against functional requirements that describe the functions of a system.
            • Non-functional testing is done to check and evaluate all the non-functional parameters which are not covered under functional testing.
            • Non-functional Testing is equally important as Functional testing.
            • All the non-functional parameters such as speed, scalability, security, reliability, and efficiency of an application are tested under the non-functional testing.
            • It makes an application robust and prepares it against certain vulnerabilities.
        `],

        ["What is Documentation Testing?", `
            • It helps to estimate the required testing efforts and track the requirements. Software documentation includes a test plan, test cases, and requirements section. It tests the documented artifacts. .
        `],

        ["What is Installation Testing?", `
            • It is a type of quality assurance work in the software industry that converges on what customers will need to do to install and set up the new software successfully. It checks if the software application is successfully installed and is working as expected. The testing process may involve full, partial or upgrades install/uninstall processes.
        `],

        ["What is Performance Testing?", `
            • It is defined as a type of software testing that is used to ensure that the software applications will perform well under their expected workload. Performance testing is considered the heart of Non-functional testing. It is further divided into a few types.
        `],

        ["Types of Performance testing?", `
        <b>Load Testing</b>
            • Load Testing is a type of performance testing conducted to evaluate the behavior of a system at an increasing workload.

        <b>Stress Testing</b>
            • Stress Testing is a type of performance testing conducted to evaluate the behavior of a system at or beyond the limits of its anticipated workload.

        <b>Endurance Testing</b>
            • Endurance Testing is a type of performance testing conducted to evaluate the behavior of a system when a significant workload is given continuously.

        <b>Spike Testing</b>
            • Spike Testing is a type of performance testing conducted to evaluate the behavior of a system when the load is suddenly and substantially increased.
        `],

        ["What is Reliability Testing?", `
            • It assures that the product is fault-free and is reliable for its intended purpose. It is about exercising an application so that the failures are discovered before the system is deployed.
        `],

        ["What is Security Testing?", `
            • It is a variant of software testing which ensures that the system and applications of the organization are free from loopholes. Security testing is about finding all possible weaknesses of the system which might result in a loss of information.
        `],

        ["What is Software Testing?", `
            • It is a process of evaluating the functionality of a software application to find any software bugs.
            • It checks whether the developed software met the specified requirements and identifies any defect in the software to produce a quality product.
            • Meets the business and technical requirements that guided its design and development
            • Works as per the requirement
        `],

        ["Why is Testing important?", `
            • If there are any bugs or errors in the software, they can be identified early and can be solved before the delivery of the software product.
            • Tested software product ensures reliability, security, and high performance which further results in time-saving, cost-effectiveness, and customer satisfaction
            • Software bugs could be expensive or even dangerous.
            • Software bugs can potentially cause monetary and human loss, and history is full of such examples
            `]
    ]);
}

// let q = new SoftSkills();
// let rand = Math.floor(Math.random() * 82) + 1;
// console.log(rand);
// let a = q.getQuestion(rand);
// console.log(a);
// console.log(q.getAnswer(a));