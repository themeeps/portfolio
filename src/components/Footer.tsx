import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="text-center">
          <div className="d-flex justify-content-center gap-4 mb-4">
            <a
              href="https://github.com/themeeps"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-decoration-none"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/sayyid-ali-a5722b201?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSBmO%2Fa9%2BTxeN%2BeQsV3Utwg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-decoration-none"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:sayyidali195@gmail.com"
              className="social-icon text-decoration-none"
            >
              <Mail size={28} />
            </a>
          </div>

          <p className="text-secondary mb-2 d-flex align-items-center justify-content-center gap-2">
            Created by Sayyid Ali Akbar Haraki
          </p>

          <p className="text-secondary small mb-0">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
