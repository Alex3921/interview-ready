import DataHandler from "../utilities/data_handler.js"

export default class Selenium extends DataHandler {
    constructor() {
        super();
    }

    questions = new Map([
        [1, "What is Selenium?"],
        [2, "Why do you prefer Selenium Automation Tool? What are the advantages of Selenium?"],
        [3, "What are the disadvantages of Selenium? What are the limitations of Selenium?"],
        [4, "Which testing types are supported by Selenium?"],
        [5, "What are some open-source frameworks supported by Selenium?"],
        [6, "What are the Selenium Components and their differences?"],
        [7, "What is Selenese?"],
        [8, "What are the different types of locators in Selenium?"],
        [9, "What is XPath, Absolute XPath and Relative XPath?"],
        [10, "What is single forward slash (/) and double forward slash (//) in XPath?"],
        [11, "How to move to parent element using XPath?"],
        [12, "How to find all links in a page?"],
        [13, "What are XPath and CSS Selector, their differences, advantages and disadvantages over each other?"],
        [14, "What are dynamic and static web elements? How to handle dynamic web elements?"],
        [15, "How to lunch a browser using Selenium WebDriver?"],
        [16, "How to maximize a web page using Selenium?"],
        [17, "What is the difference between driver.close() and driver.quit() methods?"],
        [18, "What is the difference between get() and navigate().to() methods?"],
        [19, "What are the different ways to refresh browser using Selenium?"],
        [20, "What is the difference between findElement() and findElements() methods?"],
        [21, "What is the difference between getText() and getAttribute() methods?"],
        [22, "How to handle dropdowns using Selenium?"],
        [23, "What is Select class in Selenium and why do we use it?"],
        [24, "What is iFrame and how to handle the iFrames using Selenium?"],
        [25, "How can you find total number of frames in a web page using Selenium?"],
        [26, "How to handle multiple windows/tabs using Selenium?"],
        [27, "How to handle alerts or pop-ups?"],
        [28, "How many alert methods do you know?"],
        [29, "What is Actions class and why we use it?"],
        [30, "How to use Actions class?"],
        [31, "Can you tell me how to double click on a web element by using Actions class?"],
        [32, "What are the differences of isDisplayed(), isEnabled() and isSelected() methods in Selenium WebDriver?"],
        [33, "What are the key modifiers?"],
        [34, "Could you please explain some of the exceptions that you faced in Selenium?"],
        [35, "What are the types of waits available in Selenium? Explain implicit, explicit and fluent waits?"],
        [36, "How to scroll down or up using Selenium?"],
        [37, "Why we need synchronization in Selenium?"],
        [38, "What are the capabilities of Selenium WebDriver?"],
        [39, "What are the different types of drivers available in WebDriver?"],
        [40, "How to launch the browser using WebDriver?"],
        [41, "What are the different drivers supported for Mobile Testing?"],
        [42, "Which WebDriver implementation is fastest?"],
        [43, "What is HtmlUnitDriver?"],
        [44, "What is the advantage of headless browser testing?"],
        [45, "Can mobile applications be tested using Selenium WebDriver?"],
        [46, "Can Captcha be automated with Selenium?"],
        [47, "Can Selenium handle windows-based pop ups?"],
        [48, "How can we handle windows-based pop up?"],
        [49, "What are the different methods to refresh a web page using Selenium?"],
        [50, "How to assert text of a web element using Selenium?"],
        [51, "What does the switchTo() command do?"],
        [52, "How to switch between frames using Selenium?"],
        [53, "How to assert the title of a web page using Selenium?"],
        [54, "How to type in a textbox using Selenium?"],
        [55, "Is there a way to type in a textbox without using sendKeys()?"],
        [56, "How to click on a hyper link using linkText in Selenium?"],
        [57, "How to perform double click using Selenium?"],
        [58, "How to mouse hover on a web element using Selenium?"],
        [59, "How to handle tables on web pages using Selenium?"],
        [60, "How to handle file download/upload using Selenium?"],
        [61, "What is the difference between assert and verify commands?"],
        [62, "What is the difference between hard assert and soft assert?"],
        [63, "What is desired capability? Why it is important?"],
        [64, "What is an object repository?"],
        [65, "What do you store inside the object repository (page classes)?"]
    ]);

