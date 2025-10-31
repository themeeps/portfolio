import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section min-vh-100 d-flex align-items-center position-relative">
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <div className="mb-4">
              <div className="d-inline-block p-1 rounded-circle bg-gradient-primary">
                <div
                  className="bg-dark rounded-circle d-flex align-items-center justify-content-center text-gradient fw-bold"
                  style={{ width: '165px', height: '165px', fontSize: '3rem' }}
                >
                  <img src="profile_ali.png" className="rounded-circle" alt="John Programmer" width="165" height="165" />
                </div>
              </div>
            </div>

            <h1 className="display-3 fw-bold text-white mb-3">
              Hi, I'm <span className="text-gradient">Sayyid Ali Akbar H</span>
            </h1>

            <p className="fs-4 text-white-50 mb-4">
              Full Stack Developer & Creative Problem Solver
            </p>

            <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              I craft elegant solutions to complex problems. Specialized in building scalable web applications with modern technologies.
            </p>

            <div className="d-flex gap-3 justify-content-center mb-5 flex-wrap">
              <a href="#contact" className="btn btn-gradient text-white px-5 py-3 fw-semibold rounded-pill">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline-primary px-5 py-3 fw-semibold rounded-pill">
                View My Work
              </a>
            </div>

            <div className="d-flex gap-4 justify-content-center">
              <a href="https://github.com/themeeps" target="_blank" rel="noopener noreferrer" className="social-icon text-decoration-none">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/sayyid-ali-a5722b201?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSBmO%2Fa9%2BTxeN%2BeQsV3Utwg%3D%3D" target="_blank" rel="noopener noreferrer" className="social-icon text-decoration-none">
                <Linkedin size={28} />
              </a>
              <a href="mailto:sayyidali195@gmail.com" className="social-icon text-decoration-none">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4 social-icon text-decoration-none bounce-animation"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
}
