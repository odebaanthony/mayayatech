var S=[
{k:'seo',i:'🔎',n:'SEO',d:'Get found by the people already searching for what you offer.',l:['Site and keyword audit','On-page and technical fixes','Content and link strategy','Monthly ranking reports']},
{k:'yt',i:'▶️',n:'YouTube automation',d:'Run a consistent channel without the daily grind.',l:['Channel setup and strategy','Scripting and publishing workflow','Thumbnails and titles','Growth tracking']},
{k:'vid',i:'🎬',n:'Video editing',d:'Footage turned into clear, watchable videos.',l:['Cutting, pacing and sound','Captions and motion graphics','Short-form and long-form','Brand-consistent style']},
{k:'web',i:'🖥️',n:'Web design',d:'Fast, responsive websites that explain your business and bring in enquiries.',l:['Custom design and build','Mobile-first layouts','Speed and accessibility','Launch and maintenance']},
{k:'app',i:'📱',n:'App development',d:'Mobile and web apps built around how your users actually work.',l:['Planning and prototypes','Android, iOS and web','Secure back-end and APIs','Testing and release']},
{k:'sec',i:'🛡️',n:'Cyber security auditing',d:'A structured review of your systems, policies and exposure.',l:['Risk and asset review','Configuration and access checks','Prioritised findings','Remediation guidance']},
{k:'sec',i:'🧪',n:'Pentesting',d:'Authorised, controlled attacks on your apps and networks to find weaknesses first.',l:['Web, app and network testing','Written scope and consent','Proof of each finding','Retest after fixes']},
{k:'sec',i:'🕵️',n:'Ethical hacking',d:'Security expertise applied legally, with permission and with reporting you can trust.',l:['Vulnerability assessment','Security awareness guidance','Responsible disclosure','Ongoing advice']}];
var G=[
['seo','🔎','Search ranking review','SEO','A keyword and technical audit with a prioritised fix list.'],
['web','🖥️','Business website','Web design','A responsive company site built for speed and clear enquiries.'],
['yt','▶️','Channel workflow','YouTube automation','A repeatable system from script to published video.'],
['vid','🎬','Brand video edit','Video editing','Clean cuts, captions and sound for a product story.'],
['app','📱','Customer mobile app','App development','A mobile app with secure sign-in and an admin dashboard.'],
['sec','🛡️','Security audit report','Cyber security','Findings ranked by risk with practical fixes.'],
['sec','🧪','Web app pentest','Pentesting','An authorised test with proof and retest.'],
['web','🧭','E-commerce store','Web design','A catalogue and checkout designed for mobile shoppers.'],
['vid','🎞️','Short-form series','Video editing','Vertical clips tuned for social platforms.'],
['team','🤝','Remote client call','Team','Planning sessions with clients across time zones.'],
['seo','📈','Traffic growth plan','SEO','A content calendar tied to search demand.'],
['app','⚙️','Internal tools','App development','Web tools that replace spreadsheets and manual steps.']];
var cats=[['all','All'],['seo','SEO'],['yt','YouTube'],['vid','Video'],['web','Web'],['app','Apps'],['sec','Security'],['team','Team']];

var $=function(i){return document.getElementById(i)};
function put(id,h){var el=$(id);if(el)el.innerHTML=h}

/* Shared: footer year, active nav link, mobile menu, theme */
var yr=$('yr');if(yr)yr.textContent=new Date().getFullYear();
var current=document.body.dataset.page;
Array.prototype.forEach.call(document.querySelectorAll('nav a'),function(a){a.classList.toggle('on',a.dataset.p===current);if(a.dataset.p===current)a.setAttribute('aria-current','page')});
$('menu').onclick=function(){var o=$('nav').classList.toggle('open');this.setAttribute('aria-expanded',o)};
try{var saved=localStorage.getItem('mayaya-theme');if(saved)document.documentElement.setAttribute('data-theme',saved)}catch(e){}
$('theme').onclick=function(){
 var r=document.documentElement,dark=getComputedStyle(r).colorScheme==='dark',next=dark?'light':'dark';
 r.setAttribute('data-theme',next);try{localStorage.setItem('mayaya-theme',next)}catch(e){}
};

