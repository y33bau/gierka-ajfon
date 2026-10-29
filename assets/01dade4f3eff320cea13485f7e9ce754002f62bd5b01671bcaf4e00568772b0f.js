// FENIX boot: only required resources block startup; lazy media load on demand.
(async()=>{
 const panel=document.getElementById('fenix-load'),status=document.getElementById('fenix-status'),bar=document.getElementById('fenix-progress'),retry=document.getElementById('fenix-retry');
 let failed=false;const fail=e=>{failed=true;panel.hidden=false;status.textContent='Nie udało się wczytać gry. '+(e.message||e);retry.hidden=false};
 retry.onclick=()=>location.reload();window.NB_BOOT={fail,progress(v){if(!failed){bar.value=Math.max(bar.value,40+v*59);status.textContent='Wczytywanie gry: '+Math.round(bar.value)+'%'}},ready(){if(!failed){bar.value=100;panel.hidden=true;document.documentElement.classList.remove('fenix-loading')}}};window.NB_AUDIO_BYTES=new Map();
 try{
 if(location.protocol==='file:')throw Error('Uruchom grę przez plik Uruchom grę.bat.');
 const response=await fetch('assets/manifest.json',{cache:'no-cache'});if(!response.ok)throw Error('Brak listy plików.');const manifest=await response.json(),required=manifest.files.filter(f=>!f.lazy&&!f.sprite);let done=0,next=0;const total=required.reduce((n,f)=>n+f.bytes,0);
 await Promise.all(Array.from({length:6},async()=>{while(!failed&&next<required.length){const f=required[next++];const r=await fetch(f.url,{cache:'default'});if(!r.ok)throw Error('Plik: '+f.url);const bytes=await r.arrayBuffer();if(bytes.byteLength!==f.bytes)throw Error('Niepełny plik: '+f.url);if(crypto.subtle){const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),v=>v.toString(16).padStart(2,'0')).join('');if(hash!==f.sha256)throw Error('Uszkodzony plik: '+f.url)}if(f.audio)window.NB_AUDIO_BYTES.set(f.url,bytes);done+=f.bytes;if(failed)return;bar.value=Math.round(done/total*40);status.textContent='Wczytywanie gry: '+bar.value+'%'}}));
 for(const href of manifest.styles)await new Promise((resolve,reject)=>{const l=document.createElement('link');l.rel='stylesheet';l.href=href;l.onload=resolve;l.onerror=()=>reject(Error('Arkusz: '+href));document.head.append(l)});
 await document.fonts.ready;
 for(const src of manifest.scripts)await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>reject(Error('Skrypt: '+src));document.body.append(s)});
 if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').catch(e=>console.warn('Tryb offline niedostępny',e));
 }catch(e){fail(e)}
})();
