"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53465],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return o?n.createElement(h,l(l({ref:t},c),{},{components:o})):n.createElement(h,l({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},85162:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(67294),a=o(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:o,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:o},t)}},74866:(e,t,o)=>{o.d(t,{Z:()=>k});var n=o(87462),a=o(67294),r=o(86010),l=o(12466),i=o(16550),s=o(91980),p=o(67392),c=o(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:a}}=e;return{value:t,label:o,attributes:n,default:a}}))}function d(e){const{values:t,children:o}=e;return(0,a.useMemo)((()=>{const e=t??u(o);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function m(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:o}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:o=!1,groupId:n}=e,r=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,p]=h({queryString:o,groupId:n}),[u,f]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(o);return[n,(0,a.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:n}),y=(()=>{const e=s??u;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var y=o(72389);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:o,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,o=c.indexOf(t),n=p[o].value;n!==i&&(u(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;t=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;t=c[o]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},t)},p.map((e=>{let{value:t,label:o,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",_.tabItem,l?.className,{"tabs__item--active":i===t})}),o??t)})))}function b(e){let{lazy:t,children:o,selectedValue:n}=e;const r=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",_.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(b,(0,n.Z)({},e,t)))}function k(e){const t=(0,y.Z)();return a.createElement(v,(0,n.Z)({key:String(t)},e))}},62010:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=o(87462),a=(o(67294),o(3905)),r=o(74866),l=o(85162);const i={description:"Export For Model Assistant",title:"PyTorch to ONNX",keywords:["sscma model assistant ai tinyml"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX",last_update:{date:"01/11/2024",author:"LynnL4"}},s="PyTorch to ONNX",p={unversionedId:"Topics/TinyML/ModelAssistant/tutorials/export/pytorch_2_onnx",id:"Topics/TinyML/ModelAssistant/tutorials/export/pytorch_2_onnx",title:"PyTorch to ONNX",description:"Export For Model Assistant",source:"@site/docs/Topics/TinyML/ModelAssistant/tutorials/export/pytorch_2_onnx.md",sourceDirName:"Topics/TinyML/ModelAssistant/tutorials/export",slug:"/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX",permalink:"/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/tutorials/export/pytorch_2_onnx.md",tags:[],version:"current",lastUpdatedBy:"LynnL4",lastUpdatedAt:1704931200,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{description:"Export For Model Assistant",title:"PyTorch to ONNX",keywords:["sscma model assistant ai tinyml"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ModelAssistant_Tutorials_Export_PyTorch_2_ONNX",last_update:{date:"01/11/2024",author:"LynnL4"}},sidebar:"ProductSidebar",previous:{title:"Export",permalink:"/ModelAssistant_Tutorials_Export_Overview"},next:{title:"PyTorch to TFLite",permalink:"/ModelAssistant_Tutorials_Export_PyTorch_2_TFLite"}},c={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Environment Configuration",id:"environment-configuration",level:3},{value:"Models and Weights",id:"models-and-weights",level:3},{value:"Export Model",id:"export-model",level:2},{value:"ONNX Export Examples",id:"onnx-export-examples",level:3},{value:"Model Validation",id:"model-validation",level:2},{value:"Model Validation Example",id:"model-validation-example",level:3}],d={toc:u},m="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pytorch-to-onnx"},"PyTorch to ONNX"),(0,a.kt)("p",null,"This chapter will describe how to convert and export PyTorch models to ONNX models."),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("h3",{id:"environment-configuration"},"Environment Configuration"),(0,a.kt)("p",null,"As the ",(0,a.kt)("a",{parentName:"p",href:"/ModelAssistant_Tutorials_Training_Overview"},"Training")," step, we recommend you to do it in a ",(0,a.kt)("strong",{parentName:"p"},"virtual environment")," during the model exporting phase. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"sscma")," virtual environment, make sure that the ",(0,a.kt)("a",{parentName:"p",href:"/ModelAssistant_Introduce_Installation#step-4-install-extra-dependencies-optional"},"Installation - Prerequisites - Install Extra Dependencies")," step has been completed."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you have configured a virtual environment but not activated it, you can activate it with the following command."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"conda activate sscma\n"))),(0,a.kt)("h3",{id:"models-and-weights"},"Models and Weights"),(0,a.kt)("p",null,"You also need to prepare the PyTorch model and its weights before exporting the model. For the model, you can find it in the ",(0,a.kt)("a",{parentName:"p",href:"/ModelAssistant_Tutorials_Datasets"},"Config")," section, we have already preconfigured. For the weights, you can refer to the following steps to get the model weights."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/ModelAssistant_Tutorials_Training_Overview"},"Training")," section and choose a model, and train to get the model weights.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Or download the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," official pre-trained weights from our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistantreleases/tag/model_zoo"},"GitHub Releases - Model Zoo"),"."))),(0,a.kt)("h2",{id:"export-model"},"Export Model"),(0,a.kt)("p",null,"For model convert and export, the relevant commands with some common parameters are listed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'python3 tools/export.py \\\n    "<CONFIG_FILE_PATH>" \\\n    "<CHECKPOINT_FILE_PATH>" \\\n    --target onnx\n')),(0,a.kt)("h3",{id:"onnx-export-examples"},"ONNX Export Examples"),(0,a.kt)("p",null,"Here are some model conversion examples for reference."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"FOMO Model Conversion",label:"FOMO Model Conversion",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 tools/export.py \\\n    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \\\n    \"$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint)\" \\\n    --target onnx \\\n    --cfg-options \\\n        data_root='datasets/mask'\n"))),(0,a.kt)(l.Z,{value:"PFLD Model Conversion",label:"PFLD Model Conversion",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python3 tools/export.py \\\n    configs/pfld/pfld_mbv2n_112.py \\\n    \"$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)\" \\\n    --target onnx \\\n    --cfg-options \\\n        data_root='datasets/meter'\n"))),(0,a.kt)(l.Z,{value:"SWIFT-YOLO Model Conversion",label:"SWIFT Model Conversion",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python3 tools/export.py \\\n    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \\\n    \"$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint)\" \\\n    --target onnx \\\n    --cfg-options \\\n        data_root='datasets/digital_meter'\n")))),(0,a.kt)("h2",{id:"model-validation"},"Model Validation"),(0,a.kt)("p",null,"Since in the process of exporting the model, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," will do some optimization for the model using some tools, such as model pruning, distillation, etc. Although we have tested and evaluated the model weights during the training process, we recommend you to validate the exported model again."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'python3 tools/inference.py \\\n    "<CONFIG_FILE_PATH>" \\\n    "<CHECKPOINT_FILE_PATH>" \\\n    --show \\\n    --cfg-options "<CFG_OPTIONS>"\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For more parameters supported, please refer to the source code ",(0,a.kt)("inlineCode",{parentName:"p"},"tools/inference.py")," or run ",(0,a.kt)("inlineCode",{parentName:"p"},"python3 tools/inference.py --help"),".")),(0,a.kt)("h3",{id:"model-validation-example"},"Model Validation Example"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"FOMO Model Validation",label:"FOMO Model Validation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python3 tools/inference.py \\\n    configs/fomo/fomo_mobnetv2_0.35_x8_abl_coco.py \\\n    \"$(cat work_dirs/fomo_mobnetv2_0.35_x8_abl_coco/last_checkpoint | sed -e 's/.pth/.onnx/g')\" \\\n    --show \\\n    --cfg-options \\\n        data_root='datasets/mask'\n"))),(0,a.kt)(l.Z,{value:"PFLD Model Validation",label:"PFLD Model Validation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"[PFLD Model Validation]","[PFLD":!0,Model:!0,"Validation]":!0},"python3 tools/inference.py \\\n    configs/pfld/pfld_mbv2n_112.py \\\n    \"$(cat work_dirs/pfld_mbv2n_112/last_checkpoint | sed -e 's/.pth/.onnx/g')\" \\\n    --show \\\n    --cfg-options \\\n        data_root='datasets/meter'\n"))),(0,a.kt)(l.Z,{value:"SWIFT-YOLO Model Validation",label:"SWIFT-YOLO Model Validation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"[SWIFT-YOLO Model Validation]","[SWIFT-YOLO":!0,Model:!0,"Validation]":!0},"python3 tools/inference.py \\\n    configs/swift_yolo/swift_yolo_tiny_1xb16_300e_coco.py \\\n    \"$(cat work_dirs/swift_yolo_tiny_1xb16_300e_coco/last_checkpoint | sed -e 's/.pth/.onnx/g')\" \\\n    --show \\\n    --cfg-options \\\n        data_root='datasets/digital_meter'\n")))))}h.isMDXComponent=!0}}]);