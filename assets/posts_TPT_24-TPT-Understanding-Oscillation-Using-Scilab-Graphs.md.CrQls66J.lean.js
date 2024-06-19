import{_ as s,c as t,I as n,j as Q,a as T,o as a,a3 as l,D as o}from"./chunks/framework.SXdd_erG.js";const d="/assets/fig1.-p7R2LKf.png",m="/assets/fig2.Bx-sBciA.png",r="/assets/fig3.B_5vbFGU.png",i="/assets/fig4.CZgwLWwU.png",d1=JSON.parse('{"title":"[论文阅读] 用 Scilab 理解振动","description":"","frontmatter":{},"headers":[],"relativePath":"posts/TPT/24-TPT-Understanding-Oscillation-Using-Scilab-Graphs.md","filePath":"posts/TPT/24-TPT-Understanding-Oscillation-Using-Scilab-Graphs.md","lastUpdated":null}'),h={name:"posts/TPT/24-TPT-Understanding-Oscillation-Using-Scilab-Graphs.md"},c=Q("h1",{id:"论文阅读-用-scilab-理解振动",tabindex:"-1"},[T("[论文阅读] 用 Scilab 理解振动 "),Q("a",{class:"header-anchor",href:"#论文阅读-用-scilab-理解振动","aria-label":'Permalink to "[论文阅读] 用 Scilab 理解振动"'},"​")],-1),p=Q("blockquote",null,[Q("p",null,"注：本文仅作学习之用，不做商业用途。")],-1),g=Q("p",null,[T("论文标题： Understanding Oscillation Using Scilab Graphs"),Q("br"),T(" 论文来源： 美国物理教师 (The Physics Teacher)， 2024 年 01 期"),Q("br"),T(" DOI: "),Q("a",{href:"https://doi.org/10.1119/5.0123308",target:"_blank",rel:"noreferrer"},"https://doi.org/10.1119/5.0123308")],-1),u=Q("hr",null,null,-1),H=Q("p",null,"这是一篇使用 Scilab 软件来理解振动的文章。在这之前，想简单的介绍下 Scilab 软件。",-1),_=Q("blockquote",null,[Q("p",null,"SCILAB 是由法国国家信息、自动化研究院的科学家们开发的“开放源码”软件。SCILAB作为一种科学工程计算软件，其数据类型丰富，可以很方便地实现各种矩阵运算与图形显示，能应用于科学计算、数学建模、信号处理、决策优化、线性、非线性控制等各个方面。 —— from 百度百科")],-1),w=Q("p",null,"简而言之：Scilab就是一款优秀的Matlab开源替代品。[1]",-1),L=Q("p",null,"对于简谐运动有三种基本类型：自由振荡、阻尼振动和受迫振动。",-1),f=Q("h1",{id:"_1-自由振荡",tabindex:"-1"},[T("1. 自由振荡 "),Q("a",{class:"header-anchor",href:"#_1-自由振荡","aria-label":'Permalink to "1. 自由振荡"'},"​")],-1),V=Q("p",null,"自由振荡不受外力，有恒定振幅、周期、频率，满足",-1),y={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.654ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.686ex",height:"5.07ex",role:"img",focusable:"false",viewBox:"0 -1509.9 6491.1 2240.9","aria-hidden":"true"},M=l("",1),x=[M],Z=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mfrac",null,[Q("mrow",null,[Q("msup",null,[Q("mi",null,"d"),Q("mn",null,"2")]),Q("mi",null,"y")]),Q("mrow",null,[Q("mi",null,"d"),Q("msup",null,[Q("mi",null,"t"),Q("mn",null,"2")])])]),Q("mo",null,"+"),Q("msup",null,[Q("mi",null,"ω"),Q("mn",null,"2")]),Q("mi",null,"y"),Q("mo",null,"="),Q("mn",null,"0")])],-1),b=Q("p",null,"振动位移、速度随时间图像，动能-势能-机械能 如下图所示",-1),D=Q("img",{src:d,width:"80%",alt:"图片alt",title:"图片title"},null,-1),v=Q("h1",{id:"_2-阻尼振荡",tabindex:"-1"},[T("2. 阻尼振荡 "),Q("a",{class:"header-anchor",href:"#_2-阻尼振荡","aria-label":'Permalink to "2. 阻尼振荡"'},"​")],-1),S=Q("p",null,"运动方程满足：",-1),P={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},B={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.654ex"},xmlns:"http://www.w3.org/2000/svg",width:"22.834ex",height:"5.07ex",role:"img",focusable:"false",viewBox:"0 -1509.9 10092.6 2240.9","aria-hidden":"true"},C=l("",1),U=[C],A=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mfrac",null,[Q("mrow",null,[Q("msup",null,[Q("mi",null,"d"),Q("mn",null,"2")]),Q("mi",null,"y")]),Q("mrow",null,[Q("mi",null,"d"),Q("msup",null,[Q("mi",null,"t"),Q("mn",null,"2")])])]),Q("mo",null,"+"),Q("msubsup",null,[Q("mi",null,"ω"),Q("mn",null,"0"),Q("mn",null,"2")]),Q("mi",null,"y"),Q("mo",null,"+"),Q("mn",null,"2"),Q("mi",null,"b"),Q("mfrac",null,[Q("mrow",null,[Q("mi",null,"d"),Q("mi",null,"y")]),Q("mrow",null,[Q("mi",null,"d"),Q("mi",null,"t")])]),Q("mo",null,"="),Q("mn",null,"0")])],-1),j=Q("p",null,"振动位移、速度随时间图像，动能-势能-机械能 如下图所示",-1),I=Q("img",{src:m,width:"80%",alt:"图片alt",title:"图片title"},null,-1),G=Q("img",{src:r,width:"80%",alt:"图片alt",title:"图片title"},null,-1),N=Q("h1",{id:"_3-受迫振动",tabindex:"-1"},[T("3. 受迫振动 "),Q("a",{class:"header-anchor",href:"#_3-受迫振动","aria-label":'Permalink to "3. 受迫振动"'},"​")],-1),O=Q("p",null,"运动方程满足：",-1),R={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.654ex"},xmlns:"http://www.w3.org/2000/svg",width:"32.42ex",height:"5.07ex",role:"img",focusable:"false",viewBox:"0 -1509.9 14329.8 2240.9","aria-hidden":"true"},q=l("",1),J=[q],$=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mfrac",null,[Q("mrow",null,[Q("msup",null,[Q("mi",null,"d"),Q("mn",null,"2")]),Q("mi",null,"y")]),Q("mrow",null,[Q("mi",null,"d"),Q("msup",null,[Q("mi",null,"t"),Q("mn",null,"2")])])]),Q("mo",null,"+"),Q("msubsup",null,[Q("mi",null,"ω"),Q("mn",null,"0"),Q("mn",null,"2")]),Q("mi",null,"y"),Q("mo",null,"+"),Q("mn",null,"2"),Q("mi",null,"b"),Q("mfrac",null,[Q("mrow",null,[Q("mi",null,"d"),Q("mi",null,"y")]),Q("mrow",null,[Q("mi",null,"d"),Q("mi",null,"t")])]),Q("mo",null,"="),Q("msub",null,[Q("mi",null,"f"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"e"),Q("mi",null,"x"),Q("mi",null,"t")])]),Q("mi",null,"s"),Q("mi",null,"i"),Q("mi",null,"n"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"ω"),Q("mi",null,"t"),Q("mo",{stretchy:"false"},")")])],-1),z=Q("p",null,"振动位移、速度随时间图像，动能-势能-机械能 如下图所示",-1),F=Q("img",{src:i,width:"80%",alt:"图片alt",title:"图片title"},null,-1),K=Q("p",null,"总结：使用 Scilab 可以绘制简谐运动的图像，帮助学生理解。",-1),W=Q("hr",null,null,-1),X=Q("p",null,[T("Reference: [1] "),Q("a",{href:"https://mp.weixin.qq.com/s/NEepSHwMlCVUhEZ69gVMvg",target:"_blank",rel:"noreferrer"},"厌倦了Matlab的授权过期？不如直接用SciLab")],-1),Y=Q("hr",null,null,-1),Q1=Q("blockquote",null,[Q("p",null,[Q("strong",null,"Comment"),T(": Scilab 作为一款开源软件，我有想法召集一些有兴趣的朋友一起学习，一起探索，为教学提供帮助，有兴趣的朋友可以后台联系我。")])],-1);function T1(t1,a1,l1,e1,s1,n1){const e=o("Badge");return a(),t("div",null,[c,p,g,n(e,{type:"tip",text:"有用工具"}),u,H,_,w,L,f,V,Q("mjx-container",y,[(a(),t("svg",k,x)),Z]),b,D,v,S,Q("mjx-container",P,[(a(),t("svg",B,U)),A]),j,I,G,N,O,Q("mjx-container",R,[(a(),t("svg",E,J)),$]),z,F,K,W,X,Y,Q1])}const m1=s(h,[["render",T1]]);export{d1 as __pageData,m1 as default};
