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
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed mb-12 text-center">
            I'm a passionate full-stack developer with 5+ years of experience building web applications.
            I love turning ideas into reality through code, with a focus on creating intuitive user experiences
            and robust backend systems. When I'm not coding, you'll find me exploring new technologies or
            contributing to open-source projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
