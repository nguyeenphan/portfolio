function h(e,n){return e==null||n==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function g(e,n){return e==null||n==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function M(e){let n,i,f;e.length!==2?(n=h,i=(u,c)=>h(e(u),c),f=(u,c)=>e(u)-c):(n=e===h||e===g?e:w,i=e,f=e);function r(u,c,t=0,a=u.length){if(t<a){if(n(c,c)!==0)return a;do{const d=t+a>>>1;i(u[d],c)<0?t=d+1:a=d}while(t<a)}return t}function l(u,c,t=0,a=u.length){if(t<a){if(n(c,c)!==0)return a;do{const d=t+a>>>1;i(u[d],c)<=0?t=d+1:a=d}while(t<a)}return t}function o(u,c,t=0,a=u.length){const d=r(u,c,t,a-1);return d>t&&f(u[d-1],c)>-f(u[d],c)?d-1:d}return{left:r,center:o,right:l}}function w(){return 0}function N(e){return e===null?NaN:+e}const y=M(h),q=y.right;M(N).center;function S(e,n){let i,f;if(n===void 0)for(const r of e)r!=null&&(i===void 0?r>=r&&(i=f=r):(i>r&&(i=r),f<r&&(f=r)));else{let r=-1;for(let l of e)(l=n(l,++r,e))!=null&&(i===void 0?l>=l&&(i=f=l):(i>l&&(i=l),f<l&&(f=l)))}return[i,f]}class b{constructor(){this._partials=new Float64Array(32),this._n=0}add(n){const i=this._partials;let f=0;for(let r=0;r<this._n&&r<32;r++){const l=i[r],o=n+l,u=Math.abs(n)<Math.abs(l)?n-(o-l):l-(o-n);u&&(i[f++]=u),n=o}return i[f]=n,this._n=f+1,this}valueOf(){const n=this._partials;let i=this._n,f,r,l,o=0;if(i>0){for(o=n[--i];i>0&&(f=o,r=n[--i],o=f+r,l=r-(o-f),!l););i>0&&(l<0&&n[i-1]<0||l>0&&n[i-1]>0)&&(r=l*2,f=o+r,r==f-o&&(o=f))}return o}}const _=Math.sqrt(50),k=Math.sqrt(10),v=Math.sqrt(2);function s(e,n,i){const f=(n-e)/Math.max(0,i),r=Math.floor(Math.log10(f)),l=f/Math.pow(10,r),o=l>=_?10:l>=k?5:l>=v?2:1;let u,c,t;return r<0?(t=Math.pow(10,-r)/o,u=Math.round(e*t),c=Math.round(n*t),u/t<e&&++u,c/t>n&&--c,t=-t):(t=Math.pow(10,r)*o,u=Math.round(e/t),c=Math.round(n/t),u*t<e&&++u,c*t>n&&--c),c<u&&.5<=i&&i<2?s(e,n,i*2):[u,c,t]}function j(e,n,i){if(n=+n,e=+e,i=+i,!(i>0))return[];if(e===n)return[e];const f=n<e,[r,l,o]=f?s(n,e,i):s(e,n,i);if(!(l>=r))return[];const u=l-r+1,c=new Array(u);if(f)if(o<0)for(let t=0;t<u;++t)c[t]=(l-t)/-o;else for(let t=0;t<u;++t)c[t]=(l-t)*o;else if(o<0)for(let t=0;t<u;++t)c[t]=(r+t)/-o;else for(let t=0;t<u;++t)c[t]=(r+t)*o;return c}function m(e,n,i){return n=+n,e=+e,i=+i,s(e,n,i)[2]}function z(e,n,i){n=+n,e=+e,i=+i;const f=n<e,r=f?m(n,e,i):m(e,n,i);return(f?-1:1)*(r<0?1/-r:r)}function B(e,n){let i;for(const f of e)f!=null&&(i<f||i===void 0&&f>=f)&&(i=f);return i}function F(e,n){let i=0,f=0;if(n===void 0)for(let r of e)r!=null&&(r=+r)>=r&&(++i,f+=r);else{let r=-1;for(let l of e)(l=n(l,++r,e))!=null&&(l=+l)>=l&&(++i,f+=l)}if(i)return f/i}function*A(e){for(const n of e)yield*n}function I(e){return Array.from(A(e))}function O(e,n,i){e=+e,n=+n,i=(r=arguments.length)<2?(n=e,e=0,1):r<3?1:+i;for(var f=-1,r=Math.max(0,Math.ceil((n-e)/i))|0,l=new Array(r);++f<r;)l[f]=e+f*i;return l}function R(e,n){let i=0;for(let f of e)(f=+f)&&(i+=f);return i}export{b as A,j as a,q as b,m as c,F as d,S as e,B as f,I as m,O as r,R as s,z as t};