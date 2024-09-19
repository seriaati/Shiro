import{_ as w,Y as M,$ as Y,a0 as F,a1 as _,l as i,d as j,a2 as H,a3 as $,a4 as q,T as z,a5 as O,a6 as K,a7 as Q,a8 as U,a9 as V}from"./mermaid.core-DcvARf91.js";import{G as k}from"./graph-orLZ1Cou.js";import{l as W}from"./layout-CePnblK7.js";import{w as h}from"./json-CzRMdT3H.js";import"./index-B9SUlsL6.js";import"./owner-PrTRGOLt.js";import"./StyledButton-DVz0ew6u.js";import"./proxy-DpF5uie5.js";import"./isEmpty-CPJeZ-IN.js";import"./line-DIkzZjhL.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./_baseUniq-25dB_poh.js";import"./_basePickBy-BvU9RMSZ.js";import"./clone-D4mtdAug.js";var d=new Map,y=new Map,B=new Map,Z=w(()=>{y.clear(),B.clear(),d.clear()},"clear"),S=w((e,t)=>{const n=y.get(t)||[];return i.trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)},"isDescendant"),I=w((e,t)=>{const n=y.get(t)||[];return i.info("Descendants of ",t," is ",n),i.info("Edge is ",e),e.v===t||e.w===t?!1:n?n.includes(e.v)||S(e.v,t)||S(e.w,t)||n.includes(e.w):(i.debug("Tilt, ",t,",not in descendants"),!1)},"edgeInCluster"),A=w((e,t,n,c)=>{i.warn("Copying children of ",e,"root",c,"data",t.node(e),c);const r=t.children(e)||[];e!==c&&r.push(e),i.warn("Copying (nodes) clusterId",e,"nodes",r),r.forEach(o=>{if(t.children(o).length>0)A(o,t,n,c);else{const l=t.node(o);i.info("cp ",o," to ",c," with parent ",e),n.setNode(o,l),c!==t.parent(o)&&(i.warn("Setting parent",o,t.parent(o)),n.setParent(o,t.parent(o))),e!==c&&o!==e?(i.debug("Setting parent",o,e),n.setParent(o,e)):(i.info("In copy ",e,"root",c,"data",t.node(e),c),i.debug("Not Setting parent for node=",o,"cluster!==rootId",e!==c,"node!==clusterId",o!==e));const u=t.edges(o);i.debug("Copying Edges",u),u.forEach(a=>{i.info("Edge",a);const m=t.edge(a.v,a.w,a.name);i.info("Edge data",m,c);try{I(a,c)?(i.info("Copying as ",a.v,a.w,m,a.name),n.setEdge(a.v,a.w,m,a.name),i.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):i.info("Skipping copy of edge ",a.v,"-->",a.w," rootId: ",c," clusterId:",e)}catch(X){i.error(X)}})}i.debug("Removing node",o),t.removeNode(o)})},"copy"),J=w((e,t)=>{const n=t.children(e);let c=[...n];for(const r of n)B.set(r,e),c=[...c,...J(r,t)];return c},"extractDescendants"),L=w((e,t,n)=>{const c=e.edges().filter(a=>a.v===t||a.w===t),r=e.edges().filter(a=>a.v===n||a.w===n),o=c.map(a=>({v:a.v===t?n:a.v,w:a.w===t?t:a.w})),l=r.map(a=>({v:a.v,w:a.w}));return o.filter(a=>l.some(m=>a.v===m.v&&a.w===m.w))},"findCommonEdges"),b=w((e,t,n)=>{const c=t.children(e);if(i.trace("Searching children of id ",e,c),c.length<1)return e;let r;for(const o of c){const l=b(o,t,n),u=L(t,n,l);if(l)if(u.length>0)r=l;else return l}return r},"findNonClusterChild"),P=w(e=>!d.has(e)||!d.get(e).externalConnections?e:d.has(e)?d.get(e).id:e,"getAnchorId"),ee=w((e,t)=>{if(!e||t>10){i.debug("Opting out, no graph ");return}else i.debug("Opting in, graph ");e.nodes().forEach(function(n){e.children(n).length>0&&(i.warn("Cluster identified",n," Replacement id in edges: ",b(n,e,n)),y.set(n,J(n,e)),d.set(n,{id:b(n,e,n),clusterData:e.node(n)}))}),e.nodes().forEach(function(n){const c=e.children(n),r=e.edges();c.length>0?(i.debug("Cluster identified",n,y),r.forEach(o=>{const l=S(o.v,n),u=S(o.w,n);l^u&&(i.warn("Edge: ",o," leaves cluster ",n),i.warn("Descendants of XXX ",n,": ",y.get(n)),d.get(n).externalConnections=!0)})):i.debug("Not a cluster ",n,y)});for(let n of d.keys()){const c=d.get(n).id,r=e.parent(c);r!==n&&d.has(r)&&!d.get(r).externalConnections&&(d.get(n).id=r)}e.edges().forEach(function(n){const c=e.edge(n);i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let r=n.v,o=n.w;if(i.warn("Fix XXX",d,"ids:",n.v,n.w,"Translating: ",d.get(n.v)," --- ",d.get(n.w)),d.get(n.v)||d.get(n.w)){if(i.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),r=P(n.v),o=P(n.w),e.removeEdge(n.v,n.w,n.name),r!==n.v){const l=e.parent(r);d.get(l).externalConnections=!0,c.fromCluster=n.v}if(o!==n.w){const l=e.parent(o);d.get(l).externalConnections=!0,c.toCluster=n.w}i.warn("Fix Replacing with XXX",r,o,n.name),e.setEdge(r,o,c,n.name)}}),i.warn("Adjusted Graph",h(e)),G(e,0),i.trace(d)},"adjustClustersAndEdges"),G=w((e,t)=>{if(i.warn("extractor - ",t,h(e),e.children("D")),t>10){i.error("Bailing out");return}let n=e.nodes(),c=!1;for(const r of n){const o=e.children(r);c=c||o.length>0}if(!c){i.debug("Done, no node has children",e.nodes());return}i.debug("Nodes = ",n,t);for(const r of n)if(i.debug("Extracting node",r,d,d.has(r)&&!d.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),!d.has(r))i.debug("Not a cluster",r,t);else if(!d.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){i.warn("Cluster without external connections, without a parent and with children",r,t);let l=e.graph().rankdir==="TB"?"LR":"TB";d.get(r)?.clusterData?.dir&&(l=d.get(r).clusterData.dir,i.warn("Fixing dir",d.get(r).clusterData.dir,l));const u=new k({multigraph:!0,compound:!0}).setGraph({rankdir:l,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.warn("Old graph before copy",h(e)),A(r,e,u,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:d.get(r).clusterData,label:d.get(r).label,graph:u}),i.warn("New graph after copy node: (",r,")",h(u)),i.debug("Old graph after copy",h(e))}else i.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!d.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),i.debug(d);n=e.nodes(),i.warn("New list of nodes",n);for(const r of n){const o=e.node(r);i.warn(" Now next level",r,o),o?.clusterNode&&G(o.graph,t+1)}},"extractor"),R=w((e,t)=>{if(t.length===0)return[];let n=Object.assign([],t);return t.forEach(c=>{const r=e.children(c),o=R(e,r);n=[...n,...o]}),n},"sorter"),ne=w(e=>R(e,e.children()),"sortNodesByHierarchy"),T=w(async(e,t,n,c,r,o)=>{i.warn("Graph in recursive render:XAX",h(t),r);const l=t.graph().rankdir;i.trace("Dir in recursive render - dir:",l);const u=e.insert("g").attr("class","root");t.nodes()?i.info("Recursive render XXX",t.nodes()):i.info("No nodes found for",t),t.edges().length>0&&i.info("Recursive edges",t.edge(t.edges()[0]));const a=u.insert("g").attr("class","clusters"),m=u.insert("g").attr("class","edgePaths"),X=u.insert("g").attr("class","edgeLabels"),v=u.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(f){const s=t.node(f);if(r!==void 0){const g=JSON.parse(JSON.stringify(r.clusterData));i.trace(`Setting data for parent cluster XXX
 Node.id = `,f,`
 data=`,g.height,`
Parent cluster`,r.height),t.setNode(r.id,g),t.parent(f)||(i.trace("Setting parent",f,r.id),t.setParent(f,r.id,g))}if(i.info("(Insert) Node XXX"+f+": "+JSON.stringify(t.node(f))),s?.clusterNode){i.info("Cluster identified XBX",f,s.width,t.node(f));const{ranksep:g,nodesep:E}=t.graph();s.graph.setGraph({...s.graph.graph(),ranksep:g+25,nodesep:E});const p=await T(v,s.graph,n,c,t.node(f),o),x=p.elem;H(s,x),s.diff=p.diff||0,i.info("New compound node after recursive render XAX",f,"width",s.width,"height",s.height),$(x,s)}else t.children(f).length>0?(i.trace("Cluster - the non recursive path XBX",f,s.id,s,s.width,"Graph:",t),i.trace(b(s.id,t)),d.set(s.id,{id:b(s.id,t),node:s})):(i.trace("Node - the non recursive path XAX",f,v,t.node(f),l),await q(v,t.node(f),l))})),await w(async()=>{const f=t.edges().map(async function(s){const g=t.edge(s.v,s.w,s.name);i.info("Edge "+s.v+" -> "+s.w+": "+JSON.stringify(s)),i.info("Edge "+s.v+" -> "+s.w+": ",s," ",JSON.stringify(t.edge(s))),i.info("Fix",d,"ids:",s.v,s.w,"Translating: ",d.get(s.v),d.get(s.w)),await V(X,g)});await Promise.all(f)},"processEdges")(),i.info("Graph before layout:",JSON.stringify(h(t))),i.info("############################################# XXX"),i.info("###                Layout                 ### XXX"),i.info("############################################# XXX"),W(t),i.info("Graph after layout:",JSON.stringify(h(t)));let D=0,{subGraphTitleTotalMargin:C}=z(o);return await Promise.all(ne(t).map(async function(f){const s=t.node(f);if(i.info("Position XBX => "+f+": ("+s.x,","+s.y,") width: ",s.width," height: ",s.height),s?.clusterNode)s.y+=C,i.info("A tainted cluster node XBX1",f,s.id,s.width,s.height,s.x,s.y,t.parent(f)),d.get(s.id).node=s,O(s);else if(t.children(f).length>0){i.info("A pure cluster node XBX1",f,s.id,s.x,s.y,s.width,s.height,t.parent(f)),s.height+=C,t.node(s.parentId);const g=s?.padding/2||0,E=s?.labelBBox?.height||0,p=E-g||0;i.debug("OffsetY",p,"labelHeight",E,"halfPadding",g),await K(a,s),d.get(s.id).node=s}else{const g=t.node(s.parentId);s.y+=C/2,i.info("A regular node XBX1 - using the padding",s.id,"parent",s.parentId,s.width,s.height,s.x,s.y,"offsetY",s.offsetY,"parent",g,g?.offsetY,s),O(s)}})),t.edges().forEach(function(f){const s=t.edge(f);i.info("Edge "+f.v+" -> "+f.w+": "+JSON.stringify(s),s),s.points.forEach(x=>x.y+=C/2);const g=t.node(f.v);var E=t.node(f.w);const p=Q(m,s,d,n,g,E,c);U(s,p)}),t.nodes().forEach(function(f){const s=t.node(f);i.info(f,s.type,s.diff),s.isGroup&&(D=s.diff)}),i.warn("Returning from recursive render XAX",u,D),{elem:u,diff:D}},"recursiveRender"),Xe=w(async(e,t)=>{const n=new k({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),c=t.select("g");M(c,e.markers,e.type,e.diagramId),Y(),F(),_(),Z(),e.nodes.forEach(o=>{n.setNode(o.id,{...o}),o.parentId&&n.setParent(o.id,o.parentId)}),i.debug("Edges:",e.edges),e.edges.forEach(o=>{if(o.start===o.end){const l=o.start,u=l+"---"+l+"---1",a=l+"---"+l+"---2",m=n.node(l);n.setNode(u,{domId:u,id:u,parentId:m.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(u,m.parentId),n.setNode(a,{domId:a,id:a,parentId:m.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(a,m.parentId);const X=structuredClone(o),v=structuredClone(o),N=structuredClone(o);X.label="",X.arrowTypeEnd="none",X.id=l+"-cyclic-special-1",v.arrowTypeEnd="none",v.id=l+"-cyclic-special-mid",N.label="",m.isGroup&&(X.fromCluster=l,N.toCluster=l),N.id=l+"-cyclic-special-2",n.setEdge(l,u,X,l+"-cyclic-special-0"),n.setEdge(u,a,v,l+"-cyclic-special-1"),n.setEdge(a,l,N,l+"-cyc<lic-special-2")}else n.setEdge(o.start,o.end,{...o},o.id)}),i.warn("Graph at first:",JSON.stringify(h(n))),ee(n),i.warn("Graph after XAX:",JSON.stringify(h(n)));const r=j();await T(c,n,e.type,e.diagramId,void 0,r)},"render");export{Xe as render};
