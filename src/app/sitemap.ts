import type{MetadataRoute}from"next";
let articles:any[]=[];try{const m=require("@/data/articles");articles=m.articles||m.default||[];}catch{}
export default function sitemap():MetadataRoute.Sitemap{const b="https://traceremove.dev";return[
{url:b,lastModified:new Date(),changeFrequency:"weekly",priority:1.0},
{url:`${b}/research`,lastModified:new Date(),changeFrequency:"weekly",priority:0.9},
{url:`${b}/articles`,lastModified:new Date(),changeFrequency:"weekly",priority:0.9},
{url:`${b}/cv`,lastModified:new Date(),changeFrequency:"monthly",priority:0.7},
{url:`${b}/services`,lastModified:new Date(),changeFrequency:"monthly",priority:0.7},
{url:`${b}/newsletter`,lastModified:new Date(),changeFrequency:"monthly",priority:0.8},
{url:`${b}/contact`,lastModified:new Date(),changeFrequency:"yearly",priority:0.5},
...articles.map((a:any)=>({url:`${b}/articles/${a.slug}`,lastModified:new Date(a.date),changeFrequency:"yearly" as const,priority:0.8})),
];}
