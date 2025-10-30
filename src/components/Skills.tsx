export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Bootstrap', 'Next.js', 'Vue.js', 'HTML/CSS']
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
    <section id="skills" className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Skills & Technologies</h2>
          <div className="bg-gradient-primary mx-auto" style={{ width: '80px', height: '4px' }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {skillCategories.map((category, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border-0 bg-light">
                <div className="card-body p-4">
                  <h4 className="card-title text-center fw-bold mb-4">{category.category}</h4>
                  <div className="d-flex flex-column gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="badge bg-white text-dark py-3 px-4 fs-6 fw-semibold skill-badge border"
                        style={{ textAlign: 'center' }}
                      >
                        {skill}
                      </div>
                    ))}
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
