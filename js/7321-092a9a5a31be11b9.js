"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7321],{68734:function(t,e,n){var i,s,r=n(67294);function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e.Z=function(t){return r.createElement("svg",o({width:17,height:17,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),i||(i=r.createElement("g",{clipPath:"url(#clip0_1671_7070)"},r.createElement("path",{d:"M7.93016 2.25C7.71811 3.4866 7.20922 4.6533 6.44716 5.65C5.56316 6.805 3.36816 7.95 3.36816 10.782C3.36844 11.6913 3.61035 12.5842 4.06913 13.3693C4.52791 14.1544 5.18709 14.8034 5.97916 15.25C6.0078 14.8457 6.12438 14.4524 6.32077 14.0978C6.51716 13.7432 6.78861 13.4358 7.11616 13.197C7.74657 12.7822 8.23071 12.1799 8.50016 11.475C9.18168 11.8688 9.76351 12.4141 10.2006 13.0687C10.6378 13.7233 10.9185 14.4696 11.0212 15.25C11.8132 14.8034 12.4724 14.1544 12.9312 13.3693C13.39 12.5842 13.6319 11.6913 13.6322 10.782C13.6322 9.35 13.3762 5.438 7.93016 2.25Z",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}))),s||(s=r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_1671_7070"},r.createElement("rect",{width:16,height:16,fill:"white",transform:"translate(0.5 0.75)"})))))}},58243:function(t,e,n){n.d(e,{MU:function(){return C},Vh:function(){return Z}});var i=n(10253),s=n(85893),r=n(73450),o=n(21032),c=n(61523),a=n(6859),l=n(21435),d=n(949),u=n(26280),h=n(29948),f=n(36711),g=n(27762),p=n(75440),m=n(67317);function x(t){var e=t.primary,n=t.secondary,i=t.button,r=t.footer;return(0,s.jsxs)(b,{children:[(0,s.jsxs)(A,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(c.ZP,{color:"dim",size:2,weight:"medium",children:e.label}),(0,s.jsx)(c.ZP,{color:"strong",size:{"@initial":3,"@bp1":5},children:e.value})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(c.ZP,{color:"dim",size:2,weight:"medium",children:n.label}),(0,s.jsx)(c.ZP,{color:"strong",size:{"@initial":3,"@bp1":5},children:n.value})]})]}),"top"===r.position&&(0,s.jsx)(E,{css:{minHeight:0},children:r.content}),i,"bottom"===r.position&&(0,s.jsx)(E,{children:r.content})]})}function j(t){if(!t.amount.includes("ETH"))return(0,s.jsx)(s.Fragment,{children:t.amount});var e=(0,i.Z)(t.amount.split("ETH"),1)[0];return(0,s.jsxs)(s.Fragment,{children:[e," ",(0,s.jsx)(v,{children:"ETH"})]})}var C=function(t){return"SCHEDULED"===t.collection.status?{status:t.collection.status,mintedCount:t.nftAggregates.totalCount,mintPrice:t.collection.mintPrice,saleStartsAt:t.collection.saleStartsAt}:"OPEN"===t.collection.status?{status:t.collection.status,mintedCount:t.nftAggregates.totalCount,mintPrice:t.collection.mintPrice,saleEndsAt:t.collection.saleEndsAt,slug:t.collection.slug,contractAddress:t.collection.contractAddress}:{mintPrice:t.collection.mintPrice,status:t.collection.status,mintAggregates:{mintedCount:t.nftAggregates.totalCount,mintPrice:t.collection.mintPrice},nftAggregates:t.nftAggregates,salesAggregates:t.salesAggregates,collection:{slug:t.collection.slug,contractAddress:t.collection.contractAddress,contractType:t.collection.contractType},creator:t.collection.creator,floorPriceNft:t.floorPriceNft}},Z=function(t){return"SCHEDULED"===t.collection.status||"OPEN"===t.collection.status?{status:t.collection.status,mintedCount:t.nftAggregates.totalCount,mintPrice:t.collection.mintPrice,slug:t.collection.slug,contractAddress:t.collection.contractAddress,maxTokenId:t.collection.maxTokenId}:{mintPrice:t.collection.mintPrice,status:t.collection.status,mintAggregates:{mintedCount:t.nftAggregates.totalCount,mintPrice:t.collection.mintPrice},nftAggregates:t.nftAggregates,salesAggregates:t.salesAggregates,collection:{slug:t.collection.slug,contractAddress:t.collection.contractAddress,contractType:t.collection.contractType},creator:t.collection.creator,floorPriceNft:t.floorPriceNft}},v=(0,r.zo)("span",a.Z,{fontSize:"75%","@bp1":{fontSize:"60%"}});v.defaultProps={color:"dim"};var b=(0,r.zo)("div",{padding:"$4",borderRadius:"$4",border:"1px solid $black10",gap:"$4",display:"flex",flexDirection:"column","@bp1":{padding:"$6",gap:"$6"}}),A=(0,r.zo)("div",{display:"flex","> div":{flex:1},"> div:first-child":{borderRight:"1px solid $black10"},"> div:last-child":{paddingLeft:"$4"}}),E=(0,r.zo)("div",{gap:"$2",display:"flex",alignItems:"center",minHeight:32}),P=(0,r.zo)(a.Z,{span:{color:"$black100"}});P.defaultProps={size:2,weight:"medium",color:"dim"};var y=(0,r.zo)("div",{width:"4px",height:"4px",borderRadius:"$round",backgroundColor:"$black30"});e.ZP={Timed:function(t){var e=t.collection,n=t.collectionStats,i=(0,s.jsx)(m.Z.Timed,{collectionStats:n,collection:e,surface:"COLLECTION"}),r=(0,l.WR)(t.mintPrice);if("ENDED"===t.status){var o=t.salesAggregates,c=t.nftAggregates,a=o.floorPrice,g=o.transactionCount,p=(0,u.DV)("transaction",g);return(0,s.jsx)(x,{primary:{label:"Total sales",value:(0,s.jsx)(j,{amount:(0,l.Bt)(o.totalSales)})},secondary:{label:"Floor",value:(0,d.l7)(a)?(0,s.jsx)(j,{amount:(0,l.Bt)(a)}):(0,s.jsx)(f.Z,{})},button:i,footer:{position:"bottom",content:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(P,{children:[g," ",p]}),(0,s.jsx)(y,{}),(0,s.jsxs)(P,{children:[c.listedCount," of ",c.totalCount," listed"]})]})}})}var C=(0,u.DV)("NFT",t.mintedCount);return t.status,(0,s.jsx)(x,{primary:{label:"Minted",value:(0,s.jsxs)(s.Fragment,{children:[(0,l.kh)(t.mintedCount)," ",(0,s.jsx)(v,{children:C})]})},secondary:{label:"Price",value:r?(0,s.jsx)(j,{amount:r}):null},button:i,footer:{position:"bottom",content:(0,s.jsx)(h.Z,{saleEndsAt:e.saleEndsAt,saleStartsAt:e.saleStartsAt})}})},Limited:function(t){var e=(0,s.jsx)(m.Z.Limited,{collectionStats:t.collectionStats,collection:t.collection,surface:"COLLECTION"}),n=(0,l.WR)(t.mintPrice);if("MINTED_OUT"===t.status){var i=t.salesAggregates,r=t.nftAggregates,o=i.floorPrice,c=i.transactionCount,a=(0,u.DV)("transaction",c);return(0,s.jsx)(x,{primary:{label:"Total sales",value:(0,s.jsx)(j,{amount:(0,l.Bt)(i.totalSales)})},secondary:{label:"Floor",value:(0,d.l7)(o)?(0,s.jsx)(j,{amount:(0,l.Bt)(o)}):(0,s.jsx)(f.Z,{})},button:e,footer:{position:"bottom",content:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(P,{children:[c," ",a]}),(0,s.jsx)(y,{}),(0,s.jsxs)(P,{children:[r.listedCount," of ",r.totalCount," listed"]})]})}})}return"SCHEDULED"===t.status?(0,s.jsx)(x,{primary:{label:"Minted",value:(0,s.jsxs)(s.Fragment,{children:[(0,l.kh)(t.mintedCount),(0,s.jsxs)(v,{children:[" / ",(0,l.kh)(t.maxTokenId)]})]})},secondary:{label:"Price",value:n?(0,s.jsx)(j,{amount:n}):null},button:e,footer:{position:"bottom",content:(0,s.jsx)(h.Z,{saleEndsAt:null,saleStartsAt:t.collection.saleStartsAt})}}):(0,s.jsx)(x,{primary:{label:"Minted",value:(0,s.jsxs)(s.Fragment,{children:[(0,l.kh)(t.mintedCount),(0,s.jsxs)(v,{children:[" / ",(0,l.kh)(t.maxTokenId)]})]})},secondary:{label:"Price",value:n?(0,s.jsx)(j,{amount:n}):null},button:e,footer:{position:"top",content:(0,s.jsx)(g.Z.Animated,{value:t.mintedCount/t.maxTokenId*100})}})},Skeleton:function(t){var e={label:(0,s.jsx)(p.Z.Block,{css:{height:15,width:"50%",marginBottom:6,"@bp1":{marginBottom:12.5,height:18}},children:"-"}),value:(0,s.jsx)(p.Z.Block,{css:{height:25.5,"@bp1":{height:32},width:"80%"},children:"-"})};return(0,s.jsx)(x,{primary:e,secondary:e,button:(0,s.jsx)(p.Z.Button,{variant:"fill",size:{"@initial":1,"@bp1":2},css:{width:"100%"}}),footer:{position:t.position,content:"top"===t.position?(0,s.jsx)(p.Z.Block,{css:{height:8},children:"-"}):(0,s.jsx)(p.Z.Block,{css:{maxWidth:220},children:"-"})}})}}},11454:function(t,e,n){var i=(0,n(73450).zo)("div",{display:"grid",paddingBottom:"$7",position:"relative",minHeight:"calc(80vh - 86px)",gap:0,"@bp1":{alignItems:"center",paddingY:"$9",gridTemplateColumns:"repeat(2,1fr)",gap:"$7"},"@bp2":{paddingY:"$10",gap:"$8",marginBottom:"$6"},"@bp3":{gap:"$10",marginBottom:"$8"}});e.Z=i},87836:function(t,e,n){n.d(e,{p:function(){return i}});var i=(0,n(73450).zo)("div",{width:"100%",height:"100%",display:"block",objectFit:"cover",objectPosition:"center"})},97719:function(t,e,n){n.d(e,{Z:function(){return f}});var i=n(85893),s=n(78250),r=n(30143),o=n(16578),c=n(85914),a=n(89859),l=n(44294),d=n(2453),u=n(62e3),h=n(949);function f(t){var e=t.symbol,n=t.contractAddress;return(0,i.jsxs)(a.Z.Root,{children:[(0,i.jsx)(a.Z.Trigger,{asChild:!0,children:(0,i.jsx)(o.Z,{variant:"raised",size:0,children:(0,i.jsx)(l.Z,{uppercase:!0,children:e})})}),(0,i.jsx)(a.Z.Portal,{children:(0,i.jsx)(a.Z.Content,{sideOffset:(0,r.SK)(3),minWidth:330,children:(0,i.jsx)(d.Z.Item,{action:(0,i.jsx)(c.Z,{textToCopy:n}),icon:s.Z,href:u.M.address(n),text:(0,i.jsx)(l.Z,{children:(0,h.Kz)(4,n)}),type:"external-link"})})})]})}},47524:function(t,e,n){var i=n(26042),s=n(69396),r=n(85893),o=n(41664),c=n.n(o),a=n(98964),l=n(60583),d=n(75440),u=n(4025),h=n(30281),f=n(9964),g=n(81670),p={css:{width:"100%"},variant:"primary"};e.Z={Connected:function(t){var e=t.collection,n=t.size,o=t.surface,m=(0,h.Z)(),x=(0,f.Aw)({contractAddress:e.contractAddress});if(x.isLoading||!x.data)return(0,r.jsx)(d.Z.Button,{variant:"fill",css:{width:"100%"},size:n});var j=function(){return(0,r.jsx)(u.Z,(0,s.Z)((0,i.Z)({onClick:function(){return m.setModal((0,s.Z)((0,i.Z)({},e),{contractType:"FND_BATCH_MINT_REVEAL",mintPrice:e.mintPrice?e.mintPrice:0,type:"MINT_PACK"}))}},p),{size:n,children:"Mint"}))},C=function(){return(0,r.jsx)(c(),{href:g.DW.collection.page(e.slug),passHref:!0,children:(0,r.jsx)(l.Z,(0,s.Z)((0,i.Z)({as:"a"},p),{size:n,children:"View drop"}))})},Z=function(){return(0,r.jsx)(l.Z,(0,s.Z)((0,i.Z)({},p),{size:n,disabled:!0,children:"Public sale coming soon"}))},v=function(){return(0,r.jsx)(l.Z,(0,s.Z)((0,i.Z)({},p),{size:n,disabled:!0,children:"Minting soon"}))},b=function(){return(0,r.jsx)(c(),{href:g.DW.collection.page(e.slug),passHref:!0,children:(0,r.jsx)("a",{style:{textDecoration:"none"},children:(0,r.jsx)(l.Z,(0,s.Z)((0,i.Z)({},p),{size:n,children:"Shop the secondary"}))})})};return(0,a.EQ)((0,s.Z)((0,i.Z)({},x.data),{surface:o,saleType:e.saleType})).with({status:"DROP_CREATED",surface:"HOME"},C).with({saleType:"LINEAR_DUTCH_AUCTION",surface:"HOME"},C).with({isMintedOut:!0},b).with({status:"PRE_SALE",preSale:{isOnAllowList:!1}},Z).with({preSale:{availability:"OPEN",isOnAllowList:!0}},j).with({publicSale:{status:"OPEN"}},j).with({status:"REVEALED",publicSale:{status:"OPEN"}},j).otherwise(v)}}},35774:function(t,e,n){n.d(e,{Z:function(){return I},t:function(){return y}});var i,s=n(85893),r=n(82644),o=n(5717),c=n(73450),a=n(21032),l=n(50265),d=n(34314),u=n(27762),h=n(75440),f=n(6859),g=n(67294);function p(){return(p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var m=function(t){return g.createElement("svg",p({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),i||(i=g.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.55544 1.34824C4.87103 0.469192 6.41775 0 8 0C10.1198 0.00633091 12.1509 0.851219 13.6499 2.35014C15.1488 3.84906 15.9937 5.88022 16 8C16 9.58225 15.5308 11.129 14.6518 12.4446C13.7727 13.7602 12.5233 14.7855 11.0615 15.391C9.59966 15.9965 7.99113 16.155 6.43928 15.8463C4.88743 15.5376 3.46197 14.7757 2.34315 13.6569C1.22433 12.538 0.462402 11.1126 0.15372 9.56072C-0.154962 8.00887 0.00346496 6.40034 0.608966 4.93853C1.21447 3.47672 2.23985 2.22729 3.55544 1.34824ZM4.66658 12.9888C5.65328 13.6481 6.81331 14 8 14C9.58984 13.9953 11.1132 13.3616 12.2374 12.2374C13.3616 11.1132 13.9953 9.58984 14 8C14 6.81331 13.6481 5.65327 12.9888 4.66658C12.3295 3.67988 11.3925 2.91085 10.2961 2.45672C9.19975 2.0026 7.99335 1.88378 6.82946 2.11529C5.66557 2.3468 4.59648 2.91824 3.75736 3.75736C2.91825 4.59647 2.3468 5.66557 2.11529 6.82946C1.88378 7.99334 2.0026 9.19974 2.45673 10.2961C2.91085 11.3925 3.67989 12.3295 4.66658 12.9888ZM9 7H11.5C11.7652 7 12.0196 7.10536 12.2071 7.29289C12.3946 7.48043 12.5 7.73478 12.5 8C12.5 8.26522 12.3946 8.51957 12.2071 8.70711C12.0196 8.89464 11.7652 9 11.5 9H8C7.73478 9 7.48043 8.89464 7.29289 8.70711C7.10536 8.51957 7 8.26522 7 8V4.5C7 4.23478 7.10536 3.98043 7.29289 3.79289C7.48043 3.60536 7.73478 3.5 8 3.5C8.26521 3.5 8.51957 3.60536 8.70711 3.79289C8.89464 3.98043 9 4.23478 9 4.5V7Z",fill:"currentColor"})))},x=n(68734),j=n(54126),C=n(9964),Z=n(33982),v=n(35658),b=n(92948),A=n(949),E=n(89546);function P(t){var e=t.price,n=t.status;return t.isSoldOut?(0,s.jsxs)(w,{children:[(0,s.jsx)(d.Z,{icon:x.Z,size:1}),(0,s.jsx)(f.Z,{weight:"semibold",children:"Minted out"})]}):"UNSCHEDULED"===n?(0,s.jsxs)(w,{children:[(0,s.jsx)(d.Z,{icon:m,size:1}),(0,s.jsx)(f.Z,{weight:"semibold",children:"Minting soon"})]}):"SCHEDULED"===n&&!t.showPrice&&(0,r.Z)((0,o.Z)(t.startsAt))?(0,s.jsxs)(w,{children:[(0,s.jsx)(d.Z,{icon:m,size:1}),(0,s.jsx)(f.Z,{weight:"semibold",children:(0,v.o0)((0,o.Z)(t.startsAt))})]}):(0,A.l7)(e)?(0,s.jsx)(f.Z,{weight:"semibold",children:(0,s.jsx)(E.Z,{mintPrice:e})}):(0,s.jsx)(a.Z,{})}var y=function(t,e){if(!((0,A.l7)(t)&&(0,A.l7)(e)&&e>=0))return null;var n=t-e;return{percent:(0,b.rI)(n,t),label:"".concat(n," / ").concat(t),tokensMinted:n}},w=(0,c.zo)("div",{gap:"$1",display:"flex",alignItems:"center"}),T=(0,c.zo)("div",{gap:"$3",display:"flex",alignItems:"stretch",flexDirection:"column"}),D=(0,c.zo)("div",{height:"18px",display:"flex",lineHeight:"18px",justifyContent:"space-between"}),S=Object.assign((function(t){var e=t.nftCount,n=t.status,i=t.maxTokenId,r=t.price,o=(0,b.rI)(e,i);return(0,s.jsxs)(T,{children:[(0,s.jsxs)(D,{children:["SCHEDULED"===n?(0,s.jsx)(P,{status:n,isSoldOut:e===i,startsAt:t.startsAt,price:r,showPrice:t.showPrice}):(0,s.jsx)(P,{status:n,isSoldOut:e===i,price:r}),(0,A.l7)(e)&&i?(0,s.jsx)(f.Z,{weight:"semibold",children:"".concat(e," / ").concat(i)}):(0,s.jsx)(a.Z,{})]}),(0,s.jsx)(u.Z.Animated,{value:o})]})}),{Connected:function(t){var e=t.collection,n=e.maxTokenId,i=e.contractAddress,r=(0,C.Aw)({contractAddress:i}),o=(0,j.Z)({contractAddress:i,contractType:e.contractType});if(r.isLoading||!r.data||!(0,A.l7)(o.data))return(0,s.jsx)(S.Skeleton,{});var c=y(n,o.data),a=(0,C.r8)(r.data)?r.data.collectionSale.mintPrice:null,l=(0,Z.VF)({saleType:e.saleType,mintPrice:a,clearingPrice:e.clearingPrice});return"SCHEDULED"===e.status?(0,s.jsx)(S,{nftCount:c?c.tokensMinted:null,status:e.status,startsAt:"PRE_SALE"===r.data.status&&r.data.preSale?e.earlyAccessStartTime:e.generalAvailabilityStartTime,maxTokenId:n,price:l,showPrice:!0}):(0,s.jsx)(S,{nftCount:c?c.tokensMinted:null,status:e.status,maxTokenId:n,price:l})},Skeleton:function(){return(0,s.jsxs)(T,{children:[(0,s.jsxs)(l.Z,{css:{justifyContent:"space-between"},children:[(0,s.jsx)(h.Z.Block,{variant:"fill",css:{height:18,width:"30%"}}),(0,s.jsx)(h.Z.Block,{variant:"fill",css:{height:18,width:"20%"}})]}),(0,s.jsx)(h.Z.Button,{variant:"fill",css:{height:8,width:"100%"}})]})}}),I=S},67317:function(t,e,n){var i=n(26042),s=n(69396),r=n(85893),o=n(41664),c=n.n(o),a=n(98964),l=n(58243),d=n(60583),u=n(4025),h=n(30281),f=n(81670);e.Z={Timed:function(t){var e=t.collection,n=t.collectionStats,o=t.surface,g=(0,h.Z)(),p=e.status,m=(0,l.MU)((0,i.Z)({collection:(0,s.Z)((0,i.Z)({},e),{status:p,contractType:"TIMED_EDITION"})},n)),x="HOME"===o?"Mint edition":"Mint";return(0,a.EQ)((0,s.Z)((0,i.Z)({},m),{surface:o})).with({status:"SCHEDULED",surface:"HOME"},(function(){return(0,r.jsx)(c(),{href:f.DW.collection.page(e.slug),passHref:!0,children:(0,r.jsx)(d.Z,{as:"a",variant:"outline",css:{width:"100%"},children:"View edition"})})})).with({status:"SCHEDULED",surface:"COLLECTION"},(function(){return(0,r.jsx)(d.Z,{variant:"primary",size:{"@initial":1,"@bp1":2},disabled:!0,children:"Minting soon"})})).with({status:"ENDED",nftAggregates:a.P.when((function(t){return 0===t.totalCount}))},(function(){return(0,r.jsx)(d.Z,{disabled:!0,variant:"primary",size:{"@initial":1,"@bp1":2},children:"Sale ended"})})).with({status:"ENDED",floorPriceNft:a.P.select("floorPriceNft",a.P.not(null)),collection:a.P.select("collection"),creator:a.P.select("creator")},(function(t){var e=t.floorPriceNft,n=t.collection,i=t.creator;return(0,r.jsx)(c(),{href:f.DW.nft.page({collectionSlugOrAddress:n.slug||n.contractAddress,usernameOrAddress:i.username||i.publicKey,tokenId:e.tokenId}),passHref:!0,children:(0,r.jsx)(d.Z,{variant:"primary",size:{"@initial":1,"@bp1":2},children:"Buy the floor"})})})).with({status:"ENDED",collection:a.P.select()},(function(t){return(0,r.jsx)(c(),{href:{pathname:f.DW.collection.page(t.slug),hash:"nfts"},passHref:!0,children:(0,r.jsx)(d.Z,{as:"a",css:{width:"100%"},size:2,variant:"primary",children:"Shop the secondary"})})})).otherwise((function(){return(0,r.jsx)(u.Z,{variant:"primary",size:{"@initial":1,"@bp1":2},css:{width:"100%"},onClick:function(){g.setModal((0,s.Z)((0,i.Z)({},e),{contractType:"TIMED_EDITION",mintPrice:e.mintPrice?e.mintPrice:0,type:"MINT_PACK"}))},children:x})}))},Limited:function(t){var e=t.collection,n=t.collectionStats,o=t.surface,g=(0,h.Z)(),p=e.status,m=(0,l.Vh)((0,i.Z)({collection:(0,s.Z)((0,i.Z)({},e),{status:p,contractType:"LIMITED_EDITION"})},n)),x="HOME"===o?"Mint edition":"Mint";return(0,a.EQ)((0,s.Z)((0,i.Z)({},m),{surface:o})).with({status:"SCHEDULED",surface:"HOME"},(function(){return(0,r.jsx)(c(),{href:f.DW.collection.page(e.slug),passHref:!0,children:(0,r.jsx)(d.Z,{as:"a",variant:"outline",css:{width:"100%"},children:"View edition"})})})).with({status:"SCHEDULED",surface:"COLLECTION"},(function(){return(0,r.jsx)(d.Z,{variant:"primary",size:{"@initial":1,"@bp1":2},disabled:!0,children:"Minting soon"})})).with({status:"MINTED_OUT",nftAggregates:a.P.when((function(t){return 0===t.totalCount}))},(function(){return(0,r.jsx)(d.Z,{disabled:!0,variant:"primary",size:{"@initial":1,"@bp1":2},children:"Sale ended"})})).with({status:"MINTED_OUT",floorPriceNft:a.P.select("floorPriceNft",a.P.not(null)),collection:a.P.select("collection"),creator:a.P.select("creator")},(function(t){var e=t.floorPriceNft,n=t.collection,i=t.creator;return(0,r.jsx)(c(),{href:f.DW.nft.page({collectionSlugOrAddress:n.slug||n.contractAddress,usernameOrAddress:i.username||i.publicKey,tokenId:e.tokenId}),passHref:!0,children:(0,r.jsx)(d.Z,{variant:"primary",size:{"@initial":1,"@bp1":2},children:"Buy the floor"})})})).with({status:"MINTED_OUT",collection:a.P.select()},(function(t){return(0,r.jsx)(c(),{href:{pathname:f.DW.collection.page(t.slug),hash:"nfts"},passHref:!0,children:(0,r.jsx)(d.Z,{as:"a",css:{width:"100%"},size:2,variant:"primary",children:"Shop the secondary"})})})).otherwise((function(){return(0,r.jsx)(u.Z,{variant:"primary",size:{"@initial":1,"@bp1":2},css:{width:"100%"},onClick:function(){g.setModal((0,s.Z)((0,i.Z)({},e),{contractType:"TIMED_EDITION",mintPrice:e.mintPrice?e.mintPrice:0,type:"MINT_PACK"}))},children:x})}))}}},22209:function(t,e,n){n.d(e,{mt:function(){return c}});n(26042);var i=n(86627),s=n(88767),r=n(73104),o="\n    query CollectionStats($collectionAddress: ID!) {\n  collectionStats(collectionAddress: $collectionAddress) {\n    nftAggregates {\n      totalCount\n      listedCount\n    }\n    salesAggregates {\n      floorPrice\n      totalSales\n      transactionCount\n    }\n    lastSoldNft {\n      assetIpfsPath\n      assetScheme\n      assetHost\n      assetPath\n      assetId\n      assetVersion\n      assetStatus\n      mimeType\n      name\n      tokenId\n      id\n      contractAddress\n      nftMarket {\n        price\n        soldAt\n        buyer {\n          ...UserMicroFragment\n        }\n        seller {\n          ...UserMicroFragment\n        }\n      }\n    }\n    floorPriceNft {\n      assetIpfsPath\n      assetScheme\n      assetHost\n      assetPath\n      assetId\n      assetVersion\n      assetStatus\n      mimeType\n      name\n      tokenId\n      id\n      contractAddress\n      nftMarket {\n        price\n        listedAt\n        buyer {\n          ...UserMicroFragment\n        }\n        seller {\n          ...UserMicroFragment\n        }\n      }\n    }\n  }\n}\n    ".concat(i._U),c=function(t,e){return(0,s.useQuery)(["CollectionStats",t],(0,r.h6)(o,t),e)};c.getKey=function(t){return["CollectionStats",t]},c.fetcher=function(t,e){return(0,r.h6)(o,t,e)}},54126:function(t,e,n){n.d(e,{Z:function(){return h}});var i=n(47568),s=n(26042),r=n(69396),o=n(97582),c=n(88767),a=n(24532),l=n(333),d=n(23638),u=n(96100);function h(t,e){var n=new l.D(u.Vi.CHAIN,(0,d.Z)());return(0,c.useQuery)(h.getKey(t),(function(){return function(t){return f.apply(this,arguments)}({contractAddress:t.contractAddress,provider:n,overrides:t.overrides})}),(0,r.Z)((0,s.Z)({},e),{enabled:Boolean(t.contractAddress&&"FND_BATCH_MINT_REVEAL"===t.contractType)}))}function f(){return(f=(0,i.Z)((function(t){var e,n,i,s,r;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return e=t.contractAddress,n=t.provider,i=t.overrides,(s=(0,a.wM)({provider:n,contractAddress:e}))?i?[4,s.numberOfTokensAvailableToMint(i)]:[3,2]:[2];case 1:return r=o.sent(),[3,4];case 2:return[4,s.numberOfTokensAvailableToMint()];case 3:r=o.sent(),o.label=4;case 4:return[2,r.toNumber()]}}))}))).apply(this,arguments)}h.getKey=function(t){return["AvailableTokenCount",t]}}}]);