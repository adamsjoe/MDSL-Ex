# Calero-MDSL Excercise

## Installation instructions
Needs:
Java JDK (correctly setup with JAVA_HOME configured and added to the path as %JAVA_HOME%\bin)

nodejs (https://nodejs.org/en/)

VSCode (Not required, but recomended due to multiple command prompts needed)

There has been a security update (on windows) which is preventing scripts running - if using visual studio code, then follow the instructions below to avoid getting any errors:

Open VS code:

File -> Preferences -> Settings and in the search bar write "automation".
After that, by looking your operating system enter "edit in settings.json".  (which will be windows)
Finally, add the following b/n the braces:
"terminal.integrated.shellArgs.windows": ["-ExecutionPolicy", "Bypass"]

### To run
install all pre-reqs with **npm install** from the root

Open one terminal and run **node_modules\\.bin\\webdriver-manager update**

Once the update has completed, then run **node_modules\\.bin\\webdriver-manager start** 
**ensure that you see 'INFO [SeleniumServer.boot] - Selenium Server is up and running on port 4444' in the terminal**

Now open a new terminal and then run **npx wdio wdio.conf.js**

(as a side note, my way of working is shown in the image - for reference)

To run a suite (defined in the wdio.config.js file)
**npx wdio wdio.conf.js --suite <suiteName>**

### To generate JSDoc documenation

**.\node_modules\\.bin\jsdoc -c .\jsdoc.json**

The resulting files will appear in the "jsdoc" folder

## To generate a report
**node_modules\\.bin\\allure generate --clean**
This will generate the report into allure-report

Clean out allure-results if you want a clean report (with nothing from previous runs added.)

## Notes

### Sample Report
In the folder "sample-allure-report" there is an output from the allure report.

### JSDocs
These have been generated and are present in the jsdoc folder.

## Final Thought
There are a number of things I would improve if this were production.  Firstly, I would like proper identifiers added to the search box on the table page.  While I have been able to interact with this, it's not a particularly good way of doing it.

On the same page in both tests, the code to interact with the table is messy.  Again, some identifiers on the table could make the code a lot better (especially the one with the age where I had to use a nasty count and reset - this is not production ready, but just an example of how to do it.)