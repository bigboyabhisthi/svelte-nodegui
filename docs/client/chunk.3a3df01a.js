import{b as s,c as t,d as e,m as n,o,p as c,k as i,s as r,h as a}from"./chunk.659cf27e.js";import"./chunk.2c927239.js";import"./chunk.abeba03e.js";import{a as h}from"./chunk.55350584.js";function u(s){var t,e,n=new h({props:{edit_url:"https://github.com/halfnelson/svelte-native/edit/master/docs_src/content/docs",sections:s.sections}});return{c(){t=o("\r\n\r\n"),n.$$.fragment.c(),this.h()},l(s){t=c(s,"\r\n\r\n"),n.$$.fragment.l(s),this.h()},h(){document.title="Learn Svelte Native"},m(s,o){i(s,t,o),r(n,s,o),e=!0},p(s,t){var e={};s.sections&&(e.sections=t.sections),n.$set(e)},i(s){e||(n.$$.fragment.i(s),e=!0)},o(s){n.$$.fragment.o(s),e=!1},d(s){s&&a(t),n.$destroy(s)}}}async function m(){return{sections:await this.fetch("docs.json").then(s=>s.json()).catch(s=>console.log(s))}}function $(s,t,e){let{sections:n}=t;return s.$set=(s=>{"sections"in s&&e("sections",n=s.sections)}),{sections:n}}export default class extends s{constructor(s){super(),t(this,s,$,u,e)}get sections(){return this.$$.ctx.sections}set sections(s){this.$set({sections:s}),n()}}export{m as preload};
//# sourceMappingURL=chunk.3a3df01a.js.map
