System.register("chunks:///_virtual/animated.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,r,o,a,s,l,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,s=e.Vec3,l=e.tween,c=e.Component}],execute:function(){var u,p,y,d,f;o._RF.push({},"948f7pAzv9HU53xORm/ATON","animated",void 0);var h=a.ccclass,m=a.property;e("Animated",h("Animated")((y=t((p=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,n(t,"y",y,r(t)),n(t,"time",d,r(t)),n(t,"delay",f,r(t)),t}return i(t,e),t.prototype.start=function(){new s(0,0,0);l(this.node).delay(this.delay).to(this.time,{position:new s(this.node.position.x,this.y,0),scale:s.ONE}).by(this.time,{eulerAngles:new s(0,0,720),scale:s.ZERO}).to(this.time,{position:new s(this.node.position),scale:s.ZERO}).union().repeatForever().start()},t}(c)).prototype,"y",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 300}}),d=t(p.prototype,"time",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),f=t(p.prototype,"delay",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),u=p))||u);o._RF.pop()}}}));

System.register("chunks:///_virtual/backbutton.ts",["./rollupPluginModLoBabelHelpers.js","cc","./scenelist.ts"],(function(e){var t,n,o,c,i,s,l,a,r,u,d,_,f,p,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,c=e.assertThisInitialized,i=e.createClass},function(e){s=e.cclegacy,l=e._decorator,a=e.Label,r=e.Vec3,u=e.game,d=e.ScrollView,_=e.director,f=e.Layout,p=e.Component},function(e){h=e.sceneArray}],execute:function(){var v,g,I,N,x,b;s._RF.push({},"b20edYWY5pMo6v9nvpXwDsb","backbutton",void 0);var m=l.ccclass,y=l.type;e("BackButton",(v=m("BackButton"),g=y(a),v(((b=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,o(t,"title",x,c(t)),t}n(t,e),t.saveOffset=function(){t._scrollNode&&(t._offset=new r(0,t._scrollCom.getScrollOffset().y,0))},t.saveIndex=function(e){t._sceneIndex=e,t.refreshButton()},t.refreshButton=function(){-1===t._sceneIndex?(t._prevNode.active=!1,t._nextNode.active=!1):(t._prevNode.active=!0,t._nextNode.active=!0),t.instance.updateTitle()};var s=t.prototype;return s.__preload=function(){t._instance=this;for(var e=u._sceneInfos,n="",o=0;o<e.length;o++)(n=(n=e[o].url).replace("db://assets/cases/","")).includes("testlist.scene")||(n=n.replace(".scene",""),h.push(n))},s.start=function(){u.addPersistRootNode(this.node),t._scrollNode=this.node.getParent().getChildByPath("Canvas/ScrollView"),t._scrollNode&&(t._scrollCom=t._scrollNode.getComponent(d)),t._blockInput=this.node.getChildByName("BlockInput"),t._blockInput.active=!1,t._prevNode=this.node.getChildByName("PrevButton"),t._nextNode=this.node.getChildByName("NextButton"),t._prevNode&&t._nextNode&&t.refreshButton()},s.backToList=function(){t._blockInput.active=!0,_.loadScene("testlist",function(){t._sceneIndex=-1,t.refreshButton(),t._scrollNode=this.node.getParent().getChildByPath("Canvas/ScrollView"),t._scrollNode&&(t._scrollCom=t._scrollNode.getComponent(d),t._scrollCom._content.getComponent(f).updateLayout(),t._scrollCom.scrollToOffset(t.offset,.1,!0)),t._blockInput.active=!1}.bind(this))},s.nextscene=function(){t._blockInput.active=!0,this.updateSceneIndex(!0),_.loadScene(this.getSceneName(),(function(){t._blockInput.active=!1}))},s.prescene=function(){t._blockInput.active=!0,this.updateSceneIndex(!1),_.loadScene(this.getSceneName(),(function(){t._blockInput.active=!1}))},s.updateSceneIndex=function(e){e?t._sceneIndex+1>=h.length?t._sceneIndex=0:t._sceneIndex+=1:t._sceneIndex-1<0?t._sceneIndex=h.length-1:t._sceneIndex-=1,this.updateTitle()},s.updateTitle=function(){-1===t._sceneIndex?t.instance.title&&(t.instance.title.node.active=!1,t.instance.title.string=""):t.instance.title&&(t.instance.title.node.active=!0,t.instance.title.string=t.instance.getSceneName())},s.getSceneName=function(){return h[t._sceneIndex]},i(t,null,[{key:"instance",get:function(){return this._instance}},{key:"offset",get:function(){return t._offset},set:function(e){t._offset=e}}]),t}(p))._instance=null,b._scrollNode=null,b._offset=new r,b._scrollCom=null,b._sceneIndex=-1,b._blockInput=void 0,b._prevNode=void 0,b._nextNode=void 0,x=t((N=b).prototype,"title",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=N))||I));s._RF.pop()}}}));

