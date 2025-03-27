"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[6856],{2607:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"Keywords/API/Response_Getters","title":"Response Getters","description":"SHAFT API Getters","source":"@site/docs/Keywords/API/Response_Getters.md","sourceDirName":"Keywords/API","slug":"/Keywords/API/Response_Getters","permalink":"/docs/Keywords/API/Response_Getters","draft":false,"unlisted":false,"editUrl":"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Keywords/API/Response_Getters.md","tags":[],"version":"current","frontMatter":{"id":"Response_Getters","title":"Response Getters","sidebar_label":"Parsing"},"sidebar":"docs","previous":{"title":"Builder","permalink":"/docs/Keywords/API/Request_Builder"},"next":{"title":"Validations","permalink":"/docs/Keywords/API/Response_Validations"}}');var a=t(4848),r=t(8453);const o={id:"Response_Getters",title:"Response Getters",sidebar_label:"Parsing"},i=void 0,l={},d=[{value:"SHAFT API Getters",id:"shaft-api-getters",level:2},{value:"Get Response Body",id:"get-response-body",level:3},{value:"Usage",id:"usage",level:4},{value:"Get Response Status Code",id:"get-response-status-code",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Get Response Time",id:"get-response-time",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Get Response JSON Value",id:"get-response-json-value",level:3},{value:"Usage",id:"usage-3",level:4},{value:"Get Response JSON Value As List",id:"get-response-json-value-as-list",level:3},{value:"Usage",id:"usage-4",level:4},{value:"Get Response XML Value",id:"get-response-xml-value",level:3},{value:"Get Response XML Value As List",id:"get-response-xml-value-as-list",level:3}];function p(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"shaft-api-getters",children:"SHAFT API Getters"}),"\n",(0,a.jsxs)(s.p,{children:["After getting back the ",(0,a.jsx)(s.a,{href:"https://www.javadoc.io/doc/io.rest-assured/rest-assured/3.0.1/io/restassured/response/Response.html",children:"REST-Assured response"})," object, we can use the getters to continue working with it when needed."]}),"\n",(0,a.jsx)(s.h3,{id:"get-response-body",children:"Get Response Body"}),"\n",(0,a.jsx)(s.p,{children:"Extracts the response body and returns it as a plain string"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"String body = api.getResponseBody();\n"})}),"\n",(0,a.jsx)(s.h4,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'SHAFT.API api = new SHAFT.API("http://api.zippopotam.us/");\napi.get("us/90210").perform();\nString body = api.getResponseBody();\nSHAFT.Validations.assertThat().object(body).contains("Beverly Hills").perform();\n'})}),"\n",(0,a.jsx)(s.h3,{id:"get-response-status-code",children:"Get Response Status Code"}),"\n",(0,a.jsx)(s.p,{children:"Extracts the response status code as integer"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"int statusCode = api.getResponseStatusCode();\n"})}),"\n",(0,a.jsx)(s.h4,{id:"usage-1",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'SHAFT.API api = new SHAFT.API("http://api.zippopotam.us/");\napi.get("us/90210").perform();\nint statusCode = api.getResponseStatusCode();\nSHAFT.Validations.assertThat().number(statusCode).isEqualTo(200).perform();\n'})}),"\n",(0,a.jsx)(s.h3,{id:"get-response-time",children:"Get Response Time"}),"\n",(0,a.jsx)(s.p,{children:"Extracts the response time as long"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"long responseTime = api.getResponseTime();\n"})}),"\n",(0,a.jsx)(s.h4,{id:"usage-2",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'SHAFT.API api = new SHAFT.API("http://api.zippopotam.us/");\napi.get("us/90210").perform();\nlong responseTime = api.getResponseTime();\nSHAFT.Validations.verifyThat().number(responseTime).isGreaterThanOrEquals(1.1).perform();\nSHAFT.Validations.verifyThat().number(responseTime).isLessThanOrEquals(10000).perform();\n'})}),"\n",(0,a.jsx)(s.h3,{id:"get-response-json-value",children:"Get Response JSON Value"}),"\n",(0,a.jsxs)(s.p,{children:["Extracts a string value from the response body by parsing the target ",(0,a.jsx)(s.strong,{children:"JSONPath."})," ",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(s.em,{children:["* To extract the desired value, please refer to these urls for examples: ",(0,a.jsx)("br",{}),"\nYou can learn the JSONPath Syntax from ",(0,a.jsx)(s.a,{href:"https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html",children:"here"})," ",(0,a.jsx)("br",{}),"\nAnd test your JSONPath ",(0,a.jsx)(s.a,{href:"http://jsonpath.com/",children:"here"})," *"]})]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'String value = api.getResponseJSONValue("jsonPath");\n'})}),"\n",(0,a.jsx)(s.h4,{id:"usage-3",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/users").perform();\nString value = api.getResponseJSONValue("$[?(@.name==\'Ervin Howell\')].address.street");\nSHAFT.Validations.assertThat().object(value).isEqualTo("Victor Plains").perform();\n'})}),"\n",(0,a.jsx)(s.h3,{id:"get-response-json-value-as-list",children:"Get Response JSON Value As List"}),"\n",(0,a.jsxs)(s.p,{children:["Extracts the response as list by parsing the target ",(0,a.jsx)(s.strong,{children:"JSONPath."})]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'String value = api.getResponseJSONValueAsList("jsonPath");\n'})}),"\n",(0,a.jsx)(s.h4,{id:"usage-4",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/todos").perform();\nList<Object> value = api.getResponseJSONValueAsList("$[?(@.completed==true)].completed");\nfor (Object completed : completedList) {\n    SHAFT.Validations.verifyThat().object(completed.toString()).isEqualTo("true").perform();\n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"get-response-xml-value",children:"Get Response XML Value"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'String value = api.getResponseXMLValue("xmlPath");\n'})}),"\n",(0,a.jsx)(s.h3,{id:"get-response-xml-value-as-list",children:"Get Response XML Value As List"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'List<Object> value = api.getResponseXMLValueAsList("xmlPath");\n'})})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(6540);const a={},r=n.createContext(a);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);