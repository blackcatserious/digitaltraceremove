import Link from"next/link";import{ArrowRight}from"lucide-react";
export const metadata={title:"Consulting & Speaking"};
export default function ServicesPage(){return(<main>
<div style={{maxWidth:1152,margin:"0 auto",padding:"120px 24px 24px"}}><span className="overline">Consulting</span><h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(2rem,4vw,3rem)",marginTop:16}}>Philosophical Clarity for AI Decisions</h1></div>
<div style={{maxWidth:1152,margin:"0 auto",padding:"40px 24px"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20}}>
<div className="card" style={{padding:32}}><div style={{fontSize:12,color:"#ef5044",fontWeight:600,marginBottom:16}}>FROM $5,000</div><h3 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.3rem",color:"#f0f0f3",marginBottom:12}}>Epistemic Risk Assessment</h3><p style={{color:"#7a7a88",fontSize:15,lineHeight:1.7}}>Philosophical evaluation of your AI system&apos;s knowledge-production reliability.</p></div>
<div className="card" style={{padding:32}}><div style={{fontSize:12,color:"#e0ab4e",fontWeight:600,marginBottom:16}}>FROM $3,000</div><h3 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.3rem",color:"#f0f0f3",marginBottom:12}}>AI Ethics Review</h3><p style={{color:"#7a7a88",fontSize:15,lineHeight:1.7}}>Evaluation against ethical frameworks. EU AI Act alignment.</p></div>
<div className="card" style={{padding:32}}><div style={{fontSize:12,color:"#6b8aed",fontWeight:600,marginBottom:16}}>FROM $2,500</div><h3 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.3rem",color:"#f0f0f3",marginBottom:12}}>Foundations Workshop</h3><p style={{color:"#7a7a88",fontSize:15,lineHeight:1.7}}>Half/full-day for technical teams on AI epistemology and ethics.</p></div>
</div></div>
<div style={{maxWidth:720,margin:"0 auto",padding:"40px 24px 80px",textAlign:"center"}}><Link href="/contact" className="btn-primary">Get in Touch <ArrowRight size={16}/></Link></div>
</main>);}
