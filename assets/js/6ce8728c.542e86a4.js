"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29749],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>g});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?t.createElement(g,a(a({ref:n},p),{},{components:r})):t.createElement(g,a({ref:n},p))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20063:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=r(87462),i=(r(67294),r(3905));const o={description:"tVOC Sensor Built-in",title:"tVOC Sensor Built-in",keywords:["Indicator Development Tutorial RP2040"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Indicator_RP2040_tVOC Sensor_Built-in",last_update:{date:"5/23/2023",author:"Thomas"}},a="**tVOC Sensor(Built-in)**",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/tVOC_Sensor_Built-in",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/tVOC_Sensor_Built-in",title:"tVOC Sensor Built-in",description:"tVOC Sensor Built-in",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/tVOC_Sensor_Built-in.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040",slug:"/Indicator_RP2040_tVOC Sensor_Built-in",permalink:"/Indicator_RP2040_tVOC Sensor_Built-in",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/tVOC_Sensor_Built-in.md",tags:[],version:"current",lastUpdatedBy:"Thomas",lastUpdatedAt:16848e5,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{description:"tVOC Sensor Built-in",title:"tVOC Sensor Built-in",keywords:["Indicator Development Tutorial RP2040"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Indicator_RP2040_tVOC Sensor_Built-in",last_update:{date:"5/23/2023",author:"Thomas"}},sidebar:"ProductSidebar",previous:{title:"CO2 Sensor Built-in",permalink:"/Indicator_RP2040_CO2_Sensor_Built-in"},next:{title:"Buzzer",permalink:"/Indicator_RP2040_Buzzer"}},l={},u=[],p={toc:u};function c(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tvoc-sensorbuilt-in"},(0,i.kt)("strong",{parentName:"h1"},"tVOC Sensor(Built-in)")),(0,i.kt)("p",null,"The built-in SGP40 sensor in the SenseCAP Indicator is a high-quality, reliable TVOC sensor that can be used in a wide range of applications to monitor indoor and outdoor air quality. It with a measurement range of 1-500 VOC Index Points."),(0,i.kt)("p",null,"TVOCs are a group of organic chemicals that are emitted as gases from a variety of sources, including building materials, cleaning products, and personal care products."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Code:")),(0,i.kt)("p",null,"This example reads the value of the built-in SGP40 TVOC sensor through the IIC interface, and print it to the serial monitor."),(0,i.kt)("p",null,"Based on the following library\uff1a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-core/"},"Sensirion Arduino Core library")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-i2c-sgp40"},"SGP40 TVOC sensor library")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-gas-index-algorithm"},"Transfer index library: Sensirion Gas Index Algorithm")),(0,i.kt)("p",null,"Note: When using the built-in sensor, the sensor power must be enabled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <SensirionI2CSgp40.h>\n#include <VOCGasIndexAlgorithm.h>\n#include <Wire.h>\n\nSensirionI2CSgp40 sgp40;\nVOCGasIndexAlgorithm voc_algorithm;\n\n\n//The built-in sensor needs to be powered on\nvoid sensor_power_on(void) {\n  pinMode(18, OUTPUT);\n  digitalWrite(18, HIGH);\n}\n\n/************************ sgp40 tvoc  ****************************/\n\nvoid sensor_sgp40_init(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  sgp40.begin(Wire);\n\n  uint16_t serialNumber[3];\n  uint8_t serialNumberSize = 3;\n\n  error = sgp40.getSerialNumber(serialNumber, serialNumberSize);\n\n  if (error) {\n    Serial.print("Error trying to execute getSerialNumber(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  } else {\n    Serial.print("SerialNumber:");\n    Serial.print("0x");\n    for (size_t i = 0; i < serialNumberSize; i++) {\n      uint16_t value = serialNumber[i];\n      Serial.print(value < 4096 ? "0" : "");\n      Serial.print(value < 256 ? "0" : "");\n      Serial.print(value < 16 ? "0" : "");\n      Serial.print(value, HEX);\n    }\n    Serial.println();\n  }\n\n  uint16_t testResult;\n  error = sgp40.executeSelfTest(testResult);\n  if (error) {\n    Serial.print("Error trying to execute executeSelfTest(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  } else if (testResult != 0xD400) {\n    Serial.print("executeSelfTest failed with error: ");\n    Serial.println(testResult);\n  }\n}\n\nvoid sensor_sgp40_get(void) {\n  uint16_t error;\n  char errorMessage[256];\n  uint16_t defaultRh = 0x8000;\n  uint16_t defaultT = 0x6666;\n  uint16_t srawVoc = 0;\n\n  Serial.print("sensor sgp40: ");\n\n  error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);\n  if (error) {\n    Serial.print("Error trying to execute measureRawSignal(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  } else {\n    Serial.print("SRAW_VOC:");\n    Serial.print(srawVoc);\n    \n    int32_t voc_index = voc_algorithm.process(srawVoc);\n    Serial.print(", VOC Index: ");\n    Serial.println(voc_index);\n  }\n}\n\n/************************ setup & loop ****************************/\n\nvoid setup() {\n  Serial.begin(115200);\n\n  sensor_power_on();\n\n  Wire.setSDA(20);\n  Wire.setSCL(21);\n  Wire.begin();\n\n  sensor_sgp40_init();\n}\n\nvoid loop() {\n  sensor_sgp40_get();\n  delay(5000);\n}\n\n')),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/tvoc.png"})),(0,i.kt)("p",null,'"SRAW_VOC" refers to the sensor\'s raw signal output for VOCs, which is usually a voltage or resistance measurement that is proportional to the concentration of VOCs in the air.'),(0,i.kt)("p",null,'"VOC Index" is a calculated value that is used as a way to represent the concentration of VOCs in the air in a more user-friendly format. The VOC index is a numerical value that ranges from 0 to 500, with higher values indicating higher concentrations of VOCs.'),(0,i.kt)("h1",{id:"tech-support"},(0,i.kt)("strong",{parentName:"h1"},"Tech Support")),(0,i.kt)("p",null,"Don't worry, we've got you covered! Please visit our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/cPpeuQMM"},"Seeed Official Discord Channel")," to ask your questions! "),(0,i.kt)("p",null,"If you have large order or customization requirement, please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}c.isMDXComponent=!0}}]);