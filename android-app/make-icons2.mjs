import {icons2,svg2} from './icon-art/gen2.mjs'; import fs from 'fs';
const {chromium} = await import(process.env.PW);
const name=process.argv[2]; if(!icons2[name]) throw 'unknown '+name;
const res='android/app/src/main/res/', dens={mdpi:1,hdpi:1.5,xhdpi:2,xxhdpi:3,xxxhdpi:4};
const b=await chromium.launch(); const p=await b.newPage();
await p.setContent('<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,500&display=block" rel="stylesheet"><body style="margin:0;background:transparent"></body>'); await p.waitForTimeout(1200);
async function png(m,size,out){ await p.setViewportSize({width:size,height:size});
  await p.evaluate(x=>document.body.innerHTML=x, m.replace(/width="\d+" height="\d+"/,`width="${size}" height="${size}"`));
  await p.waitForTimeout(40); await p.screenshot({path:out,omitBackground:true,clip:{x:0,y:0,width:size,height:size}}); }
for(const [d,k] of Object.entries(dens)){
  await png(svg2(name,{shape:'squircle'}),48*k,`${res}mipmap-${d}/ic_launcher.png`);
  await png(svg2(name,{shape:'circle'}),48*k,`${res}mipmap-${d}/ic_launcher_round.png`);
  await png(svg2(name,{shape:'full',layer:'fg',view:'full'}),108*k,`${res}mipmap-${d}/ic_launcher_foreground.png`);
}
fs.writeFileSync(`${res}values/ic_launcher_background.xml`,`<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">${icons2[name].bg}</color>\n</resources>\n`);
for(const [s,f,sh,v] of [[192,'icon-192.png','squircle','launcher'],[512,'icon-512.png','squircle','launcher'],[180,'icon-180.png','full','launcher'],[512,'maskable-512.png','full','full']]) await png(svg2(name,{shape:sh,view:v}),s,'www/icons/'+f);
await png(svg2(name,{shape:'full',view:'launcher'}),512,'icon-512-'+name+'.png');
await b.close(); console.log('icons ->',name);
