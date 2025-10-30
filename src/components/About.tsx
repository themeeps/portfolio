import { Code2, Sparkles, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion'
    },
    {
      icon: Sparkles,
      title: 'Modern Stack',
      description: 'Always learning and working with cutting-edge technologies'
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Delivering high-quality products within deadline'
    }
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">About Me</h2>
          <div className="bg-gradient-primary mx-auto" style={{ width: '80px', height: '4px' }}></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <p className="lead text-center text-muted mb-5">
              I'm a passionate full-stack developer with 5+ years of experience building web applications.
              I love turning ideas into reality through code, with a focus on creating intuitive user experiences
              and robust backend systems. When I'm not coding, you'll find me exploring new technologies or
              contributing to open-source projects.
            </p>

            <div className="row g-4">
              {highlights.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card h-100 border-0 shadow-sm card-hover">
                    <div className="card-body p-4">
                      <div className="icon-box mb-4">
                        <item.icon size={28} />
                      </div>
                      <h5 className="card-title fw-bold mb-3">{item.title}</h5>
                      <p className="card-text text-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
