import{h as c,W as i,o as s,j as u,w as p,O as _,t as k,u as l,R as m,G as C}from"./entry.C_XGDcki.js";const f={__name:"Link",props:{label:String,url:String,onClick:Function},setup(n){const t=n,o=c(()=>t.url?i:"button"),a=c(()=>{var e;return(e=t.url)==null?void 0:e.includes("https://")}),r=c(()=>a.value?"_blank":"_self");return(e,g)=>(s(),u(m(l(o)),{to:n.url,class:"link",onClick:n.onClick,target:l(r)},{default:p(()=>[_(k(n.label),1)]),_:1},8,["to","onClick","target"]))}},b={__name:"BackToTop",setup(n){const{$lenis:t}=C(),o=()=>{t==null||t.scrollTo(0)};return(a,r)=>{const e=f;return s(),u(e,{label:"Back to top",url:a.url,onClick:o},null,8,["url"])}}};export{b as default};
