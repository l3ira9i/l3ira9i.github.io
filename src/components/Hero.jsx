import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [terminalDone, setTerminalDone] = useState(false);

  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [rolePhase, setRolePhase] = useState('typing'); // typing | waiting | deleting

  const lines = t('hero.terminal_lines');

  // Terminal multi-line effect
  useEffect(() => {
    if (!Array.isArray(lines) || lines.length === 0) return;

    setTerminalLines([]);
    setCurrentLine(0);
    setCurrentChar(0);
    setShowOutput(false);
    setTerminalDone(false);

    const typeLines = () => {
      let lineIdx = 0;
      let charIdx = 0;
      let phase = 'cmd'; // cmd | output_pause | output

      const interval = setInterval(() => {
        const line = lines[lineIdx];
        if (!line) { clearInterval(interval); setTerminalDone(true); return; }

        if (phase === 'cmd') {
          setTerminalLines(prev => {
            const updated = [...prev];
            if (!updated[lineIdx]) updated[lineIdx] = { cmd: '', output: '', showOutput: false };
            updated[lineIdx] = { ...updated[lineIdx], cmd: line.cmd.substring(0, charIdx + 1) };
            return updated;
          });
          charIdx++;
          if (charIdx >= line.cmd.length) {
            charIdx = 0;
            phase = 'output_pause';
          }
        } else if (phase === 'output_pause') {
          setTerminalLines(prev => {
            const updated = [...prev];
            if (!updated[lineIdx]) updated[lineIdx] = { cmd: line.cmd, output: '', showOutput: false };
            updated[lineIdx] = { ...updated[lineIdx], showOutput: true, output: line.output };
            return updated;
          });
          lineIdx++;
          charIdx = 0;
          phase = 'cmd';
          if (lineIdx >= lines.length) {
            clearInterval(interval);
            setTerminalDone(true);
          }
        }
      }, 60);

      return () => clearInterval(interval);
    };

    const cleanup = typeLines();
    return cleanup;
  }, [t]);

  // Role rotating typing effect
  useEffect(() => {
    const roles = t('hero.roles');
    if (!Array.isArray(roles) || roles.length === 0) return;

    const currentRole = roles[roleIndex];
    let timeout;

    if (rolePhase === 'typing') {
      if (roleText.length < currentRole.length) {
        timeout = setTimeout(() => setRoleText(currentRole.substring(0, roleText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setRolePhase('waiting'), 2500);
      }
    } else if (rolePhase === 'waiting') {
      timeout = setTimeout(() => setRolePhase('deleting'), 500);
    } else if (rolePhase === 'deleting') {
      if (roleText.length > 0) {
        timeout = setTimeout(() => setRoleText(roleText.substring(0, roleText.length - 1)), 40);
      } else {
        setRoleIndex(prev => (prev + 1) % roles.length);
        setRolePhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [roleText, rolePhase, roleIndex, t]);

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="hero-container">
        {/* Left: Content */}
        <div className="hero-content animate-fade-in">
          <div className="hero-label">
            <span className="hero-label-dot"></span>
            <span className="hero-label-text">Available for opportunities</span>
          </div>

          <h1 className="hero-title">
            {t('hero.name')}
          </h1>

          <div className="hero-role-line">
            <span className="hero-role-static">{t('hero.title')}</span>
          </div>

          <div className="hero-role-animated">
            <span className="hero-role-text">{roleText}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero-description">{t('hero.description')}</p>

          {/* Terminal */}
          <div className="terminal-box glass" role="region" aria-label="Terminal">
            <div className="terminal-header" aria-hidden="true">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">bash — imad@network-engineer</span>
            </div>
            <div className="terminal-body">
              {terminalLines.map((line, i) => (
                <div key={i} className="terminal-line">
                  <div className="terminal-cmd">
                    <span className="prompt" aria-hidden="true">$</span>
                    <span className="cmd-text">{line.cmd}</span>
                    {i === terminalLines.length - 1 && !terminalDone && (
                      <span className="cursor" aria-hidden="true">_</span>
                    )}
                  </div>
                  {line.showOutput && (
                    <div className="terminal-output">{line.output}</div>
                  )}
                </div>
              ))}
              {terminalDone && (
                <div className="terminal-cmd">
                  <span className="prompt" aria-hidden="true">$</span>
                  <span className="cursor" aria-hidden="true">_</span>
                </div>
              )}
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="cta-btn primary" aria-label="Explore my work">
              {t('hero.cta_primary')} <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="/Imad_IRAKI.pdf"
              download
              className="cta-btn secondary"
              aria-label="Download CV"
            >
              <Download size={18} aria-hidden="true" /> {t('hero.cta_secondary')}
            </a>
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="hero-image-container animate-fade-in">
          <div className="image-wrapper glass-cyan">
            <div className="image-glow" aria-hidden="true"></div>
            <img
              src="/a983f2c1-dcac-4dc2-b7a8-829ef97851d0.jpg"
              alt="Imad Iraki – Systems & Network Engineer"
              className="profile-img"
              loading="eager"
            />
            <div className="image-badge" aria-hidden="true">
              <span className="badge-dot"></span>
              <span>Open to work</span>
            </div>
          </div>

          {/* Floating info cards */}
          <div className="floating-card card-top glass" aria-hidden="true">
            <span className="fc-icon">🌐</span>
            <div>
              <div className="fc-title">Cisco & FortiGate</div>
              <div className="fc-sub">Network Infrastructure</div>
            </div>
          </div>

          <div className="floating-card card-bottom glass" aria-hidden="true">
            <span className="fc-icon">📊</span>
            <div>
              <div className="fc-title">Zabbix Monitoring</div>
              <div className="fc-sub">Infrastructure Visibility</div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-hint" aria-label="Scroll to About section">
        <ChevronDown size={24} aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
