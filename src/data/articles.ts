export interface Article {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const articles: Article[] = [
  {
    slug: "why-ai-needs-philosophy",
    title: "Why AI Needs Philosophy Now More Than Ever",
    date: "2026-03-01",
    readingTime: "8 min read",
    excerpt: "Large language models don't understand meaning. They process patterns. This distinction matters enormously.",
    tags: ["AI philosophy", "epistemic risks", "LLMs"],
    content: `We are living through the most significant expansion of artificial language production in human history. Every day, large language models generate billions of words.

This is not an idle academic puzzle. The answer determines whether we can trust AI systems with consequential decisions.

## The Epistemic Gap

Epistemology offers the clearest framework for understanding what is happening inside language models. When GPT-4 produces a correct medical diagnosis, has it learned medicine? Or has it found statistical regularities in millions of medical documents?

A doctor who diagnoses pneumonia understands that pneumonia involves inflammation of the lung tissue. The doctor's knowledge is grounded in embodied experience, causal reasoning, and a model of the world.

An LLM that produces the same diagnosis has done something fundamentally different. It has identified that the pattern of these symptoms correlates with pneumonia at high frequency.

## Why This Matters for Society

If an AI system produces a correct diagnosis 95% of the time through pattern matching, it will fail in precisely those cases where patterns break — rare diseases, atypical presentations, novel conditions.

## What Philosophy Brings

Philosophy offers centuries of conceptual tools. The philosophy of language provides frameworks for analyzing what understanding language actually requires. Ethics provides frameworks for determining what we owe to people affected by AI decisions.

These are not abstract questions. They are the most urgent applied philosophy problems of our generation.`,
  },
  {
    slug: "what-deepseek-reveals",
    title: "What DeepSeek Reveals About the Fragility of AI Knowledge",
    date: "2026-03-08",
    readingTime: "6 min read",
    excerpt: "The rise of DeepSeek challenges Western assumptions about AI development — but the deeper lesson is philosophical.",
    tags: ["DeepSeek", "epistemic risks", "benchmarking"],
    content: `When DeepSeek demonstrated performance competitive with Western frontier models at a fraction of the training cost, the AI industry panicked about economics. But the more interesting question is epistemological.

## The Benchmark Illusion

If two radically different systems achieve similar benchmark scores, one of two things must be true. Either both have converged on genuine understanding. Or the benchmarks measure something other than understanding.

The philosophical implications of the second possibility are profound.

## Epistemic Luck

Philosophy has a name for this: epistemic luck. When someone arrives at a true belief through a process that could easily have produced a false belief, their true belief does not count as knowledge.

## The Path Forward

The DeepSeek moment should prompt a fundamental rethinking of how we evaluate AI systems. This is a philosophical question requiring philosophical methods.`,
  },
  {
    slug: "ai-philosophy-reading-list",
    title: "The Essential AI Philosophy Reading List for 2026",
    date: "2026-03-15",
    readingTime: "10 min read",
    excerpt: "From Turing's original question to the latest debates on AI consciousness — a curated guide.",
    tags: ["reading list", "books", "philosophy of AI"],
    content: `Whether you are an engineer building AI systems, a policymaker regulating them, or a citizen affected by them, philosophical literacy about AI is no longer optional.

## Tier 1: Philosophical Foundations

Alan Turing, Computing Machinery and Intelligence (1950). The paper that started the field.

John Searle, Minds, Brains, and Programs (1980). The Chinese Room argument remains the most powerful philosophical objection to the idea that symbol manipulation constitutes understanding.

Hubert Dreyfus, What Computers Can't Do (1972). Dreyfus argued that human intelligence is fundamentally embodied.

## Tier 2: Contemporary Essentials

Kate Crawford, Atlas of AI (2021). An empirical and philosophical examination of AI as a system of power.

Shannon Vallor, Technology and the Virtues (2016). Vallor applies virtue ethics to technology.

## How to Use This List

Start with Turing and Searle from Tier 1, then Crawford from Tier 2. These three texts give you a philosophical foundation stronger than most people working in AI today.`,
  },
  {
    slug: "searles-chinese-room-in-2026",
    title: "Searle's Chinese Room at 46: Does It Still Apply to GPT?",
    date: "2026-03-22",
    readingTime: "9 min read",
    excerpt: "The most famous thought experiment in philosophy of mind meets the most powerful language models ever built.",
    tags: ["Chinese Room", "Searle", "LLMs", "philosophy of mind"],
    content: `In 1980, John Searle imagined a person locked in a room, receiving Chinese characters through a slot, consulting a massive rulebook, and passing back correct responses. The person does not understand Chinese. Searle's conclusion: computers that manipulate symbols do not understand.

## The Scale Objection

The most common response: surely at sufficient scale, pattern matching becomes understanding. But this confuses quantity with quality. A billion lookup tables are still lookup tables.

## The Grounding Problem

Modern LLMs have statistical connections between words — they know that doctor appears near hospital more often than near volcano. But statistical co-occurrence is not semantic understanding.

## New Chinese Rooms at Scale

Modern LLMs create new versions of the Chinese Room at unprecedented scale. Every chatbot interaction is a Chinese Room — symbols in, rules applied, symbols out. The room has gotten enormously larger and faster. But the person inside still does not understand Chinese.`,
  },
  {
    slug: "dignity-problem-automated-hiring",
    title: "The Dignity Problem in Automated Hiring",
    date: "2026-03-29",
    readingTime: "7 min read",
    excerpt: "When AI screens your resume, it treats you as a data point. Kant identified why this matters 250 years ago.",
    tags: ["human dignity", "Kant", "automation", "ethics"],
    content: `You spend three weeks crafting a job application. Within 0.3 seconds, an AI screening system rejects you because your resume does not contain enough keywords. The deeper problem is philosophical.

## The Kantian Framework

Immanuel Kant argued that human beings possess dignity because they are rational agents. This dignity demands that we never treat people merely as means to our ends.

When an automated hiring system processes your application, it treats you entirely as a means to the employer's end of filling a position efficiently.

## The Problem Is Not Bias

Even a perfectly unbiased automated system would still violate dignity, because the violation is about the nature of the process itself, not just outcomes.

## Design Recommendations

Any such system must be designed with dignity constraints. Every applicant must have the right to know that automation was used. Every automated rejection must be reviewable by a human.

These are moral requirements that follow from the philosophical principle of human dignity.`,
  },
];
