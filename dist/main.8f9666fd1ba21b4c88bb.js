(()=>{"use strict";class t{constructor(t){this.content=document.createElement(t)}getContent(){return this.content}}class e extends t{constructor({text:t="*",color:e="white",event:n=(()=>{})}){super("button"),this.content.classList.add("button"),this.content.innerHTML=t,this.content.style.background=e,this.content.addEventListener("click",(()=>{n()}))}}class n extends t{constructor(t="*",n=(()=>{})){super("li"),this.content.classList.add("item"),this.content.append(document.createElement("p").innerHTML=t),this.content.append(new e({text:"Сделано",color:"green",event:()=>{this.isDone=!0,n()}}).getContent()),this.content.append(new e({text:"Удалить",color:"red",event:()=>{this.isDelete=!0,n()}}).getContent()),this.isDone=!1,this.isDelete=!1}isDone(){return this.isDone}}class s extends t{constructor(){super("ol"),this.list=[new n("Пункт 1",(()=>{this.render()})),new n("Пункт 2",(()=>{this.render()})),new n("Пункт 3",(()=>{this.render()})),new n("Пункт 4",(()=>{this.render()})),new n("Пункт 5",(()=>{this.render()}))],this.render()}getContent(){return this.content}render(){this.remove(),this.list.filter((t=>!t.isDelete)).sort(((t,e)=>t.isDone-e.isDone)).forEach((t=>{t.isDone&&t.getContent().classList.add("item--done"),this.content.append(t.getContent())}))}remove(){for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild)}add(t){this.list.push(new n(t,(()=>{this.render()}))),this.render()}}class i extends t{constructor(t){super("div"),this.content.classList.add("form");let n=document.createElement("input");n.classList.add("input"),this.content.append(n);let s=new e({text:"Добавить",color:"grey",event:()=>{t(n.value)}});s.getContent().classList.add("button","adding-button"),s.getContent().innerHTML="Добавить",this.content.append(s.getContent())}}let o=new class extends t{#t;#e;constructor(){super("section"),this.content.classList.add("section"),this.#t=new s,this.#e=new i((t=>{this.#t.add(t)})),this.content.append(this.#t.getContent()),this.content.append(this.#e.getContent())}};document.body.append(o.getContent())})();