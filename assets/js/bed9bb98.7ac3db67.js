"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[94911],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(i),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return i?r.createElement(m,o(o({ref:t},p),{},{components:i})):r.createElement(m,o({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},56211:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const a={description:"AWS IoT Core Intergate With reTerminal DM",title:"AWS IoT Core Intergate With reTerminal DM",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",keywords:["AWS","Getting Start","Cloud"],slug:"/reTerminal-DM_AWS_first",last_update:{date:"11/22/2023",author:"Kasun Thushara"}},o=void 0,s={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal-DM/AWS_IoT/reTerminal-DM_AWS_first",id:"Edge/Raspberry_Pi_Devices/reTerminal-DM/AWS_IoT/reTerminal-DM_AWS_first",title:"AWS IoT Core Intergate With reTerminal DM",description:"AWS IoT Core Intergate With reTerminal DM",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/AWS_IoT/reTerminal-DM_AWS_first.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal-DM/AWS_IoT",slug:"/reTerminal-DM_AWS_first",permalink:"/reTerminal-DM_AWS_first",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal-DM/AWS_IoT/reTerminal-DM_AWS_first.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1700611200,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{description:"AWS IoT Core Intergate With reTerminal DM",title:"AWS IoT Core Intergate With reTerminal DM",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",keywords:["AWS","Getting Start","Cloud"],slug:"/reTerminal-DM_AWS_first",last_update:{date:"11/22/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Azure IoT Edge Runtime on reTerminal DM",permalink:"/reTerminal-DM_Azure_IoT"},next:{title:"Edge Controller Powered By Raspberry Pi",permalink:"/Edge_Box_intro"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Install Mqtt library",id:"install-mqtt-library",level:4},{value:"Create AWS Account",id:"create-aws-account",level:2},{value:"Register the device",id:"register-the-device",level:2},{value:"Test MQTT",id:"test-mqtt",level:2},{value:"Test the Connection",id:"test-the-connection",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"AWS IoT Core is a service that assists in securely connecting and managing Internet of Things (IoT) devices. It enables devices to communicate with each other and with the cloud, facilitating the development of smart and connected applications. AWS IoT Core streamlines the integration of IoT devices into the broader AWS ecosystem, offering a reliable and scalable platform for building IoT solutions. In this guide, we will discuss how to connect our reTerminal DM to the AWS IoT cloud."),(0,n.kt)("h2",{id:"getting-start"},"Getting Start"),(0,n.kt)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,n.kt)("h3",{id:"hardware-preparation"},"Hardware preparation"),(0,n.kt)("div",{class:"table-center"},(0,n.kt)("table",{class:"table-nobg"},(0,n.kt)("tr",{class:"table-trnobg"},(0,n.kt)("th",{class:"table-trnobg"},"reTerminal DM")),(0,n.kt)("tr",{class:"table-trnobg"}),(0,n.kt)("tr",{class:"table-trnobg"},(0,n.kt)("td",{class:"table-trnobg"},(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png",style:{width:300,height:"auto"}})))),(0,n.kt)("tr",{class:"table-trnobg"}),(0,n.kt)("tr",{class:"table-trnobg"},(0,n.kt)("td",{class:"table-trnobg"},(0,n.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-p-5616.html"},(0,n.kt)("strong",null,(0,n.kt)("span",null,(0,n.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,n.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,n.kt)("p",null,"We recommend installing the ",(0,n.kt)("strong",{parentName:"p"},"Bullesye")," version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reterminal-dm-flash-OS/"},(0,n.kt)("strong",{parentName:"a"},"guide"))),(0,n.kt)("h4",{id:"install-mqtt-library"},"Install Mqtt library"),(0,n.kt)("p",null,"In your terminal type :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'sudo pip3 install "paho-mqtt<2.0.0"\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are trying to use Bookworm OS, which is the latest OS as of the time of writing this wiki, you may need to use a virtual environment for installing python libraries. Please follow this ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/documentation/computers/os.html#python-on-raspberry-pi"},(0,n.kt)("strong",{parentName:"a"},"link"))," for more updates.")),(0,n.kt)("h2",{id:"create-aws-account"},"Create AWS Account"),(0,n.kt)("p",null,"If you don't have an AWS account, you can easily create one. Please follow ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html"},(0,n.kt)("strong",{parentName:"a"},"this link"))," for guidance on how to set up your account."),(0,n.kt)("h2",{id:"register-the-device"},"Register the device"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),": Search IoT core and navigate to it.")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/searchbar.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),": Next in the side bar navigate to ",(0,n.kt)("strong",{parentName:"li"},"Manage")," topic and under ",(0,n.kt)("strong",{parentName:"li"},"All Devices")," go to ",(0,n.kt)("strong",{parentName:"li"},"Things"),".")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"What is a Thing?")),(0,n.kt)("p",{parentName:"admonition"},'AWS IoT refers to Internet of Things (IoT) devices as "things" on the AWS platform. Each IoT device, such as the reTerminal Device in this context, is represented as a "thing" in AWS. Importantly, once created, the name of a "thing" cannot be changed.')),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingsslidebar.PNG",style:{width:200,height:300}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step3"),": Next press on Create things ")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthings.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4"),": We are going to create for single reTerminal Device. So click Create Single Thing.")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createsinglething.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5"),": Give a thing name.")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingname.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 6"),": Also A thing type for your reference in the future")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"What is a Thing Type?")),(0,n.kt)("p",{parentName:"admonition"},"Thing types enable you to store descriptions and configuration information that are common to all things associated with the same thing type. This simplifies the management of things in the registry. For instance, you can define a 'Factory_HMI' thing type. For this demonstration we used pi as a thing type.")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/thingtype.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createthingtype.PNG",style:{width:400,height:300}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 7")," : Generate Certificates ")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/configurecertificate.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 8"),":  To Attach policies you need to create. click on ",(0,n.kt)("strong",{parentName:"li"},"create policy"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"AWS IoT Core policies are JSON documents following IAM policy conventions. They support named policies, enabling multiple identities to reference the same policy document. Named policies are versioned for easy rollback.\nThese policies provide control over access to the AWS IoT Core data plane, encompassing operations such as connecting to the AWS IoT Core message broker, sending/receiving MQTT messages, and accessing or updating a thing's Device Shadow.")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createpolicy.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 9"),":  Give an appropriate name to the policy and set policy effect Policy action and Policy resources as following.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The policy includes:\n",(0,n.kt)("strong",{parentName:"p"},"Effect"),": Specifies whether the action is allowed or denied.\n",(0,n.kt)("strong",{parentName:"p"},"Action"),": Specifies the specific action that the policy permits or denies.\n",(0,n.kt)("strong",{parentName:"p"},"Resource"),": Specifies the resource or resources on which the action is allowed or denied.")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/createapolicy.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 10"),": Attach Policy by policy that you made and press ",(0,n.kt)("strong",{parentName:"li"},"Create thing"))),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/policycreatething.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 11"),":Next you can download certificates and keys. Make sure to download ",(0,n.kt)("strong",{parentName:"li"},"Device certificate, Private and Public keys and Root CA certificate.")," ")),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/certicates.PNG",style:{width:600,height:450}})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 12")," : Attach to the thing (reTerminal DM )\nFor that go to ",(0,n.kt)("strong",{parentName:"li"},"Security")," >> ",(0,n.kt)("strong",{parentName:"li"},"Certificates"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When you create and enroll a certificate independently from an AWS IoT thing, it lacks policies for AWS IoT operations and isn't associated with any thing object. This section explains how to establish these connections for a registered certificate. The certificate authenticates the device with AWS IoT for connection. Linking the certificate to a thing resource creates the relationship between the device (via the certificate) and the thing resource. To grant the device permission for AWS IoT actions, such as connecting and publishing messages, it's essential to attach a suitable policy to the device's certificate.")),(0,n.kt)("p",null,"After selecting the thing that you made from ",(0,n.kt)("strong",{parentName:"p"},"Actions")," drop down menu then press ",(0,n.kt)("strong",{parentName:"p"},"Attach to thing"),"."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachtothing.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 13"),": Attach the policy also. "),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/attachpolicy.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("h2",{id:"test-mqtt"},"Test MQTT"),(0,n.kt)("p",null,"To accomplish this, download our ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/AWStest.py"},"test Python file"),". Ensure that your device certificates, key files (public and private keys), root access file, and this Python file are in the same folder on your reTerminal Device. Additionally, you need to modify the connection URL."),(0,n.kt)("p",null,"To do that :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 01")," :Go to Settings"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/settings.PNG",style:{width:200,height:300}}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 02")," : Then you will find the URL "),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/weburl.PNG",style:{width:800,height:"auto"}}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 03")," : Replace those file names with yours and run the file"))),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/cosw1.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("h2",{id:"test-the-connection"},"Test the Connection"),(0,n.kt)("p",null,"Go to MQTT test Client under the ",(0,n.kt)("strong",{parentName:"p"},"Test")," tab and type the topic name to subscribe. In this case it is device/data."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/mqtttest.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("p",null,"The output is some thing like this. The massage from reterminal DM is pop up in the console."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/seeedop.PNG",style:{width:800,height:"auto"}})),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);