import DataHandler from "../utilities/data_handler.js"

export default class Maven extends DataHandler {
    constructor() {
        super();
    }

    questions = new Map([
        [1, "What is Maven?"],
        [2, "What are the advantages of using Maven?"],
        [3, "What is POM?"],
        [4, "What information does POM contain?"],
        [5, "How to check the version of mvn you are using?"],
        [6, "What is the command to create a new project based on an archetype?"],
        [7, "Tell me the command to install JAR file in local repository."],
        [8, "What would the command mvn clean do?"],
        [9, "What is a Maven Repository?"],
        [10, "Can you tell me the default location of your local repository?"],
        [11, "What is the location where Maven dependencies are downloaded in your local?"],
        [12, "What are the aspects that Maven manages?"],
        [13, "What is Build Profile?"]
    ])

    answers = new Map([
        ["What is Maven?", `
        • Maven is a project management tool (introduced by Apache Software Foundation) that provides an entire framework for the build cycle
        • It is open-source and is mainly used for the project developed in Java

        • It is used mainly for:
            o Creating-organizing the folders, packages and class files 
            o Adding libraries and dependencies
            o Compile-Run-Deploy processes

        • Maven is driven by a project object model popularly known as POM.
        • When you execute Maven commands, it will look for pom.xml file and it will run the command on the resources described in the pom.xml.
        `],

        ["What are the advantages of using Maven?", `
        • Maven provides a folder structure that makes easy for programmers to organize their classes
        • Maven provides pom.xml file centralize all dependencies and makes it easy to maintain with version updates and downloads.
            o pom.xml eliminates all the manual effort to add jars to the project and update their versions. 
            o pom.xml makes Maven simple, easy to grasp, to set up and utilize in the projects.
            
        • Maven provides target folder by default to store all output files-reports - this is where all sources, resources and files are stored and run with Maven
        • Moreover, Maven is open-source and can be easily set on MAC, Linux and Windows operating systems
        `],

        ["What is POM?", `
        • POM stands for Project Object Model.
        • In Maven, it is a fundamental unit of work, and it is an xml file. Basically, it pom.xml file.
        • You can find it in the base directory of the project.
        • It contains configuration details like plugins, goals, dependencies, profiles, versions etc.
        `],

        ["What information does POM contain?", `
        • POM contains the following configuration information: o project dependencies
            o project dependencies
            o plugins
            o goals
            o build profiles 
            o project version 
            o MORE...
        `],

        ["How to check the version of mvn you are using?", `
        • Type the following command in CLI <b>mvn -version</b>
        `],

        ["What is the command to create a new project based on an archetype?", `
            • Type the following command - <b>mvn archetype:generate</b>
        `],

        ["Tell me the command to install JAR file in local repository.", `
            • <b>mvn install</b>
            • This command installs (updates) all the jar files in the hidden .m2 folder in our local.
        `],

        ["What would the command mvn clean do?", `
            • This command deletes the target directory with all the build data before starting the build process.
            • <b>mvn clean</b> aims to clean the project artifacts created by the previous Maven builds from the target
            directories.
            • This is generally executed before initiating a new build process.
        `],

        ["What is a Maven Repository?", `
            • Maven repository is the location of a directory where all the related project artifacts, jars, libraries, plugins are kept and can be utilized by Maven easily.
        `],

        ["Can you tell me the default location of your local repository?", `
            ~/m2./repository
        `],

        ["What is the location where Maven dependencies are downloaded in your local?", `
        • The project artifacts, dependencies, and jars downloaded by Maven are placed in the local repository of Maven.
        • The folder .m2 is by default the location for the local repository. This default location can be changed from the settings.xml file.
        `],

        ["What are the aspects that Maven manages?", `
        • Maven provides developers ways to manage following:
            o Builds
            o Documentation 
            o Reporting
            o Dependencies 
            o Releases
            o Distribution 
            o And more...
        `],
        
        ["What is Build Profile?", `
        • A build profile is a set of configuration values that can be used to set or override default values of Maven build.
        • Using a build profile, you can customize build for different environments such as production and the development environments.
        • As testers, we will use maven profiles to define our Smoke and Regression suites.
        `]
    ])
}