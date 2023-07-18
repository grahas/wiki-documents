"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73011],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8374:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - LCD RGB Backlight",title:"Grove - LCD RGB Backlight",keywords:["Grove","cn"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-LCD_RGB_Backlight",last_update:{date:"7/18/2023",author:"Matthew"}},l=void 0,o={unversionedId:"zh-CN/Sensor/Grove/Grove_Accessories/Grove-LCD_RGB_Backlight",id:"zh-CN/Sensor/Grove/Grove_Accessories/Grove-LCD_RGB_Backlight",title:"Grove - LCD RGB Backlight",description:"Grove - LCD RGB Backlight",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Accessories/Grove-LCD_RGB_Backlight.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Accessories",slug:"/cn/Grove-LCD_RGB_Backlight",permalink:"/cn/Grove-LCD_RGB_Backlight",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Accessories/Grove-LCD_RGB_Backlight.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1689638400,formattedLastUpdatedAt:"Jul 18, 2023",frontMatter:{description:"Grove - LCD RGB Backlight",title:"Grove - LCD RGB Backlight",keywords:["Grove","cn"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-LCD_RGB_Backlight",last_update:{date:"7/18/2023",author:"Matthew"}}},p={},s=[{value:"\u4ea7\u54c1\u7279\u6027",id:"\u4ea7\u54c1\u7279\u6027",level:2},{value:"\u4ea7\u54c1\u7279\u6027",id:"\u4ea7\u54c1\u7279\u6027-1",level:2},{value:"\u521b\u610f\u5e94\u7528",id:"\u521b\u610f\u5e94\u7528",level:2},{value:"\u5165\u95e8\u6307\u5bfc",id:"\u5165\u95e8\u6307\u5bfc",level:2},{value:"\u7b2c\u4e00\u6b65.\u4e0b\u8f7d Arduino \u5e93",id:"\u7b2c\u4e00\u6b65\u4e0b\u8f7d-arduino-\u5e93",level:3},{value:"\u7b2c\u4e8c\u6b65. \u786c\u4ef6\u5b89\u88c5",id:"\u7b2c\u4e8c\u6b65-\u786c\u4ef6\u5b89\u88c5",level:3},{value:"\u7b2c\u4e09\u6b65.\u4e0b\u8f7d\u6570\u636e\u5e76\u4e14\u4e0a\u4f20",id:"\u7b2c\u4e09\u6b65\u4e0b\u8f7d\u6570\u636e\u5e76\u4e14\u4e0a\u4f20",level:3},{value:"\u7b2c\u56db\u6b65. \u6539\u53d8\u80cc\u5149\u5c4f\u7684\u989c\u8272",id:"\u7b2c\u56db\u6b65-\u6539\u53d8\u80cc\u5149\u5c4f\u7684\u989c\u8272",level:3},{value:"\u8d44\u6e90\u4e0b\u8f7d",id:"\u8d44\u6e90\u4e0b\u8f7d",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/intro.jpg",alt:"enter image description here"})),(0,n.kt)("p",null,"\u60f3\u8981\u5b8c\u6210\u4e30\u5bcc\u591a\u5f69\u7684\u7684\u5355\u8272\u80cc\u5149\u663e\u793a\u5417\uff1f \u901a\u8fc7\u8fd9\u4e2a\u6a21\u5757\u60a8\u53ef\u4ee5\u5c06\u663e\u793a\u7684\u989c\u8272\u8bbe\u7f6e\u4e3a\u4efb\u4f55\u60a8\u559c\u6b22\u7684\u989c\u8272\n\u5b83\u5177\u6709\u7b80\u5355\u800c\u4e14\u7b80\u6d01\u7684\u754c\u9762\u3002 \u5b83\u4ee5I2C\u603b\u7ebf\u4f5c\u4e3a\u5fae\u63a7\u5236\u5668\u7684\u901a\u4fe1\u65b9\u5f0f\u3002\n\u56e0\u6b64\uff0c\u6570\u636e\u4ea4\u6362\u548c\u80cc\u5149\u63a7\u5236\u6240\u9700\u7684\u5f15\u811a\u6570\u53ef\u4ee5\u4ece10\u4e2a\u51cf\u5c11\u52302\u4e2a\uff0c\u4ece\u800c\u51cf\u8f7b\u4e86IO\u53e3\u7684\u4f7f\u7528 \u6b64\u5916\uff0cGrove - LCD RGB Backlight\u652f\u6301\u7528\u6237\u81ea\u5df1\u5b9a\u4e49\u7684\u5b57\u7b26\u3002 \u60f3\u8981\u5f97\u5230\n\u7231\u5fc3\u56fe\u6848\u548c\u5176\u4ed6\u4e00\u4e9b\u4eba\u7269\u5f62\u8c61\u7684\u56fe\u6848\u5417\uff1f \u53ea\u8981\u5229\u7528\u8fd9\u4e2a\u6a21\u5757\u60a8\u5c31\u53ef\u4ee5\u81ea\u5df1\u8bbe\u8ba1\uff01\n\u8be5\u4ea7\u54c1\u662fGrove - Serial LCD\u7684\u66ff\u4ee3\u54c1\u3002 \u5982\u679c\u60a8\u6b63\u5728\u5bfb\u627e\u539f\u59cb\u768416x2\u6db2\u6676\u663e\u793a\u6a21\u5757\uff0c\u6211\u4eec\n\u6709\u7eff\u8272\u3001\u9ec4\u8272\u548c\u84dd\u8272\u7684Grove - LCD RGB Backlight\u51fa\u552e\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11z7Fw9H&id=45475311124"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG",alt:null}))),(0,n.kt)("p",null,"!!!Note\n\u672c\u6587\u6863\u9002\u7528\u4e8e1.0\uff0c2.0\u548c4.0\u7248\u672c\u3002"),(0,n.kt)("h2",{id:"\u4ea7\u54c1\u7279\u6027"},"\u4ea7\u54c1\u7279\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5177\u6709RGB\u80cc\u5149\u663e\u793a\u7684\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"I2C\u603b\u7ebf\u8fde\u63a5"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u90e8\u8bbe\u7f6e\u6709\u82f1\u6587\u5b57\u4f53"),(0,n.kt)("li",{parentName:"ul"},"16x2 LCD\u80cc\u5149\u5c4f")),(0,n.kt)("p",null,"!!!Tip\n\u5173\u4e8eGrove\u6a21\u5757\u7684\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/cn/Grove_System/"},"Grove System")),(0,n.kt)("h2",{id:"\u4ea7\u54c1\u7279\u6027-1"},"\u4ea7\u54c1\u7279\u6027"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u9879\u76ee"),(0,n.kt)("th",{parentName:"tr",align:null},"\u6570\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u7535\u538b"),(0,n.kt)("td",{parentName:"tr",align:null},"5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u7535\u6d41"),(0,n.kt)("td",{parentName:"tr",align:null},"<60mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CGROM"),(0,n.kt)("td",{parentName:"tr",align:null},"10880\u4f4d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CGRAM"),(0,n.kt)("td",{parentName:"tr",align:null},"64x8 \u4f4d")))),(0,n.kt)("h2",{id:"\u521b\u610f\u5e94\u7528"},"\u521b\u610f\u5e94\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4eba\u673a\u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul"},"\u667a\u6167\u4e4b\u5bb6"),(0,n.kt)("li",{parentName:"ul"},"\u4f20\u611f\u5668\u4e2d\u5fc3")),(0,n.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e9b\u9879\u76ee\u7ed9\u60a8\u53c2\u8003"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Edison Wi-Fi Address"),(0,n.kt)("th",{parentName:"tr",align:null},"WiFi Enabled Greenhouse"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Lucky Dumpling"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project1.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project2.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project3.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.instructables.com/id/Show-the-Intel-Edison-WiFi-IP-Address-on-a-Grove-L/"},"Make it Now!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.instructables.com/id/Arduino-Grove-Greenhouse/"},"Make it Now!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.instructables.com/id/Grove-Lucky-Dumpling/"},"Make it Now!"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Toothbrushing Instructor"),(0,n.kt)("th",{parentName:"tr",align:null},"LinkIt ONE Pager"),(0,n.kt)("th",{parentName:"tr",align:null},"LinkIt ONE IoT Demo"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project4.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project5.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project6.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.instructables.com/id/Toothbrushing-Instructor/"},"Make it Now!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.instructables.com/id/LinkIt-ONE-Pager/"},"Make it Now!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.seeed.cc/project_detail.html?id=78"},"Make it Now!"))))),(0,n.kt)("h2",{id:"\u5165\u95e8\u6307\u5bfc"},"\u5165\u95e8\u6307\u5bfc"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u5165\u95e8\u6307\u5bfc\u5c06\u5411\u4f60\u5c55\u793a\u600e\u4e48\u4f7f\u7528Grove - LCD RGB Backlight\u3002\u540c\u65f6\u6211\u4eec\u4e5f\u9700\u8981 ",(0,n.kt)("a",{parentName:"p",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11rndqnS&id=45721222112"},"Seeeduino")),(0,n.kt)("p",null,"!!!Note\n\u8fd9\u4e2a\u6f14\u793a\u662f\u5728Win10\u548cArduino IDE1.6.9\u73af\u5883\u4e0b\u8fdb\u884c\u7684\u3002"),(0,n.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u4e0b\u8f7d-arduino-\u5e93"},"\u7b2c\u4e00\u6b65.\u4e0b\u8f7d Arduino \u5e93"),(0,n.kt)("p",null,"\u60a8\u9700\u8981\u4e0b\u8f7d\u8be5\u5e93\u5e76\u5b89\u88c5\u5230\u60a8\u7684Arduino IDE\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u5b89\u88c5Arduino\u5e93\u6587\u4ef6\uff0c\u8bf7\u70b9\u51fb ",(0,n.kt)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/"},"\u8fd9\u91cc")," \u67e5\u770b\u5e93\u6587\u4ef6\u7684\u5b89\u88c5\u65b9\u6cd5\uff0c\u5e76\u4e14\u5b8c\u6210 LCD RGB Backlight \u5e93\u7684\u5b89\u88c5\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/library.png",alt:"enter image description here"}))),(0,n.kt)("h3",{id:"\u7b2c\u4e8c\u6b65-\u786c\u4ef6\u5b89\u88c5"},"\u7b2c\u4e8c\u6b65. \u786c\u4ef6\u5b89\u88c5"),(0,n.kt)("p",null,"\u786c\u4ef6\u8fde\u63a5\u975e\u5e38\u7b80\u5355\uff0c\u56e0\u4e3aSeeeduino\u6709\u4e00\u4e2aI2C Grove\u7aef\u53e3\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u505a\u7684\u662f\n\u901a\u8fc7Grove\u8fde\u63a5\u7ebf\u5c06\u5176\u8fde\u63a5\u5230I2C Grove\u7aef\u53e3\u5c31\u597d\u3002"),(0,n.kt)("p",null,"!!!Note\n\u8bf7\u901a\u8fc7Seeeduino V4.2\u4e0a\u7684\u62e8\u52a8\u5f00\u5173\u9009\u62e95v\uff0c\u5426\u5219Grove - LCD RGB Backlight\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/1.png",alt:"// image 1"})),(0,n.kt)("h3",{id:"\u7b2c\u4e09\u6b65\u4e0b\u8f7d\u6570\u636e\u5e76\u4e14\u4e0a\u4f20"},"\u7b2c\u4e09\u6b65.\u4e0b\u8f7d\u6570\u636e\u5e76\u4e14\u4e0a\u4f20"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728Github\u4e2d\u4e0b\u8f7d\u6f14\u793a\u4ee3\u7801\uff0c\u70b9\u51fb ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight"},"\u8fd9\u91cc"),"\uff0c\u7136\u540e\u5c06\u5176\u89e3\u538b\u7f29\u5230\u4efb\u4f55\u5730\u65b9\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u8fd9\u4e2a\u6b65\u9aa4\u6709\u95ee\u9898\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/cn/Getting_Started_with_Seeeduino/"},"Arduino\u5165\u95e8\u6307\u5bfc")," \u5728\u5e93\u4e2d\u6709\u4e00\u4e2aHello World\u793a\u4f8b\uff0c\u5c06\u5176\u6253\u5f00\u5e76\u4e0a\u4f20\u5230Seeeduino V4.2\u3002 \u7136\u540e\u53ef\u4ee5\u5728\u7b2c\u4e00\u884c\u770b\u5230\u201cHello world\u201d\uff0c\u7b2c\u4e8c\u884c\u5c06\u663e\u793a\u4ece\u590d\u4f4d\u540e\u663e\u793a\u65f6\u95f4\u7684\u79d2\u6570\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/2.png",alt:"// image 1"})),(0,n.kt)("h3",{id:"\u7b2c\u56db\u6b65-\u6539\u53d8\u80cc\u5149\u5c4f\u7684\u989c\u8272"},"\u7b2c\u56db\u6b65. \u6539\u53d8\u80cc\u5149\u5c4f\u7684\u989c\u8272"),(0,n.kt)("p",null," Grove - LCD RGB Backlight\u7684\u6700\u91cd\u8981\u7684\u7279\u70b9\u4e4b\u4e00\u662f\uff1a\u60a8\u53ef\u4ee5\u66f4\u6539\u80cc\u5149\u6e90\n\u8fd9\u662f\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u4e8b\u60c5\uff0c\u53ea\u9700\u4f7f\u7528\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"void setRGB(int r, int g, int b);\n")),(0,n.kt)("p",null,"\u7136\u540e\u8ba9\u6211\u4eec\u5c1d\u8bd5\u7ea2\u8272\u7684\u80cc\u5149\u663e\u793a\u3002\n\u5c06\u989c\u8272\u4ee3\u7801\u4fee\u6539\u4e3a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"const int colorR = 255;\nconst int colorG = 0;\nconst int colorB = 0;\n")),(0,n.kt)("p",null,"\u518d\u6b21\u4e0a\u4f20\u4ee3\u7801\uff0c\u662f\u4e0d\u662f\u53ef\u4ee5\u770b\u5230\u80cc\u5149\u5c4f\u7684\u989c\u8272\u8f6c\u5230\u7ea2\u8272\u4e86\uff1f \u90a3\u4e48\u4e3a\u4ec0\u4e48\u4e0d\u5c1d\u8bd5\u53e6\u4e00\u79cd\u989c\u8272\u5462\uff1f"),(0,n.kt)("h2",{id:"\u8d44\u6e90\u4e0b\u8f7d"},"\u8d44\u6e90\u4e0b\u8f7d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip"},"Software Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight"},"Github page for the Library"))))}d.isMDXComponent=!0}}]);