const fs = require('fs');
const html = fs.readFileSync('scratch_demo.html', 'utf8');

console.log('--- TITLE & META ---');
const titleMatch = html.match(/<title>([^<]+)<\/title>/);
console.log('Title:', titleMatch ? titleMatch[1] : 'None');

console.log('--- CSS LINKS ---');
const cssLinks = html.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi) || [];
cssLinks.forEach(l => console.log(l));

console.log('--- SECTIONS ---');
const sections = html.match(/<(?:section|header|nav|footer)[^>]*>/gi) || [];
sections.forEach(s => console.log(s));

console.log('--- BUTTONS ---');
const buttons = html.match(/<(?:button|a)[^>]*(?:class|id)=["'][^"']*(?:btn|button)[^"']*["'][^>]*>/gi) || [];
buttons.slice(0, 20).forEach(b => console.log(b));

console.log('--- CLASSES ---');
const classMatches = html.match(/class=["']([^"']+)["']/g) || [];
const uniqueClasses = new Set();
classMatches.forEach(c => {
  const clean = c.replace(/class=["']|["']/g, '');
  clean.split(/\s+/).forEach(cls => {
    if (cls.includes('btn') || cls.includes('animate') || cls.includes('hero') || cls.includes('card') || cls.includes('pulse')) {
      uniqueClasses.add(cls);
    }
  });
});
console.log('Relevant classes:', Array.from(uniqueClasses));
