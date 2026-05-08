import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Briefcase, Code } from 'lucide-react';
import './Section.css';

const Experience = () => {
  const { t } = useLanguage();
  const jobs = t('experience.jobs');

  return (
    <section id="experience" className="section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-cyan">&lt;</span>
          {t('experience.title')}
          <span className="text-cyan">/&gt;</span>
        </h2>
        
        <div className="timeline">
          {Array.isArray(jobs) && jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass animate-fade-in">
                <div className="timeline-header">
                  <h3 className="job-role">{job.role}</h3>
                  <span className="job-date">
                    <Calendar size={14} className="mr-1" />
                    {job.date}
                  </span>
                </div>
                <h4 className="job-company">
                  <Briefcase size={14} className="mr-1 text-cyan" />
                  {job.company}
                </h4>
                <ul className="job-tasks">
                  {job.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                {job.technologies && (
                  <div className="job-technologies">
                    <Code size={14} className="mr-1 text-purple" />
                    <strong>Technologies :</strong>{' '}{job.technologies}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
