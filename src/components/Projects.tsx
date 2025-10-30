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
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
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
      tags: ['React', 'OpenWeather API', 'Tailwind', 'Mapbox'],
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
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors duration-300 font-medium"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors duration-300 font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
