"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[192],{192:(e,t,o)=>{o.d(t,{default:()=>Q});var n=o(9060),c=o(6976),a=o(264),i=o.n(a);const r=n.createContext({});(()=>{let e=0})();var l=o(5828),s=o(4552),d=o(2592),m=o(4288),u=o(6140),g=o(4408),p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(o[n[c]]=e[n[c]])}return o};const b=e=>{const{prefixCls:t,className:o,dashed:a}=e,r=p(e,["prefixCls","className","dashed"]),{getPrefixCls:l}=n.useContext(g.MT),s=l("menu",t),d=i()({["".concat(s,"-item-divider-dashed")]:!!a},o);return n.createElement(c.c1,Object.assign({className:d},r))};var h=o(6776),v=o(4212);const I=(0,n.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),f=e=>{var t;const{className:o,children:a,icon:l,title:s,danger:m}=e,{prefixCls:g,firstLevel:p,direction:b,disableMenuItemTitleTooltip:f,inlineCollapsed:C}=n.useContext(I),{siderCollapsed:B}=n.useContext(r);let S=s;"undefined"===typeof s?S=p?a:"":!1===s&&(S="");const y={title:S};B||C||(y.title=null,y.open=!1);const O=(0,h.c)(a).length;let k=n.createElement(c.iY,Object.assign({},(0,d.c)(e,["title","icon","danger"]),{className:i()({["".concat(g,"-item-danger")]:m,["".concat(g,"-item-only-child")]:1===(l?O+1:O)},o),title:"string"===typeof s?s:void 0}),(0,u.Yr)(l,{className:i()((0,u.ur)(l)?null===(t=l.props)||void 0===t?void 0:t.className:"","".concat(g,"-item-icon"))}),(e=>{const t=n.createElement("span",{className:"".concat(g,"-title-content")},a);return(!l||(0,u.ur)(a)&&"span"===a.type)&&a&&e&&p&&"string"===typeof a?n.createElement("div",{className:"".concat(g,"-inline-collapsed-noicon")},a.charAt(0)):t})(C));return f||(k=n.createElement(v.c,Object.assign({},y,{placement:"rtl"===b?"left":"right",overlayClassName:"".concat(g,"-inline-collapsed-tooltip")}),k)),k};var C=o(9704);const B=e=>{var t;const{popupClassName:o,icon:a,title:r,theme:l}=e,s=n.useContext(I),{prefixCls:m,inlineCollapsed:g,theme:p}=s,b=(0,c.k7)();let h;if(a){const e=(0,u.ur)(r)&&"span"===r.type;h=n.createElement(n.Fragment,null,(0,u.Yr)(a,{className:i()((0,u.ur)(a)?null===(t=a.props)||void 0===t?void 0:t.className:"","".concat(m,"-item-icon"))}),e?r:n.createElement("span",{className:"".concat(m,"-title-content")},r))}else h=g&&!b.length&&r&&"string"===typeof r?n.createElement("div",{className:"".concat(m,"-inline-collapsed-noicon")},r.charAt(0)):n.createElement("span",{className:"".concat(m,"-title-content")},r);const v=n.useMemo((()=>Object.assign(Object.assign({},s),{firstLevel:!1})),[s]),[f]=(0,C.Ah)("Menu");return n.createElement(I.Provider,{value:v},n.createElement(c.IH,Object.assign({},(0,d.c)(e,["icon"]),{title:h,popupClassName:i()(m,o,"".concat(m,"-").concat(l||p)),popupStyle:{zIndex:f}})))};var S=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(o[n[c]]=e[n[c]])}return o};function y(e){return(e||[]).map(((e,t)=>{if(e&&"object"===typeof e){const o=e,{label:a,children:i,key:r,type:l}=o,s=S(o,["label","children","key","type"]),d=null!==r&&void 0!==r?r:"tmp-".concat(t);return i||"group"===l?"group"===l?n.createElement(c.Cu,Object.assign({key:d},s,{title:a}),y(i)):n.createElement(B,Object.assign({key:d},s,{title:a}),y(i)):"divider"===l?n.createElement(b,Object.assign({key:d},s)):n.createElement(f,Object.assign({key:d},s),a)}return null})).filter((e=>e))}function O(e){return n.useMemo((()=>e?y(e):e),[e])}const k=n.createContext(null),x=k;var w=o(3844),H=o(2368),j=o(3480);const T=e=>({[e.componentCls]:{["".concat(e.antCls,"-motion-collapse-legacy")]:{overflow:"hidden","&-active":{transition:"height ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut,",\n        opacity ").concat(e.motionDurationMid," ").concat(e.motionEaseInOut," !important")}},["".concat(e.antCls,"-motion-collapse")]:{overflow:"hidden",transition:"height ".concat(e.motionDurationMid," ").concat(e.motionEaseInOut,",\n        opacity ").concat(e.motionDurationMid," ").concat(e.motionEaseInOut," !important")}}});var z=o(4959),E=o(8576),M=o(4716),D=o(4920);const A=e=>{const{componentCls:t,motionDurationSlow:o,horizontalLineHeight:n,colorSplit:c,lineWidth:a,lineType:i,itemPaddingInline:r}=e;return{["".concat(t,"-horizontal")]:{lineHeight:n,border:0,borderBottom:"".concat((0,w.sh)(a)," ").concat(i," ").concat(c),boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},["".concat(t,"-item, ").concat(t,"-submenu")]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:r},["> ".concat(t,"-item:hover,\n        > ").concat(t,"-item-active,\n        > ").concat(t,"-submenu ").concat(t,"-submenu-title:hover")]:{backgroundColor:"transparent"},["".concat(t,"-item, ").concat(t,"-submenu-title")]:{transition:["border-color ".concat(o),"background ".concat(o)].join(",")},["".concat(t,"-submenu-arrow")]:{display:"none"}}}},N=e=>{let{componentCls:t,menuArrowOffset:o,calc:n}=e;return{["".concat(t,"-rtl")]:{direction:"rtl"},["".concat(t,"-submenu-rtl")]:{transformOrigin:"100% 0"},["".concat(t,"-rtl").concat(t,"-vertical,\n    ").concat(t,"-submenu-rtl ").concat(t,"-vertical")]:{["".concat(t,"-submenu-arrow")]:{"&::before":{transform:"rotate(-45deg) translateY(".concat((0,w.sh)(n(o).mul(-1).equal()),")")},"&::after":{transform:"rotate(45deg) translateY(".concat((0,w.sh)(o),")")}}}}},P=e=>Object.assign({},(0,j.Y$)(e)),R=(e,t)=>{const{componentCls:o,itemColor:n,itemSelectedColor:c,groupTitleColor:a,itemBg:i,subMenuItemBg:r,itemSelectedBg:l,activeBarHeight:s,activeBarWidth:d,activeBarBorderWidth:m,motionDurationSlow:u,motionEaseInOut:g,motionEaseOut:p,itemPaddingInline:b,motionDurationMid:h,itemHoverColor:v,lineType:I,colorSplit:f,itemDisabledColor:C,dangerItemColor:B,dangerItemHoverColor:S,dangerItemSelectedColor:y,dangerItemActiveBg:O,dangerItemSelectedBg:k,popupBg:x,itemHoverBg:H,itemActiveBg:j,menuSubMenuBg:T,horizontalItemSelectedColor:z,horizontalItemSelectedBg:E,horizontalItemBorderRadius:M,horizontalItemHoverBg:D}=e;return{["".concat(o,"-").concat(t,", ").concat(o,"-").concat(t," > ").concat(o)]:{color:n,background:i,["&".concat(o,"-root:focus-visible")]:Object.assign({},P(e)),["".concat(o,"-item-group-title")]:{color:a},["".concat(o,"-submenu-selected")]:{["> ".concat(o,"-submenu-title")]:{color:c}},["".concat(o,"-item-disabled, ").concat(o,"-submenu-disabled")]:{color:"".concat(C," !important")},["".concat(o,"-item:not(").concat(o,"-item-selected):not(").concat(o,"-submenu-selected)")]:{["&:hover, > ".concat(o,"-submenu-title:hover")]:{color:v}},["&:not(".concat(o,"-horizontal)")]:{["".concat(o,"-item:not(").concat(o,"-item-selected)")]:{"&:hover":{backgroundColor:H},"&:active":{backgroundColor:j}},["".concat(o,"-submenu-title")]:{"&:hover":{backgroundColor:H},"&:active":{backgroundColor:j}}},["".concat(o,"-item-danger")]:{color:B,["&".concat(o,"-item:hover")]:{["&:not(".concat(o,"-item-selected):not(").concat(o,"-submenu-selected)")]:{color:S}},["&".concat(o,"-item:active")]:{background:O}},["".concat(o,"-item a")]:{"&, &:hover":{color:"inherit"}},["".concat(o,"-item-selected")]:{color:c,["&".concat(o,"-item-danger")]:{color:y},"a, a:hover":{color:"inherit"}},["& ".concat(o,"-item-selected")]:{backgroundColor:l,["&".concat(o,"-item-danger")]:{backgroundColor:k}},["".concat(o,"-item, ").concat(o,"-submenu-title")]:{["&:not(".concat(o,"-item-disabled):focus-visible")]:Object.assign({},P(e))},["&".concat(o,"-submenu > ").concat(o)]:{backgroundColor:T},["&".concat(o,"-popup > ").concat(o)]:{backgroundColor:x},["&".concat(o,"-submenu-popup > ").concat(o)]:{backgroundColor:x},["&".concat(o,"-horizontal")]:Object.assign(Object.assign({},"dark"===t?{borderBottom:0}:{}),{["> ".concat(o,"-item, > ").concat(o,"-submenu")]:{top:m,marginTop:e.calc(m).mul(-1).equal(),marginBottom:0,borderRadius:M,"&::after":{position:"absolute",insetInline:b,bottom:0,borderBottom:"".concat((0,w.sh)(s)," solid transparent"),transition:"border-color ".concat(u," ").concat(g),content:'""'},"&:hover, &-active, &-open":{background:D,"&::after":{borderBottomWidth:s,borderBottomColor:z}},"&-selected":{color:z,backgroundColor:E,"&:hover":{backgroundColor:E},"&::after":{borderBottomWidth:s,borderBottomColor:z}}}}),["&".concat(o,"-root")]:{["&".concat(o,"-inline, &").concat(o,"-vertical")]:{borderInlineEnd:"".concat((0,w.sh)(m)," ").concat(I," ").concat(f)}},["&".concat(o,"-inline")]:{["".concat(o,"-sub").concat(o,"-inline")]:{background:r},["".concat(o,"-item")]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:"".concat((0,w.sh)(d)," solid ").concat(c),transform:"scaleY(0.0001)",opacity:0,transition:["transform ".concat(h," ").concat(p),"opacity ".concat(h," ").concat(p)].join(","),content:'""'},["&".concat(o,"-item-danger")]:{"&::after":{borderInlineEndColor:y}}},["".concat(o,"-selected, ").concat(o,"-item-selected")]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:["transform ".concat(h," ").concat(g),"opacity ".concat(h," ").concat(g)].join(",")}}}}}},W=e=>{const{componentCls:t,itemHeight:o,itemMarginInline:n,padding:c,menuArrowSize:a,marginXS:i,itemMarginBlock:r,itemWidth:l}=e,s=e.calc(a).add(c).add(i).equal();return{["".concat(t,"-item")]:{position:"relative",overflow:"hidden"},["".concat(t,"-item, ").concat(t,"-submenu-title")]:{height:o,lineHeight:(0,w.sh)(o),paddingInline:c,overflow:"hidden",textOverflow:"ellipsis",marginInline:n,marginBlock:r,width:l},["> ".concat(t,"-item,\n            > ").concat(t,"-submenu > ").concat(t,"-submenu-title")]:{height:o,lineHeight:(0,w.sh)(o)},["".concat(t,"-item-group-list ").concat(t,"-submenu-title,\n            ").concat(t,"-submenu-title")]:{paddingInlineEnd:s}}},L=e=>{const{componentCls:t,iconCls:o,itemHeight:n,colorTextLightSolid:c,dropdownWidth:a,controlHeightLG:i,motionDurationMid:r,motionEaseOut:l,paddingXL:s,itemMarginInline:d,fontSizeLG:m,motionDurationSlow:u,paddingXS:g,boxShadowSecondary:p,collapsedWidth:b,collapsedIconSize:h}=e,v={height:n,lineHeight:(0,w.sh)(n),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":Object.assign({["&".concat(t,"-root")]:{boxShadow:"none"}},W(e))},["".concat(t,"-submenu-popup")]:{["".concat(t,"-vertical")]:Object.assign(Object.assign({},W(e)),{boxShadow:p})}},{["".concat(t,"-submenu-popup ").concat(t,"-vertical").concat(t,"-sub")]:{minWidth:a,maxHeight:"calc(100vh - ".concat((0,w.sh)(e.calc(i).mul(2.5).equal()),")"),padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{["".concat(t,"-inline")]:{width:"100%",["&".concat(t,"-root")]:{["".concat(t,"-item, ").concat(t,"-submenu-title")]:{display:"flex",alignItems:"center",transition:["border-color ".concat(u),"background ".concat(u),"padding ".concat(r," ").concat(l)].join(","),["> ".concat(t,"-title-content")]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},["".concat(t,"-sub").concat(t,"-inline")]:{padding:0,border:0,borderRadius:0,boxShadow:"none",["& > ".concat(t,"-submenu > ").concat(t,"-submenu-title")]:v,["& ".concat(t,"-item-group-title")]:{paddingInlineStart:s}},["".concat(t,"-item")]:v}},{["".concat(t,"-inline-collapsed")]:{width:b,["&".concat(t,"-root")]:{["".concat(t,"-item, ").concat(t,"-submenu ").concat(t,"-submenu-title")]:{["> ".concat(t,"-inline-collapsed-noicon")]:{fontSize:m,textAlign:"center"}}},["> ".concat(t,"-item,\n          > ").concat(t,"-item-group > ").concat(t,"-item-group-list > ").concat(t,"-item,\n          > ").concat(t,"-item-group > ").concat(t,"-item-group-list > ").concat(t,"-submenu > ").concat(t,"-submenu-title,\n          > ").concat(t,"-submenu > ").concat(t,"-submenu-title")]:{insetInlineStart:0,paddingInline:"calc(50% - ".concat((0,w.sh)(e.calc(m).div(2).equal())," - ").concat((0,w.sh)(d),")"),textOverflow:"clip",["\n            ".concat(t,"-submenu-arrow,\n            ").concat(t,"-submenu-expand-icon\n          ")]:{opacity:0},["".concat(t,"-item-icon, ").concat(o)]:{margin:0,fontSize:h,lineHeight:(0,w.sh)(n),"+ span":{display:"inline-block",opacity:0}}},["".concat(t,"-item-icon, ").concat(o)]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",["".concat(t,"-item-icon, ").concat(o)]:{display:"none"},"a, a:hover":{color:c}},["".concat(t,"-item-group-title")]:Object.assign(Object.assign({},j.Id),{paddingInline:g})}}]},X=e=>{const{componentCls:t,motionDurationSlow:o,motionDurationMid:n,motionEaseInOut:c,motionEaseOut:a,iconCls:i,iconSize:r,iconMarginInlineEnd:l}=e;return{["".concat(t,"-item, ").concat(t,"-submenu-title")]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:["border-color ".concat(o),"background ".concat(o),"padding ".concat(o," ").concat(c)].join(","),["".concat(t,"-item-icon, ").concat(i)]:{minWidth:r,fontSize:r,transition:["font-size ".concat(n," ").concat(a),"margin ".concat(o," ").concat(c),"color ".concat(o)].join(","),"+ span":{marginInlineStart:l,opacity:1,transition:["opacity ".concat(o," ").concat(c),"margin ".concat(o),"color ".concat(o)].join(",")}},["".concat(t,"-item-icon")]:Object.assign({},(0,j.Ao)()),["&".concat(t,"-item-only-child")]:{["> ".concat(i,", > ").concat(t,"-item-icon")]:{marginInlineEnd:0}}},["".concat(t,"-item-disabled, ").concat(t,"-submenu-disabled")]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},["> ".concat(t,"-submenu-title")]:{color:"inherit !important",cursor:"not-allowed"}}}},q=e=>{const{componentCls:t,motionDurationSlow:o,motionEaseInOut:n,borderRadius:c,menuArrowSize:a,menuArrowOffset:i}=e;return{["".concat(t,"-submenu")]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:"transform ".concat(o," ").concat(n,", opacity ").concat(o)},"&-arrow":{"&::before, &::after":{position:"absolute",width:e.calc(a).mul(.6).equal(),height:e.calc(a).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:c,transition:["background ".concat(o," ").concat(n),"transform ".concat(o," ").concat(n),"top ".concat(o," ").concat(n),"color ".concat(o," ").concat(n)].join(","),content:'""'},"&::before":{transform:"rotate(45deg) translateY(".concat((0,w.sh)(e.calc(i).mul(-1).equal()),")")},"&::after":{transform:"rotate(-45deg) translateY(".concat((0,w.sh)(i),")")}}}}},Y=e=>{const{antCls:t,componentCls:o,fontSize:n,motionDurationSlow:c,motionDurationMid:a,motionEaseInOut:i,paddingXS:r,padding:l,colorSplit:s,lineWidth:d,zIndexPopup:m,borderRadiusLG:u,subMenuItemBorderRadius:g,menuArrowSize:p,menuArrowOffset:b,lineType:h,menuPanelMaskInset:v,groupTitleLineHeight:I,groupTitleFontSize:f}=e;return[{"":{["".concat(o)]:Object.assign(Object.assign({},(0,j.us)()),{"&-hidden":{display:"none"}})},["".concat(o,"-submenu-hidden")]:{display:"none"}},{[o]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,j.kN)(e)),(0,j.us)()),{marginBottom:0,paddingInlineStart:0,fontSize:n,lineHeight:0,listStyle:"none",outline:"none",transition:"width ".concat(c," cubic-bezier(0.2, 0, 0, 1) 0s"),"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",["".concat(o,"-item")]:{flex:"none"}},["".concat(o,"-item, ").concat(o,"-submenu, ").concat(o,"-submenu-title")]:{borderRadius:e.itemBorderRadius},["".concat(o,"-item-group-title")]:{padding:"".concat((0,w.sh)(r)," ").concat((0,w.sh)(l)),fontSize:f,lineHeight:I,transition:"all ".concat(c)},["&-horizontal ".concat(o,"-submenu")]:{transition:["border-color ".concat(c," ").concat(i),"background ".concat(c," ").concat(i)].join(",")},["".concat(o,"-submenu, ").concat(o,"-submenu-inline")]:{transition:["border-color ".concat(c," ").concat(i),"background ".concat(c," ").concat(i),"padding ".concat(a," ").concat(i)].join(",")},["".concat(o,"-submenu ").concat(o,"-sub")]:{cursor:"initial",transition:["background ".concat(c," ").concat(i),"padding ".concat(c," ").concat(i)].join(",")},["".concat(o,"-title-content")]:{transition:"color ".concat(c),["> ".concat(t,"-typography-ellipsis-single-line")]:{display:"inline",verticalAlign:"unset"}},["".concat(o,"-item a")]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},["".concat(o,"-item-divider")]:{overflow:"hidden",lineHeight:0,borderColor:s,borderStyle:h,borderWidth:0,borderTopWidth:d,marginBlock:d,padding:0,"&-dashed":{borderStyle:"dashed"}}}),X(e)),{["".concat(o,"-item-group")]:{["".concat(o,"-item-group-list")]:{margin:0,padding:0,["".concat(o,"-item, ").concat(o,"-submenu-title")]:{paddingInline:"".concat((0,w.sh)(e.calc(n).mul(2).equal())," ").concat((0,w.sh)(l))}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:m,borderRadius:u,boxShadow:"none",transformOrigin:"0 0",["&".concat(o,"-submenu")]:{background:"transparent"},"&::before":{position:"absolute",inset:"".concat((0,w.sh)(v)," 0 0"),zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:v},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:e.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:e.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:e.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:e.paddingXS},["> ".concat(o)]:Object.assign(Object.assign(Object.assign({borderRadius:u},X(e)),q(e)),{["".concat(o,"-item, ").concat(o,"-submenu > ").concat(o,"-submenu-title")]:{borderRadius:g},["".concat(o,"-submenu-title::after")]:{transition:"transform ".concat(c," ").concat(i)}})}}),q(e)),{["&-inline-collapsed ".concat(o,"-submenu-arrow,\n        &-inline ").concat(o,"-submenu-arrow")]:{"&::before":{transform:"rotate(-45deg) translateX(".concat((0,w.sh)(b),")")},"&::after":{transform:"rotate(45deg) translateX(".concat((0,w.sh)(e.calc(b).mul(-1).equal()),")")}},["".concat(o,"-submenu-open").concat(o,"-submenu-inline > ").concat(o,"-submenu-title > ").concat(o,"-submenu-arrow")]:{transform:"translateY(".concat((0,w.sh)(e.calc(p).mul(.2).mul(-1).equal()),")"),"&::after":{transform:"rotate(-45deg) translateX(".concat((0,w.sh)(e.calc(b).mul(-1).equal()),")")},"&::before":{transform:"rotate(45deg) translateX(".concat((0,w.sh)(b),")")}}})},{["".concat(t,"-layout-header")]:{[o]:{lineHeight:"inherit"}}}]},G=e=>{var t,o,n;const{colorPrimary:c,colorError:a,colorTextDisabled:i,colorErrorBg:r,colorText:l,colorTextDescription:s,colorBgContainer:d,colorFillAlter:m,colorFillContent:u,lineWidth:g,lineWidthBold:p,controlItemBgActive:b,colorBgTextHover:h,controlHeightLG:v,lineHeight:I,colorBgElevated:f,marginXXS:C,padding:B,fontSize:S,controlHeightSM:y,fontSizeLG:O,colorTextLightSolid:k,colorErrorHover:x}=e,w=null!==(t=e.activeBarWidth)&&void 0!==t?t:0,j=null!==(o=e.activeBarBorderWidth)&&void 0!==o?o:g,T=null!==(n=e.itemMarginInline)&&void 0!==n?n:e.marginXXS,z=new H.C(k).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,itemBorderRadius:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,subMenuItemBorderRadius:e.borderRadiusSM,colorItemText:l,itemColor:l,colorItemTextHover:l,itemHoverColor:l,colorItemTextHoverHorizontal:c,horizontalItemHoverColor:c,colorGroupTitle:s,groupTitleColor:s,colorItemTextSelected:c,itemSelectedColor:c,colorItemTextSelectedHorizontal:c,horizontalItemSelectedColor:c,colorItemBg:d,itemBg:d,colorItemBgHover:h,itemHoverBg:h,colorItemBgActive:u,itemActiveBg:b,colorSubItemBg:m,subMenuItemBg:m,colorItemBgSelected:b,itemSelectedBg:b,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:w,colorActiveBarHeight:p,activeBarHeight:p,colorActiveBarBorderSize:g,activeBarBorderWidth:j,colorItemTextDisabled:i,itemDisabledColor:i,colorDangerItemText:a,dangerItemColor:a,colorDangerItemTextHover:a,dangerItemHoverColor:a,colorDangerItemTextSelected:a,dangerItemSelectedColor:a,colorDangerItemBgActive:r,dangerItemActiveBg:r,colorDangerItemBgSelected:r,dangerItemSelectedBg:r,itemMarginInline:T,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:v,groupTitleLineHeight:I,collapsedWidth:2*v,popupBg:f,itemMarginBlock:C,itemPaddingInline:B,horizontalLineHeight:"".concat(1.15*v,"px"),iconSize:S,iconMarginInlineEnd:y-S,collapsedIconSize:O,groupTitleFontSize:S,darkItemDisabledColor:new H.C(k).setAlpha(.25).toRgbString(),darkItemColor:z,darkDangerItemColor:a,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:k,darkItemSelectedBg:c,darkDangerItemSelectedBg:a,darkItemHoverBg:"transparent",darkGroupTitleColor:z,darkItemHoverColor:k,darkDangerItemHoverColor:x,darkDangerItemSelectedColor:k,darkDangerItemActiveBg:a,itemWidth:w?"calc(100% + ".concat(j,"px)"):"calc(100% - ".concat(2*T,"px)")}},F=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,M.eO)("Menu",(e=>{const{colorBgElevated:t,colorPrimary:o,colorTextLightSolid:n,controlHeightLG:c,fontSize:a,darkItemColor:i,darkDangerItemColor:r,darkItemBg:l,darkSubMenuItemBg:s,darkItemSelectedColor:d,darkItemSelectedBg:m,darkDangerItemSelectedBg:u,darkItemHoverBg:g,darkGroupTitleColor:p,darkItemHoverColor:b,darkItemDisabledColor:h,darkDangerItemHoverColor:v,darkDangerItemSelectedColor:I,darkDangerItemActiveBg:f,popupBg:C,darkPopupBg:B}=e,S=e.calc(a).div(7).mul(5).equal(),y=(0,D.Uf)(e,{menuArrowSize:S,menuHorizontalHeight:e.calc(c).mul(1.15).equal(),menuArrowOffset:e.calc(S).mul(.25).equal(),menuPanelMaskInset:-7,menuSubMenuBg:t,calc:e.calc,popupBg:C}),O=(0,D.Uf)(y,{itemColor:i,itemHoverColor:b,groupTitleColor:p,itemSelectedColor:d,itemBg:l,popupBg:B,subMenuItemBg:s,itemActiveBg:"transparent",itemSelectedBg:m,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:g,itemDisabledColor:h,dangerItemColor:r,dangerItemHoverColor:v,dangerItemSelectedColor:I,dangerItemActiveBg:f,dangerItemSelectedBg:u,menuSubMenuBg:s,horizontalItemSelectedColor:n,horizontalItemSelectedBg:o});return[Y(y),A(y),L(y),R(y,"light"),R(O,"dark"),N(y),T(y),(0,z.O4)(y,"slide-up"),(0,z.O4)(y,"slide-down"),(0,E.uw)(y,"zoom-big")]}),G,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:o,unitless:{groupTitleLineHeight:!0}})(e,t)};var U=o(664),_=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(o[n[c]]=e[n[c]])}return o};const $=(0,n.forwardRef)(((e,t)=>{var o,a;const r=n.useContext(x),p=r||{},{getPrefixCls:b,getPopupContainer:h,direction:v,menu:f}=n.useContext(g.MT),C=b(),{prefixCls:B,className:S,style:y,theme:k="light",expandIcon:w,_internalDisableMenuItemTitleTooltip:H,inlineCollapsed:j,siderCollapsed:T,items:z,children:E,rootClassName:M,mode:D,selectable:A,onClick:N,overflowedIndicatorPopupClassName:P}=e,R=_(e,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),W=(0,d.c)(R,["collapsedWidth"]),L=O(z)||E;null===(o=p.validator)||void 0===o||o.call(p,{mode:D});const X=(0,s.yA)((function(){var e;null===N||void 0===N||N.apply(void 0,arguments),null===(e=p.onClick)||void 0===e||e.call(p)})),q=p.mode||D,Y=null!==A&&void 0!==A?A:p.selectable,G=n.useMemo((()=>void 0!==T?T:j),[j,T]),$={horizontal:{motionName:"".concat(C,"-slide-up")},inline:(0,m.c)(C),other:{motionName:"".concat(C,"-zoom-big")}},J=b("menu",B||p.prefixCls),K=(0,U.c)(J),[Q,V,Z]=F(J,K,!r),ee=i()("".concat(J,"-").concat(k),null===f||void 0===f?void 0:f.className,S);let te;if("function"===typeof w)te=w;else if(null===w||!1===w)te=null;else if(null===p.expandIcon||!1===p.expandIcon)te=null;else{const e=null!==w&&void 0!==w?w:p.expandIcon;te=(0,u.Yr)(e,{className:i()("".concat(J,"-submenu-expand-icon"),(0,u.ur)(e)?null===(a=e.props)||void 0===a?void 0:a.className:"")})}const oe=n.useMemo((()=>({prefixCls:J,inlineCollapsed:G||!1,direction:v,firstLevel:!0,theme:k,mode:q,disableMenuItemTitleTooltip:H})),[J,G,v,H,k]);return Q(n.createElement(x.Provider,{value:null},n.createElement(I.Provider,{value:oe},n.createElement(c.cp,Object.assign({getPopupContainer:h,overflowedIndicator:n.createElement(l.c,null),overflowedIndicatorPopupClassName:i()(J,"".concat(J,"-").concat(k),P),mode:q,selectable:Y,onClick:X},W,{inlineCollapsed:G,style:Object.assign(Object.assign({},null===f||void 0===f?void 0:f.style),y),className:ee,prefixCls:J,direction:v,defaultMotions:$,expandIcon:te,ref:t,rootClassName:i()(M,V,p.rootClassName,Z,K)}),L))))})),J=$,K=(0,n.forwardRef)(((e,t)=>{const o=(0,n.useRef)(null),c=n.useContext(r);return(0,n.useImperativeHandle)(t,(()=>({menu:o.current,focus:e=>{var t;null===(t=o.current)||void 0===t||t.focus(e)}}))),n.createElement(J,Object.assign({ref:o},e,c))}));K.Item=f,K.SubMenu=B,K.Divider=b,K.ItemGroup=c.Cu;const Q=K}}]);
//# sourceMappingURL=192.a3ba8b32.chunk.js.map