import{b as t,c as s,d as a,e,f as n,g as r,h as o,r as c,s as i,i as l,t as u,u as p,k as f,l as h,v as d,m as v,p as m,q as g,J as b,a as E,Q as x}from"./chunk.b6ff97e8.js";import{a as N,b as k}from"./chunk.b4fdaabd.js";function z(t,s,a){var e=Object.create(t);return e.post=s[a],e}function j(t){var s,a,e,n,r,o,c,i,l,E,x=t.post.metadata.title,N=t.post.metadata.description;return{c:function(){s=u("article"),a=u("a"),e=u("h2"),n=p(x),r=p("\r\n\t\t\t\t"),o=u("p"),c=p(N),l=p("\r\n\t\t"),this.h()},l:function(t){s=f(t,"ARTICLE",{class:!0,"data-pubdate":!0},!1);var i=h(s);a=f(i,"A",{rel:!0,href:!0,title:!0,class:!0},!1);var u=h(a);e=f(u,"H2",{class:!0},!1);var p=h(e);n=d(p,x),p.forEach(v),r=d(u,"\r\n\t\t\t\t"),o=f(u,"P",{class:!0},!1);var m=h(o);c=d(m,N),m.forEach(v),u.forEach(v),l=d(i,"\r\n\t\t"),i.forEach(v),this.h()},h:function(){e.className="svelte-3oiz27",o.className="svelte-3oiz27",a.rel="prefetch",a.href=i="blog/"+t.post.slug,a.title="Read the article »",a.className="svelte-3oiz27",s.className="post svelte-3oiz27",s.dataset.pubdate=E=t.post.metadata.dateString},m:function(t,i){m(t,s,i),g(s,a),g(a,e),g(e,n),g(a,r),g(a,o),g(o,c),g(s,l)},p:function(t,e){t.posts&&x!==(x=e.post.metadata.title)&&b(n,x),t.posts&&N!==(N=e.post.metadata.description)&&b(c,N),t.posts&&i!==(i="blog/"+e.post.slug)&&(a.href=i),t.posts&&E!==(E=e.post.metadata.dateString)&&(s.dataset.pubdate=E)},d:function(t){t&&v(s)}}}function S(t){for(var s,a,e=t.posts,n=[],r=0;r<e.length;r+=1)n[r]=j(z(t,e,r));return{c:function(){s=p("\r\n\r\n"),a=u("div");for(var t=0;t<n.length;t+=1)n[t].c();this.h()},l:function(t){s=d(t,"\r\n\r\n"),a=f(t,"DIV",{class:!0},!1);for(var e=h(a),r=0;r<n.length;r+=1)n[r].l(e);e.forEach(v),this.h()},h:function(){document.title="Svelte Native • A Svelte Mobile Development Experience",a.className="posts stretch svelte-3oiz27"},m:function(t,e){m(t,s,e),m(t,a,e);for(var r=0;r<n.length;r+=1)n[r].m(a,null)},p:function(t,s){if(t.posts){e=s.posts;for(var r=0;r<e.length;r+=1){var o=z(s,e,r);n[r]?n[r].p(t,o):(n[r]=j(o),n[r].c(),n[r].m(a,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=e.length}},i:E,o:E,d:function(t){t&&(v(s),v(a)),x(n,t)}}}function $(){return y.apply(this,arguments)}function y(){return(y=N(k.mark(function t(){var s;return k.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("api/blog/get").then(function(t){return t.json()}).catch(function(t){return console.log(t)});case 2:return s=t.sent,t.abrupt("return",{posts:s});case 5:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function A(t,s,a){var e=s.posts;return t.$set=function(t){"posts"in t&&a("posts",e=t.posts)},{posts:e}}export default(function(u){function p(t){var c;return s(this,p),c=a(this,e(p).call(this)),n(r(c),t,A,S,o),c}return t(p,l),c(p,[{key:"posts",get:function(){return this.$$.ctx.posts},set:function(t){this.$set({posts:t}),i()}}]),p}());export{$ as preload};
//# sourceMappingURL=chunk.5fb3d6f1.js.map