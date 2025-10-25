export default function Projects() {
  const projects = [
    {
      title: "Fine-tuned LLM for Resume Analytics",
      description: "LLAMA-based language model for comprehensive resume evaluation",
      metrics: ["94% Accuracy", "Structured Reports", "Multi-dimensional Analysis"],
      tags: ["LLM", "Fine-tuning", "NLP"],
    },
    {
      title: "Computer Vision for Baggage Tracking",
      description: "Real-time baggage tracking and dynamic gate allocation system",
      metrics: ["89% Accuracy", "Real-time Processing", "Production Deployment"],
      tags: ["Computer Vision", "Deep Learning", "Real-time"],
    },
    {
      title: "Intoxication Detection System",
      description: "Camera-based detection system for airport security applications",
      metrics: ["84.78% Accuracy", "Vision Models", "Security Application"],
      tags: ["Computer Vision", "Security", "AI"],
    },
    {
      title: "Multi-Agent Cricket Analytics",
      description: "AI-powered system for match analysis, commentary, and predictions",
      metrics: ["91% Accuracy", "Real-time Commentary", "88% Prediction Accuracy"],
      tags: ["LLM", "Multi-agent", "Analytics"],
    },
    {
      title: "RAG-based Knowledge System",
      description: "Retrieval-Augmented Generation for complex query resolution",
      metrics: ["93% Resolution", "Contextual Answers", "Knowledge Base"],
      tags: ["RAG", "LLM", "Information Retrieval"],
    },
    {
      title: "Time-Series Forecasting",
      description: "Advanced forecasting for airport traffic and passenger flow patterns",
      metrics: ["97% Precision", "Predictive Analytics", "Operations Planning"],
      tags: ["Time-Series", "Forecasting", "Analytics"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-card/50 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-background border border-border rounded-xl p-6 hover:border-accent transition-colors"
            >
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="mb-4 space-y-2">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-sm text-accent font-semibold">
                    ✓ {metric}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
