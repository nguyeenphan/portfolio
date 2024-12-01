import{B as K,z as Q}from"./three-okop3vLy.js";import{f as R}from"./earcut-CvUQtzTa.js";import{c as X,f as Y}from"./d3-geo-IBeQgcAP.js";function H(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function Z(t){if(Array.isArray(t))return t}function x(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function tt(t,e,r){return e=M(e),ut(t,V()?Reflect.construct(e,[],M(t).constructor):e.apply(t,r))}function et(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rt(t,e,r){return Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=k(t))||e){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(i){throw i},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u,h=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var i=r.next();return h=i.done,i},e:function(i){c=!0,u=i},f:function(){try{h||r.return==null||r.return()}finally{if(c)throw u}}}}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(t)}function ot(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}function V(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(V=function(){return!!t})()}function it(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,o,u,h,c=[],i=!0,d=!1;try{if(u=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=u.call(r)).done)&&(c.push(n.value),c.length!==e);i=!0);}catch(P){d=!0,o=P}finally{try{if(!i&&r.return!=null&&(h=r.return(),Object(h)!==h))return}finally{if(d)throw o}}return c}}function at(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ut(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(t)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},S(t,e)}function _(t,e){return Z(t)||it(t,e)||k(t,e)||at()}function k(t,e){if(t){if(typeof t=="string")return H(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}var F=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=[],o=null;return e.forEach(function(u){if(o){var h=X(u,o)*180/Math.PI;if(h>r)for(var c=Y(o,u),i=1/Math.ceil(h/r),d=i;d<1;)n.push(c(d)),d+=i}n.push(o=u)}),n},G=typeof window<"u"&&window.THREE?window.THREE:{BufferGeometry:K,Float32BufferAttribute:Q},ct=new G.BufferGeometry().setAttribute?"setAttribute":"addAttribute",vt=function(t){function e(r){var n,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;et(this,e),n=tt(this,e),n.type="GeoJsonGeometry",n.parameters={geoJson:r,radius:o,resolution:u};var h=({Point:P,MultiPoint:z,LineString:T,MultiLineString:J,Polygon:C,MultiPolygon:$}[r.type]||function(){return[]})(r.coordinates,o),c=[],i=[],d=0;h.forEach(function(s){var f=c.length;w({indices:c,vertices:i},s),n.addGroup(f,c.length-f,d++)}),c.length&&n.setIndex(c),i.length&&n[ct]("position",new G.Float32BufferAttribute(i,3));function P(s,f){var l=j(s[1],s[0],f),a=[];return[{vertices:l,indices:a}]}function z(s,f){var l={vertices:[],indices:[]};return s.map(function(a){return P(a,f)}).forEach(function(a){var v=_(a,1),p=v[0];w(l,p)}),[l]}function T(s,f){for(var l=F(s,u).map(function(b){var O=_(b,2),E=O[0],A=O[1];return j(A,E,f)}),a=R([l]),v=a.vertices,p=Math.round(v.length/3),y=[],g=1;g<p;g++)y.push(g-1,g);return[{vertices:v,indices:y}]}function J(s,f){var l={vertices:[],indices:[]};return s.map(function(a){return T(a,f)}).forEach(function(a){var v=_(a,1),p=v[0];w(l,p)}),[l]}function C(s,f){for(var l=s.map(function(N){return F(N,u).map(function(U){var L=_(U,2),W=L[0],q=L[1];return j(q,W,f)})}),a=R(l),v=a.vertices,p=a.holes,y=p[0]||1/0,g=v.slice(0,y*3),b=v.slice(y*3),O=new Set(p),E=Math.round(v.length/3),A=[],B=[],m=1;m<E;m++)O.has(m)||(m<y?A.push(m-1,m):B.push(m-1-y,m-y));var I=[{indices:A,vertices:g}];return p.length&&I.push({indices:B,vertices:b}),I}function $(s,f){var l={vertices:[],indices:[]},a={vertices:[],indices:[]};s.map(function(p){return C(p,f)}).forEach(function(p){var y=_(p,2),g=y[0],b=y[1];w(l,g),b&&w(a,b)});var v=[l];return a.vertices.length&&v.push(a),v}return n}return ot(e,t),rt(e)}(G.BufferGeometry);function w(t,e){var r=Math.round(t.vertices.length/3);D(t.vertices,e.vertices),D(t.indices,e.indices.map(function(n){return n+r}))}function D(t,e){var r=nt(e),n;try{for(r.s();!(n=r.n()).done;){var o=n.value;t.push(o)}}catch(u){r.e(u)}finally{r.f()}}function j(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=(90-t)*Math.PI/180,o=(90-e)*Math.PI/180;return[r*Math.sin(n)*Math.cos(o),r*Math.cos(n),r*Math.sin(n)*Math.sin(o)]}export{vt as G};
