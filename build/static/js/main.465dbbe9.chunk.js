(this["webpackJsonpbible-verses-typing-practice"]=this["webpackJsonpbible-verses-typing-practice"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(13),i=a.n(r),o=a(34),l=a(12);const h=e=>()=>{e.history.push("/")},c=e=>(t,a,s,n,r)=>{e.history.push("/typing/".concat(t,"/").concat(a,"/").concat(s,"/").concat(n,"/").concat(r))};var p=a(27),m=a.n(p),u=a(45);const g="new",d="old",w={Genesis:50,Exodus:40,Leviticus:27,Numbers:36,Deuteronomy:34,Joshua:24,Judges:21,Ruth:4,"1 Samuel":31,"2 Samuel":24,"1 Kings":22,"2 Kings":25,"1 Chronicles":29,"2 Chronicles":36,Ezra:10,Nehemiah:13,Esther:10,Job:42,Psalms:150,Proverbs:31,Ecclesiastes:12,"Song of Songs":8,Isaiah:66,Jeremiah:52,Lamentations:5,Ezekiel:48,Daniel:12,Hosea:14,Joel:3,Amos:9,Obadiah:1,Jonah:4,Micah:7,Nahum:3,Habakkuk:3,Zephaniah:3,Haggai:2,Zechariah:14,Malachi:4},v={Matthew:28,Mark:16,Luke:24,John:21,Acts:28,James:5,"1 Peter":5,"2 Peter":3,"1 John":5,"2 John":1,"3 John":1,Jude:1,Romans:16,"1 Corinthians":16,"2 Corinthians":13,Galatians:6,Ephesians:6,Philippians:4,Colossians:4,"1 Thessalonians":5,"2 Thessalonians":3,"1 Timothy":6,"2 Timothy":4,Titus:3,Philemon:1,Hebrews:13,Revelation:22},E=e=>e.text.substr(0,e.text.length-1),b=function(){var e=Object(u.a)(m.a.mark((function e(t,a){var s,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://bible-api.com/".concat(t,"%20").concat(a));case 3:return s=e.sent,e.next=6,s.json();case 6:return n=e.sent,r=n.verses,e.abrupt("return",r.map(E));case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(m.a.mark((function e(t,a,s){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b(t,a);case 3:return n=e.sent,e.abrupt("return",n[s-1]);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,s){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(m.a.mark((function e(t,a,s,n){var r,i,o,l,h,c,p,u,E,B;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,i=a,o=s,l=n,h="",c=v,t===d&&(c=w),p=Object.keys(c),e.next=10,b(a,s);case 10:if(u=e.sent,!(n in u)){e.next=16;break}l=parseInt(n,10)+1,h=u[n],e.next=46;break;case 16:if(!(parseInt(s,10)+1<=c[a])){e.next=24;break}return e.next=19,C(a,parseInt(s,10)+1,1);case 19:h=e.sent,o=parseInt(s,10)+1,l=1,e.next=46;break;case 24:if(!(p.indexOf(a)<p.length-1)){e.next=33;break}return i=p[p.indexOf(a)+1],e.next=28,C(i,1,1);case 28:h=e.sent,o=1,l=1,e.next=46;break;case 33:if(t!==d){e.next=45;break}return c=v,E=Object.keys(c),i=E[0],e.next=39,C(i,1,1);case 39:h=e.sent,r=g,o=1,l=1,e.next=46;break;case 45:return e.abrupt("return",null);case 46:return B={testament:r,book:i,chapter:o,verse:l,text:h},e.abrupt("return",B);case 48:case"end":return e.stop()}}),e)})));return function(t,a,s,n){return e.apply(this,arguments)}}();var k=a(129),y=a(131),f=a(128),x=a(127),S=a(43),F=a(42);a(32);class D extends n.a.Component{render(){return n.a.createElement("div",{className:"BibleVerse"},n.a.createElement("p",null,n.a.createElement("span",{id:"typed"},this.props.typed),n.a.createElement("span",{id:"untyped"},this.props.verse)))}}var T=a(49);const N=e=>n.a.createElement("button",{className:"Key",style:{backgroundColor:"".concat(e.color),width:"".concat(e.width),borderColor:"".concat(e.borderColor)}},e.label),A=["#F1948A","#F1948A","#F5B041","#F7DC6F","#ABEBC6","#ABEBC6","#45B39D","#45B39D","#85C1E9","#5499C7","#BB8FCE","#BB8FCE","#BB8FCE","#BB8FCE"],K=["#F1948A","#F1948A","#F5B041","#F7DC6F","#ABEBC6","#ABEBC6","#45B39D","#45B39D","#85C1E9","#5499C7","#BB8FCE","#BB8FCE","#BB8FCE","#BB8FCE"],O=["#F1948A","#F1948A","#F5B041","#F7DC6F","#ABEBC6","#ABEBC6","#45B39D","#45B39D","#85C1E9","#5499C7","#BB8FCE","#BB8FCE","#BB8FCE"],V=["#F1948A","#F1948A","#F5B041","#F7DC6F","#ABEBC6","#ABEBC6","#45B39D","#45B39D","#85C1E9","#5499C7","#BB8FCE","#BB8FCE"],z=["white","white","white","white","#EAEDED","white","white","white","white","white"],I=["5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","9vw"],H=["9vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw"],J=["10.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","10.6vw"],M=["14vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","5.6vw","14vw"],R=["5.6vw","5.6vw","5.6vw","7.4vw","32vw","7.4vw","5.6vw","5.6vw","5.6vw","5.6vw"],j=["~ `","! 1","@ 2","# 3","$ 4","% 5","^ 6","& 7","* 8","( 9",") 0","_ -","+ =","del"],P=["tab","Q \u3142","W \u3148","E \u3137","R \u3131","T \u3145","Y \u315b","U \u3155","I \u3151","O \u3150","P \u3154","{ [","} ]","| \\"],L=["caps lock","A \u3141","S \u3134","D \u3147","F \u3139","G \u314e","H \u3157","J \u3153","K \u314f","L \u3163",": ;","\" '","return"],U=["shift","Z \u314b","X \u314c","C \u314a","V \u314d","B \u3160","N \u315c","M \u3161","< ,","> .","? /","shift"],Y=["fn","ctrl","alt","cmd","","cmd","alt","","",""],G={"~":[0,52],"`":[0],"!":[1,52],1:[1],"@":[2,52],2:[2],"#":[3,52],3:[3],$:[4,52],4:[4],"%":[5,52],5:[5],"^":[6,41],6:[6],"&":[7,41],7:[7],"*":[8,41],8:[8],"(":[9,41],9:[9],")":[10,41],0:[10],_:[11,41],"-":[11],"+":[12,41],"=":[12],Q:[15,52],q:[15],W:[16,52],w:[16],E:[17,52],e:[17],R:[18,52],r:[18],T:[19,52],t:[19],Y:[20,41],y:[20],U:[21,41],u:[21],I:[22,41],i:[22],O:[23,41],o:[23],P:[24,41],p:[24],"{":[25,41],"[":[25],"}":[26,41],"]":[26],"|":[27,41],"\\":[27],A:[29,52],a:[29],S:[30,52],s:[30],D:[31,52],d:[31],F:[32,52],f:[32],G:[33,52],g:[33],H:[34,41],h:[34],J:[35,41],j:[35],K:[36,41],k:[36],L:[37,41],l:[37],":":[38,41],";":[38],'"':[39,41],"'":[39],Z:[42,52],z:[42],X:[43,52],x:[43],C:[44,52],c:[44],V:[45,52],v:[45],B:[46,52],b:[46],N:[47,41],n:[47],M:[48,41],m:[48],"<":[49,41],",":[49],">":[50,41],".":[50],"?":[51,41],"/":[51]," ":[57]},W=e=>{switch(e){case"\u2019":case"\u2018":return"'";case"\u201c":case"\u201d":return'"';default:return e}};class Z extends n.a.Component{constructor(e){super(e),this.getUnhighlightedBorderColors=()=>{const e=[...this.state.borderColors];if(-1!==this.state.prevKey){var t,a=Object(T.a)(G[this.state.prevKey]);try{for(a.s();!(t=a.n()).done;){e[t.value]="#d0d3d4"}}catch(s){a.e(s)}finally{a.f()}}return e},this.getRowButtons=(e,t,a,s)=>{const r=[];for(var i=0;i<a.length;++i)r.push(n.a.createElement(N,{borderColor:this.state.borderColors[s+i],color:e[i],width:t[i],label:a[i],key:s+i}));return r},this.state={borderColors:Array(63).fill("#d0d3d4"),prevKey:-1,highlightKeys:!0}}componentDidUpdate(e){if(e.highlight!==this.props.highlight){const e=this.getUnhighlightedBorderColors();this.setState({highlightKeys:this.props.highlight,borderColors:e})}if(this.state.highlightKeys&&-1!==this.props.value&&this.props.value!==this.state.prevKey){const e=this.getUnhighlightedBorderColors();var t,a=Object(T.a)(G[this.props.value]);try{for(a.s();!(t=a.n()).done;){e[t.value]="red"}}catch(s){a.e(s)}finally{a.f()}this.setState({borderColors:e,prevKey:this.props.value})}else if(-1===this.props.value&&this.props.value!==this.state.prevKey){const e=this.getUnhighlightedBorderColors();this.setState({borderColors:e,prevKey:this.props.value})}}render(){const e=this.getRowButtons(A,I,j,0),t=this.getRowButtons(K,H,P,j.length),a=this.getRowButtons(O,J,L,j.length+P.length),s=this.getRowButtons(V,M,U,j.length+P.length+L.length),r=this.getRowButtons(z,R,Y,j.length+P.length+L.length+U.length);return n.a.createElement("div",{className:"Keyboard"},n.a.createElement("div",{className:"row"},e),n.a.createElement("div",{className:"row"},t),n.a.createElement("div",{className:"row"},a),n.a.createElement("div",{className:"row"},s),n.a.createElement("div",{className:"row"},r))}}var X=a(65),Q=a(132),$=a(6);const _=Object($.a)(e=>({tooltip:{fontSize:20,fontWeight:1,textAlign:"center"}}))(Q.a),q=Object($.a)(e=>({tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:11,textAlign:"center"}}))(Q.a);var ee=a(60),te=a.n(ee);class ae extends n.a.Component{render(){return n.a.createElement(q,{title:n.a.createElement(n.a.Fragment,null,n.a.createElement(X.a,null,"Finger Color Code"),n.a.createElement("img",{id:"img-hands",src:te.a,alt:"Finger Labels"})),placement:"left"},n.a.createElement("button",{id:"btn-hint"},n.a.createElement(F.a,null)))}}var se=a(61),ne=a(133),re=a(130);class ie extends n.a.Component{constructor(e){super(e),this.onClickExit=()=>{this.setState({open:!1})},this.onClickSettings=()=>{this.setState({open:!0})},this.getSettingsDialog=()=>n.a.createElement(y.a,{open:this.state.open},n.a.createElement(x.a,null,n.a.createElement("center",null,"Settings")),n.a.createElement(f.a,null,n.a.createElement("center",null,this.getHighlightKeysControl()),n.a.createElement("center",null,this.getTextareaControl()),n.a.createElement("center",null,n.a.createElement(k.a,{size:"small",onClick:this.onClickExit},"Exit")))),this.getHighlightKeysControl=()=>n.a.createElement(re.a,{id:"btn-control",control:n.a.createElement(ne.a,{size:"small",checked:this.props.highlightKeys,onChange:this.props.onClickHighlight}),label:"HIGHLIGHT KEYS",labelPlacement:"end"}),this.getTextareaControl=()=>n.a.createElement(re.a,{id:"btn-control",control:n.a.createElement(ne.a,{size:"small",checked:this.props.showTextarea,onChange:this.props.onClickShowTextarea}),label:"SHOW TEXTAREA",labelPlacement:"end"}),this.state={open:!1}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(Q.a,{title:"Settings"},n.a.createElement("button",{id:"btn-settings",onClick:this.onClickSettings},n.a.createElement(se.a,null))),this.getSettingsDialog())}}class oe extends n.a.Component{render(){return this.props.show?n.a.createElement(_,{title:n.a.createElement("p",null,"This is an optional textarea to help you visualize the content of what you type. You can turn off this feature from settings."),arrow:!0},n.a.createElement("textarea",{id:"editor",type:"text"})):n.a.createElement(n.a.Fragment,null)}}class le extends n.a.Component{constructor(e){super(e),this.reset=()=>{this.setState({typeBegin:!1,typeFinished:!1,countDownBegin:!1,verse:this.state.typed,typed:"",countDown:5,timeElapsed:0,endOfBible:!1})},this.pressKey=e=>{const t=String.fromCharCode(e.keyCode);W(this.state.verse.charAt(0))===t&&(this.state.typeBegin||this.state.countDownBegin||this.setState({typeBegin:!0,countDownBegin:!0,countDown:-1}),this.state.typeBegin&&this.setState({typed:this.state.typed.concat(t),verse:this.state.verse.substr(1,this.state.verse.length)}))},this.getSpeed=()=>Math.round(this.state.typed.length/5*60/this.state.timeElapsed),this.goToNextVerse=()=>{this.reset(),B(this.props.match.params.testament,this.props.match.params.book,this.props.match.params.chapter,this.props.match.params.verse).then(e=>{null!==e?(this.setState({verse:e.text}),c(this.props)(e.testament,e.book,e.chapter,e.verse,e.text)):this.setState({endOfBible:!0})})},this.tick=()=>{this.state.countDownBegin&&(Number.isFinite(this.state.countDown)&&this.state.countDown>=0?this.setState({countDown:this.state.countDown-.5}):this.state.typeFinished||this.setState({timeElapsed:this.state.timeElapsed+.5})),Number.isFinite(this.state.countDown)&&0===this.state.countDown?this.setState({countDown:"GO!"}):"GO!"!==this.state.countDown||this.state.typeBegin||this.setState({typeBegin:!0})},this.onClickBegin=()=>{this.setState({countDownBegin:!0})},this.getTypingManager=()=>this.state.countDownBegin?this.state.typeBegin?n.a.createElement("span",{className:"timer"},Math.floor((this.state.timeElapsed+.5)/60),":",Math.round(this.state.timeElapsed)%60):n.a.createElement("span",{className:"countdown"},Number.isFinite(this.state.countDown)?Math.round(this.state.countDown):this.state.countDown):n.a.createElement(_,{title:n.a.createElement("p",null,"Click to begin timer with a countdown. Or type first character to begin timer automatically."),arrow:!0},n.a.createElement("button",{onClick:this.onClickBegin},n.a.createElement(F.b,{size:17}))),this.getSummary=()=>this.state.endOfBible?n.a.createElement(y.a,{open:this.state.endOfBible},n.a.createElement(x.a,null,n.a.createElement("center",null,"You have reached the end of the Bible!")),n.a.createElement(f.a,null,n.a.createElement("center",null,n.a.createElement(k.a,{color:"secondary",size:"small",onClick:()=>this.setState({endOfBible:!1})},"Retry"),n.a.createElement(k.a,{size:"small",onClick:h(this.props)},"Scriptures")))):this.state.typeFinished?n.a.createElement(y.a,{open:this.state.typeFinished},n.a.createElement(x.a,null,n.a.createElement("center",null,"Your speed is ",this.getSpeed()," WPM")),n.a.createElement(f.a,null,n.a.createElement(k.a,{color:"secondary",size:"small",onClick:this.reset},"Retry"),n.a.createElement(k.a,{color:"primary",size:"small",onClick:this.goToNextVerse},"Next Verse"),n.a.createElement(k.a,{size:"small",onClick:h(this.props)},"Scriptures"))):n.a.createElement(n.a.Fragment,null),this.getVerseInfo=()=>n.a.createElement("p",{className:"verse-info"},n.a.createElement(S.b,{size:20}),n.a.createElement("span",null,"\xa0",this.props.match.params.book," ",this.props.match.params.chapter,":",this.props.match.params.verse)),this.onClickHighlight=()=>{this.setState({highlightKeys:!this.state.highlightKeys})},this.onClickShowTextarea=()=>{this.setState({showTextarea:!this.state.showTextarea})},this.isVerseAllTyped=()=>this.state.verse.length<=0,this.state={typeBegin:!1,typeFinished:!1,countDownBegin:!1,verse:"",typed:"",countDown:5,timeElapsed:0,endOfBible:!1,highlightKeys:!0,showTextarea:!0}}componentDidUpdate(){this.isVerseAllTyped()&&!this.state.typeFinished&&this.setState({typeFinished:!0})}componentDidMount(){window.addEventListener("keypress",this.pressKey),this.setState({verse:this.props.match.params.text}),this.timerID=setInterval(()=>this.tick(),500)}componentWillUnmount(){window.removeEventListener("keypress",this.pressKey),clearInterval(this.timerID)}render(){const e=this.state.typeBegin&&!this.isVerseAllTyped()?W(this.state.verse.charAt(0)):-1;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"Typing"},this.getVerseInfo(),n.a.createElement("div",{id:"begin"},this.getTypingManager(),n.a.createElement(D,{typed:this.state.typed,verse:this.state.verse}),n.a.createElement(oe,{show:this.state.showTextarea})),n.a.createElement(ae,null),n.a.createElement(ie,{onClickHighlight:this.onClickHighlight,highlightKeys:this.state.highlightKeys,onClickShowTextarea:this.onClickShowTextarea,showTextarea:this.state.showTextarea}),n.a.createElement(Z,{value:e,highlight:this.state.highlightKeys})),this.getSummary())}}var he=le,ce=a(36),pe=a(63);const me="testaments",ue="books",ge="chapters",de="verses";class we extends n.a.Component{constructor(e){super(e),this.reset=()=>{this.setState({testament:"",show:me,book:"",chapter:0,bibleVerses:[]})},this.onClickTestament=e=>()=>{this.setState({testament:e,show:ue,bibleVerses:[]})},this.onClickBook=e=>()=>{this.setState({book:e,show:ge,bibleVerses:[]})},this.onClickChapter=e=>()=>{this.setState({chapter:e,show:de,bibleVerses:[]})},this.onClickVerse=(e,t)=>()=>{c(this.props)(this.state.testament,this.state.book,this.state.chapter,parseInt(e,10)+1,t)},this.onClickBack=()=>{switch(this.state.show){case ue:this.reset();break;case ge:this.setState({show:ue,book:"",bibleVerses:[]});break;case de:this.setState({show:ge,chapter:0,bibleVerses:[]})}},this.getBackButton=()=>n.a.createElement("div",{className:"btn-back"},n.a.createElement(k.a,{onClick:this.onClickBack},n.a.createElement(S.a,{size:20}),n.a.createElement("span",null,"\xa0back"))),this.getTestamentButtons=()=>n.a.createElement("div",{className:"btn-group-bible"},n.a.createElement("button",{className:"btn-testament",onClick:this.onClickTestament(d)},n.a.createElement(ce.a,{size:30}),n.a.createElement("br",null),n.a.createElement("br",null),"Old Testament"),n.a.createElement("button",{className:"btn-testament",onClick:this.onClickTestament(g)},n.a.createElement(ce.a,{size:30}),n.a.createElement("br",null),n.a.createElement("br",null),"New Testament")),this.getBookButtons=()=>{const e=[],t=this.state.testament===g?v:w;for(var a in t)e.push(n.a.createElement("button",{key:a,className:"btn-book",onClick:this.onClickBook(a)},a));return n.a.createElement("div",{className:"btn-group-bible"},this.getBackButton(),e)},this.getChapterButtons=()=>{const e=[],t=this.state.testament===g?v:w;for(var a=1;a<t[this.state.book]+1;++a)e.push(n.a.createElement("button",{className:"btn-chapter",onClick:this.onClickChapter(a),key:a},"Chapter ",a));return n.a.createElement("div",{className:"btn-group-bible"},this.getBackButton(),e)},this.getVerseButtons=()=>(0===this.state.bibleVerses.length&&b(this.state.book,this.state.chapter).then(e=>{this.setState({bibleVerses:n.a.createElement(pe.a,{height:Math.max(document.documentElement.clientHeight,window.innerHeight||0),itemCount:e.length,itemSize:100,width:"100%"},({index:t,style:a})=>n.a.createElement("div",{className:"verse-wrap",style:a},n.a.createElement("button",{className:"btn-verse",onClick:this.onClickVerse(t,e[t])},"Type"),n.a.createElement("p",null,this.state.chapter,":",parseInt(t,10)+1," ",e[t])))})}),n.a.createElement("div",{className:"btn-group-verses"},this.getBackButton(),this.state.bibleVerses)),this.state={testament:"",show:me,book:"",chapter:0,bibleVerses:[]}}render(){switch(this.state.show){case me:return this.getTestamentButtons();case ue:return this.getBookButtons();case ge:return this.getChapterButtons();case de:return this.getVerseButtons();default:return this.getTestamentButtons()}}}var ve=a(62),Ee=e=>n.a.createElement(ve.slide,e,n.a.createElement(o.b,{to:"/"},n.a.createElement(ce.a,{size:30}),n.a.createElement("span",null,"\xa0Scriptures")));a(99);class be extends n.a.Component{constructor(...e){super(...e),this.currentYear=(new Date).getFullYear()}render(){return n.a.createElement("div",{id:"App"},n.a.createElement(Ee,{pageWrapId:"page-wrap",outerContainerId:"App"}),n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/",component:we}),n.a.createElement(l.a,{exact:!0,path:"/typing/:testament/:book/:chapter/:verse/:text",component:he})),n.a.createElement("div",{id:"page-wrap"}),n.a.createElement("footer",null,n.a.createElement("small",null,"\xa9 Copyright ",this.currentYear,", Esther Lim")))}}const Ce=document.getElementById("root");i.a.render(n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null,n.a.createElement(be,null))),Ce)},32:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/finger-labels.2349af81.jpg"},74:function(e,t,a){e.exports=a(100)},99:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.465dbbe9.chunk.js.map