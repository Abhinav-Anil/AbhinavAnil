export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-border bg-card/50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground text-sm">
              Interested in collaborating or learning more about my work? Feel free to reach out.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/abhinav-anil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:abhinav.anil@waisldigital.com" className="text-accent hover:underline">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-accent hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-accent hover:underline">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-accent hover:underline">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Abhinav Anil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
