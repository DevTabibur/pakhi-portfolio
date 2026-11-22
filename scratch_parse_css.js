const fs = require('fs');
const css = fs.readFileSync('scratch_style.css', 'utf8');
const html = fs.readFileSync('scratch_demo.html', 'utf8');

console.log('=== CSS VARIABLES ===');
const rootMatch = css.match(/:root\s*\{([^}]+)\}/s);
if (rootMatch) {
  console.log(rootMatch[1].trim().split('\n').slice(0, 35).join('\n'));
}

console.log('\n=== BUTTON CSS (btn-vt) ===');
const btnRegex = /\.btn-vt[^{]*\{[^}]*\}/g;
let match;
while ((match = btnRegex.exec(css)) !== null) {
  console.log(match[0]);
}

console.log('\n=== BUTTON PSEUDO / HOVER / KEYFRAMES ===');
const btnExtra = css.match(/\.btn-vt[^{:]*:(?:before|after|hover)[^{]*\{[^}]*\}/g) || [];
btnExtra.forEach(b => console.log(b));

const keyframes = css.match(/@keyframes[^{]+\{(?:[^{}]+|\{[^{}]*\})*\}/g) || [];
console.log('\n=== KEYFRAMES ===');
keyframes.forEach(k => console.log(k.slice(0, 150) + '...'));

console.log('\n=== HERO HTML SNIPPET ===');
const heroMatch = html.match(/<section class="hero" id="home">([\s\S]*?)<\/section>/);
if (heroMatch) {
  console.log(heroMatch[0].slice(0, 1000));
}
