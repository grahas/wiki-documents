"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[94197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={description:"Get Started with SenseCAP Indicator Native Firmware",title:"Get Started with SenseCAP Indicator Native Firmware",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Indicator_Get_Started_Native_Firmware",last_update:{date:"5/23/2023",author:"Thomas"}},o="**Native Firmware**",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/Native_Firmware",id:"Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/Native_Firmware",title:"Get Started with SenseCAP Indicator Native Firmware",description:"Get Started with SenseCAP Indicator Native Firmware",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/Native_Firmware.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator",slug:"/Indicator_Get_Started_Native_Firmware",permalink:"/Indicator_Get_Started_Native_Firmware",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Get_Started_with_SenseCAP_Indicator/Native_Firmware.md",tags:[],version:"current",lastUpdatedBy:"Thomas",lastUpdatedAt:16848e5,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{description:"Get Started with SenseCAP Indicator Native Firmware",title:"Get Started with SenseCAP Indicator Native Firmware",keywords:["SenseCAP Indicator"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Indicator_Get_Started_Native_Firmware",last_update:{date:"5/23/2023",author:"Thomas"}},sidebar:"ProductSidebar",previous:{title:"Get Started with SenseCAP Indicator Introduction",permalink:"/Indicator_Get_Started_introduction"},next:{title:"OpenAI X SenseCAP Indicator Overview",permalink:"/SenseCAP_Indicator_OpenAI_X_Overview"}},d={},c=[{value:"<strong>Wi-Fi Setting</strong>",id:"wi-fi-setting",level:2},{value:"<strong>Display Setting</strong>",id:"display-setting",level:2},{value:"<strong>Date &amp; Time Setting</strong>",id:"date--time-setting",level:2},{value:"<strong>Sensor Data</strong>",id:"sensor-data",level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"native-firmware"},(0,i.kt)("strong",{parentName:"h1"},"Native Firmware")),(0,i.kt)("p",null,"The SenseCAP Indicator D1S and D1Pro version has the built-in tVOC and CO2 sensors, and an external Grove TH sensor for accurate data reading. The SenseCAP native firmware provides air quality detector UI to show the sensor data. For D1 and D1L verison which does not include the sensors, the data page will show N/A."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"})),(0,i.kt)("p",null,"Simple steps to configure SenseCAP Indicator at the setting page."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"})),(0,i.kt)("h2",{id:"wi-fi-setting"},(0,i.kt)("strong",{parentName:"h2"},"Wi-Fi Setting")),(0,i.kt)("p",null,"Select the Wi-Fi name and input the password and connect it."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:480,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_9.png"})),"Once you saw the green Wi-Fi icon, you'are all set.",(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_10.png"})),(0,i.kt)("h2",{id:"display-setting"},(0,i.kt)("strong",{parentName:"h2"},"Display Setting")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Brightness"),": Adjust screen brightness."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sleep Mode"),": Turn off the screen according to the interval you set.During sleep mode, the screen is turned of and does not display any content.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"})),(0,i.kt)("h2",{id:"date--time-setting"},(0,i.kt)("strong",{parentName:"h2"},"Date & Time Setting")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time Format:")," You can set 24H or 12H format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time Auto Update/Zone Auto Update"),": When the device is connected to WiFi, it will automatically obtain the corresponding time zone and date.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Manual setting"),": If the time obtained through the time zone cannot automatically identify the winter time or device is offline, then you can manually set the time zone "),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"})),(0,i.kt)("h2",{id:"sensor-data"},(0,i.kt)("strong",{parentName:"h2"},"Sensor Data")),(0,i.kt)("p",null,"We offers four different versions: D1, D1S, D1L, and D1Pro. Each version is designed to meet different application needs without any extra cost from unnecessary hardware. Here are the differences between the versions:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"})),(0,i.kt)("p",null,"The device's firmware has two pages that display data for tVOC, CO2, temperature, and humidity."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The UI for the native firmware remains the same for all versions for SenseCAP Indicator. For D1 and D1L version which has no embedded sensors. the sensor data will show 'N/A'. You are able to connect with other Grove sensors and create your own customized UI.")),(0,i.kt)("p",null,"Click the specified sensor to enter the detailed information page, and you can choose to display the value in the past 24h or a week. Data will be kept within one week."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"})),(0,i.kt)("h1",{id:"tech-support"},(0,i.kt)("strong",{parentName:"h1"},"Tech Support")),(0,i.kt)("p",null,"Don't worry, we've got you covered! Please visit our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/cPpeuQMM"},"Seeed Official Discord Channel")," to ask your questions! "),(0,i.kt)("p",null,"If you have large order or customization requirement, please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}p.isMDXComponent=!0}}]);