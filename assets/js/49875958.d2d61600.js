"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34692],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,g=p["".concat(l,".").concat(b)]||p[b]||c[b]||r;return a?o.createElement(g,i(i({ref:t},m),{},{components:a})):o.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},21598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(87462),n=(a(67294),a(3905));const r={description:"Quick Start For Model Assistant",title:"Quick Start",keywords:["sscma model assistant ai tinyml"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ModelAssistant_Introduce_Quick_Start",last_update:{date:"01/11/2024",author:"LynnL4"}},i="Quick Start",s={unversionedId:"Topics/TinyML/ModelAssistant/introduction/quick_start",id:"Topics/TinyML/ModelAssistant/introduction/quick_start",title:"Quick Start",description:"Quick Start For Model Assistant",source:"@site/docs/Topics/TinyML/ModelAssistant/introduction/quick_start.md",sourceDirName:"Topics/TinyML/ModelAssistant/introduction",slug:"/ModelAssistant_Introduce_Quick_Start",permalink:"/ModelAssistant_Introduce_Quick_Start",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/introduction/quick_start.md",tags:[],version:"current",lastUpdatedBy:"LynnL4",lastUpdatedAt:1704931200,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{description:"Quick Start For Model Assistant",title:"Quick Start",keywords:["sscma model assistant ai tinyml"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ModelAssistant_Introduce_Quick_Start",last_update:{date:"01/11/2024",author:"LynnL4"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/ModelAssistant_Introduce_Overview"},next:{title:"Installation",permalink:"/ModelAssistant_Introduce_Installation"}},l={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Model Deployment",id:"model-deployment",level:3},{value:"Model Training",id:"model-training",level:3},{value:"Object Detection",id:"object-detection",level:4},{value:"Image Classification",id:"image-classification",level:4},{value:"Advanced",id:"advanced",level:2},{value:"Necessary Knowledge",id:"necessary-knowledge",level:2},{value:"\ud83d\udcf8 Computer Vision:",id:"-computer-vision",level:3},{value:"\ud83d\udcbb Programming:",id:"-programming",level:3},{value:"\ud83e\uddf0 Tools:",id:"-tools",level:3}],m={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quick-start"},"Quick Start"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"/ModelAssistant_Introduce_Overview"},"Overview")," we have introduced the functions and features provided by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA"),". Considering that ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," is divided into multiple different modules, each module completing its corresponding tasks, we suggest following the steps below to quickly get started."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We suggest that all beginners of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," start learning from ",(0,n.kt)("a",{parentName:"p",href:"#getting-started"},"Getting Started"),", if you are familiar with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/open-mmlab"},"OpenMMLab"),", and you want to try to deploy on edge computing devices, modify existing neural networks, or train on user-defined data sets, you can directly refer to ",(0,n.kt)("a",{parentName:"p",href:"#advanced"},"Advanced"),".")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"model-deployment"},"Model Deployment"),(0,n.kt)("p",null,"If you want to deploy the model on the device, please refer to the section ",(0,n.kt)("a",{parentName:"p",href:"/ModelAssistant_Deploy_Overview"},"Deploy")," to learn how to deploy the model."),(0,n.kt)("h3",{id:"model-training"},"Model Training"),(0,n.kt)("p",null,"If you want to train a model, we highly recommend that you first try to train a model on the Colab platform. You can refer to the following tutorials:"),(0,n.kt)("h4",{id:"object-detection"},"Object Detection"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Model"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Colab"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gender_Detection_Swift-YOLO_192.md"},"Gender_Detection_Swift-YOLO_192")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gender_Detection_Swift-YOLO_192.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Digital_Meter_Water_Swift-YOLO_192.md"},"Digital_Meter_Water_Swift-YOLO_192")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Digital_Meter_Water_Swift-YOLO_192.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Apple_Detection_Swift-YOLO_192.md"},"Apple_Detection_Swift-YOLO_192")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Apple_Detection_Swift-YOLO_192.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/person_Detection_Swift-YOLO_192.md"},"person_Detection_Swift-YOLO_192")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/person_Detection_Swift-YOLO_192.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Face_Detection_Swift-YOLO_96.md"},"Face_Detection_Swift-YOLO_96")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Face_Detection_Swift-YOLO_96.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/COCO_Detection_Swift-YOLO_320.md"},"COCO_Detection_Swift-YOLO_320")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/COCO_Detection_Swift-YOLO_320.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gesture_Detection_Swift-YOLO_192.md"},"Gesture_Detection_Swift-YOLO_192")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gesture_Detection_Swift-YOLO_192.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Digital_Meter_Electricity_Swift-YOLO_192.md"},"Digital_Meter_Electricity_Swift-YOLO_192")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Digital_Meter_Electricity_Swift-YOLO_192.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))))),(0,n.kt)("h4",{id:"image-classification"},"Image Classification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Model"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Colab"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/MNIST_Classification_MobileNetV2_0.5_Rep_32.md"},"MNIST_Classification_MobileNetV2_0.5_Rep_32")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/MNIST_Classification_MobileNetV2_0.5_Rep_32.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Gender_Classification_MobileNetV2_0.35_Rep_64.md"},"Gender_Classification_MobileNetV2_0.35_Rep_64")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Gender_Classification_MobileNetV2_0.35_Rep_64.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_64.md"},"Person_Classification_MobileNetV2_0.35_Rep_64")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_64.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_96.md"},"Person_Classification_MobileNetV2_0.35_Rep_96")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_96.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/Person_Classification_MobileNetV2_0.35_Rep_32.md"},"Person_Classification_MobileNetV2_0.35_Rep_32")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/Person_Classification_MobileNetV2_0.35_Rep_32.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/seeed-studio/sscma-model-zoo/blob/main/docs/en/CIFAR-10_Classification_MobileNetV2_0.35_Rep_32.md"},"CIFAR-10_Classification_MobileNetV2_0.35_Rep_32")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://colab.research.google.com/github/seeed-studio/sscma-model-zoo/blob/main/notebooks/en/CIFAR-10_Classification_MobileNetV2_0.35_Rep_32.ipynb"},(0,n.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))))),(0,n.kt)("h2",{id:"advanced"},"Advanced"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"First, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/ModelAssistant_Introduce_Installation"},"Installation Guide")," to configure the running environment of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then, familiar with the basic usage methods of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Model Training"),", please refer to ",(0,n.kt)("a",{parentName:"p",href:"/ModelAssistant_Tutorials_Training_Overview"},"Model Training")," to learn how to use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," to train a model. We suggest that you select a model from an example for training.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Model Export"),". After completing model training, in order to deploy on the edge-computing device, it is necessary to first export the model. For the export tutorial of the model, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/ModelAssistant_Tutorials_Export_Overview"},"Model Export"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Model Verification"),". Model verification can be performed after training or export. The former verifies the correctness of the neural network and training results, while the latter mainly verifies the correctness of the exported model, facilitating deployment and debugging on edge computing devices later. Some methods for model validation have been provided in the documents in the above two steps."))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Model Deployment"),". If you want to deploy the exported training model on edge computing devices, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/ModelAssistant_Deploy_Overview"},"Depolyment")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Custom Datasets"),". If you want to train on a custom dataset, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/ModelAssistant_Tutorials_Datasets"},"Datasets"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Custom Model"),". If you want to modify an existing neural network or design your own neural network, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/ModelAssistant_Tutorials_Config"},"Model Configuration"),"."))),(0,n.kt)("h2",{id:"necessary-knowledge"},"Necessary Knowledge"),(0,n.kt)("h3",{id:"-computer-vision"},"\ud83d\udcf8 Computer Vision:"),(0,n.kt)("p",null,"The basics of computer vision are built upon digital image processing. So, you need to learn the basics of the DlP first. Then you can move forward to read computer vision topics like pattern recognition and 3D geometry. You need to know linear algebra to be able to fully understand some concepts of the computer vision like dimensionality reduction. After understanding the fundamentals of computer vision you should also build your knowledge in deep learning, especially in Convolutional Neural Networks (CNN)."),(0,n.kt)("h3",{id:"-programming"},"\ud83d\udcbb Programming:"),(0,n.kt)("p",null,"Python will be enough for design and prototyping, but if you want to do some\nembedded work, you should also be familiar with C++."),(0,n.kt)("h3",{id:"-tools"},"\ud83e\uddf0 Tools:"),(0,n.kt)("p",null,"OpenCV is the main tool for computer vision, and Numpy is an important tool for data processing and analysis. You must know them. You never know, but you should know what tools are available and how to use them. How to use them. Another tool you need to familiarize yourself with is the deep learning framework. Frameworks. You can start with Keras which is the easiest to learn and then learn Tensorflow or PyTorch."))}c.isMDXComponent=!0}}]);