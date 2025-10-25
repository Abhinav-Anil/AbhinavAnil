"use client"

import { ExternalLink } from "lucide-react"

export default function Publications() {
  const publications = [
    {
      id: 1,
      title: "Understanding the need for Machine Learning as a solution for financial analysis of IT industries",
      publisher: "IEEE Publication",
      date: "October 2018 - January 2020",
      links: [
        {
          label: "View on IEEE Xplore",
          url: "https://ieeexplore.ieee.org",
        },
      ],
    },
    {
      id: 2,
      title: "Implementing Machine Vision Process to Analyze Echocardiography for Heart Health Monitoring",
      publisher: "Springer Publication",
      date: "2020",
      links: [
        {
          label: "View on Springer",
          url: "https://springer.com",
        },
        {
          label: "View on Google Scholar",
          url: "https://scholar.google.com",
        },
      ],
    },
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground">Publications & Achievements</h2>

        <div className="space-y-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="p-6 rounded-lg border border-border bg-card hover:border-accent transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{pub.title}</h3>
                  <p className="text-sm text-accent mb-2">{pub.publisher}</p>
                  <p className="text-sm text-muted-foreground mb-4">{pub.date}</p>

                  <div className="flex flex-wrap gap-3">
                    {pub.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 text-accent hover:bg-accent/20 transition-colors text-sm font-medium"
                      >
                        {link.label}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