    answers = new Map([
        ["What is Selenium?", `
            • Selenium is a suite of software tools used to automate web-based applications
            • It is an open-source suite of tools which means it does not require any licensing cost
        `],
        
        ["Why do you prefer Selenium Automation Tool? What are the advantages of Selenium?", `
            • It is an open-source suite of tools that is why it is free to use without any licensing cost
            • It supports various operating environments like Windows, Linux, Macintosh, etc.
            • It supports multiple languages like Java, Ruby, Python, C#, Perl, etc.
            • It supports various browsers like Mozilla Firefox, Edge, IE, Google Chrome, Safari, Opera, etc.
            • It is easy to learn and use in testing frameworks
        `],
        
        ["What are the disadvantages of Selenium? What are the limitations of Selenium?", `
            • Selenium supports only web-based applications and, does not support desktop and mobile applications
            • It cannot be used to automate graphics, captchas, barcodes, shapes, images, PDFs
            • Reports cannot be generated directly through Selenium and it needs third party tools for report generation activity like TestNG or JUnit
            • Selenium is hard to synchronize with source code and automation testers need to use wait methods like sleep(), implicit wait, explicit wait, etc.
            • It does not support file upload (can be done if we define the path)
        `],
        
        ["Which testing types are supported by Selenium?", `
            • Smoke
            • Regression
            • Sanity
            • Functional tests (positive/negative UI tests)
            • Integration
            • End to end
            • Cross browser
        `],
        
        ["What are some open-source frameworks supported by Selenium?", `
            • Java based JUnit and TestNG unit testing frameworks
                o Java-based Selenium frameworks can be integrated with Cucumber to provide BDD experience.

            • C# based NUnit unit testing framework
                o C#-based Selenium frameworks can be integrated with SpecFlow to provide BDD experience.

            <b>NOTE:</b> These are not the only ones, Selenium is supporting so many other languages and frameworks created using them
        `],
        
        ["What are the Selenium Components and their differences?", `
            <b>Selenium WebDriver</b>
                o Selenium WebDriver is a tool used to automate testing for web applications, and it interacts with browsers directly without any interface.
                o It allows executing test applications against different browsers like Firefox, Chrome, IE, Safari, etc.
                o It is used for handling multiple frames, multiple browser windows, popups, alerts, etc.
                o It allows us to do complex page navigation and advanced user actions such as drag-and-drop
            
            <b>Selenium Grid</b>
                o Selenium Grid allows us to execute scripts in parallel (simultaneously). This is a huge advantage to accelerate the testing process and save time for execution
            
            <b>Selenium IDE:</b>
                o Selenium IDE is an integrated development environment for Selenium tests
                o It is implemented as a Firefox extension, and allows us to record, edit, and replay the test in Firefox
                o Selenium IDE allows us to save tests (report) as HTML, Java, Ruby scripts, or any other format
            
            <b>Selenium RC</b>
                o Selenium Remote Control (RC) makes it possible to write automated tests for a web application in any programming language like Java, C#, etc.
                o Selenium RC architecture is more complex compared to Selenium WebDriver, and hard to use for users. Also, Selenium WebDriver is faster than Selenium RC, and these are the known reasons why Selenium WebDriver is commonly used rather than Selenium RC.
        `],
        
        ["What is Selenese?", `
            • Selenese is the language that is used to write test scripts in Selenium IDE
        `],
        
        ["What are the different types of locators in Selenium?", `
            • Locators are Selenium methods that are used to locate certain web elements
            • Selenium locators are set of methods coming from Selenium jar files/library
            • There are 8 different locators coming from <b>By class</b>

            • The various locators in Selenium are as follows:
                o <b>LinkText</b> -> it can be used only with links, so anchor tags.
                o <b>PartialLinkText</b> -> it can be used only with links, so anchor tags.
                o <b>Id</b> -> it is always unique and the most preferred locator if available.
                o <b>Name</b>
                o <b>TagName</b>
                o <b>ClassName</b>
                o <b>XPath</b> -> one of the most commonly used locators after Id.
                o <b>CSSSelector</b> -> one of the most commonly used locators after Id. It is faster than XPath.
            • <b>name, link text, class name, id, partial link text, tag name</b> locators are looking for the given attribute name, and, finding the matching attribute value
            • <b>CSS Selector and XPath have their own syntaxes,</b> and both have their own advantages over each other
            • <b>XPath allows us to jump from parent to child, and child to parent</b> so that we can locate specific web element in a unique way, and it has more methods to locate web elements while CSS Selector is faster than XPath
        `],
        
        ["What is XPath, Absolute XPath and Relative XPath?", `
            <b>XPath:</b>
                o It is a syntax or language that provides a way to locate and process the elements in XML documents
                o It is used in Selenium to uniquely identify any element on a webpage using HTML DOM structure
            <b>Absolute XPath:</b>
                o It is used to find the XPath directly by giving the exact path of the element as described in the HTML DOM structure
                o If any change is done in the path of the element, then XPath will fail
                o It begins with a single forward-slash (/), means that you can select the element starting from the root node
                o EXAMPLE: /html/body/div/span/a
            <b>Relative XPath:</b>
                o Relative XPath starts searching the matching element from anywhere in the HTML DOM structure
                o It begins with a double forward-slash (//), which means it can search the element anywhere in the page
                <b>EXAMPLE: //input[@name='q']</b>
        `],
        
        ["What is single forward slash (/) and double forward slash (//) in XPath?", `
            • Single forward slash is used in Absolute XPath and it starts searching for element starting from the root node
            • Double forward slash is used in Relative XPath and it starts searching for matching element anywhere in the XML document
        `],
        
        ["How to move to parent element using XPath?", `
            • We can use ..(dot dot) expression in XPath to move to parent element
        `],
        
        ["How to find all links in a page?", `
            • We can find them by using tagName locator and store them in a List.
                e.g. List<WebElement> list = driver.findElements(By.tagName(“a”));
            <b>REMEMBER:</b> Links are created by using <a></a> tag
        `],
        
        ["What are XPath and CSS Selector, their differences, advantages and disadvantages over each other?", `
            • XPath stands for XML path and, it is the language used for locating nodes in an XML document
            • It is the most flexible locator to identify web elements
            
            <b>There are 2 types of XPath:</b>
                o <b>Absolute XPath:</b> /html/body/form/div/span/span
                o <b>Relative XPath:</b> //tagName[@AttributeName='value']

            • XPath provides many methods, and we can use those to locate elements:
                o <b>contains()</b> -> //*[contains(text(),'Email')]
                o <b>starts-with()</b> -> //*[starts-with(text(),'Pass')]
                o <b>text()</b> -> //*[text()='Password']
                o <b>parent()</b> -> //*[text()='Password']/parent::parentTagName[1]
                o <b>ancestor()</b> -> //*[text()='Password']/ancestor::table
                o <b>descendant()</b> -> //*[@id='value']/descendant::h1
                o <b>preceding/followingsibling()</b> -> //*[@class='_li']/div[1]/following-sibling::div

            • CSS Selector is the cascading stylesheet path
            • It is a pattern to find an element in a webpage
            • Creating CSS Selector locators:
                o We can use element <b>ID by prefixing #</b> -> #idValue
                o We can use element <b>Class Name by prefixing . (dot) -> .className</b>
                o We can use <b>(>)to access the child elements -> .className>childNode</b>
                o We can use <b>first-child, last-child or nth-child(n) methods to define the position of child elements -> .className>childNodeName::nth-child(n)</b>
                o Instead starts-with in XPath, we can use <b>^ in CSS Selector -> [attribute-name^='value']</b>
                o Instead ends-within XPath, we can use <b>$ in CSS Selector ->[attribute-name$='value']</b>
                o Instead contains in XPath, we can use <b>* in CSS Selector ->[attribute-name*='value']</b>

            <b>DIFFERENCES:</b>
                • XPath is more flexible and it has methods to locate elements like text(), contains(), etc. However, CSS Selector provides some syntaxes to be used instead of some of these methods
                • XPath allows us to navigate up to the DOM that means we can move from child element to parent element but there is currently no way to select the parent of an element by using CSS Selector
                • CSS Selector can almost do everything XPath does and it is easier to learn
                • CSS Selector is faster than XPath
                • <b>NOTE:</b> XPath and CSS Selector are the 2 most commonly used locators after id
        `],
        
        ["What are dynamic and static web elements? How to handle dynamic web elements?", `
            • <b>Static web elements</b> are the ones whose attribute values are static and do not change. That is why it is always safe to use while dynamic web elements are the ones whose attribute values are dynamic and changes for each browser session. That is why, it is not safe to use and we need to be careful to run some actions on these web elements
            • <b>How do we know a web element is dynamic:</b> You will see that whole or some part of attribute values are random numbers or letters or their combination
            • <b>What is the risk of dynamic web elements:</b> If you locate these web elements with changing part, your script will fail next time as value will be regenerated and your script will throw an exception. For that reason, we should never rely on these values while locating web elements
            • <b>How to handle dynamic web elements:</b> We can locate web element by its static values or the part that is static

                § We can use 3 methods to locate dynamic elements assuming id attribute has dynamic and static parts:
                    //div[contains(@name, "abd")]
                    //div[starts-with(@name, "abd")]
                    //div[ends-with(@id, "bca")]
                § Or we can locate a static parent web element and move to dynamic child web element
        `],
        
        ["How to lunch a browser using Selenium WebDriver?", `
            • There are 2 ways to lunch browser by using Selenium 
                <b>1.Using System.setProperty() method</b>
                    <i>o EXAMPLE TO LAUNCH CHROME DRIVER</i>
                    //Setting the webdriver.chrome.driver property to its executable's location
                    System.setProperty("webdriver.chrome.driver", "/lib/chromeDriver/chromedriver.exe");

                    //Creating a driver object referencing WebDriver interface and instantiating driver object
                    WebDriver driver = new ChromeDriver();
                    
                    //Using get() method to open a webpage
                    driver.get("https://www.techglobalschool.com");
                    
                    //Closing the browser
                    driver.quit();
                    
                    <i>o EXAMPLE TO LAUNCH FIREFOX DRIVER</i>
                    //Setting webdriver.gecko.driver property
                    System.setProperty("webdriver.gecko.driver", pathToGeckoDriver + "\\geckodriver.exe");
                    
                    //Creating a driver object referencing WebDriver interface and instantiating driver object
                    WebDriver driver = new FirefoxDriver();
                    
                    //Using get() method to open a webpage
                    driver.get("https://www.techglobalschool.com/");
                    
                    //Closing the browser
                    driver.quit();

                <b>2.Using WebDriverManager(BoniGarcia) Dependency</b>
                    o EXAMPLE TO LAUNCH CHROME DRIVER
                    WebDriverManager.chromedriver().setup(); 
                    WebDriver driver = new ChromeDriver();
                    
                    o EXAMPLE TO LAUNCH FIREFOX DRIVER 
                    WebDriverManager.firefoxdriver().setup();
                    WebDriver driver = new FirefoxDriver();
                    
                    <b>NOTE:</b> For the second way,we need to define WebDriverManager dependency in the pom.xml file
                    <b>NOTE:</b> We need to know that WebDriver is an interface in Selenium and ChromeDriver and FirefoxDriver are 2 classes that are implementing WebDriver Interface and, we cannot instantiate the WebDriver with new WebDriver since it is an Interface.
        `],
        
        ["How to maximize a web page using Selenium?", `
            • driver.manage().window().maximize();
            • driver.manage().window().fullscreen();
        `],
        
        ["What is the difference between driver.close() and driver.quit() methods?", `
            • driver.close() method is used to close the current window that WebDriver is controlling
            • driver.quit() method is used to close all the windows opened by WebDriver
        `],
        
        ["What is the difference between get() and navigate().to() methods?", `
            • driver.get(url) method is used to navigate to a particular URL and will wait until the page is loaded
            
            • driver.navigate.to(url) method is used to navigate to a particular URL and will not wait until the page is loaded and it maintains the browser history and cookies, so we can use forward and backward functions to navigate between the pages during the execution of scripts.
            
            • SOME OTHER driver.navigate() methods are as below
                o driver.navigate().back() is used to navigate page backward 
                o driver.navigate().forward() is used to navigate page forward 
                o driver.navigate().refresh() is used to refresh the page
        `],
        
        ["What are the different ways to refresh browser using Selenium?", `
            • Some of different ways to refresh the browser are as below
                • driver.navigate.refresh()
                • driver.getCurrentURL()
                • driver.navigate.to(driver.getCurrentURL())
                • sendKeys(Keys.F5)
        `],
        
        ["What is the difference between findElement() and findElements() methods?", `
            • Both of them are used to find elements
            • <b>findElement()</b> method returns a single web element and it can be stored in a WebElement variable. If there are more than one matches found with the given locator, then it will return the first match in the DOM. This method throws NoSuchElementException in case it cannot find element with specified locator.
            • <b>findElements()</b> method returns a list of web elements and they can be stored in an ArrayList<WebElement> and it returns an empty list in case it cannot find elements with specified locator. It will not throw any exceptions.
        `],
        
        ["What is the difference between getText() and getAttribute() methods?", `
            • <b>getText()</b> method is used to get the text of an element and it returns the inner text of an element as a String. It is the text which is visible on the page along with sub elements. It ignores all leading and trailing spaces.
            • <b>getAttribute()</b> method is used to get value of particular attribute and it fetches the text contained by an attribute in an html document. If a value is not set for an attribute, null value is returned. The attribute is passed as a parameter to the method.
        `],
        
        ["How to handle dropdowns using Selenium?", `
            <b>• There are 2 types of dropdowns in web pages.</b> One is created by using select and option tags and the other is created by other tags like div.
            <b>• If the dropdown is not created with select and option tags,</b> then we need to locate dropdown and store its options in a List<WebElement> and take action on the particular option.
            <b>• If the dropdown is created with select and option tags</b>
                o This one is the most common dropdown is used by developers
                o All the options in the dropdown are created by using option tag
                o We can use <b>Select</b> class to select an option from dropdown
                
                <b>Steps to use Select class:</b>
                    1. We have to locate the select element
                    2. Create an object from Select class (comes from selenium library)
                    3. When creating Select object you must pass your select element in it
                
                <b>Actions:</b>
                <b>can get selected option by default with getFirstSelectedOption() method 3 ways to select a certain option</b>
                    § 1. by index
                    § 2. by visible text
                    § 3. by value
                
                    We can get all options with getOptions() method
                
                o EXAMPLE:
                o Select select = new Select(driver.findElement(By.id("idOfTheSelectElement")));
                    o select.selectByVisibleText("Text");
                    o select.selectByIndex(intIndex);
                    o select.selectByValue("Value");
                <b>NOTE</b>: Select class only supports the dropdowns that are created using select and option tags, DO NOT try to use it with other HTML tags used dropdowns, it will not work.
        `],
        
        ["What is Select class in Selenium and why do we use it?", `
            • Select is a class that comes from Selenium libraries
            • It is used to select the options from dropdown that are created with select tag
            • It has many predefined methods ready to use with dropdowns
        
            <b>Why we use it?</b>
                o To be able to use predefined methods to take some actions on dropdown options
            
            <b>How to use it?</b>
                o locate the select web element first
                o then create a Select class object
                o and pass the located web element inside the constructor as a parameter
            
            <b>What kind of dropdowns we can use it with?</b>
                o it can only be used with the dropdowns that are specifically created with select tag
        `],
        
        ["What is iFrame and how to handle the iFrames using Selenium?", `
            <b>• IFrame is simply known as html code inside another html code</b> and it is used to put content from one page to another. Content can be ads, videos, players, etc.
            • IFrame can be created by using iFrame tag
            • Selenium can only focus on one html code at a time and testers need to switch iFrame explicitly to be able to take some actions in inner iFrames.
            
            <b>We can switch to the frame in 3 different ways:</b>
                1. Locating inner iFrame as a web element and passing it into the switchTo() method
                    <i>Syntax: WebElement innerIframe = driver.findElement(By.id(""));</i>
                    <i>driver.switchTo().frame(innerIframe);</i>
                
                2. Switching by index; this can be useful when you do not have anything static to locate your iframe
                    <i>Syntax: driver.switchTo().frame(0);</i>
                
                3. By name or id; if they are not dynamic
                    <i>Syntax: driver.switchTo().frame("name or id");</i>

                <b>NOTE:</b> There are two ways to switch back to the parent iFrame:
                    § driver.switchTo().parentFrame(); --> this will go back to the parent
                    § driver.switchTo().defaultContent(); --> this will go back to default html
        `],
        
        ["How can you find total number of frames in a web page using Selenium?", `
            • We can find all iFrame elements by using tagName locator and store these in a List. The size of list will return how many frames we have in a web page
            
            <b>Syntax:</b>
                iiiList<WebElements> frames = driver.findElements(By.tagName(“iFrame”)); 
                iiiframes.size(); // this will return the number of frames in the page
        `],
        
        ["How to handle multiple windows/tabs using Selenium?", `
            • Window handle is an auto generated id for each window or tab
            <b>We can handle multiple windows/tabs by using getWindowHandle(), getWindowHandles() and switchTo()</b>
            
            • Windows or tabs are same for Selenium and each has their own unique id
                <b>o getWindowHandle()</b> method returns the unique id for current window as a String
                    § String currentWindowId = driver.getWindowHandle();
                
                <b>o getWindowHandles()</b> method returns all window ids that opened in browser by Selenium WebDriver and it will return a set of unique window ids. 
                <b>REMEMBER:</b> Set is a collection that does not allow any duplication and takes elements that are unique.
                    § Set<String> allWindowIds = driver.getWindowHandles(); 
                
                <b>o switchTo()</b> method can be used to switch window or tab
                    § driver.switchTo().window(windowToBeSwitched);
        `],
        
        ["How to handle alerts or pop-ups?", `
            • There are 2 types of pop-ups or alerts.
            
            <b>1. HTML pop-ups or alerts:</b>
                o This is a part of HTML code, and it can be handled just like handling any other web element.
                o So, we can locate the popup by using driver.findElement() and do action on it
            
            <b>2. JavaScript pop-ups or alerts:</b>
                o These are not part of the HTML code
                o So, we cannot locate them using regular Selenium locators and we need to handle these with Alert interface
                <b>There are 3 types of JavaScript alerts:</b>
                    1. Warning / Information alert:
                        • This alert has only one button to do action with. You can only accept by using alert.accept() method
                    2. Confirmation alert:
                        • This alert has two buttons and we can either accept or deny
                        • You can accept or dismiss by using alert.accept() or alert.dismiss() methods
                    3. Prompt alert:
                        • This alert is asking user input. So, you can send some text to it and then accept or dismiss by using alert.sendKeys("text") and alert.accept() or alert.dismiss()

                o How to create an Alert instance and use its methods? 
                
                Alert alert = driver.switchTo().alert();
                alert.accept();
                alert.dismiss();
                alert.sendKeys("text");

                o How to get text of a JavaScript alert or pop-up?
                
                alert.getText() method can be used.

            <b>NOTE:</b> We can use all these alert methods without creating an instance of Alert. Instead, we can use driver.swicthTo().alert() and then any method that we want to use
        `],
        
        ["How many alert methods do you know?", `
            • This question is related to JavaScript alerts
            • JavaScript alerts are also known as browser alerts
        
            <b>We have 4 alert methods</b>
                o dismiss() method is used to dismiss (clicks the CANCEL button on the alert)
                o accept() method is used to accept (clicks the ACCEPT button on the alert) 
                o sendKeys() method is used to send keys to input box on the alert
                o getText() method is used to get text displayed on the alert
        `],
        
        ["What is Actions class and why we use it?", `
            • Actions is a class that comes from Selenium and allows us to perform advanced mouse and keyboard actions in automation
            • Actions method will not work unless perform() is used after actual action that you want to do
            
            <b>Actions class can handle</b>
                <i>1. Mouse Actions like:</i>
                    <b>click()</b> method simply clicks on an element
                    <b>doubleClick()</b> method performs a double-click on an element
                    <b>contextClick()</b> method performs a context-click (right click) on an element
                    <b>clickAndHold()</b> method clicks (without releasing) at the current mouse location
                    <b>dragAndDrop(source, target)</b> method performs click-and-hold at the location of the source element, then moves source element to the location of the target element, then releases the mouse
                    <b>dragAndDropBy(source, x-offset, y-offset)</b> method performs click-and-hold at the location of the source element, moves it by a given offset, then releases the mouse
                    <b>moveToElement(toElement)</b> method moves the mouse to the middle of the element
                    <b>moveByOffset(x-offset, y-offset)</b> method moves the mouse from its current position (or 0,0) by the given offset
                    <b>release()</b> method releases the depressed left mouse button at the current mouse location
                
                <i>2. KeyBoard Actions like:</i>
                    <b>keyDown(modifier_key)</b> method performs a key press without releasing it
                    <b>keyUp(modifier_key)</b> method performs a key release
                    <b>sendKeys(onElement, charsequence)</b> method sends a series of keystrokes onto the element
        `],
                    
        ["How to use Actions class?", `
            • Follow three steps below:
            
                1. Create an object of Actions class
                    Actions actions = new Actions(WebDriver);
                
                2. Use created object reference to execute any method that is coming from Actions class like below:
                    actions.moveToElement(element)
                    actions.doubleClick(element)
            
                3. Use perform() method to execute whatever action you called with the object reference like below:
                    actions.moveToElement(element).perform();
                    actions.doubleClick(element).perform();
            
                <b>NOTE:</b> Actions methods will not be executed if we do not use perform() method.
        `],
                    
        ["Can you tell me how to double click on a web element by using Actions class?", `
            • Follow below steps to be able to use Actions class to perform double click:
            o First create Actions instance, otherwise you cannot use Actions class methods
                Actions act = new Actions(driver);
                act.doubleClick(webElement).perform();
        `],
        
        ["What are the differences of isDisplayed(), isEnabled() and isSelected() methods in Selenium WebDriver?", `
            • All these methods are used with web elements and return true or false
            • They are mostly passed as boolean conditions to Assert.assertTrue() or Assert.assertFalse() methods
            <b>• isDisplayed()</b> method is used to assert the presence of a particular web element and it will return true if element is found, and false otherwise
            <b>• isEnabled()</b> is mostly used with buttons and it verifies if the web element is enabled or disabled
            <b>• isSelected()</b> is mostly used with radio buttons, dropdowns and checkboxes and it verifies if the web element is selected or not
        `],
        
        ["What are the key modifiers?", `
            • During automation, we are often required to press enter, control, tab, arrow keys, function keys, and other non-text keys as well from the keyboard. Selenium provides Keys enum to perform these tasks.
            
            <b>EXAMPLES</b>
                o Keys.ENTER
                o Keys.CONTROL
                o Keys.SHIFT
                o Keys.ALT
                o Keys.TAB
                o Keys.RETURN
                o Keys.ARROW_DOWN
                o Keys.ARROW_UP
                o Keys.ARROW_LEFT
                o Keys.ARROW_RIGHT
                o Keys.F5
                o Keys.DELETEandmore
        `],
        
        ["Could you please explain some of the exceptions that you faced in Selenium?", `
            <b>• NoSuchElementException</b> occurs when we attempt to locate an element that does not exist in the DOM
            <b>• TimeoutException</b> occurs when there is not enough time for a command to be completed. For Example, the element searched was not found in the specified time.
            <b>• StaleElementReferenceException</b> occurs when the web element is detached from the current DOM meaning web element loses reference. This exception usually happens when browser is refreshed.
            <b>• ElementNotInteractableException</b> occurs when an element is presented in the DOM but it is impossible to interact with it.
            <b>• ElementClickInterceptedException</b> occurs when the element receiving the actions is concealing the element which was requested to be clicked.
            <b>• NoSuchFrameException</b> occurs when we attempt to switch a frame that does not exist.
            <b>• NoAlertPresentException</b> occurs when you switch to an alert that is not presented.
            <b>• NoSuchWindowException</b> occurs if the window target to be switch does not exist.
        
            <b>NOTE:</b> There are many more Selenium exceptions you may face while doing automation but only some of them are listed above
        `],
        
        ["What are the types of waits available in Selenium? Explain implicit, explicit and fluent waits?", `
            • Waits in Selenium are needed to synchronize driver with the code
            <b>• Our code is always faster than drive</b> and this may cause throwing some exception although there is no issues with your code but it is just because your code is much faster than driver itself and page you want to automate might not be loaded
            <b>To avoid such test failures in our suites, we can use implicit, explicit, and fluent waits</b>
            • It is not suggested but Thread.sleep() method also freezes our code for certain amount of time and synchronize driver with the code
            
            <b>REMEMBER:</b> Our code must always be on the same page with the driver, otherwise we will get unexpected results and failures
        
            <b>Implicit Wait</b>
                o It is used to tell the webdriver to wait for a certain amount of time before it throws a NoSuchElementException
                o The default setting is 0. Once we set the time, the webdriver will wait for the element for that time before throwing an exception
                <b>Syntax:</b>
                driver.manage().timeouts().implicitlyWait(TimeOut, TimeUnit.SECONDS);
            
                <b>NOTE:</b> Implicit wait will wait for driver to find the located element and will continue as soon as driver finds the element but if element is not found in the given time frame, then it will throw exception
            
            <b>Explicit Wait</b>
                o It is used to tell the webdriver to wait for certain conditions (ExpectedConditions) or maximum time exceeded before throwing ElementNotVisibleException
                o It is an intelligent kind of wait, and it can be applied only for specified elements. It gives better options than implicit wait as it waits for dynamically loaded Ajax elements
                <b>Syntax:</b>
                    // Create an object of WebDriverWait class
                    WebDriverWait wait = new WebDriverWait(driver, timeout);
                
                    // Use created WebDriverWait object to define explicit wait for particular condition
                    wait.until(ExpectedConditions.visibilityOf(someElement));
                
            <b>Fluent Wait</b>
                It is used to define maximum time for the webdriver to wait for a condition, as well as the frequency with which we want to check the condition before throwing an <b>ElementNotVisibleException</b>
                o It checks for the web element at regular intervals until the object is found or timeout happens

                <b>EXAMPLE:</b> Imagine you need to locate an element and take some actions on it. However, this particular element sometimes loads in 2 seconds but sometimes it takes 30-50 seconds for it to load. In this case or in similar cases, it might be useful to use fluent wait instead of explicit wait as explicit wait will throw and exception after a certain amount of time. Fluent wait tries to find the element frequently with defined time interval until it finds it and throws exception when final timer runs out
                
                <b>Syntax:</b>
                    Wait wait = new FluentWait(driver).withTimeout(timeout, timeUnit.SECONDS)
                    .pollingEvery(timeout, timeUnit.SECONDS).ignoring(Exception.class);
            
            <b>Thread.sleep()</b>
                o It is used to pause the execution of the whole program it does not depend on any kind of condition
                o Simply, it freezes the code and not considered as a good practice to use to synchronize driver with code.
        `],

        ["How to scroll down or up using Selenium?", `
            o When we automate, some elements might be located at the bottom of the page which may not be visible, and our script may throw an unexpected exception if we try to take some actions on these invisible elements
            o In such cases, we need to scroll page down or up to avoid these unexpected exceptions
            
            <i>o Let's see 3 different scrolling ways in Selenium</i>
            
            <b>1. Using actions.moveToElement().perform() method from Actions class</b>
                o Locate the element that you want to scroll down
                o Use moveToElement(element).perform() method
                o This will page to the located element
            
            <b>2. Using actions.sendKeys(Keys.PAGE_DOWN).perform()</b>
                o This line will imitate as user is pressing PAGE_DOWN key on the keyboard
                o You can pass this line as many as you want, until you reach to the web element that you want to perform some task on
            
            <b>3. Using JavascriptExecutor</b>
                o There are different JavaScriptExecutor methods that we can use to scroll down or up
                // We need to create an instance of JavascriptExecutor first
                JavascriptExecutor js = (JavascriptExecutor) driver;
            
                // Use the following code for scrolling up
                js.executeScript("window.scrollBy(x, +y)");
                
                // Use the following code for scrolling down
                js.executeScript("window.scrollBy(x, -y)");
                
                // Use the following code for scrolling to a particular element
                js.executeScript("arguments[0].scrollIntoView(true);", element);
        `],
        
        ["Why we need synchronization in Selenium?", `
            <b>When our scripts run, it uses both Java and Selenium, and our code is always faster than WebDriver. If our code and WebDriver are not working in parallel or in sync, then we may not get expected results. So, making them work in sync or in parallel is known as synchronization</b>
            • To prevent synchronization issues, we need to use waits (implicit, explicit) to slow down the code and sync it with WebDriver speed
            
            <b>NOTE:</b> Thread.sleep() is not a proper way to use for synchronization as it pauses the code
        `],
        
        ["What are the capabilities of Selenium WebDriver?", `
            • Handling multiple frames, pop-ups, multiple browser windows and alerts
            • Page navigation
            • Advanced mouse and keyboard actions like drag & drop
            • Ajax based UI elements
            • Multi browser testing such as Chrome, IE, Firefox
            • Supporting different operating systems and programming languages
        `],
        
        ["What are the different types of drivers available in WebDriver?", `
            • FirefoxDriver
            • InternetExplorerDriver
            • ChromeDriver
            • SafariDriver
            • OperaDriver
            • AndroidDriver
            • IPhoneDriver
            • HtmlUnitDriver
        `],
        
        ["How to launch the browser using WebDriver?", `
            • The following syntaxes can be used to launch browser:
                WebDriver driver = new FirefoxDriver(); // launching Firefox browser 
                WebDriver driver = new ChromeDriver(); // launching Chrome browser 
                WebDriver driver = new InternetExplorerDriver(); // launching IE browser
        `],
        
        ["What are the different drivers supported for Mobile Testing?", `
            • AndroidDriver
            • IphoneDriver
            • OperaMobileDriver
        `],
        
        ["Which WebDriver implementation is fastest?", `
            • HtmlUnitDriver implementation is fastest
            • HtmlUnitDriver allows headless browser testing which is simply running your Selenium tests without a user interface
            • It operates as your typical browser would, but without a user interface and it is much faster compared to others
        `],
        
        ["What is HtmlUnitDriver?", `
            • HtmlUnitDriver is the fastest implementation of WebDriver
            <b>It is known as headless browser driver</b>
            • It is same as Chrome, IE, or Firefox driver, but it does not have UI so we cannot see the test execution on screen when it executes tests
            
            <b>NOTE:</b> It is not as reliable as real browsers like Chrome, Firefox or others
        `],
        
        ["What is the advantage of headless browser testing?", `
            • Headless browser is faster than other real browsers as it does not show UI and enable testers to execute test suites in short time compared to others
        `],
        
        ["Can mobile applications be tested using Selenium WebDriver?", `
            • No, Selenium cannot be used to test native mobile applications
            • However, Selenium is a web-based testing tool; therefore, it can be used to test only applications on the mobile browsers
        `],
        
        ["Can Captcha be automated with Selenium?", `
            • No, captcha and barcode reader cannot be automated, and this is one of the Selenium restrictions
            • The whole concept of Captcha is to ensure that bots and automated programs don't access sensitive information - which is why, Selenium cannot automate it.
            • The automation test engineer has to manually pass the captcha while other fields can be filled automatically
        `],
        
        ["Can Selenium handle windows-based pop ups?", `
            • No, windows-based pop ups cannot be handled with Selenium and this is one of the Selenium restrictions
            • Selenium is an automation testing tool which supports only web application testing. Therefore, windows pop ups cannot be handled using Selenium
        `],
        
        ["How can we handle windows-based pop up?", `
            • Selenium is an automation testing tool which supports only web application testing, that means, it doesn't support testing of windows-based applications
            • However, this problem can be overcome
            • There are several third-party tools available for handling window-based pop-ups along with the Selenium like AutoIT, Robot class etc.
        `],
        
        ["What are the different methods to refresh a web page using Selenium?", `
            • There are multiple ways of refreshing a page using Selenium
            1. Using driver.navigate command
            <i>driver.navigate().refresh();</i>
            
            2. Using driver.getCurrentUrl() with driver.get() command
            <i>driver.get(driver.getCurrentUrl());</i>
            
            3. Using driver.getCurrentUrl() with driver.navigate() command
            <i>driver.navigate().to(driver.getCurrentUrl());</i>
            
            4. Pressing F5 key on any textbox using sendKeys command
            <i>driver.findElement(By textboxLocator).sendKeys(Keys.F5);</i>
            
            5. Passing ASCII value of the F5 key, i.e., "\uE035" using the sendKeys command driver.
            <i>findElement(By textboxLocator).sendKeys("\uE035");</i>
        `],
        
        ["How to assert text of a web element using Selenium?", `
            1. Locate web element
            <i>WebElement element = driver.findElement(By.id(“ElementID”));</i>
            
            2. Get text of the element by using getText() method and store it
            <i>String actualText = element.getText();</i>
            
            3. Assert text with expected result
            <i>Assert.assertEquals(“Expected Text”, actualText);</i>
            
            <b>- PROPER VERSION</b>
            <i>WebElement element = driver.findElement(By.id(“ElementID”)); // might be in a Page class </i>
            <i>Assert.assertEquals(“Expected Text”, element.getText()); // might be in a method or step</i>
        `],
        
        ["What does the switchTo() command do?", `
            • switchTo() command is used to switch between windows, frames or pop-ups within the application
        `],
        
        ["How to switch between frames using Selenium?", `
            • To switch between frames driver.switchTo().frame() method can be used
            
            • It is possible switch between frames in 3 way:
                <i>o Locate inner iFrame element and use - driver.switchTo().frame(innerIframe); </i>
                <i>o Switch using index - driver.switchTo().frame(index);</i>
                <i>o Switch by name or id of iFrame - driver.switchTo().frame("nameorid");</i>
        `],
        
        ["How to assert the title of a web page using Selenium?", `
            1. Get title by using getTitle() method and store it in a String variable
                <i>String actualTitle = driver.getTitle();</i>
            
            2. Assert stored actual title with expected result
                <i>Assert.assertEquals(“Expected title”, actualTitle);</i>
            
            <b>SHORT - PROPER VERSION</b>
                Assert.assertEquals(“Expected title”, driver.getTitle());
        `],
        
        ["How to type in a textbox using Selenium?", `
            1. Locate web element
                <i>WebElement element = driver.findElement(By.id(“ElementID”)); // might be in a Page class</i>

            2. Type text by using sendKeys() method
                <i>element.sendKeys(“keys to send”); // might be in a method or step</i>
        `],
        
        ["Is there a way to type in a textbox without using sendKeys()?", `
            • Yes. Text can be entered into a textbox using JavaScriptExecutor
                <i>JavascriptExecutor jse = (JavascriptExecutor) driver; </i>
                <i>jse.executeScript("document.getElementById('elementId').value=“keys to send");</i>
        `],
        
        ["How to click on a hyper link using linkText in Selenium?", `
            1. Locate hyperlink web element with linkText locator
                <i>WebElement element = driver.findElement(By.linkText(“text”)); // might be in a Page class</i>

            2. Click the element
                <i>element.click(); // might be in a method or step</i>
            
            <b>NOTE:</b> The link above can also be located by using partialLinkText locator
                <i>driver.findElement(By.partialLinkText(“partial text”)); // might be in a Page class</i>
        `],
        
        ["How to perform double click using Selenium?", `
            We can perform double click by using Actions class:
            1. Instantiate an Actions object
                <i>Actions actions = new Actions(driver); // This will take driver as a parameter in the constructor</i>
            
            2. Assume that the element that you will double click is located before
                <i>WebElement element = driver.findElement(By.id("elementId")); // might be in a Page class</i>
            
            3. Perform Actions class doubleClick() method to double click on the located element
                <i>actions.doubleClick(element).perform(); // might be in a method or step</i>
        `],
        
        ["How to mouse hover on a web element using Selenium?", `
            WebDriver offers a wide range of interaction utilities that the user can exploit to automate mouse and keyboard events using Actions class
            1. Instantiate an Actions object
                <i>Actions actions = new Actions(driver); // This will take driver as a parameter in the constructor</i>
            
            2. Assume that the element that you will hover over is located before
                <i>WebElement element = driver.findElement(By.id("elementId")); // might be in a Page class</i>
            
            3. Perform Actions class moveToElement() method to move cursor to the located element
                <i>actions.moveToElement(element).perform(); // might be in a method or step</i>
        `],
        
        ["How to handle tables on web pages using Selenium?", `
            • Web tables are like normal tables where the data is presented in a structured form using rows and columns
            • The only difference is that they are displayed on the web with the help of HTML code
            • 'table' is the HTML tag that is used to define a web table. While <th> is used for defining the header of the table, <tr> and <td> tags are used for defining rows and columns respectively for the web table
            
            • There are two types of HTML tables published on the web
                <b>1. Static tables</b> - Data is static meaning number of rows and columns are fixed
                <b>2. Dynamic tables</b> - Data is dynamic meaning number of rows and columns are not fixed
                
                <b>NOTE:</b> Handling static table is easy but handling dynamic tables in Selenium is a little bit difficult as rows and columns are not constant
        
            <b>Examples of writing a web table using HTML:</b>
                • Both static and dynamic tables can be handled by locating elements
                • Like any other web element, for performing any operation on the web table we have to inspect the table data and locate the elements
                • XPath is very commonly used with tables as it allows to move from parent to child and child to parent
                • CSSSelector can also be used although it is not as flexible as XPath
                • It is very common to create some utility methods to handle tables in frameworks
                    o You may create a method that takes a table web element as a parameter and returns all table column headers as a list.
                    o You may create another method that takes a table and returns all the data, or another method that returns all data in a specific row.
        `],
        
        ["How to handle file download/upload using Selenium?", `
            <b>• Download</b>
                o Selenium itself cannot handle file downloads
                o We can locate download button for a file on webdriver and can download the file by clicking located download button. However, the scope of Selenium is restricted with driver, and it cannot be used to check if file is actually downloaded or it cannot be used to verify the content of the downloaded file
                o To check if file downloaded or to verify the content of the file, third part tools like Robot and AutoIT can be used.
                o Just to check if file downloaded, Java can be used as well by using File class and passing the path of the file.
            
            <b>• Upload</b>
                o Selenium can handle file uploading
                o Steps
                    § We need to locate 2 elements usually. First is input field to pass path of the file we want to upload and second is upload button
                    § After locating these 2 elements, we will pass file path to input field by using sendKeys(path) method and click on upload button by click() method
        `],
            
        ["What is the difference between assert and verify commands?", `
            • Assert command checks whether the given condition is true or false.
                o Let's say we assert whether the given element is present on the webpage or not
                o If the condition is true then the program control will execute the next test step but if the condition is false, the execution would stop immediately, and test would throw an exception
                o After exception is thrown, flow will not continue with current test and it may continue with next test if present
                o There are 2 types of asserts known as <b>hard</b> and <b>soft</b> asserts
            
            • Verify command also checks whether the given condition is true or false and used to check non-critical functions of an application
                o Irrespective of the condition being true or false, the program execution will not stop, and exception is not thrown
                o Any failure during verification would not stop the execution and all the test steps would be executed regardless of test being failed at some steps
        `],
            
        ["What is the difference between hard assert and soft assert?" , `
            • <b>Hard</b> assert throws an AssertException immediately when an assert statement fails, and test suite continues with next @Test.
                o If Assert steps fails, execution of test stops at that point and will go to next test if present!
            
            • <b>Soft</b> assert collects errors during @Test
                o SoftAssert does not throw an exception when an assert fails and would continue with the next step after the assert statement.
                o If soft assert step fails, it will report a fail but will continue execution.
        `],
        
        ["What is desired capability? Why it is important?", `
            • The desired capability is a series of key/value pairs that stores the browser properties like browser name, browser version, the path of the browser driver in the system, etc. to determine the behavior of the browser at run time
            • It can be used to configure the driver instance of Selenium WebDriver when you want to run the test cases on a different browser with different operating systems and versions
        `],
        
        ["What is an object repository?", `
            • An object repository is page that you create to store your web elements with their locators
            • It allows testers to accumulate web elements of the application along with their locator values, in one or more centralized locations as restricted to hard coding them within the test scripts
            • It improves code readability
            • Elements stored in an object repository can be used for multiple of test scripts
            • It provides reusability of code
            • It makes it easy to maintain element locators when there is an update for locators
        `],
        
        ["What do you store inside the object repository (page classes)?", `
            • First of all, it is proper to create separate page classes for each page in the application
            • Tester can centralize (store) all the web elements related to the particular page and methods that might be useful to test the page
        
            <b>Example of an object repository:</b>
            public class HomePage(){
                //Constructor that initialize web elements using PageFactory class and initElements() method 
                public HomePage(){
                    PageFactory.initElements(driverInstance, this));
                }

                //Store all web elements related to HomePage of the application using @FindBy() annotation - Example
                @FindBy(id = “webElementId”)
                public WebElement elementName;

                //Create useful - reusable methods that can be used for testing HomePage - Example
                public void validateUserIsOnHomePage(){
                //Method body - code to verify user is on HomePage
            }
        `],
    ])
}