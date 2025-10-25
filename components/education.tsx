"use client"

export default function Education() {
  const education = [
    {
      degree: "MSc.CA (Data Science)",
      institution: "Symbiosis Institute of Computer Studies and Research",
      description:
        "Advanced studies in data science with focus on machine learning, statistical analysis, and data-driven decision making.",
    },
  ]

  return (
    <section id="education" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">
          <span className="text-accent">Education</span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:border-accent transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-accent font-medium">{edu.institution}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
