import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { articles } from "@/data/articles";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata(props: { params: { slug: string } }): Metadata {
  const { slug } = props.params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };
  return { title: article.title, description: article.excerpt };
}

function fmt(d: string) { try { return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }); } catch { return d; } }

function render(c: string) {
  if (!c) return null;
  return c.split("\n\n").map((b, i) => {
    const t = b.trim();
    if (!t) return null;
    if (t.startsWith("## ")) return <h2 key={i} style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "1.5rem", color: "#f0f0f3", marginTop: 48, marginBottom: 16, lineHeight: 1.2 }}>{t.slice(3)}</h2>;
    return <p key={i} style={{ color: "#a0a0b0", fontSize: 17, lineHeight: 1.85, marginBottom: 24 }}>{t}</p>;
  });
}

export default function Page(props: { params: { slug: string } }) {
  const { slug } = props.params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return (
    <main>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "120px 24px 0" }}>
        <Link href="/articles" style={{ color: "#5a5a68", fontSize: 13, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}><ArrowLeft size={14} /> Back to articles</Link>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "#4a4a58", marginTop: 32 }}><time>{fmt(article.date)}</time><span style={{ width: 3, height: 3, borderRadius: "50%", background: "#3a3a45" }} /><span>{article.readingTime}</span></div>
        <h1 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", marginTop: 16, lineHeight: 1.12 }}>{article.title}</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 20 }}>{article.tags.map((tag) => <span key={tag} style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, background: "rgba(255,255,255,0.03)", color: "#6a6a78", border: "1px solid rgba(255,255,255,0.04)" }}>{tag}</span>)}</div>
        <div style={{ marginTop: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: 14, color: "#5a5a68" }}>By <span style={{ color: "#b0b0bc" }}>Artur Ziganshin</span></div>
      </div>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 24px 60px" }}>{render(article.content)}</div>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px 80px", borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 40 }}>
        <p style={{ color: "#5a5a68", fontSize: 14, marginBottom: 8 }}>Enjoyed this essay?</p>
        <Link href="/newsletter" style={{ color: "#ef5044", fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>Subscribe to The Epistemic Mirror <ArrowRight size={14} /></Link>
      </div>
    </main>
  );
}
