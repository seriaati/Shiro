import{l as I,c as q,v as lt,J as ht,x as F,d as U,z as gt}from"./index.demo-CCm7av3I.js";import{c as tt}from"./cytoscape.esm-f5hsq1EF.js";import{c as dt}from"./cytoscape-cose-bilkent-Bgjsio1W.js";import{s as pt,n as ut,o as ft,q as yt}from"./isEmpty-CPJeZ-IN.js";import{a as mt}from"./createText-ca0c5216-BerWuVmj.js";import"./owner-PrTRGOLt.js";import"./index-B9SUlsL6.js";import"./FormInput-DX960qqm.js";import"./StyledButton-DVz0ew6u.js";import"./proxy-DpF5uie5.js";import"./provider-DWR--7J0.js";import"./viewport-C-voIzf7.js";import"./spring-C80N1tKa.js";import"./index-6TaX3-pf.js";import"./use-is-unmounted-An2Eu9cB.js";import"./use-event-callback-BQ6UHZlx.js";import"./dom-BowoBODo.js";import"./use-drag-controls-C23qmz0X.js";import"./visual-element-COOPoh5v.js";import"./index-cjK2ZoWF.js";import"./use-ref-value-wVjzkT4t.js";import"./Shiki-Bp-qInqF.js";import"./index-BQEcQMms.js";import"./use-motion-template-EJSHRjXn.js";import"./use-is-dark-Cjh7F_vx.js";import"./LinkCard-Bt0U9aeJ.js";import"./image-Ci5rK2-U.js";import"./Gallery-DeAoVbNP.js";import"./useQuery-D_cFV5YZ.js";import"./alert-xnDG_EXy.js";import"./index-Bg1J0sEf.js";import"./FloatPopover-BtFXWwwV.js";import"./SocialSourceLink-BBGfPIde.js";import"./Collapse-C9SYmtun.js";import"./CodeEditor-Bwvl2ukO.js";import"./index-LAI3pait.js";import"./cookie-Z9X-nQiI.js";import"./Mermaid-k1f-BXa3.js";var Y=function(){var e=function(w,o,s,l){for(s=s||{},l=w.length;l--;s[w[l]]=o);return s},a=[1,4],t=[1,13],n=[1,12],r=[1,15],i=[1,16],g=[1,20],p=[1,19],f=[6,7,8],E=[1,26],$=[1,24],O=[1,25],y=[6,7,11],B=[1,6,13,15,16,19,22],S=[1,33],N=[1,34],T=[1,6,7,11,13,15,16,19,22],H={trace:function(){},yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,MINDMAP:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,ICON:15,CLASS:16,nodeWithId:17,nodeWithoutId:18,NODE_DSTART:19,NODE_DESCR:20,NODE_DEND:21,NODE_ID:22,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"MINDMAP",11:"EOF",13:"SPACELIST",15:"ICON",16:"CLASS",19:"NODE_DSTART",20:"NODE_DESCR",21:"NODE_DEND",22:"NODE_ID"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,2],[12,2],[12,2],[12,1],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[18,3],[17,1],[17,4]],performAction:function(o,s,l,h,u,c,A){var d=c.length-1;switch(u){case 6:case 7:return h;case 8:h.getLogger().trace("Stop NL ");break;case 9:h.getLogger().trace("Stop EOF ");break;case 11:h.getLogger().trace("Stop NL2 ");break;case 12:h.getLogger().trace("Stop EOF2 ");break;case 15:h.getLogger().info("Node: ",c[d].id),h.addNode(c[d-1].length,c[d].id,c[d].descr,c[d].type);break;case 16:h.getLogger().trace("Icon: ",c[d]),h.decorateNode({icon:c[d]});break;case 17:case 21:h.decorateNode({class:c[d]});break;case 18:h.getLogger().trace("SPACELIST");break;case 19:h.getLogger().trace("Node: ",c[d].id),h.addNode(0,c[d].id,c[d].descr,c[d].type);break;case 20:h.decorateNode({icon:c[d]});break;case 25:h.getLogger().trace("node found ..",c[d-2]),this.$={id:c[d-1],descr:c[d-1],type:h.getType(c[d-2],c[d])};break;case 26:this.$={id:c[d],descr:c[d],type:h.nodeType.DEFAULT};break;case 27:h.getLogger().trace("node found ..",c[d-3]),this.$={id:c[d-3],descr:c[d-1],type:h.getType(c[d-2],c[d])};break}},table:[{3:1,4:2,5:3,6:[1,5],8:a},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:a},{6:t,7:[1,10],9:9,12:11,13:n,14:14,15:r,16:i,17:17,18:18,19:g,22:p},e(f,[2,3]),{1:[2,2]},e(f,[2,4]),e(f,[2,5]),{1:[2,6],6:t,12:21,13:n,14:14,15:r,16:i,17:17,18:18,19:g,22:p},{6:t,9:22,12:11,13:n,14:14,15:r,16:i,17:17,18:18,19:g,22:p},{6:E,7:$,10:23,11:O},e(y,[2,22],{17:17,18:18,14:27,15:[1,28],16:[1,29],19:g,22:p}),e(y,[2,18]),e(y,[2,19]),e(y,[2,20]),e(y,[2,21]),e(y,[2,23]),e(y,[2,24]),e(y,[2,26],{19:[1,30]}),{20:[1,31]},{6:E,7:$,10:32,11:O},{1:[2,7],6:t,12:21,13:n,14:14,15:r,16:i,17:17,18:18,19:g,22:p},e(B,[2,14],{7:S,11:N}),e(T,[2,8]),e(T,[2,9]),e(T,[2,10]),e(y,[2,15]),e(y,[2,16]),e(y,[2,17]),{20:[1,35]},{21:[1,36]},e(B,[2,13],{7:S,11:N}),e(T,[2,11]),e(T,[2,12]),{21:[1,37]},e(y,[2,25]),e(y,[2,27])],defaultActions:{2:[2,1],6:[2,2]},parseError:function(o,s){if(s.recoverable)this.trace(o);else{var l=new Error(o);throw l.hash=s,l}},parse:function(o){var s=this,l=[0],h=[],u=[null],c=[],A=this.table,d="",P=0,J=0,rt=2,K=1,at=c.slice.call(arguments,1),_=Object.create(this.lexer),v={yy:{}};for(var z in this.yy)Object.prototype.hasOwnProperty.call(this.yy,z)&&(v.yy[z]=this.yy[z]);_.setInput(o,v.yy),v.yy.lexer=_,v.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var G=_.yylloc;c.push(G);var ot=_.options&&_.options.ranges;typeof v.yy.parseError=="function"?this.parseError=v.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ct(){var D;return D=h.pop()||_.lex()||K,typeof D!="number"&&(D instanceof Array&&(h=D,D=h.pop()),D=s.symbols_[D]||D),D}for(var b,C,x,X,R={},M,L,Q,V;;){if(C=l[l.length-1],this.defaultActions[C]?x=this.defaultActions[C]:((b===null||typeof b>"u")&&(b=ct()),x=A[C]&&A[C][b]),typeof x>"u"||!x.length||!x[0]){var W="";V=[];for(M in A[C])this.terminals_[M]&&M>rt&&V.push("'"+this.terminals_[M]+"'");_.showPosition?W="Parse error on line "+(P+1)+`:
`+_.showPosition()+`
Expecting `+V.join(", ")+", got '"+(this.terminals_[b]||b)+"'":W="Parse error on line "+(P+1)+": Unexpected "+(b==K?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(W,{text:_.match,token:this.terminals_[b]||b,line:_.yylineno,loc:G,expected:V})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+C+", token: "+b);switch(x[0]){case 1:l.push(b),u.push(_.yytext),c.push(_.yylloc),l.push(x[1]),b=null,J=_.yyleng,d=_.yytext,P=_.yylineno,G=_.yylloc;break;case 2:if(L=this.productions_[x[1]][1],R.$=u[u.length-L],R._$={first_line:c[c.length-(L||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(L||1)].first_column,last_column:c[c.length-1].last_column},ot&&(R._$.range=[c[c.length-(L||1)].range[0],c[c.length-1].range[1]]),X=this.performAction.apply(R,[d,J,P,v.yy,x[1],u,c].concat(at)),typeof X<"u")return X;L&&(l=l.slice(0,-1*L*2),u=u.slice(0,-1*L),c=c.slice(0,-1*L)),l.push(this.productions_[x[1]][0]),u.push(R.$),c.push(R._$),Q=A[l[l.length-2]][l[l.length-1]],l.push(Q);break;case 3:return!0}}return!0}},st=function(){var w={EOF:1,parseError:function(s,l){if(this.yy.parser)this.yy.parser.parseError(s,l);else throw new Error(s)},setInput:function(o,s){return this.yy=s||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var s=o.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},unput:function(o){var s=o.length,l=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var h=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var u=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===h.length?this.yylloc.first_column:0)+h[h.length-l.length].length-l[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[u[0],u[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(o){this.unput(this.match.slice(o))},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var o=this.pastInput(),s=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+s+"^"},test_match:function(o,s){var l,h,u;if(this.options.backtrack_lexer&&(u={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(u.yylloc.range=this.yylloc.range.slice(0))),h=o[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],l=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var c in u)this[c]=u[c];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,s,l,h;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),c=0;c<u.length;c++)if(l=this._input.match(this.rules[u[c]]),l&&(!s||l[0].length>s[0].length)){if(s=l,h=c,this.options.backtrack_lexer){if(o=this.test_match(l,u[c]),o!==!1)return o;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(o=this.test_match(s,u[h]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return s||this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},pushState:function(s){this.begin(s)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(s,l,h,u){switch(h){case 0:return s.getLogger().trace("Found comment",l.yytext),6;case 1:return 8;case 2:this.begin("CLASS");break;case 3:return this.popState(),16;case 4:this.popState();break;case 5:s.getLogger().trace("Begin icon"),this.begin("ICON");break;case 6:return s.getLogger().trace("SPACELINE"),6;case 7:return 7;case 8:return 15;case 9:s.getLogger().trace("end icon"),this.popState();break;case 10:return s.getLogger().trace("Exploding node"),this.begin("NODE"),19;case 11:return s.getLogger().trace("Cloud"),this.begin("NODE"),19;case 12:return s.getLogger().trace("Explosion Bang"),this.begin("NODE"),19;case 13:return s.getLogger().trace("Cloud Bang"),this.begin("NODE"),19;case 14:return this.begin("NODE"),19;case 15:return this.begin("NODE"),19;case 16:return this.begin("NODE"),19;case 17:return this.begin("NODE"),19;case 18:return 13;case 19:return 22;case 20:return 11;case 21:this.begin("NSTR2");break;case 22:return"NODE_DESCR";case 23:this.popState();break;case 24:s.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 25:return s.getLogger().trace("description:",l.yytext),"NODE_DESCR";case 26:this.popState();break;case 27:return this.popState(),s.getLogger().trace("node end ))"),"NODE_DEND";case 28:return this.popState(),s.getLogger().trace("node end )"),"NODE_DEND";case 29:return this.popState(),s.getLogger().trace("node end ...",l.yytext),"NODE_DEND";case 30:return this.popState(),s.getLogger().trace("node end (("),"NODE_DEND";case 31:return this.popState(),s.getLogger().trace("node end (-"),"NODE_DEND";case 32:return this.popState(),s.getLogger().trace("node end (-"),"NODE_DEND";case 33:return this.popState(),s.getLogger().trace("node end (("),"NODE_DEND";case 34:return this.popState(),s.getLogger().trace("node end (("),"NODE_DEND";case 35:return s.getLogger().trace("Long description:",l.yytext),20;case 36:return s.getLogger().trace("Long description:",l.yytext),20}},rules:[/^(?:\s*%%.*)/i,/^(?:mindmap\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{CLASS:{rules:[3,4],inclusive:!1},ICON:{rules:[8,9],inclusive:!1},NSTR2:{rules:[22,23],inclusive:!1},NSTR:{rules:[25,26],inclusive:!1},NODE:{rules:[21,24,27,28,29,30,31,32,33,34,35,36],inclusive:!1},INITIAL:{rules:[0,1,2,5,6,7,10,11,12,13,14,15,16,17,18,19,20],inclusive:!0}}};return w}();H.lexer=st;function j(){this.yy={}}return j.prototype=H,H.Parser=j,new j}();Y.parser=Y;const Et=Y;let k=[],et=0,Z={};const _t=()=>{k=[],et=0,Z={}},bt=function(e){for(let a=k.length-1;a>=0;a--)if(k[a].level<e)return k[a];return null},$t=()=>k.length>0?k[0]:null,xt=(e,a,t,n)=>{var r,i;I.info("addNode",e,a,t,n);const g=q();let p=((r=g.mindmap)==null?void 0:r.padding)??F.mindmap.padding;switch(n){case m.ROUNDED_RECT:case m.RECT:case m.HEXAGON:p*=2}const f={id:et++,nodeId:U(a,g),level:e,descr:U(t,g),type:n,children:[],width:((i=g.mindmap)==null?void 0:i.maxNodeWidth)??F.mindmap.maxNodeWidth,padding:p},E=bt(e);if(E)E.children.push(f),k.push(f);else if(k.length===0)k.push(f);else throw new Error('There can be only one root. No parent could be found for ("'+f.descr+'")')},m={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},kt=(e,a)=>{switch(I.debug("In get type",e,a),e){case"[":return m.RECT;case"(":return a===")"?m.ROUNDED_RECT:m.CLOUD;case"((":return m.CIRCLE;case")":return m.CLOUD;case"))":return m.BANG;case"{{":return m.HEXAGON;default:return m.DEFAULT}},St=(e,a)=>{Z[e]=a},Nt=e=>{if(!e)return;const a=q(),t=k[k.length-1];e.icon&&(t.icon=U(e.icon,a)),e.class&&(t.class=U(e.class,a))},Lt=e=>{switch(e){case m.DEFAULT:return"no-border";case m.RECT:return"rect";case m.ROUNDED_RECT:return"rounded-rect";case m.CIRCLE:return"circle";case m.CLOUD:return"cloud";case m.BANG:return"bang";case m.HEXAGON:return"hexgon";default:return"no-border"}},Dt=()=>I,wt=e=>Z[e],Ot={clear:_t,addNode:xt,getMindmap:$t,nodeType:m,getType:kt,setElementForId:St,decorateNode:Nt,type2Str:Lt,getLogger:Dt,getElementById:wt},vt=Ot,Ct=12,It=function(e,a,t,n){a.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),a.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},Tt=function(e,a,t){a.append("rect").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("height",t.height).attr("width",t.width)},Rt=function(e,a,t){const n=t.width,r=t.height,i=.15*n,g=.25*n,p=.35*n,f=.2*n;a.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("d",`M0 0 a${i},${i} 0 0,1 ${n*.25},${-1*n*.1}
      a${p},${p} 1 0,1 ${n*.4},${-1*n*.1}
      a${g},${g} 1 0,1 ${n*.35},${1*n*.2}

      a${i},${i} 1 0,1 ${n*.15},${1*r*.35}
      a${f},${f} 1 0,1 ${-1*n*.15},${1*r*.65}

      a${g},${i} 1 0,1 ${-1*n*.25},${n*.15}
      a${p},${p} 1 0,1 ${-1*n*.5},0
      a${i},${i} 1 0,1 ${-1*n*.25},${-1*n*.15}

      a${i},${i} 1 0,1 ${-1*n*.1},${-1*r*.35}
      a${f},${f} 1 0,1 ${n*.1},${-1*r*.65}

    H0 V0 Z`)},At=function(e,a,t){const n=t.width,r=t.height,i=.15*n;a.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("d",`M0 0 a${i},${i} 1 0,0 ${n*.25},${-1*r*.1}
      a${i},${i} 1 0,0 ${n*.25},0
      a${i},${i} 1 0,0 ${n*.25},0
      a${i},${i} 1 0,0 ${n*.25},${1*r*.1}

      a${i},${i} 1 0,0 ${n*.15},${1*r*.33}
      a${i*.8},${i*.8} 1 0,0 0,${1*r*.34}
      a${i},${i} 1 0,0 ${-1*n*.15},${1*r*.33}

      a${i},${i} 1 0,0 ${-1*n*.25},${r*.15}
      a${i},${i} 1 0,0 ${-1*n*.25},0
      a${i},${i} 1 0,0 ${-1*n*.25},0
      a${i},${i} 1 0,0 ${-1*n*.25},${-1*r*.15}

      a${i},${i} 1 0,0 ${-1*n*.1},${-1*r*.33}
      a${i*.8},${i*.8} 1 0,0 0,${-1*r*.34}
      a${i},${i} 1 0,0 ${n*.1},${-1*r*.33}

    H0 V0 Z`)},Bt=function(e,a,t){a.append("circle").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("r",t.width/2)};function Pt(e,a,t,n,r){return e.insert("polygon",":first-child").attr("points",n.map(function(i){return i.x+","+i.y}).join(" ")).attr("transform","translate("+(r.width-a)/2+", "+t+")")}const Mt=function(e,a,t){const n=t.height,i=n/4,g=t.width-t.padding+2*i,p=[{x:i,y:0},{x:g-i,y:0},{x:g,y:-n/2},{x:g-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}];Pt(a,g,n,p,t)},Vt=function(e,a,t){a.append("rect").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("height",t.height).attr("rx",t.padding).attr("ry",t.padding).attr("width",t.width)},Ft=function(e,a,t,n,r){const i=r.htmlLabels,g=n%(Ct-1),p=a.append("g");t.section=g;let f="section-"+g;g<0&&(f+=" section-root"),p.attr("class",(t.class?t.class+" ":"")+"mindmap-node "+f);const E=p.append("g"),$=p.append("g"),O=t.descr.replace(/(<br\/*>)/g,`
`);mt($,O,{useHtmlLabels:i,width:t.width,classes:"mindmap-node-label"}),i||$.attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle");const y=$.node().getBBox(),[B]=gt(r.fontSize);if(t.height=y.height+B*1.1*.5+t.padding,t.width=y.width+2*t.padding,t.icon)if(t.type===e.nodeType.CIRCLE)t.height+=50,t.width+=50,p.append("foreignObject").attr("height","50px").attr("width",t.width).attr("style","text-align: center;").append("div").attr("class","icon-container").append("i").attr("class","node-icon-"+g+" "+t.icon),$.attr("transform","translate("+t.width/2+", "+(t.height/2-1.5*t.padding)+")");else{t.width+=50;const S=t.height;t.height=Math.max(S,60);const N=Math.abs(t.height-S);p.append("foreignObject").attr("width","60px").attr("height",t.height).attr("style","text-align: center;margin-top:"+N/2+"px;").append("div").attr("class","icon-container").append("i").attr("class","node-icon-"+g+" "+t.icon),$.attr("transform","translate("+(25+t.width/2)+", "+(N/2+t.padding/2)+")")}else if(i){const S=(t.width-y.width)/2,N=(t.height-y.height)/2;$.attr("transform","translate("+S+", "+N+")")}else{const S=t.width/2,N=t.padding/2;$.attr("transform","translate("+S+", "+N+")")}switch(t.type){case e.nodeType.DEFAULT:It(e,E,t,g);break;case e.nodeType.ROUNDED_RECT:Vt(e,E,t);break;case e.nodeType.RECT:Tt(e,E,t);break;case e.nodeType.CIRCLE:E.attr("transform","translate("+t.width/2+", "+ +t.height/2+")"),Bt(e,E,t);break;case e.nodeType.CLOUD:Rt(e,E,t);break;case e.nodeType.BANG:At(e,E,t);break;case e.nodeType.HEXAGON:Mt(e,E,t);break}return e.setElementForId(t.id,p),t.height},Ut=function(e,a){const t=e.getElementById(a.id),n=a.x||0,r=a.y||0;t.attr("transform","translate("+n+","+r+")")};tt.use(dt);function it(e,a,t,n,r){Ft(e,a,t,n,r),t.children&&t.children.forEach((i,g)=>{it(e,a,i,n<0?g:n,r)})}function Ht(e,a){a.edges().map((t,n)=>{const r=t.data();if(t[0]._private.bodyBounds){const i=t[0]._private.rscratch;I.trace("Edge: ",n,r),e.insert("path").attr("d",`M ${i.startX},${i.startY} L ${i.midX},${i.midY} L${i.endX},${i.endY} `).attr("class","edge section-edge-"+r.section+" edge-depth-"+r.depth)}})}function nt(e,a,t,n){a.add({group:"nodes",data:{id:e.id.toString(),labelText:e.descr,height:e.height,width:e.width,level:n,nodeId:e.id,padding:e.padding,type:e.type},position:{x:e.x,y:e.y}}),e.children&&e.children.forEach(r=>{nt(r,a,t,n+1),a.add({group:"edges",data:{id:`${e.id}_${r.id}`,source:e.id,target:r.id,depth:n,section:r.section}})})}function jt(e,a){return new Promise(t=>{const n=pt("body").append("div").attr("id","cy").attr("style","display:none"),r=tt({container:document.getElementById("cy"),style:[{selector:"edge",style:{"curve-style":"bezier"}}]});n.remove(),nt(e,r,a,0),r.nodes().forEach(function(i){i.layoutDimensions=()=>{const g=i.data();return{w:g.width,h:g.height}}}),r.layout({name:"cose-bilkent",quality:"proof",styleEnabled:!1,animate:!1}).run(),r.ready(i=>{I.info("Ready",i),t(r)})})}function zt(e,a){a.nodes().map((t,n)=>{const r=t.data();r.x=t.position().x,r.y=t.position().y,Ut(e,r);const i=e.getElementById(r.nodeId);I.info("Id:",n,"Position: (",t.position().x,", ",t.position().y,")",r),i.attr("transform",`translate(${t.position().x-r.width/2}, ${t.position().y-r.height/2})`),i.attr("attr",`apa-${n})`)})}const Gt=async(e,a,t,n)=>{var r,i;I.debug(`Rendering mindmap diagram
`+e);const g=n.db,p=g.getMindmap();if(!p)return;const f=q();f.htmlLabels=!1;const E=lt(a),$=E.append("g");$.attr("class","mindmap-edges");const O=E.append("g");O.attr("class","mindmap-nodes"),it(g,O,p,-1,f);const y=await jt(p,f);Ht($,y),zt(g,y),ht(void 0,E,((r=f.mindmap)==null?void 0:r.padding)??F.mindmap.padding,((i=f.mindmap)==null?void 0:i.useMaxWidth)??F.mindmap.useMaxWidth)},Xt={draw:Gt},Wt=e=>{let a="";for(let t=0;t<e.THEME_COLOR_LIMIT;t++)e["lineColor"+t]=e["lineColor"+t]||e["cScaleInv"+t],ut(e["lineColor"+t])?e["lineColor"+t]=ft(e["lineColor"+t],20):e["lineColor"+t]=yt(e["lineColor"+t],20);for(let t=0;t<e.THEME_COLOR_LIMIT;t++){const n=""+(17-3*t);a+=`
    .section-${t-1} rect, .section-${t-1} path, .section-${t-1} circle, .section-${t-1} polygon, .section-${t-1} path  {
      fill: ${e["cScale"+t]};
    }
    .section-${t-1} text {
     fill: ${e["cScaleLabel"+t]};
    }
    .node-icon-${t-1} {
      font-size: 40px;
      color: ${e["cScaleLabel"+t]};
    }
    .section-edge-${t-1}{
      stroke: ${e["cScale"+t]};
    }
    .edge-depth-${t-1}{
      stroke-width: ${n};
    }
    .section-${t-1} line {
      stroke: ${e["cScaleInv"+t]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return a},Yt=e=>`
  .edge {
    stroke-width: 3;
  }
  ${Wt(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`,qt=Yt,Re={db:vt,renderer:Xt,parser:Et,styles:qt};export{Re as diagram};
