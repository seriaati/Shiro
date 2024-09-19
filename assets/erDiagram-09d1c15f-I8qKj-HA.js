import{c as Y,s as ft,g as _t,b as mt,a as Et,n as kt,o as gt,l as K,p as Ot,u as Rt,h as bt,q as xt}from"./index.demo-CCm7av3I.js";import{G as Nt}from"./graph-orLZ1Cou.js";import{s as et,c as Tt}from"./isEmpty-CPJeZ-IN.js";import{l as Mt}from"./layout-CePnblK7.js";import"./owner-PrTRGOLt.js";import{v as At}from"./v5-DhYbOkY1.js";import{l as St}from"./line-DIkzZjhL.js";import"./index-B9SUlsL6.js";import"./FormInput-DX960qqm.js";import"./StyledButton-DVz0ew6u.js";import"./proxy-DpF5uie5.js";import"./provider-DWR--7J0.js";import"./viewport-C-voIzf7.js";import"./spring-C80N1tKa.js";import"./index-6TaX3-pf.js";import"./use-is-unmounted-An2Eu9cB.js";import"./use-event-callback-BQ6UHZlx.js";import"./dom-BowoBODo.js";import"./use-drag-controls-C23qmz0X.js";import"./visual-element-COOPoh5v.js";import"./index-cjK2ZoWF.js";import"./use-ref-value-wVjzkT4t.js";import"./Shiki-Bp-qInqF.js";import"./index-BQEcQMms.js";import"./use-motion-template-EJSHRjXn.js";import"./use-is-dark-Cjh7F_vx.js";import"./LinkCard-Bt0U9aeJ.js";import"./image-Ci5rK2-U.js";import"./Gallery-DeAoVbNP.js";import"./useQuery-D_cFV5YZ.js";import"./alert-xnDG_EXy.js";import"./index-Bg1J0sEf.js";import"./FloatPopover-BtFXWwwV.js";import"./SocialSourceLink-BBGfPIde.js";import"./Collapse-C9SYmtun.js";import"./CodeEditor-Bwvl2ukO.js";import"./index-LAI3pait.js";import"./cookie-Z9X-nQiI.js";import"./Mermaid-k1f-BXa3.js";import"./_baseUniq-25dB_poh.js";import"./_basePickBy-BvU9RMSZ.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";var rt=function(){var t=function(M,i,a,s){for(a=a||{},s=M.length;s--;a[M[s]]=i);return a},r=[6,8,10,20,22,24,26,27,28],l=[1,10],u=[1,11],c=[1,12],_=[1,13],p=[1,14],h=[1,15],d=[1,21],S=[1,22],b=[1,23],O=[1,24],N=[1,25],m=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],T=[1,34],L=[27,28,46,47],Z=[41,42,43,44,45],F=[17,34],B=[1,54],R=[1,53],x=[17,34,36,38],E={trace:function(){},yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:function(i,a,s,o,y,e,H){var n=e.length-1;switch(y){case 1:break;case 2:this.$=[];break;case 3:e[n-1].push(e[n]),this.$=e[n-1];break;case 4:case 5:this.$=e[n];break;case 6:case 7:this.$=[];break;case 8:o.addEntity(e[n-4]),o.addEntity(e[n-2]),o.addRelationship(e[n-4],e[n],e[n-2],e[n-3]);break;case 9:o.addEntity(e[n-3]),o.addAttributes(e[n-3],e[n-1]);break;case 10:o.addEntity(e[n-2]);break;case 11:o.addEntity(e[n]);break;case 12:o.addEntity(e[n-6],e[n-4]),o.addAttributes(e[n-6],e[n-1]);break;case 13:o.addEntity(e[n-5],e[n-3]);break;case 14:o.addEntity(e[n-3],e[n-1]);break;case 15:case 16:this.$=e[n].trim(),o.setAccTitle(this.$);break;case 17:case 18:this.$=e[n].trim(),o.setAccDescription(this.$);break;case 19:case 43:this.$=e[n];break;case 20:case 41:case 42:this.$=e[n].replace(/"/g,"");break;case 21:case 29:this.$=[e[n]];break;case 22:e[n].push(e[n-1]),this.$=e[n];break;case 23:this.$={attributeType:e[n-1],attributeName:e[n]};break;case 24:this.$={attributeType:e[n-2],attributeName:e[n-1],attributeKeyTypeList:e[n]};break;case 25:this.$={attributeType:e[n-2],attributeName:e[n-1],attributeComment:e[n]};break;case 26:this.$={attributeType:e[n-3],attributeName:e[n-2],attributeKeyTypeList:e[n-1],attributeComment:e[n]};break;case 27:case 28:case 31:this.$=e[n];break;case 30:e[n-2].push(e[n]),this.$=e[n-2];break;case 32:this.$=e[n].replace(/"/g,"");break;case 33:this.$={cardA:e[n],relType:e[n-1],cardB:e[n-2]};break;case 34:this.$=o.Cardinality.ZERO_OR_ONE;break;case 35:this.$=o.Cardinality.ZERO_OR_MORE;break;case 36:this.$=o.Cardinality.ONE_OR_MORE;break;case 37:this.$=o.Cardinality.ONLY_ONE;break;case 38:this.$=o.Cardinality.MD_PARENT;break;case 39:this.$=o.Identification.NON_IDENTIFYING;break;case 40:this.$=o.Identification.IDENTIFYING;break}},table:[{3:1,4:[1,2]},{1:[3]},t(r,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:l,22:u,24:c,26:_,27:p,28:h},t(r,[2,7],{1:[2,1]}),t(r,[2,3]),{9:16,11:9,20:l,22:u,24:c,26:_,27:p,28:h},t(r,[2,5]),t(r,[2,6]),t(r,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:d,42:S,43:b,44:O,45:N}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(r,[2,18]),t(m,[2,19]),t(m,[2,20]),t(r,[2,4]),{11:29,27:p,28:h},{16:30,17:[1,31],29:32,30:33,34:T},{11:35,27:p,28:h},{40:36,46:[1,37],47:[1,38]},t(L,[2,34]),t(L,[2,35]),t(L,[2,36]),t(L,[2,37]),t(L,[2,38]),t(r,[2,15]),t(r,[2,16]),t(r,[2,17]),{13:[1,39]},{17:[1,40]},t(r,[2,10]),{16:41,17:[2,21],29:32,30:33,34:T},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:d,42:S,43:b,44:O,45:N},t(Z,[2,39]),t(Z,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(r,[2,9]),{17:[2,22]},t(F,[2,23],{32:50,33:51,35:52,37:B,38:R}),t([17,34,37,38],[2,28]),t(r,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(r,[2,8]),t(r,[2,41]),t(r,[2,42]),t(r,[2,43]),t(F,[2,24],{33:56,36:[1,57],38:R}),t(F,[2,25]),t(x,[2,29]),t(F,[2,32]),t(x,[2,31]),{16:58,17:[1,59],29:32,30:33,34:T},t(F,[2,26]),{35:60,37:B},{17:[1,61]},t(r,[2,13]),t(x,[2,30]),t(r,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:function(i,a){if(a.recoverable)this.trace(i);else{var s=new Error(i);throw s.hash=a,s}},parse:function(i){var a=this,s=[0],o=[],y=[null],e=[],H=this.table,n="",Q=0,at=0,dt=2,nt=1,ut=e.slice.call(arguments,1),g=Object.create(this.lexer),z={yy:{}};for(var J in this.yy)Object.prototype.hasOwnProperty.call(this.yy,J)&&(z.yy[J]=this.yy[J]);g.setInput(i,z.yy),z.yy.lexer=g,z.yy.parser=this,typeof g.yylloc>"u"&&(g.yylloc={});var j=g.yylloc;e.push(j);var yt=g.options&&g.options.ranges;typeof z.yy.parseError=="function"?this.parseError=z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function pt(){var C;return C=o.pop()||g.lex()||nt,typeof C!="number"&&(C instanceof Array&&(o=C,C=o.pop()),C=a.symbols_[C]||C),C}for(var A,V,w,$,G={},U,P,st,q;;){if(V=s[s.length-1],this.defaultActions[V]?w=this.defaultActions[V]:((A===null||typeof A>"u")&&(A=pt()),w=H[V]&&H[V][A]),typeof w>"u"||!w.length||!w[0]){var tt="";q=[];for(U in H[V])this.terminals_[U]&&U>dt&&q.push("'"+this.terminals_[U]+"'");g.showPosition?tt="Parse error on line "+(Q+1)+`:
`+g.showPosition()+`
Expecting `+q.join(", ")+", got '"+(this.terminals_[A]||A)+"'":tt="Parse error on line "+(Q+1)+": Unexpected "+(A==nt?"end of input":"'"+(this.terminals_[A]||A)+"'"),this.parseError(tt,{text:g.match,token:this.terminals_[A]||A,line:g.yylineno,loc:j,expected:q})}if(w[0]instanceof Array&&w.length>1)throw new Error("Parse Error: multiple actions possible at state: "+V+", token: "+A);switch(w[0]){case 1:s.push(A),y.push(g.yytext),e.push(g.yylloc),s.push(w[1]),A=null,at=g.yyleng,n=g.yytext,Q=g.yylineno,j=g.yylloc;break;case 2:if(P=this.productions_[w[1]][1],G.$=y[y.length-P],G._$={first_line:e[e.length-(P||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(P||1)].first_column,last_column:e[e.length-1].last_column},yt&&(G._$.range=[e[e.length-(P||1)].range[0],e[e.length-1].range[1]]),$=this.performAction.apply(G,[n,at,Q,z.yy,w[1],y,e].concat(ut)),typeof $<"u")return $;P&&(s=s.slice(0,-1*P*2),y=y.slice(0,-1*P),e=e.slice(0,-1*P)),s.push(this.productions_[w[1]][0]),y.push(G.$),e.push(G._$),st=H[s[s.length-2]][s[s.length-1]],s.push(st);break;case 3:return!0}}return!0}},k=function(){var M={EOF:1,parseError:function(a,s){if(this.yy.parser)this.yy.parser.parseError(a,s);else throw new Error(a)},setInput:function(i,a){return this.yy=a||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var a=i.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var a=i.length,s=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===o.length?this.yylloc.first_column:0)+o[o.length-s.length].length-s[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),a=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+a+"^"},test_match:function(i,a){var s,o,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),o=i[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],s=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var e in y)this[e]=y[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,a,s,o;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),e=0;e<y.length;e++)if(s=this._input.match(this.rules[y[e]]),s&&(!a||s[0].length>a[0].length)){if(a=s,o=e,this.options.backtrack_lexer){if(i=this.test_match(s,y[e]),i!==!1)return i;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(i=this.test_match(a,y[o]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,s,o,y){switch(o){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 15:break;case 16:return 37;case 17:return 34;case 18:return 34;case 19:return 38;case 20:break;case 21:return this.popState(),17;case 22:return s.yytext[0];case 23:return 18;case 24:return 19;case 25:return 41;case 26:return 43;case 27:return 43;case 28:return 43;case 29:return 41;case 30:return 41;case 31:return 42;case 32:return 42;case 33:return 42;case 34:return 42;case 35:return 42;case 36:return 43;case 37:return 42;case 38:return 43;case 39:return 44;case 40:return 44;case 41:return 44;case 42:return 44;case 43:return 41;case 44:return 42;case 45:return 43;case 46:return 45;case 47:return 46;case 48:return 47;case 49:return 47;case 50:return 46;case 51:return 46;case 52:return 46;case 53:return 27;case 54:return s.yytext[0];case 55:return 6}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};return M}();E.lexer=k;function D(){this.yy={}}return D.prototype=E,E.Parser=D,new D}();rt.parser=rt;const wt=rt;let W={},it=[];const Dt={ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},It={NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},ct=function(t,r=void 0){return W[t]===void 0?(W[t]={attributes:[],alias:r},K.info("Added new entity :",t)):W[t]&&!W[t].alias&&r&&(W[t].alias=r,K.info(`Add alias '${r}' to entity '${t}'`)),W[t]},vt=()=>W,Lt=function(t,r){let l=ct(t),u;for(u=r.length-1;u>=0;u--)l.attributes.push(r[u]),K.debug("Added attribute ",r[u].attributeName)},Bt=function(t,r,l,u){let c={entityA:t,roleA:r,entityB:l,relSpec:u};it.push(c),K.debug("Added new relationship :",c)},Pt=()=>it,Ct=function(){W={},it=[],Ot()},Yt={Cardinality:Dt,Identification:It,getConfig:()=>Y().er,addEntity:ct,addAttributes:Lt,getEntities:vt,addRelationship:Bt,getRelationships:Pt,clear:Ct,setAccTitle:ft,getAccTitle:_t,setAccDescription:mt,getAccDescription:Et,setDiagramTitle:kt,getDiagramTitle:gt},I={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},Zt=function(t,r){let l;t.append("defs").append("marker").attr("id",I.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",I.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",I.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",I.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),l=t.append("defs").append("marker").attr("id",I.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),l.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),l.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18"),l=t.append("defs").append("marker").attr("id",I.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),l.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),l.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",I.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",I.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),l=t.append("defs").append("marker").attr("id",I.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),l.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),l.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),l=t.append("defs").append("marker").attr("id",I.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),l.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),l.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},v={ERMarkers:I,insertMarkers:Zt},Ft=/[^\dA-Za-z](\W)*/g;let f={},X=new Map;const Wt=function(t){const r=Object.keys(t);for(const l of r)f[l]=t[l]},zt=(t,r,l)=>{const u=f.entityPadding/3,c=f.entityPadding/3,_=f.fontSize*.85,p=r.node().getBBox(),h=[];let d=!1,S=!1,b=0,O=0,N=0,m=0,T=p.height+u*2,L=1;l.forEach(R=>{R.attributeKeyTypeList!==void 0&&R.attributeKeyTypeList.length>0&&(d=!0),R.attributeComment!==void 0&&(S=!0)}),l.forEach(R=>{const x=`${r.node().id}-attr-${L}`;let E=0;const k=xt(R.attributeType),D=t.append("text").classed("er entityLabel",!0).attr("id",`${x}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Y().fontFamily).style("font-size",_+"px").text(k),M=t.append("text").classed("er entityLabel",!0).attr("id",`${x}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Y().fontFamily).style("font-size",_+"px").text(R.attributeName),i={};i.tn=D,i.nn=M;const a=D.node().getBBox(),s=M.node().getBBox();if(b=Math.max(b,a.width),O=Math.max(O,s.width),E=Math.max(a.height,s.height),d){const o=R.attributeKeyTypeList!==void 0?R.attributeKeyTypeList.join(","):"",y=t.append("text").classed("er entityLabel",!0).attr("id",`${x}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Y().fontFamily).style("font-size",_+"px").text(o);i.kn=y;const e=y.node().getBBox();N=Math.max(N,e.width),E=Math.max(E,e.height)}if(S){const o=t.append("text").classed("er entityLabel",!0).attr("id",`${x}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",Y().fontFamily).style("font-size",_+"px").text(R.attributeComment||"");i.cn=o;const y=o.node().getBBox();m=Math.max(m,y.width),E=Math.max(E,y.height)}i.height=E,h.push(i),T+=E+u*2,L+=1});let Z=4;d&&(Z+=2),S&&(Z+=2);const F=b+O+N+m,B={width:Math.max(f.minEntityWidth,Math.max(p.width+f.entityPadding*2,F+c*Z)),height:l.length>0?T:Math.max(f.minEntityHeight,p.height+f.entityPadding*2)};if(l.length>0){const R=Math.max(0,(B.width-F-c*Z)/(Z/2));r.attr("transform","translate("+B.width/2+","+(u+p.height/2)+")");let x=p.height+u*2,E="attributeBoxOdd";h.forEach(k=>{const D=x+u+k.height/2;k.tn.attr("transform","translate("+c+","+D+")");const M=t.insert("rect","#"+k.tn.node().id).classed(`er ${E}`,!0).attr("x",0).attr("y",x).attr("width",b+c*2+R).attr("height",k.height+u*2),i=parseFloat(M.attr("x"))+parseFloat(M.attr("width"));k.nn.attr("transform","translate("+(i+c)+","+D+")");const a=t.insert("rect","#"+k.nn.node().id).classed(`er ${E}`,!0).attr("x",i).attr("y",x).attr("width",O+c*2+R).attr("height",k.height+u*2);let s=parseFloat(a.attr("x"))+parseFloat(a.attr("width"));if(d){k.kn.attr("transform","translate("+(s+c)+","+D+")");const o=t.insert("rect","#"+k.kn.node().id).classed(`er ${E}`,!0).attr("x",s).attr("y",x).attr("width",N+c*2+R).attr("height",k.height+u*2);s=parseFloat(o.attr("x"))+parseFloat(o.attr("width"))}S&&(k.cn.attr("transform","translate("+(s+c)+","+D+")"),t.insert("rect","#"+k.cn.node().id).classed(`er ${E}`,"true").attr("x",s).attr("y",x).attr("width",m+c*2+R).attr("height",k.height+u*2)),x+=k.height+u*2,E=E==="attributeBoxOdd"?"attributeBoxEven":"attributeBoxOdd"})}else B.height=Math.max(f.minEntityHeight,T),r.attr("transform","translate("+B.width/2+","+B.height/2+")");return B},Vt=function(t,r,l){const u=Object.keys(r);let c;return u.forEach(function(_){const p=Ut(_,"entity");X.set(_,p);const h=t.append("g").attr("id",p);c=c===void 0?p:c;const d="text-"+p,S=h.append("text").classed("er entityLabel",!0).attr("id",d).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",Y().fontFamily).style("font-size",f.fontSize+"px").text(r[_].alias??_),{width:b,height:O}=zt(h,S,r[_].attributes),m=h.insert("rect","#"+d).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",b).attr("height",O).node().getBBox();l.setNode(p,{width:m.width,height:m.height,shape:"rect",id:p})}),c},Gt=function(t,r){r.nodes().forEach(function(l){l!==void 0&&r.node(l)!==void 0&&t.select("#"+l).attr("transform","translate("+(r.node(l).x-r.node(l).width/2)+","+(r.node(l).y-r.node(l).height/2)+" )")})},ht=function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")},Ht=function(t,r){return t.forEach(function(l){r.setEdge(X.get(l.entityA),X.get(l.entityB),{relationship:l},ht(l))}),t};let ot=0;const Kt=function(t,r,l,u,c){ot++;const _=l.edge(X.get(r.entityA),X.get(r.entityB),ht(r)),p=St().x(function(T){return T.x}).y(function(T){return T.y}).curve(Tt),h=t.insert("path","#"+u).classed("er relationshipLine",!0).attr("d",p(_.points)).style("stroke",f.stroke).style("fill","none");r.relSpec.relType===c.db.Identification.NON_IDENTIFYING&&h.attr("stroke-dasharray","8,8");let d="";switch(f.arrowMarkerAbsolute&&(d=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,d=d.replace(/\(/g,"\\("),d=d.replace(/\)/g,"\\)")),r.relSpec.cardA){case c.db.Cardinality.ZERO_OR_ONE:h.attr("marker-end","url("+d+"#"+v.ERMarkers.ZERO_OR_ONE_END+")");break;case c.db.Cardinality.ZERO_OR_MORE:h.attr("marker-end","url("+d+"#"+v.ERMarkers.ZERO_OR_MORE_END+")");break;case c.db.Cardinality.ONE_OR_MORE:h.attr("marker-end","url("+d+"#"+v.ERMarkers.ONE_OR_MORE_END+")");break;case c.db.Cardinality.ONLY_ONE:h.attr("marker-end","url("+d+"#"+v.ERMarkers.ONLY_ONE_END+")");break;case c.db.Cardinality.MD_PARENT:h.attr("marker-end","url("+d+"#"+v.ERMarkers.MD_PARENT_END+")");break}switch(r.relSpec.cardB){case c.db.Cardinality.ZERO_OR_ONE:h.attr("marker-start","url("+d+"#"+v.ERMarkers.ZERO_OR_ONE_START+")");break;case c.db.Cardinality.ZERO_OR_MORE:h.attr("marker-start","url("+d+"#"+v.ERMarkers.ZERO_OR_MORE_START+")");break;case c.db.Cardinality.ONE_OR_MORE:h.attr("marker-start","url("+d+"#"+v.ERMarkers.ONE_OR_MORE_START+")");break;case c.db.Cardinality.ONLY_ONE:h.attr("marker-start","url("+d+"#"+v.ERMarkers.ONLY_ONE_START+")");break;case c.db.Cardinality.MD_PARENT:h.attr("marker-start","url("+d+"#"+v.ERMarkers.MD_PARENT_START+")");break}const S=h.node().getTotalLength(),b=h.node().getPointAtLength(S*.5),O="rel"+ot,m=t.append("text").classed("er relationshipLabel",!0).attr("id",O).attr("x",b.x).attr("y",b.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",Y().fontFamily).style("font-size",f.fontSize+"px").text(r.roleA).node().getBBox();t.insert("rect","#"+O).classed("er relationshipLabelBox",!0).attr("x",b.x-m.width/2).attr("y",b.y-m.height/2).attr("width",m.width).attr("height",m.height)},Xt=function(t,r,l,u){f=Y().er,K.info("Drawing ER diagram");const c=Y().securityLevel;let _;c==="sandbox"&&(_=et("#i"+r));const h=(c==="sandbox"?et(_.nodes()[0].contentDocument.body):et("body")).select(`[id='${r}']`);v.insertMarkers(h,f);let d;d=new Nt({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:f.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});const S=Vt(h,u.db.getEntities(),d),b=Ht(u.db.getRelationships(),d);Mt(d),Gt(h,d),b.forEach(function(L){Kt(h,L,d,S,u)});const O=f.diagramPadding;Rt.insertTitle(h,"entityTitleText",f.titleTopMargin,u.db.getDiagramTitle());const N=h.node().getBBox(),m=N.width+O*2,T=N.height+O*2;bt(h,T,m,f.useMaxWidth),h.attr("viewBox",`${N.x-O} ${N.y-O} ${m} ${T}`)},Qt="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function Ut(t="",r=""){const l=t.replace(Ft,"");return`${lt(r)}${lt(l)}${At(t,Qt)}`}function lt(t=""){return t.length>0?`${t}-`:""}const qt={setConf:Wt,draw:Xt},Jt=t=>`
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
  #MD_PARENT_START {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  #MD_PARENT_END {
    fill: #f5f5f5 !important;
    stroke: ${t.lineColor} !important;
    stroke-width: 1;
  }
  
`,jt=Jt,ze={parser:wt,db:Yt,renderer:qt,styles:jt};export{ze as diagram};
