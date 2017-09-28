# WebdriverIO

## Installation
1. create a folder directory
2. use a command shell and go to the created directory
3. install webdriverio (npm install --save-dev webdriverio)
4. install selenium standalone server (npm install -g selenium-standalone)
5. install selenium webdrivers (selenium-standalone install)
6. start selenium standalone server (selenium-standalone start)
7. install mocha library (npm install -g mocha)
8. install chai library (npm install -g chai)
9. type wdio config (this will setup wdio config file)
10. type npm test (this will test your test suite)

## Overview
We will test a landing page using Selenium WebdriverIO:

1. Making sure images and graphics are all visible
2. Making sure prices, phone numbers are formmatted correctly (using regex)
3. Making sure form is validated
4. Making sure links direct correctly
5. Making sure text is correct / spelling is correct
6. Making sure Javascript interactions are working 
7. Making sure CSS is consistent across similar elements


## Results from Testing
1. Incomplete resources such as page id elements are missing which can affect test automation
2. When making the window smaller, part of the nav bar or menu are missing. This could be a design flaw. 
3. Some of the images are hidden files. In order to test if the images are visible we have to integrate 
   visual regression testing which require another plugin to test for these images. 

