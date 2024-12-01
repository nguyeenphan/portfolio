import{g as z,a as R,b as q,c as w}from"./d3-geo-IBeQgcAP.js";import{D as A}from"./d3-delaunay-Ba8_sCpG.js";import{e as P}from"./d3-array-DwlNfeyV.js";const M=Math.PI,S=M/2,b=180/M,x=M/180,L=Math.atan2,C=Math.cos,I=Math.max,V=Math.min,D=Math.sin,B=Math.sign||function(n){return n>0?1:n<0?-1:0},$=Math.sqrt;function G(n){return n>1?S:n<-1?-S:Math.asin(n)}function k(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function g(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function _(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function v(n){var e=$(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return[n[0]/e,n[1]/e,n[2]/e]}function E(n){return[L(n[1],n[0])*b,G(I(-1,V(1,n[2])))*b]}function p(n){const e=n[0]*x,t=n[1]*x,r=C(t);return[r*C(e),r*D(e),D(t)]}function F(n){return n=n.map(e=>p(e)),k(n[0],g(n[2],n[1]))}function H(n){const e=K(n),t=Q(e),r=O(t,n),o=U(t,n.length),i=J(o,n),a=T(t,n),{polygons:u,centers:s}=W(a,t,n),c=X(u),l=Z(t,n),f=Y(r,t);return{delaunay:e,edges:r,triangles:t,centers:s,neighbors:o,polygons:u,mesh:c,hull:l,urquhart:f,find:i}}function J(n,e){function t(r,o){let i=r[0]-o[0],a=r[1]-o[1],u=r[2]-o[2];return i*i+a*a+u*u}return function(o,i,a){a===void 0&&(a=0);let u,s,c=a;const l=p([o,i]);do u=a,a=null,s=t(l,p(e[u])),n[u].forEach(f=>{let h=t(l,p(e[f]));if(h<s){s=h,a=f,c=f;return}});while(a!==null);return c}}function K(n){if(n.length<2)return{};let e=0;for(;isNaN(n[e][0]+n[e][1])&&e++<n.length;);const t=z(n[e]),r=R().translate([0,0]).scale(1).rotate(t.invert([180,0]));n=n.map(r);const o=[];let i=1;for(let f=0,h=n.length;f<h;f++){let d=n[f][0]**2+n[f][1]**2;!isFinite(d)||d>1e32?o.push(f):d>i&&(i=d)}const a=1e6*$(i);o.forEach(f=>n[f]=[a,0]),n.push([0,a]),n.push([-a,0]),n.push([0,-a]);const u=A.from(n);u.projection=r;const{triangles:s,halfedges:c,inedges:l}=u;for(let f=0,h=c.length;f<h;f++)if(c[f]<0){const d=f%3==2?f-2:f+1,j=f%3==0?f+2:f-1,m=c[d],y=c[j];c[m]=y,c[y]=m,c[d]=c[j]=-1,s[f]=s[d]=s[j]=e,l[s[m]]=m%3==0?m+2:m-1,l[s[y]]=y%3==0?y+2:y-1,f+=2-f%3}else s[f]>n.length-3-1&&(s[f]=e);return u}function O(n,e){const t=new Set;return e.length===2?[[0,1]]:(n.forEach(r=>{if(r[0]!==r[1]&&!(F(r.map(o=>e[o]))<0))for(let o=0,i;o<3;o++)i=(o+1)%3,t.add(P([r[o],r[i]]).join("-"))}),Array.from(t,r=>r.split("-").map(Number)))}function Q(n){const{triangles:e}=n;if(!e)return[];const t=[];for(let r=0,o=e.length/3;r<o;r++){const i=e[3*r],a=e[3*r+1],u=e[3*r+2];i!==a&&a!==u&&t.push([i,u,a])}return t}function T(n,e){return n.map(t=>{const r=t.map(i=>e[i]).map(p),o=_(_(g(r[1],r[0]),g(r[2],r[1])),g(r[0],r[2]));return E(v(o))})}function U(n,e){const t=[];return n.forEach(r=>{for(let o=0;o<3;o++){const i=r[o],a=r[(o+1)%3];t[i]=t[i]||[],t[i].push(a)}}),n.length===0&&(e===2?(t[0]=[1],t[1]=[0]):e===1&&(t[0]=[])),t}function W(n,e,t){const r=[],o=n.slice();if(e.length===0){if(t.length<2)return{polygons:r,centers:o};if(t.length===2){const u=p(t[0]),s=p(t[1]),c=v(_(u,s)),l=v(g(u,s)),f=g(c,l),h=[c,g(c,f),g(g(c,f),f),g(g(g(c,f),f),f)].map(E).map(a);return r.push(h),r.push(h.slice().reverse()),{polygons:r,centers:o}}}e.forEach((u,s)=>{for(let c=0;c<3;c++){const l=u[c],f=u[(c+1)%3],h=u[(c+2)%3];r[l]=r[l]||[],r[l].push([f,h,s,[l,f,h]])}});const i=r.map(u=>{const s=[u[0][2]];let c=u[0][1];for(let l=1;l<u.length;l++)for(let f=0;f<u.length;f++)if(u[f][0]==c){c=u[f][1],s.push(u[f][2]);break}if(s.length>2)return s;if(s.length==2){const l=N(t[u[0][3][0]],t[u[0][3][1]],o[s[0]]),f=N(t[u[0][3][2]],t[u[0][3][0]],o[s[0]]),h=a(l),d=a(f);return[s[0],d,s[1],h]}});function a(u){let s=-1;return o.slice(e.length,1/0).forEach((c,l)=>{c[0]===u[0]&&c[1]===u[1]&&(s=l+e.length)}),s<0&&(s=o.length,o.push(u)),s}return{polygons:i,centers:o}}function N(n,e,t){n=p(n),e=p(e),t=p(t);const r=B(k(g(e,n),t));return E(v(_(n,e)).map(o=>r*o))}function X(n){const e=[];return n.forEach(t=>{if(!t)return;let r=t[t.length-1];for(let o of t)o>r&&e.push([r,o]),r=o}),e}function Y(n,e){return function(t){const r=new Map,o=new Map;return n.forEach((i,a)=>{const u=i.join("-");r.set(u,t[a]),o.set(u,!0)}),e.forEach(i=>{let a=0,u=-1;for(let s=0;s<3;s++){let c=P([i[s],i[(s+1)%3]]).join("-");r.get(c)>a&&(a=r.get(c),u=c)}o.set(u,!1)}),n.map(i=>o.get(i.join("-")))}}function Z(n,e){const t=new Set,r=[];n.map(u=>{if(!(F(u.map(s=>e[s>e.length?0:s]))>1e-12))for(let s=0;s<3;s++){let c=[u[s],u[(s+1)%3]],l=`${c[0]}-${c[1]}`;t.has(l)?t.delete(l):t.add(`${c[1]}-${c[0]}`)}});const o=new Map;let i;if(t.forEach(u=>{u=u.split("-").map(Number),o.set(u[0],u[1]),i=u[0]}),i===void 0)return r;let a=i;do{r.push(a);let u=o.get(a);o.set(a,-1),a=u}while(a>-1&&a!==i);return r}function re(n){const e=function(t){if(e.delaunay=null,e._data=t,typeof e._data=="object"&&e._data.type==="FeatureCollection"&&(e._data=e._data.features),typeof e._data=="object"){const r=e._data.map(o=>[e._vx(o),e._vy(o),o]).filter(o=>isFinite(o[0]+o[1]));e.points=r.map(o=>[o[0],o[1]]),e.valid=r.map(o=>o[2]),e.delaunay=H(e.points)}return e};return e._vx=function(t){if(typeof t=="object"&&"type"in t)return q(t)[0];if(0 in t)return t[0]},e._vy=function(t){if(typeof t=="object"&&"type"in t)return q(t)[1];if(1 in t)return t[1]},e.x=function(t){return t?(e._vx=t,e):e._vx},e.y=function(t){return t?(e._vy=t,e):e._vy},e.polygons=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const r={type:"FeatureCollection",features:[]};return e.valid.length===0||(e.delaunay.polygons.forEach((o,i)=>r.features.push({type:"Feature",geometry:o?{type:"Polygon",coordinates:[[...o,o[0]].map(a=>e.delaunay.centers[a])]}:null,properties:{site:e.valid[i],sitecoordinates:e.points[i],neighbours:e.delaunay.neighbors[i]}})),e.valid.length===1&&r.features.push({type:"Feature",geometry:{type:"Sphere"},properties:{site:e.valid[0],sitecoordinates:e.points[0],neighbours:[]}})),r},e.triangles=function(t){return t!==void 0&&e(t),e.delaunay?{type:"FeatureCollection",features:e.delaunay.triangles.map((r,o)=>(r=r.map(i=>e.points[i]),r.center=e.delaunay.centers[o],r)).filter(r=>F(r)>0).map(r=>({type:"Feature",properties:{circumcenter:r.center},geometry:{type:"Polygon",coordinates:[[...r,r[0]]]}}))}:!1},e.links=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const r=e.delaunay.edges.map(i=>w(e.points[i[0]],e.points[i[1]])),o=e.delaunay.urquhart(r);return{type:"FeatureCollection",features:e.delaunay.edges.map((i,a)=>({type:"Feature",properties:{source:e.valid[i[0]],target:e.valid[i[1]],length:r[a],urquhart:!!o[a]},geometry:{type:"LineString",coordinates:[e.points[i[0]],e.points[i[1]]]}}))}},e.mesh=function(t){return t!==void 0&&e(t),e.delaunay?{type:"MultiLineString",coordinates:e.delaunay.edges.map(r=>[e.points[r[0]],e.points[r[1]]])}:!1},e.cellMesh=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const{centers:r,polygons:o}=e.delaunay,i=[];for(const a of o)if(a)for(let u=a.length,s=a[u-1],c=a[0],l=0;l<u;s=c,c=a[++l])c>s&&i.push([r[s],r[c]]);return{type:"MultiLineString",coordinates:i}},e._found=void 0,e.find=function(t,r,o){if(e._found=e.delaunay.find(t,r,e._found),!o||w([t,r],e.points[e._found])<o)return e._found},e.hull=function(t){t!==void 0&&e(t);const r=e.delaunay.hull,o=e.points;return r.length===0?null:{type:"Polygon",coordinates:[[...r.map(i=>o[i]),o[r[0]]]]}},n?e(n):e}export{re as g};
