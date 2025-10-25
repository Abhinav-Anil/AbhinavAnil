export default function Skills() {
  const skillCategories = [
    {
      category: "AI & Machine Learning",
      skills: ["LLMs", "Fine-tuning", "RAG Systems", "Multi-agent AI", "Prompt Engineering"],
    },
    {
      category: "Computer Vision",
      skills: ["Object Detection", "Image Classification", "Real-time Processing", "Model Optimization"],
    },
    {
      category: "Data Science",
      skills: ["Time-Series Forecasting", "Predictive Analytics", "Statistical Analysis", "Data Engineering"],
    },
    {
      category: "Technologies",
      skills: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "Hugging Face",
        "LangChain",
        "FastAPI",
        "Django",
        "VectorDB",
        "PostgreSQL",
      ],
    },
    {
      category: "Server & OS",
      skills: ["Windows", "Linux", "AWS", "Nginx", "Docker"],
    },
    {
      category: "Leadership",
      skills: ["Team Management", "Mentoring", "Project Leadership", "Cross-functional Collaboration"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-bold mb-4 text-accent">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:border-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
