import{s as U,t as A,g as H,u as S,v as _}from"./three-okop3vLy.js";import{t as L}from"./three-globe-wAnUOTl0.js";import{t as R}from"./three-render-objects-BJJ9uPU0.js";import{i as G}from"./accessor-fn-Dh2lNxUP.js";import{i as T}from"./kapsule-CVixmwAw.js";import{T as I,E,G as F}from"./@tweenjs-vQRMq_04.js";function M(n,o){o===void 0&&(o={});var e=o.insertAt;if(!(typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var B=`.scene-container .clickable {
  cursor: pointer;
}`;M(B);function j(n,o){(o==null||o>n.length)&&(o=n.length);for(var e=0,t=Array(o);e<o;e++)t[e]=n[e];return t}function V(n){if(Array.isArray(n))return j(n)}function C(n,o,e){return(o=K(o))in n?Object.defineProperty(n,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[o]=e,n}function z(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(n,o){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);o&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,t)}return e}function m(n){for(var o=1;o<arguments.length;o++){var e=arguments[o]!=null?arguments[o]:{};o%2?k(Object(e),!0).forEach(function(t){C(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}function N(n,o){if(n==null)return{};var e,t,i=W(n,o);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(n);for(t=0;t<g.length;t++)e=g[t],o.includes(e)||{}.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function W(n,o){if(n==null)return{};var e={};for(var t in n)if({}.hasOwnProperty.call(n,t)){if(o.includes(t))continue;e[t]=n[t]}return e}function v(n){return V(n)||z(n)||Z(n)||q()}function $(n,o){if(typeof n!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var t=e.call(n,o||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}function K(n){var o=$(n,"string");return typeof o=="symbol"?o:o+""}function Z(n,o){if(n){if(typeof n=="string")return j(n,o);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?j(n,o):void 0}}function x(n,o){var e=new o;return e._destructor&&e._destructor(),{linkProp:function(i){return{default:e[i](),onChange:function(l,p){p[n][i](l)},triggerUpdate:!1}},linkMethod:function(i){return function(g){for(var l=g[n],p=arguments.length,s=new Array(p>1?p-1:0),a=1;a<p;a++)s[a-1]=arguments[a];var r=l[i].apply(l,s);return r===l?this:r}}}}var J=["rendererConfig","waitForGlobeReady"],y=m(m({},window.THREE?window.THREE:{AmbientLight:U,DirectionalLight:A,Vector2:H,REVISION:S}),{},{CSS2DRenderer:_}),D=x("globe",L),Q=Object.assign.apply(Object,v(["globeImageUrl","bumpImageUrl","showGlobe","showGraticules","showAtmosphere","atmosphereColor","atmosphereAltitude","onGlobeReady","pointsData","pointLat","pointLng","pointColor","pointAltitude","pointRadius","pointResolution","pointsMerge","pointsTransitionDuration","arcsData","arcStartLat","arcStartLng","arcEndLat","arcEndLng","arcColor","arcAltitude","arcAltitudeAutoScale","arcStroke","arcCurveResolution","arcCircularResolution","arcDashLength","arcDashGap","arcDashInitialGap","arcDashAnimateTime","arcsTransitionDuration","polygonsData","polygonGeoJsonGeometry","polygonCapColor","polygonCapMaterial","polygonSideColor","polygonSideMaterial","polygonStrokeColor","polygonAltitude","polygonCapCurvatureResolution","polygonsTransitionDuration","pathsData","pathPoints","pathPointLat","pathPointLng","pathPointAlt","pathResolution","pathColor","pathStroke","pathDashLength","pathDashGap","pathDashInitialGap","pathDashAnimateTime","pathTransitionDuration","heatmapsData","heatmapPoints","heatmapPointLat","heatmapPointLng","heatmapPointWeight","heatmapBandwidth","heatmapColorFn","heatmapColorSaturation","heatmapBaseAltitude","heatmapTopAltitude","heatmapsTransitionDuration","hexBinPointsData","hexBinPointLat","hexBinPointLng","hexBinPointWeight","hexBinResolution","hexMargin","hexTopCurvatureResolution","hexTopColor","hexSideColor","hexAltitude","hexBinMerge","hexTransitionDuration","hexPolygonsData","hexPolygonGeoJsonGeometry","hexPolygonColor","hexPolygonAltitude","hexPolygonResolution","hexPolygonMargin","hexPolygonUseDots","hexPolygonCurvatureResolution","hexPolygonDotResolution","hexPolygonsTransitionDuration","tilesData","tileLat","tileLng","tileAltitude","tileWidth","tileHeight","tileUseGlobeProjection","tileMaterial","tileCurvatureResolution","tilesTransitionDuration","ringsData","ringLat","ringLng","ringAltitude","ringColor","ringResolution","ringMaxRadius","ringPropagationSpeed","ringRepeatPeriod","labelsData","labelLat","labelLng","labelAltitude","labelRotation","labelText","labelSize","labelTypeFace","labelColor","labelResolution","labelIncludeDot","labelDotRadius","labelDotOrientation","labelsTransitionDuration","htmlElementsData","htmlLat","htmlLng","htmlAltitude","htmlElement","htmlTransitionDuration","objectsData","objectLat","objectLng","objectAltitude","objectRotation","objectFacesSurface","objectThreeObject","customLayerData","customThreeObject","customThreeObjectUpdate"].map(function(n){return C({},n,D.linkProp(n))}))),X=Object.assign.apply(Object,v(["globeMaterial","getGlobeRadius","getCoords","toGeoCoords"].map(function(n){return C({},n,D.linkMethod(n))}))),w=x("renderObjs",R),Y=Object.assign.apply(Object,v(["width","height","backgroundColor","backgroundImageUrl","enablePointerInteraction"].map(function(n){return C({},n,w.linkProp(n))}))),ee=Object.assign.apply(Object,v(["lights","postProcessingComposer"].map(function(n){return C({},n,w.linkMethod(n))}))),le=T({props:m(m({onZoom:{triggerUpdate:!1},onGlobeClick:{triggerUpdate:!1},onGlobeRightClick:{triggerUpdate:!1},pointLabel:{default:"name",triggerUpdate:!1},onPointClick:{triggerUpdate:!1},onPointRightClick:{triggerUpdate:!1},onPointHover:{triggerUpdate:!1},arcLabel:{default:"name",triggerUpdate:!1},onArcClick:{triggerUpdate:!1},onArcRightClick:{triggerUpdate:!1},onArcHover:{triggerUpdate:!1},polygonLabel:{default:"name",triggerUpdate:!1},onPolygonClick:{triggerUpdate:!1},onPolygonRightClick:{triggerUpdate:!1},onPolygonHover:{triggerUpdate:!1},pathLabel:{default:"name",triggerUpdate:!1},onPathClick:{triggerUpdate:!1},onPathRightClick:{triggerUpdate:!1},onPathHover:{triggerUpdate:!1},onHeatmapClick:{triggerUpdate:!1},onHeatmapRightClick:{triggerUpdate:!1},onHeatmapHover:{triggerUpdate:!1},hexLabel:{triggerUpdate:!1},onHexClick:{triggerUpdate:!1},onHexRightClick:{triggerUpdate:!1},onHexHover:{triggerUpdate:!1},hexPolygonLabel:{triggerUpdate:!1},onHexPolygonClick:{triggerUpdate:!1},onHexPolygonRightClick:{triggerUpdate:!1},onHexPolygonHover:{triggerUpdate:!1},tileLabel:{default:"name",triggerUpdate:!1},onTileClick:{triggerUpdate:!1},onTileRightClick:{triggerUpdate:!1},onTileHover:{triggerUpdate:!1},labelLabel:{triggerUpdate:!1},onLabelClick:{triggerUpdate:!1},onLabelRightClick:{triggerUpdate:!1},onLabelHover:{triggerUpdate:!1},objectLabel:{default:"name",triggerUpdate:!1},onObjectClick:{triggerUpdate:!1},onObjectRightClick:{triggerUpdate:!1},onObjectHover:{triggerUpdate:!1},customLayerLabel:{default:"name",triggerUpdate:!1},onCustomLayerClick:{triggerUpdate:!1},onCustomLayerRightClick:{triggerUpdate:!1},onCustomLayerHover:{triggerUpdate:!1},pointerEventsFilter:{default:function(){return!0},triggerUpdate:!1,onChange:function(o,e){return e.renderObjs.hoverFilter(function(t){return o(t,t.__data)})}},lineHoverPrecision:{default:.2,triggerUpdate:!1,onChange:function(o,e){return e.renderObjs.lineHoverPrecision(o)}}},Q),Y),methods:m(m({pauseAnimation:function(o){var e;return o.animationFrameRequestId!==null&&(cancelAnimationFrame(o.animationFrameRequestId),o.animationFrameRequestId=null),(e=o.globe)===null||e===void 0||e.pauseAnimation(),this},resumeAnimation:function(o){var e;return o.animationFrameRequestId===null&&this._animationCycle(),(e=o.globe)===null||e===void 0||e.resumeAnimation(),this},_animationCycle:function(o){o.renderObjs.tick(),o.tweenGroup.update(),o.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},pointOfView:function(o){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=l();if(e.lat===void 0&&e.lng===void 0&&e.altitude===void 0)return i;var g=Object.assign({},i,e);if(["lat","lng","altitude"].forEach(function(s){return g[s]=+g[s]}),!t)p(g);else{for(;i.lng-g.lng>180;)i.lng-=360;for(;i.lng-g.lng<-180;)i.lng+=360;o.tweenGroup.add(new I(i).to(g,t).easing(E.Cubic.InOut).onUpdate(p).start())}return this;function l(){return o.globe.toGeoCoords(o.renderObjs.cameraPosition())}function p(s){var a=s.lat,r=s.lng,u=s.altitude;o.renderObjs.cameraPosition(o.globe.getCoords(a,r,u))}},getScreenCoords:function(o){for(var e,t=arguments.length,i=new Array(t>1?t-1:0),g=1;g<t;g++)i[g-1]=arguments[g];var l=(e=o.globe).getCoords.apply(e,i);return o.renderObjs.getScreenCoords(l.x,l.y,l.z)},toGlobeCoords:function(o,e,t){var i=o.renderObjs.intersectingObjects(e,t).find(function(s){return s.object.__globeObjType==="globe"});if(!i)return null;var g=o.globe.toGeoCoords(i.point),l=g.lat,p=g.lng;return{lat:l,lng:p}},scene:function(o){return o.renderObjs.scene()},camera:function(o){return o.renderObjs.camera()},renderer:function(o){return o.renderObjs.renderer()},controls:function(o){return o.renderObjs.controls()},_destructor:function(o){o.globe._destructor(),this.pauseAnimation(),this.pointsData([]),this.arcsData([]),this.polygonsData([]),this.pathsData([]),this.heatmapsData([]),this.hexBinPointsData([]),this.hexPolygonsData([]),this.tilesData([]),this.labelsData([]),this.htmlElementsData([]),this.objectsData([]),this.customLayerData([])}},X),ee),stateInit:function(o){var e=o.rendererConfig,t=o.waitForGlobeReady,i=t===void 0?!0:t,g=N(o,J),l=new L(m({waitForGlobeReady:i},g));return{globe:l,renderObjs:R({controlType:"orbit",rendererConfig:e,waitForLoadComplete:i,extraRenderers:[new y.CSS2DRenderer]}).skyRadius(l.getGlobeRadius()*500).showNavInfo(!1).objects([l]).lights([new y.AmbientLight(13421772,Math.PI),new y.DirectionalLight(16777215,.6*Math.PI)]),tweenGroup:new F}},init:function(o,e){var t=this;o.innerHTML="",o.appendChild(e.container=document.createElement("div")),e.container.style.position="relative";var i=document.createElement("div");e.container.appendChild(i),e.renderObjs(i),e.globe.rendererSize(e.renderObjs.renderer().getSize(new y.Vector2)),this.pointOfView({altitude:2.5});var g=e.globe.getGlobeRadius(),l=e.renderObjs.controls();l.minDistance=g*1.01,l.maxDistance=g*100,l.enablePan=!1,l.enableDamping=!0,l.dampingFactor=.1,l.rotateSpeed=.3,l.zoomSpeed=.3,l.addEventListener("change",function(){var a=t.pointOfView();l.rotateSpeed=a.altitude*.2,l.zoomSpeed=(a.altitude+1)*.1,e.globe.setPointOfView(e.renderObjs.camera().position),e.onZoom&&e.onZoom(a)});var p=function(r){for(var u=r;u&&!u.hasOwnProperty("__globeObjType");)u=u.parent;return u},s={point:function(r){return r},arc:function(r){return r},polygon:function(r){return r.data},path:function(r){return r},heatmap:function(r){return r},hexbin:function(r){return r},hexPolygon:function(r){return r},tile:function(r){return r},label:function(r){return r},object:function(r){return r},custom:function(r){return r}};y.REVISION<155&&(e.renderObjs.renderer().useLegacyLights=!1),e.renderObjs.hoverOrderComparator(function(a,r){var u=p(a),c=p(r),b=function(d){return!d};return b(u)-b(c)}).tooltipContent(function(a){var r={point:e.pointLabel,arc:e.arcLabel,polygon:e.polygonLabel,path:e.pathLabel,hexbin:e.hexLabel,hexPolygon:e.hexPolygonLabel,tile:e.tileLabel,label:e.labelLabel,object:e.objectLabel,custom:e.customLayerLabel},u=p(a),c=u&&u.__globeObjType;return u&&c&&r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&G(r[c])(s[c](u.__data))||""}).onHover(function(a){var r={point:e.onPointHover,arc:e.onArcHover,polygon:e.onPolygonHover,path:e.onPathHover,heatmap:e.onHeatmapHover,hexbin:e.onHexHover,hexPolygon:e.onHexPolygonHover,tile:e.onTileHover,label:e.onLabelHover,object:e.onObjectHover,custom:e.onCustomLayerHover},u={globe:e.onGlobeClick,point:e.onPointClick,arc:e.onArcClick,polygon:e.onPolygonClick,path:e.onPathClick,heatmap:e.onHeatmapClick,hexbin:e.onHexClick,hexPolygon:e.onHexPolygonClick,tile:e.onTileClick,label:e.onLabelClick,object:e.onObjectClick,custom:e.onCustomLayerClick},c=p(a);if(c&&!r.hasOwnProperty(c.__globeObjType)&&(c=null),c!==e.hoverObj){var b=e.hoverObj?e.hoverObj.__globeObjType:null,h=e.hoverObj?s[b](e.hoverObj.__data):null,d=c?c.__globeObjType:null,f=c?s[d](c.__data):null;b&&b!==d&&r[b]&&r[b](null,h),d&&r[d]&&r[d](f,b===d?h:null),e.renderObjs.renderer().domElement.classList[d&&u[d]?"add":"remove"]("clickable"),e.hoverObj=c}}).onClick(function(a,r,u){if(a){var c={globe:e.onGlobeClick,point:e.onPointClick,arc:e.onArcClick,polygon:e.onPolygonClick,path:e.onPathClick,heatmap:e.onHeatmapClick,hexbin:e.onHexClick,hexPolygon:e.onHexPolygonClick,tile:e.onTileClick,label:e.onLabelClick,object:e.onObjectClick,custom:e.onCustomLayerClick},b=p(a),h=b.__globeObjType;if(b&&c.hasOwnProperty(h)&&c[h]){var d=[r];if(h==="globe"){var f=t.toGeoCoords(u),P=f.lat,O=f.lng;d.unshift({lat:P,lng:O})}else d.push(t.toGeoCoords(u));s.hasOwnProperty(h)&&d.unshift(s[h](b.__data)),c[h].apply(c,d)}}}).onRightClick(function(a,r,u){if(a){var c={globe:e.onGlobeRightClick,point:e.onPointRightClick,arc:e.onArcRightClick,polygon:e.onPolygonRightClick,path:e.onPathRightClick,heatmap:e.onHeatmapRightClick,hexbin:e.onHexRightClick,hexPolygon:e.onHexPolygonRightClick,tile:e.onTileRightClick,label:e.onLabelRightClick,object:e.onObjectRightClick,custom:e.onCustomLayerRightClick},b=p(a),h=b.__globeObjType;if(b&&c.hasOwnProperty(h)&&c[h]){var d=[r];if(h==="globe"){var f=t.toGeoCoords(u),P=f.lat,O=f.lng;d.unshift({lat:P,lng:O})}else d.push(t.toGeoCoords(u));s.hasOwnProperty(h)&&d.unshift(s[h](b.__data)),c[h].apply(c,d)}}}),this._animationCycle()}});export{le as g};