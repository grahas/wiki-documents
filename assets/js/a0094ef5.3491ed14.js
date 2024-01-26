"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=o(n),g=r,p=c["".concat(l,".").concat(g)]||c[g]||m[g]||s;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},39374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const s={description:"Connect_Wio_Tracker_1110_to_TTN",title:"Connect to TTN",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/connect_wio_tracker_to_TTN",last_update:{date:"10/23/2023",author:"Jessie"}},i=void 0,u={unversionedId:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Connect_to_TTN",id:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Connect_to_TTN",title:"Connect to TTN",description:"Connect_Wio_Tracker_1110_to_TTN",source:"@site/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Connect_to_TTN.md",sourceDirName:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board",slug:"/connect_wio_tracker_to_TTN",permalink:"/connect_wio_tracker_to_TTN",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Connect_to_TTN.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1698019200,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{description:"Connect_Wio_Tracker_1110_to_TTN",title:"Connect to TTN",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/connect_wio_tracker_to_TTN",last_update:{date:"10/23/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Get Started",permalink:"/Get_Started_with_Wio-Trakcer_1110"},next:{title:"Connect Wio Tracker to LoRa Cloud\u2122 Locator",permalink:"/connect_wio_tracker_to_locator"}},l={},o=[{value:"Configure the Dev Board",id:"configure-the-dev-board",level:2},{value:"Configure The Things Stack",id:"configure-the-things-stack",level:2},{value:"Step 1: Create an application",id:"step-1-create-an-application",level:3},{value:"Step 2: Register the Device",id:"step-2-register-the-device",level:3},{value:"Step 3: Configure the decoder",id:"step-3-configure-the-decoder",level:3},{value:"Step 4: Check the data",id:"step-4-check-the-data",level:3},{value:"Resource",id:"resource",level:2}],d={toc:o},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.thethingsnetwork.org/"},"The Things Stack(TTS)")," is a LoRaWAN\xae Network Server stack which is the critical component for any LoRaWAN solution. In this chapter we will guide users to connect the Wio Tracker 1110 Dev Board to the Things Network."),(0,r.kt)("h2",{id:"configure-the-dev-board"},"Configure the Dev Board"),(0,r.kt)("p",null,"Before connecting to the TTS, you need to configure the basic parameters of your board on SenseCAP Mate APP, check ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Get_Started_with_Wio-Trakcer_1110/#configure-the-frequency-and-connect-to-the-gateway"},"Get Started")," for more details."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the platform to TTN, and then copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"Device EUI"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"APP EUI"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"APP Key"),".")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png",alt:"pir",width:300,height:"auto"})),(0,r.kt)("h2",{id:"configure-the-things-stack"},"Configure The Things Stack"),(0,r.kt)("h3",{id:"step-1-create-an-application"},"Step 1: Create an application"),(0,r.kt)("p",null,'Navigate to Applications page, click "+Create application".'),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png",alt:"pir",width:800,height:"auto"})),(0,r.kt)("p",null,"Enter an Application ID, click Create Application to save your changes."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png",alt:"pir",width:800,height:"auto"})),(0,r.kt)("h3",{id:"step-2-register-the-device"},"Step 2: Register the Device"),(0,r.kt)("p",null,"Paste the ",(0,r.kt)("inlineCode",{parentName:"p"},"Device EUI"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"APP EUI"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"APP Key"),", and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"frequency plan")," according to your device, and then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Register end device"),"."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/register-wio.png",alt:"pir",width:800,height:"auto"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"JoinEUI")," formerly called ",(0,r.kt)("inlineCode",{parentName:"p"},"AppEUI"),", they are the same.")),(0,r.kt)("h3",{id:"step-3-configure-the-decoder"},"Step 3: Configure the decoder"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Payload formatters"),", select Formatter type to ",(0,r.kt)("inlineCode",{parentName:"p"},"Custom Javasript formatter"),", then copy the following code:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"For TTN"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"function decodeUplink (input) {\n    const bytes = input['bytes']\n    const fport = parseInt(input['fPort'])\n    const bytesString = bytes2HexString(bytes)\n    const originMessage = bytesString.toLocaleUpperCase()\n    const decoded = {\n        valid: true,\n        err: 0,\n        payload: bytesString,\n        messages: []\n    }\n    if (fport === 199 || fport === 192) {\n        decoded.messages.push({fport: fport, payload: bytesString})\n        return { data: decoded }\n    }\n    if (fport !== 5) {\n        decoded.valid = false\n        return { data: decoded }\n    }\n    let measurement = messageAnalyzed(originMessage)\n    if (measurement.length === 0) {\n        decoded.valid = false\n        return { data: decoded }\n    }\n\n    for (let message of measurement) {\n        if (message.length === 0) {\n            continue\n        }\n        let elements = []\n        for (let element of message) {\n            if (element.errorCode) {\n                decoded.err = element.errorCode\n                decoded.errMessage = element.error\n            } else {\n                elements.push(element)\n            }\n        }\n        if (elements.length > 0) {\n            decoded.messages.push(elements)\n        }\n    }\n    // decoded.messages = measurement\n    return { data: decoded }\n}\n\nfunction messageAnalyzed (messageValue) {\n    try {\n        let frames = unpack(messageValue)\n        let measurementResultArray = []\n        for (let i = 0; i < frames.length; i++) {\n            let item = frames[i]\n            let dataId = item.dataId\n            let dataValue = item.dataValue\n            let measurementArray = deserialize(dataId, dataValue)\n            measurementResultArray.push(measurementArray)\n        }\n        return measurementResultArray\n    } catch (e) {\n        return e.toString()\n    }\n}\n\nfunction unpack (messageValue) {\n    let frameArray = []\n\n    for (let i = 0; i < messageValue.length; i++) {\n        let remainMessage = messageValue\n        let dataId = remainMessage.substring(0, 2).toUpperCase()\n        let dataValue\n        let dataObj = {}\n        let packageLen\n        switch (dataId) {\n            case '12':\n                packageLen = getInt(remainMessage.substring(8, 10)) * 2 + 10\n                if (remainMessage.length < packageLen) {\n                    return frameArray\n                }\n                dataValue = remainMessage.substring(2, 8) + remainMessage.substring(10, packageLen)\n                messageValue = remainMessage.substring(packageLen)\n                dataObj = {\n                    'dataId': dataId, 'dataValue': dataValue\n                }\n                break\n            case '13':\n                packageLen = 24\n                if (remainMessage.length < packageLen) {\n                    return frameArray\n                }\n                dataValue = remainMessage.substring(2, packageLen)\n                messageValue = remainMessage.substring(packageLen)\n                dataObj = {\n                    'dataId': dataId, 'dataValue': dataValue\n                }\n                break\n            case '14':\n                packageLen = 74\n                if (remainMessage.length < packageLen) {\n                    return frameArray\n                }\n                dataValue = remainMessage.substring(2, packageLen)\n                messageValue = remainMessage.substring(packageLen)\n                dataObj = {\n                    'dataId': dataId, 'dataValue': dataValue\n                }\n                break\n            case '15':\n                packageLen = 60\n                if (remainMessage.length < packageLen) {\n                    return frameArray\n                }\n                dataValue = remainMessage.substring(2, packageLen)\n                messageValue = remainMessage.substring(packageLen)\n                dataObj = {\n                    'dataId': dataId, 'dataValue': dataValue\n                }\n                break\n            case '16':\n                packageLen = 18\n                if (remainMessage.length < packageLen) {\n                    return frameArray\n                }\n                dataValue = remainMessage.substring(2, packageLen)\n                messageValue = remainMessage.substring(packageLen)\n                dataObj = {\n                    'dataId': dataId, 'dataValue': dataValue\n                }\n                break\n            case '17':\n                let byteCount = parseInt(remainMessage.substring(2, 4), 16)\n                packageLen = getInt(remainMessage.substring(2, 4)) * 2\n                if (remainMessage.length < packageLen) {\n                    return frameArray\n                }\n                dataValue = remainMessage.substring(4, packageLen)\n                messageValue = remainMessage.substring(packageLen)\n                if (isNaN(byteCount) || byteCount < 13 || (byteCount - 9) % 4 !== 0 || byteCount > 49) {\n                    continue\n                }\n                dataObj = {\n                    'dataId': dataId, 'dataValue': dataValue\n                }\n                break\n            case '18':\n                packageLen = 56\n                if (remainMessage.length < packageLen) {\n                    return frameArray\n                }\n                dataValue = remainMessage.substring(2, packageLen)\n                messageValue = remainMessage.substring(packageLen)\n                dataObj = {\n                    'dataId': dataId, 'dataValue': dataValue\n                }\n                break\n            default:\n                return frameArray\n        }\n        if (dataValue.length < 2) {\n            break\n        }\n        frameArray.push(dataObj)\n    }\n    return frameArray\n}\n\nfunction deserialize (dataId, dataValue) {\n    let measurementArray = []\n    let eventList = []\n    let measurement = {}\n    let collectTime = parseInt(new Date().getTime() / 1000)\n    let groupId = 0\n    let shardFlag = {}\n    let payload = ''\n    let value\n    let result = []\n    let dataArr = []\n    switch (dataId) {\n        case '12':\n            shardFlag = getShardFlag(dataValue.substring(0, 2))\n            groupId = getInt(dataValue.substring(2, 6))\n            payload = dataValue.substring(6)\n            measurement = {\n                measurementId: '6152',\n                groupId: groupId,\n                index: shardFlag.index,\n                count: shardFlag.count,\n                type: 'gnss-ng payload',\n                measurementValue: payload\n            }\n            measurementArray.push(measurement)\n            break\n        case '13':\n            collectTime = getUTCTimestamp(dataValue.substring(8, 16))\n            shardFlag = getShardFlag(dataValue.substring(16, 18))\n            groupId = getInt(dataValue.substring(18, 22))\n            measurementArray.push({\n                measurementId: '4200',\n                timestamp: collectTime,\n                motionId: getMotionId(dataValue.substring(6, 8)),\n                groupId: groupId,\n                index: shardFlag.index,\n                count: shardFlag.count,\n                type: 'Event Status',\n                measurementValue: getEventStatus(dataValue.substring(0, 6))\n            })\n            break\n        case '14':\n            collectTime = getUTCTimestamp(dataValue.substring(8, 16))\n            measurementArray = [\n                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Event Status', measurementValue: getEventStatus(dataValue.substring(0, 6))},\n                {measurementId: '5001', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Wi-Fi Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 72))}\n            ]\n            break\n        case '15':\n            collectTime = getUTCTimestamp(dataValue.substring(8, 16))\n            measurementArray = [\n                {measurementId: '4200', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'Event Status', measurementValue: getEventStatus(dataValue.substring(0, 6))},\n                {measurementId: '5002', timestamp: collectTime, motionId: getMotionId(dataValue.substring(6, 8)), type: 'BLE Scan', measurementValue: getMacAndRssiObj(dataValue.substring(16, 58))},\n            ]\n            break\n        case '16':\n            collectTime = getUTCTimestamp(dataValue.substring(8, 16))\n            measurementArray.push({\n                measurementId: '3576',\n                timestamp: collectTime,\n                type: 'Positioning Status',\n                measurementValue: getPositingStatus(dataValue.substring(0, 2))\n            })\n            measurementArray.push({\n                timestamp: collectTime,\n                measurementId: '4200',\n                type: 'Event Status',\n                measurementValue: getEventStatus(dataValue.substring(2, 8))\n            })\n            break\n        case '17':\n            collectTime = getUTCTimestamp(dataValue.substring(6, 14))\n            value = getUnsignedSensorValue(dataValue.substring(0, 6))\n            if (value !== null) {\n                measurementArray.push({\n                    measurementId: '4208',\n                    measureTime: collectTime,\n                    type: 'Custom Event Status',\n                    measurementValue: value\n                })\n            }\n            let initId = 4165\n            for (let i = 14; i < dataValue.length; i += 8) {\n                value = getUnsignedSensorValue(dataValue.substring(i, i + 8))\n                if (value !== null) {\n                    measurementArray.push({\n                        timestamp: collectTime,\n                        measurementId: initId++,\n                        type: 'Custom Measurement Type',\n                        measurementValue: value\n                    })\n                }\n            }\n            break\n        case '18':\n            collectTime = getUTCTimestamp(dataValue.substring(6, 14))\n            measurementArray.push({\n                measurementId: '4200',\n                timestamp: collectTime,\n                type: 'Event Status',\n                measurementValue: getEventStatus(dataValue.substring(0, 6))\n            })\n            value = getSignSensorValue(dataValue.substring(14, 18), 10)\n            if (value !== null) {\n                measurementArray.push({\n                    measurementId: '4097',\n                    timestamp: collectTime,\n                    type: 'Air Temperature',\n                    measurementValue: value\n                })\n            }\n            value = getUnsignedSensorValue(dataValue.substring(18, 20), 1)\n            if (value !== null) {\n                measurementArray.push({\n                    measurementId: '4098',\n                    timestamp: collectTime,\n                    type: 'Air Humidity',\n                    measurementValue: value\n                })\n            }\n            value = getUnsignedSensorValue(dataValue.substring(20, 26), 1)\n            if (value !== null) {\n                measurementArray.push({\n                    measurementId: '4101',\n                    timestamp: collectTime,\n                    type: 'Barometric Pressure',\n                    measurementValue: value\n                })\n            }\n            value = getUnsignedSensorValue(dataValue.substring(26, 30), 1)\n            if (value !== null) {\n                measurementArray.push({\n                    measurementId: '4115',\n                    timestamp: collectTime,\n                    type: 'Distance',\n                    measurementValue: value\n                })\n            }\n            value = getUnsignedSensorValue(dataValue.substring(30, 34), 100)\n            if (value !== null) {\n                measurementArray.push({\n                    measurementId: '4190',\n                    timestamp: collectTime,\n                    type: 'UV Index',\n                    measurementValue: value\n                })\n            }\n            value = getUnsignedSensorValue(dataValue.substring(34, 38), 1)\n            if (value !== null) {\n                measurementArray.push({\n                    measurementId: '4206',\n                    timestamp: collectTime,\n                    type: 'VOC_INDEX',\n                    measurementValue: value\n                })\n            }\n            value = getUnsignedSensorValue(dataValue.substring(38, 42), 1)\n            if (value !== null) {\n                measurementArray.push({\n                    measurementId: '4207',\n                    timestamp: collectTime,\n                    type: 'Noise',\n                    measurementValue: value\n                })\n            }\n            value = getSignSensorValue(dataValue.substring(42, 46), 100)\n            if (value !== null) {\n                measurementArray.push({\n                    measurementId: '4150',\n                    timestamp: collectTime,\n                    type: ' AccelerometerX',\n                    measurementValue: value\n                })\n            }\n            value = getSignSensorValue(dataValue.substring(46, 50), 100)\n            if (value !== null) {\n                measurementArray.push({\n                    measurementId: '4151',\n                    timestamp: collectTime,\n                    type: 'AccelerometerY',\n                    measurementValue: value\n                })\n            }\n            value = getSignSensorValue(dataValue.substring(50, 54), 100)\n            if (value !== null) {\n                measurementArray.push({\n                    measurementId: '4152',\n                    timestamp: collectTime,\n                    type: 'AccelerometerZ',\n                    measurementValue: value\n                })\n            }\n            break\n    }\n    return measurementArray\n}\n\nfunction getMotionId (str) {\n    return getInt(str)\n}\n\nfunction getPositingStatus (str) {\n    let status = getInt(str)\n    switch (status) {\n        case 0:\n            return {id:status, statusName:\"Positioning successful.\"}\n        case 1:\n            return {id:status, statusName:\"The GNSS scan timed out and failed to obtain the location.\"}\n        case 2:\n            return {id:status, statusName:\"The Wi-Fi scan timed out and failed to obtain the location.\"}\n        case 3:\n            return {id:status, statusName:\"The Wi-Fi + GNSS scan timed out and failed to obtain the location.\"}\n        case 4:\n            return {id:status, statusName:\"The GNSS + Wi-Fi scan timed out and failed to obtain the location.\"}\n        case 5:\n            return {id:status, statusName:\"The Bluetooth scan timed out and failed to obtain the location.\"}\n        case 6:\n            return {id:status, statusName:\"The Bluetooth + Wi-Fi scan timed out and failed to obtain the location.\"}\n        case 7:\n            return {id:status, statusName:\"The Bluetooth + GNSS scan timed out and failed to obtain the location.\"}\n        case 8:\n            return {id:status, statusName:\"The Bluetooth + Wi-Fi + GNSS scan timed out and failed to obtain the location.\"}\n        case 9:\n            return {id:status, statusName:\"Location Server failed to parse the GNSS location.\"}\n        case 10:\n            return {id:status, statusName:\"Location Server failed to parse the Wi-Fi location.\"}\n        case 11:\n            return {id:status, statusName:\"Location Server failed to parse the Bluetooth location.\"}\n        case 12:\n            return {id:status, statusName:\"Failed to parse the GNSS location due to the poor accuracy.\"}\n        case 13:\n            return {id:status, statusName:\"Time synchronization failed.\"}\n        case 14:\n            return {id:status, statusName:\"Failed to obtain location due to the old Almanac.\"}\n    }\n    return getInt(str)\n}\n\nfunction getShardFlag (str) {\n    let bitStr = getByteArray(str)\n    return {\n        count: parseInt(bitStr.substring(0, 4), 2),\n        index: parseInt(bitStr.substring(4), 2)\n    }\n}\n\nfunction bytes2HexString (arrBytes) {\n    var str = ''\n    for (var i = 0; i < arrBytes.length; i++) {\n        var tmp\n        var num = arrBytes[i]\n        if (num < 0) {\n            tmp = (255 + num + 1).toString(16)\n        } else {\n            tmp = num.toString(16)\n        }\n        if (tmp.length === 1) {\n            tmp = '0' + tmp\n        }\n        str += tmp\n    }\n    return str\n}\nfunction loraWANV2DataFormat (str, divisor = 1) {\n    let strReverse = bigEndianTransform(str)\n    let str2 = toBinary(strReverse)\n    if (str2.substring(0, 1) === '1') {\n        let arr = str2.split('')\n        let reverseArr = arr.map((item) => {\n            if (parseInt(item) === 1) {\n                return 0\n            } else {\n                return 1\n            }\n        })\n        str2 = parseInt(reverseArr.join(''), 2) + 1\n        return '-' + str2 / divisor\n    }\n    return parseInt(str2, 2) / divisor\n}\n\nfunction bigEndianTransform (data) {\n    let dataArray = []\n    for (let i = 0; i < data.length; i += 2) {\n        dataArray.push(data.substring(i, i + 2))\n    }\n    return dataArray\n}\n\nfunction toBinary (arr) {\n    let binaryData = arr.map((item) => {\n        let data = parseInt(item, 16)\n            .toString(2)\n        let dataLength = data.length\n        if (data.length !== 8) {\n            for (let i = 0; i < 8 - dataLength; i++) {\n                data = `0` + data\n            }\n        }\n        return data\n    })\n    return binaryData.toString().replace(/,/g, '')\n}\n\nfunction getMacAndRssiObj (pair) {\n    let pairs = []\n    if (pair.length % 14 === 0) {\n        for (let i = 0; i < pair.length; i += 14) {\n            let mac = getMacAddress(pair.substring(i, i + 12))\n            if (mac) {\n                let rssi = getInt8RSSI(pair.substring(i + 12, i + 14))\n                pairs.push({mac: mac, rssi: rssi})\n            } else {\n                continue\n            }\n        }\n    }\n    return pairs\n}\n\nfunction getMacAddress (str) {\n    if (str.toLowerCase() === 'ffffffffffff') {\n        return null\n    }\n    let macArr = []\n    for (let i = 1; i < str.length; i++) {\n        if (i % 2 === 1) {\n            macArr.push(str.substring(i - 1, i + 1))\n        }\n    }\n    let mac = ''\n    for (let i = 0; i < macArr.length; i++) {\n        mac = mac + macArr[i]\n        if (i < macArr.length - 1) {\n            mac = mac + ':'\n        }\n    }\n    return mac\n}\n\nfunction getInt8RSSI (str) {\n    return loraWANV2DataFormat(str)\n}\n\nfunction getInt (str) {\n    return parseInt(str, 16)\n}\n\nfunction getEventStatus (str) {\n    // return getInt(str)\n    let bitStr = getByteArray(str)\n    let bitArr = []\n    for (let i = 0; i < bitStr.length; i++) {\n        bitArr[i] = bitStr.substring(i, i + 1)\n    }\n    bitArr = bitArr.reverse()\n    let event = []\n    for (let i = 0; i < bitArr.length; i++) {\n        if (bitArr[i] !== '1') {\n            continue\n        }\n        switch (i){\n            case 0:\n                event.push({id:1, eventName:\"Start moving event.\"})\n                break\n            case 1:\n                event.push({id:2, eventName:\"End movement event.\"})\n                break\n            case 2:\n                event.push({id:3, eventName:\"Motionless event.\"})\n                break\n            case 3:\n                event.push({id:4, eventName:\"Shock event.\"})\n                break\n            case 4:\n                event.push({id:5, eventName:\"Temperature event.\"})\n                break\n            case 5:\n                event.push({id:6, eventName:\"Light event.\"})\n                break\n            case 6:\n                event.push({id:7, eventName:\"SOS event.\"})\n                break\n            case 7:\n                event.push({id:8, eventName:\"Press once event.\"})\n                break\n        }\n    }\n    return event\n}\n\nfunction getByteArray (str) {\n    let bytes = []\n    for (let i = 0; i < str.length; i += 2) {\n        bytes.push(str.substring(i, i + 2))\n    }\n    return toBinary(bytes)\n}\n\nfunction getUTCTimestamp(str){\n    return parseInt(loraWANV2PositiveDataFormat(str)) * 1000\n}\nfunction getUnsignedSensorValue (str, dig = 1) {\n    if (isNull(str)) {\n        return null\n    }\n    return parseInt(str, 16) / dig\n}\nfunction isNull (str) {\n    if (str.substring(0, 1) !== '8') {\n        return false\n    }\n    for (let i = 1; i < str.length; i++) {\n        if (str.substring(i, i + 1) !== '0') {\n            return false\n        }\n    }\n    return true\n}\nfunction getSignSensorValue (str, dig = 1) {\n    if (isNull(str)) {\n        return null\n    }\n    return loraWANV2DataFormat(str, dig)\n}\nfunction loraWANV2PositiveDataFormat (str, divisor = 1) {\n    let strReverse = bigEndianTransform(str)\n    let str2 = toBinary(strReverse)\n    return parseInt(str2, 2) / divisor\n}\n"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/c-decoder.png",alt:"pir",width:800,height:"auto"})),(0,r.kt)("h3",{id:"step-4-check-the-data"},"Step 4: Check the data"),(0,r.kt)("p",null,"When the device tries to connect to the network, the breathing light will flash. If the device joins the network successfully, the breathing light will flash quickly, and there will be a light and cheerful melody."),(0,r.kt)("p",null,"Then you can check the data on the TTS console."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_check.png",alt:"pir",width:800,height:"auto"})),(0,r.kt)("h2",{id:"resource"},"Resource"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/WM1110/TTN/SenseCAP_WM1110_TTN_Decoder.js"},"TTN decoder for Wio Tracker 1110 Dev Board")))}m.isMDXComponent=!0}}]);