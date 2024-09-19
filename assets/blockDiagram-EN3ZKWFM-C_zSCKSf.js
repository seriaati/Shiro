import{a as ze,i as Ce,p as Re,m as Ae}from"./chunk-UGV5ZQQN-BcVmKJJE.js";import{i as fe,p as Be}from"./chunk-YWFND7JV-BwnwEKGm.js";import{_ as h,d as be,l as L,R as Pe,F as ie,j as Fe,r as Ke,e as Me}from"./mermaid.core-DcvARf91.js";import{c as Ye}from"./clone-D4mtdAug.js";import{s as U,r as We}from"./isEmpty-CPJeZ-IN.js";import{G as Ve}from"./graph-orLZ1Cou.js";import{c as je}from"./channel-kqAOZT_k.js";import"./line-DIkzZjhL.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./index-B9SUlsL6.js";import"./owner-PrTRGOLt.js";import"./StyledButton-DVz0ew6u.js";import"./proxy-DpF5uie5.js";import"./_baseUniq-25dB_poh.js";var se=function(){var e=h(function(O,u,s,a){for(s=s||{},a=O.length;a--;s[O[a]]=u);return s},"o"),o=[1,7],c=[1,13],l=[1,14],r=[1,15],g=[1,19],n=[1,16],f=[1,17],p=[1,18],x=[8,30],b=[8,21,28,29,30,31,32,40,44,47],m=[1,23],z=[1,24],S=[8,15,16,21,28,29,30,31,32,40,44,47],_=[8,15,16,21,27,28,29,30,31,32,40,44,47],w=[1,49],N={trace:h(function(){},"trace"),yy:{},symbols_:{error:2,spaceLines:3,SPACELINE:4,NL:5,separator:6,SPACE:7,EOF:8,start:9,BLOCK_DIAGRAM_KEY:10,document:11,stop:12,statement:13,link:14,LINK:15,START_LINK:16,LINK_LABEL:17,STR:18,nodeStatement:19,columnsStatement:20,SPACE_BLOCK:21,blockStatement:22,classDefStatement:23,cssClassStatement:24,styleStatement:25,node:26,SIZE:27,COLUMNS:28,"id-block":29,end:30,block:31,NODE_ID:32,nodeShapeNLabel:33,dirList:34,DIR:35,NODE_DSTART:36,NODE_DEND:37,BLOCK_ARROW_START:38,BLOCK_ARROW_END:39,classDef:40,CLASSDEF_ID:41,CLASSDEF_STYLEOPTS:42,DEFAULT:43,class:44,CLASSENTITY_IDS:45,STYLECLASS:46,style:47,STYLE_ENTITY_IDS:48,STYLE_DEFINITION_DATA:49,$accept:0,$end:1},terminals_:{2:"error",4:"SPACELINE",5:"NL",7:"SPACE",8:"EOF",10:"BLOCK_DIAGRAM_KEY",15:"LINK",16:"START_LINK",17:"LINK_LABEL",18:"STR",21:"SPACE_BLOCK",27:"SIZE",28:"COLUMNS",29:"id-block",30:"end",31:"block",32:"NODE_ID",35:"DIR",36:"NODE_DSTART",37:"NODE_DEND",38:"BLOCK_ARROW_START",39:"BLOCK_ARROW_END",40:"classDef",41:"CLASSDEF_ID",42:"CLASSDEF_STYLEOPTS",43:"DEFAULT",44:"class",45:"CLASSENTITY_IDS",46:"STYLECLASS",47:"style",48:"STYLE_ENTITY_IDS",49:"STYLE_DEFINITION_DATA"},productions_:[0,[3,1],[3,2],[3,2],[6,1],[6,1],[6,1],[9,3],[12,1],[12,1],[12,2],[12,2],[11,1],[11,2],[14,1],[14,4],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[19,3],[19,2],[19,1],[20,1],[22,4],[22,3],[26,1],[26,2],[34,1],[34,2],[33,3],[33,4],[23,3],[23,3],[24,3],[25,3]],performAction:h(function(u,s,a,d,y,t,K){var i=t.length-1;switch(y){case 4:d.getLogger().debug("Rule: separator (NL) ");break;case 5:d.getLogger().debug("Rule: separator (Space) ");break;case 6:d.getLogger().debug("Rule: separator (EOF) ");break;case 7:d.getLogger().debug("Rule: hierarchy: ",t[i-1]),d.setHierarchy(t[i-1]);break;case 8:d.getLogger().debug("Stop NL ");break;case 9:d.getLogger().debug("Stop EOF ");break;case 10:d.getLogger().debug("Stop NL2 ");break;case 11:d.getLogger().debug("Stop EOF2 ");break;case 12:d.getLogger().debug("Rule: statement: ",t[i]),typeof t[i].length=="number"?this.$=t[i]:this.$=[t[i]];break;case 13:d.getLogger().debug("Rule: statement #2: ",t[i-1]),this.$=[t[i-1]].concat(t[i]);break;case 14:d.getLogger().debug("Rule: link: ",t[i],u),this.$={edgeTypeStr:t[i],label:""};break;case 15:d.getLogger().debug("Rule: LABEL link: ",t[i-3],t[i-1],t[i]),this.$={edgeTypeStr:t[i],label:t[i-1]};break;case 18:const P=parseInt(t[i]),Y=d.generateId();this.$={id:Y,type:"space",label:"",width:P,children:[]};break;case 23:d.getLogger().debug("Rule: (nodeStatement link node) ",t[i-2],t[i-1],t[i]," typestr: ",t[i-1].edgeTypeStr);const Z=d.edgeStrToEdgeData(t[i-1].edgeTypeStr);this.$=[{id:t[i-2].id,label:t[i-2].label,type:t[i-2].type,directions:t[i-2].directions},{id:t[i-2].id+"-"+t[i].id,start:t[i-2].id,end:t[i].id,label:t[i-1].label,type:"edge",directions:t[i].directions,arrowTypeEnd:Z,arrowTypeStart:"arrow_open"},{id:t[i].id,label:t[i].label,type:d.typeStr2Type(t[i].typeStr),directions:t[i].directions}];break;case 24:d.getLogger().debug("Rule: nodeStatement (abc88 node size) ",t[i-1],t[i]),this.$={id:t[i-1].id,label:t[i-1].label,type:d.typeStr2Type(t[i-1].typeStr),directions:t[i-1].directions,widthInColumns:parseInt(t[i],10)};break;case 25:d.getLogger().debug("Rule: nodeStatement (node) ",t[i]),this.$={id:t[i].id,label:t[i].label,type:d.typeStr2Type(t[i].typeStr),directions:t[i].directions,widthInColumns:1};break;case 26:d.getLogger().debug("APA123",this?this:"na"),d.getLogger().debug("COLUMNS: ",t[i]),this.$={type:"column-setting",columns:t[i]==="auto"?-1:parseInt(t[i])};break;case 27:d.getLogger().debug("Rule: id-block statement : ",t[i-2],t[i-1]),d.generateId(),this.$={...t[i-2],type:"composite",children:t[i-1]};break;case 28:d.getLogger().debug("Rule: blockStatement : ",t[i-2],t[i-1],t[i]);const W=d.generateId();this.$={id:W,type:"composite",label:"",children:t[i-1]};break;case 29:d.getLogger().debug("Rule: node (NODE_ID separator): ",t[i]),this.$={id:t[i]};break;case 30:d.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ",t[i-1],t[i]),this.$={id:t[i-1],label:t[i].label,typeStr:t[i].typeStr,directions:t[i].directions};break;case 31:d.getLogger().debug("Rule: dirList: ",t[i]),this.$=[t[i]];break;case 32:d.getLogger().debug("Rule: dirList: ",t[i-1],t[i]),this.$=[t[i-1]].concat(t[i]);break;case 33:d.getLogger().debug("Rule: nodeShapeNLabel: ",t[i-2],t[i-1],t[i]),this.$={typeStr:t[i-2]+t[i],label:t[i-1]};break;case 34:d.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ",t[i-3],t[i-2]," #3:",t[i-1],t[i]),this.$={typeStr:t[i-3]+t[i],label:t[i-2],directions:t[i-1]};break;case 35:case 36:this.$={type:"classDef",id:t[i-1].trim(),css:t[i].trim()};break;case 37:this.$={type:"applyClass",id:t[i-1].trim(),styleClass:t[i].trim()};break;case 38:this.$={type:"applyStyles",id:t[i-1].trim(),stylesStr:t[i].trim()};break}},"anonymous"),table:[{9:1,10:[1,2]},{1:[3]},{11:3,13:4,19:5,20:6,21:o,22:8,23:9,24:10,25:11,26:12,28:c,29:l,31:r,32:g,40:n,44:f,47:p},{8:[1,20]},e(x,[2,12],{13:4,19:5,20:6,22:8,23:9,24:10,25:11,26:12,11:21,21:o,28:c,29:l,31:r,32:g,40:n,44:f,47:p}),e(b,[2,16],{14:22,15:m,16:z}),e(b,[2,17]),e(b,[2,18]),e(b,[2,19]),e(b,[2,20]),e(b,[2,21]),e(b,[2,22]),e(S,[2,25],{27:[1,25]}),e(b,[2,26]),{19:26,26:12,32:g},{11:27,13:4,19:5,20:6,21:o,22:8,23:9,24:10,25:11,26:12,28:c,29:l,31:r,32:g,40:n,44:f,47:p},{41:[1,28],43:[1,29]},{45:[1,30]},{48:[1,31]},e(_,[2,29],{33:32,36:[1,33],38:[1,34]}),{1:[2,7]},e(x,[2,13]),{26:35,32:g},{32:[2,14]},{17:[1,36]},e(S,[2,24]),{11:37,13:4,14:22,15:m,16:z,19:5,20:6,21:o,22:8,23:9,24:10,25:11,26:12,28:c,29:l,31:r,32:g,40:n,44:f,47:p},{30:[1,38]},{42:[1,39]},{42:[1,40]},{46:[1,41]},{49:[1,42]},e(_,[2,30]),{18:[1,43]},{18:[1,44]},e(S,[2,23]),{18:[1,45]},{30:[1,46]},e(b,[2,28]),e(b,[2,35]),e(b,[2,36]),e(b,[2,37]),e(b,[2,38]),{37:[1,47]},{34:48,35:w},{15:[1,50]},e(b,[2,27]),e(_,[2,33]),{39:[1,51]},{34:52,35:w,39:[2,31]},{32:[2,15]},e(_,[2,34]),{39:[2,32]}],defaultActions:{20:[2,7],23:[2,14],50:[2,15],52:[2,32]},parseError:h(function(u,s){if(s.recoverable)this.trace(u);else{var a=new Error(u);throw a.hash=s,a}},"parseError"),parse:h(function(u){var s=this,a=[0],d=[],y=[null],t=[],K=this.table,i="",P=0,Y=0,Z=2,W=1,Ie=t.slice.call(arguments,1),k=Object.create(this.lexer),R={yy:{}};for(var Q in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Q)&&(R.yy[Q]=this.yy[Q]);k.setInput(u,R.yy),R.yy.lexer=k,R.yy.parser=this,typeof k.yylloc>"u"&&(k.yylloc={});var $=k.yylloc;t.push($);var Te=k.options&&k.options.ranges;typeof R.yy.parseError=="function"?this.parseError=R.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Oe(v){a.length=a.length-2*v,y.length=y.length-v,t.length=t.length-v}h(Oe,"popStack");function he(){var v;return v=d.pop()||k.lex()||W,typeof v!="number"&&(v instanceof Array&&(d=v,v=d.pop()),v=s.symbols_[v]||v),v}h(he,"lex");for(var D,A,I,ee,F={},V,C,ue,j;;){if(A=a[a.length-1],this.defaultActions[A]?I=this.defaultActions[A]:((D===null||typeof D>"u")&&(D=he()),I=K[A]&&K[A][D]),typeof I>"u"||!I.length||!I[0]){var te="";j=[];for(V in K[A])this.terminals_[V]&&V>Z&&j.push("'"+this.terminals_[V]+"'");k.showPosition?te="Parse error on line "+(P+1)+`:
`+k.showPosition()+`
Expecting `+j.join(", ")+", got '"+(this.terminals_[D]||D)+"'":te="Parse error on line "+(P+1)+": Unexpected "+(D==W?"end of input":"'"+(this.terminals_[D]||D)+"'"),this.parseError(te,{text:k.match,token:this.terminals_[D]||D,line:k.yylineno,loc:$,expected:j})}if(I[0]instanceof Array&&I.length>1)throw new Error("Parse Error: multiple actions possible at state: "+A+", token: "+D);switch(I[0]){case 1:a.push(D),y.push(k.yytext),t.push(k.yylloc),a.push(I[1]),D=null,Y=k.yyleng,i=k.yytext,P=k.yylineno,$=k.yylloc;break;case 2:if(C=this.productions_[I[1]][1],F.$=y[y.length-C],F._$={first_line:t[t.length-(C||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(C||1)].first_column,last_column:t[t.length-1].last_column},Te&&(F._$.range=[t[t.length-(C||1)].range[0],t[t.length-1].range[1]]),ee=this.performAction.apply(F,[i,Y,P,R.yy,I[1],y,t].concat(Ie)),typeof ee<"u")return ee;C&&(a=a.slice(0,-1*C*2),y=y.slice(0,-1*C),t=t.slice(0,-1*C)),a.push(this.productions_[I[1]][0]),y.push(F.$),t.push(F._$),ue=K[a[a.length-2]][a[a.length-1]],a.push(ue);break;case 3:return!0}}return!0},"parse")},J=function(){var O={EOF:1,parseError:h(function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},"parseError"),setInput:h(function(u,s){return this.yy=s||this.yy||{},this._input=u,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:h(function(){var u=this._input[0];this.yytext+=u,this.yyleng++,this.offset++,this.match+=u,this.matched+=u;var s=u.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),u},"input"),unput:h(function(u){var s=u.length,a=u.split(/(?:\r\n?|\n)/g);this._input=u+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===d.length?this.yylloc.first_column:0)+d[d.length-a.length].length-a[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},"unput"),more:h(function(){return this._more=!0,this},"more"),reject:h(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:h(function(u){this.unput(this.match.slice(u))},"less"),pastInput:h(function(){var u=this.matched.substr(0,this.matched.length-this.match.length);return(u.length>20?"...":"")+u.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:h(function(){var u=this.match;return u.length<20&&(u+=this._input.substr(0,20-u.length)),(u.substr(0,20)+(u.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:h(function(){var u=this.pastInput(),s=new Array(u.length+1).join("-");return u+this.upcomingInput()+`
`+s+"^"},"showPosition"),test_match:h(function(u,s){var a,d,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),d=u[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+u[0].length},this.yytext+=u[0],this.match+=u[0],this.matches=u,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(u[0].length),this.matched+=u[0],a=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack){for(var t in y)this[t]=y[t];return!1}return!1},"test_match"),next:h(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var u,s,a,d;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),t=0;t<y.length;t++)if(a=this._input.match(this.rules[y[t]]),a&&(!s||a[0].length>s[0].length)){if(s=a,d=t,this.options.backtrack_lexer){if(u=this.test_match(a,y[t]),u!==!1)return u;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(u=this.test_match(s,y[d]),u!==!1?u:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:h(function(){var s=this.next();return s||this.lex()},"lex"),begin:h(function(s){this.conditionStack.push(s)},"begin"),popState:h(function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:h(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:h(function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},"topState"),pushState:h(function(s){this.begin(s)},"pushState"),stateStackSize:h(function(){return this.conditionStack.length},"stateStackSize"),options:{},performAction:h(function(s,a,d,y){switch(d){case 0:return 10;case 1:return s.getLogger().debug("Found space-block"),31;case 2:return s.getLogger().debug("Found nl-block"),31;case 3:return s.getLogger().debug("Found space-block"),29;case 4:s.getLogger().debug(".",a.yytext);break;case 5:s.getLogger().debug("_",a.yytext);break;case 6:return 5;case 7:return a.yytext=-1,28;case 8:return a.yytext=a.yytext.replace(/columns\s+/,""),s.getLogger().debug("COLUMNS (LEX)",a.yytext),28;case 9:this.pushState("md_string");break;case 10:return"MD_STR";case 11:this.popState();break;case 12:this.pushState("string");break;case 13:s.getLogger().debug("LEX: POPPING STR:",a.yytext),this.popState();break;case 14:return s.getLogger().debug("LEX: STR end:",a.yytext),"STR";case 15:return a.yytext=a.yytext.replace(/space\:/,""),s.getLogger().debug("SPACE NUM (LEX)",a.yytext),21;case 16:return a.yytext="1",s.getLogger().debug("COLUMNS (LEX)",a.yytext),21;case 17:return 43;case 18:return"LINKSTYLE";case 19:return"INTERPOLATE";case 20:return this.pushState("CLASSDEF"),40;case 21:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 22:return this.popState(),this.pushState("CLASSDEFID"),41;case 23:return this.popState(),42;case 24:return this.pushState("CLASS"),44;case 25:return this.popState(),this.pushState("CLASS_STYLE"),45;case 26:return this.popState(),46;case 27:return this.pushState("STYLE_STMNT"),47;case 28:return this.popState(),this.pushState("STYLE_DEFINITION"),48;case 29:return this.popState(),49;case 30:return this.pushState("acc_title"),"acc_title";case 31:return this.popState(),"acc_title_value";case 32:return this.pushState("acc_descr"),"acc_descr";case 33:return this.popState(),"acc_descr_value";case 34:this.pushState("acc_descr_multiline");break;case 35:this.popState();break;case 36:return"acc_descr_multiline_value";case 37:return 30;case 38:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 39:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 40:return this.popState(),s.getLogger().debug("Lex: ))"),"NODE_DEND";case 41:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 42:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 43:return this.popState(),s.getLogger().debug("Lex: (-"),"NODE_DEND";case 44:return this.popState(),s.getLogger().debug("Lex: -)"),"NODE_DEND";case 45:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 46:return this.popState(),s.getLogger().debug("Lex: ]]"),"NODE_DEND";case 47:return this.popState(),s.getLogger().debug("Lex: ("),"NODE_DEND";case 48:return this.popState(),s.getLogger().debug("Lex: ])"),"NODE_DEND";case 49:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";case 50:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";case 51:return this.popState(),s.getLogger().debug("Lex: )]"),"NODE_DEND";case 52:return this.popState(),s.getLogger().debug("Lex: )"),"NODE_DEND";case 53:return this.popState(),s.getLogger().debug("Lex: ]>"),"NODE_DEND";case 54:return this.popState(),s.getLogger().debug("Lex: ]"),"NODE_DEND";case 55:return s.getLogger().debug("Lexa: -)"),this.pushState("NODE"),36;case 56:return s.getLogger().debug("Lexa: (-"),this.pushState("NODE"),36;case 57:return s.getLogger().debug("Lexa: ))"),this.pushState("NODE"),36;case 58:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 59:return s.getLogger().debug("Lex: ((("),this.pushState("NODE"),36;case 60:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 61:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 62:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 63:return s.getLogger().debug("Lexc: >"),this.pushState("NODE"),36;case 64:return s.getLogger().debug("Lexa: (["),this.pushState("NODE"),36;case 65:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 66:return this.pushState("NODE"),36;case 67:return this.pushState("NODE"),36;case 68:return this.pushState("NODE"),36;case 69:return this.pushState("NODE"),36;case 70:return this.pushState("NODE"),36;case 71:return this.pushState("NODE"),36;case 72:return this.pushState("NODE"),36;case 73:return s.getLogger().debug("Lexa: ["),this.pushState("NODE"),36;case 74:return this.pushState("BLOCK_ARROW"),s.getLogger().debug("LEX ARR START"),38;case 75:return s.getLogger().debug("Lex: NODE_ID",a.yytext),32;case 76:return s.getLogger().debug("Lex: EOF",a.yytext),8;case 77:this.pushState("md_string");break;case 78:this.pushState("md_string");break;case 79:return"NODE_DESCR";case 80:this.popState();break;case 81:s.getLogger().debug("Lex: Starting string"),this.pushState("string");break;case 82:s.getLogger().debug("LEX ARR: Starting string"),this.pushState("string");break;case 83:return s.getLogger().debug("LEX: NODE_DESCR:",a.yytext),"NODE_DESCR";case 84:s.getLogger().debug("LEX POPPING"),this.popState();break;case 85:s.getLogger().debug("Lex: =>BAE"),this.pushState("ARROW_DIR");break;case 86:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (right): dir:",a.yytext),"DIR";case 87:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (left):",a.yytext),"DIR";case 88:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (x):",a.yytext),"DIR";case 89:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (y):",a.yytext),"DIR";case 90:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (up):",a.yytext),"DIR";case 91:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (down):",a.yytext),"DIR";case 92:return a.yytext="]>",s.getLogger().debug("Lex (ARROW_DIR end):",a.yytext),this.popState(),this.popState(),"BLOCK_ARROW_END";case 93:return s.getLogger().debug("Lex: LINK","#"+a.yytext+"#"),15;case 94:return s.getLogger().debug("Lex: LINK",a.yytext),15;case 95:return s.getLogger().debug("Lex: LINK",a.yytext),15;case 96:return s.getLogger().debug("Lex: LINK",a.yytext),15;case 97:return s.getLogger().debug("Lex: START_LINK",a.yytext),this.pushState("LLABEL"),16;case 98:return s.getLogger().debug("Lex: START_LINK",a.yytext),this.pushState("LLABEL"),16;case 99:return s.getLogger().debug("Lex: START_LINK",a.yytext),this.pushState("LLABEL"),16;case 100:this.pushState("md_string");break;case 101:return s.getLogger().debug("Lex: Starting string"),this.pushState("string"),"LINK_LABEL";case 102:return this.popState(),s.getLogger().debug("Lex: LINK","#"+a.yytext+"#"),15;case 103:return this.popState(),s.getLogger().debug("Lex: LINK",a.yytext),15;case 104:return this.popState(),s.getLogger().debug("Lex: LINK",a.yytext),15;case 105:return s.getLogger().debug("Lex: COLON",a.yytext),a.yytext=a.yytext.slice(1),27}},"anonymous"),rules:[/^(?:block-beta\b)/,/^(?:block\s+)/,/^(?:block\n+)/,/^(?:block:)/,/^(?:[\s]+)/,/^(?:[\n]+)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:columns\s+auto\b)/,/^(?:columns\s+[\d]+)/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:space[:]\d+)/,/^(?:space\b)/,/^(?:default\b)/,/^(?:linkStyle\b)/,/^(?:interpolate\b)/,/^(?:classDef\s+)/,/^(?:DEFAULT\s+)/,/^(?:\w+\s+)/,/^(?:[^\n]*)/,/^(?:class\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:style\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:end\b\s*)/,/^(?:\(\(\()/,/^(?:\)\)\))/,/^(?:[\)]\))/,/^(?:\}\})/,/^(?:\})/,/^(?:\(-)/,/^(?:-\))/,/^(?:\(\()/,/^(?:\]\])/,/^(?:\()/,/^(?:\]\))/,/^(?:\\\])/,/^(?:\/\])/,/^(?:\)\])/,/^(?:[\)])/,/^(?:\]>)/,/^(?:[\]])/,/^(?:-\))/,/^(?:\(-)/,/^(?:\)\))/,/^(?:\))/,/^(?:\(\(\()/,/^(?:\(\()/,/^(?:\{\{)/,/^(?:\{)/,/^(?:>)/,/^(?:\(\[)/,/^(?:\()/,/^(?:\[\[)/,/^(?:\[\|)/,/^(?:\[\()/,/^(?:\)\)\))/,/^(?:\[\\)/,/^(?:\[\/)/,/^(?:\[\\)/,/^(?:\[)/,/^(?:<\[)/,/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,/^(?:$)/,/^(?:["][`])/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]+)/,/^(?:["])/,/^(?:\]>\s*\()/,/^(?:,?\s*right\s*)/,/^(?:,?\s*left\s*)/,/^(?:,?\s*x\s*)/,/^(?:,?\s*y\s*)/,/^(?:,?\s*up\s*)/,/^(?:,?\s*down\s*)/,/^(?:\)\s*)/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?:\s*~~[\~]+\s*)/,/^(?:\s*[xo<]?--\s*)/,/^(?:\s*[xo<]?==\s*)/,/^(?:\s*[xo<]?-\.\s*)/,/^(?:["][`])/,/^(?:["])/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?::\d+)/],conditions:{STYLE_DEFINITION:{rules:[29],inclusive:!1},STYLE_STMNT:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[23],inclusive:!1},CLASSDEF:{rules:[21,22],inclusive:!1},CLASS_STYLE:{rules:[26],inclusive:!1},CLASS:{rules:[25],inclusive:!1},LLABEL:{rules:[100,101,102,103,104],inclusive:!1},ARROW_DIR:{rules:[86,87,88,89,90,91,92],inclusive:!1},BLOCK_ARROW:{rules:[77,82,85],inclusive:!1},NODE:{rules:[38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,78,81],inclusive:!1},md_string:{rules:[10,11,79,80],inclusive:!1},space:{rules:[],inclusive:!1},string:{rules:[13,14,83,84],inclusive:!1},acc_descr_multiline:{rules:[35,36],inclusive:!1},acc_descr:{rules:[33],inclusive:!1},acc_title:{rules:[31],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,12,15,16,17,18,19,20,24,27,30,32,34,37,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,93,94,95,96,97,98,99,105],inclusive:!0}}};return O}();N.lexer=J;function B(){this.yy={}}return h(B,"Parser"),B.prototype=N,N.Parser=B,new B}();se.parser=se;var Ue=se,T=new Map,ae=[],re=new Map,ge="color",de="fill",Xe="bgFill",Se=",",Ge=be(),G=new Map,He=h(e=>Me.sanitizeText(e,Ge),"sanitizeText"),qe=h(function(e,o=""){let c=G.get(e);c||(c={id:e,styles:[],textStyles:[]},G.set(e,c)),o?.split(Se).forEach(l=>{const r=l.replace(/([^;]*);/,"$1").trim();if(RegExp(ge).exec(l)){const n=r.replace(de,Xe).replace(ge,de);c.textStyles.push(n)}c.styles.push(r)})},"addStyleClass"),Je=h(function(e,o=""){const c=T.get(e);o!=null&&(c.styles=o.split(Se))},"addStyle2Node"),Ze=h(function(e,o){e.split(",").forEach(function(c){let l=T.get(c);if(l===void 0){const r=c.trim();l={id:r,type:"na",children:[]},T.set(r,l)}l.classes||(l.classes=[]),l.classes.push(o)})},"setCssClass"),xe=h((e,o)=>{const c=e.flat(),l=[];for(const r of c){if(r.label&&(r.label=He(r.label)),r.type==="classDef"){qe(r.id,r.css);continue}if(r.type==="applyClass"){Ze(r.id,r?.styleClass??"");continue}if(r.type==="applyStyles"){r?.stylesStr&&Je(r.id,r?.stylesStr);continue}if(r.type==="column-setting")o.columns=r.columns??-1;else if(r.type==="edge"){const g=(re.get(r.id)??0)+1;re.set(r.id,g),r.id=g+"-"+r.id,ae.push(r)}else{r.label||(r.type==="composite"?r.label="":r.label=r.id);const g=T.get(r.id);if(g===void 0?T.set(r.id,r):(r.type!=="na"&&(g.type=r.type),r.label!==r.id&&(g.label=r.label)),r.children&&xe(r.children,r),r.type==="space"){const n=r.width??1;for(let f=0;f<n;f++){const p=Ye(r);p.id=p.id+"-"+f,T.set(p.id,p),l.push(p)}}else g===void 0&&l.push(r)}}o.children=l},"populateBlockDatabase"),ne=[],M={id:"root",type:"composite",children:[],columns:-1},Qe=h(()=>{L.debug("Clear called"),Ke(),M={id:"root",type:"composite",children:[],columns:-1},T=new Map([["root",M]]),ne=[],G=new Map,ae=[],re=new Map},"clear");function Le(e){switch(L.debug("typeStr2Type",e),e){case"[]":return"square";case"()":return L.debug("we have a round"),"round";case"(())":return"circle";case">]":return"rect_left_inv_arrow";case"{}":return"diamond";case"{{}}":return"hexagon";case"([])":return"stadium";case"[[]]":return"subroutine";case"[()]":return"cylinder";case"((()))":return"doublecircle";case"[//]":return"lean_right";case"[\\\\]":return"lean_left";case"[/\\]":return"trapezoid";case"[\\/]":return"inv_trapezoid";case"<[]>":return"block_arrow";default:return"na"}}h(Le,"typeStr2Type");function me(e){switch(L.debug("typeStr2Type",e),e){case"==":return"thick";default:return"normal"}}h(me,"edgeTypeStr2Type");function ye(e){switch(e.trim()){case"--x":return"arrow_cross";case"--o":return"arrow_circle";default:return"arrow_point"}}h(ye,"edgeStrToEdgeData");var pe=0,$e=h(()=>(pe++,"id-"+Math.random().toString(36).substr(2,12)+"-"+pe),"generateId"),et=h(e=>{M.children=e,xe(e,M),ne=M.children},"setHierarchy"),tt=h(e=>{const o=T.get(e);return o?o.columns?o.columns:o.children?o.children.length:-1:-1},"getColumns"),st=h(()=>[...T.values()],"getBlocksFlat"),rt=h(()=>ne||[],"getBlocks"),it=h(()=>ae,"getEdges"),at=h(e=>T.get(e),"getBlock"),nt=h(e=>{T.set(e.id,e)},"setBlock"),ot=h(()=>console,"getLogger"),lt=h(function(){return G},"getClasses"),ct={getConfig:h(()=>ie().block,"getConfig"),typeStr2Type:Le,edgeTypeStr2Type:me,edgeStrToEdgeData:ye,getLogger:ot,getBlocksFlat:st,getBlocks:rt,getEdges:it,setHierarchy:et,getBlock:at,setBlock:nt,getColumns:tt,getClasses:lt,clear:Qe,generateId:$e},ht=ct,X=h((e,o)=>{const c=je,l=c(e,"r"),r=c(e,"g"),g=c(e,"b");return We(l,r,g,o)},"fade"),ut=h(e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${X(e.edgeLabelBackground,.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${X(e.mainBkg,.5)};
    fill: ${X(e.clusterBkg,.5)};
    stroke: ${X(e.clusterBorder,.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,"getStyles"),gt=ut,E=be()?.block?.padding??8;function Ee(e,o){if(e===0||!Number.isInteger(e))throw new Error("Columns must be an integer !== 0.");if(o<0||!Number.isInteger(o))throw new Error("Position must be a non-negative integer."+o);if(e<0)return{px:o,py:0};if(e===1)return{px:0,py:o};const c=o%e,l=Math.floor(o/e);return{px:c,py:l}}h(Ee,"calculateBlockPosition");var dt=h(e=>{let o=0,c=0;for(const l of e.children){const{width:r,height:g,x:n,y:f}=l.size??{width:0,height:0,x:0,y:0};L.debug("getMaxChildSize abc95 child:",l.id,"width:",r,"height:",g,"x:",n,"y:",f,l.type),l.type!=="space"&&(r>o&&(o=r/(e.widthInColumns??1)),g>c&&(c=g))}return{width:o,height:c}},"getMaxChildSize");function H(e,o,c=0,l=0){L.debug("setBlockSizes abc95 (start)",e.id,e?.size?.x,"block width =",e?.size,"sieblingWidth",c),e?.size?.width||(e.size={width:c,height:l,x:0,y:0});let r=0,g=0;if(e.children?.length>0){for(const S of e.children)H(S,o);const n=dt(e);r=n.width,g=n.height,L.debug("setBlockSizes abc95 maxWidth of",e.id,":s children is ",r,g);for(const S of e.children)S.size&&(L.debug(`abc95 Setting size of children of ${e.id} id=${S.id} ${r} ${g} ${JSON.stringify(S.size)}`),S.size.width=r*(S.widthInColumns??1)+E*((S.widthInColumns??1)-1),S.size.height=g,S.size.x=0,S.size.y=0,L.debug(`abc95 updating size of ${e.id} children child:${S.id} maxWidth:${r} maxHeight:${g}`));for(const S of e.children)H(S,o,r,g);const f=e.columns??-1;let p=0;for(const S of e.children)p+=S.widthInColumns??1;let x=e.children.length;f>0&&f<p&&(x=f);const b=Math.ceil(p/x);let m=x*(r+E)+E,z=b*(g+E)+E;if(m<c){L.debug(`Detected to small siebling: abc95 ${e.id} sieblingWidth ${c} sieblingHeight ${l} width ${m}`),m=c,z=l;const S=(c-x*E-E)/x,_=(l-b*E-E)/b;L.debug("Size indata abc88",e.id,"childWidth",S,"maxWidth",r),L.debug("Size indata abc88",e.id,"childHeight",_,"maxHeight",g),L.debug("Size indata abc88 xSize",x,"padding",E);for(const w of e.children)w.size&&(w.size.width=S,w.size.height=_,w.size.x=0,w.size.y=0)}if(L.debug(`abc95 (finale calc) ${e.id} xSize ${x} ySize ${b} columns ${f}${e.children.length} width=${Math.max(m,e.size?.width||0)}`),m<(e?.size?.width||0)){m=e?.size?.width||0;const S=f>0?Math.min(e.children.length,f):e.children.length;if(S>0){const _=(m-S*E-E)/S;L.debug("abc95 (growing to fit) width",e.id,m,e.size?.width,_);for(const w of e.children)w.size&&(w.size.width=_)}}e.size={width:m,height:z,x:0,y:0}}L.debug("setBlockSizes abc94 (done)",e.id,e?.size?.x,e?.size?.width,e?.size?.y,e?.size?.height)}h(H,"setBlockSizes");function oe(e,o){L.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);const c=e.columns??-1;if(L.debug("layoutBlocks columns abc95",e.id,"=>",c,e),e.children&&e.children.length>0){const l=e?.children[0]?.size?.width??0,r=e.children.length*l+(e.children.length-1)*E;L.debug("widthOfChildren 88",r,"posX");let g=0;L.debug("abc91 block?.size?.x",e.id,e?.size?.x);let n=e?.size?.x?e?.size?.x+(-e?.size?.width/2||0):-E,f=0;for(const p of e.children){const x=e;if(!p.size)continue;const{width:b,height:m}=p.size,{px:z,py:S}=Ee(c,g);if(S!=f&&(f=S,n=e?.size?.x?e?.size?.x+(-e?.size?.width/2||0):-E,L.debug("New row in layout for block",e.id," and child ",p.id,f)),L.debug(`abc89 layout blocks (child) id: ${p.id} Pos: ${g} (px, py) ${z},${S} (${x?.size?.x},${x?.size?.y}) parent: ${x.id} width: ${b}${E}`),x.size){const _=b/2;p.size.x=n+E+_,L.debug(`abc91 layout blocks (calc) px, pyid:${p.id} startingPos=X${n} new startingPosX${p.size.x} ${_} padding=${E} width=${b} halfWidth=${_} => x:${p.size.x} y:${p.size.y} ${p.widthInColumns} (width * (child?.w || 1)) / 2 ${b*(p?.widthInColumns??1)/2}`),n=p.size.x+_,p.size.y=x.size.y-x.size.height/2+S*(m+E)+m/2+E,L.debug(`abc88 layout blocks (calc) px, pyid:${p.id}startingPosX${n}${E}${_}=>x:${p.size.x}y:${p.size.y}${p.widthInColumns}(width * (child?.w || 1)) / 2${b*(p?.widthInColumns??1)/2}`)}p.children&&oe(p),g+=p?.widthInColumns??1,L.debug("abc88 columnsPos",p,g)}}L.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`)}h(oe,"layoutBlocks");function le(e,{minX:o,minY:c,maxX:l,maxY:r}={minX:0,minY:0,maxX:0,maxY:0}){if(e.size&&e.id!=="root"){const{x:g,y:n,width:f,height:p}=e.size;g-f/2<o&&(o=g-f/2),n-p/2<c&&(c=n-p/2),g+f/2>l&&(l=g+f/2),n+p/2>r&&(r=n+p/2)}if(e.children)for(const g of e.children)({minX:o,minY:c,maxX:l,maxY:r}=le(g,{minX:o,minY:c,maxX:l,maxY:r}));return{minX:o,minY:c,maxX:l,maxY:r}}h(le,"findBounds");function _e(e){const o=e.getBlock("root");if(!o)return;H(o,e,0,0),oe(o),L.debug("getBlocks",JSON.stringify(o,null,2));const{minX:c,minY:l,maxX:r,maxY:g}=le(o),n=g-l,f=r-c;return{x:c,y:l,width:f,height:n}}h(_e,"layout");function ce(e,o,c=!1){const l=e;let r="default";(l?.classes?.length||0)>0&&(r=(l?.classes??[]).join(" ")),r=r+" flowchart-label";let g=0,n="",f;switch(l.type){case"round":g=5,n="rect";break;case"composite":g=0,n="composite",f=0;break;case"square":n="rect";break;case"diamond":n="question";break;case"hexagon":n="hexagon";break;case"block_arrow":n="block_arrow";break;case"odd":n="rect_left_inv_arrow";break;case"lean_right":n="lean_right";break;case"lean_left":n="lean_left";break;case"trapezoid":n="trapezoid";break;case"inv_trapezoid":n="inv_trapezoid";break;case"rect_left_inv_arrow":n="rect_left_inv_arrow";break;case"circle":n="circle";break;case"ellipse":n="ellipse";break;case"stadium":n="stadium";break;case"subroutine":n="subroutine";break;case"cylinder":n="cylinder";break;case"group":n="rect";break;case"doublecircle":n="doublecircle";break;default:n="rect"}const p=Pe(l?.styles??[]),x=l.label,b=l.size??{width:0,height:0,x:0,y:0};return{labelStyle:p.labelStyle,shape:n,labelText:x,rx:g,ry:g,class:r,style:p.style,id:l.id,directions:l.directions,width:b.width,height:b.height,x:b.x,y:b.y,positioned:c,intersect:void 0,type:l.type,padding:f??ie()?.block?.padding??0}}h(ce,"getNodeFromBlock");async function ke(e,o,c){const l=ce(o,c,!1);if(l.type==="group")return;const r=await fe(e,l),g=r.node().getBBox(),n=c.getBlock(l.id);n.size={width:g.width,height:g.height,x:0,y:0,node:r},c.setBlock(n),r.remove()}h(ke,"calculateBlockSize");async function we(e,o,c){const l=ce(o,c,!0);c.getBlock(l.id).type!=="space"&&(await fe(e,l),o.intersect=l?.intersect,Be(l))}h(we,"insertBlockPositioned");async function q(e,o,c,l){for(const r of o)await l(e,r,c),r.children&&await q(e,r.children,c,l)}h(q,"performOperations");async function De(e,o,c){await q(e,o,c,ke)}h(De,"calculateBlockSizes");async function Ne(e,o,c){await q(e,o,c,we)}h(Ne,"insertBlocks");async function ve(e,o,c,l,r){const g=new Ve({multigraph:!0,compound:!0});g.setGraph({rankdir:"TB",nodesep:10,ranksep:10,marginx:8,marginy:8});for(const n of c)n.size&&g.setNode(n.id,{width:n.size.width,height:n.size.height,intersect:n.intersect});for(const n of o)if(n.start&&n.end){const f=l.getBlock(n.start),p=l.getBlock(n.end);if(f?.size&&p?.size){const x=f.size,b=p.size,m=[{x:x.x,y:x.y},{x:x.x+(b.x-x.x)/2,y:x.y+(b.y-x.y)/2},{x:b.x,y:b.y}];ze(e,{v:n.start,w:n.end,name:n.id},{...n,arrowTypeEnd:n.arrowTypeEnd,arrowTypeStart:n.arrowTypeStart,points:m,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"},void 0,"block",g,r),n.label&&(await Ce(e,{...n,label:n.label,labelStyle:"stroke: #333; stroke-width: 1.5px;fill:none;",arrowTypeEnd:n.arrowTypeEnd,arrowTypeStart:n.arrowTypeStart,points:m,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"}),Re({...n,x:m[1].x,y:m[1].y},{originalPath:m}))}}}h(ve,"insertEdges");var pt=h(function(e,o){return o.db.getClasses()},"getClasses"),ft=h(async function(e,o,c,l){const{securityLevel:r,block:g}=ie(),n=l.db;let f;r==="sandbox"&&(f=U("#i"+o));const p=r==="sandbox"?U(f.nodes()[0].contentDocument.body):U("body"),x=r==="sandbox"?p.select(`[id="${o}"]`):U(`[id="${o}"]`);Ae(x,["point","circle","cross"],l.type,o);const m=n.getBlocks(),z=n.getBlocksFlat(),S=n.getEdges(),_=x.insert("g").attr("class","block");await De(_,m,n);const w=_e(n);if(await Ne(_,m,n),await ve(_,S,z,n,o),w){const N=w,J=Math.max(1,Math.round(.125*(N.width/N.height))),B=N.height+J+10,O=N.width+10,{useMaxWidth:u}=g;Fe(x,B,O,!!u),L.debug("Here Bounds",w,N),x.attr("viewBox",`${N.x-5} ${N.y-5} ${N.width+10} ${N.height+10}`)}},"draw"),bt={draw:ft,getClasses:pt},zt={parser:Ue,db:ht,renderer:bt,styles:gt};export{zt as diagram};
