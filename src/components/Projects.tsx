import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, inventory management, and user authentication.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team chat, and progress tracking.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts, data visualization, and export functionality.',
      tags: ['Vue.js', 'Python', 'MongoDB', 'Chart.js'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Social Media API',
      description: 'RESTful API for social networking features including posts, comments, likes, and user relationships.',
      tags: ['Express', 'PostgreSQL', 'JWT', 'Redis'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      tags: ['React', 'OpenWeather API', 'Bootstrap', 'Mapbox'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, SEO optimization, and content management system.',
      tags: ['Next.js', 'MDX', 'Vercel', 'CMS'],
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
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
              <div className="card h-100 border-0 shadow-sm project-card card-hover">
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
                    <a
                      href={project.github}
                      className="text-decoration-none text-muted d-flex align-items-center gap-2 fw-semibold"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="text-decoration-none text-muted d-flex align-items-center gap-2 fw-semibold"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
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
