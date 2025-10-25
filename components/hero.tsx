export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Abhinav Anil</h1>
          <p className="text-xl text-accent mb-4 font-semibold">Data Scientist</p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            7+ years of expertise in Large Language Models, Computer Vision, and Machine Learning. Architecting
            production-grade AI solutions and leading high-performing teams.
          </p>
          <div className="flex gap-4">
            <a
              href="#experience"
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/user-original.png-0uxEmtTgBZeY25PMNa2ojGinMU1EZz.jpeg"
            alt="Abhinav Anil"
            className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
