"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={},r="Keypoint Detection - PFLD",l={unversionedId:"Topics/TinyML/ModelAssistant/tutorials/training/pfld",id:"Topics/TinyML/ModelAssistant/tutorials/training/pfld",title:"Keypoint Detection - PFLD",description:"This section describes how to train the PFLD model on the PFLD meter dataset. The PFLD model is presented in the paper PFLD: A Practical Facial Landmark Detector.",source:"@site/docs/Topics/TinyML/ModelAssistant/tutorials/training/pfld.md",sourceDirName:"Topics/TinyML/ModelAssistant/tutorials/training",slug:"/Topics/TinyML/ModelAssistant/tutorials/training/pfld",permalink:"/Topics/TinyML/ModelAssistant/tutorials/training/pfld",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/tutorials/training/pfld.md",tags:[],version:"current",lastUpdatedBy:"jianjingH",lastUpdatedAt:1704961876,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{},sidebar:"ProductSidebar",previous:{title:"Object Detecion - FOMO",permalink:"/Topics/TinyML/ModelAssistant/tutorials/training/fomo"},next:{title:"Model Export",permalink:"/Topics/TinyML/ModelAssistant/tutorials/export/overview"}},s={},p=[{value:"Prepare Datasets",id:"prepare-datasets",level:2},{value:"Choose a Configuration",id:"choose-a-configuration",level:2},{value:"Training Model",id:"training-model",level:2},{value:"Testing and Evaluation",id:"testing-and-evaluation",level:2},{value:"Testing",id:"testing",level:3},{value:"Evaluation",id:"evaluation",level:3},{value:"Deployment",id:"deployment",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keypoint-detection---pfld"},"Keypoint Detection - PFLD"),(0,o.kt)("p",null,"This section describes how to train the PFLD model on the PFLD meter dataset. The PFLD model is presented in the paper ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1902.10859.pdf"},"PFLD: A Practical Facial Landmark Detector"),"."),(0,o.kt)("h2",{id:"prepare-datasets"},"Prepare Datasets"),(0,o.kt)("p",null,"SSCMA uses ",(0,o.kt)("a",{parentName:"p",href:"../../datasets#SSCMA"},"Custom Meter Datasets")," by default to train the PFLD model, please refer to the following steps to complete the preparation of datasets."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"../../datasets#SSCMA"},"Internet Datasets - SSCMA - Custom Meter Dataset")," to download and unpack the dataset.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Remember its ",(0,o.kt)("strong",{parentName:"p"},"folder path")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"datasets\\meter"),") of the unpacked datasets, you may need to use this folder path later."))),(0,o.kt)("h2",{id:"choose-a-configuration"},"Choose a Configuration"),(0,o.kt)("p",null,"We will choose a appropriate configuration file depending on the type of training task we need to perform, which we have already introduced in ",(0,o.kt)("a",{parentName:"p",href:"../../config"},"Config"),", for a brief description of the functions, structure, and principles of the configuration file."),(0,o.kt)("p",null,"For the meter PFLD model example, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"pfld_mbv2n_112.py")," as the configuration file, which is located in the folder under the SSCMA root directory ",(0,o.kt)("inlineCode",{parentName:"p"},"configs/pfld")," and its additionally inherits the ",(0,o.kt)("inlineCode",{parentName:"p"},"default_runtime_pose.py")," configuration file."),(0,o.kt)("p",null,"For beginners, we recommend to pay attention to the ",(0,o.kt)("inlineCode",{parentName:"p"},"data_root")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"epochs")," parameters in this configuration file at first."),(0,o.kt)("details",null,(0,o.kt)("summary",null," pfld_mbv2n_112.py "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"_base_='../_base_/default_runtime_pose.py'\n\nnum_classes=1\nmodel=dict(type='PFLD',\n             backbone=dict(type='PfldMobileNetV2',\n                           inchannel=3,\n                           layer1=[16, 16, 16, 16, 16],\n                           layer2=[32, 32, 32, 32, 32, 32],\n                           out_channel=16),\n             head=dict(type='PFLDhead',\n                       num_point=num_classes,\n                       input_channel=16,\n                       loss_cfg=dict(type='L1Loss')))\n\n# dataset settings\ndataset_type='MeterData'\n\ndata_root=''\nheight=112\nwidth=112\nbatch_size=32\nworkers=4\n\ntrain_pipeline=[\n    dict(type=\"Resize\", height=height, width=width, interpolation=0),\n    dict(type='ColorJitter', brightness=0.3, p=0.5),\n    dict(type='GaussNoise'),\n    dict(type='MedianBlur', blur_limit=3, p=0.3),\n    dict(type='HorizontalFlip'),\n    dict(type='VerticalFlip'),\n    dict(type='Rotate'),\n    dict(type='Affine', translate_percent=[0.05, 0.1], p=0.6)\n]\n\nval_pipeline=[dict(type=\"Resize\", height=height, width=width)]\n\ntrain_dataloader=dict(\n    batch_size=32,\n    num_workers=2,\n    persistent_workers=True,\n    drop_last=False,\n    collate_fn=dict(type='default_collate'),\n    sampler=dict(type='DefaultSampler', shuffle=True, round_up=False),\n    dataset=dict(type=dataset_type,\n                 data_root=data_root,\n                 index_file=r'train/annotations.txt',\n                 pipeline=train_pipeline,\n                 test_mode=False),\n)\n\nval_dataloader=dict(\n    batch_size=1,\n    num_workers=1,\n    persistent_workers=True,\n    drop_last=False,\n    collate_fn=dict(type='default_collate'),\n    sampler=dict(type='DefaultSampler', shuffle=False, round_up=False),\n    dataset=dict(type=dataset_type,\n                 data_root=data_root,\n                 index_file=r'val/annotations.txt',\n                 pipeline=val_pipeline,\n                 test_mode=True),\n)\ntest_dataloader=val_dataloader\n\nlr=0.0001\nepochs=300\nevaluation=dict(save_best='loss')\noptim_wrapper=dict(\n    optimizer=dict(type='Adam', lr=lr, betas=(0.9, 0.99), weight_decay=1e-6))\noptimizer_config=dict(grad_clip=dict(max_norm=35, norm_type=2))\nval_evaluator=dict(type='PointMetric')\ntest_evaluator=val_evaluator\nfind_unused_parameters=True\ntrain_cfg=dict(by_epoch=True, max_epochs=500)\n\n# learning policy\nparam_scheduler=[\n    dict(type='LinearLR', begin=0, end=500, start_factor=0.001,\n         by_epoch=False),  # warm-up\n    dict(type='MultiStepLR',\n         begin=1,\n         end=500,\n         milestones=[350, 400, 450, 490],\n         gamma=0.1,\n         by_epoch=True)\n]\n"))),(0,o.kt)("h2",{id:"training-model"},"Training Model"),(0,o.kt)("p",null,"Training the model requires using our previously configured SSCMA working environment, if you follow our ",(0,o.kt)("a",{parentName:"p",href:"../../../introduction/installation"},"Installation")," guide using Conda to install SSCMA in a virtual environment named ",(0,o.kt)("inlineCode",{parentName:"p"},"sscma"),", please first make sure that you are currently in the virtual environment."),(0,o.kt)("p",null,"Then, in the SSCMA project root directory, we execute the following command to train an end-to-end meter PFLD model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"python3 tools/train.py \\\n    configs/pfld/pfld_mbv2n_112.py \\\n    --cfg-options \\\n        data_root='datasets/meter' \\\n        epochs=50\n")),(0,o.kt)("p",null,"During training, the model weights and related log information are saved to the path ",(0,o.kt)("inlineCode",{parentName:"p"},"work_dirs/pfld_mbv2n_112")," by default, and you can use tools such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/tensorboard/get_started"},"TensorBoard")," to monitor for training."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"tensorboard --logdir work_dirs/pfld_mbv2n_112\n")),(0,o.kt)("p",null,"After the training is completed, the path of the latest FOMO model weights file is saved in the ",(0,o.kt)("inlineCode",{parentName:"p"},"work_dirs/pfld_mbv2n_112/last_checkpoint")," file. Please take care of the path of the weight file, as it is needed when converting the model to other formats."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you have a virtual environment configured but not activated, you can activate it with the following command."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"conda activate sscma\n"))),(0,o.kt)("h2",{id:"testing-and-evaluation"},"Testing and Evaluation"),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"After have finished training the PFLD model, you can specify specific weights and test the model using the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"python3 tools/inference.py \\\n    configs/pfld/pfld_mbv2n_112.py \\\n    \"$(cat work_dirs/pfld_mbv2n_112/last_checkpoint)\" \\\n    --cfg-options \\\n        data_root='datasets/meter'\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want a real-time preview while testing, you can append a parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--show")," to the test command to show the predicted results. For more optional parameters, please refer to the source code ",(0,o.kt)("inlineCode",{parentName:"p"},"tools/test.py"),".")),(0,o.kt)("h3",{id:"evaluation"},"Evaluation"),(0,o.kt)("p",null,"In order to further test and evaluate the model on a realistic edge computing device, you need to export the model. In the process of exporting the model, SSCMA will do some optimization on the model, such as model pruning, distillation, etc. You can refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../export/overview"},"Export")," section to learn more about how to export models."),(0,o.kt)("h3",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"After exporting the model, you can deploy the model to the edge computing device for testing and evaluation. You can refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../../deploy/overview"},"Deploy")," section to learn more about how to deploy models."))}u.isMDXComponent=!0}}]);