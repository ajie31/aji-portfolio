(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{8513:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/football_progression",function(){return a(6446)}])},6446:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ce}});var n,r,s=a(5893),i=a(7948),l=a(6886),c=a(7357),o=a(7294),u=a(6463),d=25,h=100,x=700-h-20,f=500-d-100,p=((0,u.BYU)().range([0,x]),(0,u.BYU)().range([f,0]),function(e){var t=e.innerWidth,a=e.innerHeight,n=e.xScale,r=e.yScale,i=e.xAxisTitle,l=e.yAxisTitle;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("g",{transform:"translate(".concat(0,",",0,")"),children:[n.ticks(5).map((function(e){return(0,s.jsxs)("g",{transform:"translate(".concat(n(e),",",0,")"),children:[(0,s.jsx)("line",{stroke:"black",strokeWidth:".5",y1:a,y2:7+a}),(0,s.jsx)("text",{y:a+15,dy:".71em",style:{textAnchor:"middle",fontSize:".8rem"},children:e})]},e)})),(0,s.jsx)("text",{className:"x-axis-title",x:t/2,y:a,dy:"2.84em",textAnchor:"middle",children:i})]}),(0,s.jsxs)("g",{transform:"translate(".concat(0,",",0,")"),children:[r.ticks(5).map((function(e){return(0,s.jsxs)("g",{transform:"translate(".concat(0,",").concat(r(e),")"),children:[(0,s.jsx)("line",{stroke:"black",strokeWidth:".5",x2:t}),(0,s.jsx)("text",{dx:"-.71em",dy:".32em",style:{textAnchor:"end",fontSize:".8rem"},children:e})]},e)})),(0,s.jsx)("text",{transform:"rotate(-90)",className:"x-axis-title",x:-a/2,y:-70,textAnchor:"middle",children:l})]})]})}),g=function(e){var t=e.data,a=e.yScale,n=e.xScale,r=e.xValue,i=e.yValue,l=e.r;return(0,s.jsx)("g",{children:t.map((function(e,t){return(0,s.jsxs)("g",{children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:e.Squad.replace(/\s/g,""),width:l,height:l,children:(0,s.jsx)("image",{href:"https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/".concat(encodeURIComponent(e.Squad),".png"),x:"0",y:"0",width:2*l,height:2*l})})}),(0,s.jsx)("circle",{cx:n(r(e)),cy:a(i(e)),fill:"url(#".concat(e.Squad.replace(/\s/g,""),")"),r:l,children:(0,s.jsx)("title",{children:e.Squad})})]},t)}))})},m=a(913),j=a(3841),b=a(8517),y=a(5819),P=function(e){var t=e.label,a=e.options,n=e.selectedAttr,r=e.onChangeAttribute,i=t.replace(" ","-");return(0,s.jsxs)(m.Z,{style:{margin:"1rem",minWidth:"120px"},children:[(0,s.jsx)(j.Z,{id:"".concat(i,"-label"),children:t}),(0,s.jsx)(b.Z,{labelId:"".concat(i,"-label"),id:"".concat(i,"-select"),value:n,label:t,onChange:r,autoWidth:!0,children:a.map((function(e,t){return(0,s.jsx)(y.Z,{value:t,children:e.label},e.label)}))})]})},C=25,v=100,S=700-v-20,k=500-C-100,A=[{index:0,value:function(e){return e.DrbSucc/e["90s"]},label:"Dribling p90"},{index:1,value:function(e){return e.Poss},label:"Penguasaan Bola"},{index:2,value:function(e){return e.PrgDist/e["90s"]/(e.TotDist/e["90s"])},label:"ratio Jarak Umpan Progressif p90"},{index:3,value:function(e){return e.ScaPassLive/e["90s"]},label:"SCA Pada Umpan Bola Hidup p90"},{index:4,value:function(e){return e.Cmp/e["90s"]},label:"Umpan Sukses p90"},{index:5,value:function(e){return e.SCA/e["90s"]},label:"SCA p90"},{index:6,value:function(e){return e.GCA/e["90s"]},label:"GCA p90"}],w=function(e){var t=e.data,a=(0,o.useState)(A[4]),n=a[0],r=a[1],i=(0,o.useState)(A[2]),c=i[0],d=i[1],h=n.value,x=n.label,f=c.value,m=c.label,j=(0,u.BYU)().range([0,S]).domain((0,u.Wem)(t,h)).nice(),b=(0,u.BYU)().range([k,0]).domain((0,u.Wem)(t,f)).nice();return(0,s.jsxs)(l.ZP,{container:!0,children:[(0,s.jsxs)(l.ZP,{xs:12,item:!0,children:[(0,s.jsx)(P,{label:"X Axis",options:A,selectedAttr:n.index,onChangeAttribute:function(e){r(A[e.target.value])}}),(0,s.jsx)(P,{label:"Y Axis",options:A,selectedAttr:c.index,onChangeAttribute:function(e){d(A[e.target.value])}})]}),(0,s.jsx)(l.ZP,{xs:12,item:!0,children:(0,s.jsx)("svg",{width:700,height:500,children:(0,s.jsxs)("g",{transform:"translate(".concat(v,",").concat(C,")"),children:[(0,s.jsx)(p,{innerWidth:S,innerHeight:k,xScale:j,yScale:b,xAxisTitle:x,yAxisTitle:m}),(0,s.jsx)(g,{data:t,xScale:j,yScale:b,xValue:h,yValue:f,r:14})]})})})]})},D=function(e){var t=e.data;return(0,s.jsx)(w,{data:t})},N=a(7281),_=a.n(N),W=a(4332),T=a.n(W),M=function(e){var t=e.styles,a=e.posX,n=e.posY,r=e.rot;return(0,s.jsxs)("g",{className:"penaltyBox",style:{transform:"translate(".concat(a,",").concat(n,") rotate(").concat(r,"deg)")},children:[(0,s.jsx)("polyline",{points:"50,481.6 105,481.6 105,298.4 50,298.4 50,591.6 215,591.6 215,188.4 50,188.4",className:t.line}),(0,s.jsx)("circle",{cx:"160",cy:"390",className:t.dot,r:"2.5"}),(0,s.jsx)("path",{d:"M251.5,390 a91.5,91.5 0 0,0 -36.5,-73.4 M251.5,390 a91.5,91.5 0 0,1 -36.5,73.4",className:t.line}),(0,s.jsx)("polyline",{points:"50,426.6 35,426.6 35,353.4 50,353.4",className:t.line})]})},L=function(){return(0,s.jsxs)("g",{children:[(0,s.jsx)("path",{d:"M 0,0 h1150 v780 h-1150z",className:T().turf}),(0,s.jsx)("polyline",{points:"575,730 575,50 1100,50 1100,730 50,730 50,50 575,50",className:T().line}),(0,s.jsx)("circle",{cx:"575",cy:"390",className:T().line,r:"91.5"}),(0,s.jsx)("circle",{cx:"575",cy:"390",className:T().dot,r:"2.5"}),(0,s.jsx)("path",{d:"M 50 60 Q 60 60 60 50 M 1090 50 Q 1090 60 1100 60 M 50 720 Q 60 720 60 730 M 1090 730 Q 1090 720 1100 720",className:T().line}),(0,s.jsx)(M,{styles:T(),posX:0,posY:0,rot:0}),(0,s.jsx)(M,{styles:T(),posX:"1150px",posY:"780px",rot:180})]})},V=function(e){var t=e.dataTouch,a=(0,e.value)(t);return(0,s.jsx)("g",{children:a.map((function(e,t){return(0,s.jsxs)("g",{children:[(0,s.jsx)("rect",{width:350,height:680,x:t/3*1050+50,y:50,fill:"#88CBEB",opacity:e},e),(0,s.jsx)("text",{x:t/3*1050+50,y:50,fill:"white",children:e})]},t)}))})},Z=function(e){return[e["Def 3rd"]/e.Touches,e["Mid 3rd"]/e.Touches,e["Att 3rd"]/e.Touches]},q=new Map,O=function(e){e.data.map((function(e){q.set(e.Squad,e)}));var t=q.get("Liverpool"),a=Z;return(0,s.jsxs)("svg",{viewBox:"0 0 1150 780",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)(L,{}),(0,s.jsx)(V,{dataTouch:t,value:a})]})},B=function(e){var t=e.data;return(0,s.jsx)(O,{data:t})},F={byDistance:{pass:function(e){return function(e){return{name:"Pass Progress Distance Rate",value:function(){return e.PPrgDist/e.PTotDist},action:"Umpan Progresif"}}(e)},carry:function(e){return function(e){return{name:"Carry Progress Distance Rate",value:function(){return e.CPrgDist/e.CTotDist},action:"Dribble Progresif"}}(e)},topic:"byDistance",label:"Jarak",description:"still in construction"},byAction:{pass:function(e){return function(e){return{name:"Progressive Pass",value:function(){return e.PProg/e.PCmp},action:"Umpan Progresif"}}(e)},carry:function(e){return function(e){var t=e.Carries-e.CDis-e.CMis;return{name:"Progressive Carries",value:function(){return e.CProg/t},action:"Dribble Progresif"}}(e)},topic:"byAction",label:"Aksi",description:"still in construction"},byOneThird:{pass:function(e){return function(e){return{name:"Progressive Pass into 1/3 attacking field",value:function(){return e["P 1/3"]/e.PCmp},action:"Umpan Masuk 1/3 Lapangan Lawan"}}(e)},carry:function(e){return function(e){var t=e.Carries-e.CDis-e.CMis;return{name:"Progressive Carries",value:function(){return e["C 1/3"]/t},action:"Dribble Masuk 1/3 Lapangan Lawan"}}(e)},topic:"byOneThird",label:"1/3 Lapangan Lawan",description:"still in construction"},byPenaltyArea:{pass:function(e){return function(e){return{name:"Progressive Pass into penalty area",value:function(){return e.PPA/e.PCmp},action:"Umpan Masuk Kotak Penalti Lawan"}}(e)},carry:function(e){return function(e){var t=e.Carries-e.CDis-e.CMis;return{name:"Progressive Carries",value:function(){return e.CPA/t},multiplier:20,color:"#cd6a37",color2:"F4D36E",action:"Dribble Masuk Kotak Penalti Lawan"}}(e)},topic:"byPenaltyArea",label:"Masuk Penalti Lawan",description:"still in construction"}},E=function(e){var t=e.d,a=e.PassObject,n=e.yScale,r=e.fill,i=e.yValue,l=e.xOffset,c=e.width;return(0,s.jsx)("g",{transform:"translate(".concat(l,",0)"),className:t.Squad,children:(0,s.jsx)("rect",{className:"bar-chart-pass",width:c,height:n.bandwidth(),fill:r,children:(0,s.jsx)("title",{children:"".concat(i(t)," : ").concat(a(t).action)})},t.Squad+" "+a(t).name)},t.Squad)},U=function(e){var t=e.d,a=e.CarryObject,n=e.yScale,r=e.yValue,i=e.xOffset,l=e.fill,c=e.width;return(0,s.jsx)("g",{transform:"translate(".concat(i,",0) scale(-1,1)"),className:t.Squad,children:(0,s.jsx)("rect",{className:"bar-chart-carry",x:0,width:c,height:n.bandwidth(),fill:l,children:(0,s.jsx)("title",{children:"".concat(r(t)," : ").concat(a(t).action)})},t.Squad+" "+a(t).name)},t.Squad)},z=function(e){var t=e.data,a=e.PassObject,n=e.CarryObject,r=e.yScale,i=e.yValue,l=e.innerWidth,c=e.passWidthbar,o=e.carryWidthBar,u=l/2,d=u,h=u;return(0,s.jsx)("g",{className:"group-chart",children:t.map((function(e,t){return(0,s.jsxs)("g",{transform:"translate(0,".concat(r(i(e)),")"),id:" chart-".concat(e.Squad),className:"bar-chart",children:[(0,s.jsx)(E,{d:e,PassObject:a,totalWidth:l,yScale:r,yValue:i,xOffset:d,fill:"#8E6C8A",width:c?c[t]:0}),(0,s.jsx)(U,{d:e,CarryObject:n,totalWidth:l,yScale:r,yValue:i,xOffset:h,fill:"#B396AD",width:o?o[t]:0})]},"bar ".concat(e.Squad))}))})},Y=a(7669),G=a.n(Y),R=function(e){var t=e.topic,a=e.handleTopicChange;return(0,s.jsx)("div",{className:G()["dropdown-menu"],children:(0,s.jsxs)(m.Z,{variant:"standard",fullWidth:!0,children:[(0,s.jsx)(j.Z,{id:"select-topic-progression-label",children:"Perbandingan"}),(0,s.jsx)(b.Z,{labelId:"select-topic-progression-label",id:"select-topic",value:t,label:"Perbandingan",onChange:a,children:Object.keys(F).map((function(e){return(0,s.jsx)(y.Z,{value:F[e].topic,children:F[e].label},e)}))})]})})},J=function(e){var t=e.topic,a=e.items,n=e.handleTopicChange,r=e.title,i=e.note,c=e.source,o=e.children;return(0,s.jsxs)(l.ZP,{container:!0,children:[(0,s.jsxs)(l.ZP,{xs:12,item:!0,children:[(0,s.jsx)("div",{className:"full-width",children:(0,s.jsx)("h5",{className:"header-text",children:r})}),(0,s.jsx)("div",{className:"full-width",children:(0,s.jsx)(R,{items:a,topic:t,handleTopicChange:n})})]}),(0,s.jsx)(l.ZP,{xs:12,item:!0,children:o}),(0,s.jsx)(l.ZP,{xs:12,item:!0,children:(0,s.jsxs)("div",{className:"full-width",children:[(0,s.jsx)("span",{className:"footer-text footer-credit",children:c}),(0,s.jsx)("span",{className:"footer-text",children:i})]})})]})},X=function(e){var t=e.fill;e.position;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("path",{fill:t,stroke:t,d:"M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"}),(0,s.jsx)("path",{fill:t,stroke:t,d:"M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})]})},H=function(e){var t=e.fill;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("path",{fill:t,stroke:t,d:"M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}),(0,s.jsx)("path",{fill:t,stroke:t,d:"M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})]})},I=function(e){var t=e.fill;e.position;return(0,s.jsx)("path",{fill:t,strokeWidth:"1.4",stroke:t,d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})},K=function(e){var t=e.data,a=e.yScale,n=e.xOffsetR,r=e.xOffsetL,i=e.fixedPass,l=e.fixedCarry,c=e.xValueCarry,o=e.xValuePass,u=e.yValue,d=e.meanPass,h=e.meanCArry,x=e.upFill,f=e.dnFill,p=function(e,t,a){return e<t?(0,s.jsx)(H,{fill:f,post:a}):e>t?(0,s.jsx)(X,{fill:x,post:a}):(0,s.jsx)(I,{fill:"grey",post:a})},g=function(e){return"translate(".concat(i(e)+n,",").concat(a(u(e)),")")},m=function(e){return"translate(".concat(-l(e)+r,",").concat(a(u(e)),")")};return(0,s.jsxs)("g",{className:"indicator-group",opacity:0,children:[(0,s.jsx)("g",{className:"arrow-indicator-pass",children:t.map((function(e,t){return(0,s.jsx)("g",{transform:g(e),children:p(Number(o(e).toFixed(3)),d)},"".concat(t,"-indicator-pass"))}))}),(0,s.jsx)("g",{className:"arrow-indicator-carry",children:t.map((function(e,t){return(0,s.jsx)("g",{transform:m(e)+" scale(-1,1)",children:p(Number(c(e).toFixed(3)),h)},"".concat(t,"-indicator-carry"))}))})]})},Q=function(e){var t=e.d,a=e.yScale,n=e.yValue,r=e.r;return(0,s.jsxs)("g",{transform:"translate(0,".concat(2.5*r,")"),children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:"".concat(t.Squad.replace(/\s/g,""),"-bar"),width:r,height:r,children:(0,s.jsx)("image",{href:"https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/".concat(encodeURIComponent(t.Squad),".png"),x:"0",y:"0",width:2*r,height:2*r})})}),(0,s.jsx)("circle",{cx:0,cy:a(n(t)),fill:"url(#".concat(t.Squad.replace(/\s/g,""),"-bar)"),r:r,children:(0,s.jsx)("title",{children:t.Squad})})]})},$=function(e){var t=e.xCenter,a=e.fill,n=e.strokeWidth,r=void 0===n?"1":n,i=e.handleSort;return(0,s.jsxs)("g",{className:"axis-label pass-axis-label",children:[(0,s.jsx)("text",{dx:-t/2,dy:"-1em",fill:a,textAnchor:"end",fontWeight:500,cursor:"pointer",onClick:function(){return i.carry()},children:"Carries"}),(0,s.jsx)("line",{x1:0,x2:-t,stroke:a,strokeWidth:r})]})},ee=function(e){var t=e.xCenter,a=e.fill,n=e.strokeWidth,r=void 0===n?"1":n,i=e.handleSort;return(0,s.jsxs)("g",{className:"axis-label carry-axis-label",children:[(0,s.jsx)("text",{dx:t/2,dy:"-1em",textAnchor:"start",fill:a,fontWeight:500,cursor:"pointer",onClick:function(){return i.pass()},children:"Passing"}),(0,s.jsx)("line",{x1:0,x2:t,stroke:a,strokeWidth:r})]})},te=function(e){var t=e.rEpl;return(0,s.jsxs)("g",{className:"epl-logo",children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:"epl-logo",width:t,height:t,children:(0,s.jsx)("image",{href:"https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/premier-league.png",x:"0",y:"0",width:2*t,height:2*t})})}),(0,s.jsx)("circle",{cx:0,cy:0,r:t,fill:"url(#epl-logo)"})]})},ae=function(e){var t=e.data,a=e.yScale,n=e.yValue,r=e.xCenter,i=e.r,l=e.rEpl,c=e.fillPass,o=e.fillCaries,u=e.fontSize,d=e.strokeWidth,h=e.handleSort;return(0,s.jsxs)("g",{transform:"translate(".concat(r,",").concat(2*-i,")"),className:"Labels",children:[(0,s.jsxs)("g",{transform:"translate(0,".concat(i,")"),className:"text-line",children:[(0,s.jsx)($,{xCenter:r,fill:o,fontSize:u,strokeWidth:d,handleSort:h}),(0,s.jsx)(ee,{xCenter:r,fill:c,fontSize:u,strokeWidth:d,handleSort:h})]}),(0,s.jsxs)("g",{className:"epl-squad-logo",children:[t.map((function(e,t){return(0,s.jsx)(Q,{yScale:a,yValue:n,d:e,r:i},"".concat(t,"-epl-squad-logo"))})),(0,s.jsx)(te,{rEpl:l})]})]})},ne=function(e){var t=e.data,a=e.yScale,n=e.xScaleCarry,r=e.xScalePass,i=e.xValueCarry,l=e.xValuePass,c=e.yValue,o=e.meanPass,u=e.meanCArry,d=e.innerWidth,h=e.handleSort,x=d/2,f=x+7,p=x-7;return(0,s.jsxs)("g",{className:"axis-group",children:[(0,s.jsx)(ae,{data:t,yScale:a,yValue:c,xCenter:x,r:18,rEpl:36,fillPass:"#8E6C8A",fillCaries:"#B396AD",strokeWidth:"2.5px",handleSort:h}),(0,s.jsx)(K,{data:t,yScale:a,xOffsetR:f,xOffsetL:p,fixedPass:function(e){return r(l(e))},fixedCarry:function(e){return n(i(e))},xValueCarry:i,xValuePass:l,yValue:c,meanPass:o,meanCArry:u,upFill:"#ABC22D",dnFill:"#C22719"})]})},re=function(e){var t=e.data,a=(0,o.useState)("byDistance"),i=a[0],l=a[1],c=(0,o.useState)(t),d=c[0],h=c[1],x={top:76,right:16,bottom:0,left:16},f=750-x.left-x.right,p=900-x.top-x.bottom,g=function(e){return e.Squad},m=function(e){return F[i].pass(e).value()},j=function(e){return F[i].carry(e).value()},b=(0,u.BYU)().range([0,f/2.5]).domain([0,(0,u.Fp7)(d,m)]).nice(),y=(0,u.BYU)().range([0,f/2.5]).domain([0,(0,u.Fp7)(d,j)]).nice(),P=(0,u.tiA)().range([0,p]).domain(d.map(g)).padding(.55),C=Number((0,u.J69)(d,m).toFixed(3)),v=Number((0,u.J69)(d,j).toFixed(3)),S={carry:function(){return h(t.slice().sort((function(e,t){return(0,u.$1i)(j(e),j(t))})))},pass:function(){return h(t.slice().sort((function(e,t){return(0,u.$1i)(m(e),m(t))})))}},k=[],A=[];return(0,o.useEffect)((function(){(0,u.Ys)(".indicator-group").attr("opacity",0).transition().duration(500).delay(200).attr("opacity",1),(0,u.td_)(".bar-chart-pass").data(d).transition().duration(600).ease(u.mfJ).attr("width",(function(e){return k.push(b(m(e))),b(m(e))})),(0,u.td_)(".bar-chart-carry").data(d).transition().duration(600).ease(u.mfJ).attr("width",(function(e){return A.push(y(j(e))),y(j(e))})),n=k,r=A})),(0,s.jsx)(J,{topic:i,items:F,handleTopicChange:function(e){return l(e.target.value)},title:"Perbandingan Antara Passing Dan Carries Progresif ",note:"Pebandingan ditinjau dari sentuhan saat menggiring bola(Carries) dan sentuhan saat menerima umpan (Passing)",source:"Advanced data provided by StatsBomb Presented by fbref.com",innerWidth:f,children:(0,s.jsx)("svg",{viewBox:"0 0 ".concat(750," ").concat(900),preserveAspectRatio:"xMidYMid meet",children:(0,s.jsxs)("g",{transform:"translate(".concat(x.left,",").concat(x.top,")"),children:[(0,s.jsx)(z,{data:d,PassObject:F[i].pass,CarryObject:F[i].carry,yScale:P,yValue:g,margin:x,innerWidth:f,passWidthbar:n,carryWidthBar:r}),(0,s.jsx)(ne,{data:d,yScale:P,xScaleCarry:y,xScalePass:b,xValuePass:m,xValueCarry:j,yValue:g,meanPass:C,meanCArry:v,innerWidth:f,innerHeight:p,handleSort:S})]})})})},se=function(e){var t=e.data;return(0,s.jsx)(re,{data:t})},ie="white",le=function(){var e=function(){var e=(0,o.useState)(null),t=e[0],a=e[1],n=function(e){return e["90s"]=+e["90s"],e.Att=+e.Att,e.Cmp=+e.Cmp,e["Cmp%"]=+e["Cmp%"],e.TotDist=+e.TotDist,e.PrgDist=+e.PrgDist,e.Prog=+e.Prog,e.ScaPassLive=+e.ScaPassLive,e.GcaPassLive=+e.GcaPassLive,e.SCA=+e.SCA,e.GCA=+e.GCA,e.DrbSucc=+e.DrbSucc,e.DrbAtt=+e.DrbAtt,e.Poss=+e.Poss,e};return(0,o.useEffect)((function(){(0,u.gyn)("https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/7aa6e156d6d3a434d6b178d3f142edc10b46f976/progress%2520possession.csv",n).then((function(e){a(e)}))}),[]),t}(),t=function(){var e=(0,o.useState)(null),t=e[0],a=e[1],n=function(e){return e["90s"]=+e["90s"],e.Touches=+e.Touches,e["Def 3rd"]=+e["Def 3rd"],e["Mid 3rd"]=+e["Mid 3rd"],e["Att 3rd"]=+e["Att 3rd"],e["Att Pen"]=+e["Att Pen"],e.Carries=+e.Carries,e.CarrTotDist=+e.CarrTotDist,e.CarrPrgDist=+e.CarrPrgDist,e.CarrProg=+e.CarrProg,e["Carr1/3"]=+e["Carr1/3"],e.CPA=+e.CPA,e.Poss=+e.Poss,e};return(0,o.useEffect)((function(){(0,u.gyn)("https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/touchesCarries.csv",n).then((function(e){a(e)}))}),[]),t}(),a=function(){var e=(0,o.useState)(null),t=e[0],a=e[1],n=function(e){return["Squad","# Pl","Poss","90s","Carries","CTotDist","CPrgDist","CProg","C 1/3","CPA","CMis","CDis","DSucc","DAtt","DPassed","PCmp","PAtt","PTotDist","PPrgDist","PProg","P 1/3","PPA","CrsPA","SCA","SCADrib","SCAPassLive","SCAPassDead","GCA","GCADrib","GCAPassLive","GCAPassDead","xG","Pts"].map((function(t){return"Squad"!==t?e[t]=+e[t]:e[t]})),e};return(0,o.useEffect)((function(){(0,u.gyn)("https://gist.githubusercontent.com/ajie31/049033f2ee3f8b4119e937a754b6f656/raw/processedPassCarries18thWeek.csv",n).then((function(e){console.log(e),a(e)}))}),[]),t}();return e&&t&&a?(0,s.jsx)(i.Z,{maxWidth:"lg",children:(0,s.jsxs)(l.ZP,{spacing:2,container:!0,children:[(0,s.jsx)(l.ZP,{item:!0,xs:12,md:12,children:(0,s.jsx)(c.Z,{style:{backgroundColor:ie,height:"200px",width:"100%"}})}),(0,s.jsxs)(l.ZP,{item:!0,xs:12,md:8,children:[(0,s.jsx)(c.Z,{style:{backgroundColor:ie,height:"auto",width:"100%",marginBottom:"1rem"},children:(0,s.jsx)(se,{data:a})}),(0,s.jsx)(c.Z,{style:{backgroundColor:ie,height:"auto",width:"100%",marginBottom:"1rem"},children:(0,s.jsx)(D,{data:e})}),(0,s.jsx)(c.Z,{style:{backgroundColor:ie,height:"auto",width:"100%"},children:(0,s.jsx)(B,{data:t})})]}),(0,s.jsx)(l.ZP,{item:!0,xs:12,md:4,children:(0,s.jsxs)(c.Z,{style:{backgroundColor:ie,width:"100%",padding:"1rem"},children:[(0,s.jsx)("h5",{className:_().keterangan,children:"Keterangan"}),(0,s.jsxs)("ul",{className:_()["konten-keterangan-ul"],children:[(0,s.jsxs)("li",{className:_()["konten-keterangan-li"],children:[(0,s.jsx)("span",{children:"Umpan Sukses p90"}),(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:(0,s.jsx)("p",{children:"Merupakan operan yang sukses terhadap sesama member satu tim di setiap 90 menit pertandingan."})})})]}),(0,s.jsxs)("li",{className:_()["konten-keterangan-li"],children:[(0,s.jsx)("span",{children:"Ratio Jarak Umpan Progressif p90"}),(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:"Merupakan rasio dari total jarak pergerakan bola dari aksi umpan sukses setiap 90 menit pertandingan dan total jarak pergerakan bola dari umpan progresif setiap 90 menit pertandingan."}),(0,s.jsx)("p",{children:"Umpan progresif, merupakan umpan sukses dimana pergerakan bola mendekati gawang lawan."})]})})]})]})]})})]})}):(0,s.jsx)("pre",{children:"Loading..."})},ce=function(){return(0,s.jsx)(le,{})}},7669:function(e){e.exports={"dropdown-menu":"barChart_dropdown-menu__9gXHz","bar-chart":"barChart_bar-chart__YeG8k","arrow-indicator-group":"barChart_arrow-indicator-group__eE5wa",indicator:"barChart_indicator__ACZKT"}},7281:function(e){e.exports={keterangan:"football_keterangan__WD_Lh","konten-keterangan-ul":"football_konten-keterangan-ul__Qcdpv","konten-keterangan-li":"football_konten-keterangan-li__ystoK"}},4332:function(e){e.exports={turf:"footballField_turf__24qim",line:"footballField_line__9hzsT",dot:"footballField_dot__9AIHO"}}},function(e){e.O(0,[326,854,741,774,888,179],(function(){return t=8513,e(e.s=t);var t}));var t=e.O();_N_E=t}]);