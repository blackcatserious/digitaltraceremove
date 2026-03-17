"use client";
export default function Footer(){return(
<footer style={{borderTop:"1px solid rgba(255,255,255,0.04)"}}>
<div style={{maxWidth:1152,margin:"0 auto",padding:"64px 24px 24px"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:40,marginBottom:48}}>
<div><span style={{fontFamily:"'Instrument Serif',Georgia,serif",fontStyle:"italic",fontSize:"1.15rem",color:"#f0f0f3"}}>traceremove</span><p style={{fontSize:13,color:"#5a5a68",marginTop:12,lineHeight:1.6}}>AI philosophy research.</p></div>
<div><h4 style={{fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",color:"#4a4a58",marginBottom:16}}>Research</h4><FL h="/research">Papers</FL><FL h="/articles">Articles</FL><FL h="/cv">CV</FL></div>
<div><h4 style={{fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",color:"#4a4a58",marginBottom:16}}>More</h4><FL h="/newsletter">Newsletter</FL><FL h="/services">Services</FL><FL h="/contact">Contact</FL></div>
<div><h4 style={{fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",color:"#4a4a58",marginBottom:16}}>Connect</h4><FL h="mailto:artur@traceremove.dev">Email</FL><FL h="https://philarchive.org/s/artur%20ziganshin" x>PhilArchive</FL></div>
</div>
<div style={{borderTop:"1px solid rgba(255,255,255,0.03)",paddingTop:20,display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:8}}>
<span style={{fontSize:12,color:"#3a3a45"}}>&copy; 2026 Artur Ziganshin</span>
<span style={{fontSize:12,color:"#3a3a45"}}>Master of Philosophy &middot; PhD of Philosophy</span>
</div></div></footer>);}
function FL({h,children,x}:{h:string;children:React.ReactNode;x?:boolean}){return<a href={h} target={x?"_blank":undefined} rel={x?"noopener noreferrer":undefined} style={{display:"block",fontSize:13,color:"#6a6a78",textDecoration:"none",padding:"4px 0"}}>{children}</a>;}
