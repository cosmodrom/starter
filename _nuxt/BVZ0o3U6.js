import{a as i,M as o,S as c,V as a,ae as h,k as m,y as p,ac as g,s as l,q as u}from"./CM9JuuAO.js";const d="img",f=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,n=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=p(g(l().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return u(e,t.src)}return t.src});return(s,e)=>(m(),c(h(a(d)),{src:a(n),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}}),S=Object.assign(f,{__name:"ProseImg"});export{S as default};
