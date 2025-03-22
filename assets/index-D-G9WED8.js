(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
<div>
  <img src="https://media2.giphy.com/media/YTtqB2j5EN7IA/200w.gif?cid=6c09b952avx9x0b6g87aitmsno4dk223nzhkjc4wj6naz1ye&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
        <label for="ip">ip del server d minecraft hipixel</label>
        <input type="text" id="ip" value="">
  </div>
  <form>
        <label for="image_field">sube la imagen amigaaaa</label>
        <input type="file" name="image_field" value="">
        <button type="submit">PICALE</button>
    </form>
  <div id="pics">
    <span>Fotos</span>
  </div>
`;const c=document.querySelector("form");c==null||c.addEventListener("submit",async l=>{l.preventDefault();const i=document.querySelector("#ip"),r=`http://${i==null?void 0:i.value}:4076/v1/image`,e=document.getElementsByName("image_field")[0].files;if(e==null||!e)return alert("bro upload af ile");const t=new FormData,n=e[0];t.append("image_field",n),fetch(r,{method:"POST",body:t}).then(async a=>{const u=await a.json(),s=document.getElementById("pics"),d=document.createElement("span");d.innerText=u.file_name,s==null||s.appendChild(d)}).catch(a=>alert(a))});
