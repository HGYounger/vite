import{V as s,a7 as i,a8 as p,a9 as u,aa as c,ab as l,ac as f,ad as d,ae as m,af as h,ag as A,X as g,d as P,u as v,j as y,A as C,ah as w,ai as _,aj as b,ak as E}from"./chunks/framework.583a95f3.js";import{t as R}from"./chunks/theme.b0a885c9.js";function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=r(R),j=P({name:"VitePressApp",setup(){const{site:e}=v();return y(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),w(),_(),b(),o.setup&&o.setup(),()=>E(o.Layout)}});async function D(){const e=S(),a=O();a.provide(p,e);const t=u(e.route);return a.provide(c,t),a.component("Content",l),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:d}),{app:a,router:e,data:t}}function O(){return m(j)}function S(){let e=s,a;return h(t=>{let n=A(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),g(()=>import(n),[])):null},o.NotFound)}s&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{D as createApp};
