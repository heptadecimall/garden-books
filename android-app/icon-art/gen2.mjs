// Icons authored in a local 0..100 box (keep art inside circle r≈47 around 50,50).
// Placed on the 108dp adaptive canvas so local r50 => r28 (well inside the 33dp safe zone).
const P={paper:'#faf8f3',ink:'#3d3929',leaf:'#7d8a5a',deep:'#55663a',forest:'#46522f',accent:'#c4683f',soft:'#f1ede4',butter:'#f6efe2',sage:'#bcbc8e',blush:'#f4e9df',flower:'#e3c07e',soil:'#6b4a34',
  st:['#cdbca6','#dcd6ad','#bcbc8e','#8f9466','#e3c07e','#d99a72','#c4683f']};
const sprout=(x,y,top,c1,c2,w=5)=>`<path d="M${x} ${y} V${top+6}" stroke="${c1}" stroke-width="${w}" stroke-linecap="round"/>
  <path d="M${x} ${top+8} C${x+1} ${top-6} ${x+11} ${top-13} ${x+26} ${top-13} C${x+25} ${top+2} ${x+15} ${top+8} ${x} ${top+8}Z" fill="${c1}"/>
  <path d="M${x} ${top+13} C${x-1} ${top+2} ${x-9} ${top-4} ${x-22} ${top-4} C${x-21} ${top+8} ${x-13} ${top+13} ${x} ${top+13}Z" fill="${c2}"/>`;
function ring(){ // 7 stage arcs
  const n=7,gap=7,r=44,out=[];
  for(let i=0;i<n;i++){const a0=(-90+gap/2+i*360/n)*Math.PI/180,a1=(-90-gap/2+(i+1)*360/n)*Math.PI/180;
    out.push(`<path d="M${50+r*Math.cos(a0)} ${50+r*Math.sin(a0)} A${r} ${r} 0 0 1 ${50+r*Math.cos(a1)} ${50+r*Math.sin(a1)}" stroke="${P.st[i]}" stroke-width="7" stroke-linecap="round" fill="none"/>`);}
  return out.join('');}