System.register("chunks:///_virtual/cutting-objects.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,o,i,e,r,c,s,a,h,l,u,f,p,d,v,g,y;return{setters:[function(t){n=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){r=t.cclegacy,c=t._decorator,s=t.Graphics,a=t.Vec2,h=t.Input,l=t.Vec3,u=t.Node,f=t.RigidBody2D,p=t.PolygonCollider2D,d=t.Intersection2D,v=t.PhysicsSystem2D,g=t.ERaycast2DType,y=t.Component}],execute:function(){var P,T,b,x,D;r._RF.push({},"1df7a4qxKpHkqVAh/8H35NM","cutting-objects",void 0);var m=c.ccclass,R=c.type;function w(t,n){return t.fraction>n.fraction?1:t.fraction<n.fraction?-1:0}function E(t,n,o){return d.pointLineDistance(t,n,o,!0)<1}t("CuttingObjects",(P=m("CuttingObjects"),T=R(s),P((D=n((x=function(t){function n(){for(var n,o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(n=t.call.apply(t,[this].concat(r))||this).touching=!1,i(n,"ctx",D,e(n)),n.touchStartPoint=new a,n.touchPoint=new a,n.r1=[],n.r2=[],n.results=[],n}o(n,t);var r=n.prototype;return r.start=function(){this.node.on(h.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(h.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(h.EventType.TOUCH_MOVE,this.onTouchMove,this),this.ctx.node.worldPosition=l.ZERO},r.onTouchStart=function(t){this.touching=!0,this.r1.length=0,this.r2.length=0,this.results.length=0,this.touchStartPoint.set(t.getUILocation()),this.touchPoint.set(t.getUILocation())},r.onTouchMove=function(t){this.touchPoint.set(t.getUILocation())},r.onTouchEnd=function(t){if(this.touchPoint.set(t.getUILocation()),this.recalcResults(),this.touching=!1,n=a.squaredDistance(this.touchStartPoint,t.getUILocation()),o=0,i=void 0===i?.1:i,!(Math.abs(n-o)<i)){var n,o,i;this.r2.forEach((function(t){t.fraction=1-t.fraction}));for(var e=this.results,r=[],c=function(){for(var t=!1,n=e[s],o=0;o<r.length;o++){var i=r[o];if(i[0]&&n.collider===i[0].collider){t=!0;var c=i.find((function(t){return a.squaredDistance(t.point,n.point)<=5}));c?i.splice(i.indexOf(c),1):i.push(n);break}}t||r.push([n])},s=0;s<e.length;s++)c();for(var h=0;h<r.length;h++){var l=r[h];if(!(l.length<2)){l=l.sort(w);for(var d=[],v=0;v<l.length-1;v+=2){var g=l[v],y=l[v+1];g&&y&&this.split(g.collider,g.point,y.point,d)}if(!(d.length<=0)){for(var P=l[0].collider,T=void 0,b=0;b<d.length;b++){for(var x=d[b],D=0;D<x.length;D++)"number"==typeof x[D]&&(x[D]=P.points[x[D]]);(!T||x.length>T.length)&&(T=x)}if(!(T.length<3)){P.points=T,P.apply();for(var m=P.body,R=0;R<d.length;R++){var E=d[R];if(!(E.length<3)&&E!=T){var L=new u;L.parent=this.node,L.worldPosition=m.node.worldPosition,L.worldRotation=m.node.worldRotation,L.addComponent(f);var O=L.addComponent(p);O.points=E,O.apply()}}}}}}}},r.split=function(t,n,o,i){for(var e,r,c=t.body,s=t.points,h=[n=c.getLocalPoint(n),o=c.getLocalPoint(o)],l=[o,n],u=0;u<s.length;u++){var f=s[u],p=u===s.length-1?s[0]:s[u+1];if(void 0===e&&E(n,f,p)?e=u:void 0===r&&E(o,f,p)&&(r=u),void 0!==e&&void 0!==r)break}if(void 0!==e&&void 0!==r){var d,v=e,g=r;if(i.length>0)for(var y=0;y<i.length;y++){var P=i[y];if(v=P.indexOf(e),g=P.indexOf(r),-1!==v&&-1!==g){d=i.splice(y,1)[0];break}}d||(d=s.map((function(t,n){return n})));for(var T=v+1;T!==g+1;T++){T>=d.length&&(T=0);var b=d[T];b="number"==typeof b?s[b]:b,a.squaredDistance(b,n)<5||a.squaredDistance(b,o)<5||l.push(d[T])}for(var x=g+1;x!==v+1;x++){x>=d.length&&(x=0);var D=d[x];D="number"==typeof D?s[D]:D,a.squaredDistance(D,n)<5||a.squaredDistance(D,o)<5||h.push(d[x])}i.push(h),i.push(l)}},r.recalcResults=function(){if(this.touching){var t=this.touchStartPoint,n=this.touchPoint;this.ctx.clear(),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(n.x,n.y),this.ctx.stroke();var o=v.instance.raycast(t,n,g.All),i=v.instance.raycast(n,t,g.All),e=o.concat(i);e=e.filter((function(t){return t.collider instanceof p}));for(var r=0;r<e.length;r++){var c=e[r].point;this.ctx.circle(c.x,c.y,5)}this.ctx.fill(),this.r1=o.concat([]),this.r2=i.concat([]),this.results=e}},r.update=function(t){this.recalcResults()},n}(y)).prototype,"ctx",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=x))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/gravity-anims.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,r,i,o,s;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,r=t._decorator,i=t.tween,o=t.Vec3,s=t.Component}],execute:function(){var a;e._RF.push({},"0c277mUeHVGoJ/scxsXmsi0","gravity-anims",void 0);var c=r.ccclass;r.property,t("GravityAnims",c("GravityAnims")(a=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var r=e.prototype;return r.start=function(){var t=2*Math.PI/this.node.children.length;this.node.children.forEach((function(n,e){i(n).to(2,{position:new o(Math.cos(t*e),Math.sin(t*e),0).multiplyScalar(150),eulerAngles:new o(0,0,720)}).delay(.5).to(2,{position:o.ZERO,eulerAngles:new o(0,0,0)}).union().repeatForever().start()}))},r.update=function(t){},e}(s))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/gravity-radial.ts",["./rollupPluginModLoBabelHelpers.js","cc","./gravity.ts"],(function(t){var r,i,e,o,a,n,c,s;return{setters:[function(t){r=t.applyDecoratedDescriptor,i=t.inheritsLoose,e=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,n=t._decorator,c=t.Vec2},function(t){s=t.Gravity}],execute:function(){var l,p,u;a._RF.push({},"9d801GcHl1Msb1mlrGcKGQS","gravity-radial",void 0);var y=n.ccclass,v=n.property;t("GravityRadial",y("GravityRadial")((u=r((p=function(t){function r(){for(var r,i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return r=t.call.apply(t,[this].concat(a))||this,e(r,"gravityForce",u,o(r)),r._position=new c,r._center=new c,r}return i(r,t),r.prototype._applyForce=function(t){var r=this._position,i=this._center;this._position.set(t.node.worldPosition),this._center.set(this.collider.node.worldPosition);var e=i.subtract(r).normalize().multiplyScalar(this.gravityForce*t.getMass());t.applyForce(e,r,!1)},r}(s)).prototype,"gravityForce",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 500}}),l=p))||l);a._RF.pop()}}}));

