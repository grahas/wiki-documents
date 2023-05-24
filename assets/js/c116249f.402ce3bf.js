"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={description:"Xadow - LED 5x7",title:"Xadow - LED 5x7",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_LED_5x7",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_LED_5x7",id:"Seeed_Elderly/Xadow/Xadow_LED_5x7",title:"Xadow - LED 5x7",description:"Xadow - LED 5x7",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_LED_5x7.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_LED_5x7",permalink:"/Xadow_LED_5x7",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_LED_5x7.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - LED 5x7",title:"Xadow - LED 5x7",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_LED_5x7",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - IMU 10DOF",permalink:"/Xadow_IMU_10DOF"},next:{title:"Xadow - LED 5x7 v1.0",permalink:"/Xadow_LED_5_multiply_7_v1.0"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Use it with RePhone Kit Create",id:"use-it-with-rephone-kit-create",level:2},{value:"Rephone Community",id:"rephone-community",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_LED_5x7/images/Xadow_LED_5x7.JPG",alt:null}),"\nThe Xadow LED 5x7 consists of a 5x7 monochrome LED matrix and a LED controller. You can sending command to the LED controller through I2C interface (address 0x21) to display numbers, letters or even pixel images. This could come handy sometime in your project."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Xadow_LED_5x7/images/300px-Get_One_Now_Banner.png",alt:null}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LED Matrix"),(0,n.kt)("li",{parentName:"ul"},"Plug-and-play if connected with RePhone Kit Create"),(0,n.kt)("li",{parentName:"ul"},"Open source and modular design"),(0,n.kt)("li",{parentName:"ul"},"Slim and small"),(0,n.kt)("li",{parentName:"ul"},"Built-in 11 PIN Xadow Connectors for full flexible connection with other Xadow Modules"),(0,n.kt)("li",{parentName:"ul"},"Stackable, chain-able and sew-able with other Xadow Modules")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,n.kt)("td",{parentName:"tr",align:null},"STM32F030F4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Core"),(0,n.kt)("td",{parentName:"tr",align:null},"ARM\xae 32-bit Cortex\xae -M0 CPU")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Power Supply"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3 ~ 6 V (via breakout pins)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Flash"),(0,n.kt)("td",{parentName:"tr",align:null},"16 KB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,n.kt)("td",{parentName:"tr",align:null},"4 KB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Clock Speed"),(0,n.kt)("td",{parentName:"tr",align:null},"48 MHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interfaces"),(0,n.kt)("td",{parentName:"tr",align:null},"Interface with Xadow GSM+BLE through I2C (7-bit address 0x21)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dimension"),(0,n.kt)("td",{parentName:"tr",align:null},"25.37mm \xd7 20.30mm / 1\u201d \xd7 0.8\u201d")))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_LED_5x7/images/800px-Xadow_LED_5x7.png",alt:null})),(0,n.kt)("h2",{id:"use-it-with-rephone-kit-create"},"Use it with RePhone Kit Create"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Display characters:")),(0,n.kt)("p",null," Without any programming, you can connect it to the Core Module (Xadow GSM+BLE) of your 'RePhone Kit Create' to display numbers and letters using the 'Actuator Control'."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Set 'If This Then That' :")),(0,n.kt)("p",null," You can also set conditions in the 'If This Then That' to trigger the Xadow LED 5x7 to display specific characters or pixel images."),(0,n.kt)("h2",{id:"rephone-community"},"Rephone Community"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Xadow_LED_5x7/images/300px-RePhone_Community-2.png",alt:null}))),(0,n.kt)("p",null," We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the ",(0,n.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"."),(0,n.kt)("p",null," Now join us in the ",(0,n.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"! Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Frequently Asked Questions")),(0,n.kt)("p",null," Some frequently asked questions in ",(0,n.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),' are collected and answered to the topic "Frequently Asked Questions of RePhone (FAQ)" , the topic will be kept updating whenever a new FAQ comes out.'),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_LED_5x7/res/202000746_PCBA%3BXadow%20LED%205%C3%977%20v1.0_schemic%20files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We will be keep updating the source code on our github page:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/WayenWeng/Xadow_LED_5x7/"},"Source Code for Xadow LED 5x7"))),(0,n.kt)("p",null,"The schematic diagram of Xadow LED 5x7 is provided in the following link:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_LED_5x7/res/202000746_PCBA%3BXadow%20LED%205%C3%977%20v1.0_schemic%20files.zip"},"Xadow LED 5\xd77 v1.0_schemic files.zip"))),(0,n.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);