import './About.css'

function About() {
  const stats = [
    { number: '3+', label: '년 경력' },
    { number: '50+', label: '프로젝트' },
    { number: '30+', label: '만족한 클라이언트' },
    { number: '100%', label: '열정' },
  ]

  const experiences = [
    {
      year: '2023 - 현재',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: '웹 애플리케이션 개발 및 팀 리드'
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Startup Inc.',
      description: 'React, Node.js 기반 서비스 개발'
    },
    {
      year: '2020 - 2021',
      title: 'Junior Developer',
      company: 'Web Agency',
      description: '프론트엔드 개발 및 유지보수'
    },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          저에 대해 더 자세히 알아보세요
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3>안녕하세요, 풀스택 개발자 김개발입니다</h3>
            <p>
              저는 3년 이상의 웹 개발 경험을 가진 풀스택 개발자입니다. 
              React, Vue, Node.js 등 다양한 기술 스택을 활용하여 
              사용자 중심의 웹 애플리케이션을 개발합니다.
            </p>
            <p>
              깔끔하고 유지보수하기 쉬운 코드를 작성하는 것을 중요하게 생각하며,
              새로운 기술을 배우고 적용하는 것을 즐깁니다. 팀과의 협업을 통해 
              더 나은 결과물을 만들어내는 것에 큰 보람을 느낍니다.
            </p>
            <p>
              현재는 확장 가능한 웹 서비스 아키텍처와 사용자 경험 최적화에 
              관심을 가지고 있으며, 끊임없이 성장하는 개발자가 되기 위해 노력하고 있습니다.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <a href="/resume.pdf" className="btn btn-primary" download>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              이력서 다운로드
            </a>
          </div>

          <div className="about-experience">
            <h3>경력 사항</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{exp.year}</span>
                    <h4>{exp.title}</h4>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
