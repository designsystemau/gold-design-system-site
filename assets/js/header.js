var className,$html=document.documentElement;$html.classList?($html.classList.remove("no-js"),$html.classList.add("js")):($html.className=$html.className.replace(new RegExp("(^|\\b)"+(className="no-js").split(" ").join("|")+"(\\b|$)","gi")," "),$html.className+=" js"),function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}return function(o){var h=Object(o),g=h.fallback||function(a){return a.replace(/\?[^#]+/,"").replace("#",".").replace(/^\./,"")+".png"+(/\?[^#]+/.exec(a)||[""])[0]},f="nosvg"in h?h.nosvg:/\bMSIE [1-8]\b/.test(navigator.userAgent);f&&(document.createElement("svg"),document.createElement("use"));var o=window.top!==window.self,i="polyfill"in h?h.polyfill:/\bMSIE [1-8]\.0\b/.test(navigator.userAgent)||/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&o,p={},q=window.requestAnimationFrame||setTimeout,r=document.getElementsByTagName("use"),s=0;i&&function e(){for(var c=0;c<r.length;){var v,t=r[c],k=t.parentNode,l=function(){for(var b=k;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}(),u=t.getAttribute("xlink:href")||t.getAttribute("href");!u&&h.attributeName&&(u=t.getAttribute(h.attributeName)),l&&u?f?((v=document.createElement("img")).style.cssText="display:inline-block;height:100%;width:100%",v.setAttribute("width",l.getAttribute("width")||l.clientWidth),v.setAttribute("height",l.getAttribute("height")||l.clientHeight),v.src=g(u,l,t),k.replaceChild(v,t)):i&&(!h.validate||h.validate(u,l,t)?(k.removeChild(t),t=(v=u.split("#")).shift(),u=v.join("#"),t.length?((v=p[t])||((v=p[t]=new XMLHttpRequest).open("GET",t),v.send(),v._embeds=[]),v._embeds.push({parent:k,svg:l,id:u}),function(b){b.onreadystatechange=function(){var c;4===b.readyState&&((c=b._cachedDocument)||((c=b._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=(e=b._cachedTarget[d.id])||(b._cachedTarget[d.id]=c.getElementById(d.id));a(d.parent,d.svg,e)}))},b.onreadystatechange()}(v)):a(k,l,document.getElementById(u))):(++c,++s)):++c}(!r.length||0<r.length-s)&&q(e,67)}()}}),svg4everybody({polyfill:!0});