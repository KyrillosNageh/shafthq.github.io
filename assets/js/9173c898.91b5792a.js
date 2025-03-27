"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[873],{3808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"Keywords/GUI/Element_Actions","title":"Element Actions","description":"Type","source":"@site/docs/Keywords/GUI/Element_Actions.md","sourceDirName":"Keywords/GUI","slug":"/Keywords/GUI/Element_Actions","permalink":"/docs/Keywords/GUI/Element_Actions","draft":false,"unlisted":false,"editUrl":"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Keywords/GUI/Element_Actions.md","tags":[],"version":"current","frontMatter":{"id":"Element_Actions","title":"Element Actions","sidebar_label":"Element"},"sidebar":"docs","previous":{"title":"Browser","permalink":"/docs/Keywords/GUI/Browser_Actions"},"next":{"title":"Element Validations","permalink":"/docs/Keywords/GUI/Element_Validations"}}');var r=n(4848),i=n(8453);const a={id:"Element_Actions",title:"Element Actions",sidebar_label:"Element"},o=void 0,s={},c=[{value:"Type",id:"type",level:3},{value:"TypeAppend",id:"typeappend",level:3},{value:"TypeSecure",id:"typesecure",level:3},{value:"TypeFileLocationForUpload",id:"typefilelocationforupload",level:3},{value:"Click on an Element",id:"click-on-an-element",level:3},{value:"Click And Hold",id:"click-and-hold",level:3},{value:"Double Click\u200b",id:"double-click",level:3},{value:"Hover",id:"hover",level:3},{value:"Hover and click",id:"hover-and-click",level:3},{value:"Scroll To Element",id:"scroll-to-element",level:3},{value:"Capture Screenshot",id:"capture-screenshot",level:3},{value:"Drag and drop",id:"drag-and-drop",level:3},{value:"Get Tag name",id:"get-tag-name",level:3},{value:"Get the value of an element attribute",id:"get-the-value-of-an-element-attribute",level:3},{value:"Get the value of a CSS property",id:"get-the-value-of-a-css-property",level:3},{value:"Get context handle\\s",id:"get-context-handles",level:3},{value:"Switching focus to a different context",id:"switching-focus-to-a-different-context",level:3},{value:"Get window handle\\s",id:"get-window-handles",level:3},{value:"Switching focus to a different window",id:"switching-focus-to-a-different-window",level:3},{value:"Handling IFrames",id:"handling-iframes",level:3},{value:"Insert text into a text field",id:"insert-text-into-a-text-field",level:3},{value:"Perform Clipboard action",id:"perform-clipboard-action",level:3},{value:"Sample Code Snippet",id:"sample-code-snippet",level:2},{value:"Get elements count",id:"get-elements-count",level:3},{value:"Sample Code Snippet",id:"sample-code-snippet-1",level:2},{value:"Get selected option from a drop down",id:"get-selected-option-from-a-drop-down",level:3},{value:"Select an option from a drop down list",id:"select-an-option-from-a-drop-down-list",level:3},{value:"Sample Code Snippet",id:"sample-code-snippet-2",level:2},{value:"Get size of an element",id:"get-size-of-an-element",level:3},{value:"Get elements text",id:"get-elements-text",level:3},{value:"Get state of an element",id:"get-state-of-an-element",level:3},{value:"Getting Table Data",id:"getting-table-data",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\n//a By object is used to store the locator to your element\nprivate By elementLocator = By.id("username_textbox");\n//click on target element\ndriver.element().type(elementLocator, "query");\n'})}),"\n",(0,r.jsx)(t.h3,{id:"typeappend",children:"TypeAppend"}),"\n",(0,r.jsx)(t.p,{children:"this method used for typing without clearing the texbox first"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\n//a By object is used to store the locator to your element\nprivate By textBoxLocator = By.id("username_textbox");\n// type to empty textbox\ndriver.element().type(textBoxLocator, "Shaft");\n// continue typing without erasing what was typed in the same field \ndriver.element().typeAppend(textBoxLocator , " engine");\n'})}),"\n",(0,r.jsx)(t.h3,{id:"typesecure",children:"TypeSecure"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\n//a By object is used to store the locator to your element\nprivate By elementLocator = By.id("username_textbox");\n//click on target element\ndriver.element().typeSecure(elementLocator, "query");\n'})}),"\n",(0,r.jsx)(t.h3,{id:"typefilelocationforupload",children:"TypeFileLocationForUpload"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'//locator of browse button or choose file button  \n\t By chooseFileButtonLocator = By.xpath("//form//input[@type=\'file\']");\n//typeFileLocationForUplaod method takes element locator and file path \t \n\t driver.element().typeFileLocationForUpload(chooseFileButtonLocator, "src/test/resources/testDataFiles/testUpload.txt);\n\t \n }\n\n'})}),"\n",(0,r.jsx)(t.h3,{id:"click-on-an-element",children:"Click on an Element"}),"\n",(0,r.jsxs)(t.p,{children:["In order to interact with elements appearing on web page you'll first need to locate the element using one of WebDriver's locating strategies(",(0,r.jsx)(t.a,{href:"https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/By.html",children:"By methods"}),") like ID, Class Name,\nXPath, CSS Selectors, link Text, Partial link text, Name, or Tag name."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\n//a By object is used to store the locator to your element\nprivate By elementLocator = By.id("sign_in_btn");\n//click on target element\ndriver.element().click(elementLocator);\n'})}),"\n",(0,r.jsx)(t.p,{children:"The method click will wait for your target element to be interactable and then attempts to click on it using Selenium WebDriver, if that didn't work it will\nattempt to click using JavaScript"}),"\n",(0,r.jsx)(t.h3,{id:"click-and-hold",children:"Click And Hold"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"driver.element().clickAndHold(elementLocator);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Waits for the element to be clickable, and then clicks and holds it."}),"\n",(0,r.jsx)(t.h3,{id:"double-click",children:"Double Click\u200b"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\n//store the locator to your element\nBy elementLocator = By.className("double_click_btn");\n//Double click target element\ndriver.element().doubleClick(elementLocator);\n'})}),"\n",(0,r.jsx)(t.h3,{id:"hover",children:"Hover"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import org.openqa.selenium.By;\n//The locator to your element\nBy elementLocator = By.tagName("span");\n//Hover over target element\ndriver.element().hover(elementLocator);\n'})}),"\n",(0,r.jsx)(t.h3,{id:"hover-and-click",children:"Hover and click"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Hover over an element to show hover menue then click on one of the displayed options"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'By clickable = By.xpath("//a[contains(text(),\'Video Games \') ] ");\nBy hoverItem = By.linkText("Popular Toys");\n\ndriver.element().hoverAndClick(hoverItem, clickable);\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"for multi-level hover menus You need to hover on the category, then hover on a subcategory, and so on until you finally click on the clickable item."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public class HoverAndClickDemo {\n\tList<By> hoverLocators =new ArrayList<By>();\n\tBy clickable = By.linkText("Car");\n\n\t@Test\n\tpublic void demo() {\n\t\thoverLocators.add(By.linkText("Popular Toys"));\n\t\thoverLocators.add(By.xpath("//a[contains(text(),\'Video Games \') ] "));\n\n  \t\tdriver = new SHAFT.GUI.WebDriver();\n\t\tdriver.browser().navigateToURL("https://phppot.com/demo/multilevel-dropdown-menu-with-pure-css/");\n\t\tdriver.element().hoverAndClick(hoverLocators, clickable);\n\t}\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://live.staticflickr.com/65535/51627720576_1bd0cf9c6f_z.jpg",alt:"hoverAndClick"})," ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(t.h3,{id:"scroll-to-element",children:"Scroll To Element"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"By elementLocator = By.xpath(\"//a[@href='https://twitter.com/saucelabs']\");\n\ndriver.element().scrollToElement(elementLocator);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"capture-screenshot",children:"Capture Screenshot"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"By elementLocator = By.xpath(\"//a[@href='https://twitter.com/saucelabs']\");\n\ndriver.element().captureScreenshot(elementLocator);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"drag-and-drop",children:"Drag and drop"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Drag an element into a target element"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'By sourceElement = By.id("draggable");    // Locator to the element you want to drag\nBy targetElement = By.id("destination");  // Locator to the destination element\n\ndriver.element().dragAndDrop(sourceElement,targetElement);\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Drag an element to a specified position"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'By sourceElement = By.id("draggable");    // Locator to the element you want to drag\nint xPos= 500;\nint yPos= 500;\n\ndriver.element().dragAndDrop(sourceElement,xPos,yPos);\n'})}),"\n",(0,r.jsx)(t.h3,{id:"get-tag-name",children:"Get Tag name"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"String TagName = driver.element().getTagName(ElementLocator);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Retrieves tag name from the target element and returns it as a string value."}),"\n",(0,r.jsx)(t.h3,{id:"get-the-value-of-an-element-attribute",children:"Get the value of an element attribute"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'//The locator to your element\nBy googleSearchBox = By.cssSelector(".gLFyf.gsfi");\n//get the value of the \'name\' attribute\nString attributeValue = driver.element().getAttribute(googleSearchBox, "name");\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Returns the value of the given attribute as a String,you will allso be able to see something like this\n",(0,r.jsx)(t.img,{src:"https://live.staticflickr.com/65535/51492494310_076bca3fdc.jpg",alt:"report"})," ",(0,r.jsx)("br",{}),"\nin the automatically generated Allure report, for more on that see ",(0,r.jsx)(t.a,{href:"#",children:"Reporting"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"get-the-value-of-a-css-property",children:"Get the value of a CSS property"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'String propertyValue = driver.element().getCSSProperty\u200b(elementLocator, "width");\n'})}),"\n",(0,r.jsx)(t.h3,{id:"get-context-handles",children:"Get context handle\\s"}),"\n",(0,r.jsx)(t.p,{children:"you need to get the context handle in order to be able to switch back to it"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Return the handle for currently active context."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"String currentContext = driver.element().getContext();\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Return a list of unique handles for all the currently open contexts."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"driver.element().getContextHandles();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"switching-focus-to-a-different-context",children:"Switching focus to a different context"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"driver.element().setContext(currentContext);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"get-window-handles",children:"Get window handle\\s"}),"\n",(0,r.jsx)(t.p,{children:"you need to get the window handle in order to be able to switch back to it"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Return the handle for currently active window."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"String currentWindow = driver.element().getWindowHandle();\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Return a list of unique handles for all the currently open windows."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"driver.element().getWindowHandles();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"switching-focus-to-a-different-window",children:"Switching focus to a different window"}),"\n",(0,r.jsx)(t.p,{children:"switch driver's focus to a different window using its name or handle"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"driver.element().switchToWindow();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"handling-iframes",children:"Handling IFrames"}),"\n",(0,r.jsx)(t.p,{children:"In order to interact with elements within IFrames you neeed to first change driver's focus to the IFrame, once done you will need to switch back to the original content"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Switching focus to an IFrame"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'By iFrameLocator = By.id("ifr_id");\ndriver.element().switchToIframe(iFrameLocator );\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"switching back to default content"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"driver.element().switchToDefaultContent();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"insert-text-into-a-text-field",children:"Insert text into a text field"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"clear text inside a text field (if any), and insert new text value"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'driver.element().type(textFieldLocator, "any text you would like to type");\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Append to existing text"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'driver.element().typeAppend(textFieldLocator, "text added to the end");\n'})}),"\n",(0,r.jsx)(t.h3,{id:"perform-clipboard-action",children:"Perform Clipboard action"}),"\n",(0,r.jsx)(t.p,{children:"copy,cut or paste text"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'driver.element().clipboardActions(textFieldLocator, "copy");\n'})}),"\n",(0,r.jsx)(t.p,{children:'supports the following actions "copy", "paste", "cut", "select all", "unselect"'}),"\n",(0,r.jsx)(t.h2,{id:"sample-code-snippet",children:"Sample Code Snippet"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\npublic class TypingDemo {\n\tBy textField = By.id("tinymce");\n\tBy textIFrame = By.id("mce_0_ifr");\n\n\t@Test\n\tvoid type() {\n  \t\tdriver = new SHAFT.GUI.WebDriver();\n\t\tdriver.browser().navigateToURL("https://the-internet.herokuapp.com/tinymce");\n\t\t// switch focus to IFrame containing the text field\n\t\tdriver.element().switchToIframe(textIFrame );\n\t\t//append text to the end\n\t\tdriver.element().typeAppend(textField, "this is added text");\n\t\t// copy the whole paragraph\n\t\tdriver.element().clipboardActions(textField,"select all");\n\t\tdriver.element().clipboardActions(textField, "copy");\n\t\t//replace original text using type\n\t\tdriver.element().type(textField, "new text that overrides old content , ");\n\t\t//paste previously copied paragraph\n\t\tdriver.element().clipboardActions(textField, "paste");\n\n\t}\n}\n\n'})}),"\n",(0,r.jsx)(t.h3,{id:"get-elements-count",children:"Get elements count"}),"\n",(0,r.jsx)(t.p,{children:"to find the number of elements matching a specific locator"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"int numOfElements = driver.element().getElementsCount(locatorToMultipleElements);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"sample-code-snippet-1",children:"Sample Code Snippet"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\npublic class Demo {\n\tprivate By searchBox = By.name("q");\n\tprivate By results = By.cssSelector("h3.LC20lb");\n\n\t@Test\n\tpublic void method() {\n\t\tdriver = new SHAFT.GUI.WebDriver();\n\t\tdriver.browser().navigateToURL("https://www.google.com");\n\t\tdriver.element().type(searchBox, "SHAFT_ENGINE");\n\t\tdriver.element().keyPress(searchBox, "ENTER");\n\t\tint num = driver.element().getElementsCount(results);\n\t\tSystem.out.println(num);\n\n\t}\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"get-selected-option-from-a-drop-down",children:"Get selected option from a drop down"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'//Locator to the Drop Down element\nBy dropDown = By.id("dropdown");\n//Retrieve selected text and store it in a string variable\nString SelectedItem = driver.element().getAttribute(googleSearchBox, "name");\n'})}),"\n",(0,r.jsx)(t.p,{children:"Retrieves the selected text from the target drop-down list element and returns it as a string value."}),"\n",(0,r.jsx)(t.h3,{id:"select-an-option-from-a-drop-down-list",children:"Select an option from a drop down list"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'//Locator to the Drop Down element\nBy dropDown = By.id("dropdown");\n//Retrieve selected text and store it in a string variable\ndriver.element().select(dropDown, "Option 1");\n'})}),"\n",(0,r.jsx)(t.h2,{id:"sample-code-snippet-2",children:"Sample Code Snippet"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\n\npublic class DropDownDemo {\n\n\tprivate By dropDown = By.id("dropdown");\n\n\t@Test\n\tpublic void method() {\n\t\tdriver = new SHAFT.GUI.WebDriver();\n\t\tdriver.browser().navigateToURL(driver, "https://the-internet.herokuapp.com/dropdown");\n\t\tdriver.element().getSelectedText( dropDown);\n\t\tdriver.element().select(dropDown, "Option 1");\n\t\tdriver.element().getSelectedText(dropDown);\n\n\t}\n\n}\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["To verify the results you can use traditional String variables, check SHAFT results in the Allure report (as shown in the image below), or\nyou can use other ",(0,r.jsx)(t.a,{href:"#",children:"verification"})," techniques.\n",(0,r.jsx)(t.img,{src:"https://live.staticflickr.com/65535/51492098708_dd5f557495_z.jpg",alt:"report_2"})," ",(0,r.jsx)("br",{})]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"get-size-of-an-element",children:"Get size of an element"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"String elementSize = driver.element().getSize(TargetElementLocator);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Retrieves element size from the target element and returns it as a string value."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["An alternative to using ",(0,r.jsx)(t.a,{href:"#get-the-value-of-a-css-property",children:"getCSSProperty\u200b"})," to get width and height values separately"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"get-elements-text",children:"Get elements text"}),"\n",(0,r.jsx)(t.p,{children:"Retrieves text from the target text field and returns it as a string value."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"String text = driver.element().getText(textBox);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"get-state-of-an-element",children:"Get state of an element"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Check if an element is clickable"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'public class DynamicControlsDemo {\n\tBy textField=By.xpath("//form[@id=\'input-example\']/input");\n\tBy changeState=By.xpath("//form[@id=\'input-example\']/button");\n\n\t@Test\n\tpublic void alternate() {\n\t\tdriver = new SHAFT.GUI.WebDriver();\n\t\tdriver.browser().navigateToURL(driver, "https://the-internet.herokuapp.com/dynamic_controls");\n\t\t//--1-- check that initially the text box is not clickable\n\t\tReportManager.log(String.valueOf(ElementActions.isElementClickable(driver, textField)));\n\t\t//--2-- press the button to enable the text box\n\t\tdriver.element().click(changeState);\n\t\t//--3-- check again whether the text box is clickable\n\t\tReportManager.log(String.valueOf(ElementActions.isElementClickable(driver, textField)));\n\t\t//--4-- attempt to click on the text box\n\t\tdriver.element().click(textField);\n\t\t//--5-- finally verify the state of the check box\n\t\tReportManager.log(String.valueOf(ElementActions.isElementClickable(driver, textField)));\n\t\tdriver.element().type( textField, "SHAFT is awesome !");\n\t}\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{src:"https://live.staticflickr.com/65535/51628756225_c75d0b22c3_z.jpg",alt:"clickable"})," ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.p,{children:["The text field is disabled by default,directly after clicking the enable button the isElementClickable method still returns false because the switching takes some time, ",(0,r.jsx)("b",{children:"the click method waits for target element to be clickable"})," and places the cursor inside the text field, by then the text field is naturally clicable as shown in the previous image captured from the Allure report."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Check if an element is displayed"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"System.out.println(driver.element().isElementDisplayed(elementLocator));\n"})}),"\n",(0,r.jsx)(t.p,{children:"returns a boolean indicating whether the element is displayed"}),"\n",(0,r.jsx)(t.h3,{id:"getting-table-data",children:"Getting Table Data"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Extracts the data of a table's rows into a List of Map Objects"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"List<Map<String,String>> tableRowsData = driver.element().getTableRowsData(tableLocator);\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["the key of each Map objects represents the label of each column which is represented in the ",(0,r.jsx)("b",{children:"th"})," tag in ",(0,r.jsx)("b",{children:"thead"})," tag in a table"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)("b",{children:"Note"})," that this will only work with standard html tables and may not get the correct result if the table does not follow the standard html table:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<table>\n    <thead>\n    <tr>\n    <th>col1</th>\n    <th>col2</th>\n    <th>col3</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr><td>a</td><td>b</td><td>c</td></tr>\n    <tr><td>x</td><td>y</td><td>z</td></tr>\n    </tbody>\n</table>\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using getTableRowsData on the table above will return the following List:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'[\n  {"col1":"a", "col2":"b", "col3":"c"}, \n  {"col1":"x", "col2":"y", "col3":"z"}\n]\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var l=n(6540);const r={},i=l.createContext(r);function a(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);