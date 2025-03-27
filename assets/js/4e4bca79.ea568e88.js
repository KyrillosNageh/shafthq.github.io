"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[6084],{2618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Keywords/Validations/Objects","title":"Object","description":"We can make many assertions and verifications on objects by using the Class NativeValidationsBuilder through using the following methods:","source":"@site/docs/Keywords/Validations/Objects.md","sourceDirName":"Keywords/Validations","slug":"/Keywords/Validations/Objects","permalink":"/docs/Keywords/Validations/Objects","draft":false,"unlisted":false,"editUrl":"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Keywords/Validations/Objects.md","tags":[],"version":"current","frontMatter":{"id":"Objects","title":"Object","sidebar_labe":"Object"},"sidebar":"docs","previous":{"title":"File","permalink":"/docs/Keywords/Validations/Files"},"next":{"title":"Number","permalink":"/docs/Keywords/Validations/Nums"}}');var n=a(4848),s=a(8453);const o={id:"Objects",title:"Object",sidebar_labe:"Object"},l=void 0,c={},d=[{value:"We can make many assertions and verifications on objects by using the <em>Class NativeValidationsBuilder</em> through using the following methods:",id:"we-can-make-many-assertions-and-verifications-on-objects-by-using-the-class-nativevalidationsbuilder-through-using-the-following-methods",level:4},{value:"isEqualTo():",id:"isequalto",level:3},{value:"equals():",id:"equals",level:3},{value:"doesNotEqual():",id:"doesnotequal",level:3},{value:"contains():",id:"contains",level:3},{value:"doesNotContain():",id:"doesnotcontain",level:3},{value:"matchesRegex():",id:"matchesregex",level:3},{value:"doesNotMatchRegex():",id:"doesnotmatchregex",level:3},{value:"equalsIgnoringCaseSensitivity():",id:"equalsignoringcasesensitivity",level:3},{value:"doesNotEqualIgnoringCaseSensitivity():",id:"doesnotequalignoringcasesensitivity",level:3},{value:"isNull():",id:"isnull",level:3},{value:"isNotNull():",id:"isnotnull",level:3},{value:"isTrue():",id:"istrue",level:3},{value:"13. isFalse():",id:"13-isfalse",level:6}];function r(e){const t={code:"code",em:"em",h3:"h3",h4:"h4",h6:"h6",li:"li",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h4,{id:"we-can-make-many-assertions-and-verifications-on-objects-by-using-the-class-nativevalidationsbuilder-through-using-the-following-methods",children:["We can make many assertions and verifications on objects by using the ",(0,n.jsx)(t.em,{children:"Class NativeValidationsBuilder"})," through using the following methods:"]}),"\n",(0,n.jsx)(t.h3,{id:"isequalto",children:"isEqualTo():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object is equal to the expected value."}),"\n",(0,n.jsx)(t.li,{children:"Needed parameters: expectedValue - the test data / expected value for the object under test."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).isEqualTo((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).isEqualTo((Object) expectedValue)).perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"equals",children:"equals():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This method overrides the default object method equals and is the same as calling isEqualTo(expectedValue).perform();"}),"\n",(0,n.jsx)(t.li,{children:"So we use this method to check that the actual object is equal to the expected value."}),"\n",(0,n.jsx)(t.li,{children:"Needed parameters: expectedValue - the test data / expected value for the object under test."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a boolean value true if passed and throws AssertionError if failed (return value can be safely ignored)."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).equals((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).equals((Object) expectedValue)).perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"doesnotequal",children:"doesNotEqual():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object is not equal to the expected value."}),"\n",(0,n.jsx)(t.li,{children:"Needed parameters: expectedValue - the test data / expected value for the object under test."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).doesNotEqual((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).doesNotEqual((Object) expectedValue)).perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"contains",children:"contains():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object contains the expected value."}),"\n",(0,n.jsx)(t.li,{children:"Needed parameters: expectedValue - the test data / expected value for the object under test."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).contains((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).contains((Object) expectedValue)).perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"doesnotcontain",children:"doesNotContain():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object does not contain the expected value."}),"\n",(0,n.jsx)(t.li,{children:"Needed parameters: expectedValue - the test data / expected value for the object under test."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).doesNotContain((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).doesNotContain((Object) expectedValue)).perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"matchesregex",children:"matchesRegex():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object matches the expected regular expression."}),"\n",(0,n.jsx)(t.li,{children:"Needed parameters: expectedValue - the test data / expected regular expression for the object under test."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).matchesRegex((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).matchesRegex((Object) expectedValue)).perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"doesnotmatchregex",children:"doesNotMatchRegex():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object does not match the expected regular expression."}),"\n",(0,n.jsx)(t.li,{children:"Needed parameters: expectedValue - the test data / expected regular expression for the object under test."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).doesNotMatchRegex((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).doesNotMatchRegex((Object) expectedValue)).perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"equalsignoringcasesensitivity",children:"equalsIgnoringCaseSensitivity():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object is equal to the expected value (ignoring case sensitivity)."}),"\n",(0,n.jsx)(t.li,{children:"Needed parameters: expectedValue - the test data / expected value for the object under test."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).equalsIgnoringCaseSensitivity((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).equalsIgnoringCaseSensitivity((Object) expectedValue)).perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"doesnotequalignoringcasesensitivity",children:"doesNotEqualIgnoringCaseSensitivity():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object is not equal to the expected value (ignoring case sensitivity)."}),"\n",(0,n.jsx)(t.li,{children:"Needed parameters: expectedValue - the test data / expected value for the object under test."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).doesNotEqualIgnoringCaseSensitivity((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).doesNotEqualIgnoringCaseSensitivity((Object) expectedValue)).perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"isnull",children:"isNull():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object is null."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).isNull().perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).isNull().perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"isnotnull",children:"isNotNull():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object is not null."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).isNotNull().perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).isNotNull().perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"istrue",children:"isTrue():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object is true."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).isTrue().perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).isTrue().perform();\n    }\n}\n"})}),"\n",(0,n.jsx)(t.h6,{id:"13-isfalse",children:"13. isFalse():"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We use this method to check that the actual object is false."}),"\n",(0,n.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).isFalse().perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).isFalse().perform();\n    }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>l});var i=a(6540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);