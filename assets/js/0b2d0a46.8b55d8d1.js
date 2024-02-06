"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={description:"Shape Detection with reTerminal and Pi camera with OpenCV",title:"Shape Detection with reTerminal and Pi camera with OpenCV",keywords:["Edge","reTerminal","piCamera","OpenCV","Shape-Detection"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_DM_Shape_detection",last_update:{date:"2/5/2023",author:"Kasun Thushara"}},o=void 0,s={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal/Application/OpenCV/reTerminal_DM_Shape_detection",id:"Edge/Raspberry_Pi_Devices/reTerminal/Application/OpenCV/reTerminal_DM_Shape_detection",title:"Shape Detection with reTerminal and Pi camera with OpenCV",description:"Shape Detection with reTerminal and Pi camera with OpenCV",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/OpenCV/reTerminal_DM_Shape_detection.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal/Application/OpenCV",slug:"/reTerminal_DM_Shape_detection",permalink:"/reTerminal_DM_Shape_detection",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/OpenCV/reTerminal_DM_Shape_detection.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1675555200,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{description:"Shape Detection with reTerminal and Pi camera with OpenCV",title:"Shape Detection with reTerminal and Pi camera with OpenCV",keywords:["Edge","reTerminal","piCamera","OpenCV","Shape-Detection"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_DM_Shape_detection",last_update:{date:"2/5/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Color Detection with reTerminal and Pi camera with OpenCV",permalink:"/reTerminal_DM_Color_detection"},next:{title:"Object Tracking with reTerminal and Pi camera with OpenCV",permalink:"/reTerminal_DM_Face-tracking"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Contours",id:"contours",level:2},{value:"Grayscale conversion",id:"grayscale-conversion",level:3},{value:"Smoothing/Blurring",id:"smoothingblurring",level:3},{value:"Thresholding",id:"thresholding",level:3},{value:"Edge detection",id:"edge-detection",level:3},{value:"Let&#39;s Jump to code",id:"lets-jump-to-code",level:2},{value:"Applications",id:"applications",level:2},{value:"Tech support",id:"tech-support",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Shape detection using OpenCV is a computer vision technique that involves identifying and analyzing geometric shapes within images. ",(0,a.kt)("strong",{parentName:"p"},"OpenCV provides a comprehensive set of tools for this task, including contour detection, edge detection, and polygonal approximation"),". The process typically begins with image preprocessing steps such as grayscale conversion, blurring, and thresholding to enhance shape visibility. The contours extracted from the processed image are then analyzed, and the number of vertices in each contour is used to classify shapes such as ",(0,a.kt)("strong",{parentName:"p"},"circles, triangles, and rectangles"),". OpenCV's versatility in shape detection makes it a powerful tool for applications ranging from object recognition in robotics to quality control in manufacturing."),(0,a.kt)("h2",{id:"getting-start"},"Getting Start"),(0,a.kt)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,a.kt)("h3",{id:"hardware-preparation"},"Hardware preparation"),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",{class:"table-nobg"},(0,a.kt)("tr",{class:"table-trnobg"},(0,a.kt)("th",{class:"table-trnobg"},"reTerminal"),(0,a.kt)("th",{class:"table-trnobg"},"PiCam")),(0,a.kt)("tr",{class:"table-trnobg"}),(0,a.kt)("tr",{class:"table-trnobg"},(0,a.kt)("td",{class:"table-trnobg"},(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png",style:{width:300,height:"auto"}}))),(0,a.kt)("td",{class:"table-trnobg"},(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg",style:{width:300,height:"auto"}})))),(0,a.kt)("tr",{class:"table-trnobg"}),(0,a.kt)("tr",{class:"table-trnobg"},(0,a.kt)("td",{class:"table-trnobg"},(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,a.kt)("td",{class:"table-trnobg"},(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/reTerminal-piCam/"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,a.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,a.kt)("p",null,"We recommend installing the ",(0,a.kt)("strong",{parentName:"p"},"Bullesye"),"  or ",(0,a.kt)("strong",{parentName:"p"},"Bookworm")," version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc"},(0,a.kt)("strong",{parentName:"a"},"guide")),". "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We highly recommend checking out our previous tutorial on ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal_DM_opencv/"},(0,a.kt)("strong",{parentName:"a"},"Getting started with OpenCV")),", as this tutorial serves as a continuation in our series.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Let's discuss few Technical Terms on Shape detection.")),(0,a.kt)("h2",{id:"contours"},"Contours"),(0,a.kt)("p",null,"Contours in computer vision are like outlines or boundaries that help us identify the shape of objects in an image. Think of contours as the edges of things \u2013 the lines that define where one object ends and another begins. In simpler terms, if you imagine tracing the outline of an object with a pen, you'd be following its contour. In computer vision, we use algorithms to automatically find and represent these contours, making it easier to understand and analyze the shapes present in an image.Before detecting contours, it's common to preprocess the image to enhance features and make the contour detection more effective.Common preprocessing steps include:"),(0,a.kt)("h3",{id:"grayscale-conversion"},"Grayscale conversion"),(0,a.kt)("p",null,"Grayscale conversion is like turning a colorful picture into a black-and-white version. In a colorful image, each pixel has three color channels (red, green, and blue). Grayscale conversion combines these channels into a single channel, representing the intensity of light. Brightness variations in the image are now expressed using shades of gray instead of colors. It simplifies the image but retains important information for various computer vision tasks."),(0,a.kt)("h3",{id:"smoothingblurring"},"Smoothing/Blurring"),(0,a.kt)("p",null,"Apply a smoothing or blurring filter to reduce noise in the image.Gaussian blur is a common technique in image processing where each pixel in the image is averaged with its neighboring pixels, weighted more towards the central pixel. This helps in reducing high-frequency noise and fine details, resulting in a smoother image. The amount of smoothing is controlled by the standard deviation of the ",(0,a.kt)("strong",{parentName:"p"},"Gaussian")," kernel. It's widely used in tasks like edge detection and contour finding."),(0,a.kt)("h3",{id:"thresholding"},"Thresholding"),(0,a.kt)("p",null,"Thresholding is a key image processing technique that transforms a grayscale image into a binary one by setting a threshold value. Pixels above the threshold take on one color, typically white, while those below adopt another, usually black. Widely used for object segmentation and background distinction, thresholding simplifies images for analysis. Adaptive thresholding adjusts dynamically based on local pixel variations, improving its effectiveness across diverse image conditions and making it a valuable tool in computer vision applications."),(0,a.kt)("h3",{id:"edge-detection"},"Edge detection"),(0,a.kt)("p",null,"Edge detection is a pivotal technique in image processing aimed at identifying boundaries within an image. It highlights abrupt intensity changes, representing the edges where one object ends and another begins. Popular algorithms, such as the ",(0,a.kt)("strong",{parentName:"p"},"Canny edge detector"),", use gradient information to pinpoint these transitions, providing a foundational step for tasks like object recognition and shape analysis in computer vision applications. Edge detection is instrumental in accentuating key features, allowing for enhanced understanding and interpretation of visual data."),(0,a.kt)("h2",{id:"lets-jump-to-code"},"Let's Jump to code"),(0,a.kt)("p",null,"Execute this commands one by one in the terminal. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam\npython shapedetect.py\n")),(0,a.kt)("center",null,(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ReTerminal/opencv/shapedetection.png"})),(0,a.kt)("h2",{id:"applications"},"Applications"),(0,a.kt)("p",null,"Shape detection has diverse applications across various domains. One notable application now ",(0,a.kt)("strong",{parentName:"p"},"we are going to demostrate is coin counting"),", where shapes are utilized to identify and differentiate coins based on their distinct geometric features. In manufacturing and quality control, shape detection is employed to inspect and classify products based on their shapes, ensuring consistency and adherence to standards. In ",(0,a.kt)("strong",{parentName:"p"},"robotics, detecting and recognizing shapes aids in object manipulation and navigation"),". Medical imaging relies on shape detection for tasks such as tumor identification and organ segmentation. Furthermore, in the field of ",(0,a.kt)("strong",{parentName:"p"},"autonomous vehicles, shape detection plays a crucial role in identifying road signs and obstacles"),", contributing to safe navigation. Overall, shape detection is a versatile tool with applications ranging from industrial automation to healthcare and beyond."),(0,a.kt)("center",null,(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/ReTerminal/opencv/coins1.PNG"})),(0,a.kt)("h2",{id:"tech-support"},"Tech support"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);