export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'HTML/CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile', 'Testing']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center border border-slate-100"
                  >
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
