import{b as t,c as s,d as e,m as a,n as o,o as r,f as l,g as c,p as n,h as p,k as h,l as i,D as f,a as d,J as u}from"./chunk.659cf27e.js";function m(t,s,e){const a=Object.create(t);return a.post=s[e],a}function v(t){var s,e,a,d,u,m,v,g,b,E,N=t.post.metadata.title,x=t.post.metadata.description;return{c(){s=o("article"),e=o("a"),a=o("h2"),d=r(N),u=r("\n\t\t\t\t"),m=o("p"),v=r(x),b=r("\n\t\t"),this.h()},l(t){s=l(t,"ARTICLE",{class:!0,"data-pubdate":!0},!1);var o=c(s);e=l(o,"A",{rel:!0,href:!0,title:!0,class:!0},!1);var r=c(e);a=l(r,"H2",{class:!0},!1);var h=c(a);d=n(h,N),h.forEach(p),u=n(r,"\n\t\t\t\t"),m=l(r,"P",{class:!0},!1);var i=c(m);v=n(i,x),i.forEach(p),r.forEach(p),b=n(o,"\n\t\t"),o.forEach(p),this.h()},h(){a.className="svelte-16s4p8c",m.className="svelte-16s4p8c",e.rel="prefetch",e.href=g="blog/"+t.post.slug,e.title="Read the article »",e.className="svelte-16s4p8c",s.className="post svelte-16s4p8c",s.dataset.pubdate=E=t.post.metadata.dateString},m(t,o){h(t,s,o),i(s,e),i(e,a),i(a,d),i(e,u),i(e,m),i(m,v),i(s,b)},p(t,a){t.posts&&N!==(N=a.post.metadata.title)&&f(d,N),t.posts&&x!==(x=a.post.metadata.description)&&f(v,x),t.posts&&g!==(g="blog/"+a.post.slug)&&(e.href=g),t.posts&&E!==(E=a.post.metadata.dateString)&&(s.dataset.pubdate=E)},d(t){t&&p(s)}}}function g(t){for(var s,e,a=t.posts,i=[],f=0;f<a.length;f+=1)i[f]=v(m(t,a,f));return{c(){s=r("\n\n"),e=o("div");for(var t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){s=n(t,"\n\n"),e=l(t,"DIV",{class:!0},!1);for(var a=c(e),o=0;o<i.length;o+=1)i[o].l(a);a.forEach(p),this.h()},h(){document.title="Svelte Native • A Svelte Mobile Development Experience",e.className="posts stretch svelte-16s4p8c"},m(t,a){h(t,s,a),h(t,e,a);for(var o=0;o<i.length;o+=1)i[o].m(e,null)},p(t,s){if(t.posts){a=s.posts;for(var o=0;o<a.length;o+=1){const r=m(s,a,o);i[o]?i[o].p(t,r):(i[o]=v(r),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=a.length}},i:d,o:d,d(t){t&&(p(s),p(e)),u(i,t)}}}async function b(){return{posts:await this.fetch("api/blog/get").then(t=>t.json()).catch(t=>console.log(t))}}function E(t,s,e){let{posts:a}=s;return t.$set=(t=>{"posts"in t&&e("posts",a=t.posts)}),{posts:a}}export default class extends t{constructor(t){super(),s(this,t,E,g,e)}get posts(){return this.$$.ctx.posts}set posts(t){this.$set({posts:t}),a()}}export{b as preload};
//# sourceMappingURL=chunk.394b2de7.js.map