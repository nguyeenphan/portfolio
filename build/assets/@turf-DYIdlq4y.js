import{p as l}from"./point-in-polygon-hao-CVtqB2KT.js";function g(r){if(!r)throw new Error("coord is required");if(!Array.isArray(r)){if(r.type==="Feature"&&r.geometry!==null&&r.geometry.type==="Point")return[...r.geometry.coordinates];if(r.type==="Point")return[...r.coordinates]}if(Array.isArray(r)&&r.length>=2&&!Array.isArray(r[0])&&!Array.isArray(r[1]))return[...r];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function p(r){return r.type==="Feature"?r.geometry:r}function m(r,e,s={}){if(!r)throw new Error("point is required");if(!e)throw new Error("polygon is required");const i=g(r),o=p(e),y=o.type,u=e.bbox;let t=o.coordinates;if(u&&A(i,u)===!1)return!1;y==="Polygon"&&(t=[t]);let a=!1;for(var n=0;n<t.length;++n){const f=l(i,t[n]);if(f===0)return!s.ignoreBoundary;f&&(a=!0)}return a}function A(r,e){return e[0]<=r[0]&&e[1]<=r[1]&&e[2]>=r[0]&&e[3]>=r[1]}var P=m;export{P as t};
