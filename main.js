(()=>{"use strict";var e,t,n,o,i,r,c;!function(){var e=document.querySelector('[data-menu="list"]'),t=["click","touchstart"];function n(){e.classList.toggle("hidemenu"),function(t,n,o){var i=document.documentElement,r="data-outside";function c(o){t.contains(o.target)||(t.removeAttribute(r,""),n.forEach((function(e){i.removeEventListener(e,c)})),e.classList.remove("hidemenu"))}t.hasAttribute(r)||(n.forEach((function(e){setTimeout((function(){return i.addEventListener(e,c)}))})),t.setAttribute(r,""))}(e,t)}e&&t.forEach((function(t){e.addEventListener(t,n)}))}(),function(){var e=document.querySelector('[data-modal="open"]'),t=document.querySelector('[data-modal="close"]'),n=document.querySelector('[data-modal="container"]');function o(e){e.preventDefault(),n.classList.toggle("activeModal")}e&&t&&n&&(e.addEventListener("click",o),t.addEventListener("click",o),n.addEventListener("click",(function(e){e.target===this&&o(e)})))}(),e=document.querySelector("form.login"),t=document.querySelector("label.login"),n=document.querySelector("label.signup"),o=document.querySelector(".signup-link a"),i=document.querySelector(".title-text .login"),n.addEventListener("click",(function(){e.style.marginLeft="-50%",i.style.marginLeft="-50%"})),t.addEventListener("click",(function(){e.style.marginLeft="0%",i.style.marginLeft="0%"})),o.addEventListener("click",(function(){return n.click(),!1})),function(){var e=document.querySelectorAll("[data-tooltip]");function t(){var e=function(e){var t=document.createElement("div"),n=e.getAttribute("aria-label");return t.classList.add("tooltip"),t.innerText=n,document.body.appendChild(t),t}(this);o.tooltipBox=e,o.element=this,this.addEventListener("mousemove",o),n.tooltipBox=e,n.element=this,this.addEventListener("mouseleave",n)}var n={tooltipBox:"",element:"",handleEvent:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n)}},o={tooltipBox:"",element:"",handleEvent:function(e){this.tooltipBox.style.top=e.pageY+20+"px",this.tooltipBox.style.left=e.pageX+20+"px",this.element.removeEventListener("onMouseMove",o)}};e&&e.forEach((function(e){e.addEventListener("mouseover",t)}))}(),r=document.querySelector('[data-form="toggleForm"]'),c=document.querySelector('[data-form="form"]'),r.addEventListener("click",(function(e){e.preventDefault(),c.classList.toggle("activeForm")}))})();