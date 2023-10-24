"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72288],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,k=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return r?n.createElement(k,s(s({ref:t},d),{},{components:r})):n.createElement(k,s({ref:t},d))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},93434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={description:"Flash JetPack to NVIDIA\xae Jetson AGX Orin 32GB H01 Kit",title:"NVIDIA\xae Jetson AGX Orin 32GB H01 Kit",tags:["NVIDIA Jetson H01"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack",last_update:{date:"3/30/2023",author:"Lakshantha"}},s=void 0,a={unversionedId:"Edge/NVIDIA_Jetson/NVIDIA_Jetson_Alternative/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack",id:"Edge/NVIDIA_Jetson/NVIDIA_Jetson_Alternative/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack",title:"NVIDIA\xae Jetson AGX Orin 32GB H01 Kit",description:"Flash JetPack to NVIDIA\xae Jetson AGX Orin 32GB H01 Kit",source:"@site/docs/Edge/NVIDIA_Jetson/NVIDIA_Jetson_Alternative/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack.md",sourceDirName:"Edge/NVIDIA_Jetson/NVIDIA_Jetson_Alternative",slug:"/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack",permalink:"/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/NVIDIA_Jetson_Alternative/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack.md",tags:[{label:"NVIDIA Jetson H01",permalink:"/tags/nvidia-jetson-h-01"}],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1680134400,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{description:"Flash JetPack to NVIDIA\xae Jetson AGX Orin 32GB H01 Kit",title:"NVIDIA\xae Jetson AGX Orin 32GB H01 Kit",tags:["NVIDIA Jetson H01"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack",last_update:{date:"3/30/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"Jetson Xavier AGX H01",permalink:"/Jetson_Xavier_AGX_H01_Driver_Installation"},next:{title:"reServer Jetson",permalink:"/reServer_J2032_Getting_Started"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enter Force Recovery Mode",id:"enter-force-recovery-mode",level:2},{value:"Download the peripheral drivers",id:"download-the-peripheral-drivers",level:2},{value:"Flash to Jetson",id:"flash-to-jetson",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:"400",src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"})),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.kt)("p",null,"This wiki will guide you how to install JetPack to Jetson AGX Orin 32GB H01 Kit."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu Host PC (native or VM using VMware Workstation Player)"),(0,o.kt)("li",{parentName:"ul"},"Jetson AGX Xavier H01 Kit"),(0,o.kt)("li",{parentName:"ul"},"USB Type-C data transmission cable")),(0,o.kt)("h2",{id:"enter-force-recovery-mode"},"Enter Force Recovery Mode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1:")," There is a recovery button on the board, which is in the middle of the three buttons as shown in the below picture. Hold the recovery button and then connect the board to the power supply to enter force recovery mode.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:"350",src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2:")," Connect Jetson AGX Orin 32GB H01 Kit with the Ubuntu host PC with a USB Type-C data transmission cable")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:"350",src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"})),(0,o.kt)("h2",{id:"download-the-peripheral-drivers"},"Download the peripheral drivers"),(0,o.kt)("p",null,"First of all, you need to install the peripheral drivers for this board. These are needed for some hardware peripherals to function on the board. Click the below links to download the drivers according to the JetPack version"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"JetPack Version"),(0,o.kt)("th",null,"L4T Version"),(0,o.kt)("th",null,"Download Link"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"5.0.2"),(0,o.kt)("td",null,"35.1"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"5.1.1"),(0,o.kt)("td",null,"35.3.1"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))))),(0,o.kt)("h2",{id:"flash-to-jetson"},"Flash to Jetson"),(0,o.kt)("p",null,"Here we will use ",(0,o.kt)("strong",{parentName:"p"},"NVIDIA L4T 35.1")," to install ",(0,o.kt)("strong",{parentName:"p"},"Jetpack 5.0.2")," on the Jetson AGX Orin 32GB H01 Kit."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1:")," ",(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/jetson-linux-r351"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2:")," Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:"450",src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3:")," Extract ",(0,o.kt)("strong",{parentName:"li"},"Jetson_Linux_R35.1.0_aarch64.tbz2")," and ",(0,o.kt)("strong",{parentName:"li"},"Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2")," by navigating to the folder containing these files and apply the changes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd <directory_where_the_files_are_located>\ntar xf Jetson_Linux_R35.1.0_aarch64.tbz2\ncd Linux_for_tegra/rootfs\nsudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2\ncd ..\nsudo ./apply_binaries.sh\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4:")," Extract ",(0,o.kt)("strong",{parentName:"li"},"AGX-Orin-32GB-H01-JP5.0.2.zip"),". Here we additionally install the ",(0,o.kt)("strong",{parentName:"li"},"unzip")," package which is needed to decompress the .zip file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ..\nsudo apt install unzip \nunzip AGX-Orin-32GB-H01-JP5.0.2.zip\n")),(0,o.kt)("p",null,"Here it will ask whether to replace the files. Type ",(0,o.kt)("strong",{parentName:"p"},"A")," and press ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," to replace the necessary files"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/3.jpg"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 5:")," Flash the system to the eMMC")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd Linux_for_Tegra\nsudo ./flash.sh jetson\u2010agx\u2010orin\u2010devkit mmcblk0p1\n")),(0,o.kt)("p",null,"You will see the following output if the flashing process is successful"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:"1000",src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/9.jpg"})),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);