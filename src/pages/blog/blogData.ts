export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  insights: { title: string; content: string }[];
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  relatedPosts: number[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'scripting-ai-agents-human-touch',
    title: "Scripting AI Agents that don't Upset the Human",
    excerpt: "How organizations can embrace artificial intelligence without losing the human touch that makes their work meaningful.",
    content: [
      "The integration of AI into our workplaces is no longer a question of if, but how. As organizations rush to adopt the latest AI tools, a critical tension emerges: how do we leverage the efficiency and capability of artificial intelligence while preserving the human elements that make work meaningful?",
      "This is not a technical problem—it's a design challenge. The way we script AI agents, the language we use in their prompts, and the guardrails we establish all communicate something about our values as an organization.",
      "Consider the difference between an AI that says 'Processing your request' and one that says 'I'm working on that for you.' The first is cold, mechanical. The second acknowledges a relationship, however synthetic.",
      "Organizations that succeed with AI integration understand this nuance. They design their AI interactions to complement human workflows rather than replace human judgment. They create feedback loops where humans can correct and guide AI behavior, ensuring the technology evolves in alignment with organizational values.",
      "The most successful implementations we've seen treat AI as a team member with specific strengths and limitations—one that needs onboarding, training, and ongoing support, just like any human colleague."
    ],
    insights: [
      {
        title: "Strategic Insight",
        content: "Organizations that maintain human oversight in AI workflows see 40% higher employee satisfaction and 25% better long-term outcomes than those that fully automate."
      },
      {
        title: "Implementation Tip",
        content: "Start with AI as an assistant, not a replacement. Give employees the ability to review, modify, and override AI recommendations."
      }
    ],
    category: "AI Strategy",
    readTime: "5 min",
    date: "2025-02-15",
    author: {
      name: "Jazmine Hansen",
      role: "Founder & Lead Consultant"
    },
    tags: ["AI Integration", "Human-Centered Design", "Change Management", "Employee Experience"],
    relatedPosts: [2, 5]
  },
  {
    id: 2,
    slug: 'designing-trust-digital-systems',
    title: "Designing for Trust in Digital Systems",
    excerpt: "Trust is the foundation of every successful technology implementation. Here's how to build it intentionally.",
    content: [
      "Trust is not a feature you can add to a product roadmap. It's an emergent property of consistent, transparent, and respectful interactions over time. In digital systems, trust is earned through every micro-interaction, every line of copy, every design decision.",
      "When users encounter a new system, they bring with them a lifetime of experiences—both positive and negative—with technology. They may have been burned by data breaches, frustrated by opaque algorithms, or disappointed by promises unkept. Your system inherits this baggage.",
      "Building trust requires acknowledging this history. It means being explicit about what data you collect and why. It means providing clear explanations for system behavior, especially when that behavior might seem unexpected or wrong.",
      "Transparency is not just about disclosure—it's about making the system's logic legible to users. When someone understands why a system made a particular recommendation, they're more likely to trust that recommendation, even if they ultimately disagree with it.",
      "The organizations that build the most trusted systems are those that design for failure. They anticipate moments when trust might be broken and create graceful recovery paths. They view trust not as a destination but as a continuous practice."
    ],
    insights: [
      {
        title: "Research Finding",
        content: "78% of users say transparency about data usage is the most important factor in trusting a digital system, surpassing even security features."
      },
      {
        title: "Design Principle",
        content: "Every error message is a trust moment. Design them to explain, apologize, and guide—not just to report failure."
      }
    ],
    category: "Experience Design",
    readTime: "4 min",
    date: "2025-01-20",
    author: {
      name: "Jazmine Hansen",
      role: "Founder & Lead Consultant"
    },
    tags: ["Trust Design", "UX", "Transparency", "Digital Ethics"],
    relatedPosts: [1, 3]
  },
  {
    id: 3,
    slug: 'finding-clarity-technological-change',
    title: "Finding Clarity in Technological Change",
    excerpt: "When everything feels like it's moving too fast, here's how to find your footing and make thoughtful decisions.",
    content: [
      "The pace of technological change can feel overwhelming. Every week brings new tools, new frameworks, new paradigms that promise to revolutionize how we work. For leaders, this creates a particular anxiety: the fear of falling behind, of missing the next wave, of making the wrong bet.",
      "But here's the truth: most organizations don't need to be on the bleeding edge. They need to be thoughtful about which technologies align with their values, serve their people, and advance their mission. Speed is not the same as progress.",
      "Finding clarity starts with asking better questions. Instead of 'What can this technology do?' ask 'What problem are we trying to solve?' Instead of 'Are our competitors using this?' ask 'Will this improve life for our team and customers?'",
      "The organizations that navigate change most successfully are those that maintain a strong sense of identity amid the noise. They have clear values that serve as filters for new opportunities. They understand that saying no to most things enables them to say yes to the right things.",
      "Clarity also comes from experimentation at small scale. Rather than making big bets on unproven technologies, successful organizations create space for pilot projects, learning, and iteration. They treat technology adoption as a journey of discovery rather than a race to implementation."
    ],
    insights: [
      {
        title: "Leadership Perspective",
        content: "The most successful technology adoptions happen in organizations with strong cultural clarity—where values guide decisions more than trends."
      },
      {
        title: "Practical Framework",
        content: "Use the 'Three Whys' technique: For any technology, ask why three times to get to the root problem you're trying to solve."
      }
    ],
    category: "Thought Leadership",
    readTime: "6 min",
    date: "2024-12-10",
    author: {
      name: "Jazmine Hansen",
      role: "Founder & Lead Consultant"
    },
    tags: ["Change Management", "Leadership", "Technology Strategy", "Decision Making"],
    relatedPosts: [1, 4]
  },
  {
    id: 4,
    slug: 'ai-and-the-planet',
    title: "AI & The Planet",
    excerpt: "The change does not depict the outcome. How we navigate it does. The same intelligence that costs the planet can also save it.",
    content: [
      "There's no denying the environmental cost of artificial intelligence. Training large models consumes enormous amounts of energy. Data centers worldwide account for a significant and growing share of global electricity consumption. The carbon footprint of AI is real and concerning.",
      "But the story doesn't end there. The same intelligence that costs the planet can also help save it. AI is being used to optimize energy grids, predict weather patterns, monitor deforestation, design more efficient materials, and accelerate climate research.",
      "The question is not whether AI is good or bad for the environment—it's how we choose to develop and deploy it. Every organization using AI has decisions to make about model size, training frequency, inference location, and energy source.",
      "Sustainable AI practices are emerging. Smaller, specialized models can often outperform large general-purpose ones for specific tasks. Edge computing can reduce data transmission. Renewable-powered data centers can minimize carbon impact.",
      "The organizations that will lead in the next decade are those that treat sustainability as a core design constraint, not an afterthought. They're asking not just 'What can AI do?' but 'What should AI do, and how can we do it responsibly?'"
    ],
    insights: [
      {
        title: "Environmental Data",
        content: "Training a single large language model can emit as much carbon as five cars over their entire lifetimes. But efficient models can reduce this by 90%."
      },
      {
        title: "Action Step",
        content: "Audit your AI usage. Are you using the right-sized model for each task? Can you batch requests or use caching to reduce calls?"
      }
    ],
    category: "Sustainability",
    readTime: "3 min",
    date: "2024-11-05",
    author: {
      name: "Jazmine Hansen",
      role: "Founder & Lead Consultant"
    },
    tags: ["Sustainability", "Green AI", "Climate Tech", "Responsible AI"],
    relatedPosts: [3, 5]
  },
  {
    id: 5,
    slug: 'building-ai-feels-human',
    title: "Building AI That Feels Human",
    excerpt: "The principles behind conversational interfaces that connect rather than alienate.",
    content: [
      "The best conversational AI doesn't try to pass as human—it tries to be genuinely helpful while being honest about what it is. This honesty creates a foundation for trust and sets appropriate expectations.",
      "Human-feeling AI has several characteristics. It acknowledges uncertainty rather than making things up. It admits when it doesn't know something. It uses language that is clear and accessible, avoiding jargon that might confuse users.",
      "Tone matters enormously. A conversational AI can be warm without being fake, professional without being cold. The voice should match the context—different situations call for different levels of formality, humor, or empathy.",
      "Perhaps most importantly, human-feeling AI knows when to hand off to a human. It recognizes the limits of its capabilities and provides clear pathways to human support when needed. It doesn't try to handle situations that require genuine human judgment or emotional intelligence.",
      "Building AI that feels human is ultimately about respect—respect for the user's time, intelligence, and autonomy. It's about creating tools that serve people rather than replacing the human elements that make interactions meaningful."
    ],
    insights: [
      {
        title: "UX Research",
        content: "Users report 60% higher satisfaction with AI that acknowledges its limitations compared to AI that tries to appear infallible."
      },
      {
        title: "Writing Tip",
        content: "Use 'I' statements sparingly in AI interfaces. Instead of 'I think you should...', try 'You might consider...' to avoid false personhood."
      }
    ],
    category: "AI",
    readTime: "7 min",
    date: "2024-10-18",
    author: {
      name: "Jazmine Hansen",
      role: "Founder & Lead Consultant"
    },
    tags: ["Conversational AI", "UX Writing", "Chatbots", "Human-Centered AI"],
    relatedPosts: [1, 2]
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(relatedIds: number[]): BlogPost[] {
  return blogPosts.filter(post => relatedIds.includes(post.id));
}
