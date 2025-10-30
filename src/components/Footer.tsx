import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="text-center">
          <div className="d-flex justify-content-center gap-4 mb-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-decoration-none"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-decoration-none"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="social-icon text-decoration-none"
            >
              <Mail size={28} />
            </a>
          </div>

          <p className="text-secondary mb-2 d-flex align-items-center justify-content-center gap-2">
            Made with <Heart size={16} className="text-danger" style={{ fill: 'currentColor' }} /> by John Programmer
          </p>

          <p className="text-secondary small mb-0">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
