import{p as A,d as S,s as G}from"./styles-b83b31c9-CNm953xD.js";import{s as B,c as W}from"./isEmpty-CPJeZ-IN.js";import{G as $}from"./graph-orLZ1Cou.js";import{l as I}from"./layout-CePnblK7.js";import{c as v,l as m,h as O,u as M,q as P}from"./index.demo-CCm7av3I.js";import"./owner-PrTRGOLt.js";import{l as X}from"./line-DIkzZjhL.js";import"./_baseUniq-25dB_poh.js";import"./_basePickBy-BvU9RMSZ.js";import"./index-B9SUlsL6.js";import"./FormInput-DX960qqm.js";import"./StyledButton-DVz0ew6u.js";import"./proxy-DpF5uie5.js";import"./provider-DWR--7J0.js";import"./viewport-C-voIzf7.js";import"./spring-C80N1tKa.js";import"./index-6TaX3-pf.js";import"./use-is-unmounted-An2Eu9cB.js";import"./use-event-callback-BQ6UHZlx.js";import"./dom-BowoBODo.js";import"./use-drag-controls-C23qmz0X.js";import"./visual-element-COOPoh5v.js";import"./index-cjK2ZoWF.js";import"./use-ref-value-wVjzkT4t.js";import"./Shiki-Bp-qInqF.js";import"./index-BQEcQMms.js";import"./use-motion-template-EJSHRjXn.js";import"./use-is-dark-Cjh7F_vx.js";import"./LinkCard-Bt0U9aeJ.js";import"./image-Ci5rK2-U.js";import"./Gallery-DeAoVbNP.js";import"./useQuery-D_cFV5YZ.js";import"./alert-xnDG_EXy.js";import"./index-Bg1J0sEf.js";import"./FloatPopover-BtFXWwwV.js";import"./SocialSourceLink-BBGfPIde.js";import"./Collapse-C9SYmtun.js";import"./CodeEditor-Bwvl2ukO.js";import"./index-LAI3pait.js";import"./cookie-Z9X-nQiI.js";import"./Mermaid-k1f-BXa3.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";let H=0;const Y=function(a,r,t,s,p){const g=function(e){switch(e){case p.db.relationType.AGGREGATION:return"aggregation";case p.db.relationType.EXTENSION:return"extension";case p.db.relationType.COMPOSITION:return"composition";case p.db.relationType.DEPENDENCY:return"dependency";case p.db.relationType.LOLLIPOP:return"lollipop"}};r.points=r.points.filter(e=>!Number.isNaN(e.y));const o=r.points,c=X().x(function(e){return e.x}).y(function(e){return e.y}).curve(W),n=a.append("path").attr("d",c(o)).attr("id","edge"+H).attr("class","relation");let i="";s.arrowMarkerAbsolute&&(i=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,i=i.replace(/\(/g,"\\("),i=i.replace(/\)/g,"\\)")),t.relation.lineType==1&&n.attr("class","relation dashed-line"),t.relation.lineType==10&&n.attr("class","relation dotted-line"),t.relation.type1!=="none"&&n.attr("marker-start","url("+i+"#"+g(t.relation.type1)+"Start)"),t.relation.type2!=="none"&&n.attr("marker-end","url("+i+"#"+g(t.relation.type2)+"End)");let u,h;const x=r.points.length;let b=M.calcLabelPosition(r.points);u=b.x,h=b.y;let y,f,w,k;if(x%2!==0&&x>1){let e=M.calcCardinalityPosition(t.relation.type1!=="none",r.points,r.points[0]),d=M.calcCardinalityPosition(t.relation.type2!=="none",r.points,r.points[x-1]);m.debug("cardinality_1_point "+JSON.stringify(e)),m.debug("cardinality_2_point "+JSON.stringify(d)),y=e.x,f=e.y,w=d.x,k=d.y}if(t.title!==void 0){const e=a.append("g").attr("class","classLabel"),d=e.append("text").attr("class","label").attr("x",u).attr("y",h).attr("fill","red").attr("text-anchor","middle").text(t.title);window.label=d;const l=d.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",l.x-s.padding/2).attr("y",l.y-s.padding/2).attr("width",l.width+s.padding).attr("height",l.height+s.padding)}m.info("Rendering relation "+JSON.stringify(t)),t.relationTitle1!==void 0&&t.relationTitle1!=="none"&&a.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",y).attr("y",f).attr("fill","black").attr("font-size","6").text(t.relationTitle1),t.relationTitle2!==void 0&&t.relationTitle2!=="none"&&a.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",w).attr("y",k).attr("fill","black").attr("font-size","6").text(t.relationTitle2),H++},J=function(a,r,t,s){m.debug("Rendering class ",r,t);const p=r.id,g={id:p,label:r.id,width:0,height:0},o=a.append("g").attr("id",s.db.lookUpDomId(p)).attr("class","classGroup");let c;r.link?c=o.append("svg:a").attr("xlink:href",r.link).attr("target",r.linkTarget).append("text").attr("y",t.textHeight+t.padding).attr("x",0):c=o.append("text").attr("y",t.textHeight+t.padding).attr("x",0);let n=!0;r.annotations.forEach(function(d){const l=c.append("tspan").text("«"+d+"»");n||l.attr("dy",t.textHeight),n=!1});let i=C(r);const u=c.append("tspan").text(i).attr("class","title");n||u.attr("dy",t.textHeight);const h=c.node().getBBox().height;let x,b,y;if(r.members.length>0){x=o.append("line").attr("x1",0).attr("y1",t.padding+h+t.dividerMargin/2).attr("y2",t.padding+h+t.dividerMargin/2);const d=o.append("text").attr("x",t.padding).attr("y",h+t.dividerMargin+t.textHeight).attr("fill","white").attr("class","classText");n=!0,r.members.forEach(function(l){_(d,l,n,t),n=!1}),b=d.node().getBBox()}if(r.methods.length>0){y=o.append("line").attr("x1",0).attr("y1",t.padding+h+t.dividerMargin+b.height).attr("y2",t.padding+h+t.dividerMargin+b.height);const d=o.append("text").attr("x",t.padding).attr("y",h+2*t.dividerMargin+b.height+t.textHeight).attr("fill","white").attr("class","classText");n=!0,r.methods.forEach(function(l){_(d,l,n,t),n=!1})}const f=o.node().getBBox();var w=" ";r.cssClasses.length>0&&(w=w+r.cssClasses.join(" "));const e=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",f.width+2*t.padding).attr("height",f.height+t.padding+.5*t.dividerMargin).attr("class",w).node().getBBox().width;return c.node().childNodes.forEach(function(d){d.setAttribute("x",(e-d.getBBox().width)/2)}),r.tooltip&&c.insert("title").text(r.tooltip),x&&x.attr("x2",e),y&&y.attr("x2",e),g.width=e,g.height=f.height+t.padding+.5*t.dividerMargin,g},C=function(a){let r=a.id;return a.type&&(r+="<"+P(a.type)+">"),r},Z=function(a,r,t,s){m.debug("Rendering note ",r,t);const p=r.id,g={id:p,text:r.text,width:0,height:0},o=a.append("g").attr("id",p).attr("class","classGroup");let c=o.append("text").attr("y",t.textHeight+t.padding).attr("x",0);const n=JSON.parse(`"${r.text}"`).split(`
`);n.forEach(function(x){m.debug(`Adding line: ${x}`),c.append("tspan").text(x).attr("class","title").attr("dy",t.textHeight)});const i=o.node().getBBox(),h=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",i.width+2*t.padding).attr("height",i.height+n.length*t.textHeight+t.padding+.5*t.dividerMargin).node().getBBox().width;return c.node().childNodes.forEach(function(x){x.setAttribute("x",(h-x.getBBox().width)/2)}),g.width=h,g.height=i.height+n.length*t.textHeight+t.padding+.5*t.dividerMargin,g},_=function(a,r,t,s){const{displayText:p,cssStyle:g}=r.getDisplayDetails(),o=a.append("tspan").attr("x",s.padding).text(p);g!==""&&o.attr("style",r.cssStyle),t||o.attr("dy",s.textHeight)},N={getClassTitleString:C,drawClass:J,drawEdge:Y,drawNote:Z};let T={};const E=20,L=function(a){const r=Object.entries(T).find(t=>t[1].label===a);if(r)return r[0]},R=function(a){a.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),a.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),a.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},F=function(a,r,t,s){const p=v().class;T={},m.info("Rendering diagram "+a);const g=v().securityLevel;let o;g==="sandbox"&&(o=B("#i"+r));const c=g==="sandbox"?B(o.nodes()[0].contentDocument.body):B("body"),n=c.select(`[id='${r}']`);R(n);const i=new $({multigraph:!0});i.setGraph({isMultiGraph:!0}),i.setDefaultEdgeLabel(function(){return{}});const u=s.db.getClasses(),h=Object.keys(u);for(const e of h){const d=u[e],l=N.drawClass(n,d,p,s);T[l.id]=l,i.setNode(l.id,l),m.info("Org height: "+l.height)}s.db.getRelations().forEach(function(e){m.info("tjoho"+L(e.id1)+L(e.id2)+JSON.stringify(e)),i.setEdge(L(e.id1),L(e.id2),{relation:e},e.title||"DEFAULT")}),s.db.getNotes().forEach(function(e){m.debug(`Adding note: ${JSON.stringify(e)}`);const d=N.drawNote(n,e,p,s);T[d.id]=d,i.setNode(d.id,d),e.class&&e.class in u&&i.setEdge(e.id,L(e.class),{relation:{id1:e.id,id2:e.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),I(i),i.nodes().forEach(function(e){e!==void 0&&i.node(e)!==void 0&&(m.debug("Node "+e+": "+JSON.stringify(i.node(e))),c.select("#"+(s.db.lookUpDomId(e)||e)).attr("transform","translate("+(i.node(e).x-i.node(e).width/2)+","+(i.node(e).y-i.node(e).height/2)+" )"))}),i.edges().forEach(function(e){e!==void 0&&i.edge(e)!==void 0&&(m.debug("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(i.edge(e))),N.drawEdge(n,i.edge(e),i.edge(e).relation,p,s))});const y=n.node().getBBox(),f=y.width+E*2,w=y.height+E*2;O(n,w,f,p.useMaxWidth);const k=`${y.x-E} ${y.y-E} ${f} ${w}`;m.debug(`viewBox ${k}`),n.attr("viewBox",k)},U={draw:F},$t={parser:A,db:S,renderer:U,styles:G,init:a=>{a.class||(a.class={}),a.class.arrowMarkerAbsolute=a.arrowMarkerAbsolute,S.clear()}};export{$t as diagram};