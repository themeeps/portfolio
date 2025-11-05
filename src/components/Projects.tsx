import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Nexilis.io (Current Project)',
      description: `Nexilis.io is a web platform for mobile applications designed to help users manage and develop digital solutions. With flexible and intuitive features, Nexilis.io allows users to easily create applications without requiring extensive technical knowledge. This platform can be used for various purposes, such as developing applications for business, education, or communities.`,
      tags: ['PHP', 'HTML', 'Javascript', 'Bootstrap', 'PostgreSQL'],
      image: 'nexilis_new.png',
      // github: '#',
      demo: 'https://nexilis.io/TrustedChannel'
    },
    {
      title: 'Oneapp (Current Project)',
      description: `OneApp is one of several implementations on the Nexilis.io platform. With OneApp, users can access a variety of features in one app, making everything more practical and efficient. So, there's no need to install multiple apps; everything can be accessed in one place.`,
      tags: ['PHP', 'HTML', 'Javascript', 'Bootstrap', 'MySQL'],
      image: 'oneapp_new.png',
      // github: '#',
      demo: 'https://play.google.com/store/apps/details?id=io.nexilis.oneapp&hl=en'
    },
    {
      title: 'FelloX Spin',
      description: 'Fellox Spin is a roulette-based platform that allows users to win prizes. The roulette wheel spins using a scanner through the FelloX app. Password = jatelindo@nexilis',
      tags: ['Next.js', 'Node.js', 'MySQL', 'Bootstrap', 'Chart.js'],
      image: 'felloxspin_new.png',
      // github: '#',
      demo: 'https://nexilis.io/fekdi/get_fellox_scan'
    },
    {
      title: 'Satu iDesa',
      description: `Satu iDesa is an integrated application that provides various village-related services and information on a single platform. Its goal is to facilitate village communities' digital access to public services, information, and economic and social activities.`,
      tags: ['React', 'Node.js', 'Bootstrap', 'MySQL'],
      image: 'idesa_new.png',
      // github: '#',
      demo: 'https://newuniverse.io/nexilis/idesa-app/index.html'
    },
    {
      title: 'Crypto App',
      description: 'Virtoo offers a simple and transparent crypto trading experience for Indonesian users. With a modern interface and a focus on portfolio value, Virtoo helps investors understand digital asset price movements in a simple, fast, and interactive way.',
      tags: ['React', 'Node.js', 'Bootstrap', 'MySQL'],
      image: 'cryptoapp_new.png',
      // github: '#',
      demo: 'https://newuniverse.io/nexilis/cryptoapp/index.html#/'
    },
    {
      title: 'Digixplatform',
      description: 'DigiXplatform is a web platform or portal designed to assist users with digital solutions. This web portal was created in collaboration with Nexilis (EasySoft) and Telkomsel.',
      tags: ['PHP', 'HTML', 'Javascript', 'Bootstrap', 'MySQL'],
      image: 'digixplatform.png',
      // github: '#',
      // demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Featured Projects</h2>
          <div className="bg-gradient-primary mx-auto" style={{ width: '80px', height: '4px' }}></div>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border-1 shadow-md project-card card-hover">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top project-image"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                  <p className="card-text text-muted mb-3">{project.description}</p>

                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="badge bg-light text-dark border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex gap-3">
                    {/* <a
                      href={project.github}
                      className="text-decoration-none text-muted d-flex align-items-center gap-2 fw-semibold"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a> */}
                    {project.title != 'Digixplatform' ? (
                      <a
                        href={project.demo}
                        className="text-decoration-none text-muted d-flex align-items-center gap-2 fw-semibold"
                      >
                        <ExternalLink size={18} />
                        <span>Visit</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
