var IE_VER=-1;function id(a){return document.getElementById(a)}function el(a){return document.createElement(a)}function setStyle(d,b){if(d==null||b==null||d.nodeType!=1){return}for(var c in b){try{d.style[c]=b[c]}catch(a){}}}function getNodeDefaultView(c,a){var b=null;if(!(c)){return null}if(c.currentStyle){if(a=="opacity"){var d=c.currentStyle.filter;if(/opacity=(\S+)/.test(d)){return(parseFloat(RegExp["$1"])/100)}return 1}b=c.currentStyle}else{b=document.defaultView.getComputedStyle(c,null)}if(a!=undefined&&b){return b[a]}else{return b}}function setOpacity(a,b){if(IE_VER>0&&IE_VER<10){a.style.filter="alpha(opacity="+(b*100)+")"}else{a.style.opacity=b}}function eventPreventDefault(a){a=a||window.event;if(a.preventDefault){a.preventDefault()}else{a.returnValue=false}}function getMousePos(a){a=a||window.event;var b=document;var c=(a.pageX||a.pageY)?{x:a.pageX,y:a.pageY}:{x:a.clientX+b.documentElement.scrollLeft-b.documentElement.clientLeft,y:a.clientY+b.documentElement.scrollTop-b.documentElement.clientTop};return c}function clearSelection(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty()}function getOffset(a){var c={left:0,top:0},b=a;while(b&&b.offsetParent!=b){c.left+=b.offsetLeft;c.top+=b.offsetTop;b=b.offsetParent}return c}function floatEqual(e,c,d){var f=Math.pow(10,d);e=parseInt(e*f);c=parseInt(c*f);return(e==c)}function NiceScroll(a){this.taId=a;this.ta=id(this.taId);if(this.ta.nodeType!=1){return null}this.st=el("label");this.sb=el("div");this.sb.timerId=null;this.sbH=0;this.scH=0;this.stH=0;this.avg=0;this.sbcH=0;this.n=20;this.enabled=true;this.mousePos=null;this.isScroll=false;this.onSb=false;this.show=false;this.checkTt=null;this.touchDelta=0;this.wtId=null;this.wtCounter=0;this.wSpeed=0;this.woSpeed=0;if(typeof this.init!="function"){NiceScroll.prototype.init=function(){var b=this;this.sb.id=this.taId+"niceScrollSb"+new Date().getTime();setStyle(this.sb,{backgroundColor:(this.getBgColor()||"white")});this.sb.appendChild(this.st);document.body.appendChild(this.sb);this.reset();setStyle(this.ta,{overflow:"hidden"});this._syncDisplay();this._bindEvt()};NiceScroll.prototype._setSbStyle=function(b){if(typeof b=="object"){setStyle(this.sb,b)}else{this.sb.className=b}};NiceScroll.prototype._setStStyle=function(b){if(typeof styleObj=="object"){setStyle(this.st,styleObj)}else{this.st.className=b}};NiceScroll.prototype.reset=function(){var i=getOffset(this.ta);var f=this.ta.offsetWidth;var b=this.ta.offsetHeight;var d=this.ta.scrollHeight;var h=parseFloat(getNodeDefaultView(this.ta,"borderTopWidth"))||0;var c=parseFloat(getNodeDefaultView(this.ta,"borderBottomWidth"))||0;var g=parseFloat(getNodeDefaultView(this.ta,"borderRightWidth"))||0;var e=parseFloat(getNodeDefaultView(this.ta,"borderLeftWidth"))||0;this.scH=d-b+h+c;this.stH=parseInt(b/d*b*0.7);this.sbcH=b-(this.stH+2);this.avg=this.scH/this.sbcH;if(d-b<=0){setStyle(this.sb,{visibility:"hidden"});this.show=false;return}else{setStyle(this.sb,{visibility:"visible"})}this.show=true;setStyle(this.sb,{top:i.top+h+"px",left:i.left+f-e-g-7-2+"px",height:b+"px",position:"absolute",zIndex:9002,width:"7px"});setStyle(this.st,{"float":"right",border:"1px solid #C1C9CD",background:"#DAE0E2",borderRadius:"3px",position:"relative",top:(this.ta.scrollTop/this.scH)*this.sbcH+"px",width:"5px",height:this.stH+"px",display:"inline-block"});if(this.isScroll==false){this._fadeOut()}};NiceScroll.prototype.getBgColor=function(){var d,c=this.ta,b;while(true){d=getNodeDefaultView(c,"backgroundColor");if(d!="transparent"){b=d;break}if(c.tagName=="body"){break}c=c.parentNode}return b};NiceScroll.prototype._bindEvt=function(){var c=this;if(document.attachEvent){this.ta.attachEvent("onmousewheel",function(d){d=d||window.event;c.scroll(d)});this.sb.attachEvent("onmousewheel",function(d){d=d||window.event;c.scroll(d)})}else{this.ta.addEventListener("mousewheel",function(d){d=d||window.event;c.scroll(d)},false);this.ta.addEventListener("DOMMouseScroll",function(d){d=d||window.event;c.scroll(d)},false);this.sb.addEventListener("mousewheel",function(d){d=d||window.event;c.scroll(d)},false);this.sb.addEventListener("DOMMouseScroll",function(d){d=d||window.event;c.scroll(d)},false);try{this.ta.addEventListener("touchstart",function(d){c.touchDelta=d.touches[0].pageY},false);this.ta.addEventListener("touchmove",function(e){var f=e.changedTouches[0].pageY,g=f-c.touchDelta,d=g>0?-1:1;if(c.show==true&&c.enabled==true){c.scrollShow(e);c.wheelAnimate(5*d,1)}c.touchDelta=f},false)}catch(b){}}this.st.onmousedown=function(d){c.isScroll=true;c.mousePos=getMousePos(d);document.onmouseup=function(e){document.onmousemove=null;document.onmouseup=null;if(this.onSb==false){c.isScroll=false}};document.onmousemove=function(g){var f=getMousePos(g);var e=f.y-c.mousePos.y;var h=parseFloat(c.st.style.top)+e;h=(h>=c.sbcH?c.sbcH:(h<=0?0:h));c.st.style.top=h+"px";c.mousePos.y=f.y;c.ta.scrollTop=c.scH*(h/c.sbcH);clearSelection(g)}};this.sb.onmouseover=function(d){d=d||window.event;c.onSb=true;if(c.show==true){c.scrollShow(d)}};this.sb.onmouseout=function(){c.onSb=false;c.isScroll=false;c._fadeOut()}};NiceScroll.prototype.close=function(){this.sb.style.visibility="hidden";this.enabled=false};NiceScroll.prototype.open=function(){this.enabled=true};NiceScroll.prototype._syncDisplay=function(){if(this.ta.style.display=="none"||this.ta.visibility=="hidden"){this.sb.style.visibility="hidden"}else{this.sb.style.visibility="visible"}};NiceScroll.prototype.check=function(){if(id(this.taId)==null){window.clearTimeout(this.checkTt);this.sb.parentNode.removeChild(this.sb);return}if(this.enabled==false){return}if(this.ta.style.display=="none"||this.ta.visibility=="hidden"){this.sb.style.visibility="hidden"}if(parseInt(this.ta.offsetHeight)<=0){this.sb.style.visibility="hidden"}this.reset()};NiceScroll.prototype._getWheelDelta=function(b){b=b||window.event;if(b.wheelDelta){return window.opera&&window.opera.version<9.5?-b.wheelDelta:b.wheelDelta}else{return -b.detail*40}};NiceScroll.prototype.wheelAnimate=function(c,b){var d=this,e=false;if(this.wtId){e=(this.woSpeed^c)<0;this.wtCounter=e?b:(this.wtCounter+b<50?this.wtCounter+b:50);this.wSpeed=e?c:this.wSpeed*1.05;return}this.wtCounter=b;this.woSpeed=this.wSpeed=c;(function(){var g=0;d.wtId=window.setTimeout(arguments.callee,5);if(d.wtCounter<0){clearTimeout(d.wtId);d.wtId=null;if(d.onSb==false){d.isScroll=false}d._fadeOut();return}var f=parseFloat(d.ta.scrollTop)+parseInt(d.wSpeed);if(f>=d.scH||f<=0){d.wtCounter=0}d.ta.scrollTop=f;g=(d.ta.scrollTop/d.scH)*d.sbcH;if(!isNaN(g)){d.st.style.top=g+"px"}d.wtCounter--})()};NiceScroll.prototype.scrollShow=function(b){window.clearTimeout(this.sb.timerId);this.sb.style.visibility="visible";setOpacity(this.sb,1);this.isScroll=true;eventPreventDefault(b)};NiceScroll.prototype.scroll=function(c){c=c||window.event;var d=this._getWheelDelta(c);var b=d>0?-1:1;if(this.show==true&&this.enabled==true){this.scrollShow(c);this.wheelAnimate(5*b,7)}};NiceScroll.prototype.fadeTo=function(g,e){var f=parseFloat(getNodeDefaultView(this.sb,"opacity")),c=e>1?e/100:e,i=c-f,b=100,d=i/g*b,h=this.sb;this.sb.timerId=window.setTimeout(function(){f+=d;setOpacity(h,f);if(d>0&&f<c||d<0&&f>c){h.timerId=window.setTimeout(arguments.callee,b)}else{setOpacity(h,c)}},b)};NiceScroll.prototype._fadeOut=function(){this.fadeTo(1000,0.6)}}}function helpLoad(){var c=600;try{c=window.parent.getCurrentHeight()-70}catch(b){}var a='<div id="content" style="height: '+c+'px;overflow: hidden">'+document.body.innerHTML+"</div>";document.body.innerHTML=a;window.parent.helpPageTemporaryShow(function(){var d=new NiceScroll("content");d.init();d.open()},window)}(function(){var a=navigator.userAgent;if(/MSIE ([^;]+)/.test(a)){IE_VER=parseFloat(RegExp["$1"])}window.onload=helpLoad})();