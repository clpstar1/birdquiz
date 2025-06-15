(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function g(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=g(e);fetch(e.href,n)}})();const o=t=>{document.getElementById("counter").innerText=`Remaining: ${t}`},i=()=>{if(r.length===0)return null;const t=Math.floor(Math.random()*r.length);return r.splice(t,1)[0]},c=t=>{const l=document.getElementById("content");l.innerHTML=`
    <div class="center-col">
      <h2>Guesseth the Bird</h2>
      <audio controls>
        <source src=${t}>
      </audio>
      <div class="button" id="revealButton" style="margin-top: 1em">
        Reveal
      </div>
    </div>
  `,o(r.length+1),document.getElementById("revealButton").addEventListener("click",()=>p(t))},p=t=>{const l=document.getElementById("content");l.innerHTML=`
    <div class="center-col">
      <h2>It was ${t.split("/")[1]}!</h2>
      <audio controls>
        <source src=${t}>
      </audio>
      <div style="display: flex; margin-top: 1em">
        <div class="button" id="continueButton">
          Continue
        </div>
        <div class="button" id="reshuffleButton">
          Continue and Reshuffle
        </div>
      </div>
    </div>
  `;const g=(a=null)=>{if(a!==null){const n=Math.floor(Math.random()*r.length);r.splice(n,0,a)}const e=i();e===null?u():c(e)};document.getElementById("continueButton").addEventListener("click",()=>g()),document.getElementById("reshuffleButton").addEventListener("click",()=>g(t))},u=()=>{const t=document.getElementById("content");t.innerHTML=`
    <div class="center-col">
      <h2>Yippee you are done</h2>
      <div class="button" id="resetButton">
        Reset?
      </div>
    </div>
  `,o(r.length),document.getElementById("resetButton").addEventListener("click",()=>{r=[...m],c(i())})},m=["gartenvögel/zilpzalp.mp3","gartenvögel/haubenmeise.mp3","gartenvögel/mehlschwalbe.mp3","gartenvögel/heckenbraunelle.mp3","gartenvögel/bachstelze.mp3","gartenvögel/mauersegler.mp3","gartenvögel/nachtigall.mp3","gartenvögel/dohle.mp3","gartenvögel/kleiber.mp3","gartenvögel/sommergoldhähnchen.mp3","gartenvögel/wintergoldhähnchen.mp3","gartenvögel/türteltaube.mp3","gartenvögel/bluthänfling.mp3","gartenvögel/zaunkönig.mp3","gartenvögel/rabenkrähe.mp3","gartenvögel/grünspecht.mp3","gartenvögel/turmfalke.mp3","gartenvögel/girlitz.mp3","gartenvögel/buchfink.mp3","gartenvögel/erlenzeisig.mp3","gartenvögel/buntspecht.mp3","gartenvögel/stieglitz.mp3","gartenvögel/gartenrotschwanz.mp3","gartenvögel/elster.mp3","gartenvögel/gartengrasmücke.mp3","gartenvögel/amsel.mp3","gartenvögel/star2.mp3","gartenvögel/ringeltaube.mp3","gartenvögel/kernbeisser.mp3","gartenvögel/schwanzmeise.mp3","gartenvögel/gimpel.mp3","gartenvögel/hausrotschwanz.mp3","gartenvögel/gartenbaumläufer.mp3","gartenvögel/grünfink.mp3","gartenvögel/grauschnepper.mp3","gartenvögel/singdrossel.mp3","gartenvögel/kohlmeise.mp3","gartenvögel/star1.mp3","gartenvögel/klappergrasmücke.mp3","gartenvögel/sumpfmeise.mp3","gartenvögel/goldammer.mp3","gartenvögel/tannmeise.mp3","gartenvögel/rauchschwalbe.mp3","gartenvögel/blaumeise.mp3","gartenvögel/saatkrähe.mp3","gartenvögel/fitis.mp3","gartenvögel/haussperling.mp3","gartenvögel/eichelhäher.mp3","gartenvögel/mönchsgrasmücke.mp3","gartenvögel/feldsperling.mp3"];var r=[...m];c(i());o(r.length+1);
