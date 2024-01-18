"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={description:"Classify Dog and Cat from an image.",title:"Image classification",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/tinyml_course_Image_classification_project",last_update:{date:"08/09/2023",author:"Salman"}},r="Image Classification",s={unversionedId:"Topics/TinyML/TinyML_Workshop/Image_classification_project",id:"Topics/TinyML/TinyML_Workshop/Image_classification_project",title:"Image classification",description:"Classify Dog and Cat from an image.",source:"@site/docs/Topics/TinyML/TinyML_Workshop/Image_classification_project.md",sourceDirName:"Topics/TinyML/TinyML_Workshop",slug:"/tinyml_course_Image_classification_project",permalink:"/tinyml_course_Image_classification_project",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/TinyML_Workshop/Image_classification_project.md",tags:[],version:"current",lastUpdatedBy:"Salman",lastUpdatedAt:1691539200,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{description:"Classify Dog and Cat from an image.",title:"Image classification",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/tinyml_course_Image_classification_project",last_update:{date:"08/09/2023",author:"Salman"}},sidebar:"ProductSidebar",previous:{title:"Key Word Spotting",permalink:"/tinyml_course_Key_Word_Spotting"},next:{title:"Overview",permalink:"/ModelAssistant_Introduce_Overview"}},l={},p=[{value:"How it&#39;s working.",id:"how-its-working",level:3},{value:"Things needed",id:"things-needed",level:4},{value:"Step 1. Collecting the Cat and Dog Image",id:"step-1-collecting-the-cat-and-dog-image",level:2},{value:"1.1 Method 1: Collect Images via XIAO-ESP32S3 Sense",id:"11-method-1-collect-images-via-xiao-esp32s3-sense",level:3},{value:"1.1.1 Connect Camera",id:"111-connect-camera",level:4},{value:"1.1.2 Install XIAO-ESP32S3 Sense on Arduino.",id:"112-install-xiao-esp32s3-sense-on-arduino",level:4},{value:"1.2 Upload sketch that can take image and save to SD Card.",id:"12-upload-sketch-that-can-take-image-and-save-to-sd-card",level:4},{value:"1.2 Method 2: Upload images to the EdgeImpulse Direclty.",id:"12-method-2-upload-images-to-the-edgeimpulse-direclty",level:3},{value:"Step 2. Design Impulse and Training our Neural Network",id:"step-2-design-impulse-and-training-our-neural-network",level:2},{value:"Step 2.1: Feature extraction using processing block.",id:"step-21-feature-extraction-using-processing-block",level:3},{value:"Step 3. Run the example sketch",id:"step-3-run-the-example-sketch",level:2},{value:"Resources",id:"resources",level:2},{value:"For Seeed Studio XIAO ESP32S3",id:"for-seeed-studio-xiao-esp32s3",level:3},{value:"For Seeed Studio XIAO ESP32S3 Sense",id:"for-seeed-studio-xiao-esp32s3-sense",level:3},{value:"Other",id:"other",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"image-classification"},"Image Classification"),(0,a.kt)("p",null,"Here we are going to build a tinyML project with XIAO ESPS3-Sense to classify Dog and Cat in photo. Let's get started. "),(0,a.kt)("h3",{id:"how-its-working"},"How it's working."),(0,a.kt)("p",null,"We are running the machine learning model on our XIAO and feeding camera stream to it. Then the XIAO inference the result and predict with the help on onboard neiral network we implimented on. Let's build one. "),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/digram.png?raw=true",style:{width:1e3,height:"auto"}})),(0,a.kt)("h4",{id:"things-needed"},"Things needed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XIAO ESP32-Sense"),(0,a.kt)("li",{parentName:"ul"},"<32GB MicroSD card "),(0,a.kt)("li",{parentName:"ul"},"Type-C Cable"),(0,a.kt)("li",{parentName:"ul"},"Arduino IDE "),(0,a.kt)("li",{parentName:"ul"},"Edgeimpulse Account ")),(0,a.kt)("h2",{id:"step-1-collecting-the-cat-and-dog-image"},"Step 1. Collecting the Cat and Dog Image"),(0,a.kt)("p",null,"First step of machine learning project is to collect the dataset and here we need to collect Dog and Cat images. Here, We can collect the image in two methods. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Collect Images direclty from the XIAO-ESPS3 Sense and Save to SD card the upload to the EdgeImpulse"),(0,a.kt)("li",{parentName:"ol"},"Direclty Collect the image via mobile phone, internet or open dataset then uploaded to the Edgeimpulse. ")),(0,a.kt)("h3",{id:"11-method-1-collect-images-via-xiao-esp32s3-sense"},"1.1 Method 1: Collect Images via XIAO-ESP32S3 Sense"),(0,a.kt)("p",null,"Here we are collecting images using sense camera module and saving to the SD card, then later we will upload to the EdgeImpulse. "),(0,a.kt)("h4",{id:"111-connect-camera"},"1.1.1 Connect Camera"),(0,a.kt)("p",null,"If you are shopping for the XIAO ESP32S3 Sense, then you should also include an expansion board. This expansion board has a 1600*1200 OV2640 camera sensor, Onboard SD Card Slot and digital microphone."),(0,a.kt)("p",null,"By installing the expansion board with XIAO ESP32S3 Sense, you can use the functions on the expansion board."),(0,a.kt)("p",null,'Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif",style:{width:500,height:"auto"}})),(0,a.kt)("p",null,"We now have a new fully XIAO ESP32S3 Sense-compatible powerful camera, the OV5640, on our shelves, and if you purchase it, you can replace the camera to use it."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif",style:{width:500,height:"auto"}})),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Download and Install the stable version of Arduino IDE according to your operating system.")),(0,a.kt)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"download_arduino_item",href:"https://www.arduino.cc/en/software"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"},"Download Arduino IDE"))))),(0,a.kt)("h4",{id:"112-install-xiao-esp32s3-sense-on-arduino"},"1.1.2 Install XIAO-ESP32S3 Sense on Arduino."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Add ESP32 board package to your Arduino IDE."),(0,a.kt)("p",{parentName:"li"},"  Navigate to ",(0,a.kt)("strong",{parentName:"p"},"File > Preferences"),", and fill ",(0,a.kt)("strong",{parentName:"p"},'"Additional Boards Manager URLs"')," with the url below:\n",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json"},"https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json"))),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png",style:{width:800,height:"auto"}})),(0,a.kt)("p",{parentName:"li"},"  Navigate to ",(0,a.kt)("strong",{parentName:"p"},"Tools > Board > Boards Manager..."),", type the keyword ",(0,a.kt)("strong",{parentName:"p"},"esp32")," in the search box, select the latest version of ",(0,a.kt)("strong",{parentName:"p"},"esp32"),", and install it."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png",style:{width:1e3,height:"auto"}})))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The on-board package for XIAO ESP32S3 requires at least version ",(0,a.kt)("strong",{parentName:"p"},"2.0.8")," to be available.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Select your board and port.")),(0,a.kt)("p",null,"On top of the Arduino IDE, you can select the port directly. This is likely to be COM3 or higher (",(0,a.kt)("strong",{parentName:"p"},"COM1")," and ",(0,a.kt)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports)."),(0,a.kt)("p",null,"Also, search for ",(0,a.kt)("strong",{parentName:"p"},"xiao")," in the development board on the left. select ",(0,a.kt)("strong",{parentName:"p"},"XIAO_ESP32S3"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png",style:{width:600,height:"auto"}})),(0,a.kt)("p",null,"With this preparation, you can start writing programs for XIAO ESP32S3 to compile and upload."),(0,a.kt)("h4",{id:"12-upload-sketch-that-can-take-image-and-save-to-sd-card"},"1.2 Upload sketch that can take image and save to SD Card."),(0,a.kt)("p",null,"Download the sketch file from ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/take_photos_command.ino.zip"},"here"),', and unzip in your computer and click on the "take_photos_command.ino" to open the sketch. Then select correct port and board for XIAO for upload.'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/img_CaptureSketch01.png?raw=true\n",style:{width:600,height:"auto"}})),(0,a.kt)("p",null,"While taking photos, make sure to point to the image or object we need to collect as dataset. "),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/cat_image_snap.png?raw=true",style:{width:600,height:"auto"}})),(0,a.kt)("p",null,"Since, it's a image classification we need to collect as many image to make system more stable. So collect more cute dog and cat images. "),(0,a.kt)("h3",{id:"12-method-2-upload-images-to-the-edgeimpulse-direclty"},"1.2 Method 2: Upload images to the EdgeImpulse Direclty."),(0,a.kt)("p",null,"For this method, we need to collect images from internet or via phone. Luckly, we have service like ",(0,a.kt)("a",{parentName:"p",href:"https://www.kaggle.com/"},"Kaggle")," to provide us dataset for Dog and Cat images, please ",(0,a.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/tongpython/cat-and-dog"},"see here"),". "),(0,a.kt)("p",null,"Once you collected the dataset, Open your EdgeImpulse project and Goto ",(0,a.kt)("strong",{parentName:"p"},"Data acquisition")," and select ",(0,a.kt)("strong",{parentName:"p"},"+ Add data")," and then choose ",(0,a.kt)("strong",{parentName:"p"},"Upload data")," option. "),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/collectData1.png",style:{width:600,height:"auto"}})),(0,a.kt)("p",null,"From the page, Select uplaod modes as ",(0,a.kt)("strong",{parentName:"p"},'"Select a folder"'),", the select the files from the below option. Makesure to select the ",(0,a.kt)("strong",{parentName:"p"},'"Automaticlly split between training and testing"')," and Label as ",(0,a.kt)("strong",{parentName:"p"},'"Infer from file name"')),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection01.png?raw=true",style:{width:600,height:"auto"}})),(0,a.kt)("p",null,"Once you uploaded done, you can see the window as below. "),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/DataCollection02.png?raw=true",style:{width:600,height:"auto"}})),(0,a.kt)("h2",{id:"step-2-design-impulse-and-training-our-neural-network"},"Step 2. Design Impulse and Training our Neural Network"),(0,a.kt)("p",null,"After collecting data for your project, you can now create your Impulse. A complete Impulse will consist of 3 main building blocks: input block, processing block and a learning block."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To design an impulse, Select ",(0,a.kt)("strong",{parentName:"li"},"Create an impulse")," under the ",(0,a.kt)("strong",{parentName:"li"},"Impulse design"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Input block")," : The input block indicates the type of input data you are training your model with. This can be time series (audio, vibration, movements) or images. Here we select the  Image data as Inputblock "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Processing blocks"),": A processing block is basically a feature extractor. It consists of DSP (Digital Signal Processing) operations that are used to extract features that our model learns on. These operations vary depending on the type of data used in your project. Here we are using EdgeImpulse pre-build image as processing block. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Learning blocks")," : After adding your processing block, it is now time to add a learning block to make your impulse complete. A learning block is simply a neural network that is trained to learn on your data. Here we are using Transfer Learning (Images) it will fine tune a pre-trained image classification model on your data. Good performance even with relatively small image datasets."),(0,a.kt)("li",{parentName:"ol"},"After Designing the impulse, click on ",(0,a.kt)("strong",{parentName:"li"},"save impulse")," to continue. ")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse01.png?raw=true",style:{width:600,height:"auto"}})),(0,a.kt)("h3",{id:"step-21-feature-extraction-using-processing-block"},"Step 2.1: Feature extraction using processing block."),(0,a.kt)("p",null,"Here we will use DSP (Digital Signal Processing) operations that are used to extract features that our model learns on. These operations vary depending on the type of data used in your project. First we need set the parameters as below mentioned. "),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/Impulse02.png?raw=true\n",style:{width:600,height:"auto"}})),(0,a.kt)("p",null,"Once we set the parameters, we need to generate the features, click ",(0,a.kt)("strong",{parentName:"p"},"generate features")," to start the operation.   "),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/feature03.png?raw=true",style:{width:600,height:"auto"}})),(0,a.kt)("p",null,"Once we generate the features, We need to configure the neural network that is trained to learn on your data. Here we are using Transfer Learning (Images) it will fine tune a pre-trained image classification model on your data. Good performance even with relatively small image datasets. Select the neural network as mentioned below and click ",(0,a.kt)("strong",{parentName:"p"},"Start Training"),". It will take some time and you need wait.  "),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/train2.png?raw=true",style:{width:600,height:"auto"}})),(0,a.kt)("p",null,"Once the training is done, we are ready to download our tinyML libray that created. Go to the ",(0,a.kt)("strong",{parentName:"p"},"Deployment option")," and select ",(0,a.kt)("strong",{parentName:"p"},"Arduino library")," are deployment and click ",(0,a.kt)("strong",{parentName:"p"},"Build")," to generate the library."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-esp32-S3-Sense/Image%20Recognition/src/img/deployment1.png?raw=true",style:{width:600,height:"auto"}})),(0,a.kt)("p",null,"The library will be downloaded automatically. And After that, add that to the arduino IDE. open your Arduino IDE, click on Sketch > Include Library > Add .ZIP Library."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png",style:{width:1e3,height:"auto"}})),(0,a.kt)("p",null,"Choose the zip file you just downloaded\uff0cand if the library install correct, you will see Library added to your libraries in the notice window. Which means the library is installed successfully."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png",style:{width:1e3,height:"auto"}})),(0,a.kt)("h2",{id:"step-3-run-the-example-sketch"},"Step 3. Run the example sketch"),(0,a.kt)("p",null,"Even though Edge Impulse has not released its SDK for ESP32S3 using the ESP NN accelerator, thanks to Dmitry Maslov, we can have its assembly optimizations restored and fixed for ESP32-S3. This solution is not official yet, and EI will include it in EI SDK once they fix conflicts with other boards."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For now, this only works with the non-EON version. So, you should also keep the the option ",(0,a.kt)("strong",{parentName:"p"},"Enable EON Compiler")," not selected.")),(0,a.kt)("p",null,"When the Build button is selected, a Zip file will be created and downloaded to your computer."),(0,a.kt)("p",null,"Before we use the downloaded library, we need to enable the ",(0,a.kt)("strong",{parentName:"p"},"ESP NN")," Accelerator. For that, you can download a preliminary version from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip"},"project GitHub"),", unzip it, and replace the ESP NN folder with it under:",(0,a.kt)("inlineCode",{parentName:"p"},"src/edge-impulse-sdk/porting/espressif/ESP-NN"),", in your Arduino library folder."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png",style:{width:800,height:"auto"}})),(0,a.kt)("p",null,"Copy the below inference code and paste to your Arduino IDE. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\n/* Edge Impulse Arduino examples\n * Copyright (c) 2022 EdgeImpulse Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the "Software"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\n\n/* Includes ---------------------------------------------------------------- */\n#include <XIAO_esp32S3_CatDog2_inferencing.h>\n#include "edge-impulse-sdk/dsp/image/image.hpp"\n\n#include "esp_camera.h"\n\n// Select camera model - find more camera models in camera_pins.h file here\n// https://github.com/espressif/arduino-esp32/blob/master/libraries/ESP32/examples/Camera/CameraWebServer/camera_pins.h\n\n#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM\n\n#define PWDN_GPIO_NUM     -1\n#define RESET_GPIO_NUM    -1\n#define XCLK_GPIO_NUM     10\n#define SIOD_GPIO_NUM     40\n#define SIOC_GPIO_NUM     39\n\n#define Y9_GPIO_NUM       48\n#define Y8_GPIO_NUM       11\n#define Y7_GPIO_NUM       12\n#define Y6_GPIO_NUM       14\n#define Y5_GPIO_NUM       16\n#define Y4_GPIO_NUM       18\n#define Y3_GPIO_NUM       17\n#define Y2_GPIO_NUM       15\n#define VSYNC_GPIO_NUM    38\n#define HREF_GPIO_NUM     47\n#define PCLK_GPIO_NUM     13\n\n#define LED_GPIO_NUM      21\n\n\n/* Constant defines -------------------------------------------------------- */\n#define EI_CAMERA_RAW_FRAME_BUFFER_COLS           320\n#define EI_CAMERA_RAW_FRAME_BUFFER_ROWS           240\n#define EI_CAMERA_FRAME_BYTE_SIZE                 3\n\n/* Private variables ------------------------------------------------------- */\nstatic bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal\nstatic bool is_initialised = false;\nuint8_t *snapshot_buf; //points to the output of the capture\n\nstatic camera_config_t camera_config = {\n    .pin_pwdn = PWDN_GPIO_NUM,\n    .pin_reset = RESET_GPIO_NUM,\n    .pin_xclk = XCLK_GPIO_NUM,\n    .pin_sscb_sda = SIOD_GPIO_NUM,\n    .pin_sscb_scl = SIOC_GPIO_NUM,\n\n    .pin_d7 = Y9_GPIO_NUM,\n    .pin_d6 = Y8_GPIO_NUM,\n    .pin_d5 = Y7_GPIO_NUM,\n    .pin_d4 = Y6_GPIO_NUM,\n    .pin_d3 = Y5_GPIO_NUM,\n    .pin_d2 = Y4_GPIO_NUM,\n    .pin_d1 = Y3_GPIO_NUM,\n    .pin_d0 = Y2_GPIO_NUM,\n    .pin_vsync = VSYNC_GPIO_NUM,\n    .pin_href = HREF_GPIO_NUM,\n    .pin_pclk = PCLK_GPIO_NUM,\n\n    //XCLK 20MHz or 10MHz for OV2640 double FPS (Experimental)\n    .xclk_freq_hz = 20000000,\n    .ledc_timer = LEDC_TIMER_0,\n    .ledc_channel = LEDC_CHANNEL_0,\n\n    .pixel_format = PIXFORMAT_JPEG, //YUV422,GRAYSCALE,RGB565,JPEG\n    .frame_size = FRAMESIZE_QVGA,    //QQVGA-UXGA Do not use sizes above QVGA when not JPEG\n\n    .jpeg_quality = 12, //0-63 lower number means higher quality\n    .fb_count = 1,       //if more than one, i2s runs in continuous mode. Use only with JPEG\n    .fb_location = CAMERA_FB_IN_PSRAM,\n    .grab_mode = CAMERA_GRAB_WHEN_EMPTY,\n};\n\n/* Function definitions ------------------------------------------------------- */\nbool ei_camera_init(void);\nvoid ei_camera_deinit(void);\nbool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) ;\n\n/**\n* @brief      Arduino setup function\n*/\nvoid setup()\n{\n    // put your setup code here, to run once:\n    Serial.begin(115200);\n    //comment out the below line to start inference immediately after upload\n    while (!Serial);\n    Serial.println("Edge Impulse Inferencing Demo");\n    if (ei_camera_init() == false) {\n        ei_printf("Failed to initialize Camera!\\r\\n");\n    }\n    else {\n        ei_printf("Camera initialized\\r\\n");\n    }\n\n    ei_printf("\\nStarting continious inference in 2 seconds...\\n");\n    ei_sleep(2000);\n}\n\n/**\n* @brief      Get data and run inferencing\n*\n* @param[in]  debug  Get debug info if true\n*/\nvoid loop()\n{\n\n    // instead of wait_ms, we\'ll wait on the signal, this allows threads to cancel us...\n    if (ei_sleep(5) != EI_IMPULSE_OK) {\n        return;\n    }\n\n    snapshot_buf = (uint8_t*)malloc(EI_CAMERA_RAW_FRAME_BUFFER_COLS * EI_CAMERA_RAW_FRAME_BUFFER_ROWS * EI_CAMERA_FRAME_BYTE_SIZE);\n\n    // check if allocation was successful\n    if(snapshot_buf == nullptr) {\n        ei_printf("ERR: Failed to allocate snapshot buffer!\\n");\n        return;\n    }\n\n    ei::signal_t signal;\n    signal.total_length = EI_CLASSIFIER_INPUT_WIDTH * EI_CLASSIFIER_INPUT_HEIGHT;\n    signal.get_data = &ei_camera_get_data;\n\n    if (ei_camera_capture((size_t)EI_CLASSIFIER_INPUT_WIDTH, (size_t)EI_CLASSIFIER_INPUT_HEIGHT, snapshot_buf) == false) {\n        ei_printf("Failed to capture image\\r\\n");\n        free(snapshot_buf);\n        return;\n    }\n\n    // Run the classifier\n    ei_impulse_result_t result = { 0 };\n\n    EI_IMPULSE_ERROR err = run_classifier(&signal, &result, debug_nn);\n    if (err != EI_IMPULSE_OK) {\n        ei_printf("ERR: Failed to run classifier (%d)\\n", err);\n        return;\n    }\n\n    // print the predictions\n    ei_printf("Predictions (DSP: %d ms., Classification: %d ms., Anomaly: %d ms.): \\n",\n                result.timing.dsp, result.timing.classification, result.timing.anomaly);\n\n#if EI_CLASSIFIER_OBJECT_DETECTION == 1\n    bool bb_found = result.bounding_boxes[0].value > 0;\n    for (size_t ix = 0; ix < result.bounding_boxes_count; ix++) {\n        auto bb = result.bounding_boxes[ix];\n        if (bb.value == 0) {\n            continue;\n        }\n        ei_printf("    %s (%f) [ x: %u, y: %u, width: %u, height: %u ]\\n", bb.label, bb.value, bb.x, bb.y, bb.width, bb.height);\n    }\n    if (!bb_found) {\n        ei_printf("    No objects found\\n");\n    }\n#else\n    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("    %s: %.5f\\n", result.classification[ix].label,\n                                    result.classification[ix].value);\n    }\n#endif\n\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n        ei_printf("    anomaly score: %.3f\\n", result.anomaly);\n#endif\n\n\n    free(snapshot_buf);\n\n}\n\n/**\n * @brief   Setup image sensor & start streaming\n *\n * @retval  false if initialisation failed\n */\nbool ei_camera_init(void) {\n\n    if (is_initialised) return true;\n\n#if defined(CAMERA_MODEL_ESP_EYE)\n  pinMode(13, INPUT_PULLUP);\n  pinMode(14, INPUT_PULLUP);\n#endif\n\n    //initialize the camera\n    esp_err_t err = esp_camera_init(&camera_config);\n    if (err != ESP_OK) {\n      Serial.printf("Camera init failed with error 0x%x\\n", err);\n      return false;\n    }\n\n    sensor_t * s = esp_camera_sensor_get();\n    // initial sensors are flipped vertically and colors are a bit saturated\n    if (s->id.PID == OV3660_PID) {\n      s->set_vflip(s, 1); // flip it back\n      s->set_brightness(s, 1); // up the brightness just a bit\n      s->set_saturation(s, 0); // lower the saturation\n    }\n\n#if defined(CAMERA_MODEL_M5STACK_WIDE)\n    s->set_vflip(s, 1);\n    s->set_hmirror(s, 1);\n#elif defined(CAMERA_MODEL_ESP_EYE)\n    s->set_vflip(s, 1);\n    s->set_hmirror(s, 1);\n    s->set_awb_gain(s, 1);\n#endif\n\n    is_initialised = true;\n    return true;\n}\n\n/**\n * @brief      Stop streaming of sensor data\n */\nvoid ei_camera_deinit(void) {\n\n    //deinitialize the camera\n    esp_err_t err = esp_camera_deinit();\n\n    if (err != ESP_OK)\n    {\n        ei_printf("Camera deinit failed\\n");\n        return;\n    }\n\n    is_initialised = false;\n    return;\n}\n\n\n/**\n * @brief      Capture, rescale and crop image\n *\n * @param[in]  img_width     width of output image\n * @param[in]  img_height    height of output image\n * @param[in]  out_buf       pointer to store output image, NULL may be used\n *                           if ei_camera_frame_buffer is to be used for capture and resize/cropping.\n *\n * @retval     false if not initialised, image captured, rescaled or cropped failed\n *\n */\nbool ei_camera_capture(uint32_t img_width, uint32_t img_height, uint8_t *out_buf) {\n    bool do_resize = false;\n\n    if (!is_initialised) {\n        ei_printf("ERR: Camera is not initialized\\r\\n");\n        return false;\n    }\n\n    camera_fb_t *fb = esp_camera_fb_get();\n\n    if (!fb) {\n        ei_printf("Camera capture failed\\n");\n        return false;\n    }\n\n   bool converted = fmt2rgb888(fb->buf, fb->len, PIXFORMAT_JPEG, snapshot_buf);\n\n   esp_camera_fb_return(fb);\n\n   if(!converted){\n       ei_printf("Conversion failed\\n");\n       return false;\n   }\n\n    if ((img_width != EI_CAMERA_RAW_FRAME_BUFFER_COLS)\n        || (img_height != EI_CAMERA_RAW_FRAME_BUFFER_ROWS)) {\n        do_resize = true;\n    }\n\n    if (do_resize) {\n        ei::image::processing::crop_and_interpolate_rgb888(\n        out_buf,\n        EI_CAMERA_RAW_FRAME_BUFFER_COLS,\n        EI_CAMERA_RAW_FRAME_BUFFER_ROWS,\n        out_buf,\n        img_width,\n        img_height);\n    }\n\n\n    return true;\n}\n\nstatic int ei_camera_get_data(size_t offset, size_t length, float *out_ptr)\n{\n    // we already have a RGB888 buffer, so recalculate offset into pixel index\n    size_t pixel_ix = offset * 3;\n    size_t pixels_left = length;\n    size_t out_ptr_ix = 0;\n\n    while (pixels_left != 0) {\n        out_ptr[out_ptr_ix] = (snapshot_buf[pixel_ix] << 16) + (snapshot_buf[pixel_ix + 1] << 8) + snapshot_buf[pixel_ix + 2];\n\n        // go to the next pixel\n        out_ptr_ix++;\n        pixel_ix+=3;\n        pixels_left--;\n    }\n    // and done!\n    return 0;\n}\n\n#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_CAMERA\n#error "Invalid model for current sensor"\n#endif\n\n\n')),(0,a.kt)("p",null,"Makesure to replace the ",(0,a.kt)("strong",{parentName:"p"},'"#include <XIAO_esp32S3_CatDog2_inferencing.h>"')," with the library you genenrated. The upload the code and point to the Cat or Dog images or actual once, we can see the results Serial monitor. "),(0,a.kt)("p",null,"Congrats to you \ud83d\ude4c on completing the tinyML image classification project. "),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,"[PDF]"," ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf"},"ESP32-S3 Datasheet"))),(0,a.kt)("h3",{id:"for-seeed-studio-xiao-esp32s3"},"For Seeed Studio XIAO ESP32S3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.1.pdf"},"Seeed Studio XIAO ESP32S3 Schematic"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip"},"Seeed Studio XIAO ESP32S3 Eagle Libraries"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[DXF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf"},"Seeed Studio XIAO ESP32S3 Dimension in DXF"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[LBR]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr"},"Seeed Studio XIAO ESP32S3 Eagle footprint"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware.zip"},"Seeed Studio XIAO ESP32S3 Factory firmware"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[XLSX]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx"},"Seeed Studio XIAO ESP32S3 pinout sheet")))),(0,a.kt)("h3",{id:"for-seeed-studio-xiao-esp32s3-sense"},"For Seeed Studio XIAO ESP32S3 Sense"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf"},"Seeed Studio XIAO ESP32S3 Sense Schematic"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip"},"Seeed Studio XIAO ESP32S3 Sense KiCAD Libraries"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip"},"Seeed Studio XIAO ESP32S3 Sense Eagle Libraries"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[DXF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf"},"Seeed Studio XIAO ESP32S3 Sense Dimension in DXF (top)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[DXF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf"},"Seeed Studio XIAO ESP32S3 Sense Dimension in DXF (bottom)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAOESP32S3-Sense-firmware.zip"},"Seeed Studio XIAO ESP32S3 Sense Factory firmware"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[XLSX]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx"},"Seeed Studio XIAO ESP32S3 Sense pinout sheet")))),(0,a.kt)("h3",{id:"other"},"Other"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[STP]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp"},"XIAO ESP32S3 Sense housing design (top)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[STP]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp"},"XIAO ESP32S3 Sense housing design (bottom)")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The remaining open source material is being compiled, so stay tuned!")),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);