/* Home and Services: service lists */
put('homeSvc',S.map(function(s){return '<div class="card"><span class="ic">'+s.i+'</span><h3>'+s.n+'</h3><p>'+s.d+'</p></div>'}).join(''));
put('svcList',S.map(function(s){return '<div class="svc"><div class="ic">'+s.i+'</div><div><h2 style="font-size:1.7rem">'+s.n+'</h2><p>'+s.d+'</p><ul>'+s.l.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div></div>'}).join(''));

/* Contact: service dropdown and form checks */
put('s','<option>Not sure yet</option>'+S.map(function(s){return '<option>'+s.n+'</option>'}).join(''));
if($('form')){
 var params=new URLSearchParams(location.search);
 $('form').onsubmit=function(ev){
  ev.preventDefault();
  var n=$('n').value.trim(),e=$('e').value.trim(),m=$('m').value.trim();
  $('en').textContent=n?'':'Enter your name.';
  $('ee').textContent=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)?'':'Enter a valid email address.';
  $('em').textContent=m.length>=10?'':'Write at least 10 characters about your project.';
  if(!n||$('ee').textContent||$('em').textContent)return;
  /* TODO: send the data to your email or form service here (see README). */
  $('okt').textContent='Thanks, '+n+'. This demo form does not send data yet. Connect it to your email or form service to receive messages.';
  $('ok').classList.add('on');this.reset();
 };
}

/* Gallery: filters and lightbox */
if($('gal')){
 var cur='all',vis=[],idx=0;
 $('filters').innerHTML=cats.map(function(c){return '<button class="chip" data-c="'+c[0]+'" aria-pressed="'+(c[0]=='all')+'">'+c[1]+'</button>'}).join('');
 var drawGal=function(){
  vis=G.filter(function(g){return cur=='all'||g[0]==cur});
  $('gal').innerHTML=vis.map(function(g,n){return '<button class="tile g-'+g[0]+'" data-n="'+n+'"><span class="art">'+g[1]+'</span><span class="cap">'+g[2]+'<small>'+g[3]+'</small></span></button>'}).join('');
  Array.prototype.forEach.call($('filters').children,function(b){b.setAttribute('aria-pressed',b.dataset.c==cur)});
 };
 var show=function(n){idx=(n+vis.length)%vis.length;var g=vis[idx],a=$('lbArt');a.className='big g-'+g[0];a.textContent=g[1];$('lbT').textContent=g[2];$('lbD').textContent=g[3]+': '+g[4];$('lb').classList.add('on');$('close').focus()};
 var closeLb=function(){$('lb').classList.remove('on')};
 $('filters').onclick=function(e){if(e.target.dataset.c){cur=e.target.dataset.c;drawGal()}};
 $('gal').onclick=function(e){var t=e.target.closest('.tile');if(t)show(+t.dataset.n)};
 $('prev').onclick=function(){show(idx-1)};
 $('next').onclick=function(){show(idx+1)};
 $('close').onclick=closeLb;
 $('lb').onclick=function(e){if(e.target===this)closeLb()};
 document.addEventListener('keydown',function(e){if(!$('lb').classList.contains('on'))return;if(e.key=='Escape')closeLb();if(e.key=='ArrowRight')show(idx+1);if(e.key=='ArrowLeft')show(idx-1)});
 drawGal();
}

/* Home: typed terminal */
if($('typed')){
 var lines=['$ mayaya audit --target client-app (authorised)','<span class="ok">✔</span> scope and written consent confirmed','<span class="ok">✔</span> scanning 42 endpoints...','<span class="bad">✖</span> high: weak password reset flow','<span class="warn">!</span> medium: missing security headers','<span class="ok">✔</span> report drafted with fixes and retest plan'];
 var tp=$('typed'),li=0,ci=0,outp='';
 var type=function(){
  if(li>=lines.length)return;
  var raw=lines[li];
  if(raw.indexOf('<')>-1){outp+=raw+'\n';tp.innerHTML=outp;li++;setTimeout(type,420);return}
  ci++;tp.innerHTML=outp+raw.slice(0,ci);
  if(ci>=raw.length){outp+=raw+'\n';li++;ci=0;setTimeout(type,420)}else setTimeout(type,24);
 };
 if(matchMedia('(prefers-reduced-motion:reduce)').matches){tp.innerHTML=lines.join('\n')}else type();
}
