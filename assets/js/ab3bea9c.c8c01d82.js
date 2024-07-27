"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[7168],{8788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(5893),i=t(1151);const a={id:"Did_You_Know",title:"Did you know",sidebar_label:"Did you know"},r=void 0,s={id:"Keywords/GUI/Did_You_Know",title:"Did you know",description:"Native selenium WebDriver",source:"@site/docs/Keywords/GUI/Did_You_Know.md",sourceDirName:"Keywords/GUI",slug:"/Keywords/GUI/Did_You_Know",permalink:"/docs/Keywords/GUI/Did_You_Know",draft:!1,unlisted:!1,editUrl:"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Keywords/GUI/Did_You_Know.md",tags:[],version:"current",frontMatter:{id:"Did_You_Know",title:"Did you know",sidebar_label:"Did you know"}},l={},d=[{value:"Native selenium WebDriver",id:"native-selenium-webdriver",level:2},{value:"Custom Capabilities",id:"custom-capabilities",level:2},{value:"SHAFT Locator Builder",id:"shaft-locator-builder",level:2},{value:"Example",id:"example",level:4},{value:"Shadow Dom Locator Builder",id:"shadow-dom-locator-builder",level:2},{value:"Example",id:"example-1",level:4},{value:"Using Cookies in Your Tests",id:"using-cookies-in-your-tests",level:2},{value:"Example",id:"example-2",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"native-selenium-webdriver",children:"Native selenium WebDriver"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Did you know that you can use native selenium webdriver with SHAFT whenever you need it"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"driver = new SHAFT.GUI.WebDriver();  \nnativeDriver = driver.getDriver() ; \n"})}),"\n",(0,o.jsx)(n.p,{children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'driver = new SHAFT.GUI.WebDriver();  \nnativeDriver = driver.getDriver() ;\nnativeDriver.findElement(By.id("lname"));\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"custom-capabilities",children:"Custom Capabilities"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Did you know that you can use your own custom capabilities with SHAFT"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"driver = new SHAFT.GUI.WebDriver(BrowserType, customOptions);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'ChromeOptions options = new ChromeOptions();\n\t\toptions.addArguments("--remote-allow-origins=*");\n\t\tdriver = new SHAFT.GUI.WebDriver(DriverType.CHROME , options);\n'})}),"\n",(0,o.jsx)(n.h2,{id:"shaft-locator-builder",children:"SHAFT Locator Builder"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"welcome to the new era of locating elements , with SHAFT Locator Builder you can locate element as if you were writing a story , you don't need to worry about xpath or css selector anymore\nyou can use it in multiple ways as below ,"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'By locator = SHAFT.GUI.Locator.hasTagName("String value of desired Tag name").build();\nBy locator = SHAFT.GUI.Locator.hasAnyTagName().hasAttribute("attribute name").build();\nBy locator = SHAFT.GUI.Locator.hasAnyTagName().hasAttribute("attribute name" , "string value of the attribute").build();\n'})}),"\n",(0,o.jsx)(n.p,{children:"you can discover more options like containsText , containsId , containsClass"}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["below element has ",(0,o.jsx)(n.strong,{children:"tag name"}),' "Button" , and has ',(0,o.jsx)(n.strong,{children:"attribute"}),' "data-test" and ',(0,o.jsx)(n.strong,{children:"attribute value"}),' is "add-to-cart-sauce-labs-backpack"']}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/ShaftHQ/shafthq.github.io/assets/65794900/a73f1e68-2476-4367-abbf-637b303089ac",alt:"Screenshot 2023-05-22 231141"})}),"\n",(0,o.jsx)(n.p,{children:"using SHAFT Locator Builder you can locate this element like below"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'By buttonLocator = SHAFT.GUI.Locator.hasTagName("button").hasAttribute("test-data" , "add-to-cart-sauce-labs-backpack").build();\n'})}),"\n",(0,o.jsxs)(n.p,{children:["for more examples visit ",(0,o.jsx)(n.a,{href:"https://github.com/ShaftHQ/SHAFT_ENGINE/blob/main/src/test/java/testPackage/locator/LocatorBuilderTest.java",children:"LocatorBuilderTest"})," on Github."]}),"\n",(0,o.jsx)(n.h2,{id:"shadow-dom-locator-builder",children:"Shadow Dom Locator Builder"}),"\n",(0,o.jsxs)(n.p,{children:["an advanced application and advantage of ",(0,o.jsx)(n.a,{href:"/docs/Keywords/GUI/Did_You_Know#shaft-locator-builder",children:"SHAFT Locator Builder "})," is locating elements inside shadow dom."]}),"\n",(0,o.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/ShaftHQ/shafthq.github.io/assets/65794900/1d1fb006-0c35-4613-b0a6-b42a391b5bc4",alt:"Screenshot 2023-05-23 235203"})}),"\n",(0,o.jsx)(n.p,{children:'to locate the element with tagName "a" inside the nested shadow root you can follow the below code :'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:' public void shadowDomLocatorTest() {\n driver = new SHAFT.GUI.WebDriver();\n By shadowHost = SHAFT.GUI.Locator.hasTagName("shop-app").build();\n By shadowElement = SHAFT.GUI.Locator.hasTagName("a")\n                                     .hasAttribute("href", "/list/mens_outerwear")\n                                     .insideShadowDom(shadowHost)\n\t\t\t\t     .build();    \ndriver.browser().navigateToURL("https://shop.polymer-project.org/");        \ndriver.element().click(shadowElement);\n}\t\t    \n'})}),"\n",(0,o.jsxs)(n.p,{children:["for more examples visit ",(0,o.jsx)(n.a,{href:"https://github.com/ShaftHQ/SHAFT_ENGINE/blob/main/src/test/java/testPackage/locator/ShadowDomTest.java",children:"ShadowDomTest"})," on Github."]}),"\n",(0,o.jsx)(n.h2,{id:"using-cookies-in-your-tests",children:"Using Cookies in Your Tests"}),"\n",(0,o.jsx)(n.p,{children:"You can manage cookies in your tests to maintain session state. Below is an example that demonstrates how to get a cookie value after login and reuse it in another session."}),"\n",(0,o.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.openqa.selenium.By;\nimport org.testng.annotations.BeforeMethod;\nimport org.testng.annotations.Test;\n\npublic class CookieExample {\n    private SHAFT.GUI.WebDriver driver;\n    private String cookieValue;\n\n    @BeforeMethod\n    public void setup() {\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL("https://demo.nopcommerce.com/");\n        driver.element().click(By.xpath("//*[@class=\'ico-login\']"));\n        driver.element().type(By.id("Email"), "kn@test.com");\n        driver.element().type(By.id("Password"), "123456");\n        driver.element().click(By.xpath("//*[@class=\'button-1 login-button\']"));\n       \n        cookieValue = driver.browser().getCookieValue(".Nop.Authentication");\n        \n        driver.quit();\n    }\n\n    @Test\n    public void testCookies() {\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL("https://demo.nopcommerce.com/");\n       \n        driver.browser().addCookie(".Nop.Authentication", cookieValue);\n        driver.browser().refreshCurrentPage();\n    }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var o=t(7294);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);