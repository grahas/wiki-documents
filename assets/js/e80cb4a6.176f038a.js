"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[67523],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(o),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||s;return o?n.createElement(m,r(r({ref:t},c),{},{components:o})):n.createElement(m,r({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=o.length,r=new Array(s);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var i=2;i<s;i++)r[i]=o[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},90600:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=o(87462),a=(o(67294),o(3905));const s={description:"SenseCAP M1 Local Console",title:"SenseCAP M1 Local Console",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},r="**Overview**",l={unversionedId:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console",id:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console",title:"SenseCAP M1 Local Console",description:"SenseCAP M1 Local Console",source:"@site/docs/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console.md",sourceDirName:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1",slug:"/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console",permalink:"/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"SenseCAP M1 Local Console",title:"SenseCAP M1 Local Console",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}}},p={},i=[],c={toc:i};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},(0,a.kt)("strong",{parentName:"h1"},"Overview")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The latest feature updated on Jan 14, 2022:")," To enhance the security level of SenseCAP Local Console, an extra password is added to log in to the Local Console besides CPUID, the default password is the Serial Number of the hotspot. It is highly recommended to change the password after the first login."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Your computer and your Hotspot should be connected to the same router/network in order to use Local Console. If your Hotspot is remote, you currently will NOT be unable to run any of the features in the Local Console."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/local-console.png",alt:"Local Console"})),(0,a.kt)("h1",{id:"login"},(0,a.kt)("strong",{parentName:"h1"},"Login")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1","."," Get your Hotspot's CPU ID and S/N")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you do not have an account of SenseCAP M1 Dashboard, or haven't added your Hotspot to the Dashboard, please find the device label of your SenseCAP M1, and get the S/N and CPU ID")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/image-16.png",alt:"Local Console Login Details"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you already have registered an account of SenseCAP M1 Dashboard and added your Hotspot, you can copy your Hotspot's CPU ID and S/N from the dashboard.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/image-1-1.png",alt:"Local Console Login Details 2"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2","."," Get the IP Address of your hotspot")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you do not have an account of SenseCAP M1 Dashboard, or haven't added your Hotspot to the Dashboard, please find the IP Address of your hotspot in your router admin page, or run diagnostic on your Helium APP to get the IP Address. Then type the IP Address in a browser to enter the Local Console page."),(0,a.kt)("li",{parentName:"ul"},"If you already have registered an account of SenseCAP M1 Dashboard and added your Hotspot, you can find your Hotspot's IP Address from the dashboard:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Click the "',(0,a.kt)("strong",{parentName:"li"},"Wi-Fi IP Address"),'" or "',(0,a.kt)("strong",{parentName:"li"},"LAN IP Address"),'" link which directs to the Turbo Sync Local Console page.'),(0,a.kt)("li",{parentName:"ul"},"If you are connected via Wi-Fi, you will see the Hotspots Wi-Fi IP address to click."),(0,a.kt)("li",{parentName:"ul"},"If you are connected via Ethernet cable or local LAN, you will see the Hotspot's LAN address to click.")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi-name-ts-1.png",alt:"Local Console Login Details 3"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3","."," Use the hotspot CPU ID and the default password (Serial Number, aka S/N) to log in")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/login-1.png",alt:"Local Console Login Details 4"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/image-2-1.png",alt:"Local Console Login Details 5"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4","."," Change the default password")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password-1.png",alt:"Local Console Change Password"})),(0,a.kt)("p",null,'After the first login, please do click the "',(0,a.kt)("strong",{parentName:"p"},"Change Password"),'" button to modify your default password. The new password should contain 8~32 digits with at least two combinations of the numbers, letters and symbols. The password will be encrypted and be only stored in your SenseCAP M1 locally.'),(0,a.kt)("p",null,"For security concerns, we do not provide a \u201c",(0,a.kt)("strong",{parentName:"p"},"Forget Password"),"\u201d function yet, so please do remember your password well, and you will need to reflash the MicroSD card to resume the default password if you lost it."),(0,a.kt)("p",null,"For the CLI users, please note that every time the password has been changed, the Local Console device token will be automatically updated as well. Refresh the Local Console webpage and you will see the new device token. Please keep your device token safe and do not share it to any third party in any circumstance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5","."," Get bind-key and add your Hotspot to SenseCAP Dashboard")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3-2.png",alt:"Local Console Bind Key"})),(0,a.kt)("p",null,"Get the device CPU ID, device ETH MACand device bind key at the Local Console page above."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important Information")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Turbo Sync may lead to frequent erasing and writing in the micro SD card and it is only suggested to do when it is necessary."),(0,a.kt)("p",null,"If the synced block height of your device is very close to the blockchain (less than 200 blocks), Turbo Sync is not necessary for your device and you will not be able to run it."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/TS-console.png",alt:"Turbo Sync"})),(0,a.kt)("p",null,"The Turbo Sync process may take a while to complete and depends on the network speed. Please maintain a solid Internet connection and be patient with the syncing process."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT"),": Please do not power off the device during the Turbo Sync process, otherwise your device will have a corrupted ledger during the next boot and will start syncing again from the last blessed snapshot. In that case, you will have to repeat the Turbo Sync process."),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"reboot"},(0,a.kt)("strong",{parentName:"h1"},"Reboot")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": You will need to log in to the Local Console."),(0,a.kt)("p",null,'Click the orange "Reboot" button to start the reboot process.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When you see ","[","reboot","]"," request sent + ","[","reboot going","]",", the process as started."),(0,a.kt)("li",{parentName:"ul"},'When you see "----log stream disconnected from the host----" and "----log stream connected to the host----", you have finished the reboot process.')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4-2.png",alt:"Reboot SenseCAP Hotspot"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Helium Blockchain ledger sometimes gets damaged by unexpected errors in the micro SD card resulting in the blockchain syncing process to halt on a block and fail in syncing."),(0,a.kt)("p",null,"Rebooting the hotspot in the Local Console may help to resolve the potential errors in the micro SD card."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT"),": Please do not reboot the hotspot frequently, only reboot it when necessary."),(0,a.kt)("p",null,"When the block height is stuck and does not increase, height stays at -1 or 1, please do a block reset. After following these steps, the hotspot will be fully synced again."),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"shut-down"},(0,a.kt)("strong",{parentName:"h1"},"Shut Down")),(0,a.kt)("p",null,"The shutdown feature is suggested to use before unplugging the device in order to prevent the device from being damaged caused by a suddenly powering off."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How To Use The Shutdown Feature")),(0,a.kt)("p",null,'Click the "',(0,a.kt)("strong",{parentName:"p"},"Shutdown"),'" button and accept the prompt.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The shutdown will take a few minutes."),(0,a.kt)("li",{parentName:"ul"},"You will see the blue led and the Ethernet port LEDs are off when the shutdown is finished.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5-2.png",alt:"SenseCAP Shutdown Feature"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ATTENTION"),": Please confirm you are next to the SenseCAP M1 when you shut down since you will need to re-plug the adapter if you want to power up the device again."),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"reset-block"},(0,a.kt)("strong",{parentName:"h1"},"Reset Block")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": You will need to log in to the Local Console."),(0,a.kt)("p",null,'Click the Red "',(0,a.kt)("strong",{parentName:"p"},"Reset Blocks"),'" button to start the reset blocks process.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/reset-blocks.png",alt:"Reset Blocks SenseCAP"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),': SenseCAP M1 will start to load the latest blessed snapshot. The status in the dashboard may have delay and it is normal to temporary see "',(0,a.kt)("strong",{parentName:"p"},"Unknown"),'" sync status.'),(0,a.kt)("p",null,"If you need to run Turbo Sync, please wait until the latest blessed snapshot is loaded (around 30 minutes)."))}u.isMDXComponent=!0}}]);