System.register("chunks:///_virtual/gravity.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,n,o,e,r,s,c,a;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,e=t.Collider2D,r=t.PhysicsSystem2D,s=t.Vec2,c=t.Contact2DType,a=t.Component}],execute:function(){var l;n._RF.push({},"1c502jFEo9JppgcqIaAmGKm","gravity",void 0);var h=o.ccclass;o.property,t("Gravity",h("Gravity")(l=function(t){function n(){for(var i,n=arguments.length,o=new Array(n),e=0;e<n;e++)o[e]=arguments[e];return(i=t.call.apply(t,[this].concat(o))||this).collider=void 0,i.bodies=void 0,i.originGravity=new s,i}i(n,t);var o=n.prototype;return o.onEnable=function(){this.bodies=[],this.collider=this.getComponent(e),this.originGravity.set(r.instance.gravity),r.instance.gravity=s.ZERO,this.collider.on(c.BEGIN_CONTACT,this.onBeginContact,this),this.collider.on(c.END_CONTACT,this.onEndContact,this)},o.onDisable=function(){r.instance.gravity=this.originGravity},o.onBeginContact=function(t,i,n){this.bodies.push(i.body)},o.onEndContact=function(t,i,n){var o=this.bodies.indexOf(i.body);-1!==o&&this.bodies.splice(o,1)},o.update=function(t){if(this.collider)for(var i=this.bodies,n=0;n<i.length;n++)this._applyForce(i[n])},o._applyForce=function(t){},n}(a))||l);n._RF.pop()}}}));

System.register("chunks:///_virtual/linear-impulse.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,i,t,n,o,a,l,s,p;return{setters:[function(e){r=e.applyDecoratedDescriptor,i=e.inheritsLoose,t=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.RigidBody2D,s=e.Component,p=e.Vec2}],execute:function(){var u,c,f;o._RF.push({},"a096baxrf9FAKI5o99lXw3R","linear-impulse",void 0);var m=a.ccclass,y=a.property;e("LinearImpulse",m("LinearImpulse")((f=r((c=function(e){function r(){for(var r,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=e.call.apply(e,[this].concat(o))||this,t(r,"impulse",f,n(r)),r}return i(r,e),r.prototype.start=function(){var e=this.node.getComponent(l);e&&e.applyLinearImpulseToCenter(this.impulse)},r}(s)).prototype,"impulse",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new p}}),u=c))||u);o._RF.pop()}}}));

System.register("chunks:///_virtual/listitem.ts",["./rollupPluginModLoBabelHelpers.js","cc","./backbutton.ts","./scenelist.ts"],(function(t){var n,e,i,o,s,r,a,c,l;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,i=t._decorator,o=t.Label,s=t.Button,r=t.director,a=t.Component},function(t){c=t.BackButton},function(t){l=t.sceneArray}],execute:function(){var u;e._RF.push({},"dfb240gUk5FzLJW2+GbHJRv","listitem",void 0);var h=i.ccclass;i.property,t("ListItem",h("ListItem")(u=function(t){function e(){for(var n,e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))||this).index=-1,n._name="",n.label=null,n.button=null,n}n(e,t);var i=e.prototype;return i.onload=function(){},i.start=function(){this.index=this.node.getSiblingIndex(),this._name="",this.node&&(this.label=this.node.getComponentInChildren(o),this.button=this.node.getComponent(s)),this.updateItem(this.index,l[this.index])},i.loadScene=function(){c.saveOffset(),c.saveIndex(this.index),this.button.interactable=!1,r.loadScene(this._name,c.refreshButton)},i.updateItem=function(t,n){this.index=t,this._name=n,this.label.string=n},e}(a))||u);e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./cutting-objects.ts","./gravity-anims.ts","./gravity-radial.ts","./gravity.ts","./manifold.ts","./many-rigid-bodies.ts","./one-way-platform.ts","./raycast-reflection.ts","./raycast.ts","./animated.ts","./relative-joint-linear-offset.ts","./linear-impulse.ts","./physics-setting.ts","./backbutton.ts","./listitem.ts","./scenelist.ts","./migrate-canvas.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/manifold.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,o,e,r,i,a,l,c,p,s,u,f,d,h;return{setters:[function(t){n=t.applyDecoratedDescriptor,o=t.inheritsLoose,e=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,l=t.Node,c=t.Collider2D,p=t.Contact2DType,s=t.Component,u=t.instantiate,f=t.Sprite,d=t.Color,h=t.tween}],execute:function(){var C,v,y,g,m;i._RF.push({},"61481OhIVNCbrtHCdwHCQlx","manifold",void 0);var T=a.ccclass,b=(a.property,a.type);t("Manifold",(C=T("Manifold"),v=b(l),C((m=n((g=function(t){function n(){for(var n,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=t.call.apply(t,[this].concat(i))||this,e(n,"pointTemp",m,r(n)),n}o(n,t);var i=n.prototype;return i.start=function(){var t=this.getComponent(c);t&&t.on(p.BEGIN_CONTACT,this.onBeginContact,this)},i.onBeginContact=function(t,n,o){for(var e=this,r=o.getWorldManifold().points,i=function(){var t=r[a],n=u(e.pointTemp);n.active=!0;var o=n.getComponent(f),i=new d(o.color);i.a=0,h(o).to(.5,{color:i}).call((function(){n.parent=null})).start(),n.parent=e.node.parent,n.setWorldPosition(t.x,t.y,0)},a=0;a<r.length;a++)i()},n}(s)).prototype,"pointTemp",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=g))||y));i._RF.pop()}}}));

System.register("chunks:///_virtual/many-rigid-bodies.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var e,t,o,n,d,r,a,l,g,s,h;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.inheritsLoose,o=i.initializerDefineProperty,n=i.assertThisInitialized},function(i){d=i.cclegacy,r=i._decorator,a=i.Vec3,l=i.instantiate,g=i.RigidBody2D,s=i.Vec2,h=i.Component}],execute:function(){var y,u,B,m,c,p;d._RF.push({},"7357czh/pdMirwus0eRi0yJ","many-rigid-bodies",void 0);var b=r.ccclass,C=r.property;i("many_rigid_bodies",b("many_rigid_bodies")((B=e((u=function(i){function e(){for(var e,t=arguments.length,d=new Array(t),r=0;r<t;r++)d[r]=arguments[r];return e=i.call.apply(i,[this].concat(d))||this,o(e,"rotateSpeed",B,n(e)),o(e,"maxRigidBodyNumb",m,n(e)),o(e,"rigidBodySpawnRate",c,n(e)),o(e,"enableContactListener",p,n(e)),e._rotateBar=null,e._rigidBodies=null,e._rigidBodyBox=null,e._rigidBodyCircle=null,e._rigidBodyPolygon=null,e._rigidBodyNumber=null,e._maxRigidBodyNumber=null,e._spawnRate=null,e._rotateSpeed=null,e._enableContactListener=null,e.newRigidBodyNumb=0,e}t(e,i);var d=e.prototype;return d.start=function(){var i,e,t,o,n;this._rigidBodies=this.node.getChildByName("rigidBodies"),this._rigidBodyNumber=null==(i=this.node.getChildByName("Info").getChildByName("rigidBodyNumb"))?void 0:i.getChildByName("value"),this._maxRigidBodyNumber=null==(e=this.node.getChildByName("Control").getChildByName("MaxRigidBodyNumber"))?void 0:e.getChildByName("Value"),this._spawnRate=null==(t=this.node.getChildByName("Control").getChildByName("SpawnRate"))?void 0:t.getChildByName("Value"),this._rotateSpeed=null==(o=this.node.getChildByName("Control").getChildByName("RotateSpeed"))?void 0:o.getChildByName("Value"),this._enableContactListener=null==(n=this.node.getChildByName("Control").getChildByName("EnableContactListener"))?void 0:n.getChildByName("Toggle"),this._rotateBar=this.node.getChildByName("rotateBar"),this._rigidBodyBox=this.node.getChildByName("prefab").getChildByName("rigidBodyBox"),this._rigidBodyCircle=this.node.getChildByName("prefab").getChildByName("rigidBodyCircle"),this._rigidBodyPolygon=this.node.getChildByName("prefab").getChildByName("rigidBodyPolygon")},d.update=function(i){var e=this._rotateBar.eulerAngles;if(this._rotateBar.eulerAngles=new a(e.x,e.y,e.z+this.rotateSpeed*i),this._rigidBodies.children.length<this.maxRigidBodyNumb&&(this.newRigidBodyNumb+=this.rigidBodySpawnRate*i,this.newRigidBodyNumb>=1)){var t=this.maxRigidBodyNumb-this._rigidBodies.children.length;this.newRigidBodyNumb>t&&(this.newRigidBodyNumb=t);for(var o=0;o<this.newRigidBodyNumb;o++){var n=null,d=Math.floor(9*Math.random())%5;0===d||1===d?n=l(this._rigidBodyBox):2===d||3===d?n=l(this._rigidBodyCircle):4===d&&(n=l(this._rigidBodyPolygon)),n.active=!0,n.position=new a(100*(2*Math.random()-1),250+1*(2*Math.random()-1),0),n.getComponent(g).linearVelocity=new s(1*Math.random(),1*Math.random()),n.getComponent(g).enabledContactListener=this.enableContactListener,this._rigidBodies.addChild(n)}this.newRigidBodyNumb=0}this._rigidBodyNumber.getComponent("cc.Label").string=this._rigidBodies.children.length.toString()},d.onMaxRigidBodyNumbChanged=function(i){this.maxRigidBodyNumb=Math.floor(1e3*i._progress),this._maxRigidBodyNumber.getComponent("cc.Label").string=this.maxRigidBodyNumb.toString(),this._rigidBodies.destroyAllChildren()},d.onRigidBodySpawnRateChanged=function(i){this.rigidBodySpawnRate=Math.floor(100*i._progress),this._spawnRate.getComponent("cc.Label").string=this.rigidBodySpawnRate.toString()},d.onRotateSpeedChanged=function(i){this.rotateSpeed=Math.floor(180*i._progress),this._rotateSpeed.getComponent("cc.Label").string=this.rotateSpeed.toString()},d.onEnableContactListenerChanged=function(i){this.enableContactListener=i.isChecked,this._rigidBodies.destroyAllChildren()},e}(h)).prototype,"rotateSpeed",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),m=e(u.prototype,"maxRigidBodyNumb",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 300}}),c=e(u.prototype,"rigidBodySpawnRate",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),p=e(u.prototype,"enableContactListener",[C,C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),y=u))||y);d._RF.pop()}}}));

System.register("chunks:///_virtual/migrate-canvas.ts",["cc"],(function(){var e,n,t,i,r,o;return{setters:[function(a){e=a.cclegacy,n=a.director,t=a.Director,i=a.Canvas,r=a.Camera,o=a.game}],execute:function(){e._RF.push({},"48ffeDjqtJDwLlaCZeu8DCX","migrate-canvas",void 0);var a=1048575;function c(e,n){for(var t=0,i=e.children.length;t<i;t++)e.children[t].layer=n,c(e.children[t],n)}n.on(t.EVENT_AFTER_SCENE_LAUNCH,(function(){var e,t,l,s=null==(e=n.getScene())?void 0:e.children,m=null==(t=n.getScene())?void 0:t.getComponentsInChildren(i);if(!(m.length<=1)){m=m.filter((function(e){return!!e.cameraComponent}));var u=null==(l=n.getScene())?void 0:l.getComponentsInChildren(r),v=0;u.forEach((function(e){return v|=e.visibility&a}));for(var p=[],f=0,C=s.length;f<C;f++){var h=s[f];if(o.isPersistRootNode(h)){var d=h.getComponentsInChildren(i);0!==d.length&&p.push.apply(p,d.filter((function(e){return!!e.cameraComponent})))}}p.forEach((function(e){if(m.find((function(n){return n!==e&&n.cameraComponent.visibility&e.cameraComponent.visibility&a}))){var n=~v,t=n&~(n-1);e.cameraComponent.visibility=t|4293918720&e.cameraComponent.visibility,c(e.node,t),v|=n}}))}}));var l=cc.Node.prototype.setParent;function s(e){var n=null,t=e.getComponent(i);return t&&t.cameraComponent?n=t.cameraComponent.visibility&t.node.layer?t.node.layer:t.cameraComponent.visibility&~(t.cameraComponent.visibility-1):(e.parent&&(n=s(e.parent)),n)}cc.Node.prototype.setParent=function(e,n){if(l.call(this,e,n),e){var t=s(this);t&&(this.layer=t,c(this,t))}},e._RF.pop()}}}));

System.register("chunks:///_virtual/one-way-platform.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,e,n,r,i,a,l,c;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator,r=t.Vec2,i=t.Collider2D,a=t.Contact2DType,l=t.PHYSICS_2D_PTM_RATIO,c=t.Component}],execute:function(){var s;e._RF.push({},"a2515kOpeZLH49QO1aU0qn1","one-way-platform",void 0);var u=n.ccclass,p=(n.property,new r),f=new r,y=new r,d=new r;t("OneWayPlatform",u("OneWayPlatform")(s=function(t){function e(){return t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.start=function(){this.getComponent(i).on(a.PRE_SOLVE,this.onPreSolve,this)},n.onPreSolve=function(t,o,e){for(var n=o.body,r=t.body,i=e.getWorldManifold().points,a=0;a<i.length;a++){if(r.getLinearVelocityFromWorldPoint(i[a],p),n.getLinearVelocityFromWorldPoint(i[a],f),r.getLocalVector(f.subtract(p),y),y.y<-1*l)return;if(y.y<1*l){r.getLocalPoint(i[a],d);var c=t.worldAABB.height/2;if(d.y>c-.1*l)return}}e.disabled=!0},e}(c))||s);e._RF.pop()}}}));

System.register("chunks:///_virtual/physics-setting.ts",["cc"],(function(){var s,t,c,e,n;return{setters:[function(i){s=i.cclegacy,t=i.game,c=i.Game,e=i.PhysicsSystem2D,n=i.EPhysics2DDrawFlags}],execute:function(){s._RF.push({},"c9a333cftZIjZ7TQgsfDscD","physics-setting",void 0),t.on(c.EVENT_GAME_INITED,(function(){e.instance.debugDrawFlags=n.Shape|n.Joint})),s._RF.pop()}}}));

System.register("chunks:///_virtual/raycast-reflection.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,n,r,a,s,c,o,l,h,u;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){a=t.cclegacy,s=t._decorator,c=t.GraphicsComponent,o=t.Vec2,l=t.Vec3,h=t.PhysicsSystem2D,u=t.Component}],execute:function(){var p,y,d,f,g,m;a._RF.push({},"7329bOEJuhES78MiEDvhOmt","raycast-reflection",void 0);var x=s.ccclass,v=s.property,b=s.type;t("RayCastReflection",(p=x("RayCastReflection"),y=b(c),p((g=i((f=function(t){function i(){for(var i,e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];return i=t.call.apply(t,[this].concat(a))||this,n(i,"radius",g,r(i)),n(i,"ctx",m,r(i)),i.angle=0,i.begin=new o,i.end=new o,i.remainLength=0,i}e(i,t);var a=i.prototype;return a.start=function(){this.ctx&&(this.ctx.node.worldPosition=l.ZERO,this.angle=0)},a.update=function(t){if(this.ctx){this.angle+=Math.PI/20*t;var i=this.begin.set(this.node.worldPosition.x,this.node.worldPosition.y),e=this.end.set(Math.cos(this.angle),Math.sin(this.angle)).multiplyScalar(this.radius).add(i);this.ctx.clear(),this.remainLength=this.radius,this.raycast(i,e)}},a.raycast=function(t,i){var e=h.instance.raycast(t,i)[0];e&&(i.set(e.point),this.ctx.circle(i.x,i.y,5),this.ctx.fill()),this.ctx.moveTo(t.x,t.y),this.ctx.lineTo(i.x,i.y),this.ctx.stroke(),e&&(this.remainLength=this.remainLength-o.distance(i,t),this.remainLength<1||(t.set(i),i.set(e.normal).multiplyScalar(this.remainLength).add(t),this.raycast(t,i)))},i}(u)).prototype,"radius",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),m=i(f.prototype,"ctx",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/raycast.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,n,s,a,r,c,o,l,y,h,p;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,s=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,c=t.Graphics,o=t.Vec2,l=t.ERaycast2DType,y=t.Vec3,h=t.PhysicsSystem2D,p=t.Component}],execute:function(){var u,f,d,x,g,T;a._RF.push({},"4d42ePXJRhON5WTRvDC0SXW","raycast",void 0);var C=r.ccclass,v=r.property,b=r.type;t("Raycast",(u=C("Raycast"),f=b(c),u((g=i((x=function(t){function i(){for(var i,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return i=t.call.apply(t,[this].concat(a))||this,n(i,"radius",g,s(i)),n(i,"ctx",T,s(i)),i.angle=0,i.begin=new o,i.end=new o,i.raycastType=l.Closest,i}e(i,t);var a=i.prototype;return a.start=function(){this.ctx&&(this.ctx.node.worldPosition=y.ZERO,this.angle=0)},a.update=function(t){var i=this;this.angle+=Math.PI/10*t;var e=this.begin.set(this.node.worldPosition.x,this.node.worldPosition.y),n=this.end.set(Math.cos(this.angle),Math.sin(this.angle)).multiplyScalar(this.radius).add(e),s=h.instance.raycast(e,n,this.raycastType);this.ctx.clear(),this.raycastType!==l.Closest&&this.raycastType!==l.Any||s[0]&&(n=s[0].point),s.forEach((function(t){i.ctx.circle(t.point.x,t.point.y,5)})),this.ctx.fill(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(n.x,n.y),this.ctx.stroke()},a.onClosestBtnClick=function(){this.raycastType=l.Closest},a.onAnyBtnClick=function(){this.raycastType=l.Any},a.onAllClosestBtnClick=function(){this.raycastType=l.AllClosest},a.onAllBtnClick=function(){this.raycastType=l.All},i}(p)).prototype,"radius",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1e3}}),T=i(x.prototype,"ctx",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=x))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/relative-joint-linear-offset.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,n,o,a,s,l,f,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,s=e.RelativeJoint2D,l=e.tween,f=e.Vec2,c=e.Component}],execute:function(){var u,p,v,y;o._RF.push({},"b94816DBtpHtKLLuz9oIOX2","relative-joint-linear-offset",void 0);var h=a.ccclass,m=a.property;e("RelativeJointLinearOffset",h("RelativeJointLinearOffset")((v=t((p=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(t,"time",v,n(t)),r(t,"yOffset",y,n(t)),t}return i(t,e),t.prototype.start=function(){var e=this.getComponent(s);l(e).to(this.time,{linearOffset:new f(0,this.yOffset)}).to(this.time,{linearOffset:new f(0,0)}).union().repeatForever().start()},t}(c)).prototype,"time",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),y=t(p.prototype,"yOffset",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),u=p))||u);o._RF.pop()}}}));

System.register("chunks:///_virtual/scenelist.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,n,i,a,o,c,s,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,c=e.Prefab,s=e.instantiate,l=e.Component}],execute:function(){var u,f,p,h,y;a._RF.push({},"56ce0MAdDJH2qBewyMuTQnW","scenelist",void 0);var d=o.ccclass,b=o.property,v=e("sceneArray",[]);e("SceneManager",(u=d("SceneManager"),f=b({type:c}),u((y=t((h=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,n(t,"itemPrefab",y,i(t)),t}r(t,e);var a=t.prototype;return a.onLoad=function(){if(this.itemPrefab){v.sort((function(e,t){return(e=e.toLowerCase())<(t=t.toLowerCase())?-1:e>t?1:0}));for(var e=0;e<v.length;e++){var t=s(this.itemPrefab);this.node.addChild(t)}}},a.start=function(){},t}(l)).prototype,"itemPrefab",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=h))||p));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});