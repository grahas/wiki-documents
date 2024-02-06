"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[70770],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(i),h=n,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return i?o.createElement(m,r(r({ref:t},u),{},{components:i})):o.createElement(m,r({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,r[1]=s;for(var d=2;d<a;d++)r[d]=i[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},48806:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=i(87462),n=(i(67294),i(3905));const a={description:"PCB Design for XIAO",title:"PCB Design for XIAO",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/PCB_Design_XIAO",last_update:{date:"11/07/2023",author:"Matthew"}},r="Creating XIAO Components on Flux.ai",s={unversionedId:"Sensor/SeeedStudio_XIAO/PCB_Design_XIAO",id:"Sensor/SeeedStudio_XIAO/PCB_Design_XIAO",title:"PCB Design for XIAO",description:"PCB Design for XIAO",source:"@site/docs/Sensor/SeeedStudio_XIAO/PCB_Design_XIAO.md",sourceDirName:"Sensor/SeeedStudio_XIAO",slug:"/PCB_Design_XIAO",permalink:"/PCB_Design_XIAO",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/PCB_Design_XIAO.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1699315200,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{description:"PCB Design for XIAO",title:"PCB Design for XIAO",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/PCB_Design_XIAO",last_update:{date:"11/07/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"XIAO eInk Expansion Board",permalink:"/XIAO-eInk-Expansion-Board"},next:{title:"Seeed Studio XIAO Kit Courses",permalink:"/XIAO-Kit-Courses"}},l={},d=[{value:"Browser Seeed Studio XIAO Series PCB design",id:"browser-seeed-studio-xiao-series-pcb-design",level:2},{value:"Seeed Studio XIAO SAMD21",id:"seeed-studio-xiao-samd21",level:3},{value:"Seeed Studio XIAO RP2040",id:"seeed-studio-xiao-rp2040",level:3},{value:"Seeed Studio XIAO nRF52840",id:"seeed-studio-xiao-nrf52840",level:3},{value:"Seeed Studio XIAO nRF52840 Sense",id:"seeed-studio-xiao-nrf52840-sense",level:3},{value:"Seeed Studio XIAO ESP32C3",id:"seeed-studio-xiao-esp32c3",level:3},{value:"Seeed Studio XIAO ESP32S3",id:"seeed-studio-xiao-esp32s3",level:3},{value:"Seeed Studio XIAO ESP32S3 Sense",id:"seeed-studio-xiao-esp32s3-sense",level:3},{value:"Knowledge about Flux.ai - Creating parts",id:"knowledge-about-fluxai---creating-parts",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1 - Creating a new part schematic",id:"step-1---creating-a-new-part-schematic",level:3},{value:"Step 2 - Creating a symbol",id:"step-2---creating-a-symbol",level:3},{value:"Step 3 - Add the SVG as an asset.",id:"step-3---add-the-svg-as-an-asset",level:3},{value:"Step 4 - Creating a footprint",id:"step-4---creating-a-footprint",level:3},{value:"Step 5 - Modifying pad size and shape",id:"step-5---modifying-pad-size-and-shape",level:3},{value:"What&#39;s More - Video of Tutorial",id:"whats-more---video-of-tutorial",level:2},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-xiao-components-on-fluxai"},"Creating XIAO Components on Flux.ai"),(0,n.kt)("p",null,"Flux is a browser-based PCB design tool that enables seamless collaboration between electronics teams. The tool's intuitive interface allows users to create schematics and layouts quickly and easily, while its built-in simulation capabilities help to ensure that designs are accurate and error-free. "),(0,n.kt)("p",null,"In this section we are going to cover Creating Seeed Studio XIAO series Components on Flux.ai."),(0,n.kt)("h2",{id:"browser-seeed-studio-xiao-series-pcb-design"},"Browser Seeed Studio XIAO Series PCB design"),(0,n.kt)("h3",{id:"seeed-studio-xiao-samd21"},"Seeed Studio XIAO SAMD21"),(0,n.kt)("iframe",{height:450,width:800,allowFullScreen:!0,src:"https://www.flux.ai/cnaville89/seeed-xiao-samd21?editor=pcb_3d&embed=1"}),(0,n.kt)("h3",{id:"seeed-studio-xiao-rp2040"},"Seeed Studio XIAO RP2040"),(0,n.kt)("iframe",{height:"450",width:"800",allowfullscreen:!0,src:"https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040?editor=pcb_3d&embed=1"}),(0,n.kt)("h3",{id:"seeed-studio-xiao-nrf52840"},"Seeed Studio XIAO nRF52840"),(0,n.kt)("iframe",{height:"450",width:"800",allowfullscreen:!0,src:"https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840?editor=pcb_3d&embed=1"}),(0,n.kt)("h3",{id:"seeed-studio-xiao-nrf52840-sense"},"Seeed Studio XIAO nRF52840 Sense"),(0,n.kt)("iframe",{height:450,width:800,allowFullScreen:!0,src:"https://www.flux.ai/gokux/seeed-studio-xiao-nrf52840-sense?editor=pcb_3d&embed=1"}),(0,n.kt)("h3",{id:"seeed-studio-xiao-esp32c3"},"Seeed Studio XIAO ESP32C3"),(0,n.kt)("iframe",{height:"450",width:"800",allowfullscreen:!0,src:"https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3?editor=pcb_3d&embed=1"}),(0,n.kt)("h3",{id:"seeed-studio-xiao-esp32s3"},"Seeed Studio XIAO ESP32S3"),(0,n.kt)("iframe",{height:450,width:800,allowFullScreen:!0,src:"https://www.flux.ai/gokux/seeed-studio-xiao-esp32s3?editor=schematic&embed=1"}),(0,n.kt)("h3",{id:"seeed-studio-xiao-esp32s3-sense"},"Seeed Studio XIAO ESP32S3 Sense"),(0,n.kt)("iframe",{height:"450",width:"800",allowfullscreen:!0,src:"https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense?editor=pcb_3d&embed=1"}),(0,n.kt)("h2",{id:"knowledge-about-fluxai---creating-parts"},"Knowledge about Flux.ai - Creating parts"),(0,n.kt)("p",null,"Parts in Flux are made of 5 main components. All these components are optional, but a part missing a component won't offer its full capabilities:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Concept"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Schematic"),(0,n.kt)("td",{parentName:"tr",align:null},'The "inside" view of a part, represented by terminals only.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"The representation of a part when it is dragged into another project, usually familiar to users from other tools.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Footprint"),(0,n.kt)("td",{parentName:"tr",align:null},"Represents how the physical part will sit on the board.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3D model"),(0,n.kt)("td",{parentName:"tr",align:null},"Shows the 3D shape and dimensions of the part.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Simulation model"),(0,n.kt)("td",{parentName:"tr",align:null},"Describes how the part should behave during simulation.")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"step-1---creating-a-new-part-schematic"},"Step 1 - Creating a new part schematic"),(0,n.kt)("p",null,'The very first step is to create a new blank project, you can do so in the main Flux menu in the top-right corner. Terminals are the basis of every part that is created in Flux. They allow the part to interact with the rest of the circuit. To add terminals to a new part, go to the library, search "Terminal" and drag in as many as you need.'),(0,n.kt)("p",null,"In this example we are going to add Seeed Studio XIAO ESP32S3 so i just added 14 terminal pins and given the names and numbers"),(0,n.kt)("p",null,"You can give more information\u2019s about your parts in part properties like manufacturer part number (MPN)manufacturer name , data sheet URL ....etc. entering MPN of the component will help you find current stock availability and price of the components."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO.png"})),(0,n.kt)("h3",{id:"step-2---creating-a-symbol"},"Step 2 - Creating a symbol"),(0,n.kt)("p",null,"Flux works slightly differently than other tools you might be used to. In Flux, parts have two\ndifferent views, the schematic, and the symbol. The schematic view from step 1 only\ncontains the terminals. Symbols are only visible when a part is placed into a project. Now\nlet's create a symbol for our xiao but for the we need to use some external tool like\nillustrator or Inkscape. the designed symbol format needs to be in .svg"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO2.png"})),(0,n.kt)("p",null,"Things need to consider designing the symbol ,"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"every shape and line should be white, with 1px stroke width and no fill.,"),(0,n.kt)("li",{parentName:"ul"},"Pins are typically 10 to 18 pixels long.\nNow export the symbol as an SVG file.")),(0,n.kt)("h3",{id:"step-3---add-the-svg-as-an-asset"},"Step 3 - Add the SVG as an asset."),(0,n.kt)("p",null,'Once you have the SVG file, add it as an asset. To add an external file as an asset. Make\nsure no object has been selected (click on the empty canvas).On the right drawer, scroll\ndown until you find the assets panel. Open it and click on "Add" (or "Manage"). This will\nopen the assets dialogue. Then click on "Add item" and select the file from your local drive.\n',(0,n.kt)("strong",{parentName:"p"},"Match the pin position with the custom symbol."),"\nBy default, all terminals will be located at the centre of the symbol. To position the\nterminals to the desired location, there are a few more step."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Publish the part to the library."),(0,n.kt)("li",{parentName:"ol"},"Create a New blank project and drag the part you're importing."),(0,n.kt)("li",{parentName:"ol"},"You'll notice that both terminals are at the centre of the symbol. Now go back to the\nimported part."),(0,n.kt)("li",{parentName:"ol"},'You\'ll need to do this process for every terminal in your part.\na) Select the terminal and find the "Properties" menu in the right-side panel.\nb) In the "Symbol Pin Position" field, type the desired x and y coordinates for the\nterminal to sit on the symbol.\nc) Publish the part and go back to the new project. You\'ll see a "Update available for\nyour parts" legend in the bottom left. Click on "Review" and accept the changes.\nd) You\'ll notice that the terminals have moved. You might need to repeat this process\na few times to nail the perfect position.')),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO3.png"})),(0,n.kt)("h3",{id:"step-4---creating-a-footprint"},"Step 4 - Creating a footprint"),(0,n.kt)("p",null,"Footprints are very simple to create in Flux. They consist of pads, lines, shapes, and text nodes that can be added directly in the Flux PC editor."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO4.png"})),(0,n.kt)("p",null,"When you first create a footprint on flux ,all of the pads will be in one place, which will\nappear as small dots.\n\uf0b7 For changing the pad position\n\uf0b7 Select the pad to move on the right panel on object specific rules find position rule ,\n\uf0b7 Enter the desired x and y positions in millimetres."),(0,n.kt)("h3",{id:"step-5---modifying-pad-size-and-shape"},"Step 5 - Modifying pad size and shape"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO5.png"})),(0,n.kt)("p",null,"By clicking the one of the pads you can change its shape , position , hole diameter and\nother properties .for xiao i gone with 3mm*2mm size pad and 1.1mm hole. Placed each pin\n2.54mm apart by utilizing the x and y position millimetres.\n",(0,n.kt)("strong",{parentName:"p"},"Adding 3d model")),(0,n.kt)("p",null,"Now we need to add a 3d model of xiao, flux support .step file for 3d models , you can\ndownload it from official wiki page."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO6.png"})),(0,n.kt)("p",null,"You can upload the 3d model form the assist section. more detailed about adding the 3d\nmodel is available in the video.\nYou can change the x y z position and rotation form the object specified rule. Using this\nyou can position the 3d model in top of the soldering pads.\n",(0,n.kt)("strong",{parentName:"p"},"Publishing to the library"),"\nAfter creating a component, it is time to publish it"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/PCB_Design_Flux_XIAO/PCB_Design_XIAO7.png"})),(0,n.kt)("p",null,"Select the flux logo in the top left corner then select publish changes.\nNow our components well be available in our profile , also it will show up in the public\nlibrary search"),(0,n.kt)("h2",{id:"whats-more---video-of-tutorial"},"What's More - Video of Tutorial"),(0,n.kt)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/5cGg5n6sXJE?si=nSYvVSl-q3axb4Ss",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),(0,n.kt)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This project is supported by the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6"},"Seeed Studio Contributor Project"),"."),(0,n.kt)("li",{parentName:"ul"},"Thanks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=42323283"},"Gokul"),"'s efforts and your work will be ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"exhibited"),".")),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);