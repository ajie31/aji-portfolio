(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{3080:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/football_progression",function(){return n(1494)}])},1494:function(a,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _a}});var t,r,i=n(5893),s=n(7948),l=n(6886),c=n(6919),o=n(7294),d=n(8588),u=function(a){var e=a.innerWidth,n=a.innerHeight,t=a.xScale,r=a.yScale,s=a.xAxisTitle,l=a.yAxisTitle;return(0,i.jsxs)("g",{className:"axis-group",children:[(0,i.jsxs)("g",{transform:"translate(".concat(0,",",0,")"),children:[t.ticks(5).map((function(a){return(0,i.jsxs)("g",{transform:"translate(".concat(t(a),",",0,")"),children:[(0,i.jsx)("line",{stroke:"black",strokeWidth:".5",y1:n,y2:7+n}),(0,i.jsx)("text",{className:"axis-note",y:n+15,dy:".71em",style:{textAnchor:"middle",fontSize:".8rem"},children:a})]},a)})),(0,i.jsx)("text",{className:"axis-label x-axis-title",x:e/2,y:n+20,dy:"2.84em",textAnchor:"middle",children:s})]}),(0,i.jsxs)("g",{transform:"translate(".concat(0,",",0,")"),children:[r.ticks(3).map((function(a){return(0,i.jsxs)("g",{transform:"translate(".concat(0,",").concat(r(a),")"),children:[(0,i.jsx)("line",{stroke:"black",strokeWidth:".5",x2:e}),(0,i.jsx)("text",{className:"axis-note",dx:"-.71em",dy:".32em",style:{textAnchor:"end",fontSize:".8rem"},children:a})]},a)})),(0,i.jsx)("text",{transform:"rotate(-90)",className:"axis-label y-axis-title",x:-n/2,y:-50,textAnchor:"middle",children:l})]})]})},x=function(a){var e=a.data,n=(a.yScale,a.xScale,a.xValue,a.yValue,a.r);return(0,i.jsx)("g",{children:e.map((function(a,e){return(0,i.jsxs)("g",{children:[(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:a.Squad.replace(/\s/g,""),width:n,height:n,children:(0,i.jsx)("image",{href:"https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/".concat(encodeURIComponent(a.Squad),".png"),x:"0",y:"0",width:2*n,height:2*n})})}),(0,i.jsx)("circle",{className:"mark-result",cx:0,cy:0,fill:"url(#".concat(a.Squad.replace(/\s/g,""),")"),r:n,children:(0,i.jsx)("title",{children:a.Squad})})]},e)}))})},h={byDistance:{pass:function(a){return function(a){return{name:"Pass Progress Distance Rate",value:function(){return a.PPrgDist/a.PTotDist},action:"Umpan Progresif"}}(a)},carry:function(a){return function(a){return{name:"Carry Progress Distance Rate",value:function(){return a.CPrgDist/a.CTotDist},action:"Dribble Progresif"}}(a)},topic:"byDistance",label:"Jarak",description:"Jarak pergerakan bola yang bergerak mendekati gawang lawan."},byAction:{pass:function(a){return function(a){return{name:"Progressive Pass",value:function(){return a.PProg/a.PCmp},action:"Umpan Progresif"}}(a)},carry:function(a){return function(a){var e=a.Carries-a.CDis-a.CMis;return{name:"Progressive Carries",value:function(){return a.CProg/e},action:"Dribble Progresif"}}(a)},topic:"byAction",label:"Sentuhan",description:"Semua semua sentuhan pada bola yang mengakibatkan bola tersebut bergerak mendekati gawang lawan."},byOneThird:{pass:function(a){return function(a){return{name:"Progressive Pass into 1/3 attacking field",value:function(){return a["P 1/3"]/a.PCmp},action:"Umpan Masuk 1/3 Lapangan Lawan"}}(a)},carry:function(a){return function(a){var e=a.Carries-a.CDis-a.CMis;return{name:"Progressive Carries",value:function(){return a["C 1/3"]/e},action:"Dribble Masuk 1/3 Lapangan Lawan"}}(a)},topic:"byOneThird",label:"1/3 Lapangan Lawan",description:"Sentuhan bola yang masuk ke 1/3 lapangan lawan."},byPenaltyArea:{pass:function(a){return function(a){return{name:"Progressive Pass into penalty area",value:function(){return a.PPA/a.PCmp},action:"Umpan Masuk Kotak Penalti Lawan"}}(a)},carry:function(a){return function(a){var e=a.Carries-a.CDis-a.CMis;return{name:"Progressive Carries",value:function(){return a.CPA/e},multiplier:20,color:"#cd6a37",color2:"F4D36E",action:"Dribble Masuk Kotak Penalti Lawan"}}(a)},topic:"byPenaltyArea",label:"Masuk Penalti Lawan",description:"Sentuhan bola yang masuk kotak penalti lawan."}},m={passing:{xValue:function(a){return a.SCAPassLive/a["90s"]},yValue:function(a){return a.GCAPassLive/a["90s"]},xLabel:"SCA Passing",yLabel:"GCA Passing",description:"SCA  keterlibatan dari umpan dalam sebuah permainan terbuka yang menghasilkan tembakan, GCA keterlibatan umpan dalam sebuah permainan terbuka yang menghasilkan goal."},dribling:{xValue:function(a){return a.SCADrib/a["90s"]},yValue:function(a){return a.GCADrib/a["90s"]},xLabel:"SCA Dribling",yLabel:"GCA Dribling",description:"SCA  keterlibatan dari sentuhan menggiring bola dalam sebuah permainan terbuka yang menghasilkan tembakan, GCA keterlibatan sentuhan menggiring bola dalam sebuah permainan terbuka yang menghasilkan goal."}},g={Short:{value:function(a){return a.Short/(a.Short+a.Medium+a.Long)},desc:"Umpan pada jarak 4,57m - 13,72m",label:"Short",description:"Umpan dengan jarak 4,57m hingga 13,71m"},Medium:{value:function(a){return a.Medium/(a.Short+a.Medium+a.Long)},desc:"Umpan pada jarak 12,72m - 27,4m",label:"Medium",description:"Umpan dengan jarak 13,71m hingga 27,43m"},Long:{value:function(a){return a.Long/(a.Short+a.Medium+a.Long)},desc:"Umpan pada jarak lebih dari 2,43m",label:"Long",description:"Umpan dengan jarak lebih dari 27,43m"}},f=n(3454),p=n(6420),j=function(a){var e=a.handleChangeTopic,n=a.topic;return(0,i.jsxs)(f.Z,{color:"primary",value:n,exclusive:!0,onChange:e,children:[(0,i.jsx)(p.Z,{value:"passing",disabled:"passing"===n,children:"Passing"}),(0,i.jsx)(p.Z,{value:"dribling",disabled:"dribling"===n,children:"Dribling"})]})},y=function(a){var e=a.description;return(0,i.jsx)("div",{className:"full-width",children:(0,i.jsx)("p",{className:"keterangan-center",children:e})})},b=function(a){var e=a.children,n=a.options,t=a.topic,r=a.handleChangeTopic,s=a.title,c=a.note,o=a.source,d=a.description;return(0,i.jsxs)(l.ZP,{spacing:2,container:!0,children:[(0,i.jsx)(l.ZP,{xs:12,item:!0,children:(0,i.jsx)("h5",{className:"header-text",children:s})}),(0,i.jsx)(l.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:(0,i.jsx)(j,{handleChangeTopic:r,topic:t,options:n})}),(0,i.jsx)(l.ZP,{xs:12,item:!0,children:(0,i.jsx)(y,{description:d})}),(0,i.jsx)(l.ZP,{xs:12,item:!0,children:e}),(0,i.jsx)(l.ZP,{xs:12,item:!0,children:(0,i.jsxs)("div",{className:"full-width",children:[(0,i.jsx)("span",{className:"footer-text footer-credit",children:o}),(0,i.jsx)("span",{className:"footer-text",children:c})]})})]})},S=25,P=100,k=700-P-20,C=500-S-100,v=function(a){var e=a.data,n=(0,o.useState)("passing"),t=n[0],r=n[1],s=m[t].xValue,l=m[t].xLabel,c=m[t].yValue,h=m[t].yLabel,g=m[t].description,f=(0,d.BYU)().range([0,k]).domain((0,d.Wem)(e,s)).nice(),p=(0,d.BYU)().range([C,0]).domain((0,d.Wem)(e,c));return(0,o.useEffect)((function(){(0,d.td_)(".mark-result").data(e).transition().duration(700).delay((function(a,e){return 5*e})).ease(d.mfJ).attr("cy",(function(a){return p(c(a))})).attr("cx",(function(a){return f(s(a))}))})),(0,i.jsx)(b,{options:["passing","dribling"],topic:t,handleChangeTopic:function(a,e){r(e)},title:"Hasil Dari Permainan Open Play",note:"Pebandingan ditinjau dari sentuhan saat menggiring bola(Carries) dan sentuhan saat menerima umpan (Passing)",source:"Advanced data provided by StatsBomb Presented by fbref.com",description:g,children:(0,i.jsx)("svg",{viewBox:"0 0 ".concat(700," ").concat(500),preserveAspectRatio:"xMidYMid meet",children:(0,i.jsxs)("g",{transform:"translate(".concat(P,",").concat(S,")"),children:[(0,i.jsx)(u,{innerWidth:k,innerHeight:C,xScale:f,yScale:p,xAxisTitle:l,yAxisTitle:h}),(0,i.jsx)(x,{data:e,xScale:f,yScale:p,xValue:s,yValue:c,r:14})]})})})},A=function(a){var e=a.data;return(0,i.jsx)(v,{data:e})},N=function(a){var e=a.xScale,n=a.innerHeight;a.fill;return(0,i.jsx)("g",{transform:"translate(".concat(0,",",0,")"),children:e.domain().map((function(a){return(0,i.jsxs)("g",{transform:"translate(".concat(e(a),",",95,")"),children:[(0,i.jsx)("line",{stroke:"black",strokeWidth:".5",y1:n,y2:-95}),(0,i.jsx)("text",{className:"axis-note",y:n+15,dy:".71em",style:{textAnchor:"middle"},children:a})]},a)}))})},_=function(a){a.innerWidth;var e=a.innerHeight,n=a.xScale;a.yScale,a.xAxisTitle,a.yAxisTitle;return(0,i.jsx)("g",{children:(0,i.jsx)(N,{xScale:n,innerHeight:e,fill:"black"})})},w=n(4924),V=n(9136),q=n(852),W=n(44),Z=function(a){var e=a.data,n=a.selectedSquad,t=a.onChangeSquadHandler;return(0,i.jsx)("div",{children:(0,i.jsx)(V.Z,{value:n,onChange:t,variant:"scrollable",scrollButtons:!0,"aria-label":"visible arrows tabs example",allowScrollButtonsMobile:!0,sx:(0,w.Z)({},"& .".concat(q.Z.scrollButtons),{"&.Mui-disabled":{opacity:.3}}),children:e.map((function(a,e){return(0,i.jsx)(W.Z,{className:"menu-text",value:a.Squad,label:a.Squad},e)}))})})},L=function(a){var e=a.xAxisRows,n=a.dataProcessPassXValue;return(0,i.jsx)("div",{className:"full-width",children:(0,i.jsxs)("p",{className:"keterangan-left",children:["Macam-macam umpan berdasarkan jarak dan dan tinggi pergerakan bola ",e.map((function(a){return(0,i.jsxs)("span",{children:[(0,i.jsx)("strong",{children:(0,i.jsx)("i",{children:a})})," ".concat(n[a].description,". ")]},a)}))]})})},M=function(a){var e=a.children,n=a.selectedSquad,t=a.data,r=a.xAxisRows,s=a.dataProcessPassXValue,c=a.onChangeSquadHandler,o=a.title,d=a.source,u=a.note;return(0,i.jsxs)(l.ZP,{container:!0,children:[(0,i.jsx)(l.ZP,{xs:12,item:!0,children:(0,i.jsx)("h5",{className:"header-text",children:o})}),(0,i.jsx)(l.ZP,{xs:12,item:!0,children:(0,i.jsx)(L,{xAxisRows:r,dataProcessPassXValue:s})}),(0,i.jsx)(l.ZP,{xs:12,item:!0,children:(0,i.jsx)(Z,{data:t,selectedSquad:n,onChangeSquadHandler:c})}),(0,i.jsx)(l.ZP,{xs:12,item:!0,children:e}),(0,i.jsx)(l.ZP,{xs:12,item:!0,children:(0,i.jsxs)("div",{className:"full-width",children:[(0,i.jsx)("span",{className:"footer-text footer-credit",children:d}),(0,i.jsx)("span",{className:"footer-text",children:u})]})})]})},D=n(4358),O=function(a){var e=a.selectedData,n=a.selectedSquad,t=a.xScale,r=a.yScaleObj,s=a.yValue,l=a.selectedProps,c=a.styles,d=0,u=0;return e?(0,i.jsx)("g",{className:"selected-squad",children:(0,i.jsxs)("g",{className:"node n-selected-".concat(n),opacity:1,children:[t.domain().map((function(a,x){return(0,i.jsxs)(o.Fragment,{children:[x>0?(0,i.jsx)("line",{className:"".concat(c["animation-line"]," l-").concat(n),x1:d,y1:u,x2:t(a),y2:r[a](s(a,e)),stroke:l.color,strokeWidth:l.stroke},r[a](s(a,e))):null,d=t(a),u=r[a](s(a,e))]},x)})),t.domain().map((function(a,l){return(0,i.jsx)("g",{children:(0,i.jsx)(D.Z,{title:"".concat(Number(s(a,e).toFixed(1))),open:!0,children:(0,i.jsx)("circle",{className:c["animated-circle"],cx:t(a),cy:r[a](s(a,e)),fill:"url(#".concat(n.replace(/\s/g,""),"_pass)")},r[a](s(a,e)))})},l+"selected")}))]})}):null},T=function(a){var e=a.data,n=a.selectedSquad,t=a.xScale,r=a.yScaleObj,s=a.yValue,l=a.r,c=0,d=0;return e.map((function(a,e){return(0,i.jsxs)("g",{className:"node n-".concat(a.Squad),opacity:n?.4:1,children:[t.domain().map((function(e,n){return(0,i.jsxs)(o.Fragment,{children:[n>0?(0,i.jsx)("line",{className:"line l-".concat(a.Squad),x1:c,y1:d,x2:t(e),y2:r[e](s(e,a)),stroke:"grey",strokeWidth:.5}):null,c=t(e),d=r[e](s(e,a))]},n)})),t.domain().map((function(n){return(0,i.jsx)(o.Fragment,{children:(0,i.jsx)("circle",{className:"mark-pass-type",cx:t(n),cy:r[n](s(n,a)),fill:"url(#".concat(a.Squad.replace(/\s/g,""),"_pass)"),r:l,children:(0,i.jsx)("title",{children:a.Squad})},e)},n)}))]},e+" "+a.Squad)}))},B=n(9292),F=n.n(B),U=function(a){var e=a.data,n=(a.yScale,a.xScale),t=a.yValue,r=a.yScaleObj,s=a.r,l=a.selectedProps,c=a.selectedData,o=c?c.Squad:null;return(0,i.jsxs)("g",{className:"texture-pass-type-group",children:[e.map((function(a,e){return(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:a.Squad.replace(/\s/g,"")+"_pass",width:1,height:1,children:(0,i.jsx)("image",{href:"https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/".concat(encodeURIComponent(a.Squad),".png"),className:o===a.Squad?F()["animated-skin"]:"static-texture",width:2*(o===a.Squad?19:s),height:2*(o===a.Squad?19:s)})})},e)})),(0,i.jsx)(T,{data:e,selectedSquad:o,xScale:n,yScaleObj:r,yValue:t,r:s}),(0,i.jsx)(O,{selectedData:c,selectedSquad:o,xScale:n,yScaleObj:r,yValue:t,selectedProps:l,styles:F()})]})},E=50,H=20,R=700-H- -270,z=490-E-150,K=Object.keys(g),G=function(a,e){return g[a].value(e)},Y=(0,d.tiA)().range([0,R]).domain(K).paddingOuter(.2),J=(0,d.p2C)().range([z,0]),X={radius:15,stroke:3.7,color:"#8e6c8a"},I=function(a){var e,n=a.data,t=(0,o.useState)("Arsenal"),r=t[0],s=t[1],l=[];K.map((function(a){return n.map((function(n){return n.Squad===r&&(e=n),l.push(G(a,n))}))}));var c={Short:(0,d.p2C)().range([z,0]).domain((0,d.Wem)(n,g.Short.value)),Medium:(0,d.p2C)().range([z,0]).domain((0,d.Wem)(n,g.Medium.value)),Long:(0,d.p2C)().range([z,0]).domain((0,d.Wem)(n,g.Long.value))};J.domain((0,d.Wem)(l));return(0,i.jsx)(M,{selectedSquad:r,xAxisRows:K,dataProcessPassXValue:g,data:n,onChangeSquadHandler:function(a,e){s(e)},title:"Jenis Umpan per 90 Menit",note:"Pebandingan ditinjau dari sentuhan saat menggiring bola(Carries) dan sentuhan saat menerima umpan (Passing)",source:"Advanced data provided by StatsBomb Presented by fbref.com",children:(0,i.jsx)("svg",{viewBox:"0 0 ".concat(700," ").concat(490),preserveAspectRatio:"xMidYMid meet",children:(0,i.jsxs)("g",{transform:"translate(".concat(H,",").concat(E,")"),children:[(0,i.jsx)(_,{innerWidth:R,innerHeight:z,xScale:Y,yScale:J,xAxisTitle:"Umpan Sukses p90",yAxisTitle:"ratio umpan progressif p90"}),(0,i.jsx)(U,{data:n,xScale:Y,yScale:J,yScaleObj:c,yValue:G,r:7.14,selectedProps:X,selectedSquad:r,selectedData:e})]})})})},$=function(a){var e=a.data;return(0,i.jsx)(I,{data:e})},Q=function(a){var e=a.d,n=a.PassObject,t=a.yScale,r=a.fill,s=a.yValue,l=a.xOffset,c=a.width;return(0,i.jsx)("g",{transform:"translate(".concat(l,",0)"),className:e.Squad,children:(0,i.jsx)("rect",{className:"bar-chart-pass",width:c,height:t.bandwidth(),fill:r,children:(0,i.jsx)("title",{children:"".concat(s(e)," : ").concat(n(e).action)})},e.Squad+" "+n(e).name)},e.Squad)},aa=function(a){var e=a.d,n=a.CarryObject,t=a.yScale,r=a.yValue,s=a.xOffset,l=a.fill,c=a.width;return(0,i.jsx)("g",{transform:"translate(".concat(s,",0) scale(-1,1)"),className:e.Squad,children:(0,i.jsx)("rect",{className:"bar-chart-carry",x:0,width:c,height:t.bandwidth(),fill:l,children:(0,i.jsx)("title",{children:"".concat(r(e)," : ").concat(n(e).action)})},e.Squad+" "+n(e).name)},e.Squad)},ea=function(a){var e=a.data,n=a.PassObject,t=a.CarryObject,r=a.yScale,s=a.yValue,l=a.innerWidth,c=a.passWidthbar,o=a.carryWidthBar,d=l/2,u=d,x=d;return(0,i.jsx)("g",{className:"group-chart",children:e.map((function(a,e){return(0,i.jsxs)("g",{transform:"translate(0,".concat(r(s(a)),")"),id:" chart-".concat(a.Squad),className:"bar-chart",children:[(0,i.jsx)(Q,{d:a,PassObject:n,totalWidth:l,yScale:r,yValue:s,xOffset:u,fill:"#8E6C8A",width:c?c[e]:0}),(0,i.jsx)(aa,{d:a,CarryObject:t,totalWidth:l,yScale:r,yValue:s,xOffset:x,fill:"#B396AD",width:o?o[e]:0})]},"bar ".concat(a.Squad))}))})},na=n(7281),ta=n.n(na),ra=n(7669),ia=n.n(ra),sa=n(4054),la=n(3117),ca=n(9840),oa=function(a){var e=a.topic,n=a.handleTopicChange,t=a.dataProcess;return(0,i.jsx)("div",{className:ia()["dropdown-menu"],children:(0,i.jsx)(sa.Z,{variant:"standard",fullWidth:!0,children:(0,i.jsx)(la.Z,{labelId:"select-topic-progression-label",id:"select-topic",value:e,label:"Perbandingan",onChange:n,children:Object.keys(t).map((function(a){return(0,i.jsx)(ca.Z,{value:t[a].topic,children:t[a].label},a)}))})})})},da=function(a){var e=a.items,n=a.topic,t=a.handleTopicChange,r=a.topicKeys,s=a.description;return(0,i.jsxs)("div",{className:"full-width",children:[(0,i.jsx)("h5",{className:ta().keterangan,children:"Keterangan"}),(0,i.jsx)("div",{className:"full-width",style:{marginTop:"1px"},children:(0,i.jsx)(oa,{items:e,topic:n,handleTopicChange:t,topicKeys:r,dataProcess:h})}),(0,i.jsx)("div",{className:"full-width",children:(0,i.jsx)("p",{className:ta()["keterangan-center"],children:s})})]})},ua=function(a){var e=a.topic,n=a.items,t=a.handleTopicChange,r=a.title,s=a.note,c=a.source,o=a.children,d=a.topicKeys,u=a.description;return(0,i.jsxs)(l.ZP,{container:!0,justifyContent:"center",children:[(0,i.jsx)(l.ZP,{xs:12,item:!0,children:(0,i.jsx)("h5",{className:"header-text",children:r})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsx)(da,{items:n,topic:e,handleTopicChange:t,topicKeys:d,description:u})}),(0,i.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,i.jsx)(l.ZP,{xs:12,item:!0,children:o}),(0,i.jsx)(l.ZP,{xs:12,item:!0,children:(0,i.jsxs)("div",{className:"full-width",children:[(0,i.jsx)("span",{className:"footer-text footer-credit",children:c}),(0,i.jsx)("span",{className:"footer-text",children:s})]})})]})]})},xa=function(a){var e=a.fill;a.position;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{fill:e,stroke:e,d:"M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"}),(0,i.jsx)("path",{fill:e,stroke:e,d:"M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})]})},ha=function(a){var e=a.fill;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{fill:e,stroke:e,d:"M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}),(0,i.jsx)("path",{fill:e,stroke:e,d:"M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})]})},ma=function(a){var e=a.fill;a.position;return(0,i.jsx)("path",{fill:e,strokeWidth:"1.4",stroke:e,d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"})},ga=function(a){var e=a.data,n=a.yScale,t=a.xOffsetR,r=a.xOffsetL,s=a.fixedPass,l=a.fixedCarry,c=a.xValueCarry,o=a.xValuePass,d=a.yValue,u=a.meanPass,x=a.meanCArry,h=a.upFill,m=a.dnFill,g=function(a,e,n){return a<e?(0,i.jsx)(ha,{fill:m,post:n}):a>e?(0,i.jsx)(xa,{fill:h,post:n}):(0,i.jsx)(ma,{fill:"grey",post:n})},f=function(a){return"translate(".concat(s(a)+t,",").concat(n(d(a)),")")},p=function(a){return"translate(".concat(-l(a)+r,",").concat(n(d(a)),")")};return(0,i.jsxs)("g",{className:"indicator-group",opacity:0,children:[(0,i.jsx)("g",{className:"arrow-indicator-pass",children:e.map((function(a,e){return(0,i.jsx)("g",{transform:f(a),children:g(Number(o(a).toFixed(3)),u)},"".concat(e,"-indicator-pass"))}))}),(0,i.jsx)("g",{className:"arrow-indicator-carry",children:e.map((function(a,e){return(0,i.jsx)("g",{transform:p(a)+" scale(-1,1)",children:g(Number(c(a).toFixed(3)),x)},"".concat(e,"-indicator-carry"))}))})]})},fa=function(a){var e=a.d,n=a.yScale,t=a.yValue,r=a.r;return(0,i.jsxs)("g",{transform:"translate(0,".concat(2.5*r,")"),children:[(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:"".concat(e.Squad.replace(/\s/g,""),"-bar"),width:1,height:1,children:(0,i.jsx)("image",{href:"https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/".concat(encodeURIComponent(e.Squad),".png"),x:"0",y:"0",width:2*r,height:2*r})})}),(0,i.jsx)("circle",{cx:0,cy:n(t(e)),fill:"url(#".concat(e.Squad.replace(/\s/g,""),"-bar)"),r:r,children:(0,i.jsx)("title",{children:e.Squad})})]})},pa=function(a){var e=a.xCenter,n=a.fill,t=a.strokeWidth,r=void 0===t?"1":t,s=a.handleSort;return(0,i.jsxs)("g",{className:"axis-label pass-axis-label",children:[(0,i.jsx)("text",{dx:-e/2,dy:"-1em",className:ia()["axis-label"],fill:n,textAnchor:"end",cursor:"pointer",onClick:function(){return s.carry()},children:"Carries"}),(0,i.jsx)("line",{x1:0,x2:-e,stroke:n,strokeWidth:r})]})},ja=function(a){var e=a.xCenter,n=a.fill,t=a.strokeWidth,r=void 0===t?"1":t,s=a.handleSort;return(0,i.jsxs)("g",{className:"axis-label carry-axis-label",children:[(0,i.jsx)("text",{dx:e/2,dy:"-1em",className:ia()["axis-label"],textAnchor:"start",fill:n,cursor:"pointer",onClick:function(){return s.pass()},children:"Passing"}),(0,i.jsx)("line",{x1:0,x2:e,stroke:n,strokeWidth:r})]})},ya=function(a){var e=a.rEpl;return(0,i.jsxs)("g",{className:"epl-logo",children:[(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:"epl-logo",width:1,height:1,children:(0,i.jsx)("image",{href:"https://raw.githubusercontent.com/ajie31/aji-portfolio/main/src/Portfolios/Progression%20in%20Football/Components/logo%202021/premier-league.png",x:"0",y:"0",width:2*e,height:2*e})})}),(0,i.jsx)("circle",{cx:0,cy:0,r:e,fill:"url(#epl-logo)"})]})},ba=function(a){var e=a.xCenter,n=a.yScale,t=a.yValue,r=a.r,s=a.fill,l=a.strokeWidth,c=void 0===l?1:l,o=a.marginChart,d=a.marginAll,u=a.data;return(0,i.jsxs)("g",{className:"axis-label number-axis-label",transform:"translate(".concat(-e-16,",0)"),children:[(0,i.jsx)("text",{dx:(-o.left+d.left)/2,dy:"-1em",textAnchor:"middle",fill:s,children:"No."}),(0,i.jsx)("line",{x1:0,x2:-o.left+d.left,stroke:s,strokeWidth:c}),u.map((function(a,e){return(0,i.jsx)("text",{dx:(-o.left+d.left)/2,className:ia()["axis-label"],y:n(t(a))+2*r,dy:"-.14em",textAnchor:"middle",fill:s,children:e+1},e)}))]})},Sa=function(a){var e=a.marginAll,n=a.xCenter,t=a.yScale,r=a.yValue,s=a.r,l=a.fill,c=a.strokeWidth,o=void 0===c?"1":c,d=a.marginChart,u=a.data,x=a.handleSort;return(0,i.jsxs)("g",{className:"axis-label possession-axis-label",transform:"translate(".concat(n+16,",0)"),children:[(0,i.jsx)("text",{dx:(d.right-e.right)/2,dy:"-1em",className:ia()["axis-label"],textAnchor:"middle",fill:l,cursor:"pointer",onClick:function(){return x.poss()},children:"Pos"}),(0,i.jsx)("line",{x1:0,x2:d.right-e.right,stroke:l,strokeWidth:o}),u.map((function(a,n){return(0,i.jsxs)("text",{dx:(d.left-e.left)/2,y:t(r(a))+2*s,className:ia()["axis-value"],dy:"-.14em",textAnchor:"middle",fill:l,cursor:"pointer",children:[a.Poss," %"]},n)}))]})},Pa=function(a){var e=a.data,n=a.yScale,t=a.yValue,r=a.xCenter,s=a.r,l=a.rEpl,c=a.fillPass,o=a.fillCaries,d=a.fontSize,u=a.strokeWidth,x=a.handleSort,h=a.marginChart,m=a.marginAll;return(0,i.jsxs)("g",{transform:"translate(".concat(0,",").concat(2*-s,")"),className:"Labels",children:[(0,i.jsxs)("g",{transform:"translate(".concat(r,",").concat(s,")"),className:"text-line",children:[(0,i.jsx)(pa,{xCenter:r,fill:o,fontSize:d,strokeWidth:u,handleSort:x}),(0,i.jsx)(ja,{xCenter:r,fill:c,fontSize:d,strokeWidth:u,handleSort:x}),(0,i.jsx)(ba,{xCenter:r,yScale:n,yValue:t,r:s,fill:o,fontSize:d,strokeWidth:u,marginChart:h,marginAll:m,data:e}),(0,i.jsx)(Sa,{xCenter:r,yScale:n,yValue:t,r:s,fill:o,fontSize:d,strokeWidth:u,handleSort:x,marginChart:h,marginAll:m,data:e})]}),(0,i.jsxs)("g",{transform:"translate(".concat(r,",",0,")"),className:"epl-squad-logo",children:[e.map((function(a,e){return(0,i.jsx)(fa,{yScale:n,yValue:t,d:a,r:s},"".concat(e,"-epl-squad-logo"))})),(0,i.jsx)(ya,{rEpl:l})]})]})},ka=function(a){var e=a.data,n=a.yScale,t=a.xScaleCarry,r=a.xScalePass,s=a.xValueCarry,l=a.xValuePass,c=a.yValue,o=a.meanPass,d=a.meanCArry,u=a.innerWidth,x=a.handleSort,h=a.marginChart,m=a.marginAll,g=u/2,f=g+7,p=g-7;return(0,i.jsxs)("g",{className:"axis-group",children:[(0,i.jsx)(Pa,{data:e,yScale:n,yValue:c,xCenter:g,r:18,rEpl:36,fillPass:"#8E6C8A",fillCaries:"#B396AD",strokeWidth:"2.5px",handleSort:x,marginChart:h,marginAll:m}),(0,i.jsx)(ga,{data:e,yScale:n,xOffsetR:f,xOffsetL:p,fixedPass:function(a){return r(l(a))},fixedCarry:function(a){return t(s(a))},xValueCarry:s,xValuePass:l,yValue:c,meanPass:o,meanCArry:d,upFill:"#ABC22D",dnFill:"#C22719"})]})},Ca=function(a){var e=a.data,n=(0,o.useState)("byDistance"),s=n[0],l=n[1],c=(0,o.useState)(e),u=c[0],x=c[1],m={top:76,right:12,bottom:0,left:12},g={top:0,right:82,bottom:0,left:82},f=750-m.left-m.right,p=750-(m.left+g.left)-(m.right+g.right),j=900-m.top-m.bottom,y=function(a){return a.Squad},b=function(a){return h[s].pass(a).value()},S=function(a){return h[s].carry(a).value()},P=Object.keys(h),k=h[s].description,C=(0,d.BYU)().range([0,p/2.5]).domain([0,(0,d.Fp7)(u,b)]).nice(),v=(0,d.BYU)().range([0,p/2.5]).domain([0,(0,d.Fp7)(u,S)]).nice(),A=(0,d.tiA)().range([0,j]).domain(u.map(y)).padding(.55),N=Number((0,d.J69)(u,b).toFixed(3)),_=Number((0,d.J69)(u,S).toFixed(3)),w={carry:function(){return x(e.slice().sort((function(a,e){return(0,d.$1i)(S(a),S(e))})))},pass:function(){return x(e.slice().sort((function(a,e){return(0,d.$1i)(b(a),b(e))})))},poss:function(){return x(e.slice().sort((function(a,e){return(0,d.$1i)(a.Poss,e.Poss)})))}},V=[],q=[];return(0,o.useEffect)((function(){(0,d.Ys)(".indicator-group").attr("opacity",0).transition().duration(500).delay(200).attr("opacity",1),(0,d.td_)(".bar-chart-pass").data(u).transition().duration(600).ease(d.mfJ).attr("width",(function(a){return V.push(C(b(a))),C(b(a))})),(0,d.td_)(".bar-chart-carry").data(u).transition().duration(600).ease(d.mfJ).attr("width",(function(a){return q.push(v(S(a))),v(S(a))})),t=V,r=q})),(0,i.jsx)(ua,{topic:s,items:h,handleTopicChange:function(a){return l(a.target.value)},title:"Perbandingan Antara Passing Dan Carries Progresif ",note:"Pebandingan ditinjau dari sentuhan saat menggiring bola(Carries) dan sentuhan saat menerima umpan (Passing)",source:"Advanced data provided by StatsBomb Presented by fbref.com",innerWidth:f,topicKeys:P,description:k,children:(0,i.jsx)("svg",{viewBox:"0 0 ".concat(750," ").concat(900),preserveAspectRatio:"xMidYMid meet",children:(0,i.jsxs)("g",{transform:"translate(".concat(m.left+g.left,",").concat(m.top+g.top,")"),children:[(0,i.jsx)(ea,{data:u,PassObject:h[s].pass,CarryObject:h[s].carry,yScale:A,yValue:y,margin:g,innerWidth:p,passWidthbar:t,carryWidthBar:r}),(0,i.jsx)(ka,{data:u,yScale:A,xScaleCarry:v,xScalePass:C,xValuePass:b,xValueCarry:S,yValue:y,meanPass:N,meanCArry:_,innerWidth:p,innerHeight:j,handleSort:w,marginChart:g,marginAll:m})]})})})},va=function(a){var e=a.data;return(0,i.jsx)(Ca,{data:e})},Aa="white",Na=function(){var a=function(){var a=(0,o.useState)(null),e=a[0],n=a[1];return(0,o.useEffect)((function(){(0,d.AVB)("https://fbref-data-api.vercel.app/data_pcg/2022_2023").then((function(a){console.log(a),n(a.features)}))}),[]),e}(),e=function(){var a=(0,o.useState)(null),e=a[0],n=a[1];return(0,o.useEffect)((function(){(0,d.AVB)("https://fbref-data-api.vercel.app/data_pass_type/2022_2023").then((function(a){console.log(a),n(a.features)}))}),[]),e}();return a&&e?(0,i.jsx)(s.Z,{style:{px:1},maxWidth:"lg",children:(0,i.jsxs)(l.ZP,{spacing:0,justifyContent:"center",alignItems:"center",container:!0,children:[(0,i.jsx)(l.ZP,{item:!0,xs:11,md:9,children:(0,i.jsxs)(c.Z,{style:{backgroundColor:Aa,margin:"16px auto"},children:[(0,i.jsx)("h2",{className:"main-text",children:"Grafik Progressifitas dan Pola Mengumpan Pada Liga Premier Inggris"}),(0,i.jsx)("p",{className:"regular-text",children:"Perbandingan data dengan 3 visual yang berbeda dan mempresentasikan Progresifitas permainan, Pola mengumpan bola ditinjau dari jarak dan tinggi umpanan, dan aksi dari permainan terbuka yang terlibat dalam sebuah tembakan atau goal."})]})}),(0,i.jsxs)(l.ZP,{item:!0,xs:11,children:[(0,i.jsx)(c.Z,{style:{backgroundColor:Aa,height:"auto",width:"100%",marginBottom:"1rem"},children:(0,i.jsx)(va,{data:a})}),(0,i.jsx)(c.Z,{style:{backgroundColor:Aa,height:"auto",width:"100%",marginBottom:"1rem"},children:(0,i.jsx)($,{data:e})}),(0,i.jsx)(c.Z,{style:{backgroundColor:Aa,height:"auto",width:"100%"},children:(0,i.jsx)(A,{data:a})})]})]})}):(0,i.jsx)("pre",{children:"Loading..."})},_a=function(){return(0,i.jsx)(Na,{})}},7669:function(a){a.exports={"dropdown-menu":"barChart_dropdown-menu__9gXHz","bar-chart":"barChart_bar-chart__YeG8k","axis-label":"barChart_axis-label__TjKA4","axis-value":"barChart_axis-value___90E1","arrow-indicator-group":"barChart_arrow-indicator-group__eE5wa",indicator:"barChart_indicator__ACZKT"}},9292:function(a){a.exports={"animation-line":"connectingPlot_animation-line__CAM2_",dash:"connectingPlot_dash__shMlf","animated-circle":"connectingPlot_animated-circle__HVUUB",buttonTransition:"connectingPlot_buttonTransition__rQsmO","animated-skin":"connectingPlot_animated-skin__xlEaX",rectAnime:"connectingPlot_rectAnime__ZNGLw"}},7281:function(a){a.exports={keterangan:"football_keterangan__WD_Lh","konten-keterangan-ul":"football_konten-keterangan-ul__Qcdpv","konten-keterangan-li":"football_konten-keterangan-li__ystoK","keterangan-center":"football_keterangan-center__yl1Wg"}}},function(a){a.O(0,[478,416,212,380,527,590,774,888,179],(function(){return e=3080,a(a.s=e);var e}));var e=a.O();_N_E=e}]);