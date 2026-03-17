import Link from"next/link";
export default function NotFound(){return(<main style={{minHeight:"80vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24}}><div style={{textAlign:"center"}}>
<p style={{fontSize:80,fontFamily:"'Instrument Serif',Georgia,serif",color:"#2a2a35"}}>404</p>
<h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.5rem",marginTop:16}}>Page not found</h1>
<p style={{color:"#5a5a68",marginTop:8,marginBottom:24}}>This page doesn&apos;t exist or has been moved.</p>
<Link href="/" className="btn-primary">Back to homepage</Link>
</div></main>);}
