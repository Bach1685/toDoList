(()=>{"use strict";class t{#t;get html(){return this.#t}#e;get elements(){return this.#e}constructor(){this.#t=document.createElement("ol"),this.#t.start="1",this.#t.classList.add("list"),this.#t.id="list",this.#e=[]}add(t){if(Array.isArray(t))return void t.forEach((t=>{this.#t.append(t.html),this.#e.push(t)}));this.#t.append(t.html),this.#e.push(t);let e=Array.from(this.#t.querySelectorAll("li")).find((t=>"true"===t.dataset.isDone));this.#t.insertBefore(t.html,e)}removeByIndex(t){this.#e[t].html.remove(),this.#e.splice(t,1)}removeById(t){let e=this.#e.findIndex((e=>e.id==t));this.#e[e].html.remove(),this.#e.splice(e,1)}sendToEndById(t){let e=Array.from(this.#t.querySelectorAll("li")).find((e=>e.dataset.id==t));e.classList.add("element--done"),e.dataset.isDone=!0,this.#t.appendChild(e)}}class e{#t;get html(){return this.#t}constructor(t,e){this.#t=document.createElement("button"),this.#t.classList.add("button",e),this.#t.dataset.id=t}}class s{#t;get html(){return this.#t}#s;get value(){return this.#s}#l;#i=0;get id(){return this.#i}constructor(t){this.#t=document.createElement("li"),this.#t.classList.add("element");let s=document.createElement("p");s.classList.add("element__content"),s.innerHTML=t,this.#t.append(s);let l=document.createElement("div");this.#t.append(l),this.#i=Math.random(),this.#t.dataset.id=this.#i,this.#t.dataset.isDone=!1,l.append(new e(this.#i,"button--ok").html),l.append(new e(this.#i,"button--delete").html),this.#s=t,this.#l=!1}}class l{#t;get html(){return this.#t}constructor(){this.#t=document.createElement("div"),this.#t.classList.add("form");let t=document.createElement("input");t.classList.add("input"),this.#t.append(t);let e=document.createElement("button");e.classList.add("button","adding-button"),e.innerHTML="Добавить",this.#t.append(e)}}let i=new class{#h;#n;#t;get html(){return this.#t}constructor(){this.#t=document.createElement("section"),this.#t.classList.add("section"),this.#h=new t,this.#n=new l,this.#t.append(this.#h.html),this.#t.append(this.#n.html)}activateListeners(){Array.from(this.#t.getElementsByClassName("adding-button")).forEach((t=>{t.addEventListener("click",(()=>this.#m()))}))}#m(){let t=new s(Array.from(this.#n.html.querySelectorAll("input"))[0].value);this.#h.add(t),Array.from(t.html.getElementsByClassName("button--delete")).forEach((t=>{t.addEventListener("click",(t=>{this.#h.removeById(t.target.dataset.id)}))})),Array.from(t.html.getElementsByClassName("button--ok")).forEach((t=>{t.addEventListener("click",(t=>{this.#h.sendToEndById(t.target.dataset.id)}))}))}};document.body.append(i.html),i.activateListeners()})();