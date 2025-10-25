export default function Experience() {
  const experiences = [
    {
      title: "Data Scientist",
      company: "WAISL Ltd.",
      period: "April 2024 - Present",
      highlights: [
        "Architected domain-specific agentic AI solutions for aviation, recruitment, and sports analytics",
        "Fine-tuned LLAMA-based models for resume analytics with 94% accuracy",
        "Engineered computer vision models for baggage tracking achieving 89% accuracy",
        "Developed multi-agent AI systems for real-time cricket commentary with 91% accuracy",
        "Built predictive analytics for cricket match outcomes with 88% accuracy",
        "Implemented RAG-based systems for complex query resolution with 93% accuracy",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-accent pl-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-accent font-semibold">{exp.company}</p>
              </div>
              <p className="text-muted-foreground text-sm mt-2 md:mt-0">{exp.period}</p>
            </div>
            <ul className="space-y-3">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-muted-foreground flex gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