export const icons2={
 '1-book-sprout': {bg:P.paper, fg:`
   <path d="M12 80 C26 72 40 72 50 80 C60 72 74 72 88 80 V52 C74 44 60 44 50 52 C40 44 26 44 12 52Z" fill="${P.soft}" stroke="${P.ink}" stroke-width="4.5" stroke-linejoin="round"/>
   <path d="M50 52 V80" stroke="${P.ink}" stroke-width="4.5"/>${sprout(50,52,22,P.leaf,P.accent)}`},
 '2-book-sprout-green': {bg:P.deep, fg:`
   <path d="M12 80 C26 72 40 72 50 80 C60 72 74 72 88 80 V52 C74 44 60 44 50 52 C40 44 26 44 12 52Z" fill="${P.paper}"/>
   <path d="M50 53 V79" stroke="${P.deep}" stroke-width="3"/>
   <path d="M20 58 C28 54 36 54 43 57 M20 66 C28 62 36 62 43 65 M57 57 C64 54 72 54 80 58 M57 65 C64 62 72 62 80 66" stroke="${P.sage}" stroke-width="2.4" stroke-linecap="round" fill="none"/>
   ${sprout(50,50,20,P.flower,P.accent)}`},
 '3-stage-ring': {bg:P.paper, fg:`${ring()}
   <path d="M30 70 H70" stroke="${P.ink}" stroke-width="4.5" stroke-linecap="round"/>${sprout(50,70,36,P.leaf,P.accent,4.5)}`},
 '4-leaf-pages': {bg:P.butter, fg:`
   <path d="M50 84 C32 80 12 66 10 30 C30 32 46 46 50 84Z" fill="${P.deep}"/>
   <path d="M50 84 C68 80 88 66 90 30 C70 32 54 46 50 84Z" fill="${P.leaf}"/>
   <path d="M48 80 C40 62 28 46 14 34" stroke="${P.butter}" stroke-width="2.6" stroke-linecap="round" fill="none" opacity=".8"/>
   <path d="M52 80 C60 62 72 46 86 34" stroke="${P.butter}" stroke-width="2.6" stroke-linecap="round" fill="none" opacity=".8"/>
   <circle cx="50" cy="20" r="7" fill="${P.accent}"/>`},
 '5-terracotta-pot': {bg:P.paper, fg:`
   <path d="M30 64 H70 L64 92 H36Z" fill="${P.accent}"/>
   <rect x="24" y="56" width="52" height="11" rx="3" fill="#a9532f"/>
   ${sprout(50,56,24,P.leaf,P.deep,5)}`},
 '6-sunrise-sprout': {bg:P.butter, fg:`
   <circle cx="50" cy="66" r="26" fill="${P.flower}"/>
   <path d="M-40 70 Q50 54 140 70 V160 H-40Z" fill="${P.soil}"/>
   <path d="M30 80 h6 M58 86 h6 M42 92 h5" stroke="#8a6448" stroke-width="3" stroke-linecap="round"/>
   ${sprout(50,62,28,P.deep,P.accent,5)}`},
 '7-journal-cover': {bg:P.ink, fg:`<g transform="translate(50 50) scale(.86) translate(-50 -52)">
   <rect x="22" y="10" width="56" height="78" rx="6" fill="${P.accent}"/>
   <rect x="22" y="10" width="10" height="78" rx="4" fill="#a9532f"/>
   <path d="M55 64 V36" stroke="${P.paper}" stroke-width="4" stroke-linecap="round"/>
   <path d="M55 42 C56 32 63 27 72 27 C71 37 64 42 55 42Z" fill="${P.paper}"/>
   <path d="M55 48 C54 40 48 36 40 36 C41 44 47 48 55 48Z" fill="${P.blush}"/>
   <path d="M44 70 H66" stroke="${P.paper}" stroke-width="3" stroke-linecap="round" opacity=".7"/>
   <path d="M64 88 V96 L68 92 L72 96 V88Z" fill="${P.flower}"/></g>`},
 '8-seed-crack': {bg:P.blush, fg:`
   <ellipse cx="50" cy="72" rx="28" ry="19" fill="${P.soil}"/>
   <path d="M30 66 C40 60 48 60 52 56" stroke="${P.blush}" stroke-width="3" stroke-linecap="round" fill="none"/><ellipse cx="38" cy="76" rx="6" ry="3" fill="#86624a"/>
   ${sprout(52,56,24,P.leaf,P.accent,5)}`},
 '9-serif-G': {bg:P.deep, fg:`
   <text x="47" y="80" text-anchor="middle" font-family="Newsreader, Georgia, serif" font-size="78" font-weight="500" fill="${P.paper}">G</text>
   <path d="M62 30 C62 18 70 10 84 10 C84 24 76 30 62 30Z" fill="${P.flower}"/>`},
};
// build full 108 canvas svg. view: 'adaptive' (launcher crop 72 visible), shape circle|squircle|full ; layer fg|bg
export function svg2(name,{size=512,shape='circle',layer,view='launcher'}={}){
  const i=icons2[name];
  const vb = view==='launcher' ? '18 18 72 72' : '0 0 108 108';
  const c = view==='launcher' ? {cx:54,r:36,x:18,w:72,rx:17} : {cx:54,r:54,x:0,w:108,rx:26};
  const clip = shape==='circle' ? `<circle cx="54" cy="54" r="${c.r}"/>` : shape==='full' ? `<rect x="${c.x}" y="${c.x}" width="${c.w}" height="${c.w}"/>` : `<rect x="${c.x}" y="${c.x}" width="${c.w}" height="${c.w}" rx="${c.rx}"/>`;
  const bg = layer==='fg' ? '' : `<rect x="-20" y="-20" width="148" height="148" fill="${i.bg}"/>`;
  const fg = layer==='bg' ? '' : `<g transform="translate(26 26) scale(.56)">${i.fg}</g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${vb}"><defs><clipPath id="c${name}${shape}">${clip}</clipPath></defs><g clip-path="url(#c${name}${shape})">${bg}${fg}</g></svg>`;
}
