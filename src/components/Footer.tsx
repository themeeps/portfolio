import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-sm text-slate-400 flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by John Programmer
          </p>

          <p className="text-sm text-slate-500 mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
