"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[17255],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var l=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=l.createContext({}),u=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=u(t.components);return l.createElement(s.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=i,m=d["".concat(s,".").concat(c)]||d[c]||k[c]||a;return n?l.createElement(m,r(r({ref:e},p),{},{components:n})):l.createElement(m,r({ref:e},p))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:i,r[1]=o;for(var u=2;u<a;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98708:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=n(87462),i=(n(67294),n(3905));const a={description:"FST-01",title:"FST-01",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/FST-01",last_update:{date:"1/13/2023",author:"shuxu hu"}},r=void 0,o={unversionedId:"Seeed_Elderly/Discrete Product/FST-01",id:"Seeed_Elderly/Discrete Product/FST-01",title:"FST-01",description:"FST-01",source:"@site/docs/Seeed_Elderly/Discrete Product/FST-01.md",sourceDirName:"Seeed_Elderly/Discrete Product",slug:"/FST-01",permalink:"/FST-01",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Discrete Product/FST-01.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"FST-01",title:"FST-01",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/FST-01",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Danger Shield Complete Kits",permalink:"/Danger_Shield_Complete_Kits"},next:{title:"Grove - Base Shield for IOIO-OTG",permalink:"/Grove-Base_Shield_for_IOIO-OTG"}},s={},u=[{value:"Applications",id:"applications",level:2},{value:"Development Environment",id:"development-environment",level:3},{value:"For the first lot of FST-01",id:"for-the-first-lot-of-fst-01",level:3},{value:"Mailing list for Gnuk/NeuG",id:"mailing-list-for-gnukneug",level:3},{value:"Writing flash ROM of MCU",id:"writing-flash-rom-of-mcu",level:2},{value:"Description",id:"description",level:3},{value:"History",id:"history",level:2},{value:"Free (as in freedom) Board Design",id:"free-as-in-freedom-board-design",level:2},{value:"BOM of FST-01",id:"bom-of-fst-01",level:2},{value:"Components of FST-01",id:"components-of-fst-01",level:2},{value:"Possible Changes to the circuit and parts",id:"possible-changes-to-the-circuit-and-parts",level:2},{value:"PCB images",id:"pcb-images",level:2},{value:"Engineering Prototype of FST-01",id:"engineering-prototype-of-fst-01",level:2},{value:"Test plan outline",id:"test-plan-outline",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],p={toc:u};function d(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/FST-01/img/FST-01_board.jpg",alt:null})),(0,i.kt)("p",null,'FST-01 is a tiny USB 32-bit computer.  In fact, FST-01 is an abbreviation and its full name is "Flying Stone Tiny ZERO-ONE".'),(0,i.kt)("p",null,"It is designed by Flying Stone Technology, a company in Maebashi, Gunma, Japan."),(0,i.kt)("p",null,'The concept is "Minimalist Design".    It is by free (as in freedom) hardware design.  The intended applications are Gnuk (The Cryptographic Token for GnuPG) and NeuG (True Random Number Generator based on ADC noise).  Those applications are Free Software.'),(0,i.kt)("p",null,'Flying Stone Technology is a second source manufacturer of "Gnuk", which is copyrighted by the Non-Profit organization, Free Software Initiative of Japan.'),(0,i.kt)("p",null,"For those who want rich features, please consider ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/maple-mini-p-861.html"},"Maple Mini"),", instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"                        SWD port\n                        (GND, SWD-CLK, SWD-IO)\n    Power port +---------------------+\n           Vdd |[]           []()() -------+\n           GND |[]                  |      |\n               |()() I/O port       | USB  |\n               |      (PA2, PA3)    |      |\n               |                    -------+\n               +---------------------+\n")),(0,i.kt)("p",null,"Please use ",(0,i.kt)("a",{parentName:"p",href:"http://no-passwd.net/askbot/questions/"},"FST-01 Q","&","A site")," for your questions."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"FST-01 without enclosure"),(0,i.kt)("th",{parentName:"tr",align:null},"FST-01 with heat shrink tube"),(0,i.kt)("th",{parentName:"tr",align:null},"FST-01 with case (P1A-120704U)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/fst01-without-enclosure-p-1276.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/fst01-with-heat-shrink-tube-p-1277.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/fst01-with-white-enclosure-p-1279.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null})))))),(0,i.kt)("p",null,"It is also available at Flying Stone Technology (\u98db\u77f3\u6280\u8853), person to person.  See ",(0,i.kt)("a",{parentName:"p",href:"http://www.gniibe.org/shop/buy-fst-01"},"Buy FST-01!")," page at gniibe.org (in Japanese)."),(0,i.kt)("h2",{id:"applications"},"Applications"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"As explained in the section above, we intend to run ",(0,i.kt)("a",{parentName:"p",href:"http://www.fsij.org/gnuk/"},"Gnuk")," on FST-01.  It is copyrighted software distributed under ",(0,i.kt)("strong",{parentName:"p"},"GPLv3")," license."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/FST-01/img/Gnuk-sticker.png",alt:null})),(0,i.kt)("p",null,"Gnuk is an implementation of Cryptographic Token for GnuPG, and it runs on STM32F103.  Source code is available at ",(0,i.kt)("a",{parentName:"p",href:"http://www.gniibe.org/"},"http://www.gniibe.org/")," (",(0,i.kt)("a",{parentName:"p",href:"https://git.gniibe.org/cgit/chopstx/ttxs.git/"},"https://git.gniibe.org/cgit/chopstx/ttxs.git/"),")"),(0,i.kt)("p",null,"For more information about Gnuk, please visit: ",(0,i.kt)("a",{parentName:"p",href:"http://www.fsij.org/doc-gnuk/"},"Official Gnuk Documentation"),"."),(0,i.kt)("p",null,"Also, we intend to run NeuG on FST-01."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/FST-01/img/NeuG.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.gniibe.org/memo/development/gnuk/rng/neug"},"NeuG")," is an implementation of True Random Number Generator based on quantization error of ADC."),(0,i.kt)("p",null,"Note that only an application can be installed on FST-01 (either Gnuk or NeuG)."),(0,i.kt)("h3",{id:"development-environment"},"Development Environment"),(0,i.kt)("p",null,"For Gnuk 1.0.1, we use ",(0,i.kt)("a",{parentName:"p",href:"https://launchpad.net/gcc-arm-embedded/+milestone/4.6-2012-q2-update"},"GCC ARM Embedded 4.6-2012-q2"),"."),(0,i.kt)("h3",{id:"for-the-first-lot-of-fst-01"},"For the first lot of FST-01"),(0,i.kt)("p",null,"In this product, it contains copyrighted software, Gnuk version 1.0.1, that is licensed under the ",(0,i.kt)("strong",{parentName:"p"},"GPLv3"),". A copy of that license is included in this WiKi, see ",(0,i.kt)("strong",{parentName:"p"},"GPLv3"),".\nYou may obtain the complete Corresponding Source code for a period of three years after the last shipment of this product, which will be no earlier than 2016-01-01, on the manufacturer website at ",(0,i.kt)("a",{parentName:"p",href:"http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git"},"http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git"),' and we put the tag "release/1.0.1" for the version of the product.'),(0,i.kt)("p",null,'Note that Gnuk binary in the first lot of FST-01 was compiled with "-O3 -Os" option by GCC ARM Embedded 4.6-2012-q2.'),(0,i.kt)("h3",{id:"mailing-list-for-gnukneug"},"Mailing list for Gnuk/NeuG"),(0,i.kt)("p",null,"We have a mailing list for Gnuk/NeuG: ",(0,i.kt)("a",{parentName:"p",href:"https://lists.alioth.debian.org/mailman/listinfo/gnuk-users"},"https://lists.alioth.debian.org/mailman/listinfo/gnuk-users")),(0,i.kt)("p",null,"As well as git.gniibe.org, the source code repositories are available at : ",(0,i.kt)("a",{parentName:"p",href:"https://anonscm.debian.org/cgit/gnuk/"},"https://anonscm.debian.org/cgit/gnuk/")),(0,i.kt)("h2",{id:"writing-flash-rom-of-mcu"},"Writing flash ROM of MCU"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We use SWD port to write flash ROM of MCU. Since SWD is a kind of new, there is not yet good hardware and software experiences."),(0,i.kt)("p",null,"We select ST-Link/V2 for cheap SWD debugger and wrote our own tool stlinkv2.py in Python. The tool stlinkv2.py is distributed within Gnuk.  See ",(0,i.kt)("a",{parentName:"p",href:"http://www.gniibe.org/memo/development/fst-01/dongle/fst-01-swd-connection"},"this article")," for the connection of ST-Link/V2 and FST-01."),(0,i.kt)("p",null,"Forthcoming OpenOCD 0.6.0 will support ST-Link/V2 and SWD.  You will be able to use that, too."),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"FST-01 is minimum STM32F103 board, which is suitable to run computation-oriented applications like Gnuk."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dimensions: 1.62 x 0.52 inch (including USB plug)"),(0,i.kt)("li",{parentName:"ul"},"USB Bus Powered"),(0,i.kt)("li",{parentName:"ul"},"MCU: 32-bit ARM Cortex M3 at 72MHz (STM32F103TBU6), flash ROM: 128KB, - RAM: 20KB"),(0,i.kt)("li",{parentName:"ul"},"SPI Flash Memory: 4MB"),(0,i.kt)("li",{parentName:"ul"},"SWD port, Two I/O pins"),(0,i.kt)("li",{parentName:"ul"},"Content of Flash ROM of MCU: As a side effect of test plan, FST-01 comes with Gnuk version 1.0.1 installed on the flash ROM of MCU and it is protected. You need to disable the protection before writing the flash ROM.")),(0,i.kt)("p",null,"Please visit this page for detail."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FST-01 without enclosure")),(0,i.kt)("p",null,"This is a bare board for evaluation, development or those who want their own enclosures."),(0,i.kt)("p",null,"You can access SWD port and change the content of flash ROM."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FST-01 with heat shrink tube")),(0,i.kt)("p",null,"The board is covered by transparent heat shrink tube. Thus, it is not possible to access SWD port.\nThis can be daily use as Gnuk Token."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FST-01 with case (P1A-120704U)")),(0,i.kt)("p",null,"The board comes with the case. Note that it is users who put the board to the case.\nThis would be better if transparent tube doesn't match your taste or you want to change the content of flash ROM of MCU.\nAlthough FST-01 PCB is designed following the recommendation of P1A-120704U specification, the case might be a bit larger and you will need a bit of glue to fit the board and the case. Otherwise, the board will be able to move a bit (< 1mm or so)."),(0,i.kt)("h2",{id:"history"},"History"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2011-08-06: ",(0,i.kt)("a",{parentName:"p",href:"http://www.gniibe.org/memo/development/fst-01/fst-01-idea"},"Idea"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2011-08-08: Initial commit to ",(0,i.kt)("a",{parentName:"p",href:"http://www.gniibe.org/gitweb?p=fst-01.git"},"FST-01 Git repository"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2011-08-23: Fusion PCB order for prototype PCB: #33163")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2011-08-26: ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/wish/?p=783"},"Wish for FST-01"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2011-09-06: Fusion PCB order for prototype PCB: #34012")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2011-09-13: Fusion PCB order for prototype PCB: #34217")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2011-09-30: Fusion PCB order for prototype PCB: #35421")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2011-10-27: Fusion PCB order for prototype PCB: #37126")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2011-11-14: Version 1.0 of FST-01 PCB Design released")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2012-07-10: Submitted to Propagete")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2012-08-??: Placed the order for production")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2012-09-27: Production finish for the first lot"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the first lot, XTAL is changed to one with 20pF load capacitance. (Because of availability of the part.)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For the first lot, content of flash ROM of MCU is Gnuk 1.0.1 and it's protected."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2012-10-08: Start selling at Seeed Bazaar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2015-04-01: Start selling at FSF Shop, with NeuG installed: ",(0,i.kt)("a",{parentName:"p",href:"http://shop.fsf.org/product/usb/"},"http://shop.fsf.org/product/usb/")))),(0,i.kt)("h2",{id:"free-as-in-freedom-board-design"},"Free (as in freedom) Board Design"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-schematic.png",alt:null})),(0,i.kt)("p",null,"Fst-01-schematic.png"),(0,i.kt)("p",null,"The board design is available as ",(0,i.kt)("a",{parentName:"p",href:"http://www.kicad-pcb.org/"},"KiCAD")," format. Please visit ",(0,i.kt)("a",{parentName:"p",href:"http://git.gniibe.org/gitweb?p=gnuk/fst-01.git"},"http://git.gniibe.org/gitweb?p=gnuk/fst-01.git"),"."),(0,i.kt)("p",null,"The schematic design is distributed under Creative Commons Attribution 3.0 Unported License (CC BY 3.0)."),(0,i.kt)("p",null,"The PCB design is distributed under Creative Commons Attribution-ShareAlike 3.0 Unported License (CC BY-SA 3.0)."),(0,i.kt)("h2",{id:"bom-of-fst-01"},"BOM of FST-01"),(0,i.kt)("hr",null),(0,i.kt)("table",{cellspacing:"0"},(0,i.kt)("caption",null," BoM of FST-01"),(0,i.kt)("tr",null,(0,i.kt)("th",null," Part #"),(0,i.kt)("th",null," Name"),(0,i.kt)("th",null," Detail"),(0,i.kt)("th",null," Package"),(0,i.kt)("th",null," Manufacturer"),(0,i.kt)("th",null," Distributor"),(0,i.kt)("th",null," distributor reference")),(0,i.kt)("tr",null,(0,i.kt)("td",null," C1"),(0,i.kt)("td",null," Capacitor"),(0,i.kt)("td",null," 27pF"),(0,i.kt)("td",null," C0402"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," C2"),(0,i.kt)("td",null," Capacitor"),(0,i.kt)("td",null," 27pF"),(0,i.kt)("td",null," C0402"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," C3"),(0,i.kt)("td",null," Capacitor"),(0,i.kt)("td",null,"0.1uF"),(0,i.kt)("td",null," C0402"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," C4"),(0,i.kt)("td",null," Capacitor"),(0,i.kt)("td",null," 0.1uF"),(0,i.kt)("td",null," C0402"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," C5"),(0,i.kt)("td",null," Capacitor"),(0,i.kt)("td",null," 0.1uF"),(0,i.kt)("td",null," C0402"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," C6"),(0,i.kt)("td",null," Capacitor"),(0,i.kt)("td",null," 0.1uF"),(0,i.kt)("td",null," C0402"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," C7"),(0,i.kt)("td",null," Capacitor"),(0,i.kt)("td",null," 0.1uF"),(0,i.kt)("td",null," C0402"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," C8"),(0,i.kt)("td",null," Capacitor"),(0,i.kt)("td",null," 4.7uF"),(0,i.kt)("td",null," C0603"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," C9"),(0,i.kt)("td",null," Capacitor"),(0,i.kt)("td",null," 0.01uF"),(0,i.kt)("td",null," C0402"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," C10"),(0,i.kt)("td",null," Capacitor"),(0,i.kt)("td",null," 4.7uF"),(0,i.kt)("td",null," C0603"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," C11"),(0,i.kt)("td",null," Capacitor"),(0,i.kt)("td",null," 0.1uF"),(0,i.kt)("td",null," C0402"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," R1"),(0,i.kt)("td",null," Resister"),(0,i.kt)("td",null," 510R"),(0,i.kt)("td",null," R0402"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," D1"),(0,i.kt)("td",null," LED"),(0,i.kt)("td",null," Blue"),(0,i.kt)("td",null," LED0603"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("td",null," J1"),(0,i.kt)("td",null," Connector"),(0,i.kt)("td",null," USB 2.0, 1002-015-01001"),(0,i.kt)("td",null," USB Plug A Male"),(0,i.kt)("td",null," CNC Tech"),(0,i.kt)("td",null," Digikey"),(0,i.kt)("td",null," 1175-1020-ND")),(0,i.kt)("tr",null,(0,i.kt)("td",null," U1"),(0,i.kt)("td",null," MCU"),(0,i.kt)("td",null," STM32F103TBU6"),(0,i.kt)("td",null," QFN36"),(0,i.kt)("td",null," ST Microelectronics"),(0,i.kt)("td",null," AVNET"),(0,i.kt)("td",null," STM32F103TBU6")),(0,i.kt)("tr",null,(0,i.kt)("td",null," U2"),(0,i.kt)("td",null," LDO V-Regulator"),(0,i.kt)("td",null," CAT6217-330TDGT3 +3.3V"),(0,i.kt)("td",null," TSOT23-5"),(0,i.kt)("td",null," ON Semiconductor"),(0,i.kt)("td",null," Mouser"),(0,i.kt)("td",null," 698-CAT6217330TD-G")),(0,i.kt)("tr",null,(0,i.kt)("td",null," U3"),(0,i.kt)("td",null," USB Terminator"),(0,i.kt)("td",null," NUF2221W1"),(0,i.kt)("td",null," SOT363"),(0,i.kt)("td",null," ON Semiconductor"),(0,i.kt)("td",null," Digikey"),(0,i.kt)("td",null," NUF2221W1T2GOSTR-ND")),(0,i.kt)("tr",null,(0,i.kt)("td",null," U4"),(0,i.kt)("td",null," SPI Flash Memory"),(0,i.kt)("td",null," SST25VF032B-80-4I-QAE-T"),(0,i.kt)("td",null," WSON8"),(0,i.kt)("td",null," Silicon Storage Technology"),(0,i.kt)("td",null," Digikey"),(0,i.kt)("td",null," SST25VF032B-80-4I-QAE-T-ND")),(0,i.kt)("tr",null,(0,i.kt)("td",null," X1"),(0,i.kt)("td",null," Crystal"),(0,i.kt)("td",null," ABM8G-12.000MHZ-18-D2Y-T"),(0,i.kt)("td",null," 3.2mmx2.5mm"),(0,i.kt)("td",null," Abracon Corporation"),(0,i.kt)("td",null," Digikey"),(0,i.kt)("td",null," 535-10261-2-ND")),(0,i.kt)("tr",null,(0,i.kt)("td",null),(0,i.kt)("td",null," Enclosure"),(0,i.kt)("td",null," P1A-120704U  White"),(0,i.kt)("td",null," 1.2 x .71 x .40 inch"),(0,i.kt)("td",null," New Age Enclosures"),(0,i.kt)("td",null),(0,i.kt)("td",null))),(0,i.kt)("h2",{id:"components-of-fst-01"},"Components of FST-01"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"STM32F103TB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SPI Flash memory (32Mbit)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"USB Terminator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LDO Regulator (3.3V)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"12MHz XTAL C",(0,i.kt)("sub",null,"L"),"=18pF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SWD Port of GND/SWDIO/SWDCLK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Extension port of VDD/GND/Port0/Port1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"USB plug A"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"STM32F103TB "))),(0,i.kt)("p",null,"MCU is Cortex-M3 based ARM by STMicroelectronics.  It runs at 72MHz, it has 128KB flash ROM and 20KB RAM."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"SPI Flash memory"))),(0,i.kt)("p",null,"Secret data should be on MCU's flash, but non confidential data (such as backup of public keyring) can be on SPI flash memory."),(0,i.kt)("p",null,"We use SST25VF032B (32Mbit = 4MB)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"USB Terminator"))),(0,i.kt)("p",null,"We use NUF2221W1 USB Upstream Terminator."),(0,i.kt)("p",null,"This is because it has the feature of electrostatic discharge protection.  It is also better for smaller footprint than two capacitors and two resistors."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"LDO Regulator"))),(0,i.kt)("p",null,"We use CAT6217-330 for 3.3V Regulator (from 5V).  Currency of 150mA is enough."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"XTAL 12MHz C",(0,i.kt)("sub",null,"L"),"=18pF"))),(0,i.kt)("p",null,"We use 12MHz XTAL C",(0,i.kt)("sub",null,"L"),"=18pF."),(0,i.kt)("p",null,"This is because we can find smaller footprint XTAL for 12MHz (than 8MHz)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"LED"))),(0,i.kt)("p",null,"We use a LED to show status."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"SWD port"))),(0,i.kt)("p",null,"SWD port is to install firmware to MCU's flash ROM."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"Extension port of VDD/GND/Port0/Port1"))),(0,i.kt)("p",null,"We decided to have two I/O pins. (One I/O pin is not enough even for minimalist.)"),(0,i.kt)("p",null,"With two I/O pins, it can be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TX and RX of serial communication"),(0,i.kt)("li",{parentName:"ul"},"Drive and input of touch sensor"),(0,i.kt)("li",{parentName:"ul"},"Controlling other MCU's SWD port")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"USB plug A"))),(0,i.kt)("p",null,"FST-01 usage is just connect it to USB port, like USB thumb drive."),(0,i.kt)("h2",{id:"possible-changes-to-the-circuit-and-parts"},"Possible Changes to the circuit and parts"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"LDO Regulator"))),(0,i.kt)("p",null,"MCP1700T-330 would be alternative (electrical characteristic seems worse, but for the case of more current).  In this case, we need to change circuit a bit."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"XTAL"))),(0,i.kt)("p",null,"It is possible to just replace XTAL with 12MHz XTAL C",(0,i.kt)("sub",null,"L"),"=20pF.\nThis change is within the margin of the design."),(0,i.kt)("p",null,"It would be better to also replace C1 and C2 to 33pF together in that case, if you will do that from the beginning."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pierce_oscillator#Load_capacitance"},"explanation about load capacitance in Wikipedia"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"Shield GND to Signal GND"))),(0,i.kt)("p",null,"FST-01 is intended to be inserted to USB port directly.\nIf the usage is not direct but connected by extension cable, it is better to connect Shield GND and Signal GND by resister (and capacitor if you like)."),(0,i.kt)("p",null,"Reference:\n",(0,i.kt)("a",{parentName:"p",href:"http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield"},"http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"USB_EN"))),(0,i.kt)("p",null,"USB_EN is not needed, but pin 5 of NUF2221W1 can be connected to 3.3V (Vdd) directly."),(0,i.kt)("p",null,"In many designs of boards with STM32F103, we see something like that, but because it is possible to control USB D+ to be 0V by software, USB_EN is not needed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("big",null,"No SPI flash memory by default"))),(0,i.kt)("p",null,"The size is somewhat too small to be useful, so, it could be a special users' option and no chip would be OK by default."),(0,i.kt)("h2",{id:"pcb-images"},"PCB images"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"PCB images are generated by ",(0,i.kt)("a",{parentName:"p",href:"http://projects.qi-hardware.com/index.php/p/eda-tools/source/tree/master/fab/prettygerbv"},"prettygerbv"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-front.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-back.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-conn.png",alt:null})),(0,i.kt)("h2",{id:"engineering-prototype-of-fst-01"},"Engineering Prototype of FST-01"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/FST-01/img/FST-01-Prototype-PCB.jpg",alt:null})),(0,i.kt)("p",null,"FST-01-Prototype-PCB.jpg"),(0,i.kt)("p",null,"Thanks to Fusion PCB service, we made PCB of FST-01 Engineering Prototype."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/FST-01/img/FST-01-prototype.jpg",alt:null})),(0,i.kt)("p",null,"PCB Assembly was done by ",(0,i.kt)("strong",{parentName:"p"},"User:Gniibe")," by hand.  See ",(0,i.kt)("a",{parentName:"p",href:"http://www.gniibe.org/memo/development/fst-01/qfn-diy-soldering"},"my article")," for detail."),(0,i.kt)("h2",{id:"test-plan-outline"},"Test plan outline"),(0,i.kt)("hr",null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check MCU ID"),(0,i.kt)("li",{parentName:"ol"},"Write to flash ROM of MCU"),(0,i.kt)("li",{parentName:"ol"},"Check LED blinking"),(0,i.kt)("li",{parentName:"ol"},"Check SPI Flash ROM access"),(0,i.kt)("li",{parentName:"ol"},"Run an application which uses USB and see if it works (Hub assigning address)",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"On power up (or reset), LED emits light."),(0,i.kt)("li",{parentName:"ol"},"FST-01 application waits for USB address assignment by USB Hub. (It takes a few seconds for Hub to detect and to assign address to the device.)"),(0,i.kt)("li",{parentName:"ol"},"After USB address assignment, FST-01 application goes enter the loop",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"* waiting 5 seconds\n* blink LED (emits lights for 25ms,off 200ms).\n")))))),(0,i.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);