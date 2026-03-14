export const metadata={title:"Curriculum Vitae"};
export default function CVPage(){const pubs=["Epistemic Risk Surfaces in Large Language Models","Linguistic Symbolism and Meaning Compression in Machine Learning","Human Dignity Constraints for Autonomous Decision Systems","Ethical Architecture: Design Principles for Normative AI","Process Reliabilism and Machine Testimony","The Chinese Room Revisited: LLMs and Understanding","Democratic Oversight of AI Systems"];
return(<main><div style={{maxWidth:720,margin:"0 auto",padding:"120px 24px 80px"}}><span className="overline">Curriculum Vitae</span><h1 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"clamp(2rem,4vw,3rem)",marginTop:16}}>Artur Ziganshin</h1><p style={{marginTop:8,color:"#7a7a88"}}>Master of Philosophy · PhD of Philosophy</p>
<S t="Research Interests"><P>My research investigates the epistemic and ethical foundations of AI — what conditions AI must satisfy to produce genuine knowledge, how ethics should be integrated into AI architecture, and how we preserve human agency.</P></S>
<S t="Education"><P><b style={{color:"#d0d0da"}}>PhD of Philosophy</b></P><P><b style={{color:"#d0d0da"}}>Master of Philosophy (MPhil)</b></P></S>
<S t="Publications">{pubs.map((t,i)=><p key={i} style={{color:"#9a9aaa",fontSize:14,lineHeight:1.6,marginBottom:6,paddingLeft:12,borderLeft:"2px solid rgba(255,255,255,0.04)"}}>Ziganshin, A. (2025). &ldquo;{t}.&rdquo; PhilArchive preprint.</p>)}</S>
<S t="Research Areas"><P>Epistemology of AI · Philosophy of Language & AI · AI Ethics · Philosophy of Mind · Political Philosophy of AI</P></S>
<S t="Skills"><P>Languages: Russian (native), English (professional)</P><P>Technical: Python, LLM evaluation, LaTeX</P></S>
</div></main>);}
function S({t,children}:{t:string;children:React.ReactNode}){return<section style={{marginTop:48}}><h2 style={{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"1.5rem",color:"#f0f0f3",marginBottom:16,paddingBottom:8,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>{t}</h2>{children}</section>}
function P({children}:{children:React.ReactNode}){return<p style={{color:"#9a9aaa",fontSize:15,lineHeight:1.7,marginBottom:8}}>{children}</p>}
