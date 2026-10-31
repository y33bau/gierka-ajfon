
// Shared atlas dependencies: CC0_FLOORS, buildDungeon/build* and buildAnims. Intro remains on demand.
const SPRITE_GROUPS={
  "skill_fx": [
    "core"
  ],
  "combat_fx": [
    "core"
  ],
  "whirl_fx": [
    "core"
  ],
  "cc0_dirt2": [
    "core"
  ],
  "cc0_dirt3": [
    "r4"
  ],
  "cc0_ground1": [
    "core",
    "r2",
    "r5"
  ],
  "cc0_ground2": [
    "core",
    "r5"
  ],
  "cc0_zl_place": [
    "r3"
  ],
  "cc0_zl_street": [
    "r3"
  ],
  "cc0_cracks": [
    "core"
  ],
  "cc0_charcoal": [
    "core",
    "r2"
  ],
  "cc0_blackrock": [
    "r2",
    "r5"
  ],
  "cc0_mud": [
    "r4"
  ],
  "cc0_leaves": [
    "r4"
  ],
  "cc0_darkrock": [
    "r4"
  ],
  "protagonist_a": [
    "core"
  ],
  "protagonist_b": [
    "core"
  ],
  "village_undead": [
    "core"
  ],
  "order_deep_dead": [
    "core"
  ],
  "boss_zrost": [
    "core"
  ],
  "ally_npcs": [
    "core"
  ],
  "effects_pickups": [
    "core"
  ],
  "jerzak": [
    "core"
  ],
  "collector": [
    "core"
  ],
  "npc_new": [
    "core"
  ],
  "dm_floor": [
    "core",
    "r2"
  ],
  "dm_walls": [
    "core",
    "r2"
  ],
  "dm_props": [
    "core",
    "r2"
  ],
  "decals": [
    "core"
  ],
  "trans": [
    "core"
  ],
  "br_ground": [
    "core"
  ],
  "br_walls": [
    "core"
  ],
  "br_props": [
    "core"
  ],
  "zl_ground": [
    "r3"
  ],
  "zl_walls": [
    "r3"
  ],
  "zl_props": [
    "r3"
  ],
  "zl_en_a": [
    "r3"
  ],
  "zl_en_b": [
    "r3"
  ],
  "morhad": [
    "r3"
  ],
  "morhad_b": [
    "r3"
  ],
  "cy_ground": [
    "r5"
  ],
  "cy_big": [
    "r5"
  ],
  "cy_props": [
    "r5"
  ],
  "cy_walls": [
    "r5"
  ],
  "cy_en_a": [
    "r5"
  ],
  "cy_en_b": [
    "r5"
  ],
  "cy_en_c": [
    "r5"
  ],
  "cy_npc": [
    "r5"
  ],
  "rachm": [
    "r5"
  ],
  "wierz1": [
    "r5"
  ],
  "wierz2": [
    "r5"
  ],
  "cz_ground": [
    "r4"
  ],
  "cz_walls": [
    "r4"
  ],
  "cz_trees": [
    "core",
    "r4"
  ],
  "cz_props": [
    "r4"
  ],
  "cz_en_a": [
    "r4"
  ],
  "cz_en_b": [
    "r4"
  ],
  "cz_en_c": [
    "r4"
  ],
  "cz_npc": [
    "r4"
  ],
  "leszy": [
    "r4"
  ],
  "strzyga": [
    "r4"
  ],
  "strzyga_b": [
    "r4"
  ],
  "hero_d": [
    "core"
  ],
  "hero_db": [
    "core"
  ],
  "hero_dc": [
    "core"
  ],
  "hero_dd": [
    "core"
  ],
  "hero_def": [
    "core"
  ],
  "intro1": [
    "core"
  ],
  "intro1_fallback": [
    "core"
  ],
  "intro2": [
    "r2"
  ],
  "intro2_fallback": [
    "r2"
  ],
  "intro3": [
    "r3"
  ],
  "intro3_fallback": [
    "r3"
  ],
  "intro4": [
    "r4"
  ],
  "intro4_fallback": [
    "r4"
  ],
  "intro5": [
    "r5"
  ],
  "intro5_fallback": [
    "r5"
  ]
};
(()=>{
const $=id=>document.getElementById(id);
// ---- język: EN/PL (pn_lang); bez zapisu domyślnie według przeglądarki. Zmiana języka przeładowuje grę ----
const LANG=(()=>{let v=null;try{v=localStorage.getItem('pn_lang')}catch(e){}return v==='en'||v==='pl'?v:(/^pl\b/i.test(navigator.language||'')?'pl':'en')})(),EN=LANG==='en';
document.documentElement.lang=LANG;
const I18N_DOM=EN?{"Aktywne umiejętności":"Active skills","Ekran gry Nightbrand w trójwymiarze":"Nightbrand 3D game screen","Poziom 1":"Level 1","Stamina uników":"Dodge stamina","Do otwarcia wrót 3:00":"Until the gates open 3:00","Zabici: 0":"Kills: 0","Minimapa":"Minimap","Zrost":"The Outgrowth","E · Rozmawiaj":"E · Talk","Wydarzenie":"Event","Dalej · Enter / Spacja":"Continue · Enter / Space","E / Spacja · dalej":"E / Space · continue","Pozostaw w dybach":"Leave him in the stocks","Dobij więźnia":"Finish the prisoner off","Północ · przerwa":"Midnight · break","Kram Margi":"Marga's Stall","Zwiń kram · E":"Close the stall · E","Nowy poziom":"New level","Poziom 2":"Level 2","Aktywne 1 z 4 · Pasywne 0 z 2":"Active 1 of 4 · Passive 0 of 2","Twój rozwój · style i zdobyte umiejętności":"Your progress · styles and learned skills","R · przerzut · 1–4 · wybór":"R · reroll · 1–4 · choose","Poziom postaci":"Character level","Przebieg gry":"Game mode","Fabularny: rozdziały po kolei. Arcade: wszystkie rozdziały.":"Story: acts in order. Arcade: all acts.","Fabularny":"Story","Wczytywanie…":"Loading…","Instrukcja Gry":"Instructions","Opcje":"Options","Sterowanie dotykowe":"Touch controls","Samouczek":"Tutorial","Wróć":"Back","Sterowanie":"Controls","Ustawienia":"Settings","Dane zapisu":"Save data","Klawiatura i mysz":"Keyboard and mouse","Mysz":"Mouse","Kontroler Xbox":"Xbox controller","Ekran dotykowy":"Touch screen","Interfejs":"Interface","Pauza":"Pause","Wybór karty":"Card choice","Skille ·":"Skills ·","Rozmowa ·":"Talk ·","Przerzut":"Reroll","Ruch":"Move","Spacja · Shift":"Space · Shift","Unik":"Dodge","Cios":"Attack","Blok":"Block","Strzałki":"Arrow keys","Cios: przytrzymaj, a będzie ciężki · Parowanie: blok tuż przed trafieniem · Czerwony błysk wroga: unik (nie da się sparować)":"Attack: hold for a heavy attack · Parry: block just before a hit · Enemy red flash: dodge (cannot be parried)","Cios (przytrzymaj: ciężki)":"Attack (hold: heavy)","Lewy przycisk myszy":"Left mouse button","Prawy przycisk myszy":"Right mouse button","Parowanie":"Parry","Blok tuż przed trafieniem":"Block just before a hit","Unik (stamina)":"Dodge (stamina)","Spacja":"Space","Czerwony błysk wroga":"Enemy red flash","Unik (nie do sparowania)":"Dodge (unparryable)","Umiejętności aktywne: sloty 1 / 2 / 3 / 4":"Active skills: slots 1 / 2 / 3 / 4","Rozmowa i handel":"Talk and trade","Wybór karty · przerzut":"Card choice · reroll","Przeciągnij lewą stroną ekranu":"Drag on the left side of the screen","Unik, ataki, blok":"Dodge, attacks, block","Przyciski po prawej":"Buttons on the right","Dotknij postaci":"Tap a character","Wielkość napisów":"Text size","Liczby obrażeń nad wrogami":"Damage numbers above enemies","Lewy przycisk":"Left button","Prawy przycisk":"Right button","Blok i parowanie":"Block and parry","Cios: przytrzymaj, a będzie ciężki · Parowanie: blok tuż przed trafieniem":"Attack: hold for a heavy attack · Parry: block just before a hit","Umiejętności + X / Y / B":"Skills + X / Y / B","Lewa gałka":"Left stick","Krzyżak":"D-pad","Ruch, menu":"Move, menu","Szybki atak":"Quick attack","Ciężki cios":"Heavy attack","Rozmowa, handel":"Talk, trade","Silny atak":"Strong attack","Prawa gałka":"Right stick","Celowanie":"Aim","RT: przytrzymaj, aby wyprowadzić silny atak · LT + X / Y / B / A: umiejętności · Start: pauza · w menu: A wybierz, B wróć":"RT: hold for a strong attack · LT + X / Y / B / A: skills · Start: pause · in menus: A select, B back","Silny atak (RT: przytrzymaj)":"Strong attack (RT: hold)","Umiejętności: sloty 1 / 2 / 3 / 4":"Skills: slots 1 / 2 / 3 / 4","Menu: wybór · powrót · przerzut":"Menu: select · back · reroll","Muzyka":"Music","Głośność muzyki":"Music volume","Efekty":"Effects","Głośność efektów":"Effects volume","Jasność obrazu":"Image brightness","Jasność":"Brightness","Jeśli gra jest dla Ciebie zbyt ciemna, zwiększ jasność. Domyślnie 100%.":"If the game is too dark for you, increase the brightness. Default 100%.","Wygoda i płynność":"Comfort and performance","Tryb wydajności (telefon)":"Performance mode (phone)","Wyższa ostrość obrazu (wolniej)":"Sharper image (slower)","Wstrząsy kamery":"Camera shake","Intensywne błyski":"Intense flashes","Kontrastowe ostrzeżenia (żółty / biały)":"High-contrast warnings (yellow / white)","Jedna ręka: automatyczne lekkie ciosy":"One hand: automatic light attacks","Opcja jednej ręki atakuje pobliskich wrogów. Nadal możesz używać bloku, uniku i ciężkiego ciosu.":"The one-hand option attacks nearby enemies. You can still block, dodge and use heavy attacks.","Przyciski dotykowe po lewej":"Touch buttons on the left","Przyciski dotykowe":"Touch buttons","Wielkość przycisków dotykowych":"Touch button size","Powtórz samouczek tego trybu":"Replay this mode's tutorial","Kopiuj raport błędów":"Copy error report","Zapisz postęp do pliku":"Save progress to a file","Wczytaj postęp z pliku":"Load progress from a file","Postęp jest zapamiętany w przeglądarce. Zapisz go do pliku, żeby nie przepadł po wyczyszczeniu danych przeglądarki albo przy zmianie urządzenia.":"Your progress is stored in the browser. Save it to a file so it is not lost when browser data is cleared or when you switch devices.","Wyczyść zapis postępu":"Clear progress save","Uwaga":"Warning","Na pewno":"Are you sure","Wyczyszczenie zapisu usunie rekordy rozdziałów, poziomy postaci i odblokowane perki, w obu trybach. Tego nie da się cofnąć.":"Clearing the save will delete act records, character levels and unlocked perks, in both modes. This cannot be undone.","Anuluj":"Cancel","Tak, wyczyść":"Yes, clear it","Wróć do gry":"Back to the game","Wybór rozdziału":"Act selection","Przygotowanie":"Preparation","Nim zapadnie noc":"Before Nightfall","Poziom trudności":"Difficulty","Łatwy":"Easy","Normalny":"Normal","Trudny":"Hard","Wyrusz":"Set out","Gotowy":"Ready","Perki":"Perks","Wyzwanie nocy":"Night challenge","Koniec":"The End","Poległeś":"You Have Fallen","Rozdział II":"Act II","Zejdź do Dolnego Miasta":"Descend into the Lower City","Jeszcze raz":"Try again","Silny":"Strong","Atak":"Attack","Szybki":"Quick","Język":"Language"}:{};
function trDom(root){if(!EN||!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),fix=[];let n;while((n=w.nextNode())){const p=n.parentNode;if(p&&(p.nodeName==='SCRIPT'||p.nodeName==='STYLE'))continue;const k=n.nodeValue.replace(/\s+/g,' ').trim();if(k&&I18N_DOM[k])fix.push([n,k])}
  for(const [n,k] of fix){const m=n.nodeValue.match(/^(\s*)[\s\S]*?(\s*)$/);n.nodeValue=m[1]+I18N_DOM[k]+m[2]}
  for(const el of root.querySelectorAll('[aria-label],[title],[placeholder]'))for(const at of ['aria-label','title','placeholder']){const v=el.getAttribute(at);if(v&&I18N_DOM[v.trim()])el.setAttribute(at,I18N_DOM[v.trim()])}
  for(const el of root.querySelectorAll('h1.opth,h1.pauseh,h1.manh'))if(!el.textContent.trim())el.textContent=el.getAttribute('aria-label')||''}
trDom(document.body);
// ekran wyboru języka: tylko gdy język nie jest jeszcze zapisany; ten sam wybór jest w Opcjach → Ustawienia
(()=>{const box=$('lang');let saved=null;try{saved=localStorage.getItem('pn_lang')}catch(e){}
  const pick=l=>{try{localStorage.setItem('pn_lang',l)}catch(e){}if(l!==LANG){location.reload();return}if(box&&!box.hidden){box.hidden=true;const t=document.querySelector('#title button:not([disabled])');t&&t.focus()}};
  for(const b of document.querySelectorAll('[data-lang],[data-setlang]')){const l=b.dataset.lang||b.dataset.setlang;b.classList.toggle('on',l===LANG);b.setAttribute('aria-pressed',String(l===LANG));b.addEventListener('click',()=>pick(l))}
  if(!box)return;box.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){const bs=[...box.querySelectorAll('button')],i=bs.indexOf(document.activeElement);bs[(i+1+bs.length)%bs.length].focus();e.preventDefault()}});
  if(!saved){box.hidden=false;const fo=()=>{if(box.hidden)return;const f=box.querySelector('button.on');if(f&&!box.contains(document.activeElement))f.focus()};for(const t of [60,400,1500])setTimeout(fo,t)}})();
if(!window.THREE){$('screen').insertAdjacentHTML('beforeend',(EN?'<div id="err">Failed to load the 3D library. Please refresh the page.</div>':'<div id="err">Nie udało się wczytać biblioteki 3D. Odśwież stronę.</div>'));return}
const TS=16,MW=104,MH=91,WW=MW*TS,WH=MH*TS,NIGHT=720,BREAK_AT=360,PITCH=55*Math.PI/180,DIST=30,
  // the 3D scene is drawn at this height and scaled up: higher = sharper sprites; phones get a lighter setting
  RT_H=(typeof matchMedia==='function'&&matchMedia('(pointer:coarse)').matches)?540:720;
const P={ink:'#08070a',bone:'#d8cfb8',bone2:'#9d9584',blood:'#951518',blood2:'#560a0d',ember:'#ff6a1a',ember2:'#ffb347',st0:'#0d0c10',st1:'#1b1a1f',st2:'#24232a',st3:'#34323b',st4:'#46434e',inlay:'#5a4a22',
  pale:'#7f8a76',pale2:'#56604f',flesh1:'#4a1f1c',flesh2:'#6b2c26',bat:'#1d161b',rag1:'#3d3127'};
const rnd=(a,b)=>a+Math.random()*(b-a);
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}

/* ============ WORLDS ============ */
// Each chapter has its own tile map, props, NPCs, lights and meshes. useWorld(ch) swaps the active one.
const SOLID=new Set([21,22,23,24,27,31,45,48,58,59,68,69,78,80]),WALLC=new Set([21,48,58,59,78,80]),VOID=new Set([23,24,25]);
let CH=2,W=null,map,PROPS,START,SHRINES,region,walls,cliffs,pillars,lavas,braziers,waters,LSRC,propObjs;
const WORLDS={},WORLD_SEEDS={};
const tileAt=(x,y)=>(x<0||y<0||x>=MW||y>=MH)?21:map[y*MW+x];
const solidAt=(px,py)=>SOLID.has(tileAt(Math.floor(px/TS),Math.floor(py/TS)));
// nearest spot whose 3x3 surroundings are walkable (codes in ok) and free of props; used to place NPCs
function freeNear(map,PROPS,ok,x,y){for(let r=0;r<12;r++)for(let dy=-r;dy<=r;dy++)for(let dx=-r;dx<=r;dx++){if(Math.max(Math.abs(dx),Math.abs(dy))!==r)continue;const X=x+dx,Y=y+dy;let good=X>2&&Y>2&&X<GW-3&&Y<GH-3;
  for(let j=-1;j<=1&&good;j++)for(let i=-1;i<=1;i++)if(!ok.includes(map[(Y+j)*GW+X+i])){good=false;break}
  if(good&&!PROPS.some(p=>Math.abs(p.x-X-.5)<1.8&&Math.abs(p.y-Y-.5)<1.8))return[X,Y]}return[x,y]}
const GONE_PROPS=new Set(['impaled_head','crow_post','cz_skullpole']); // chapters I, III and IV: small stake/post props removed (cache 200); gibbets stay
function mapKit(fillWith,skip){const map=new Uint8Array(GW*GH).fill(fillWith),under=new Uint8Array(GW*GH),PROPS=[],clearways=new Set();
  const reserve=(x0,y0,w,h)=>{for(let y=y0;y<y0+h;y++)for(let x=x0;x<x0+w;x++)if(x>0&&y>0&&x<GW-1&&y<GH-1)clearways.add(y*GW+x)};
  const set=(x,y,v)=>{if(x>0&&y>0&&x<GW-1&&y<GH-1)map[y*GW+x]=v};const fill=(x0,y0,w,h,v)=>{for(let y=y0;y<y0+h;y++)for(let x=x0;x<x0+w;x++)set(x,y,v)};
  const prop=(k,x,y,solid,extra)=>{if(skip&&skip.has(k))return false;if(solid.some(([sx,sy])=>clearways.has(sy*GW+sx)))return false;PROPS.push(Object.assign({k,x,y},extra||{}));for(const [sx,sy] of solid){if(sx>0&&sy>0&&sx<GW-1&&sy<GH-1){under[sy*GW+sx]=map[sy*GW+sx];set(sx,sy,31)}}return true};
  return{map,under,PROPS,set,fill,prop,reserve,clearways}}

// Map scale: every chapter is generated on its own grid (GW x GH) and then stretched by MK to the shared big map (MW x MH = 104 x 91).
// Chapters I-III keep their hand-made 64x56 layouts (MK 1.625); chapter IV is generated directly on 80x70 (MK 1.3).
// FT(i) is the first big-map tile of source tile i, MP(u) maps a continuous source coordinate, GTX/GTY give the source tile of a big-map tile.
let MK=1.625,GW=64,GH=56,GTX=[],GTY=[];
const FT=i=>Math.ceil(i*MK-1e-9),MP=u=>{const i=Math.floor(u);return FT(i)+(u-i)*(FT(i+1)-FT(i))};
const GRID={1:[64,56],2:[64,56],3:[64,56],4:[80,70],5:[80,70],9:[64,56]};
function setGrid(ch){[GW,GH]=GRID[ch];MK=MW/GW;GTX=[];GTY=[];for(let X=0;X<MW;X++){let i=0;while(FT(i+1)<=X)i++;GTX[X]=i}for(let Y=0;Y<MH;Y++){let i=0;while(FT(i+1)<=Y)i++;GTY[Y]=i}}
const SR=B=>({x:FT(B.x),y:FT(B.y),w:FT(B.x+B.w)-FT(B.x),h:FT(B.y+B.h)-FT(B.y)});
// pillars and braziers stay single tiles; inlaid gold lines stay one tile thick; everything else is stretched block by block
const POINT_T=new Set([22,27]),LINE_T={29:20,51:50};
function upscaleWorld(w){const sm=w.map,su=w.under,map=new Uint8Array(MW*MH),under=new Uint8Array(MW*MH);
  const sat=(x,y)=>(x<0||y<0||x>=GW||y>=GH)?21:sm[y*GW+x];
  const floorNear=(x,y)=>{const c={};for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const t=sat(x+dx,y+dy);if(t===21||POINT_T.has(t)||t===31||LINE_T[t])continue;c[t]=(c[t]||0)+1}let b=20,bn=-1;for(const k in c)if(c[k]>bn){bn=c[k];b=+k}return b};
  for(let Y=0;Y<MH;Y++)for(let X=0;X<MW;X++){const sx=GTX[X],sy=GTY[Y],t=sat(sx,sy),i=Y*MW+X;let v=t;
    if(POINT_T.has(t)){if(X!==FT(sx)||Y!==FT(sy))v=floorNear(sx,sy)}
    else if(LINE_T[t]){const hz=LINE_T[t]&&(sat(sx-1,sy)===t||sat(sx+1,sy)===t),vt=sat(sx,sy-1)===t||sat(sx,sy+1)===t;
      if(!((X===FT(sx)||hz)&&(Y===FT(sy)||vt)))v=LINE_T[t]}
    else if(t===31)under[i]=su[sy*GW+sx];
    map[i]=v}
  for(const p of w.PROPS){p.x=MP(p.x);p.y=MP(p.y)}
  const px=v=>MP(v/TS)*TS;
  w.start={x:px(w.start.x),y:px(w.start.y)};w.shrines=w.shrines.map(s=>({x:px(s.x),y:px(s.y)}));
  for(const n of w.npcs){n.x=px(n.x);n.y=px(n.y);if(n.solid)n.solid=[FT(n.solid[0]),FT(n.solid[1])]}
  const reg=w.region,gx=GTX,gy=GTY,mk=MK;w.region=(x,y)=>reg(gx[x]??Math.floor(x/mk),gy[y]??Math.floor(y/mk));
  if(w.clearways){const keep=w.clearways;w.clearways=new Set();for(let Y=0;Y<MH;Y++)for(let X=0;X<MW;X++)if(keep.has(GTY[Y]*GW+GTX[X]))w.clearways.add(Y*MW+X)}
  w.idle=[MP(w.idle[0]),MP(w.idle[1]),w.idle[2]*MK,w.idle[3]*MK];w.map=map;w.under=under;return w}
setGrid(1);

// Chapter II: the Lower City (layout from the M9 concept)
function genDolne(){
  const {map,under,PROPS,set,fill,prop,reserve,clearways}=mapKit(21);
  reserve(32,22,12,4);reserve(48,10,5,28);reserve(16,8,5,32);
  fill(3,8,32,32,20);fill(1,23,2,2,20);
  fill(6,3,26,4,20);fill(10,7,5,1,20);fill(23,7,5,1,20);
  fill(6,41,26,7,20);fill(10,40,5,1,20);fill(23,40,5,1,20);
  for(const x of [9,15,21,27]){set(x,2,20);prop('king_statue',x+.5,2.92,[[x,2]]);set(x,48,20);prop('king_statue',x+.5,48.92,[[x,48]])}
  for(const y of [11,15,19,28,32,36])for(const x of [10,26])set(x,y,22);
  for(let x=3;x<35;x++){set(x,23,29);set(x,24,29)}
  fill(35,1,5,GH-2,23);fill(35,22,5,4,25);
  fill(40,6,22,36,20);fill(41,13,20,2,24);fill(41,33,20,2,24);fill(48,13,5,2,20);fill(48,33,5,2,20);
  fill(53,42,6,3,32);fill(42,45,19,7,32);
  [[7,21],[7,26],[14,21],[14,26],[22,21],[22,26],[30,21],[30,26],[8,5],[29,5],[8,43],[29,43],[16,46],[21,46],[46,50],[58,46],[42,21],[42,26],[60,21],[60,26],[44,9],[58,9],[44,38],[58,38]].forEach(([x,y])=>set(x,y,27));
  prop('chapel_stairs',2.6,24.92,[[1,24],[2,24],[3,24]],{sheet:'trans'});
  prop('healing_shrine',4.5,38.92,[[4,38]],{shrine:0});prop('healing_shrine',60.5,40.92,[[60,40]],{shrine:1});
  for(const x of [12,18,24]){prop('sarcophagus',x+.5,4.92,[[x,4]]);prop('sarcophagus',x+.5,45.92,[[x,45]])}
  for(const x of [5,16,21,32])prop('clan_banner',x+.5,8.92,[[x,8]]);
  prop('chains',3.5,12.92,[[3,12]]);prop('chains',33.5,34.92,[[33,34]]);
  prop('fallen_pillar',14,30.92,[[13,30],[14,30]]);prop('fallen_pillar',30,12.92,[[29,12],[30,12]]);
  prop('rune_lantern',34.5,21.92,[[34,21]]);prop('rune_lantern',34.5,26.92,[[34,26]]);prop('rune_lantern',40.5,21.92,[[40,21]]);prop('rune_lantern',40.5,26.92,[[40,26]]);
  prop('furnace',45,6.92,[[44,6],[45,6]],{anim:'furnace'});prop('bellows',46.5,6.92,[[46,6]]);
  prop('gate',51,6.92,[[49,6],[50,6],[51,6],[52,6]],{sheet:'trans',gate:true});
  prop('furnace',57,6.92,[[56,6],[57,6]],{anim:'furnace'});prop('bellows',55.5,6.92,[[55,6]]);
  prop('anvil',47.5,18.92,[[47,18]]);prop('anvil',56.5,29.92,[[56,29]]);
  prop('mine_cart',58.5,17.92,[[58,17]]);prop('mine_cart',50.5,48.92,[[50,48]]);prop('mine_cart',44.5,48.92,[[44,48]]);
  prop('pickaxe_rack',60.5,11.92,[[60,11]]);prop('pickaxe_rack',43.5,45.92,[[43,45]]);prop('chains',60.5,49.92,[[60,49]]);prop('fallen_pillar',53,51.92,[[52,51],[53,51]]);
  prop('chains',41.5,10.92,[[41,10]]);prop('chains',41.5,38.92,[[41,38]]);
  prop('black_powder',59.5,30.92,[[59,30]]);prop('black_powder',57.5,50.92,[[57,50]]);prop('black_powder',59.5,46.92,[[59,46]]);prop('clan_banner',61.5,7.92,[[61,7]]);
  const r=rng(31);
  for(let i=0,n=0;i<500&&n<14;i++){const x=3+((r()*58)|0),y=3+((r()*(GH-6))|0);if(map[y*GW+x]!==20||clearways.has(y*GW+x))continue;prop('dwarf_bones',x+.5,y+.92,[]);n++}
  for(let y=1;y<GH-1;y++)for(let x=1;x<GW-1;x++){if(map[y*GW+x]!==20)continue;const q=r();if(q<.03)set(x,y,30);else if(q<.12)set(x,y,26)}
  return{map,under,PROPS,clearways,start:{x:6*TS+8,y:23*TS+14},shrines:[{x:4*TS+8,y:38*TS+12},{x:60*TS+8,y:40*TS+12}],
    region:(x,y)=>x>=40&&y>=42?'mine':x>=40?'forge':'hall',
    npcs:[{id:'tharm',art:'tharm',name:(EN?'Tharm\'s Ghost':'Duch kowala Tharma'),x:52*TS+8,y:24*TS+12,lines:THARM_LINES},
          (()=>{const [x,y]=freeNear(map,PROPS,[20,26,30],22,34);return{id:'mila',art:'mila',name:(EN?'Mila, The Amazon':'Mila, amazonka'),x:(x+.5)*TS,y:(y+.4)*TS,lines:MILA_LINES}})()],idle:[18,23,12,8]};
}

// Chapter I: the burned village of Brzeźnica
// codes: 40 road, 41 ash, 42 dead grass, 43 charred planks, 44 rubble, 45 water, 46 graveyard, 47 blood mud, 48 house wall, 21 palisade/outside
function genBrzeznica(){
  const {map,under,PROPS,set,fill,prop,reserve,clearways}=mapKit(21,GONE_PROPS);const r=rng(1349);
  reserve(30,2,3,GH-4);reserve(2,27,GW-4,3);reserve(49,16,6,5);
  const at=(x,y)=>map[y*GW+x];
  fill(2,2,GW-4,GH-4,42);
  for(let y=2;y<GH-2;y++)for(let x=2;x<GW-2;x++){const v=Math.sin(x*.31)+Math.cos(y*.27)+Math.sin((x+y)*.17)+(r()-.5)*.8;if(v>1.35)set(x,y,41)}
  // the two roads and the village square
  fill(2,27,GW-4,3,40);fill(30,2,3,GH-4,40);
  for(let y=21;y<36;y++)for(let x=23;x<40;x++)if(Math.hypot((x-31)/7.8,(y-28)/6.6)<1)set(x,y,40);
  // graveyard to the north-east and a stagnant pond to the south-east
  fill(43,15,17,9,46);
  for(let y=29;y<38;y++)for(let x=44;x<61;x++)if(Math.hypot((x-52.5)/6.6,(y-33.2)/2.9)<1)set(x,y,45);
  // burned houses [x, y, w, h, door side]; the big one in the west is the barn where the order burned the villagers
  const H=[[6,5,9,7,'s'],[18,5,8,6,'s'],[38,5,8,7,'s'],[50,5,9,7,'s'],[6,37,8,7,'n'],[18,40,7,6,'n'],[38,40,9,7,'n'],[50,42,9,7,'n'],[4,15,13,10,'e']];
  for(const [hx,hy,w,h,door] of H){
    for(let y=hy;y<hy+h;y++)for(let x=hx;x<hx+w;x++){const edge=x===hx||y===hy||x===hx+w-1||y===hy+h-1;set(x,y,edge?(r()<.17?44:48):43)}
    const mx=hx+(w>>1),my=hy+(h>>1);
    if(door==='s'){fill(mx-1,hy+h-1,3,1,43);reserve(mx-1,hy+h-3,3,5)}
    if(door==='n'){fill(mx-1,hy,3,1,43);reserve(mx-1,hy-2,3,5)}
    if(door==='e'){fill(hx+w-1,my-1,1,3,43);reserve(hx+w-3,my-1,5,3)}
  }
  // blood-soaked mud around the gallows, the stakes and the barn
  for(let i=0;i<90;i++){const c=[[35,32],[31,44],[17,20],[12,48],[28,25]][i%5],x=c[0]+((r()-.5)*7)|0,y=c[1]+((r()-.5)*5)|0;if(at(x,y)===40||at(x,y)===41||at(x,y)===42)set(x,y,47)}
  // square: well, gallows, Marga's cart
  // The well is already part of the elder illustration; omit the separate small prop.
  prop('gallows',35,32.92,[[34,32],[35,32]]);
  prop('marga_cart',52,25.92,[[51,25],[52,25]]);
  prop('crow_post',33.5,20.92,[[33,20]]);prop('covered_corpses',25.5,33.92,[]);
  // fires still burning in the ruins
  for(const [x,y,big] of [[9,8],[42,8],[21,42],[8,19,1],[12,22,1],[54,45],[25,30],[46,24]])prop('debris_fire',x+.5,y+.92,[[x,y]],{fire:true,big:!!big,anim:'fire'});
  prop('covered_corpses',18.5,23.92,[]);prop('burnt_hay',6.5,23.92,[]);
  // the order's camp to the south-west: bonfire with a burnt stake and torn banners
  prop('order_bonfire',12.5,49.92,[[12,49]],{fire:true,big:true});prop('order_banner',9.5,47.92,[[9,47]]);prop('order_banner',15.5,47.92,[[15,47]]);
  // heads on stakes along the south road
  for(const y of [38,46])for(const x of [28,34])prop('impaled_head',x+.5,y+.92,[[x,y]]);
  // graveyard
  prop('crypt_stairs',51.6,15.92,[[50,15],[51,15],[52,15]]);
  for(const y of [17,21])for(const x of [45,48,56])prop(r()<.5?'grave_cross':'tombstone',x+.5,y+.92,[[x,y]]);
  prop('dead_tree',58.5,17.92,[[58,17]]);prop('crow_post',43.5,23.92,[[43,23]]);
  // wayside shrines heal the wounded
  prop('shrine',24.5,13.92,[[24,13]],{shrine:0});prop('shrine',47.5,47.92,[[47,47]],{shrine:1});
  // clutter along the roads and yards
  for(const [k,x,y] of [['dead_horse',22,31],['wheel',36,26],['barrel',27,22],['barrel',17,12],['wheel',44,12],['burnt_hay',57,25],['barrel',21,37],['dead_horse',40,48],['burnt_hay',27,8],['wheel',13,33]].filter((_,i)=>i%3!==1))prop(k,x+.5,y+.92,['barrel','dead_horse'].includes(k)?[[x,y]]:[]);
  // dead trees along the palisade and in the corners
  for(let i=0;i<500;i++){const side=i%4,t=r();let x,y;if(side===0){x=3+((t*(GW-6))|0);y=3+((r()*2)|0)}else if(side===1){x=3+((t*(GW-6))|0);y=GH-4-((r()*2)|0)}else if(side===2){x=3+((r()*2)|0);y=3+((t*(GH-6))|0)}else{x=GW-4-((r()*2)|0);y=3+((t*(GH-6))|0)}
    if(r()>.22)continue;const c=at(x,y);if(c!==42&&c!==41)continue;if(PROPS.some(p=>p.k==='dead_tree'&&Math.abs(p.x-x)<3.5&&Math.abs(p.y-y)<3.5))continue;prop('dead_tree',x+.5,y+.92,[[x,y]])}
  return{map,under,PROPS,clearways,start:{x:31*TS+8,y:51*TS+8},shrines:[{x:24*TS+8,y:14*TS+8},{x:47*TS+8,y:48*TS+8}],region:()=>'village',
    npcs:[{id:'elder',art:'elder',name:(EN?'Dying Old Man':'Umierający przy studni'),x:29.6*TS,y:26.4*TS,lines:ELDER_LINES},
          {id:'marga',art:'marga',name:(EN?'Marga, The Bone Trader':'Marga, handlarka kości'),x:54.4*TS,y:26.8*TS,lines:MARGA_LINES},
          {id:'wit',art:'wit',name:(EN?'Brother Wit, Prisoner in the Stocks':'Brat Wit, więzień w dybach'),x:14.5*TS,y:30.92*TS,lines:WIT_LINES,solid:[14,30]},
          (()=>{const [x,y]=freeNear(map,PROPS,[40,41,42,47],27,15);return{id:'chojrak',art:'chojrak',name:(EN?'Chojrak, Noble Paladin':'Chojrak, szlachetny paladyn'),x:(x+.5)*TS,y:(y+.4)*TS,lines:CHOJRAK_LINES}})()],idle:[31,28,13,9]};
}

// Chapter III: Złotogród, the golden capital rotting under its domes
// codes: 50 street flagstones, 51 gold inlay, 52 cracked flagstones, 53 slum mud, 54 rot pool (slows), 55 blood mud, 56 monastery floor, 57 dead garden, 58 noble stone (houses, cathedral, palace), 59 slum shack
const CATH={x:24,y:14,w:16,h:10},PALACE={x:18,y:2,w:28,h:4},CHAPEL={x:8,y:41,w:5,h:4};
const SHACKS=[[3,37,4,3],[15,37,3,3],[20,39,4,2],[24,36,3,3],[3,46,3,3],[15,44,3,3],[20,47,3,3],[24,42,3,2],[37,38,4,3],[44,37,3,3],[50,38,4,2],[56,37,4,3],[38,45,3,3],[45,44,4,3],[52,46,3,3],[57,43,3,3],[8,50,4,2],[47,50,4,2],[24,50,3,2],[54,51,4,2]];
const HOUSES=[[3,3,7,6],[11,3,6,6],[3,12,7,6],[12,12,8,6],[3,22,7,6],[13,22,7,5],[47,3,6,6],[55,3,6,7]];
const DOMES=[[32,19,3.6,'c'],[26.5,15.6,1.4,'c'],[37.5,15.6,1.4,'c'],[14,6,1.7,'h'],[16,15,1.8,'h'],[6.5,25,1.7,'h'],[50,6,1.7,'h'],[10.5,43,1.6,'s'],[32,3.9,1.6,'p']];
function genStolica(){
  const {map,under,PROPS,set,fill,prop,reserve,clearways}=mapKit(21,GONE_PROPS);const r=rng(4242);const at=(x,y)=>map[y*GW+x];
  reserve(30,24,4,30);reserve(30,6,4,8);reserve(10,9,3,24);reserve(20,8,3,28);reserve(40,7,3,19);reserve(40,30,3,6);
  reserve(41,20,6,5);reserve(49,29,6,7);reserve(3,40,26,2);reserve(35,41,26,3);reserve(3,49,26,2);
  const free=(x,y)=>[50,52,53,55,56,57].includes(at(x,y));
  const place=(k,x,y,extra,solid=true)=>{if(!free(x,y)||clearways.has(y*GW+x))return;prop(k,x+.5,y+.92,solid&&!['beggar_bodies','doorway_bones','wheel','burnt_hay'].includes(k)?[[x,y]]:[],extra)};
  fill(2,2,GW-4,GH-4,50);
  for(const B of [CATH,PALACE,CHAPEL])fill(B.x,B.y,B.w,B.h,58);
  for(const [x,y,w,h] of HOUSES)fill(x,y,w,h,58);
  // the fire monastery: a walled cloister with a pyre in the middle
  for(let x=43;x<=60;x++){set(x,14,58);set(x,32,58)}for(let y=14;y<=32;y++){set(43,y,58);set(60,y,58)}
  fill(44,15,16,17,56);fill(43,20,1,5,56);fill(49,32,6,1,56);
  for(const y of [17,20,26,29])for(const x of [47,56])set(x,y,22);
  for(const [x,y] of [[46,16],[57,16],[46,30],[57,30]])set(x,y,27);
  // slums in the south: mud, shacks and pools of rot around a gilded chapel of the poor
  for(let y=35;y<54;y++)for(let x=3;x<61;x++){if(x>=29&&x<=34||at(x,y)!==50)continue;const v=Math.sin(x*.4)+Math.cos(y*.5)+r()*.9;if(y>37||v>.8)set(x,y,53)}
  for(const [x,y,w,h] of SHACKS)fill(x,y,w,h,59);
  // dead gardens of the nobles
  for(const [x,y,w,h] of [[3,19,7,2],[10,18,2,3],[12,28,7,3],[3,29,6,3],[17,9,2,3]])for(let yy=y;yy<y+h;yy++)for(let xx=x;xx<x+w;xx++)if(at(xx,yy)===50&&r()<.85)set(xx,yy,57);
  // golden processional way: city gate -> plaza -> cathedral, and on to the palace behind it
  for(let y=24;y<54;y++){set(31,y,51);set(32,y,51)}for(let y=6;y<14;y++){set(31,y,51);set(32,y,51)}
  const frame=(x0,y0,x1,y1)=>{for(let x=x0;x<=x1;x++){set(x,y0,51);set(x,y1,51)}for(let y=y0;y<=y1;y++){set(x0,y,51);set(x1,y,51)}};
  frame(25,26,38,33);frame(23,7,40,12);
  for(let i=0;i<500;i++){const x=3+((r()*58)|0),y=3+((r()*50)|0);if(at(x,y)===50&&r()<.5)set(x,y,52)}
  // rot pools
  for(const [cx,cy,rx,ry] of [[7,43,1.4,1],[19,42,1.6,1.2],[14,51,2.4,1.3],[40,42,1.8,1.4],[54,41,2,1.3],[43,48,1.7,1.2],[27,47,1.5,1.2],[58,49,1.6,1.4],[21,31,1.4,1],[41,35,1.5,1],[10,34,1.6,1],[45,11,1.4,1],[11,48,1.2,1],[20,20,1.2,1]])
    for(let y=Math.floor(cy-ry-1);y<=cy+ry+1;y++)for(let x=Math.floor(cx-rx-1);x<=cx+rx+1;x++)if(Math.hypot((x-cx)/rx,(y-cy)/ry)<1+r()*.35&&[50,52,53,57].includes(at(x,y)))set(x,y,54);
  // blood soaked ground under the gallows, at the cathedral steps and at the monastery gate
  for(let i=0;i<70;i++){const c=[[40,51],[32,25],[51,34],[14,40]][i%4],x=c[0]+((r()-.5)*7)|0,y=c[1]+((r()-.5)*4)|0;if([50,52,53].includes(at(x,y)))set(x,y,55)}
  // braziers along the way
  for(const [x,y] of [[29,36],[34,36],[29,43],[34,43],[29,50],[34,50],[24,24],[39,24],[22,6],[41,6]])set(x,y,27);
  // gates, statues, fountain, the poor dying on the golden steps
  prop('cathedral_gate',32,24.08,[]);prop('cathedral_gate',32,6.08,[]);
  prop('queen_fountain',36,30.92,[[35,30],[36,30]]);
  for(const [x,y] of [[27,28],[36,28],[27,32],[36,32],[25,9],[38,9]])prop('saint_king',x+.5,y+.92,[[x,y]]);
  for(const [x,y] of [[27,25],[36,25],[29,25],[35,26],[26,26],[30,7],[34,7]])place('beggar_bodies',x,y);
  for(const [x,y] of [[25,24],[38,24],[20,6],[43,6]])place('royal_banner',x,y);
  // monastery: pyre, banners, heads on stakes at the gates
  prop('pyre',51.5,23.92,[[51,23]],{fire:true,big:true,anim:'pyre'});
  for(const x of [48,55])place('royal_banner',x,15);
  for(const [x,y] of [[49,33],[54,33],[42,20],[42,24]])place('impaled_head',x,y);
  place('chains',59,18);place('chains',59,27);place('sarcophagus',45,25);place('sarcophagus',58,22);
  // slum clutter and trash fires
  for(const [x,y,big] of [[6,49],[27,40],[48,42],[55,49],[17,41,1],[42,38]])place('debris_fire',x,y,{fire:true,big:!!big,anim:'fire'});
  prop('gallows',41,51.92,[[40,51],[41,51]]);
  for(const [k,x,y] of [['beggar_bodies',13,40],['beggar_bodies',9,46],['beggar_bodies',44,41],['beggar_bodies',36,47],['beggar_bodies',20,51],['barrel',9,39],['barrel',27,37],['barrel',51,44],['wheel',18,36],['wheel',45,49],
    ['crow_post',4,44],['crow_post',59,46],['dead_horse',37,51],['burnt_hay',55,40],['barrel',22,44],['beggar_bodies',58,40],['crow_post',23,35],['dead_horse',8,35],['impaled_head',28,52],['impaled_head',35,52],['beggar_bodies',11,46],['doorway_bones',7,46]].filter((_,i)=>i%2===0))place(k,x,y);
  // street lamps with blue runes, dead trees in the gardens
  for(const [x,y] of [[21,10],[42,10],[11,10],[11,21],[42,35],[22,34],[2+9,31]])place('street_lantern',x,y);
  for(const [x,y] of [[17,10],[4,20],[8,20],[13,29],[17,29],[4,30],[11,19]])place('dead_tree',x,y);
  // doors of the nobles' townhouses, plague carts, carriages, gibbets, rot blooms by the pools
  prop('noble_door',6.5,18.1,[]);prop('noble_door',50,9.1,[]);prop('noble_door',16.5,27.1,[]);
  for(const [k,x,y] of [['plague_cart',26,45],['plague_cart',39,40],['plague_cart',12,53],['noble_carriage',21,9],['noble_carriage',44,12],['noble_carriage',9,27],['gibbet',36,50],['gibbet',19,36],['gibbet',48,35],
    ['offering_bowl',33,26],['offering_bowl',30,26],['broken_bell',37,11],['doorway_bones',6,40],['doorway_bones',17,40],['doorway_bones',46,40],['doorway_bones',52,40]].filter((_,i)=>i%2===0))place(k,x,y);
  for(const [x,y] of [[9,42],[18,43],[16,52],[42,42],[56,42],[44,49],[22,32],[11,35],[59,50],[28,47]])place('rot_bloom',x,y,{anim:'bloom'},false);
  // healing shrines
  prop('healing_shrine',41.5,28.92,[[41,28]],{shrine:0});prop('healing_shrine',13.5,45.92,[[13,45]],{shrine:1});
  // the city gate we came up through from the Lower City
  prop('gate',32,54.92,[[30,54],[31,54],[32,54],[33,54]],{sheet:'trans',still:'gate_open'});
  return{map,under,PROPS,clearways,start:{x:32*TS,y:51*TS+8},shrines:[{x:41*TS+8,y:29*TS+12},{x:13*TS+8,y:46*TS+12}],
    region:(x,y)=>y>=35?'slums':x>=43&&y>=14&&y<=32?'monastery':'city',
    npcs:[{id:'izolda',art:'izolda',name:(EN?'Countess Isolda of Vermar':'Hrabina Izolda z Vermarów'),x:6.5*TS,y:18.4*TS,lines:IZOLDA_LINES},
          {id:'ottokar',art:'ottokar',name:(EN?'Count Ottokar, King\'s Treasurer':'Hrabia Ottokar, skarbnik korony'),x:50*TS,y:9.4*TS,lines:OTTOKAR_LINES},
          {id:'aurel',art:'aurel',name:(EN?'Young Aurel of House Halder':'Młody Aurel z rodu Halderów'),x:16.5*TS,y:27.4*TS,lines:AUREL_LINES},
          (()=>{const [x,y]=freeNear(map,PROPS,[50,52,53,55],24,42);return{id:'heri',art:'heri',name:(EN?'Heri, The King\'s Guardian':'Heri, wojak z gwardii królewskiej'),x:(x+.5)*TS,y:(y+.4)*TS,lines:HERI_LINES}})()],idle:[32,30,11,8]};
}

// Chapter IV: Czarnobór, the wild valleys of the old faith (plan: docs/prompty-rozdzial4.md)
// codes: 60 forest floor, 61 dirt road, 62 valley meadow, 63 stone-field gravel, 64 river ford (slows), 65 marsh water (slows more),
// 66 barrow earth, 67 camp and ritual ground, 68 ruined watchtower masonry, 69 log palisade; 21 rock walls around the valley
// landmarks stay in place; woods, glades, pools, boulders and the river bends come from a random seed, so the valley differs on every load
const CZ={camp:{x:30,y:57,w:21,h:11},oak:[58,17],circle:[53,34],hill:[40,6],tower:[10,11]};
// zone borders on the 80x70 grid
const CZY={north:27,stones:41,campTop:55},CZX={forest:42,marsh:37};
function genCzarnobor(seed){
  const {map,under,PROPS,set,fill,prop,reserve,clearways}=mapKit(21,GONE_PROPS);const r=rng(seed);const at=(x,y)=>map[y*GW+x];
  reserve(38,54,5,14);
  const ph=[0,1,2,3,4,5].map(()=>r()*20);
  const N=(x,y)=>Math.sin(x*.19+ph[0])+Math.cos(y*.17+ph[1])+Math.sin((x+y)*.105+ph[2])+Math.cos((x-y)*.135+ph[3]);
  const inCamp=(x,y)=>y>=CZY.campTop&&x>=28&&x<=53;
  fill(2,2,GW-4,GH-4,62);
  // ragged rock rim of the valley
  for(let y=1;y<GH-1;y++)for(let x=1;x<GW-1;x++){const e=Math.min(x,y,GW-1-x,GH-1-y);if(e<2||inCamp(x,y))continue;if(e<3+1.4*(Math.sin(x*.4+ph[4])+Math.cos(y*.36+ph[5])))set(x,y,21)}
  // zones from south to north: meadows (river valley), stone field, then the marsh in the west and the deep forest in the east
  for(let y=2;y<GH-2;y++)for(let x=2;x<GW-2;x++){if(at(x,y)===21)continue;const n=N(x,y)+(r()-.5)*.6;
    if(y<CZY.north&&x>=CZX.forest)set(x,y,60);
    else if(y<CZY.north&&x<CZX.marsh)set(x,y,y>=5&&n>.45?65:60);
    else if(y<CZY.north)set(x,y,n>.8?60:63);
    else if(y<CZY.stones)set(x,y,n>.15?63:62);
    else if(n>1.25)set(x,y,60)}
  // Łysa Góra: a bare hill with a ritual ring on top
  for(let y=2;y<15;y++)for(let x=24;x<57;x++){const d=Math.hypot((x-CZ.hill[0])/15,(y-CZ.hill[1])/7.5);if(d<1)set(x,y,d<.42?67:63)}
  // the river bends across the valley; all of it is a shallow ford that slows you down
  const riverY=x=>48+2.7*Math.sin(x*.152+ph[0])+1.2*Math.sin(x*.056+ph[2]);
  for(let x=2;x<GW-2;x++){const cy=riverY(x);for(let y=Math.floor(cy-1.7);y<=cy+1.7;y++)if(at(x,y)!==21&&!inCamp(x,y))set(x,y,64)}
  // refugee camp behind a log palisade, gate to the north
  const C=CZ.camp;fill(C.x,C.y,C.w,C.h,67);
  for(let x=C.x;x<C.x+C.w;x++)set(x,C.y,69);for(let y=C.y;y<C.y+C.h;y++){set(C.x,y,69);set(C.x+C.w-1,y,69)}
  for(let x=38;x<=42;x++)set(x,C.y,61);
  // the old road from the camp gate up to the hill, with side paths to the sacred oak, the watchtower and the stone circle
  const roadX=y=>Math.round(40+3.75*Math.sin(y*.128+ph[1])*Math.min(1,Math.max(0,(C.y-y)/7)));
  const road=(x,y)=>{const t=at(x,y);if(t!==21&&t!==69&&x>1&&y>1&&x<GW-2&&y<GH-2){set(x,y,t===64?64:61);reserve(x-1,y-1,3,3)}};
  for(let y=11;y<C.y;y++){const x=roadX(y);for(let dx=-1;dx<=1;dx++)road(x+dx,y)}
  for(let x=roadX(19);x<=CZ.oak[0]-4;x++)for(let y=18;y<=20;y++)road(x,y);
  for(let x=CZ.tower[0]+2;x<=roadX(15);x++)for(let y=14;y<=16;y++)road(x,y);
  for(let x=roadX(34);x<=CZ.circle[0]-5;x++)for(let y=33;y<=35;y++)road(x,y);
  // clearings: sacred oak, stone circle, ruined watchtower
  const disc=(cx,cy,rad,v)=>{for(let y=Math.floor(cy-rad);y<=cy+rad;y++)for(let x=Math.floor(cx-rad);x<=cx+rad;x++)if(Math.hypot(x-cx,y-cy)<=rad&&x>1&&y>1&&x<GW-2&&y<GH-2&&at(x,y)!==61)set(x,y,v)};
  disc(CZ.oak[0],CZ.oak[1],5.8,60);disc(CZ.oak[0],CZ.oak[1],3.2,67);
  disc(CZ.circle[0],CZ.circle[1],7.5,63);
  disc(CZ.tower[0],CZ.tower[1],4,63);
  const [tx0,ty0]=CZ.tower;for(let y=ty0-1;y<=ty0+1;y++)for(let x=tx0-1;x<=tx0+1;x++)if(x!==tx0||y!==ty0+1)set(x,y,68);
  // standing stones of the circle (they wake up when blood is shed next to them)
  const SC5=[-Math.PI/2,-.25,1,2.3,3.95].map(a=>[Math.round(CZ.circle[0]+Math.cos(a)*5.2),Math.round(CZ.circle[1]+Math.sin(a)*4.5)]);
  SC5.forEach(([x,y],i)=>prop('standing_stone',x+.5,y+.92,[[x,y]],{stone:i}));
  prop('sacred_oak',CZ.oak[0]+.5,CZ.oak[1]+.92,[[CZ.oak[0],CZ.oak[1]],[CZ.oak[0]-1,CZ.oak[1]],[CZ.oak[0]+1,CZ.oak[1]]]);
  // props that stand on a free walkable tile near the wanted spot
  const WALK=new Set([60,61,62,63,66,67]);
  const roadNear=(x,y)=>{for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++)if(clearways.has((y+dy)*GW+x+dx)||at(x+dx,y+dy)===61||at(x+dx,y+dy)===69||at(x+dx,y+dy)===68)return true;return false};
  const taken=(x,y,d=1.4)=>PROPS.some(p=>Math.abs(p.x-x-.5)<d&&Math.abs(p.y-y-.92)<d);
  // a solid prop never stands on the road and never touches another solid prop or a wall (not even diagonally),
  // so every passage between obstacles stays at least one full tile wide
  const WALK_S=new Set([60,62,63,66,67]),BLOCK=new Set([21,31,68,69]);
  const free8=(x,y,d=1)=>{for(let dy=-d;dy<=d;dy++)for(let dx=-d;dx<=d;dx++)if((dx||dy)&&BLOCK.has(at(x+dx,y+dy)))return false;return true};
  // loose clutter (boulders, carts, poles, gallows, stumps) keeps two free tiles around it, so it never narrows a path to one tile
  const WIDE=new Set(['mossy_boulder','drowned_cart','cz_skullpole','cz_gallows','hanging_tree','cz_wheel','axe_stump','fallen_log']);
  const near=(x,y,ok=WALK,solid=false,d=1)=>{for(let rr=0;rr<8;rr++)for(let dy=-rr;dy<=rr;dy++)for(let dx=-rr;dx<=rr;dx++){const X=x+dx,Y=y+dy;if(X<3||Y<3||X>GW-4||Y>GH-4)continue;if(ok.has(at(X,Y))&&!taken(X,Y)&&(!solid||free8(X,Y,d)&&!roadNear(X,Y)))return[X,Y]}return null};
  const put=(k,x,y,solid=true,extra)=>{const p=near(x,y,solid?WALK_S:WALK,solid,WIDE.has(k)?2:1);if(p)prop(k,p[0]+.5,p[1]+.92,solid?[[p[0],p[1]]]:[],extra);return p};
  // camp: bonfire, wagons, tents, the dead under sheets
  prop('cz_fire',35.5,61.92,[[35,61]],{fire:true,big:true,anim:'campfire'});
  prop('cz_wagon',34,58.92,[[33,58],[34,58]]);prop('cz_wagon',47,64.92,[[46,64],[47,64]]);
  for(const [k,x,y] of [['cz_cauldron',36,62],['cz_firewood',46,62],['cz_tent',33,64],['cz_tent',48,59],['cz_pelts',46,65],['barrel',36,59],['barrel',45,59],['covered_corpses',36,65],['cz_beehive',49,61],['axe_stump',32,61]])put(k,x,y,k!=='covered_corpses'&&k!=='axe_stump'&&k!=='cz_pelts');
  for(const x of [37,43])prop('cz_skullpole',x+.5,55.92,[[x,55]]);
  // healing wayside shrines
  const s1=put('cz_shrine',25,38,true,{shrine:0}),s2=put('cz_shrine',65,45,true,{shrine:1}),s3=put('cz_shrine',22,22,true,{shrine:2});
  // ritual ring of fires on the hill
  for(let i=0;i<6;i++){const a=i*Math.PI/3,x=Math.round(CZ.hill[0]+Math.cos(a)*6.2),y=Math.round(CZ.hill[1]+Math.sin(a)*3.2);put('cz_fire',x,y,true,{fire:true,anim:'campfire'})}
  prop('cz_idol',CZ.hill[0]+.5,CZ.hill[1]+.92,[[CZ.hill[0],CZ.hill[1]]]);put('cz_sacpole',CZ.hill[0]-2,CZ.hill[1]-1);put('cz_sacpole',CZ.hill[0]+2,CZ.hill[1]-1);put('cz_bones',CZ.hill[0]+1,CZ.hill[1]+2,false);
  for(const [x,y] of [[36,9],[44,9],[33,5],[47,5],[30,10],[50,10]])put('cz_skullpole',x,y);
  // along the road: gallows, hanging trees, wolf skulls, a mill wheel on the river bank
  put('cz_gallows',roadX(45)+3,45);put('hanging_tree',roadX(39)-3,39);put('hanging_tree',roadX(24)+4,24);
  {const x=roadX(49)-5;put('cz_wheel',x,Math.round(riverY(x))-2)}
  for(let i=0;i<4;i++){const y=15+((r()*36)|0);put('cz_skullpole',roadX(y)+(r()<.5?-2:3),y)}
  for(let i=0;i<10;i++){const y=12+((r()*40)|0);put('wolf_skull_bush',roadX(y)+(r()<.5?-2:3),y,false)}
  // burial mounds on the stone field (the dead rise from them later in the night)
  for(let i=0,n=0;i<400&&n<8;i++){const x=7+((r()*65)|0),y=29+((r()*11)|0);if(Math.hypot(x-CZ.circle[0],y-CZ.circle[1])<8.5||at(x,y)===61||taken(x,y,2.5)||!free8(x,y,2)||roadNear(x,y))continue;disc(x,y,1.3,66);prop('burial_mound',x+.5,y+.92,[[x,y]],{barrow:1});if(n%2===0)put('cz_crow',x+1,y+1,false,{anim:'crow'});n++}
  for(let i=0;i<8;i++)put('cz_bones',7+((r()*65)|0),29+((r()*12)|0),false);
  for(let i=0;i<7;i++)put('mossy_boulder',7+((r()*65)|0),27+((r()*26)|0));
  for(let i=0,n=0;i<900&&n<9;i++){const x=5+((r()*32)|0),y=5+((r()*21)|0);if(at(x,y)!==65||taken(x,y,4))continue;prop('cz_wisp',x+.5,y+.92,[],{anim:'wisp'});n++}
  for(let x=5;x<37;x++)for(const y of [15,16])if(at(x,y)===61&&[[0,-1],[0,1]].some(([dx,dy])=>at(x+dx,y+dy)===65)&&r()<.35&&!taken(x,y,1.5))prop('cz_walk',x+.5,y+.92,[]);
  for(let i=0;i<4;i++)put('drowned_cart',5+((r()*30)|0),6+((r()*19)|0),true);
  // trees: dense forest in the east, sparse dead trees on the marsh, copses on the meadows, a wall of spruce along the rim
  const clear=(x,y)=>inCamp(x,y)||Math.hypot((x-CZ.hill[0])/16,(y-CZ.hill[1])/8.5)<1||Math.hypot(x-CZ.oak[0],y-CZ.oak[1])<5.6||Math.hypot(x-CZ.circle[0],y-CZ.circle[1])<8||Math.hypot(x-CZ.tower[0],y-CZ.tower[1])<4.4;
  const zone=(x,y)=>y<CZY.north&&x>=CZX.forest?'forest':y<CZY.north&&x<CZX.marsh?'marsh':'open';
  const pickT=(z,q)=>z==='forest'?(q<.36?'spruce':q<.58?'tall_pine':q<.7?'dead_spruce':q<.86?'birch':'dead_oak'):z==='marsh'?(q<.4?'dead_oak':q<.72?'dead_spruce':'birch'):(q<.34?'spruce':q<.52?'tall_pine':q<.72?'birch':q<.86?'dead_oak':'dead_spruce');
  const treeAt=new Uint8Array(GW*GH);let trees=0;
  for(let y=3;y<GH-3;y++)for(let x=3;x<GW-3;x++){const t=at(x,y);if(!(t===60||t===62||t===63)||roadNear(x,y)||clear(x,y)||taken(x,y,1.2)||!free8(x,y)||PROPS.some(p=>!p.tree&&Math.abs(p.x-x-.5)<2.6&&Math.abs(p.y-y-.92)<2.6))continue;
    let ok=true;for(let dy=-1;dy<=1&&ok;dy++)for(let dx=-1;dx<=1;dx++)if(treeAt[(y+dy)*GW+x+dx]){ok=false;break}if(!ok)continue;
    const e=Math.min(x,y,GW-1-x,GH-1-y),z=zone(x,y),n=N(x,y);
    const dens=e<6?.32:z==='forest'?(n>-1.4?.16:.03):z==='marsh'?.07:t===60?.14:y<CZY.stones?.03:.025;
    if(r()>dens||trees>=240)continue;treeAt[y*GW+x]=1;trees++;prop(pickT(z,r()),x+.5,y+.92,[[x,y]],{tree:1,flip:r()<.5})}
  // undergrowth: ferns, brambles and mushrooms in the forest, reeds on the marsh, stumps and fallen logs
  for(let i=0;i<800;i++){const x=3+((r()*(GW-6))|0),y=3+((r()*(GH-6))|0),t=at(x,y),z=zone(x,y);if(taken(x,y,1.2)||clear(x,y)&&z!=='marsh')continue;
    if(t===60&&z==='forest'&&r()<.22&&!clearways.has(y*GW+x))prop(r()<.45?'ferns':r()<.6?'brambles':'mushrooms',x+.5,y+.92,[],{flip:r()<.5});
    else if(z==='marsh'&&(t===60||t===65)&&[[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>(at(x+dx,y+dy)===65)!==(t===65))&&r()<.35)prop('reeds',x+.5,y+.92,[],{flip:r()<.5});
    else if(t===60&&r()<.03&&free8(x,y,2)&&!roadNear(x,y))prop(r()<.5?'axe_stump':'fallen_log',x+.5,y+.92,[[x,y]],{flip:r()<.5})}
  const shr=[s1,s2,s3].filter(Boolean).map(([x,y])=>({x:x*TS+8,y:(y+1)*TS}));
  return{map,under,PROPS,seed,clearways,start:{x:40*TS+8,y:63*TS+8},shrines:shr,
    region:(x,y)=>y>=CZY.campTop?'camp':y>=CZY.stones?'meadows':y>=CZY.north?'stones':y<15&&x>23&&x<58?'hill':x<CZX.marsh?'marsh':'forest',
    npcs:(()=>{const OK=[60,61,62,63,66,67],nn=(id,art,name,lines,x,y,extra)=>{const [X,Y]=freeNear(map,PROPS,OK,x,y);return Object.assign({id,art,name,x:(X+.5)*TS,y:(Y+.4)*TS,lines},extra||{})};
      return[nn('wierz','wierz',(EN?'Anastasija, The Whispering Witch':'Wierzchosława, szeptucha'),WIERZ_LINES,36,62),nn('bartosz','bartosz',(EN?'Bart The Scout':'Bartosz Tropiciel'),BARTOSZ_LINES,roadX(44)-3,43),
        nn('wolch','wolch',(EN?'Volch, Pagan Priest':'Żerca Wołch'),WOLCH_LINES,CZ.oak[0],CZ.oak[1]+4),nn('boginka','boginka_lure','',[],62+((r()*10)|0),10+((r()*10)|0),{lure:true})]})(),idle:[40,48,14,10]};
}

// Chapter V: Cytadela Wierzycieli, seat of the Order (plan: docs/prompty-rozdzial5.md)
// codes: 70 courtyard flagstones, 71 black marble, 72 archive floor, 73 court carpet, 74 treasury, 75 dungeon, 76 throne seal, 77 ink pools; 78 inner walls, 80 iron bars; 21 outer rim
// six halls from south to north, each cut off from the next by a double wall with two wide gaps (the throne hall has one)
const CY={bands:[[58,66],[47,55],[35,44],[24,32],[13,21],[3,10]],floors:[70,72,71,74,75,71],
  walls:[[56,57,[[14,25],[54,65]]],[45,46,[[14,25],[54,65]]],[33,34,[[14,25],[54,65]]],[22,23,[[14,25],[54,65]]],[11,12,[[31,48]]]],lanes:[[16,23],[56,63]]};
const cyRegion=(x,y)=>y>=56?'dziedziniec':y>=45?'kancelaria':y>=33?'sala':y>=22?'skarbiec':y>=11?'krypta':'tron';
function genCytadela(seed){
  const {map,under,PROPS,set,fill,prop}=mapKit(21),at=(x,y)=>map[y*GW+x];
  const X0=4,X1=75,WID=X1-X0+1;
  CY.bands.forEach(([y0,y1],i)=>fill(X0,y0,WID,y1-y0+1,CY.floors[i]));
  CY.walls.forEach(([y0,y1,gaps],i)=>{fill(X0,y0,WID,y1-y0+1,78);for(const [a,b] of gaps)fill(a,y0,b-a+1,y1-y0+1,CY.floors[i+1])});
  fill(35,35,10,10,73);
  for(let y=3;y<=10;y++)for(let x=30;x<=50;x++)if(Math.hypot((x-40)*.8,(y-6.5)*1.1)<=3.6)set(x,y,76);
  // The prison dressing stays at the sides; no shelves, vault blocks or cells across combat lanes.
  for(const x of [9,70])fill(x,14,1,5,80);
  for(const [cx,cy] of [[7,18],[72,18]])for(let y=cy-2;y<=cy+2;y++)for(let x=cx-2;x<=cx+2;x++)if(Math.hypot(x-cx,(y-cy)*1.3)<=1.6&&at(x,y)===75)set(x,y,77);
  for(const [x,y] of [[6,60],[73,60],[6,39],[73,39],[6,28],[73,28],[6,6],[73,6]])set(x,y,22);
  for(const [x,y] of [[11,59],[68,59],[11,43],[68,43],[11,19],[68,19],[32,8],[47,8]])set(x,y,27);
  const P=(k,x,y,solid=false,extra)=>prop(k,x+.5,y+.92,solid===true?[[x,y]]:solid||[],extra);
  // Keep both north/south lanes (x16..23 and x56..63) and the middle of every hall open.
  P('gallows',10,63,true);P('well',70,63,true);P('armour',8,59);P('armour',72,59);
  P('bookcase_a',8,49,true);P('bookcase_b',71,49,true);P('desk',10,51,true);P('chair',11,51);P('lectern',40,48,true);P('ledgers',70,53);
  P('bench_a',40,36,[[39,36],[40,36]]);P('statue_a',8,37,true);P('statue_b',71,37,true);
  P('scale',40,25,true);P('vault',71,25,true);P('chest',8,26);P('chest_open',70,30);P('goldheap',9,30);
  P('cage',7,17);P('rack',72,17);
  P('throne',40,4,[[39,4],[40,4],[41,4]]);P('statue_a',27,5,true);P('statue_b',52,5,true);
  for(const y of [58,47,35,24,13,3])for(const x of [8,71]){const k=y===13&&x===71?'chains':'torch';P(k,x,y,[],{anim:k})}
  // Six deliberate, non-blocking details beside furniture, never scattered into passageways.
  for(const [k,x,y] of [['book',9,53],['scroll',11,53],['pages',8,41],['keys',10,28],['purse',72,31],['shackles',7,19]])P(k,x,y,[],{floorDetail:true,...(k==='pages'?{anim:'pages'}:{})});
  const SH=[[69,60],[10,42],[40,19]];SH.forEach(([x,y],i)=>P('healing_shrine',x,y,true,{shrine:i}));
  return{map,under,PROPS,seed,start:{x:40*TS+8,y:63*TS+8},shrines:SH.map(([x,y])=>({x:x*TS+8,y:y*TS+12})),region:cyRegion,idle:[40,58,14,6],
    npcs:(()=>{const OK=[70,71,72,73,74,75],nn=(id,name,lines,x,y)=>{const [X,Y]=freeNear(map,PROPS,OK,x,y);return{id,art:id,name,x:(X+.5)*TS,y:(Y+.4)*TS,lines}};
      return[nn('skryba',(EN?'Condemned Scribe':'Skazany Skryba'),SKRYBA_LINES,28,16),nn('straznik',(EN?'The Guard Who Fled':'Strażnik, który uciekł'),STRAZNIK_LINES,24,64),nn('pieczetnik',(EN?'The Sealer':'Pieczętarka'),PIECZETNIK_LINES,40,54)]})()};
}

// Crypt under the Brzeźnica graveyard (side quest of chapter I), built from the Lower City tiles and props.
// Random rooms joined by corridors: an entrance room, crypts full of sleeping dead, a shrine room and a boss hall with one single door.
// A new layout is generated on every descent; a layout that fails the checks (unreachable room, too wide boss door) is thrown away.
function genDungeon(seed){let w=null;for(let i=0;i<120&&!w;i++)w=genDungeonTry(seed+i*7717,false);return w||genDungeonTry(seed,true)}
function genDungeonTry(seed,force){
  const {map,under,PROPS,set,fill,prop}=mapKit(21);const r=rng(seed),at=(x,y)=>map[y*GW+x],ri=(a,b)=>a+((r()*(b-a+1))|0);
  const rooms=[],cen=R=>[R.x+(R.w>>1),R.y+(R.h>>1)],D=(a,b)=>{const [x0,y0]=cen(a),[x1,y1]=cen(b);return Math.abs(x0-x1)+Math.abs(y0-y1)};
  const fits=R=>R.x>=3&&R.y>=4&&R.x+R.w<=GW-3&&R.y+R.h<=GH-3&&rooms.every(o=>R.x+R.w+3<=o.x||o.x+o.w+3<=R.x||R.y+R.h+3<=o.y||o.y+o.h+3<=R.y);
  for(let i=0;i<200&&!rooms.length;i++){const R={x:ri(3,GW-21),y:ri(4,GH-16),w:ri(15,18),h:ri(10,12),k:'boss'};if(fits(R))rooms.push(R)}
  const B=rooms[0];if(!B)return null;
  for(let i=0;i<400&&rooms.length<2;i++){const R={x:ri(3,GW-13),y:ri(4,GH-11),w:ri(9,11),h:ri(7,8),k:'start'};if(fits(R)&&D(R,B)>34)rooms.push(R)}
  if(rooms.length<2)return null;
  for(let i=0;i<900&&rooms.length<11;i++){const R={x:ri(3,GW-15),y:ri(4,GH-11),w:ri(8,13),h:ri(6,9),k:'crypt'};if(fits(R))rooms.push(R)}
  if(rooms.length<7&&!force)return null;
  for(const R of rooms)fill(R.x,R.y,R.w,R.h,20);
  // corridors two tiles wide, L-shaped; a spanning tree over the rooms plus two extra loops
  const cor=new Set(),dig=(x,y)=>{if(x<2||y<2||x>GW-3||y>GH-3)return;if(at(x,y)===21){set(x,y,20);cor.add(y*GW+x)}};
  const link=(a,b)=>{const [x0,y0]=cen(a),[x1,y1]=cen(b);const h=(xa,xb,y)=>{for(let x=Math.min(xa,xb);x<=Math.max(xa,xb)+1;x++){dig(x,y);dig(x,y+1)}},v=(ya,yb,x)=>{for(let y=Math.min(ya,yb);y<=Math.max(ya,yb)+1;y++){dig(x,y);dig(x+1,y)}};
    if(r()<.5){h(x0,x1,y0);v(y0,y1,x1)}else{v(y0,y1,x0);h(x0,x1,y1)}};
  const rest=rooms.slice(1),inT=[rest[0]],out=rest.slice(1);
  while(out.length){let bi=0,bj=0,bd=1e9;out.forEach((o,i)=>inT.forEach((t,j)=>{const d=D(o,t);if(d<bd){bd=d;bi=i;bj=j}}));link(out[bi],inT[bj]);inT.push(out.splice(bi,1)[0])}
  for(let i=0;i<2;i++){const a=rest[ri(0,rest.length-1)],b=rest[ri(0,rest.length-1)];if(a!==b)link(a,b)}
  // the boss hall: wall it off again, then dig one corridor from the nearest crypt (that crypt gets the healing shrine)
  for(let y=B.y-1;y<=B.y+B.h;y++)for(let x=B.x-1;x<=B.x+B.w;x++)if(x<B.x||y<B.y||x>=B.x+B.w||y>=B.y+B.h){set(x,y,21);cor.delete(y*GW+x)}
  const crypts=rooms.filter(R=>R.k==='crypt');if(!crypts.length)return null;
  const pre=crypts.reduce((a,b)=>D(a,B)<=D(b,B)?a:b);pre.k='pre';link(pre,B);
  let door=0;for(let y=B.y-1;y<=B.y+B.h;y++)for(let x=B.x-1;x<=B.x+B.w;x++)if((x<B.x||y<B.y||x>=B.x+B.w||y>=B.y+B.h)&&at(x,y)===20)door++;
  if(!force&&(door<2||door>4))return null;
  // decoration never goes next to a corridor mouth and solid props keep a free tile (two for loose clutter) around them
  const KEEP=new Set();for(const k of cor){const x=k%GW,y=(k/GW)|0;for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)KEEP.add((y+dy)*GW+x+dx)}
  const free=(x,y,d=1)=>{if(at(x,y)!==20||KEEP.has(y*GW+x))return false;for(let dy=-d;dy<=d;dy++)for(let dx=-d;dx<=d;dx++){const t=at(x+dx,y+dy);if((dx||dy)&&t!==20&&t!==21)return false}return true};
  const wallTop=(R,k,n)=>{for(let i=0;i<n*8&&n>0;i++){const x=ri(R.x+1,R.x+R.w-2),y=R.y;if(at(x,y-1)!==21||!free(x,y,1))continue;prop(k,x+.5,y+.92,[[x,y]]);n--}};
  const floorP=(R,k,n,w2)=>{for(let i=0;i<n*10&&n>0;i++){const x=ri(R.x+2,R.x+R.w-3-(w2?1:0)),y=ri(R.y+2,R.y+R.h-3);if(!free(x,y,2)||(w2&&!free(x+1,y,2)))continue;
      if(w2)prop(k,x+1,y+.92,[[x,y],[x+1,y]]);else prop(k,x+.5,y+.92,[[x,y]]);n--}};
  const stairs=(R,exit)=>{const c=R.x+(R.w>>1);for(let o=0;o<R.w;o++)for(const s of [1,-1]){const x=c+s*o;if(x-1<=R.x||x+1>=R.x+R.w-1)continue;
      if([-1,0,1].every(dx=>at(x+dx,R.y-1)===21&&free(x+dx,R.y,0)&&!KEEP.has((R.y+1)*GW+x+dx))){prop('chapel_stairs',x+.6,R.y+.92,[[x-1,R.y],[x,R.y],[x+1,R.y]],{sheet:'trans',exit});return x}}return null};
  const S0=rooms[1],sx=stairs(S0,'start'),bx=stairs(B,'boss');if(sx===null||bx===null)return null;
  for(const [R,x] of [[S0,sx],[B,bx]])for(let dy=1;dy<=3;dy++)for(let dx=-2;dx<=2;dx++)KEEP.add((R.y+dy)*GW+x+dx);
  for(const R of rooms){
    const big=R.w>=11&&R.h>=8||R.k==='boss';
    if(big){const P=[[R.x+2,R.y+2],[R.x+R.w-3,R.y+2]];if(R.k==='boss')P.push([R.x+2,R.y+R.h-3],[R.x+R.w-3,R.y+R.h-3]);for(const [x,y] of P)if(free(x,y,1))set(x,y,22)}
    for(const [x,y] of [[R.x,R.y],[R.x+R.w-1,R.y],[R.x,R.y+R.h-1],[R.x+R.w-1,R.y+R.h-1]])if((R.k==='boss'||R.k==='start'||r()<.45)&&free(x,y,1))set(x,y,27);
    if(R.k==='boss'){wallTop(R,'king_statue',2);wallTop(R,'clan_banner',2);floorP(R,'sarcophagus',2)}
    else if(R.k==='start'){wallTop(R,'clan_banner',1)}
    else{wallTop(R,r()<.5?'clan_banner':'chains',1);floorP(R,'sarcophagus',ri(0,2));if(r()<.25)floorP(R,'fallen_pillar',1,true);
      if(r()<.3)wallTop(R,'rune_lantern',1)}
    for(let i=0;i<ri(1,3);i++){const x=ri(R.x+1,R.x+R.w-2),y=ri(R.y+1,R.y+R.h-2);if(at(x,y)===20&&!KEEP.has(y*GW+x))prop('dwarf_bones',x+.5,y+.92,[])}}
  let shrine=null;for(let i=0;i<60&&!shrine;i++){const x=ri(pre.x+2,pre.x+pre.w-3),y=ri(pre.y+2,pre.y+pre.h-3);if(free(x,y,2)){prop('healing_shrine',x+.5,y+.92,[[x,y]],{shrine:0});shrine={x:x*TS+8,y:y*TS+12}}}
  for(let y=1;y<GH-1;y++)for(let x=1;x<GW-1;x++){if(at(x,y)!==20)continue;const q=r();if(q<.03)set(x,y,30);else if(q<.12)set(x,y,26)}
  // every room must be reachable from the entrance
  const SOLT=new Set([21,22,27,31]),seen=new Uint8Array(GW*GH),st=[(S0.y+2)*GW+sx];seen[st[0]]=1;
  while(st.length){const k=st.pop(),x=k%GW,y=(k/GW)|0;for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const n=(y+dy)*GW+x+dx;if(seen[n]||SOLT.has(map[n]))continue;seen[n]=1;st.push(n)}}
  if(!force)for(const R of rooms){let ok=false;for(let y=R.y;y<R.y+R.h&&!ok;y++)for(let x=R.x;x<R.x+R.w;x++)if(seen[y*GW+x]){ok=true;break}if(!ok)return null}
  return{map,under,PROPS,seed,start:{x:sx*TS+8,y:(S0.y+2)*TS+8},shrines:shrine?[shrine]:[],region:()=>'hall',npcs:[],idle:[...cen(S0),6,4],rooms:rooms.map(R=>({x:R.x,y:R.y,w:R.w,h:R.h,k:R.k}))};
}

/* ============ THREE SETUP ============ */
const cvs=$('gl');
let renderer;
try{renderer=new THREE.WebGLRenderer({canvas:cvs,antialias:false,powerPreference:'high-performance'})}catch(e){$('screen').insertAdjacentHTML('beforeend',(EN?'<div id="err">This browser does not support WebGL, so the 3D game cannot start.</div>':'<div id="err">Ta przeglądarka nie obsługuje WebGL, więc demo 3D nie ruszy.</div>'));return}
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.setClearColor(0x030205);
const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x050308,.015);
const cam=new THREE.PerspectiveCamera(24,16/9,.5,120);
const amb=new THREE.AmbientLight(0x5a4f78,.85);scene.add(amb);
const hemi=new THREE.HemisphereLight(0x302848,0x1a0a06,.55);scene.add(hemi);
const moon=new THREE.DirectionalLight(0xd0c0ff,0);moon.position.set(-6,14,-10);scene.add(moon);scene.add(moon.target);
let filmUniforms=null;
const ATM={1:{amb:0x65738c,ai:1,hs:0x8a9ebf,hg:0x2b1b17,hi:.42,fog:0x0b101b,fd:.010,clear:0x05070d,mi:.16,mc:0x9ebbea,cold:0xdceaff,warm:0xffeedc},
  2:{amb:0x5c5269,ai:.98,hs:0x5c6380,hg:0x25120c,hi:.5,fog:0x0c0910,fd:.013,clear:0x040307,mi:.18,mc:0xb6bbd5,cold:0xdce1ff,warm:0xffe5c9},
  3:{amb:0x6b6076,ai:.7,hs:0xb59a6a,hg:0x2b1921,hi:.32,fog:0x19121a,fd:.009,clear:0x0c080d,mi:.26,mc:0xc7cbe9,cold:0xe2defb,warm:0xffedcf},
  9:{amb:0x55546e,ai:.94,hs:0x566181,hg:0x1d1217,hi:.48,fog:0x090912,fd:.015,clear:0x030309,mi:.12,mc:0xaab9df,cold:0xd9e3ff,warm:0xffead7},
  5:{amb:0x5e586e,ai:1.05,hs:0x74728e,hg:0x28141b,hi:.5,fog:0x0e0b15,fd:.013,clear:0x05030a,mi:.18,mc:0xc8bedf,cold:0xe5ddff,warm:0xffe5d9},
  4:{amb:0x556d70,ai:.9,hs:0x799cac,hg:0x19251d,hi:.42,fog:0x0b161a,fd:.011,clear:0x040a0d,mi:.25,mc:0xb3d8df,cold:0xd6f2f3,warm:0xffedcf}};
const DAWN=new THREE.Color(0xc0a898),TMPC=new THREE.Color();
function applyAtmos(){const a=ATM[CH];amb.color.setHex(a.amb);amb.intensity=a.ai;hemi.color.setHex(a.hs);hemi.groundColor.setHex(a.hg);hemi.intensity=a.hi;scene.fog.color.setHex(a.fog);scene.fog.density=a.fd;renderer.setClearColor(a.clear);moon.intensity=a.mi||0;if(a.mc)moon.color.setHex(a.mc);if(filmUniforms){filmUniforms.cold.value.setHex(a.cold);filmUniforms.warm.value.setHex(a.warm)}if(typeof setAmbience==='function')setAmbience()}
const phong=o=>{const detail=o.map&&o.map.userData&&o.map.userData.surface,m=new THREE.MeshPhongMaterial(Object.assign({shininess:0,specular:0x000000},detail?{bumpMap:o.map,bumpScale:.075,shininess:18,specular:0x151820}:{},o));if(detail)m.userData.surfaceDetail=o.map;return m};
function canvas(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c}
function texFrom(c,rep){const t=new THREE.CanvasTexture(c);t.magFilter=THREE.NearestFilter;t.minFilter=THREE.NearestFilter;t.generateMipmaps=false;if(rep){t.wrapS=t.wrapT=THREE.RepeatWrapping}return t}
// Ground and masonry recede into the scene; sprite frames keep their original nearest-pixel sampling.
function surfaceTex(c,rep=false){if(c.width===WW&&c.height===WH)finishGround(c);const t=texFrom(c,rep),pot=v=>(v&(v-1))===0,mip=renderer.capabilities.isWebGL2||pot(c.width)&&pot(c.height);t.generateMipmaps=mip;t.minFilter=mip?THREE.LinearMipmapLinearFilter:THREE.LinearFilter;t.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());t.userData={surface:true,ground:c.nbGround};return t}
// Source coordinates stay logical (16 px tiles); assets can supply 32/64 px of actual detail.
function atlasDraw(g,img,sx,sy,sw,sh,...dst){const d=img.nbDensity||1;g.drawImage(img,sx*d,sy*d,sw*d,sh*d,...dst)}
// Brzeznica prototype: semantic ground only. Never write map/under/props or consume gameplay RNG.
// Shared semantic planner for the remaining worlds. Original map codes are read-only.
function planOtherGround(ch){if(W.groundPlan)return W.groundPlan;if(W.seed===undefined)W.seed=ch*7919;
  const size=MW*MH,rows=new Uint8Array(size).fill(255),road=new Uint8Array(size),zone=new Uint8Array(size),direction=new Uint8Array(size),paths=[];
  const at=(x,y)=>x>=0&&y>=0&&x<MW&&y<MH?y*MW+x:-1,free=i=>i>=0&&i<size&&!SOLID.has(map[i]);
  const value=i=>map[i]===31?W.under[i]:map[i],wet=i=>ch===4&&[64,65].includes(value(i))||ch===3&&value(i)===54;
  for(let i=0;i<size;i++){if(!free(i))continue;const x=i%MW,y=i/MW|0,X=GTX[x],Y=GTY[y],t=value(i),r=W.region(x,y);let row=0;
    if(ch===2){row=r==='forge'||r==='mine'?2:0;if(t===29||t===25||Math.abs(y-MP(24))<2){road[i]=3;row=0}zone[i]=r==='forge'?3:r==='mine'?4:1}
    if(ch===3){row=r==='slums'?3:r==='monastery'?6:0;if(t===57)row=7;if(t===51){row=1;road[i]=3}zone[i]=r==='slums'?3:r==='monastery'?4:1;if(t===54)row=4}
    if(ch===4){row=r==='camp'?1:r==='meadows'?2:r==='marsh'?6:0;if(r==='hill'||r==='stones')row=2;if(t===61){road[i]=2;row=1}if(t===64||t===65)row=t===64?4:5;zone[i]=r==='camp'?3:r==='marsh'?4:1}
    if(ch===5){row=({dziedziniec:0,kancelaria:2,sala:1,skarbiec:1,krypta:0,tron:1})[r]??0;if(r==='skarbiec'&&(X<11||X>68))row=4;if(t===73)row=3;if(t===76)row=1;zone[i]=({dziedziniec:1,kancelaria:2,sala:3,skarbiec:4,krypta:5,tron:6})[r]||1;if(CY.lanes.some(([a,b])=>X>=a&&X<=b)){road[i]=3}}
    if(ch===9){row=0;zone[i]=1;const room=W.rooms.find(R=>x>=R.x&&x<R.x+R.w&&y>=R.y&&y<R.y+R.h);if(!room){road[i]=2}else if(Math.min(x-room.x,y-room.y,room.x+room.w-1-x,room.y+room.h-1-y)<1.5)row=2}
    rows[i]=row;
  }
  // Walkable door mouths/bridges and all interactions become explicit destinations.
  const targets=[{name:'entry',x:W.start.x/TS,y:W.start.y/TS,rank:3},...W.npcs.filter(n=>!n.lure).map(n=>({name:n.id,x:n.x/TS,y:n.y/TS,rank:1})),...W.shrines.map((n,i)=>({name:'shrine'+i,x:n.x/TS,y:n.y/TS,rank:1}))];
  if(ch===9)for(const R of W.rooms)targets.push({name:'room-'+R.k,x:R.x+R.w/2,y:R.y+R.h/2,rank:2});
  if(ch===2)for(const [x,y] of [[34,24],[41,24],[50,13],[50,33],[51,24],[18,24],[50,48]])targets.push({name:'bridge-door-'+x+'-'+y,x:MP(x),y:MP(y),rank:2});
  if(ch===3)for(const [x,y] of [[32,28],[11,24],[44,22],[51,32],[32,47],[32,10]])targets.push({name:'gate-square-'+x+'-'+y,x:MP(x),y:MP(y),rank:2});
  if(ch===4)for(const [x,y] of [[40,55],[40,45],[40,8],[58,20],[20,15]])targets.push({name:'forest-route-'+x+'-'+y,x:MP(x),y:MP(y),rank:1});
  if(ch===5)for(const [a,b,gaps] of CY.walls)for(const [l,r] of gaps)targets.push({name:'door-'+a+'-'+l,x:MP((l+r)/2),y:MP((a+b)/2),rank:3});
  let root=-1,best=Infinity;for(let i=0;i<size;i++)if(free(i)){const d=Math.hypot(i%MW-W.start.x/TS,(i/MW|0)-W.start.y/TS);if(d<best){best=d;root=i}}road[root]=3;
  // One BFS tree gives deterministic reachable approaches without touching collision data.
  const parent=new Int32Array(size).fill(-2),q=[root];parent[root]=-1;
  for(let n=0;n<q.length;n++){const i=q[n];for(const [dx,dy] of [[0,-1],[-1,0],[1,0],[0,1]]){const k=at(i%MW+dx,(i/MW|0)+dy);if(free(k)&&parent[k]===-2){parent[k]=i;q.push(k)}}}
  for(const t of targets){let end=-1,distance=Infinity;for(const i of q){const d=Math.hypot(i%MW+.5-t.x,(i/MW|0)+.5-t.y);if(d<distance){distance=d;end=i}}
    const route=[];for(let i=end;i>=0;i=parent[i])route.push(i);
    // Connect only until the nearest existing route, retaining full path metadata for tests.
    let connected=false;for(let n=0;n<route.length;n++){const i=route[n];if(road[i])connected=true;if(connected)continue;const next=route[n+1]??i;direction[i]=Math.abs(next-i)===MW?1:0;
      for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){if(dx*dx+dy*dy>(t.rank>1?1.1:0))continue;const k=at(i%MW+dx,(i/MW|0)+dy);if(!free(k))continue;road[k]=Math.max(road[k],t.rank);if(wet(k))continue;
        if(ch===4)rows[k]=1;else if(ch===2||ch===9)rows[k]=0;else if(ch===3&&W.region(k%MW,k/MW|0)==='city')rows[k]=value(k)===51?1:0;}}
    paths.push({name:t.name,approach:end,distance,tiles:route});
  }
  // Mark the full inherited path as a visual way even where it passes an existing road.
  for(const t of paths)for(const i of t.tiles){road[i]=Math.max(road[i],1);if(!wet(i)){if(ch===4)rows[i]=1;else if(ch===2||ch===9)rows[i]=0;else if(ch===3&&W.region(i%MW,i/MW|0)==='city')rows[i]=value(i)===51?1:0}}
  // A transition is always a locally appropriate neutral material; puddles are explicit exceptions.
  const neutral=i=>ch===4?1:ch===3?0:ch===5?({kancelaria:2,sala:1,skarbiec:1,tron:1})[W.region(i%MW,i/MW|0)]??0:0;
  const allowedPair=(a,b)=>a===b||ch===2&&([a,b].includes(0)||[a,b].includes(2)&&[a,b].includes(7))||ch===9||ch===5||ch===4&&([a,b].includes(1)||[a,b].includes(6)&&([a,b].includes(4)||[a,b].includes(5)))||ch===3&&([a,b].includes(0)||[a,b].includes(1)&&[a,b].includes(6));
  for(let pass=0;pass<8;pass++){
    for(let y=0;y<MH;y++)for(let x=0;x<MW;x++){const i=at(x,y);if(!free(i)||wet(i))continue;for(const [dx,dy] of [[1,0],[0,1]]){const k=at(x+dx,y+dy);if(!free(k)||wet(k)||allowedPair(rows[i],rows[k]))continue;rows[i]=neutral(i);}}
    for(let y=0;y<=MH-8;y++)for(let x=0;x<=MW-8;x++){const ids=[];for(let dy=0;dy<8;dy++)for(let dx=0;dx<8;dx++){const i=at(x+dx,y+dy);if(free(i)&&!road[i]&&!wet(i))ids.push(i)}const counts={};for(const i of ids)counts[rows[i]]=(counts[rows[i]]||0)+1;if(Object.keys(counts).length>3){const material=Object.keys(counts).map(Number).filter(v=>!([3].includes(v)&&ch===5)).sort((a,b)=>counts[a]-counts[b])[0];for(const i of ids)if(rows[i]===material)rows[i]=neutral(i)}}
    const seen=new Set();for(let i=0;i<size;i++){if(!free(i)||road[i]||seen.has(i)||wet(i))continue;const q=[i],m=rows[i];seen.add(i);for(let n=0;n<q.length;n++){const j=q[n];for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=at(j%MW+dx,(j/MW|0)+dy);if(free(k)&&!road[k]&&!wet(k)&&rows[k]===m&&!seen.has(k)){seen.add(k);q.push(k)}}}if(q.length<6)for(const k of q){rows[k]=neutral(k);if(m===rows[k])road[k]=1}}
  }
  const allowed=[];for(let a=0;a<8;a++)for(let b=a;b<8;b++)if(allowedPair(a,b))allowed.push(a+':'+b);
  return W.groundPlan={rows,road,zone,direction,paths,exceptions:[],allowed,wet:Array.from({length:size},(_,i)=>wet(i)?1:0)};
}

// Lines form complete, symmetric compositions; their direction comes from neighbours, never RNG.
function groundPatterns(ch,p){const bits=new Uint8Array(MW*MH),rail=new Uint8Array(MW*MH),point=(x,y)=>x>=0&&y>=0&&x<MW&&y<MH?y*MW+x:-1;
  const free=i=>i>=0&&(!SOLID.has(map[i])||map[i]===31),put=(x,y)=>{const i=point(x,y);if(free(i))bits[i]=1};
  const frame=(a,b,c,d)=>{a=Math.round(MP(a));b=Math.round(MP(b));c=Math.round(MP(c));d=Math.round(MP(d));for(let x=a;x<=c;x++){put(x,b);put(x,d)}for(let y=b;y<=d;y++){put(a,y);put(c,y)}};
  if(ch===2){frame(5,10,32,37);for(let x=Math.round(MP(5));x<=Math.round(MP(32));x++)put(x,Math.round(MP(24)));}
  if(ch===3){frame(25,26,38,33);frame(23,7,40,12);for(let y=Math.round(MP(24));y<=Math.round(MP(53));y++)put(Math.round(MP(31.5)),y);for(let y=Math.round(MP(6));y<=Math.round(MP(13));y++)put(Math.round(MP(31.5)),y);}
  if(ch===5){frame(14,36,31,43);frame(48,36,65,43);frame(15,25,64,31);frame(27,4,52,9);}
  const mask=(a,x,y)=>(a[point(x,y-1)]?1:0)|(a[point(x+1,y)]?2:0)|(a[point(x,y+1)]?4:0)|(a[point(x-1,y)]?8:0);
  const col=m=>m===5||m===1||m===4?1:m===10||m===2||m===8?0:m===3?3:m===6?4:m===12?5:m===9?6:2;
  if(ch===2){const mark=(x,y)=>{const i=point(x,y);if(free(i)&&W.region(x,y)==='mine')rail[i]=1};for(let x=Math.round(MP(43));x<=Math.round(MP(59));x++)mark(x,Math.round(MP(48)));for(let y=Math.round(MP(44));y<=Math.round(MP(50));y++)mark(Math.round(MP(50)),y);}
  p.pattern=new Uint8Array(MW*MH);p.patternColumns=new Uint8Array(MW*MH).fill(255);p.lineMasks=new Uint8Array(MW*MH);p.railMasks=new Uint8Array(MW*MH);
  for(let y=0;y<MH;y++)for(let x=0;x<MW;x++){const i=point(x,y);if(bits[i]){const m=mask(bits,x,y);p.pattern[i]=1;p.lineMasks[i]=m;p.patternColumns[i]=0;p.rows[i]=1;p.road[i]=Math.max(2,p.road[i])}if(rail[i]){const m=mask(rail,x,y);p.pattern[i]=2;p.railMasks[i]=m;p.patternColumns[i]=col(m);p.rows[i]=7;p.road[i]=2}}
  return p;
}

function planGround(ch){if(ch!==1)return groundPatterns(ch,planOtherGround(ch));if(W.groundPlan)return W.groundPlan;if(W.seed===undefined)W.seed=1349;
  const size=MW*MH,rows=new Uint8Array(size).fill(255),road=new Uint8Array(size),zone=new Uint8Array(size),direction=new Uint8Array(size),paths=[];
  const free=i=>i>=0&&i<size&&!SOLID.has(map[i]),at=(x,y)=>x>=0&&y>=0&&x<MW&&y<MH?y*MW+x:-1;
  const near=(i,fn)=>{const x=i%MW,y=i/MW|0;return [[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>fn(at(x+dx,y+dy)))};
  const interior=i=>(map[i]===31?W.under[i]:map[i])===43;
  for(let i=0;i<size;i++){if(!free(i))continue;const x=i%MW,y=i/MW|0,X=GTX[x],Y=GTY[y];
    const yard=W.PROPS.some(p=>p.fire&&Math.hypot(p.x-x,p.y-y)<4.5),edge=Math.min(x,y,MW-1-x,MH-1-y);
    if(interior(i)){rows[i]=3;zone[i]=4}
    else if(yard){rows[i]=1;zone[i]=3}
    else if(X>=42&&X<=61&&Y>=14&&Y<=24){rows[i]=6;zone[i]=5}
    else if(edge<8||Math.sin(x*.055)+Math.cos(y*.07)>.3){rows[i]=2;zone[i]=1}
    else{rows[i]=6;zone[i]=2}
    const vertical=Math.abs(x-MP(31.5))<1.45,horizontal=Math.abs(y-MP(28.5))<1.45;
    const plaza=Math.abs(x-MP(30))<=4.5&&Math.abs(y-MP(27.5))<=3.5;
    if(!interior(i)&&(vertical||horizontal||plaza)){road[i]=3;rows[i]=4;zone[i]=6;direction[i]=vertical?1:0}
  }
  // All destinations come from existing interactions/doors; BFS finds an approach to the road.
  const targets=[...W.npcs.filter(n=>!n.lure).map(n=>({name:n.id,x:n.x/TS,y:n.y/TS,rank:1})),...W.shrines.map((n,i)=>({name:'shrine'+i,x:n.x/TS,y:n.y/TS,rank:1}))];
  if(W.crypt)targets.push({name:'crypt',x:W.crypt.x/TS,y:W.crypt.y/TS,rank:1});
  for(const [x,y] of [[10,12],[22,11],[42,12],[54,12],[10,37],[21,40],[42,40],[54,42],[17,20]])targets.push({name:'door-'+x+'-'+y,x:MP(x),y:MP(y),rank:2});
  targets.push({name:'boss-barn',x:MP(12),y:MP(20),rank:2});
  for(const t of targets){let start=-1,best=Infinity;for(let i=0;i<size;i++)if(free(i)){const d=Math.hypot(i%MW+.5-t.x,(i/MW|0)+.5-t.y);if(d<best){best=d;start=i}}
    const parent=new Int32Array(size).fill(-2),q=[start];parent[start]=-1;let end=-1;
    for(let n=0;n<q.length;n++){const i=q[n];if(road[i]){end=i;break}const x=i%MW,y=i/MW|0;
      for(const [dx,dy] of (Math.abs(x-MP(31))>Math.abs(y-MP(28))?[[1,0],[-1,0],[0,1],[0,-1]]:[[0,1],[0,-1],[1,0],[-1,0]])){const k=at(x+dx,y+dy);if(free(k)&&parent[k]===-2){parent[k]=i;q.push(k)}}}
    if(end<0)throw Error('Ground route missing: '+t.name);
    const route=[];for(let i=end;i>=0;i=parent[i])route.push(i);
    for(let n=0;n<route.length;n++){const i=route[n],x=i%MW,y=i/MW|0,next=route[n+1]??i,dir=Math.abs(next-i)===MW?1:0;
      for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){if(dx*dx+dy*dy>(t.rank===2?1.1:0))continue;const k=at(x+dx,y+dy);if(!free(k))continue;road[k]=Math.max(road[k],t.rank);direction[k]=dir;if(!interior(k)&&rows[k]!==4){rows[k]=t.rank===2?4:6;zone[k]=6}}}
    paths.push({name:t.name,approach:start,distance:best,tiles:route});
  }
  // Earth separates meadow from ash, house floors and paving. This is a visual transition band.
  const copy=rows.slice();for(let i=0;i<size;i++)if(free(i)&&!road[i]&&copy[i]===2&&near(i,k=>k>=0&&[1,3,4].includes(copy[k]))){rows[i]=6;zone[i]=2}
  // Small patches merge into their dominant neighbour; interior floors are architectural exceptions.
  for(let pass=0;pass<4;pass++){const seen=new Uint8Array(size);for(let i=0;i<size;i++){if(!free(i)||road[i]||seen[i])continue;const material=rows[i],q=[i],counts={};seen[i]=1;
    for(let n=0;n<q.length;n++){const j=q[n],x=j%MW,y=j/MW|0;for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=at(x+dx,y+dy);if(!free(k)||road[k])continue;if(rows[k]===material){if(!seen[k]){seen[k]=1;q.push(k)}}else counts[rows[k]]=(counts[rows[k]]||0)+1}}
    if(q.length<6&&material!==3){const candidates=Object.keys(counts).map(Number).filter(k=>k!==3);if(candidates.length){const m=candidates.sort((a,b)=>counts[b]-counts[a])[0];for(const j of q)rows[j]=m}else for(const j of q)road[j]=1}}
    for(let y=0;y<=MH-8;y++)for(let x=0;x<=MW-8;x++){const counts={};for(let dy=0;dy<8;dy++)for(let dx=0;dx<8;dx++){const i=at(x+dx,y+dy);if(free(i)&&!road[i])counts[rows[i]]=(counts[rows[i]]||0)+1}if(Object.keys(counts).length>3){const material=[1,2].filter(k=>counts[k]).sort((a,b)=>counts[a]-counts[b])[0];if(material!==undefined)for(let dy=0;dy<8;dy++)for(let dx=0;dx<8;dx++){const i=at(x+dx,y+dy);if(!road[i]&&rows[i]===material)rows[i]=6}}}
  }
  // Final constrained cleanup: earth is the shared transition material.
  for(let pass=0;pass<8;pass++){
    for(let i=0;i<size;i++)if(free(i)){
      if(rows[i]===2&&near(i,k=>free(k)&&[1,3,4].includes(rows[k]))||rows[i]===1&&near(i,k=>free(k)&&[3,4].includes(rows[k])))rows[i]=6;
    }
    for(let y=0;y<=MH-8;y++)for(let x=0;x<=MW-8;x++){const ids=[];for(let dy=0;dy<8;dy++)for(let dx=0;dx<8;dx++){const i=at(x+dx,y+dy);if(free(i)&&!road[i])ids.push(i)}if(new Set(ids.map(i=>rows[i])).size>3)for(const i of ids)if(rows[i]===1)rows[i]=6}
    const seen=new Set();for(let i=0;i<size;i++){if(!free(i)||road[i]||seen.has(i))continue;const q=[i],material=rows[i];seen.add(i);for(let n=0;n<q.length;n++){const j=q[n];for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=at(j%MW+dx,(j/MW|0)+dy);if(free(k)&&!road[k]&&rows[k]===material&&!seen.has(k)){seen.add(k);q.push(k)}}}if(q.length<6&&material!==3)for(const k of q){rows[k]=6;if(material===6)road[k]=1}}
  }
  if(W.crypt){const stairs=W.PROPS.find(p=>p.k==='crypt_stairs'),cx=Math.floor(stairs?stairs.x:W.crypt.x/TS),cy=Math.floor(stairs?stairs.y:W.crypt.y/TS);for(let y=cy-5;y<cy;y++)for(let x=cx-4;x<=cx+4;x++){const i=at(x,y);if(free(i)&&!interior(i)&&rows[i]===4){rows[i]=6;road[i]=0}}for(let y=cy;y<=cy+4;y++)for(let x=cx-3;x<=cx+3;x++){const i=at(x,y);if(free(i)&&!interior(i)){rows[i]=4;road[i]=2;zone[i]=6}}}
  W.groundPlan={rows,road,zone,direction,paths,exceptions:[3],allowed:['1:1','1:6','2:2','2:6','3:3','3:6','3:4','4:4','4:6','6:6']};return W.groundPlan;
}

function groundHash(x,y){let n=Math.imul(x+31,374761393)^Math.imul(y+73,668265263)^(W.seed||CH*977);n=Math.imul(n^(n>>>13),1274126177);return(n^(n>>>16))>>>0}
function naturalGround(img,row){const rows={br_ground:[0,1,2,4,6,7],dm_floor:[0,2],zl_ground:[0,2,3,5,7],cz_ground:[0,1,2,3,6],cy_ground:[0,5]};return(rows[img.nbKey]||[]).includes(row)}
function groundPadded(img){if(!img.nbPadded){const S=img.width/8,P=S/16,I=S-2*P,c=canvas(S*8,S*8),g=c.getContext('2d');for(let y=0;y<8;y++)for(let x=0;x<8;x++){const X=x*S,Y=y*S;g.drawImage(img,X,Y,S,S,X+P,Y+P,I,I);for(const [sx,sy,sw,sh,dx,dy,dw,dh] of [[0,0,1,S,0,P,P,I],[S-1,0,1,S,S-P,P,P,I],[0,0,S,1,P,0,I,P],[0,S-1,S,1,P,S-P,I,P],[0,0,1,1,0,0,P,P],[S-1,0,1,1,S-P,0,P,P],[0,S-1,1,1,0,S-P,P,P],[S-1,S-1,1,1,S-P,S-P,P,P]])g.drawImage(img,X+sx,Y+sy,sw,sh,X+dx,Y+dy,dw,dh)}img.nbPadded=c}return img.nbPadded}
function groundCoarse(img){if(!img.nbCoarse){const c=canvas(128,128);c.getContext('2d').drawImage(img,0,0,128,128);img.nbCoarse=c}return img.nbCoarse}
function groundTile(g,img,col,row,tx,ty){const n=groundHash(tx,ty),plan=W.groundPlan,j=ty*MW+tx;let materialCell=j;
  // A prop's collision tile has the same floor as its surroundings, not a separate old atlas patch.
  if(plan&&plan.rows[j]===255&&map[j]===31){let best=Infinity;for(let dy=-3;dy<=3;dy++)for(let dx=-3;dx<=3;dx++){const x=tx+dx,y=ty+dy,k=y*MW+x;if(x<0||y<0||x>=MW||y>=MH||plan.rows[k]===255)continue;const score=dx*dx+dy*dy+((map[k]===31?W.under[k]:map[k])===W.under[j]?0:8);if(score<best){best=score;materialCell=k}}}
  const planned=plan&&plan.rows[materialCell]!==255;
  if(planned){row=plan.rows[materialCell];col=n%100<55?0:1+n%5}const natural=naturalGround(img,row)&&!(plan&&(CH===1&&[3,4].includes(row)||CH===4&&[1,7].includes(row)||CH!==1&&CH!==4)),variant=natural?n&7:0;const shore=col>=4&&((img.nbKey==='br_ground'||img.nbKey==='dm_floor')&&row===5||img.nbKey==='zl_ground'&&row===4||img.nbKey==='cz_ground'&&(row===4||row===5));let flags=natural||shore||img.nbKey==='cz_ground'&&row===7?1:0;
  if(planned){flags|=65;if(CH===3&&row===1){const code=(x,y)=>{const k=y*MW+x;return k>=0&&k<map.length&&(map[k]===51||map[k]===31&&W.under[k]===51)};col=code(tx,ty-1)||code(tx,ty+1)?1:0}if(CH===4&&row===1)col=W.region(tx,ty)==='camp'?1:n%100<55?1:2+n%4;if(CH===5&&row===2)col=0;if(CH===5&&row===4)col=0;}
  if(CH===3&&row===1&&!(plan&&plan.pattern&&plan.pattern[j]===1)){row=0;col=0;flags|=65;}
  if(img.nbKey==='cy_ground'&&row===1)col=[0,1,2,5,6,7][n%6];
  if(img.nbKey==='cy_ground'&&row===3){col=0;const carpet=(x,y)=>{let t=tileAt(x,y);if(t===31)t=W.under[y*MW+x];return t===73};if(!carpet(tx-1,ty))flags|=2;if(!carpet(tx+1,ty))flags|=4;if(!carpet(tx,ty-1))flags|=8;if(!carpet(tx,ty+1))flags|=16;flags|=32}
  let data=g.canvas.nbGround;if(!data)data=g.canvas.nbGround={image:img,cells:new Uint8Array(MW*MH*4)};const i=(ty*MW+tx)*4;let orientation=variant;if(plan&&plan.patternColumns&&plan.patternColumns[j]!==255){col=plan.patternColumns[j];flags&=~65;orientation=plan.pattern[j]===1?plan.lineMasks[j]*8:0;if(plan.pattern[j]===1)row=0;}data.cells.set([col+1,row,orientation,flags],i);
  g.save();g.translate(tx*16+8,ty*16+8);g.rotate((variant&3)*Math.PI/2);if(variant&4)g.scale(-1,1);g.drawImage(groundCoarse(img),col*16,row*16,16,16,-8,-8,16,16);g.restore();
}
// Keep one small atlas and tile index map instead of allocating a 6656 x 5824 texture per chapter.
// CC0 floors: full-resolution repeating textures; IDs change appearance only.
const CC0_FLOORS={1:{names:['dirt2','cracks','charcoal','ground1'],tint:[1,.97,.92]},2:{names:['ground1','blackrock','charcoal'],tint:[.84,.88,.96]},3:{names:['zl_place','zl_street'],tint:[1,.96,.88]},4:{names:['mud','dirt3','leaves','darkrock'],tint:[.9,.96,.88]},5:{names:['ground2','blackrock','ground1'],tint:[.68,.69,.74]},9:{names:['ground2','ground1'],tint:[.73,.75,.81]}};
function cc0FloorCells(info,ch){const cells=info.cells.slice(),plan=W.groundPlan;if(!plan)return cells;
 const burns=W.PROPS.filter(p=>p.fire||/debris_fire|burnt_hay|furnace|brazier/.test(p.k||''));
 for(let i=0;i<MW*MH;i++){const a=i*4,row=cells[a+1],flags=cells[a+3],x=i%MW,y=i/MW|0;if(!cells[a]||!(flags&64))continue;let id=-1;
  if(ch===1&&![3,5].includes(row)){id=row===4?3:row===1?1:0;if(row!==4&&burns.some(p=>Math.hypot(p.x-x-.5,p.y-y-.5)<2.1))id=2;}
  if(ch===2&&![1,5,7].includes(row)){id=row===2&&[[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>SOLID.has(tileAt(x+dx,y+dy)))?1:0;if(burns.some(p=>Math.hypot(p.x-x-.5,p.y-y-.5)<2))id=2;}
  if(ch===3&&![1,4].includes(row))id=plan.road[i]||row===3?1:0;
  if(ch===4&&![4,5,7].includes(row)){const r=W.region(x,y);id=r==='camp'?0:row===1?1:(r==='hill'||r==='stones')?3:r==='forest'?2:0;}
  if(ch===5&&![3,4,6,7].includes(row))id=row===2?2:row===5?1:0;
  if(ch===9&&![1,5,7].includes(row))id=row===2?1:0;
  if(id>=0)cells[a+2]=(cells[a+2]%8)+128+id*8;
 }return cells;
}
// Remove only the former base colour, keeping its baked shadows and ground marks.
function cc0FloorOverlay(tex,info,cells){const c=tex.image,g=c.getContext('2d'),d=g.getImageData(0,0,c.width,c.height),ref=canvas(16,16),r=ref.getContext('2d'),coarseImg=groundCoarse(info.image);
 for(let i=0;i<MW*MH;i++){const a=i*4;if(cells[a+2]<128)continue;const tx=i%MW,ty=i/MW|0,v=info.cells[a+2]%8;r.clearRect(0,0,16,16);r.save();r.translate(8,8);r.rotate((v&3)*Math.PI/2);if(v&4)r.scale(-1,1);r.drawImage(coarseImg,(info.cells[a]-1)*16,info.cells[a+1]*16,16,16,-8,-8,16,16);r.restore();const base=r.getImageData(0,0,16,16).data;
  for(let y=0;y<16;y++)for(let x=0;x<16;x++){const j=((ty*16+y)*c.width+tx*16+x)*4,k=(y*16+x)*4;for(let q=0;q<3;q++)d.data[j+q]=Math.round(Math.min(2,d.data[j+q]/Math.max(8,base[k+q]))*127.5);}
 }g.putImageData(d,0,0);tex.needsUpdate=true;
}
function groundMaterial(m){const info=m.map&&m.map.userData&&m.map.userData.ground;if(!info)return m;
  const groundChapter=CH,cc0=CC0_FLOORS[groundChapter],cc0Count=cc0?cc0.names.length:0,compactSamplers=renderer.capabilities.maxTextures<cc0Count+5;
  for(let i=0;i<cc0Count;i++){const t=new THREE.Texture(IMGS['cc0_'+cc0.names[i]]);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.generateMipmaps=true;t.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());t.needsUpdate=true;m['cc0Texture'+i]=t;}
  const cc0Cells=cc0?cc0FloorCells(info,groundChapter):info.cells;if(cc0)cc0FloorOverlay(m.map,info,cc0Cells);
  const cc0Uniforms=cc0?cc0.names.map((_,i)=>'uniform sampler2D nbCC'+i+';').join('\n'):'';
  const cc0Sample=cc0?cc0.names.map((_,i)=>'if(id<'+(i+.5).toFixed(1)+'){\n#ifdef NB_STABLE_GRAD\nreturn texture2DGradEXT(nbCC'+i+',world/12.,nbDx/12.,nbDy/12.).rgb;\n#else\nreturn texture2D(nbCC'+i+',world/12.).rgb;\n#endif\n}').join('\n'):'';
  m.bumpMap=null;m.bumpScale=0;delete m.userData.surfaceDetail;
  m.groundAtlas=surfaceTex(groundPadded(info.image));m.groundCoarse=surfaceTex(groundCoarse(info.image));
  // Stable derivatives across tile-index jumps; retain minification without neighbouring-cell bleed.
  m.groundCoarse.generateMipmaps=false;m.groundCoarse.minFilter=THREE.LinearFilter;m.groundCoarse.anisotropy=1;m.groundCoarse.needsUpdate=true;
  const groundGrad=renderer.capabilities.isWebGL2||renderer.extensions.has('EXT_shader_texture_lod');
  m.extensions={...(m.extensions||{}),derivatives:true,shaderTextureLOD:groundGrad};
  if(!groundGrad)for(const tex of [m.groundAtlas,m.groundCoarse]){tex.generateMipmaps=false;tex.minFilter=THREE.LinearFilter;tex.anisotropy=1;tex.needsUpdate=true;}m.groundLayout=new THREE.DataTexture(cc0Cells,MW,MH,THREE.RGBAFormat);m.groundLayout.magFilter=m.groundLayout.minFilter=THREE.NearestFilter;m.groundLayout.needsUpdate=true;
  m.groundTones=Array.from({length:8},(_,row)=>{const c=groundCoarse(info.image),d=c.getContext('2d').getImageData(0,row*16,128,16).data,v=new THREE.Vector3();for(let i=0;i<d.length;i+=4){v.x+=d[i];v.y+=d[i+1];v.z+=d[i+2]}return v.multiplyScalar(1/(2048*255))});m.groundLite={value:coarse||SETT.quality==='low'?1:0};m.onBeforeCompile=sh=>{for(let i=0;i<cc0Count;i++)sh.uniforms['nbCC'+i]={value:m['cc0Texture'+i]};sh.uniforms.nbCCTint={value:new THREE.Vector3(...(cc0?cc0.tint:[1,1,1]))};sh.uniforms.nbArchitecture={value:[2,3,5].includes(groundChapter)?1:0};sh.uniforms.nbLite=m.groundLite;sh.uniforms.nbTones={value:m.groundTones};sh.uniforms.nbAtlas={value:m.groundAtlas};sh.uniforms.nbCoarse={value:m.groundCoarse};sh.uniforms.nbLayout={value:m.groundLayout};sh.uniforms.nbGrid={value:new THREE.Vector2(MW,MH)};
    sh.fragmentShader=sh.fragmentShader.replace('#include <common>',`#include <common>
${groundGrad?'#define NB_STABLE_GRAD 1':''}
uniform vec3 nbTones[8];uniform float nbLite;uniform float nbArchitecture;
vec3 nbTone(float row){vec3 c=nbTones[0];for(int i=1;i<8;i++)if(abs(row-float(i))<.5)c=nbTones[i];return c;}uniform sampler2D nbAtlas;uniform sampler2D nbCoarse;uniform sampler2D nbLayout;uniform vec2 nbGrid;
vec4 nbCell(vec2 cell){return floor(texture2D(nbLayout,(clamp(cell,vec2(0.),nbGrid-1.)+.5)/nbGrid)*255.+.5);}
vec2 nbUV(vec4 cell,vec2 uv){float v=mod(cell.b,8.); float rot=mod(v,4.);if(rot<.5){}else if(rot<1.5)uv=vec2(uv.y,1.-uv.x);else if(rot<2.5)uv=1.-uv;else uv=vec2(1.-uv.y,uv.x);if(v>=4.)uv.x=1.-uv.x;uv=(4.+56.*clamp(uv,vec2(.02),vec2(.98)))/64.;return vec2((cell.r-1.+uv.x)/8.,1.-(cell.g+uv.y)/8.);}
vec2 nbReference(vec4 cell,vec2 uv){uv=clamp(uv,vec2(.03125),vec2(.96875));vec2 p=nbUV(cell,uv);return vec2((cell.r-1.+(64.*(p.x*8.-cell.r+1.)-4.)/56.)/8.,1.-(cell.g+(64.*((1.-p.y)*8.-cell.g)-4.)/56.)/8.);}
${cc0Uniforms}
uniform vec3 nbCCTint;
vec2 nbWorld,nbDx,nbDy;
vec3 nbCCRead(float id,vec2 world){${cc0Sample}return vec3(1.);}
vec3 nbRead(sampler2D atlas,vec4 cell,vec2 local){if(cell.b>=128.)return nbCCRead(floor((cell.b-128.)/8.),nbWorld)*nbCCTint;vec2 uv=nbUV(cell,local);
#ifdef NB_STABLE_GRAD
vec2 gx=nbUV(cell,vec2(.5)+nbDx)-nbUV(cell,vec2(.5)),gy=nbUV(cell,vec2(.5)+nbDy)-nbUV(cell,vec2(.5));float cap=min(1.,4./max(1024.*max(length(gx),length(gy)),.001));return texture2DGradEXT(atlas,uv,gx*cap,gy*cap).rgb;
#else
return texture2D(atlas,uv).rgb;
#endif
}
float nbFlag(float flags,float bit){return mod(floor(flags/bit),2.);}
vec3 nbNeighbor(vec3 color,vec2 pos,vec2 local,vec2 dir,float distanceToEdge,vec4 cell){if(distanceToEdge>(nbFlag(cell.a,64.)>.5?.48:.19)||nbFlag(cell.a,1.)<.5)return color;vec4 other=nbCell(pos+dir);if(other.r<.5||nbFlag(other.a,1.)<.5)return color;if(cell.b>=128.&&other.b>=128.&&floor((cell.b-128.)/8.)==floor((other.b-128.)/8.))return color;float irregular=nbFlag(cell.a,64.)>.5?.30+.12*sin((pos.x+local.x)*3.1+(pos.y+local.y)*2.7)*sin((pos.y+local.y)*4.3):(other.g==cell.g?.10:.16)+.025*sin((pos.x+local.x)*8.3+(pos.y+local.y)*5.7);float amount=(1.-smoothstep(0.,irregular,distanceToEdge))*.5;return mix(color,nbRead(nbAtlas,other,local-dir),amount);}
`);
    sh.fragmentShader=sh.fragmentShader.replace('#include <map_fragment>',`#ifdef USE_MAP
vec4 sampledDiffuseColor=texture2D(map,vUv);vec2 nbPos=vec2(vUv.x,1.-vUv.y)*nbGrid,nbTile=floor(nbPos),nbLocal=fract(nbPos);vec4 cell=nbCell(nbTile);nbDx=dFdx(nbPos);nbDy=dFdy(nbPos);nbWorld=nbPos;
if(cell.r>.5){
if(cell.b<128.&&nbLite<.5&&nbFlag(cell.a,64.)>.5&&cell.g!=3.&&cell.g!=1.){vec2 warp=nbPos+.64*vec2(sin(nbPos.y*1.7+sin(nbPos.x*.8)),sin(nbPos.x*1.5+sin(nbPos.y*.9)));vec4 next=nbCell(floor(warp));if(next.r>.5&&nbFlag(next.a,64.)>.5&&next.g!=cell.g&&next.g!=3.&&next.g!=1.){cell=next;nbTile=floor(warp);nbLocal=fract(warp);}}
vec2 uv=nbUV(cell,nbLocal);vec3 detail=nbRead(nbAtlas,cell,nbLocal),coarse=${compactSamplers?'nbTone(cell.g)':'texture2D(nbCoarse,nbReference(cell,nbLocal)).rgb'};
if(nbLite<.5){
detail=nbNeighbor(detail,nbTile,nbLocal,vec2(-1.,0.),nbLocal.x,cell);detail=nbNeighbor(detail,nbTile,nbLocal,vec2(1.,0.),1.-nbLocal.x,cell);detail=nbNeighbor(detail,nbTile,nbLocal,vec2(0.,-1.),nbLocal.y,cell);detail=nbNeighbor(detail,nbTile,nbLocal,vec2(0.,1.),1.-nbLocal.y,cell);
}
if(nbLite>=.5&&cell.b>=128.){vec2 ed=min(nbLocal,1.-nbLocal);vec2 dir=ed.x<ed.y?vec2(nbLocal.x<.5?-1.:1.,0.):vec2(0.,nbLocal.y<.5?-1.:1.);detail=nbNeighbor(detail,nbTile,nbLocal,dir,min(ed.x,ed.y),cell);}
vec3 ratio=cell.b>=128.?clamp(sampledDiffuseColor.rgb*2.,vec3(.05),vec3(1.3)):clamp(sampledDiffuseColor.rgb/max(coarse,vec3(.025)),vec3(.7),vec3(1.15));vec3 result=detail*ratio;float decal=smoothstep(.18,.5,length(sampledDiffuseColor.rgb-coarse));if(cell.b<128.)result=mix(result,sampledDiffuseColor.rgb,decal);
if(nbFlag(cell.a,32.)>.5){float edge=1.;if(nbFlag(cell.a,2.)>.5)edge=min(edge,nbLocal.x);if(nbFlag(cell.a,4.)>.5)edge=min(edge,1.-nbLocal.x);if(nbFlag(cell.a,8.)>.5)edge=min(edge,nbLocal.y);if(nbFlag(cell.a,16.)>.5)edge=min(edge,1.-nbLocal.y);float trim=smoothstep(.02,.035,edge)*(1.-smoothstep(.075,.09,edge));result=mix(result,vec3(.56,.35,.105)*(.86+.14*sin((nbPos.x+nbPos.y)*80.)),trim);}
if(nbArchitecture>.5&&cell.b>=8.&&cell.b<128.){float mask=floor(cell.b/8.);vec2 q=nbLocal-.5;float d=2.;
if(nbFlag(mask,1.)>.5)d=min(d,length(vec2(q.x,max(q.y,0.))));if(nbFlag(mask,4.)>.5)d=min(d,length(vec2(q.x,min(q.y,0.))));
if(nbFlag(mask,8.)>.5)d=min(d,length(vec2(max(q.x,0.),q.y)));if(nbFlag(mask,2.)>.5)d=min(d,length(vec2(min(q.x,0.),q.y)));
vec3 base=nbCCRead(0.,nbWorld)*nbCCTint*ratio;float band=1.-smoothstep(.19,.23,d);result=mix(base,base*.94,band);float line=1.-smoothstep(.018,.032,abs(d-.14));result=mix(result,vec3(.65,.45,.21)*(.92+.08*sin((nbWorld.x+nbWorld.y)*30.)),line);}
sampledDiffuseColor.rgb=result;}
sampledDiffuseColor=mapTexelToLinear(sampledDiffuseColor);diffuseColor*=sampledDiffuseColor;
#endif`)};m.customProgramCacheKey=()=> 'nightbrand-ground-cc0-v2-'+groundChapter+'-'+compactSamplers;return m}
function groundDetails(g){const plan=W.groundPlan;if(!plan)return;for(const p of W.PROPS){const x=Math.floor(p.x),y=Math.floor(p.y),i=y*MW+x;if(plan.road[i])continue;const fire=p.fire||/furnace|brazier/.test(p.k),blood=/gallows|covered_corpses|beggar_bodies/.test(p.k),bones=/bones|sarcophagus/.test(p.k);if(!fire&&!blood&&!bones)continue;const key=fire?'scorch':blood?'pool':'bones',stamp=canvas(40,40),q=stamp.getContext('2d');q.drawImage(DEC[key][groundHash(x,y)%4],0,0,40,40);q.globalCompositeOperation='destination-in';const mask=q.createRadialGradient(20,20,4,20,20,20);mask.addColorStop(0,'#fff');mask.addColorStop(1,'transparent');q.fillStyle=mask;q.fillRect(0,0,40,40);g.save();g.globalAlpha=blood?.28:.18;g.drawImage(stamp,p.x*16-20,p.y*16-20);g.restore()}
  for(let y=1;y<MH-1;y++)for(let x=1;x<MW-1;x++){const i=y*MW+x;if(plan.road[i]||plan.rows[i]===255||groundHash(x,y)%67)continue;const wall=[[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>SOLID.has(map[(y+dy)*MW+x+dx]));if(!wall)continue;g.save();g.globalAlpha=.12;g.drawImage(DEC.crack[groundHash(y,x)%4],x*16-4,y*16-4,24,24);g.restore()}}

function finishGround(c){const noise=canvas(64,64),g=noise.getContext('2d'),d=g.createImageData(64,64);for(let y=0;y<64;y++)for(let x=0;x<64;x++){const i=(y*64+x)*4,n=.5+.24*Math.sin(x*.17+CH)*Math.cos(y*.19)+.24*Math.sin((x+y)*.11+CH*2);d.data[i]=10;d.data[i+1]=12;d.data[i+2]=17;d.data[i+3]=12+n*30}g.putImageData(d,0,0);const fg=c.getContext('2d');fg.save();fg.globalCompositeOperation='source-atop';fg.imageSmoothingEnabled=true;fg.drawImage(noise,0,0,c.width,c.height);fg.restore();const info=c.nbGround;if(info&&!W.groundPlan){const random=rng((W.seed||CH*991)^0x54d2);for(let k=0;k<96;k++){const x=(random()*MW)|0,y=(random()*MH)|0;if(!(info.cells[(y*MW+x)*4+3]&1))continue;const images=random()<.65?DEC.crack:DEC.scorch;if(!images)continue;fg.save();fg.globalAlpha=.10+random()*.08;fg.translate(x*16+8,y*16+8);fg.rotate(random()*Math.PI*2);const size=9+random()*11;fg.drawImage(images[(random()*4)|0],-size/2,-size/2,size,size);fg.restore()}}}
function tileTex(draw,w=16,h=16,seed=1){const c=canvas(w,h);const g=c.getContext('2d');const r=rng(seed);draw(g,r);return texFrom(c,true)}

const glowC=(col)=>{const c=canvas(16,16),g=c.getContext('2d');const gr=g.createRadialGradient(8,8,0,8,8,8);gr.addColorStop(0,'#fff');gr.addColorStop(.25,col);gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect(0,0,16,16);return texFrom(c)};
const blobTex=(()=>{const c=canvas(16,16),g=c.getContext('2d');const gr=g.createRadialGradient(8,8,0,8,8,8);gr.addColorStop(0,'rgba(0,0,0,.75)');gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect(0,0,16,16);return texFrom(c)})();

const floorGeo=new THREE.PlaneGeometry(MW,MH);floorGeo.rotateX(-Math.PI/2);
const decalC=canvas(WW,WH),dg=decalC.getContext('2d');const decalTex=texFrom(decalC);
const decal=new THREE.Mesh(floorGeo,phong({map:decalTex,transparent:true,depthWrite:false}));decal.position.set(MW/2,.02,MH/2);decal.receiveShadow=true;scene.add(decal);
let decalDirty=false,decalT=0;

// cutaway: walls and pillars between the camera and the hero dissolve into a pixel dither
const CUT={value:new THREE.Vector3(-99,0,-99)};
function cutaway(mat){mat.onBeforeCompile=sh=>{sh.uniforms.uCut=CUT;
  sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vCut;').replace('#include <project_vertex>','#include <project_vertex>\nvec4 cwp=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\ncwp=instanceMatrix*cwp;\n#endif\nvCut=(modelMatrix*cwp).xyz;');
  sh.fragmentShader=sh.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vCut;uniform vec3 uCut;').replace('void main() {','void main() {\nvec2 cd=vCut.xz-uCut.xz;if(cd.y>0.3&&cd.y<12.0&&(abs(cd.x)<2.4||cd.y>2.2)&&vCut.y>0.8){float k=mod(floor(gl_FragCoord.x)+floor(gl_FragCoord.y),2.0);if(vCut.y>1.5||k<1.0)discard;}')};return mat}
const M4=new THREE.Matrix4(),Q=new THREE.Quaternion(),V=new THREE.Vector3(),SC=new THREE.Vector3(1,1,1),UP=new THREE.Vector3(0,1,0);
let ROOT=scene;
function instanced(geo,mat,list,fn,cast=true,recv=true){const im=new THREE.InstancedMesh(geo,mat,Math.max(1,list.length));list.forEach((p,i)=>{fn(p);im.setMatrixAt(i,M4)});im.count=list.length;im.castShadow=cast;im.receiveShadow=recv;ROOT.add(im);return im}
const lavaC=canvas(64,64),lavaG=lavaC.getContext('2d'),lavaTex=texFrom(lavaC,true);let lavaFrames=[],lavaFrame=-1;
const waterC=canvas(64,64),waterG=waterC.getContext('2d'),waterTex=texFrom(waterC,true);let waterFrames=[],waterFrame=-1;
const DEC={};
const geoT=new THREE.PlaneGeometry(2,4).translate(0,1.875,0);
const geo64w=new THREE.PlaneGeometry(4,2).translate(0,.875,0);
const tcut=(img,c,row)=>{const size=16*(img.nbDensity||1),cv=canvas(size,size);atlasDraw(cv.getContext('2d'),img,c*16,row*16,16,16,0,0,size,size);return cv};
const stackTex=(img,rows)=>{const size=16*(img.nbDensity||1),c=canvas(size,size*rows.length),g=c.getContext('2d');rows.forEach(([col,row],i)=>atlasDraw(g,img,col*16,row*16,16,16,0,i*size,size,size));return surfaceTex(c,true)};
function mkProp(frames,x,y,rc){const geo=rc[3]===64?geoT:rc[2]===64?geo64w:geo32;const m=new THREE.Mesh(geo,frames[0].n);m.customDistanceMaterial=frames[0].d;m.userData.propAsset=true;m.castShadow=true;m.position.set(x,0,y);m.scale.set(1,SQ,1);ROOT.add(m);return m}
// Shared sheets keep identical proportions in the village, city, forge and crypt.
const HUMAN_PROP_SCALE={dead_tree:1.02,impaled_head:.65,grave_cross:.7,tombstone:.7,well:.65,shrine:.75,gallows:.95,
  debris_fire:.55,order_bonfire:.75,wheel:.48,barrel:.48,marga_cart:.9,crow_post:.75,covered_corpses:.6,order_banner:.8,burnt_hay:.5,dead_horse:.8,
  king_statue:.88,anvil:.48,mine_cart:.72,pickaxe_rack:.6,healing_shrine:.75,chains:.6,fallen_pillar:.7,dwarf_bones:.35,bellows:.55,furnace:.85,sarcophagus:.7,rune_lantern:.65,black_powder:.48,clan_banner:.8,
  queen_fountain:.76,street_lantern:.85,noble_door:.9,saint_king:.74,cathedral_gate:1,beggar_bodies:.55,plague_cart:.75,noble_carriage:.85,gibbet:.9,pyre:.8,rot_bloom:.45,royal_banner:.8,offering_bowl:.3,broken_bell:.55,doorway_bones:.35,
  cz_fire:.65,cz_idol:.85,cz_skullpole:.7,cz_shrine:.75,cz_wagon:.9,cz_cauldron:.45,cz_firewood:.4,cz_gallows:.95,cz_sacpole:.75,cz_beehive:.5,cz_wheel:.65,cz_wisp:.45,cz_crow:.35,cz_walk:.85,cz_tent:1.02,cz_pelts:.45,cz_bones:.3};
function fitWorldProps(w,ch){if(ch===5)return;const assigned=new Set();
  for(const p of w.PROPS){const s=HUMAN_PROP_SCALE[p.k];if(s===undefined)continue;const o=p.obj||w.propObjs.find(o=>Math.abs(o.mesh.position.x-p.x)<.001&&Math.abs(o.mesh.position.z-p.y)<.001);if(!o)continue;
    o.mesh.scale.set(s,s*SQ,s);p.obj=o;assigned.add(o);if(['wheel','burnt_hay','covered_corpses','dwarf_bones','beggar_bodies','doorway_bones','cz_pelts','cz_bones'].includes(p.k))o.mesh.castShadow=false}
  for(const o of w.propObjs)if(!assigned.has(o)&&o.fps===6&&!o.kind)o.mesh.scale.set(.55,.55*SQ,.55);
}
const SURFACE_TIME={value:0};
const FOLIAGE_MOTION={value:matchMedia('(prefers-reduced-motion: reduce)').matches?0:1};
function foliageWind(fr){for(const m of [fr.n,fr.d]){if(!m)continue;const previous=m.onBeforeCompile;m.onBeforeCompile=sh=>{previous.call(m,sh);sh.uniforms.uFoliageTime=SURFACE_TIME;sh.uniforms.uFoliageMotion=FOLIAGE_MOTION;
    sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nuniform float uFoliageTime;uniform float uFoliageMotion;').replace('#include <begin_vertex>','#include <begin_vertex>\nfloat windPhase=0.;\n#ifdef USE_INSTANCING\nwindPhase=instanceMatrix[3].x*.37+instanceMatrix[3].z*.21;\n#endif\ntransformed.x+=sin(uFoliageTime*.65+windPhase)*pow(max(position.y,0.)*.18,2.)*.075*uFoliageMotion;')};m.customProgramCacheKey=()=> 'nightbrand-foliage-'+m.type}}
function liquidMat(options,kind=0){const m=phong(options);m.onBeforeCompile=sh=>{sh.uniforms.uFlow=SURFACE_TIME;sh.uniforms.uLiquid={value:kind};
  sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nvarying vec2 vLiquid;').replace('#include <project_vertex>','#include <project_vertex>\nvec4 lp=vec4(transformed,1.);\n#ifdef USE_INSTANCING\nlp=instanceMatrix*lp;\n#endif\nvLiquid=(modelMatrix*lp).xz;');
  sh.fragmentShader=sh.fragmentShader.replace('#include <common>','#include <common>\nvarying vec2 vLiquid;uniform float uFlow;uniform float uLiquid;').replace('#include <dithering_fragment>',`float drift=sin(vLiquid.x*4.8+vLiquid.y*2.1+uFlow*.65)+sin(vLiquid.y*7.1-vLiquid.x*1.3-uFlow*.9);
    float glint=pow(max(0.,sin(vLiquid.x*9.+vLiquid.y*5.+sin(vLiquid.y*2.+uFlow*.45))),12.);
    gl_FragColor.rgb+=uLiquid>.5?vec3(.065,.025,.008)*(drift*.25+.4):vec3(.035,.055,.07)*(glint*.55+drift*.12);
    #include <dithering_fragment>`)};m.customProgramCacheKey=()=> 'nightbrand-liquid-'+kind;return m}
const groundFxGeo=new THREE.PlaneGeometry(1,1).rotateX(-Math.PI/2);
const groundShadowMat=new THREE.MeshBasicMaterial({map:blobTex,transparent:true,opacity:.48,depthWrite:false,color:0x171324});
const groundGlowTex=(()=>{const c=canvas(64,64),g=c.getContext('2d'),r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,'rgba(255,255,255,.8)');r.addColorStop(.38,'rgba(255,255,255,.35)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,64,64);const t=texFrom(c);t.magFilter=t.minFilter=THREE.LinearFilter;return t})();
const groundGlowMat=new THREE.MeshBasicMaterial({map:groundGlowTex,transparent:true,opacity:.18,depthWrite:false,blending:THREE.AdditiveBlending});
const PROP_FEET=new WeakMap();
function propFoot(image){if(PROP_FEET.has(image))return PROP_FEET.get(image);if(!image.getContext)return null;const d=image.getContext('2d').getImageData(0,0,image.width,image.height).data;let bottom=-1;for(let y=0;y<image.height;y++)for(let x=0;x<image.width;x++)if(d[(y*image.width+x)*4+3]>=128)bottom=y;const foot=bottom<0?null:(bottom+1)/image.height;PROP_FEET.set(image,foot);return foot}
function settleProp(m){const g=m.geometry;if(!g.boundingBox)g.computeBoundingBox();const box=g.boundingBox,height=box.max.y-box.min.y,foot=propFoot(m.material.map.image);if(height<.3||foot===null)return;const local=box.max.y-foot*height,before=m.position.y+local*m.scale.y;m.position.y=.018-local*m.scale.y;m.userData.groundContact={before,after:.018};if(height*m.scale.y<1.5)m.castShadow=false;}
function settleWorldProps(w){const assets=new Set(w.propObjs.map(o=>o.mesh)),suspended=new Set();for(const p of w.PROPS){if(p.obj)assets.add(p.obj.mesh);if(/wisp|crow|raven|torch|chains|banner|sacpole/.test(p.k)||p.anim==='wisp'){const o=p.obj||w.propObjs.find(o=>Math.abs(o.mesh.position.x-p.x)<.001&&Math.abs(o.mesh.position.z-p.y)<.001);if(o)suspended.add(o.mesh)}}
  w.group.traverse(m=>{if((!assets.has(m)&&!m.userData.propAsset)||!m.isMesh||m.isInstancedMesh||suspended.has(m)||!m.geometry||m.geometry.type!=='PlaneGeometry'||!m.material||Array.isArray(m.material)||!m.material.map||m.material.groundAtlas||Math.abs(m.rotation.x)>.2||Math.abs(m.rotation.z)>.2)return;settleProp(m)});
}
// Presentation only: deterministic dressing of non-blocking, non-interactive debris.
function composeWorldProps(w){
 const movable=new Set(['dwarf_bones','doorway_bones','cz_bones','cz_pelts','burnt_hay','wheel']);
 const anchors=w.PROPS.filter(p=>/sarcophagus|cart|wagon|tent|barrel|fallen_pillar|bookcase|desk/.test(p.k)&&!p.fire&&p.shrine===undefined);
 const occupied=w.PROPS.map(p=>({x:p.x,y:p.y}));
 // A few small companions stay inside existing blocked trunk cells: no new obstacles or routes.
 if(w.ch===1){let added=0;for(const p of w.PROPS){if(p.k!=='dead_tree'||!p.obj||added>=6||groundHash(Math.floor(p.x),Math.floor(p.y))%5!==0)continue;const x=p.x+.27,y=p.y-.3,i=Math.floor(y)*MW+Math.floor(x);if(tileAt(Math.floor(x),Math.floor(y))!==31||w.clearways?.has(i))continue;const m=p.obj.mesh.clone();m.scale.multiplyScalar(.62);m.position.x=x;m.position.z=y;m.castShadow=false;m.userData={propAsset:true,artOnly:true};w.group.add(m);added++}}

 for(const p of w.PROPS){const m=p.obj?.mesh||w.propObjs.find(o=>Math.abs(o.mesh.position.x-p.x)<.001&&Math.abs(o.mesh.position.z-p.y)<.001)?.mesh;
  if(!m||!movable.has(p.k)||p.fire||p.anim||p.shrine!==undefined||tileAt(Math.floor(p.x),Math.floor(p.y-.2))===31)continue;
  const anchor=anchors.filter(a=>a!==p&&Math.hypot(a.x-p.x,a.y-p.y)<5).sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y))[0];if(!anchor)continue;
  const offsets=[[-1.2,.2],[1.2,.2],[-.9,1.1],[.9,1.1]];for(const [dx,dy]of offsets){const x=anchor.x+dx,y=anchor.y+dy,ix=Math.floor(x),iy=Math.floor(y),i=iy*MW+ix;
   if(ix<1||iy<1||ix>=MW-1||iy>=MH-1||SOLID.has(tileAt(ix,iy))||VOID.has(tileAt(ix,iy))||w.clearways?.has(i)||w.groundPlan?.road[i]||occupied.some(a=>Math.hypot(a.x-x,a.y-y)<.75)||w.npcs.some(n=>Math.hypot(n.x/TS-x,n.y/TS-y)<2.5)||w.shrines.some(n=>Math.hypot(n.x/TS-x,n.y/TS-y)<2.5))continue;
   m.position.x=x;m.position.z=y;m.userData.artOffset={x:x-p.x,y:y-p.y};occupied.push({x,y});break;
  }
 }
}
// Authored visual dressing uses existing HD atlases; gameplay anchors and grids remain untouched.
function dressSettlementsHD(w){
 if(w.ch===1){
  const specs={birch:[192,0,64,64],spruce:[0,0,64,64],dead_oak:[128,0,64,64],ferns:[64,320,64,64],brambles:[64,256,64,64],mossy_boulder:[0,192,64,64]};const frames={};
  for(const [k,r]of Object.entries(specs)){frames[k]=procFrame(IMGS.cz_trees,...r,'prop');cutCircle(frames[k].n)}
  // Replace selected existing trunks, preserving their blocking position and ground contact.
  const treeGeo=new THREE.PlaneGeometry(4,4).translate(0,1.875,0);
  for(const p of w.PROPS){if(p.k!=='dead_tree'||!p.obj)continue;const h=groundHash(Math.floor(p.x),Math.floor(p.y)),k=['dead_oak','birch','spruce'][h%3],m=p.obj.mesh;m.geometry=treeGeo;m.material=frames[k].n;m.customDistanceMaterial=frames[k].d;m.scale.set(.82,.82*SQ,.82);p.obj.frames=[frames[k]];m.castShadow=true;}
  // Low garden/ruin clusters leave the plaza, doors and interaction approaches clear.
  const sites=[[25,23],[35,23],[25,32],[37,32],[43,18],[58,19],[45,24],[57,24],[18,28],[42,34],[8,34],[53,39]];
  const geo=new THREE.PlaneGeometry(4,4).translate(0,1.875,0);const used=[];
  for(let n=0;n<sites.length;n++){const [gx,gy]=sites[n];for(let j=0;j<3;j++){const x=MP(gx)+[0,.75,-.65][j],y=MP(gy)+[0,.45,.6][j],ix=Math.floor(x),iy=Math.floor(y),i=iy*MW+ix;
   if(SOLID.has(tileAt(ix,iy))||VOID.has(tileAt(ix,iy))||w.clearways?.has(i)||w.groundPlan.road[i]||w.npcs.some(a=>Math.hypot(a.x/TS-x,a.y/TS-y)<3)||w.PROPS.some(a=>Math.hypot(a.x-x,a.y-y)<1)||used.some(a=>Math.hypot(a.x-x,a.y-y)<.6))continue;
   const k=j===0?'brambles':'ferns',fr=frames[k],m=new THREE.Mesh(geo,fr.n),z=j===0?.24:.18;m.position.set(x,0,y);m.scale.set(z,z*SQ,z);m.userData.propAsset=true;m.castShadow=false;w.group.add(m);used.push({x,y});
  }}
 }
 if(w.ch===2){
  const fr=[0,1,2,3].map(i=>procFrame(IMGS.br_props,...[[64,64],[96,64],[0,96],[32,96]][i],32,32,'prop'));
  const sites=[[46,13],[53,16],[47,35]],geo=new THREE.PlaneGeometry(2,2).translate(0,.875,0);
  for(const [gx,gy]of sites)for(const [dx,dy,z]of [[0,0,.65],[1.1,.45,.43],[-.9,.65,.36]]){const x=MP(gx)+dx,y=MP(gy)+dy,ix=Math.floor(x),iy=Math.floor(y),i=iy*MW+ix;
   if(SOLID.has(tileAt(ix,iy))||VOID.has(tileAt(ix,iy))||w.clearways?.has(i)||w.groundPlan.road[i]||w.PROPS.some(p=>Math.hypot(p.x-x,p.y-y)<1)||w.npcs.some(n=>Math.hypot(n.x/TS-x,n.y/TS-y)<3))continue;
   const m=new THREE.Mesh(geo,fr[0].n);m.position.set(x,0,y);m.scale.set(z,z*SQ,z);m.userData.propAsset=true;m.castShadow=false;w.group.add(m);w.propObjs.push({mesh:m,frames:fr,fps:6,ph:groundHash(ix,iy)%10,kind:'static',artOnly:true});
  }
 }
}
function finishWorldArt(w){preparePowerFires(w);composeWorldProps(w);dressSettlementsHD(w);settleWorldProps(w);const flat=new Set(['dwarf_bones','covered_corpses','beggar_bodies','doorway_bones','wheel','burnt_hay','cz_bones','cz_pelts','cz_walk','cz_wisp','cz_crow','mushrooms','ferns','brambles','reeds','scroll','book','pages','keys','seal','purse','shackles','skull']);
  const props=w.PROPS.filter(p=>!flat.has(p.k)&&!VOID.has(tileAt(Math.floor(p.x),Math.floor(p.y-.2))));
  w.groundShadows=instanced(groundFxGeo,groundShadowMat,props,p=>{const m=p.obj&&p.obj.mesh,s=p.k==='sacred_oak'?2.2:p.tree?.8:m?Math.min(2,Math.max(.3,m.geometry.parameters.width*Math.abs(m.scale.x)*.5)):.65;return M4.compose(V.set(p.x,.024,p.y-.1),Q.identity(),SC.set(s,1,s*.5))},false,false);
  const lights=w.LSRC.filter(l=>['fire','shrine','rune','npc'].includes(l.kind)&&l.base>0&&[-1,0,1].every(dy=>[-1,0,1].every(dx=>!VOID.has(tileAt(Math.floor(l.x)+dx,Math.floor(l.z)+dy))))).slice(0,32);
  w.groundLights=instanced(groundFxGeo,groundGlowMat,lights,l=>{const s=l.kind==='fire'?3.6:l.kind==='shrine'?2.8:2;return M4.compose(V.set(l.x,.028,l.z),Q.identity(),SC.set(s,1,s*.7))},false,false);
  lights.forEach((l,i)=>w.groundLights.setColorAt(i,new THREE.Color(l.col)));w.groundLights.instanceColor&&(w.groundLights.instanceColor.needsUpdate=true);
  applySurfaceQuality(w);
}
function applySurfaceQuality(w){const seen=new Set();w.group.traverse(o=>{for(const m of [].concat(o.material||[])){if(m.groundLite)m.groundLite.value=coarse||SETT.quality==='low'?1:0;if(seen.has(m)||!m.userData.surfaceDetail)continue;seen.add(m);const map=SETT.quality==='low'?null:m.userData.surfaceDetail;if(m.bumpMap!==map){m.bumpMap=map;m.needsUpdate=true}const tex=m.userData.surfaceDetail,aniso=SETT.quality==='low'?1:Math.min(4,renderer.capabilities.getMaxAnisotropy());if(tex.anisotropy!==aniso){tex.anisotropy=aniso;tex.needsUpdate=true}}})}
function floorAO(fg,solidish){for(let ty=0;ty<MH;ty++)for(let tx=0;tx<MW;tx++){const t=tileAt(tx,ty);if(VOID.has(t)||t===21||t===45)continue;
  let o=0;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const n=tileAt(tx+dx,ty+dy);if(WALLC.has(n))o+=dx&&dy?.5:1;else if(solidish.has(n))o+=dx&&dy?.25:.5}
  if(o>0){fg.fillStyle=`rgba(4,3,6,${Math.min(.35,o*.07)})`;fg.fillRect(tx*16,ty*16,16,16)}
  if(WALLC.has(tileAt(tx,ty-1))){const shade=fg.createLinearGradient(0,ty*16,0,ty*16+12);shade.addColorStop(0,'rgba(4,3,6,.32)');shade.addColorStop(1,'rgba(4,3,6,0)');fg.fillStyle=shade;fg.fillRect(tx*16,ty*16,16,12)}}}
function decals(I){const dec=row=>[0,1,2,3].map(i=>{const cv=canvas(32,32);cv.getContext('2d').drawImage(I.decals,i*32,row*32,32,32,0,0,32,32);return cv});
  DEC.pool=dec(0);DEC.spray=dec(1);DEC.scorch=dec(2);DEC.crack=dec(3);DEC.bones=dec(5)}

// Chapter II meshes: M4 floor, M5 walls, M6 props, M8 transitions
function buildDolne(I){planGround(2);
  const F=I.dm_floor,Wl=I.dm_walls,r=rng(99);
  const fc=canvas(WW,WH),fg=fc.getContext('2d');
  const tile=(c,row,tx,ty)=>groundTile(fg,F,c,row,tx,ty);
  const nearLava=(x,y)=>[[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>tileAt(x+dx,y+dy)===24);
  for(let ty=0;ty<MH;ty++)for(let tx=0;tx<MW;tx++){let t=tileAt(tx,ty);const rc=(r()*8)|0;if(t===31)t=W.under[ty*MW+tx]||20;
    if(VOID.has(t))continue;
    if(t===21)tile(rc,2,tx,ty);
    else if(t===29)tile(tx===FT(18)&&ty===FT(23)?7:tx===FT(18)?2:0,1,tx,ty);
    else if(t===32)tile([0,5,6,7][rc&3],7,tx,ty);
    else if(region(tx,ty)==='forge'){if(nearLava(tx,ty))tile(4+(rc&3),5,tx,ty);else tile(rc,r()<.1?3:0,tx,ty)}
    else if(t===26)tile(rc,2,tx,ty);
    else tile(rc,0,tx,ty);
  }
  for(let tx=FT(42);tx<FT(61);tx++)if(tileAt(tx,FT(48))===32)tile(1,7,tx,FT(48));
  floorAO(fg,new Set([22,31]));
  groundDetails(fg);
  const floor=new THREE.Mesh(floorGeo,groundMaterial(phong({map:surfaceTex(fc),alphaTest:.5,color:0x988e94})));floor.position.set(MW/2,0,MH/2);floor.receiveShadow=true;ROOT.add(floor);
  // walls: carved hall stone, forge brick with glowing seams, mine timber; caps from row 6
  const capMat=cutaway(phong({map:texFrom(tcut(Wl,1,6),true)}));
  const wallGeo=new THREE.BoxGeometry(1,3,1);wallGeo.translate(0,1.5,0);
  const variants=[0,1,2,3].map(i=>stackTex(Wl,[[(i*3)%8,0],[(i*2+1)%8,1],[(i*5+4)%8,0]])).concat([0,1].map(i=>stackTex(Wl,[[i*3,4],[i*3+1,4],[i*3+2,4]]))).concat([stackTex(Wl,[[0,7],[2,7],[4,7]])]);
  const groups=variants.map(()=>[]);
  const wreg=(x,y)=>{let m=0,f=0;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const t=tileAt(x+dx,y+dy);if(t===21)continue;if(t===32)m=1;else if(region(x+dx,y+dy)==='forge')f=1}return m?'mine':f?'forge':'hall'};
  for(const [x,y] of walls){const g=wreg(x,y);groups[g==='mine'?6:g==='forge'?4+((x+y)&1):((x*7+y*3)%4)].push([x,y])}
  groups.forEach((list,i)=>{if(!list.length)return;const side=cutaway(phong({map:variants[i],color:0x9a9096}));instanced(wallGeo,[side,side,capMat,capMat,side,side],list,([x,y])=>M4.makeTranslation(x+.5,0,y+.5))});
  const cliffT=texFrom(tcut(Wl,2,3),true);cliffT.repeat.set(1,10);
  const cliffGeo=new THREE.BoxGeometry(1,10,1);cliffGeo.translate(0,-5.03,0);
  instanced(cliffGeo,phong({map:cliffT}),cliffs,([x,y])=>M4.makeTranslation(x+.5,0,y+.5),false,true);
  const pilT=texFrom(tcut(Wl,0,2),true);pilT.repeat.set(2,4);
  const stoneT=texFrom(tcut(F,2,0),true);
  const pilGeo=new THREE.CylinderGeometry(.36,.38,4,8);pilGeo.translate(0,2,0);
  instanced(pilGeo,cutaway(phong({map:pilT})),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
  const baseGeo=new THREE.BoxGeometry(.95,.35,.95);baseGeo.translate(0,.175,0);
  instanced(baseGeo,phong({map:stoneT}),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
  const capGeo=new THREE.BoxGeometry(1.05,.32,1.05);capGeo.translate(0,4.12,0);
  instanced(capGeo,cutaway(phong({map:stoneT})),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
  const bandGeo=new THREE.CylinderGeometry(.395,.395,.14,8);bandGeo.translate(0,1.9,0);
  instanced(bandGeo,cutaway(phong({color:0x4e3c1c})),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
  lavaFrames=[0,1,2,3].map(i=>tcut(F,i,5));
  const lavaGeo=new THREE.PlaneGeometry(1,1);lavaGeo.rotateX(-Math.PI/2);
  instanced(lavaGeo,liquidMat({map:lavaTex,emissiveMap:lavaTex,emissive:0xff8a46,emissiveIntensity:.65},1),lavas,([x,y])=>M4.makeTranslation(x+.5,-.32,y+.5),false,false);
  const abT=texFrom(tcut(F,3,6),true);abT.repeat.set(5*MK,MH);
  const abyss=new THREE.Mesh(new THREE.PlaneGeometry(FT(40)-FT(35),MH),new THREE.MeshBasicMaterial({map:abT,color:0x8a6a6a}));abyss.rotation.x=-Math.PI/2;abyss.position.set((FT(35)+FT(40))/2,-10,MH/2);ROOT.add(abyss);
  const brT=texFrom(tcut(F,2,4),true);brT.repeat.set(5,2);
  const bridge=new THREE.Mesh(new THREE.BoxGeometry(FT(40)-FT(35),.3,FT(26)-FT(22)),phong({map:brT}));bridge.position.set((FT(35)+FT(40))/2,-.15,(FT(22)+FT(26))/2);bridge.receiveShadow=true;bridge.castShadow=true;ROOT.add(bridge);
  for(const z of [FT(22)+.08,FT(26)-.08]){const rail=new THREE.Mesh(new THREE.BoxGeometry(FT(40)-FT(35),.34,.14),phong({map:stoneT}));rail.position.set((FT(35)+FT(40))/2,.17,z);rail.castShadow=true;rail.receiveShadow=true;ROOT.add(rail)}
  const R={brazier_0:[0,0,32,32],brazier_1:[32,0,32,32],brazier_2:[64,0,32,32],brazier_3:[96,0,32,32],king_statue:[0,32,32,64],anvil:[32,32,32,32],mine_cart:[64,32,32,32],pickaxe_rack:[96,32,32,32],
    healing_shrine:[32,64,32,32],depleted_shrine:[64,64,32,32],chains:[96,64,32,32],fallen_pillar:[0,96,64,32],dwarf_bones:[64,96,32,32],bellows:[96,96,32,32],furnace_0:[0,128,64,32],furnace_1:[64,128,64,32],
    sarcophagus:[0,160,32,32],rune_lantern:[32,160,32,32],black_powder:[64,160,32,32],clan_banner:[96,160,32,32]};
  const TR={chapel_stairs:[0,0,64,32],gate_closed:[64,0,64,32],gate_half_open:[0,32,64,32],gate_open:[64,32,64,32]};
  const fr=(img,rc)=>procFrame(img,rc[0],rc[1],rc[2],rc[3],'prop');
  const PF={};for(const k in R)PF[k]=fr(I.dm_props,R[k]);for(const k in TR)PF[k]=fr(I.trans,TR[k]);
  for(const [x,y] of braziers){const frames=[0,1,2,3].map(i=>PF['brazier_'+i]);propObjs.push({mesh:mkProp(frames,x+.5,y+.92,R.brazier_0),frames,fps:6,ph:Math.random()*3})}
  for(const p of PROPS){
    let frames,rc;
    if(p.anim==='furnace'){frames=[PF.furnace_0,PF.furnace_1];rc=R.furnace_0}
    else if(p.gate){frames=[PF.gate_closed,PF.gate_half_open,PF.gate_open];rc=TR.gate_closed}
    else if(p.shrine!==undefined){frames=[PF.healing_shrine,PF.depleted_shrine];rc=R.healing_shrine}
    else{frames=[PF[p.k]];rc=R[p.k]||TR[p.k]}
    const o={mesh:mkProp(frames,p.x,p.y,rc),frames,fps:p.anim?6:0,ph:Math.random()*3,kind:p.gate?'gate':p.shrine!==undefined?'shrine':p.anim?'anim':'static',si:p.shrine};
    if(p.k==='dwarf_bones'){o.mesh.castShadow=false}
    p.obj=o;propObjs.push(o);
  }
}

// Crypt meshes: the Lower City floor (M4), carved hall walls (M5), its props (M6) and the chapel stairs (M8)
function buildDungeon(I){planGround(9);
  const F=I.dm_floor,Wl=I.dm_walls,r=rng(W.seed||5);
  const fc=canvas(WW,WH),fg=fc.getContext('2d');
  const tile=(c,row,tx,ty)=>groundTile(fg,F,c,row,tx,ty);
  for(let ty=0;ty<MH;ty++)for(let tx=0;tx<MW;tx++){let t=tileAt(tx,ty);const rc=(r()*8)|0;if(t===31)t=W.under[ty*MW+tx]||20;
    if(t===21||t===26)tile(rc,2,tx,ty);else tile(rc,0,tx,ty)}
  floorAO(fg,new Set([22,31]));
  groundDetails(fg);
  const floor=new THREE.Mesh(floorGeo,groundMaterial(phong({map:surfaceTex(fc),alphaTest:.5,color:0x8a8088})));floor.position.set(MW/2,0,MH/2);floor.receiveShadow=true;ROOT.add(floor);
  const capMat=cutaway(phong({map:texFrom(tcut(Wl,1,6),true)}));
  const wallGeo=new THREE.BoxGeometry(1,3,1);wallGeo.translate(0,1.5,0);
  const variants=[0,1,2,3].map(i=>stackTex(Wl,[[(i*3)%8,0],[(i*2+1)%8,1],[(i*5+4)%8,0]]));
  const groups=variants.map(()=>[]);for(const [x,y] of walls)groups[(x*7+y*3)%4].push([x,y]);
  groups.forEach((list,i)=>{if(!list.length)return;const side=cutaway(phong({map:variants[i],color:0x8a8088}));instanced(wallGeo,[side,side,capMat,capMat,side,side],list,([x,y])=>M4.makeTranslation(x+.5,0,y+.5))});
  const pilT=texFrom(tcut(Wl,0,2),true);pilT.repeat.set(2,4);
  const stoneT=texFrom(tcut(F,2,0),true);
  const pilGeo=new THREE.CylinderGeometry(.36,.38,4,8);pilGeo.translate(0,2,0);
  instanced(pilGeo,cutaway(phong({map:pilT})),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
  const baseGeo=new THREE.BoxGeometry(.95,.35,.95);baseGeo.translate(0,.175,0);
  instanced(baseGeo,phong({map:stoneT}),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
  const capGeo=new THREE.BoxGeometry(1.05,.32,1.05);capGeo.translate(0,4.12,0);
  instanced(capGeo,cutaway(phong({map:stoneT})),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
  const R={brazier_0:[0,0,32,32],brazier_1:[32,0,32,32],brazier_2:[64,0,32,32],brazier_3:[96,0,32,32],king_statue:[0,32,32,64],anvil:[32,32,32,32],mine_cart:[64,32,32,32],pickaxe_rack:[96,32,32,32],
    healing_shrine:[32,64,32,32],depleted_shrine:[64,64,32,32],chains:[96,64,32,32],fallen_pillar:[0,96,64,32],dwarf_bones:[64,96,32,32],sarcophagus:[0,160,32,32],rune_lantern:[32,160,32,32],clan_banner:[96,160,32,32]};
  const TR={chapel_stairs:[0,0,64,32]};
  const PF={};for(const k in R)PF[k]=procFrame(I.dm_props,...R[k],'prop');for(const k in TR)PF[k]=procFrame(I.trans,...TR[k],'prop');
  for(const [x,y] of braziers){const frames=[0,1,2,3].map(i=>PF['brazier_'+i]);propObjs.push({mesh:mkProp(frames,x+.5,y+.92,R.brazier_0),frames,fps:6,ph:Math.random()*3})}
  for(const p of PROPS){const sh=p.shrine!==undefined,frames=sh?[PF.healing_shrine,PF.depleted_shrine]:[PF[p.k]],rc=R[p.k]||TR[p.k];
    const o={mesh:mkProp(frames,p.x,p.y,rc),frames,fps:0,ph:0,kind:sh?'shrine':'static',si:p.shrine};if(p.k==='dwarf_bones')o.mesh.castShadow=false;p.obj=o;propObjs.push(o)}
}

// Chapter I meshes: M1 ground, M2 walls, M3 props
function buildBrzeznica(I){
  const F=I.br_ground,Wl=I.br_walls,r=rng(77);planGround(1);
  const fc=canvas(WW,WH),fg=fc.getContext('2d');
  const tile=(c,row,tx,ty)=>groundTile(fg,F,c,row,tx,ty);
  const ROW={40:0,41:1,42:2,43:3,44:4,46:6,47:7,48:3,21:2};
  for(let ty=0;ty<MH;ty++)for(let tx=0;tx<MW;tx++){let t=tileAt(tx,ty);if(t===31)t=W.under[ty*MW+tx]||42;if(t===45)continue;
    tile((r()*8)|0,ROW[t]??2,tx,ty);if(t===21){fg.fillStyle='rgba(3,3,6,.6)';fg.fillRect(tx*16,ty*16,16,16)}}
  // Natural boundaries blend continuously in the atlas material.
  floorAO(fg,new Set([31]));
  // Low-density story marks, with a soft circular mask instead of rectangular blood tiles.
  for(const p of W.PROPS){const x=Math.floor(p.x),y=Math.floor(p.y),i=y*MW+x;if(!W.groundPlan||W.groundPlan.road[i])continue;
    const blood=p.k==='gallows'||p.k==='covered_corpses',ash=p.fire;if(!blood&&!ash)continue;
    fg.save();fg.translate(p.x*16,p.y*16);fg.globalAlpha=blood?.32:.22;const stamp=canvas(48,48),sg=stamp.getContext('2d');sg.drawImage(DEC[blood?'pool':'scorch'][groundHash(x,y)%4],0,0,48,48);sg.globalCompositeOperation='destination-in';const mask=sg.createRadialGradient(24,24,4,24,24,24);mask.addColorStop(0,'#fff');mask.addColorStop(1,'transparent');sg.fillStyle=mask;sg.fillRect(0,0,48,48);fg.drawImage(stamp,-24,-24);fg.restore()}
  const floor=new THREE.Mesh(floorGeo,groundMaterial(phong({map:surfaceTex(fc),alphaTest:.5})));floor.position.set(MW/2,0,MH/2);floor.receiveShadow=true;ROOT.add(floor);
  // palisade (row 7) on the border, charred log walls on stone footings (rows 0-2) for the houses; wooden caps from row 4
  const capMat=cutaway(phong({map:texFrom(tcut(Wl,1,4),true)}));
  const palGeo=new THREE.BoxGeometry(1,2.4,1);palGeo.translate(0,1.2,0);
  const houseGeo=new THREE.BoxGeometry(1,1.9,1);houseGeo.translate(0,.95,0);
  const pal=[0,1].map(i=>stackTex(Wl,[[i*3,7],[i*3+1,7],[i*3+2,7]]));
  const logs=[0,1,2,3].map(i=>stackTex(Wl,[[(i*2)%8,1],[(i*3+1)%8,0],[(i*5+2)%8,2]]));
  const gP=[[],[]],gH=[[],[],[],[]];
  for(const [x,y,t] of walls){if(t===48)gH[(x*7+y*3)%4].push([x,y]);else gP[(x+y)&1].push([x,y])}
  gP.forEach((list,i)=>{if(!list.length)return;const side=cutaway(phong({map:pal[i]}));instanced(palGeo,[side,side,capMat,capMat,side,side],list,([x,y])=>M4.makeTranslation(x+.5,0,y+.5))});
  gH.forEach((list,i)=>{if(!list.length)return;const side=cutaway(phong({map:logs[i]}));instanced(houseGeo,[side,side,capMat,capMat,side,side],list,([x,y])=>M4.makeTranslation(x+.5,0,y+.5))});
  // stagnant pond (row 5 animated)
  waterFrames=[0,1,2,3].map(i=>tcut(F,i,5));
  const wGeo=new THREE.PlaneGeometry(1,1);wGeo.rotateX(-Math.PI/2);
  instanced(wGeo,liquidMat({map:waterTex,color:0x9aa6bc,shininess:54,specular:0x35465a}),waters,([x,y])=>M4.makeTranslation(x+.5,-.08,y+.5),false,true);
  const R={dead_tree:[0,0,32,64],impaled_head:[32,0,32,32],grave_cross:[64,0,32,32],tombstone:[96,0,32,32],well:[32,32,32,32],stocks:[64,32,32,32],shrine:[96,32,32,32],gallows:[0,64,64,32],
    debris_fire_0:[64,64,32,32],debris_fire_1:[96,64,32,32],debris_fire_2:[0,96,32,32],debris_fire_3:[32,96,32,32],wheel:[64,96,32,32],barrel:[96,96,32,32],marga_cart:[0,128,64,32],
    crow_post:[64,128,32,32],covered_corpses:[96,128,32,32],order_bonfire:[0,160,32,32],order_banner:[32,160,32,32],burnt_hay:[64,160,32,32],dead_horse:[96,160,32,32]};
  const PF={};for(const k in R)PF[k]=procFrame(I.br_props,R[k][0],R[k][1],R[k][2],R[k][3],'prop');
  // stairs down into the crypt (Lower City transition sheet)
  R.crypt_stairs=[0,0,64,32];PF.crypt_stairs=procFrame(I.trans,0,0,64,32,'prop');
  for(const p of PROPS){
    let frames,rc;
    if(p.anim==='fire'){frames=[0,1,2,3].map(i=>PF['debris_fire_'+i]);rc=R.debris_fire_0}
    else if(p.shrine!==undefined){frames=[PF.shrine,PF.shrine];rc=R.shrine}
    else{frames=[PF[p.k]];rc=R[p.k]}
    propObjs.push({mesh:mkProp(frames,p.x,p.y,rc),frames,fps:p.anim?6:0,ph:Math.random()*3,kind:p.shrine!==undefined?'shrine':p.anim?'anim':'static',si:p.shrine});
  }
}

// chapter III cuts buildings only in a circle around the hero, so the domes stay visible in front of him
const CUTS={value:new THREE.Vector3(-999,-999,0)};
function cutCircle(mat){mat.onBeforeCompile=sh=>{sh.uniforms.uCut=CUT;sh.uniforms.uScr=CUTS;
  sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vCut;').replace('#include <project_vertex>','#include <project_vertex>\nvec4 cwp=vec4(transformed,1.0);\n#ifdef USE_INSTANCING\ncwp=instanceMatrix*cwp;\n#endif\nvCut=(modelMatrix*cwp).xyz;');
  sh.fragmentShader=sh.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vCut;uniform vec3 uCut;uniform vec3 uScr;').replace('void main() {','void main() {\nif(vCut.z-uCut.z>0.3&&vCut.y>0.6){float dd=length(gl_FragCoord.xy-uScr.xy);if(dd<uScr.z)discard;if(dd<uScr.z*1.3&&mod(floor(gl_FragCoord.x)+floor(gl_FragCoord.y),2.0)<1.0)discard;}')};return mat}
// Chapter III meshes: reuses the Lower City stone and village ground, adds golden domes, lit windows and rot
function buildStolica(I){planGround(3);
  const r=rng(313),fc=canvas(WW,WH),fg=fc.getContext('2d'),ZG=I.zl_ground,ZW=I.zl_walls,ZP=I.zl_props;
  // Z1 ground: r0 flagstones, r1 gold connectors, r2 cracked, r3 slum mud, r4 rot (0-3 animation, 4-7 edges), r5 blood cobbles, r6 monastery, r7 dead garden
  const SRC={50:[ZG,0],52:[ZG,2],53:[ZG,3],54:[ZG,3],55:[ZG,5],56:[ZG,6],57:[ZG,7],21:[ZG,2],58:[ZG,2],59:[ZG,3],22:[ZG,0],27:[ZG,0]};
  const gcode=(x,y)=>{let t=tileAt(x,y);if(t===31)t=W.under[y*MW+x]||50;return t};
  for(let ty=0;ty<MH;ty++)for(let tx=0;tx<MW;tx++){const t=gcode(tx,ty);
    if(t===51){const N=gcode(tx,ty-1)===51,S_=gcode(tx,ty+1)===51,E=gcode(tx+1,ty)===51,Wt=gcode(tx-1,ty)===51;
      const col=N&&S_&&E&&Wt?2:N&&S_?1:E&&Wt?0:N&&E?3:E&&S_?4:S_&&Wt?5:N&&Wt?6:N||S_?1:0;groundTile(fg,ZG,col,1,tx,ty);continue}
    if(t===54){groundTile(fg,ZG,4+((r()*4)|0),4,tx,ty);continue}
    const s=SRC[t]||SRC[50];groundTile(fg,s[0],((r()*8)|0),s[1],tx,ty);
    if(t===21){fg.fillStyle='rgba(3,3,6,.6)';fg.fillRect(tx*16,ty*16,16,16)}}
  // Natural boundaries blend continuously in the atlas material.
  floorAO(fg,new Set([22,31,27]));
  groundDetails(fg);
  const floor=new THREE.Mesh(floorGeo,groundMaterial(phong({map:surfaceTex(fc),alphaTest:.5,color:0x9a8e90})));floor.position.set(MW/2,0,MH/2);floor.receiveShadow=true;ROOT.add(floor);
  // animated rot sludge on top of the pools (Z1 row 4, frames 0-3), faintly glowing
  W.rotFrames=[0,1,2,3].map(i=>tcut(ZG,i,4));W.rotC=canvas(64,64);W.rotG=W.rotC.getContext('2d');W.rotTex=texFrom(W.rotC,true);W.rotF=-1;
  const rGeo=new THREE.PlaneGeometry(1,1);rGeo.rotateX(-Math.PI/2);
  instanced(rGeo,liquidMat({map:W.rotTex,emissiveMap:W.rotTex,emissive:0x5a2a18,shininess:22,specular:0x30221a},1),W.rots,([x,y])=>M4.makeTranslation(x+.5,.012,y+.5),false,true);
  // walls from Z2: r0-1 townhouse facades, r2 cathedral, r3 gold dome, r4 slate roof, r5 monastery brick, r6 shacks, r7 caps
  const stackE=(img,rows)=>{const size=16*(img.nbDensity||1),h=rows.length*size,c=canvas(size,h),g=c.getContext('2d');rows.forEach(([col,row],i)=>atlasDraw(g,img,col*16,row*16,16,16,0,i*size,size,size));
    const e=canvas(size,h),eg=e.getContext('2d'),d=g.getImageData(0,0,size,h).data,ed=eg.createImageData(size,h);
    // candle-lit windows and embers glow in the dark
    for(let i=0;i<d.length;i+=4){ed.data[i+3]=255;if(d[i]>=250&&d[i+1]<200&&d[i+2]<90){ed.data[i]=d[i];ed.data[i+1]=d[i+1];ed.data[i+2]=d[i+2]}}
    eg.putImageData(ed,0,0);return{map:surfaceTex(c,true),emissiveMap:surfaceTex(e,true),emissive:0xffffff}};
  const rc=()=>(r()*8)|0;
  const box=h=>{const g=new THREE.BoxGeometry(1,h,1);g.translate(0,h/2,0);return g};
  const capT=texFrom(tcut(ZW,3,4),true),capT2=texFrom(tcut(ZW,4,7),true);
  const addWalls=(list,h,side,cap,tint=0xffffff)=>{if(!list.length)return;const sm=cutCircle(phong(Object.assign({color:tint},side))),cm=cutCircle(phong({map:cap,color:tint}));instanced(box(h),[sm,sm,cm,cm,sm,sm],list,([x,y])=>M4.makeTranslation(x+.5,0,y+.5))};
  const inB=(B,x,y)=>x>=B.x&&x<B.x+B.w&&y>=B.y&&y<B.y+B.h;
  const G={outer:[[],[]],house:[[],[],[],[]],cath:[[],[]],palace:[],chapel:[],mon:[[],[]],shack:[[],[]]};
  for(const [x,y,t] of walls){
    if(t===21)G.outer[(x+y)&1].push([x,y]);
    else if(t===59)G.shack[(x*3+y)&1].push([x,y]);
    else if(inB(SR(CATH),x,y))G.cath[(x+y)&1].push([x,y]);else if(inB(SR(PALACE),x,y))G.palace.push([x,y]);else if(inB(SR(CHAPEL),x,y))G.chapel.push([x,y]);
    else if(GTX[x]>=43&&GTY[y]>=14&&GTY[y]<=32)G.mon[(x+y)&1].push([x,y]);
    else G.house[(x*7+y*3)%4].push([x,y])}
  G.outer.forEach(l=>addWalls(l,4,stackE(ZW,[[rc(),2],[rc(),2],[rc(),2],[rc(),2]]),capT2,0x9a9088));
  G.house.forEach(l=>addWalls(l,3.2,stackE(ZW,[[rc(),0],[rc(),1],[rc(),1]]),capT));
  G.cath.forEach(l=>addWalls(l,4,stackE(ZW,[[rc(),2],[rc(),2],[rc(),0],[rc(),2]]),capT));
  addWalls(G.palace,4.5,stackE(ZW,[[rc(),2],[rc(),0],[rc(),1],[rc(),0],[rc(),2]]),capT);
  addWalls(G.chapel,3,stackE(ZW,[[rc(),2],[rc(),2],[rc(),2]]),capT);
  G.mon.forEach(l=>addWalls(l,3,stackE(ZW,[[rc(),5],[rc(),5],[rc(),5]]),capT2));
  G.shack.forEach(l=>addWalls(l,1.7,stackE(ZW,[[rc(),6],[rc(),6]]),texFrom(tcut(ZW,6,6),true)));
  // golden domes wrapped in the Z2 dome texture
  const goldT=texFrom(tcut(ZW,2,3),true);goldT.repeat.set(8,2);
  const goldM=cutCircle(phong({map:goldT,specular:0xb08a40,shininess:22,emissive:0x1a1004}));
  const drumT=texFrom(tcut(ZW,3,2),true);drumT.repeat.set(8,1);const drumM=cutCircle(phong({map:drumT}));
  const dome=(x,z,rad,base)=>{
    const drum=new THREE.Mesh(new THREE.CylinderGeometry(rad*.98,rad,rad*.55,16),drumM);drum.position.set(x,base+rad*.275,z);
    const cup=new THREE.Mesh(new THREE.SphereGeometry(rad,16,7,0,Math.PI*2,0,Math.PI/2),goldM);cup.position.set(x,base+rad*.55,z);
    const ring=new THREE.Mesh(new THREE.CylinderGeometry(rad*1.04,rad*1.04,.14,16),goldM);ring.position.set(x,base+rad*.55,z);
    const lan=new THREE.Mesh(new THREE.CylinderGeometry(rad*.16,rad*.18,rad*.35,8),drumM);lan.position.set(x,base+rad*1.55+rad*.17,z);
    const spire=new THREE.Mesh(new THREE.ConeGeometry(rad*.2,rad*.55,8),goldM);spire.position.set(x,base+rad*1.9+rad*.27,z);
    for(const m of [drum,cup,ring,lan,spire]){m.castShadow=true;m.receiveShadow=true;ROOT.add(m)}};
  for(const [x,z,rad,k] of DOMES)dome(MP(x),MP(z),rad*MK,{c:4,h:3.2,s:3,p:4.5}[k]);
  // slate pyramid roofs and thatched shacks
  const slT=texFrom(tcut(ZW,1,4),true);slT.repeat.set(3,2);
  const slate=cutCircle(phong({map:slT,flatShading:true})),thatch=cutCircle(phong({map:texFrom(tcut(I.br_walls,1,5),true),color:0xb8a080,flatShading:true})),pyr=new THREE.ConeGeometry(Math.SQRT1_2,1,4);pyr.rotateY(Math.PI/4);
  for(const B of [[3,3,7,6],[3,12,7,6],[13,22,7,5],[55,3,6,7]]){const {x,y,w,h}=SR({x:B[0],y:B[1],w:B[2],h:B[3]});const m=new THREE.Mesh(pyr,slate);m.scale.set(w,2.2,h);m.position.set(x+w/2,3.2+1.1,y+h/2);m.castShadow=true;m.receiveShadow=true;ROOT.add(m)}
  for(const B of SHACKS){const {x,y,w,h}=SR({x:B[0],y:B[1],w:B[2],h:B[3]});const m=new THREE.Mesh(pyr,thatch);m.scale.set(w+.3,1.1,h+.3);m.position.set(x+w/2,1.7+.55,y+h/2);m.castShadow=true;m.receiveShadow=true;ROOT.add(m)}
  // cloister pillars of the fire monastery
  const pilT=texFrom(tcut(ZW,0,2),true);pilT.repeat.set(2,3);const stoneT=texFrom(tcut(ZG,1,0),true);
  const pilGeo=new THREE.CylinderGeometry(.34,.36,3,8);pilGeo.translate(0,1.5,0);
  instanced(pilGeo,cutCircle(phong({map:pilT,color:0xc8b8a8})),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
  const baseGeo=new THREE.BoxGeometry(.9,.3,.9);baseGeo.translate(0,.15,0);instanced(baseGeo,phong({map:stoneT}),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
  const capGeo=new THREE.BoxGeometry(1,.3,1);capGeo.translate(0,3.1,0);instanced(capGeo,cutCircle(phong({map:stoneT})),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
  // props: Z3 for the capital, plus braziers and a few slum props from earlier chapters
  const RZ={queen_fountain:[0,0,64,32],street_lantern:[64,0,32,32],noble_door:[96,0,32,32],saint_king:[0,32,32,64],cathedral_gate:[32,32,64,32],beggar_bodies:[96,32,32,32],plague_cart:[32,64,32,32],noble_carriage:[64,64,32,32],gibbet:[96,64,32,32],
    pyre_0:[0,96,32,32],pyre_1:[32,96,32,32],pyre_2:[64,96,32,32],pyre_3:[96,96,32,32],rot_bloom_0:[0,128,32,32],rot_bloom_1:[32,128,32,32],healing_shrine:[64,128,32,32],depleted_shrine:[96,128,32,32],
    royal_banner:[0,160,32,32],offering_bowl:[32,160,32,32],broken_bell:[64,160,32,32],doorway_bones:[96,160,32,32]};
  const RD={brazier_0:[0,0,32,32],brazier_1:[32,0,32,32],brazier_2:[64,0,32,32],brazier_3:[96,0,32,32],chains:[96,64,32,32],sarcophagus:[0,160,32,32]};
  const RB={dead_tree:[0,0,32,64],impaled_head:[32,0,32,32],gallows:[0,64,64,32],debris_fire_0:[64,64,32,32],debris_fire_1:[96,64,32,32],debris_fire_2:[0,96,32,32],debris_fire_3:[32,96,32,32],wheel:[64,96,32,32],barrel:[96,96,32,32],
    crow_post:[64,128,32,32],burnt_hay:[64,160,32,32],dead_horse:[96,160,32,32]};
  const RT={gate_open:[64,32,64,32]};
  const PF={},RC={};
  for(const [img,R] of [[ZP,RZ],[I.dm_props,RD],[I.br_props,RB],[I.trans,RT]])for(const k in R){PF[k]=procFrame(img,R[k][0],R[k][1],R[k][2],R[k][3],'prop');RC[k]=R[k]}
  const ANIM={fire:['debris_fire',4],pyre:['pyre',4],bloom:['rot_bloom',2]};
  for(const [x,y] of braziers){const frames=[0,1,2,3].map(i=>PF['brazier_'+i]);propObjs.push({mesh:mkProp(frames,x+.5,y+.92,RC.brazier_0),frames,fps:6,ph:Math.random()*3})}
  for(const p of PROPS){let frames,rc;
    if(ANIM[p.anim]){const [k,n]=ANIM[p.anim];frames=[...Array(n).keys()].map(i=>PF[k+'_'+i]);rc=RC[k+'_0']}
    else if(p.shrine!==undefined){frames=[PF.healing_shrine,PF.depleted_shrine];rc=RC.healing_shrine}
    else{const k=p.still||p.k;frames=[PF[k]];rc=RC[k]}
    const o={mesh:mkProp(frames,p.x,p.y,rc),frames,fps:p.anim==='bloom'?4:p.anim?6:0,ph:Math.random()*3,kind:p.shrine!==undefined?'shrine':p.anim?'anim':'static',si:p.shrine};
    if(p.k==='beggar_bodies'||p.k==='doorway_bones')o.mesh.castShadow=false;propObjs.push(o)}
}

// Chapter IV meshes: K1 ground, K2 walls (rock rim, palisade, watchtower), K3 trees and big nature props (64 px cells drawn at 16 px per tile)
function buildCzarnobor(I){planGround(4);
  const r=rng((W.seed^0x5a5a)>>>0),G=I.cz_ground,WL=I.cz_walls,T=I.cz_trees;
  const fc=canvas(WW,WH),fg=fc.getContext('2d');
  const ROW={60:0,61:1,62:2,63:3,64:4,65:5,66:6,67:7,21:0,68:3,69:7};
  const WET=new Set([64,65]),D4=[[1,0],[-1,0],[0,1],[0,-1]];
  const gcode=(x,y)=>{let t=tileAt(x,y);if(t===31)t=W.under[y*MW+x]||60;return t};
  W.fords=[];W.marsh=[];
  for(let ty=0;ty<MH;ty++)for(let tx=0;tx<MW;tx++){const t=gcode(tx,ty);let c=(r()*8)|0,row=ROW[t]??0;
    if(WET.has(t)){const edge=D4.some(([dx,dy])=>!WET.has(gcode(tx+dx,ty+dy)));if(t===65&&edge)c=4+(c&3);else{c&=3;(t===64?W.fords:W.marsh).push([tx,ty])}}
    else if(D4.some(([dx,dy])=>gcode(tx+dx,ty+dy)===64)&&r()<.85){row=4;c=4+(c&3)}
    else if(t===67&&W.region(tx,ty)==='camp'){const q=r();if(q<.35){row=1}else c=q<.75?0:q<.92?2:1}
    groundTile(fg,G,c,row,tx,ty);
    if(t===21||t===68||t===69){fg.fillStyle='rgba(3,4,6,.55)';fg.fillRect(tx*16,ty*16,16,16)}}
  // Natural boundaries blend continuously in the atlas material.
  floorAO(fg,new Set([31,68,69]));
  groundDetails(fg);
  const floor=new THREE.Mesh(floorGeo,groundMaterial(phong({map:surfaceTex(fc),alphaTest:.5,color:0x8e98a6})));floor.position.set(MW/2,0,MH/2);floor.receiveShadow=true;ROOT.add(floor);
  // animated ford and marsh water on top of the ground (K1 rows 4 and 5, frames 0-3)
  W.water=[[4,W.fords,0x7c8a9c],[5,W.marsh,0x6c7c7a]].map(([row,list,col])=>{const c=canvas(64,64),tex=texFrom(c,true);const o={frames:[0,1,2,3].map(i=>tcut(G,i,row)),g:c.getContext('2d'),tex,f:-1};
    const wg=new THREE.PlaneGeometry(1,1);wg.rotateX(-Math.PI/2);instanced(wg,liquidMat({map:tex,color:col,shininess:38,specular:0x293d40}),list,([x,y])=>M4.makeTranslation(x+.5,.012,y+.5),false,true).frustumCulled=false;return o});
  // walls: rock rim of the valley topped with forest canopy, log palisade of the camp, the ruined watchtower
  const box=h=>{const g=new THREE.BoxGeometry(1,h,1);g.translate(0,h/2,0);return g};
  const addWalls=(list,h,side,cap,tint=0xffffff)=>{if(!list.length)return;const sm=cutCircle(phong({map:side,color:tint})),cm=cutCircle(phong({map:cap,color:tint}));instanced(box(h),[sm,sm,cm,cm,sm,sm],list,([x,y])=>M4.makeTranslation(x+.5,0,y+.5)).frustumCulled=false};
  const rc=()=>(r()*8)|0;
  const gR=[[],[],[]],gP=[[],[]],gT=[];
  for(const [x,y,t] of walls){if(t===69)gP[(x+y)&1].push([x,y]);else if(t===68)gT.push([x,y]);else gR[(x*5+y*3)%3].push([x,y])}
  gR.forEach(l=>addWalls(l,3.4,stackTex(WL,[[rc(),1],[rc(),1],[rc(),1]]),texFrom(tcut(WL,rc(),7),true),0x9aa096));
  gP.forEach(l=>addWalls(l,2.3,stackTex(WL,[[rc(),0],[rc(),0],[rc(),0]]),texFrom(tcut(WL,rc(),0),true)));
  addWalls(gT,4.4,stackTex(WL,[[rc(),5],[rc(),5],[rc(),5]]),texFrom(tcut(WL,rc(),5),true),0xb0b0b4);
  // K3 objects: [x, y, w, h, scale]; trees at full size, undergrowth smaller
  const OBJ={spruce:[0,0,64,64,1],dead_spruce:[64,0,64,64,1],dead_oak:[128,0,64,64,1],birch:[192,0,64,64,1],sacred_oak:[0,64,128,128,1],tall_pine:[128,64,64,128,1],hanging_tree:[192,64,64,128,1],
    mossy_boulder:[0,192,64,64,.38],fallen_log:[64,192,64,64,.38],standing_stone_dark:[128,192,64,64,.55],standing_stone_lit:[192,192,64,64,.55],reeds:[0,256,64,64,.32],brambles:[64,256,64,64,.25],mushrooms:[128,256,64,64,.12],
    burial_mound:[192,256,64,64,.35],axe_stump:[0,320,64,64,.22],ferns:[64,320,64,64,.22],wolf_skull_bush:[128,320,64,64,.25],drowned_cart:[192,320,64,64,.4]};
  const geos={},G2=(w,h)=>{const k=w+'x'+h;if(!geos[k]){const g=new THREE.PlaneGeometry(w/16,h/16).translate(0,h/32-2/16,0),n=g.attributes.normal;for(let i=0;i<n.count;i++)n.setXYZ(i,0,.8,.6);geos[k]=g}return geos[k]};
  const FR={};for(const k in OBJ){const o=OBJ[k];FR[k]=procFrame(T,o[0],o[1],o[2],o[3],'prop');cutCircle(FR[k].n);if(/spruce|pine|birch|oak|hanging_tree/.test(k))foliageWind(FR[k])}
  const byK={};for(const p of PROPS)if(OBJ[p.k])(byK[p.k]=byK[p.k]||[]).push(p);
  let saplings=0;for(const p of PROPS){if(!p.tree||!['spruce','birch'].includes(p.k)||saplings>=8||groundHash(Math.floor(p.x),Math.floor(p.y))%7!==0)continue;const x=p.x+.26,y=p.y-.3,i=Math.floor(y)*MW+Math.floor(x);if(tileAt(Math.floor(x),Math.floor(y))!==31||W.clearways.has(i))continue;(byK[p.k]||(byK[p.k]=[])).push({...p,x,y,artSmall:true});saplings++}

  for(const k in byK){const o=OBJ[k],s=o[4],low=k==='ferns'||k==='reeds'||k==='mushrooms'||k==='brambles';
    const im=instanced(G2(o[2],o[3]),FR[k].n,byK[k],p=>M4.compose(V.set(p.x,0,p.y),Q.identity(),SC.set((p.flip?-1:1)*s*(p.artSmall?.62:1)*(p.tree?(.94+.06*Math.sin(p.x*.71+p.y*.39)):1),s*SQ*(p.artSmall?.62:1)*(k==='tall_pine'?.85:p.tree?(.94+.06*Math.sin(p.x*.71+p.y*.39)):1),s)),!low,false);im.customDistanceMaterial=FR[k].d;im.frustumCulled=false}
  // standing stones are separate meshes, they light up one by one
  for(const p of PROPS)if(p.stone!==undefined){const s=OBJ.standing_stone_dark[4],m=new THREE.Mesh(G2(64,64),FR.standing_stone_dark.n);m.customDistanceMaterial=FR.standing_stone_dark.d;m.castShadow=true;m.position.set(p.x,0,p.y);m.scale.set(s,s*SQ,s);ROOT.add(m);
    propObjs.push({mesh:m,frames:[FR.standing_stone_dark,FR.standing_stone_lit],fps:0,ph:0,kind:'stone',si:p.stone})}
  // camp and roadside props from chapter I
  const RB={impaled_head:[32,0,32,32],shrine:[96,32,32,32],gallows:[0,64,64,32],debris_fire_0:[64,64,32,32],debris_fire_1:[96,64,32,32],debris_fire_2:[0,96,32,32],debris_fire_3:[32,96,32,32],wheel:[64,96,32,32],barrel:[96,96,32,32],
    marga_cart:[0,128,64,32],crow_post:[64,128,32,32],covered_corpses:[96,128,32,32],burnt_hay:[64,160,32,32]};
  // K4: camp, ritual and roadside props (32 px cells, the wagon spans two)
  const RK={cz_fire_0:[0,0],cz_fire_1:[32,0],cz_fire_2:[64,0],cz_fire_3:[96,0],cz_idol:[0,32],cz_skullpole:[32,32],cz_shrine:[64,32],cz_shrine_burnt:[96,32],cz_wagon:[0,64,64],cz_cauldron:[64,64],cz_firewood:[96,64],
    cz_gallows:[0,96],cz_sacpole:[32,96],cz_beehive:[64,96],cz_wheel:[96,96],cz_wisp_0:[0,128],cz_wisp_1:[32,128],cz_crow_0:[64,128],cz_crow_1:[96,128],cz_walk:[0,160],cz_tent:[32,160],cz_pelts:[64,160],cz_bones:[96,160]};
  const PF={},RC={};for(const k in RB){PF[k]=procFrame(I.br_props,RB[k][0],RB[k][1],RB[k][2],RB[k][3],'prop');RC[k]=RB[k]}
  if(I.cz_props)for(const k in RK){const [x,y,w=32]=RK[k];RC[k]=[x,y,w,32];PF[k]=procFrame(I.cz_props,x,y,w,32,'prop')}
  const ANIM={fire:['debris_fire',4],campfire:[I.cz_props?'cz_fire':'debris_fire',4],wisp:['cz_wisp',2],crow:['cz_crow',2]};
  for(const p of PROPS){if(OBJ[p.k]||p.stone!==undefined)continue;let frames,rc2;
    if(!PF[p.k]&&!ANIM[p.anim]&&p.shrine===undefined){const alt={cz_skullpole:'impaled_head',cz_gallows:'gallows',cz_wagon:'marga_cart',cz_tent:'burnt_hay',cz_cauldron:'barrel',cz_firewood:'barrel',cz_beehive:'barrel',cz_wheel:'wheel',cz_idol:'crow_post',cz_sacpole:'crow_post',cz_pelts:'burnt_hay',cz_bones:'covered_corpses'}[p.k];if(alt)p.k=alt}
    if(ANIM[p.anim]&&PF[ANIM[p.anim][0]+'_0']){const [k,n]=ANIM[p.anim];frames=[...Array(n).keys()].map(i=>PF[k+'_'+i]);rc2=RC[k+'_0']}
    else if(p.shrine!==undefined){frames=PF.cz_shrine?[PF.cz_shrine,PF.cz_shrine_burnt]:[PF.shrine,PF.shrine];rc2=RC.cz_shrine||RB.shrine}
    else{frames=[PF[p.k]];rc2=RC[p.k]}
    if(!frames[0])continue;
    const o={mesh:mkProp(frames,p.x,p.y,rc2),frames,fps:p.anim==='crow'?1.5:p.anim==='wisp'?3:p.anim?6:0,ph:Math.random()*3,kind:p.shrine!==undefined?'shrine':p.anim?'anim':'static',si:p.shrine};
    if(p.k==='covered_corpses'||p.k==='cz_walk'||p.k==='cz_bones'||p.k==='cz_pelts'||p.anim==='wisp')o.mesh.castShadow=false;if(p.anim==='wisp')o.mesh.position.y=.35;propObjs.push(o)}
}

// Chapter V: curated, human-scale K3/K4 furnishings; the Lower City sheet supplies only shrines.
function buildCytadela(I){planGround(5);
  const r=rng((W.seed^0x7c7c)>>>0),G=I.cy_ground,WL=I.cy_walls;
  const fc=canvas(WW,WH),fg=fc.getContext('2d');
  const ROW={70:0,71:1,72:2,73:3,74:4,75:5,76:6,77:7,21:0,78:0,80:5};
  const BASE={dziedziniec:0,kancelaria:2,sala:1,skarbiec:4,krypta:5,tron:1};
  const gcode=(x,y)=>{let t=tileAt(x,y);if(t===31)t=W.under[y*MW+x]||70;return t};
  for(let ty=0;ty<MH;ty++)for(let tx=0;tx<MW;tx++){const t=gcode(tx,ty);const row=ROW[t]??BASE[W.region(tx,ty)]??0;
    groundTile(fg,G,((r()*8)|0),t===78?BASE[W.region(tx,ty)]:row,tx,ty);
    if(t===21||t===78||t===80){fg.fillStyle='rgba(3,3,6,.55)';fg.fillRect(tx*16,ty*16,16,16)}}
  floorAO(fg,new Set([31,22,27]));
  groundDetails(fg);
  const floor=new THREE.Mesh(floorGeo,groundMaterial(phong({map:surfaceTex(fc),alphaTest:.5,color:0x9a949c})));floor.position.set(MW/2,0,MH/2);floor.receiveShadow=true;ROOT.add(floor);
  // walls: every hall has its own face (r0 fortress stone, r1 bookcases, r2 black marble, r4 vault plates, r3 bars), roof caps from r6
  const box=h=>{const g=new THREE.BoxGeometry(1,h,1);g.translate(0,h/2,0);return g};
  const rc=()=>(r()*8)|0;
  const addWalls=(list,h,row,tint=0xffffff)=>{if(!list.length)return;const side=cutaway(phong({map:stackTex(WL,[[rc(),row],[rc(),row],[rc(),row]]),color:tint})),cap=cutaway(phong({map:texFrom(tcut(WL,rc(),6),true),color:tint}));instanced(box(h),[side,side,cap,cap,side,side],list,([x,y])=>M4.makeTranslation(x+.5,0,y+.5)).frustumCulled=false};
  const WROW={dziedziniec:0,kancelaria:1,sala:2,skarbiec:4,krypta:0,tron:2};
  const rim=[[],[]],bars=[],inner={};
  for(const [x,y,t] of walls){if(t===80)bars.push([x,y]);else if(t===21)rim[(x+y)&1].push([x,y]);else{const k=W.region(x,y);(inner[k]=inner[k]||[[],[]])[(x+y)&1].push([x,y])}}
  rim.forEach(l=>addWalls(l,4.4,0,0x8a8890));
  for(const k in inner)inner[k].forEach(l=>addWalls(l,3.4,WROW[k]));
  addWalls(bars,2.2,3);
  const R={brazier_0:[0,0,32,32],brazier_1:[32,0,32,32],brazier_2:[64,0,32,32],brazier_3:[96,0,32,32],king_statue:[0,32,32,64],healing_shrine:[32,64,32,32],depleted_shrine:[64,64,32,32],chains:[96,64,32,32],
    fallen_pillar:[0,96,64,32],dwarf_bones:[64,96,32,32],sarcophagus:[0,160,32,32],rune_lantern:[32,160,32,32],clan_banner:[96,160,32,32]};
  const PF={};for(const k in R)PF[k]=procFrame(I.dm_props,...R[k],'prop');
  const BG=I.cy_big,KP=I.cy_props;
  if(!BG){
    const pilT=texFrom(tcut(WL,0,7),true);pilT.repeat.set(2,4);const stoneT=texFrom(tcut(G,2,1),true);
    const pilGeo=new THREE.CylinderGeometry(.36,.38,4,8);pilGeo.translate(0,2,0);
    instanced(pilGeo,cutaway(phong({map:pilT})),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
    const baseGeo=new THREE.BoxGeometry(.95,.35,.95);baseGeo.translate(0,.175,0);instanced(baseGeo,phong({map:stoneT}),pillars,([x,y])=>M4.makeTranslation(x+.5,0,y+.5));
    for(const [x,y] of braziers){const frames=[0,1,2,3].map(i=>PF['brazier_'+i]);propObjs.push({mesh:mkProp(frames,x+.5,y+.92,R.brazier_0),frames,fps:6,ph:Math.random()*3})}
  }else{
    // K3 big objects [x, y, w, h, scale]; 64 px cells at 16 px per tile
    const OBJ={pillar_a:[0,0,64,64,0.55],pillar_b:[64,0,64,64,0.55],bookcase_a:[128,0,64,64,0.5],bookcase_b:[192,0,64,64,0.5],statue_a:[0,64,64,64,0.55],statue_b:[64,64,64,64,0.55],scale:[128,64,64,64,0.48],vault:[192,64,64,64,0.52],
      bench_a:[0,128,64,64,0.48],bench_b:[64,128,64,64,0.48],cage:[128,128,64,64,0.48],rack:[192,128,64,64,0.42],ledgers:[0,192,64,64,0.24],lectern:[64,192,64,64,0.3],goldheap:[128,192,64,64,0.34],chest:[192,192,64,64,0.3],
      gallows:[0,256,64,64,0.65],brazier_0:[64,256,64,64,0.45],brazier_1:[128,256,64,64,0.45],candelabra:[192,256,64,64,0.4],throne:[0,320,128,64,0.55],armour:[128,320,64,64,0.42],well:[192,320,64,64,0.42],chest_open:[0,384,64,64,0.3]};
    const geos={},G2=(w,h)=>{const k=w+'x'+h;if(!geos[k]){const g=new THREE.PlaneGeometry(w/16,h/16).translate(0,h/32-2/16,0),n=g.attributes.normal;for(let i=0;i<n.count;i++)n.setXYZ(i,0,.8,.6);geos[k]=g}return geos[k]};
    const FR={};for(const k in OBJ){const o=OBJ[k];FR[k]=procFrame(BG,o[0],o[1],o[2],o[3],'prop');cutCircle(FR[k].n)}
    const putObj=(k,x,y,flip)=>{const o=OBJ[k],s=o[4],m=new THREE.Mesh(G2(o[2],o[3]),FR[k].n);m.customDistanceMaterial=FR[k].d;m.userData.propAsset=true;m.castShadow=true;m.position.set(x,0,y);m.scale.set(flip?-s:s,s*SQ,s);ROOT.add(m);return m};
    pillars.forEach(([x,y],i)=>putObj((x*3+y)%2?'pillar_a':'pillar_b',x+.5,y+.92,false));
    for(const [x,y] of braziers){const fr=[FR.brazier_0,FR.brazier_1],m=putObj('brazier_0',x+.5,y+.92,false);propObjs.push({mesh:m,frames:fr,fps:5,ph:Math.random()*3})}
    for(const p of PROPS)if(OBJ[p.k]){const artKey=p.k==='bench_a'?'bench_b':p.k;const m=putObj(artKey,p.x,p.y,false);p.obj={mesh:m}}
  }
  // K4 small props, 32 px cells; the healing shrine still comes from the Lower City sheet
  const RK={torch_0:[0,0],torch_1:[32,0],torch_2:[64,0],torch_3:[96,0],scroll:[0,32],book:[32,32],inkwell:[64,32],seal:[96,32],chains_0:[0,64],chains_1:[32,64],shackles:[64,64],skull:[96,64],
    chair:[0,96],desk:[32,96],inkbarrel:[64,96],cart:[96,96],pages_0:[0,128],pages_1:[32,128],raven_0:[64,128],raven_1:[96,128],purse:[0,160],goblet:[32,160],keys:[64,160],swordbooks:[96,160]};
  const KF={};if(KP)for(const k in RK)KF[k]=procFrame(KP,RK[k][0],RK[k][1],32,32,'prop');
  const ANIM={torch:['torch',4,6],chains:['chains',2,2],pages:['pages',2,2.5],raven:['raven',2,1.5]};
  for(const p of PROPS){if(p.obj&&BG&&p.shrine===undefined)continue;
    const sh=p.shrine!==undefined;let frames,fps=0;
    if(sh)frames=[PF.healing_shrine,PF.depleted_shrine];
    else if(p.anim&&ANIM[p.anim]&&KF[ANIM[p.anim][0]+'_0']){const [k,n,f]=ANIM[p.anim];frames=[...Array(n).keys()].map(i=>KF[k+'_'+i]);fps=f}
    else if(KF[p.k])frames=[KF[p.k]];
    else frames=[PF[p.k]];
    if(!frames[0])continue;
    const o={mesh:mkProp(frames,p.x,p.y,[0,0,32,32]),frames,fps,ph:Math.random()*3,kind:sh?'shrine':fps?'anim':'static',si:p.shrine,prop:p};
    {const SCL={scroll:.2,book:.17,inkwell:.16,seal:.14,pages:.18,purse:.2,goblet:.18,keys:.16,shackles:.24,skull:.24,swordbooks:.28,chair:.48,desk:.5,inkbarrel:.42,cart:.5,torch:.5,chains:.5,healing_shrine:.75},c=SCL[p.k]||SCL[p.anim]||1;if(c!==1)o.mesh.scale.set(c,SQ*c,c)}
    if(!sh&&(p.k==='shackles'||p.k==='skull'||p.k==='scroll'||p.k==='pages'||p.k==='book'||p.k==='torch'||p.k==='chains'))o.mesh.castShadow=false;p.obj=o;propObjs.push(o)}
}

// Morhad, the Beast of a Thousand Slaughters: a placeholder sheet drawn in code until the ChatGPT one arrives (2x3 cells of 64 px)
function beastSheet(){
  const c=canvas(128,192),g=c.getContext('2d'),r=rng(66);
  const INK='#08070a',F1='#29201a',F2='#3d3127',F3='#5a4632',M1='#4a1f1c',M2='#6b2c26',M3='#8c4c40',B1='#d8cfb8',B2='#9d9584',BL='#951518',BL2='#560a0d',EYE='#ff2a2a',WG='#2e0b0e',WG2='#4a1418';
  let OX=0,OY=0;
  const inC=(x,y)=>x>=0&&y>=0&&x<64&&y<64;
  const px=(x,y,col)=>{x=Math.round(x);y=Math.round(y);if(!inC(x,y))return;g.fillStyle=col;g.fillRect(OX+x,OY+y,1,1)};
  const ell=(cx,cy,rx,ry,col)=>{for(let y=-Math.ceil(ry);y<=ry;y++){const w=Math.round(rx*Math.sqrt(Math.max(0,1-(y*y)/(ry*ry))));for(let x=-w;x<=w;x++)px(cx+x,cy+y,col)}};
  const limb=(pts,w0,w1,col)=>{for(let s=0;s<pts.length-1;s++){const [x0,y0]=pts[s],[x1,y1]=pts[s+1],n=Math.ceil(Math.hypot(x1-x0,y1-y0))*2;for(let i=0;i<=n;i++){const t=(s+i/n)/(pts.length-1),w=w0+(w1-w0)*t;ell(x0+(x1-x0)*i/n,y0+(y1-y0)*i/n,w,w,col)}}};
  const poly=(pts,col)=>{let y0=64,y1=0;for(const p of pts){y0=Math.min(y0,p[1]);y1=Math.max(y1,p[1])}
    for(let y=Math.floor(y0);y<=y1;y++){const xs=[];for(let i=0;i<pts.length;i++){const [ax,ay]=pts[i],[bx,by]=pts[(i+1)%pts.length];if((ay<=y&&by>y)||(by<=y&&ay>y))xs.push(ax+(y-ay)/(by-ay)*(bx-ax))}xs.sort((a,b)=>a-b);for(let k=0;k+1<xs.length;k+=2)for(let x=Math.ceil(xs[k]);x<=xs[k+1];x++)px(x,y,col)}};
  const drips=(x,y,n,len)=>{for(let i=0;i<n;i++){const dx=x+((r()-.5)*6)|0,l=2+((r()*len)|0);for(let k=0;k<l;k++)px(dx,y+k,k<l-1?BL:BL2)}};
  const smear=(cx,cy,rx,ry,n)=>{for(let i=0;i<n;i++)px(cx+(r()-.5)*2*rx,cy+(r()-.5)*2*ry,r()<.6?BL:BL2)};
  const wings=(spread)=>{for(const s of [-1,1]){const sh=[32+s*10,26],el=[32+s*(17+9*spread),14-8*spread],t1=[32+s*(24+7*spread),3],t2=[32+s*(30+1*spread),12+4*(1-spread)],t3=[32+s*(29),26],t4=[32+s*22,34];
      poly([sh,el,t1,[el[0]+s*3,el[1]+5],t2,[el[0]+s*4,el[1]+12],t3,[el[0]+s*1,el[1]+17],t4,[32+s*12,34]],WG);
      for(const t of [t1,t2,t3])limb([el,t],1,.4,B2);limb([sh,el],1.6,1.2,F1);
      for(let i=0;i<10;i++)px(sh[0]+s*(4+r()*14),20+r()*14,WG2);px(t1[0],t1[1],B1)}};
  const body=(k,pose)=>{
    const st=pose==='walk'?(k?2:-2):0;
    if(pose==='wind')wings(1);else wings(.45);
    // legs: digitigrade, hooved
    limb([[25,44],[23+st,52],[25+st,61]],3.4,2.2,F1);limb([[39,44],[41-st,52],[39-st,61]],3.4,2.2,F1);
    limb([[25,45],[23+st,52]],1.4,1,F2);limb([[39,45],[41-st,52]],1.4,1,F2);
    for(const [x,y] of [[25+st,61],[39-st,61]]){ell(x,y,2.5,1,INK);px(x-2,61,B2);px(x+2,61,B2)}
    // hulking torso, flayed chest, ribs
    ell(32,37,13,10,F1);ell(32,35,11,8,F2);ell(32,33,7,6,M1);ell(32,32,5,4,M2);
    for(const y of [30,32,34,36]){for(let x=-5;x<=5;x++)if(Math.abs(x)>1)px(32+x,y+Math.abs(x)*.2,M3)}
    px(32,29,B2);px(32,31,B2);px(32,33,B2);
    ell(20,26,7,6,F1);ell(44,26,7,6,F1);ell(20,25,5,4,F2);ell(44,25,5,4,F2);ell(19,24,2,1,F3);ell(45,24,2,1,F3);
    // spikes and small horns erupting along the shoulders
    for(const s of [-1,1])for(const [ox,oy,l] of [[9,22,4],[13,20,3],[6,25,3]]){limb([[32+s*ox,oy],[32+s*(ox+2),oy-l]],1,.3,B2);px(32+s*(ox+2),oy-l,B1)}
    // arms: long, ape-like, claws dripping
    const arm=pose==='wind'?[[[19,27],[13,15],[18,5]],[[45,27],[51,15],[46,5]]]:pose==='swing'?[[[19,27],[16,39],[23,50]],[[45,27],[48,39],[41,50]]]:[[[19,27],[14,39],[15+st*.5,51]],[[45,27],[50,39],[49-st*.5,51]]];
    for(const a of arm){limb(a,3.6,2.4,F1);limb(a.slice(0,2),1.6,1.2,F2);const h=a[2];ell(h[0],h[1],3,2.5,F1);
      const dn=pose==='wind'?-1:1;for(const o of [-2,0,2]){px(h[0]+o,h[1]+dn*3,B1);px(h[0]+o,h[1]+dn*4,B2)}
      smear(h[0],h[1]-dn*4,4,5,14);if(pose!=='wind')drips(h[0],h[1]+5,3,5)}
    // head: low between the shoulders, open jaw full of fangs, glowing eyes
    ell(32,22,6,5,F1);ell(32,21,4,3,F2);ell(32,25,4,3,M1);
    for(let x=-3;x<=3;x++){px(32+x,25,INK);px(32+x,26,INK);px(32+x,27,x%2?BL2:INK)}
    for(const x of [-3,-1,1,3]){px(32+x,25,B1)}px(30,27,B1);px(34,27,B1);
    px(29,21,EYE);px(30,21,EYE);px(34,21,EYE);px(35,21,EYE);px(31,19,EYE);px(33,19,EYE);
    // great horns curling up and out
    for(const s of [-1,1]){const H=[[32+s*4,18],[32+s*9,15],[32+s*13,10],[32+s*13,4],[32+s*10,1]];limb(H,2.2,.6,B2);for(let i=1;i<H.length-1;i++)px(H[i][0]-s,H[i][1],B1)}
    // fur and gore
    for(let i=0;i<70;i++){const a=r()*Math.PI*2,d=8+r()*7;px(32+Math.cos(a)*d*1.3,33+Math.sin(a)*d*.9,r()<.5?F3:F1)}
    smear(32,36,10,8,36);smear(32,24,5,2,8);drips(32,28,5,7);drips(26,44,3,6);drips(38,44,3,6);
    if(pose==='swing'){for(let i=0;i<24;i++)px(20+r()*24,48+r()*12,r()<.6?BL:BL2)}
  };
  const dead=(k)=>{
    ell(32,59,27,4,BL2);ell(30,59,20,3,BL);
    poly([[10,56],[2,46+k*3],[16,50],[24,54]],WG);poly([[54,56],[62,48+k*3],[48,50],[40,54]],WG);
    ell(32,54-k,19,7-k*2,F1);ell(32,53-k,15,5-k,F2);ell(30,52,6,3,M1);for(const x of [26,29,32,35])px(x,52,M3);
    ell(50,56,5,4,F1);px(49,55,EYE);px(52,55,'#4a1f1c');limb([[52,53],[56,48],[58,44]],1.6,.5,B2);limb([[47,53],[44,47]],1.4,.5,B2);
    limb([[18,55],[10,58],[6,59]],2.4,1.6,F1);for(const o of [-1,1])px(5+o,60,B1);
    smear(32,54,18,5,60);drips(20,57,4,3);drips(44,57,4,3)};
  const cell=(cx,cy,fn)=>{OX=cx*64;OY=cy*64;fn()};
  cell(0,0,()=>body(0,'walk'));cell(1,0,()=>body(1,'walk'));
  cell(0,1,()=>body(0,'wind'));cell(1,1,()=>body(0,'swing'));
  cell(0,2,()=>dead(0));cell(1,2,()=>dead(1));
  return c;
}

// lights: many sources per chapter, only the 10 closest to the camera feed a fixed pool of point lights
const LPOOL=[];for(let i=0;i<10;i++){const l=new THREE.PointLight(0xffffff,0,8,2);scene.add(l);LPOOL.push(l)}
const plLight=new THREE.PointLight(0xffd2a0,2.1,13,2);plLight.castShadow=true;plLight.shadow.mapSize.set(1024,1024);plLight.shadow.camera.near=.2;plLight.shadow.camera.far=16;plLight.shadow.bias=-.002;plLight.shadow.radius=2;scene.add(plLight);

// Chapters I-III keep their hand-made layouts, stretched to the bigger map; enrich() fills the new room
// with extra buildings, props, four "altars" for the kill-next-to-it event, traps and the 9:00 wave (big-map coordinates)
function enrich(w,ch){
  const r=rng(ch*7919+13),M=w.map,U=w.under,P=w.PROPS;
  const keep=w.clearways||(w.clearways=new Set()),keepRect=(x,y,ww,hh)=>{for(let Y=y;Y<y+hh;Y++)for(let X=x;X<x+ww;X++)keep.add(Y*MW+X)};
  const T=(x,y)=>(x<1||y<1||x>=MW-1||y>=MH-1)?21:M[y*MW+x];
  const FLOOR={1:[41,42,47],2:[20,26],3:[50,52,53,57]}[ch];
  const busy=(x,y,d)=>{for(let Y=Math.floor(y-d);Y<=y+d;Y++)for(let X=Math.floor(x-d);X<=x+d;X++)if(keep.has(Y*MW+X))return true;return P.some(p=>Math.abs(p.x-x-.5)<d&&Math.abs(p.y-y-.92)<d)||w.npcs.some(n=>Math.abs(n.x/16-x)<d+1.5&&Math.abs(n.y/16-y)<d+1.5)||w.shrines.some(s=>Math.abs(s.x/16-x)<d+1.5&&Math.abs(s.y/16-y)<d+1.5)||Math.hypot(w.start.x/16-x,w.start.y/16-y)<7};
  const okRect=(x0,y0,ww,hh,pad=1)=>{for(let y=y0-pad;y<y0+hh+pad;y++)for(let x=x0-pad;x<x0+ww+pad;x++)if(!FLOOR.includes(T(x,y)))return false;return !busy(x0+ww/2,y0+hh/2,Math.max(ww,hh)/2+1.5)};
  const add=(k,x,y,solid,extra)=>{if((ch===1||ch===3)&&GONE_PROPS.has(k))return;P.push(Object.assign({k,x:x+.5,y:y+.92},extra||{}));if(solid){U[y*MW+x]=M[y*MW+x];M[y*MW+x]=31}};
  const spot=(ok,d=2.5)=>{for(let i=0;i<300;i++){const x=3+((r()*(MW-6))|0),y=3+((r()*(MH-6))|0);if(FLOOR.includes(T(x,y))&&!busy(x,y,d)&&[-1,0,1].every(dy=>[-1,0,1].every(dx=>!SOLID.has(T(x+dx,y+dy))))&&(!ok||ok(x,y)))return[x,y]}return null};
  const scatter=(k,n,solid=true,d=2.5,ok,extra)=>{for(let i=0;i<n;i++){const s=spot(ok,d);if(s)add(k,s[0],s[1],solid,extra)}};
  // a building: hollow (walls + floor + door to the south) or a solid block
  const building=(ww,hh,wall,floor,hollow,ok)=>{for(let i=0;i<400;i++){const x=4+((r()*(MW-8-ww))|0),y=4+((r()*(MH-8-hh))|0);if(!okRect(x,y,ww,hh)||(ok&&!ok(x,y)))continue;
      for(let yy=y;yy<y+hh;yy++)for(let xx=x;xx<x+ww;xx++){const edge=xx===x||yy===y||xx===x+ww-1||yy===y+hh-1;M[yy*MW+xx]=!hollow||edge?wall:floor}
      if(hollow){const dx=x+(ww>>1);for(let o=-1;o<=1;o++)M[(y+hh-1)*MW+dx+o]=floor;keepRect(dx-1,y+hh-3,3,5)}return[x,y,ww,hh]}return null};
  const quad=i=>(x,y)=>((x<MW/2)===(i%2===0))&&((y<MH/2)===(i<2));
  if(ch===1){
    // five more burned huts with fires still smouldering inside, a second camp of the order, more dead and debris
    for(let i=0;i<2;i++){const b=building(6+((r()*3)|0),5+((r()*2)|0),48,43,true);if(!b)continue;const [x,y,ww,hh]=b;
      for(let yy=y;yy<y+hh;yy++)for(let xx=x;xx<x+ww;xx++)if(M[yy*MW+xx]===48&&r()<.15)M[yy*MW+xx]=44;
      if(r()<.6)add('debris_fire',x+(ww>>1),y+1,true,{fire:true,anim:'fire'});else add('burnt_hay',x+1,y+1,true)}
    {const s=spot(null,5);if(s){const [x,y]=s;add('order_bonfire',x,y,true,{fire:true,big:true});add('order_banner',x-2,y-1,true);add('order_banner',x+2,y-1,true);add('covered_corpses',x+1,y+2,false)}}
    scatter('dead_tree',6);scatter('barrel',3);scatter('wheel',2,false);scatter('covered_corpses',2,false);scatter('crow_post',2);scatter('dead_horse',1);scatter('burnt_hay',2,false);
    scatter('impaled_head',4,true,2,(x,y)=>T(x+1,y)===40||T(x-1,y)===40||T(x,y+1)===40||T(x,y-1)===40);
    // trap: some of the shrouded dead are not dead
    scatter('covered_corpses',3,false,3,null,{ambush:1});
    for(let i=0;i<4;i++){const s=spot(quad(i),4);if(s)add('tombstone',s[0],s[1],true,{stone:i})}
    w.altar={col:0x9ad0ff,pc:'#bfe8ff',hint:(EN?'Graves of the burned stand at the four corners of the village. Spill the blood of their killers beside them and the souls will rest in peace.':'W czterech krańcach wsi stoją groby spalonych. Przelej przy nich krew ich oprawców, a dusze odejdą w spokoju.'),
      one:n=>(EN?`The grave flares with a pale light. Souls at rest: ${n} of 4.`:`Grób rozbłyska bladym światłem. Dusze w spokoju: ${n} z 4.`),all:(EN?'The souls of the burned depart. They heal your wounds and leave 30 coins behind.':'Dusze spalonych odchodzą. Leczą twoje rany i zostawiają 30 monet.')};
    w.wave={msg:(EN?'A crusade of the Holy Order marches in from the southern road. Fanatics advance in column.':'Od południowej drogi nadciąga krucjata zakonu. Fanatycy maszerują kolumną.'),list:[['knight',7],['possessed',6]]}}
  if(ch===2){
    // more of the dead dwarven city: bones, sarcophagi, carts, banners, braziers, and barrels of black powder that blow up
    for(let i=0;i<3;i++){const s=spot(null,4);if(s)M[s[1]*MW+s[0]]=27}
    scatter('dwarf_bones',10,false,1.5);scatter('chains',2);scatter('sarcophagus',3);scatter('mine_cart',2);scatter('clan_banner',3);scatter('anvil',1);scatter('pickaxe_rack',1);scatter('black_powder',4,true,3);
    for(let i=0;i<4;i++){const s=spot(quad(i),4);if(s)add('rune_lantern',s[0],s[1],true,{stone:i})}
    w.altar={col:0x5fb0ff,pc:'#7fd0ff',hint:(EN?'Four extinguished rune lanterns stand in the corners of the hall. Blood spilled nearby will wake the runes. Powder kegs explode when someone dies next to them.':'W rogach sali stoją cztery wygasłe latarnie runiczne. Krew przelana obok obudzi runy. Beczki prochu wybuchają, gdy ktoś przy nich zginie.'),
      one:n=>(EN?`A rune lantern awakens. Lit: ${n} of 4.`:`Latarnia runiczna budzi się. Zapalone: ${n} z 4.`),all:(EN?'The smiths\' runes sing. Your wounds close, and 30 coins spill from the stone.':'Runy kowali śpiewają. Rany się zamykają, a z kamienia sypie się 30 monet.')};
    w.wave={msg:(EN?'The mine shaft collapses. Dead miners pour out of the darkness.':'Sztolnia się zawala. Z ciemności wysypują się martwi górnicy.'),list:[['dwarf',12],['warden',2]]}}
  if(ch===3){
    // more slum shacks and townhouses, plague carts, gibbets, lanterns, beggars, rot blooms that burst when you pass
    for(let i=0;i<2;i++)building(3+((r()*2)|0),2+((r()*2)|0),59,53,false,(x,y)=>y>MH*.6);
    for(let i=0;i<1;i++)building(6+((r()*3)|0),5+((r()*2)|0),58,50,false,(x,y)=>y<MH*.55);
    scatter('beggar_bodies',5,false,2);scatter('plague_cart',2);scatter('gibbet',2);scatter('street_lantern',4,true,4);scatter('barrel',3);scatter('royal_banner',2);scatter('dead_tree',2,true,2.5,(x,y)=>T(x,y)===57||y<MH*.6);
    scatter('rot_bloom',6,false,2.5,null,{anim:'bloom'});
    for(let i=0;i<4;i++){const s=spot(quad(i),4);if(s)add('offering_bowl',s[0],s[1],true,{stone:i})}
    w.altar={col:0xffcf70,pc:'#ffd27a',hint:(EN?'Empty golden offering bowls stand in four districts. Enemy blood spilled nearby will fill them. Beware the rot flowers: they burst when you walk past.':'W czterech dzielnicach stoją puste złote misy ofiarne. Krew wrogów przelana obok je napełni. Uważaj na kwiaty zgnilizny, pękają, gdy przechodzisz.'),
      one:n=>(EN?`An offering bowl fills with golden light. Full: ${n} of 4.`:`Misa ofiarna napełnia się złotym światłem. Pełne: ${n} z 4.`),all:(EN?'The golden bowls overflow. Your wounds heal, and you gather 30 coins.':'Złote misy przelewają się. Rany się goją, a ty zbierasz 30 monet.')};
    w.wave={msg:(EN?'A procession of fire leaves the monastery. Monks lead a mob of madmen.':'Z klasztoru wychodzi procesja ognia. Mnisi prowadzą tłum szaleńców.'),list:[['monk',5],['madman',8]]}}
}
function initWorld(ch){setGrid(ch);if((ch===4||ch===5)&&WORLD_SEEDS[ch]===undefined)WORLD_SEEDS[ch]=(Math.random()*2147483647)|0;
  const w=upscaleWorld(ch===1?genBrzeznica():ch===2?genDolne():ch===3?genStolica():ch===9?genDungeon((Math.random()*2147483647)|0):ch===5?genCytadela(WORLD_SEEDS[ch]):genCzarnobor(WORLD_SEEDS[ch]));if(ch<4)enrich(w,ch);
  if(ch===9)w.rooms=w.rooms.map(R=>Object.assign(SR(R),{k:R.k}));
  Object.assign(w,{ch,group:new THREE.Group(),propObjs:[],npcMeshes:{},walls:[],cliffs:[],pillars:[],lavas:[],braziers:[],waters:[],rots:[],LSRC:[]});
  for(const n of w.npcs)if(n.solid)w.map[n.solid[1]*MW+n.solid[0]]=31;
  scene.add(w.group);
  const ta=(x,y)=>(x<0||y<0||x>=MW||y>=MH)?21:w.map[y*MW+x];
  for(let y=0;y<MH;y++)for(let x=0;x<MW;x++){const t=ta(x,y);
    if(t===21){let near=false;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const n=ta(x+dx,y+dy);if(n!==21&&!(x+dx<0||y+dy<0||x+dx>=MW||y+dy>=MH))near=true}if(near)w.walls.push([x,y,21])}
    if(t===48||t===58||t===59||t===68||t===69||t===78||t===80)w.walls.push([x,y,t]);if(t===54)w.rots.push([x,y]);
    if(!VOID.has(t)&&[[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>VOID.has(ta(x+dx,y+dy))))w.cliffs.push([x,y]);
    if(t===22)w.pillars.push([x,y]);if(t===24)w.lavas.push([x,y]);if(t===27)w.braziers.push([x,y]);if(t===45)w.waters.push([x,y])}
  const lsrc=(col,int,dist,x,y,z,kind,extra)=>{const o=Object.assign({col,base:int,dist,x,y,z,kind,ph:Math.random()*9},extra||{});w.LSRC.push(o);return o};
  if(ch===2){
    w.braziers.forEach(([x,y])=>lsrc(0xff6a1a,1.35,7,x+.5,1.6,y+.6,'fire'));
    for(let x=43;x<60;x+=4){lsrc(0xff4a10,1.6,7,MP(x),.6,MP(13.5),'lava');lsrc(0xff4a10,1.6,7,MP(x),.6,MP(33.5),'lava')}
    for(let z=4;z<MH-2;z+=8)lsrc(0x7a1408,1.3,12,MP(37.5),-4,z,'abyss');
    lsrc(0xff5a14,1.9,7,MP(45),1.2,MP(7.6),'fire');lsrc(0xff5a14,1.9,7,MP(57),1.2,MP(7.6),'fire');
    for(const p of w.PROPS)if(p.k==='rune_lantern')lsrc(0x4a90e0,.55,3.5,p.x,1,p.y-.9,'rune');
    w.shrines.forEach((s,i)=>lsrc(0x5fb0ff,1.2,5,s.x/16,1.2,s.y/16+.6,'shrine',{si:i}));
    lsrc(0x5fb0ff,1.3,6,w.npcs[0].x/16,1.4,w.npcs[0].y/16+.3,'npc',{npc:'tharm'});
    for(const n of w.npcs)if(n.id==='mila')lsrc(0xffc070,1.1,5,n.x/16,1.3,n.y/16-.4,'npc',{npc:n.id});
    lsrc(0xd8e4ff,0,14,MP(51),2.2,MP(8),'gate');
  }else if(ch===3){
    w.braziers.forEach(([x,y])=>lsrc(0xff7a2a,1.6,8,x+.5,1.7,y+.6,'fire'));
    for(const p of w.PROPS){if(p.fire)lsrc(0xff6a1a,p.big?2.6:1.6,p.big?11:7,p.x,1.3,p.y-.2,'fire');if(p.k==='street_lantern')lsrc(0xffb060,1,5,p.x,1.5,p.y-.1,'fire')}
    for(const [x,y] of w.rots)if((x*13+y*7)%11===0)lsrc(0xe05a20,.8,3.5,x+.5,.4,y+.5,'rot');
    w.shrines.forEach((s,i)=>lsrc(0x5fb0ff,1.2,5,s.x/16,1.2,s.y/16+.6,'shrine',{si:i}));
    for(const n of w.npcs)lsrc(0xffc070,1.2,5,n.x/16,1.3,n.y/16-.4,'npc',{npc:n.id});
    lsrc(0xffcf70,1.8,12,MP(32),7,MP(19),'dome');
  }else if(ch===4){
    for(const p of w.PROPS)if(p.fire)lsrc(0xff7a2a,p.big?2.4:1.6,p.big?10:7,p.x,1.3,p.y-.2,'fire');
    w.shrines.forEach((s,i)=>lsrc(0xffc070,1.1,5,s.x/16,1.2,s.y/16+.6,'shrine',{si:i}));
    for(const p of w.PROPS)if(p.stone!==undefined)lsrc(0x7fd0ff,1.6,6,p.x,1.4,p.y-.3,'stone',{si:p.stone});
    // will-o'-wisps flicker over the marsh
    w.wisps=w.PROPS.filter(p=>p.k==='cz_wisp').map(p=>lsrc(0x7fffd0,.8,3.5,p.x,.8,p.y-.4,'rune'));
    for(const n of w.npcs)if(!n.lure)lsrc(0xffc070,1.1,5,n.x/16,1.3,n.y/16-.4,'npc',{npc:n.id});
    w.treeP=w.PROPS.filter(p=>p.tree).map(p=>({x:p.x*16,y:p.y*16}));
    w.stoneP=w.PROPS.filter(p=>p.stone!==undefined).sort((a,b)=>a.stone-b.stone).map(p=>({x:p.x*16,y:p.y*16}));
    w.altar={pc:'#7fd0ff',one:n=>(EN?`The stone flares blue. Stones awakened: ${n} of 5.`:`Kamień rozbłyska błękitem. Obudzone kamienie: ${n} z 5.`),all:(EN?'The circle closes. An old power heals your wounds and casts 30 coins from the earth.':'Krąg się zamyka. Stara moc leczy twoje rany i wyrzuca z ziemi 30 monet.')};
    w.barrows=w.PROPS.filter(p=>p.barrow).map(p=>({x:p.x*16,y:p.y*16+10}));
  }else if(ch===5){
    w.braziers.forEach(([x,y])=>lsrc(0xff8a30,1.5,8,x+.5,1.6,y+.6,'fire'));
    for(const p of w.PROPS)if(p.anim==='torch')lsrc(0xff8a30,.9,5,p.x,1.2,p.y-.3,'fire');else if(p.k==='candelabra')lsrc(0xffc070,.8,4,p.x,1,p.y-.3,'fire');
    w.shrines.forEach((s,i)=>lsrc(0x5fb0ff,1.2,5,s.x/16,1.2,s.y/16+.6,'shrine',{si:i}));
    for(const n of w.npcs)lsrc(0xffc070,1.1,5,n.x/16,1.3,n.y/16-.4,'npc',{npc:n.id});
    lsrc(0x9a6aff,1.4,9,MP(40),1.4,MP(6.5),'rune');lsrc(0xffcf70,1.1,10,MP(40),1.6,MP(28),'fire');
  }else if(ch===9){
    w.braziers.forEach(([x,y])=>lsrc(0xff6a1a,1.4,7,x+.5,1.6,y+.6,'fire'));
    for(const p of w.PROPS){if(p.k==='rune_lantern')lsrc(0x4a90e0,.6,3.5,p.x,1,p.y-.9,'rune');if(p.exit)lsrc(0x9a8cff,1,5,p.x,1.2,p.y+.3,'rune')}
    w.shrines.forEach((s,i)=>lsrc(0x5fb0ff,1.2,5,s.x/16,1.2,s.y/16+.6,'shrine',{si:i}));
  }else{
    {const cs=w.PROPS.find(p=>p.k==='crypt_stairs');if(cs){w.crypt={x:cs.x*16,y:(cs.y+.6)*16};lsrc(0x9a8cff,1.2,6,cs.x,1.2,cs.y+.3,'rune')}}
    for(const p of w.PROPS)if(p.fire)lsrc(0xff7a2a,p.big?2.2:1.7,p.big?10:8,p.x,1.3,p.y-.2,'fire');
    w.shrines.forEach((s,i)=>lsrc(0xffc070,1.1,5,s.x/16,1.2,s.y/16+.6,'shrine',{si:i}));
    lsrc(0xffb060,1.3,6,w.npcs[1].x/16+.2,1.1,w.npcs[1].y/16+.4,'npc',{npc:'marga'});
    for(const n of w.npcs)if(n.id==='chojrak')lsrc(0xfff0c0,1.2,5,n.x/16,1.3,n.y/16-.4,'npc',{npc:n.id});
  }
  if(ch<4){for(const p of w.PROPS)if(p.stone!==undefined)lsrc(w.altar.col,1.6,6,p.x,1.4,p.y-.3,'stone',{si:p.stone});w.stoneP=w.PROPS.filter(p=>p.stone!==undefined).sort((a,b)=>a.stone-b.stone).map(p=>({x:p.x*16,y:p.y*16}))}
  w.zoneLight=lsrc(0xff6a1a,0,7,0,1,0,'zone');w.merchantLight=lsrc(0xffb060,1.4,6,0,1.1,0,'merchant');
  WORLDS[ch]=w;
}
function ensureWorld(ch){if(!groupReady(ch))return loadGroup(ch).then(()=>ensureWorld(ch));if(WORLDS[ch])return;if(ch===4&&!IMGS.cz_ground||ch===5&&!IMGS.cy_ground)throw Error((EN?'Missing graphics for chapter ':'Brak grafik rozdziału ')+ch);initWorld(ch);useWorld(ch);ROOT=W.group;try{[null,buildBrzeznica,buildDolne,buildStolica,buildCzarnobor,buildCytadela][ch](IMGS);fitWorldProps(W,ch);finishWorldArt(W);for(const n of W.npcs){const fr=A[n.art],m=new THREE.Mesh(geo32,fr[0].n);if(fr[0].d){m.customDistanceMaterial=fr[0].d;m.castShadow=true}ROOT.add(m);W.npcMeshes[n.id]=m}buildMini()}finally{ROOT=scene}}
function useWorld(ch){CH=ch;W=WORLDS[ch];setGrid(ch);if(A&&A.collectorC5){if(!A.collectorC0)A.collectorC0=A.collector;A.collector=ch===5?A.collectorC5:A.collectorC0}
  if(A&&A.bossC5){if(!A.boss0)A.boss0=A.boss;A.boss=ch===5?A.bossC5:A.boss0}
  ({map,PROPS,LSRC,propObjs,walls,cliffs,pillars,lavas,braziers,waters,region}=W);START=W.start;SHRINES=W.shrines;
  for(const k in WORLDS)WORLDS[k].group.visible=(+k===ch);
  if(typeof applyAtmos==='function')applyAtmos()}

/* ============ SPRITE SHEETS ============ */
// sprite planes: 32 game px = 2 world units; feet line sits 2 px above the cell bottom
// depth of the visible ground strip (tiles) for the minimap frame; 13 tiles at the old 40° camera
const VIEW_H=13*Math.sin(40*Math.PI/180)/Math.sin(PITCH);
// sprites stand upright and are stretched to undo the camera tilt so that their pixels come out square, as drawn
const SQ=1/Math.cos(PITCH);
const geo32=new THREE.PlaneGeometry(2,2).translate(0,.875,0);
const geo64=new THREE.PlaneGeometry(4,4).translate(0,1.875,0);
const geoC=new THREE.PlaneGeometry(2,2);
// sprites face the camera but take light as if tilted toward the sky, so torches above still light them
for(const g of [geo32,geo64,geoC,geoT,geo64w]){const n=g.attributes.normal;for(let i=0;i<n.count;i++)n.setXYZ(i,0,.8,.6);n.needsUpdate=true}
const GLOW=[[255,42,42],[127,208,255],[127,255,208]],GLOW_PROP=GLOW.concat([[255,106,26],[255,179,71]]);
// rim colours [texture r,g,b, glow r,g,b]: a faint cold rim for fighters, a warm golden halo for NPCs
const SELF_LIT=.16;
const OUTLINE={char:[44,38,48,62,54,70],npc:[65,51,40,50,39,30]};
// lift: move the picture up by n pixels (64 px sheets have their feet 2 px lower than the 32 px ones)
function procFrame(img,x,y,size,h,kind,lift=0){
  // New painted palettes: only known live flames/shrines emit light; gold and depleted shrines do not.
  const key=img.nbKey,hd=img.nbDensity>1,warm=hd&&((key==='br_props'&&((y===64&&x>=64)||(y===96&&x<64)||(y===160&&x===0)))||(key==='dm_props'&&(y===0||y===128))||(key==='zl_props'&&y===96)||(key==='cz_props'&&y===0)||(key==='cy_big'&&y===256&&x>=64)||(key==='cy_props'&&y===0)),cool=hd&&((key==='dm_props'&&((x===32&&y===64)||(x===32&&y===160)))||(key==='zl_props'&&x===64&&y===128)||(key==='cz_props'&&((x===64&&y===32)||(y===128&&x<64))));
  const density=img.nbDensity||1,logicalW=size,w=size*density;x*=density;y*=density;h=(h||size)*density;lift*=density;
  const c=canvas(w,h),g=c.getContext('2d');g.drawImage(img,x,y,w,h-lift,0,0,w,h-lift);
  const tex=texFrom(c);
  if(density>1)tex.minFilter=THREE.LinearFilter;
  if(kind==='fx')return{n:new THREE.MeshBasicMaterial({map:tex,alphaTest:.5,side:THREE.DoubleSide,fog:false,transparent:true,opacity:.82,color:0xfff0e0})};
  const id=g.getImageData(0,0,w,h),d=id.data,glow=kind==='prop'||kind==='propc'||kind==='npc'?GLOW_PROP:GLOW;
  const ec=canvas(w,h),eg=ec.getContext('2d'),ed=eg.createImageData(w,h),selfLit=kind!=='prop';
  const sc=canvas(w,h),sg=sc.getContext('2d'),sd=sg.createImageData(w,h);
  for(let i=0;i<d.length;i+=4){
    ed.data[i+3]=255;
    if(d[i+3]>0){sd.data[i]=sd.data[i+1]=sd.data[i+2]=255;sd.data[i+3]=255;
      if(selfLit){ed.data[i]=d[i]*SELF_LIT;ed.data[i+1]=d[i+1]*SELF_LIT;ed.data[i+2]=d[i+2]*SELF_LIT}
      if((warm&&d[i]>175&&d[i+1]>50&&d[i+2]<d[i+1]*.7)||(cool&&d[i+1]>100&&d[i+2]>150&&d[i]<d[i+2]*.7)||glow.some(q=>q[0]===d[i]&&q[1]===d[i+1]&&q[2]===d[i+2])){ed.data[i]=d[i];ed.data[i+1]=d[i+1];ed.data[i+2]=d[i+2]}}
  }
  // outline: every empty pixel touching the figure gets a rim colour that also glows a little, so figures read against any floor
  // 'thin': ragged bosses full of loose pixels (crows, rags) get a single-pixel rim
  const ol=kind==='npc'?OUTLINE.npc:(kind===undefined||kind===null||kind==='propc'||kind==='thin')?OUTLINE.char:null;
  // 64 px frames get a 2 px rim so it looks as thick on screen as the 1 px rim of the 32 px frames
  // same result as growing the rim one pixel per pass (4-neighbour), computed in two sweeps: pixels within N steps of the figure
  if(ol){const N=Math.ceil((logicalW>=64&&kind!=='thin'&&kind!=='npc'?2:1)*density),D=new Int32Array(w*h);
    for(let j=0;j<w*h;j++)D[j]=d[j*4+3]?0:1e9;
    for(let py=0;py<h;py++)for(let px=0;px<w;px++){const j=py*w+px;let v=D[j];if(!v)continue;if(px>0&&D[j-1]+1<v)v=D[j-1]+1;if(py>0&&D[j-w]+1<v)v=D[j-w]+1;D[j]=v}
    for(let py=h-1;py>=0;py--)for(let px=w-1;px>=0;px--){const j=py*w+px;let v=D[j];if(!v)continue;if(px<w-1&&D[j+1]+1<v)v=D[j+1]+1;if(py<h-1&&D[j+w]+1<v)v=D[j+w]+1;D[j]=v}
    for(let j=0;j<w*h;j++){const v=D[j];if(!v||v>N)continue;const i=j*4;
      d[i]=ol[0];d[i+1]=ol[1];d[i+2]=ol[2];d[i+3]=255;ed.data[i]=ol[3];ed.data[i+1]=ol[4];ed.data[i+2]=ol[5];sd.data[i]=sd.data[i+1]=sd.data[i+2]=sd.data[i+3]=255}
    g.putImageData(id,0,0)}
  eg.putImageData(ed,0,0);sg.putImageData(sd,0,0);
  const em=texFrom(ec);
  if(kind==='ghost')return{n:new THREE.MeshBasicMaterial({map:tex,alphaTest:.5,side:THREE.DoubleSide,transparent:true,opacity:.85,fog:false})};
  return{
    n:phong({map:tex,emissiveMap:em,emissive:0xffffff,alphaTest:.5,side:THREE.DoubleSide}),
    f:new THREE.MeshBasicMaterial({map:texFrom(sc),alphaTest:.5,side:THREE.DoubleSide,color:0xfff0e0}),
    i:phong({map:tex,emissiveMap:em,emissive:0xffffff,color:0x8fd0ff,alphaTest:.5,side:THREE.DoubleSide}),
    b:phong({map:tex,emissiveMap:em,emissive:0xffffff,color:0xc2304a,alphaTest:.5,side:THREE.DoubleSide}),
    d:new THREE.MeshDistanceMaterial({map:tex,alphaTest:.5})};
}

let A=null,IMGS=null;
function buildAnims(imgs,group="all"){
  const has=g=>group==="all"||group===g;
  const bz=has("r3")&&!imgs.morhad?beastSheet():null,bs=(c,r)=>procFrame(bz,c*64,r*64,64,64);
  // sheets redrawn at 64x64 (same layout, cells twice as big) are detected by their width and drawn at the same size in the world
  const HI=new Set(['protagonist_a','protagonist_b','village_undead','order_deep_dead','ally_npcs','effects_pickups','jerzak','collector','zl_en_a','zl_en_b','npc_new','cz_en_a','cz_en_b','cz_en_c','cz_npc','cy_en_a','cy_en_b','cy_en_c','cy_npc','hero_d','hero_db','hero_dc','hero_dd','hero_def']);
  const row=(sheet,r,from=0,to=4,kind,size=32)=>{const k=HI.has(sheet)&&imgs[sheet].width/(imgs[sheet].nbDensity||1)>=256?2:1,cs=size*k;const out=[];for(let c=from;c<to;c++)out.push(procFrame(imgs[sheet],c*cs,r*cs,cs,cs,kind,k>1?2:0));return out};
  const ha='protagonist_a',hb='protagonist_b',vu='village_undead',od='order_deep_dead',an='ally_npcs',fx='effects_pickups';
  const pick=has('core')?row(fx,5,0,4,'fx'):[];
  const anims={
    ...(has("core")?{
    hero:{idle_down:row(ha,0),walk_down:row(ha,1),walk_up:row(ha,2),walk_side:row(ha,3),roll:row(ha,4),hurt:row(ha,5,0,2),
      swing_side:row(hb,0),swing_down:row(hb,1),swing_up:row(hb,2),death:row(hb,3).concat(row(hb,4,0,2)),idle_up:row(hb,5,0,2),idle_side:row(hb,5,2,4)},
    // slasher mode: the hero keeps the greatsword drawn (S1: idle and walk in three directions)
    ...(imgs.hero_d?{heroD:{idle_down:row('hero_d',0),idle_side:row('hero_d',1),idle_up:row('hero_d',2),walk_down:row('hero_d',3),walk_side:row('hero_d',4),walk_up:row('hero_d',5),
      ...(imgs.hero_db&&imgs.hero_dc&&imgs.hero_dd?{v2:true,light:{side:[0,1,2].map(i=>row('hero_db',i)),down:[3,4,5].map(i=>row('hero_db',i)),up:[0,1,2].map(i=>row('hero_dc',i))},heavy:{side:row('hero_dc',3),down:row('hero_dc',4),up:row('hero_dc',5)},
        guard:row('hero_dd',0),guard_walk:row('hero_dd',1),parry:row('hero_dd',2),...(imgs.hero_def?{parryDir:{side:row('hero_def',0),down:row('hero_def',1),up:row('hero_def',2)},guardWalkDir:{side:row('hero_def',3),down:row('hero_def',4),up:row('hero_def',5)}}:{}),broken:row('hero_dd',3),roll:row('hero_dd',4),hurt:row('hero_dd',5,0,2),charge:row('hero_dd',5,2,4)}:{})}}:{}),
    dwarf:{walk:row(od,2),attack:row(od,3,0,2),death:row(od,3,2,4)},
    possessed:{walk:row(vu,0),attack:row(vu,1,0,2),death:row(vu,1,2,4)},
    knight:{walk:row(od,0),attack:row(od,1,0,2),death:row(od,1,2,4)},
    collector:{front:row('collector',0),walk:row('collector',1),attack:row('collector',2),drain:row('collector',3),hurt:row('collector',4,0,2),taunt:row('collector',4,2,4),death:row('collector',5)},
    elder:row(an,2,0,4,'npc'),marga:row(an,3,0,4,'npc'),wit:row(an,4,0,4,'npc'),
    ...(imgs.npc_new?{chojrak:row('npc_new',0,0,4,'npc'),mila:row('npc_new',1,0,4,'npc'),heri:row('npc_new',2,0,4,'npc'),npcNew:1}:{chojrak:row(ha,0,0,4,'npc'),mila:row(ha,0,0,4,'npc'),heri:row(ha,0,0,4,'npc')}),
    warden:{walk:row(od,4),attack:row(od,5,0,2),death:row(od,5,2,4)},
    ghoul:{walk:row(vu,2),attack:row(vu,3,0,2),death:row(vu,3,2,4)},
    bat:{walk:row(vu,4),attack:row(vu,4),death:row(vu,5,0,2)},
    jerzak:{idle:row('jerzak',0),walk:row('jerzak',1),panic:row('jerzak',2),attack:row('jerzak',3),death:row('jerzak',4),roll:row('jerzak',5,0,2)},
    }:{}),
    ...(has("r3")?{
    ...(imgs.zl_en_a?{
      madman:{walk:row('zl_en_a',0),attack:row('zl_en_a',1,0,2),death:row('zl_en_a',1,2,4),sheet:1},
      hound:{walk:row('zl_en_a',2),attack:row('zl_en_a',3,0,2),death:row('zl_en_a',3,2,4),sheet:1},
      rotknight:{walk:row('zl_en_a',4),attack:row('zl_en_a',5,0,2),death:row('zl_en_a',5,2,4),sheet:1},
      monk:{walk:row('zl_en_b',0,0,4,'propc'),attack:row('zl_en_b',1,0,2,'propc'),death:row('zl_en_b',1,2,4,'propc'),sheet:1},
      fireball:row('zl_en_b',2,0,4,'prop'),
      izolda:row('zl_en_b',3,0,4,'npc'),ottokar:row('zl_en_b',4,0,4,'npc'),aurel:row('zl_en_b',5,0,4,'npc')}:{
      madman:{walk:row(vu,0),attack:row(vu,1,0,2),death:row(vu,1,2,4)},
      hound:{walk:row(vu,2),attack:row(vu,3,0,2),death:row(vu,3,2,4)},
      rotknight:{walk:row(od,0),attack:row(od,1,0,2),death:row(od,1,2,4)},
      monk:{walk:row(vu,0),attack:row(vu,1,0,2),death:row(vu,1,2,4)},
      izolda:row(an,2,0,4,'npc'),ottokar:row(an,4,0,4,'npc'),aurel:row(an,2,0,4,'npc')}),
    // Morhad: Z6 (walk, wind-up/slam, death) and Z6b (charge, leap/dive, enraged roar), 64 px cells
    beast:imgs.morhad?(()=>{const m=(img,c,r)=>procFrame(imgs[img],c*64,r*64,64,64);return{walk:[m('morhad',0,0),m('morhad',1,0)],attack:[m('morhad',0,1),m('morhad',1,1)],death:[m('morhad',0,2),m('morhad',1,2)],
      charge:[m('morhad_b',0,0),m('morhad_b',1,0)],leap:[m('morhad_b',0,1),m('morhad_b',1,1)],rage:[m('morhad_b',0,2),m('morhad_b',1,2)],sheet:1}})():{walk:[bs(0,0),bs(1,0)],attack:[bs(0,1),bs(1,1)],death:[bs(0,2),bs(1,2)]},
    }:{}),
    ...(has("r5")?{
    ...(imgs.cy_npc?{skryba:row('cy_npc',0,0,4,'npc'),straznik:row('cy_npc',1,0,4,'npc'),pieczetnik:row('cy_npc',2,0,4,'npc')}:{skryba:row(an,2,0,4,'npc'),straznik:row(ha,0,0,4,'npc'),pieczetnik:row(an,3,0,4,'npc')}),
    // chapter V mid-boss Rachmistrz replaces the Collector in chapter V (swapped in useWorld)
    ...(imgs.wierz1&&imgs.wierz2?(()=>{const m=(k,c,r)=>procFrame(imgs[k],c*64,r*64,64,64);return{bossC5:{walk:[m('wierz1',0,0),m('wierz1',1,0)],attack:[m('wierz1',0,1),m('wierz1',1,1)],snap:[m('wierz1',0,2)],rise:[m('wierz1',1,2)],walk2:[m('wierz2',0,0),m('wierz2',1,0)],slam2:[m('wierz2',0,1)],cast2:[m('wierz2',1,1)],call2:[m('wierz2',0,2)],death:[m('wierz2',0,2),m('wierz2',1,2)],sheet:1}}})():{}),
    ...(imgs.rachm?(()=>{const m=(c,r)=>procFrame(imgs.rachm,c*64,r*64,64,64);return{collectorC5:{front:[m(0,0)],walk:[m(0,0),m(1,0)],attack:[m(0,1),m(1,1)],drain:[m(0,2)],hurt:[m(0,0)],taunt:[m(0,2)],death:[m(1,2)],sheet:1}}})():{}),
    // chapter V (K5, K6, K6b); without the sheets the old enemies stand in
    ...(imgs.cy_en_a?{
      guard:{walk:row('cy_en_a',0),attack:row('cy_en_a',1,0,2),death:row('cy_en_a',1,2,4),sheet:1},
      scribe:{walk:row('cy_en_a',2),attack:row('cy_en_a',3,0,2),death:row('cy_en_a',3,2,4),sheet:1},
      executioner:{walk:row('cy_en_a',4),attack:row('cy_en_a',5,0,2),death:row('cy_en_a',5,2,4),sheet:1}}:{
      guard:{walk:row(od,0),attack:row(od,1,0,2),death:row(od,1,2,4)},scribe:{walk:row(vu,0),attack:row(vu,1,0,2),death:row(vu,1,2,4)},executioner:{walk:row(od,4),attack:row(od,5,0,2),death:row(od,5,2,4)}}),
    ...(imgs.cy_en_b?{
      debtor:{walk:row('cy_en_b',0),attack:row('cy_en_b',1,0,2),death:row('cy_en_b',1,2,4),sheet:1},
      wraith:{walk:row('cy_en_b',2,0,4,'propc'),attack:row('cy_en_b',3,0,2,'propc'),death:row('cy_en_b',3,2,4,'propc'),sheet:1},
      courtraven:{walk:row('cy_en_b',4),attack:row('cy_en_b',5,0,2),death:row('cy_en_b',5,2,4),sheet:1}}:{
      debtor:{walk:row(vu,0),attack:row(vu,1,0,2),death:row(vu,1,2,4)},wraith:{walk:row(vu,4),attack:row(vu,4),death:row(vu,5,0,2)},courtraven:{walk:row(vu,4),attack:row(vu,4),death:row(vu,5,0,2)}}),
    ...(imgs.cy_en_c?{
      paperrat:{walk:row('cy_en_c',0),attack:row('cy_en_c',1,0,2),death:row('cy_en_c',1,2,4),sheet:1},
      bookgolem:{walk:row('cy_en_c',2),attack:row('cy_en_c',3,0,2),death:row('cy_en_c',3,2,4),sheet:1},
      condemned:{walk:row('cy_en_c',4),attack:row('cy_en_c',5,0,2),death:row('cy_en_c',5,2,4),sheet:1}}:{
      paperrat:{walk:row(vu,2),attack:row(vu,3,0,2),death:row(vu,3,2,4)},bookgolem:{walk:row(od,4),attack:row(od,5,0,2),death:row(od,5,2,4)},condemned:{walk:row(vu,0),attack:row(vu,1,0,2),death:row(vu,1,2,4)}}),
    // chapter IV (K5, K6, KC, K7); without the sheets the old enemies stand in
    }:{}),
    ...(has("r4")?{
    ...(imgs.cz_en_a?{
      wolf:{walk:row('cz_en_a',0),attack:row('cz_en_a',1,0,2),death:row('cz_en_a',1,2,4),sheet:1},
      bandit:{walk:row('cz_en_a',2),attack:row('cz_en_a',3,0,2),death:row('cz_en_a',3,2,4),sheet:1},
      xbow:{walk:row('cz_en_a',4),attack:row('cz_en_a',5,0,2),death:row('cz_en_a',5,2,4),sheet:1}}:{
      wolf:{walk:row(vu,2),attack:row(vu,3,0,2),death:row(vu,3,2,4)},bandit:{walk:row(od,0),attack:row(od,1,0,2),death:row(od,1,2,4)},xbow:{walk:row(vu,0),attack:row(vu,1,0,2),death:row(vu,1,2,4)}}),
    ...(imgs.cz_en_b?{
      drowner:{rise:row('cz_en_b',0,0,2),walk:row('cz_en_b',0,2,4),attack:row('cz_en_b',1,0,2),death:row('cz_en_b',1,2,4),sheet:1},
      strzygon:{walk:row('cz_en_b',2),attack:row('cz_en_b',3,0,2),death:row('cz_en_b',3,2,4),sheet:1},
      zmora:{walk:row('cz_en_b',4,0,3),attack:row('cz_en_b',4,3,4),death:row('cz_en_b',5,0,2),sheet:1},
      wisp:{walk:row('cz_en_b',5,2,3,'propc'),attack:row('cz_en_b',5,3,4,'propc'),death:row('cz_en_b',5,3,4,'propc'),sheet:1}}:{
      drowner:{rise:row(vu,1,2,4),walk:row(vu,0),attack:row(vu,1,0,2),death:row(vu,1,2,4)},strzygon:{walk:row(vu,2),attack:row(vu,3,0,2),death:row(vu,3,2,4)},
      zmora:{walk:row(vu,4),attack:row(vu,4),death:row(vu,5,0,2)},wisp:{walk:row(fx,5,0,1,'fx'),attack:row(fx,5,0,1,'fx'),death:row(fx,5,0,1,'fx')}}),
    ...(imgs.cz_en_c?{
      bies:{walk:row('cz_en_c',0),attack:row('cz_en_c',1,0,2),death:row('cz_en_c',1,2,4),sheet:1},
      wight:{walk:row('cz_en_c',2),attack:row('cz_en_c',3,0,2),death:row('cz_en_c',3,2,4),sheet:1}}:{
      bies:{walk:row(od,4),attack:row(od,5,0,2),death:row(od,5,2,4)},wight:{walk:row(od,0),attack:row(od,1,0,2),death:row(od,1,2,4)}}),
    ...(imgs.cz_npc?{wierz:row('cz_npc',0,0,4,'npc'),bartosz:row('cz_npc',1,0,4,'npc'),wolch:row('cz_npc',2,0,4,'npc'),boginka_lure:row('cz_npc',3,0,2),
      boginka:{walk:row('cz_npc',3,2,4),attack:row('cz_npc',3,3,4),death:imgs.cz_en_b?row('cz_en_b',1,2,4):row(vu,1,2,4),sheet:1}}:{
      wierz:row(an,3,0,4,'npc'),bartosz:row(ha,0,0,4,'npc'),wolch:row(an,2,0,4,'npc'),boginka_lure:row(an,3,0,2),boginka:{walk:row(vu,2),attack:row(vu,3,0,2),death:row(vu,3,2,4)}}),
    // Leszy (K8) and the Strzyga Mother (K9, second soul K9b): 64 px cells, 2x3 grid
    ...(imgs.leszy?(()=>{const m=(img,c,r)=>procFrame(imgs[img],c*64,r*64,64,64,'thin');return{
      leszy:{walk:[m('leszy',0,0),m('leszy',1,0)],summon:[m('leszy',0,1)],strike:[m('leszy',1,1)],merge:[m('leszy',0,2)],attack:[m('leszy',1,1),m('leszy',1,1)],death:[m('leszy',0,2),m('leszy',1,2)],sheet:1},
      strzyga:{walk:[m('strzyga',0,0),m('strzyga',1,0)],scream:[m('strzyga',0,1)],slash:[m('strzyga',1,1)],burst:[m('strzyga',0,2)],attack:[m('strzyga',1,1),m('strzyga',1,1)],death:[m('strzyga',0,2),m('strzyga',1,2)],
        ...(imgs.strzyga_b?{crawl:[m('strzyga_b',0,0),m('strzyga_b',1,0)],leap:[m('strzyga_b',0,1)],land:[m('strzyga_b',1,1)],raise:[m('strzyga_b',0,2)],roar:[m('strzyga_b',1,2)]}:{crawl:[m('strzyga',0,0),m('strzyga',1,0)],leap:[m('strzyga',1,1)],land:[m('strzyga',1,1)],raise:[m('strzyga',0,1)],roar:[m('strzyga',0,1)]}),sheet:1}}})():{}),
    }:{}),
    ...(has('core')?{
    boss:{walk:row('boss_zrost',0,0,2,null,64),attack:row('boss_zrost',1,0,2,null,64),death:row('boss_zrost',2,0,2,null,64)},
    golem:{walk:row(an,0),slam:row(an,1,0,2),idle:row(an,1,2,4)},
    tharm:row(an,5,0,4,'ghost'),
    fx:{slash:row(fx,0,0,4,'fx'),spin:row(fx,1,0,4,'fx'),nova:row(fx,2,0,4,'fx'),inferno:row(fx,3,0,4,'fx'),spikes:row(fx,4,0,4,'fx')},
    pick:{1:pick[0],2:pick[1],5:pick[2],c:pick[3]}
    }:{})
  };
  // Return to the same grip and blade length after every attack/deflection.
  const D=anims.heroD;if(D&&D.v2)for(const d of ['side','down','up']){const ready=D['idle_'+d][0];for(const combo of D.light[d])combo[3]=ready;D.heavy[d][3]=ready;if(D.parryDir)D.parryDir[d][3]=D.guard[d==='side'?0:d==='down'?1:2]}
  return anims;
}
function enemyWinding(e){return e.ghoulWind>0||e.sw>0||e.ctw>0||e.chT>0||e.hamT>0||e.atkT>0||e.castWind>0||e.fanWind>0||e.stealWind>0||e.drainWind>0||e.aim>0||e.tw>0||e.mode==='wind'||e.mode==='root'||e.mode==='up'}
function attackCue(e){if(e.dead||e.rise>0||e.stun>0||e.frozen>0||e.trans>0)return null;
  return enemyWinding(e)?(e.sw>0&&e.red?(SETT.contrast?'y':'r'):'w'):null}
function setFrame(mesh,fr,mode){if(!fr)return;
  const STT={sg:[0x8aff5a,.55],so:[0xff9a40,.6],sb:[0xe03048,.4],sc:[0x9adcff,.5],sh:[0x7a62d8,.45]};if(STT[mode]&&!fr[mode]){const m=fr.n.clone(),s=STT[mode];m.color.setHex(s[0]);if(m.emissive){m.emissive.setHex(s[0]);m.emissiveMap=fr.n.map;m.emissiveIntensity=s[1]}if(mode==='sh'){m.transparent=true;m.opacity=.6;m.depthWrite=false}fr[mode]=m}
  if((mode==='w'||mode==='r'||mode==='y')&&!fr[mode]){const m=fr.n.clone(),color=mode==='r'?0xff694b:mode==='y'?0xffdf62:0xffe1b0;
    m.color.setHex(color);if(m.emissive){m.emissive.setHex(color);m.emissiveMap=fr.n.map;m.emissiveIntensity=mode==='w'?.55:.8}m.fog=false;fr[mode]=m}
  mesh.material=(mode&&fr[mode])||fr.n;if(mesh.userData.groundContact)settleProp(mesh);if(fr.d)mesh.customDistanceMaterial=fr.d}

const at=(anim,t,fps,loop=true)=>anim[loop?Math.floor(t*fps)%anim.length:Math.min(anim.length-1,Math.floor(t*fps))];

let heroMesh,margaMesh;
const MAXB=420;const blobs=new THREE.InstancedMesh(new THREE.PlaneGeometry(1,1).rotateX(-Math.PI/2),new THREE.MeshBasicMaterial({map:blobTex,transparent:true,depthWrite:false}),MAXB);scene.add(blobs);
const wispGlow={1:'#7fd0ff',2:'#9ef0a0',5:'#ff6b6b',c:'#e0b84a'};for(const k in wispGlow)wispGlow[k]=new THREE.MeshBasicMaterial({map:glowC(wispGlow[k]),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,fog:false,opacity:.55});
const glowGeo=new THREE.PlaneGeometry(.7,.7);
const MAXP=3000,pPos=new Float32Array(MAXP*3),pCol=new Float32Array(MAXP*3);
const pGeo=new THREE.BufferGeometry();pGeo.setAttribute('position',new THREE.BufferAttribute(pPos,3).setUsage(THREE.DynamicDrawUsage));pGeo.setAttribute('color',new THREE.BufferAttribute(pCol,3).setUsage(THREE.DynamicDrawUsage));
const points=new THREE.Points(pGeo,new THREE.PointsMaterial({size:2,sizeAttenuation:false,vertexColors:true,fog:false}));points.frustumCulled=false;scene.add(points);
const RAIN_N=650,rainPos=new Float32Array(RAIN_N*6),rainGeo=new THREE.BufferGeometry();rainGeo.setAttribute('position',new THREE.BufferAttribute(rainPos,3).setUsage(THREE.DynamicDrawUsage));
const rain=new THREE.LineSegments(rainGeo,new THREE.LineBasicMaterial({color:0x8c9cb8,transparent:true,opacity:.32,fog:false}));rain.frustumCulled=false;scene.add(rain);
const DROPS=[];for(let i=0;i<RAIN_N;i++)DROPS.push({x:rnd(-15,15),y:rnd(0,12),z:rnd(-10,10),s:rnd(15,21)});
const colCache={};const col=h=>colCache[h]||(colCache[h]=new THREE.Color(h));

// post-processing: low-res target, tilt-shift blur at top and bottom, vignette
const rt=new THREE.WebGLRenderTarget(16,9,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter});
const postMat=new THREE.ShaderMaterial({uniforms:{tD:{value:rt.texture},res:{value:new THREE.Vector2(480,270)},hurt:{value:0},flash:{value:0},sharp:{value:0},bri:{value:1},low:{value:0},cold:{value:new THREE.Color(0xdceaff)},warm:{value:new THREE.Color(0xffeedc)}},
  vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
  fragmentShader:`uniform sampler2D tD;uniform vec2 res;uniform float hurt;uniform float flash;uniform float sharp;uniform float bri;uniform float low;uniform vec3 cold;uniform vec3 warm;varying vec2 vUv;
  void main(){vec3 c=texture2D(tD,vUv).rgb;float focus=smoothstep(.28,.51,abs(vUv.y-.51))*(1.-sharp);
    if(low<.5){vec3 soft=vec3(0.),glow=vec3(0.);float total=0.;
      for(int i=-1;i<=1;i++)for(int j=-1;j<=1;j++){float w=1.-.22*float(i*i+j*j);vec3 s=texture2D(tD,vUv+vec2(float(i),float(j))*(2.+focus*1.5)/res).rgb;soft+=s*w;glow+=max(s-vec3(.52),vec3(0.))*w;total+=w;}
      c=mix(c,soft/total,focus*.55)+glow/total*.28;}
    float l=dot(c,vec3(.2126,.7152,.0722));c*=mix(mix(vec3(1.),cold,.5),mix(vec3(1.),warm,.35),smoothstep(.08,.65,l));
    c=pow(max(c,vec3(0.)),vec3(.97));c=c*(1.05+.15*c)/(1.+.25*c);
    float vignette=1.-smoothstep(.36,.82,length((vUv-.5)*vec2(1.05,.95)));c*=mix(.78,1.,vignette);
    c=mix(c,vec3(c.r*1.2+.15,c.g*.5,c.b*.5),hurt);c=mix(c,c*2.4+vec3(.16,.19,.27),flash);
    gl_FragColor=vec4(c*bri,1.);}`});
filmUniforms=postMat.uniforms;
const postScene=new THREE.Scene(),postCam=new THREE.OrthographicCamera(-1,1,1,-1,0,1);postScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),postMat));

/* TomMusic + Owlish Media — prepared by tools/prepare-owlish-sfx.cjs */
const SFX_SAMPLES={"Sword Attack 1":"assets/25154cec1ed959935cc1b7a8a728c1eaedda87b75c01d750e033c9e7942a63de.mp3","Sword Attack 2":"assets/dd687aa757cf626758c5231780b3b6b14617e17dc974f201e4f05821fa89ce11.mp3","Sword Attack 3":"assets/b65e2c866ab005e5455708b5c65253f3d4addf8f3b39b1bc75c11acb96da8295.mp3","Sword Impact Hit 1":"assets/85b382b1e9e1011f48ace28e2996ec789944578d72ed98cb5664831eb2b88cfc.mp3","Sword Impact Hit 2":"assets/99fdcc4ff695385d5642a2ba21d32bf124ea506cad122e4607f083f596190161.mp3","Sword Blocked 1":"assets/e622475e143f097d12a81437161184b257b58738c1ecf8131430501b4968efcb.mp3","Sword Blocked 2":"assets/db5daf90206e562eddc378c03925e7a0c9f62cb167f513345604481b7372ea00.mp3","Sword Parry 1":"assets/20be0a0ff94830c967fd967cbef3f0f42369a85632545dce03f90e43358ef15c.mp3","Sword Parry 2":"assets/5be0c2d0366031e36c01bf088eeebe3c62a49f6577a32ef61f7ce3fb12e6411d.mp3","Sword Impact Hit 3":"assets/c4358ecfbb63e19ffc9a61934123dbb613e24c02c3c9e25cfe6bc26469658c57.mp3","Ice Throw 1":"assets/e14f335d41980db34c42719ee972f0e8a7100e7c5f88e5ab07baca59f5483956.mp3","Ice Throw 2":"assets/f1c792a79c1e5245e900adb71001de7b9681de35ef474a9409635d434b216a61.mp3","Rock Meteor Throw 1":"assets/074a22ca7bd4ec33c3f0fd412bec2d09724e08294295464de6ca975f3303fbbf.mp3","Fireball 1":"assets/8591cef4b00ca43a4baa2b34915e09f05473793b068c5786844d0b8400946c55.mp3","Fireball 2":"assets/1b8b57939e3a6a006bd2f5421f1ee5ff61437cfc64c79be2d955f728c78ac79f.mp3","Rock Wall 1":"assets/66eeb48e9b22f4ed221070a55446d6eea2235737878a066d7f33e5e6b0382b64.mp3","Rock Meteor Throw 2":"assets/f7ed7a1243d84eaa0cb5a4afa2c17f1499bef9f18294b32a53abd6ac85124223.mp3","Rock Wall 2":"assets/5b5e27f9d88ad6d82f9a01beebfeaac4f4b8e9478e85362231e17cb2ae61c781.mp3","Owlish/Impacts/flip.wav":"assets/6c32885affe39e5c22d72643a76036f01325c83e86128e712fc9a6e9f4560135.mp3","Owlish/UI/UI_024.wav":"assets/b6d95998833fbf557e2896fd21a9881aba5d03ae758b96499c4a8e9770e93bea.mp3","Owlish/UI/UI_040.wav":"assets/efd4460645b0f4aa0ce4421726853195cc29aebebd981be0bc87f407b08063a0.mp3","Owlish/80-CC0-RPG-SFX/item_coins_01.ogg":"assets/7c0938ddc084b863cf4c1b5d2bc0b4cb3b7c1252705333469c52acf23df28b25.mp3","Owlish/80-CC0-RPG-SFX/item_coins_02.ogg":"assets/c6ce80b685807745c19e100abc428d96799669c2ee5e82afb22442eb474e30d6.mp3","Owlish/80-CC0-RPG-SFX/item_coins_03.ogg":"assets/76697290695e486e73d2e16608c2c703c950f49913f0b70af0f2d30deb340cfb.mp3","Owlish/80-CC0-RPG-SFX/item_gem_02.ogg":"assets/b4504e126640beabb6f6fa9e825c664db0b67a3389198925cc60ed7b3d780f1b.mp3","Owlish/80-CC0-RPG-SFX/item_gem_03.ogg":"assets/4d58e079c800b8f019180630e6595d5347d25b5a3a6fcd0ad41757b38b410bad.mp3","Owlish/UI/UI_017.wav":"assets/e008d3b796ef3f64cd3892520ab2af6cf9a829d64c53316fa2f087830d082e9a.mp3","Owlish/80-CC0-RPG-SFX/spell_01.ogg":"assets/26e7c4ab03d723a7b93fc05041ff46ce08a4aab92be4718f29909d9e3039b1fa.mp3","Owlish/UI/UI_001.wav":"assets/4a508e780137c94b695071f4527826092e0dec569e4ffb871e0f2f8bc5441d27.mp3","Owlish/80-CC0-RPG-SFX/creature_monster_03.ogg":"assets/da163cc77b3a3be6e23d5644db25654abba99ce8fa58f7ed6c2dad8394e8b924.mp3","Owlish/80-CC0-RPG-SFX/creature_monster_04.ogg":"assets/5447e5d33412b09cdb407abbfd8565402b18a3af841d2fb440c787c29395b0d8.mp3","Owlish/80-CC0-RPG-SFX/creature_roar_01.ogg":"assets/a524633f6ea42a3fe61e4fc1e60e78049e8f8fec24c2a74387d348ca34a6ea2c.mp3","Owlish/80-CC0-RPG-SFX/creature_roar_02.ogg":"assets/88500a58b5394b373fbf51b93d4bef99e0191bd184a9b29cae3cc93e90eab665.mp3","Owlish/80-CC0-RPG-SFX/creature_roar_03.ogg":"assets/f67bf5040c25da3be64458be7bd2d84b31b33d43abd1853417809bad04d4d99d.mp3","Owlish/80-CC0-RPG-SFX/creature_hurt_01.ogg":"assets/ffe6dcb49b564d161675e70afa1891f9333dda1e9896d1c34cffd3670bcf7509.mp3","Owlish/80-CC0-RPG-SFX/creature_die_01.ogg":"assets/9b82818f5461d6107df42de39fc695a1b0fb09f2c6337c9eb9728778b01592bc.mp3","Owlish/Impacts/hit.wav":"assets/c5c97a4e4f8270a1d2af480fd85f9e82109acce2b014bcc71dc5732d21357d02.mp3","Owlish/Ambience/earthquake.wav":"assets/3000cdc76be4c6f3c08d1c34bf5e310feaa5366d5eac83170ba2d6eecaec44cc.mp3"};
const SFX_SAMPLE_MAP={"bladeLight":["Sword Attack 1","Sword Attack 2"],"bladeHeavy":["Sword Attack 3"],"hitSteel":["Sword Impact Hit 1","Sword Impact Hit 2"],"block":["Sword Blocked 1","Sword Blocked 2"],"parry":["Sword Parry 1","Sword Parry 2"],"swing":["Sword Attack 3"],"katana":["Sword Attack 2"],"hit":["Sword Impact Hit 1","Sword Impact Hit 2"],"hitH":["Sword Impact Hit 3"],"hitC":["Sword Impact Hit 3"],"kill":["Owlish/80-CC0-RPG-SFX/creature_die_01.ogg"],"roll":["Owlish/Impacts/flip.wav"],"frost":["Ice Throw 1","Ice Throw 2"],"quake":["Rock Meteor Throw 1"],"fire":["Fireball 1","Fireball 2"],"golem":["Rock Wall 1"],"slam":["Rock Meteor Throw 2"],"rise":["Rock Wall 2"],"ui":["Owlish/UI/UI_024.wav"],"empty":["Owlish/UI/UI_040.wav"],"coin":["Owlish/80-CC0-RPG-SFX/item_coins_01.ogg","Owlish/80-CC0-RPG-SFX/item_coins_02.ogg","Owlish/80-CC0-RPG-SFX/item_coins_03.ogg"],"pick":["Owlish/80-CC0-RPG-SFX/item_gem_02.ogg","Owlish/80-CC0-RPG-SFX/item_gem_03.ogg"],"level":["Owlish/UI/UI_017.wav"],"heal":["Owlish/80-CC0-RPG-SFX/spell_01.ogg"],"bless":["Owlish/UI/UI_001.wav"],"growl":["Owlish/80-CC0-RPG-SFX/creature_monster_03.ogg","Owlish/80-CC0-RPG-SFX/creature_monster_04.ogg"],"bossGrowl":["Owlish/80-CC0-RPG-SFX/creature_roar_01.ogg","Owlish/80-CC0-RPG-SFX/creature_roar_02.ogg","Owlish/80-CC0-RPG-SFX/creature_roar_03.ogg"],"warnR":["Owlish/80-CC0-RPG-SFX/creature_hurt_01.ogg"],"hurt":["Owlish/Impacts/hit.wav"],"rumble":["Owlish/Ambience/earthquake.wav"]};
/* ============ AUDIO ============ */
const SETT={sfx:1,fts:100,dmg:true,save:{},bri:1,quality:matchMedia('(pointer:coarse)').matches?'low':'high',shake:!matchMedia('(prefers-reduced-motion: reduce)').matches,flash:!matchMedia('(prefers-reduced-motion: reduce)').matches,contrast:false,oneHand:false,touchScale:1,touchLeft:false,hiRes:false};
function isRecord(x){return !!x&&typeof x==='object'&&!Array.isArray(x)}
function clampNumber(x,min,max,fallback){return Number.isFinite(+x)?Math.max(min,Math.min(max,+x)):fallback}
function cleanRecords(x){const out={};if(isRecord(x))for(const m of ['s','a'])for(let c=1;c<=5;c++){const k=m+c,r=x[k];if(!isRecord(r))continue;const q={t:clampNumber(r.t,0,86400,0),lvl:Math.floor(clampNumber(r.lvl,1,999,1)),kills:Math.floor(clampNumber(r.kills,0,1e7,0))};if(Number.isFinite(+r.win)&&+r.win>0)q.win=clampNumber(r.win,1,86400,720);out[k]=q}return out}try{const q=+localStorage.getItem('pn_bri');if(q>=.7&&q<=1.6)SETT.bri=q}catch(e){}postMat.uniforms.bri.value=SETT.bri;
try{const v=JSON.parse(localStorage.getItem('pn_access')||'{}');if(isRecord(v)){for(const k of ['shake','flash','contrast','oneHand','touchLeft','hiRes'])if(typeof v[k]==='boolean')SETT[k]=v[k];if(['low','high'].includes(v.quality))SETT.quality=v.quality;SETT.touchScale=clampNumber(v.touchScale,.8,1.3,1)}}catch(e){}
try{const a=localStorage.getItem('pn_sfx');if(a!==null&&!isNaN(+a))SETT.sfx=Math.max(0,Math.min(1,+a));const b=localStorage.getItem('pn_fts');if(b!==null&&!isNaN(+b))SETT.fts=Math.max(70,Math.min(140,+b));SETT.dmg=localStorage.getItem('pn_dmg')!=='0';SETT.save=cleanRecords(JSON.parse(localStorage.getItem('pn_save')||'{}'))}catch(e){}
let AC=null,master=null,NB=null,sfxG=null;
function initAudio(){if(AC)return;try{AC=new (window.AudioContext||window.webkitAudioContext)();master=AC.createGain();master.gain.value=.5;master.connect(AC.destination);sfxG=AC.createGain();sfxG.gain.value=SETT.sfx;sfxG.connect(master);
  NB=AC.createBuffer(1,AC.sampleRate*2,AC.sampleRate);const d=NB.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;sfxInitRv();loadSfxSamples();
  // tło ambientowe (dron + deszcz) usunięte w v66: gra teraz tylko muzyka
  setAmbience()}catch(e){AC=null}}
let rainGain=null;function setAmbience(){if(rainGain)rainGain.gain.value=CH===1?.022:0}
function noise(dur,freq,q,gain,type,to,wet=0,delay=0){if(!AC)return;const t=AC.currentTime+delay,s=AC.createBufferSource();s.buffer=NB;const f=AC.createBiquadFilter();f.type=type||'lowpass';f.frequency.setValueAtTime(freq,t);f.Q.value=q;if(to)f.frequency.exponentialRampToValueAtTime(to,t+dur);
  const g=AC.createGain();g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(gain,t+Math.min(.012,dur*.15));g.gain.exponentialRampToValueAtTime(.001,t+dur);s.connect(f);f.connect(g);g.connect(sfxG||master);sfxSend(g,wet);s.start(t,Math.random());s.stop(t+dur+.05)}
function sfxSend(g,wet){if(wet>0&&sfxRv){const w=AC.createGain();w.gain.value=wet;g.connect(w);w.connect(sfxRv)}}
function tone(f0,f1,dur,gain,type,delay=0,wet=0){if(!AC)return;const t=AC.currentTime+delay,o=AC.createOscillator();o.type=type||'square';o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(Math.max(20,f1),t+dur);
  const g=AC.createGain();g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(gain,t+.006);g.gain.exponentialRampToValueAtTime(.001,t+dur);o.connect(g);g.connect(sfxG||master);sfxSend(g,wet);o.start(t);o.stop(t+dur+.05)}
// głos z filtrem i drżeniem (ryki, wycie)
function voice(f0,f1,dur,gain,type,lp,wet=0,vibHz=0,vib=0,delay=0){if(!AC)return;const t=AC.currentTime+delay,o=AC.createOscillator();o.type=type||'sawtooth';o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(Math.max(20,f1),t+dur);
  if(vibHz){const l=AC.createOscillator(),lg=AC.createGain();l.frequency.value=vibHz;lg.gain.value=vib;l.connect(lg);lg.connect(o.frequency);l.start(t);l.stop(t+dur+.05)}
  const f=AC.createBiquadFilter();f.type='lowpass';f.frequency.value=lp;f.Q.value=2;const g=AC.createGain();g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(gain,t+Math.min(.12,dur*.3));g.gain.exponentialRampToValueAtTime(.001,t+dur);o.connect(f);f.connect(g);g.connect(sfxG||master);sfxSend(g,wet);o.start(t);o.stop(t+dur+.05)}
// dzwonek / metal: niecałkowite alikwoty
function bell(f,dur,gain,delay=0,wet=.25){[[1,1],[2.76,.45],[5.4,.22],[8.9,.1]].forEach(([m,a])=>tone(f*m,f*m*.998,dur/(1+m*.18),gain*a,'sine',delay,wet))}
let sfxRv=null;
function sfxInitRv(){if(sfxRv||!AC)return;try{const len=Math.floor(AC.sampleRate*1.5),b=AC.createBuffer(2,len,AC.sampleRate);for(let c=0;c<2;c++){const d=b.getChannelData(c);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.6)}
  const cv=AC.createConvolver();cv.buffer=b;const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=3200;sfxRv=AC.createGain();sfxRv.connect(lp);lp.connect(cv);cv.connect(sfxG||master)}catch(e){sfxRv=null}}
const SFX={
 bladeLight:()=>{noise(.15,650,1.1,.13,'bandpass',3400);noise(.075,2400,.6,.035,'highpass',5500)},
 bladeHeavy:()=>{noise(.23,260,1.3,.18,'bandpass',1700);noise(.12,1100,.7,.055,'highpass',3800)},
 hitSteel:()=>{noise(.065,2100,2,.13,'bandpass',650);bell(880,.16,.025,0,.08);tone(160,65,.07,.065,'triangle')},
 block:()=>{noise(.055,2800,2,.12,'bandpass',1200);bell(690,.15,.025,0,.07);tone(240,110,.065,.055,'triangle')},
 parry:()=>{noise(.035,4300,2.8,.105,'bandpass',2100);bell(1570,.25,.035,0,.12);bell(2310,.15,.012,.018,.08)},
 ui:()=>{tone(520,300,.07,.09,'square');noise(.03,2500,1,.05,'highpass',5000)},
 swing:()=>{noise(.26,450,1.4,.2,'bandpass',3000);noise(.2,1500,.8,.07,'highpass',6000,.1)},
 katana:()=>{noise(.2,2200,3,.2,'bandpass',7500,.15);tone(2800,5200,.16,.035,'sine',0,.2);noise(.09,5000,1,.07,'highpass',9000)},
 hit:()=>{noise(.13,1400,1,.3,'lowpass',160);tone(150+Math.random()*40,48,.12,.22,'sine');noise(.03,3500,1,.12,'highpass')},
 hitH:()=>{noise(.22,900,1,.38,'lowpass',100,.06);tone(96,30,.22,.3,'sine');tone(240,70,.12,.1,'square');noise(.05,2600,1,.18,'bandpass',900)},
 hitC:()=>{noise(.12,3200,2,.2,'bandpass',6500);bell(1250,.5,.05,0,.3);tone(110,36,.16,.24,'sine')},
 kill:()=>{noise(.45,1400,1,.34,'lowpass',80,.2);tone(190,38,.32,.2,'triangle');tone(70,28,.4,.2,'sine',.06)},
 hurt:()=>{voice(300,90,.22,.14,'sawtooth',1400);noise(.16,800,1,.24,'lowpass',200);tone(80,40,.15,.2,'sine')},
 roll:()=>{noise(.2,350,1,.2,'bandpass',1000);noise(.16,600,1,.12,'bandpass',1500,0,.07)},
 pick:()=>{tone(1500+Math.random()*250,2100,.07,.035,'sine',0,.2);tone(2200,2800,.05,.02,'sine',.045,.2)},
 coin:()=>{tone(1568,1580,.09,.045,'triangle',0,.25);tone(2093,2100,.22,.045,'triangle',.07,.3);tone(4186,4200,.1,.012,'sine',.07,.3)},
 level:()=>{[330,440,554,660,880].forEach((f,i)=>{bell(f,.9,.05,i*.08,.35)});voice(165,330,.7,.07,'triangle',900,.3)},
 frost:()=>{noise(.55,6000,2,.15,'highpass',2500,.3);[2400,3100,3900].forEach((f,i)=>bell(f,.5,.025,i*.05,.4))},
 quake:()=>{noise(.9,200,.8,.42,'lowpass',35,.2);tone(52,24,.7,.32,'sine');noise(.3,90,1,.3,'lowpass',40)},
 fire:()=>{noise(.65,700,.8,.2,'bandpass',2200);for(let i=0;i<6;i++)noise(.03,3500+Math.random()*2000,2,.07,'bandpass',0,.05,Math.random()*.5);noise(.5,300,.8,.1,'lowpass',900)},
 golem:()=>{noise(.45,350,.9,.38,'lowpass',45,.12);tone(66,30,.35,.3,'triangle');noise(.2,1200,2,.12,'bandpass',300,0,.04)},
 heal:()=>{[392,494,587].forEach((f,i)=>tone(f,f*1.003,.5,.035,'sine',i*.07,.4))},
 growl:()=>voice(85,48,.7,.09,'sawtooth',420,.1,14,5),
 bossGrowl:()=>{voice(58,30,1.5,.22,'sawtooth',320,.25,9,4);voice(116,52,1.3,.08,'square',500,.2,7,6);noise(1.1,200,1,.1,'lowpass',60,.1)},
 slam:()=>{noise(.7,500,.7,.55,'lowpass',35,.25);tone(62,22,.55,.42,'sine');noise(.12,2500,1,.2,'bandpass',500)},
 rise:()=>{noise(.9,200,.8,.32,'lowpass',60,.2);voice(100,46,.9,.08,'sawtooth',300,.2,6,5);noise(.4,1500,1,.08,'bandpass',300,.2,.1)},
 warnR:()=>{voice(340,160,.3,.09,'sawtooth',1200,.1);voice(170,85,.32,.07,'square',900,.1,0,0,.05)},
 boing:()=>{tone(180,620,.18,.12,'square');tone(620,140,.3,.1,'square',.18)},
 bless:()=>{[262,330,392,523].forEach((f,i)=>tone(f,f*1.002,.7,.04,'sine',i*.1,.5));bell(1046,.9,.015,.3,.5)},
 empty:()=>{noise(.06,900,1,.08,'bandpass',300);tone(140,100,.08,.05,'square')},
 rumble:()=>{noise(2.6,170,.6,.46,'lowpass',38,.2);tone(46,28,2,.14,'sine')},
 thunder:()=>{noise(.15,3000,1,.3,'bandpass',800);noise(3,500,.5,.6,'lowpass',40,.5,.05);tone(40,24,2.4,.2,'sine',.1)},
 howl:()=>{voice(240,470,.8,.05,'sine',1500,.5,5,6);voice(470,300,1.5,.05,'sine',1500,.5,5,8,.7)},
 cry:()=>{for(let i=0;i<3;i++)voice(640,470,.4,.04,'triangle',2000,.5,6,10,i*.5)}};
const lastS={};let clock=0;
function play(n,gap=.04){if(!AC)return;if(clock-(lastS[n]||-9)<gap)return;lastS[n]=clock;SFX[n]()}


// Próbki ładowane raz; do chwili gotowości lub przy błędzie pozostaje synteza.
const sfxBuffers=new Map(),sfxVoices=new Set(),sfxNext={};
let sfxLoadPromise=null;
function loadSfxSamples(){if(sfxLoadPromise||!AC)return sfxLoadPromise;
 sfxLoadPromise=Promise.all(Object.entries(SFX_SAMPLES).map(async([name,url])=>{try{
 const r=await fetch(url);if(!r.ok)throw Error(r.status);
 const b=await AC.decodeAudioData(await r.arrayBuffer());sfxBuffers.set(name,b);
 }catch(e){console.warn((EN?'SFX: failed to load ':'SFX: nie udało się wczytać ')+name,e)}}));return sfxLoadPromise}

// Głośność, minimalny odstęp (czas audio), limit nakładania, priorytet.
// Muzyka omija ten tor. Ważne sygnały mogą wyprzeć cichy efekt zbierania.
const SFX_MIX={roll:[.5,.035,2,2],ui:[.6,.06,2,3],empty:[.55,.18,1,3],coin:[.45,.10,2,0],pick:[.25,.08,2,0],
 level:[.85,.5,1,3],heal:[.55,.4,2,2],bless:[.65,.3,2,2],growl:[.4,.65,2,0],
 bossGrowl:[.85,.22,2,3],warnR:[.65,.18,2,3],kill:[.4,.12,3,0],hurt:[.85,.12,2,3],
 rumble:[.5,.6,1,1],rise:[.5,.2,2,1]};
const sfxPlayedAt={};
for(const [event,names] of Object.entries(SFX_SAMPLE_MAP)){
 const fallback=SFX[event];SFX[event]=()=>{
 if(!AC||SETT.sfx<=0)return;
 // Wspólne zdarzenie kill obsługuje też gracza: bez głosu potwora przy jego śmierci.
 const selected=event==='kill'&&typeof pl!=='undefined'&&pl?.dead?SFX_SAMPLE_MAP.hurt:names;
 const ready=selected.filter(n=>sfxBuffers.has(n));if(!ready.length){fallback();return}
 const [volume,gap,limit,priority]=SFX_MIX[event]||[.8,.035,4,1],now=AC.currentTime;
 if(now-(sfxPlayedAt[event]??-99)<gap)return;
 const voices=[...sfxVoices];if(voices.filter(v=>v.sfxEvent===event).length>=limit)return;
 if(voices.length>=20){const old=voices.find(v=>v.sfxPriority<priority);if(!old)return;
 old.sfxGain.gain.setTargetAtTime(0,now,.003);old.stop(now+.015);sfxVoices.delete(old)}
 sfxPlayedAt[event]=now;
 const index=(sfxNext[event]||0)%ready.length;sfxNext[event]=index+1;
 const source=AC.createBufferSource(),gain=AC.createGain();source.buffer=sfxBuffers.get(ready[index]);
 gain.gain.value=volume;source.sfxEvent=event;source.sfxPriority=priority;source.sfxGain=gain;
 source.connect(gain);gain.connect(sfxG||master);sfxVoices.add(source);
 source.onended=()=>{sfxVoices.delete(source);source.disconnect();gain.disconnect()};source.start();
 }}

/* ============ GAME STATE ============ */
const SK={
  venom:{name:(EN?'Venom Blade':'Zatruta Klinga'),kind:(EN?'Blade Spell':'Zaklęcie ostrza'),max:10,ic:'drop'},
  fireblade:{name:(EN?'Flaming Sword':'Ognisty Miecz'),kind:(EN?'Blade Spell':'Zaklęcie ostrza'),max:10,ic:'inferno'},
  iceblade:{name:(EN?'Frost Blade':'Lodowe Ostrze'),kind:(EN?'Blade Spell':'Zaklęcie ostrza'),max:10,ic:'frost'},
  bloodblade:{name:(EN?'Blood-Dripping Katana':'Spływająca Krwią Katana'),kind:(EN?'Blade Spell':'Zaklęcie ostrza'),max:10,ic:'blood'},
  aard:{name:(EN?'Force Knockback':'Odrzut Mocy'),kind:(EN?'Sign':'Znak'),max:5,ic:'area',lv:[(EN?'24 mana, cooldown 8 s. A wave in front of you: knockback, stun, deflects projectiles.':'24 many, odnowienie 8 s. Fala przed tobą: odrzut, ogłuszenie, zbija pociski.'),(EN?'Farther and stronger · cooldown 7 s.':'Dalej i mocniej · odnowienie 7 s.'),(EN?'Farther and stronger · cooldown 6 s.':'Dalej i mocniej · odnowienie 6 s.'),(EN?'Farther and stronger · cooldown 5 s.':'Dalej i mocniej · odnowienie 5 s.'),(EN?'Wave all around you · cooldown 4.5 s.':'Fala dookoła · odnowienie 4,5 s.')]},
  _vit:{name:(EN?'Vitality':'Witalność'),kind:(EN?'Attribute':'Cecha'),sub:(EN?'Character attribute':'Cecha postaci'),d:(EN?'+15 maximum health.':'+15 do maksymalnego życia.'),ic:'heart'},
  _str:{name:(EN?'Strength':'Siła'),kind:(EN?'Attribute':'Cecha'),sub:(EN?'Character attribute':'Cecha postaci'),d:(EN?'+10% sword and active skill damage.':'+10% obrażeń miecza i umiejętności aktywnych.'),ic:'might'},
  _dex:{name:(EN?'Dexterity':'Zręczność'),kind:(EN?'Attribute':'Cecha'),sub:(EN?'Character attribute':'Cecha postaci'),d:(EN?'+15 maximum stamina and a full refill.':'+15 do maksymalnej staminy i jej pełne uzupełnienie.'),ic:'boot'},
  _int:{name:(EN?'Intelligence':'Inteligencja'),kind:(EN?'Attribute':'Cecha'),sub:(EN?'Character attribute':'Cecha postaci'),d:(EN?'+15 maximum mana and a full refill; +2% active skill damage.':'+15 do maksymalnej many i jej pełne uzupełnienie; +2% obrażeń umiejętności aktywnych.'),ic:'scroll'},
  _gold:{name:(EN?'Pouch of Gold':'Sakwa złota'),kind:(EN?'Loot':'Łup'),extra:true,d:(EN?'+25 coins.':'+25 monet.')},
  _heal:{name:(EN?'Bitter Brew':'Gorzki wywar'),kind:(EN?'Loot':'Łup'),extra:true,d:(EN?'Restores all health.':'Leczy całe życie.')}
};
// difficulty knobs: skill cooldown multiplier, how many enemies the night ramps up to and how fast, how fast enemy health grows, enemy hit strength
const BOSS_MOB=.4;// podczas walki z bossem finałowym limit wrogów spada o 60%
const DF={e:{hp:.75,dmg:.7,en:.8,xp:1,coin:.9,n:(EN?'Easy':'Łatwy')},n:{hp:1,dmg:1,en:1,xp:1,coin:1,n:(EN?'Normal':'Normalny')},h:{hp:1.25,dmg:1.2,en:1.12,xp:1.15,coin:1.15,n:(EN?'Hard':'Trudny')}};let DIFFK='n';try{const q=localStorage.getItem('pn_diff');if(DF[q])DIFFK=q}catch(e){}
const SKILL_CD=.85,ENEMY_CAP=80,ENEMY_RAMP=.32,ENEMY_HP_T=300;let ENEMY_DMG=.8*DF[DIFFK].dmg;
// from hero level 20 the night gets 10% more enemies at once (limit raised too)
const LATE_LVL=20,LATE_MUL=1.1;
const THARM_LINES=[(EN?'Alive... in the Lower City. The last time I saw the living, our forges were going cold.':'Żywy... w Dolnym Mieście. Ostatni raz widziałem żywego, gdy gasły nasze kuźnie.'),(EN?'We dug deeper than the runes allowed. Something slept beneath the lava. We woke it with our picks.':'Kopaliśmy głębiej, niż pozwalały runy. Pod lawą coś spało. Obudziliśmy to kilofami.'),(EN?'My brothers are still digging, though they have no eyes left. Do not pity them.':'Moi bracia wciąż kopią, choć nie mają już oczu. Nie żałuj ich.'),(EN?'My hammer is lost, but the blessing of the forge still smoulders in me. Take it.':'Mój młot przepadł, ale błogosławieństwo kuźni wciąż się we mnie tli. Weź je.')];
const CHOJRAK_LINES=[(EN?'Halt, wanderer. Fear not, I am not one of them.':'Stój, wędrowcze. Nie lękaj się, nie jestem jednym z nich.'),(EN?'The Holy Order defiled everything I swore to. I still remember the words of my oath.':'Zakon splugawił wszystko, czemu przysięgałem. Ja wciąż pamiętam słowa przysięgi.'),(EN?'Kneel. May the light that no longer lives here pass through my hands into you.':'Klęknij. Niech światło, którego tu już nie ma, przejdzie przez moje dłonie na ciebie.'),(EN?'Go. For three minutes no wound shall break you.':'Idź. Przez trzy minuty żadna rana cię nie złamie.')];
const MILA_LINES=[(EN?'Watch your step. The last one who surprised me lies over there in pieces.':'Uważaj, gdzie stawiasz stopy. Ostatni, który mnie zaskoczył, leży tam w kawałkach.'),(EN?'I am Mila. My sisters came down here for dwarven gold. Only I remain.':'Jestem Mila. Moje siostry zeszły tu po złoto krasnoludów. Zostałam tylko ja.'),(EN?'Words are cheap. Show me your worth: twenty dead in fifteen heartbeats.':'Słowa są tanie. Pokaż, ile jesteś wart: dwudziestu martwych w piętnaście uderzeń serca.'),(EN?'Begin! I am counting.':'Zaczynaj! Liczę.')],MILA_RETRY=[(EN?'Once more? Twenty dead in fifteen heartbeats. Begin!':'Jeszcze raz? Dwudziestu martwych w piętnaście uderzeń serca. Zaczynaj!')];
const SKRYBA_LINES=[(EN?'Quiet... You are no guard. Guards do not look at things the way you do.':'Cicho... Nie jesteś strażnikiem. Strażnicy nie patrzą tak jak ty.'),(EN?'For twenty years I recorded your debts. Every bill, every unpaid night. That is why they chained me here.':'Spisywałem twoje długi przez dwadzieścia lat. Każdy rachunek, każdą nieopłaconą noc. Za to mnie tu zakuli.'),(EN?'I know this ledger by heart. Let me slip you better cards before the guards return.':'Znam tę księgę na pamięć. Pozwól mi podsunąć ci lepsze karty, zanim straż wróci.')];
const STRAZNIK_LINES=[(EN?'Don\'t shoot. I deserted before this citadel could devour me.':'Nie strzelaj. Rzuciłem służbę, zanim ta cytadela zdążyła mnie zjeść.'),(EN?'I carried out whatever I could. Amulets, seals, a few loans nobody ever recorded.':'Wynosiłem stąd, co się dało. Amulety, pieczęcie, kilka pożyczek, których nikt nie zapisał.'),(EN?'Marga\'s stall charges ledger prices. I know a certain treasurer. You\'ll get it cheap.':'Kram Margi ma ceny z księgi. Ja znam pewnego skarbnika. Tanio wyjdziesz.')];
const PIECZETNIK_LINES=[(EN?'A seal, child. Every contract has one, and every life bears its stamp.':'Pieczęć, dziecko. Każda umowa ją ma, a każde życie ma swój stempel.'),(EN?'I have been pressing them for a hundred years and I no longer remember what I sealed. Lately, I think, your sentence.':'Przykładam je od stu lat i nie pamiętam, co przypieczętowałam. Ostatnio chyba wyrok na ciebie.'),(EN?'Give me your hand. I will stamp you with a seal of protection. For a moment nothing will touch you.':'Daj rękę. Odbiję ci pieczęć ochronną. Na chwilę nic cię nie tknie.')];
const HERI_LINES=[(EN?'Halt. Do not draw your sword, I am not your enemy.':'Stój. Nie dobywaj miecza, nie jestem twoim wrogiem.'),(EN?'I am Heri, once standard-bearer of the royal guard. I swore loyalty to a crown that is no more.':'Jestem Heri, niegdyś chorąży gwardii królewskiej. Przysięgałem koronie, której już nie ma.'),(EN?'Honour does not rot along with the city. As long as someone remembers it, it lives.':'Honor nie gnije razem z miastem. Dopóki ktoś o nim pamięta, żyje.'),(EN?'Take my sign. For three minutes your stamina will regenerate 15% faster.':'Weź mój znak. Przez trzy minuty twoja stamina będzie odnawiać się o 15% szybciej.')];
const ELDER_LINES=[(EN?'You... bear the mark. I can see it bleeding through your cloak.':'Ty... nosisz znak. Widzę, jak krwawi przez płaszcz.'),(EN?'First came the Holy Order. They locked people in the barn and set it on fire to cleanse the village.':'Najpierw przyszedł zakon. Zamknęli ludzi w stodole i podpalili, żeby oczyścić wioskę.'),(EN?'And then our dead rose from the ashes. My daughter too. She still calls me by name.':'A potem z popiołów wstali nasi zmarli. Moja córka też. Wciąż woła mnie po imieniu.'),(EN?'I will not live to see the dawn. When I rise... do not hesitate.':'Nie dożyję świtu. Kiedy wstanę... nie wahaj się.')];
const MARGA_LINES=[(EN?'Hm. Branded. I haven\'t seen a living one in a long time.':'Hm. Piętnowany. Dawno nie widziałam żadnego żywego.'),(EN?'Gather gold from the corpses. The dead have no use for it, but I do.':'Zbieraj złoto z trupów. Martwym się nie przyda, a mnie owszem.'),(EN?'At midnight I will set up my stall. For coin you\'ll get things the Holy Order would rather not speak of.':'O północy rozłożę kram. Za monety dostaniesz rzeczy, o których zakon woli milczeć.'),(EN?'Now go. They can already smell you.':'A teraz idź. One już cię czują.')];
const WIT_LINES=[(EN?'Sellsword... I have no strength left. Listen before you go.':'Najemniku... nie mam już siły. Posłuchaj, zanim odejdziesz.'),(EN?'I burned people alive in their home. I finished off those who tried to flee. I guarded the door so no one could get out...':'Spaliłem ludzi żywcem w ich domu. Dobijałem tych, którzy próbowali uciekać. Pilnowałem drzwi, żeby nikt nie wyszedł...'),(EN?'It was not my decision. But an order is an order... That is what I told myself back then. I beg you, kill me. I cannot live with this any longer.':'To nie była moja decyzja. Ale rozkaz to rozkaz... Tak sobie wtedy mówiłem. Błagam, zabij mnie. Nie chcę już z tym żyć.')];
const IZOLDA_LINES=[(EN?'Stay away from the window! Ah... you are alive. And not rotting. A rare sight in Goldheim.':'Nie podchodź do okna! Ach... ty żyjesz. I nie gnijesz. Rzadki widok w Złotogrodzie.'),(EN?'Choirs once sang beneath the domes. Now all you hear is the poor scratching at our doors.':'Kiedyś pod kopułami śpiewały chóry. Teraz słychać tylko, jak biedota drapie w nasze drzwi.'),(EN?'The rot came from the lower districts. We said it was punishment for the wretched. Then it bloomed on our children.':'Zgnilizna przyszła z dolnych dzielnic. Mówiliśmy, że to kara dla nędzarzy. Potem zakwitła na naszych dzieciach.'),(EN?'Take this flask. It was meant for my husband. He no longer needs it.':'Weź ten flakon. Był dla mojego męża. On już go nie potrzebuje.')];
const OTTOKAR_LINES=[(EN?'Away from my doorstep! Ah, a sellsword. How much do you want to stand guard here until morning?':'Precz od mojego progu! Ach, najemnik. Ile chcesz za to, żebyś stał tu do rana?'),(EN?'Rot? It is a disease of the gutter. If the wretched washed their hands instead of begging, there would be no plague.':'Zgnilizna? To choroba ulicy. Gdyby nędzarze myli ręce zamiast żebrać, nie byłoby zarazy.'),(EN?'The monks of the fire monastery burn the sick at the stake. I pay them not to burn my servants.':'Mnisi z klasztoru ognia palą chorych na stosie. Płacę im, żeby nie palili moich sług.'),(EN?'Here, forty pieces of gold. Gold has always saved my house. It will save it this time too.':'Masz, czterdzieści sztuk złota. Złoto zawsze ratowało mój ród. Uratuje i tym razem.')];
const AUREL_LINES=[(EN?'Are you a knight? Mother said knights would come when the bells rang.':'Jesteś rycerzem? Mama mówiła, że rycerze przyjdą, kiedy zabiją dzwony.'),(EN?'The bells rang three nights ago. By themselves. Then something with wings came down from the cathedral tower.':'Dzwony biły trzy noce temu. Same. Wtedy z wieży katedry zeszło coś ze skrzydłami.'),(EN?'It does not eat people. It collects them. I heard it counting, and then laughing.':'Ono nie je ludzi. Ono ich zbiera. Słyszałem, jak liczy, a potem się śmieje.'),(EN?'Take my medallion. Mother said it protects against evil. It did not protect me, but maybe you are luckier.':'Weź mój medalion. Mama mówiła, że chroni przed złem. Mnie nie ochronił, ale może ty masz więcej szczęścia.')];
const WIERZ_LINES=[(EN?'Don\'t be afraid, son. I only brew herbs here, and you look like you could use some.':'Nie bój się, synku. Ja tu tylko ziele warzę, a ty wyglądasz, jakbyś miał z niego skorzystać.'),(EN?'We fled Goldheim from the rot, and the forest greeted us with wolves. But the old herbs still grow where you know to look.':'Uciekliśmy ze Złotogrodu przed zgnilizną, a las przywitał nas wilkami. Ale stare zioła wciąż rosną tam, gdzie ich szukać.'),(EN?'Drink. Bitter, but it will seal your wounds. Just don\'t ask what it\'s made of.':'Pij. Gorzkie, ale rany zasklepi. Tylko nie pytaj, z czego to.')];
const BARTOSZ_LINES=[(EN?'Quieter. Wolves hear better than you do.':'Ciszej. Wilki słyszą lepiej niż ty.'),(EN?'I have been tracking them for three days. This is no ordinary pack. Something leads them, something that walks on two legs and bears antlers.':'Tropię je od trzech dni. To nie zwykłe stado. Prowadzi je coś, co chodzi na dwóch nogach i ma poroże.'),(EN?'Here, I will draw in the mud where they roam. And where the power fires stand, before the Holy Order burns them.':'Daj, narysuję ci w błocie, którędy chodzą. I gdzie stoją ogniska mocy, póki zakon ich nie spalił.')];
const WOLCH_LINES=[(EN?'Marked one. I can sense your Brand, the way you smell smoke before a storm.':'Naznaczony. Czuję twoje piętno, jak dym czuć przed burzą.'),(EN?'The Holy Order beheaded my brothers beneath this oak, and the gods were silent. But the old power still flows through the roots.':'Zakon ściął moich braci pod tym dębem, a bogowie milczeli. Ale stara moc wciąż płynie w korzeniach.'),(EN?'I can give you a share of it: your weapon will remember twice as much. You will pay in blood. One fifth of your life, until dawn.':'Mogę ci dać jej część: twoja broń zapamięta dwa razy więcej. Zapłacisz krwią. Jedną piątą życia, do świtu.'),(EN?'If you agree, speak to me once more. If not, leave and do not return.':'Jeśli się zgadzasz, przemów do mnie jeszcze raz. Jeśli nie, odejdź i nie wracaj.')];
const WOLCH_ACCEPT=[(EN?'Good. Give me your hand.':'Dobrze. Daj rękę.'),(EN?'Blood for memory. It has always been so.':'Krew za pamięć. Tak było zawsze.')];
const BIG=new Set(['boss','beast','leszy','strzyga']);
// experience curve: 5 wisps per level as before, and on top of that every level costs 5% more (compounding)
// ground that slows the hero: rot (III), river ford and marsh water (IV)
const SLOWT={54:.6,64:.7,65:.55};
function awardCoins(value){const amount=Math.max(0,value)*S.pk.coin*DF[DIFFK].coin+(S.coinFrac||0),whole=Math.floor(amount+1e-8);S.coinFrac=amount-whole;S.coins+=whole;S.cEarn=(S.cEarn||0)+whole;return whole}
// Map I is a repeatable warm-up; difficulty and time growth remain independent.
const CHAPTER_BALANCE={1:{hp:.90,boss:.92,dmg:.85,pop:.78},2:{hp:.94,boss:.96,dmg:.88,pop:.84},3:{hp:.98,boss:1,dmg:.92,pop:.90},4:{hp:1.02,boss:1.03,dmg:.96,pop:.95},5:{hp:1.06,boss:1.06,dmg:1,pop:1},9:{hp:1,boss:1,dmg:1,pop:1}};
const chapterTuning=(ch=CH)=>CHAPTER_BALANCE[ch]||CHAPTER_BALANCE[9];
const chapterHp=type=>chapterTuning()[BIG.has(type)||['collector','boginka','jerzak'].includes(type)?'boss':'hp'];
function spawnTarget(){return Math.min(SL.cap,4+S.t*SL.ramp)*(S.lvl>=LATE_LVL?LATE_MUL:1)*S.pk.en*DF[DIFFK].en*(S.stage==='final'?BOSS_MOB:1)*chapterTuning().pop*(CH===1?.65+.35*Math.min(1,S.t/90):1)}
function enemyDamage(base,divisor=900){return base*ENEMY_DMG*chapterTuning().dmg*(divisor?1+Math.min(S.t,NIGHT)/divisor:1)}
function bossHealth(type,factor=1){const base=type==='boss'?(CH===5?2600:CH===2?1650:ET.boss.hp):ET[type].hp;return base*factor*(1+Math.min(S.t,NIGHT)/360)}
function breakPoise(e,amount){if(e.dead||e.inv>0||e.trans>0)return;e.poise=(e.poise||0)+amount;if(e.poise<140)return;e.poise=0;e.stun=1.1;e.mode=null;e.inv=0;e.atkT=0;e.ctw=0;e.hamT=0;e.fanWind=0;e.castWind=0;e.pull=0;e.chT=0;ftx((EN?'Poise broken':'Postawa przełamana'),e.x,e.y,ftEntH(e)+.5,'i')}

// chapter IV: kills needed next to each standing stone, and when the dead rise from the barrows
const STONE_N=6,DZIADY_AT=540;
const XP_BASE=5,XP_GROW=1.05,xpNeed=l=>Math.ceil(XP_BASE*l*Math.pow(XP_GROW,l-1));
let STORY=true;// fabuła jest zawsze włączona (przełącznik usunięty)
let S=null,pl=null;const keys={};let rollPress=false,talkPress=false;const tj={x:0,y:0};
function clearScene(){if(!S)return;for(const f of S.vfx)if(f.ownMat)for(const a of f.anim)a.n.dispose();clearSwordTransient();if(swordGlow)swordGlow.visible=false;const all=[...S.enemies.map(e=>e.mesh),...S.picks.flatMap(p=>[p.mesh,p.glow]),...S.vfx.map(f=>f.mesh),...S.corpses.map(c=>c.mesh),...S.golems.map(g=>g.mesh),...S.zones.map(z=>z.mesh),...(S.eproj||[]).map(f=>f.mesh),...(S.deathPurses||[]).map(p=>p.mesh)];for(const m of all)if(m)scene.remove(m);for(const c of S.corpses)if(c.own)c.mesh.material.dispose()}
function newGame(){
  clearScene();dg.clearRect(0,0,WW,WH);decalDirty=true;resetFog();MINI.t=0;
  S={t:0,kills:0,coins:0,lvl:1,xp:0,need:xpNeed(1),pendLv:0,choosing:false,phase:'play',enemies:[],parts:[],picks:[],vfx:[],corpses:[],quakes:[],golems:[],zones:[],delayed:[],
    waves:[],sk:{sword:1},cd:{sword:.6},spawnT:1,hurt:0,shakeT:0,shakeM:0,endT:0,stage:'p1',merchant:null,collector:null,bought:{},whet:0,magnet:0,ev:new Set(),shr:SHRINES.map(()=>60),eproj:[],stones:[0,0,0,0,0],boom:new Set(),trapCd:new Map(),dialog:null,dlg:0,npc:Object.fromEntries(W.npcs.map(n=>[n.id,{state:'alive',t:0}])),flash:0,nextBolt:9};
  pl={x:START.x,y:START.y,fx:1,fy:0,dir:2,s:1,hp:100,max:100,inv:0,roll:0,rollT:0,rvx:0,rvy:0,walk:0,moving:false,dead:false,deadT:0,rollCd:0,swingT:0,swingDir:2,swingS:1,hurtT:0};
  S.activeSlots=[null,null,null,null];S.activeWind=null;S.combatLock=0;S.cascade=null;S.cascadeCd=0;S.swordShots=[];S.mainEnchant=null;S.elementMain=null;S.elementSupport=null;S.shotCd=0;S.manaHitCd=0;S.manaFlash=0;S.enemyShotCd=0;S.swordGuardian=null;S.shotWind=null;S.swordTrails=[];S.sk={};S.cd={};S.str=1;S.dex=1;S.int=1;Object.assign(pl,{mana:SL.mana.max,manaMax:SL.mana.max,manaDelay:0,sta:100,staMax:100,staDelay:0,atk:null,block:false,blockT:0,broken:0,riposte:0,atkHeld:false,charge:0,charging:false,comboT:0,nextCombo:0,queue:false})
  S.deathCause=null;S.pk=PK0();S.hitsT=0;S.parries=0;S.cEarn=0;S.coinFrac=0;S.dealt=0;S.chal=null;S.perkIds=[];S.actions={attack:0,dodge:0,block:0,parry:0,collect:0};S.firstNight=CH===1&&!tutorialDone();S.noticeQueue=[];S.rebirth=null;S.rebirthUsed=false;S.deaths=0;S.deathPurses=[];S.finalDeathLoss=false;
  heroMesh.visible=true;chipsDirty=true;
}
function boxSolid(x,y,hw,hh){return solidAt(x-hw,y-hh)||solidAt(x+hw,y-hh)||solidAt(x-hw,y)||solidAt(x+hw,y)}
function enemyBody(e){return !e.dead&&e.rise<=0&&e.type!=='wisp'&&e.mode!=='merge'&&e.mode!=='emerge'&&!((e.mode==='up'||e.mode==='down')&&e.lh>0)}
const contactGap=e=>e.r+(BIG.has(e.type)?4:['drowner','zmora','wraith'].includes(e.type)?6:8);
function playerBodyBlocked(x,y,ox,oy){if(!S||!pl||pl.dead||pl.roll>0)return false;
  for(const e of S.enemies){if(!enemyBody(e))continue;const r=contactGap(e),next=Math.hypot(x-e.x,y-e.y),before=Math.hypot(ox-e.x,oy-e.y);if(next<r-.01&&next<before-.001)return true}return false}
function moveBox(o,dx,dy,hw,hh,passBodies=false){const free=(x,y)=>!boxSolid(x,y,hw,hh)&&(o!==pl||passBodies||!playerBodyBlocked(x,y,o.x,o.y));if(dx){const nx=o.x+dx;if(free(nx,o.y))o.x=nx}if(dy){const ny=o.y+dy;if(free(o.x,ny))o.y=ny}}
function keepEnemyDistance(e,ox=e.x,oy=e.y){if(!pl||pl.dead||pl.roll>0||!enemyBody(e))return;
  const gap=contactGap(e),vx=e.x-ox,vy=e.y-oy,px=ox-pl.x,py=oy-pl.y,a=vx*vx+vy*vy,b=2*(px*vx+py*vy),c=px*px+py*py-gap*gap;
  // Clip a movement segment at the hero's body, including a fast leap or charge.
  if(a>1e-8&&c>=-.01&&b<0){const disc=b*b-4*a*c;if(disc>=0){const t=(-b-Math.sqrt(disc))/(2*a);if(t>=0&&t<1){e.x=ox+vx*Math.max(0,t-.0001);e.y=oy+vy*Math.max(0,t-.0001)}}}
  let dx=e.x-pl.x,dy=e.y-pl.y,d=Math.hypot(dx,dy);if(d>=gap-.01)return;
  if(d<.001){dx=-(e.contactNX??-pl.fx);dy=-(e.contactNY??-pl.fy);d=Math.hypot(dx,dy)||1}
  const angle=Math.atan2(dy,dx),fly=['bat','courtraven','wraith','zmora'].includes(e.type);
  for(const offset of [0,.3,-.3,.6,-.6,1,-1,Math.PI/2,-Math.PI/2,Math.PI]){const x=pl.x+Math.cos(angle+offset)*(gap+.02),y=pl.y+Math.sin(angle+offset)*(gap+.02);if(fly||!boxSolid(x,y,e.hw||e.r-1,3)){e.x=x;e.y=y;return}}
  if(Math.hypot(ox-pl.x,oy-pl.y)>=gap-.01){e.x=ox;e.y=oy}
}
function incomingMelee(e,nx,ny){const dx=pl.x-e.x,dy=pl.y-e.y,d=Math.hypot(dx,dy);if(d>=contactGap(e)*.5)return[dx/d,dy/d];
  const x=e.contactNX??nx,y=e.contactNY??ny,n=Math.hypot(x,y);return n>.001?[x/n,y/n]:[-pl.fx,-pl.fy]}
function hurtFromEnemy(e,dmg,nx,ny){const previous=S.attacker;S.attacker=e;try{return hurtPlayer(dmg,nx,ny,e)}finally{S.attacker=previous}}
// ---- unoszące się napisy: obrażenia zadane wrogom i krótkie info przy postaci ----
const FLT={act:[],tm:0};
function ftClear(){for(const f of FLT.act)f.el.remove();FLT.act.length=0}
function ftx(text,x,y,h,kind,ent){const box=$('ft');if(!box||!S)return;if(kind!=='i'&&!SETT.dmg)return;
  if(ent&&kind!=='i'){const q=ent.ftI;if(q&&FLT.act.includes(q)&&FLT.tm-q.t0<.5&&q.kind===kind){q.val+=text;q.el.textContent=Math.round(q.val);if(kind==='c')q.el.style.fontSize='';return}}
  while(FLT.act.length>=20){FLT.act.shift().el.remove()}
  const el=document.createElement('div');el.className='ft '+kind;el.textContent=kind==='i'?text:Math.round(text);box.appendChild(el);
  const f={el,x:x+rnd(-4,4),y,h,kind,t0:FLT.tm,val:kind==='i'?0:text,life:kind==='i'?1.2:kind==='c'?1.0:.8,dx:rnd(-6,6),rise:kind==='i'?20:26};
  FLT.act.push(f);if(ent&&kind!=='i')ent.ftI=f}
const ftEntH=e=>.95+(e.r||5)/14;
function ftInfo(text){if(!S||!pl)return;const n=FLT.act.filter(f=>f.pl&&FLT.tm-f.t0<.7).length;ftx(text,pl.x,pl.y,1.75+n*.95,'i');FLT.act[FLT.act.length-1].pl=true}
function ftTick(dt){FLT.tm+=dt;const r=$('screen').getBoundingClientRect();
  for(let i=FLT.act.length-1;i>=0;i--){const f=FLT.act[i],a=FLT.tm-f.t0;if(a>=f.life){f.el.remove();FLT.act.splice(i,1);continue}
    const k=a/f.life,e=1-(1-Math.min(1,a/.35))*(1-Math.min(1,a/.35));
    V.set((f.x+f.dx*k)/16,f.h+f.rise*(e*.6+k*.4)/16,f.y/16).project(cam);
    f.el.style.left=((V.x+1)/2*100)+'%';f.el.style.top=((1-V.y)/2*100)+'%';
    f.el.style.opacity=k<.6?1:Math.max(0,1-(k-.6)/.4);
    const sc=f.kind==='d'&&a<.12?1.35-a*3:1;f.el.style.transform='translate(-50%,-50%) scale('+sc+')'}}
// ---- paski zdrowia i nazwy elit i minibossów ----
const ENAME={guard:(EN?'Guard':'Strażnik'),scribe:(EN?'Scribe':'Skryba'),executioner:(EN?'Executioner':'Kat'),debtor:(EN?'Debtor':'Dłużnik'),wraith:(EN?'Ledger Wraith':'Upiór rachunków'),bookgolem:(EN?'Tome Golem':'Golem ksiąg'),condemned:(EN?'Convict':'Skazaniec'),courtraven:(EN?'Court Raven':'Kruk sądowy'),paperrat:(EN?'Paper Rat':'Szczur papierowy'),madman:(EN?'Madman':'Szaleniec'),hound:(EN?'Hound':'Ogar'),rotknight:(EN?'Rotten Knight':'Zgniły rycerz'),monk:(EN?'Monk':'Mnich'),possessed:(EN?'Possessed':'Opętany'),knight:(EN?'Knight':'Rycerz'),dwarf:(EN?'Dwarf':'Krasnolud'),ghoul:(EN?'Ghoul':'Ghul'),warden:(EN?'Warden':'Strażnik'),wolf:(EN?'Wolf':'Wilk'),bandit:(EN?'Bandit':'Bandyta'),xbow:(EN?'Crossbowman':'Kusznik'),drowner:(EN?'Drowner':'Utopiec'),strzygon:(EN?'Strigoi':'Strzygoń'),wight:(EN?'Wraith':'Upiór'),zmora:(EN?'Nightmare':'Zmora'),bies:(EN?'Fiend':'Bies')};
// Display-only attribution: explicit hit source, independent of the melee/parry context.
const DEATH_CAUSES={night:(EN?'The Night':'Noc'),powder:(EN?'Powder explosion':'Wybuch prochu'),fire:(EN?'Fire':'Ogień'),poison:(EN?'Poison':'Trucizna'),bleed:(EN?'Bleeding':'Krwawienie')};
const DEATH_ENEMIES={bat:(EN?'Bat':'Nietoperz'),wisp:(EN?'Will-o\'-wisp':'Błędny ognik'),boss:(EN?'The Outgrowth':'Zrost'),beast:(EN?'Morhad, Beast of a Thousand Slaughters':'Morhad, Bestia Tysiąca Rzezi'),jerzak:(EN?'OBDYP, The Shaggy Core of the Abyss':'OBDYP, Kosmate Jądro Otchłani'),boginka:(EN?'The Mire Nymph':'Boginka z Topieliska'),leszy:(EN?'Leshy, Lord of the Wilds':'Leszy, Pan Kniei'),strzyga:(EN?'Mother Striga, Queen of the Barrows':'Strzyga Matka, Królowa Kurhanów')};
function deathCauseName(source){if(typeof source==='string')return DEATH_CAUSES[source]||(EN?'The Night':'Noc');if(!source?.type)return (EN?'The Night':'Noc');const ch=source.chapter??CH;if(source.type==='collector')return ch===5?(EN?'Arch-Judge Auditor':'Arcysędzia Rachmistrz'):(EN?'Order Collector':'Poborca Zakonu');if(source.type==='boss'&&ch===5)return (EN?'The Creditor':'Wierzyciel');return ENAME[source.type]||DEATH_ENEMIES[source.type]||(EN?'The Night':'Noc')}

const HB=new Map();
function hbClear(){for(const el of HB.values())el.remove();HB.clear()}
const GUARD_TOPS=new WeakMap();
function guardianBarAnchor(g){const m=g.mesh,image=m.material.map.image;let top=GUARD_TOPS.get(image);if(top===undefined){top=0;if(image.getContext){const d=image.getContext('2d').getImageData(0,0,image.width,image.height).data;findTop:for(let y=0;y<image.height;y++)for(let x=0;x<image.width;x++)if(d[(y*image.width+x)*4+3]>=128){top=y/image.height;break findTop}}GUARD_TOPS.set(image,top)}if(!m.geometry.boundingBox)m.geometry.computeBoundingBox();const b=m.geometry.boundingBox;m.updateWorldMatrix(true,false);V.set(0,b.max.y-top*(b.max.y-b.min.y),0);m.localToWorld(V);return V.project(cam)}
function hbTick(){const box=$('hbs');if(!box)return;

  for(const [e,el] of HB)if(e==='guard'?!S||!S.swordGuardian:(e.dead||!S||!S.enemies.includes(e))){el.remove();HB.delete(e)}
  if(!S)return;
  for(const e of S.enemies){if(e.dead||e.rise>0||BIG.has(e.type)||e.type==='collector'||e.type==='jerzak'||e.type==='boginka'||e.type==='wisp'||e.type==='bat')continue;
    const elite=e.mini||(e.max>=90&&e.hp<e.max)||((e.type==='debtor'||e.type==='wraith')&&Math.hypot(e.x-pl.x,e.y-pl.y)<130);if(!elite)continue;
    let el=HB.get(e);if(!el){el=document.createElement('div');el.className='hb'+(e.mini?' m':'');el.innerHTML='<b></b><i><u></u></i>';el.firstChild.textContent=(e.mini?(EN?'Elite: ':'Elita: '):'')+(ENAME[e.type]||(EN?'Enemy':'Wróg'));box.appendChild(el);HB.set(e,el)}
    V.set(e.x/16,ftEntH(e)+.45,e.y/16).project(cam);
    el.style.left=((V.x+1)/2*100)+'%';el.style.top=((1-V.y)/2*100)+'%';el.lastChild.firstChild.style.width=Math.max(0,e.hp/e.max*100)+'%'}
  {const g=S.swordGuardian;if(g&&!g.gone){let el=HB.get('guard');if(!el){el=document.createElement('div');el.className='hb gd';el.innerHTML='<i><u></u></i>';el.setAttribute('role','progressbar');el.setAttribute('aria-label',(EN?'Golem health':'Życie golema'));el.setAttribute('aria-valuemin','0');box.appendChild(el);HB.set('guard',el)}guardianBarAnchor(g);el.style.left=((V.x+1)/2*100)+'%';el.style.top='calc('+((1-V.y)/2*100)+'% - 7px)';el.setAttribute('aria-valuemax',Math.ceil(g.max));el.setAttribute('aria-valuenow',Math.max(0,Math.ceil(g.hp)));el.lastChild.firstChild.style.width=Math.max(0,Math.min(100,g.hp/g.max*100))+'%'}}}
let msgT=0;
let HINTS_ENABLED=true;try{HINTS_ENABLED=localStorage.getItem('pn_hints')!=='0'}catch(e){}
function setHints(on){HINTS_ENABLED=!!on;$('hintsTgl').checked=HINTS_ENABLED;try{localStorage.setItem('pn_hints',on?'1':'0')}catch(e){}if(!on){$('tut').classList.remove('on');$('tutSkip').hidden=true}TUT.sid=null}
// the old pausing event box is gone; this only hands out a pending Wit reward once its message has been shown
function pumpNotice(){if(!S||S.phase!=='play'||S.notice||S.intro||S.dialog||S.choosing||S.shop||S.paused)return;if(S.witRewardPending&&S.pendLv>0&&!S.banner&&!(S.noticeQueue||[]).length){S.witRewardPending=false;openLevelUp()}}
function dismissNotice(){if(!S||!S.notice)return;S.notice=null;$('notice').hidden=true;resetInput();for(const k in keys)keys[k]=false;pumpNotice();if(!S.notice)$('touch').hidden=!coarse||!!(S.dialog||S.choosing||S.shop||S.intro||S.paused)}
function say(t,kind='event'){if(!t)return;if(kind==='hint'&&isPort())return;if(S&&S.phase==='play'){const q=S.noticeQueue||(S.noticeQueue=[]);if(S.banner?.text!==t&&!q.some(n=>n.text===t))q.push({text:t,kind});return}const m=$('msg');m.classList.remove('boss','tick','tickhold');m.textContent=t;m.classList.add('on');clearTimeout(msgT);msgT=setTimeout(()=>m.classList.remove('on'),messageDuration(t)*1000)}
// Event messages: a banner at the top of the screen that never pauses the game. Each stays MSG.show seconds of play
// time at minimum, extended by text length up to MSG.max; the next waits until fade-out ends (MSG.gap).
// The banner waits (and hides) while the game is paused, in a dialog, on level-up cards, in the shop or the intro.
const MSG={show:3,gap:.45,threshold:60,perChar:.025,max:7};
function messageDuration(text){return Math.min(MSG.max,MSG.show+Math.max(0,[...String(text)].length-MSG.threshold)*MSG.perChar)}
// Pion (telefon): komunikaty fabularne i bossów ('story'/'boss') jadą jako pasek jednej linijki i nie zatrzymują gry; samouczek jest wyłączony.
function isPort(){const s=$('screen');return !!(s&&s.classList.contains('port'))}
const MSG_TICK={min:6,max:16,base:2.5,perChar:.11};
function tickDuration(text){return Math.min(MSG_TICK.max,Math.max(MSG_TICK.min,MSG_TICK.base+[...String(text)].length*MSG_TICK.perChar))}
function bannerTick(dt){const m=$('msg');if(!S||S.phase!=='play'){S&&(S.banner=null);return}
  const hold=!!(S.paused||S.choosing||S.shop||S.dialog||S.intro||S.witChoice||pl.dead);
  if(S.banner){if(hold){m.classList.remove('on');m.classList.add('tickhold');return}m.classList.remove('tickhold');S.banner.t-=dt;if(S.banner.t>0){m.classList.add('on');return}m.classList.remove('on');if(S.banner.t<=-MSG.gap)S.banner=null;return}
  if(hold)return;const next=(S.noticeQueue||[]).shift();if(!next)return;
  const tick=(next.kind==='story'||next.kind==='boss')&&isPort()&&!matchMedia('(prefers-reduced-motion:reduce)').matches,dur=tick?tickDuration(next.text):messageDuration(next.text);
  S.banner={text:next.text,kind:next.kind,t:dur};m.classList.remove('tickhold');m.classList.toggle('tick',tick);m.classList.toggle('boss',next.kind==='boss');
  if(tick){m.textContent='';const sp=document.createElement('span');sp.textContent=next.text;m.appendChild(sp);m.style.setProperty('--tickT',dur+'s')}else m.textContent=next.text;
  m.classList.add('on')}
function nearPowerFire(){if(!S||pl.dead||S.rebirthUsed||S.rebirth)return null;let result=null,best=32;for(let i=0;i<SHRINES.length;i++){const f=SHRINES[i],d=Math.hypot(pl.x-f.x,pl.y-f.y);if(d<best){best=d;result={...f,index:i,kind:'powerFire'}}}return result}
function activatePowerFire(f){if(!f||!S||S.rebirth||S.rebirthUsed)return false;S.rebirth={ch:CH,x:pl.x,y:pl.y,index:f.index};play('bless',0);say((EN?'The power fire remembers your Brand. Tonight you will return once. Revival costs half of the character experience earned this night. Your coins will stay where you died.':'Ognisko mocy zapamiętuje twoje piętno. Tej nocy powrócisz raz. Odrodzenie kosztuje połowę doświadczenia postaci otrzymanego za noc. Monety zostaną w miejscu śmierci.'));return true}
function preparePowerFires(w){if(!A.powerFire)A.powerFire=[[64,64],[96,64],[0,96],[32,96]].map(([x,y])=>procFrame(IMGS.br_props,x,y,32,32,'prop'));
  w.fireMarkers=[];for(const o of w.propObjs)if(o.kind==='shrine'){o.frames=A.powerFire;o.fps=6;o.mesh.geometry=geo32;o.mesh.material=o.frames[0].n;o.mesh.castShadow=false;const mat=new THREE.MeshBasicMaterial({color:0xffad55,transparent:true,opacity:.7,depthWrite:false,side:THREE.DoubleSide}),ring=new THREE.Mesh(new THREE.RingGeometry(.52,.65,40).rotateX(-Math.PI/2),mat);ring.position.set(o.mesh.position.x,.035,o.mesh.position.z);w.group.add(ring);w.fireMarkers.push({mesh:ring,index:o.si})}for(const l of w.LSRC)if(l.kind==='shrine')l.col=0xffa355}
function makeDeathPurse(x,y,amount){if(!(amount>0))return;const mesh=new THREE.Mesh(geoC,A.pick.c.n);mesh.scale.setScalar(.8);mesh.position.set(x/16,.2,y/16);scene.add(mesh);(S.deathPurses||(S.deathPurses=[])).push({ch:CH,x,y,amount,mesh,ready:false})}
function updatePowerVisuals(){if(!S)return;for(const f of W.fireMarkers||[]){const armed=S.rebirth&&S.rebirth.ch===CH&&S.rebirth.index===f.index;f.mesh.material.color.setHex(S.rebirthUsed||S.rebirth&&!armed?0x766b65:armed?0x8cead4:0xffad55);f.mesh.material.opacity=(S.rebirthUsed||S.rebirth&&!armed)?.18:armed?.85:.48+.18*Math.sin(clock*2)}for(const p of S.deathPurses||[]){p.mesh.visible=p.ch===CH;p.mesh.position.set(p.x/16,.2+Math.sin(clock*3)*.035,p.y/16)}}
function recoverPurses(){for(let i=(S.deathPurses||[]).length-1;i>=0;i--){const p=S.deathPurses[i];if(p.ch!==CH)continue;const distance=Math.hypot(pl.x-p.x,pl.y-p.y);if(!p.ready){if(distance>24)p.ready=true;continue}if(distance>16)continue;S.coins+=p.amount;scene.remove(p.mesh);S.deathPurses.splice(i,1);play('coin',0);say((EN?'You recover the purse from where you died: ':'Odzyskujesz sakwę z miejsca śmierci: ')+p.amount+(EN?' coins.':' monet.'))}}
function tryRebirth(){if(!S.rebirth||S.rebirthUsed)return false;clearSwordTransient();S.swordTrails=[];const f=S.rebirth;makeDeathPurse(pl.x,pl.y,S.coins);S.coins=0;S.rebirthUsed=true;S.deaths=1;let x=f.ch===CH?f.x:START.x,y=f.ch===CH?f.y:START.y;
  if(boxSolid(x,y,4,3)){x=START.x;y=START.y}Object.assign(pl,{x,y,hp:Math.max(1,Math.round(pl.max*.7)),dead:false,deadT:0,inv:3,roll:0,rollCd:0,atk:null,block:false,charging:false,atkHeld:false,queue:false,swingT:0,broken:0,hurtT:0,sta:pl.staMax,mana:pl.manaMax,manaDelay:0});S.endT=0;S.hurt=0;S.hitstop=0;S.snare=0;S.slowT=0;camTarget.set(x/16,0,y/16);resetInput();play('bless',0);say((EN?'The power fire brings you back to life. Character experience for this night: −50%. Your purse waits where you fell. Another death will end the night without its rewards.':'Ognisko przywraca cię do życia. Doświadczenie postaci za tę noc: −50%. Sakwa czeka tam, gdzie upadłeś. Kolejna śmierć zakończy noc bez jej nagród.'));return true}
function loseSecondLife(){clearSwordTransient();if(!S.rebirthUsed)return;S.finalDeathLoss=true;S.deaths=2;S.coins=0;S.xp=0;for(const p of S.deathPurses||[])scene.remove(p.mesh);S.deathPurses=[];for(let i=S.picks.length-1;i>=0;i--)if(S.picks[i].k==='c'){scene.remove(S.picks[i].mesh);scene.remove(S.picks[i].glow);S.picks.splice(i,1)}}
function offerWitChoice(){S.witChoice=true;$('witChoices').hidden=false;document.querySelector('#dialog .next').hidden=true;$('dlgTxt').textContent=(EN?'"It was not my decision. But an order is an order... That is what I told myself back then. I beg you, kill me. I cannot live with this any longer." What do you decide?':'„To nie była moja decyzja. Ale rozkaz to rozkaz... Tak sobie wtedy mówiłem. Błagam, zabij mnie. Nie chcę już z tym żyć”. Co postanawiasz?');resetInput();$('witLeave').focus()}
function chooseWit(mercy){if(!S||!S.witChoice||S.dialog?.id!=='wit')return;const n=S.dialog,st=S.npc.wit;S.witChoice=false;S.dialog=null;$('witChoices').hidden=true;$('dialog').hidden=true;document.querySelector('#dialog .next').hidden=false;S.ev.add('w');resetInput();
  if(mercy){st.state='spared';S.coins+=30;const xp=S.need*.5;S.xp+=xp;while(S.xp>=S.need){S.xp-=S.need;S.lvl++;S.need=xpNeed(S.lvl);S.pendLv++}S.witRewardPending=S.pendLv>0;play('coin',0);say((EN?'You leave Wit in the stocks. He gives you a hidden purse: +30 coins. This choice grants half a bar of night-level experience.':'Pozostawiasz Wita w dybach. Oddaje ci ukrytą sakiewkę: +30 monet. Ta decyzja daje pół paska doświadczenia poziomu nocy.'));}
  else{st.state='dead';pool(n.x,n.y,18,7);const e=spawnEnemy('wraith',n.x+20,n.y+8,{rise:1,stolen:0,witSpecter:true});e.stolen=S.coins;S.coins=0;play('bossGrowl',0);say((EN?'You finish Wit off. With his last breath, a Ledger Wraith arrives from the Citadel and takes your coins. Defeat it to get them back.':'Dobijasz Wita. Z jego ostatnim tchnieniem przybywa Upiór rachunków z Cytadeli i zabiera twoje monety. Pokonaj go, by je odzyskać.'));}}

function shake(m,t){if(!SETT.shake)return;S.shakeM=Math.max(S.shakeM,m);S.shakeT=Math.max(S.shakeT,t)}
function blood(x,y,n,nx,ny,spread=1){const b=Math.atan2(ny,nx);for(let i=0;i<n;i++){const a=b+(Math.random()-.5)*2.2*spread,s=25+Math.random()*90;S.parts.push({k:'b',x,y,z:8+Math.random()*6,vx:Math.cos(a)*s,vy:Math.sin(a)*s,vz:15+Math.random()*60,c:Math.random()<.7?P.blood:P.blood2})}}
function decalAt(cv,x,y,a=1){dg.globalAlpha=a;dg.drawImage(cv,Math.round(x-16),Math.round(y-16));dg.globalAlpha=1;decalDirty=true}
function pool(x,y,w,h){if(DEC.pool){decalAt(DEC.pool[w<14?0:w<19?1:w<30?2:3],x,y);return}x=Math.round(x);y=Math.round(y);dg.fillStyle=P.blood2;dg.fillRect(x-w/2,y-h/2+1,w,h-2);dg.fillStyle=P.blood;dg.fillRect(x-w/4,y-1,w/2,2);decalDirty=true}
function heal(n){if(pl.dead||pl.hp>=pl.max)return 0;const h=Math.min(n,pl.max-pl.hp);pl.hp+=h;return h}
const might=()=>(1+.1*(S.whet||0))*(S.fury>0?1.2:1)*(S.pk?S.pk.dmg:1);
function spriteMesh(geo){const m=new THREE.Mesh(geo,A.fx.slash[0].n);scene.add(m);return m}
function addVfx(anim,dur,x,y,h,size,mode,rot=0,flip=1){const m=spriteMesh(geoC);setFrame(m,anim[0]);S.vfx.push({mesh:m,anim,t:0,dur,x,y,h,size,mode,rot,flip});return m}
// ---- nowe animacje skilli i pocisków (Gemini, 30.10.2026): arkusz skill_fx, 192 px na klatkę ----
const SKM={"knock": [0, 6], "earth": [1, 6], "stone": [2, 6], "frostf": [3, 4], "frosti": [4, 5], "firef": [5, 4], "firei": [6, 7], "casc": [7, 6], "whirl": [8, 4], "wave1": [9, 4], "wave2": [10, 4], "rush": [11, 5], "slash": [12, 5], "bolt": [13, 3], "boltHit": [14, 3], "boss": [15, 4], "freeze": [16, 4], "burn": [17, 4], "poison": [18, 4], "bleed": [19, 4]},SKFX={};
function skFrames(k){if(SKFX[k])return SKFX[k];const im=typeof IMGS!=='undefined'&&IMGS&&IMGS.skill_fx,m=SKM[k];if(!im||!m)return null;const out=[];for(let i=0;i<m[1];i++){const c=document.createElement('canvas');c.width=c.height=192;c.getContext('2d').drawImage(im,i*192,m[0]*192,192,192,0,0,192,192);const t=new THREE.CanvasTexture(c);t.magFilter=t.minFilter=THREE.LinearFilter;t.generateMipmaps=false;out.push({n:new THREE.MeshBasicMaterial({map:t,transparent:true,alphaTest:.04,depthWrite:false,side:THREE.DoubleSide,fog:false})})}return SKFX[k]=out}
function skLoop(fr,dur,fps){const n=Math.max(fr.length,Math.round(dur*fps/fr.length)*fr.length),o=[];for(let i=0;i<n;i++)o.push(fr[i%fr.length]);return o}
function skAdd(k,dur,x,y,h,size,mode,rot=0){const fr=skFrames(k);if(!fr)return null;addVfx(fr,dur,x,y,h,size,mode||'bill',rot);return S.vfx[S.vfx.length-1]}


/* ============ WALKA MIECZEM (Slasher) ============ */
// The only combat mode (Horde was removed on 28.10.2026). The hero swings by hand (light combo, heavy blow), blocks and parries, every action costs stamina;
// enemies wind up before they strike instead of hurting on touch, there are fewer of them, bosses have less health.
let STORYMODE=true;try{STORYMODE=localStorage.getItem('pn_story')!=='0'}catch(e){}
const chWon=c=>!!((SETT.save['s'+c]&&SETT.save['s'+c].win)||(SETT.save['a'+c]&&SETT.save['a'+c].win));
const chLocked=c=>STORYMODE&&c>1&&!chWon(c-1);
let heavyPress=false,signPress=false,mouseL=false,mouseR=false,mouseX=0,mouseY=0,mouseT=-99,tAtk=false,tBlock=false;
const SL={regen:28,delay:.55,roll:24,blockRegen:.25,stepCost:8,
  mana:{max:60,regen:1.2,delay:.75,onHit:1,onParry:0,onKill:0,hitGap:.5},
  shot:{iceDmg:16,perL:2,targets:[3,4,6],iceR:8,fireDmg:[30,36,42],fireR:[34,38,42],fireHit:9,splash:.5},
  cascade:{dmg:[9,11,13],cuts:3,gap:.2,start:.1,arc:1.25,range:34,lunge:5,rec:.15},
  guard:{dur:10,hp:[.8,1,1.2],taunt:[96,112,128],bossTaunt:5,spd:42,r:7,leash:140,inv:.3},parry:.2,blockMul:1.2,guardBreak:.8,riposte:1.5,cap:28,ramp:.12,bossHp:.45,enemyWind:.5,enemyRec:.5,enemyHit:1.6,staggerGap:.9,coinDrop:.45,coinStrong:2,coinSurvive:15,projDiv:900,dmgDiv:800,shotGap:1.3,aim:.55,
  wave:{l:{dmg:.6,speed:230,life:.62,r:13,size:1.25},h:{dmg:.7,speed:250,life:.75,r:19,size:1.8},stun:.4},
  light:{cost:14,dmg:[17,19,28],wind:.12,act:.1,rec:.27,range:30,arc:1.05,stun:[.18,.18,.3],lunge:[30,30,55]},
  heavy:{cost:36,dmg:48,charge:.42,wind:.52,act:.12,rec:.3,range:37,arc:1.5,stun:.7,lunge:70}};
// level-up cards in slasher mode raise the hero's attributes instead of giving skills
const SLASH_UP=['_vit','_dex','_str','_int'];
// direction from the hero to the mouse pointer (screen y is foreshortened by the camera tilt)
function aimDir(){if(clock-PAD.aimT<.15)return [PAD.ax,PAD.ay];if(coarse||clock-mouseT>3)return null;V.set(pl.x/16,.9,pl.y/16).project(cam);const r=$('screen').getBoundingClientRect();
  const hx=(V.x+1)/2*r.width,hy=(1-V.y)/2*r.height,dx=mouseX-hx,dy=(mouseY-hy)/Math.sin(PITCH),d=Math.hypot(dx,dy);return d>4?[dx/d,dy/d]:null}
// keyboard and touch: lock on to the closest enemy roughly in front
function autoAim(){let b=null,bd=1e9;for(const e of S.enemies){if(e.dead||e.rise>0||e.type==='wisp')continue;const dx=e.x-pl.x,dy=e.y-pl.y,d=Math.hypot(dx,dy);if(d>75||d<1)continue;const f=(dx*pl.fx+dy*pl.fy)/d;if(f<-.2)continue;const sc=d*(1.6-f);if(sc<bd){bd=sc;b=[dx/d,dy/d]}}return b}
// ---- STYLE WALKI (slasher): trzy gałęzie kart z poziomami. Osiem poziomów w jednej gałęzi daje bonus zestawu ----
const BR={def:{n:(EN?'Defender':'Obrońca'),set:(EN?'Parry: 0.35 s of invulnerability; +2% health (once per 2.5 s).':'Parowanie: 0,35 s nietykalności; +2% życia (raz na 2,5 s).')},off:{n:(EN?'Assassin':'Zabójca'),set:(EN?'Hitting a stunned enemy restores 6 stamina.':'Trafienie ogłuszonego wroga zwraca 6 staminy.')},wav:{n:(EN?'Wavemaster':'Mistrz fal'),set:(EN?'Waves deal +30% damage and apply the blade status.':'Fale +30% obrażeń i nakładają status ostrza.')}},SET_N=8;
const FALA_B=[0,.1,.2,.3,.4,.6],ZRYW_N=[0,6,4,3];// Fala Mocy: łączny bonus na poziomie; Zryw: co ile trafień
const STY={
  garda:{br:'def',name:(EN?'Iron Guard':'Żelazna Garda'),ic:'quen',max:5,d:(EN?'Block −10% stamina per level (lvl 5: −50%).':'Blok −10% staminy za poziom (poz. 5: −50%).')},
  riposta:{br:'def',name:(EN?'Mortal Riposte':'Śmiertelna Riposta'),ic:'sword',max:5,d:(EN?'Riposte multiplier: ×1.5 base, ×2 at level 1, ×3 from level 2; +0.25 s window per level.':'Mnożnik riposty: ×1,5 bazowo, ×2 na poziomie 1, ×3 od poziomu 2; +0,25 s okna za poziom.')},
  odzysk:{br:'def',name:(EN?'Second Wind':'Odzysk Tchu'),ic:'boot',max:3,d:(EN?'Parrying restores 10 stamina per level. Lvl 3: +2% health (once per 2.5 s).':'Parowanie zwraca 10 staminy za poziom. Poz. 3: +2% życia (raz na 2,5 s).')},
  ostrze:{br:'off',name:(EN?'Swift Blade':'Szybkie Ostrze'),ic:'whet',max:5,d:(EN?'Light attack: −8% stamina and −6% recovery time per level.':'Lekki cios: −8% staminy i −6% czasu powrotu za poziom.')},
  rytm:{br:'off',name:(EN?'Death Rhythm':'Rytm Śmierci'),ic:'might',max:5,d:(EN?'Third combo hit: +18% damage per level.':'Trzeci cios combo: +18% obrażeń za poziom.')},
  taniec:{br:'off',name:(EN?'Blade Dance':'Taniec Ostrzy'),ic:'haste',max:3,d:(EN?'Per level: dodge −12% stamina, first hit after a dodge +25% damage.':'Za poziom: unik −12% staminy, pierwszy cios po uniku +25% obrażeń.')},
  fala:{br:'wav',name:(EN?'Force Wave':'Fala Mocy'),ic:'area',max:5,d:(EN?'Slash wave: +10% damage per level (lvl 5: +20%).':'Fala cięcia: +10% obrażeń za poziom (poz. 5: +20%).')},
  zasieg:{br:'wav',name:(EN?'Distant Wave':'Daleka Fala'),ic:'frost',max:5,d:(EN?'Slash wave: +18% range and width per level.':'Fala cięcia: +18% zasięgu i szerokości za poziom.')},
  echo:{br:'wav',name:(EN?'Parry Echo':'Echo Parowania'),ic:'earth',max:3,d:(EN?'More waves after a parry: lvl 1 – two, lvl 2–3 – three (lvl 3: +20% damage).':'Po parowaniu więcej fal: poz. 1 – dwie, poz. 2–3 – trzy (poz. 3: +20% obrażeń).')},
  zryw:{br:'wav',name:(EN?'Blade Rush':'Zryw Ostrza'),ic:'inferno',max:3,d:(EN?'Every 6th, 4th or 3rd light hit (lvl 1–3) releases a wave (60% damage).':'Co 6., 4. lub 3. trafienie lekkim ciosem (poz. 1–3) wypuszcza falę (60% obrażeń).')},
  krew:{pact:1,name:(EN?'Blood Pact':'Pakt Krwi'),ic:'heart',max:1,d:(EN?'+35% damage, −25% max health.':'+35% obrażeń, −25% maks. życia.')},
  szklo:{pact:1,name:(EN?'Glass Sword':'Szklany Miecz'),ic:'wisp',max:1,d:(EN?'+50% damage, enemies hit you 30% harder.':'+50% obrażeń, wrogowie ranią cię o 30% mocniej.')},
  zelazo:{pact:1,name:(EN?'Iron Pact':'Pakt Żelaza'),ic:'amulet',max:1,d:(EN?'+40% max stamina, −15% damage.':'+40% maks. staminy, −15% obrażeń.')},
  cisza:{pact:1,name:(EN?'Pact of Silence':'Pakt Ciszy'),ic:'brew',max:1,d:(EN?'+50% stamina regeneration, −20% max health.':'+50% regeneracji staminy, −20% maks. życia.')}};
for(const k in STY){const t=STY[k];t.kind=t.pact?(EN?'Pact':'Pakt'):(EN?'Style · ':'Styl · ')+BR[t.br].n;if(t.pact)t.sub=(EN?'An edge with a price':'Przewaga z ceną');Object.assign(SK[k]=SK[k]||{},t)}
const sk=k=>(S&&S.sk&&S.sk[k])||0;
const brSum=br=>Object.keys(STY).filter(k=>STY[k].br===br).reduce((a,k)=>a+sk(k),0),brOn=br=>brSum(br)>=SET_N;
const parryWin=()=>SL.parry,riMul=()=>{const l=sk('riposta');return l>=2?3:l>=1?2:SL.riposte},blockMulX=()=>SL.blockMul*(1-.1*sk('garda'));
function onParry(){S.combatLock=4;if(sk('retaliation'))S.retaliate=2;S.parries++;S.actions.parry++;pl.riposte=1.6+.25*sk('riposta');const o=sk('odzysk');if(o)pl.sta=Math.min(pl.staMax,pl.sta+10*o);
  const ready=!(pl.parryHealCd>0);if(ready&&(o>=3||brOn('def'))){heal(pl.max*((o>=3?.02:0)+(brOn('def')?.02:0)));pl.parryHealCd=2.5}
  if(brOn('def')){pl.inv=Math.max(pl.inv,.35);ftInfo((EN?'Defender\'s Wall':'Mur obrońcy'))}}
function attackCost(kind){return (kind==='h'?SL.heavy.cost:SL.light.cost)*(S.dex||1)*(kind==='l'?1-.08*sk('ostrze'):1)}
function startAttack(kind,combo=0,charged=false){if(pl.atk?.kind==='whirl')return;const P=kind==='h'?SL.heavy:SL.light,cost=attackCost(kind);if(pl.sta+1e-8<cost){S.stamFlash=.45;play('empty',.25);return}
  const a=aimDir()||autoAim()||[pl.fx,pl.fy];pl.fx=a[0];pl.fy=a[1];
  pl.sta=Math.max(0,pl.sta-cost);S.combatLock=4;S.actions.attack++;const wind=P.wind-(kind==='h'&&charged?P.charge:0);pl.staDelay=SL.delay;pl.atk={kind,combo,charged,retaliate:kind==='h'&&(S.retaliate||0)>0,stage:'wind',t:wind,visualWind:wind,dx:a[0],dy:a[1],hit:false,visualRiposte:pl.riposte>0};pl.queue=false;
  if(S.bloodCharge>0)S.bloodCharge=0;if(kind==='h')S.retaliate=0;const dur=wind+P.act+P.rec;pl.swingT=pl.swingDur=dur;if(Math.abs(a[0])>Math.abs(a[1])){pl.swingDir=2;pl.swingS=a[0]>0?1:-1}else{pl.swingDir=a[1]>0?0:1;pl.swingS=1}
  play(kind==='h'?'bladeHeavy':'bladeLight',.03)}
// Repeated ordinary hits cannot keep cancelling the same enemy's attack forever.
// Parry and Aard keep their guaranteed interrupt; a heavy blow can stop a light-hit recovery.
function slashStagger(e,seconds,heavy=false){if(e.staggerCd>0&&!heavy)return false;e.stun=Math.max(e.stun||0,seconds);e.ghoulWind=0;e.sw=0;e.staggerCd=seconds+SL.staggerGap;return true}
function attackHit(a){const P=a.kind==='h'?SL.heavy:SL.light,R=P.range,arc=P.arc,crit=pl.riposte>0;ftCrit=crit;ftHeavy=a.kind==='h';ftMelee=true;
  let dmg=(a.kind==='h'?P.dmg:P.dmg[a.combo])*(1+.07*(S.lvl-1))*(S.str||1)*might()*encDmg(encLevel()[1]);const twinBase=dmg;if(crit)dmg*=riMul();if(a.kind==='l'&&a.combo===2)dmg*=1+.18*sk('rytm');if(pl.dance>0){dmg*=1+.25*sk('taniec');pl.dance=0}
  const waveDmg=dmg;if(a.retaliate)dmg*=1+.1*sk('retaliation');const ang=Math.atan2(a.dy,a.dx);let hits=0;
  for(const e of [...S.enemies]){if(e.dead||e.rise>0)continue;const dx=e.x-pl.x,dy=e.y-pl.y,d=Math.hypot(dx,dy);if(d>R+e.r||!sightSword(pl.x,pl.y,e.x,e.y))continue;let df=Math.atan2(dy,dx)-ang;while(df>Math.PI)df-=2*Math.PI;while(df<-Math.PI)df+=2*Math.PI;if(d>10&&Math.abs(df)>arc)continue;
    const big=BIG.has(e.type)||e.type==='collector',weak=e.stun>0||e.recov>0||crit;if(damageEnemy(e,dmg,dx/(d||1),dy/(d||1),a.kind==='h'?1.6:a.combo===2?1.2:.7)){hits++;swordTechniqueHit(e,a);supportEnchant(e,a,crit);applyEnchants(e,a,crit);if(weak&&brOn('off'))pl.sta=Math.min(pl.staMax,pl.sta+Math.min(6,Math.max(0,12-(a.refund||0))));if(weak&&brOn('off'))a.refund=(a.refund||0)+6}else continue;
    // stagger: normal enemies are interrupted, big ones only when their poise breaks
    if(!e.dead){const st=a.kind==='h'?P.stun:P.stun[a.combo];if(big){breakPoise(e,a.kind==='h'?45:a.combo===2?20:12)}else{slashStagger(e,st,a.kind==='h'||crit)}}}
  ftCrit=false;ftHeavy=false;ftMelee=false;
  if(hits>0&&!(S.manaHitCd>0)&&SL.mana.onHit>0){gainMana(SL.mana.onHit);S.manaHitCd=SL.mana.hitGap}
  const c=Math.cos(ang),s=Math.sin(ang),trail=COMBAT_TRAIL[encLevel()[0]],visualSize=swordVisualSize(a.kind);
  if(!trail||!emitCombatEffect(trail,pl.x+c*R*.12,pl.y+s*R*.12,visualSize,-screenAng(c,s))){if(!skAdd('slash',.26,pl.x+c*R*.4,pl.y+s*R*.4,.6,visualSize*1.1,'bill',-screenAng(c,s)))addVfx(A.fx.slash,.26,pl.x+c*R*.4,pl.y+s*R*.4,.6,visualSize,'bill',-screenAng(c,s))}
  {const en=ENCH.filter(k=>S.sk[k]);if(en.length)for(let i=0;i<16;i++){const t=ang+rnd(-arc,arc),rr=rnd(10,R),k=en[i%en.length];S.parts.push({k:'e',x:pl.x+Math.cos(t)*rr,y:pl.y+Math.sin(t)*rr,z:rnd(8,18),vx:0,vy:0,vz:rnd(4,12),c:Math.random()<.6?ENC[k].col:ENC[k].col2,life:rnd(.2,.45)})}}
  if(crit){pl.riposte=0;launchWave(a,ang,waveDmg);const ec=sk('echo');if(ec>=1){launchWave(a,ang-.28,waveDmg*(ec>=3?1.2:1),1);if(ec>=2)launchWave(a,ang+.28,waveDmg*(ec>=3?1.2:1),1)}if(hits)ftInfo((EN?'Critical hit!':'Cios krytyczny!'))}
  else if(hits&&a.kind==='l'&&sk('zryw')){S.hitN=(S.hitN||0)+1;if(S.hitN>=ZRYW_N[sk('zryw')]){S.hitN=0;launchWave(a,ang,waveDmg)}}
  if(hits){S.hitstop=a.kind==='h'?.09:crit?.12:.045;shake(a.kind==='h'?.25:.1,.1);if(crit)play('katana',0)}
  if(S.twin)twinPush(a,crit,twinBase)}
// fala cięcia: nagroda za parowanie, leci przed siebie i przebija wszystkich wrogów na swojej drodze (raz każdego)
function launchWave(a,ang,base,quiet){const W0=a.kind==='h'?SL.wave.h:SL.wave.l,zs=sk('zasieg'),W=Object.assign({},W0,{life:W0.life*(1+.18*zs),r:W0.r*(1+.18*zs),size:W0.size*(1+.1*zs),dmg:W0.dmg*(1+FALA_B[sk('fala')])*(brOn('wav')?1.3:1)}),c=Math.cos(ang),s=Math.sin(ang);{const wk=brOn('wav')?'rush':sk('zasieg')>=1?'wave2':'wave1',wf=skFrames(wk);if(wf)addVfx(wf,W.life,pl.x+c*14,pl.y+s*14,.6,W.size*1.05,'bill',-screenAng(c,s));else addVfx(A.fx.slash,W.life,pl.x+c*14,pl.y+s*14,.6,W.size,'bill',-screenAng(c,s))}
  (S.waves=S.waves||[]).push({f:S.vfx[S.vfx.length-1],x:pl.x+c*14,y:pl.y+s*14,vx:c*W.speed,vy:s*W.speed,t:W.life,r:W.r,dmg:base*W.dmg,hit:new Set()});play('katana',0);shake(.12,.1);padRumble(.4,.7,160);
  if(!quiet)ftInfo((EN?'Slash wave':'Fala cięcia'))}
function waveTick(dt){if(!S.waves||!S.waves.length)return;for(let i=S.waves.length-1;i>=0;i--){const w=S.waves[i];w.t-=dt;w.x+=w.vx*dt;w.y+=w.vy*dt;if(w.f){w.f.x=w.x;w.f.y=w.y}
    if(w.t<=0||boxSolid(w.x,w.y,2,2)){S.waves.splice(i,1);continue}
    for(const e of [...S.enemies]){if(e.dead||e.rise>0||w.hit.has(e))continue;if(Math.hypot(e.x-w.x,e.y-w.y)>w.r+e.r)continue;w.hit.add(e);const d=Math.hypot(w.vx,w.vy)||1;
      if(damageEnemy(e,w.dmg,w.vx/d,w.vy/d,.9)){if(brOn('wav'))applyEnchants(e,{kind:'l'},true);if(!e.dead){const big=BIG.has(e.type)||e.type==='collector';if(big){breakPoise(e,25)}else{slashStagger(e,SL.wave.stun)}}}
      for(let k=0;k<6;k++)S.parts.push({k:'e',x:e.x,y:e.y,z:rnd(6,18),vx:rnd(-40,40),vy:rnd(-20,20),vz:rnd(4,12),c:'#ffe9a0',life:rnd(.2,.4)})}}}

function manaTick(dt){S.manaHitCd=Math.max(0,(S.manaHitCd||0)-dt);S.manaFlash=Math.max(0,(S.manaFlash||0)-dt);if(!pl.manaMax)return;if(pl.manaDelay>0)pl.manaDelay=Math.max(0,pl.manaDelay-dt);else pl.mana=Math.min(pl.manaMax,pl.mana+SL.mana.regen*dt)}
function slashUpdate(dt){
  manaTick(dt);swordTick(dt);if(pl.atk?.kind==='whirl'){whirlTick(dt);return}if(pl.atk?.kind==='shot'||pl.atk?.kind==='skill'){if(!S.shotWind&&!S.activeWind&&!S.cascade){pl.atk.t-=dt;if(pl.atk.t<=0)pl.atk=null}return}
  if(pl.staDelay>0)pl.staDelay-=dt;else if(!pl.atk&&pl.roll<=0)pl.sta=Math.min(pl.staMax,pl.sta+SL.regen*(S.regenMul||1)*(S.heri>0?1.15:1)*(pl.block?SL.blockRegen:1)*dt);
  if(pl.parryHealCd>0)pl.parryHealCd-=dt;if(pl.parryCd>0)pl.parryCd-=dt;if(pl.riposte>0)pl.riposte-=dt;if(pl.dance>0)pl.dance-=dt;waveTick(dt);
  if(pl.broken>0){pl.broken-=dt;pl.block=false;pl.atk=null;return}
  if(pl.dead||pl.roll>0){pl.block=false;pl.atkHeld=false;pl.charging=false;return}
  // block (hold), parry = block raised just before the hit lands
  const wantBlock=keys.l||mouseR||tBlock||PAD.blk;
  if(wantBlock&&!pl.block&&!pl.atk){pl.block=true;S.actions.block++;pl.blockT=pl.parryCd>0?parryWin()+.1:0;pl.parryCd=.35}else if(!wantBlock)pl.block=false;
  if(pl.block){pl.blockT+=dt;const a=aimDir();if(a){pl.fx=a[0];pl.fy=a[1]}
    if(Math.random()<dt*20){const sp=(Math.random()-.5)*1.6,c=Math.cos(Math.atan2(pl.fy,pl.fx)+sp),s2=Math.sin(Math.atan2(pl.fy,pl.fx)+sp);S.parts.push({k:'i',x:pl.x+c*12,y:pl.y+s2*8,z:rnd(4,16),vx:0,vy:0,vz:rnd(2,6),c:pl.blockT<parryWin()?'#ffe9a0':'#9fb4d0',life:.25})}}
  // attack button: a tap is a light blow (chains into a combo of three), holding it charges a heavy blow
  if(heavyPress){heavyPress=false;if(!pl.atk&&!pl.block&&!(pl.broken>0))startAttack('h')}
  const held=keys.j||mouseL||tAtk||PAD.atk,cc=true;
  if(held&&!pl.atkHeld){pl.atkHeld=true;pl.charge=0}
  if(pl.atkHeld){if(held){if(!pl.atk&&!pl.block)pl.charge+=dt;pl.charging=cc&&pl.charge>.18&&!pl.atk&&!pl.block;
      if(pl.charging&&Math.random()<dt*30)S.parts.push({k:'e',x:pl.x+rnd(-8,8),y:pl.y+rnd(-3,3),z:rnd(6,20),vx:0,vy:0,vz:rnd(6,14),c:pl.charge>=SL.heavy.charge?'#ffb347':'#d8cfb8',life:.3});
      if(cc&&pl.charge>=SL.heavy.charge&&!pl.atk&&!pl.block){pl.atkHeld=false;pl.charging=false;startAttack('h',0,true)}}
    else{pl.atkHeld=false;pl.charging=false;if(pl.atk){if(pl.atk.kind==='l'&&pl.atk.stage!=='wind')pl.queue=true}else if(!pl.block)startAttack('l',pl.comboT>0?pl.nextCombo:0)}}
  if(SETT.oneHand&&!pl.atk&&!pl.block&&!pl.charging&&nearest(pl.x,pl.y,SL.light.range+8)&&pl.sta>=attackCost('l'))startAttack('l',pl.comboT>0?pl.nextCombo:0);
  if(pl.comboT>0)pl.comboT-=dt;
  const a=pl.atk;if(!a)return;const P=a.kind==='h'?SL.heavy:SL.light;a.t-=dt;
  if(a.stage==='wind'&&a.t<=0){a.visualRiposte=pl.riposte>0;a.stage='act';a.t=P.act;attackHit(a)}
  else if(a.stage==='act'){moveBox(pl,a.dx*(a.kind==='h'?P.lunge:P.lunge[a.combo])*dt,a.dy*(a.kind==='h'?P.lunge:P.lunge[a.combo])*dt,4,3);if(a.t<=0){a.stage='rec';a.t=P.rec*(a.kind==='l'?1-.06*sk('ostrze'):1)}}
  else if(a.stage==='rec'&&a.t<=0){pl.atk=null;
    if(a.kind==='l'&&pl.queue&&a.combo<2&&pl.sta>0)startAttack('l',a.combo+1);else{pl.comboT=a.kind==='l'&&a.combo<2?.35:0;pl.nextCombo=a.combo+1}}}
// ---- slasher skills: four blade enchantments (only one can be taken) and the Force Push sign ----
// the enchantment has 10 levels: every hit has a chance to inflict its status (15% at level 1, +5% per level, heavy blows x1.5,
// a riposte always); each inflicted status adds a mark, 3 marks finish a normal enemy (bosses: 5 marks take a slice of health);
// every second level also adds +7% weapon damage (+35% at level 10)
const SLASH_SK=['venom','fireblade','iceblade','bloodblade','aard'],ENCH=['venom','fireblade','iceblade','bloodblade'],MAX_ENCH=2,ENCH_MAX=10;
const ENC={venom:{col:'#8ac04a',col2:'#4a6a22',name:(EN?'Poison':'Zatrucie')},fireblade:{col:'#ff6a1a',col2:'#ffb347',name:(EN?'Incineration':'Spopielenie')},iceblade:{col:'#7fd0ff',col2:'#d8f0ff',name:(EN?'Freeze':'Zamrożenie')},bloodblade:{col:'#c4202a',col2:'#560a0d',name:(EN?'Bleeding':'Wykrwawienie')}};
const encChance=L=>.15+.05*(L-1),encDmg=L=>1+.07*Math.floor(L/2),encMarks=e=>BIG.has(e.type)||e.type==='collector'||e.type==='jerzak'?5:3;
const encLevel=()=>{if(S.mainEnchant&&S.sk[S.mainEnchant])return[S.mainEnchant,S.sk[S.mainEnchant]];for(const k of ENCH)if(S.sk[k])return[k,S.sk[k]];return[null,0]};
function encLvText(k,L){const st={venom:(EN?`poison ${2+L} dmg/s for 4 s`:`trucizna ${2+L} obr/s przez 4 s`),fireblade:(EN?`burning ${(3+1.5*L).toFixed(1).replace('.0','')} dmg/s for 3 s`:`podpalenie ${(3+1.5*L).toFixed(1).replace('.0','').replace('.',',')} obr/s przez 3 s`),iceblade:(EN?`slow ${Math.round((1-Math.max(.3,.6-.03*L))*100)}% for 2.5 s`:`spowolnienie ${Math.round((1-Math.max(.3,.6-.03*L))*100)}% na 2,5 s`),bloodblade:(EN?`bleeding ${String((2+L)*2.5)} dmg/s for 3 s`:`krwawienie ${String((2+L)*2.5).replace('.',',')} obr/s przez 3 s`)}[k];
  const fin={venom:(EN?'poison spreads to nearby enemies':'trucizna przechodzi na sąsiadów'),fireblade:(EN?'the explosion hurts those nearby':'wybuch rani pobliskich'),iceblade:(EN?'shards slow nearby enemies':'odłamki spowalniają sąsiadów'),bloodblade:(EN?`+${4+L} health for you`:`+${4+L} życia dla ciebie`)}[k];
  return (EN?`${Math.round(encChance(L)*100)}% chance to inflict: ${st}. 3 statuses kill a normal enemy (${fin}).`:`${Math.round(encChance(L)*100)}% szansy na status: ${st}. 3 statusy zabijają zwykłego wroga (${fin}).`)+(L>=2?(EN?` Sword +${Math.floor(L/2)*7}% damage`:` Miecz +${Math.floor(L/2)*7}% obrażeń`)+(L%2===0?(EN?' (new threshold).':' (nowy próg).'):'.'):'')}
for(const k of ['venom','fireblade','iceblade','bloodblade'])SK[k].lv=[...Array(10).keys()].map(i=>encLvText(k,i+1));
// Slasher: intentional sword actions, a main element and one compatible support.
const ELEMENT_NAME={fire:(EN?'Fire':'Ogień'),ice:(EN?'Ice':'Lód'),venom:(EN?'Poison':'Trucizna'),blood:(EN?'Blood':'Krew'),earth:(EN?'Earth':'Ziemia')};
const ELEMENT_OF={fireblade:'fire',iceblade:'ice',venom:'venom',bloodblade:'blood'};// tylko zaklęcia ostrza; umiejętności aktywne nie liczą się do żywiołów
const NEW_SWORD_SK=['frostshot','embershot','cascade','breach','retaliation','earthcut','stoneguard','whirl','drugieja'];
// distances are shown as words, not units: up to 40 short, 80 medium, 120 long, above very long
const RANGE_W=v=>v<=40?(EN?'short':'krótki'):v<=80?(EN?'medium':'średni'):v<=120?(EN?'long':'długi'):(EN?'very long':'bardzo długi'),AREA_W=v=>v<=80?(EN?'medium':'średni'):v<=120?(EN?'large':'duży'):(EN?'very large':'bardzo duży');
const WHIRL={cost:35,damage:[8,10,12],hits:[4,5,6],radius:[32,38,44],cooldown:[10,9,8],duration:1.2,recovery:.25,speed:.6,inv:.25};
Object.assign(SK,{
 whirl:{name:(EN?'Blade Whirlwind':'Wir Ostrza'),kind:(EN?'Active technique':'Technika aktywna'),ic:'whirl',max:3,lv:[1,2,3].map(L=>(EN?`35 stamina, cooldown ${WHIRL.cooldown[L-1]} s. Spin for 1.2 s: ${WHIRL.hits[L-1]} × ${WHIRL.damage[L-1]} dmg around you, ${['medium','medium+','large'][L-1]} area. Movement 60%, no defence; 0.25 s of invulnerability at the start. Recovery 0.25 s. No stun or knockback, bosses included. Blade statuses at most once per target, no elemental execution or healing.`:`35 staminy, odnowienie ${WHIRL.cooldown[L-1]} s. Obrót 1,2 s: ${WHIRL.hits[L-1]} × ${WHIRL.damage[L-1]} obr. wokół ciebie, obszar ${['średni','średni+','duży'][L-1]}. Ruch 60%, bez obrony; nietykalność 0,25 s na starcie. Powrót 0,25 s. Bez ogłuszenia i odrzutu, także na bossa. Statusy ostrza najwyżej raz na cel, bez egzekucji żywiołu i leczenia.`))},
 frostshot:{name:(EN?'Frost Shard':'Odłamek szronu'),kind:(EN?'Support · Ice':'Wsparcie · Lód'),ic:'frostshot',max:3,lv:[1,2,3].map(L=>(EN?`18 mana, cooldown 8 s. Large shard: ${16+2*L} dmg, ${[3,4,6][L-1]} targets, ${RANGE_W(120+10*L)} range. Slow ${25+5*L}% for 1.5 s (bosses 10%).`:`18 many, odnowienie 8 s. Duży odłamek: ${16+2*L} obr., ${[3,4,6][L-1]} ${L<3?'cele':'celów'}, zasięg ${RANGE_W(120+10*L)}. Spowolnienie ${25+5*L}% na 1,5 s (na bossa 10%).`))},
 embershot:{name:(EN?'Fireball':'Kula ognia'),kind:(EN?'Support · Fire':'Wsparcie · Ogień'),ic:'embershot',max:3,lv:[1,2,3].map(L=>(EN?`24 mana, cooldown 9 s. A large, slow orb: explodes on the first target hit, which takes ${SL.shot.fireDmg[L-1]} dmg (100%); nearby enemies take 50%. Sets the target on fire for ${String(1+.5*L)} s.`:`24 many, odnowienie 9 s. Duża, wolna kula: wybucha na pierwszym trafionym celu, który dostaje ${SL.shot.fireDmg[L-1]} obr. (100%), pobliscy wrogowie 50%. Podpala trafiony cel na ${String(1+.5*L).replace('.',',')} s.`))},
 cascade:{name:(EN?'Slash Cascade':'Kaskada cięć'),kind:(EN?'Active technique':'Technika aktywna'),ic:'sword',max:3,lv:[1,2,3].map(L=>(EN?`25 mana, cooldown ${[7,6,5][L-1]} s. A series of 3 very fast slashes in front of you in about 0.6 s: ${SL.cascade.dmg[L-1]} dmg each, ${3*SL.cascade.dmg[L-1]} in total. No blade statuses; no invulnerability.`:`25 many, odnowienie ${[7,6,5][L-1]} s. Seria 3 bardzo szybkich cięć przed sobą w ok. 0,6 s: ${SL.cascade.dmg[L-1]} obr. każde, razem ${3*SL.cascade.dmg[L-1]}. Bez statusów ostrza; bez nietykalności.`))},
 breach:{name:(EN?'Breaker':'Przełamanie'),kind:(EN?'Sword technique':'Technika miecza'),ic:'breach',max:3,lv:[1,2,3].map(L=>(EN?`Charged heavy attack (hold light attack): +${20+10*L} boss poise break. Normal enemy: knockback and stun for ${(.6+.15*L).toFixed(2)} s.`:`Naładowany ciężki cios (przytrzymaj lekki atak): +${20+10*L} przełamania postawy bossa. Zwykły wróg: odrzut i ogłuszenie ${(.6+.15*L).toFixed(2).replace('.',',')} s.`))},
 retaliation:{name:(EN?'Iron Retaliation':'Żelazny odwet'),kind:(EN?'Sword technique':'Technika miecza'),ic:'retaliation',max:3,lv:[1,2,3].map(L=>(EN?`After a successful parry, your next heavy attack (within 2 s): +${10*L}% damage. Lost on a miss.`:`Po udanym parowaniu następny ciężki cios (do 2 s): +${10*L}% obrażeń. Przepada przy pudle.`))},
 earthcut:{name:(EN?'Earth Split':'Rozcięcie ziemi'),kind:(EN?'Support · Earth':'Wsparcie · Ziemia'),ic:'earthcut',max:3,lv:[1,2,3].map(L=>(EN?`24 mana, cooldown 6 s. A line of spikes, ${RANGE_W(48+8*L)} range: ${8+4*L} dmg to each target.`:`24 many, odnowienie 6 s. Linia kolców, zasięg ${RANGE_W(48+8*L)}: ${8+4*L} obr. każdemu celowi.`))},
 drugieja:{name:(EN?'Second Self':'Drugie Ja'),kind:(EN?'Support · Shadow':'Wsparcie · Cień'),ic:'drugieja',max:3,lv:[1,2,3].map(L=>(EN?`30 mana, cooldown ${[30,28,25][L-1]} s. A shadow copy of the hero for ${[6,7,8][L-1]} s repeats your light and heavy blows after ${[.8,.65,.5][L-1]} s, for ${[50,55,60][L-1]}% damage. A riposte echoes at ×1.5. No blade effects, no healing.`:`30 many, odnowienie ${[30,28,25][L-1]} s. Cienista kopia bohatera na ${[6,7,8][L-1]} s powtarza twoje lekkie i ciężkie ciosy po ${String([.8,.65,.5][L-1]).replace('.',',')} s, za ${[50,55,60][L-1]}% obrażeń. Riposta odbija się jako ×1,5. Bez efektów ostrza i bez leczenia.`))},
 stoneguard:{name:(EN?'Stone Defender':'Kamienny obrońca'),kind:(EN?'Support · Earth':'Wsparcie · Ziemia'),ic:'stoneguard',max:3,lv:[1,2,3].map(L=>(EN?`34 mana, cooldown 30 s. A golem for 10 s with ${[80,100,120][L-1]}% of your health. Draws normal enemies (${AREA_W([96,112,128][L-1])} area), bosses for at most 5 s. It does not attack or heal.`:`34 many, odnowienie 30 s. Golem na 10 s, życie ${[80,100,120][L-1]}% twojego. Ściąga zwykłych wrogów (obszar ${AREA_W([96,112,128][L-1])}), bossów najwyżej na 5 s. Nie atakuje i nie leczy.`))}
});
SLASH_SK.push(...NEW_SWORD_SK);
function chosenElements(){return [...new Set(Object.keys(ELEMENT_OF).filter(k=>sk(k)).map(k=>ELEMENT_OF[k]))]}
function elementConflict(a,b){return a==='fire'&&b==='ice'||a==='ice'&&b==='fire'}
function canLearnSlasher(k){if(!SK[k])return false;const have=sk(k),max=ENCH.includes(k)&&S.mainEnchant&&S.mainEnchant!==k?3:SK[k].max||5;if(have>=max)return false;if(have)return true;const el=ELEMENT_OF[k];if(!el)return true;const own=chosenElements();if(own.some(v=>elementConflict(v,el)))return false;if(!own.includes(el)&&own.length>=2)return false;if(ENCH.includes(k)&&ENCH.filter(v=>sk(v)).length>=2)return false;return true}
function learnElement(k){if(!ELEMENT_OF[k])return;if(ENCH.includes(k)&&!S.mainEnchant)S.mainEnchant=k;const main=S.mainEnchant?ELEMENT_OF[S.mainEnchant]:null;const own=chosenElements();S.elementMain=main;S.elementSupport=own.find(e=>e!==main)||null}
function elementalSummary(){const main=S.mainEnchant?SK[S.mainEnchant].name:(EN?'none chosen':'nie wybrano');const own=chosenElements(),support=own.filter(e=>e!==S.elementMain).map(e=>ELEMENT_NAME[e]).join(', ')||'wolne';return (EN?`Blade: ${main} · support: ${support}. Fire excludes ice (blade spells only).`:`Ostrze: ${main} · wsparcie: ${support}. Ogień wyklucza lód (dotyczy zaklęć ostrza).`)}
function supportEnchant(e,a,crit){const k=ENCH.find(k=>sk(k)&&k!==encLevel()[0]);if(!k||e.dead)return;const L=Math.min(3,sk(k));if(!crit&&Math.random()>=encChance(L)*.5*(a.kind==='h'?1.5:1))return;
 if(k==='venom'){e.pois=Math.max(e.pois||0,2);e.poisD=Math.max(e.poisD||0,(2+L)*.35)}
 if(k==='fireblade'){e.burn=Math.max(e.burn||0,1.5);e.burnD=Math.max(e.burnD||0,(3+1.5*L)*.35)}
 if(k==='iceblade'){e.chill=Math.max(e.chill||0,1);e.chillMul=Math.min(e.chillMul||1,BIG.has(e.type)||e.type==='collector'?.9:.85)}
 if(k==='bloodblade'){e.bleed=Math.max(e.bleed||0,1.5);e.bleedDmg=Math.max(e.bleedDmg||0,(2+L)*.35)}
 swordSparks(e.x,e.y,ENC[k].col,5);
}
function swordSparks(x,y,col,n=8){for(let i=0;i<n;i++)S.parts.push({k:'e',x:x+rnd(-3,3),y:y+rnd(-2,2),z:rnd(8,16),vx:rnd(-12,12),vy:rnd(-8,8),vz:rnd(5,20),c:col,life:.2+rnd(0,.15)})}
// Three equipped active skills. Cooldowns belong to skills, never to slots.
const ACTIVE_SLASHER=['aard','earthcut','stoneguard','frostshot','embershot','cascade','whirl','drugieja'];
const ACTIVE_CFG={whirl:{cost:WHIRL.cost,resource:'stamina',cd:'whirlCd',wait:L=>WHIRL.cooldown[Math.min(3,L)-1]},aard:{cost:24,cd:'aardCd',wait:L=>Math.max(4.5,9-L),wind:.18},earthcut:{cost:24,cd:'earthCd',wait:()=>6,wind:.25},stoneguard:{cost:34,cd:'guardCd',wait:()=>30,wind:.3},drugieja:{cost:30,cd:'twinCd',wait:L=>[30,28,25][Math.min(3,Math.max(1,L))-1],wind:.25},frostshot:{cost:18,cd:'shotCd',wait:()=>8},embershot:{cost:24,cd:'shotCd',wait:()=>9},cascade:{cost:25,cd:'cascadeCd',wait:L=>[7,6,5][Math.min(3,Math.max(1,L))-1]}};
// Existing spells keep their mana payment. Active sword techniques may explicitly select stamina.
function canPayMana(k){return pl.mana+1e-8>=ACTIVE_CFG[k].cost}
function payMana(k){pl.mana=Math.max(0,pl.mana-ACTIVE_CFG[k].cost);pl.manaDelay=SL.mana.delay}
function activeResourceName(k){return ACTIVE_CFG[k].resource==='stamina'?(EN?'stamina':'staminy'):(EN?'mana':'many')}
function canPayActive(k){return ACTIVE_CFG[k].resource==='stamina'?pl.sta+1e-8>=ACTIVE_CFG[k].cost:canPayMana(k)}
function payActive(k){if(ACTIVE_CFG[k].resource==='stamina'){pl.sta=Math.max(0,pl.sta-ACTIVE_CFG[k].cost);pl.staDelay=SL.delay}else payMana(k)}
function activeResourceFlash(k){if(ACTIVE_CFG[k].resource==='stamina'){S.stamFlash=.45;play('empty',.2)}else manaFlash()}
function manaFlash(t=.3){S.manaFlash=t;play('empty',.2)}
function gainMana(v){if(v>0&&pl.manaMax)pl.mana=Math.min(pl.manaMax,pl.mana+v)}
function autoEquipActive(k){if(!ACTIVE_SLASHER.includes(k)||S.activeSlots.includes(k))return;const i=S.activeSlots.indexOf(null);if(i>=0)S.activeSlots[i]=k;renderActiveHud()}
function loadoutSafe(){return !!(S&&S.paused&&!pl.dead&&!(S.combatLock>0)&&!pl.atk&&pl.roll<=0&&!S.activeWind&&!S.shotWind&&!S.swordShots.length&&!S.swordGuardian&&!S.enemies.some(e=>!e.dead&&e.rise<=0&&Math.hypot(e.x-pl.x,e.y-pl.y)<140+e.r))}
function equipActive(i,k){if(!loadoutSafe()||!Number.isInteger(i)||i<0||i>3||k!==null&&(!ACTIVE_SLASHER.includes(k)||!sk(k)))return false;const other=k?S.activeSlots.indexOf(k):-1,old=S.activeSlots[i];S.activeSlots[i]=k;if(other>=0&&other!==i)S.activeSlots[other]=old;renderLoadout();renderActiveHud();return true}
function activateSlot(i){if(!swordCanAct())return false;const k=S.activeSlots[i],c=ACTIVE_CFG[k],L=sk(k);if(!c||!L)return false;if((S[c.cd]||0)>0){play('empty',.2);return false}if(!canPayActive(k)){activeResourceFlash(k);return false}S.combatLock=4;
 if(k==='whirl'){beginWhirl(L);return true}
 if(['frostshot','embershot'].includes(k)){requestSwordShot(k);return true}
 if(k==='cascade'){beginCascade(L);return true}
 const d=aimDir()||[pl.fx,pl.fy];pl.fx=d[0];pl.fy=d[1];payActive(k);S[c.cd]=c.wait(L);S.activeWind={k,x:d[0],y:d[1],t:c.wind};pl.atk={kind:'skill',stage:'wind',t:c.wind};pl.atkHeld=false;pl.charging=false;S.actions.skill=(S.actions.skill||0)+1;play('swing',0);return true}
// Siła i Inteligencja wzmacniają wszystkie umiejętności aktywne (Siła ×1,1 za wybór, Inteligencja ×1,02 za wybór).
const skillMul=()=>(S.str||1)*(S.int||1);
// Kaskada cięć: seria 3 szybkich cięć przed bohaterem. Płaci manę, nie staminę; bez statusów ostrza.
function beginCascade(L){const level=Math.min(3,Math.max(1,L)),d=aimDir()||autoAim()||[pl.fx,pl.fy],C=SL.cascade;pl.fx=d[0];pl.fy=d[1];payActive('cascade');S.cascadeCd=ACTIVE_CFG.cascade.wait(level);S.actions.skill=(S.actions.skill||0)+1;
 pl.block=false;pl.blockT=0;pl.parryT=0;pl.atkHeld=false;pl.charging=false;pl.queue=false;pl.comboT=0;
 S.cascade={L:level,dx:d[0],dy:d[1],t:0,n:0};pl.atk={kind:'skill',stage:'cascade',t:C.start+C.gap*(C.cuts-1)+C.rec};}
function cascadeCut(c){const C=SL.cascade,ang=Math.atan2(c.dy,c.dx),dmg=C.dmg[c.L-1]*(1+.07*(S.lvl-1))*skillMul(),oldM=ftMelee,oldH=ftHeavy,oldC=ftCrit;
 const side=c.n%2?-1:1,a2=ang+side*.12;moveBox(pl,c.dx*C.lunge,c.dy*C.lunge,4,3);
 ftMelee=true;ftHeavy=false;ftCrit=false;let hits=0;try{for(const e of [...S.enemies]){if(e.dead||e.rise>0)continue;const dx=e.x-pl.x,dy=e.y-pl.y,d=Math.hypot(dx,dy);if(d>C.range+e.r||!sightSword(pl.x,pl.y,e.x,e.y))continue;let df=Math.atan2(dy,dx)-ang;while(df>Math.PI)df-=2*Math.PI;while(df<-Math.PI)df+=2*Math.PI;if(d>10&&Math.abs(df)>C.arc)continue;
  if(damageEnemy(e,dmg,dx/(d||1),dy/(d||1),.4))hits++}}finally{ftMelee=oldM;ftHeavy=oldH;ftCrit=oldC}
 const cs=Math.cos(a2),sn=Math.sin(a2);if(skFrames('casc')){if(c.n===0)skAdd('casc',.62,pl.x+cs*C.range*.5,pl.y+sn*C.range*.5,.6,2.0,'bill',-screenAng(cs,sn))}else addVfx(A.fx.slash,.18,pl.x+cs*C.range*.45,pl.y+sn*C.range*.45,.6,swordVisualSize('l')*1.1,'bill',-screenAng(cs,sn));
 pl.swingT=pl.swingDur=.2;if(Math.abs(c.dx)>Math.abs(c.dy)){pl.swingDir=2;pl.swingS=c.dx>0?1:-1}else{pl.swingDir=c.dy>0?0:1;pl.swingS=side}
 play('swing',0);shake(.06,.06);if(hits){S.hitstop=Math.max(S.hitstop||0,.025);if(!(S.manaHitCd>0)&&SL.mana.onHit>0){gainMana(SL.mana.onHit);S.manaHitCd=SL.mana.hitGap}}}
function cascadeTick(dt){const c=S.cascade;if(!c)return;if(pl.dead||pl.roll>0||pl.broken>0){S.cascade=null;if(pl.atk?.kind==='skill')pl.atk=null;return}
 pl.staDelay=Math.max(0,pl.staDelay-dt);c.t+=dt;const C=SL.cascade;while(c.n<C.cuts&&c.t+1e-8>=C.start+C.gap*c.n){cascadeCut(c);c.n++}
 if(pl.atk?.kind==='skill'&&pl.atk.stage==='cascade'){pl.atk.t=Math.max(.01,C.start+C.gap*(C.cuts-1)+C.rec-c.t)}
 if(c.t+1e-8>=C.start+C.gap*(C.cuts-1)+C.rec){S.cascade=null;pl.atk=null}}
// Whirl owns one existing slash visual and one bounded set for this activation only.
function beginWhirl(L){const level=Math.min(3,Math.max(1,L)),angle=Math.atan2(pl.fy,pl.fx);payActive('whirl');S.whirlCd=ACTIVE_CFG.whirl.wait(level);S.actions.skill=(S.actions.skill||0)+1;
 pl.block=false;pl.blockT=0;pl.parryT=0;pl.atkHeld=false;pl.charging=false;pl.queue=false;pl.comboT=0;pl.inv=Math.max(pl.inv,WHIRL.inv);
 const visual=beginWhirlVisual(level,angle);
 pl.atk={kind:'whirl',stage:'act',L:level,elapsed:0,t:WHIRL.duration,angle,baseAngle:angle,pulse:0,statuses:new Set(),visual,statusOnly:true};play('swing',0);}
function endWhirl(){const a=pl?.atk;if(a?.kind!=='whirl')return;if(a.visual){releaseWhirlVisual(a.visual,false);a.visual=null}a.statuses.clear();pl.atk=null;pl.swingT=0;pl.queue=false;pl.atkHeld=false;pl.charging=false;}
function whirlHit(a){const R=WHIRL.radius[a.L-1],dmg=WHIRL.damage[a.L-1]*(1+.07*(S.lvl-1))*(S.str||1)*(S.int||1)*might()*encDmg(encLevel()[1]),oldM=ftMelee,oldH=ftHeavy,oldC=ftCrit;
 ftMelee=true;ftHeavy=false;ftCrit=false;try{for(const e of S.enemies){if(e.dead||e.rise>0||Math.hypot(e.x-pl.x,e.y-pl.y)>R+e.r||!sightSword(pl.x,pl.y,e.x,e.y))continue;
 const d=Math.hypot(e.x-pl.x,e.y-pl.y)||1;if(!damageEnemy(e,dmg,(e.x-pl.x)/d,(e.y-pl.y)/d,0))continue;
 if(!a.statuses.has(e)){a.statuses.add(e);supportEnchant(e,a,false);applyEnchants(e,a,false);}}}finally{ftMelee=oldM;ftHeavy=oldH;ftCrit=oldC}}
function whirlTick(dt){const a=pl.atk;if(pl.dead||pl.broken>0){endWhirl();return}pl.block=false;pl.parryT=0;pl.atkHeld=false;pl.charging=false;pl.queue=false;heavyPress=false;
 pl.staDelay=Math.max(0,pl.staDelay-dt);for(const k of ['parryHealCd','parryCd','riposte','dance'])if(pl[k]>0)pl[k]=Math.max(0,pl[k]-dt);waveTick(dt);
 if(a.stage==='rec'){a.t-=dt;if(a.t<=1e-8)endWhirl();return}
 a.elapsed+=dt;a.t=Math.max(0,WHIRL.duration-a.elapsed);a.angle=a.baseAngle+a.elapsed/WHIRL.duration*Math.PI*4;
 const dx=Math.cos(a.angle),dy=Math.sin(a.angle);pl.swingDir=Math.abs(dx)>Math.abs(dy)?2:dy>0?0:1;pl.swingS=dx>=0?1:-1;pl.swingT=.15;pl.swingDur=.26;
 const n=WHIRL.hits[a.L-1],step=WHIRL.duration/n;while(a.pulse<n&&a.elapsed+1e-8>=(a.pulse+.5)*step){whirlHit(a);a.pulse++;}
 // The visual pool follows the player in syncWhirlVisual, after enemy warnings update.
 if(a.elapsed+1e-8>=WHIRL.duration){a.stage='rec';a.t=Math.max(0,WHIRL.recovery-Math.max(0,a.elapsed-WHIRL.duration));a.statuses.clear();if(a.visual){releaseWhirlVisual(a.visual,true);a.visual=null}pl.swingT=0;if(a.t<=1e-8)endWhirl();}}
// Three reusable visual handles: ring, startup dust, ending debris. Never allocate per frame/cast.
const whirlVisualPool=[];
function initWhirlVisuals(){if(whirlVisualPool.length)return;const texture=texFrom(bloodFix(IMGS.whirl_fx,320,80));for(let i=0;i<3;i++){const mesh=new THREE.Mesh(new THREE.PlaneBufferGeometry(1,.625),new THREE.MeshBasicMaterial({map:texture,transparent:true,alphaTest:.06,depthWrite:false,depthTest:true,side:THREE.DoubleSide,fog:false}));mesh.renderOrder=-3;mesh.frustumCulled=false;mesh.visible=false;scene.add(mesh);whirlVisualPool.push({mesh,active:false,kind:'steel',elapsed:0,x:0,y:0,radius:32,frame:-1,level:1})}}
function setWhirlVisualFrame(f,frame){const key=f.kind+':'+frame;if(f.frame===key)return;f.frame=key;const a=WHIRL_FX.effects[f.kind].frames[frame],uv=f.mesh.geometry.attributes.uv,u0=(a.x+.5)/WHIRL_FX.width,u1=(a.x+a.width-.5)/WHIRL_FX.width,v0=1-(a.y+a.height-.5)/WHIRL_FX.height,v1=1-(a.y+.5)/WHIRL_FX.height;uv.setXY(0,u0,v1);uv.setXY(1,u1,v1);uv.setXY(2,u0,v0);uv.setXY(3,u1,v0);uv.needsUpdate=true}
let skWhirlMesh=null;function skWhirl(){if(!skWhirlMesh){skWhirlMesh=new THREE.Mesh(new THREE.PlaneBufferGeometry(1,1),new THREE.MeshBasicMaterial({transparent:true,alphaTest:.04,depthWrite:false,side:THREE.DoubleSide,fog:false}));skWhirlMesh.renderOrder=-3;skWhirlMesh.frustumCulled=false;skWhirlMesh.visible=false;scene.add(skWhirlMesh)}return skWhirlMesh}
function clearWhirlVisuals(){if(skWhirlMesh)skWhirlMesh.visible=false;for(const f of whirlVisualPool){f.active=false;f.mesh.visible=false}}
function beginWhirlVisual(level,angle){clearWhirlVisuals();const f=whirlVisualPool[0],dust=whirlVisualPool[1];for(let i=0;i<2;i++){const z=whirlVisualPool[i];z.active=true;z.elapsed=0;z.x=pl.x;z.y=pl.y;z.radius=WHIRL.radius[level-1];z.level=level;z.frame=-1;z.mesh.visible=false}f.kind=COMBAT_TRAIL[encLevel()[0]]||'steel';dust.kind='start';return f}
function releaseWhirlVisual(f,finished){f.active=false;f.mesh.visible=false;if(skWhirlMesh)skWhirlMesh.visible=false;whirlVisualPool[1].active=false;whirlVisualPool[1].mesh.visible=false;if(finished){const end=whirlVisualPool[2];end.active=true;end.elapsed=0;end.kind='end';end.frame=-1;end.x=pl.x;end.y=pl.y;end.radius=f.radius;end.mesh.visible=false}}
function syncWhirlVisual(dt=0){const a=pl?.atk;for(let i=0;i<whirlVisualPool.length;i++){const f=whirlVisualPool[i];if(!f.active)continue;
 if(!S||S.phase!=='play'||pl.dead){f.active=false;f.mesh.visible=false;continue}
 const ring=i===0;if(ring){if(a?.kind!=='whirl'||a.stage!=='act'){f.active=false;f.mesh.visible=false;if(skWhirlMesh)skWhirlMesh.visible=false;continue}f.elapsed=a.elapsed;f.x=pl.x;f.y=pl.y;f.kind=COMBAT_TRAIL[encLevel()[0]]||'steel'}else{f.elapsed+=dt;if(f.elapsed>=.22){f.active=false;f.mesh.visible=false;continue}}
 const low=SETT.quality==='low',raw=ring?Math.floor(f.elapsed/(WHIRL.duration/8))%4:Math.min(3,Math.floor(f.elapsed/.055)),frame=low?raw<2?0:2:raw;
 setWhirlVisualFrame(f,frame);let warning=false;for(const e of S.enemies)if(!e.dead&&attackCue(e)&&Math.hypot(e.x-f.x,e.y-f.y)<f.radius+e.r+12){warning=true;break}
 const m=f.mesh;m.visible=!warning;m.position.set(f.x/16,.13,f.y/16);m.rotation.set(-Math.PI/2,0,0);const size=f.radius*2/16*(low?.94:1);m.scale.set(size,size/Math.sin(PITCH),1);m.material.opacity=(ring?.66:.45)*(SETT.flash?1:.38)*(ring?1:1-f.elapsed/.22);
 if(ring){const wf=f.kind==='steel'?skFrames('whirl'):null,sm=skWhirl();if(wf){m.visible=false;sm.visible=!warning;sm.material=wf[frame%wf.length].n;sm.position.copy(m.position);sm.rotation.set(-Math.PI/2,0,0);const q=f.radius*2/16*1.25;sm.scale.set(q,q/Math.sin(PITCH),1)}else sm.visible=false}
}}

function activeSlotsTick(dt){S.combatLock=Math.max(0,(S.combatLock||0)-dt);S.aardCd=Math.max(0,(S.aardCd||0)-dt);if(!S.activeWind)return;
 if(pl.dead||pl.roll>0||pl.broken>0){S.activeWind=null;if(pl.atk?.kind==='skill')pl.atk=null;return}S.activeWind.t-=dt;if(S.activeWind.t>0)return;const w=S.activeWind;S.activeWind=null;pl.atk=null;if(w.k==='aard')castAard(true);if(w.k==='earthcut')swordEarth({kind:'h',charged:true,dx:w.x,dy:w.y},true);if(w.k==='stoneguard')summonSwordGuardian(true);if(w.k==='drugieja')summonTwin(true);
 pl.atk={kind:'skill',stage:'rec',t:.18};}
function renderLoadout(){const el=$('skillLoadout');if(!el)return;el.hidden=!S;if(el.hidden)return;const focused=document.activeElement,focusSlot=el.contains(focused)?focused.dataset.slot:undefined,focusEquip=el.contains(focused)?focused.dataset.equip:undefined;const safe=loadoutSafe(),selected=S.loadoutSelected||0,keys=['Q · LT+X','E · LT+Y','F · LT+B','R · LT+A'];el.innerHTML=(EN?'<h2>Active skills</h2><p>Choose a slot, then a skill you have learned. Sword techniques and blade spells work outside slots.</p><div class="slot-pick">':'<h2>Aktywne umiejętności</h2><p>Wybierz slot, potem zdobytą umiejętność. Techniki miecza i zaklęcia ostrza działają poza slotami.</p><div class="slot-pick">')+S.activeSlots.map((k,i)=>`<button type="button" class="go slot-tab${selected===i?' chosen':''}" data-slot="${i}" aria-pressed="${selected===i}"><small>${keys[i]}</small>${k?`<i class="ic ic-${SK[k].ic}"></i>${SK[k].name}`:'Wolny slot'}</button>`).join('')+'</div><p class="loadout-state">'+(safe?(EN?'You can change your loadout. Cooldowns stay with the skills.':'Możesz zmienić wyposażenie. Odnowienia pozostają przypisane do umiejętności.'):(EN?'Changes are locked during combat. Move away from enemies and wait 4 s without attacking or being hit.':'Zmiana zablokowana podczas walki. Oddal się od wrogów i odczekaj 4 s bez atakowania ani otrzymywania ciosów.'))+'</p><div class="slot-inventory">'+ACTIVE_SLASHER.filter(k=>sk(k)).map(k=>(EN?`<button type="button" class="go${S.activeSlots[selected]===k?' selected-skill':''}" data-equip="${k}" ${safe?'':'disabled'}><i class="ic ic-${SK[k].ic}"></i><span>${SK[k].name}<small>${ACTIVE_CFG[k].cost} ${activeResourceName(k)} · ${S[ACTIVE_CFG[k].cd]>0?'cooldown '+Math.ceil(S[ACTIVE_CFG[k].cd])+' s':'ready'}${S.activeSlots.includes(k)?' · slot '+(S.activeSlots.indexOf(k)+1):' · in reserve'}</small></span></button>`:`<button type="button" class="go${S.activeSlots[selected]===k?' selected-skill':''}" data-equip="${k}" ${safe?'':'disabled'}><i class="ic ic-${SK[k].ic}"></i><span>${SK[k].name}<small>${ACTIVE_CFG[k].cost} ${activeResourceName(k)} · ${S[ACTIVE_CFG[k].cd]>0?'odnowienie '+Math.ceil(S[ACTIVE_CFG[k].cd])+' s':'gotowa'}${S.activeSlots.includes(k)?' · slot '+(S.activeSlots.indexOf(k)+1):' · w rezerwie'}</small></span></button>`)).join('')+(EN?`<button type="button" class="go alt" data-equip="" ${safe?'':'disabled'}>Empty slot ${selected+1}</button></div>`:`<button type="button" class="go alt" data-equip="" ${safe?'':'disabled'}>Opróżnij slot ${selected+1}</button></div>`);const restore=focusSlot!==undefined?el.querySelector('[data-slot="'+focusSlot+'"]'):focusEquip!==undefined?el.querySelector('[data-equip="'+focusEquip+'"]'):null;if(restore&&!restore.disabled)restore.focus({preventScroll:true});}
function renderActiveHud(){const el=$('activeSkillHud');if(!el)return;const visible=S&&S.phase==='play'&&!S.paused&&!S.notice&&!S.dialog&&!S.choosing&&!S.shop&&!S.intro&&!pl.dead;el.hidden=!visible;if(!visible)return;el.classList.toggle('lt-held',!!PAD.skillHeld);const labels=PAD.on?['LT+X','LT+Y','LT+B','LT+A']:['Q','E','F','R'];const markup=S.activeSlots.map((k,i)=>{const c=ACTIVE_CFG[k],cd=k?Math.max(0,S[c.cd]||0):0;return `<button type="button" data-active="${i}" class="active-slot${k?'':' empty'}${k&&!canPayActive(k)?' no-mana':''}${cd>0?' cooling':''}" title="${k?SK[k].name+' · '+c.cost+' '+activeResourceName(k):'Wolny slot — wyposaż w pauzie'}" aria-label="${labels[i]}: ${k?SK[k].name:'wolny slot'}" ${k?'':'disabled'}><kbd>${labels[i]}</kbd>${k?`<i class="ic ic-${SK[k].ic}"></i><small>${c.cost} ${activeResourceName(k)}</small>`:'<span>—</span>'}${cd>0?`<b class="slot-cd">${Math.ceil(cd)}</b>`:''}</button>`}).join('');if(el.dataset.markup!==markup){el.innerHTML=markup;el.dataset.markup=markup}}
$('skillLoadout').addEventListener('click',e=>{const slot=e.target.closest('[data-slot]'),choice=e.target.closest('[data-equip]');if(slot){S.loadoutSelected=+slot.dataset.slot;renderLoadout()}else if(choice)equipActive(S.loadoutSelected||0,choice.dataset.equip||null)});
for(const ev of ['pointerdown','mousedown','touchstart'])$('activeSkillHud').addEventListener(ev,e=>e.stopPropagation());
$('activeSkillHud').addEventListener('click',e=>{e.stopPropagation();const b=e.target.closest('[data-active]');if(b){e.preventDefault();activateSlot(+b.dataset.active)}});

function swordCanAct(){return !!(S&&S.phase==='play'&&!S.paused&&!S.notice&&!S.dialog&&!S.choosing&&!S.shop&&!S.intro&&!pl.dead&&pl.roll<=0&&!(pl.broken>0)&&!pl.atk&&!pl.block&&!pl.charging)}
function requestSwordShot(k=sk('frostshot')?'frostshot':sk('embershot')?'embershot':null){if(!swordCanAct())return;if(!k)return;if((S.shotCd||0)>0){play('empty',.2);return}if(!canPayMana(k)){manaFlash();return}const d=aimDir()||[pl.fx,pl.fy];pl.fx=d[0];pl.fy=d[1];payMana(k);S.shotCd=ACTIVE_CFG[k].wait(sk(k));S.shotWind={k,L:sk(k),x:d[0],y:d[1],t:.2};pl.atk={kind:'shot',stage:'wind',t:.2};S.actions.shot=(S.actions.shot||0)+1;play('swing',0)}
// Odłamek szronu: duży pocisk, przebija kilka celów i spowalnia. Kula ognia: duża, wolniejsza, wybucha na pierwszym trafionym celu.
function swordShotLaunch(w){const ice=w.k==='frostshot',spd=ice?190:150,range=(ice?120:130)+10*w.L,L=Math.min(3,Math.max(1,w.L));
 S.swordShots.push({x:pl.x+w.x*8,y:pl.y+w.y*8,vx:w.x*spd,vy:w.y*spd,spd,R:ice?SL.shot.iceR:SL.shot.fireHit,t:range/spd,L,ice,fire:!ice,ch:CH,hit:new Set(),n:0,max:ice?SL.shot.targets[L-1]:1});
 const p=S.swordShots[S.swordShots.length-1];{const fl=skFrames(ice?'frostf':'firef');if(fl)addVfx(skLoop(fl,p.t,ice?11:10),p.t,p.x,p.y,.55,ice?1.7:1.9,'bill',-screenAng(w.x,w.y));else addVfx(ice?A.fx.nova:A.fx.inferno,p.t,p.x,p.y,.55,ice?1:1.3,'bill',ice?-screenAng(w.x,w.y):0)}p.visual=S.vfx[S.vfx.length-1];
 swordSparks(pl.x+w.x*10,pl.y+w.y*10,ice?'#9ee9ff':'#ffa44b',ice?8:12)}
function fireballExplode(p,main){const L=p.L,R=SL.shot.fireR[L-1],base=SL.shot.fireDmg[L-1]*(1+.07*(S.lvl-1))*skillMul();
 for(const e of [...S.enemies]){if(e.dead||e.rise>0)continue;const dx=e.x-p.x,dy=e.y-p.y,d=Math.hypot(dx,dy);if(e!==main&&d>R+e.r)continue;
  if(damageEnemy(e,base*(e===main?1:SL.shot.splash),dx/(d||1),dy/(d||1),e===main?.4:.7)&&e===main&&!e.dead){e.burn=Math.max(e.burn||0,1+.5*L);e.burnD=Math.max(e.burnD||0,2)}}
 if(!skAdd('firei',.75,p.x,p.y,.2,R/13,'bill'))addVfx(A.fx.inferno,.5,p.x,p.y,0,R/14,'bill');for(let i=0;i<26;i++){const an=Math.random()*Math.PI*2,sp=rnd(30,120);S.parts.push({k:'e',x:p.x,y:p.y,z:rnd(4,18),vx:Math.cos(an)*sp,vy:Math.sin(an)*sp*.6,vz:rnd(8,30),c:Math.random()<.5?'#ff6a1a':'#ffb347',life:rnd(.3,.7)})}
 shake(.22,.2);play('fire',0)}
function swordTechniqueHit(e,a){if(e.dead)return;if(a.kind==='h'&&sk('iceblade')>=3&&e.chill>0){e.chill=0;for(const o of S.enemies)if(o!==e&&!o.dead&&Math.hypot(o.x-e.x,o.y-e.y)<28){o.chill=Math.max(o.chill||0,1);o.chillMul=Math.min(o.chillMul||1,BIG.has(o.type)||o.type==='collector'?.9:.8)}swordSparks(e.x,e.y,'#b4efff',10)}const L=sk('breach');if(a.kind==='h'&&a.charged&&L){if(BIG.has(e.type)||e.type==='collector'||e.type==='jerzak')breakPoise(e,20+10*L);else{slashStagger(e,.6+.15*L,true);e.vx+=a.dx*90;e.vy+=a.dy*90}}
}
function swordOnKill(e){}
function swordEarth(a,active=false){const L=sk('earthcut');if(!active||!L)return;const hit=new Set();let lastR=0;const haveEarth=!!skFrames('earth');for(let r=12;r<=48+8*L;r+=6){const x=pl.x+a.dx*r,y=pl.y+a.dy*r;if(boxSolid(x,y,2,2))break;lastR=r;if(!haveEarth&&r%12===0)addVfx(A.fx.spikes,.35,x,y,0,.65,'bill');for(const e of [...S.enemies])if(!e.dead&&!hit.has(e)&&Math.hypot(e.x-x,e.y-y)<10+e.r){hit.add(e);damageEnemy(e,(8+4*L)*(1+.07*(S.lvl-1))*skillMul(),a.dx,a.dy,.3)}}if(haveEarth&&lastR>0){const len=lastR+6,v=skAdd('earth',.7,pl.x+a.dx*len*.5,pl.y+a.dy*len*.5,.04,len/29,'ground',-Math.atan2(a.dy,a.dx));if(v)v.sy=1/Math.sin(PITCH)}}
// Stone guardian: a walking golem that draws ordinary enemies to itself for up to 10 s. It has its own life,
// deals no damage, never heals. Bosses (bottom health bar) follow it for at most SL.guard.bossTaunt seconds per summon.
function summonSwordGuardian(active=false){const L=Math.min(3,sk('stoneguard'));if(!active||!L)return;removeGuardian();let x=pl.x+pl.fx*14,y=pl.y+pl.fy*14;if(boxSolid(x,y,6,4)){x=pl.x;y=pl.y}const mesh=new THREE.Mesh(geo32,A.golem.idle[0].n);mesh.position.set(x/16,0,y/16);mesh.scale.set(1,SQ,1);scene.add(mesh);
  const max=Math.max(1,Math.round(pl.max*SL.guard.hp[L-1]));S.guardSeq=(S.guardSeq||0)+1;S.swordGuardian={golem:true,id:S.guardSeq,x,y,t:SL.guard.dur,hp:max,max,L,R:SL.guard.taunt[L-1],mesh,ch:CH,s:pl.fx<0?-1:1,walk:0,moving:false,inv:0,gone:false};skAdd('stone',1.1,x,y,.3,1.5,'bill');swordSparks(x,y,'#d6bf81',12)}
// Drugie Ja: cienista kopia bohatera. Powtarza lekkie i ciężkie ciosy z opóźnieniem, słabsza, bez efektów ostrza i bez leczenia.
const TWIN_CFG={dur:[6,7,8],delay:[.8,.65,.5],mul:[.5,.55,.6],rip:1.5,off:20};
function summonTwin(active=false){const L=Math.min(3,sk('drugieja'));if(!active||!L)return;removeTwin();const mesh=new THREE.Mesh(geo32,A.hero.idle_down[0].n);mesh.visible=false;scene.add(mesh);
  S.twin={L,age:0,lastT:-1,t:TWIN_CFG.dur[L-1],delay:TWIN_CFG.delay[L-1],mul:TWIN_CFG.mul[L-1],buf:[],q:[],mesh,x:pl.x,y:pl.y};swordSparks(pl.x,pl.y,'#7a62d8',14);play('bless',0)}
function removeTwin(){const E=S&&S.twin;if(!E)return;scene.remove(E.mesh);S.twin=null}
function twinPush(a,crit,base){const E=S.twin;if(!E||!(base>0))return;E.q.push({due:E.age+E.delay,kind:a.kind,combo:a.combo||0,dx:a.dx,dy:a.dy,crit,base})}
function twinStrike(E,q){const P=q.kind==='h'?SL.heavy:SL.light,R=P.range,arc=P.arc,ang=Math.atan2(q.dy,q.dx),dmg=q.base*E.mul*(q.crit?TWIN_CFG.rip:1);let hits=0;
  const oldM=ftMelee,oldH=ftHeavy,oldC=ftCrit;ftMelee=true;ftHeavy=q.kind==='h';ftCrit=false;
  try{for(const e of [...S.enemies]){if(e.dead||e.rise>0)continue;const dx=e.x-E.x,dy=e.y-E.y,d=Math.hypot(dx,dy);if(d>R+e.r||!sightSword(E.x,E.y,e.x,e.y))continue;let df=Math.atan2(dy,dx)-ang;while(df>Math.PI)df-=2*Math.PI;while(df<-Math.PI)df+=2*Math.PI;if(d>10&&Math.abs(df)>arc)continue;
    if(damageEnemy(e,dmg,dx/(d||1),dy/(d||1),q.kind==='h'?1.2:.5))hits++}}finally{ftMelee=oldM;ftHeavy=oldH;ftCrit=oldC}
  const c=Math.cos(ang),s=Math.sin(ang);addVfx(A.fx.slash,.22,E.x+c*R*.4,E.y+s*R*.4,.6,swordVisualSize(q.kind)*.95,'bill',-screenAng(c,s));
  play(q.kind==='h'?'bladeHeavy':'bladeLight',.05);if(hits)swordSparks(E.x+c*R*.5,E.y+s*R*.5,'#9a86ff',4)}
function twinTick(dt){const E=S.twin;if(!E)return;if(pl.dead){removeTwin();return}E.age+=dt;E.t-=dt;
  for(let i=0;i<E.q.length;i++){const q=E.q[i];if(q.due<=E.age){E.q.splice(i,1);i--;twinStrike(E,q)}}
  if(E.t<=0){swordSparks(E.x,E.y,'#7a62d8',12);removeTwin()}}
function twinDraw(hs){const E=S&&S.twin;if(!E)return;const fr=S.heroHF;if(fr&&E.age>E.lastT){E.lastT=E.age;E.buf.push({t:E.age,x:pl.x,y:pl.y,fr,s:hs||1})}
  const want=E.age-E.delay;while(E.buf.length>1&&E.buf[1].t<=want)E.buf.shift();const q=E.buf[0];if(!q){E.mesh.visible=false;return}
  E.x=q.x-TWIN_CFG.off*(q.s<0?-1:1);E.y=q.y-6;setFrame(E.mesh,q.fr,'sh');E.mesh.position.set(E.x/16,0,E.y/16);E.mesh.scale.set(q.s,SQ,1);E.mesh.visible=true}
function removeGuardian(){const g=S&&S.swordGuardian;if(!g)return;g.gone=true;scene.remove(g.mesh);S.swordGuardian=null}
function bossBar(e){return BIG.has(e.type)||e.type==='collector'||e.type==='jerzak'||e.type==='boginka'}
function golemTgt(e){return !!(e.tg&&e.tg.golem)}
// only direct blows and projectiles reach the golem; it shrugs off nothing else
function golemHurt(g,dmg){if(!g||g.gone||g.inv>0||!(dmg>0))return false;g.hp-=dmg;g.inv=SL.guard.inv;swordSparks(g.x,g.y,'#d6bf81',5);if(g.hp<=0){g.hp=0;swordSparks(g.x,g.y,'#d6bf81',18);shake(.15,.2);removeGuardian()}return true}
// a direct enemy blow lands on the target chosen when the attack began
function hitT(e,dmg,nx,ny,att=false){if(golemTgt(e)){golemHurt(e.tg,dmg);return false}return att?hurtFromEnemy(e,dmg,nx,ny):hurtPlayer(dmg,nx,ny,e)}
// area blows (slams, roots, bursts) only ever check the hero's own position
function aoeP(e,R,dmg,cx=e.x,cy=e.y){const dx=pl.x-cx,dy=pl.y-cy,d=Math.hypot(dx,dy)||1;return d<R?hurtPlayer(dmg,dx/d,dy/d,e):false}
function enemyBusy(e){return enemyWinding(e)||e.leap>0||e.mode==='charge'||e.mode==='dive'||e.mode==='down'||e.pull>0||e.boom>0}
// who this enemy is after; kept for the whole wind-up and strike so a ready blow never turns at the last moment
function enemyTarget(e,dt){if(enemyBusy(e)&&e.tg)return e.tg;const g=S.swordGuardian;let t=pl;
  if(g&&!g.gone&&g.ch===CH&&e.type!=='wisp'&&Math.hypot(g.x-e.x,g.y-e.y)<=g.R+e.r&&sight(e.x,e.y,g.x,g.y)){
    if(bossBar(e)){if(e.tauntId!==g.id){e.tauntId=g.id;e.tauntLeft=SL.guard.bossTaunt}if(e.tauntLeft>0){e.tauntLeft-=dt;t=g}}else t=g}
  e.tg=t;return t}
function keepGolemDistance(e){const g=S.swordGuardian;if(!g||g.gone||!enemyBody(e))return;const dx=e.x-g.x,dy=e.y-g.y,d=Math.hypot(dx,dy),gap=SL.guard.r+e.r;if(d>=gap||d<.001)return;moveBox(e,dx/d*(gap-d),dy/d*(gap-d),e.hw||e.r-1,3)}
function golemTick(dt){const g=S.swordGuardian;if(!g)return;g.t-=dt;g.inv=Math.max(0,g.inv-dt);
  if(g.t<=0||g.hp<=0||g.ch!==CH||pl.dead){removeGuardian();return}
  let tg=null,best=1e9;for(const e of S.enemies){if(e.dead||e.rise>0||e.sleep||bossBar(e)||e.type==='wisp'||Math.hypot(e.x-pl.x,e.y-pl.y)>SL.guard.leash)continue;const dd=Math.hypot(e.x-g.x,e.y-g.y);if(dd<best&&sight(g.x,g.y,e.x,e.y)){best=dd;tg=e}}
  const tx=tg?tg.x:pl.x-pl.fx*14,ty=tg?tg.y:pl.y-pl.fy*14,stop=tg?tg.r+SL.guard.r+2:12,dx=tx-g.x,dy=ty-g.y,d=Math.hypot(dx,dy);g.moving=false;
  if(d>stop){const st=Math.min(d-stop,SL.guard.spd*dt),ox=g.x,oy=g.y;moveBox(g,dx/d*st,dy/d*st,5,3);g.moving=Math.hypot(g.x-ox,g.y-oy)>st*.3;if(g.moving)g.walk+=dt}
  if(Math.abs(dx)>1)g.s=dx>0?1:-1;
  g.mesh.position.set(g.x/16,0,g.y/16);g.mesh.scale.set(g.s,SQ,1);setFrame(g.mesh,g.moving?at(A.golem.walk,g.walk,7):at(A.golem.idle,clock,2))}
function clearSwordTransient(){clearCombatEffects();clearWhirlVisuals();if(!S)return;if(pl?.atk?.kind==='whirl')endWhirl();S.activeWind=null;S.cascade=null;if(pl?.atk?.kind==='skill')pl.atk=null;if(pl?.atk?.kind==='shot')pl.atk=null;S.swordTrails=[];removeGuardian();removeTwin();for(const p of S.swordShots||[])if(p.visual)p.visual.t=p.visual.dur;S.swordShots=[];S.shotWind=null;S.shadowReady=0;S.retaliate=0}
function swordTick(dt){activeSlotsTick(dt);twinTick(dt);for(let i=S.swordTrails.length-1;i>=0;i--){const z=S.swordTrails[i];z.t-=dt;if(z.t<=0){S.swordTrails.splice(i,1);continue}if(Math.random()<dt*16)swordSparks(z.x,z.y,'#ff8a38',1);for(const e of S.enemies)if(!e.dead&&!z.hit.has(e)&&Math.hypot(e.x-z.x,e.y-z.y)<12+e.r){z.hit.add(e);e.burn=Math.max(e.burn||0,1);e.burnD=Math.max(e.burnD||0,2)}}for(const k of ['shotCd','earthCd','guardCd','whirlCd','cascadeCd','twinCd','shadowReady','retaliate'])S[k]=Math.max(0,(S[k]||0)-dt);
 if(S.shotWind){if(pl.dead||pl.roll>0||pl.broken>0){S.shotWind=null;if(pl.atk?.kind==='shot')pl.atk=null}else{S.shotWind.t-=dt;if(S.shotWind.t<=0){swordShotLaunch(S.shotWind);S.shotWind=null;pl.atk={kind:'shot',stage:'rec',t:.18}}}}
 golemTick(dt);cascadeTick(dt);
 for(let i=S.swordShots.length-1;i>=0;i--){const p=S.swordShots[i];p.t-=dt;let gone=p.t<=0||p.ch!==CH,boom=null;const steps=Math.max(1,Math.ceil(p.spd*dt/3));for(let s=0;s<steps&&!gone;s++){p.x+=p.vx*dt/steps;p.y+=p.vy*dt/steps;if(boxSolid(p.x,p.y,2,2)){gone=true;break}const ux=p.vx/p.spd,uy=p.vy/p.spd,touch=S.enemies.filter(e=>!e.dead&&!(e.rise>0)&&!p.hit.has(e)&&Math.hypot(e.x-p.x,e.y-p.y)<=e.r+p.R).sort((a,b)=>((a.x-p.x)*ux+(a.y-p.y)*uy)-((b.x-p.x)*ux+(b.y-p.y)*uy));
   if(p.fire){if(touch.length){boom=touch[0];gone=true;break}continue}
   for(const e of touch){p.hit.add(e);const ok=damageEnemy(e,(SL.shot.iceDmg+SL.shot.perL*p.L)*(1+.07*(S.lvl-1))*skillMul(),ux,uy,0);if(!ok)continue;p.n++;if(!e.dead){e.chill=Math.max(e.chill||0,1.5);e.chillMul=Math.min(e.chillMul||1,BIG.has(e.type)||e.type==='collector'||e.type==='jerzak'?.9:1-(.25+.05*p.L))}swordSparks(p.x,p.y,'#a2e9ff',8);if(p.n>=p.max){gone=true;break}}}
  if(p.visual){p.visual.x=p.x;p.visual.y=p.y;if(gone)p.visual.t=p.visual.dur}
  if(gone&&p.ice&&p.ch===CH)skAdd('frosti',.5,p.x,p.y,.5,1.5,'bill');
  if(gone&&p.fire&&p.ch===CH)fireballExplode(p,boom);
  if(!gone)swordSparks(p.x,p.y,p.ice?'#a2e9ff':'#ff9a43',p.ice?3:4);else S.swordShots.splice(i,1)}
}
let swordGlow=null;

let bladeVisualKey='';
function updateBladeTexture(k){const secondary=ENCH.find(x=>sk(x)&&x!==k)||'',key=k+':'+secondary;if(key===bladeVisualKey)return;bladeVisualKey=key;const c=canvas(64,192),g=c.getContext('2d'),col=x=>({venom:'#a6ff52',fireblade:'#ff7a1e',iceblade:'#7fd8ff',bloodblade:'#d8101c'})[x]||ENC[x].col,main=col(k);const grad=g.createLinearGradient(8,0,56,0);grad.addColorStop(0,'transparent');grad.addColorStop(.3,main+'50');grad.addColorStop(.5,main);grad.addColorStop(.7,main+'70');grad.addColorStop(1,'transparent');g.fillStyle=grad;g.beginPath();g.moveTo(32,5);g.lineTo(48,154);g.lineTo(32,184);g.lineTo(16,154);g.closePath();g.fill();g.fillStyle=main;g.strokeStyle=main;g.lineWidth=2;for(let i=0;i<7;i++){const y=30+i*20,side=i%2?1:-1,x=32+side*(4+i);g.beginPath();if(k==='iceblade'){g.moveTo(x,y);g.lineTo(x+side*10,y-10);g.lineTo(x+side*6,y+8);g.closePath();g.fill()}else if(k==='fireblade'){g.moveTo(x,y+9);g.quadraticCurveTo(x+side*17,y-3,x+side*7,y-14);g.quadraticCurveTo(x+side*3,y,x,y+9);g.fill()}else if(k==='bloodblade'){g.ellipse(x+side*3,y,2,5,-side*.4,0,Math.PI*2);g.fill()}else{g.arc(x+side*5,y,3+i%2,0,Math.PI*2);g.stroke()}}if(secondary){g.strokeStyle=col(secondary);g.lineWidth=3;g.beginPath();g.moveTo(30,28);g.lineTo(30,164);g.stroke()}const tex=new THREE.CanvasTexture(c);if(swordGlow.material.map)swordGlow.material.map.dispose();swordGlow.material.map=tex;swordGlow.material.needsUpdate=true}
function syncSwordGlow(){if(!swordGlow){const c=canvas(32,128),g=c.getContext('2d'),a=g.createLinearGradient(0,0,32,0);a.addColorStop(0,'transparent');a.addColorStop(.42,'#ffffffaa');a.addColorStop(.5,'#fff');a.addColorStop(.58,'#ffffff55');a.addColorStop(1,'transparent');g.fillStyle=a;g.beginPath();g.moveTo(16,2);g.lineTo(28,100);g.lineTo(16,125);g.lineTo(4,100);g.closePath();g.fill();const t=new THREE.CanvasTexture(c);swordGlow=new THREE.Mesh(new THREE.PlaneGeometry(.3,1.05),new THREE.MeshBasicMaterial({map:t,transparent:true,depthWrite:false,depthTest:false,blending:THREE.AdditiveBlending,toneMapped:false}));swordGlow.renderOrder=5;scene.add(swordGlow)}const k=S?encLevel()[0]:null;const on=!!(k&&S.phase==='play'&&!pl.dead&&pl.roll<=0);swordGlow.visible=false;if(on&&!(S.paused||S.notice||S.choosing||S.dialog||S.shop)&&Math.random()<.14)swordSparks(pl.x+pl.fx*7,pl.y+pl.fy*5,ENC[k].col,1);return;const a=pl.atk,ang=a?.kind==='whirl'?a.angle:a&&a.kind!=='shot'?Math.atan2(pl.fy,pl.fx)+(a.stage==='wind'?-.65:a.stage==='act'?.5:.85):(Math.abs(pl.fx)>.5?(pl.fx>0?.7:Math.PI-.7):pl.fy>0?.9:-.9);swordGlow.position.set((pl.x+(a?Math.cos(ang)*9:pl.fx*6))/16,.65,(pl.y+(a?Math.sin(ang)*8:pl.fy*8+2))/16);swordGlow.quaternion.copy(cam.quaternion);swordGlow.rotateZ(-screenAng(Math.cos(ang),Math.sin(ang))-Math.PI/2);updateBladeTexture(k);swordGlow.material.color.setHex(0xffffff);swordGlow.material.opacity=(SETT.flash?.95:.5)*(.82+.18*Math.sin(clock*7));swordGlow.scale.set(a?1.7:.95,a?1.3:1,1);if(!(S.paused||S.notice||S.choosing||S.dialog||S.shop)&&Math.random()<.14)swordSparks(swordGlow.position.x*16,swordGlow.position.z*16,ENC[k].col,1)}

function applyEnchants(e,a,crit){if(e.dead)return;const [k,L]=encLevel();if(!k)return;const big=BIG.has(e.type)||e.type==='collector'||e.type==='jerzak',c=ENC[k];
  if(!crit&&Math.random()>=encChance(L)*(a.kind==='h'?1.5:1))return;
  // the status itself
  if(!(e.pois>0||e.burn>0||e.chill>0||e.bleed>0))ftx(c.name,e.x,e.y,ftEntH(e)+.5,'i');
  if(k==='venom'){e.pois=4;e.poisD=2+L}else if(k==='fireblade'){e.burn=3;e.burnD=3+1.5*L}else if(k==='iceblade'){e.chill=2.5;e.chillMul=Math.max(.3,.6-.03*L)}else{e.bleed=3;e.bleedDmg=2+L}
  skAdd(k==='venom'?'poison':k==='fireblade'?'burn':k==='iceblade'?'freeze':'bleed',.5,e.x,e.y,.3,.85,'bill');
  for(let i=0;i<8;i++)S.parts.push({k:'e',x:e.x+rnd(-5,5),y:e.y+rnd(-3,3),z:rnd(6,18),vx:rnd(-14,14),vy:0,vz:rnd(8,22),c:Math.random()<.6?c.col:c.col2,life:rnd(.3,.6)});
  if(a.statusOnly)return; // Whirl applies the status only: no elemental execution, healing or boss stun.
  e.marks=(e.marks||0)+1;if(e.marks<encMarks(e))return;e.marks=0;
  // finisher
  ftx(c.name+'!',e.x,e.y,ftEntH(e)+.55,'i')
  for(let i=0;i<30;i++){const an=Math.random()*Math.PI*2,sp=rnd(30,110);S.parts.push({k:'e',x:e.x,y:e.y,z:rnd(4,20),vx:Math.cos(an)*sp,vy:Math.sin(an)*sp*.6,vz:rnd(10,40),c:Math.random()<.5?c.col:c.col2,life:rnd(.4,.9)})}
  shake(.15,.2);play(k==='iceblade'?'frost':k==='fireblade'?'fire':k==='venom'?'heal':'katana',0);
  const near=r=>S.enemies.filter(o=>o!==e&&!o.dead&&o.rise<=0&&Math.hypot(o.x-e.x,o.y-e.y)<r);
  if(k==='fireblade'){addVfx(A.fx.inferno,.5,e.x,e.y,0,2.4,'bill');for(const o of near(36))damageEnemy(o,15+5*L,(o.x-e.x)/36,(o.y-e.y)/36,1)}
  if(k==='venom')for(const o of near(32)){o.marks=(o.marks||0)+1;o.pois=4;o.poisD=2+L}
  if(k==='iceblade'){addVfx(A.fx.nova,.4,e.x,e.y,.06,2.6,'ground');for(const o of near(36)){o.chill=3;o.chillMul=.4}}
  if(k==='bloodblade'){const h=heal(4+L);if(h>0)S.parts.push({k:'i',x:pl.x,y:pl.y,z:12,vx:0,vy:0,vz:20,c:'#c4202a',life:.6});pool(e.x,e.y,18,7)}
  if(big){damageEnemy(e,e.max*(.05+.01*L),0,1,0);if(k==='iceblade')e.stun=Math.max(e.stun||0,.8)}
  else{e.xp=Math.max(e.xp,1);e.hp=0;killEnemy(e,0,1)}}
// Force Push (a sign): a cone of force that throws enemies back, stuns them and knocks projectiles out of the air
function castAard(prepaid=false){const L=S.sk.aard||0;if(!L||pl.dead||pl.roll>0||pl.broken>0||(pl.atk&&pl.atk.stage!=='rec'))return;
  if(!prepaid&&S.aardCd>0){play('empty',.2);return}if(!prepaid&&!canPayMana('aard')){manaFlash(.45);return}
  if(!prepaid)payMana('aard');pl.atk=null;pl.block=false;S.aardCd=Math.max(4.5,9-L);
  const a=aimDir()||autoAim()||[pl.fx,pl.fy];pl.fx=a[0];pl.fy=a[1];const ang=Math.atan2(a[1],a[0]),R=56+8*L,full=L>=5,stun=1+.2*L,dmg=8+8*L;
  for(const e of S.enemies){if(e.dead||e.rise>0)continue;const dx=e.x-pl.x,dy=e.y-pl.y,d=Math.hypot(dx,dy)||1;if(d>R+e.r)continue;let df=Math.atan2(dy,dx)-ang;while(df>Math.PI)df-=2*Math.PI;while(df<-Math.PI)df+=2*Math.PI;if(!full&&Math.abs(df)>.95)continue;
    const big=BIG.has(e.type)||e.type==='collector';if(!damageEnemy(e,dmg*(1+.07*(S.lvl-1))*skillMul(),dx/d,dy/d,0)||e.dead)continue;
    if(big){breakPoise(e,60+15*L)}else{e.vx+=dx/d*(220+20*L);e.vy+=dy/d*(220+20*L);e.stun=Math.max(e.stun||0,stun);e.sw=0;e.ghoulWind=0;e.leap=0}}
  for(let i=S.eproj.length-1;i>=0;i--){const f=S.eproj[i],dx=f.x-pl.x,dy=f.y-pl.y,d=Math.hypot(dx,dy);if(d>R+20)continue;if(f.mesh)scene.remove(f.mesh);if(f.vfe)f.vfe.t=f.vfe.dur;S.eproj.splice(i,1)}
  for(let i=0;i<60;i++){const an=full?Math.random()*Math.PI*2:ang+rnd(-.95,.95),sp=rnd(80,240);S.parts.push({k:'i',x:pl.x+Math.cos(an)*6,y:pl.y+Math.sin(an)*4,z:rnd(4,16),vx:Math.cos(an)*sp,vy:Math.sin(an)*sp*.6,vz:rnd(0,10),c:Math.random()<.5?'#d8f0ff':'#9fb4d0',life:rnd(.25,.45)})}
  if(!skAdd('knock',.6,pl.x+(full?0:Math.cos(ang)*R*.4),pl.y+(full?0:Math.sin(ang)*R*.4),.3,R/14.6*(full?1.15:.85),'bill'))addVfx(A.fx.nova,.3,pl.x+Math.cos(ang)*R*.35,pl.y+Math.sin(ang)*R*.35,.06,R/16*(full?1.2:.8),'ground');shake(.2,.2);play('quake',0);play('frost',.1);
  pl.swingT=pl.swingDur=.25;if(Math.abs(a[0])>Math.abs(a[1])){pl.swingDir=2;pl.swingS=a[0]>0?1:-1}else{pl.swingDir=a[1]>0?0:1;pl.swingS=1}}
// enemy side: wind up, strike, then stand open for a moment
function slashEnemy(e,dx,dy,d,dt){
  if(e.sw>0){e.sw-=dt;if(e.sw<=0){e.recov=SL.enemyRec*(e.type==='bat'?.5:1);e.atkA=.3;const red=!!e.red,avoid=(!golemTgt(e)&&pl.inv>0)||d>=e.r+17;e.red=false;
    if(d<e.r+17&&!pl.dead){S.attacker=e;S.redHit=red;hitT(e,enemyDamage(e.dmg*SL.enemyHit,SL.dmgDiv),dx/d,dy/d);S.attacker=null;S.redHit=false}
    if(red&&avoid&&!pl.dead){e.stun=Math.max(e.stun||0,.9);e.recov=0;e.sw=0;ftx((EN?'Exposed':'Odsłonięty'),e.x,e.y,ftEntH(e)+.5,'i')}}return true}
  if(e.recov>0){e.recov-=dt;return true}
  if(e.acd===undefined)e.acd=rnd(.2,.9);
  if(d<e.r+12&&e.acd<=0){// white strike can be blocked and parried; red strike (heavy enemies, elite, after 2 min) only dodged
    const heavy=!BIG.has(e.type)&&ET[e.type]&&ET[e.type].hp>=90;e.hc=(e.hc||0)+1;e.red=S.t>120&&(e.mini?e.hc%2===0:heavy&&e.hc%3===0);
    e.sw=SL.enemyWind*(e.type==='bat'?.6:1)+(e.red?.22:0);e.acd=rnd(1.3,2.2);S.parts.push({k:'e',x:e.x,y:e.y,z:26,vx:0,vy:0,vz:4,c:e.red?warningColor():'#f2ecd8',life:.35});
    if(e.red)play('warnR',0);return true}
  return false}

/* ============ ENEMIES ============ */
const ET={madman:{hp:22,spd:26,r:5,dmg:8,xp:1,coin:.08},hound:{hp:16,spd:33,r:5,dmg:7,xp:1,coin:.05},rotknight:{hp:120,spd:17,r:6,dmg:16,xp:5,coin:.35},monk:{hp:45,spd:20,r:5,dmg:6,xp:3,coin:.15},beast:{hp:2200,spd:21,r:14,dmg:24,xp:50,coin:1},collector:{hp:900,spd:31,r:8,dmg:12,xp:25,coin:0},possessed:{hp:20,spd:24,r:5,dmg:8,xp:1,coin:.06},knight:{hp:95,spd:19,r:6,dmg:15,xp:5,coin:.3},jerzak:{hp:500,spd:17,r:9,dmg:0,xp:12,coin:1},dwarf:{hp:26,spd:22,r:5,dmg:9,xp:1,coin:.07},ghoul:{hp:14,spd:30,r:5,dmg:6,xp:1,coin:.06},bat:{hp:6,spd:36,r:4,dmg:2,xp:1,coin:.04},warden:{hp:150,spd:15,r:7,dmg:18,xp:6,coin:.35},boss:{hp:1500,spd:14,r:13,dmg:20,xp:40,coin:1},
  wolf:{hp:18,spd:35,r:5,dmg:7,xp:1,coin:.05},bandit:{hp:30,spd:25,r:5,dmg:10,xp:2,coin:.3},xbow:{hp:26,spd:22,r:5,dmg:5,xp:2,coin:.25},drowner:{hp:40,spd:18,r:5,dmg:9,xp:2,coin:.1},
  strzygon:{hp:28,spd:33,r:5,dmg:9,xp:2,coin:.08},zmora:{hp:34,spd:23,r:5,dmg:3,xp:2,coin:.1},wisp:{hp:3,spd:0,r:4,dmg:0,xp:0,coin:0},bies:{hp:280,spd:19,r:7,dmg:20,xp:8,coin:.6},
  wight:{hp:110,spd:17,r:6,dmg:15,xp:5,coin:.3},guard:{hp:95,spd:18,r:6,dmg:14,xp:4,coin:.25},scribe:{hp:34,spd:20,r:5,dmg:5,xp:3,coin:.25},executioner:{hp:190,spd:16,r:7,dmg:22,xp:8,coin:.5},
  debtor:{hp:60,spd:19,r:5,dmg:10,xp:3,coin:.2},wraith:{hp:36,spd:24,r:5,dmg:3,xp:3,coin:0},courtraven:{hp:12,spd:38,r:4,dmg:5,xp:1,coin:.06},paperrat:{hp:8,spd:36,r:4,dmg:4,xp:1,coin:.03},bookgolem:{hp:300,spd:13,r:8,dmg:24,xp:9,coin:.6},condemned:{hp:22,spd:22,r:5,dmg:8,xp:1,coin:.08},
  boginka:{hp:320,spd:28,r:6,dmg:14,xp:10,coin:1},leszy:{hp:1100,spd:15,r:12,dmg:16,xp:30,coin:0},strzyga:{hp:1625,spd:22,r:12,dmg:20,xp:50,coin:1}};
function spawnEnemy(type,x,y,extra){const T=ET[type],mul=(BIG.has(type)||type==='collector'?1:1+Math.min(S.t,NIGHT)/ENEMY_HP_T)*S.pk.ehp*DF[DIFFK].hp*chapterHp(type);
  const e=Object.assign({type,x,y,hp:T.hp*mul,max:T.hp*mul,spd:T.spd*rnd(.9,1.1),r:T.r,dmg:T.dmg,xp:T.xp,vx:0,vy:0,flash:0,walk:Math.random()*5,s:1,ph:Math.random()*9,leap:0,lcd:2,side:Math.random()<.5?1:-1,
    frozen:0,bleed:0,bleedT:0,rise:type==='bat'?0:.5,atkA:0,slamT:4,atkT:0,dead:false},extra||{});
  if(extra&&Number.isFinite(extra.hp)){e.hp=extra.hp*S.pk.ehp*DF[DIFFK].hp*chapterHp(type);e.max=(extra.max??extra.hp)*S.pk.ehp*DF[DIFFK].hp*chapterHp(type)}
  if((BIG.has(type)||type==='collector'||type==='boginka'||type==='jerzak')){e.hp*=SL.bossHp;e.max*=SL.bossHp}
  if(type==='ghoul'&&CH===1)e.lcd=4;if(type==='beast'){e.hw=7;e.cT=2.5;e.lT=3}if(type==='leszy'||type==='strzyga')e.hw=7;
  e.mesh=new THREE.Mesh(BIG.has(type)||type==='collector'&&CH===5&&A.collectorC5?geo64:type==='bat'?geoC:geo32,A[type].walk[0].n);e.mesh.castShadow=true;scene.add(e.mesh);S.enemies.push(e);return e}
function ringSpot(rmin=260,rmax=320){for(let i=0;i<40;i++){const a=Math.random()*Math.PI*2,d=rnd(rmin,rmax),x=pl.x+Math.cos(a)*d,y=pl.y+Math.sin(a)*d*.75;if(x<20||y<20||x>WW-20||y>WH-20||boxSolid(x,y,6,3))continue;return[x,y]}return null}
let ftCrit=false,ftHeavy=false,ftMelee=false;
function steelEnemy(e){return ['knight','warden','rotknight','wight','guard','executioner','bookgolem','collector'].includes(e.type)||e.type==='boss'&&CH===5}
function recoilAmount(v){if(!SETT.shake||!v||v.t<=0)return 0;const p=1-v.t/v.life;return(1-p)*(1-p)*Math.cos(p*Math.PI*1.5)}
// Cosmetic particles use their own deterministic variation, without consuming gameplay randomness.
// Fixed visual-only pool: shared atlas, no RNG or gameplay state changes.
const combatEffects=[],COMBAT_FX_LIMIT=16,COMBAT_TRAIL={fireblade:'fire',iceblade:'ice',venom:'poison',bloodblade:'blood'};
function initCombatEffects(){if(combatEffects.length)return;const texture=texFrom(bloodFix(IMGS.combat_fx,896,128));for(let i=0;i<COMBAT_FX_LIMIT;i++){
 const mesh=new THREE.Mesh(new THREE.PlaneBufferGeometry(1,1),new THREE.MeshBasicMaterial({map:texture,transparent:true,alphaTest:.08,depthWrite:false,depthTest:true,side:THREE.DoubleSide,fog:false}));
 mesh.visible=false;mesh.renderOrder=-2;mesh.frustumCulled=false;scene.add(mesh);combatEffects.push({mesh,active:false,t:0,frame:-1,x:0,y:0,size:1,rot:0,kind:'light',low:false});}}
function clearCombatEffects(){for(const f of combatEffects){f.active=false;f.mesh.visible=false}}
function swordVisualSize(kind){return (kind==='h'?SL.heavy.range*.95*1.35*.9:SL.light.range*.8*1.30*.9)/16}
function emitCombatEffect(kind,x,y,size,rot=0){const cfg=COMBAT_FX.effects[kind];if(!cfg)return false;let f=null;for(const slot of combatEffects)if(!slot.active){f=slot;break}if(!f)return true; // Drop visual only when the fixed pool is full.
 f.active=true;f.kind=kind;f.x=x;f.y=y;f.size=size;f.rot=rot;f.t=0;f.frame=-1;f.low=SETT.quality==='low';f.mesh.visible=true;return true;}
function syncCombatEffects(dt){for(const f of combatEffects){if(!f.active)continue;const cfg=COMBAT_FX.effects[f.kind],trail=cfg.source==='03_element_slash_trails.png',duration=f.low?Math.min(.22,cfg.duration):cfg.duration;
 f.t+=dt;if(f.t>=duration){f.active=false;f.mesh.visible=false;continue}const phase=f.t/duration,frame=f.low?(phase<.5?0:2):Math.min(3,Math.floor(phase*4)),m=f.mesh,size=f.size*(f.low?.85:1);
 // Hide this decoration near a warning; never dim/recolor the enemy warning itself.
 let warning=false;for(const e of S.enemies)if(!e.dead&&Math.hypot(e.x-f.x,e.y-f.y)<e.r+size*18&&attackCue(e)){warning=true;break}m.visible=!warning;
 if(frame!==f.frame){f.frame=frame;const a=cfg.frames[frame],u0=(a.x+.5)/COMBAT_FX.width,u1=(a.x+a.width-.5)/COMBAT_FX.width,v0=1-(a.y+a.height-.5)/COMBAT_FX.height,v1=1-(a.y+.5)/COMBAT_FX.height,uv=m.geometry.attributes.uv;
 uv.setXY(0,u0,v1);uv.setXY(1,u1,v1);uv.setXY(2,u0,v0);uv.setXY(3,u1,v0);uv.needsUpdate=true;
 const pos=m.geometry.attributes.position,px=cfg.pivot[0],py=cfg.pivot[1];pos.setXYZ(0,-px,py,0);pos.setXYZ(1,1-px,py,0);pos.setXYZ(2,-px,py-1,0);pos.setXYZ(3,1-px,py-1,0);pos.needsUpdate=true;}
 m.position.set(f.x/16,trail?.25:.45,f.y/16);m.quaternion.copy(cam.quaternion);m.rotateZ(f.rot);m.scale.set(size,size,1);
 m.material.opacity=(trail?.72:f.kind==='parry'?.48:.64)*(SETT.flash?1:.38)*Math.min(1,(1-phase)*3);
}}

function contactSparks(x,y,nx,ny,kind,count){const angle=Math.atan2(ny,nx),soft=!SETT.flash,n=SETT.quality==='low'?Math.min(count,5):count;
  for(let i=0;i<n;i++){const q=(Math.sin((i+1)*78.233+clock*12.9898)*43758.5453)%1,f=q-Math.floor(q),a=angle+(f-.5)*2.1,sp=26+f*(kind==='parry'?66:42);S.parts.push({k:'e',x,y,z:10+f*4,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp*.6,vz:12+f*25,c:kind==='flesh'?(i%2?'#ba7354':'#96513f'):soft?(i%2?'#b9b1a0':'#8c969c'):kind==='parry'?(i%2?'#ffe9bb':'#d3e0eb'):(i%2?'#c9c3aa':'#b8c6d0'),life:.09+f*.09})}}
function guardFeedback(kind,nx,ny,projectile){let dx=-nx,dy=-ny,d=Math.hypot(dx,dy);if(d<.001){dx=pl.fx;dy=pl.fy;d=1}dx/=d;dy/=d;const attacker=S.attacker,reach=attacker?Math.min(10,Math.hypot(attacker.x-pl.x,attacker.y-pl.y)*.5):9,x=projectile?projectile.x:pl.x+dx*reach,y=projectile?projectile.y:pl.y+dy*reach;
  if(!emitCombatEffect(kind==='parry'?'parry':'block',x,y,kind==='parry'?1.15:.85))contactSparks(x,y,dx,dy,kind,kind==='parry'?9:6);pl.visualGuard={t:.16,life:.16,dx:nx,dy:ny};play(kind,kind==='parry'?.03:.05)}
function hitSpark(e,nx,ny){const length=Math.hypot(nx,ny)||1,dx=nx/length,dy=ny/length,armour=steelEnemy(e),amplitude=BIG.has(e.type)?.35:e.type==='collector'?.55:ftHeavy?1.3:ftCrit?1.1:.75;
  if(!emitCombatEffect(ftHeavy?'heavy':'light',e.x-dx*Math.min(e.r*.55,5),e.y-dy*Math.min(e.r*.55,5),ftHeavy?1.35:.9))contactSparks(e.x-dx*Math.min(e.r*.55,5),e.y-dy*Math.min(e.r*.55,5),dx,dy,armour?'steel':'flesh',ftCrit?8:ftHeavy?6:4);
  e.visualHit={t:.15,life:.15,dx,dy,amplitude};}
function damageEnemy(e,dmg,nx,ny,kb=1,src){if(e.dead||e.trans>0||e.inv>0)return false;if(dmg>=.5&&e.type!=='jerzak'&&Math.hypot(e.x-pl.x,e.y-pl.y)<190)ftx(dmg,e.x,e.y,ftEntH(e),ftCrit?'c':'d',e);if(e.type==='jerzak'){if(!e.selfKill){e.selfKill=1.1;e.flash=.15;say((EN?'OBDYP panicked and struck itself with all its might.':'OBDYP spanikował i z całej siły uderzył sam siebie.'));play('boing',0)}return true}S.dealt=(S.dealt||0)+dmg;e.hp-=dmg;e.flash=ftCrit?.17:ftHeavy?.12:.08;if(ftMelee&&dmg>=.5)hitSpark(e,nx,ny);if(e.type==='collector'&&!(e.hurtCd>0)&&dmg>=20){e.hurtA=.3;e.hurtCd=2.5}const k=(BIG.has(e.type)?.05:e.type==='collector'?.15:(e.type==='warden'||e.type==='knight'||e.type==='rotknight'||e.type==='wight'||e.type==='bies'||e.type==='boginka')?.35:1)*110*kb;if(e.frozen<=0){e.vx+=nx*k;e.vy+=ny*k}
  if(Math.random()<.6)blood(e.x,e.y,2,nx||rnd(-1,1),ny||rnd(-1,1));play(ftCrit?'hitC':ftHeavy?'hitH':ftMelee&&steelEnemy(e)?'hitSteel':'hit',.05);if(e.hp<=0){if(e.type==='strzyga'&&!e.phase){e.phase=1;e.hp=e.max*.6;e.trans=1.8;e.mode=null;e.lh=0;shake(.6,.8);S.flash=.7;blood(e.x,e.y,80,0,1,3);play('bossGrowl',0);for(let i=0;i<40;i++){const a=Math.random()*Math.PI*2;S.parts.push({k:'d',x:e.x,y:e.y,z:rnd(10,40),vx:Math.cos(a)*rnd(40,120),vy:Math.sin(a)*rnd(20,60),vz:rnd(10,40),c:Math.random()<.6?'#141014':P.blood,life:rnd(.8,1.6)})}say((EN?'The Striga\'s first heart bursts. But she has two souls...':'Pierwsze serce Strzygi pęka. Ale ona ma dwie dusze...'))}else killEnemy(e,nx,ny)}return true}
// serduszko: wypada z 15% szansą z zabitego wroga, leczy 10% maks. życia (piksel-art rysowany w kodzie)
const HEART_MAT=(()=>{const c=document.createElement('canvas');c.width=c.height=16;const x=c.getContext('2d');
  const rows=['................','..XXXX....XXXX..','.XXXXXX..XXXXXX.','XXXXXXXXXXXXXXXX','XXXXXXXXXXXXXXXX','XXXXXXXXXXXXXXXX','.XXXXXXXXXXXXXX.','..XXXXXXXXXXXX..','...XXXXXXXXXX...','....XXXXXXXX....','.....XXXXXX.....','......XXXX......','.......XX.......','................','................','................'];
  rows.forEach((r,j)=>{for(let i=0;i<16;i++)if(r[i]==='X'){const edge=(j<2||!rows[j-1]||rows[j-1][i]!=='X'||rows[j][i-1]!=='X'||rows[j][i+1]!=='X'||!rows[j+1]||rows[j+1][i]!=='X');x.fillStyle=edge?'#7a0f1c':(i<5&&j<6?'#ff7a86':'#d8202f');x.fillRect(i,j,1,1)}});
  const tex=new THREE.CanvasTexture(c);tex.magFilter=tex.minFilter=THREE.NearestFilter;tex.generateMipmaps=false;return new THREE.MeshBasicMaterial({map:tex,transparent:true,alphaTest:.1,fog:false})})();
wispGlow.h=new THREE.MeshBasicMaterial({map:glowC('#ff3a4a'),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,fog:false,opacity:.3});
function awardXp(v){if(!S||!(v>0))return;S.xp+=v*S.pk.xp*DF[DIFFK].xp*1.2;S.actions.collect++;while(S.xp>=S.need){S.xp-=S.need;S.lvl++;S.need=xpNeed(S.lvl);S.pendLv++}}
function dropPick(k,x,y,v=1){if(k==='w'){awardXp(v);return}const fr=k==='c'?A.pick.c:k==='h'?{n:HEART_MAT}:A.pick[v>=5?5:v>=2?2:1];const m=new THREE.Mesh(geoC,fr.n);scene.add(m);const g=new THREE.Mesh(glowGeo,k==='c'||k==='h'?wispGlow[k]:wispGlow[v>=5?5:v>=2?2:1]);scene.add(g);
  S.picks.push({k,x,y,v,mag:false,sp:0,ph:Math.random()*6,mesh:m,glow:g})}
function killEnemy(e,nx,ny){swordOnKill(e);e.dead=true;S.kills++;if(e.mini)S.eliteK=1;storyBoss(e);if(S.trial)S.trial.k++;
  // altars (standing stones, graves, rune lanterns, offering bowls) wake up after STONE_N kills next to each; all of them: full heal and 30 coins
  if(W.stoneP&&W.altar)W.stoneP.forEach((q,i)=>{if(S.stones[i]>=STONE_N||Math.hypot(e.x-q.x,e.y-q.y)>70)return;if(++S.stones[i]<STONE_N)return;
    play('bless',0);for(let j=0;j<30;j++)S.parts.push({k:'e',x:q.x+rnd(-6,6),y:q.y,z:rnd(0,30),vx:rnd(-10,10),vy:0,vz:rnd(10,30),c:W.altar.pc,life:rnd(.8,1.6)});
    const lit=S.stones.filter(v=>v>=STONE_N).length;
    if(lit<W.stoneP.length)say(W.altar.one(lit));
    else{pl.hp=pl.max;S.coins+=30;play('coin',0);shake(.12,.5);say(W.altar.all)}});
  // barrels of black powder in the Lower City blow up when someone dies next to them
  if(CH===2)for(const p of PROPS){if(p.k!=='black_powder'||S.boom.has(p)||Math.hypot(e.x-p.x*16,e.y-p.y*16)>30)continue;S.boom.add(p);S.delayed.push({t:.15,fn:()=>powderBlast(p)})}
  const big=BIG.has(e.type),jz=e.type==='jerzak',ghost=e.type==='wisp'||e.type==='zmora'||e.type==='wraith';
  if(e.type==='wisp'){scene.remove(e.mesh);return}
  if(e.type==='wraith'&&e.stolen>0){dropPick('c',e.x,e.y,e.stolen);S.picks[S.picks.length-1].returned=true}
  if(e.type==='leszy'&&!e.dgBoss){S.stage='p2';S.leszy=null;say((EN?'Leshy crumbles into rotten wood. The forest releases you from its grip.':'Leszy rozpada się w próchno. Las wypuszcza cię z objęć.'));for(let i=0;i<30;i++)dropPick('c',e.x+rnd(-26,26),e.y+rnd(-16,16));for(let i=0;i<10;i++)dropPick('w',e.x+rnd(-20,20),e.y+rnd(-12,12),3)}
  if(e.type==='boginka'){say((EN?'The Mire Nymph sinks into the mud. All that remains is a handful of drowned men\'s coins.':'Boginka zapada się w błoto. Zostaje po niej garść monet topielców.'));for(let i=0;i<25;i++)dropPick('c',e.x+rnd(-22,22),e.y+rnd(-14,14));for(let i=0;i<5;i++)dropPick('w',e.x+rnd(-16,16),e.y+rnd(-10,10),3)}
  if(e.type==='collector'){S.collector=null;S.stage='p2';const total=Math.floor(e.stolen||0)+20,n=Math.min(40,total);say((EN?`${CH===5?'The Arch-Judge Auditor falls':'The Collector falls'}. Your gold returns to you: ${total} coins.`:`${CH===5?'Arcysędzia Rachmistrz pada':'Poborca pada'}. Złoto wraca do ciebie: ${total} monet.`));shake(.4,.5);
    for(let i=0;i<n;i++){dropPick('c',e.x+rnd(-26,26),e.y+rnd(-16,16));Object.assign(S.picks[S.picks.length-1],{v:Math.floor(total/n)+(i<total%n?1:0),returned:true})}for(let i=0;i<8;i++)dropPick('w',e.x+rnd(-20,20),e.y+rnd(-12,12),3)}
  if(jz){say((EN?'OBDYP fell by its own hand. Honour its memory.':'OBDYP poległ z własnej ręki. Cześć jego pamięci.'));shake(.3,.4);for(let i=0;i<40;i++){const a=Math.random()*Math.PI*2,sp=rnd(30,110);S.parts.push({k:'d',x:e.x,y:e.y,z:rnd(6,16),vx:Math.cos(a)*sp,vy:Math.sin(a)*sp*.6,vz:rnd(20,60),c:Math.random()<.6?'#2a1a14':'#c98a7a',life:rnd(1,2)})}
    for(let i=0;i<30;i++)dropPick('c',e.x+rnd(-26,26),e.y+rnd(-16,16));for(let i=0;i<6;i++)dropPick('w',e.x+rnd(-18,18),e.y+rnd(-12,12),2)}
  if(!ghost)blood(e.x,e.y,big?140:e.type==='warden'?4:e.type==='bat'?5:16,nx||0,ny||1,big?3:1.5);play('kill',.06);
  if(e.type==='rotknight'||e.type==='madman'){dg.fillStyle='rgba(194,74,32,.55)';dg.fillRect(Math.round(e.x)-5,Math.round(e.y)-1,10,3);decalDirty=true}
  if(e.type!=='warden'&&e.type!=='bat'&&!ghost){pool(e.x,e.y,big?36:12,big?12:5);if(DEC.spray&&Math.random()<.5)decalAt(DEC.spray[(Math.random()*4)|0],e.x+(nx||0)*10,e.y+(ny||0)*7,.85)}
  // corpse keeps the death animation and stays on the floor
  e.mesh.castShadow=false;if(e.type==='bat'){e.mesh.geometry=geo32;e.mesh.position.y=0}const ck=jz?1.5:e.type==='beast'?(A.beast.sheet?1.2:1.35):e.type==='collector'?(CH===5&&A.collectorC5?.95:1.25):e.type==='leszy'?1.25:e.type==='strzyga'?1.2:e.type==='bies'?1.15:1;S.corpses.push({mesh:e.mesh,anim:A[e.type].death,t:0,s:e.s*ck,k:ck,big,gone:ghost?1:0});
  {let n=0;for(const c of S.corpses)if(!c.big)n++;if(n>36){const i=S.corpses.findIndex(c=>!c.big);if(i>=0){const c=S.corpses.splice(i,1)[0];scene.remove(c.mesh);if(c.own)c.mesh.material.dispose()}}}
  if(big&&e.type!=='leszy'){if(S.stage==='final')S.won=true;say(e.type==='strzyga'?(EN?'Mother Striga bursts into a flock of ravens and ash. Her second heart stops beating.':'Strzyga Matka rozpada się w stado kruków i popiół. Drugie serce przestaje bić.'):e.type==='beast'?(EN?'Morhad falls onto the golden flagstones. The blood of his victims will flow from him for a long time.':'Morhad pada na złote płyty. Krew jego ofiar jeszcze długo z niego wypływa.'):CH===5?(EN?'The Creditor falls. The ledger burns, and the seals crack one after another.':'Wierzyciel pada. Rejestr płonie, a pieczęcie pękają jedna po drugiej.'):(EN?'The Outgrowth falls. Its faces are still whispering.':'Zrost pada. Jego twarze wciąż szepczą.'));if(e.type==='beast'){for(let i=0;i<6;i++)pool(e.x+rnd(-30,30),e.y+rnd(-14,14),36,12)}shake(.6,.7);for(let i=0;i<14;i++)dropPick('w',e.x+rnd(-24,24),e.y+rnd(-14,14),3);for(let i=0;i<20;i++)dropPick('c',e.x+rnd(-26,26),e.y+rnd(-16,16))}
  else if(!big){if(e.xp>0)dropPick('w',e.x,e.y,e.xp);if(Math.random()<.03)dropPick('h',e.x+rnd(-5,5),e.y+rnd(-3,3));
    if(e.mini){for(let i=0;i<3;i++){dropPick("c",e.x+rnd(-14,14),e.y+rnd(-9,9));S.picks[S.picks.length-1].v=SL.coinStrong}ftx((EN?'Elite defeated':'Elita pokonana'),e.x,e.y,ftEntH(e)+.8,'i')}
    {const strong=ET[e.type].hp>=90;if(strong||Math.random()<SL.coinDrop){dropPick('c',e.x+rnd(-4,4),e.y+rnd(-3,3));if(strong)S.picks[S.picks.length-1].v=SL.coinStrong}}}
  if(e.dgBoss)dungeonCleared(e);
}
function powderBlast(p){const x=p.x*16,y=p.y*16;if(p.obj)p.obj.mesh.visible=false;shake(.45,.4);play('quake',0);play('fire',0);S.flash=Math.max(S.flash,.35);
  if(DEC.scorch)decalAt(DEC.scorch[(Math.random()*4)|0],x,y);addVfx(A.fx.nova,.35,x,y,.08,70/8,'ground');
  for(let i=0;i<40;i++){const a=Math.random()*Math.PI*2,sp=rnd(40,140);S.parts.push({k:'e',x,y,z:rnd(2,10),vx:Math.cos(a)*sp,vy:Math.sin(a)*sp*.6,vz:rnd(10,50),c:Math.random()<.5?'#ff6a1a':'#ffb347',life:rnd(.3,.8)})}
  for(const e of [...S.enemies])if(!e.dead&&Math.hypot(e.x-x,e.y-y)<48)damageEnemy(e,BIG.has(e.type)?60:90,(e.x-x)/48,(e.y-y)/48,2);
  const d=Math.hypot(pl.x-x,pl.y-y);if(d<34)hurtPlayer(12,(pl.x-x)/(d||1),(pl.y-y)/(d||1),'powder');
  for(const q of PROPS)if(q!==p&&q.k==='black_powder'&&!S.boom.has(q)&&Math.hypot(q.x-p.x,q.y-p.y)<4){S.boom.add(q);S.delayed.push({t:.25,fn:()=>powderBlast(q)})}}
function hurtPlayer(dmg,nx,ny,source='night'){if(S.notice||pl.inv>0||pl.dead)return false;dmg*=S.pk.hurt;if(S.vuln)dmg*=S.vuln;
  if(S.attacker)[nx,ny]=incomingMelee(S.attacker,nx,ny);
  if(S.redHit&&pl.block)ftInfo((EN?'Heavy blow — dodge!':'Ciężki cios — unik!'));
  if(!S.redHit&&pl.block&&-(pl.fx*nx+pl.fy*ny)>.3){
    if(pl.blockT<parryWin()&&S.attacker&&!S.attacker.dead&&!S.redHit){const e=S.attacker;e.stun=1.4;e.sw=0;e.recov=0;onParry();pl.parryT=.45;S.hitstop=.12;padRumble(.6,.3,140);guardFeedback('parry',nx,ny);shake(.15,.15);ftInfo((EN?'Parry!':'Parowanie!'));return}
    if(S.redHit&&pl.blockT<parryWin()+.1)ftInfo((EN?'Unparryable':'Nie do sparowania'));pl.sta-=dmg*blockMulX()*(S.redHit?2.2:1);pl.staDelay=SL.delay;pl.gHitT=.25;guardFeedback('block',nx,ny);
    if(pl.sta>=0){pl.inv=.18;moveBox(pl,nx*6,ny*4,4,3);return}
    pl.sta=0;pl.broken=SL.guardBreak;pl.block=false;dmg*=.5;play('empty',0);ftInfo((EN?'Guard broken':'Garda przełamana'))}
  S.combatLock=4;S.hitsT++;pl.hp-=dmg;padRumble(.8,.5,200);pl.inv=.45;pl.hurtT=.22;S.hurt=.3;shake(.25,.18);blood(pl.x,pl.y,10,nx,ny);play('hurt',.1);
  if(pl.hp<=0){if(tryRebirth())return true;S.deathCause=deathCauseName(source);loseSecondLife();clearSwordTransient();S.swordTrails=[];pl.hp=0;pl.dead=true;pl.deadT=0;blood(pl.x,pl.y,70,nx,ny,3);play('kill',0);S.endT=2.6;pool(pl.x,pl.y,20,8)}return true}
function updEnemy(e,dt){
  keepEnemyDistance(e);const ox=e.x,oy=e.y,dx=pl.x-e.x,dy=pl.y-e.y,d=Math.hypot(dx,dy);
  if(d>.001){e.contactNX=dx/d;e.contactNY=dy/d}
  const lock=attackCue(e)!==null&&e.mode!=='up',mode=e.mode;
  stepEnemyAI(e,dt);
  if(lock&&!e.dead&&e.mode===mode){e.x=ox;e.y=oy}
  keepEnemyDistance(e,ox,oy);keepGolemDistance(e);
}
// status colour on the enemy sprite: poison green, fire orange (flickers, so it is not mistaken for a warning), bleeding crimson, chill pale blue
function statusTint(e){const l=[];if(e.burn>0)l.push('so');if(e.pois>0)l.push('sg');if(e.bleed>0)l.push('sb');if(e.chill>0)l.push('sc');if(!l.length)return null;const m=l[((clock*2.4)|0)%l.length];return m==='so'&&((clock*11)|0)%2?null:m}
function stepEnemyAI(e,dt){
  if(e.staggerCd>0)e.staggerCd=Math.max(0,e.staggerCd-dt);if(e.acd!==undefined)e.acd-=dt;
  if(e.visualHit)e.visualHit.t=Math.max(0,e.visualHit.t-dt);e.flash-=dt;e.atkA-=dt;if(e.rise>0){e.rise-=dt;return}
  if(e.bleed>0){e.bleed-=dt;e.bleedT-=dt;if(Math.random()<dt*12)S.parts.push({k:'e',x:e.x+rnd(-4,4),y:e.y,z:rnd(8,18),vx:rnd(-6,6),vy:0,vz:rnd(-4,6),c:Math.random()<.5?'#e0182c':'#8a0e18',life:.45});if(e.bleedT<=0){e.bleedT=.4;damageEnemy(e,e.bleedDmg||5,0,0,0);if(e.dead)return}}
  if(e.pois>0){e.pois-=dt;e.poisT=(e.poisT||0)-dt;if(Math.random()<dt*14)S.parts.push({k:'m',x:e.x+rnd(-4,4),y:e.y,z:rnd(6,22),vx:0,vy:0,vz:rnd(6,14),c:Math.random()<.5?'#a6ff52':'#5aa02a',life:.55});if(e.poisT<=0){e.poisT=.5;if(Math.random()<.7)S.parts.push({k:'m',x:e.x+rnd(-4,4),y:e.y,z:rnd(6,16),vx:0,vy:0,vz:rnd(4,10),c:'#8ac04a',life:.6});damageEnemy(e,e.poisD*.5,0,0,0);if(e.dead)return}}
  if(e.burn>0){e.burn-=dt;e.burnT=(e.burnT||0)-dt;if(Math.random()<dt*12)S.parts.push({k:'e',x:e.x+rnd(-4,4),y:e.y,z:rnd(4,14),vx:0,vy:0,vz:rnd(10,20),c:Math.random()<.5?'#ff6a1a':'#ffb347',life:.4});if(e.burnT<=0){e.burnT=.5;damageEnemy(e,e.burnD*.5,0,0,0);if(e.dead)return}}
  if(e.chill>0)e.chill-=dt;
  if(e.sleep){if(e.hp<e.max||Math.hypot(pl.x-e.x,pl.y-e.y)<125)wakeRoom(e);else return}
  if(e.frozen>0){e.frozen-=dt;return}
  if(e.emerge>0){e.emerge-=dt;return}
  const fly=e.type==='bat'||e.type==='zmora'||e.type==='wraith'||e.type==='courtraven'||(e.type==='strzyga'&&!e.phase);
  const hw=e.hw||e.r-1;
  if(Math.abs(e.vx)+Math.abs(e.vy)>1){if(fly){e.x+=e.vx*dt;e.y+=e.vy*dt}else moveBox(e,e.vx*dt,e.vy*dt,hw,3);const f=Math.pow(.002,dt);e.vx*=f;e.vy*=f}
  // stunned enemies still fly back from a knockback, but do nothing else
  if(e.stun>0){e.ghoulWind=0;e.stun-=dt;e.sw=0;e.chT=0;e.pull=0;e.aim=0;return}
  const T=enemyTarget(e,dt),dx=T.x-e.x,dy=T.y-e.y,d=Math.hypot(dx,dy)||1;
  if(Math.hypot(pl.x-e.x,pl.y-e.y)>480&&!BIG.has(e.type)&&e.type!=='wisp'&&e.type!=='boginka'){const p=ringSpot();if(p){e.x=p[0];e.y=p[1]}return}
  if(Math.abs(dx)>1)e.s=dx>0?1:-1;
  if(pl.dead)return;if(e.ghoulWind>0){e.ghoulWind-=dt;if(e.ghoulWind<=0){e.leap=.3;e.lhit=0;e.atkA=.3;e.lx=e.ghoulDX*82;e.ly=e.ghoulDY*82}return}
  if(e.type==='jerzak'){e.walk+=dt;e.hop=(e.hop||0)+dt;if(e.selfKill>0){e.selfKill-=dt;if(Math.random()<dt*12)shake(.08,.05);if(e.selfKill<=0){e.hp=0;killEnemy(e,0,1)}return}}
  if(e.type==='collector'){e.stealCd=(e.stealCd||0)-dt;e.drain=(e.drain||0)-dt;e.hurtA=(e.hurtA||0)-dt;e.hurtCd=(e.hurtCd||0)-dt;e.tauntA=(e.tauntA||0)-dt;e.tauntCd=(e.tauntCd===undefined?4:e.tauntCd)-dt;
    if(e.tauntCd<=0&&e.stolen>0&&d>90){e.tauntCd=rnd(6,9);e.tauntA=1}
    if(e.stealWind>0){e.stealWind-=dt;if(e.stealWind<=0&&d<e.r+15){S.attacker=e;const hit=hitT(e,enemyDamage(12,0),dx/d,dy/d);S.attacker=null;if(hit){const n=Math.min(S.coins,Math.max(3,Math.floor(S.coins*.15)));S.coins-=n;e.stolen+=n;if(n)ftInfo('−'+n+(EN?' coins':' monet'))}}}
    else if(d<e.r+10&&e.stealCd<=0&&(golemTgt(e)||pl.inv<=0)){e.stealWind=.65;e.stealCd=2;telegraph(e)}
    else if(!golemTgt(e)&&d<56&&e.drain<=0&&S.coins>0&&pl.inv<=0&&sight(e.x,e.y,T.x,T.y)){e.drain=1;e.drainAt=clock;S.coins--;e.stolen++;S.parts.push({k:'g2',x:pl.x,y:pl.y,z:10,tx:e,life:.6,c:'#e0b84a'})}}

  if(e.type==='collector'&&CH===5&&A.collectorC5){// Arcysędzia Rachmistrz: wyrok młotem, strony nakazu, wezwanie ławników
    e.hamCd=(e.hamCd===undefined?4:e.hamCd)-dt;e.sumCd=(e.sumCd===undefined?15:e.sumCd)-dt;e.fanCd=(e.fanCd===undefined?3:e.fanCd)-dt;
    if(e.hamT>0){e.hamT-=dt;e.tauntA=.2;if(e.hamT<=0){shake(.5,.4);play('slam',0);addVfx(A.fx.nova,.35,e.x,e.y,.08,60/8,'ground');if(pl.inv<=0)aoeP(e,56,enemyDamage(20));e.atkA=.4;
        for(let i=0;i<20;i++){const a=i/20*Math.PI*2;S.parts.push({k:'d',x:e.x+Math.cos(a)*12,y:e.y+Math.sin(a)*6,z:1,vx:Math.cos(a)*90,vy:Math.sin(a)*45,vz:18,c:'#e0b84a',life:.6})}}return}
    if(d<64&&e.hamCd<=0&&!(e.stealWind>0)){e.hamT=.7;e.hamCd=5.5;telegraph(e);for(let k=0;k<3;k++)telegraph(e);play('bossGrowl',0);return}
    if(e.sumCd<=0&&S.enemies.length<ENEMY_CAP-6){e.sumCd=22;e.tauntA=.8;say((EN?'The Arch-Judge summons the jurors: "The sentence is already written."':'Arcysędzia wzywa ławników: „Wyrok jest już spisany”.'));for(let k=0;k<2;k++){const a=Math.random()*6.28,q=spawnEnemy('scribe',e.x+Math.cos(a)*26,e.y+Math.sin(a)*16);q.rise=.8}}
    if(e.fanWind>0){e.fanWind-=dt;if(e.fanWind<=0){for(const o of [-.25,0,.25])S.eproj.push({source:{type:e.type,chapter:CH},x:e.x,y:e.y,vx:Math.cos(e.fanAim+o)*95,vy:Math.sin(e.fanAim+o)*95,life:2.4,bolt:1});e.atkA=.35;play('swing',.2)}return}
    if(e.fanCd<=0&&d>70&&d<210&&sight(e.x,e.y,T.x,T.y)){e.fanCd=4.8;e.fanWind=.75;e.fanAim=Math.atan2(dy,dx);telegraph(e);return}}
  if(e.type==='beast'&&beastAI(e,dx,dy,d,dt))return;
  if(CZAI[e.type]&&CZAI[e.type](e,dx,dy,d,dt,hw))return;
  if(e.type==='monk'){e.cast=(e.cast===undefined?rnd(1,2.5):e.cast)-dt;
    const mFire=()=>{e.atkA=.35;S.eproj.push({source:{type:e.type,chapter:CH},x:e.x,y:e.y,vx:dx/d*74,vy:dy/d*74,life:2.6,ph:Math.random(),mesh:A.fireball?(()=>{const m=new THREE.Mesh(geoC,A.fireball[0].n);scene.add(m);return m})():null});play('fire',.2)};
    if(e.aim>0){e.aim-=dt;if(e.aim<=0&&d>1&&sight(e.x,e.y,T.x,T.y))mFire()}
    else if(d<140&&e.cast<=0&&sight(e.x,e.y,T.x,T.y)&&(S.enemyShotCd||0)<=0){e.aim=SL.aim;e.cast=rnd(4,5);S.enemyShotCd=SL.shotGap+SL.aim;telegraph(e)}
    if(d<64){moveBox(e,-dx/d*e.spd*dt,-dy/d*e.spd*dt,hw,3);e.walk+=dt;return}if(d<110){e.walk+=dt*.3;return}}
  if(!BIG.has(e.type)&&e.type!=='collector'&&e.type!=='jerzak'&&e.type!=='wisp'&&e.dmg>0&&e.leap<=0){if(slashEnemy(e,dx,dy,d,dt)){e.walk+=dt*.2;return}}
  else if(d<e.r+6&&e.dmg>0&&e.type!=='collector'&&BIG.has(e.type)){
    if(BIG.has(e.type)){if(!(e.ctw>0)&&!(e.ccd>0)){e.ctw=.4;for(let k=0;k<3;k++)telegraph(e)}}// boss: zapowiedź .4 s, potem przerwa 1,4 s (unik w tym czasie ratuje)
    else{hitT(e,enemyDamage(e.dmg,480),dx/d,dy/d);if(e.atkA<=0)e.atkA=.35}}
  if(BIG.has(e.type)){if(e.ccd>0)e.ccd-=dt;if(e.ctw>0){e.ctw-=dt;if(e.ctw<=0){e.ccd=1.4;if(d<e.r+10){hitT(e,enemyDamage(e.dmg,480),dx/d,dy/d,true);e.atkA=.35}}}}
  if(e.type==='boss'&&CH===5&&A.bossC5){// Wierzyciel: faza I (strony), faza II (po połowie życia: monety, wyrok, szybszy)
    for(const k of ['lashF','castF','callF','slamF'])if(e[k]>0)e[k]-=dt;
    if(!e.ph2&&e.hp<e.max*.5){e.ph2=1;e.trans=1.6;e.ctw=0;e.ccd=2;e.atkT=0;e.castWind=0;e.cast=2;e.spd*=1.35;shake(.7,.8);play('bossGrowl',0);addVfx(A.fx.nova,.6,e.x,e.y,.08,80/8,'ground');say((EN?'The Creditor rises from the throne. The chains snap, and a new ledger opens in his hands.':'Wierzyciel wstaje z tronu. Łańcuchy pękają, a w jego dłoniach otwiera się nowa księga.'));
      for(let i=0;i<20;i++){const a=i/20*Math.PI*2;S.parts.push({k:'d',x:e.x,y:e.y,z:6,vx:Math.cos(a)*70,vy:Math.sin(a)*35,vz:22,c:'#e0b84a',life:.7})}}
    if(e.trans>0){e.trans-=dt;return}
    e.cast=(e.cast===undefined?3:e.cast)-dt;
    if(e.castWind>0){e.castWind-=dt;if(e.castWind<=0){if(!e.ph2){for(const o of [-.32,0,.32])S.eproj.push({source:{type:e.type,chapter:CH},x:e.x,y:e.y,vx:Math.cos(e.castAim+o)*90,vy:Math.sin(e.castAim+o)*90,life:2.8,bolt:1});e.castF=.4}else{e.ringOff=(e.ringOff||0)+.31;for(let i=0;i<12;i++){const a=i/12*Math.PI*2+e.ringOff;S.eproj.push({source:{type:e.type,chapter:CH},x:e.x,y:e.y,vx:Math.cos(a)*78,vy:Math.sin(a)*78,life:2.6,bolt:1})}e.callF=.4}play('swing',.2)}return}
    if(e.cast<=0&&d<240&&sight(e.x,e.y,T.x,T.y)){e.cast=e.ph2?3.4:4.2;e.castWind=e.ph2?.9:.75;e.castAim=Math.atan2(dy,dx);telegraph(e);return}
  }

  if(BIG.has(e.type)){
    if(e.atkT>0){e.atkT-=dt;if(e.atkT<=0){e.atkA=.4;shake(.5,.35);play('slam',0);addVfx(A.fx.nova,.35,e.x,e.y,.08,54/8,'ground');aoeP(e,54,enemyDamage(e.type==='beast'?24:20));
      for(let i=0;i<24;i++){const a=i/24*Math.PI*2;S.parts.push({k:'d',x:e.x+Math.cos(a)*12,y:e.y+Math.sin(a)*6,z:1,vx:Math.cos(a)*90,vy:Math.sin(a)*45,vz:18,c:P.st3,life:.6})}}return}
    e.slamT-=dt;if(e.slamT<=0&&d<80){e.slamT=e.ph2?2.4:3.4;e.slamF=.8;e.atkT=.8;play('bossGrowl',0);return}
  }
  let sp=e.spd*(e.chill>0?e.chillMul||.6:1);if(e.type==='madman'){sp*=.4+1.1*Math.abs(Math.sin(e.walk*4.3+e.ph));e.side=Math.sin(clock*2+e.ph)>0?1:-1}if(e.type==='dwarf'||e.type==='possessed')sp*=.65+.6*Math.abs(Math.sin(e.walk*3));
  if(e.type==='ghoul'||e.type==='hound'||e.type==='wolf'||e.type==='strzygon'||e.type==='paperrat'){e.lcd-=dt;if(e.leap>0){e.leap-=dt;moveBox(e,e.lx*dt,e.ly*dt,4,3);e.walk+=dt*2;if(!e.lhit&&d<e.r+9){e.lhit=1;S.attacker=e;hitT(e,enemyDamage(e.dmg*SL.enemyHit,SL.dmgDiv),dx/d,dy/d);S.attacker=null}return}if(d<52&&d>22&&e.lcd<=0){if(e.type==='ghoul'&&CH===1){e.ghoulWind=.35;e.ghoulDX=dx/d;e.ghoulDY=dy/d;e.lcd=4.5+Math.random()*1.7;telegraph(e);return}e.leap=.3;e.lhit=0;e.atkA=.3;e.lx=dx/d*105;e.ly=dy/d*105;e.lcd=3.2+Math.random()*1.5;return}}
  let mx=dx/d,my=dy/d;
  if(fly){const w=Math.sin(clock*5+e.ph)*1.2,c=Math.cos(w),s=Math.sin(w);[mx,my]=[mx*c-my*s,mx*s+my*c]}
  for(const o of nearbyEnemies(e)){if(o===e||o.dead)continue;const ox=e.x-o.x,oy=e.y-o.y;if(Math.abs(ox)>24||Math.abs(oy)>24)continue;const od=Math.hypot(ox,oy),min=e.r+o.r+1;if(od<min&&od>0){mx+=ox/od*.9;my+=oy/od*.9}}
  const ml=Math.hypot(mx,my)||1;
  if(fly){e.x+=mx/ml*sp*dt;e.y+=my/ml*sp*dt}else{const ox=e.x,oy=e.y;moveBox(e,mx/ml*sp*dt,my/ml*sp*dt,hw,3);if(Math.hypot(e.x-ox,e.y-oy)<sp*dt*.3){moveBox(e,-my/ml*sp*dt*1.3*e.side,mx/ml*sp*dt*1.3*e.side,hw,3);if(Math.random()<dt*.5)e.side*=-1}}
  e.walk+=dt;
}
// Morhad: charges in a straight line, slams up close, and once wounded leaps from above onto the hero
function beastAI(e,dx,dy,d,dt){
  if(Math.random()<dt*22)S.parts.push({k:'b',x:e.x+rnd(-12,12),y:e.y+rnd(-3,3),z:rnd(14,40)+(e.lh||0)*16,vx:rnd(-6,6),vy:rnd(-3,3),vz:rnd(-10,5),c:Math.random()<.7?P.blood:P.blood2});
  if(e.roarT>0){e.roarT-=dt;return true}
  if(!e.enraged&&e.hp<e.max*.5){e.enraged=true;e.roarT=1.4;e.spd*=1.25;e.mode=null;e.atkA=.6;e.lT=1.5;shake(.5,.8);play('bossGrowl',0);S.flash=.8;blood(e.x,e.y,60,0,1,3);say((EN?'Morhad spreads his wings. Horns tear through his skin and keep growing.':'Morhad rozkłada skrzydła. Rogi rozrywają mu skórę i rosną dalej.'))}
  const hit=k=>{const ddx=pl.x-e.x,ddy=pl.y-e.y,dd=Math.hypot(ddx,ddy)||1;hurtPlayer(enemyDamage(k),ddx/dd,ddy/dd,e)};
  if(e.mode==='wind'){e.mt-=dt;e.atkA=.15;if(e.mt<=0){e.mode='charge';e.mt=.85;play('roll',0)}return true}
  if(e.mode==='charge'){e.mt-=dt;const ox=e.x,oy=e.y;moveBox(e,e.cx*200*dt,e.cy*200*dt,e.hw,3);e.walk+=dt*3;
    if(Math.random()<dt*14)pool(e.x+rnd(-4,4),e.y+rnd(-2,2),10,4);
    if(d<e.r+8&&golemTgt(e))golemHurt(e.tg,enemyDamage(26));else if(d<e.r+8&&pl.inv<=0){hit(26);moveBox(pl,e.cx*16,e.cy*12,4,3);shake(.4,.3)}
    if(Math.hypot(e.x-ox,e.y-oy)<200*dt*.3){e.mt=0;shake(.4,.3);play('slam',0)}
    if(e.mt<=0){e.mode=null;e.cT=rnd(3,4.5)}return true}
  if(e.mode==='up'){e.mt-=dt;e.lh=Math.min(4,(e.lh||0)+dt*9);
    if(Math.random()<dt*40){const a=Math.random()*Math.PI*2;S.parts.push({k:'d',x:e.tx+Math.cos(a)*34,y:e.ty+Math.sin(a)*20,z:1,vx:0,vy:0,vz:3,c:warningColor(),life:.4})}
    if(e.mt<=0){e.mode='down';e.mt=.3;e.x=e.tx;e.y=e.ty}return true}
  if(e.mode==='down'){e.mt-=dt;e.lh=Math.max(0,e.lh-dt*14);if(e.mt<=0){e.lh=0;e.mode=null;e.lT=rnd(6,8);e.atkA=.5;shake(.7,.5);play('slam',0);
    addVfx(A.fx.nova,.4,e.x,e.y,.08,70/8,'ground');if(DEC.crack)decalAt(DEC.crack[2],e.x,e.y);pool(e.x,e.y,30,10);if(Math.hypot(pl.x-e.x,pl.y-e.y)<70)hit(26);
    for(let i=0;i<30;i++){const a=i/30*Math.PI*2;S.parts.push({k:'d',x:e.x+Math.cos(a)*14,y:e.y+Math.sin(a)*7,z:1,vx:Math.cos(a)*110,vy:Math.sin(a)*55,vz:20,c:Math.random()<.5?P.blood:P.st3,life:.6})}}return true}
  if(e.atkT>0)return false;
  e.cT-=dt;if(e.enraged)e.lT-=dt;
  if(e.enraged&&e.lT<=0&&d<230){e.mode='up';e.mt=.9;e.tx=e.x+dx;e.ty=e.y+dy;play('bossGrowl',0);return true}
  if(e.cT<=0&&d>56&&d<240){e.mode='wind';e.mt=.7;e.cx=dx/d;e.cy=dy/d;play('bossGrowl',0);shake(.15,.6);return true}
  return false}
// chapter IV behaviours; return true when the enemy is done for this frame
const CZAI={
  // crossbowman keeps his distance and shoots bolts
  xbow(e,dx,dy,d,dt,hw){e.cast=(e.cast===undefined?rnd(1,2.5):e.cast)-dt;
    if(e.aim>0){e.aim-=dt;if(e.aim<=0&&d>1&&sight(e.x,e.y,e.x+dx,e.y+dy)){e.atkA=.35;S.eproj.push({source:{type:e.type,chapter:CH},x:e.x,y:e.y,vx:dx/d*110,vy:dy/d*110,life:2.2,bolt:1});play('swing',.2)}}
    else if(d<170&&e.cast<=0&&sight(e.x,e.y,e.x+dx,e.y+dy)&&(S.enemyShotCd||0)<=0){e.aim=SL.aim;e.cast=rnd(4,5);S.enemyShotCd=SL.shotGap+SL.aim;telegraph(e)}
    if(d<70){moveBox(e,-dx/d*e.spd*dt,-dy/d*e.spd*dt,hw,3);e.walk+=dt;return true}if(d<125){e.walk+=dt*.3;return true}return false},
  // chapter V: the scribe shoots like the crossbowman, the account wraith drains coins on touch
  scribe(e,dx,dy,d,dt,hw){return CZAI.xbow(e,dx,dy,d,dt,hw)},
  // chapter V: the debtor throws a chain and drags the hero to him
  debtor(e,dx,dy,d,dt){e.chCd=(e.chCd===undefined?rnd(3,6):e.chCd)-dt;
    if(e.chT>0){e.chT-=dt;if(e.chT<=0){const a=e.chainAim,along=dx*a[0]+dy*a[1],side=Math.abs(dx*a[1]-dy*a[0]);if(pl.inv>0||pl.roll>0||d>140||along<0||side>15||!sight(e.x,e.y,pl.x,pl.y)){e.chCd=4;ftx((EN?'Chain missed':'Łańcuch chybił'),e.x,e.y,2,'i')}else e.pull=.3}return true}
    if(e.pull>0){if(pl.inv>0||pl.roll>0||d>150||!sight(e.x,e.y,pl.x,pl.y)){e.pull=0;e.chCd=5;return true}e.pull-=dt;moveBox(pl,-dx/d*140*dt,-dy/d*140*dt,4,3);
      for(let i=1;i<=8;i++){const t=i/8;S.parts.push({k:'d',x:e.x+(pl.x-e.x)*t,y:e.y+(pl.y-e.y)*t,z:8,vx:0,vy:0,vz:0,c:'#dce7ef',life:.1})}
      if(e.pull<=0||d<e.r+8){e.pull=0;e.chCd=rnd(6,8);if(d<e.r+14)hurtPlayer(enemyDamage(8),dx/d,dy/d,e)}return true}
    if(!golemTgt(e)&&d>46&&d<125&&e.chCd<=0&&pl.inv<=0&&sight(e.x,e.y,pl.x,pl.y)){e.chainAim=[dx/d,dy/d];e.chT=.7;e.chCd=6;telegraph(e);return true}return false},
  wraith(e,dx,dy,d,dt){e.dcd=(e.dcd||0)-dt;
    if(e.drainWind>0){e.drainWind-=dt;if(e.drainWind<=0&&d<e.r+14){S.attacker=e;const hit=hitT(e,enemyDamage(e.dmg,SL.dmgDiv),dx/d,dy/d);S.attacker=null;if(hit&&S.coins>0){const n=Math.min(S.coins,3+Math.floor(Math.min(S.t,NIGHT)/180));S.coins-=n;e.stolen=(e.stolen||0)+n;ftInfo('−'+n+(EN?' coins — you will get them back after the fight':' monet — odzyskasz je po walce'))}}return true}
    if(d<e.r+9&&e.dcd<=0&&(golemTgt(e)||pl.inv<=0)){e.drainWind=.6;e.dcd=2.5;telegraph(e);return true}return false},

  // drowned corpse grabs and holds the hero for a moment
  drowner(e,dx,dy,d,dt){e.gcd=(e.gcd||0)-dt;
    {if(e.tw>0){e.tw-=dt;if(e.tw>0)return false;if(d>=e.r+14||(!golemTgt(e)&&pl.inv>0))return false}else if(d<e.r+8&&e.gcd<=0&&(golemTgt(e)||pl.inv<=0)){e.tw=.3;e.gcd=2.6;telegraph(e);return false}else return false}
    {e.gcd=2.6;e.atkA=.45;if(golemTgt(e)){golemHurt(e.tg,enemyDamage(9,SL.dmgDiv));return false}S.snare=.8;hurtPlayer(enemyDamage(9,SL.dmgDiv),dx/d,dy/d,e);for(let i=0;i<10;i++)S.parts.push({k:'d',x:pl.x+rnd(-6,6),y:pl.y,z:rnd(0,6),vx:rnd(-20,20),vy:0,vz:rnd(10,24),c:'#2e3e3a',life:.5})}return false},
  // nightmare drains a stamina charge on touch
  zmora(e,dx,dy,d,dt){e.dcd=(e.dcd||0)-dt;const zg=golemTgt(e);if(!zg&&(pl.inv>0||pl.roll>0))return false;
    {if(e.tw>0){e.tw-=dt;if(e.tw>0)return false;if(d>=e.r+14)return false}else if(d<e.r+8&&e.dcd<=0){e.tw=.3;e.dcd=2.2;telegraph(e);return false}else return false}
    {e.dcd=2.2;e.atkA=.4;if(zg)golemHurt(e.tg,enemyDamage(e.dmg,SL.dmgDiv));else{pl.sta=Math.max(0,pl.sta-35);pl.staDelay=1;S.stamFlash=.5}}return false},
  // false will-o'-wisp waits; when you come close it flares and bursts
  wisp(e,dx,dy,d,dt){e.walk+=dt;if(e.boom>0){e.boom-=dt;if(e.boom<=0){if(d<38)hurtPlayer(enemyDamage(14),dx/d,dy/d,e);shake(.2,.25);play('fire',0);for(let i=0;i<26;i++){const a=i/26*Math.PI*2;S.parts.push({k:'e',x:e.x,y:e.y,z:8,vx:Math.cos(a)*90,vy:Math.sin(a)*50,vz:rnd(5,25),c:Math.random()<.5?'#7fffd0':'#d8ffe8',life:rnd(.3,.6)})}e.xp=0;e.hp=0;killEnemy(e,0,1)}return true}
    if(d<30){e.boom=.55;play('pick',0)}return true},
  // horned demon charges with lowered horns
  bies(e,dx,dy,d,dt,hw){e.cT=(e.cT===undefined?2:e.cT)-dt;
    if(e.mode==='wind'){e.mt-=dt;if(e.mt<=0){e.mode='charge';e.mt=.65;play('roll',0)}return true}
    if(e.mode==='charge'){e.mt-=dt;const ox=e.x,oy=e.y;moveBox(e,e.cx*175*dt,e.cy*175*dt,hw,3);e.walk+=dt*3;if(d<e.r+8&&golemTgt(e))golemHurt(e.tg,enemyDamage(22));else if(d<e.r+8&&pl.inv<=0){hurtPlayer(enemyDamage(22),e.cx,e.cy,e);moveBox(pl,e.cx*12,e.cy*9,4,3)}
      if(e.mt<=0||Math.hypot(e.x-ox,e.y-oy)<175*dt*.3){e.mode=null;e.cT=rnd(3,4.5)}return true}
    if(e.cT<=0&&d>40&&d<190){e.mode='wind';e.mt=.6;e.cx=dx/d;e.cy=dy/d;play('growl',0);return true}return false},
  leszy:leszyAI,strzyga:strzygaAI};
// Leszy, Lord of the Wild Wood: calls wolves, strikes with roots from below, steps into one tree and out of another
function leszyAI(e,dx,dy,d,dt){
  if(Math.random()<dt*5)S.parts.push({k:'m',x:e.x+rnd(-10,10),y:e.y+rnd(-3,3),z:rnd(20,50),vx:rnd(-4,4),vy:0,vz:rnd(-6,-2),c:Math.random()<.5?'#4a5e3a':'#3a2a1c',life:rnd(1,2)});
  e.sT=(e.sT===undefined?3:e.sT)-dt;e.rT=(e.rT===undefined?2:e.rT)-dt;e.tT=(e.tT===undefined?7:e.tT)-dt;
  if(e.mode==='merge'){e.mt-=dt;e.inv=1;if(e.mt<=0){const tr=(W.treeP||[]).filter(q=>{const k=Math.hypot(q.x-pl.x,q.y-pl.y);return k>60&&k<170}),q=tr[(Math.random()*tr.length)|0];
      if(q){e.x=q.x+rnd(-4,4);e.y=q.y+8}e.mode='emerge';e.mt=.6;play('rise',0)}return true}
  if(e.mode==='emerge'){e.mt-=dt;if(e.mt<=0){e.mode=null;e.inv=0}return true}
  if(e.mode==='summon'){e.mt-=dt;if(e.mt<=0){e.mode=null;for(let i=0;i<3;i++){const a=Math.random()*Math.PI*2;spawnEnemy('wolf',e.x+Math.cos(a)*30,e.y+Math.sin(a)*20,{rise:.4})}}return true}
  if(e.mode==='root'){e.mt-=dt;if(Math.random()<dt*40){const a=Math.random()*Math.PI*2;S.parts.push({k:'d',x:e.tx+Math.cos(a)*30,y:e.ty+Math.sin(a)*18,z:1,vx:0,vy:0,vz:3,c:warningColor(),life:.4})}
    if(e.mt<=0){e.mode=null;e.atkA=.4;shake(.3,.3);play('quake',0);if(DEC.crack)decalAt(DEC.crack[(Math.random()*4)|0],e.tx,e.ty);if(Math.hypot(pl.x-e.tx,pl.y-e.ty)<32)hurtPlayer(enemyDamage(18),0,1,e);
      for(let i=0;i<26;i++){const a=Math.random()*Math.PI*2;S.parts.push({k:'d',x:e.tx+Math.cos(a)*rnd(0,22),y:e.ty+Math.sin(a)*rnd(0,13),z:1,vx:Math.cos(a)*20,vy:0,vz:rnd(30,70),c:Math.random()<.6?'#3a2a1c':'#5a4330',life:rnd(.5,.9)})}}return true}
  if(e.atkT>0)return false;
  if(e.tT<=0&&d>60&&W.treeP&&W.treeP.length){e.mode='merge';e.mt=.8;e.tT=rnd(8,11);return true}
  if(e.sT<=0){e.mode='summon';e.mt=.9;e.sT=rnd(10,13);play('howl',0);return true}
  if(e.rT<=0&&d<220){e.mode='root';e.mt=.9;e.tx=e.x+dx;e.ty=e.y+dy;e.rT=rnd(4,5.5);play('bossGrowl',0);return true}
  return false}
// the Strzyga Mother: first soul flies, screams (slows you) and dives with her talons; second soul crawls, leaps and raises barrow wights
function strzygaAI(e,dx,dy,d,dt){
  if(Math.random()<dt*8)S.parts.push({k:'d',x:e.x+rnd(-18,18),y:e.y+rnd(-6,6),z:rnd(20,50),vx:rnd(-20,20),vy:0,vz:rnd(-2,8),c:'#141014',life:rnd(.6,1.2)});
  if(e.trans>0){e.trans-=dt;if(e.trans<=0){e.phase=2;e.spd=30;e.roarT=1.2;e.lT=2.5;e.wT=4;play('bossGrowl',0);shake(.4,.8);say((EN?'The Striga rises with her second soul. She crawls on all fours, faster than before.':'Strzyga wstaje z drugą duszą. Pełznie na czworakach, szybsza niż przedtem.'))}return true}
  if(e.roarT>0){e.roarT-=dt;return true}
  if(e.phase!==2){e.scT=(e.scT===undefined?4:e.scT)-dt;e.cT=(e.cT===undefined?3:e.cT)-dt;e.bT=(e.bT===undefined?7:e.bT)-dt;
    if(e.mode==='scream'){e.mt-=dt;if(e.mt<=0){e.mode=null;if(Math.hypot(pl.x-e.x,pl.y-e.y)<180){S.slowT=2.5;ftInfo((EN?'Slow':'Spowolnienie'))}for(let i=0;i<36;i++){const a=i/36*Math.PI*2;S.parts.push({k:'d',x:e.x+Math.cos(a)*10,y:e.y+Math.sin(a)*6,z:16,vx:Math.cos(a)*140,vy:Math.sin(a)*70,vz:0,c:'#c8d2dc',life:.6})}}return true}
    if(e.mode==='wind'){e.mt-=dt;if(e.mt<=0){e.mode='dive';e.mt=.5}return true}
    if(e.mode==='dive'){e.mt-=dt;e.x+=e.cx*190*dt;e.y+=e.cy*190*dt;e.x=Math.max(30,Math.min(WW-30,e.x));e.y=Math.max(30,Math.min(WH-30,e.y));if(d<e.r+8&&golemTgt(e))golemHurt(e.tg,enemyDamage(22));else if(d<e.r+8&&pl.inv<=0)hurtPlayer(enemyDamage(22),e.cx,e.cy,e);if(e.mt<=0){e.mode=null;e.cT=rnd(3,4.5)}return true}
    if(e.scT<=0&&d<170){e.mode='scream';e.mt=.8;e.scT=rnd(7,9);play('bossGrowl',0);return true}
    if(e.bT<=0){e.bT=rnd(9,12);for(let i=0;i<4;i++)spawnEnemy('bat',e.x+rnd(-20,20),e.y+rnd(-12,12))}
    if(e.cT<=0&&d>40&&d<210){e.mode='wind';e.mt=.45;e.cx=dx/d;e.cy=dy/d;play('growl',0);return true}
    return false}
  e.lT-=dt;e.wT-=dt;
  if(e.mode==='up'){e.mt-=dt;e.lh=Math.min(4,(e.lh||0)+dt*9);if(Math.random()<dt*40){const a=Math.random()*Math.PI*2;S.parts.push({k:'d',x:e.tx+Math.cos(a)*34,y:e.ty+Math.sin(a)*20,z:1,vx:0,vy:0,vz:3,c:warningColor(),life:.4})}
    if(e.mt<=0){e.mode='down';e.mt=.3;e.x=e.tx;e.y=e.ty}return true}
  if(e.mode==='down'){e.mt-=dt;e.lh=Math.max(0,e.lh-dt*14);if(e.mt<=0){e.lh=0;e.mode=null;e.atkA=.5;shake(.6,.5);play('slam',0);addVfx(A.fx.nova,.4,e.x,e.y,.08,64/8,'ground');if(Math.hypot(pl.x-e.x,pl.y-e.y)<62)hurtPlayer(enemyDamage(24),0,1,e);pool(e.x,e.y,24,8)}return true}
  if(e.mode==='raise'){e.mt-=dt;if(Math.random()<dt*30)S.parts.push({k:'m',x:e.x+rnd(-40,40),y:e.y+rnd(-20,20),z:0,vx:0,vy:0,vz:rnd(6,14),c:'#4a7a5a',life:rnd(.6,1.2)});if(e.mt<=0){e.mode=null;for(let i=0;i<3;i++){const a=Math.random()*Math.PI*2;spawnEnemy('wight',e.x+Math.cos(a)*44,e.y+Math.sin(a)*26,{rise:1})}play('rise',0)}return true}
  if(e.atkT>0)return false;
  if(e.lT<=0&&d<240){e.mode='up';e.mt=.8;e.tx=e.x+dx;e.ty=e.y+dy;e.lT=rnd(4.5,6);play('bossGrowl',0);return true}
  if(e.wT<=0){e.mode='raise';e.mt=1;e.wT=rnd(11,14);play('growl',0);return true}
  return false}
const warningColor=()=>SETT.contrast?'#ffe270':'#ff5a4e';
function telegraph(e){S.parts.push({k:'e',x:e.x,y:e.y,z:26,vx:0,vy:0,vz:4,c:warningColor(),life:.45});e.atkA=.2}
function updEproj(dt){S.enemyShotCd=Math.max(0,(S.enemyShotCd||0)-dt);for(let i=S.eproj.length-1;i>=0;i--){const f=S.eproj[i];f.life-=dt;f.x+=f.vx*dt;f.y+=f.vy*dt;
  if(f.bolt){const ar=!!(f.source&&(f.source.type==='xbow'||f.source.type==='scribe'));if(!f.vfe&&skFrames(ar?'bolt':'boss')){addVfx(skLoop(skFrames(ar?'bolt':'boss'),f.life,10),f.life,f.x,f.y,.5,ar?.95:.8,'bill',-screenAng(f.vx,f.vy));f.vfe=S.vfx[S.vfx.length-1]}if(f.vfe){f.vfe.x=f.x;f.vfe.y=f.y}}
  if(f.bolt)S.parts.push({k:'d',x:f.x,y:f.y,z:9,vx:0,vy:0,vz:0,c:'#d8cfb8',life:.12});
  else for(let k=0;k<(f.mesh?1:3);k++)S.parts.push({k:'e',x:f.x+rnd(-2,2),y:f.y+rnd(-1,1),z:9+rnd(-2,2),vx:rnd(-4,4),vy:0,vz:rnd(2,8),c:k?'#ff6a1a':'#ffb347',life:rnd(.15,.35)});
  let gone=f.life<=0||solidAt(f.x,f.y);
  {const G=S.swordGuardian;if(!gone&&G&&!G.gone&&Math.hypot(G.x-f.x,G.y-f.y)<SL.guard.r+3){golemHurt(G,enemyDamage(f.bolt?6:7,SL.projDiv));gone=true}}
  if(!gone&&!pl.dead&&Math.hypot(pl.x-f.x,pl.y-f.y)<8){const sp=Math.hypot(f.vx,f.vy)||1,nx=f.vx/sp,ny=f.vy/sp;
    if(pl.block&&pl.inv<=0&&-(pl.fx*nx+pl.fy*ny)>.3&&pl.blockT<parryWin()+.06){onParry();pl.parryT=.45;S.hitstop=.12;padRumble(.6,.3,140);guardFeedback('parry',nx,ny,f);shake(.15,.15);ftInfo((EN?'Deflected!':'Odbicie!'))}
    else hurtPlayer(enemyDamage(f.bolt?6:7,SL.projDiv),nx,ny,f.source||(f.bolt?'night':'fire'));gone=true}
  if(gone&&f.bolt){if(f.vfe)f.vfe.t=f.vfe.dur;if(f.source&&(f.source.type==='xbow'||f.source.type==='scribe'))skAdd('boltHit',.3,f.x,f.y,.5,.7,'bill');for(let k=0;k<5;k++)S.parts.push({k:'d',x:f.x,y:f.y,z:8,vx:rnd(-30,30),vy:rnd(-15,15),vz:rnd(5,20),c:'#9d9584',life:.3});S.eproj.splice(i,1);continue}
  if(gone){for(let k=0;k<12;k++)S.parts.push({k:'e',x:f.x,y:f.y,z:8,vx:rnd(-40,40),vy:rnd(-25,25),vz:rnd(5,30),c:Math.random()<.5?'#ff6a1a':'#ffb347',life:rnd(.2,.5)});if(f.mesh)scene.remove(f.mesh);if(f.vfe)f.vfe.t=f.vfe.dur;S.eproj.splice(i,1)}}}
// player sword strikes (light/heavy, cascade, whirl) are stopped only by walls/cliffs, not by prop tiles (31) whose collision box is bigger than the sprite (cache 200)
function sightSword(x0,y0,x1,y1){const n=Math.ceil(Math.hypot(x1-x0,y1-y0)/8);for(let i=1;i<n;i++){const px=x0+(x1-x0)*i/n,py=y0+(y1-y0)*i/n,t=tileAt(Math.floor(px/TS),Math.floor(py/TS));if(t!==31&&SOLID.has(t))return false}return true}
function sight(x0,y0,x1,y1){const n=Math.ceil(Math.hypot(x1-x0,y1-y0)/8);for(let i=1;i<n;i++)if(solidAt(x0+(x1-x0)*i/n,y0+(y1-y0)*i/n))return false;return true}
function spawnTick(dt){
  if(pl.dead||S.phase!=='play'||S.opening||S.stage==='break'||S.dg)return;S.spawnT-=dt;if(S.spawnT>0)return;S.spawnT=.5;
  const target=spawnTarget();// will-o'-wisps sit far away on the marsh and must not take up places in the cap
  let n=Math.min(5,Math.floor(target-S.enemies.filter(e=>e.type!=='wisp').length));
  while(n-->0){const p=ringSpot()||ringSpot(170,260);if(!p)continue;const r=Math.random(),t=S.t;
    if(CH===5){if(!sight(p[0],p[1],pl.x,pl.y)){const q=ringSpot(150,230);if(!q||!sight(q[0],q[1],pl.x,pl.y))continue;p[0]=q[0];p[1]=q[1]}
      if(t<12){n=0;continue}
      const rg=W.region(Math.floor(p[0]/TS),Math.floor(p[1]/TS));
      const T={dziedziniec:[['guard',55,0],['condemned',25,0],['courtraven',20,20]],kancelaria:[['scribe',38,30],['paperrat',30,0],['guard',20,0],['bookgolem',12,150]],
        sala:[['executioner',14,120],['guard',38,0],['scribe',24,30],['condemned',24,0]],skarbiec:[['wraith',44,55],['courtraven',22,20],['guard',34,0]],
        krypta:[['debtor',52,40],['condemned',28,0],['wraith',20,70]],tron:[['bookgolem',12,100],['executioner',12,120],['guard',34,0],['scribe',18,30],['debtor',24,40]]}[rg]||[['guard',60,0],['condemned',40,0]];
      const pool=T.filter(x=>t>=x[2]),tot=pool.reduce((a,x)=>a+x[1],0);let q=Math.random()*tot,ty=pool[0][0];for(const x of pool){if(q<x[1]){ty=x[0];break}q-=x[1]}
      if(ty==='paperrat'||ty==='courtraven'&&Math.random()<.4){const k=ty==='paperrat'?4:3;for(let i=0;i<k;i++)spawnEnemy(ty,p[0]+rnd(-12,12),p[1]+rnd(-8,8));n-=2;continue}
      spawnEnemy(ty,p[0],p[1]);continue}
    if(CH===4){if(t<15){n=0;continue}const tl=tileAt(Math.floor(p[0]/TS),Math.floor(p[1]/TS));
      if((tl===64||tl===65)&&t>20&&r<.55){spawnEnemy('drowner',p[0],p[1],{rise:0,emerge:.8});continue}
      if(t>30&&r<.14){const k=3+(Math.random()<.4?1:0);for(let i=0;i<k;i++)spawnEnemy('wolf',p[0]+rnd(-12,12),p[1]+rnd(-8,8));n-=2;continue}
      if(t>60&&r<.21){spawnEnemy('zmora',p[0],p[1],{rise:0});continue}
      if(t>200&&r<.25){spawnEnemy('bies',p[0],p[1]);continue}
      spawnEnemy(t>150&&r<.33?'wight':t>90&&r<.47?'xbow':t>40&&r<.64?'strzygon':r<.82?'bandit':'wolf',p[0],p[1]);continue}
    if(CH===3){if(t>35&&r<.12){for(let i=0;i<3;i++)spawnEnemy('hound',p[0]+rnd(-10,10),p[1]+rnd(-8,8));n-=2;continue}
      spawnEnemy(t>110&&r<.2?'monk':t>70&&r<.4?'rotknight':t>35&&r<.6?'hound':'madman',p[0],p[1]);continue}
    if(t>25&&r<.11){for(let i=0;i<3;i++)spawnEnemy('bat',p[0]+rnd(-10,10),p[1]+rnd(-8,8));n-=2;continue}
    if(CH===1)spawnEnemy(t>110&&r<.25?'knight':t>50&&r<.5?'ghoul':'possessed',p[0],p[1]);else spawnEnemy(t>70&&r<.25?'warden':t>35&&r<.5?'ghoul':'dwarf',p[0],p[1])}
}
// ---- miniboss: zawsze w 3. minucie, zwykły wróg z rozdziału: 5x życia, 3x obrażeń, bordowa poświata ----
const ELITE={t:180,hp:3.5,dmg:1.65,type:{1:'knight',2:'warden',3:'rotknight',4:'bandit',5:'executioner'}};
function miniTick(){if(!S||S.miniDone||S.t<(S.firstNight?210:ELITE.t)||pl.dead||S.dg||S.stage==='break'||S.opening)return;
  const type=ELITE.type[CH]||'knight';if(!A[type])return;S.miniDone=true;
  const p=ringSpot(150,230)||ringSpot(90,300)||[pl.x+110,pl.y],e=spawnEnemy(type,p[0],p[1],{rise:1,mini:true});
  const hm=S.firstNight?2.8:ELITE.hp;e.hp*=hm;e.max*=hm;e.dmg*=S.firstNight?1.4:ELITE.dmg;e.xp*=hm;e.s=1.2;play('bossGrowl',0);shake(.15,.6);say((EN?'An elite emerges from the dark in a crimson glow.':'Z mroku wychodzi elita w bordowej poświacie.'))}
function events(){
  const ev=(k,c,fn)=>{if(c&&!S.ev.has(k)){S.ev.add(k);fn()}};
  
  if(CH<4&&W.altar){
    ev('alt',S.t>34,()=>say(W.altar.hint));
    ev('wave',S.t>DZIADY_AT&&!S.won,()=>{play('rise',0);play('bossGrowl',0);shake(.2,1);say(W.wave.msg);for(const [t,n] of W.wave.list)for(let i=0;i<n;i++){const p=ringSpot(150,240)||ringSpot(100,300);if(p)spawnEnemy(t,p[0],p[1],{rise:1})}});
    ev('pw',CH===2,()=>{for(const p of PROPS)if(p.obj&&p.k==='black_powder')p.obj.mesh.visible=true});
    // traps: the shrouded dead in Brzeźnica rise when you step close, rot blooms in Złotogród burst into spores
    for(const p of PROPS){if(!(p.ambush||p.k==='rot_bloom'))continue;const d=Math.hypot(pl.x-p.x*16,pl.y-p.y*16);if(d>24)continue;const cd=S.trapCd.get(p);
      if(p.ambush&&!cd){S.trapCd.set(p,1);for(let i=0;i<3;i++)spawnEnemy('possessed',p.x*16+rnd(-14,14),p.y*16+rnd(-6,8),{rise:.8});play('rise',0)}
      else if(p.k==='rot_bloom'&&!(cd>S.t)&&d<18){S.trapCd.set(p,S.t+8);S.slowT=1.5;hurtPlayer(6,0,1,'poison');play('fire',.3);
        for(let i=0;i<24;i++){const a=Math.random()*Math.PI*2;S.parts.push({k:'m',x:p.x*16,y:p.y*16,z:rnd(2,10),vx:Math.cos(a)*rnd(20,60),vy:Math.sin(a)*rnd(10,30),vz:rnd(4,16),c:Math.random()<.5?'#e07a30':'#c24a20',life:rnd(.6,1.2)})}
        ftInfo((EN?'Spores':'Zarodniki'))}}}
  // OBDYP shows up only in the Lower City (chapter II)
  ev('jz',CH===2&&S.t>10,()=>{const p=ringSpot(110,150)||ringSpot(80,200)||[pl.x+100,pl.y];spawnEnemy('jerzak',p[0],p[1],{rise:1});play('boing',0);say((EN?'OBDYP, The Shaggy Core of the Abyss, rolls out of the darkness!':'Z ciemności wytacza się OBDYP, Kosmate Jądro Otchłani!'))});
  if(CH===1){const N=S.npc;
    ev('a',S.t>.5,()=>say((EN?'Night falls over the Scorched Settlement.':'Noc zapada nad Spaloną Osadą.')));
    ev('b',S.t>5,()=>say((EN?'Every kill gives experience at once. Survive until dawn.':'Każde zabójstwo od razu daje doświadczenie. Przetrwaj do świtu.')));
    ev('c',S.t>14,()=>0);
    ev('s',S.t>24,()=>0);
    ev('pal',S.t>30,()=>0);
    ev('d',S.t>36,()=>0);
    ev('el',S.t>62&&N.elder.state==='alive',()=>{N.elder.state='dead';N.elder.deadAt=S.t;const n=W.npcs[0];pool(n.x,n.y,14,6)});
    ev('er',N.elder.state==='dead'&&S.t>(N.elder.deadAt||1e9)+14,()=>{N.elder.state='risen';const n=W.npcs[0];spawnEnemy('rotknight',n.x,n.y+2,{elder:true,rise:1.2,hp:220,max:220});play('rise',0);S.flash=1;shake(.12,.6);say((EN?'The old man from the well rises in rusted armour. Rot pours out from under his visor.':'Starzec spod studni wstaje w zardzewiałej zbroi. Zgnilizna wylewa się spod przyłbicy.'))});
    ev('k',S.t>(S.firstNight?110:70),()=>0);
    ev('mg',S.t>100&&N.marga.state==='alive',()=>{N.marga.state='gone';say((EN?'The trader\'s lantern goes out in the rain.':'Latarnia handlarki gaśnie w deszczu.'))});
    ev('w',S.t>150&&N.wit.state==='alive',()=>{N.wit.state='dead';const n=W.npcs[2];pool(n.x,n.y+1,20,8);say((EN?'The screams from the stocks suddenly fall silent.':'Krzyki od strony dybów nagle ucichły.'))});
    return}
  if(CH===5){
    ev('a',S.t>.5,()=>say((EN?'The Creditors\' Citadel. Seat of the Holy Order, where every debt is written in the ledgers.':'Cytadela Wierzycieli. Siedziba Zakonu, w której każdy dług zapisano w księgach.')));
    ev('b',S.t>6,()=>say((EN?'The gate slammed shut behind you. The guards close ranks.':'Brama zatrzasnęła się za tobą. Straż zamyka szeregi.')));
    ev('k',S.t>70,()=>say((EN?'In the chancery, the scribes whisper your name and the size of your debt.':'W kancelarii skrybowie szepczą twoje imię i wysokość długu.')));
    ev('rk',S.t>150,()=>say((EN?'The clank of shackles rises from the dungeons. The debtors sense they will be next.':'Z lochów dobiega brzęk kajdan. Dłużnicy czują, że po nich też przyjdą.')));
    ev('roz',S.t>DZIADY_AT,()=>{play('rise',0);play('bossGrowl',0);shake(.2,1);say((EN?'The Trial. The court bell tolls nine times, and the guards march to carry out the sentence.':'Rozprawa. Dzwon sądowy bije dziewięć razy, a straż rusza po wyrok.'));
      for(const [t,c] of [['condemned',9],['guard',3],['executioner',1]])for(let i=0;i<c;i++){let p=null;for(let j=0;j<12&&!p;j++){const q=ringSpot(150,240)||ringSpot(100,300);if(q&&sight(q[0],q[1],pl.x,pl.y))p=q}if(p)spawnEnemy(t,p[0],p[1],{rise:1})}});
    return}
  if(CH===4){
    ev('a',S.t>.5,()=>say((EN?'Beyond Goldheim stretch the wild valleys of Blackwood. The refugee camp is the last safe place.':'Za Złotogrodem ciągną się dzikie doliny Czarnoboru. Obóz uciekinierów to ostatnie bezpieczne miejsce.')));
    ev('b',S.t>6,()=>{play('howl',0);0});
    ev('c',S.t>16,()=>0);
    ev('s',S.t>26,()=>0);
    ev('st',S.t>34,()=>0);
    ev('k',S.t>70,()=>say((EN?'The Holy Order has reached even here. Fanatics are burning the shrines of the old faith.':'Zakon dotarł i tutaj. Fanatycy palą chramy starej wiary.')));
    ev('rk',S.t>150,()=>say((EN?'Knocking comes from the barrows. Something wants to get out.':'Z kurhanów dobiega stukanie. Coś chce wyjść.')));
    ev('dz',S.t>DZIADY_AT,()=>{play('rise',0);shake(.15,1);say((EN?'The Forefathers\' Eve. The mist turns green, and the dead leave the barrows to claim what is theirs.':'Dziady. Mgła zielenieje, a umarli wychodzą z kurhanów po swoje.'));
      for(const b of W.barrows)if(Math.hypot(b.x-pl.x,b.y-pl.y)<420)for(let i=0;i<2;i++)spawnEnemy('wight',b.x+rnd(-12,12),b.y+rnd(2,10),{rise:1.2})});
    // false will-o'-wisps wait over the marsh
    const wisps=()=>{for(const q of W.wisps)if(Math.hypot(q.x*16-pl.x,q.z*16-pl.y)>90)spawnEnemy('wisp',q.x*16+rnd(-20,20),q.z*16+rnd(-10,10),{rise:0})};
    ev('ws',S.t>.2,wisps);ev('ws2',S.t>300,wisps);
    ev('np',S.t>12,()=>0);
    ev('wo',S.t>44,()=>0);
    const N=S.npc,bt=W.npcs.find(n=>n.id==='bartosz');
    ev('bd',S.t>200&&N.bartosz&&N.bartosz.state==='alive',()=>{N.bartosz.state='dead';pool(bt.x,bt.y,18,7);for(let i=0;i<3;i++)spawnEnemy('wolf',bt.x+rnd(-20,20),bt.y+rnd(-12,12),{rise:.3});say((EN?'A howl and a short scream come from the road. The wolves have caught the scout.':'Od strony drogi dobiega wycie i krótki krzyk. Wilki dopadły tropiciela.'))});
    const bg=W.npcs.find(n=>n.lure);
    if(bg&&N.boginka){ev('cry',S.t>240,()=>{play('cry',0);say((EN?'A child\'s crying comes from deep within Blackwood.':'Z głębi Czarnoboru dobiega płacz dziecka.'))});
      if(S.ev.has('cry')&&N.boginka.state==='alive'&&Math.random()<1/240)play('cry',0);
      if(N.boginka.state==='alive'&&Math.hypot(pl.x-bg.x,pl.y-bg.y)<46){N.boginka.state='gone';spawnEnemy('boginka',bg.x,bg.y,{rise:0});play('bossGrowl',0);shake(.25,.6);S.flash=.4;say((EN?'That is no child! The Mire Nymph unfolds her long, wet limbs.':'To nie dziecko! Boginka prostuje długie, mokre kończyny.'))}}
    return}
  if(CH===3){const N=S.npc;
    ev('a',S.t>.5,()=>say((EN?'You emerge on the surface. Fallen Goldheim: golden domes above a city that is rotting.':'Wychodzisz na powierzchnię. Upadły Złotogród: złote kopuły nad miastem, które gnije.')));
    ev('b',S.t>5,()=>0);
    ev('c',S.t>14,()=>0);
    ev('s',S.t>24,()=>0);
    ev('he',S.t>28,()=>0);
    ev('d',S.t>36,()=>0);
    ev('k',S.t>70,()=>0);
    ev('m',S.t>110,()=>0);
    ev('ot',S.t>210&&N.ottokar.state!=='dead',()=>{N.ottokar.state='dead';const n=W.npcs[1];pool(n.x,n.y+2,22,8);for(let i=0;i<4;i++)spawnEnemy('madman',n.x+rnd(-14,14),n.y+rnd(4,12),{rise:.6});say((EN?'Madmen have broken down Count Ottokar\'s door. Gold did not save him.':'Szaleńcy wyważyli drzwi hrabiego Ottokara. Złoto go nie uratowało.'))});
    ev('roar',S.t>600,()=>{play('bossGrowl',0);shake(.15,1.2);say((EN?'Something enormous beats its wings above the domes. The cathedral bells begin to ring by themselves.':'Nad kopułami coś ogromnego łopocze skrzydłami. Dzwony katedry zaczynają bić same.'))});
    return}
  ev('a',S.t>.5,()=>say((EN?'You descend into the Lower City. There has never been sun here.':'Schodzisz do Dolnego Miasta. Tu nigdy nie było słońca.')));
  ev('b',S.t>5,()=>0);
  ev('c',S.t>14,()=>0);
  ev('mi',S.t>28,()=>0);
  ev('d',S.t>70,()=>0);

}

/* ============ SKILLS ============ */
function nearest(x,y,maxD){let b=null,bd=maxD;for(const e of S.enemies){if(e.dead||e.rise>0)continue;const d=Math.hypot(e.x-x,e.y-y);if(d<bd){bd=d;b=e}}return b}
function visible(){return S.enemies.filter(e=>!e.dead&&e.rise<=0&&Math.abs(e.x-pl.x)<190&&Math.abs(e.y-pl.y)<120)}
function aoe(x,y,r,dmg,kb,fn,hit){let h=0;for(const e of S.enemies){if(e.dead||e.rise>0)continue;const dx=e.x-x,dy=e.y-y,d=Math.hypot(dx,dy);if(d<r+e.r&&!(hit&&hit.has(e))){if(damageEnemy(e,dmg,dx/(d||1),dy/(d||1),kb)){if(hit)hit.add(e);h++;if(fn&&!e.dead)fn(e)}}}return h}
const screenAng=(dx,dy)=>Math.atan2(dy*Math.sin(PITCH),dx);
function updZones(dt){
  for(let i=S.quakes.length-1;i>=0;i--){const q=S.quakes[i];q.delay-=dt;if(q.delay>0)continue;S.quakes.splice(i,1);
    aoe(q.x,q.y,q.r||12,q.dmg,.5,null,q.hit);addVfx(A.fx.spikes,.4,q.x,q.y,0,.95,'bill');
    if(DEC.crack&&Math.random()<.6)decalAt(DEC.crack[(Math.random()*4)|0],q.x,q.y,.85);
    for(let k=0;k<3;k++)S.parts.push({k:'d',x:q.x,y:q.y,z:2,vx:rnd(-20,20),vy:rnd(-10,10),vz:rnd(30,55),c:P.st4,life:.7});shake(.06,.08)}
  for(let i=S.zones.length-1;i>=0;i--){const z=S.zones[i];z.life-=dt;z.tick-=dt;if(z.tick<=0){z.tick=.35;aoe(z.x,z.y,z.r,z.dmg,0)}
    if(Math.random()<dt*14)S.parts.push({k:'e',x:z.x+rnd(-z.r,z.r),y:z.y+rnd(-z.r*.6,z.r*.6),z:4,vx:rnd(-5,5),vy:0,vz:rnd(18,36),c:Math.random()<.5?P.ember:P.ember2,life:rnd(.4,.9)});
    if(z.life<=0){scene.remove(z.mesh);S.zones.splice(i,1)}}
}
function updPicks(dt){
  for(let i=S.picks.length-1;i>=0;i--){const p=S.picks[i],dx=pl.x-p.x,dy=pl.y-6-p.y,d=Math.hypot(dx,dy)||1;
    if(p.k==='c'&&S.collector&&!S.collector.dead){const c=S.collector,cx=c.x-p.x,cy=c.y-6-p.y,cd=Math.hypot(cx,cy)||1;if(cd<90&&!p.mag){p.x+=cx/cd*120*dt;p.y+=cy/cd*120*dt;if(cd<8){scene.remove(p.mesh);scene.remove(p.glow);S.picks.splice(i,1);c.stolen+=(p.returned?p.v:p.v*S.pk.coin*DF[DIFFK].coin);continue}}}
    if(!p.mag&&d<32*(1+(S.magnet||0))&&!pl.dead)p.mag=true;
    if(p.mag&&!pl.dead){p.sp=Math.min(340,p.sp+520*dt);p.x+=dx/d*p.sp*dt;p.y+=dy/d*p.sp*dt;
      if(d<7){scene.remove(p.mesh);scene.remove(p.glow);S.picks.splice(i,1);
        if(p.k==='h'){heal(pl.max*.1);play('heal',0);ftInfo((EN?'+10% health':'+10% życia'));for(let q=0;q<14;q++)S.parts.push({k:'e',x:pl.x+rnd(-5,5),y:pl.y+rnd(-3,3),z:rnd(4,16),vx:rnd(-10,10),vy:0,vz:rnd(14,34),c:Math.random()<.5?'#ff5a6a':'#ffb0b8',life:rnd(.4,.8)});continue}
        if(p.k==='c'){if(p.returned)S.coins+=p.v;else awardCoins(p.v);play('coin',.05);continue}
        S.xp+=p.v*S.pk.xp*DF[DIFFK].xp*1.2;S.actions.collect++;play('pick',.03);while(S.xp>=S.need){S.xp-=S.need;S.lvl++;S.need=xpNeed(S.lvl);S.pendLv++}if(S.pendLv>0&&!S.choosing)openLevelUp()}}}
  if(S.pendLv>0&&!S.choosing&&!S.shop&&!S.dialog&&!S.notice&&!pl.dead)openLevelUp();
}
function rollChoices(){{const ne=ENCH.filter(k=>S.sk[k]).length,sk0=SLASH_SK.filter(canLearnSlasher),pacts=Object.keys(STY).filter(k=>STY[k].pact).filter(k=>!S.sk[k]),npa=Object.keys(STY).filter(k=>STY[k].pact&&S.sk[k]).length,
    lead=['def','off','wav'].sort((a,b)=>brSum(b)-brSum(a))[0],pool=[];
    for(const k of SLASH_UP)pool.push([k,1]);
    for(const k of sk0)pool.push([k,2]);
    for(const k in STY){const t=STY[k];if(t.pact){if(S.lvl>=4&&npa<2&&!S.sk[k])pool.push([k,.7]);continue}if(sk(k)>=t.max)continue;const have=brSum(t.br);pool.push([k,have>0?3.2+(t.br===lead?1.2:0):1.4])}
    const o=[];while(o.length<4&&pool.length){const tot=pool.reduce((a,b)=>a+b[1],0);let r=Math.random()*tot,i=0;for(;i<pool.length-1;i++){r-=pool[i][1];if(r<=0)break}const k=pool.splice(i,1)[0][0];if(!o.includes(k))o.push(k)}
    if(!o.some(k=>STY[k]&&!STY[k].pact)){const st=Object.keys(STY).filter(k=>!STY[k].pact&&sk(k)<STY[k].max);if(st.length)o[o.length-1]=st[(Math.random()*st.length)|0]}
    return o}}
function cardSub(k,l,d){if(d.pact)return (EN?'Pact: an edge with a price':'Pakt: przewaga z ceną');const n=brSum(d.br);return (l?(EN?`Level ${l+1} of ${d.max}`:`Poziom ${l+1} z ${d.max}`):(EN?'New style':'Nowy styl'))+` · ${BR[d.br].n} ${Math.min(SET_N,n+1)}/${SET_N}`}
function cardDesc(k,d){let t=d.d;if(!d.pact&&!brOn(d.br)&&brSum(d.br)+1>=SET_N)t+=(EN?' Set ':' Zestaw ')+BR[d.br].n+': '+BR[d.br].set;return t}
function styleLine(){return ['def','off','wav'].map(b=>BR[b].n+' '+Math.min(SET_N,brSum(b))+'/'+SET_N).join(' · ')}
// przed → po: jedna liczba zamiast opisu
const FXL={garda:[(EN?'Block cost':'Koszt bloku'),L=>Math.round(100*(1-.1*L))+'%'],riposta:[(EN?'Riposte multiplier':'Mnożnik riposty'),L=>'×'+(L>=2?3:L>=1?2:SL.riposte).toFixed(1).replace('.',',')],odzysk:[(EN?'Stamina returned on parry':'Zwrot staminy po parowaniu'),L=>10*L],
  ostrze:[(EN?'Light attack cost':'Koszt lekkiego ciosu'),L=>Math.round(100*(1-.08*L))+'%'],rytm:[(EN?'Third combo hit':'Trzeci cios combo'),L=>'+'+18*L+'%'],taniec:[(EN?'Dodge cost':'Koszt uniku'),L=>Math.round(100*(1-.12*L))+'%'],
  fala:[(EN?'Wave damage':'Obrażenia fal'),L=>'+'+Math.round(FALA_B[L]*100)+'%'],zasieg:[(EN?'Wave range':'Zasięg fal'),L=>'+'+18*L+'%'],echo:[(EN?'Waves after parry':'Fale po parowaniu'),L=>L<1?1:L===1?2:3],zryw:[(EN?'Wave every … hits':'Fala co … trafień'),L=>L<1?'—':ZRYW_N[L]]};
const FXPACT={krew:[(EN?'+35% damage':'+35% obrażeń'),(EN?'−25% health':'−25% życia')],szklo:[(EN?'+50% damage':'+50% obrażeń'),(EN?'enemies +30% damage':'wrogowie +30% obrażeń')],zelazo:[(EN?'+40% stamina':'+40% staminy'),(EN?'−15% damage':'−15% obrażeń')],cisza:[(EN?'+50% stamina regeneration':'+50% regeneracji staminy'),(EN?'−20% health':'−20% życia')]};
function fxPair(k,l){const T=STY[k];if(T&&!T.pact&&FXL[k]){const f=FXL[k];return[f[0],f[1](l),f[1](l+1)]}
  if(k==='_vit')return[(EN?'Max health':'Maks. życie'),Math.round(pl.max),Math.round(pl.max+15)];if(k==='_dex')return[(EN?'Max stamina':'Maks. stamina'),Math.round(pl.staMax),Math.round(pl.staMax+15)];if(k==='_int')return[(EN?'Max mana':'Maks. mana'),Math.round(pl.manaMax),Math.round(pl.manaMax+15)];
  if(k==='_str')return[(EN?'Damage':'Obrażenia'),Math.round(S.str*100)+'%',Math.round(S.str*110)+'%'];return null}
function cardHTML(k,i){const l=S.sk[k]||0,d=SK[k],T=STY[k],cls=T?(T.pact?'pk':'br-'+T.br):k[0]==='_'?'st':'';
  const sub=T?cardSub(k,l,d):d.sub?d.sub:d.extra?(EN?'Loot':'Łup'):l?(EN?`Level ${l+1} of ${ENCH.includes(k)&&S.mainEnchant&&S.mainEnchant!==k?3:d.max||9}`:`Poziom ${l+1} z ${ENCH.includes(k)&&S.mainEnchant&&S.mainEnchant!==k?3:d.max||9}`):(EN?'New skill':'Nowa umiejętność');
  let fx='',desc=T?cardDesc(k,d):d.lv?d.lv[l]:d.d,small=false;
  if(T&&T.pact){const p=FXPACT[k];fx=`<span class="fx"><b class="up">${p[0]}</b><b class="dn">${p[1]}</b></span>`;desc='';}
  else{const q=fxPair(k,l);if(q){fx=`<span class="fx"><em>${q[0]}</em><b>${q[1]}</b><s>→</s><b class="up">${q[2]}</b></span>`;small=true}}
  const close=T&&!T.pact&&!brOn(T.br)&&brSum(T.br)+1>=SET_N;
  if(ENCH.includes(k)){const support=!!S.mainEnchant&&S.mainEnchant!==k;desc=support?(EN?`Support blade (${ELEMENT_NAME[ELEMENT_OF[k]]}), max 3 lvl: half the chance, 35% status strength; ice: 15% slow (bosses 10%). No marks, finisher or sword bonus.`:`Ostrze wspierające (${ELEMENT_NAME[ELEMENT_OF[k]]}), maks. 3 poz.: połowa szansy, 35% siły statusu; lód: spowolnienie 15% (na bossa 10%). Bez znaków, finiszera i premii miecza.`):desc+(k==='fireblade'?(EN?' From lvl 3: dodging leaves weak embers.':' Od poz. 3: unik zostawia słaby żar.'):k==='iceblade'?(EN?' From lvl 3: a heavy attack shatters the frost and slows nearby enemies.':' Od poz. 3: ciężki cios rozbija mróz i spowalnia sąsiadów.'):'');desc+=' '+(ELEMENT_OF[k]==='fire'?(EN?'Excludes ice.':'Wyklucza lód.'):ELEMENT_OF[k]==='ice'?(EN?'Excludes fire.':'Wyklucza ogień.'):(EN?'Combines with 1 other element.':'Łączy się z 1 innym żywiołem.'));}return {cls,html:(EN?`<span class="num">${i+1}</span><span class="ck">${d.kind}</span><span class="cn"><i class="ic ic-${d.ic||(k==='_gold'?'coin':k==='_heal'?'brew':k)}"></i>${d.name}</span><span class="cl${l?'':' new'}">${sub}</span>${fx}${close?'<span class="setb">Completes the set!</span>':''}${desc?`<span class="cd${small?' sm':''}">${T&&small?STY[k].d:desc}</span>`:''}`:`<span class="num">${i+1}</span><span class="ck">${d.kind}</span><span class="cn"><i class="ic ic-${d.ic||(k==='_gold'?'coin':k==='_heal'?'brew':k)}"></i>${d.name}</span><span class="cl${l?'':' new'}">${sub}</span>${fx}${close?'<span class="setb">Domyka zestaw!</span>':''}${desc?`<span class="cd${small?' sm':''}">${T&&small?STY[k].d:desc}</span>`:''}`)}}
function renderBuild(pre){const el=$('lvBuild');if(!el)return;
  let h='';for(const b of ['def','off','wav']){const n=brSum(b),segs=Array.from({length:SET_N},(_,i)=>`<i class="${i<n?'on':(pre===b&&i===n?'pre':'')}"></i>`).join('');
    h+=`<div class="brb ${b}${brOn(b)?' full':''}"><b>${BR[b].n}</b><span class="seg">${segs}</span>${Math.min(n,SET_N)}/${SET_N}<small>${brOn(b)?(EN?'Set active: ':'Zestaw aktywny: '):(EN?'Set: ':'Zestaw: ')}${BR[b].set}</small></div>`}
  const chips=Object.keys(STY).filter(k=>sk(k)).map(k=>`<span class="chip${STY[k].pact?' pk':''}">${STY[k].name}${STY[k].pact?'':' '+sk(k)}</span>`).concat(SLASH_SK.filter(k=>sk(k)).map(k=>`<span class="chip">${SK[k].name} ${sk(k)}</span>`));
  el.innerHTML=h+(chips.length?`<div class="chips">${chips.join('')}</div>`:'')+`<p class="element-summary">${elementalSummary()}</p>`}
function rrPrice(){return S.rr>0?0:10+5*(S.rrPaid||0)}
function renderCards(){$('lvlTitle').textContent=(EN?`Level ${S.lvl-S.pendLv+1}`:`Poziom ${S.lvl-S.pendLv+1}`);$('slots').textContent=ENCH.some(k=>S.sk[k])?(EN?'Choose a style, attribute or pact':'Wybierz styl, cechę lub pakt'):(EN?'Choose a technique, style or support magic':'Wybierz technikę, styl lub magię wspierającą');const box=$('cards');box.innerHTML='';
  S.choices.forEach((k,i)=>{const c=cardHTML(k,i),b=document.createElement('button');b.type='button';b.className='card '+c.cls;b.id='card'+i;b.innerHTML=c.html;b.addEventListener('pointerdown',()=>{b.dataset.openingBlocked=performance.now()<levelReadyAt?'1':'0'});b.addEventListener('click',e=>{const blocked=e.detail>0&&b.dataset.openingBlocked==='1';delete b.dataset.openingBlocked;if(!blocked)pickLevelCard(i)});
    const br=STY[k]&&!STY[k].pact?STY[k].br:null;const pv=()=>renderBuild(br),un=()=>renderBuild();b.addEventListener('mouseenter',pv);b.addEventListener('focus',pv);b.addEventListener('mouseleave',un);b.addEventListener('blur',un);box.appendChild(b)});
  renderBuild();const rb=$('rerollBtn'),pr=rrPrice();rb.textContent=pr===0?(EN?'Reroll cards · free':'Przerzuć karty · darmowy'):(EN?`Reroll cards · ${pr} coins`:`Przerzuć karty · ${pr} monet`);rb.disabled=pr>0&&S.coins<pr}
function rerollCards(){if(!S||!S.choosing)return;const pr=rrPrice();if(pr>0&&S.coins<pr){play('empty',0);return}
  if(pr===0)S.rr--;else{S.coins-=pr;S.rrPaid=(S.rrPaid||0)+1}
  const old=S.choices;let c=null;for(let t=0;t<8;t++){c=rollChoices();if(!c.some(k=>old.includes(k)))break}S.choices=c;play('bless',0);renderCards();setTimeout(()=>{const f=$('card0');f&&f.focus()},20)}
const LEVEL_CHOICE_DELAY=1000;let levelReadyAt=0,levelReadyTimer=0;
function pickLevelCard(i){if(performance.now()<levelReadyAt)return;pick(i)}
function rerollLevelCards(){if(performance.now()<levelReadyAt)return;rerollCards()}
function armLevelCards(){clearTimeout(levelReadyTimer);levelReadyAt=performance.now()+LEVEL_CHOICE_DELAY;$('lvl').classList.add('choice-wait');$('levelWait').textContent=(EN?'Read the descriptions — you can choose in 1 s':'Przeczytaj opisy — wybór dostępny po 1 s');levelReadyTimer=setTimeout(()=>{$('lvl').classList.remove('choice-wait');$('levelWait').textContent=''},LEVEL_CHOICE_DELAY)}
function openLevelUp(){resetInput();S.choosing=true;pl.swingT=0;play('level',0);if(!pl.dead)pl.hp=Math.min(pl.max,pl.hp+pl.max*S.pk.lvHeal);// level healing is defined by the selected preparation perks
  S.choices=rollChoices();S.rr=1;renderCards();
  $('lvl').hidden=false;document.querySelector('#lvl .level-build').open=false;armLevelCards();$('touch').hidden=true;setTimeout(()=>{const f=$('card0');f&&f.focus()},30)}
// a ring of motes bursting from the hero when a rune is taken (gold for time, red for reach, others in their colours)
function pactApply(k){if(k==='krew'){S.str*=1.35;pl.max=Math.round(pl.max*.75);pl.hp=Math.min(pl.hp,pl.max)}else if(k==='szklo'){S.str*=1.5;S.vuln=(S.vuln||1)*1.3}else if(k==='zelazo'){pl.staMax=Math.round(pl.staMax*1.4);pl.sta=pl.staMax;S.str*=.85}else if(k==='cisza'){S.regenMul=(S.regenMul||1)*1.5;pl.max=Math.round(pl.max*.8);pl.hp=Math.min(pl.hp,pl.max)}ftInfo(STY[k].name)}
function pick(i){if(!S||!S.choosing)return;const k=S.choices[i];if(!k)return;if(SLASH_SK.includes(k)&&!canLearnSlasher(k))return;if(k==='_vit'){pl.max+=15;heal(15);play('heal',0)}else if(k==='_dex'){pl.staMax+=15;pl.sta=pl.staMax;play('bless',0)}else if(k==='_str'){S.str*=1.1;play('bless',0)}else if(k==='_int'){pl.manaMax+=15;pl.mana=pl.manaMax;S.int=(S.int||1)*1.02;play('bless',0)}else if(k==='_gold'){S.coins+=25;play('coin',0)}else if(k==='_heal'){pl.hp=pl.max;play('heal',0)}else{const b0=STY[k]&&STY[k].br?brOn(STY[k].br):false;S.sk[k]=(S.sk[k]||0)+1;learnElement(k);autoEquipActive(k);S.hl={k,t:clock};if(STY[k]){play('bless',0);if(STY[k].pact)pactApply(k);else if(!b0&&brOn(STY[k].br)){ftInfo((EN?'Style set: ':'Zestaw stylu: ')+BR[STY[k].br].n);play('level',0)}}}
  if(S.sk[k]===1)S.cd[k]=.3;
  if(HINTS_ENABLED&&sk(k)===1&&(NEW_SWORD_SK.includes(k)||ENCH.includes(k))){const nm=SK[k].name;let text;if(ENCH.includes(k))text=nm+': '+(S.mainEnchant===k?(EN?'main blade, up to lvl 10':'główne ostrze, do 10 poz.'):(EN?'support blade, max lvl 3':'ostrze wspierające, maks. 3 poz.'))+' '+elementalSummary();else if(ACTIVE_SLASHER.includes(k)){const c=ACTIVE_CFG[k],at=S.activeSlots.indexOf(k);text=nm+(at>=0?(EN?' → slot ':' → slot ')+['Q','E','F','R'][at]:(EN?' → reserve (equip in the pause menu)':' → rezerwa (wyposaż w pauzie)'))+' · '+c.cost+' '+activeResourceName(k)+(EN?', cooldown ':', odnowienie ')+String(c.wait(1)).replace('.',',')+' s.'}else text=nm+': '+SK[k].lv[0];say(text,'hint')}S.pendLv--;chipsDirty=true;if(S.pendLv>0){openLevelUp();return}S.choosing=false;$('lvl').hidden=true;$('touch').hidden=!coarse}
function nearNpc(){if(!S||pl.dead)return null;for(const n of W.npcs){if(n.lure||(S.npc[n.id].state!=='alive'&&S.npc[n.id].state!=='offered'))continue;if(Math.hypot(pl.x-n.x,pl.y-n.y)<30)return n}return null}
const NL=n=>n.id==='mila'&&S.npc.mila.retry?MILA_RETRY:n.id==='wolch'&&S.npc.wolch.state==='offered'?WOLCH_ACCEPT:n.lines;
function openDialog(n){S.witChoice=false;$('witChoices').hidden=true;document.querySelector('#dialog .next').hidden=false;resetInput();
  // pion: rozmowa jako pasek (imię + pierwsza kwestia), gra się nie zatrzymuje, nagroda naliczana od razu; Wit i Żerca (wybór/układ) zostają w oknie
  if(isPort()&&n.id!=='wit'&&n.id!=='wolch'){const L=NL(n),line=n.name.split(',')[0]+': '+L[0];S.dialog=n;S.dlg=L.length-1;if(n.id==='mila'){advanceDialog();say(line,'story')}else{say(line,'story');advanceDialog()}return}
  S.dialog=n;S.dlg=0;$('dlgWho').textContent=n.name;$('dlgTxt').textContent=NL(n)[0];$('dialog').hidden=false}
function advanceDialog(){if(S.witChoice)return;const n=S.dialog;S.dlg++;if(S.dlg<NL(n).length){$('dlgTxt').textContent=NL(n)[S.dlg];return}
  if(n.id==='wit'){offerWitChoice();return}
  if(n.story){$('dialog').hidden=true;S.dialog=null;return}
  $('dialog').hidden=true;S.dialog=null;const st=S.npc[n.id];
  const motes=c=>{for(let i=0;i<30;i++)S.parts.push({k:'i',x:n.x+rnd(-6,6),y:n.y,z:rnd(0,20),vx:rnd(-10,10),vy:0,vz:rnd(10,26),c,life:rnd(1,2)})};
  if(n.id==='tharm'){st.state='fading';st.t=1.5;pl.max+=25;pl.hp=pl.max;play('bless',0);say((EN?'The warmth of the forge fills your veins. +25 max health.':'Ciepło kuźni wypełnia ci żyły. +25 do maks. życia.'));motes('#7fd0ff')}
  else if(n.id==='elder'){st.state='dead';st.deadAt=S.t;pool(n.x,n.y,14,6);S.ev.add('el');say((EN?'The old man breathes his last.':'Starzec wydaje ostatnie tchnienie.'))}
  else if(n.id==='marga'){st.state='gone';motes('#3d4a3a');0}
  else if(n.id==='wit'){return}
  else if(n.id==='izolda'){st.state='talked';pl.max+=15;pl.hp=pl.max;play('heal',0);say((EN?'The flask smells of roses and vinegar. Your wounds close. +15 max health.':'Flakon pachnie różami i octem. Rany się zamykają. +15 do maks. życia.'));motes('#ffb347')}
  else if(n.id==='ottokar'){st.state='talked';S.coins+=40;play('coin',0);say((EN?'The Count tosses you a purse through a gap in the door and slams the bolts shut.':'Hrabia rzuca ci sakiewkę przez szparę w drzwiach i zatrzaskuje rygle.'))}
  else if(n.id==='chojrak'){st.state='talked';const amt=Math.round(pl.max*.3);pl.max+=amt;pl.hp+=amt;S.bless={t:180,amt};play('bless',0);motes('#fff0b0');say((EN?`Chojrak lays his hands on your shoulders. +${amt} max health for 3 minutes.`:`Chojrak kładzie ci dłonie na ramionach. +${amt} do maks. życia na 3 minuty.`))}
  else if(n.id==='mila'){st.state='trial';S.trial={t:15,k:0};play('bless',0);say((EN?'Mila\'s trial: kill 20 enemies in 15 seconds!':'Próba Mili: zabij 20 wrogów w 15 sekund!'))}
  else if(n.id==='heri'){st.state='talked';S.heri=180;play('bless',0);motes('#b8c4dc');chipsDirty=true;say((EN?'Heri pins his sign on you. Stamina regeneration +15% for 3 minutes.':'Heri przypina ci swój znak. Regeneracja staminy +15% na 3 minuty.'))}
  else if(n.id==='wierz'){st.state='talked';S.herb=60;play('heal',0);motes('#9ac070');say((EN?'The brew burns your throat. For a minute, your wounds close on their own.':'Napar pali w gardle. Przez minutę rany same się zasklepiają.'))}
  else if(n.id==='bartosz'){st.state='talked';MINI.fog.getContext('2d').clearRect(0,0,MW,MH);play('bless',0);say((EN?'Bart sketches a map of the valley in the mud. You can see the whole area and the power fires.':'Bartosz kreśli w błocie mapę doliny. Widzisz całą okolicę i ogniska mocy.'))}
  else if(n.id==='wolch'){if(st.state==='alive'){st.state='offered';say((EN?'The priest is waiting. Speak to him again if you accept the pact.':'Żerca czeka. Porozmawiaj z nim jeszcze raz, jeśli przyjmujesz układ.'))}
    else{st.state='talked';const own=SLASH_SK.filter(k=>S.sk[k]&&S.sk[k]<(SK[k].max||9)),k=own[(Math.random()*own.length)|0],cost=Math.round(pl.max*.2);pl.max-=cost;pl.hp=Math.min(pl.hp,pl.max);blood(pl.x,pl.y,20,0,1);play('bless',0);motes('#951518');chipsDirty=true;
      if(k){S.sk[k]=Math.min(SK[k].max||9,S.sk[k]+2);S.hl={k,t:clock};say((EN?`The priest cuts your palm above the oak\'s root. ${SK[k].name}: +2 levels. Max health −${cost}.`:`Żerca nacina ci dłoń nad korzeniem dębu. ${SK[k].name}: +2 poziomy. Maks. życia −${cost}.`))}else{S.lvl++;S.need=xpNeed(S.lvl);S.pendLv++;say((EN?`The blood soaks into the roots. Max health −${cost}.`:`Krew wsiąka w korzenie. Maks. życia −${cost}.`));openLevelUp()}}}
  else if(n.id==='skryba'){st.state='talked';S.rr=(S.rr||0)+3;play('bless',0);motes('#c9b98a');say((EN?'The scribe tears a page from the register. +3 free card rerolls.':'Skryba wyrywa kartkę z rejestru. +3 darmowe przerzuty kart.'))}
  else if(n.id==='straznik'){st.state='talked';S.disc=.35;play('coin',0);motes('#d8cfb8');say((EN?'The guard whispers something to the trader. Prices at Marga\'s stall: −35%.':'Strażnik szepcze coś handlarce. Ceny w kramie Margi: −35%.'))}
  else if(n.id==='pieczetnik'){st.state='talked';pl.inv=Math.max(pl.inv,10);play('bless',0);motes('#ffd27a');say((EN?'Seal of protection for 10 seconds: nothing can touch you.':'Pieczęć ochronna przez 10 sekund: nic cię nie tknie.'))}
  else if(n.id==='aurel'){st.state='talked';S.lvl++;S.need=xpNeed(S.lvl);S.pendLv++;play('bless',0);motes('#d8cfb8');say((EN?'The medallion is warm from a small hand. You feel strength growing in you.':'Medalion jest ciepły od małej dłoni. Czujesz, jak rośnie w tobie siła.'));openLevelUp()}}
function updPlayer(dt){
  if(S.bufRoll){S.bufRoll=0;rollPress=true}
  if(pl.dead){pl.deadT+=dt;return}
  let mx=(keys.d||keys.arrowright?1:0)-(keys.a||keys.arrowleft?1:0)+tj.x+PAD.x,my=(keys.s||keys.arrowdown?1:0)-(keys.w||keys.arrowup?1:0)+tj.y+PAD.y;
  let ml=Math.hypot(mx,my);if(ml>1){mx/=ml;my/=ml;ml=1}
  if(pl.visualGuard)pl.visualGuard.t=Math.max(0,pl.visualGuard.t-dt);pl.inv=Math.max(0,pl.inv-dt);pl.swingT=Math.max(0,pl.swingT-dt);pl.hurtT=Math.max(0,pl.hurtT-dt);pl.parryT=Math.max(0,(pl.parryT||0)-dt);pl.gHitT=Math.max(0,(pl.gHitT||0)-dt);
  if(pl.roll>0){pl.roll-=dt;pl.rollT+=dt;moveBox(pl,pl.rvx*dt,pl.rvy*dt,4,3,true);return}
  pl.rollCd-=dt;
  if(rollPress){if(pl.sta+1e-8>=SL.roll*(1-.12*sk('taniec'))&&!(pl.broken>0)&&!(pl.atk&&pl.atk.stage!=='rec')&&pl.rollCd<=0){{pl.sta=Math.max(0,pl.sta-SL.roll*(1-.12*sk('taniec')));pl.dance=sk('taniec')?.8:0;if(sk('fireblade')>=3){S.swordTrails.push({x:pl.x,y:pl.y,t:1.2,hit:new Set()});}pl.staDelay=SL.delay;pl.atk=null;pl.block=false;pl.swingT=0}let dx=pl.fx,dy=pl.fy;if(ml>.1){dx=mx/ml;dy=my/ml}S.actions.dodge++;pl.roll=.3;pl.rollT=0;pl.rvx=dx*215;pl.rvy=dy*215;pl.s=dx>=0?1:-1;pl.inv=Math.max(pl.inv,.34);pl.rollCd=.28;pl.swingT=0;play('roll',0);return}
    if(pl.atk?.kind!=='whirl'&&pl.sta<SL.roll*(1-.12*sk('taniec'))){S.stamFlash=.45;play('empty',.25)}}
  const slow=SLOWT[tileAt(Math.floor(pl.x/TS),Math.floor(pl.y/TS))]||1;
  const hold=(S.snare>0?.3:1)*(S.slowT>0?.6:1)*(pl.atk?.kind==='whirl'&&pl.atk.stage==='act'?WHIRL.speed:pl.atk||pl.broken>0?0:pl.block?.45:pl.charging?.5:1);
  if(ml>.1&&hold>0){if(!(pl.block||pl.charging)){pl.fx=mx/ml;pl.fy=my/ml}const ox=pl.x,oy=pl.y;moveBox(pl,mx*72*slow*hold*S.pk.spd*dt,my*72*slow*hold*S.pk.spd*dt,4,3);const distance=Math.hypot(pl.x-ox,pl.y-oy);pl.walk+=distance/72;pl.moving=distance>.001}else pl.moving=false;
  if(Math.abs(pl.fx)>Math.abs(pl.fy)){pl.dir=2;pl.s=pl.fx>0?1:-1}else{pl.dir=pl.fy>0?0:1}
  for(let si=0;si<SHRINES.length;si++){const sh=SHRINES[si],sd=Math.hypot(pl.x-sh.x,pl.y-sh.y);
  if(sd<26&&pl.hp<pl.max*.7){heal(Math.min(14*dt,pl.max*.7-pl.hp));play('heal',.6);if(Math.random()<dt*14)S.parts.push({k:'i',x:pl.x+rnd(-5,5),y:pl.y,z:rnd(0,10),vx:0,vy:0,vz:rnd(12,24),c:'#7fd0ff',life:rnd(.6,1)})}}
}
function updParts(dt){
  const ps=S.parts;
  for(let i=ps.length-1;i>=0;i--){const p=ps[i];
    if(p.k==='b'){p.vz-=230*dt;p.z+=p.vz*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;
      if(p.z<=0){if(!VOID.has(tileAt(Math.floor(p.x/TS),Math.floor(p.y/TS)))){dg.fillStyle=p.c;dg.fillRect(Math.round(p.x),Math.round(p.y),1,1);decalDirty=true}ps.splice(i,1)}}
    else if(p.k==='g2'){p.life-=dt;const tx=p.tx;if(tx&&!tx.dead){p.x+=(tx.x-p.x)*Math.min(1,dt*6);p.y+=(tx.y-p.y)*Math.min(1,dt*6);p.z+=(18-p.z)*dt*4}if(p.life<=0)ps.splice(i,1)}
    else{p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.z+=p.vz*dt;p.vx*=.97;if(p.k==='d')p.vz-=60*dt;if(p.z<0&&p.k!=='e')p.z=0;if(p.life<=0)ps.splice(i,1)}}
  if(ps.length>MAXP-50)ps.splice(0,ps.length-(MAXP-50));
}
// Defensive positioning is a legal strategy; no penalties for standing still.
const ENEMY_GRID=new Map(),CELL=32;
function buildEnemyGrid(){ENEMY_GRID.clear();for(const e of S.enemies){if(e.dead)continue;const key=Math.floor(e.x/CELL)+','+Math.floor(e.y/CELL);let a=ENEMY_GRID.get(key);if(!a)ENEMY_GRID.set(key,a=[]);a.push(e)}}
function nearbyEnemies(e){const a=[],x=Math.floor(e.x/CELL),y=Math.floor(e.y/CELL);for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const q=ENEMY_GRID.get((x+dx)+','+(y+dy));if(q)a.push(...q)}return a}

function update(dt){
  if(S&&S.phase==='play')bannerTick(dt);
  if(S&&S.intro){introTick(dt);return}
  if(S&&S.phase==='play')pumpNotice();if(!S||S.phase!=='play'||S.notice||S.choosing||S.shop||S.paused)return;
  if(S.hitstop>0){S.hitstop-=dt;if(rollPress)S.bufRoll=1;return}
  if(S.dialog){if(talkPress||rollPress)advanceDialog();return}
  if(S.stage!=='break'&&S.stage!=='collector'&&!S.dg&&!pl.dead){S.t+=dt;if(!pl.dead){S.surv=(S.surv||0)+dt;if(S.surv>=SL.coinSurvive){S.surv-=SL.coinSurvive;S.coins++;play('coin',.02)}}}
  stageTick(dt);if(S.notice)return;if(S.dg)dungeonTick(dt);if(S.notice)return;
  if(selectedNpcAction){const q=selectedNpcAction,n=q.npc;if(q.state!==S||pl.dead||!W.npcs.includes(n)||!['alive','offered'].includes(S.npc[n.id]?.state))selectedNpcAction=null;else if(Math.hypot(pl.x-n.x,pl.y-n.y)<30){selectedNpcAction=null;openDialog(n);return}}
  const nm=nearMerchant();if(talkPress&&nm){openShop();return}
  const nn=nearNpc();if(talkPress&&nn){openDialog(nn);return}
  const nf=!nn&&!nm?nearPowerFire():null;if(talkPress&&nf){activatePowerFire(nf);return}const nx=!nn&&!nm&&!nf?nearExit():null;if(talkPress&&nx){useExit(nx);return}
  updPlayer(dt);recoverPurses();if(S.notice)return;events();if(S.notice)return;spawnTick(dt);miniTick();if(S.notice)return;chTick();
  slashUpdate(dt);for(const d of S.delayed)d.t-=dt;const ready=S.delayed.filter(d=>d.t<=0);S.delayed=S.delayed.filter(d=>d.t>0);ready.forEach(d=>d.fn());
  updZones(dt);
  buildEnemyGrid();for(const e of S.enemies)if(!e.dead)updEnemy(e,dt);
  S.enemies=S.enemies.filter(e=>!e.dead);
  musTick(dt);
  updEproj(dt);updPicks(dt);
  for(const c of S.corpses){c.t+=dt;const L=c.big?30:7;if(c.t>L&&!c.gone){if(!c.own){c.mesh.material=c.mesh.material.clone();c.mesh.material.transparent=true;c.own=1}const f=1-(c.t-L)/2.2;c.mesh.material.opacity=Math.max(0,f);if(f<=0)c.gone=.001}}
  if(S.corpses.some(c=>c.gone&&c.t>c.gone))S.corpses=S.corpses.filter(c=>{if(c.gone&&c.t>c.gone){scene.remove(c.mesh);if(c.own)c.mesh.material.dispose();return false}return true});
  for(let i=S.vfx.length-1;i>=0;i--){const f=S.vfx[i];f.t+=dt;if(f.t>=f.dur){scene.remove(f.mesh);if(f.ownMat)for(const a of f.anim)a.n.dispose();S.vfx.splice(i,1)}}
  for(const id in S.npc){const st=S.npc[id];if(st.state==='fading'){st.t-=dt;if(st.t<=0)st.state='gone'}}
  if(CH===4){if(Math.random()<dt*.04)play('howl',6);for(const q of W.wisps)if(Math.abs(q.x*16-pl.x)<240&&Math.abs(q.z*16-pl.y)<150&&Math.random()<dt*3)S.parts.push({k:'e',x:q.x*16+rnd(-4,4),y:q.z*16+rnd(-3,3),z:rnd(6,14),vx:rnd(-3,3),vy:0,vz:rnd(2,6),c:'#7fffd0',life:rnd(.6,1.2)})}
  if(CH===3)for(let i=0;i<4;i++){const q=W.rots[(Math.random()*W.rots.length)|0];if(q&&Math.abs(q[0]*16-pl.x)<220&&Math.abs(q[1]*16-pl.y)<140&&Math.random()<dt*14)S.parts.push({k:'e',x:q[0]*16+rnd(2,14),y:q[1]*16+rnd(2,14),z:0,vx:0,vy:0,vz:rnd(3,9),c:Math.random()<.5?'#e07a30':'#c24a20',life:rnd(.5,1.1)})}
  if(CH!==2){for(const p of PROPS)if(p.fire&&Math.random()<dt*(p.big?9:5)){S.parts.push({k:'e',x:p.x*16+rnd(-4,4),y:p.y*16-4,z:10,vx:rnd(-6,6),vy:0,vz:rnd(16,34),c:Math.random()<.5?P.ember:P.ember2,life:rnd(.8,1.6)});if(Math.random()<.35)S.parts.push({k:'a',x:p.x*16+rnd(-3,3),y:p.y*16-4,z:16,vx:rnd(-4,2),vy:0,vz:rnd(8,14),c:'#3a3640',life:rnd(1.5,3)})}
    if(CH===1)S.nextBolt-=dt;if(S.nextBolt<=0&&!S.opening){S.nextBolt=rnd(14,30);S.flash=1;setTimeout(()=>play('thunder',0),400)}}
  S.flash=Math.max(0,S.flash-dt*2.4);
  for(let i=0;i<S.shr.length;i++)S.shr[i]=Math.min(60,S.shr[i]+1.4*dt);
  for(const [x,y] of braziers)if(Math.random()<dt*4)S.parts.push({k:'e',x:x*16+8+rnd(-3,3),y:y*16+8,z:18,vx:rnd(-4,4),vy:0,vz:rnd(14,30),c:P.ember2,life:rnd(.8,1.6)});
  for(const [x,y] of lavas)if(Math.random()<dt*.25)S.parts.push({k:'e',x:x*16+rnd(2,14),y:y*16+rnd(2,14),z:0,vx:rnd(-3,3),vy:0,vz:rnd(10,22),c:'#f59e0b',life:rnd(.8,1.6)});
  updParts(dt);
  if(Math.random()<dt*.4&&S.enemies.length)play('growl',.8);
  if(S.bless&&(S.bless.t-=dt)<=0){pl.max-=S.bless.amt;pl.hp=Math.min(pl.hp,pl.max);S.bless=null;0}
  if(S.fury>0&&(S.fury-=dt)<=0)0;
  if(S.snare>0)S.snare-=dt;if(S.slowT>0)S.slowT-=dt;if(S.herb>0){S.herb-=dt;heal(pl.max*.02*dt)}
  if(S.heri>0&&(S.heri-=dt)<=0)0;
  if(S.trial&&!pl.dead){S.trial.t-=dt;const st=S.npc.mila;
    if(S.trial.k>=20){S.trial=null;st.state='talked';S.fury=120;play('bless',0);shake(.1,.4);say((EN?'Mila raises her bow in salute: "You fight like one of us." +20% damage for 2 minutes.':'Mila unosi łuk w salucie: „Walczysz jak jedna z nas”. +20% obrażeń na 2 minuty.'))}
    else if(S.trial.t<=0){S.trial=null;st.state='alive';st.retry=true;say((EN?'Mila shakes her head: "Too slow. Come back when you are ready."':'Mila kręci głową: „Za wolno. Wróć, gdy będziesz gotów”.'))}}
  S.stamFlash=Math.max(0,(S.stamFlash||0)-dt);S.hurt=Math.max(0,S.hurt-dt);S.shakeT=Math.max(0,S.shakeT-dt);if(S.shakeT<=0)S.shakeM=0;
  if(pl.dead){S.endT-=dt;if(S.endT<=0)endGame(false)}
  else if(S.won&&!S.opening){S.opening=3.4;for(const e of S.enemies){scene.remove(e.mesh);for(let i=0;i<8;i++)S.parts.push({k:'d',x:e.x,y:e.y,z:rnd(0,14),vx:rnd(-7,7),vy:0,vz:rnd(12,30),c:P.bone2,life:2})}S.enemies=[];if(CH===1){say((EN?'Dawn breaks. The dead crumble to ash.':'Świta. Martwi rozsypują się w popiół.'))}else if(CH===3){say((EN?'The beast falls silent. A pale, golden dawn rises above the domes.':'Bestia milknie. Nad kopułami wstaje blady, złoty świt.'));play('rumble',0)}else if(CH===4){say((EN?'Dawn spreads across the valley. The mist settles, the barrows fall silent.':'Świt rozlewa się po dolinie. Mgła opada, kurhany milkną.'));play('rumble',0)}else{say((EN?'The forge gates groan open.':'Wrota kuźni rozwierają się z jękiem.'));play('rumble',0);shake(.2,1.5)}}
  else if(S.opening){S.opening-=dt;if(S.opening<=0)endGame(true)}
}


/* ============ LEVEL STAGES: 6 min fight, Marga's stall, the Collector, fight until 12 min, then Zrost ============ */
const SHOP=[
  {id:'brew',name:(EN?'Bitter Brew':'Gorzki wywar'),d:(EN?'Restores all health.':'Leczy całe życie.'),cost:20},
  {id:'heart',name:(EN?'Ashen Heart':'Serce z popiołu'),d:(EN?'+25 maximum health.':'+25 do maksymalnego życia.'),cost:35},
  {id:'whet',name:(EN?'Bone Whetstone':'Osełka z kości'),d:(EN?'+10% damage for all skills.':'+10% obrażeń wszystkich umiejętności.'),cost:30},
  {id:'amulet',name:(EN?'Wind Amulet':'Amulet wiatru'),d:(EN?'+20 maximum stamina (up to 180; attributes can give more).':'+20 do maksymalnej staminy (do 180; cechy mogą dać więcej).'),cost:60},
  {id:'scroll',name:(EN?'Scroll of Memory':'Zwój pamięci'),d:(EN?'Instantly gain one level.':'Natychmiastowy awans o jeden poziom.'),cost:45},
  {id:'magnet',name:(EN?'Lodestone':'Kamień przyciągania'),d:(EN?'+40% pickup range for coins and hearts.':'+40% zasięgu zbierania monet i serc.'),cost:25}];
const price=it=>Math.round(it.cost*Math.pow(1.35,S.bought[it.id]||0)*(1-(S.disc||0)));
function dissolveAll(msg){for(const e of S.enemies){scene.remove(e.mesh);for(let i=0;i<8;i++)S.parts.push({k:'d',x:e.x,y:e.y,z:rnd(0,14),vx:rnd(-7,7),vy:0,vz:rnd(12,30),c:P.bone2,life:2})}S.enemies=[];if(msg)say(msg)}
function stageTick(dt){
  if(S.stage==='p1'&&S.t>=BREAK_AT&&!S.dg){S.stage='break';dissolveAll((EN?'Midnight. The dead retreat into the darkness, and Marga sets up her stall.':'Północ. Martwi cofają się w ciemność, a Marga rozkłada kram.')+(STORY?(EN?' "The hour of reckoning," she says.':' „Godzina rozliczeń”, mówi.'):''));
    let spot=null;for(let i=0;i<30&&!spot;i++){const a=Math.random()*Math.PI*2,x=pl.x+Math.cos(a)*44,y=pl.y+Math.sin(a)*30;if(!boxSolid(x,y,6,3))spot=[x,y]}
    spot=spot||[pl.x+20,pl.y];S.merchant={x:spot[0],y:spot[1],state:'in',t:1,wait:60};play('bless',0);
    for(let i=0;i<26;i++)S.parts.push({k:'a',x:spot[0]+rnd(-8,8),y:spot[1],z:rnd(0,20),vx:rnd(-8,8),vy:0,vz:rnd(8,20),c:'#3d4a3a',life:rnd(1,2)})}
  const m=S.merchant;
  if(m){if(m.state==='in'){m.t-=dt*1.5;if(m.t<=0)m.state='here'}
    else if(m.state==='here'){m.wait-=dt;if(m.wait<=0){say((EN?'Marga runs out of patience and packs up her stall.':'Marga traci cierpliwość i zwija kram.'));leaveMerchant()}}
    else if(m.state==='out'){m.t-=dt*1.5;if(m.t<=0){S.merchant=null;if(!m.dg){S.stage='collector';S.collT=2.5}}}}
  if(S.stage==='collector'&&S.collT>0&&CH===4&&A.leszy){S.collT-=dt;if(S.collT<=0){const p=ringSpot(120,170)||ringSpot(80,220)||[pl.x+100,pl.y],hp=bossHealth('leszy');
    S.leszy=spawnEnemy('leszy',p[0],p[1],{rise:1.4,hp,max:hp});play('bossGrowl',0);play('howl',0);shake(.2,1);say((EN?'The forest falls silent. Leshy, Lord of the Wilds, steps out from between the trees.':'Las milknie. Spomiędzy drzew wychodzi Leszy, Pan Kniei.'))}}
  else if(S.stage==='collector'&&S.collT>0){S.collT-=dt;if(S.collT<=0){const p=ringSpot(120,170)||ringSpot(80,220)||[pl.x+100,pl.y];const hp=bossHealth('collector',CH===5?1.3:1);
    S.collector=spawnEnemy('collector',p[0],p[1],{rise:1.2,hp,max:hp,stolen:0});play('bossGrowl',0);S.flash=CH===1?1:0;say(CH===5?(EN?'The bell falls silent. The Arch-Judge Auditor takes the judge\'s bench. He has come for your gold.':'Dzwon milknie. Na ławę sędziowską wchodzi Arcysędzia Rachmistrz. Przyszedł po twoje złoto.'):(EN?'The Order Collector steps out of the shadows. He has come for your gold.':'Z cienia wychodzi Poborca Zakonu. Przyszedł po twoje złoto.'))}}
  if(S.stage==='p2'&&S.t>=NIGHT){S.stage='final';const p=ringSpot(150,220)||ringSpot(100,300)||[pl.x+120,pl.y],bt=CH===3?'beast':CH===4&&A.strzyga?'strzyga':'boss',hp=bossHealth(bt);
    {const ord=S.enemies.filter(e=>!e.dead&&!BIG.has(e.type)&&e.type!=='collector'&&e.type!=='jerzak'&&e.type!=='boginka'&&e.type!=='wisp').sort((a,b)=>Math.hypot(b.x-pl.x,b.y-pl.y)-Math.hypot(a.x-pl.x,a.y-pl.y)),cut=Math.floor(ord.length*(1-BOSS_MOB));
      for(const e of ord.slice(0,cut)){for(let k=0;k<5;k++)S.parts.push({k:'d',x:e.x,y:e.y,z:rnd(0,8),vx:rnd(-14,14),vy:rnd(-8,8),vz:rnd(8,22),c:'#3a2c34',life:.5});scene.remove(e.mesh);const i=S.enemies.indexOf(e);if(i>=0)S.enemies.splice(i,1)}}
    spawnEnemy(bt,p[0],p[1],{rise:1.6,hp,max:hp});play('rise',0);play('bossGrowl',0);shake(.3,1);if(CH===1)S.flash=1;
    say(CH===5?(EN?'The seal on the Throne Room floor cracks. The Creditor rises from his throne to settle the account.':'Pieczęć na podłodze Sali Tronowej pęka. Wierzyciel wstaje z tronu, by zamknąć rachunek.'):CH===4?(bt==='strzyga'?(EN?'Ravens take flight from Bleak Peak. Mother Striga, Queen of the Barrows, rises from her barrow.':'Kruki zrywają się z Łysej Góry. Z kurhanu wstaje Strzyga Matka, Królowa Kurhanów.'):(EN?'The ground splits on Bleak Peak. The Outgrowth crawls out of the barrow, stitched together from buried bodies.':'Na Łysej Górze ziemia pęka. Z kurhanu wypełza Zrost, zszyty z ciał pogrzebanych.')):CH===1?(EN?'The Outgrowth rises from the ashes of the barn, stitched together from burned bodies.':'Z popiołów stodoły wstaje Zrost, zszyty z ciał spalonych.'):CH===2?(EN?'The Outgrowth crawls out of the abyss, stitched together from many bodies.':'Z przepaści wypełza Zrost, zszyty z wielu ciał.'):(EN?'Morhad, Beast of a Thousand Slaughters, drops from the cathedral roof, dripping with the blood of the slain.':'Z dachu katedry spada Morhad, Bestia Tysiąca Rzezi, ociekając krwią zabitych.'))}
}
function nearMerchant(){const m=S&&S.merchant;return m&&m.state==='here'&&!pl.dead&&Math.hypot(pl.x-m.x,pl.y-m.y)<34?m:null}
function leaveMerchant(){const m=S.merchant;if(!m||m.state==='out')return;m.state='out';m.t=1;for(let i=0;i<26;i++)S.parts.push({k:'a',x:m.x+rnd(-8,8),y:m.y,z:rnd(0,20),vx:rnd(-8,8),vy:0,vz:rnd(8,20),c:'#3d4a3a',life:rnd(1,2)})}
function shopMaxed(it){return it.id==='amulet'&&pl.staMax>=180}
function shopDesc(it){return it.id==='amulet'?(EN?'+20 maximum stamina (up to 180; attributes can give more).':'+20 do maksymalnej staminy (do 180; cechy mogą dać więcej).'):it.d}
function renderShop(){$('shopCoins').textContent=S.coins;const box=$('shopCards');box.innerHTML='';
  SHOP.forEach((it,i)=>{const pr=price(it),maxed=shopMaxed(it),b=document.createElement('button');b.type='button';b.className='card';b.id='shop'+i;b.disabled=maxed||S.coins<pr;
    b.innerHTML=(EN?`<span class="ck">Item ${i+1}</span><span class="cn"><i class="ic ic-${{brew:'brew',heart:'ashheart',whet:'whet',amulet:'amulet',scroll:'scroll',magnet:'magnet'}[it.id]}"></i>${it.name}</span><span class="cl coin">${maxed?'Sold out':pr+' coins'}</span><span class="cd">${shopDesc(it)}</span>`:`<span class="ck">Towar ${i+1}</span><span class="cn"><i class="ic ic-${{brew:'brew',heart:'ashheart',whet:'whet',amulet:'amulet',scroll:'scroll',magnet:'magnet'}[it.id]}"></i>${it.name}</span><span class="cl coin">${maxed?'Wyprzedane':pr+' monet'}</span><span class="cd">${shopDesc(it)}</span>`);b.addEventListener('click',()=>buy(i));box.appendChild(b)})}
function openShop(){resetInput();S.shop=true;pl.swingT=0;renderShop();$('shop').hidden=false;$('touch').hidden=true;setTimeout(()=>{const f=$('shopClose');f&&f.focus()},30)}
function buy(i){const it=SHOP[i];if(!it||!S.shop)return;const pr=price(it);if(S.coins<pr||shopMaxed(it)){play('empty',0);return}
  S.coins-=pr;S.bought[it.id]=(S.bought[it.id]||0)+1;play('coin',0);
  if(it.id==='brew')pl.hp=pl.max;else if(it.id==='heart'){pl.max+=25;heal(25)}else if(it.id==='whet')S.whet++;else if(it.id==='amulet'){pl.staMax=Math.min(180,pl.staMax+20);pl.sta=pl.staMax}
  else if(it.id==='scroll'){S.lvl++;S.need=xpNeed(S.lvl);S.pendLv++}else if(it.id==='magnet')S.magnet+=.4;
  renderShop()}
function closeShop(){if(!S||!S.shop)return;S.shop=false;$('shop').hidden=true;$('touch').hidden=!coarse;const mdg=S.merchant&&S.merchant.dg;leaveMerchant();say(mdg?(EN?'Marga: "The stairs lead up. The night will wait for you."':'Marga: „Schody prowadzą na górę. Noc na ciebie poczeka.”'):(EN?'Marga: "Careful. The Order\'s collector has sniffed out your gold."':'Marga: „Uważaj. Poborca zakonu zwęszył twoje złoto.”'));if(S.pendLv>0)openLevelUp()}
/* ============ THE CRYPT: a random dungeon under the Brzeźnica graveyard (once per night, before midnight) ============ */
const DG_T1=['possessed','madman','ghoul','hound','dwarf','bat','wolf','strzygon'],DG_T2=['bandit','monk','xbow','zmora','drowner'],DG_BOSS=['boss','beast','leszy','strzyga'];
const DG_BOSS_MSG={boss:(EN?'The Outgrowth rises from a pile of bones deep in the hall, stitched together from the bodies buried in the crypt.':'Ze stosu kości w głębi sali wstaje Zrost, zszyty z ciał pogrzebanych w krypcie.'),beast:(EN?'Morhad, Beast of a Thousand Slaughters, bursts out of the crypt\'s darkness. Someone locked him in here.':'Z mroku krypty wypada Morhad, Bestia Tysiąca Rzezi. Ktoś go tu zamknął.'),
  leszy:(EN?'Roots burst through the floor. Leshy, Lord of the Wilds, has come for those who lie here.':'Korzenie rozsadzają posadzkę. Leszy, Pan Kniei, przyszedł po tych, co tu leżą.'),strzyga:(EN?'The sarcophagus lid cracks. Mother Striga, Queen of the Barrows, rises.':'Wieko sarkofagu pęka. Wstaje Strzyga Matka, Królowa Kurhanów.')};
function releaseWorld(ch){const old=WORLDS[ch];if(!old)return;scene.remove(old.group);const keep=new Set([geo32,geo64,geoC,geoT,geo64w,floorGeo,groundFxGeo,groundShadowMat,groundGlowMat,groundGlowTex,waterTex,lavaTex]),seen=new Set();const remember=v=>{if(!v||typeof v!=='object'||seen.has(v))return;seen.add(v);if(v.isMaterial){keep.add(v);for(const x of Object.values(v))if(x&&x.isTexture)keep.add(x)}else if(Array.isArray(v))v.forEach(remember);else if(!v.isTexture)Object.values(v).forEach(remember)};remember(A);for(const [k,w] of Object.entries(WORLDS))if(+k!==ch)w.group.traverse(o=>{if(o.geometry)keep.add(o.geometry);for(const m of [].concat(o.material||[])){keep.add(m);for(const v of Object.values(m))if(v&&v.isTexture)keep.add(v)}});const resources=new Set();old.group.traverse(o=>{if(o.geometry)resources.add(o.geometry);for(const m of [].concat(o.material||[],o.customDistanceMaterial||[],o.customDepthMaterial||[])){resources.add(m);for(const v of Object.values(m))if(v&&v.isTexture)resources.add(v)}});for(const r of resources)if(!keep.has(r)&&r.dispose)r.dispose();old.group.clear();delete WORLDS[ch]}
function releaseDungeon(){releaseWorld(9)}
function makeDungeon(){releaseDungeon();initWorld(9);useWorld(9);ROOT=W.group;buildDungeon(IMGS);fitWorldProps(W,9);finishWorldArt(W);ROOT=scene;buildMini()}
// everything lying around belongs to the level we leave; coins on the ground are picked up on the way
function stashEntities(){clearSwordTransient();S.swordTrails=[];for(const p of S.picks)if(p.k==='c'){if(p.returned)S.coins+=p.v||1;else awardCoins(p.v||1)}
  for(const m of [...S.enemies.map(e=>e.mesh),...S.picks.flatMap(p=>[p.mesh,p.glow]),...S.vfx.map(f=>f.mesh),...S.corpses.map(c=>c.mesh),...S.zones.map(z=>z.mesh),...(S.eproj||[]).map(f=>f.mesh)])if(m)scene.remove(m);
  for(const c of S.corpses)if(c.own)c.mesh.material.dispose();S.enemies=[];S.picks=[];S.vfx=[];S.waves=[];S.corpses=[];S.zones=[];S.eproj=[];S.quakes=[];S.delayed=[];S.parts=[];S.leszy=null;S.collector=null;S.merchant=null;
  for(const g of S.golems){g.x=pl.x+rnd(-10,10);g.y=pl.y+rnd(-6,6)}
  Object.assign(pl,{roll:0,swingT:0,inv:1,atk:null,block:false,charging:false,atkHeld:false});camTarget.set(pl.x/16,0,pl.y/16)}
function enterDungeon(){const fog=canvas(MW,MH);fog.getContext('2d').drawImage(MINI.fog,0,0);const dec=canvas(WW,WH);dec.getContext('2d').drawImage(decalC,0,0);
  S.dgBack={x:W.crypt.x,y:W.crypt.y+12,shr:S.shr,fog,dec};
  makeDungeon();pl.x=START.x;pl.y=START.y;stashEntities();
  S.shr=W.shrines.map(()=>60);S.dg={done:false,boss:null,margaT:0};
  dg.clearRect(0,0,WW,WH);decalDirty=true;resetFog();MINI.t=0;lastHud='';
  populateDungeon();play('rumble',0);shake(.15,.6);
  say((EN?'You descend into the crypt beneath the cemetery. Above, the night stands still. Something awaits you in the deepest hall.':'Schodzisz do krypty pod cmentarzem. Na górze noc stoi w miejscu. W najgłębszej sali coś na ciebie czeka.'))}
function exitDungeon(){const b=S.dgBack,done=S.dg&&S.dg.done;useWorld(1);pl.x=b.x;pl.y=b.y;stashEntities();S.shr=b.shr;
  const fg=MINI.fog.getContext('2d');fg.globalCompositeOperation='source-over';fg.clearRect(0,0,MW,MH);fg.drawImage(b.fog,0,0);
  dg.clearRect(0,0,WW,WH);dg.drawImage(b.dec,0,0);decalDirty=true;
  S.dg=null;S.dgBack=null;S.dgDone=true;S.spawnT=1.5;lastHud='';play('rumble',0);
  say(done?(EN?'You leave the crypt with a full purse. The entrance collapses behind you.':'Wychodzisz z krypty z pełną sakwą. Wejście zapada się za tobą.'):(EN?'You flee the crypt. The entrance collapses behind you.':'Uciekasz z krypty. Wejście zapada się za tobą.'))}
// low dead from every chapter sleep in the crypts and wake together when you come close or hurt one of them
function populateDungeon(){const T1=DG_T1.filter(k=>A[k]&&ET[k]),T2=DG_T2.filter(k=>A[k]&&ET[k]);
  W.rooms.forEach((R,i)=>{if(R.k==='start'||R.k==='boss')return;const n=3+((Math.random()*3)|0)+(S.lvl>=8?1:0)+(R.k==='pre'?1:0);
    for(let j=0;j<n;j++){let p=null;for(let t=0;t<30&&!p;t++){const x=(R.x+1+Math.random()*(R.w-2))*TS,y=(R.y+1+Math.random()*(R.h-2))*TS;if(!boxSolid(x,y,6,4))p=[x,y]}if(!p)continue;
      const pool=Math.random()<.62||!T2.length?T1:T2,t=pool[(Math.random()*pool.length)|0];
      for(let k=0;k<(t==='bat'||t==='wolf'||t==='hound'?2:1);k++)spawnEnemy(t,p[0]+(k?rnd(-10,10):0),p[1]+(k?rnd(-6,6):0),{rise:0,sleep:1,room:i})}})}
function wakeRoom(e){for(const q of S.enemies)if(q.room===e.room)q.sleep=0}
function dungeonTick(dt){const d=S.dg;
  if(!d.boss&&!d.done){const B=W.rooms.find(R=>R.k==='boss'),tx=pl.x/TS,ty=pl.y/TS;
    if(tx>B.x+.8&&tx<B.x+B.w-.8&&ty>B.y+.8&&ty<B.y+B.h-.8){const types=DG_BOSS.filter(k=>A[k]),t=types[(Math.random()*types.length)|0],hp=bossHealth(t,.45);
      let p=null;for(let i=0;i<40&&!p;i++){const x=(B.x+B.w*(.3+Math.random()*.4))*TS,y=(B.y+B.h*(.3+Math.random()*.4))*TS;if(!boxSolid(x,y,10,4)&&Math.hypot(x-pl.x,y-pl.y)>70)p=[x,y]}
      p=p||[(B.x+B.w/2)*TS,(B.y+B.h/2)*TS];d.boss=spawnEnemy(t,p[0],p[1],{rise:1.6,hp,max:hp,dgBoss:true});play('rise',0);play('bossGrowl',0);shake(.3,1);say(DG_BOSS_MSG[t])}}
  if(d.margaT>0&&(d.margaT-=dt)<=0){let spot=null;for(let i=0;i<30&&!spot;i++){const a=Math.random()*Math.PI*2,x=pl.x+Math.cos(a)*44,y=pl.y+Math.sin(a)*30;if(!boxSolid(x,y,6,3))spot=[x,y]}
    spot=spot||[pl.x+20,pl.y];S.merchant={x:spot[0],y:spot[1],state:'in',t:1,wait:90,dg:true};play('bless',0);
    for(let i=0;i<26;i++)S.parts.push({k:'a',x:spot[0]+rnd(-8,8),y:spot[1],z:rnd(0,20),vx:rnd(-8,8),vy:0,vz:rnd(8,20),c:'#3d4a3a',life:rnd(1,2)});say((EN?'Marga steps out of the shadow between the sarcophagi and sets up her stall.':'Z cienia między sarkofagami wychodzi Marga i rozkłada kram.'))}}
function dungeonCleared(e){const d=S.dg;if(!d||d.done)return;d.done=true;d.boss=null;d.margaT=2.2;S.coins+=150;play('coin',0);play('bless',0);lastHud='';
  for(let i=0;i<40;i++){const a=Math.random()*Math.PI*2,sp=rnd(30,90);S.parts.push({k:'e',x:e.x,y:e.y,z:rnd(4,16),vx:Math.cos(a)*sp,vy:Math.sin(a)*sp*.6,vz:rnd(20,50),c:Math.random()<.6?'#e0b84a':'#fff0b0',life:rnd(.8,1.6)})}
  say((EN?'The crypt falls silent. 150 coins are added to your purse. The stairs deep in the hall lead up.':'Krypta milknie. Na twoje konto wpada 150 monet. Schody w głębi sali prowadzą na górę.'))}
// stairs: down into the crypt from the graveyard (before midnight, once), back up from the entrance room or, after the boss, from the boss hall
function nearExit(){if(!S||pl.dead)return null;
  if(CH===1&&W.crypt&&Math.hypot(pl.x-W.crypt.x,pl.y-W.crypt.y)<30)return{x:W.crypt.x,y:W.crypt.y-6,kind:S.dgDone||S.stage!=='p1'?'sealed':'enter'};
  if(CH===9&&S.dg)for(const p of PROPS){if(!p.exit)continue;const x=p.x*16,y=(p.y+.5)*16;if(Math.hypot(pl.x-x,pl.y-y)<30&&(p.exit==='start'||S.dg.done))return{x,y:y-6,kind:'leave'}}
  return null}
function useExit(n){if(n.kind==='enter')enterDungeon();else if(n.kind==='leave')exitDungeon();
  else say(S.dgDone?(EN?'The crypt entrance has collapsed.':'Wejście do krypty zawaliło się.'):(EN?'At midnight the crypt seals shut. Try again next night.':'O północy krypta zamyka się na głucho. Spróbuj następnej nocy.'))}
/* ============ RENDER ============ */
const camTarget=new THREE.Vector3();let idleA=0;
// slasher hero v2 (S1-S4 sheets): every state has its own drawn-sword animation
function heroFrameV2(D){const fd=()=>Math.abs(pl.fx)>Math.abs(pl.fy)?'side':pl.fy>0?'down':'up',ix=(a,i)=>a[Math.max(0,Math.min(a.length-1,i|0))];
  if(pl.roll>0)return ix(D.roll,pl.rollT/.3*4);
  if(pl.atk){const a=pl.atk,P=a.kind==='h'?SL.heavy:SL.light,d=pl.swingDir===2?'side':pl.swingDir===0?'down':'up',arr=a.kind==='h'?D.heavy[d]:D.light[d][a.visualRiposte?2:a.combo||0];
    if(a.stage==='wind')return ix(arr,a.kind==='h'?(a.t>(a.visualWind||P.wind)*.75?0:1):0);if(a.stage==='act')return ix(arr,a.kind==='h'?2:1);
    if(a.kind==='h')return ix(arr,a.t>P.rec*.72?2:3);return ix(arr,a.t>P.rec*.5?2:3)}
  if(pl.swingT>0&&!pl.block&&!(pl.parryT>0)&&!(pl.broken>0)&&!(pl.hurtT>0)&&!pl.charging){const d=pl.swingDir===2?'side':pl.swingDir===0?'down':'up',dur=pl.swingDur||.25;return ix(D.light[d][0],(dur-pl.swingT)/dur*4)}
  if(pl.broken>0)return ix(D.broken,(1-pl.broken/SL.guardBreak)*4);
  if(pl.parryT>0)return ix(D.parryDir?D.parryDir[fd()]:D.parry,(.45-pl.parryT)/.45*4);
  if(pl.charging){const d=fd();return d==='side'?at(D.charge,clock,4.2):D.heavy[d][0]}
  if(pl.block){const d=fd();if(pl.gHitT>0)return d==='side'?D.guard[3]:D.parryDir?D.parryDir[d][0]:D.guard[d==='down'?1:2];if(pl.moving&&(D.guardWalkDir||d==='side'))return at(D.guardWalkDir?D.guardWalkDir[d]:D.guard_walk,pl.walk,6.7);return D.guard[d==='side'?0:d==='down'?1:2]}
  if(pl.hurtT>0)return ix(D.hurt,(.22-pl.hurtT)/.22*2);
  return null}
// enchant colour on the sword itself: the grey pixels on the sword side of every hero frame get the spell colour (per frame, built once, so it turns with the sprite)
const BLADE_TINT={venom:[150,255,70],fireblade:[255,122,30],iceblade:[110,200,255],bloodblade:[225,10,18]};
// krew: brazowa animacja uderzenia z arkusza zamieniona w krwista czerwien (jedna kopia przy starcie; reszta arkusza bez zmian)
function bloodFix(img,y0,hh){try{const w=img.width,h=img.height,c=canvas(w,h),g=c.getContext('2d');g.drawImage(img,0,0);const id=g.getImageData(0,y0,w,hh),d=id.data;
  for(let i=0;i<d.length;i+=4){if(d[i+3]===0)continue;const v=Math.min(1,Math.max(d[i],d[i+1],d[i+2])/255*1.9+.10);d[i]=215*v+10;d[i+1]=14*v;d[i+2]=18*v}
  g.putImageData(id,0,y0);return c}catch(e){return img}}
function heroBladeMat(fr,k){const key='E'+k;if(fr[key]!==undefined)return fr[key];fr[key]=null;try{const n=fr.n,mi=n&&n.map&&n.map.image,ei=n&&n.emissiveMap&&n.emissiveMap.image,T=BLADE_TINT[k];if(!mi||!ei||!T)return null;
  const w=mi.width,h=mi.height,cv=canvas(w,h),g=cv.getContext('2d');g.drawImage(mi,0,0);const id=g.getImageData(0,0,w,h),d=id.data;let x0=w,x1=-1;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(d[(y*w+x)*4+3]>0){if(x<x0)x0=x;if(x>x1)x1=x}
  if(x1<0)return null;const lim=x0+.55*(x1-x0+1),hit=[];
  for(let y=0;y<h;y++)for(let x=Math.ceil(lim);x<w;x++){const i=(y*w+x)*4;if(d[i+3]===0)continue;const r=d[i],gg=d[i+1],b=d[i+2],mx=Math.max(r,gg,b),mn=Math.min(r,gg,b);
    if(mx>=95&&mx-mn<45){const l=(r+gg+b)/765;d[i]=r*.2+Math.min(255,T[0]*(.5+.7*l))*.8;d[i+1]=gg*.2+Math.min(255,T[1]*(.5+.7*l))*.8;d[i+2]=b*.2+Math.min(255,T[2]*(.5+.7*l))*.8;hit.push(i)}}
  if(!hit.length)return null;g.putImageData(id,0,0);
  const ec=canvas(w,h),eg=ec.getContext('2d');eg.drawImage(ei,0,0);const ed=eg.getImageData(0,0,w,h);for(const i of hit){ed.data[i]=T[0]*.6;ed.data[i+1]=T[1]*.6;ed.data[i+2]=T[2]*.6}eg.putImageData(ed,0,0);
  const m=n.clone(),t1=texFrom(cv),t2=texFrom(ec);for(const p of ['minFilter','magFilter','generateMipmaps'])if(n.map[p]!==undefined)t1[p]=n.map[p];for(const p of ['minFilter','magFilter','generateMipmaps'])if(n.emissiveMap[p]!==undefined)t2[p]=n.emissiveMap[p];
  m.map=t1;m.emissiveMap=t2;m.needsUpdate=true;fr[key]=m;return m}catch(e){return null}}
function heroFrame(){
  const H=A.hero,V2=A.heroD&&A.heroD.v2?A.heroD:null;
  if(V2&&!pl.dead){const r=heroFrameV2(V2);if(r)return r}
  if(pl.dead)return at(H.death,pl.deadT,5,false);
  if(pl.roll>0)return at(H.roll,pl.rollT,13,false);
  if(pl.swingT>0){const a=pl.swingDir===2?H.swing_side:pl.swingDir===0?H.swing_down:H.swing_up,dur=pl.swingDur||.32;{const f=(dur-pl.swingT)/dur;return a[Math.min(a.length-1,f<.12?0:f<.24?1:f<.62?2:3)]}}
  const D=A.heroD;
  if(D&&pl.block){const side=Math.abs(pl.fx)>Math.abs(pl.fy);return (side?D.idle_side:pl.fy>0?D.idle_down:D.idle_up)[0]}
  if((pl.charging||pl.block||pl.broken>0)){const side=Math.abs(pl.fx)>Math.abs(pl.fy);return (side?H.swing_side:pl.fy>0?H.swing_down:H.swing_up)[pl.broken>0?3:0]}
  if(pl.hurtT>0)return at(H.hurt,.22-pl.hurtT,9,false);
  if(D){if(pl.moving)return at(pl.dir===2?D.walk_side:pl.dir===0?D.walk_down:D.walk_up,pl.walk,6.7);return at(pl.dir===2?D.idle_side:pl.dir===0?D.idle_down:D.idle_up,clock,2.9)}
  if(pl.moving)return at(pl.dir===2?H.walk_side:pl.dir===0?H.walk_down:H.walk_up,pl.walk,8);
  return at(pl.dir===2?H.idle_side:pl.dir===0?H.idle_down:H.idle_up,clock,pl.dir===0?4:2.5);
}
// Seal of warding: a glowing amber hexagon sigil drawn once into a texture, shown around the hero while it has charges
let threatPool=null;
function syncThreatRings(){if(!threatPool){const geo=new THREE.RingGeometry(.96,1,48).rotateX(-Math.PI/2);threatPool=Array.from({length:8},()=>{const m=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:0xffd267,transparent:true,opacity:.65,depthWrite:false,fog:false,side:THREE.DoubleSide}));m.renderOrder=3;scene.add(m);return m})}for(const m of threatPool)m.visible=false;if(!S||S.phase!=='play')return;let i=0;for(const e of S.enemies){if(i>=threatPool.length||e.dead||e.rise>0)continue;let radius=0,x=e.x,y=e.y;if(e.type==='collector')radius=e.hamT>0?56:56;else if(e.atkT>0)radius=54;else if(e.mode==='root'){radius=32;x=e.tx;y=e.ty}else if(e.mode==='up'){radius=e.type==='beast'?70:62;x=e.tx;y=e.ty}if(!radius)continue;const m=threatPool[i++];m.visible=true;m.position.set(x/16,.045,y/16);m.scale.setScalar(radius/16);m.material.color.set(SETT.contrast?'#ffe270':e.type==='collector'?'#e0b84a':'#ff6655');m.material.opacity=e.type==='collector'&&!(e.hamT>0)?.3:.7}}
function syncScene(dt){SURFACE_TIME.value=clock;syncThreatRings();
  let tx,tz;
  if(S){tx=pl.x/16;tz=pl.y/16}else{idleA+=dt*.08;const I=W.idle;tx=I[0]+Math.sin(idleA)*I[2];tz=I[1]+Math.cos(idleA*.7)*I[3]}
  camTarget.x+=(tx-camTarget.x)*Math.min(1,dt*8);camTarget.z+=(tz-camTarget.z)*Math.min(1,dt*8);if(!S||S.t<.1){camTarget.x=tx;camTarget.z=tz}
  let sx=0,sz=0;if(SETT.shake&&S&&S.shakeT>0){const pxw=2*DIST*Math.tan(12*Math.PI/180)/RT_H;S.shkT=(S.shkT||0)-dt;if(S.shkT<=0||!S.shk){S.shkT=.04;S.shk=[Math.round(rnd(-1,1)*S.shakeM/pxw)*pxw,Math.round(rnd(-1,1)*S.shakeM/pxw)*pxw/Math.sin(PITCH)]}sx=S.shk[0];sz=S.shk[1]}
  cam.position.set(camTarget.x+sx,Math.sin(PITCH)*DIST,camTarget.z+Math.cos(PITCH)*DIST+sz);cam.lookAt(camTarget.x+sx,.8,camTarget.z+sz);syncSwordGlow();syncCombatEffects(dt);syncWhirlVisual(dt);
  const z0=S&&S.zones[0];if(z0){W.zoneLight.x=z0.x/16;W.zoneLight.z=z0.y/16}
  for(const L of LSRC){let k=L.base;
    if(L.kind==='fire')k*=.85+Math.sin(clock*13+L.ph)*.08+Math.random()*.12;else if(L.kind==='lava'||L.kind==='rot')k*=.9+Math.sin(clock*1.7+L.ph)*.1;else if(L.kind==='rune')k*=.75+.25*Math.sin(clock*2+L.ph);
    else if(L.kind==='shrine')k*=.3+.7*(S?S.shr[L.si]/60:1);else if(L.kind==='stone')k=S&&S.stones&&S.stones[L.si]>=STONE_N?L.base*(.8+.2*Math.sin(clock*2.4+L.ph)):0;else if(L.kind==='gate')k=S&&S.opening?2.8*Math.min(1,(3.4-S.opening)/1.4):0;
    else if(L.kind==='npc'){const st=S?S.npc[L.npc]:{state:'alive'};k=st.state==='alive'||st.state==='talked'||st.state==='trial'||st.state==='offered'?L.base*(.8+.2*Math.sin(clock*3+L.ph)):st.state==='fading'?L.base*Math.max(0,st.t/1.5):0}
    else if(L.kind==='merchant')k=S&&S.merchant?L.base*(.85+.15*Math.sin(clock*4)):0;else if(L.kind==='zone')k=z0?1.6*Math.min(1,z0.life)*(.85+Math.random()*.2):0;
    L.k=k;L.d=k>0?Math.hypot(L.x-camTarget.x,(L.z-camTarget.z)*1.3):1e9}
  const nearL=LSRC.filter(L=>L.k>0).sort((a,b)=>a.d-b.d);const lightCap=SETT.quality==='low'?4:10;
  LPOOL.forEach((l,i)=>{const L=i<lightCap?nearL[i]:null;if(!L||L.d>26){l.intensity=0;return}l.color.setHex(L.col);l.distance=L.dist;l.position.set(L.x,L.y,L.z);l.intensity=L.k*Math.min(1,(26-L.d)/4)});
  if(S&&S.t>0&&Math.random()<dt*(SETT.quality==='low'?12:22)){const a=Math.random()*Math.PI*2,d=Math.random()*200;S.parts.push(CH===4?(Math.random()<.35?{k:'m',x:pl.x+Math.cos(a)*d,y:pl.y+Math.sin(a)*d*.6,z:rnd(4,26),vx:rnd(-4,4),vy:rnd(-2,2),vz:rnd(-1.5,1.5),c:Math.random()<.5?'#c8e070':'#7fffd0',life:rnd(1.5,3.5)}:{k:'m',x:pl.x+Math.cos(a)*d,y:pl.y+Math.sin(a)*d*.6,z:rnd(1,8),vx:rnd(-5,-1),vy:rnd(-1,1),vz:rnd(-.5,.5),c:Math.random()<.6?'#4a5660':'#5e6a72',life:rnd(3,6)}):CH===3?{k:'m',x:pl.x+Math.cos(a)*d,y:pl.y+Math.sin(a)*d*.6,z:rnd(30,70),vx:rnd(-3,3),vy:rnd(-1,1),vz:rnd(-5,-2),c:Math.random()<.6?'#c8a040':'#7a6030',life:rnd(4,7)}:CH===1?{k:'m',x:pl.x+Math.cos(a)*d,y:pl.y+Math.sin(a)*d*.6,z:rnd(30,70),vx:rnd(-6,2),vy:rnd(-1,1),vz:rnd(-9,-5),c:Math.random()<.6?'#6a6670':'#8a8490',life:rnd(3,6)}:{k:'m',x:pl.x+Math.cos(a)*d,y:pl.y+Math.sin(a)*d*.6,z:rnd(4,40),vx:rnd(-3,3),vy:rnd(-2,2),vz:rnd(-1,2),c:Math.random()<.7?'#5c5566':'#7d6a58',life:rnd(2,4)})}
  if(S&&CH===2&&Math.abs(pl.x/16-MP(37.5))<16&&Math.random()<dt*14)S.parts.push({k:'e',x:rnd(MP(35.2),MP(39.8))*16,y:(camTarget.z+rnd(-7,7))*16,z:-rnd(20,90),vx:rnd(-2,2),vy:0,vz:rnd(14,30),c:Math.random()<.6?'#ff6a1a':'#ffb347',life:rnd(2,4)});
  const lf=((clock*5)|0)%4;if(CH===2&&lf!==lavaFrame&&lavaFrames.length){lavaFrame=lf;lavaG.clearRect(0,0,64,64);lavaG.drawImage(lavaFrames[lf],0,0);lavaTex.needsUpdate=true}
  if(CH===3&&W.rotTex){const rf=((clock*2.5)|0)%4;if(rf!==W.rotF){W.rotF=rf;W.rotG.clearRect(0,0,64,64);W.rotG.drawImage(W.rotFrames[rf],0,0);W.rotTex.needsUpdate=true}}
  if(CH===4&&W.water){const f4=((clock*4)|0)%4;for(const o of W.water)if(o.f!==f4){o.f=f4;o.g.clearRect(0,0,64,64);o.g.drawImage(o.frames[f4],0,0);o.tex.needsUpdate=true}
    const dz=S&&S.t>DZIADY_AT?Math.min(1,(S.t-DZIADY_AT)/8)*(S.opening?0:1):0;scene.fog.density=ATM[4].fd+dz*.009;scene.fog.color.setHex(ATM[4].fog).lerp(TMPC.setHex(0x12261a),dz)}
  const wf=((clock*3)|0)%4;if(CH===1&&wf!==waterFrame&&waterFrames.length){waterFrame=wf;waterG.clearRect(0,0,64,64);waterG.drawImage(waterFrames[wf],0,0);waterTex.needsUpdate=true}
  // weather and dawn (chapter I)
  const fl=SETT.flash&&S?S.flash:0,dawn=CH!==2&&S&&S.opening?Math.min(1,(3.4-S.opening)/2.4):0,AT=ATM[CH];
  amb.intensity=AT.ai+fl*1.4+dawn*.9;hemi.intensity=AT.hi+fl*.8+dawn*.5;if(dawn>0){TMPC.setHex(AT.amb);amb.color.copy(TMPC.lerp(DAWN,dawn))}else amb.color.setHex(AT.amb);
  postMat.uniforms.flash.value=fl*.3;postMat.uniforms.sharp.value=S&&S.shakeT>0?1:Math.max(0,postMat.uniforms.sharp.value-dt*4);
  rain.visible=CH===1;if(rain.visible){rain.material.opacity=.32*(1-dawn*.7);for(let i=0;i<RAIN_N;i++){const d=DROPS[i];d.y-=d.s*dt;d.x-=d.s*.12*dt;if(d.y<0){d.y+=12;d.x=rnd(-15,15);d.z=rnd(-10,10);if(S&&dt>0&&i%9===0)S.parts.push({k:'d',x:(camTarget.x+d.x)*16,y:(camTarget.z+d.z)*16,z:1,vx:rnd(-6,6),vy:rnd(-3,3),vz:rnd(8,14),c:'#6a7a96',life:.25})}
    const x=camTarget.x+d.x,z=camTarget.z+d.z,o=i*6;rainPos[o]=x;rainPos[o+1]=d.y;rainPos[o+2]=z;rainPos[o+3]=x+.07;rainPos[o+4]=d.y-.55;rainPos[o+5]=z}rainGeo.attributes.position.needsUpdate=true}
  for(const o of propObjs){let f;
    if(o.kind==='gate')f=o.frames[!S||!S.opening?0:S.opening>2.4?1:2];
    else if(o.kind==='shrine')f=at(o.frames,clock+o.ph,6);
    else if(o.kind==='stone')f=o.frames[S&&S.stones&&S.stones[o.si]>=STONE_N?1:0];
    else f=o.fps?at(o.frames,clock+o.ph,o.fps):o.frames[0];
    if(f&&o.mesh.material!==f.n)setFrame(o.mesh,f)}
  CUT.value.set(S&&!pl.dead?pl.x/16:-99,0,S&&!pl.dead?pl.y/16:-99);
  if(S&&!pl.dead&&(CH===3||CH===4)){V.set(pl.x/16,.9,pl.y/16).project(cam);CUTS.value.set((V.x+1)/2*rt.width,(V.y+1)/2*rt.height,rt.height*.16)}else CUTS.value.set(-999,-999,0);
  if(S){plLight.position.set(pl.x/16,2.4,pl.y/16);plLight.intensity=pl.dead?.6:2.05+Math.sin(clock*9)*.06}else plLight.position.set(tx,2.4,tz);
  let bi=0;const blob=(x,z,s)=>{if(bi>=MAXB)return;V.set(x,.03,z);SC.set(s,1,s*.6);M4.compose(V,Q.set(0,0,0,1),SC);blobs.setMatrixAt(bi++,M4)};
  // NPCs of the active chapter
  for(const n of W.npcs){const m=W.npcMeshes[n.id];if(!m)continue;const st=S?S.npc[n.id]:{state:'alive',t:0};
    m.visible=st.state!=='gone'&&st.state!=='risen';if(!m.visible)continue;const fr=A[n.art];
    if(n.art==='tharm'){setFrame(m,at(fr,clock,4));m.material.opacity=st.state==='fading'?.85*Math.max(0,st.t/1.5):.6+.25*Math.sin(clock*3)}
    else if(st.state==='dead')setFrame(m,fr[3]);
    else setFrame(m,at(n.art==='marga'?fr:fr.slice(0,3),clock+n.x,n.art==='wit'?5:n.art==='elder'?1.5:3));
    m.position.set(n.x/16,0,n.y/16);m.scale.set(1,SQ,1);if(n.art!=='tharm')blob(n.x/16,n.y/16,1)}
  if(S){
    heroMesh.visible=!(SETT.flash&&pl.inv>0&&pl.roll<=0&&!pl.dead&&Math.floor(clock*24)%2);
    {const hf=heroFrame(),ek=encLevel()[0];S.heroHF=hf;setFrame(heroMesh,hf);const hv=ek&&hf?heroBladeMat(hf,ek):null;if(hv&&heroMesh.material===hf.n){hv.emissiveIntensity=.8+.35*Math.sin(clock*6);heroMesh.material=hv}}
    const hs=pl.roll>0||pl.dead?pl.s:A.heroD&&A.heroD.v2&&!pl.atk&&(pl.parryT>0||pl.broken>0||(pl.hurtT>0&&!pl.block))?(pl.fx>=0?1:-1):pl.swingT>0?(pl.swingDir===2?pl.swingS:1):(pl.charging||pl.block)&&Math.abs(pl.fx)>Math.abs(pl.fy)?(pl.fx>0?1:-1):(pl.dir===2?pl.s:1);
    const guardRecoil=!pl.dead?recoilAmount(pl.visualGuard):0;heroMesh.position.set((pl.x+(pl.visualGuard?pl.visualGuard.dx:0)*guardRecoil*.7)/16,0,(pl.y+(pl.visualGuard?pl.visualGuard.dy:0)*guardRecoil*.7)/16);heroMesh.rotation.z=-(pl.visualGuard?pl.visualGuard.dx:0)*guardRecoil*.018;heroMesh.scale.set(hs,SQ,1);twinDraw(hs);
    S.qBreak=Math.max(0,(S.qBreak||0)-dt);S.qPop=Math.max(0,(S.qPop||0)-dt);
    // charges orbit the hero as sparks; runes of time and reach leave their own orbiting motes
    const orbit=(n,r,sp,col,z)=>{if(dt<=0)return;for(let i=0;i<n;i++){const a=clock*sp+i*Math.PI*2/n;S.parts.push({k:'e',x:pl.x+Math.cos(a)*r,y:pl.y+Math.sin(a)*r*.6,z,vx:0,vy:0,vz:0,c:col,life:.05})}};
    if(!pl.dead)blob(pl.x/16,pl.y/16,1);
    for(const e of S.enemies){
      const an=A[e.type];let fr;
      if(e.type==='bat')fr=at(an.walk,clock+e.ph,12);
      else if(e.type==='jerzak'){if(e.rise>0)fr=at(an.roll,clock,8);else if(e.selfKill>0){const el=1.1-e.selfKill;fr=el<.45?at(an.panic,el,10):at(an.attack,el-.45,6.5,false)}else fr=at(an.walk,e.walk,7)}
      else if(e.type==='collector'){const cdx=pl.x-e.x,cdy=pl.y-e.y;
        if(e.atkA>0)fr=at(an.attack,.35-e.atkA,11,false);else if(e.hurtA>0)fr=at(an.hurt,.3-e.hurtA,7,false);else if(clock-(e.drainAt||-9)<.6)fr=at(an.drain,clock,8);
        else if(e.tauntA>0)fr=at(an.taunt,1-e.tauntA,3);else fr=at(Math.abs(cdx)>Math.abs(cdy)*.8?an.walk:an.front,e.walk+e.ph,7)}
      else if(e.type==='beast'){if(an.sheet)fr=e.roarT>0?at(an.rage,1.4-e.roarT,2.2,false):e.mode==='wind'||e.atkT>0?an.attack[0]:e.mode==='charge'?at(an.charge,e.walk,8):e.mode==='up'?an.leap[0]:e.mode==='down'?an.leap[1]:e.atkA>0?an.attack[1]:at(an.walk,e.walk,3);
        else fr=e.mode==='wind'||e.mode==='up'||e.atkT>0?an.attack[0]:e.mode==='down'||e.atkA>0?an.attack[1]:at(an.walk,e.walk,e.mode==='charge'?9:3)}
      else if(e.type==='boss'&&an.sheet)fr=e.trans>0?an.rise[0]:e.ph2?(e.atkT>0||e.slamF>0?an.slam2[0]:e.atkA>0||e.castF>0?an.cast2[0]:e.callF>0?an.call2[0]:at(an.walk2,e.walk,2.2)):(e.atkT>0?an.snap[0]:e.atkA>0||e.castF>0?an.attack[1]:e.lashF>0?an.attack[0]:at(an.walk,e.walk,2.2));
      else if(e.type==='boss')fr=e.atkT>0?an.attack[0]:e.atkA>0?an.attack[1]:at(an.walk,e.walk,2.5);
      else if(e.type==='leszy')fr=e.mode==='merge'||e.mode==='emerge'?an.merge[0]:e.mode==='summon'?an.summon[0]:e.mode==='root'||e.atkT>0||e.atkA>0?an.strike[0]:at(an.walk,e.walk,2.5);
      else if(e.type==='strzyga')fr=e.trans>0?an.burst[0]:e.phase===2?(e.roarT>0?an.roar[0]:e.mode==='up'?an.leap[0]:e.mode==='down'||e.atkA>0||e.atkT>0?an.land[0]:e.mode==='raise'?an.raise[0]:at(an.crawl,e.walk,6))
        :(e.mode==='scream'?an.scream[0]:e.mode==='wind'||e.mode==='dive'||e.atkT>0||e.atkA>0?an.slash[0]:at(an.walk,clock+e.ph,3));
      else if(e.type==='drowner'&&e.emerge>0)fr=at(an.rise,.8-e.emerge,2.5,false);
      else if(e.type==='wisp')fr=e.boom>0&&((clock*12)|0)%2?an.attack[0]:an.walk[0];
      else if(e.type==='bies'&&(e.mode==='wind'||e.mode==='charge'))fr=an.attack[e.mode==='wind'?0:1];
      else if(e.type==='zmora')fr=e.atkA>0?an.attack[0]:at(an.walk,clock+e.ph,5);
      else if((e.sw>0||e.stun>0))fr=e.sw>0?an.attack[0]:an.walk[0];
      else if(e.atkA>0||e.leap>0)fr=at(an.attack,.35-Math.max(0,e.atkA),6,false);
      else fr=at(an.walk,e.walk+e.ph,e.type==='warden'?5:7);
      const redW=e.sw>0&&e.red;if(redW&&Math.random()<dt*20)S.parts.push({k:'e',x:e.x+rnd(-4,4),y:e.y,z:rnd(8,26),vx:rnd(-8,8),vy:0,vz:rnd(10,30),c:warningColor(),life:.3});
      setFrame(e.mesh,fr,attackCue(e)||(e.flash>0&&SETT.flash?'f':e.frozen>0?'i':statusTint(e)||(e.mini?'b':'n')));
      if(e.mini&&Math.random()<dt*12)S.parts.push({k:'e',x:e.x+rnd(-5,5),y:e.y+rnd(-2,2),z:rnd(4,22),vx:rnd(-6,6),vy:0,vz:rnd(8,22),c:Math.random()<.5?'#8a1226':'#d02a44',life:rnd(.4,.8)});
      const y=e.type==='bat'?.85+Math.sin(clock*8+e.ph)*.12:e.type==='courtraven'?.55+Math.sin(clock*7+e.ph)*.12:e.type==='wraith'?.3+Math.sin(clock*2.5+e.ph)*.1:e.type==='zmora'?.25+Math.sin(clock*2.5+e.ph)*.1:e.type==='wisp'?.35+Math.sin(clock*3+e.ph)*.12:(e.rise>0&&e.type!=='jerzak'?-e.rise*(BIG.has(e.type)?3:2):0)+(e.lh||0)+(e.type==='strzyga'&&!e.phase?.35+Math.sin(clock*2)*.1:0);
      const js=e.type==='jerzak'?1.5:e.type==='collector'?(CH===5&&A.collectorC5?1:1.25):e.type==='beast'?(A.beast.sheet?(e.enraged?1.32:1.15):(e.enraged?1.5:1.3)):e.type==='monk'?1.08:e.type==='leszy'?1.25:e.type==='strzyga'?(e.phase===2?1.25:1.2):e.type==='bies'?1.15:e.type==='boginka'?1.1:e.type==='bookgolem'?1.2:e.type==='executioner'?1.1:e.type==='paperrat'?.85:1,hop=0;
      const recoil=recoilAmount(e.visualHit),impact=e.visualHit,amount=impact?impact.amplitude*recoil:0;e.mesh.position.set((e.x+(impact?impact.dx:0)*amount)/16,y+hop,(e.y+(impact?impact.dy:0)*amount)/16);e.mesh.rotation.z=-(impact?impact.dx:0)*recoil*.035*(BIG.has(e.type)?.4:1);e.mesh.scale.set(e.s*js,SQ*js*(e.selfKill>0?.85+.15*Math.sin(clock*40):1),1);
      if((e.type==='beast'||e.type==='strzyga')&&e.lh>0)blob(e.tx/16,e.ty/16,3.2*Math.min(1,e.lh/3));else if(e.type!=='wisp')blob(e.x/16,e.y/16,e.type==='leszy'?3:e.type==='strzyga'?2.6:e.type==='bies'?1.5:e.type==='bookgolem'?1.8:e.type==='courtraven'||e.type==='paperrat'?.5:e.type==='beast'?3.2:e.type==='collector'?(CH===5&&A.collectorC5?2.2:1.4):e.type==='jerzak'?1.8:e.type==='boss'?3:e.type==='warden'?1.5:e.type==='bat'?.45:e.type==='ghoul'?1.2:1);
    }
    for(const f of S.eproj)if(f.mesh){setFrame(f.mesh,at(A.fireball,clock+f.ph,10));f.mesh.position.set(f.x/16,.55,f.y/16);f.mesh.quaternion.copy(cam.quaternion);f.mesh.rotateZ(Math.atan2(-f.vy*Math.sin(PITCH),f.vx));f.mesh.scale.set(1,1,1)}
    for(const c of S.corpses){if(!c.own)setFrame(c.mesh,at(c.anim,c.t,c.big?3:7,false));c.mesh.scale.set(c.s,SQ*(c.k||1),1);if(c.k>1)c.mesh.position.y=0}
    for(const g of S.golems){setFrame(g.mesh,g.slamA>0?at(A.golem.slam,.35-g.slamA,6,false):g.moving?at(A.golem.walk,g.walk,7):at(A.golem.idle,clock,2));g.mesh.position.set(g.x/16,0,g.y/16);g.mesh.scale.set(g.s,SQ,1);blob(g.x/16,g.y/16,1.4)}
    for(const z of S.zones){setFrame(z.mesh,at(A.fx.inferno,clock+z.x,9));z.mesh.position.set(z.x/16,0,z.y/16);const k=z.r/16*1.25;z.mesh.scale.set(k,k*SQ*.8,1)}
    for(const p of S.picks){const y=.1+Math.sin(clock*4+p.ph)*.07;p.mesh.position.set(p.x/16,y+(p.k==='h'?.28:-.55),p.y/16);p.mesh.quaternion.copy(cam.quaternion);p.mesh.scale.set(p.k==='h'?.5:.9,p.k==='h'?.5:.9,1);
      p.glow.position.set(p.x/16,y+.02,p.y/16+.01);p.glow.quaternion.copy(cam.quaternion)}
    for(const f of S.vfx){setFrame(f.mesh,at(f.anim,f.t,f.anim.length/f.dur,false));
      if(f.mode==='ground'){f.mesh.position.set(f.x/16,f.h,f.y/16);f.mesh.rotation.set(-Math.PI/2,0,f.rot||0);f.mesh.scale.set(f.size,f.size*(f.sy||1),1)}
      else{f.mesh.position.set(f.x/16,f.h+(f.mode==='bill'&&f.h===0?f.size*.42:0),f.y/16);f.mesh.quaternion.copy(cam.quaternion);if(f.rot)f.mesh.rotateZ(f.rot);f.mesh.scale.set(f.size,f.size,1)}}
    let n=0;for(const p of S.parts){if(n>=MAXP)break;pPos[n*3]=p.x/16;pPos[n*3+1]=p.z/16+.02;pPos[n*3+2]=p.y/16;const c=col(p.c);let a=p.life!==undefined?Math.max(0,Math.min(1,p.life)):1;pCol[n*3]=c.r*a;pCol[n*3+1]=c.g*a;pCol[n*3+2]=c.b*a;n++}
    pGeo.setDrawRange(0,n);pGeo.attributes.position.needsUpdate=true;pGeo.attributes.color.needsUpdate=true;
    postMat.uniforms.hurt.value=SETT.flash?Math.max(S.hurt*1.2,pl.dead?.25:0,(!pl.dead&&pl.hp<pl.max*.3)?(.12+.08*Math.sin(clock*5)):0):pl.dead?.18:pl.hp<pl.max*.3?.1:0;
  }else{heroMesh.visible=false;pGeo.setDrawRange(0,0);postMat.uniforms.hurt.value=0}
  blobs.count=bi;blobs.instanceMatrix.needsUpdate=true;
  decalT-=dt;if(decalDirty&&decalT<=0){decalTex.needsUpdate=true;decalDirty=false;decalT=.15}
  updatePowerVisuals();
  // talk prompt
  const pr=$('prompt'),free=S&&S.phase==='play'&&!S.notice&&!S.dialog&&!S.choosing&&!S.shop,nmc=free?nearMerchant():null,near=free?(nmc||nearNpc()):null;
  const nf=free&&!near?nearPowerFire():null,nex=free&&!near&&!nf?nearExit():null,lbl=nf?(EN?'Power fire · activate revival':'Ognisko mocy · aktywuj odrodzenie'):nex?{enter:(EN?'Descend into the crypt':'Zejdź do krypty'),leave:(EN?'Go back up':'Wyjdź na górę'),sealed:(EN?'Crypt sealed':'Krypta zamknięta')}[nex.kind]:nmc?(EN?'Trade':'Handluj'):(EN?'Talk':'Rozmawiaj'),tgt=near||nf||nex;
  if(tgt){V.set(tgt.x/16,2.1,tgt.y/16).project(cam);pr.hidden=false;pr.textContent=(nex&&nex.kind==='sealed')?lbl:coarse?(EN?'Tap: ':'Dotknij: ')+lbl:(EN?'Enter · ':'Enter · ')+lbl;pr.style.left=((V.x+1)/2*100)+'%';pr.style.top=((1-V.y)/2*100)+'%'}else pr.hidden=true;
  // Marga at her stall during the break
  const mc=S&&S.merchant;margaMesh.visible=!!mc;if(mc){setFrame(margaMesh,at(A.marga,clock,3));margaMesh.position.set(mc.x/16,0,mc.y/16);const k=mc.state==='in'?1-mc.t:mc.state==='out'?mc.t:1;margaMesh.scale.set(1,SQ*Math.max(.05,k),1);blob(mc.x/16,mc.y/16,1);W.merchantLight.x=mc.x/16;W.merchantLight.z=mc.y/16+.3}
  if(S&&S.collector&&!S.collector.dead&&Math.random()<dt*10){const c=S.collector,a=Math.random()*Math.PI*2;S.parts.push({k:'e',x:c.x+Math.cos(a)*14,y:c.y+Math.sin(a)*8,z:rnd(6,26),vx:-Math.sin(a)*10,vy:Math.cos(a)*6,vz:rnd(2,8),c:Math.random()<.6?'#e0b84a':'#fff0b0',life:rnd(.6,1.2)})}
}
function draw(){renderer.setRenderTarget(rt);renderer.render(scene,cam);renderer.setRenderTarget(null);renderer.render(postScene,postCam)}


/* ============ MINIMAP ============ */
const MINI={fog:canvas(MW,MH),t:0};
const MCOL={20:'#34303c',26:'#34303c',30:'#34303c',29:'#8a6a2a',32:'#3b3128',25:'#6a6070',24:'#d4500e',23:'#140406',22:'#15131a',27:'#ff8a2a',31:'#4a4452',
  50:'#4a4650',51:'#a8862a',52:'#3e3a44',53:'#4a3a2a',54:'#c24a20',55:'#5a1a18',56:'#3a2622',57:'#36402e',58:'#8a7a60',59:'#5a4632',40:'#5a4632',41:'#46424c',42:'#36402e',43:'#3a2a1e',44:'#4a4248',45:'#1c2c40',46:'#3e3228',47:'#5a1a18',48:'#6a5a48',
  70:'#4a4650',71:'#2a2830',72:'#5a4632',73:'#6a2a30',74:'#8a7a3a',75:'#2e2a30',76:'#7a5ac0',77:'#141018',78:'#605c68',80:'#505058',
  60:'#1c2a1e',61:'#4a3a28',62:'#34402e',63:'#4a4850',64:'#2a4458',65:'#163430',66:'#3e3424',67:'#4e3c2a',68:'#6a6a70',69:'#5a4330'};
function buildMini(){const c=canvas(MW,MH),g=c.getContext('2d');for(let y=0;y<MH;y++)for(let x=0;x<MW;x++){const t=tileAt(x,y);let col=MCOL[t];if(t===20&&region(x,y)==='forge')col='#3a2a26';if(CH===4&&t===31)col='#0e180f';if(CH===4&&t===21)col='#262a2e';if(col){g.fillStyle=col;g.fillRect(x,y,1,1)}}
  for(const p of PROPS)if(p.fire){g.fillStyle='#ff8a2a';g.fillRect(p.x|0,p.y|0,1,1)}
  for(const s of SHRINES){g.fillStyle='#7fd0ff';g.fillRect((s.x>>4),(s.y>>4),1,1)}
  if(CH===2){g.fillStyle='#e8e0c8';g.fillRect(FT(49),FT(6),FT(53)-FT(49),1)}if(CH===3){g.fillStyle='#e0b84a';for(const [x0,y0,r0] of DOMES){const x=MP(x0),y=MP(y0),rr=Math.round(r0*MK);for(let yy=-rr;yy<=rr;yy++)for(let xx=-rr;xx<=rr;xx++)if(xx*xx+yy*yy<=rr*rr)g.fillRect(Math.floor(x+xx),Math.floor(y+yy),1,1)}}W.mini=c}
function resetFog(){const g=MINI.fog.getContext('2d');g.globalCompositeOperation='source-over';g.fillStyle='#050407';g.fillRect(0,0,MW,MH)}
resetFog();
function drawMini(dt){
  if(!S)return;MINI.t-=dt;if(MINI.t>0)return;MINI.t=.06;
  const fg=MINI.fog.getContext('2d'),px=pl.x/16,py=pl.y/16;
  fg.globalCompositeOperation='destination-out';const gr=fg.createRadialGradient(px,py,0,px,py,10);gr.addColorStop(0,'rgba(0,0,0,1)');gr.addColorStop(.75,'rgba(0,0,0,1)');gr.addColorStop(1,'rgba(0,0,0,0)');fg.fillStyle=gr;fg.fillRect(px-10,py-10,20,20);fg.globalCompositeOperation='source-over';
  // round radar: player in the centre, north up (the game camera does not rotate)
  const Z=240,c=$('mini');if(c.width!==Z||c.height!==Z){c.width=Z;c.height=Z}
  const g=c.getContext('2d'),u=Z/176,cx=Z/2,R=cx-9*u,RAD=19,s=R/RAD,TAU=6.2832,ph=(clock%3.2)/3.2,pulse=.5+.5*Math.sin(clock*6);
  g.setTransform(1,0,0,1,0,0);g.imageSmoothingEnabled=false;g.clearRect(0,0,Z,Z);
  const dot=(x,y,r,col,a)=>{g.globalAlpha=a;g.fillStyle=col;g.beginPath();g.arc(x,y,r,0,TAU);g.fill();g.globalAlpha=1};
  const far=[];
  g.save();g.beginPath();g.arc(cx,cx,R,0,TAU);g.clip();
  g.fillStyle='#050407';g.fillRect(0,0,Z,Z);
  g.save();g.translate(cx-px*s,cx-py*s);g.scale(s,s);g.drawImage(W.mini,0,0);g.drawImage(MINI.fog,0,0);g.restore();
  // what the camera currently shows
  g.strokeStyle='rgba(216,207,184,.30)';g.lineWidth=1;g.setLineDash([3*u,3*u]);
  g.strokeRect(cx+(camTarget.x-11.5-px)*s,cx+(camTarget.z-VIEW_H*.54-py)*s,23*s,VIEW_H*s);g.setLineDash([]);
  // vignette and ping
  const vg=g.createRadialGradient(cx,cx,R*.55,cx,cx,R);vg.addColorStop(0,'rgba(5,4,7,0)');vg.addColorStop(1,'rgba(5,4,7,.6)');g.fillStyle=vg;g.fillRect(0,0,Z,Z);
  g.strokeStyle='rgba(216,207,184,'+(.32*(1-ph)).toFixed(3)+')';g.lineWidth=1.5*u;g.beginPath();g.arc(cx,cx,ph*R,0,TAU);g.stroke();
  // enemies: glowing dots, elites and bosses pulse
  for(const e of S.enemies){if(e.dead)continue;
    const dx=(e.x/16-px)*s,dy=(e.y/16-py)*s,big=BIG.has(e.type),spec=e.type==='jerzak'||e.type==='collector',el=!!e.mini&&!big&&!spec;
    if(Math.hypot(dx,dy)>R){if(big)far.push([e.x,e.y,'#ff2a2a']);continue}
    const col=big?'#ff2a2a':e.type==='jerzak'?'#ffb0a0':e.type==='collector'?'#ffd04a':el?'#ff8a2a':'#ff4a3c',r=(big?5.2:spec?4.2:el?3.6:2.6)*u,x=cx+dx,y=cx+dy;
    dot(x,y,r+2.6*u,col,.26);dot(x,y,r,col,1);
    if(big||el||spec){g.strokeStyle=col;g.lineWidth=1.2*u;g.globalAlpha=.4+.6*pulse;g.beginPath();g.arc(x,y,r+(3+2*pulse)*u,0,TAU);g.stroke();g.globalAlpha=1}}
  for(const n of W.npcs)if(S.npc[n.id].state==='alive'){const dx=(n.x/16-px)*s,dy=(n.y/16-py)*s;if(Math.hypot(dx,dy)>R)continue;dot(cx+dx,cx+dy,3.2*u,n.art==='tharm'?'#7fd0ff':'#d8cfb8',1)}
  for(const sh of SHRINES){const dx=(sh.x/16-px)*s,dy=(sh.y/16-py)*s;if(Math.hypot(dx,dy)>R)continue;dot(cx+dx,cx+dy,3.4*u,'#7fd0ff',.5+.5*pulse);g.strokeStyle='#7fd0ff';g.lineWidth=1*u;g.beginPath();g.arc(cx+dx,cx+dy,5.5*u,0,TAU);g.stroke()}
  const M=S.merchant&&S.merchant.state==='here'?S.merchant:null;
  if(M){const dx=(M.x/16-px)*s,dy=(M.y/16-py)*s;if(Math.hypot(dx,dy)>R)far.push([M.x,M.y,'#e0b84a']);else{dot(cx+dx,cx+dy,4*u,'#e0b84a',1);g.strokeStyle='#e0b84a';g.lineWidth=1.2*u;g.globalAlpha=.4+.6*pulse;g.beginPath();g.arc(cx+dx,cx+dy,(6+2*pulse)*u,0,TAU);g.stroke();g.globalAlpha=1}}
  // player
  dot(cx,cx,6.5*u,'#ffffff',.18+.12*pulse);dot(cx,cx,3.2*u,'#ffffff',1);
  g.restore();
  // arrows on the rim for bosses and the merchant when out of range
  for(const [wx,wy,col] of far){const a=Math.atan2(wy/16-py,wx/16-px),ca=Math.cos(a),sa=Math.sin(a),rt=R-1*u,rb=R-11*u;
    g.fillStyle=col;g.strokeStyle='#0b0907';g.lineWidth=1.2*u;g.beginPath();g.moveTo(cx+ca*rt,cx+sa*rt);g.lineTo(cx+Math.cos(a-.17)*rb,cx+Math.sin(a-.17)*rb);g.lineTo(cx+Math.cos(a+.17)*rb,cx+Math.sin(a+.17)*rb);g.closePath();g.fill();g.stroke()}
  // forged rim: metal band, notches, studs, compass plaque
  const mg=g.createLinearGradient(0,0,Z,Z);mg.addColorStop(0,'#8a7248');mg.addColorStop(.35,'#2a2018');mg.addColorStop(.65,'#6b5a3a');mg.addColorStop(1,'#1a140e');
  g.strokeStyle=mg;g.lineWidth=6*u;g.beginPath();g.arc(cx,cx,R+3*u,0,TAU);g.stroke();
  g.strokeStyle='#0b0907';g.lineWidth=2*u;g.beginPath();g.arc(cx,cx,R-.5*u,0,TAU);g.stroke();
  g.strokeStyle='rgba(216,207,184,.45)';g.lineWidth=1*u;g.beginPath();g.arc(cx,cx,R+6*u,0,TAU);g.stroke();
  g.strokeStyle='rgba(216,207,184,.55)';g.lineWidth=1*u;
  for(let i=0;i<16;i++){const a=i*TAU/16,l=(i%4?2:4)*u,ca=Math.cos(a),sa=Math.sin(a);g.beginPath();g.moveTo(cx+ca*(R-2*u),cx+sa*(R-2*u));g.lineTo(cx+ca*(R-2*u-l),cx+sa*(R-2*u-l));g.stroke()}
  for(const [sx,sy] of [[1,0],[0,1],[-1,0]])dot(cx+sx*(R+3*u),cx+sy*(R+3*u),2.2*u,'#a31618',1);
  g.fillStyle='#16110c';g.strokeStyle='#8a7248';g.lineWidth=1.2*u;g.beginPath();g.arc(cx,7*u,6*u,0,TAU);g.fill();g.stroke();
  g.fillStyle='#d8cfb8';g.font='700 '+(8.5*u)+'px serif';g.textAlign='center';g.textBaseline='middle';g.fillText('N',cx,7.4*u);
}
/* ============ HUD & FLOW ============ */
let lastHud='',chipsDirty=true;
let lastBuffs=null;
function hud(){renderActiveHud();if(!S)return;drawMini(1/60);const left=Math.max(0,(S.stage==='p1'?BREAK_AT:NIGHT)-S.t),m=Math.floor(left/60),s=Math.floor(left%60);
  const bl=S.enemies.filter(e=>(BIG.has(e.type)||e.type==='jerzak'||e.type==='collector'||e.type==='boginka')&&e.rise<=0),boss=bl.find(e=>BIG.has(e.type))||bl.find(e=>e.type==='collector')||bl[0];
  const key=`${pl.hp|0}|${pl.max}|${S.xp}|${S.need}|${S.lvl}|${m}:${s}|${S.kills}|${S.coins}|${boss?boss.hp|0:-1}|${S.stage}|${boss&&boss.stolen||0}|${S.merchant?S.merchant.wait|0:0}|${S.dg?(S.dg.done?2:1):0}`;
  if(key!==lastHud){lastHud=key;$('hp').style.width=$('hpg').style.width=(Math.max(0,pl.hp)/pl.max*100)+'%';$('hpbar').classList.toggle('low',pl.hp<pl.max*.3);$('xp').style.width=Math.min(100,S.xp/S.need*100)+'%';$('lvlTag').innerHTML=(EN?`<i class="ic ic-wisp"></i>Level ${S.lvl}`:`<i class="ic ic-wisp"></i>Poziom ${S.lvl}`);
    const mmss=`${m}:${String(s).padStart(2,'0')}`,tic=S.stage==='p1'||S.stage==='break'?'hourglass':S.stage==='p2'?'sun':'bossskull';$('time').innerHTML=`<i class="ic ic-${S.dg?'bossskull':tic}"></i>`+(S.dg?(S.dg.done?(EN?'Crypt cleansed':'Krypta oczyszczona'):(EN?'Crypt beneath the cemetery':'Krypta pod cmentarzem')):S.stage==='p1'?(EN?`Until midnight ${mmss}`:`Do północy ${mmss}`):S.stage==='break'?(EN?`Break · Marga's stall${S.merchant&&S.merchant.state==='here'?' '+Math.ceil(S.merchant.wait)+' s':''}`:`Przerwa · kram Margi${S.merchant&&S.merchant.state==='here'?' '+Math.ceil(S.merchant.wait)+' s':''}`):S.stage==='collector'?(CH===4&&A.leszy?(EN?'Leshy, Lord of the Wilds!':'Leszy, Pan Kniei!'):CH===5?(EN?'Arch-Judge Auditor!':'Arcysędzia Rachmistrz!'):(EN?'Order Collector!':'Poborca Zakonu!')):S.stage==='final'?(CH===3?(EN?'Defeat Morhad':'Pokonaj Morhada'):CH===4&&A.strzyga?(EN?'Defeat the Striga':'Pokonaj Strzygę'):CH===5?(EN?'Defeat the Creditor':'Pokonaj Wierzyciela'):(EN?'Defeat the Outgrowth':'Pokonaj Zrosta')):`${CH===2?'Do otwarcia wrót':'Do świtu'} ${mmss}`);$('kills').innerHTML=(EN?`<i class="ic ic-skull"></i>Kills: ${S.kills}`:`<i class="ic ic-skull"></i>Zabici: ${S.kills}`);$('coins').textContent=S.coins;
    $('boss').hidden=!boss;if(boss){$('bossName').innerHTML='<i class="ic ic-bossskull"></i>'+(boss.type==='jerzak'?(EN?'OBDYP, The Shaggy Core of the Abyss':'OBDYP, Kosmate Jądro Otchłani'):boss.type==='collector'?(EN?`${CH===5?'Arch-Judge Auditor':'Order Collector'} · stole ${boss.stolen} coins`:`${CH===5?'Arcysędzia Rachmistrz':'Poborca Zakonu'} · zabrał ${boss.stolen} monet`):boss.type==='beast'?(EN?'Morhad, Beast of a Thousand Slaughters':'Morhad, Bestia Tysiąca Rzezi'):boss.type==='leszy'?(EN?'Leshy, Lord of the Wilds':'Leszy, Pan Kniei'):boss.type==='strzyga'?(boss.phase===2?(EN?'Mother Striga · The Second Soul':'Strzyga Matka · druga dusza'):(EN?'Mother Striga, Queen of the Barrows':'Strzyga Matka, Królowa Kurhanów')):boss.type==='boginka'?(EN?'The Mire Nymph':'Boginka z Topieliska'):CH===5?(EN?'The Creditor':'Wierzyciel'):(EN?'The Outgrowth':'Zrost'));$('bossHp').style.width=Math.max(0,boss.hp/boss.max*100)+'%'}}
  const st=$('stam'),nseg=1;if(st.childElementCount!==nseg){st.innerHTML=('<div class="seg fb st"><span class="trk"><i></i></span><b class=\"l\"></b><b class=\"m\"></b><b class=\"r\"></b></div>').repeat(nseg)}
  st.style.width=Math.min(100,pl.staMax/1.8)+'%';
  for(let i=0;i<nseg;i++){const seg=st.children[i],v=Math.max(0,pl.sta/pl.staMax);seg.firstChild.firstChild.style.width=(v*100)+'%';seg.classList.toggle('full',v>=1)}
  st.classList.toggle('flash',(S.stamFlash||0)>0);
  {const mn=$('mana');if(mn){if(!mn.childElementCount)mn.innerHTML='<div class="seg fb st mn"><span class="trk"><i></i></span><b class="l"></b><b class="m"></b><b class="r"></b></div>';const mm=pl.manaMax||SL.mana.max,v=Math.max(0,Math.min(1,(pl.mana||0)/mm)),sg=mn.firstChild;mn.style.width=Math.min(100,mm/1.8)+'%';sg.firstChild.firstChild.style.width=(v*100)+'%';sg.classList.toggle('full',v>=1);mn.classList.toggle('flash',(S.manaFlash||0)>0)}}
  {const mm=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`,b=[];
    if(S.rebirth)b.push('<span class="tr">'+(S.rebirthUsed?(EN?'Revival used · character XP −50%':'Odrodzenie zużyte · EXP postaci −50%'):(EN?'Revival ready':'Odrodzenie gotowe'))+'</span>');if(S.trial)b.push((EN?`<span class="tr">Mila's trial: ${S.trial.k}/20 · ${Math.ceil(S.trial.t)} s</span>`:`<span class="tr">Próba Mili: ${S.trial.k}/20 · ${Math.ceil(S.trial.t)} s</span>`));
    if(S.bless)b.push((EN?`Blessing +${S.bless.amt} health · ${mm(S.bless.t)}`:`Błogosławieństwo +${S.bless.amt} życia · ${mm(S.bless.t)}`));
    if(S.fury>0)b.push((EN?`Mila's fury +20% damage · ${mm(S.fury)}`:`Szał Mili +20% obrażeń · ${mm(S.fury)}`));
    if(S.heri>0)b.push((EN?`Heri's sign: stamina regeneration +15% · ${mm(S.heri)}`:`Znak Heriego: regeneracja staminy +15% · ${mm(S.heri)}`));
    if(S.bloodPrimed>0)b.push((EN?'Brand ready: your next hit marks the target':'Piętno gotowe: następny cios oznacza cel'));if(S.retaliate>0)b.push((EN?'Iron Retaliation ready':'Żelazny odwet gotowy'));if(S.swordGuardian)b.push((EN?`Stone Defender: ${Math.ceil(S.swordGuardian.hp)} HP · ${Math.ceil(S.swordGuardian.t)} s`:`Kamienny obrońca: ${Math.ceil(S.swordGuardian.hp)} PŻ · ${Math.ceil(S.swordGuardian.t)} s`));
    if(pl.riposte>0)b.push((EN?`<span class="tr">Riposte ready: ×${riMul().toFixed(1)}</span>`:`<span class="tr">Riposta gotowa: ×${riMul().toFixed(1).replace('.',',')}</span>`));
    if(pl.broken>0)b.push((EN?'<span class="tr">Guard broken!</span>':'<span class="tr">Garda przełamana!</span>'));
    if(S.herb>0)b.push((EN?`Witch's brew, healing · ${mm(S.herb)}`:`Napar szeptuchy, leczenie · ${mm(S.herb)}`));
    if(S.slowT>0)b.push((EN?'<span class="tr">Striga\'s scream: slowed</span>':'<span class="tr">Krzyk Strzygi: spowolnienie</span>'));
    if(S.snare>0)b.push((EN?'<span class="tr">Caught!</span>':'<span class="tr">Pochwycony!</span>'));
    const h=b.join('<br>');if(h!==lastBuffs){lastBuffs=h;$('buffs').innerHTML=h}}
  if(S.hl&&clock-S.hl.t>3){S.hl=null;chipsDirty=true}
  if(chipsDirty){chipsDirty=false;const chip=k=>{const mx=ENCH.includes(k)&&S.mainEnchant&&S.mainEnchant!==k?3:SK[k].max||9;return`<span class="sk${S.hl&&S.hl.k===k?' hi':''}" title="${SK[k].name}"><i class="ic ic-${SK[k].ic||k}"></i><em>${'<b class="on"></b>'.repeat(S.sk[k])+'<b></b>'.repeat(Math.max(0,mx-S.sk[k]))}</em></span>`};
    $('chips').innerHTML=SLASH_SK.filter(k=>S.sk[k]).map(chip).join('')}}
// touch controls: detected automatically, but the switch on the title screen can force them on or off (remembered in this browser)
let coarse=matchMedia('(pointer:coarse)').matches;
try{const v=localStorage.getItem('pn_touch');if(v==='1'||v==='0')coarse=v==='1'}catch(e){}
function applyTouchMode(){$('opts').classList.add('sl');$('figKb').hidden=false;$('touchTgl').checked=coarse;
  $('warn').textContent=''}

function applyStory(){$('storyTgl').checked=!STORYMODE;$('sFab').classList.toggle('on',STORYMODE);$('sArc').classList.toggle('on',!STORYMODE);$('sFab').setAttribute('aria-pressed',String(STORYMODE));$('sArc').setAttribute('aria-pressed',String(!STORYMODE));$('storyModeHint').textContent=STORYMODE?(EN?'You unlock acts one by one.':'Rozdziały odblokowujesz po kolei.'):(EN?'All acts available right away.':'Wszystkie rozdziały dostępne od razu.');}
$('sFab').addEventListener('click',()=>{$('storyTgl').checked=false;$('storyTgl').dispatchEvent(new Event('change'))});$('sArc').addEventListener('click',()=>{$('storyTgl').checked=true;$('storyTgl').dispatchEvent(new Event('change'))});
const DIFFCAP={e:(EN?'Fewer, weaker enemies. Rewards: −20% experience, −50% gold.':'Mniej, słabsi wrogowie. Nagrody: −20% doświadczenia, −50% złota.'),n:(EN?'Balanced play, as designed. Rewards unchanged.':'Zrównoważona rozgrywka, tak jak ją zaprojektowano. Nagrody bez zmian.'),h:(EN?'More, stronger enemies. Rewards: +20% experience, +10% gold.':'Więcej, silniejszych wrogów. Nagrody: +20% doświadczenia, +10% złota.')};
function applyDiff(){for(const b of document.querySelectorAll('#diffSw [data-d]'))b.classList.toggle('on',b.dataset.d===DIFFK);$('diffCap').textContent=DIFFCAP[DIFFK];ENEMY_DMG=.8*DF[DIFFK].dmg}
for(const b of document.querySelectorAll('#diffSw [data-d]'))b.addEventListener('click',()=>{DIFFK=b.dataset.d;try{localStorage.setItem('pn_diff',DIFFK)}catch(x){}applyDiff()});applyDiff();
$('storyTgl').addEventListener('change',e=>{STORYMODE=!e.target.checked;try{localStorage.setItem('pn_story',STORYMODE?'1':'0')}catch(x){}applyStory();renderRecords()});
applyStory();
$('briSl').value=Math.round(SETT.bri*100);$('briSl').addEventListener('input',e=>{SETT.bri=+e.target.value/100;postMat.uniforms.bri.value=SETT.bri;try{localStorage.setItem('pn_bri',String(SETT.bri))}catch(x){}});
$('touchTgl').addEventListener('change',e=>{coarse=e.target.checked;try{localStorage.setItem('pn_touch',coarse?'1':'0')}catch(err){}applyTouchMode()});
addEventListener('resize',()=>{if($('title')&&!$('title').hidden)applyTouchMode()});
applyTouchMode();
// full screen on phones and tablets: standard API, Safari's webkit variant (iPad), nothing to do when launched from the home screen
function goFull(){const d=document.documentElement,inApp=navigator.standalone||matchMedia('(display-mode: fullscreen), (display-mode: standalone)').matches;
  if(inApp||document.fullscreenElement||document.webkitFullscreenElement)return;const fs=d.requestFullscreen||d.webkitRequestFullscreen;if(!fs)return;
  try{const p=fs.call(d);if(p&&p.then)p.then(lockLandscape,()=>{});else lockLandscape()}catch(e){}}
function lockLandscape(){}// the game works in both orientations; nothing is locked
// ===== FABUŁA (wariant A: Pakt jako dług) =====
// Cała fabuła jest w tym bloku i w kilku miejscach oznaczonych "STORY". Aby ją wyłączyć: odznacz „Fabuła” w menu
// albo ustaw `let STORY=false`. Pełne cofnięcie: demo-hd2d/zrodlo-przed-fabula.html (wersja 58 bez fabuły).
const STORY_INTRO={
  1:[(EN?'You are the Branded. The mark of the Pact bites into your body like red-hot iron and bleeds with every heartbeat. When dusk falls, it drags from the earth everything that should be rotting in it.':'Jesteś Naznaczeńcem. Znak Paktu wgryza się w twoje ciało jak rozpalone żelazo i krwawi przy każdym uderzeniu serca. Gdy zapada zmrok, wyciąga z ziemi wszystko, co powinno w niej gnić.'),(EN?'The dead tear themselves out of the mud with bare bones, opening jaws full of dirt. Monsters crawl out of the mist, hungry for your flesh. Every one of them is looking only for you.':'Zmarli wydzierają się z błota z odsłoniętymi kośćmi, otwierając szczęki pełne ziemi. Potwory pełzną z mgły głodne twojego mięsa. Każdy z nich szuka tylko ciebie.'),(EN?'Their claws tear your skin, and their screams drill into your skull. The deeper they wound you, the brighter the Brand burns, and the more of them come.':'Ich pazury rozdzierają skórę, a ich krzyk wwierca się w czaszkę. Im głębiej cię ranią, tym mocniej piętno płonie i tym więcej ich przychodzi.'),(EN?'There is no mercy and no escape. There is only the night, and in it blood, yours and theirs. You will tear them to shreds, or they will tear you.':'Nie ma litości ani ucieczki. Jest noc, a w niej krew, twoja i cudza. Rozerwiesz ich na strzępy albo oni rozerwą ciebie.'),(EN?'Long ago, Goldheim made a pact with the Night. Plenty and power in exchange for a pledge: every land was to give something up, and in every generation one branded man paid off the debt.':'Dawno temu Złotogród zawarł pakt z Nocą. Obfitość i władza za zastaw: każda kraina miała oddać jej coś, a dług spłacał jeden człowiek z piętnem w każdym pokoleniu.'),(EN?'The Holy Order calls the Brand a curse. It comes at night with torches, breaks down doors and burns the branded together with their homes. The settlement gave fire to the Night, and burned children still lie beneath the ashes.':'Zakon nazywa piętno przekleństwem. Przychodzi nocą z pochodniami, wyważa drzwi i pali naznaczonych razem z ich domami. Osada oddała Nocy ogień, a pod zgliszczami wciąż leżą spalone dzieci.'),(EN?'The wind carries the smell of charred flesh. Corpses rise from the ashes, dragging scraps of skin behind them, and something in the burned huts whispers your name.':'Wiatr niesie zapach zwęglonego mięsa. Zwłoki wstają z popiołu i ciągną za sobą resztki skóry, a w spalonych chatach coś szepcze twoje imię.'),(EN?'You are the last debtor of this village. The fire is coming home. Survive until dawn.':'Jesteś ostatnim dłużnikiem tej wsi. Ogień wraca do domu. Przetrwaj do świtu.')],
  2:[(EN?'Beneath the Scorched Settlement, deeper than the roots reach, lies the Lower City. The dwarves dug here for centuries, until they struck what should never have been woken. The Night gave them gold, and in return took the stone, their homes and their souls.':'Pod Spaloną Osadą, głębiej niż sięgają korzenie, leży Dolne Miasto. Krasnoludy kopały tu przez wieki, aż trafiły na to, czego nie należało budzić. Noc oddała im złoto, a w zamian zabrała kamień, ich domy i ich dusze.'),(EN?'The tunnels reek of sulphur and rotten flesh. Ground-up bodies of miners are stuck in the walls, still moving their mouths, though they lost their tongues long ago. Something breathes beneath the lava.':'Korytarze cuchną siarką i zgniłym mięsem. W ścianach tkwią przemielone ciała górników, wciąż poruszają ustami, choć dawno nie mają języków. Pod lawą coś oddycha.'),(EN?'The Order\'s collectors come down here for their share. They come in heavy armour, ledgers in hand, and kill everyone who has not paid. The Brand on your hand burns ever hotter, for the pledge is near.':'Poborcy Zakonu schodzą tu po swój udział. Przychodzą w ciężkich zbrojach, z rejestrami w rękach, i zabijają każdego, kto nie zapłacił. Piętno na twojej ręce pali coraz mocniej, bo zastaw jest blisko.'),(EN?'Do not go back the way you came. There is no way back here, only deeper, into the darkness.':'Nie wracaj tą drogą, którą przyszedłeś. Tu nie ma powrotu, jest tylko głębiej, w ciemność.')],
  3:[(EN?'Goldheim gave blood to the Night. The capital did not build its domes from stone, but from bodies thrown into the foundations centuries ago in the name of paying off the debt.':'Złotogród oddał Nocy krew. Stolica nie zbudowała swoich kopuł z kamienia, tylko z ciał, które setki lat temu wrzucono do fundamentów w imię spłaty długu.'),(EN?'The streets are narrow with clotted blood, and the golden flagstones stick to your boots. Madmen in dark alleys lick them clean and laugh when you pass a few steps away.':'Ulice są wąskie od zakrzepłej krwi, a złote płyty lepią się do butów. Szaleńcy w ciemnych zaułkach liżą je do czysta i śmieją się, kiedy mijasz ich kilka kroków dalej.'),(EN?'The bells ring, though no one moves them. With every toll, what lay in the walls awakens: slaughterhouses, marks of shackles and bones in unmarked pits. Morhad never stopped counting.':'Dzwony biją, choć nikt ich nie porusza. Pod każdym uderzeniem budzi się to, co leżało w ścianach: rzeźnie, ślady kajdan i kości w nieoznaczonych dołach. Morhad nie przestał liczyć.'),(EN?'The beast waits at the foot of the cathedral. It knows you will come, because the same man always comes, in every generation.':'Bestia czeka u stóp katedry. Wie, że przyjdziesz, bo zawsze przychodzi ten sam człowiek, w każdym pokoleniu.')],
  4:[(EN?'Blackwood gave life to the Night: the forest, the roots, the bones of ancestors beneath the moss. This is where the Pact sank its deepest roots, and the trees grow on those who hoped to escape.':'Czarnobór oddał Nocy życie: las, korzenie, kości przodków pod mchem. To tu Pakt zapuścił najgłębsze korzenie, a drzewa rosną na tych, którzy mieli nadzieję uciec.'),(EN?'Mist lies in the valleys like thick soup. Wolves howl with eyes flooded with black, drowners reach their claws out of the swamps, and something scratches at the barrows from within.':'Mgła zalega w dolinach jak gęsta zupa. Wilki wyją z oczami zalanymi czernią, utopce wyciągają szpony z bagien, a w kurhanach coś skrobie od środka paznokciami.'),(EN?'Fires burn on Bleak Peak, though no one lit them. Leshy stands at the end of the path. Mother Striga waits in his shadow and feeds her children with whatever is left of you.':'Na Łysej Górze palą się ogniska, choć nikt ich nie rozniecał. Leszy stoi na końcu ścieżki. Strzyga Matka czeka w jego cieniu i karmi swoje dzieci tym, co zostanie po tobie.'),(EN?'When the last pledge falls, the debt will be settled. Or you will. The forest makes no distinction.':'Gdy upadnie ostatni zastaw, dług zostanie rozliczony. Albo ty. Las nie robi różnicy.')]};
const STORY_BOSS={'5collector':(EN?'The Arch-Judge slumps onto the bench. One line in his ledger: "Amount due: your life."':'Arcysędzia opada na ławę. W jego rejestrze jedna linijka: „Należność: twoje życie”.'),'5boss':(EN?'The Creditor falls silent. The ledger burns, and the Brand on your hand fades. The debt is paid.':'Wierzyciel milknie. Rejestr płonie, a piętno na twojej ręce blednie. Dług jest spłacony.'),collector:(EN?'The Collector falls. A page drops from his ledger: "The Holy Order collects the debt for the Night."':'Poborca pada. Z jego rejestru wypada kartka: „Zakon ściąga dług za Noc”.'),'1boss':(EN?'The Outgrowth falls silent. The faces of the burned whisper: "The fire is repaid." The Brand on your hand grows warmer.':'Zrost milknie. Twarze spalonych szepczą: „Ogień spłacony”. Piętno na twojej ręce robi się cieplejsze.'),'2boss':(EN?'A last groan rises from the depths. The stone is repaid. The Brand grows.':'Z głębi dobiega ostatni jęk. Kamień spłacony. Piętno rośnie.'),beast:(EN?'Morhad stopped counting. The blood is repaid. The Night weakens.':'Morhad przestał liczyć. Krew spłacona. Noc słabnie.'),leszy:(EN?'Leshy crumbles into rotten wood. Life is repaid. One pledge remains.':'Leszy rozpada się w próchno. Życie spłacone. Został ostatni zastaw.'),strzyga:(EN?'Mother Striga falls. The debt is settled. The Night recedes, and the Brand falls silent on your hand.':'Strzyga Matka pada. Dług rozliczony. Noc cofa się, a piętno milknie na twojej ręce.')};
const STORY_END={1:(EN?'\nThe Brand darkens: the Night has surrendered one pledge.':'\nPiętno ciemnieje: Noc oddała jeden zastaw.'),2:(EN?'\nTwo pledges repaid. Two remain.':'\nDwa zastawy spłacone. Zostały jeszcze dwa.'),3:(EN?'\nThree pledges repaid. The forest remains.':'\nTrzy zastawy spłacone. Został las.'),5:(EN?'\nThe whole debt to the Night is repaid.':'\nCały dług Nocy spłacony.'),4:(EN?'\nThe last pledge is repaid. Marga looks at you without a word. But the ledgers of the debt lie in the Citadel.':'\nOstatni zastaw spłacony. Marga patrzy na ciebie bez słowa. Ale księgi długu leżą w Cytadeli.')};
// ===== MUZYKA (syntezator w stylu 16-bit, cała w kodzie) =====
// Motyw na rozdział w MTH[numer]. Kanały: lead (fala prostokątna 25%, ślizgi i vibrato), pad (dwie fale + filtr),
// bas (trójkąt), werbel/tom (sinus) i szum. Muzyka wchodzi w start(ch) i cichnie w toMenu()/endGame().
let musVol=.55;try{const v=localStorage.getItem('pn_mus');if(v!==null&&!isNaN(+v))musVol=Math.max(0,Math.min(1,+v))}catch(e){}
const mf=m=>440*Math.pow(2,(m-69)/12);
const MCH={Dm:[50,57,65],Bb:[46,53,62],Gm:[43,50,58],A:[45,52,61],Eb:[51,58,63],Cm:[48,55,63],Db:[49,56,65],Fm:[41,48,56],G:[43,50,59],Ab:[44,51,60],D:[50,57,66],Em:[52,59,67],C:[48,55,64],Am:[45,52,60],B:[47,54,63]},
  MROOT={Dm:38,Bb:34,Gm:31,A:33,Eb:39,Cm:36,Db:37,Fm:29,G:31,Ab:32,D:38,Em:28,C:36,Am:33,B:35};
const MTH={
 // I: Spalona Brzeźnica. D-moll z frygijskim Es, wolno (56 uderzeń), zawodzący lead, ciężki tom, szum jak deszcz i żar
 1:{bpm:56,bars:16,
  ch:['Dm','Bb','Gm','A','Dm','Bb','Gm','A', 'Dm','Eb','Dm','Gm','Bb','A','A','A'],
  lead:[[],[[0,69,6],[6,67,2]],[[0,70,4],[4,69,2],[6,67,2]],[[0,73,5],[5,69,3]],[[0,74,8]],[[0,72,4],[4,70,4]],[[0,70,3],[3,69,3],[6,67,2]],[[0,66,4],[4,69,2],[6,66,2]],
        [[0,74,6],[6,72,2]],[[0,75,4],[4,74,4]],[[0,74,2],[2,77,6]],[[0,74,4],[4,72,2],[6,70,2]],[[0,72,4],[4,74,4]],[[0,73,4],[4,69,4]],[[0,66,8]],[[4,69,2],[6,73,2]]],
  tom2:2,hiss:8,kp:[.95,0,0,0,.62,0,0,0],kpB:[.95,0,0,0,.62,0,0,.34],duty:.25,lg:.062,vib:9,lf:1700,scoop:.6},
 // II: Dolne Miasto. c-moll z Des, 78 uderzeń, kuźnia: ciężka stopa, kowadło, krótki jasny lead (fala 12,5%), galopujący bas, dudnienie lawy
 2:{bpm:78,bars:16,
  ch:['Cm','Cm','Db','Cm','Fm','Db','G','G', 'Cm','Ab','Db','Cm','Fm','Fm','G','G'],
  lead:[[],[[0,67,2],[2,72,2],[4,75,4]],[[0,73,2],[2,72,2],[4,70,4]],[[0,67,2],[2,72,2],[4,75,2],[6,74,2]],[[0,68,4],[4,72,4]],[[0,73,4],[4,70,4]],[[0,71,2],[2,74,2],[4,71,4]],[[0,67,2],[4,71,2],[6,74,2]],
        [[0,79,2],[2,75,2],[4,72,4]],[[0,75,2],[2,72,2],[4,68,4]],[[0,73,2],[2,77,2],[4,73,4]],[[0,72,2],[2,75,2],[4,79,4]],[[0,77,4],[4,72,4]],[[0,80,2],[2,77,2],[4,72,4]],[[0,74,2],[2,71,2],[4,74,4]],[[4,67,2],[6,71,2]]],
  tom2:2,hiss:99,kp:[.95,0,.42,0,.8,0,.42,.3],kpB:[.95,0,.42,.3,.8,0,.5,.3],cl:[0,0,0,0,1,0,0,1],clFrom:3,duty:.125,lg:.06,vib:4,lf:2600,scoop:.3,bp:[[0,1.5],[2,1.5],[4,1.5],[6,1.5]],es:.3,efb:.35,ed:.38,bf:260,bg:.016},
 // III: Złotogród. g-moll z durowym D, 64 uderzenia, organy (fala 50%), długie nuty, dzwony, oszczędna stopa, wyniosły i zgniły splendor
 3:{bpm:64,bars:16,
  ch:['Gm','Eb','Cm','D','Gm','Eb','D','D', 'Gm','Cm','Eb','D','Cm','Gm','D','D'],
  lead:[[],[[0,74,6],[6,72,2]],[[0,75,4],[4,72,4]],[[0,74,5],[5,69,3]],[[0,70,4],[4,74,4]],[[0,75,6],[6,74,2]],[[0,74,4],[4,66,4]],[[0,69,8]],
        [[0,79,6],[6,77,2]],[[0,75,4],[4,72,4]],[[0,79,4],[4,75,4]],[[0,78,5],[5,74,3]],[[0,75,4],[4,72,4]],[[0,74,4],[4,70,4]],[[0,69,4],[4,66,4]],[[4,69,2],[6,74,2]]],
  tom2:4,hiss:99,kp:[.8,0,0,0,.4,0,0,0],kpB:[.8,0,0,0,.5,0,.25,0],duty:.5,lg:.05,vib:6,lf:1500,scoop:.4,bell:{every:2,v:.055},es:.5,efb:.4,ed:.52,bf:500,bg:.008},
 // IV: Czarnobór. e-moll, 52 uderzenia, zimny ambient: rzadki flet, wycie (duży ślizg), serce zamiast stopy, wiatr
 4:{bpm:52,bars:16,
  ch:['Em','Em','C','D','Em','C','Am','B', 'Em','Am','C','B','Em','C','D','B'],
  lead:[[],[],[[0,71,8]],[[0,69,4],[4,66,4]],[[0,67,8]],[[0,72,6],[6,71,2]],[[0,69,8]],[[0,71,4],[4,75,4]],
        [[0,76,8]],[[0,72,4],[4,69,4]],[[0,79,6],[6,76,2]],[[0,75,8]],[[0,71,8]],[[0,72,4],[4,76,4]],[[0,74,8]],[[0,75,4],[4,71,4]]],
  tom2:4,hiss:2,kp:[.62,0,0,0,0,0,0,0],kpB:[.62,0,0,.28,0,0,0,0],duty:.5,lg:.05,vib:7,lf:1300,scoop:5,bell:{every:4,v:.04},es:.55,efb:.45,ed:.6,bf:900,bg:.02}};
MTH.title={bpm:88,bars:24,ch:['Dm','Dm','Dm','Bb','Gm','A','Dm','Bb','Gm','A','Bb','C','Dm','A','Bb','C','Dm','A','Gm','A','Dm','Bb','Gm','A'],custom:null,duty:.25,lg:.075,vib:6,lf:2800,scoop:1,es:.35,efb:.35,ed:.34,bf:200,bg:.012};
function musPW(c,d){c._pw=c._pw||{};if(!c._pw[d]){const n=32,re=new Float32Array(n),im=new Float32Array(n);for(let i=1;i<n;i++)re[i]=2/(i*Math.PI)*Math.sin(i*Math.PI*d);c._pw[d]=c.createPeriodicWave(re,im)}return c._pw[d]}
function musNoiseBuf(c){if(!c._nb){const b=c.createBuffer(1,c.sampleRate*2,c.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;c._nb=b}return c._nb}
function musEnv(c,g,t,a,v,dur,r){g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+a);g.gain.setValueAtTime(v,t+Math.max(a,dur-.02));g.gain.setTargetAtTime(0,t+dur,r)}
function musLead(c,bus,send,m,prev,t,dur,T){const o=c.createOscillator();o.setPeriodicWave(musPW(c,T.duty||.25));const f=mf(m);
  o.frequency.setValueAtTime(mf(prev),t);o.frequency.exponentialRampToValueAtTime(f,t+.08);
  const l=c.createOscillator();l.frequency.value=5.3;const lg=c.createGain();lg.gain.setValueAtTime(0,t);lg.gain.linearRampToValueAtTime(T.vib||9,t+Math.min(Math.max(dur*.8,.3),.9));l.connect(lg);lg.connect(o.detune);
  const g=c.createGain();musEnv(c,g,t,.05,T.lg||.062,dur,.12);const lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=T.lf||1700;
  o.connect(lp);lp.connect(g);g.connect(bus);g.connect(send);o.start(t);l.start(t);o.stop(t+dur+1.2);l.stop(t+dur+1.2)}
function musPad(c,bus,send,notes,t,dur){for(const m of notes){for(const [w,dt,v] of [['square',-7,.012],['sawtooth',6,.016]]){const o=c.createOscillator();o.type=w;o.frequency.value=mf(m);o.detune.value=dt;const g=c.createGain();musEnv(c,g,t,.9,v,dur,.5);
    const lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.setValueAtTime(380,t);lp.frequency.linearRampToValueAtTime(900,t+dur*.6);o.connect(lp);lp.connect(g);g.connect(bus);g.connect(send);o.start(t);o.stop(t+dur+3)}}}
function musBass(c,bus,m,t,dur){const o=c.createOscillator();o.type='triangle';o.frequency.value=mf(m);const g=c.createGain();musEnv(c,g,t,.03,.34,dur,.12);o.connect(g);g.connect(bus);o.start(t);o.stop(t+dur+.8)}
function musKick(c,bus,t,v){const o=c.createOscillator();o.type='sine';o.frequency.setValueAtTime(170,t);o.frequency.exponentialRampToValueAtTime(46,t+.1);o.frequency.exponentialRampToValueAtTime(34,t+.35);const g=c.createGain();g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.42);o.connect(g);g.connect(bus);o.start(t);o.stop(t+.45);
  const n=c.createBufferSource();n.buffer=musNoiseBuf(c);const f=c.createBiquadFilter();f.type='lowpass';f.frequency.value=900;const ng=c.createGain();ng.gain.setValueAtTime(v*.16,t);ng.gain.exponentialRampToValueAtTime(.0005,t+.03);n.connect(f);f.connect(ng);ng.connect(bus);n.start(t,Math.random());n.stop(t+.05)}
function musTom(c,bus,t,v){const o=c.createOscillator();o.type='sine';o.frequency.setValueAtTime(115,t);o.frequency.exponentialRampToValueAtTime(42,t+.32);const g=c.createGain();g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.55);o.connect(g);g.connect(bus);o.start(t);o.stop(t+.6)}
function musBell(c,bus,send,m,t,v){for(const [r,gv] of [[1,1],[2.76,.45],[5.4,.2]]){const o=c.createOscillator();o.type='sine';o.frequency.value=mf(m)*r;const g=c.createGain();g.gain.setValueAtTime(v*gv,t);g.gain.exponentialRampToValueAtTime(.0005,t+2.6);o.connect(g);g.connect(bus);g.connect(send);o.start(t);o.stop(t+2.7)}}
function musHiss(c,bus,t,v,f,d){const n=c.createBufferSource();n.buffer=musNoiseBuf(c);const b=c.createBiquadFilter();b.type='bandpass';b.frequency.value=f;b.Q.value=1.2;const g=c.createGain();g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0005,t+d);n.connect(b);b.connect(g);g.connect(bus);n.start(t,Math.random());n.stop(t+d+.05)}
function musGraph(c,out,T){T=T||{};const bus=c.createGain();bus.gain.value=1;bus.connect(out);const send=c.createGain();send.gain.value=T.es||.38;const dl=c.createDelay(1.5);dl.delayTime.value=T.ed||.46;const fb=c.createGain();fb.gain.value=T.efb||.3;const lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1500;
  send.connect(dl);dl.connect(lp);lp.connect(fb);fb.connect(dl);lp.connect(bus);
  const nz=c.createBufferSource();nz.buffer=musNoiseBuf(c);nz.loop=true;const nb=c.createBiquadFilter();nb.type='bandpass';nb.frequency.value=T.bf||700;nb.Q.value=.6;const ng=c.createGain();ng.gain.value=T.bg||.011;
  const lf=c.createOscillator();lf.frequency.value=.11;const lfg=c.createGain();lfg.gain.value=.006;lf.connect(lfg);lfg.connect(ng.gain);nz.connect(nb);nb.connect(ng);ng.connect(bus);nz.start();lf.start();
  return {bus,send,stop:()=>{try{nz.stop();lf.stop()}catch(e){}}}}
// jeden krok (ósemka) motywu: zwraca nowy stan "poprzednia nuta lead"
function musStep(c,G,T,s,t,sd,st){if(T===MTH.title)return musTitleStep(c,G,T,s,t,sd,st);const bar=(s/8)|0,k=s%8,name=T.ch[bar];
  if(k===0)musPad(c,G.bus,G.send,MCH[name],t,sd*8+.4);
  const kv=(bar>=8&&T.kpB?T.kpB:T.kp)[k];if(kv&&(k===0||bar>=T.tom2))musKick(c,G.bus,t,kv);
  if(T.cl&&bar>=T.clFrom&&T.cl[k])musHiss(c,G.bus,t,.07*T.cl[k],3400,.14);
  if(k===4&&bar>=T.hiss)musHiss(c,G.bus,t,.05,2200,.3);
  if(T.bell&&k===0&&bar%T.bell.every===0)musBell(c,G.bus,G.send,MCH[name][2]+24,t,T.bell.v);
  for(const [bk,bl] of (T.bp||[[0,6],[6,2]]))if(bk===k)musBass(c,G.bus,MROOT[name],t+(bk?.01:0),sd*bl);
  for(const [a,m,len] of T.lead[bar]){if(a!==k)continue;const prev=(st.end>=s-.1&&st.m)?st.m:m-(T.scoop||.6);musLead(c,G.bus,G.send,m,prev,t,len*sd*.97,T);st.m=m;st.end=s+len}}
// ---- Motyw tytułowy „Piętno”: ciężki riff w d-moll (przester), bas, chór „aaa”, bęben wojenny, dzwon, haczyk melodyczny ----
function musDist(c){if(!c._ds){const n=512,cv=new Float32Array(n);for(let i=0;i<n;i++){const x=i*2/n-1;cv[i]=Math.tanh(x*5)}c._ds=cv}return c._ds}
let RIFF_G=.12;
function musRiff(c,bus,m,t,dur,v){const g=c.createGain();musEnv(c,g,t,.008,v,dur,.05);const ws=c.createWaveShaper();ws.curve=musDist(c);const lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=1300;lp.Q.value=2.5;
  for(const d of [-9,9]){const o=c.createOscillator();o.type='sawtooth';o.frequency.value=mf(m);o.detune.value=d;o.connect(ws);o.start(t);o.stop(t+dur+.4)}ws.connect(lp);const pg=c.createGain();pg.gain.value=RIFF_G;lp.connect(pg);pg.connect(g);g.connect(bus)}
function musChoir(c,bus,send,notes,t,dur,v){for(const m of notes){const o=c.createOscillator();o.type='sawtooth';o.frequency.value=mf(m);o.detune.value=(Math.random()-.5)*14;const g=c.createGain();musEnv(c,g,t,.8,v,dur,.7);
  for(const [f,q,gv] of [[650,6,1],[1100,8,.7]]){const b=c.createBiquadFilter();b.type='bandpass';b.frequency.value=f;b.Q.value=q;const gg=c.createGain();gg.gain.value=gv;o.connect(b);b.connect(gg);gg.connect(g)}
  g.connect(bus);g.connect(send);o.start(t);o.stop(t+dur+4)}}
function musSnare(c,bus,t,v){musHiss(c,bus,t,v,1900,.17);const o=c.createOscillator();o.type='sine';o.frequency.setValueAtTime(210,t);o.frequency.exponentialRampToValueAtTime(110,t+.1);const g=c.createGain();g.gain.setValueAtTime(v*1.4,t);g.gain.exponentialRampToValueAtTime(.001,t+.14);o.connect(g);g.connect(bus);o.start(t);o.stop(t+.16)}
function musRiser(c,bus,t,dur){const n=c.createBufferSource();n.buffer=musNoiseBuf(c);n.loop=true;const b=c.createBiquadFilter();b.type='bandpass';b.Q.value=1.4;b.frequency.setValueAtTime(400,t);b.frequency.exponentialRampToValueAtTime(6500,t+dur);const g=c.createGain();g.gain.setValueAtTime(.001,t);g.gain.linearRampToValueAtTime(.075,t+dur);g.gain.linearRampToValueAtTime(0,t+dur+.05);n.connect(b);b.connect(g);g.connect(bus);n.start(t);n.stop(t+dur+.1)}
const TT_RIFF=[[0,.5],[.5,.5],[1.5,.5],[2,1],[3.5,.5],[4,.5],[4.5,.5],[5.5,.5],[6,1],[7,1]];
const TT_LEAD=[[],[],[],[],[],[],
 [[0,74,3],[3,77,1],[4,76,1],[5,74,3]],[[0,72,3],[3,74,1],[4,72,1],[5,70,3]],[[0,70,3],[3,74,1],[4,72,1],[5,70,3]],[[0,69,2],[2,73,2],[4,76,2],[6,73,2]],
 [[0,77,4],[4,74,4]],[[0,76,4],[4,72,4]],[[0,74,3],[3,77,1],[4,81,4]],[[0,76,2],[2,73,2],[4,69,4]],[[0,77,4],[4,82,4]],[[0,79,4],[4,76,4]],[[0,81,6],[6,79,2]],[[0,76,4],[4,73,2],[6,69,2]],
 [[0,70,8]],[[0,69,4],[4,73,4]],
 [[0,74,3],[3,77,1],[4,76,1],[5,74,3]],[[0,72,3],[3,74,1],[4,72,1],[5,70,3]],[[0,70,3],[3,74,1],[4,72,1],[5,70,3]],[[0,69,2],[2,73,2],[4,76,2],[6,73,2]]];
function musTitleStep(c,G,T,s,t,sd,st){const bar=(s/8)|0,k=s%8,name=T.ch[bar],B=bar>=10&&bar<18,root=MROOT[name];
  if(k===0){musPad(c,G.bus,G.send,MCH[name],t,sd*8+.4);const cv=bar>=18&&bar<20?.03:B?.03:bar>=2?.013:0;if(cv)musChoir(c,G.bus,G.send,MCH[name].map(x=>x+12),t,sd*8+.6,cv);
    if(bar%4===0)musBell(c,G.bus,G.send,MCH[name][2]+24,t,bar<2?.07:.05);if(bar===10)musHiss(c,G.bus,t,.07,5200,1.8);if(bar===22)musRiser(c,G.bus,t,sd*16)}
  const kk=bar<2?[.6,.4,0,0,0,0,0,0]:bar<6||(bar>=6&&bar<10)?[1,0,0,.6,.9,0,.45,0]:B?[1,0,.6,0,.95,0,.6,.45]:bar<20?[.9,0,0,0,0,0,0,0]:[1,0,.5,0,.95,0,.5,.5];
  if(kk[k])musKick(c,G.bus,t,kk[k]);
  if((bar>=6&&bar<10)&&(k===2||k===6))musSnare(c,G.bus,t,.08);else if(B&&(k===2||k===6))musSnare(c,G.bus,t,.1);else if(bar>=20&&bar<23&&(k===2||k===6))musSnare(c,G.bus,t,.09);else if(bar===23&&k>=2)musSnare(c,G.bus,t,.07+k*.006);
  if(bar<2){if(k===0&&bar===0)musBass(c,G.bus,root,t,sd*16)}
  else if(bar>=18&&bar<20){if(k===0||k===4)musBass(c,G.bus,root,t,sd*4);if(k===0||k===4)musRiff(c,G.bus,root,t,sd*3.5,.07)}
  else for(const [pos,len] of TT_RIFF){if(Math.floor(pos)!==k)continue;const tt=t+(pos-k)*sd;let m=root;if(pos===5.5)m=root+3;if(pos===7&&(name==='Dm'||name==='Gm'))m=root+1;
    musRiff(c,G.bus,m,tt,len*sd*.95,.1);musBass(c,G.bus,m,tt,len*sd*.95)}
  for(const [a,m,len] of TT_LEAD[bar]){if(a!==k)continue;const prev=(st.end>=s-.1&&st.m)?st.m:m-1;musLead(c,G.bus,G.send,m,prev,t,len*sd*.97,T);st.m=m;st.end=s+len}}
const MUS={cur:0,G:null,timer:0,next:0,s:0,st:{m:0,end:-9},bus:null};
const MUS_BUFS={};
MTH[5]=MTH[5]||MTH[3];
function musKey(ch){return typeof ch==='number'?'c'+ch:ch}
function musRelease(k){if(k&&musKey(MUS.cur)!==k&&MUS.pend!==k&&!(k==='crypt'&&MUS.base===1)&&MUS_BUFS[k]!=='loading')delete MUS_BUFS[k]}
function musLoadBuf(k){if(!AC||!AUDIO_DATA[k]||MUS_BUFS[k])return;MUS_BUFS[k]='loading';const decode=u=>AC.decodeAudioData(u,buf=>{MUS_BUFS[k]=buf;if(MUS.pend===k&&MUS.pendCh!==undefined){const c=MUS.pendCh;MUS.pend=0;musStart(c)}musRelease(k)},()=>{MUS_BUFS[k]=null});try{const src=AUDIO_DATA[k];if(src.startsWith('data:')){const bin=atob(src.split(',')[1]),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);decode(u.buffer)}else{const cached=window.NB_AUDIO_BYTES?.get(src);if(cached)decode(cached.slice(0));else fetch(src).then(r=>{if(!r.ok)throw Error(src);return r.arrayBuffer()}).then(decode).catch(()=>{MUS_BUFS[k]=null})}}catch(e){MUS_BUFS[k]=null}}
// Schedule overlapping sources sharing one decoded buffer; every sample of the track is retained.
function musCrossfade(buffer,out){const c=AC,nodes=new Set(),fade=Math.min(.4,buffer.duration/3);let next=c.currentTime,first=true,stopped=false;
  const pump=(until=c.currentTime+.8)=>{if(stopped)return;while(next<=until){const src=c.createBufferSource(),g=c.createGain(),start=next,end=start+buffer.duration;src.buffer=buffer;g.gain.value=first?1:0;g.gain.setValueAtTime(first?1:0,start);if(!first)g.gain.linearRampToValueAtTime(1,start+fade);g.gain.setValueAtTime(1,end-fade);g.gain.linearRampToValueAtTime(0,end);src.connect(g);g.connect(out);const node={src,g,start,end};nodes.add(node);src.onended=()=>{nodes.delete(node);try{src.disconnect();g.disconnect()}catch(e){}};src.start(start);next=end-fade;first=false;}};
  pump();const timer=setInterval(()=>{if(c.state==='running')pump()},80);
  return{crossfade:fade,nodes,pump,stop:()=>{if(stopped)return;stopped=true;clearInterval(timer);for(const n of nodes){try{n.src.stop();n.src.disconnect();n.g.disconnect()}catch(e){}}nodes.clear()}};
}

function musStart(ch){if(!AC)return;
  const k=musKey(ch);
  if(AUDIO_DATA[k]){const B=MUS_BUFS[k];if(MUS.cur===ch){MUS.pend=0;return;}
    if(!B||B==='loading'){MUS.pend=k;MUS.pendCh=ch;musLoadBuf(k);return}
    if(MUS.cur)musStop(k==='crypt'?1.2:.8);
    MUS.pend=0;const sc=k==='intro'?.8:k==='crypt'?.5:.45,mb=AC.createGain();mb.gain.setValueAtTime(0,AC.currentTime);mb.gain.linearRampToValueAtTime(musVol*sc,AC.currentTime+(k==='intro'?.6:1.6));mb.connect(master);
    let graph;if(k==='c1'||k==='c2')graph=musCrossfade(B,mb);else{const src=AC.createBufferSource();src.buffer=B;if(k!=='intro'||!S){src.loop=true;src.loopStart=.03;src.loopEnd=B.duration-.02}src.connect(mb);src.start();graph={stop:()=>{try{src.stop();src.disconnect()}catch(e){}}}}
    MUS.cur=ch;MUS.scale=sc;MUS.mb=mb;MUS.G=graph;MUS.timer=0;return}
  MUS.pend=0;if(!MTH[ch]){if(MUS.cur)musStop();return}if(MUS.cur===ch)return;if(MUS.cur)musStop(.4);
  const mb=AC.createGain();mb.gain.setValueAtTime(0,AC.currentTime);mb.gain.linearRampToValueAtTime(musVol,AC.currentTime+2.5);mb.connect(master);
  const G=musGraph(AC,mb,MTH[ch]);MUS.cur=ch;MUS.scale=1;MUS.G=G;MUS.mb=mb;MUS.next=AC.currentTime+.4;MUS.s=0;MUS.st={m:0,end:-9};
  const run=()=>{if(MUS.G!==G||AC.state!=='running')return;const T=MTH[ch],sd=60/T.bpm/2;while(MUS.next<AC.currentTime+.4){musStep(AC,G,T,MUS.s,MUS.next,sd,MUS.st);MUS.s=(MUS.s+1)%(T.bars*8);MUS.next+=sd}};
  MUS.timer=setInterval(run,80);run()}
// utwór walki (boss / krypta) włącza się, gdy blisko jest boss albo gdy gracz jest w krypcie; po walce wraca motyw rozdziału
function musTick(dt){if(!MUS.base||!S||!AC||MUS.cur==='intro')return;MUS.tk=(MUS.tk||0)-dt;if(MUS.tk>0)return;MUS.tk=.5;
  const want=!!(S.dg&&!S.dg.done);
  if(want){MUS.off=0;if(MUS.cur!=='crypt')musStart('crypt')}else if(MUS.cur==='crypt'){MUS.off=(MUS.off||0)+.5;if(MUS.off>=4)musStart(MUS.base)}}
function musStop(f=1.8){MUS.pend=0;if(!MUS.cur)return;const G=MUS.G,mb=MUS.mb,k=musKey(MUS.cur);MUS.cur=0;MUS.G=null;clearInterval(MUS.timer);
  try{mb.gain.cancelScheduledValues(AC.currentTime);mb.gain.setValueAtTime(mb.gain.value,AC.currentTime);mb.gain.linearRampToValueAtTime(0,AC.currentTime+f)}catch(e){}
  setTimeout(()=>{G.stop();try{mb.disconnect()}catch(e){}musRelease(k)},f*1000+3500)}
function musSetVol(v){musVol=v;try{localStorage.setItem('pn_mus',String(v))}catch(e){}if(MUS.mb&&AC)MUS.mb.gain.setTargetAtTime(v*(MUS.scale||1),AC.currentTime,.1);for(const e of document.querySelectorAll('.musSl'))e.value=Math.round(v*100)}
const INTRO_KICK={1:(EN?'Act I · The Scorched Settlement':'Rozdział I · Spalona Osada'),2:(EN?'Act II · The Lower City':'Rozdział II · Dolne Miasto'),3:(EN?'Act III · Fallen Goldheim':'Rozdział III · Upadły Złotogród'),4:(EN?'Act IV · Blackwood':'Rozdział IV · Czarnobór'),5:(EN?'Act V · The Creditors\' Citadel':'Rozdział V · Cytadela Wierzycieli')};
let INTRO=null;
// Start loading at chapter selection, while the preparation screen is open.
const INTRO_IMAGES=new Map();
function preloadIntro(ch){const key='intro'+ch;if(!STORY||!SPRITE_DATA[key]||INTRO_IMAGES.has(ch))return;const im=new Image();INTRO_IMAGES.set(ch,im);im.onerror=()=>{const backup=SPRITE_DATA[key+'_fallback'];if(backup&&!im.nbFallback){im.nbFallback=true;SPRITE_DATA[key]=backup;im.src=backup;if(INTRO&&INTRO.ch===ch)$('iimg').style.backgroundImage=`url(${backup})`}else INTRO_IMAGES.delete(ch)};im.src=SPRITE_DATA[key]}
for(let ch=1;ch<=5;ch++)$('start'+ch).addEventListener('click',()=>preloadIntro(ch),true);
$('againBtn').addEventListener('click',()=>preloadIntro(CH===9?1:CH),true);
$('nextBtn').addEventListener('click',()=>preloadIntro(Math.min(5,CH+1)),true);
$('prepGo').addEventListener('click',()=>preloadIntro(PREP.ch),true);
STORY_INTRO[5]=[(EN?'The Holy Order gave its conscience to the Night. The Creditors\' Citadel does not stand on rock, but on ledgers: every debt of the Land, every burned child and every coin torn away was written down here before anyone could scream.':'Zakon oddał Nocy sumienie. Cytadela Wierzycieli nie stoi na skale, tylko na księgach: każdy dług Krainy, każde spalone dziecko i każda wyrwana moneta zostały tu zapisane, zanim ktokolwiek zdążył krzyknąć.'),(EN?'The walls are black stone, and scenes of executions burn in the stained glass. In the courtyard a gallows creaks, and no one takes the bodies down. The wind turns pages scattered on the cobbles, and every one bears your name.':'Mury są z czarnego kamienia, a w witrażach płoną sceny egzekucji. Na dziedzińcu skrzypi szubienica, z której nikt nie zdejmuje ciał. Wiatr przewraca strony rozrzucone po bruku, a na każdej widnieje twoje imię.'),(EN?'In the chancery the scribes are still writing, though the ink turned to blood long ago. The Courtroom awaits the next trial, in the treasury the gold counts itself, and in the dungeons rattle the chains of those who did not pay in time.':'W kancelarii skrybowie wciąż piszą, choć atrament dawno zamienił się w krew. Sala Sądowa czeka na kolejną rozprawę, w skarbcu złoto liczy się samo, a w lochach brzęczą kajdany tych, którzy nie zdążyli spłacić.'),(EN?'The Arch-Judge Auditor never raises his voice. He reads a sentence like a bill and always collects to the last coin. Further on, at the end of this road, stands a throne, and on it the one who was first to record your Brand.':'Arcysędzia Rachmistrz nie podnosi głosu. Czyta wyrok jak rachunek i zawsze ściąga należność do ostatniej monety. Dalej, na końcu tej drogi, stoi tron, a na nim ten, który wpisał twoje piętno jako pierwsze.'),(EN?'Four pledges repaid, one remains. The Brand beats to the rhythm of the bell, and the ledgers open. The Creditor has come for the rest.':'Cztery zastawy spłacone, został ostatni. Piętno bije w rytmie dzwonu, a księgi się otwierają. Wierzyciel przyszedł po resztę.')];
function storyIntro(ch){if(!STORY||!STORY_INTRO[ch]||!S||!SPRITE_DATA['intro'+ch])return;
  preloadIntro(ch);
  const el=$('intro');$('iimg').style.backgroundImage=`url(${SPRITE_DATA['intro'+ch]})`;$('iimg').style.animation='none';void $('iimg').offsetWidth;$('iimg').style.animation='';
  $('ikick').textContent=INTRO_KICK[ch];$('itxtp').textContent='';el.classList.remove('out');el.hidden=false;$('touch').hidden=true;
  INTRO={ch,lines:STORY_INTRO[ch],i:0,pos:0,full:false,t:0,wait:.5};S.intro=true;}
function introEnd(){if(!INTRO)return;if(MUS.cur==='intro'||MUS.pend==='intro'){MUS.pend=0;if(MUS.base)musStart(MUS.base)}const el=$('intro');el.classList.add('out');INTRO=null;S.intro=false;musRelease('intro');setTimeout(()=>{if(!INTRO)el.hidden=true},950);$('touch').hidden=!coarse}
function introNext(){if(!INTRO||INTRO.wait>0)return;const L=INTRO.lines[INTRO.i];
  if(!INTRO.full){INTRO.pos=L.length;INTRO.full=true;$('itxtp').textContent=L;$('ihint').innerHTML=(EN?'<b>▼</b> Space / tap: continue':'<b>▼</b> Spacja / dotknięcie: dalej');return}
  if(INTRO.i<INTRO.lines.length-1){INTRO.i++;INTRO.pos=0;INTRO.full=false;$('itxtp').textContent='';$('ihint').textContent='';return}
  introEnd()}
function introTick(dt){if(!INTRO)return;const I=INTRO;I.t+=dt;if(I.wait>0)I.wait-=dt;
  const L=I.lines[I.i];
  if(!I.full&&I.wait<=0){const before=Math.floor(I.pos);I.pos+=dt*(L[Math.floor(I.pos)]==='.'||L[Math.floor(I.pos)]===','?9:34);const now=Math.min(L.length,Math.floor(I.pos));
    if(now!==before){$('itxtp').textContent=L.slice(0,now);if(now%2===0&&L[now-1]!==' ')tone(150+Math.random()*60,120,.03,.018,'square')}
    if(I.pos>=L.length){I.full=true;$('ihint').innerHTML=(EN?'<b>▼</b> Space / tap: continue':'<b>▼</b> Spacja / dotknięcie: dalej')}}
}

$('intro').addEventListener('click',()=>introNext());
// muzyka tytułowa startuje przy pierwszym dotknięciu/klawiszu (przeglądarki blokują dźwięk przed gestem użytkownika)
function musFirst(){try{if(AC&&AC.state==='suspended'&&!(S&&S.paused))acResume()}catch(e){}if(S||MUS.cur)return;try{initAudio();if(AC&&AC.state==='suspended')acResume();musStart(AUDIO_DATA.intro?'intro':'title')}catch(e){}}
addEventListener('pointerdown',musFirst,true);addEventListener('keydown',musFirst,true);addEventListener('click',musFirst,true);addEventListener('touchend',musFirst,true);
for(const e of document.querySelectorAll('.musSl')){e.value=Math.round(musVol*100);e.addEventListener('input',()=>musSetVol(e.value/100))}
function storyBoss(e){if(!STORY||S.dg||e.dgBoss)return;const t=STORY_BOSS[CH+e.type]||STORY_BOSS[e.type];if(t)setTimeout(()=>{if(S&&S.phase==='play'&&!pl.dead)say(t,'story')},3600)}
let startBusy=false;
function beginRun(){if(startBusy)return;startBusy=true;const b=$('prepGo'),label=b.innerHTML;b.disabled=true;b.textContent=(EN?'Preparing the act…':'Przygotowywanie rozdziału…');if(coarse)goFull();requestAnimationFrame(()=>setTimeout(()=>{try{if(!$('prep').hidden)start(PREP.ch)}catch(e){console.error(e);toMenu();say((EN?'Failed to prepare the act. Refresh the game and try again.':'Nie udało się przygotować rozdziału. Odśwież grę i spróbuj ponownie.'))}finally{startBusy=false;b.disabled=false;b.innerHTML=label}},0))}
function start(ch){if(!A)return;if(!groupReady(ch))return waitChapter(ch,()=>start(ch));ftClear();hbClear();$('pause').hidden=true;$('bAtk').hidden=$('bBlock').hidden=$('bHeavy').hidden=false;$('btns').classList.add('sl');resetInput();if(coarse)goFull();if(coarse||SETT.quality==='low')for(const k of Object.keys(WORLDS))if(+k!==ch)releaseWorld(+k);ensureWorld(ch);useWorld(ch);initAudio();if(AC&&AC.state==='suspended')acResume();newGame();applyPrep();lastHud='';MUS.base=ch;for(const k of Object.keys(MUS_BUFS))musRelease(k);if(ch===1)musLoadBuf('crypt');if(ch===1&&STORY)musLoadBuf('intro');if(!(ch===1&&AUDIO_DATA.intro))musStart(ch);for(const id of ['title','end','lvl','dialog','prep'])$(id).hidden=true;$('hud').hidden=false;$('touch').hidden=!coarse;camTarget.set(pl.x/16,0,pl.y/16);if(ch>=1&&ch<=5)storyIntro(ch);if(ch===1&&INTRO&&AUDIO_DATA.intro)musStart('intro')}
// ---- postać: poziom, perki i wyzwania nocy (postęp zapisany pod kluczem 's'; dawne dane Hordy 'a' są ignorowane) ----
const PERKS=[
 {id:'zaliczka',lv:1,n:(EN?'Retainer':'Zaliczka'),pl:(EN?'+50 coins at the start':'+50 monet na start'),mi:(EN?'25% more enemies':'wrogów o 25% więcej'),bx:.10,fx:k=>{S.coins+=50;k.en*=1.25}},
 {id:'twardziel',lv:2,n:(EN?'Hardened':'Twardziel'),pl:(EN?'+20% health':'+20% życia'),mi:(EN?'10% slower movement':'ruch wolniejszy o 10%'),bx:.10,fx:k=>{pl.max=Math.round(pl.max*1.2);k.spd*=.9}},
 {id:'szklana',lv:3,n:(EN?'Glass Blade':'Szklana klinga'),pl:(EN?'+25% damage':'+25% obrażeń'),mi:(EN?'−20% health':'−20% życia'),bx:.10,fx:k=>{k.dmg*=1.25;pl.max=Math.round(pl.max*.8)}},
 {id:'lekka',lv:4,n:(EN?'Lightfoot':'Lekka stopa'),pl:(EN?'12% faster movement':'ruch szybszy o 12%'),mi:(EN?'enemies deal +15% damage':'wrogowie zadają +15% obrażeń'),bx:.10,fx:k=>{k.spd*=1.12;k.hurt*=1.15}},
 {id:'chciwosc',lv:5,n:(EN?'Greed':'Chciwość'),pl:(EN?'+25% coins from the ground':'+25% monet z ziemi'),mi:(EN?'you take +15% damage':'otrzymujesz +15% obrażeń'),bx:.12,fx:k=>{k.coin*=1.25;k.hurt*=1.15}},
 {id:'uczen',lv:6,n:(EN?'Disciple of the Night':'Uczeń nocy'),pl:(EN?'+30% experience during the night':'+30% doświadczenia w nocy'),mi:(EN?'enemies have +20% health':'wrogowie mają +20% życia'),bx:.12,fx:k=>{k.xp*=1.3;k.ehp*=1.2}},
 {id:'bezlitosc',lv:7,n:(EN?'Merciless':'Bez litości'),pl:(EN?'+20% damage':'+20% obrażeń'),mi:(EN?'levelling up heals 5% instead of 10%':'awans leczy 5% zamiast 10%'),bx:.15,fx:k=>{k.dmg*=1.2;k.lvHeal=.05}},
 {id:'pomruk',lv:8,n:(EN?'Low Growl':'Pomruk'),pl:(EN?'+25% character experience':'+25% do doświadczenia postaci'),mi:(EN?'enemies +40%, their damage +20%':'wrogów +40%, ich obrażenia +20%'),bx:.25,fx:k=>{k.en*=1.4;k.hurt*=1.2}}];
const CHALS=[
 {id:'rzeznik',n:(EN?'The Butcher':'Rzeźnik'),d:(EN?'Kill 120 enemies in one night.':'Zabij 120 wrogów w jedną noc.'),bx:.5,coins:40,v:()=>S.kills>=120,pr:()=>S.kills+'/120'},
 {id:'skarbnik',n:(EN?'The Treasurer':'Skarbnik'),d:(EN?'Collect 200 coins from the ground.':'Zbierz 200 monet z ziemi.'),bx:.4,coins:0,v:()=>(S.cEarn||0)>=200,pr:()=>Math.min(200,S.cEarn||0)+'/200'},
 {id:'elita',n:(EN?'Elite Hunter':'Łowca elit'),d:(EN?'Kill the crimson elite.':'Zabij bordową elitę.'),bx:.4,coins:50,v:()=>!!S.eliteK,pr:()=>S.eliteK?'zabita':(EN?'alive':'żyje')},
 {id:'nietykalny',n:(EN?'Untouchable':'Nietykalny'),d:(EN?'Survive the night taking at most 5 hits.':'Przetrwaj noc, dostając najwyżej 5 trafień.'),bx:.6,coins:0,end:true,v:()=>(S.hitsT||0)<=5,pr:()=>'trafienia '+(S.hitsT||0)+'/5'},
 {id:'riposta',n:(EN?'Riposte Master':'Mistrz riposty'),d:(EN?'Parry successfully 15 times.':'Udane parowanie 15 razy.'),bx:.5,coins:40,v:()=>(S.parries||0)>=15,pr:()=>(S.parries||0)+'/15'}];
const PK0=()=>({en:1,ehp:1,spd:1,dmg:1,hurt:1,coin:1,xp:1,lvHeal:.1});
const perkMinus=p=>p.mi;
const PREP={perks:[],ch:null},PNEED=l=>150+75*(l-1),PMAX=10,PMODE=()=>'s';
function cleanProg(raw){const o={};for(const m of ['s','a']){const q=isRecord(raw)&&isRecord(raw[m])?raw[m]:{};const lv=Math.floor(clampNumber(q.lv,1,PMAX,1));o[m]={lv,xp:lv>=PMAX?0:Math.floor(clampNumber(q.xp,0,PNEED(lv)-1,0)),sel:[...new Set(Array.isArray(q.sel)?q.sel:[])].filter(id=>PERKS.some(p=>p.id===id&&p.lv<=lv)).slice(0,3),ch:CHALS.some(c=>c.id===q.ch)?q.ch:null}}return o}
function loadProg(){try{return cleanProg(JSON.parse(localStorage.getItem('pn_prog')||'{}'))}catch(e){return cleanProg({})}}
const PROG=loadProg();function saveProg(){try{localStorage.setItem('pn_prog',JSON.stringify(PROG))}catch(e){warnSaveFailure()}}
const prog=()=>PROG[PMODE()];
function charLine(){const q=prog();return (EN?`Character: level ${q.lv}${q.lv>=PMAX?' (max)':' · '+q.xp+'/'+PNEED(q.lv)+' experience'}`:`Postać: poziom ${q.lv}${q.lv>=PMAX?' (maks.)':' · '+q.xp+'/'+PNEED(q.lv)+' doświadczenia'}`)}
function openPrep(ch){if(!groupReady(ch))return waitChapter(ch,()=>openPrep(ch),$('start'+ch));PREP.ch=ch;const q=prog();PREP.perks=q.sel.filter(id=>PERKS.find(p=>p.id===id&&p.lv<=q.lv)).slice(0,3);PREP.chal=CHALS.some(c=>c.id===q.ch)?q.ch:null;
  $('title').hidden=true;$('end').hidden=true;$('prep').hidden=false;renderPrep();setTimeout(()=>{const f=$('prepGo');f.focus();$('prep').scrollTop=0},30)}
function prepBonus(){let b=0;for(const id of PREP.perks)b+=PERKS.find(p=>p.id===id).bx;const c=CHALS.find(c=>c.id===PREP.chal);return {perk:b,ch:c?c.bx:0}}
function renderPrep(){const q=prog();$('prepK').textContent=CHN[PREP.ch-1];{const nm=$('prepNim');nm.className='nimh ch'+PREP.ch;nm.setAttribute('aria-label',CHN[PREP.ch-1])}$('prepN').textContent=q.lv;$('prepLv').textContent=q.lv>=PMAX?(EN?'Max level':'Poziom maksymalny'):q.xp+' / '+PNEED(q.lv)+(EN?' XP to level ':' XP do poziomu ')+(q.lv+1);$('prepBar').style.setProperty('--p',q.lv>=PMAX?1:q.xp/PNEED(q.lv));
  $('prepPH').textContent=(EN?`Perks (${PREP.perks.length}/3) · experience bonus: +${Math.round(prepBonus().perk*100)}%`:`Perki (${PREP.perks.length}/3) · bonus do doświadczenia: +${Math.round(prepBonus().perk*100)}%`);
  const P=$('prepPerks');P.innerHTML='';for(const d of PERKS){const lock=d.lv>q.lv,on=PREP.perks.includes(d.id),b=document.createElement('button');b.type='button';b.className='opt'+(on?' on':'');b.disabled=lock;
    b.innerHTML=lock?(EN?`<b>${d.n}</b><small>Unlocks at character level ${d.lv}</small>`:`<b>${d.n}</b><small>Odblokowanie: poziom postaci ${d.lv}</small>`):`<b>${on?'✓ ':''}${d.n}</b><span class="pl">${d.pl}</span><span class="mi">${perkMinus(d)}</span>`;
    b.addEventListener('click',()=>{const i=PREP.perks.indexOf(d.id);if(i>=0)PREP.perks.splice(i,1);else if(PREP.perks.length<3)PREP.perks.push(d.id);else{play('empty',0);return}q.sel=PREP.perks.slice();saveProg();renderPrep();const nb=[...$('prepPerks').children][PERKS.indexOf(d)];nb&&nb.focus()});P.appendChild(b)}
  const C=$('prepCh');C.innerHTML='';for(const c of CHALS){const on=PREP.chal===c.id,b=document.createElement('button');b.type='button';b.className='opt'+(on?' on':'');
    b.innerHTML=(EN?`<b>${on?'✓ ':''}${c.n}</b><span>${c.d}</span><span class="pl">reward: +${Math.round(c.bx*100)}% character experience${c.coins?' and '+c.coins+' coins right away':''}</span>`:`<b>${on?'✓ ':''}${c.n}</b><span>${c.d}</span><span class="pl">nagroda: +${Math.round(c.bx*100)}% doświadczenia postaci${c.coins?' i '+c.coins+' monet od razu':''}</span>`);
    b.addEventListener('click',()=>{PREP.chal=on?null:c.id;q.ch=PREP.chal;saveProg();renderPrep();const nb=[...$('prepCh').children].find(x=>x.textContent.includes(c.n));nb&&nb.focus()});C.appendChild(b)}}
function applyPrep(){const k=S.pk=PK0();S.hitsT=0;S.parries=0;S.cEarn=0;S.chal=null;const q=prog();
  for(const id of PREP.perks){const d=PERKS.find(p=>p.id===id);if(d&&d.lv<=q.lv)d.fx(k)}
  pl.hp=pl.max;pl.staMax=pl.staMax||100;const c=CHALS.find(c=>c.id===PREP.chal);if(c)S.chal={c,done:false};S.perkIds=PREP.perks.slice();PREP.perks=[];PREP.chal=null}
function chTick(){const h=$('chal');if(!h||!S)return;const ch=S.chal;if(!ch){if(!h.hidden)h.hidden=true;return}
  if(!ch.done&&!ch.c.end&&ch.c.v()){ch.done=true;if(ch.c.coins)S.coins+=ch.c.coins;play('bless',0);say((EN?'Challenge complete: ':'Wyzwanie ukończone: ')+ch.c.n+'.');ftInfo((EN?'Challenge!':'Wyzwanie!'))}
  const t=(ch.done?'✓ ':'')+ch.c.n+': '+(ch.done?(EN?'complete':'ukończone'):ch.c.pr());if(h.textContent!==t){h.textContent=t;h.classList.toggle('done',ch.done)}h.hidden=false}
function grantXp(won,surv){const q=prog();if(S.finalDeathLoss)return (EN?'Character: +0 experience — second death. Earlier progress is kept.':'Postać: +0 doświadczenia — druga śmierć. Wcześniejszy rozwój pozostaje zachowany.');let b=0,perk=0;for(const id of S.perkIds||[])perk+=PERKS.find(p=>p.id===id).bx;b+=perk;const ch=S.chal;let chDone=false;
  if(ch){if(ch.c.end){if(won&&ch.c.v())ch.done=true}chDone=ch.done;if(chDone)b+=ch.c.bx}
  const base=Math.floor(S.kills*.5+surv/6+(won?150:0)),rawGain=Math.round(base*(1+b)*DF[DIFFK].xp*.7),gain=S.rebirthUsed?Math.round(rawGain*.5):rawGain;q.xp+=gain;const lv0=q.lv,ups=[];
  while(q.lv<PMAX&&q.xp>=PNEED(q.lv)){q.xp-=PNEED(q.lv);q.lv++;const np=PERKS.find(p=>p.lv===q.lv);if(np)ups.push(np.n)}if(q.lv>=PMAX)q.xp=0;saveProg();
  return (EN?`Character: +${gain} experience${S.rebirthUsed?' (revival: −50%)':''}${b?' (bonus +'+Math.round(b*100)+'%)':''} · level ${q.lv}${q.lv>lv0?' (level up!)':''}${ups.length?' · new perk: '+ups.join(', '):''}${ch?'\nChallenge '+ch.c.n+(chDone?': complete':': not complete'):''}`:`Postać: +${gain} doświadczenia${S.rebirthUsed?' (odrodzenie: −50%)':''}${b?' (bonus +'+Math.round(b*100)+'%)':''} · poziom ${q.lv}${q.lv>lv0?' (awans!)':''}${ups.length?' · nowy perk: '+ups.join(', '):''}${ch?'\nWyzwanie '+ch.c.n+(chDone?': ukończone':': nieukończone'):''}`)}
// ---- zapis postępu (rekordy rozdziałów, osobno dla każdego trybu) ----
const CHN=[(EN?'The Scorched Settlement':'Spalona Osada'),(EN?'The Lower City':'Dolne Miasto'),(EN?'Fallen Goldheim':'Upadły Złotogród'),(EN?'Blackwood':'Czarnobór'),(EN?'The Creditors\' Citadel':'Cytadela Wierzycieli')],CHR=['I','II','III','IV','V'];
let saveWarned=false;function warnSaveFailure(){const text=(EN?'Could not save progress in the browser. In Options you can save your progress to a file.':'Nie udało się zapisać postępu w przeglądarce. W Opcjach możesz zapisać postęp do pliku.');$('saveMsg').textContent=text;if(!saveWarned){saveWarned=true;say(text)}}
function saveStore(){try{localStorage.setItem('pn_save',JSON.stringify(SETT.save))}catch(e){warnSaveFailure()}}
const mmss=t=>Math.floor(t/60)+':'+String(Math.floor(t%60)).padStart(2,'0');
function recordRun(C,won,t,lvl,kills){const k='s'+C,r=SETT.save[k]||(SETT.save[k]={});
  if(won){r.win=r.win?Math.min(r.win,t):t}r.t=Math.max(r.t||0,t);r.lvl=Math.max(r.lvl||0,lvl);r.kills=Math.max(r.kills||0,kills);saveStore()}
function renderRecords(){{const q=prog(),n=$('chN');if(n){n.textContent=q.lv;$('chBar').style.setProperty('--p',q.lv>=PMAX?1:q.xp/PNEED(q.lv));$('chXp').textContent=q.lv>=PMAX?(EN?'Max level':'Poziom maksymalny'):q.xp+' / '+PNEED(q.lv)+(EN?' XP to level ':' XP do poziomu ')+(q.lv+1)}}for(let i=1;i<=5;i++){const b=$('start'+i);if(!b||b.disabled&&!b.querySelector('small'))continue;const r=SETT.save['s'+i],lk=chLocked(i);b.disabled=lk;b.classList.toggle('lk',lk);
    b.innerHTML=(EN?'<small>Act ':'<small>Rozdział ')+CHR[i-1]+':</small>'+CHN[i-1]+(lk?(EN?'<span class="recline">Locked · complete act ':'<span class="recline">Zablokowany · ukończ rozdział ')+CHR[i-2]+(EN?' or enable Arcade on the title screen</span>':' lub włącz Arcade na ekranie tytułowym</span>'):r?'<span class="recline'+(r.win?' ok':'')+'">'+(r.win?(EN?'✓ completed ':'✓ ukończony ')+mmss(r.win)+' · ':(EN?'longest ':'najdłużej ')+mmss(r.t)+' · ')+'poz. '+r.lvl+(EN?' · kills ':' · zabici ')+r.kills+'</span>':'')}}
function endGame(won){$('activeSkillHud').hidden=true;clearSwordTransient();if(swordGlow)swordGlow.visible=false;$('notice').hidden=true;S.notice=null;S.noticeQueue=[];S.banner=null;$('msg').classList.remove('on');S.witChoice=false;for(const id of ['lvl','shop','dialog','pause'])$(id).hidden=true;musStop(2.5);const inDg=!!S.dg,C=inDg?1:CH;S.phase='end';$('touch').hidden=true;$('boss').hidden=true;$('prompt').hidden=true;const surv=S.t,m=Math.floor(surv/60),s=Math.floor(surv%60);if(!inDg)recordRun(C,won,surv,S.lvl,S.kills);$('endXp').textContent=grantXp(won,surv);$('chal').hidden=true;
  $('endKicker').textContent=won?(EN?`Act ${['I','II','III','IV','V'][C-1]} complete`:`Rozdział ${['I','II','III','IV','V'][C-1]} ukończony`):(C===1?(EN?'The Night devoured you':'Noc cię pochłonęła'):C===2?(EN?'The Lower City devoured you':'Dolne Miasto cię pochłonęło'):C===3?(EN?'Goldheim devoured you':'Złotogród cię pochłonął'):C===5?(EN?'The Citadel devoured you':'Cytadela cię pochłonęła'):(EN?'Blackwood devoured you':'Czarnobór cię pochłonął'));
  $('endTitle').classList.toggle('lost',!won);$('endTitle').classList.toggle('swit',won&&C===1);for(const [c,k] of [[2,'wrota'],[3,'kopuly'],[4,'brzask'],[5,'splata']])$('endTitle').classList.toggle(k,won&&C===c);$('endTitle').setAttribute('aria-label',won?(['',(EN?'Dawn':'Świt'),(EN?'Gates':'Wrota'),(EN?'Domes':'Kopuły'),(EN?'Daybreak':'Brzask'),(EN?'Debt Repaid':'Spłata')][C]||''):(EN?'You Have Fallen':'Poległeś'));$('endTitle').innerHTML=won?(C===1?(EN?'Da<em>wn</em>':'Ś<em>wit</em>'):C===2?(EN?'Ga<em>tes</em>':'Wro<em>ta</em>'):C===3?(EN?'Do<em>mes</em>':'Kopu<em>ły</em>'):C===5?(EN?'Debt <em>Repaid</em>':'Spła<em>ta</em>'):(EN?'Day<em>break</em>':'Brza<em>sk</em>')):(EN?'You Have <em>Fallen</em>':'Pole<em>głeś</em>');
  $('endText').textContent=won?(C===1?(EN?'The sun rises over the ashes of the Scorched Settlement. Beneath the burned chapel you see stairs leading down, into the Lower City.':'Słońce wstaje nad zgliszczami Spalonej Osady. Pod spaloną kaplicą widzisz schody prowadzące w dół, do Dolnego Miasta.'):C===2?(EN?'The gates to the surface groan open. Behind you, deep beneath the lava, something enormous opens its eyes.':'Wrota na powierzchnię rozwierają się z jękiem. Za tobą, w głębi pod lawą, coś ogromnego otwiera oczy.'):C===5?(EN?'The Creditor\'s ledger burns. The seals crack one after another, and for the first time the Citadel falls silent.':'Rejestr Wierzyciela płonie. Pieczęcie pękają jedna po drugiej, a w Cytadeli po raz pierwszy robi się cicho.'):C===4?(EN?'The mist settles in the valleys. The fires on Bleak Peak die down, and the barrows are quiet again. For now.':'Mgła opada w dolinach. Na Łysej Górze dogasają ogniska, a w kurhanach znów jest cicho. Na razie.'):(EN?'The beast lies dead at the foot of the cathedral. The bells keep ringing, though no one moves them. The gold of the domes gives no warmth.':'Bestia leży martwa u stóp katedry. Dzwony biją dalej, choć nikt ich nie porusza. Złoto kopuł nie grzeje.'))
    :(C===1?(EN?'Your body stays in the mud between the burned huts. \nBy morning something will feed on it.':'Twoje ciało zostaje w błocie między spalonymi chatami. \nDo rana coś się nim pożywi.'):C===2?(EN?'Your bones will stay here forever, among the bones of the dwarves who dug too deep.':'Twoje kości zostaną tu na zawsze, między kośćmi krasnoludów, którzy kopali za głęboko.'):C===5?(EN?'Your name goes into the ledger. \nEntry: repaid with a life.':'Twoje imię trafia do rejestru. \nPozycja: spłacone życiem.'):C===4?(EN?'The forest closes over your body. \nThe wolves will find you before dawn.':'Las zamyka się nad twoim ciałem. \nWilki znajdą cię przed świtem.'):(EN?'Your blood seeps between the golden flagstones. \nBy morning the madmen will lick them clean.':'Twoja krew wsiąka między złote płyty. \nDo rana szaleńcy wyliżą je do czysta.'));
  if(STORY&&won&&!inDg)$('endText').textContent+=STORY_END[C]||'';
  $('nextBtn').hidden=!(won&&C<5);$('nextBtn').innerHTML=C===1?(EN?'<small>Act II</small>Descend into the Lower City':'<small>Rozdział II</small>Zejdź do Dolnego Miasta'):C===2?(EN?'<small>Act III</small>Climb to the surface':'<small>Rozdział III</small>Wyjdź na powierzchnię'):C===4?(EN?'<small>Act V</small>Enter the Citadel':'<small>Rozdział V</small>Wejdź do Cytadeli'):(EN?'<small>Act IV</small>Set out into Blackwood':'<small>Rozdział IV</small>Wyrusz w Czarnobór');
  if(inDg){$('endKicker').textContent=(EN?'The crypt devoured you':'Krypta cię pochłonęła');$('endText').textContent=(EN?'Your bones will stay in the crypt beneath the cemetery of the Scorched Settlement, among sarcophagi that no one will ever open again.':'Twoje kości zostaną w krypcie pod cmentarzem Spalonej Osady, między sarkofagami, których nikt już nie otworzy.')}
  {const sk=Object.keys(S.sk||{}).filter(k=>S.sk[k]>0&&SK[k]).map(k=>SK[k].name+' '+S.sk[k]),esc=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;');
   const it=[(EN?`Time: ${m}:${String(s).padStart(2,'0')}`:`Czas: ${m}:${String(s).padStart(2,'0')}`),(EN?`Level: ${S.lvl}`:`Poziom: ${S.lvl}`),(EN?`Kills: ${S.kills}`:`Zabici: ${S.kills}`),(EN?`Coins: ${S.coins}`:`Monety: ${S.coins}`),(EN?`Damage dealt: ${Math.round(S.dealt||0).toLocaleString('en-US')}`:`Zadane obrażenia: ${Math.round(S.dealt||0).toLocaleString('pl-PL')}`),(EN?`Hits taken: ${S.hitsT||0}`:`Otrzymane trafienia: ${S.hitsT||0}`)];
   if(S.parries)it.push((EN?`Parries: ${S.parries}`:`Parowania: ${S.parries}`));it.push((EN?`Difficulty: ${DF[DIFFK].n}`:`Trudność: ${DF[DIFFK].n}`));
   const wide=[];if(!won&&pl.dead&&S.deathCause)wide.push((EN?`Cause of death: ${S.deathCause}`:`Przyczyna śmierci: ${S.deathCause}`));
   for(const l of ($('endXp').textContent||'').split('\n'))for(const q of l.split(' · '))if(q.trim()){let z=q.trim();z=z.replace(/^poziom (\d+)/,(EN?'Character level: $1':'Poziom postaci: $1'));z=z[0].toUpperCase()+z.slice(1);it.push(z)}
   $('endStats').innerHTML='<ul class="blist">'+it.map(x=>'<li>'+esc(x)+'</li>').join('')+wide.map(x=>'<li class="w">'+esc(x)+'</li>').join('')+'</ul>';$('endStats2').textContent='';$('endXp').textContent=''}$('end').hidden=false;setTimeout(()=>($('nextBtn').hidden?$('againBtn'):$('nextBtn')).focus(),50)}
// ---- ustawienia: efekty, wielkość napisów, liczby obrażeń; ściąga sterowania w pauzie ----
document.addEventListener('click',e=>{const x=e.target,b=x.closest&&(x.matches('.tgl input')?x:x.closest('button,summary'));if(b&&!b.disabled&&!b.closest('#btns'))play('ui',0)},true);
function applySett(){if(typeof fit==='function')fit();if(sfxG&&AC)sfxG.gain.setTargetAtTime(SETT.sfx,AC.currentTime,.05);
  for(const e of document.querySelectorAll('.sfxSl'))e.value=Math.round(SETT.sfx*100);for(const e of document.querySelectorAll('.ftsSl'))e.value=SETT.fts;for(const e of document.querySelectorAll('.dmgTgl'))e.checked=SETT.dmg}
for(const e of document.querySelectorAll('.sfxSl'))e.addEventListener('input',()=>{SETT.sfx=e.value/100;try{localStorage.setItem('pn_sfx',String(SETT.sfx))}catch(x){}applySett()});
for(const e of document.querySelectorAll('.ftsSl'))e.addEventListener('input',()=>{SETT.fts=+e.value;try{localStorage.setItem('pn_fts',String(SETT.fts))}catch(x){}applySett()});
for(const e of document.querySelectorAll('.dmgTgl'))e.addEventListener('change',()=>{SETT.dmg=e.checked;try{localStorage.setItem('pn_dmg',SETT.dmg?'1':'0')}catch(x){}applySett()});
applySett();
function fillPauseKeys(){const t=$('pauseKeys');if(!t)return;const g=id=>($(id)?$(id).innerHTML:'').replace(/ id="/g,' data-i="');
  t.innerHTML=(EN?'<div class="subtabs"><button class="stab on" type="button" data-ps="kb">Keyboard and mouse</button><button class="stab" type="button" data-ps="mouse">Mouse</button><button class="stab" type="button" data-ps="pad">Xbox controller</button><button class="stab" type="button" data-ps="touch">Touch screen</button></div><div class="opsep sm" aria-hidden="true"></div><div data-pp="kb">':'<div class="subtabs"><button class="stab on" type="button" data-ps="kb">Klawiatura i mysz</button><button class="stab" type="button" data-ps="mouse">Mysz</button><button class="stab" type="button" data-ps="pad">Kontroler Xbox</button><button class="stab" type="button" data-ps="touch">Ekran dotykowy</button></div><div class="opsep sm" aria-hidden="true"></div><div data-pp="kb">')+g('sub-kb')+'</div><div data-pp="mouse" hidden>'+g('sub-mouse')+'</div><div data-pp="pad" hidden>'+g('sub-pad')+'</div><div data-pp="touch" hidden>'+g('sub-touch')+'</div>';
  $('pause').classList.add('sl');pauseSub('')}
function pauseSub(k){const t=$('pauseKeys');for(const x of t.querySelectorAll('[data-ps]'))x.classList.toggle('on',x.dataset.ps===k);for(const x of t.querySelectorAll('[data-pp]'))x.hidden=x.dataset.pp!==k}
$('pauseKeys').addEventListener('click',e=>{const b=e.target.closest('[data-ps]');if(b)pauseSub(b.classList.contains('on')?'':b.dataset.ps)});
$('rerollBtn').addEventListener('click',rerollLevelCards);
const SAVE_KEYS=['pn_save','pn_prog','pn_mode','pn_story','pn_bri','pn_sfx','pn_fts','pn_dmg','pn_mus','pn_touch','pn_diff','pn_access','pn_tut_s','pn_tut_a','pn_hints'];
function saveMsg(s){$('saveMsg').textContent=s}
$('expSave').addEventListener('click',()=>{try{const d={};for(const k of SAVE_KEYS){try{const v=localStorage.getItem(k);if(v!==null)d[k]=v}catch(e){}}
  d.pn_prog=JSON.stringify(PROG);d.pn_save=JSON.stringify(SETT.save);const blob=new Blob([JSON.stringify({game:'nightbrand',v:1,saved:new Date().toISOString(),data:d},null,1)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='nightbrand-zapis.json';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);saveMsg((EN?'Saved the file nightbrand-zapis.json. Keep it somewhere safe.':'Zapisano plik nightbrand-zapis.json. Trzymaj go w bezpiecznym miejscu.'))}catch(e){saveMsg((EN?'Could not save the file in this browser.':'Nie udało się zapisać pliku w tej przeglądarce.'))}});
$('impSave').addEventListener('click',()=>$('impFile').click());
$('impFile').addEventListener('change',()=>{const f=$('impFile').files[0];if(!f)return;const r=new FileReader();r.onerror=()=>saveMsg((EN?'Could not read the file.':'Nie udało się odczytać pliku.'));r.onload=()=>{try{const o=JSON.parse(r.result);if(!o||o.game!=='nightbrand'||!o.data||typeof o.data!=='object')throw 0;
  if(o.data.pn_save!==undefined)o.data.pn_save=JSON.stringify(cleanRecords(JSON.parse(o.data.pn_save)));if(o.data.pn_prog!==undefined)o.data.pn_prog=JSON.stringify(cleanProg(JSON.parse(o.data.pn_prog)));
  const before=new Map(),updates=SAVE_KEYS.filter(k=>typeof o.data[k]==='string');let n=0;try{for(const k of updates){before.set(k,localStorage.getItem(k));localStorage.setItem(k,o.data[k]);n++}}catch(err){for(const [k,v] of before){try{if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,v)}catch(ignore){}}throw err}
  if(!n)throw 0;saveMsg((EN?'Save loaded. The game will refresh in a moment.':'Wczytano zapis. Za chwilę gra się odświeży.'));setTimeout(()=>location.reload(),900)}catch(e){saveMsg((EN?'This is not a valid Nightbrand save file.':'To nie jest poprawny plik zapisu Nightbrand.'))}$('impFile').value=''};r.readAsText(f)});
$('clearSave').addEventListener('click',()=>{$('opts').hidden=true;$('conf').hidden=false;setTimeout(()=>$('confNo').focus(),30)});
$('confNo').addEventListener('click',()=>{$('conf').hidden=true;$('opts').hidden=false;setTimeout(()=>$('clearSave').focus(),30)});
$('confYes').addEventListener('click',()=>{SETT.save={};saveStore();for(const m of ['s','a'])Object.assign(PROG[m],{xp:0,lv:1,sel:[],ch:null});saveProg();renderRecords();refreshDat();$('conf').hidden=true;$('opts').hidden=false;$('clearSave').textContent=(EN?'Save cleared':'Zapis wyczyszczony');setTimeout(()=>{$('clearSave').textContent=(EN?'Clear progress save':'Wyczyść zapis postępu')},1800)});
// ---- INSTRUKCJA GRY: treści ręczne + tabele generowane z danych gry (zawsze zgodne z kodem) ----
const MAN_TABS=[['start',(EN?'Getting started':'Zaczynamy')],['slasher',(EN?'Combat':'Walka')],['style',(EN?'Styles and magic':'Style i magia')],['prog',(EN?'Character and perks':'Postać i perki')],['world',(EN?'Night, shop, world':'Noc, sklep, świat')],['tips',(EN?'Tips':'Porady')]];
const mI=k=>`<i class="ic ic-${(SK[k]&&SK[k].ic)||k}"></i>`;
const mBox=(h,b)=>`<section class="mbox"><h3>${h}</h3>${b}</section>`;
const mP=s=>`<p>${s}</p>`,mUl=a=>'<ul>'+a.map(x=>`<li>${x}</li>`).join('')+'</ul>';
function mSkill(k,pre){const d=SK[k];return `<details class="msk"><summary>${mI(k)}<div class="mn"><b>${d.name}</b><small>${d.kind}${d.max?(EN?' · max level ':' · maks. poziom ')+d.max:''}</small></div></summary><div class="mlv">${(d.lv||[d.d]).map((x,i)=>`<div><b>${i+1}</b><span>${x}</span></div>`).join('')}</div></details>`}
function manPage(id){
  if(id==='start')return mBox((EN?'What is Nightbrand':'Czym jest Nightbrand'),(EN?'You are a branded sellsword in a world where the night has unleashed the dead. Each act is one <b>night</b>: survive until dawn, gather strength and defeat the boss who rises at the end. You fight alone against an ever-growing wave of enemies, and you win through smart upgrade choices and movement, not just clicking.':'Jesteś piętnowanym najemnikiem w świecie, w którym noc wypuściła martwych. Każdy rozdział to jedna <b>noc</b>: przetrwaj do świtu, zbieraj siłę i pokonaj bossa, który wstaje na końcu. Walczysz sam przeciwko coraz większej fali wrogów, a wygrywasz mądrym wyborem ulepszeń i ruchem, nie samym klikaniem.'))
   +mBox((EN?'What one night looks like':'Jak wygląda jedna noc'),mUl([(EN?'<b>The night clock counts down 12 minutes. The shop, the mid-boss, the crypt and the finale make a run longer.</b> Enemies grow in number minute by minute, and they also get stronger.':'<b>Zegar nocy odlicza 12 minut. Sklep, boss pośredni, krypta i finał wydłużają podejście.</b> Wrogów przybywa z minuty na minutę, są też coraz mocniejsi.'),(EN?'Every defeated enemy gives <b>experience</b> at once, and some drop <b>coins</b>. You collect coins by walking close. Defeated enemies also have a <b>3% chance</b> to drop a <b>heart</b>, which heals 10% health. Experience raises your <b>night level</b>, and every level-up heals part of your health and lets you choose one of three cards.':'Każdy pokonany wróg od razu daje <b>doświadczenie</b>, a z części wypadają <b>monety</b>. Monety zbierasz, podchodząc blisko. Z pokonanych wrogów z <b>3% szansą</b> wypada też <b>serduszko</b>, które leczy 10% życia. Za doświadczenie rośnie <b>poziom nocy</b>, a każdy awans leczy część życia i daje wybór jednej z trzech kart.'),(EN?'<b>Midnight (after 6 minutes):</b> the dead retreat into the shadows, and the trader <b>Marga</b> sets up her stall. You have a moment to shop with the coins you gathered (talk to her with the E key).':'<b>Północ (po 6 minutach):</b> martwi cofają się w cień, a kupcowa <b>Marga</b> rozkłada kram. Masz chwilę na zakupy za zebrane monety (porozmawiaj z nią klawiszem E).'),(EN?'In acts I–III, the <b>Order Collector</b> appears after midnight. He steals gold, so it pays to kill him. In act IV, Leshy waits in his place, and in act V the Arch-Judge Auditor.':'W rozdziałach I–III po północy pojawia się <b>Poborca Zakonu</b>. Kradnie złoto, więc warto go zabić. W rozdziale IV w tym miejscu czeka Leszy, a w V Arcysędzia Rachmistrz.'),(EN?'<b>After 12 minutes</b> the act\'s main boss rises. Kill it, and the night ends in victory.':'<b>Po 12 minutach</b> wstaje główny boss rozdziału. Zabij go, a noc kończy się wygraną.'),(EN?'If your health drops to zero, the night ends in defeat. But <b>your character progress stays</b>, so the next attempt is easier.':'Jeśli życie spadnie do zera, noc kończy się porażką. Ale <b>postęp postaci zostaje</b>, więc kolejna próba jest łatwiejsza.')]))
   +mBox((EN?'Five acts':'Pięć rozdziałów'),mUl([(EN?'<b>I · The Scorched Settlement</b>: a village, a cemetery and the crypt beneath it. Boss: The Outgrowth.':'<b>I · Spalona Osada</b>: wioska, cmentarz i krypta pod nim. Boss: Zrost.'),(EN?'<b>II · The Lower City</b>: dwarven mines and forges. Boss: The Outgrowth.':'<b>II · Dolne Miasto</b>: krasnoludzkie kopalnie i kuźnie. Boss: Zrost.'),(EN?'<b>III · Fallen Goldheim</b>: a rotting city of the rich. Boss: Morhad, Beast of a Thousand Slaughters.':'<b>III · Upadły Złotogród</b>: zgniłe miasto bogaczy. Boss: Morhad, Bestia Tysiąca Rzezi.'),(EN?'<b>IV · Blackwood</b>: the forest and Bleak Peak. Bosses: Leshy and Mother Striga.':'<b>IV · Czarnobór</b>: las i Łysa Góra. Bossowie: Leszy i Strzyga Matka.'),(EN?'<b>V · The Creditors\' Citadel</b>: seat of the Holy Order. Bosses: the Arch-Judge Auditor and the Creditor.':'<b>V · Cytadela Wierzycieli</b>: siedziba Zakonu. Bossowie: Arcysędzia Rachmistrz i Wierzyciel.'),(EN?'In Story mode you start from act I and unlock the next one by completing the previous. In Arcade (Options → Settings) all of them are available right away. Each act has its own time record.':'W trybie Fabularnym zaczynasz od rozdziału I, a kolejne odblokowujesz, ukończając poprzedni. W Arcade (Opcje → Ustawienia) wszystkie są od razu dostępne. Każdy rozdział ma własny rekord czasu.')]))
   +mBox((EN?'Health bar, stamina, dodge':'Pasek życia, stamina, unik'),(EN?'The health bar shows how much more you can take, and the second bar is <b>stamina</b>. The blue bar below it is <b>mana</b> for slot skills. Dodging (Space or Shift) gives a moment of invulnerability and lets you pass through an enemy, but it costs stamina. If you don\'t know what to do: <b>keep moving</b>, don\'t stand still.':'Pasek życia pokazuje, ile jeszcze wytrzymasz, a drugi pasek to <b>stamina</b>. Niebieski pasek pod nią to <b>mana</b> na skille ze slotów. Unik (Spacja lub Shift) daje chwilę nietykalności i pozwala przejść przez wroga, ale kosztuje staminę. Jeśli nie wiesz co robić: <b>ruszaj się</b>, nie stój w miejscu.'));
  if(id==='slasher')return mBox((EN?'Combat basics':'Podstawy walki'),(EN?'You attack towards the mouse cursor (on a gamepad: the right stick). Everything costs <b>stamina</b>, which regenerates quickly when you do nothing.':'Atakujesz w stronę kursora myszy (na padzie: prawą gałką). Wszystko kosztuje <b>staminę</b>, która szybko odnawia się, gdy nic nie robisz.'))
   +mUl([(EN?'<b>Light attack</b> (J or left mouse button): fast, chains into a <b>three-hit combo</b>. The third hit is the strongest and stuns the most.':'<b>Lekki cios</b> (J lub lewy przycisk myszy): szybki, łączy się w <b>serię trzech ciosów</b>. Trzeci cios jest najmocniejszy i najmocniej ogłusza.'),(EN?'<b>Heavy attack</b> (K or hold attack): slower, but strong and very stunning.':'<b>Ciężki cios</b> (K lub przytrzymaj atak): wolniejszy, ale mocny i bardzo ogłusza.'),(EN?'<b>Block</b> (L or right mouse button): reduces damage, but costs stamina. If your stamina runs out, your guard breaks.':'<b>Blok</b> (L lub prawy przycisk myszy): zmniejsza obrażenia, ale kosztuje staminę. Jeśli stamina się skończy, gard pęka.'),(EN?'<b>Dodge</b> (Space or Shift): a quick leap with brief invulnerability.':'<b>Unik</b> (Spacja lub Shift): szybki przeskok z krótką nietykalnością.')].map(x=>x)).replace(/<ul>/,'<ul class="mbl">')
   +mBox((EN?'Parry and riposte (the most important thing)':'Parowanie i riposta (najważniejsza rzecz)'),mP((EN?'If you press block <b>just before a hit</b>, you deflect the blow instead of taking it. That is a <b>parry</b>. After it you briefly have a <b>riposte</b>: your next attack is critical (×1.5 stronger, up to ×3 with Mortal Riposte) and sends out a <b>slash wave</b> that flies forward and pierces all enemies. That is why parrying is better than a normal block.':'Jeśli naciśniesz blok <b>tuż przed trafieniem</b>, odbijasz cios zamiast go przyjąć. To <b>parowanie</b>. Po nim przez krótką chwilę masz <b>ripostę</b>: Twój następny cios jest krytyczny (×1,5 mocniejszy, ze Śmiertelną Ripostą do ×3) i wysyła <b>falę cięcia</b>, która leci przed siebie i przebija wszystkich wrogów. Dlatego parowanie jest lepsze niż zwykły blok.')))
   +mBox((EN?'Red flash':'Czerwony błysk'),mP((EN?'When an enemy flashes <b>red</b>, its attack is <b>unparryable</b> (and cannot be blocked). Then <b>dodge</b>. Bosses do this often, so don\'t force your defence.':'Gdy wróg zabłyśnie <b>na czerwono</b>, jego cios jest <b>nie do sparowania</b> (ani zablokowania). Wtedy rób <b>unik</b>. Bossowie robią to często, więc nie broń się na siłę.')))
   +mBox((EN?'Boss poise':'Postawa bossów'),(EN?'Large enemies cannot be stunned by a normal attack. Instead, each of your hits breaks their <b>poise</b>. When it breaks, the boss freezes for a moment, and you deal more damage to it (this also counts towards the Assassin style).':'Duzi wrogowie nie dają się ogłuszyć zwykłym ciosem. Za to każdy Twój cios zbija im <b>postawę</b>. Gdy się przełamie, boss na chwilę zastyga, a Ty zadajesz mu wtedy więcej obrażeń (to też liczy się do Stylu Zabójcy).'))
   +mBox((EN?'Sign':'Znak'),mP((EN?'Once you get the <b>Force Knockback</b> skill, its assigned slot <b>Q / E / F / R</b> (gamepad: LT + X / Y / B / A; touch: icon) releases a wave that knocks back and stuns enemies and deflects projectiles. It costs 24 mana and has a cooldown.':'Gdy zdobędziesz umiejętność <b>Odrzut Mocy</b>, przypisany slot <b>Q / E / F / R</b> (pad: LT + X / Y / B / A; dotyk: ikona) wypuszcza falę, która odrzuca i ogłusza wrogów oraz zbija pociski. Kosztuje 24 many i ma odnowienie.')))
   +(EN?'<h2 class="mh">Force Knockback</h2>':'<h2 class="mh">Odrzut Mocy</h2>')+mSkill('aard')
   +mBox((EN?'Level up':'Awans'),mP((EN?'When you level up, you choose one of 3 cards. Cards are <b>attributes</b> (permanent upgrades), <b>combat styles</b>, <b>pacts</b>, <b>techniques</b> and <b>blade spells</b>. Pick a card with the mouse or the <b>1 2 3</b> keys. The <b>R</b> key rerolls the cards: the first time in a given level-up is free, then it costs coins (the price rises).':'Przy awansie wybierasz jedną z 3 kart. Karty to <b>cechy</b> (stałe ulepszenia), <b>style walki</b>, <b>pakty</b>, <b>techniki</b> i <b>zaklęcia ostrza</b>. Kartę wybierasz myszą albo klawiszami <b>1 2 3</b>. Klawisz <b>R</b> przerzuca karty: pierwszy raz w danym awansie za darmo, potem za monety (cena rośnie).')))
   +(EN?'<h2 class="mh">Character attributes</h2>':'<h2 class="mh">Cechy postaci</h2>')+['_vit','_dex','_str','_int'].map(k=>`<div class="mrow">${mI(k)}<b>${SK[k].name}</b><span>${SK[k].d}</span></div>`).join('');
  if(id==='style'){const br={def:(EN?'Defender':'Obrońca'),off:(EN?'Assassin':'Zabójca'),wav:(EN?'Wavemaster':'Mistrz fal')};let h=mBox((EN?'How styles work':'Jak działają style'),(EN?'Styles are combat upgrades in three branches: <b>Defender</b>, <b>Assassin</b> and <b>Wavemaster</b>. Every point spent in a branch counts towards its <b>set bonus</b>: once you collect a total of <b>':'Style to ulepszenia walki w trzech gałęziach: <b>Obrońca</b>, <b>Zabójca</b> i <b>Mistrz fal</b>. Każdy punkt wydany w danej gałęzi liczy się do jej <b>bonusu zestawu</b>: gdy łącznie zbierzesz <b>')+SET_N+(EN?' levels</b> in one branch, an extra power switches on. Cards from a branch you already have appear more often, so building a "pure" build comes naturally.':' poziomów</b> w jednej gałęzi, włącza się dodatkowa moc. Karty z gałęzi, w której już coś masz, wypadają częściej, więc budowa „czystego” buildu przychodzi naturalnie.'));
    for(const b of ['def','off','wav'])h+=(EN?`<h2 class="mh br-${b}">${br[b]}</h2><div class="mset"><b>Set bonus (${SET_N}):</b> ${BR[b].set}</div>`:`<h2 class="mh br-${b}">${br[b]}</h2><div class="mset"><b>Bonus zestawu (${SET_N}):</b> ${BR[b].set}</div>`)+Object.keys(STY).filter(k=>STY[k].br===b).map(k=>(EN?`<div class="mrow">${mI(k)}<div class="mn"><b>${STY[k].name}</b><small>max ${STY[k].max}</small></div><span>${STY[k].d}</span></div>`:`<div class="mrow">${mI(k)}<div class="mn"><b>${STY[k].name}</b><small>maks. ${STY[k].max}</small></div><span>${STY[k].d}</span></div>`)).join('');
    h+=(EN?'<h2 class="mh">Pacts (an edge with a price)</h2>':'<h2 class="mh">Pakty (przewaga z ceną)</h2>')+mP((EN?'From night level 4, <b>pacts</b> may appear: a large bonus paid for with a drawback. You can have at most two.':'Od 4. poziomu nocy mogą trafić się <b>pakty</b>: duży bonus okupiony wadą. Możesz mieć najwyżej dwa.'))+Object.keys(STY).filter(k=>STY[k].pact).map(k=>`<div class="mrow">${mI(k)}<b>${STY[k].name}</b><span>${STY[k].d}</span></div>`).join('');
    h+=(EN?'<h2 class="mh">Blade spells</h2>':'<h2 class="mh">Zaklęcia ostrza</h2>')+mP((EN?'The first spell is the <b>main</b> one (up to 10 levels). A second, compatible spell is <b>support</b> (up to 3 levels, weaker status, no finisher and no sword multiplier). At most two blade spells in total. <b>Fire and ice exclude each other</b> in either order, but only for blade spells: active skills (Frost Shard, Fireball) can be combined freely. Three marks of the main blade finish off a normal enemy.':'Pierwsze zaklęcie jest <b>główne</b> (do 10 poziomów). Drugie, zgodne zaklęcie jest <b>wspierające</b> (do 3 poziomów, słabszy status, bez finiszera i bez mnożnika miecza). Łącznie najwyżej dwa zaklęcia ostrza. <b>Ogień i lód wykluczają się</b> w każdej kolejności, ale tylko w zaklęciach ostrza: umiejętności aktywne (Odłamek szronu, Kula ognia) możesz łączyć dowolnie. Trzy znaki głównego ostrza wykańczają zwykłego wroga.'))+['venom','fireblade','iceblade','bloodblade'].map(k=>mSkill(k)).join('');
    h+=(EN?'<h2 class="mh">Sword techniques and support magic</h2>':'<h2 class="mh">Techniki miecza i magia wspierająca</h2>')+mP((EN?'Four active slots: Q / E / F / R, on a gamepad LT + X / Y / B / A, on touch four icons. Talk: Enter or Y. You change your loadout in the pause menu outside combat. Magic slot skills cost <b>mana</b> (the blue bar below stamina). <b>Blade Whirlwind</b> costs 35 stamina: a 1.2 s spin, 60% movement, no block, parry or dodge while spinning; invulnerability only for the first 0.25 s and a 0.25 s recovery without attacking. Frost Shard: 18 mana, 8 s. Fireball: 24 mana, 9 s, explodes (100% on the target, 50% nearby). Slash Cascade: 25 mana, a series of 3 slashes. Earth Split and Force Knockback: 24 mana. Stone Defender: 34 mana, 30 s; the golem draws enemies to itself. Strength and Intelligence boost all active skills. Mana slowly regenerates on its own, and every sword hit restores 1 point. Cooldowns do not reset when you swap skills. Other sword techniques do not take up slots. You charge a heavy attack by holding J, the left mouse button, X or RT; on a touch screen hold Quick attack.':'Cztery sloty aktywne: Q / E / F / R, na padzie LT + X / Y / B / A, na dotyku cztery ikony. Rozmowa: Enter lub Y. Wyposażenie zmieniasz w pauzie poza walką. Magiczne skille ze slotów płacą <b>maną</b> (niebieski pasek pod staminą). <b>Wir Ostrza</b> płaci 35 staminy: obrót 1,2 s, ruch 60%, bez bloku, parowania i uniku podczas obrotu; nietykalność tylko przez pierwsze 0,25 s i powrót 0,25 s bez ataku. Odłamek szronu: 18 many, 8 s. Kula ognia: 24 many, 9 s, wybucha (100% w cel, 50% obok). Kaskada cięć: 25 many, seria 3 cięć. Kolce i Odrzut Mocy: 24 many. Obrońca: 34 many, 30 s; golem ściąga na siebie wrogów. Siła i Inteligencja wzmacniają wszystkie umiejętności aktywne. Mana odnawia się powoli sama, a każde trafienie mieczem oddaje 1 punkt. Odnowienia nie resetują się przy przekładaniu skilli. Pozostałe techniki miecza nie zajmują slotów. Ciężki cios naładujesz przytrzymując J, lewy przycisk myszy, X lub RT; na ekranie dotykowym przytrzymaj Szybki atak.'))+NEW_SWORD_SK.map(k=>mSkill(k)).join('');return h}
  if(id==='prog'){return mBox((EN?'Character level':'Poziom postaci'),(EN?'This is <b>permanent progress</b>, independent of a single night. After every night (even a lost one) you earn character experience. You need <b>':'To <b>stały postęp</b>, niezależny od pojedynczej nocy. Po każdej nocy (nawet przegranej) dostajesz doświadczenie postaci. Potrzebne jest <b>')+PNEED(1)+(EN?' for the first level</b>, and each next one needs ':' dla pierwszego poziomu</b>, a każdy kolejny o ')+(PNEED(2)-PNEED(1))+(EN?' more. The maximum level is <b>':' więcej. Maksymalny poziom to <b>')+PMAX+(EN?'</b>. You can see the bar on the main screen and on the preparation screen.':'</b>. Pasek widzisz na ekranie głównym i na ekranie przygotowania.'))
   +mBox((EN?'Perks: choose up to 3':'Perki: wybierasz do 3'),mP((EN?'Before each night, the <b>preparation</b> screen lets you choose up to <b>three perks</b>. Each has an <b>upside and a downside</b>, and also increases the character experience earned that night. You unlock new perks with character levels. Your choice is remembered for the next nights.':'Przed każdą nocą ekran <b>przygotowania</b> pozwala wybrać do <b>trzech perków</b>. Każdy daje <b>zaletę i wadę</b>, a dodatkowo zwiększa doświadczenie postaci zdobyte w tej nocy. Nowe perki odblokowujesz poziomami postaci. Co wybrałeś, zapamiętuje się na kolejne noce.'))
    +'<div class="mtab">'+PERKS.map(p=>(EN?`<div class="mrow"><div class="mn"><b>${p.n}</b><small>level ${p.lv}</small></div><span><span class="pl">${p.pl}</span> · <span class="mi">${perkMinus(p)}</span> · experience bonus +${Math.round(p.bx*100)}%</span></div>`:`<div class="mrow"><div class="mn"><b>${p.n}</b><small>poziom ${p.lv}</small></div><span><span class="pl">${p.pl}</span> · <span class="mi">${perkMinus(p)}</span> · bonus doświadczenia +${Math.round(p.bx*100)}%</span></div>`)).join('')+'</div>')
   +mBox((EN?'Night challenges: choose one':'Wyzwania nocy: wybierasz jedno'),mP((EN?'Plus one <b>challenge</b>: a goal you complete during the night. Completing it gives a <b>character experience bonus</b>, and sometimes coins for the start of your next attempt.':'Do tego jedno <b>wyzwanie</b>: cel, który spełniasz w trakcie nocy. Za wykonanie dostajesz <b>premię do doświadczenia postaci</b>, a czasem monety na start kolejnej próby.'))
    +'<div class="mtab">'+CHALS.map(c=>(EN?`<div class="mrow"><div class="mn"><b>${c.n}</b></div><span>${c.d} <span class="pl">Reward: +${Math.round(c.bx*100)}% character experience${c.coins?' and '+c.coins+' coins':''}</span></span></div>`:`<div class="mrow"><div class="mn"><b>${c.n}</b></div><span>${c.d} <span class="pl">Nagroda: +${Math.round(c.bx*100)}% doświadczenia postaci${c.coins?' i '+c.coins+' monet':''}</span></span></div>`)).join('')+'</div>')
   +mBox((EN?'Records':'Rekordy'),mP((EN?'For each act the game remembers your best result: completion time or longest survival, level and number of kills. You can see it in <b>Options → Save data</b>.':'Dla każdego rozdziału gra zapamiętuje najlepszy wynik: czas ukończenia albo najdłuższy czas przeżycia, poziom i liczbę zabitych. Zobaczysz to w <b>Opcje → Dane zapisu</b>.')));}
  if(id==='world')return mBox((EN?'Marga and the midnight shop':'Marga i sklep o północy'),mP((EN?'When midnight comes, Marga sets up her stall for a few dozen seconds. <b>The price of each item rises by 35% after every purchase</b> of the same thing.':'Gdy nadchodzi północ, Marga rozkłada kram na kilkadziesiąt sekund. <b>Cena każdego towaru rośnie o 35% po każdym zakupie</b> tej samej rzeczy.'))+'<div class="mtab">'+SHOP.map(i=>(EN?`<div class="mrow"><div class="mn"><b>${i.name}</b><small>${i.cost} coins</small></div><span>${shopDesc(i)}</span></div>`:`<div class="mrow"><div class="mn"><b>${i.name}</b><small>${i.cost} monet</small></div><span>${shopDesc(i)}</span></div>`)).join('')+'</div>')
   +mBox((EN?'Altars and power fires':'Ołtarze i ogniska mocy'),mP((EN?'<b>Power fires</b> heal a nearby hero up to 70% of maximum health. Walk up and use the talk button (Enter, Y on a gamepad or a tap) to activate one revival per night. After death you return with 70% health and no coins; your purse stays where you fell. Revival cuts the main character\'s experience for the night by 50%. A second death ends the night without its rewards. Your earlier save is kept.':'<b>Ogniska mocy</b> leczą pobliskiego bohatera do 70% maksymalnego życia. Podejdź i użyj przycisku rozmowy (Enter, Y na padzie albo dotknięcie), aby aktywować jedno odrodzenie na noc. Po śmierci wrócisz z 70% życia, bez monet; sakwa zostanie tam, gdzie upadłeś. Odrodzenie zmniejsza doświadczenie głównej postaci za noc o 50%. Druga śmierć kończy noc bez jej nagród. Wcześniejszy zapis pozostaje.')))
   +mBox((EN?'Crypt (act I)':'Krypta (rozdział I)'),mP((EN?'Beneath the cemetery in the Scorched Settlement there are <b>stairs to the crypt</b>. You can go down there <b>once per night, before midnight</b>. Inside, time above stands still, and a boss waits beyond halls full of enemies. Defeating it gives you a <b>full purse</b>. The entrance collapses when you return. Death ends the night, but the character experience you earned is kept.':'Pod cmentarzem w Spalonej Osadzie są <b>schody do krypty</b>. Możesz tam zejść <b>raz w nocy, przed północą</b>. W środku czas na górze stoi w miejscu, a po salach pełnych wrogów czeka boss. Pokonanie go daje <b>pełną sakwę</b>. Wejście zapada się po powrocie. Śmierć kończy noc, ale zdobyte doświadczenie postaci zostaje.')))
   +mBox((EN?'People you meet':'Spotkani ludzie'),mP((EN?'You will meet characters you can talk to (<b>Enter</b>, <b>Y</b> on a gamepad, a tap on touch). They give <b>blessings lasting a few minutes</b>, gold, a level or challenges. Some demand a price, e.g. part of your health for a stronger weapon. It is worth talking to them, but read what they offer.':'Napotkasz postaci, z którymi możesz porozmawiać (<b>Enter</b>, na padzie <b>Y</b>, na dotyku dotknięcie). Dają <b>błogosławieństwa na kilka minut</b> (np. nietykalność, dodatkowy pocisk broni), złoto, poziom albo wyzwania. Niektórzy żądają ceny, np. część życia za mocniejszą broń. Warto z nimi gadać, ale czytaj, co oferują.')))
   +mBox((EN?'Late game':'Późna faza'),mP((EN?'From <b>night level 20</b> there are 10% more enemies on the map at once. It is a sign that you should have a solid build by now.':'Od <b>20. poziomu nocy</b> na mapie jest naraz o 10% więcej wrogów. To sygnał, że pora mieć już solidny build.')));
  if(id==='tips')return mBox((EN?'For beginners':'Dla początkujących'),mUl([(EN?'Start with act I. If combat is too hard, choose the <b>Easy</b> difficulty when preparing for the night.':'Zacznij od rozdziału I. Jeśli walka jest za trudna, w przygotowaniu do nocy wybierz poziom trudności <b>Łatwy</b>.'),(EN?'Keep killing: experience comes at once. <b>Night level is your strength.</b>':'Zabijaj bez przerwy: doświadczenie wpada od razu. <b>Poziom nocy to Twoja siła.</b>'),(EN?'Movement and good positioning save lives. You can defend a good spot; the game does not punish standing still.':'Ruch i dobra pozycja ratują życie. Możesz bronić dogodnego miejsca; gra nie karze za stanie.'),(EN?'Don\'t spend all your coins at once. The best buys are healing and pickup range, then damage.':'Nie wydawaj wszystkich monet od razu. Najlepsze zakupy to leczenie i zasięg zbierania, potem obrażenia.'),(EN?'Focus on a few skills instead of taking everything.':'Skup się na kilku umiejętnościach, zamiast brać wszystko.'),(EN?'Before a boss, it is better to have full health and dodges.':'Przed bossem lepiej mieć pełne życie i uniki.')]))
   +mBox((EN?'Sword combat':'Walka mieczem'),mUl([(EN?'<b>Parry, don\'t block.</b> The riposte and the slash wave are your greatest strength.':'<b>Paruj, nie blokuj.</b> Riposta i fala cięcia to Twoja największa siła.'),(EN?'Red flash = dodge, always.':'Czerwony błysk = unik, zawsze.'),(EN?'Don\'t attack with zero stamina. Stand still and recover it while the enemy is far away.':'Nie bij, gdy masz zero staminy. Stań i odzyskaj ją, kiedy wróg jest daleko.'),(EN?'Choose one style branch and stick with it until the set bonus (8 levels).':'Wybierz jedną gałąź stylu i trzymaj się jej do bonusu zestawu (8 poziomów).'),(EN?'Pacts are dangerous, but they can turn a hard night around.':'Pakty są groźne, ale potrafią odwrócić przebieg trudnej nocy.')]))
   +mBox((EN?'Good starting perks':'Dobre perki na start'),mUl([(EN?'<b>Retainer</b>: coins from the start, but more enemies.':'<b>Zaliczka</b>: monety od początku, za to więcej wrogów.'),(EN?'<b>Hardened</b>: more health for slower movement.':'<b>Twardziel</b>: więcej życia za wolniejszy ruch.'),(EN?'The <b>Butcher</b> or <b>Treasurer</b> challenge is easy and pays off right away.':'Wyzwanie <b>Rzeźnik</b> lub <b>Skarbnik</b> jest łatwe i opłaca się od razu.')]))
   +mBox((EN?'Controls':'Sterowanie'),mP((EN?'You will find the full keyboard, mouse and Xbox controller layout in <b>Options → Controls</b> and in the pause menu.':'Pełny schemat klawiatury, myszy i kontrolera Xbox znajdziesz w <b>Opcje → Sterowanie</b> oraz w menu pauzy.')));
  return ''}
let manTab='start';
function manShow(id){manTab=id;$('manBody').innerHTML=manPage(id);for(const b of $('manTabs').children)b.classList.toggle('on',b.dataset.t===id);$('manual').scrollTop=0}
function manInit(){if($('manTabs').children.length)return;for(const [id,n] of MAN_TABS){const b=document.createElement('button');b.type='button';b.className='tab'+(id===manTab?' on':'');b.dataset.t=id;b.textContent=n;b.addEventListener('click',()=>manShow(id));$('manTabs').appendChild(b)}}
$('manBtn').addEventListener('click',()=>{manInit();$('title').hidden=true;$('manual').hidden=false;manShow(manTab);setTimeout(()=>{const b=$('manTabs').querySelector('.tab.on');b&&b.focus()},30)});
$('manBack').addEventListener('click',()=>{$('manual').hidden=true;$('title').hidden=false;setTimeout(()=>$('manBtn').focus(),30)});
$('optsBtn').addEventListener('click',()=>{$('title').hidden=true;$('opts').hidden=false;refreshDat();setTimeout(()=>document.querySelector('#opts .tab.on').focus(),30)});
$('optsBack').addEventListener('click',()=>{$('opts').hidden=true;$('title').hidden=false;setTimeout(()=>$('optsBtn').focus(),30)});
for(const t of document.querySelectorAll('#opts .stab'))t.addEventListener('click',()=>{for(const x of document.querySelectorAll('#opts .stab'))x.classList.toggle('on',x===t);$('sub-kb').hidden=t.dataset.sub!=='kb';$('sub-mouse').hidden=t.dataset.sub!=='mouse';$('sub-pad').hidden=t.dataset.sub!=='pad';$('sub-ui').hidden=t.dataset.sub!=='ui';$('sub-touch').hidden=t.dataset.sub!=='touch'});
if(coarse){const b=document.querySelector('#opts .stab[data-sub=touch]');if(b)b.click()}
for(const t of document.querySelectorAll('#opts .tab'))t.addEventListener('click',()=>{for(const x of document.querySelectorAll('#opts .tab'))x.classList.toggle('on',x===t);for(const q of ['ctl','aud','set','dat'])$('pane-'+q).hidden=q!==t.dataset.tab;if(t.dataset.tab==='dat')refreshDat()});
let DATOPEN=null;
function refreshDat(){const f=m=>{const q=PROG[m],cur=true,open=DATOPEN===m;let rs=0,rows='';for(let c=1;c<=5;c++){const r=SETT.save[m+c];if(r)rs++;rows+=(EN?'<div class="drow"><b>Act ':'<div class="drow"><b>Rozdział ')+CHR[c-1]+': '+CHN[c-1]+'</b><span>'+(r?(r.win?(EN?'✓ completed in ':'✓ ukończony w ')+mmss(r.win)+' · ':(EN?'longest ':'najdłużej ')+mmss(r.t)+' · ')+'poziom '+r.lvl+(EN?' · kills ':' · zabici ')+r.kills:(EN?'no record':'brak rekordu'))+'</span></div>'}
 return (EN?`<button type="button" class="ban${open?' open':''}${cur?' cur':''}" data-m="${m}" aria-expanded="${open}"><b>Progress and records</b><span>Character level ${q.lv} · acts with a record: ${rs}</span></button>`:`<button type="button" class="ban${open?' open':''}${cur?' cur':''}" data-m="${m}" aria-expanded="${open}"><b>Postęp i rekordy</b><span>Poziom postaci ${q.lv} · rozdziały z rekordem: ${rs}</span></button>`)+(open?`<div class="banbody">${rows}</div>`:'')};$('datInfo').innerHTML=f('s')}
$('datInfo').addEventListener('click',e=>{const d=e.target.closest('.dset');if(d)return;const b=e.target.closest('.ban');if(!b)return;DATOPEN=DATOPEN===b.dataset.m?null:b.dataset.m;refreshDat();const nb=$('datInfo').querySelector('.ban[data-m="'+b.dataset.m+'"]');if(nb)nb.focus()});
function togglePause(on){if(!S||S.phase!=='play'||S.notice||S.choosing||S.shop||S.dialog||S.intro)return;S.paused=on===undefined?!S.paused:on;if(S.paused){fillPauseKeys();renderLoadout();pl.swingT=0}renderActiveHud();$('pause').hidden=!S.paused;$('touch').hidden=S.paused||!coarse;
  for(const k in keys)keys[k]=false;resetInput();if(AC){if(S.paused&&AC.state==='running')AC.suspend();else if(!S.paused&&AC.state==='suspended')acResume()}if(S.paused)setTimeout(()=>$('resumeBtn').focus(),30)}
function resetInput(){for(const k in keys)keys[k]=false;mouseL=mouseR=tAtk=tBlock=false;heavyPress=signPress=rollPress=talkPress=false;tj.x=tj.y=0;if(typeof stick!=='undefined')stick.hidden=true}
function toMenu(){$('activeSkillHud').hidden=true;$('notice').hidden=true;$('msg').classList.remove('on');if(S){S.notice=null;S.noticeQueue=[];S.banner=null;S.witChoice=false}INTRO=null;$('intro').hidden=true;resetInput();if(S)S.paused=false;$('pause').hidden=true;if(AC&&AC.state==='suspended')acResume();clearScene();S=null;for(const id of ['end','hud','boss','prompt','dialog','lvl','shop'])$(id).hidden=true;$('touch').hidden=true;ensureWorld(1);useWorld(1);dg.clearRect(0,0,WW,WH);decalDirty=true;$('title').hidden=false;hbClear();renderRecords();MUS.base=0;musStart(AUDIO_DATA.intro?'intro':'title');setTimeout(()=>$('start1').focus(),50)}
$('start1').addEventListener('click',()=>openPrep(1));$('start2').addEventListener('click',()=>openPrep(2));$('againBtn').addEventListener('click',()=>openPrep(CH===9?1:CH));$('nextBtn').addEventListener('click',()=>openPrep(Math.min(5,CH+1)));$('start3').addEventListener('click',()=>openPrep(3));$('start4').addEventListener('click',()=>openPrep(4));$('start5').addEventListener('click',()=>openPrep(5));$('prepGo').addEventListener('click',beginRun);$('prepBack').addEventListener('click',()=>{$('prep').hidden=true;toMenu()});$('menuBtn').addEventListener('click',toMenu);$('resumeBtn').addEventListener('click',()=>togglePause(false));$('pauseMenuBtn').addEventListener('click',toMenu);$('shopClose').addEventListener('click',closeShop);
$('dialog').addEventListener('click',()=>{if(S&&S.dialog)advanceDialog()});
addEventListener('keydown',e=>{const k=e.key.toLowerCase();if(k==='escape'&&!(S&&S.intro)){for(const [ov,bt] of [['conf','confNo'],['opts','optsBack'],['manual','manBack'],['prep','prepBack']]){const o=$(ov);if(o&&!o.hidden){e.preventDefault();$(bt).click();return}}}if(S&&S.intro){e.preventDefault();if(k==='escape'){if(INTRO){INTRO.wait=0;INTRO.i=INTRO.lines.length-1;INTRO.full=true;introNext()}}else if([' ','enter','e','j'].includes(k))introNext();return}if(['arrowup','arrowdown','arrowleft','arrowright',' '].includes(k))e.preventDefault();
  if(S&&S.paused){if(k==='escape'||k==='p')togglePause(false);return}
  if(S&&S.phase==='play'&&!S.shop&&!S.choosing&&!S.dialog&&(k==='escape'||k==='p')){togglePause(true);return}
  if(S&&S.shop){if(/^[1-6]$/.test(k))buy(+k-1);else if(k==='e'||k==='escape'||k==='enter')closeShop();return}
  if(S&&S.choosing){if(['1','2','3','4'].includes(k))pickLevelCard(+k-1);else if(k==='r')rerollLevelCards();return}
  if(!S||S.phase!=='play'){if((k==='enter'||k===' ')&&document.activeElement.tagName!=='BUTTON'){const b=!$('title').hidden?$('start1'):(!$('end').hidden?$('againBtn'):null);if(b)b.click()}return}
  if(e.repeat)return;keys[k]=true;if(k===' '||k==='shift')rollPress=true;if(k==='k')heavyPress=true;if(['q','e','f','r'].includes(k))activateSlot(['q','e','f','r'].indexOf(k));if(k==='enter')talkPress=true});
addEventListener('keyup',e=>{keys[e.key.toLowerCase()]=false});addEventListener('blur',()=>{for(const k in keys)keys[k]=false;mouseL=mouseR=false;if(S&&S.phase==='play'&&!S.paused)togglePause(true)});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&S&&S.phase==='play'&&!S.paused)togglePause(true)});
const touch=$('touch'),stick=$('stick'),knob=$('knob');let sid=null,sx0=0,sy0=0;
let tapD=null;
touch.addEventListener('pointerdown',e=>{if(e.target.tagName==='BUTTON')return;const [px,py]=lp(e.clientX,e.clientY),vw=ROT?innerHeight:innerWidth;tapD={x:px,y:py,t:performance.now()};if(S&&S.dialog){advanceDialog();return}if(SETT.touchLeft?px<vw*.4:px>vw*.6)return;sid=e.pointerId;sx0=px;sy0=py;stick.hidden=false;stick.style.left=sx0+'px';stick.style.top=sy0+'px';knob.style.transform='';try{touch.setPointerCapture(e.pointerId)}catch(err){}});
touch.addEventListener('pointermove',e=>{if(e.pointerId!==sid)return;const [px,py]=lp(e.clientX,e.clientY);let dx=px-sx0,dy=py-sy0;const d=Math.hypot(dx,dy),m=40;if(d>m){dx=dx/d*m;dy=dy/d*m}tj.x=dx/m;tj.y=dy/m;if(Math.hypot(tj.x,tj.y)<.2){tj.x=0;tj.y=0}knob.style.transform=`translate(${dx}px,${dy}px)`});
touch.addEventListener('pointerup',e=>{const d=tapD;tapD=null;if(!d||!S||S.phase!=='play'||S.dialog||S.choosing||S.shop||pl.dead)return;const [ux,uy]=lp(e.clientX,e.clientY);if(Math.hypot(ux-d.x,uy-d.y)>16||performance.now()-d.t>450)return;
  const tg=nearMerchant()||nearNpc()||nearPowerFire()||nearExit();if(!tg)return;V.set(tg.x/16,1,tg.y/16).project(cam);const r=lrect($('screen')),sx=r.left+(V.x+1)/2*r.width,sy=r.top+(1-V.y)/2*r.height;if(Math.hypot(ux-sx,uy-sy)<80)talkPress=true});
const endS=e=>{if(e.pointerId!==sid)return;sid=null;tj.x=0;tj.y=0;stick.hidden=true};touch.addEventListener('pointerup',endS);touch.addEventListener('pointercancel',endS);
const tb=(id,fn)=>$(id).addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();if(S&&S.dialog){advanceDialog();return}fn()});
tb('bRoll',()=>rollPress=true);tb('bHeavy',()=>heavyPress=true);tb('bPause',()=>togglePause(true));
// slasher buttons are held: attack (hold for a heavy blow) and block
for(const [id,set] of [['bAtk',v=>tAtk=v],['bBlock',v=>tBlock=v]]){const b=$(id);b.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();if(S&&S.dialog){advanceDialog();return}set(true);try{b.setPointerCapture(e.pointerId)}catch(err){}});
  for(const ev of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(ev,()=>set(false))}
// mouse: left = attack, right = block, the pointer aims
const scrEl=$('screen');
// Kliknięcie/dotyk świata działa także bez panelu sterowania dotykowego.
let worldTap=null,selectedNpcAction=null;
function worldTapTarget(e,selectNpc=false){
 if(!S||S.phase!=='play'||S.paused||S.intro||S.dialog||S.choosing||S.shop||!pl||pl.dead||e.target.closest('.overlay,button,input,summary,#activeSkillHud')||(!selectNpc&&e.target.closest('#touch')))return null;
 const candidates=W.npcs.filter(n=>!n.lure&&['alive','offered'].includes(S.npc[n.id]?.state)&&(selectNpc||Math.hypot(pl.x-n.x,pl.y-n.y)<30)).map(n=>({target:n,kind:'npc'}));
 const fire=selectNpc?null:nearPowerFire();if(fire)candidates.push({target:fire,kind:'fire'});
 const merchant=selectNpc?null:nearMerchant();if(merchant)candidates.push({target:merchant,kind:'merchant'});
 const exit=selectNpc?null:nearExit();if(exit)candidates.push({target:exit,kind:'exit'});
 const r=lrect(scrEl);let best=null,bestD=80;
 for(const c of candidates){const n=c.target;for(const height of [0,1,2]){V.set(n.x/16,height,n.y/16).project(cam);if(V.z< -1||V.z>1)continue;
 const d=Math.hypot(e.clientX-(r.left+(V.x+1)/2*r.width),e.clientY-(r.top+(1-V.y)/2*r.height));if(d<bestD){bestD=d;best=c}}}return best;
}
function useWorldTap(c){mouseL=false;talkPress=false;
 if(c.kind==='npc')openDialog(c.target);else if(c.kind==='fire')activatePowerFire(c.target);else if(c.kind==='merchant')openShop();else useExit(c.target);
}
// Ctrl+LPM wybiera NPC niezależnie od panelu dotyku i zwykłego klikania.
function selectNpcWithPointer(e){
 if(!e.ctrlKey||e.button!==0||!scrEl.contains(e.target))return;
 const hit=worldTapTarget(e,true);if(!hit)return;
 e.preventDefault();e.stopImmediatePropagation();worldTap=null;mouseL=false;
 selectedNpcAction={npc:hit.target,state:S};
 if(Math.hypot(pl.x-hit.target.x,pl.y-hit.target.y)<30){selectedNpcAction=null;useWorldTap(hit)}
 else say((EN?'Selected: ':'Wybrano: ')+hit.target.name+(EN?'. Walk closer to start talking.':'. Podejdź, aby rozpocząć rozmowę.'));
}
addEventListener('pointerdown',selectNpcWithPointer,true);
addEventListener('mousedown',e=>{if(e.ctrlKey){mouseL=false;selectNpcWithPointer(e)}},true);
scrEl.addEventListener('pointerdown',e=>{
 if(e.ctrlKey||e.button!==0||!e.isPrimary||!worldTapTarget(e))return;
 worldTap={id:e.pointerId,x:e.clientX,y:e.clientY,t:performance.now(),hit:worldTapTarget(e)};
 mouseL=false;e.preventDefault();
},true);
scrEl.addEventListener('pointerup',e=>{
 const d=worldTap;if(!d||d.id!==e.pointerId)return;worldTap=null;
 const hit=worldTapTarget(e);
 if(performance.now()-d.t<=450&&Math.hypot(e.clientX-d.x,e.clientY-d.y)<=16&&hit&&hit.kind===d.hit.kind&&hit.target.x===d.hit.target.x&&hit.target.y===d.hit.target.y){useWorldTap(hit);e.preventDefault()}
},true);
addEventListener('pointercancel',()=>{worldTap=null});addEventListener('pointerup',()=>{worldTap=null});
scrEl.addEventListener('mousedown',e=>{if(!S||S.phase!=='play'||S.paused||e.ctrlKey||worldTap||e.target.closest('.overlay'))return;if(e.button===0)mouseL=true;if(e.button===2)mouseR=true});
addEventListener('mouseup',e=>{if(e.button===0)mouseL=false;if(e.button===2)mouseR=false});
scrEl.addEventListener('contextmenu',e=>{if(S&&S.phase==='play')e.preventDefault()});
scrEl.addEventListener('mousemove',e=>{const r=scrEl.getBoundingClientRect();mouseX=e.clientX-r.left;mouseY=e.clientY-r.top;mouseT=clock});

// The game follows the device: landscape or portrait, never turned by code. It fills the whole window by widening
// the view: at least the old 16:9 picture height is visible in landscape; in portrait the visible width equals that
// height and the extra room goes up and down. Wider than 2.4:1 (ultrawide) gets thin side bars instead.
var ROT=false;// fit() can run before this line, so its numbers are literals: max aspect 2.4, base vertical FOV 24°
function lp(x,y){return [x,y]}
function lrect(el){return el.getBoundingClientRect()}
function fit(){const st=$('stage'),r=st.getBoundingClientRect();let w=Math.max(1,Math.floor(r.width)),h=Math.max(1,Math.floor(r.height));if(w/h>2.4)w=Math.floor(h*2.4);const s=Math.min(w/320,h/180),port=h>w;
  const scr=$('screen');scr.style.width=w+'px';scr.style.height=h+'px';scr.classList.toggle('port',port);document.documentElement.classList.toggle('port',port);scr.style.fontSize=(Math.max(10,s*5.2)*SETT.fts/100)+'px';
  renderer.setPixelRatio(SETT.quality==='low'?1:Math.min(1.5,window.devicePixelRatio||1));renderer.setSize(w,h,false);
  const q=SETT.quality==='low'?(SETT.hiRes?540:360):(SETT.hiRes?Math.max(RT_H,720):RT_H),rw=port?q:Math.round(q*w/h),rh=port?Math.round(q*h/w):q;rt.setSize(rw,rh);postMat.uniforms.res.value.set(rw,rh);
  cam.aspect=w/h;cam.fov=2*Math.atan(Math.tan(12*Math.PI/180)/Math.min(1,w/h))*180/Math.PI;cam.updateProjectionMatrix()}
addEventListener('resize',fit);fit();
// iPhone (above all as a home-screen app) often reports the new size late after rotating, so fit again on every signal and a moment later
const refit=()=>{fit();setTimeout(fit,120);setTimeout(fit,400);setTimeout(fit,900)};
addEventListener('orientationchange',refit);addEventListener('pageshow',refit);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refit()});
if(window.visualViewport)visualViewport.addEventListener('resize',fit);
if(window.ResizeObserver)new ResizeObserver(()=>fit()).observe($('stage'));
if(window.screen&&screen.orientation&&screen.orientation.addEventListener)screen.orientation.addEventListener('change',refit);

let last=performance.now();
// ---- pad Xbox (Gamepad API): ruch, walka i nawigacja po menu ----
const PAD={x:0,y:0,ax:0,ay:0,aimT:-99,prev:[],cur:[],atk:false,blk:false,on:false,g:null,menu:'',lock:0,nav:0,navD:0};
function padRumble(s,w,ms){try{const g=PAD.g;if(g&&g.vibrationActuator)g.vibrationActuator.playEffect('dual-rumble',{duration:ms,strongMagnitude:s,weakMagnitude:w})}catch(e){}}
function padDz(x,y,dz){const m=Math.hypot(x,y);if(m<dz)return [0,0];const k=Math.min(1,(m-dz)/(1-dz))/m;return [x*k,y*k]}
function padMenuId(){if(recoveryActive)return 'recovery';if(S&&S.notice&&!$('notice').hidden)return 'notice';if(S&&S.witChoice&&!$('witChoices').hidden)return 'witChoices';if(S&&S.phase==='end'&&!$('end').hidden)return 'end';for(const id of ['lang','pause','shop','lvl','prep','conf','manual','opts','end','title']){const el=$(id);if(el&&!el.hidden)return id}return ''}
// Menus: up/down/left/right pick the nearest control in that direction on screen (not the next one in the list).
function navMove(id,d){const root=$(id);if(!root)return false;const items=[...root.querySelectorAll('button,input,summary')].filter(e=>!e.disabled&&e.offsetParent!==null);if(!items.length)return false;
  const ae=document.activeElement,cur=items.includes(ae)?ae:null;if(!cur){const s1=id==='title'?$('start1'):null;(s1&&items.includes(s1)?s1:items[0]).focus();return true}
  const c=lrect(cur),cx=c.left+c.width/2,cy=c.top+c.height/2;let best=null,bs=1e9;
  for(const e of items){if(e===cur)continue;const r=lrect(e),dx=r.left+r.width/2-cx,dy=r.top+r.height/2-cy;const main=d==='d'?dy:d==='u'?-dy:d==='r'?dx:-dx,side=d==='d'||d==='u'?dx:dy;if(main<=2)continue;const sc=main+Math.abs(side)*2.2;if(sc<bs){bs=sc;best=e}}
  if(!best){const i=items.indexOf(cur),step=d==='d'||d==='r'?1:-1;best=items[(i+step+items.length)%items.length]}
  best.focus({preventScroll:true});try{best.scrollIntoView({block:'nearest'})}catch(e){}return true}
addEventListener('keydown',e=>{const m={arrowdown:'d',arrowup:'u',arrowleft:'l',arrowright:'r'}[e.key.toLowerCase()];if(!m||recoveryActive||e.target.closest?.('[role=radiogroup]')&&['l','r'].includes(m))return;const id=padMenuId();if(!id||id==='notice')return;const ae=document.activeElement;if(ae&&ae.type==='range'&&(m==='l'||m==='r'))return;if(ae&&(ae.tagName==='SELECT'||ae.tagName==='TEXTAREA'||ae.type==='text'))return;if(navMove(id,m)){e.preventDefault();e.stopImmediatePropagation()}},true);
function padNav(id,dt,pr,g){
  const root=$(id);if(!root)return;const items=[...root.querySelectorAll('button,input,summary')].filter(e=>!e.disabled&&e.offsetParent!==null);if(!items.length)return;
  const ae=document.activeElement;let i=items.indexOf(ae);if(i<0){const s1=id==='title'?items.indexOf($('start1')):-1;i=s1>=0?s1:0;items[i].focus()}
  const cur=items[i];
  let dir=0,hor=0;const lx=g.axes[0]||0,ly=g.axes[1]||0;
  const up=PAD.cur[12]||ly<-.6,dn=PAD.cur[13]||ly>.6,lf=PAD.cur[14]||lx<-.6,rt=PAD.cur[15]||lx>.6;
  const d=up?-1:dn?1:lf?-2:rt?2:0;
  if(d===0){PAD.navD=0;PAD.nav=0}else{PAD.nav-=dt;if(d!==PAD.navD||PAD.nav<=0){PAD.nav=PAD.navD===d?.16:.4;PAD.navD=d;if(d===1||d===2)dir=1;else dir=-1;hor=Math.abs(d)===2}}
  const grabOff=()=>{PAD.grab=null;for(const e of document.querySelectorAll('.rng.grab'))e.classList.remove('grab')};
  if(PAD.grab&&PAD.grab!==cur)grabOff();
  if(dir){if(PAD.grab===cur){if(hor){cur.value=String(Math.max(+cur.min,Math.min(+cur.max,+cur.value+dir*5)));cur.dispatchEvent(new Event('input',{bubbles:true}));cur.dispatchEvent(new Event('change',{bubbles:true}))}}
    else navMove(id,d===1?'d':d===-1?'u':d===2?'r':'l')}
  if(pr(0)){if(cur.type==='range'){if(PAD.grab===cur)grabOff();else{PAD.grab=cur;if(cur.parentNode)cur.parentNode.classList.add('grab')}}else cur.click()}
  if(pr(1)&&PAD.grab){grabOff();return}
  // LB / RB: przełączanie zakładek w Opcjach i Instrukcji
  if((pr(4)||pr(5))&&(id==='opts'||id==='manual')){const tb=[...root.querySelectorAll('.tabs .tab')],ci=tb.findIndex(b=>b.classList.contains('on'));if(tb.length){const nx=tb[(ci+(pr(5)?1:-1)+tb.length)%tb.length];nx.click();nx.focus()}}
  if(pr(1)){if(id==='pause')togglePause(false);else if(id==='shop')closeShop();else if(id==='opts')$('optsBack').click();else if(id==='manual')$('manBack').click();else if(id==='conf')$('confNo').click();else if(id==='prep')$('prepBack').click();else if(id==='end')$('menuBtn').click()}
  if(pr(9)){if(id==='prep')$('prepGo').click();else if(id==='shop')closeShop()}
}
function padMark(){for(const e of document.querySelectorAll('.pf'))e.classList.remove('pf');if(!PAD.menu||!document.body.classList.contains('padnav'))return;const a=document.activeElement,root=$(PAD.menu);if(!a||!root||!root.contains(a))return;const t=a.type==='range'?a.parentNode:a.type==='checkbox'?(a.closest('label')||a):a;t.classList.add('pf')}
function padTick(dt){
  let g=null;try{const l=navigator.getGamepads?navigator.getGamepads():[];for(const p of l)if(p&&p.connected){g=p;break}}catch(e){}
  PAD.prev=PAD.cur;PAD.g=g;
  if(!g){PAD.cur=[];PAD.x=PAD.y=0;PAD.atk=PAD.blk=PAD.skillHeld=PAD.skillConsumed=false;return}
  PAD.cur=g.buttons.map(b=>!!b&&(b.pressed||b.value>.5));
  // krzyżak w nietypowych padach: oś hat (axes[9]) albo osie 6/7
  if(g.mapping!=='standard'||g.buttons.length<16){const ax=g.axes||[];let u=0,d=0,l=0,r=0;
    if(ax.length>9&&Math.abs(ax[9])<=1.01){const v=Math.round((ax[9]+1)*3.5);u=v===0||v===1||v===7;r=v===1||v===2||v===3;d=v===3||v===4||v===5;l=v===5||v===6||v===7}
    else if(ax.length>7&&(Math.abs(ax[6])>.5||Math.abs(ax[7])>.5)&&Math.abs(ax[6])<=1.01){l=ax[6]<-.5;r=ax[6]>.5;u=ax[7]<-.5;d=ax[7]>.5}
    if(u||d||l||r){PAD.cur[12]=PAD.cur[12]||!!u;PAD.cur[13]=PAD.cur[13]||!!d;PAD.cur[14]=PAD.cur[14]||!!l;PAD.cur[15]=PAD.cur[15]||!!r}}
  const pr=i=>PAD.cur[i]&&!PAD.prev[i];
  if(!PAD.on&&PAD.cur.some(Boolean)){PAD.on=true;document.body.classList.add('padnav');const k=$('keysPad');if(k)k.hidden=false}
  if(PAD.cur.some(Boolean)){try{if(AC&&AC.state==='suspended'&&!(S&&S.paused))acResume()}catch(e){}}
  const mid=padMenuId();setTimeout(padMark,0);if(mid!==PAD.menu){PAD.menu=mid;PAD.lock=.4;PAD.fresh=true;PAD.grab=null;for(const e of document.querySelectorAll('.rng.grab'))e.classList.remove('grab')}if(PAD.lock>0)PAD.lock-=dt;
  // wstęp fabularny
  if(S&&S.intro){PAD.x=PAD.y=0;PAD.atk=PAD.blk=false;if(pr(0)||pr(1)||pr(2))introNext();if(pr(9)&&INTRO){INTRO.wait=0;INTRO.i=INTRO.lines.length-1;INTRO.full=true;introNext()}return}
  // menu / sklep / wybór umiejętności / koniec
  if(mid){PAD.x=PAD.y=0;PAD.atk=PAD.blk=false;
    if(PAD.lock>0)return;
    if(PAD.fresh){PAD.fresh=false;const f=(mid==='title'&&$('start1')&&!$('start1').disabled?$('start1'):null)||[...$(mid).querySelectorAll('button,input')].filter(e=>!e.disabled&&e.offsetParent!==null)[0];if(f)f.focus();return}
    if(mid==='lvl'){const lv=$('lvl'),ready=performance.now()>=levelReadyAt;if(!lv.contains(document.activeElement)){const f=$('card0')||lv.querySelector('button:not(:disabled)');if(f)f.focus({preventScroll:true})}if(!ready&&(pr(0)||pr(3))){play('empty',0);return}if(pr(3)){rerollLevelCards();return}}
    padNav(mid,dt,pr,g);if(pr(9)&&mid==='pause')togglePause(false);return}
  if(!S||S.phase!=='play'){PAD.x=PAD.y=0;PAD.atk=PAD.blk=false;return}
  if(pr(9)){togglePause(true);return}
  // ruch: lewa gałka lub krzyżak; celowanie: prawa gałka
  let [x,y]=padDz(g.axes[0]||0,g.axes[1]||0,.22);
  x+=(PAD.cur[15]?1:0)-(PAD.cur[14]?1:0);y+=(PAD.cur[13]?1:0)-(PAD.cur[12]?1:0);PAD.x=x;PAD.y=y;
  const [ax,ay]=padDz(g.axes[2]||0,g.axes[3]||0,.35);if(ax||ay){const m=Math.hypot(ax,ay);PAD.ax=ax/m;PAD.ay=ay/m;PAD.aimT=clock}
  const lt=!!PAD.cur[6];PAD.skillHeld=lt;if(!PAD.cur[1]&&!PAD.cur[2]&&!PAD.cur[3])PAD.skillConsumed=false;PAD.atk=!!PAD.cur[7]||(!lt&&!PAD.skillConsumed&&!!PAD.cur[2]);PAD.blk=!!PAD.cur[4];
  if(pr(0)&&!lt)rollPress=true;if(lt){if(pr(0)){PAD.skillConsumed=true;activateSlot(3)}if(pr(2)){PAD.skillConsumed=true;activateSlot(0)}if(pr(3)){PAD.skillConsumed=true;activateSlot(1)}if(pr(1)){PAD.skillConsumed=true;activateSlot(2)}}else if(!PAD.skillConsumed){if(pr(3))talkPress=true;if(pr(1))heavyPress=true}
  if(pr(5))heavyPress=true;
}
for(const e of document.querySelectorAll('input[type=range]')){const w=document.createElement('span');w.className='rng';e.parentNode.insertBefore(w,e);w.innerHTML='<i class="rk"></i><i class="rf"></i><i class="rh"></i>';w.appendChild(e)}
function syncRanges(){for(const e of document.querySelectorAll('input[type=range]')){const mn=+e.min||0,mx=+e.max||100,v=String(Math.max(0,Math.min(1,(e.value-mn)/(mx-mn))));e.style.setProperty('--v',v);if(e.parentNode)e.parentNode.style.setProperty('--v',v)}}
document.addEventListener('input',syncRanges,true);document.addEventListener('click',()=>setTimeout(syncRanges,0),true);document.addEventListener('keyup',syncRanges,true);syncRanges();
addEventListener('gamepadconnected',()=>{document.body.classList.add('padnav');const k=$('keysPad');if(k)k.hidden=false});
addEventListener('mousedown',()=>document.body.classList.remove('padnav'),true);
// ---- krótki samouczek: podpowiedzi w pierwszej nocy rozdziału I, tylko raz ----
function tutorialKey(){return 'pn_tut_s'}
function tutorialDone(){try{return localStorage.getItem(tutorialKey())==='1'}catch(e){return false}}
function finishTutorial(){try{localStorage.setItem(tutorialKey(),'1')}catch(e){}$('tut').classList.remove('on');$('tutSkip').hidden=true}
const TUT={i:0,shown:0,sid:null,x0:null};
function tutList(){const tc=coarse,pd=PAD.on&&!tc;
return [{t:1,text:tc?(SETT.touchLeft?(EN?'Right':'Prawy'):(EN?'Left':'Lewy'))+(EN?' thumb: drag to move':' kciuk: przeciągnij, aby się poruszać'):pd?(EN?'Left stick: move':'Lewy drążek: ruch'):(EN?'WASD or arrow keys: move':'WASD lub strzałki: ruch'),done:()=>Math.hypot(pl.x-TUT.x0[0],pl.y-TUT.x0[1])>30},
{t:4,text:(tc?(EN?'Quick attack: tap the button ':'Szybki atak: dotknij przycisku ')+(SETT.touchLeft?(EN?'on the left':'po lewej'):(EN?'on the right':'po prawej')):pd?(EN?'X: light attack · B: heavy attack':'X: lekki cios · B: ciężki cios'):(EN?'J: light attack · K: heavy attack · L: block':'J: lekki cios · K: ciężki cios · L: blok')),done:()=>S.actions.attack>0},
{t:12,text:(EN?'Blocking just before a hit parries. A bright highlight announces an attack; a red one requires a dodge.':'Blok tuż przed trafieniem paruje. Jasne podświetlenie zapowiada cios; czerwone wymaga uniku.'),done:()=>S.actions.block>0},
{t:20,text:tc?(EN?'Dodge: the button next to attack. You need the full stamina cost.':'Unik: przycisk przy ataku. Potrzebujesz pełnego kosztu staminy.'):pd?(EN?'A: dodge. Moves you and gives brief invulnerability.':'A: unik. Przesuwa cię i daje krótką nietykalność.'):(EN?'Space or Shift: dodge. Avoid the red highlight and the chain.':'Spacja lub Shift: unik. Unikaj czerwonego podświetlenia i łańcucha.'),done:()=>S.actions.dodge>0},
{t:30,text:(EN?'Kills give experience at once; collect coins. Levelling up heals ':'Zabójstwa od razu dają doświadczenie, zbieraj monety. Awans leczy ')+Math.round(S.pk.lvHeal*100)+(EN?'% health. At midnight you can buy upgrades from Marga.':'% życia. O północy kupisz ulepszenia u Margi.'),done:()=>S.actions.collect>0},
...([{t:35,text:(EN?'Magic supports the sword: the first blade element is the main one, the second is support. At most two elements in total. Fire excludes ice — in projectiles too.':'Magia wspiera miecz: pierwszy żywioł ostrza jest główny, drugi wspierający. Łącznie najwyżej dwa żywioły. Ogień wyklucza lód — także w pociskach.'),done:()=>true},{t:40,text:tc?(EN?'The four icons are your equipped skills. Tap the one you want. In the pause menu outside combat you can change your loadout. Magic costs mana (the blue bar), Blade Whirlwind — stamina. Check the cost and cooldown in the skill description.':'Trzy ikony to wyposażone skille. Dotknij wybraną. W pauzie poza walką możesz zmienić wyposażenie. Magia płaci maną (niebieski pasek), Wir Ostrza — staminą. Koszt i odnowienie sprawdzisz w opisie skilla.'):pd?(EN?'Hold LT and press X, Y or B to use a slot skill. A still dodges, LB blocks, RT is a light attack, RB a heavy one. You can change your loadout in the pause menu outside combat.':'Przytrzymaj LT i naciśnij X, Y lub B, aby użyć skilla ze slotu. A nadal wykonuje unik, LB blok, RT lekki atak, RB ciężki. Wyposażenie zmienisz w pauzie poza walką.'):(EN?'Q / E / F / R trigger your equipped skills. Aim with the cursor; without a mouse, face the target. Talk: Enter. You can change your loadout in the pause menu outside combat.':'Q / E / F / R uruchamiają wyposażone skille. Celuj kursorem; bez myszy patrz w kierunku celu. Rozmowa: Enter. Wyposażenie zmienisz w pauzie poza walką.'),done:()=>true},{t:43,text:(EN?'Techniques support swordplay: Breaker needs a charged heavy attack, Retaliation — a parry; spikes and the defender are triggered from slots. You will find the details of every technique in Instructions → Styles.':'Techniki wspierają szermierkę: Przełamanie wymaga naładowanego ciężkiego ciosu, Odwet — parowania; kolce i obrońcę aktywujesz ze slotów. Szczegóły każdej techniki znajdziesz w Instrukcji → Style.'),done:()=>true}]),{t:45,text:(EN?'Goal: survive the night and defeat the final boss. The shop and the bosses make a run longer.':'Cel: przetrwaj noc i pokonaj finałowego bossa. Sklep i bossowie wydłużają podejście.'),done:()=>true}];}
function tutTick(dt){const h=$('tut');if(!HINTS_ENABLED||tutorialDone()||S.dg||CH!==1||STORYINTRO_ACTIVE()||isPort()){$('tutSkip').hidden=true;h.classList.remove('on');return}if(TUT.sid!==S){TUT.sid=S;TUT.i=0;TUT.shown=0;TUT.x0=[pl.x,pl.y]}const steps=tutList();if(TUT.i>=steps.length){finishTutorial();return}const q=steps[TUT.i];if(S.t<q.t)return;$('tutText').textContent=q.text;h.classList.add('on');$('tutSkip').hidden=false;TUT.shown+=dt;if(TUT.shown>=5&&q.done()){TUT.i++;TUT.shown=0;h.classList.remove('on')}}

function STORYINTRO_ACTIVE(){return !!(S&&S.intro)}
// Recovery is independent of the renderer, so its controls work even after a failed frame.
let recoveryActive=false,contextLost=false,errorMemory=[];
const recovery=document.createElement('div');recovery.id='recovery';recovery.hidden=true;recovery.setAttribute('role','alertdialog');recovery.setAttribute('aria-modal','true');recovery.setAttribute('aria-label',(EN?'Game problem':'Problem z grą'));recovery.style.cssText='position:absolute;inset:0;z-index:99999;background:#100f12f5;color:#eee;padding:8%;overflow:auto;pointer-events:auto';
recovery.innerHTML=(EN?'<h2>The game has been paused</h2><p id="recoveryText"></p><button class="go" id="recoveryMenu" type="button">Back to menu</button><p><button class="go alt" id="recoveryReload" type="button">Reload game</button></p><p>Your permanent progress stays saved. The current night will not resume after reloading.</p>':'<h2>Gra została wstrzymana</h2><p id="recoveryText"></p><button class="go" id="recoveryMenu" type="button">Wróć do menu</button><p><button class="go alt" id="recoveryReload" type="button">Przeładuj grę</button></p><p>Trwały postęp pozostaje zapisany. Bieżąca noc nie zostanie wznowiona po przeładowaniu.</p>');$('screen').appendChild(recovery);
function readErrors(){try{const v=JSON.parse(localStorage.getItem('pn_errors')||'[]');return Array.isArray(v)?v.slice(-20):[]}catch(e){return errorMemory}}
function recordError(kind,value,source=''){try{const errors=readErrors();errors.push({time:new Date().toISOString(),kind,message:String(value&&value.message||value||(EN?'Unknown error':'Nieznany błąd')).slice(0,2000),stack:String(value&&value.stack||'').slice(0,4000),source:String(source).slice(0,500)});errorMemory=errors.slice(-20);try{localStorage.setItem('pn_errors',JSON.stringify(errorMemory))}catch(e){}}catch(e){}}
function showRecovery(text){recoveryActive=true;if(S)S.paused=true;resetInput();$('recoveryText').textContent=text;recovery.hidden=false;$('recoveryMenu').disabled=contextLost;$('recoveryReload').focus()}
function handleGameError(kind,value,source){recordError(kind,value,source);try{showRecovery((EN?'An error occurred. Return to the menu. You will find a report for testers in Options → Save data.':'Wystąpił błąd. Wróć do menu. Raport dla testera znajdziesz w Opcjach → Dane zapisu.'))}catch(e){recoveryActive=true;recovery.hidden=false}}
// Only a failure inside the game loop stops the game. Other errors are logged; ours also get a short note on screen.
function acResume(){try{const p=AC&&AC.resume();if(p&&p.catch)p.catch(()=>{})}catch(e){}}
let lastErrNote=-1e9;
function noteError(kind,value,source){recordError(kind,value,source);const now=performance.now();if(now-lastErrNote<10000)return;lastErrNote=now;try{const m=$('msg');m.textContent=(EN?'A minor error occurred. The game keeps running; the report is in Options → Save data.':'Wystąpił drobny błąd. Gra działa dalej; raport jest w Opcjach → Dane zapisu.');m.classList.add('on');clearTimeout(msgT);msgT=setTimeout(()=>m.classList.remove('on'),3400)}catch(e){}}
function foreignError(e){const f=e.filename||'';if(!f)return /^script error\.?$/i.test(String(e.message||'').trim())||!e.error;try{const u=new URL(f,location.href);return u.href.split(/[?#]/)[0]!==location.href.split(/[?#]/)[0]&&u.origin!==location.origin}catch(x){return true}}
window.addEventListener('error',e=>{if(e.target&&e.target!==window)return;if(foreignError(e)){recordError('external',e.message||'Script error',e.filename||'');return}noteError('error',e.error||e.message,(e.filename||'')+':'+(e.lineno||0))});
window.addEventListener('unhandledrejection',e=>{e.preventDefault();const r=e.reason,n=r&&r.name;if(n==='NotAllowedError'||n==='AbortError'||n==='NotSupportedError'){recordError('ignored',r);return}noteError('unhandledrejection',r)});
$('recoveryReload').onclick=()=>location.reload();
$('recoveryMenu').onclick=()=>{if(contextLost)return;try{toMenu();last=performance.now();recoveryActive=false;recovery.hidden=true}catch(e){recordError('menu',e);$('recoveryText').textContent=(EN?'Could not return to the menu. Reload the game; your permanent progress will stay saved.':'Nie udało się wrócić do menu. Przeładuj grę; trwały postęp pozostanie zapisany.')}};
recovery.addEventListener('pointerdown',e=>e.stopPropagation());
window.addEventListener('keydown',e=>{if(recoveryActive&&e.key!=='Tab'){e.stopImmediatePropagation();e.preventDefault();if(e.key==='Enter')document.activeElement.click()}},true);
cvs.addEventListener('webglcontextlost',e=>{e.preventDefault();contextLost=true;recordError('webglcontextlost',(EN?'WebGL context lost':'Utrata kontekstu WebGL'));showRecovery((EN?'The image was lost. The game is paused. Once the image recovers, the game will reload without deleting your permanent progress. If the image does not come back, choose Reload game.':'Utracono obraz. Gra jest wstrzymana. Po odzyskaniu obrazu gra przeładuje się bez usuwania trwałego postępu. Jeśli obraz nie wraca, wybierz Przeładuj grę.'))});
cvs.addEventListener('webglcontextrestored',()=>{recordError('webglcontextrestored',(EN?'Safe reload':'Bezpieczne przeładowanie'));location.reload()});
function errorReport(){return JSON.stringify({game:'Nightbrand',url:location.href.split('?')[0],userAgent:navigator.userAgent,quality:SETT.quality,touch:coarse,errors:readErrors()},null,2)}
$('copyErrors').onclick=async()=>{const report=errorReport();try{await navigator.clipboard.writeText(report);saveMsg((EN?'Error report copied.':'Skopiowano raport błędów.'))}catch(e){const t=document.createElement('textarea');t.value=report;t.setAttribute('aria-label',(EN?'Error report to copy':'Raport błędów do skopiowania'));$('pane-dat').appendChild(t);t.focus();t.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}if(ok)t.remove();saveMsg(ok?(EN?'Error report copied.':'Skopiowano raport błędów.'):(EN?'Copy the selected report manually.':'Zaznaczony raport skopiuj ręcznie.'))}};
function frameLimit(){return SETT.quality==='low'||coarse?.2:.5}
function frame(now){try{runFrame(now)}catch(e){handleGameError('frame',e)}requestAnimationFrame(frame)}
function runFrame(now){if(recoveryActive){last=now;try{padTick(.016)}catch(e){}return}const elapsed=Math.min(frameLimit(),Math.max(0,(now-last)/1000));last=now;const frozen=!!(S&&(S.paused||S.notice||S.intro||S.choosing||S.shop||S.dialog||S.phase!=='play'));const dt=elapsed;clock+=frozen?0:dt;padTick(Math.min(.05,dt));let remaining=document.hidden?0:dt;while(remaining>1e-7){const step=Math.min(.025,remaining);update(step);if(S&&S.phase==='play'&&!S.paused&&!S.notice&&!S.intro&&!S.choosing&&!S.shop&&!S.dialog&&!pl.dead)tutTick(step);else{$('tut').classList.remove('on');$('tutSkip').hidden=true}remaining-=step;rollPress=talkPress=false;if(S&&(S.paused||S.notice||S.choosing||S.shop||S.dialog||S.phase!=='play'))break}hbTick();if(!S)ftClear();else if(!frozen)ftTick(dt);if(A){const locked=!!(S&&(S.paused||S.notice||S.intro||S.choosing||S.shop||S.dialog||S.phase!=='play'));syncScene(locked?0:Math.min(.05,dt));if(S&&S.parts.length>MAXP-50)S.parts.splice(0,S.parts.length-(MAXP-50))}draw();hud()}

function saveAccess(){try{const q={};for(const k of ['quality','shake','flash','contrast','oneHand','touchScale','touchLeft','hiRes'])q[k]=SETT[k];localStorage.setItem('pn_access',JSON.stringify(q))}catch(e){}}
function applyAccess(){document.body.classList.toggle('no-flash',!SETT.flash);document.body.classList.toggle('contrast',SETT.contrast);document.body.classList.toggle('touch-left',SETT.touchLeft);document.documentElement.style.setProperty('--touchScale',SETT.touchScale);postMat.uniforms.low.value=SETT.quality==='low'?1:0;renderer.shadowMap.enabled=SETT.quality!=='low';for(const w of Object.values(WORLDS))applySurfaceQuality(w);for(const [id,k] of [['qualityLow','quality'],['shakeTgl','shake'],['flashTgl','flash'],['contrastTgl','contrast'],['oneHandTgl','oneHand'],['touchLeftTgl','touchLeft'],['hiResTgl','hiRes']])$(id).checked=k==='quality'?SETT.quality==='low':SETT[k];$('touchSizeSl').value=SETT.touchScale*100;fit()}
for(const [id,k] of [['qualityLow','quality'],['shakeTgl','shake'],['flashTgl','flash'],['contrastTgl','contrast'],['oneHandTgl','oneHand'],['touchLeftTgl','touchLeft'],['hiResTgl','hiRes']])$(id).addEventListener('change',e=>{SETT[k]=k==='quality'?(e.target.checked?'low':'high'):e.target.checked;saveAccess();applyAccess()});
$('touchSizeSl').addEventListener('input',e=>{SETT.touchScale=+e.target.value/100;saveAccess();applyAccess()});
$('hintsTgl').checked=HINTS_ENABLED;$('hintsTgl').addEventListener('change',e=>setHints(e.target.checked));$('noticeNext').addEventListener('click',dismissNotice);$('witLeave').addEventListener('click',e=>{e.stopPropagation();chooseWit(true)});$('witKill').addEventListener('click',e=>{e.stopPropagation();chooseWit(false)});
addEventListener('keydown',e=>{if(S&&S.notice){e.stopImmediatePropagation();e.preventDefault();if(!e.repeat&&['Enter',' ','e','Escape'].includes(e.key))dismissNotice();return}if(S&&S.witChoice&&['1','2','Enter',' '].includes(e.key)){e.preventDefault();e.stopImmediatePropagation();if(e.repeat)return;if(e.key==='1')chooseWit(true);else if(e.key==='2')chooseWit(false);else if(['witLeave','witKill'].includes(document.activeElement.id))document.activeElement.click()}},true);
$('repeatTut').addEventListener('click',()=>{setHints(true);try{localStorage.removeItem(tutorialKey())}catch(e){}TUT.sid=null;$('repeatTut').textContent=(EN?'The tutorial will appear in act I':'Samouczek pojawi się w rozdziale I')});
const skip=document.createElement('button');skip.id='tutSkip';skip.type='button';skip.textContent=(EN?'Skip hints':'Pomiń podpowiedzi');skip.hidden=true;$('screen').appendChild(skip);skip.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();finishTutorial()});

// Accessible title presentation; existing checkbox change handler owns mode/save logic.
function syncTitleMode(){for(const [id,selected] of [['sFab',!$('storyTgl').checked],['sArc',$('storyTgl').checked]]){const b=$(id);b.setAttribute('aria-checked',String(selected));b.removeAttribute('aria-pressed');b.tabIndex=selected?0:-1}$('storyModeHint').textContent=$('storyTgl').checked?(EN?'All acts right away.':'Wszystkie rozdziały od razu.'):(EN?'You unlock acts one by one.':'Rozdziały odblokowujesz po kolei.')}
$('storyTgl').addEventListener('change',syncTitleMode);new MutationObserver(syncTitleMode).observe($('sFab'),{attributes:true,attributeFilter:['class']});syncTitleMode();
$('sFab').parentElement.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Enter',' '].includes(e.key))return;e.preventDefault();e.stopPropagation();if(e.repeat)return;const b=e.key==='ArrowLeft'?$('sFab'):e.key==='ArrowRight'?$('sArc'):e.target.closest('[role=radio]');if(b){b.click();b.focus()}});

applyAccess();
// load sprite sheets, then start the loop
const imgs={},GROUP_STATE={},GROUP_ORDER=['core','r2','r3','r4','r5'],IMAGE_PENDING=new Set();let imageWorkers=0;
function groupFor(ch){return ch>=2&&ch<=5?'r'+ch:'core'}
function groupReady(ch){return GROUP_STATE[groupFor(ch)]?.ready===true}
function tintAnims(part){const A=part;
  // a dead NPC no longer glows
  for(const k of ['elder','wit','izolda','ottokar'])if(A[k]&&A[k][3])A[k][3].n.emissive.setHex(0x000000);
  const TINT={madman:0xe0a890,hound:0xb89078,rotknight:0xa8b880,monk:0xffa060,izolda:0xc4b4ec,ottokar:0xf0d090,aurel:0xa8c8f0};
  if(A.chojrak&&!A.npcNew)for(const [k,c] of [['chojrak',0xfff4d0],['mila',0xd8b890],['heri',0xb8c4dc]])for(const f of A[k])f.n.color.setHex(c);
  for(const k in TINT){const a=A[k];if(!a)continue;if(a.sheet||(Array.isArray(a)&&imgs.zl_en_b))continue;for(const f of Array.isArray(a)?a:Object.values(a).flat())f.n.color.setHex(TINT[k])}

}
function groupProgress(g){const st=GROUP_STATE[g];return st.keys.length?st.keys.filter(k=>imgs[k]).length/st.keys.length:1}
function refreshGroup(g){const st=GROUP_STATE[g];for(const w of st.watchers)w(st.error?(EN?'Error — click to retry':'Błąd — kliknij, aby ponowić'):'Wczytywanie… '+Math.floor(groupProgress(g)*100)+'%');if(g==='core')window.NB_BOOT?.progress?.(groupProgress(g))}
function finishGroup(g){const st=GROUP_STATE[g];if(st.ready||st.error||!st.keys.every(k=>imgs[k]))return;if(g!=='core'){const part=buildAnims(imgs,g);tintAnims(part);Object.assign(A,part)}st.ready=true;refreshGroup(g);for(const w of st.waiters.splice(0))w.resolve();if(GROUP_ORDER.every(g=>GROUP_STATE[g].ready))window.NB_GROUPS_READY=true}
function pumpImages(){while(imageWorkers<2){const g=GROUP_ORDER.find(g=>{const s=GROUP_STATE[g];return s.enabled&&!s.ready&&!s.error&&s.keys.some(k=>!imgs[k]&&!IMAGE_PENDING.has(k))});if(!g)break;const st=GROUP_STATE[g],k=st.keys.find(k=>!imgs[k]&&!IMAGE_PENDING.has(k));st.loading.add(k);IMAGE_PENDING.add(k);imageWorkers++;const im=new Image();im.nbDensity=SPRITE_RES[k]||1;im.nbKey=k;im.onload=()=>{imgs[k]=im;imageWorkers--;st.loading.delete(k);IMAGE_PENDING.delete(k);for(const h of GROUP_ORDER){refreshGroup(h);if(GROUP_STATE[h].enabled)finishGroup(h)}pumpImages()};im.onerror=()=>{const backup=SPRITE_DATA[k+'_fallback'];if(backup&&!im.nbFallback){im.nbFallback=true;SPRITE_DATA[k]=backup;im.src=backup;return}imageWorkers--;st.loading.delete(k);IMAGE_PENDING.delete(k);st.error=true;refreshGroup(g);for(const w of st.waiters.splice(0))w.reject(Error((EN?'Cannot load image: ':'Nie można wczytać obrazu: ')+k));pumpImages()};im.src=SPRITE_DATA[k]}}
function loadGroup(ch,watch){const g=typeof ch==='string'?ch:groupFor(ch),st=GROUP_STATE[g];if(st.ready)return Promise.resolve();st.error=false;st.enabled=true;if(watch)st.watchers.add(watch);const p=new Promise((resolve,reject)=>st.waiters.push({resolve,reject}));const i=GROUP_ORDER.indexOf(g);if(g!=='core'){GROUP_ORDER.splice(i,1);GROUP_ORDER.splice(1,0,g)}refreshGroup(g);finishGroup(g);pumpImages();return p.finally(()=>{if(watch)st.watchers.delete(watch)})}
function waitChapter(ch,action,button){if(groupReady(ch))return action();const focused=document.activeElement,b=focused?.matches('#againBtn,#nextBtn,#prepGo')?focused:button||$('prepGo');if(b.nbWait)return b.nbWait;const label=b.innerHTML;b.nbWait=loadGroup(ch,t=>{b.textContent=t}).then(()=>{b.innerHTML=label;return action()},()=>{b.textContent=(EN?'Error — click to retry':'Błąd — kliknij, aby ponowić')}).finally(()=>{b.nbWait=null});return b.nbWait}
for(const g of GROUP_ORDER)GROUP_STATE[g]={keys:Object.keys(SPRITE_DATA).filter(k=>!/_fallback$/.test(k)&&!/^intro[1-5]$/.test(k)&&SPRITE_GROUPS[k].includes(g)&& (g==='core'||!SPRITE_GROUPS[k].includes('core'))),loading:new Set(),watchers:new Set(),waiters:[],ready:false,error:false,enabled:false};
loadGroup('core').then(()=>{
  A=buildAnims(imgs,'core');IMGS=imgs;tintAnims(A);initCombatEffects();initWhirlVisuals();decals(imgs);
  ensureWorld(1);
  ROOT=scene;useWorld(1);
  heroMesh=new THREE.Mesh(geo32,A.hero.idle_down[0].n);heroMesh.visible=false;scene.add(heroMesh);
  margaMesh=new THREE.Mesh(geo32,A.marga[0].n);margaMesh.customDistanceMaterial=A.marga[0].d;margaMesh.castShadow=true;margaMesh.visible=false;scene.add(margaMesh);
  for(const id of ['start1','start2','start3'])$(id).disabled=false;$('start4').disabled=false;$('start5').disabled=false;$('start5').innerHTML=(EN?'<small>Act V</small>The Creditors\' Citadel':'<small>Rozdział V</small>Cytadela Wierzycieli');$('start4').innerHTML=(EN?'<small>Act IV</small>Blackwood':'<small>Rozdział IV</small>Czarnobór');$('start1').innerHTML=(EN?'<small>Act I</small>The Scorched Settlement':'<small>Rozdział I</small>Spalona Osada');$('start2').innerHTML=(EN?'<small>Act II</small>The Lower City':'<small>Rozdział II</small>Dolne Miasto');$('start3').innerHTML=(EN?'<small>Act III</small>Fallen Goldheim':'<small>Rozdział III</small>Upadły Złotogród');renderRecords();window.NB_BOOT?.ready();
  for(const g of ['r2','r3','r4','r5'])GROUP_STATE[g].enabled=true;for(const g of ['r2','r3','r4','r5'])finishGroup(g);pumpImages();
}).catch(err=>{console.error(err);window.NB_BOOT?.fail(err);$('start1').textContent=(EN?'Failed to load graphics':'Nie udało się wczytać grafik')});
requestAnimationFrame(frame);
})();
