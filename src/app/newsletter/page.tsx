export const metadata={title:"The Epistemic Mirror"};
export default function NewsletterPage(){return(<main><div style={{maxWidth:680,margin:"0 auto",padding:"120px 24px 80px",textAlign:"center"}}>
<span className="overline">Newsletter</span><h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontStyle:"italic",fontSize:"clamp(2rem,5vw,3.5rem)",marginTop:16}}>The Epistemic Mirror</h1>
<p style={{marginTop:16,color:"#7a7a88",lineHeight:1.7}}>Weekly philosophical analysis of AI developments.</p>
<div style={{display:"flex",gap:12,maxWidth:380,margin:"28px auto 0"}}><input type="email" placeholder="your@email.com" className="input" style={{flex:1}}/><button className="btn-primary" style={{whiteSpace:"nowrap",padding:"12px 24px"}}>Subscribe</button></div>
<p style={{fontSize:12,color:"#3a3a45",marginTop:10}}>Free · Unsubscribe anytime</p>
</div></main>);}
