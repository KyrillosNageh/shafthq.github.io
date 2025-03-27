"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[8577],{256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"Basic_Config/basicConfig","title":"Basic configuration for Web GUI","description":"- To get you started, SHAFT will auto-generate some default properties for your first test run.","source":"@site/docs/Basic_Config/basicConfig.md","sourceDirName":"Basic_Config","slug":"/Basic_Config/basicConfig","permalink":"/docs/Basic_Config/basicConfig","draft":false,"unlisted":false,"editUrl":"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Basic_Config/basicConfig.md","tags":[],"version":"current","frontMatter":{"id":"basicConfig","title":"Basic configuration for Web GUI","sidebar_label":"Web GUI"},"sidebar":"docs","previous":{"title":"Existing projects","permalink":"/docs/Getting_Started/first_steps_6"},"next":{"title":"Mobile GUI","permalink":"/docs/Basic_Config/basicConfig2"}}');var i=n(4848),r=n(8453);const s={id:"basicConfig",title:"Basic configuration for Web GUI",sidebar_label:"Web GUI"},a=void 0,c={},u=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"To get you started, SHAFT will auto-generate some default properties for your first test run."}),"\n",(0,i.jsxs)(t.li,{children:["Here are some basic properties you should think about including in your ",(0,i.jsx)(t.code,{children:"custom.properties"})," file:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",metastring:'showLineNumbers title="src/main/resources/properties/custom.properties"',children:"# you may want to configure your base url to enable your scripts to run against different environments\nbaseURL=http://www.mytestdomain.com\n\n# this is how you can change the target browser for your tests to `CHROME`, `FIREFOX`, `SAFARI`\n# or `MICROSOFTEDGE`\ntargetBrowserName=FIREFOX\n\n# you can use this flag to run in headless mode, which is faster and frees your computer screen\n# for use\nheadlessExecution=true\n\n# you can use one of these flags to generate extra visuals (gif / video) in your allure report\ncreateAnimatedGif=true\nvideoParams_recordVideo=true\n\n# configuring your proxy settings is essential if you are sitting behind a corporate proxy server,\n# no need to include this property if you're not\ncom.SHAFT.proxySettings=host:port\n\n# you can configure SHAFT to automatically retry failed tests by setting this property\nretryMaximumNumberOfAttempts=3\n\n# you can disable any of the buil-in forced checks that SHAFT uses to ensure a more reliable\n# execution by setting the following properties\nforceCheckForElementVisibility=false\nforceCheckElementLocatorIsUnique=false\nforceCheckTextWasTypedCorrectly=false\nforceCheckNavigationWasSuccessful=false\nrespectBuiltInWaitsInNativeMode=false\n\n# you can enable this commonly used workaround if your element clicks keep failing\n# (though it is recommended to tweak your locator)\nclickUsingJavascriptWhenWebDriverClickFails=true\n\n# you can also configure the following timeouts (in seconds)\ndefaultElementIdentificationTimeout=60\nbrowserNavigationTimeout=60\t\t\npageLoadTimeout=60\n"})}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{children:(0,i.jsx)(t.strong,{children:"Tip"})}),(0,i.jsxs)(t.p,{children:["You can learn more about the different ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"../Properties/PropertyTypes",children:"property types"})})," and the ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"../Properties/PropertiesList",children:"full list of supported properties"})})," by visiting the related pages."]})]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);