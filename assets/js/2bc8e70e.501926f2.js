"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const o={description:"How to Use Arduino Uno R4 with LoRa Module",title:"Grove - Wio-E5 SenseCAP Cloud with Arduino Uno R4",keywords:["LoRaWAN","Home Assistant","Arduino UNO R4","Wio E5"],slug:"/Grove_Wio_E5_SenseCAP_Cloud_Demo",last_update:{date:"2/02/2024",author:"JoJang"}},a="How to Use Arduino Uno R4 with LoRa Module on SenseCAP Cloud",s={unversionedId:"Sensor/Grove/Grove_Sensors_Network/LoRa/demo/Grove_Wio_E5_SenseCAP_Cloud_Demo",id:"Sensor/Grove/Grove_Sensors_Network/LoRa/demo/Grove_Wio_E5_SenseCAP_Cloud_Demo",title:"Grove - Wio-E5 SenseCAP Cloud with Arduino Uno R4",description:"How to Use Arduino Uno R4 with LoRa Module",source:"@site/docs/Sensor/Grove/Grove_Sensors_Network/LoRa/demo/Grove_Wio_E5_SenseCAP_Cloud_Demo.md",sourceDirName:"Sensor/Grove/Grove_Sensors_Network/LoRa/demo",slug:"/Grove_Wio_E5_SenseCAP_Cloud_Demo",permalink:"/Grove_Wio_E5_SenseCAP_Cloud_Demo",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors_Network/LoRa/demo/Grove_Wio_E5_SenseCAP_Cloud_Demo.md",tags:[],version:"current",lastUpdatedBy:"JoJang",lastUpdatedAt:1706832e3,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{description:"How to Use Arduino Uno R4 with LoRa Module",title:"Grove - Wio-E5 SenseCAP Cloud with Arduino Uno R4",keywords:["LoRaWAN","Home Assistant","Arduino UNO R4","Wio E5"],slug:"/Grove_Wio_E5_SenseCAP_Cloud_Demo",last_update:{date:"2/02/2024",author:"JoJang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Wio-E5 Helium and TinyML Application Demo",permalink:"/Grove_Wio_E5_Helium_tinyML_Demo"},next:{title:"Grove - Wio-E5 SenseCAP Cloud with XIAO ESP32S3",permalink:"/Grove_Wio_E5_SenseCAP_XIAO_ESP32S3"}},l={},d=[{value:"Introduction",id:"introduction",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Arduino Program Code",id:"arduino-program-code",level:4},{value:"ChirpStack Configuration",id:"chirpstack-configuration",level:4},{value:"Application: Integrate with Home Assistant",id:"application-integrate-with-home-assistant",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-arduino-uno-r4-with-lora-module-on-sensecap-cloud"},"How to Use Arduino Uno R4 with LoRa Module on SenseCAP Cloud"),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Arduino UNO R4")," is an integrated tool with enhanced processing capabilities and additional peripherals, making it an excellent prototype and learning tool for both beginners and experienced electronics enthusiasts. However, if you possess an Arduino UNO R4 and desire ultra-low power and long-range message transmission capabilities, I recommend incorporating the Grove Wio-E5."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Grove Wio-E5")," is a user-friendly LoRa module. LoRa is well-suited for applications that require transmitting small amounts of data at low bit rates, offering longer transmission distances compared to technologies like WiFi, Bluetooth, or ZigBee. These characteristics make LoRa particularly suitable for operation in low-power modes."),(0,r.kt)("p",null,"Next, I will guide you on how to use the ",(0,r.kt)("strong",{parentName:"p"},"Arduino UNO R4, Grove-Wio-E5, and Grove-Temperature & Humidity Sensor")," for LoRa communication. This tutorial is designed to provide comprehensive instructions for beginners and intermediate enthusiasts on setting up and implementing wireless communication based on LoRa. It aims to help you master the skills of using Arduino UNO R4 for LoRa communication. Finally, through ",(0,r.kt)("strong",{parentName:"p"},"ChirpStack"),", we will display the data in ",(0,r.kt)("strong",{parentName:"p"},"Home Assistant"),"."),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("h4",{id:"arduino-program-code"},"Arduino Program Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hardware"))),(0,r.kt)("p",null,"In this tutorial, we will use the Arduino UNO R4 WiFi development board and the Grove - Wio-E5. As shown in the picture below:"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_1.jpeg",alt:"pir",width:700,height:"auto"})),(0,r.kt)("div",{class:"table-center"},(0,r.kt)("table",{align:"center"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"Arduino UNO R4"),(0,r.kt)("th",null,"Grove-Wio-E5"),(0,r.kt)("th",null,"Grove-Temperature & Humidity Sensor")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_2.png",style:{width:250,height:"auto"}}))),(0,r.kt)("td",null,(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_3.png",style:{width:250,height:"auto"}}))),(0,r.kt)("td",null,(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_4.png",style:{width:250,height:"auto"}})))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,r.kt)("td",null,(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,r.kt)("td",null,(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,r.kt)("p",null,"We need to connect the pins on the Grove Wio-E5 to their counterparts on the R4 board. The table below."),(0,r.kt)("div",{class:"table-center"},(0,r.kt)("table",{align:"center"},(0,r.kt)("tr",null,(0,r.kt)("th",{align:"center"},"Arduino Uno R4"),(0,r.kt)("th",{align:"center"},"Grove Wio-E5")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"Pin 2"),(0,r.kt)("td",{align:"center"},"TX")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"Pin 7"),(0,r.kt)("td",{align:"center"},"RX")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"3.3V"),(0,r.kt)("td",{align:"center"},"VCC")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"GND"),(0,r.kt)("td",{align:"center"},"GND")))),(0,r.kt)("div",{class:"table-center"},(0,r.kt)("table",{align:"center"},(0,r.kt)("tr",null,(0,r.kt)("th",{align:"center"},"Arduino Uno R4"),(0,r.kt)("th",{align:"center"},"Grove-Temperature & Humidity Sensor")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"A5"),(0,r.kt)("td",{align:"center"},"SCL")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"A4"),(0,r.kt)("td",{align:"center"},"SDA")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"5V"),(0,r.kt)("td",{align:"center"},"VCC")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"GND"),(0,r.kt)("td",{align:"center"},"GND")))),(0,r.kt)("p",null,"The hardware required for the project is complete."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_5.png",alt:"pir",width:700,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Software"))),(0,r.kt)("p",null,"The following code is written based on Arduino Uno R4, with custom sensors added to the R4 board. It reads the sensor values and assigns them directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'# include <Arduino.h>\n# include <SoftwareSerial.h>\n#include "Wire.h"\n#include "DHT.h"\n\n#define DHTTYPE DHT20   // DHT 20\nDHT dht(DHTTYPE);         //   DHT10 DHT20 don\'t need to define Pin\n\nstatic char recv_buf[512];\nstatic bool is_exist = false;\nstatic bool is_join = false;\nstatic int led = 0;\n\nint temp = 1;\nint humi = 56;\n\nSoftwareSerial mySerial(2, 7); // Rx, Tx\n\n\nstatic int at_send_check_response(char *p_ack, int timeout_ms, char*p_cmd, ...)\n{\n    int ch;\n    int num = 0;\n    int index = 0;\n    int startMillis = 0;\n    va_list args;\n    char cmd_buffer[256];  // Adjust the buffer size as needed\n    memset(recv_buf, 0, sizeof(recv_buf));\n    va_start(args, p_cmd);\n    vsprintf(cmd_buffer, p_cmd, args);  // Format the command string\n    mySerial.print(cmd_buffer);\n    Serial.print(cmd_buffer);\n    va_end(args);\n    delay(50);\n    startMillis = millis();\n\n\n    if (p_ack == NULL)\n    {\n        Serial.println("p_ack none");\n        return 0;\n    }\n\n    do\n    {\n        while (mySerial.available() > 0)\n        {\n            ch = mySerial.read();\n            recv_buf[index++] = ch;\n            Serial.print((char)ch);\n            delay(2);\n        }\n\n        if (strstr(recv_buf, p_ack) != NULL)\n        {\n            return 1;\n        }\n\n    } while (millis() - startMillis < timeout_ms);\n    return 0;\n}\n\nstatic void recv_prase(char *p_msg)\n{\n    if (p_msg == NULL)\n    {\n        return;\n    }\nchar*p_start = NULL;\n    int data = 0;\n    int rssi = 0;\n    int snr = 0;\n\n    p_start = strstr(p_msg, "RX");\n    if (p_start && (1 == sscanf(p_start, "RX: \\"%d\\"\\r\\n", &data)))\n    {\n        Serial.println(data);\n        Serial.print("led :");\n        led = !!data;\n        Serial.print(led);\n        if (led)\n        {\n            digitalWrite(LED_BUILTIN, LOW);\n        }\n        else\n        {\n            digitalWrite(LED_BUILTIN, HIGH);\n        }\n    }\n\n    p_start = strstr(p_msg, "RSSI");\n    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))\n    {\n        Serial.print("rssi:");\n        Serial.print(rssi);\n    }\n    p_start = strstr(p_msg, "SNR");\n    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))\n    {\n        Serial.print("snr :");\n        Serial.print(snr);\n    }\n}\n\nvoid setup() {\n  Serial.begin(115200); // \u521d\u59cb\u5316\u4e32\u53e3\u901a\u4fe1\n  Wire.begin();\n  dht.begin();\n  if (!mySerial.begin(9600, SERIAL_8N1)) {\n        Serial.println("Failed to init soft serial");\n        while (1);\n    }\n\n  if (at_send_check_response("+AT: OK", 200, "AT\\r\\n"))\n{\n    is_exist = true;\n    \n    // \u53d1\u9001 AT+ID \u547d\u4ee4\n    if (at_send_check_response("+ID:", 1000, "AT+ID\\r\\n")) {\n        // \u547d\u4ee4\u6210\u529f\u53d1\u9001\u5e76\u4e14\u6536\u5230\u54cd\u5e94\n        // \u53ef\u4ee5\u5728 recv_buf \u4e2d\u627e\u5230\u8fd4\u56de\u7684\u6570\u636e\n        Serial.print("Received ID data: ");\n        Serial.println(recv_buf);\n    } else {\n        // \u547d\u4ee4\u53d1\u9001\u5931\u8d25\u6216\u8005\u6ca1\u6709\u6536\u5230\u54cd\u5e94\n        Serial.println("Failed to get ID data.");\n    }\n\n    // \u5176\u4ed6\u8bbe\u7f6e\u547d\u4ee4\n    at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\\r\\n");\n    at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\\r\\n");\n    at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\\r\\n");\n    at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\\"2B7E151628AED2A6ABF7158809CF4F3D\\"\\r\\n");\n    at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\\r\\n");\n    at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\\r\\n");\n    \n    delay(200);\n    is_join = true;\n}\nelse\n{\n    is_exist = false;\n    Serial.print("No E5 module found.\\r\\n");\n}\n}\n\n\nvoid loop() {\n    float temp_hum_val[2] = {0};\n    if(is_exist)\n    {\n        Serial.println("success");\n        delay(1000);\n    }\n\n    if (is_exist)\n        {\n            int ret = 0;\n            if (is_join)\n            {\n\n                ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\\r\\n");\n                if (ret)\n                {\n                    is_join = false;\n                }\n                else\n                {\n                    at_send_check_response("+ID: AppEui", 1000, "AT+ID\\r\\n");\n                    Serial.print("JOIN failed!\\r\\n\\r\\n");\n                    delay(5000);\n                }\n            }\n            else\n            {\n              if (!dht.readTempAndHumidity(temp_hum_val)) {\n                char cmd[128];\n                sprintf(cmd, "AT+CMSGHEX=\\"%04X%04X\\"\\r\\n", int(temp_hum_val[1]*100), int(temp_hum_val[0]*100));\n                Serial.print(temp_hum_val[0]);\n                Serial.println(temp_hum_val[1]);\n                ret = at_send_check_response("Done", 5000, cmd);\n                if (ret)\n                {\n                    recv_prase(recv_buf);\n                }\n                else\n                {\n                    Serial.print("Send failed!\\r\\n\\r\\n");\n                }\n              }\n                delay(30000);\n            }\n        }\n        else\n        {\n            delay(1000);\n        }\n}\n')),(0,r.kt)("h4",{id:"chirpstack-configuration"},"ChirpStack Configuration"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ChirpStack"),"  is an open-source Internet of Things (IoT) solution designed for building and managing LoRaWAN networks. It provides a comprehensive set of tools and services to assist users in deploying, managing, and monitoring LoRaWAN networks, including gateways, network servers, application servers, and devices. For information on how to connect to ChirpStack, please refer to the following link: ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/#chirpstack-configuration"},"Chirpstack-Configuration")),(0,r.kt)("p",null,"After creating a new device profile in ChirpStack, fill in the payload codec with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function decodeUplink(input) {\n    var decoded = {\n        temp: 0,\n        humi: 0\n    };\n    var bytes = input['bytes'];\n    bytes = bytes2HexString(bytes);\n\n    decoded.temp = parseInt(bytes.slice(0, 4), 16) / 100;\n    decoded.humi = parseInt(bytes.slice(-4), 16) / 100;\n\n    let messages = [\n        {\n            type: 'temp',\n            measurementId: 4097,\n            measurementValue: decoded.temp\n        },\n        {\n            type: 'humi',\n            measurementId: 4098,\n            measurementValue: decoded.humi\n        }\n    ];\n\n    var result = {};\n    result.messages = messages;\n    return { data: result };\n}\n\n    /**\n   * Convert to an 8-digit binary number with 0s in front of the number\n   * @param arr\n   * @returns {string}\n   */\n  function toBinary (arr) {\n    let binaryData = arr.map((item) => {\n      let data = parseInt(item, 16)\n        .toString(2)\n      let dataLength = data.length\n      if (data.length !== 8) {\n        for (let i = 0; i < 8 - dataLength; i++) {\n          data = `0` + data\n        }\n      }\n      return data\n    })\n    let ret = binaryData.toString()\n      .replace(/,/g, '')\n    return ret\n  }\n  \n  \n  function bytes2HexString (arrBytes) {\n    var str = ''\n    for (var i = 0; i < arrBytes.length; i++) {\n      var tmp\n      var num = arrBytes[i]\n      if (num < 0) {\n        tmp = (255 + num + 1).toString(16)\n      } else {\n        tmp = num.toString(16)\n      }\n      if (tmp.length === 1) {\n        tmp = '0' + tmp\n      }\n      str += tmp\n    }\n    return str\n  }\n")),(0,r.kt)("p",null,"Then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit"),"."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_6.png",alt:"pir",width:700,height:"auto"})),(0,r.kt)("p",null,"As shown in the following figure, the relevant data is received, indicating that the data is successfully sent."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_7.png",alt:"pir",width:700,height:"auto"})),(0,r.kt)("p",null,"Decoding alone may not provide a visually intuitive representation of sensor data. In such cases, we can utilize user-friendly platforms, with Home Assistant being a prime example."),(0,r.kt)("h3",{id:"application-integrate-with-home-assistant"},"Application: Integrate with Home Assistant"),(0,r.kt)("p",null,"Home Assistant is an open-source smart home automation platform designed to enable users to integrate, control, and automate various smart devices and services. It supports interoperability with a wide range of smart home devices, allowing users to create customized automation scenarios and smart home control systems. If we can integrate Arduino UNO R4 with Home Assistant, it will diversify the development possibilities for Arduino UNO R4."),(0,r.kt)("p",null,"Both ChirpStack and Home Assistant have built-in MQTT plugin integration. This allows them to communicate data through the MQTT protocol, facilitating the transmission of sensor data from the gateway (equipped with an MQTT plugin) to Home Assistant."),(0,r.kt)("p",null,"You can also integrate Arduino Uno R4 into Home Assistant. Please refer to this tutorial: ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/home_assistant_sensecap/"},"home_assistant_sensecap")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN/r4_8.png",alt:"pir",width:700,height:"auto"})))}p.isMDXComponent=!0}}]);