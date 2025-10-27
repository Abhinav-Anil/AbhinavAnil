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
    {
      title: "Data Scientist, Research and Development",
      company: "Piatrika Biosystems Pvt. Ltd.",
      period: "August 2022 - March 2024",
      highlights: [
        "Developed sophisticated machine learning algorithms for analyzing phenotype and genotype data, achieving 76% accuracy in phenotype prediction from genomic information",
        "Led end-to-end deployment of ML projects on AWS cloud infrastructure for production environments and Digital Ocean for development/staging pipelines",
        "Implemented Django-based backend architecture for creating RESTful APIs for ML algorithms and containerized solutions using Docker for scalable deployment",
      ],
    },
    {
      title: "Data Scientist, Computer Vision - R&D",
      company: "Senquire Analytics Pvt. Ltd.",
      period: "January 2020 - August 2022",
      highlights: [
        "Developed advanced image processing algorithms and curated custom datasets tailored for specific applications, significantly enhancing product capabilities and performance",
        "Conducted extensive R&D on OpenCV techniques and unsupervised learning algorithms, creating tailor-made solutions for complex customer application requirements",
        "Delivered hands-on projects on embedded devices including Nvidia Jetson Nano and Xavier NX, implementing AI models based on TensorFlow and Keras frameworks",
        "Automated critical measurement processes using image processing techniques, supporting both input images and open-source CAD file formats (STEP, IGES)",
        "Designed and utilized advanced algorithms and ML models to improve, clean, and validate diverse data sources for enhanced efficiency, uniformity, and accuracy",
      ],
    },
    {
      title: "IT - Database and Support",
      company: "Indian Oil Corporation Limited",
      period: "June 2017 - May 2018",
      highlights: [
        "Worked on the Pradhan Mantri Ujjwala Yojna Project (PMUY), managing operations for Bihar and Jharkhand regions",
        "Handled problem troubleshooting and technical support for distributor-customer relationship management systems with its databases",
        "Contributed to the development team at IOCL Mumbai Branch, working on internal software solutions for various states across India",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-accent pl-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-accent font-semibold italic">{exp.company}</p>
              </div>
              <p className="text-muted-foreground text-sm mt-2 md:mt-0">{exp.period}</p>
            </div>
            <ul className="space-y-3">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-muted-foreground flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
