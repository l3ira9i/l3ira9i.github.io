import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import './Section.css';

const Experience = () => {
  const { t } = useLanguage();
  const jobs = t('experience.jobs');
  const currentBadge = t('experience.current_badge');
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="experience" className="section bg-secondary" aria-labelledby="experience-title">
      <div className="section-container">
        <h2 className="section-title" id="experience-title">
          <span className="text-cyan" aria-hidden="true">&lt;</span>
          {t('experience.title')}
          <span className="text-cyan" aria-hidden="true">/&gt;</span>
        </h2>

        <div className="timeline" role="list">
          {Array.isArray(jobs) && jobs.map((job, index) => {
            const isCompact = job.compact;
            const isExpanded = expanded[index];
            const showAll = !isCompact || isExpanded;

            return (
              <div
                key={index}
                className={`timeline-item ${job.featured ? 'featured' : ''}`}
                role="listitem"
              >
                <div className="timeline-dot" aria-hidden="true"></div>

                <article className={`timeline-content glass animate-fade-in ${job.featured ? 'glass-featured' : ''}`}>
                  {/* Header */}
                  <div className="timeline-header">
                    <div className="timeline-header-left">
                      <h3 className="job-role">{job.role}</h3>
                      <div className="job-meta">
                        <span className="job-company">
                          {job.company}
                        </span>
                        {job.location && (
                          <span className="job-location">
                            <MapPin size={13} aria-hidden="true" />
                            {job.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="timeline-header-right">
                      <div className="job-date">
                        <Calendar size={13} aria-hidden="true" />
                        {job.date}
                      </div>
                      {job.isCurrent && (
                        <span className="current-badge" aria-label="Poste actuel">
                          <span className="current-badge-dot" aria-hidden="true"></span>
                          {currentBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tasks */}
                  <ul className="job-tasks" aria-label="Missions">
                    {job.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  {Array.isArray(job.tech_tags) && (
                    <div className="job-tech-tags" aria-label="Technologies">
                      {job.tech_tags.map((tag, i) => (
                        <span key={i} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
