"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2692],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(i),u=r,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||n;return i?o.createElement(f,a(a({ref:t},d),{},{components:i})):o.createElement(f,a({ref:t},d))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<n;l++)a[l]=i[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},48326:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=i(87462),r=(i(67294),i(3905));const n={},a="Overview",s={unversionedId:"Topics/TinyML/ModelAssistant/introduction/overview",id:"Topics/TinyML/ModelAssistant/introduction/overview",title:"Overview",description:"Introduction",source:"@site/docs/Topics/TinyML/ModelAssistant/introduction/overview.md",sourceDirName:"Topics/TinyML/ModelAssistant/introduction",slug:"/Topics/TinyML/ModelAssistant/introduction/overview",permalink:"/Topics/TinyML/ModelAssistant/introduction/overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/introduction/overview.md",tags:[],version:"current",lastUpdatedBy:"jianjingH",lastUpdatedAt:1704951574,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{},sidebar:"ProductSidebar",previous:{title:"Image classification",permalink:"/tinyml_course_Image_classification_project"},next:{title:"Overview",permalink:"/Topics/TinyML/ModelAssistant/introduction/overview"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"What&#39;s included?",id:"whats-included",level:2},{value:"\ud83d\udd0d Anomaly Detection",id:"-anomaly-detection",level:3},{value:"\ud83d\udc41\ufe0f Computer Vision",id:"\ufe0f-computer-vision",level:3},{value:"\u23f1\ufe0f Scenario Specific",id:"\ufe0f-scenario-specific",level:3},{value:"Features",id:"features",level:2},{value:"\ud83e\udd1d User-friendly",id:"-user-friendly",level:3},{value:"\ud83d\udd0b Models with low computing power and high performance",id:"-models-with-low-computing-power-and-high-performance",level:3},{value:"\ud83d\uddc2\ufe0f Supports multiple formats for model export",id:"\ufe0f-supports-multiple-formats-for-model-export",level:3},{value:"Application Examples",id:"application-examples",level:2},{value:"Object Detection",id:"object-detection",level:3},{value:"Pointer Meter Recognition",id:"pointer-meter-recognition",level:3},{value:"Digital Meter Recognition",id:"digital-meter-recognition",level:3}],d={toc:l},p="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/sscma/docs/images/SSCMA-Hero.png"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Seeed SenseCraft Model Assistant (or simply SSCMA) is an open-source project focused on embedded AI. We have optimized excellent algorithms from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-mmlab"},"OpenMMLab")," for real-world scenarios and made implementation more user-friendly, achieving faster and more accurate inference on embedded devices."),(0,r.kt)("h2",{id:"whats-included"},"What's included?"),(0,r.kt)("p",null,"Currently we support the following directions of algorithms:"),(0,r.kt)("h3",{id:"-anomaly-detection"},"\ud83d\udd0d Anomaly Detection"),(0,r.kt)("p",null,"In the real world, anomalous data is often difficult to identify, and even if it can be identified, it requires a very high cost. The anomaly detection algorithm collects normal data in a low-cost way, and anything outside normal data is considered anomalous."),(0,r.kt)("h3",{id:"\ufe0f-computer-vision"},"\ud83d\udc41\ufe0f Computer Vision"),(0,r.kt)("p",null,"Here we provide a number of computer vision algorithms such as object detection, image classification, image segmentation and pose estimation. However, these algorithms cannot run on low-cost hardware. SSCMA optimizes these computer vision algorithms to achieve good running speed and accuracy in low-end devices."),(0,r.kt)("h3",{id:"\ufe0f-scenario-specific"},"\u23f1\ufe0f Scenario Specific"),(0,r.kt)("p",null,"SSCMA provides customized scenarios for specific production environments, such as identification of analog instruments, traditional digital meters, and audio classification. We will continue to add more algorithms for specified scenarios in the future."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"-user-friendly"},"\ud83e\udd1d User-friendly"),(0,r.kt)("p",null,"SSCMA provides a user-friendly platform that allows users to easily perform training on collected data, and to better understand the performance of algorithms through visualizations generated during the training process."),(0,r.kt)("h3",{id:"-models-with-low-computing-power-and-high-performance"},"\ud83d\udd0b Models with low computing power and high performance"),(0,r.kt)("p",null,"SSCMA focuses on end-side AI algorithm research, and the algorithm models can be deployed on microprocessors, similar to ",(0,r.kt)("a",{parentName:"p",href:"https://www.espressif.com.cn/en/products/socs/esp32"},"ESP32"),", some ",(0,r.kt)("a",{parentName:"p",href:"https://arduino.cc"},"Arduino")," development boards, and even in embedded SBCs such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org"},"Raspberry Pi"),"."),(0,r.kt)("h3",{id:"\ufe0f-supports-multiple-formats-for-model-export"},"\ud83d\uddc2\ufe0f Supports multiple formats for model export"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/lite"},"TensorFlow Lite")," is mainly used in microcontrollers, while ",(0,r.kt)("a",{parentName:"p",href:"https://onnx.ai"},"ONNX")," is mainly used in devices with Embedded Linux. There are some special formats such as ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/tensorrt"},"TensorRT"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openvino.ai"},"OpenVINO")," which are already well supported by OpenMMLab. SSCMA has added TFLite model export for microcontrollers, which can be directly converted to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/tensorrt"},"TensorRT"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/uf2"},"UF2")," format and drag-and-drop into the device for deployment."),(0,r.kt)("h2",{id:"application-examples"},"Application Examples"),(0,r.kt)("h3",{id:"object-detection"},"Object Detection"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"800",src:"https://files.seeedstudio.com/sscma/docs/static/esp32/images/person_detection.png"})),(0,r.kt)("h3",{id:"pointer-meter-recognition"},"Pointer Meter Recognition"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"800",src:"https://files.seeedstudio.com/sscma/docs/static/grove/images/pfld_meter.gif"})),(0,r.kt)("h3",{id:"digital-meter-recognition"},"Digital Meter Recognition"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"800",src:"https://files.seeedstudio.com/sscma/docs/static/grove/images/digital_meter.gif"})),(0,r.kt)("p",null,"More application examples can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/sscma-model-zoo"},"Model Zoo"),"\u3002"))}m.isMDXComponent=!0}}]);