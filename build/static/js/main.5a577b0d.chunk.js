(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{210:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"estimateBatchAssetPriceInErc20","outputs":[{"internalType":"address[]","name":"erc20Addrs","type":"address[]"},{"internalType":"uint256[]","name":"erc20Amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"estimateBatchAssetPriceInEth","outputs":[{"internalType":"uint256","name":"totalCost","type":"uint256"}],"stateMutability":"view","type":"function"}]')},211:function(e){e.exports=JSON.parse('[{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},218:function(e,t,c){},219:function(e,t,c){},244:function(e,t){},269:function(e,t){},271:function(e,t){},347:function(e,t){},349:function(e,t){},359:function(e,t){},361:function(e,t){},386:function(e,t){},392:function(e,t){},405:function(e,t){},484:function(e){e.exports=JSON.parse("{}")},485:function(e){e.exports=JSON.parse("{}")},486:function(e){e.exports=JSON.parse("{}")},487:function(e){e.exports=JSON.parse("{}")},488:function(e){e.exports=JSON.parse("{}")},489:function(e){e.exports=JSON.parse("{}")},490:function(e){e.exports=JSON.parse("{}")},491:function(e){e.exports=JSON.parse("{}")},492:function(e){e.exports=JSON.parse("{}")},493:function(e){e.exports=JSON.parse("{}")},494:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(77),s=c.n(a),d=(c(218),c(219),c(56)),i=c(45),j=c(207),l=c(78),b=c(27),o="LOGIN",x="ADD_TODO",h="GET_TODOS",u="UPDATE_TODOS",f="TRADE",O={user:"",trx:{},todoList:[],loaded:!1},p=Object(i.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(b.a)(Object(b.a)({},e),{},{user:t.payload[0]});case x:return Object(b.a)(Object(b.a)({},e),{},{todoList:[].concat(Object(l.a)(e.todoList),[t.payload])});case h:return Object(b.a)(Object(b.a)({},e),{},{todoList:[].concat(Object(l.a)(e.todoList),Object(l.a)(t.payload)),loaded:!0});case u:return Object(b.a)(Object(b.a)({},e),{},{todoList:t.payload});case f:return Object(b.a)(Object(b.a)({},e),{},{trx:t.payload});default:return e}}}),m=[j.a],C=Object(i.d)(p,{},i.a.apply(void 0,m));window.store=C;var E=C,A=c(35),D=c(14),F=c(0);var B=function(){return Object(F.jsxs)(n.Fragment,{children:[Object(F.jsx)("hr",{}),Object(F.jsxs)("p",{children:[Object(F.jsx)(A.b,{to:"/",children:"Markets"})," "," | ",Object(F.jsx)(A.b,{to:"/nerd-swap",children:"Swap"})," "," | ",Object(F.jsx)(A.b,{to:"/eth-swap",children:"Eth Swap"})," "," | ",Object(F.jsx)("a",{target:"_blank",href:"https://github.com/vasa-develop/cross-asset-swap",children:"GitHub"})]}),Object(F.jsx)("hr",{})]})},y=c(16),v=c.n(y),k=c(46),I=function(){return function(){var e=Object(k.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.enable();case 2:c=e.sent,t({type:o,payload:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=c(208),g=c.n(T),N=(c(484),c(485),c(486),c(487),c(488),c(489),c(490),c(491),c(492),c(493),c(210)),w=c(211),S=function(e){switch(e){case"nft":return w;case"market":return N}},P=function(e){switch(e){case"0x274E21d314A915d1504060d4351DdE05d4dC031e":return"0x7a911C71144f4d5a00E4216b1c5b12D9571E9336";case"0x1DB61FC42a843baD4D91A2D788789ea4055B8613":return"0x48Bef6bd05bD23b5e6800Cf0406e524b517af250";case"0x7CdC0421469398e0F3aA8890693d86c840Ac8931":return"0x22C4AD011Cce6a398B15503e0aB64286568933Ed";case"0x31385d3520bCED94f77AaE104b406994D8F2168C":return"0xcCcBF11AC3030ee8CD7a04CFE15a3718df6dD030";case"0xC2C747E0F7004F9E8817Db2ca4997657a7746928":return"0xc2BdE1A2fA26890c8E6AcB10C91CC6D9c11F4a73";case"0xe4605d46Fd0B3f8329d936a8b258D69276cBa264":return"0x60ACD58d00b2BcC9a8924fdaa54A2F7C0793B3b2";case"0x892555E75350E11f2058d086C72b9C94C9493d72":return"0x2313E39841fb3809dA0Ff6249c2067ca84795846";case"0x89eE76cC25Fcbf1714ed575FAa6A10202B71c26A":return"0x303Af77Cf2774AABff12462C110A0CCf971D7DbE";case"0xDb68Df0e86Bc7C6176E6a2255a5365f51113BCe8":return"0xB3CDC594D8C8e8152d99F162cF8f9eDFdc0A80A2";case"0x7C40c393DC0f283F318791d746d894DdD3693572":return"0xf961A1Fa7C781Ecd23689fE1d0B7f3B6cBB2f972"}},M=function(e){return["nft20","axie","cryptokitty","cryptopunk","decentraland","eulerbeats","knownorigin","mooncats","superrare","defiville","rarible","makersplace","uniqueone","opensea","asyncart"].indexOf(e)},L=function(e){return["axie","cryptokitty","cryptopunk","eulerbeats","knownorigin","mooncats","superrare","defiville","rarible","makersplace","uniqueone","opensea","asyncart"].includes(e)},R=function(e){switch(e){case"aah":return"0x7a911C71144f4d5a00E4216b1c5b12D9571E9336";case"chubbies":return"0x48Bef6bd05bD23b5e6800Cf0406e524b517af250";case"doki":return"0x22C4AD011Cce6a398B15503e0aB64286568933Ed";case"ganPunks":return"0xcCcBF11AC3030ee8CD7a04CFE15a3718df6dD030";case"hashmask":return"0xc2BdE1A2fA26890c8E6AcB10C91CC6D9c11F4a73";case"meme":return"0x60ACD58d00b2BcC9a8924fdaa54A2F7C0793B3b2";case"niftyDudes":return"0x2313E39841fb3809dA0Ff6249c2067ca84795846";case"nodeRunners":return"0x303Af77Cf2774AABff12462C110A0CCf971D7DbE";case"rope":return"0xB3CDC594D8C8e8152d99F162cF8f9eDFdc0A80A2";case"mooncats":return"0xf961A1Fa7C781Ecd23689fE1d0B7f3B6cBB2f972";case"decentraland":return"0x1E0CD9506d465937E9d6754e76Cd389A8bD90FBf";case"FRAMERGENCE":return"0x84F830A9203223D672d6592481f4A027e9Cf934E";case"EDITIONAL":return"0x34a558Df12aEAc5f5029eECCeFb549368Ce168AF"}},U=function(e){switch(e){case"nft20":return"0x064C9c5Fe72ab6acdc0d220050d519AfAa59B9bB";case"axie":return"0xdCAEE44ED2965d5615a9A206f6f3ab8fb90Fcd62";case"cryptokitty":return"0x7207d099EBAb7cF9DE49A29739Dd0C628dDCf48D";case"cryptopunk":return"0x03DcA7d783175Ba9D97cc41D20e4c266C7abb881";case"decentraland":return"0x0545405a2c208d3E2c50c71cF0B6B9a72A021b49";case"eulerbeats":return"0x2428aE09b453692A667b8A8dee1Fc4082f44Ad05";case"knownorigin":return"0xCBc360534370F1d5465e531236027f0610E067bf";case"mooncats":return"0xdAD871D701Da0D98993Eaa27Ce9c2e51D8912B87";case"superrare":return"0x99f2B1FF838dA5Ee5062358b4Fa2c763C93Fe474";case"defiville":return"0xE43C045bb9BC0793b384B3517239937b4eD7746C";case"rarible":return"0xa695C98cfD621FF2a50233eFE9Eed5D5bde1Fc78";case"makersplace":return"0xc4B3a11f29971e757b1627586fa8C5fFE7bCC660";case"uniqueone":return"0xf28CdFB8d7De08A4C51C7D2171122ccDaAE37DaF";case"opensea":return"0xB32EaF1153a0f0b12361f0A9563B0178e98935E4";case"asyncart":return"0x827839e1cd15ec75a1adcea0d1dcc49d3f3c8cd0"}},H=function(e){return["0x274E21d314A915d1504060d4351DdE05d4dC031e","0x7CdC0421469398e0F3aA8890693d86c840Ac8931","0xe4605d46Fd0B3f8329d936a8b258D69276cBa264","0x89eE76cC25Fcbf1714ed575FAa6A10202B71c26A","0xDb68Df0e86Bc7C6176E6a2255a5365f51113BCe8","0x876295342f2CdA8d83e05f395063efA676535c43","0x929167191ca41a4753eda357bb6e5ad6f15fb89b","0x68289CEfA695b96C61506B590aC18Ce71989B0D0","0xc36cF0cFcb5d905B8B513860dB0CFE63F6Cf9F5c","0xb80fBF6cdb49c33dC6aE4cA11aF8Ac47b0b4C0f3"].includes(e)},_=new g.a(window.web3.currentProvider),Y="0x95470F8E330d20788e76e8Da3063C9a19555aC0C",V=function(e,t,c,n){switch(e){case"nft20":return{sig:[],params:[]};case"axie":return{sig:["address[]","uint256[]"],params:[[t],c]};case"cryptokitty":case"cryptopunk":return{sig:["uint256[]"],params:[c]};case"decentraland":return{sig:["address[]","uint256[]"],params:[[t],c]};case"eulerbeats":case"knownorigin":return{sig:["uint256[]"],params:[c]};case"mooncats":return{sig:["bytes5[]"],params:[c]};case"superrare":return{sig:["uint256[]"],params:[c]};case"defiville":return{sig:["uint256[]","uint256[]"],params:[c,n]};case"rarible":case"makersplace":case"uniqueone":case"opensea":return{sig:[],params:[]};case"asyncart":return{sig:["uint256[]"],params:[c]}}},G=function(e){return L(e)?"buyAssetsForEth":"buyAssetsForErc20"},X=function(){var e=Object(k.a)(v.a.mark((function e(t,c){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new _.eth.Contract(S("market"),U(t)),!L(t)){e.next=7;break}return e.next=4,n.methods.estimateBatchAssetPriceInEth(c).call();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,n.methods.estimateBatchAssetPriceInErc20(c).call();case 9:e.t0=e.sent;case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),J=function(){var e=Object(k.a)(v.a.mark((function e(t,c,n,r){var a,s,d;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!L(t)){e.next=12;break}return e.t0=P(n),e.t1=Y,e.t2=parseInt,e.next=6,X(t,r);case 6:return e.t3=e.sent,e.t4=(0,e.t2)(e.t3).toString(16),e.t5="0x"+e.t4,e.abrupt("return",[e.t0,e.t1,e.t5]);case 12:return e.next=14,X(t,r);case 14:for(a=e.sent,s=0,d=0;d<a[0];d++)s+=a[0][d];return e.abrupt("return",[P(n),R(c),Y,"0x"+s.toString(16)]);case 18:case"end":return e.stop()}}),e)})));return function(t,c,n,r){return e.apply(this,arguments)}}(),W=function(e,t){var c;return c=e?_.eth.abi.encodeParameters(["address","uint256[]","uint256[]"],t):_.eth.abi.encodeParameters(["address","uint256[]"],t),_.eth.abi.encodeFunctionCall({name:e?"sellERC1155BatchForERC20Equivalent":"sellERC721ForERC20Equivalent",type:"function",inputs:[{type:"bytes",name:"data"}]},[c])},q=function(e,t){return e?_.eth.abi.encodeFunctionCall({name:"swapERC20ForExactETH",type:"function",inputs:[{type:"address",name:"from"},{type:"address",name:"recipient"},{type:"uint256",name:"amountOut"}]},t):_.eth.abi.encodeFunctionCall({name:"swapERC20ForExactERC20",type:"function",inputs:[{type:"address",name:"from"},{type:"address",name:"to"},{type:"address",name:"recipient"},{type:"uint256",name:"amountOut"}]},t)},K=function(e,t,c,n){var r=V(e,t,c,n);return _.eth.abi.encodeParameters(r.sig,r.params)},Q=function(e,t,c,n,r){var a=V(e,t,c,n),s=_.eth.abi.encodeParameters(a.sig,a.params);return _.eth.abi.encodeFunctionCall({name:G(e),type:"function",inputs:[{type:"bytes",name:"data"},{type:"address",name:"recipient"}]},[s,r])};var z=Object(d.b)((function(e){return{user:e.app.user,trx:e.app.trx}}),(function(e){return{login:function(){return e(I())},executeTrade:function(t){return e(function(e){return function(){var t=Object(k.a)(v.a.mark((function t(c){var n,r,a,s,d,i,j,l,b,o,x,h,u,O,p,m,C,E,A,D;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.recipient,r=e.fromNft,a=e.fromIds,s=e.fromAmounts,d=e.toNft,i=e.toIds,j=e.toAmounts,l=e.sellMarket,b=e.swapExchange,o=e.buyMarket,i=i.split(",").map((function(e){return parseInt(e)})),j=j.split(",").map((function(e){return parseInt(e)})),a=a.split(",").map((function(e){return parseInt(e)})),s=s.split(",").map((function(e){return parseInt(e)})),x=x||"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",h="0xb5C70AC5147eF7DbB060382F7A5C724C2bEF070d",u=H(r),O=W(u,u?[r,a,s]:[r,a]),p=Q(o,d,i,j,n),t.t0=q,t.t1=L(o),t.next=15,J(o,l,r,K(o,d,i,j));case 15:if(t.t2=t.sent,m=(0,t.t0)(t.t1,t.t2),C=[x,h,n],E=_.eth.abi.encodeParameters([{"SellDetails[]":{marketId:"uint256",sellData:"bytes"}},{"SwapDetails[]":{exchangeId:"uint256",swapData:"bytes"}},{"BuyDetails[]":{marketId:"uint256",buyData:"bytes"}},"address[]"],[[{marketId:M(l),sellData:O}],[{exchangeId:(F=b,["uniswap"].indexOf(F)),swapData:m}],[{marketId:M(o),buyData:p}],C]),A=new _.eth.Contract(S("nft"),r),console.log(E),!u){t.next=27;break}return t.next=24,A.methods.safeBatchTransferFrom(n,Y,a,s,E).send({from:_.givenProvider.selectedAddress});case 24:t.t3=t.sent,t.next=30;break;case 27:return t.next=29,A.methods.safeTransferFrom(n,Y,a[0],E).send({from:_.givenProvider.selectedAddress});case 29:t.t3=t.sent;case 30:D=t.t3,console.log(D),c({type:f,payload:D});case 33:case"end":return t.stop()}var F}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.user,c=e.trx,r=e.login,a=e.executeTrade;return console.log("ui: ",c),""==t&&r(),Object(F.jsxs)(n.Fragment,{children:[Object(F.jsxs)("center",{children:[Object(F.jsx)("h3",{children:"\ud83e\udde0 Nerd Swap \ud83d\udd00"}),Object(F.jsx)(B,{}),""==t?Object(F.jsx)("p",{children:" \ud83d\udea8 Login via Metamask \ud83d\udea8 "}):Object(F.jsxs)(n.Fragment,{children:[Object(F.jsxs)("p",{children:[Object(F.jsx)("b",{children:"Current Account: "}),t]}),Object(F.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:"This is a test interface. Only use assets that you are willing to lose."}),Object(F.jsxs)("table",{className:"table",children:[Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"SELL"}),Object(F.jsx)("th",{children:"BUY"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsxs)("td",{children:[Object(F.jsx)("label",{forHtml:"nftAddr",children:"Choose an NFT to sell:"}),Object(F.jsxs)("select",{name:"nfts",id:"fromNft",children:[Object(F.jsx)("option",{value:"0xC2C747E0F7004F9E8817Db2ca4997657a7746928",children:"HashMask"}),Object(F.jsx)("option",{value:"0x7C40c393DC0f283F318791d746d894DdD3693572",children:"Wrapped Moon Cats"}),Object(F.jsx)("option",{value:"0x31385d3520bCED94f77AaE104b406994D8F2168C",children:"GAN Punks"}),Object(F.jsx)("option",{value:"0x274E21d314A915d1504060d4351DdE05d4dC031e",children:"Aah"}),Object(F.jsx)("option",{value:"0xDb68Df0e86Bc7C6176E6a2255a5365f51113BCe8",children:"Rope"}),Object(F.jsx)("option",{value:"0x892555E75350E11f2058d086C72b9C94C9493d72",children:"Nifty Dudes"}),Object(F.jsx)("option",{value:"0xe4605d46Fd0B3f8329d936a8b258D69276cBa264",children:"Meme"}),Object(F.jsx)("option",{value:"0x1DB61FC42a843baD4D91A2D788789ea4055B8613",children:"Chubbies"}),Object(F.jsx)("option",{value:"0x7CdC0421469398e0F3aA8890693d86c840Ac8931",children:"Doki Doki"}),Object(F.jsx)("option",{value:"0x89eE76cC25Fcbf1714ed575FAa6A10202B71c26A",children:"Node Runners"})]})]}),Object(F.jsxs)("td",{children:[Object(F.jsx)("label",{forHtml:"nftAddr",children:"Choose an NFT to buy:"}),Object(F.jsxs)("select",{name:"nfts",id:"toNft",children:[Object(F.jsx)("option",{value:"axie_0xF5b0A3eFB8e8E4c201e2A935F110eAaF3FFEcb8d",children:"Axie"}),Object(F.jsx)("option",{value:"cryptokitty_",children:"Crypto Kitties"}),Object(F.jsx)("option",{value:"cryptopunk_",children:"Crypto Punks"}),Object(F.jsx)("option",{value:"eulerbeats_",children:"EulerBeats"}),Object(F.jsx)("option",{value:"knownorigin_",children:"KnownOrigin"}),Object(F.jsx)("option",{value:"mooncats_",children:"Moon Cats"}),Object(F.jsx)("option",{value:"superrare_",children:"SuperRare"}),Object(F.jsx)("option",{value:"defiville_",children:"DeFiVille"}),Object(F.jsx)("option",{value:"asyncart_",children:"AsyncArt"})]})]})]}),Object(F.jsxs)("tr",{children:[Object(F.jsxs)("td",{children:[Object(F.jsx)("label",{forHtml:"nftAddr",children:"Tokens ids to sell (comma-separated):"}),Object(F.jsx)("input",{type:"text",id:"fromIds",name:"fromIds",placeholder:"1,2,3"})]}),Object(F.jsxs)("td",{children:[Object(F.jsx)("label",{forHtml:"nftAddr",children:"Tokens ids to buy (comma-separated):"}),Object(F.jsx)("input",{type:"text",id:"toIds",name:"toIds",placeholder:"1,2,3"})]})]}),Object(F.jsxs)("tr",{children:[Object(F.jsxs)("td",{children:[Object(F.jsx)("label",{forHtml:"nftAddr",children:"Tokens amounts to sell (comma-separated):"}),Object(F.jsx)("input",{type:"text",id:"fromAmounts",name:"fromAmounts",placeholder:"1,2,3"})]}),Object(F.jsxs)("td",{children:[Object(F.jsx)("label",{forHtml:"nftAddr",children:"Tokens amounts to buy (comma-separated):"}),Object(F.jsx)("input",{type:"text",id:"toAmounts",name:"toAmounts",placeholder:"1,2,3"})]})]})]}),Object(F.jsx)("h4",{children:"Trade Path"}),Object(F.jsxs)("p",{children:["NFT ---\x3e NFT20 ---\x3e ","Uniswap [ERC20 to ETH]"," ---\x3e NFT "]}),Object(F.jsx)("button",{onClick:function(){var e=document.getElementById("fromNft").value,c=document.getElementById("fromIds").value,n=document.getElementById("fromAmounts").value,r=document.getElementById("toNft").value,s=document.getElementById("toIds").value,d=document.getElementById("toAmounts").value;a({recipient:t,fromNft:e,fromIds:c,fromAmounts:n,toNft:r.split("_")[1],toIds:s,toAmounts:d,sellMarket:"nft20",swapExchange:"uniswap",buyMarket:r.split("_")[0]})},children:"Execute Trade"}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),c.transactionHash?Object(F.jsx)("font",{color:"blue",children:Object(F.jsxs)("b",{children:["Transaction Submitted to ETH Mainnet:",Object(F.jsx)("a",{href:"https://etherscan.io/tx/"+c.transactionHash,target:"_blank",children:c.transactionHash})]})}):null]})]}),Object(F.jsx)("hr",{})]})}));var Z=function(){return Object(F.jsxs)(n.Fragment,{children:[Object(F.jsxs)("center",{children:[Object(F.jsx)("h3",{children:"\ud83d\udd00 Swap Gallery | Markets \ud83d\uddbc\ufe0f"}),Object(F.jsx)(B,{}),Object(F.jsx)("h3",{children:"Supported Markets"}),Object(F.jsxs)("table",{className:"table",children:[Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"Market"}),Object(F.jsx)("th",{children:"Type"}),Object(F.jsx)("th",{children:"Status"}),Object(F.jsx)("th",{children:"Address"}),Object(F.jsx)("th",{children:"MarketId"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"NFT20"}),Object(F.jsx)("td",{children:"BUY/SELL"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0x064C9c5Fe72ab6acdc0d220050d519AfAa59B9bB",children:"0x064C9c5Fe72ab6acdc0d220050d519AfAa59B9bB"})}),Object(F.jsx)("td",{children:"0"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"AxieInfinity"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0xdCAEE44ED2965d5615a9A206f6f3ab8fb90Fcd62",children:"0xdCAEE44ED2965d5615a9A206f6f3ab8fb90Fcd62"})}),Object(F.jsx)("td",{children:"1"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"CryptoKitties"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0x7207d099EBAb7cF9DE49A29739Dd0C628dDCf48D",children:"0x7207d099EBAb7cF9DE49A29739Dd0C628dDCf48D"})}),Object(F.jsx)("td",{children:"2"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"CryptoPunks"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0x03DcA7d783175Ba9D97cc41D20e4c266C7abb881",children:"0x03DcA7d783175Ba9D97cc41D20e4c266C7abb881"})}),Object(F.jsx)("td",{children:"3"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"Decentraland"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0x0545405a2c208d3E2c50c71cF0B6B9a72A021b49",children:"0x0545405a2c208d3E2c50c71cF0B6B9a72A021b49"})}),Object(F.jsx)("td",{children:"4"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"EulerBeats"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0x2428aE09b453692A667b8A8dee1Fc4082f44Ad05",children:"0x2428aE09b453692A667b8A8dee1Fc4082f44Ad05"})}),Object(F.jsx)("td",{children:"5"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"KnownOrigin"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0xCBc360534370F1d5465e531236027f0610E067bf",children:"0xCBc360534370F1d5465e531236027f0610E067bf"})}),Object(F.jsx)("td",{children:"6"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"MoonCatsMarket"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0xdAD871D701Da0D98993Eaa27Ce9c2e51D8912B87",children:"0xdAD871D701Da0D98993Eaa27Ce9c2e51D8912B87"})}),Object(F.jsx)("td",{children:"7"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"SuperRare"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0x99f2B1FF838dA5Ee5062358b4Fa2c763C93Fe474",children:"0x99f2B1FF838dA5Ee5062358b4Fa2c763C93Fe474"})}),Object(F.jsx)("td",{children:"8"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"DeFiVille"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0xE43C045bb9BC0793b384B3517239937b4eD7746C",children:"0xE43C045bb9BC0793b384B3517239937b4eD7746C"})}),Object(F.jsx)("td",{children:"9"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"Rarible"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0xa695C98cfD621FF2a50233eFE9Eed5D5bde1Fc78",children:"0xa695C98cfD621FF2a50233eFE9Eed5D5bde1Fc78"})}),Object(F.jsx)("td",{children:"10"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"MakersPlace"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0xc4B3a11f29971e757b1627586fa8C5fFE7bCC660",children:"0xc4B3a11f29971e757b1627586fa8C5fFE7bCC660"})}),Object(F.jsx)("td",{children:"11"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"UniqueOne"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0xf28CdFB8d7De08A4C51C7D2171122ccDaAE37DaF",children:"0xf28CdFB8d7De08A4C51C7D2171122ccDaAE37DaF"})}),Object(F.jsx)("td",{children:"12"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"OpenSea"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0xB32EaF1153a0f0b12361f0A9563B0178e98935E4",children:"0xB32EaF1153a0f0b12361f0A9563B0178e98935E4"})}),Object(F.jsx)("td",{children:"13"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"AsyncArt"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"active",children:"ACTIVE"}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"https://etherscan.io/address/0x827839e1cd15ec75a1adcea0d1dcc49d3f3c8cd0",children:"0x827839e1cd15ec75a1adcea0d1dcc49d3f3c8cd0"})}),Object(F.jsx)("td",{children:"14"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"NFTX"}),Object(F.jsx)("td",{children:"BUY/SELL"}),Object(F.jsx)("td",{children:"wait till v2"}),Object(F.jsx)("td",{children:"X"}),Object(F.jsx)("td",{children:"X"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"Apymon"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"wip",children:"WIP"}),Object(F.jsx)("td",{children:"X"}),Object(F.jsx)("td",{children:"X"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"Synther"}),Object(F.jsx)("td",{children:"BUY/SELL"}),Object(F.jsx)("td",{className:"wip",children:"WIP"}),Object(F.jsx)("td",{children:"X"}),Object(F.jsx)("td",{children:"X"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"Drops"}),Object(F.jsx)("td",{children:"BUY/SELL"}),Object(F.jsx)("td",{className:"wip",children:"WIP"}),Object(F.jsx)("td",{children:"X"}),Object(F.jsx)("td",{children:"X"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"0xProject"}),Object(F.jsx)("td",{children:"BUY/SELL"}),Object(F.jsx)("td",{className:"help",children:"HELP"}),Object(F.jsx)("td",{children:"X"}),Object(F.jsx)("td",{children:"X"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"Sorare"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"help",children:"HELP"}),Object(F.jsx)("td",{children:"X"}),Object(F.jsx)("td",{children:"X"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:"SandboxGame"}),Object(F.jsx)("td",{children:"BUY"}),Object(F.jsx)("td",{className:"wip",children:"WIP"}),Object(F.jsx)("td",{children:"X"}),Object(F.jsx)("td",{children:"X"})]})]})]}),Object(F.jsx)("hr",{})]})};var $=Object(d.b)((function(e){return{user:e.app.user,trx:e.app.trx}}),(function(e){return{login:function(){return e(I())},executeFromNftTrade:function(t){return e(function(e){return function(){var t=Object(k.a)(v.a.mark((function t(c){var n,r,a,s,d,i,j,l,b,o,x,h;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.recipient,r=e.fromNft,a=e.fromIds,s=e.fromAmounts,d=e.changeIn,i=e.sellMarket,a=a.split(",").map((function(e){return parseInt(e)})),s=s.split(",").map((function(e){return parseInt(e)})),j=H(r),l=W(j,j?[r,a,s]:[r,a]),b=[d,"0xb5C70AC5147eF7DbB060382F7A5C724C2bEF070d",n],o=_.eth.abi.encodeParameters([{"SellDetails[]":{marketId:"uint256",sellData:"bytes"}},{"SwapDetails[]":{exchangeId:"uint256",swapData:"bytes"}},{"BuyDetails[]":{marketId:"uint256",buyData:"bytes"}},"address[]"],[[{marketId:M(i),sellData:l}],[],[],b]),x=new _.eth.Contract(S("nft"),r),console.log(o),!j){t.next=17;break}return t.next=14,x.methods.safeBatchTransferFrom(n,Y,a,s,o).send({from:_.givenProvider.selectedAddress});case 14:t.t0=t.sent,t.next=20;break;case 17:return t.next=19,x.methods.safeTransferFrom(n,Y,a[0],o).send({from:_.givenProvider.selectedAddress});case 19:t.t0=t.sent;case 20:h=t.t0,console.log(h),c({type:f,payload:h});case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.user,c=e.trx,r=e.login,a=e.executeFromNftTrade;return""==t&&r(),Object(F.jsxs)(n.Fragment,{children:[Object(F.jsxs)("center",{children:[Object(F.jsx)("h3",{children:"\ud83e\udde0 Nerd Swap \ud83d\udd00"}),Object(F.jsx)("hr",{}),Object(F.jsxs)("p",{children:[Object(F.jsx)(A.b,{to:"/",children:"Markets"})," "," | ",Object(F.jsx)("a",{target:"_blank",href:"https://github.com/vasa-develop/cross-asset-swap",children:"GitHub"})]}),Object(F.jsx)("hr",{}),""==t?Object(F.jsx)("p",{children:" \ud83d\udea8 Login via Metamask \ud83d\udea8 "}):Object(F.jsxs)(n.Fragment,{children:[Object(F.jsxs)("p",{children:[Object(F.jsx)("b",{children:"Current Account: "}),t]}),Object(F.jsx)("p",{style:{color:"red",fontWeight:"bold"},children:"This is a test interface. Only use assets that you are willing to lose."}),Object(F.jsxs)("table",{className:"table",children:[Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"SELL"}),Object(F.jsx)("th",{children:"BUY"})]}),Object(F.jsxs)("tr",{children:[Object(F.jsxs)("td",{children:[Object(F.jsx)("label",{forHtml:"nftAddr",children:"Choose an NFT to sell:"}),Object(F.jsxs)("select",{name:"nfts",id:"fromNft",children:[Object(F.jsx)("option",{value:"0xC2C747E0F7004F9E8817Db2ca4997657a7746928",children:"HashMask"}),Object(F.jsx)("option",{value:"0x7C40c393DC0f283F318791d746d894DdD3693572",children:"Wrapped Moon Cats"}),Object(F.jsx)("option",{value:"0x31385d3520bCED94f77AaE104b406994D8F2168C",children:"GAN Punks"}),Object(F.jsx)("option",{value:"0x274E21d314A915d1504060d4351DdE05d4dC031e",children:"Aah"}),Object(F.jsx)("option",{value:"0xDb68Df0e86Bc7C6176E6a2255a5365f51113BCe8",children:"Rope"}),Object(F.jsx)("option",{value:"0x892555E75350E11f2058d086C72b9C94C9493d72",children:"Nifty Dudes"}),Object(F.jsx)("option",{value:"0xe4605d46Fd0B3f8329d936a8b258D69276cBa264",children:"Meme"}),Object(F.jsx)("option",{value:"0x1DB61FC42a843baD4D91A2D788789ea4055B8613",children:"Chubbies"}),Object(F.jsx)("option",{value:"0x7CdC0421469398e0F3aA8890693d86c840Ac8931",children:"Doki Doki"}),Object(F.jsx)("option",{value:"0x89eE76cC25Fcbf1714ed575FAa6A10202B71c26A",children:"Node Runners"}),Object(F.jsx)("option",{value:"0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d",children:"Decentraland"}),Object(F.jsx)("option",{value:"0xbC17cd7f1A58bdA5d6181618090813B3050416b5",children:"FRAMERGENCE"}),Object(F.jsx)("option",{value:"0x05f02507c7134Dbae420AB8C0Ef56E999B59dA03",children:"EDITIONAL"}),Object(F.jsx)("option",{value:"0x876295342f2CdA8d83e05f395063efA676535c43",children:"LEGENDS OF CRYPTONIA"}),Object(F.jsx)("option",{value:"0x2216d47494E516d8206B70FCa8585820eD3C4946",children:"NFT20 WAIFUS"}),Object(F.jsx)("option",{value:"0x09B9905A472Aa1D387c9C1D8D956afF5463837E8",children:"APE ISLAND S1"}),Object(F.jsx)("option",{value:"0x929167191ca41a4753eda357bb6e5ad6f15fb89b",children:"TRISM ORIGINALS"}),Object(F.jsx)("option",{value:"0x68289CEfA695b96C61506B590aC18Ce71989B0D0",children:"DEGENARTS"}),Object(F.jsx)("option",{value:"0xdbD4264248e2f814838702E0CB3015AC3a7157a1",children:"TRADE SQUAD"}),Object(F.jsx)("option",{value:"0xc36cF0cFcb5d905B8B513860dB0CFE63F6Cf9F5c",children:"GALA GAMES"}),Object(F.jsx)("option",{value:"0xb80fBF6cdb49c33dC6aE4cA11aF8Ac47b0b4C0f3",children:"BLOCK ART"})]})]}),Object(F.jsxs)("td",{children:[Object(F.jsx)("label",{forHtml:"nftAddr",children:"Paste address of desired ERC20 (leave the input blank if you want ETH):"}),Object(F.jsx)("br",{}),Object(F.jsx)("input",{id:"changeIn",name:"changeIn",type:"text",placeholder:"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"})]})]}),Object(F.jsxs)("tr",{children:[Object(F.jsxs)("td",{children:[Object(F.jsxs)("label",{forHtml:"nftAddr",children:["Tokens ids to sell (comma-separated) ",Object(F.jsx)("b",{children:"[add single id in case of ERC721]:"})]}),Object(F.jsx)("br",{}),Object(F.jsx)("input",{type:"text",id:"fromIds",name:"fromIds",placeholder:"1,2,3"})]}),Object(F.jsx)("td",{})]}),Object(F.jsxs)("tr",{children:[Object(F.jsxs)("td",{children:[Object(F.jsx)("label",{forHtml:"nftAddr",children:"Tokens amounts to sell (comma-separated):"}),Object(F.jsx)("br",{}),Object(F.jsx)("input",{type:"text",id:"fromAmounts",name:"fromAmounts",placeholder:"1,2,3"})]}),Object(F.jsx)("td",{})]})]}),Object(F.jsx)("h4",{children:"Trade Path"}),Object(F.jsxs)("p",{children:["NFT ---\x3e NFT20 ---\x3e ","Uniswap [ERC20 to ETH/ERC20]"]}),Object(F.jsx)("button",{onClick:function(){var e=document.getElementById("fromNft").value,c=document.getElementById("fromIds").value,n=document.getElementById("fromAmounts").value,r=document.getElementById("changeIn").value;a({recipient:t,fromNft:e,fromIds:c,fromAmounts:n,changeIn:r,sellMarket:"nft20",swapExchange:"uniswap"})},children:"Execute Trade"}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),c.transactionHash?Object(F.jsx)("font",{color:"blue",children:Object(F.jsxs)("b",{children:["Transaction Submitted to ETH Mainnet:",Object(F.jsx)("a",{href:"https://etherscan.io/tx/"+c.transactionHash,target:"_blank",children:c.transactionHash})]})}):null]})]}),Object(F.jsx)("hr",{})]})}));function ee(){return Object(F.jsx)("div",{children:Object(F.jsxs)("h3",{children:["Built with \u2764\ufe0f by ",Object(F.jsx)("a",{href:"https://twitter.com/vasa_develop",target:"_blank",children:"vasa"})]})})}var te=function(){return Object(F.jsx)("center",{className:"App",children:Object(F.jsxs)(d.a,{store:E,children:[Object(F.jsx)(A.a,{children:Object(F.jsxs)(D.c,{children:[Object(F.jsx)(D.a,{path:"/nerd-swap",children:Object(F.jsx)(z,{})}),Object(F.jsx)(D.a,{path:"/eth-swap",children:Object(F.jsx)($,{})}),Object(F.jsx)(D.a,{path:"",children:Object(F.jsx)(Z,{})})]})}),Object(F.jsx)("div",{children:Object(F.jsx)(ee,{})})]})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,498)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(te,{})}),document.getElementById("root")),ce()}},[[494,1,2]]]);
//# sourceMappingURL=main.5a577b0d.chunk.js.map