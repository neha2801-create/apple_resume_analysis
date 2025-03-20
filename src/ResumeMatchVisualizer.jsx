import React, { useState, useEffect } from 'react';

const ResumeMatchVisualizer = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);
  
  // Add responsive sizing based on viewport width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Calculate sizes based on screen width
  const toggleWidth = windowWidth <= 480 ? 44 : windowWidth <= 768 ? 50 : 60;
  const sliderSize = windowWidth <= 480 ? 18 : windowWidth <= 768 ? 22 : 26;
  const sliderOffset = 4; // Padding from edge
  
  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Apple-inspired color palette
  const lightColors = {
    background: '#f5f5f7',
    primary: '#0071e3',
    secondary: '#86868b',
    dark: '#1d1d1f',
    light: '#ffffff',
    success: '#34c759',
    warning: '#ff9500',
    danger: '#ff3b30',
    neutral: '#8e8e93',
    highlight: '#5ac8fa'
  };
  
  const darkColors = {
    background: '#1d1d1f',
    primary: '#0a84ff',
    secondary: '#98989d',
    dark: '#f5f5f7',
    light: '#2c2c2e',
    success: '#30d158',
    warning: '#ff9f0a',
    danger: '#ff453a',
    neutral: '#8e8e93',
    highlight: '#64d2ff'
  };
  
  const colors = darkMode ? darkColors : lightColors;
  
  // Add CSS styles
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
          opacity: 0.8;
        }
        50% {
          transform: scale(1.05);
          opacity: 1;
        }
      }
      
      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      /* Make just the toggle slider transition smooth */
      .toggle-slider {
        transition: left 0.3s ease;
      }

      .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }
      
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
      }
      
      .title-container {
        display: flex;
        align-items: center;
      }
      
      .controls-container {
        display: flex;
        align-items: center;
      }
      
      .card {
        background-color: ${colors.light};
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        margin-bottom: 30px;
      }
      
      .tabs {
        display: flex;
        border-bottom: 1px solid rgba(134, 134, 139, 0.2);
        overflow-x: auto;
      }
      
      .tab-button {
        padding: 12px 24px;
        font-size: 14px;
        font-weight: 500;
        border: none;
        background: none;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
      }
      
      .tab-content {
        padding: 24px;
      }
      
      .progress-bar {
        width: 100%;
        height: 16px;
        background-color: rgba(134, 134, 139, 0.3);
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 24px;
      }
      
      .progress-fill {
        height: 100%;
        border-radius: 8px;
      }
      
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        margin-bottom: 24px;
      }
      
      .list {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      
      .list-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 8px;
      }
      
      .check-icon {
        margin-right: 8px;
        margin-top: 2px;
      }
      
      .skill-bar {
        width: 100%;
        height: 8px;
        background-color: rgba(134, 134, 139, 0.3);
        border-radius: 4px;
        margin-top: 8px;
        margin-bottom: 16px;
      }
      
      .skill-fill {
        height: 100%;
        border-radius: 4px;
      }
      
      .toggle-switch {
        border: none;
        position: relative;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) inset;
        overflow: hidden;
      }
      
      .toggle-slider {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      }
      
      .logo-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
      }
      
      .animated-logo {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, float 3s ease-in-out infinite;
        opacity: 0.8;
      }
      
      .logo-percentage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
        font-size: 22px;
      }
      
      .logo-text {
        position: absolute;
        bottom: 20px;
        width: 100%;
        text-align: center;
        font-weight: 500;
      }
      
      .requirement-card {
        border: 1px solid rgba(134, 134, 139, 0.2);
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }
      
      .requirement-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }
      
      .requirement-title {
        display: flex;
        align-items: center;
        font-weight: 500;
      }
      
      .status-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 8px;
      }
      
      .match-percentage {
        display: flex;
        align-items: center;
      }
      
      .match-bar {
        width: 100px;
        height: 8px;
        background-color: rgba(134, 134, 139, 0.3);
        border-radius: 4px;
        overflow: hidden;
        margin-right: 8px;
      }
      
      .match-fill {
        height: 100%;
        border-radius: 4px;
      }
      
      .footer {
        text-align: center;
        font-size: 14px;
        margin-top: 12px;
      }
      
      /* Media queries for responsiveness */
      @media (max-width: 768px) {
        .header {
          flex-direction: column;
          align-items: flex-start;
        }
        
        .title-container {
          margin-bottom: 16px;
          width: 100%;
        }
        
        .controls-container {
          justify-content: space-between;
          width: 100%;
        }
        
        .grid {
          grid-template-columns: 1fr;
        }
        
        .tab-button {
          padding: 12px 16px;
          font-size: 13px;
        }
        
        .tab-content {
          padding: 16px;
        }
      }
      
      @media (max-width: 480px) {
        .tab-button {
          padding: 10px 12px;
          font-size: 12px;
        }
        
        .match-bar {
          width: 60px;
        }
        
        .requirement-header {
          flex-direction: column;
          align-items: flex-start;
        }
        
        .match-percentage {
          margin-top: 8px;
        }
        
        .tab-content {
          padding: 12px;
        }
        
        .animated-logo {
          width: 80px;
          height: 80px;
        }
        
        .logo-percentage {
          font-size: 18px;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [colors]);
  
  const requirements = [
    { 
      category: 'Minimum Qualifications', 
      items: [
        { 
          name: 'Bachelors degree in Computer Science or equivalent', 
          match: true, 
          resumeReference: 'MS in Computer Science from Purdue University',
          matchScore: 100
        },
        { 
          name: 'Foundation in object-oriented programming (preferably Java)', 
          match: true,
          resumeReference: 'Python, JavaScript, and Java experience across multiple roles',
          matchScore: 85 
        },
        { 
          name: 'Basic understanding of databases (SQL, NoSQL)', 
          match: true,
          resumeReference: 'SQL Server skills, ETL Data Validation, NYC Airbnb SQLite database',
          matchScore: 90
        },
        { 
          name: 'Linux/Unix commands', 
          match: true,
          resumeReference: 'Linux/Unix in skills section, used for development environment',
          matchScore: 70
        },
        { 
          name: 'Self-motivated with great organization skills', 
          match: true,
          resumeReference: 'Led multiple testing teams and initiatives at Accenture',
          matchScore: 85
        },
        { 
          name: 'Excellent written and verbal communication', 
          match: true,
          resumeReference: 'Created comprehensive test documentation, led cross-functional teams',
          matchScore: 90
        }
      ] 
    },
    { 
      category: 'Preferred Qualifications', 
      items: [
        { 
          name: 'Knowledge of REST APIs', 
          match: true,
          resumeReference: 'Comprehensive API testing frameworks with Postman and Java',
          matchScore: 95
        },
        { 
          name: 'Knowledge of Kafka or Message Queues', 
          match: true,
          resumeReference: 'Leveraged Kafka message queuing for reliable market data streaming',
          matchScore: 90
        },
        { 
          name: 'Creating effective test procedures and cases', 
          match: true,
          resumeReference: '100+ manual test scripts with 95% requirement coverage',
          matchScore: 95
        },
        { 
          name: 'Understanding of testing techniques', 
          match: true,
          resumeReference: 'Experience with automation, performance, UI and integration testing',
          matchScore: 95
        },
        { 
          name: 'Investigate, debug and triage problems', 
          match: true,
          resumeReference: 'Error handling for API interactions, reduced system errors by 7%',
          matchScore: 85
        },
        { 
          name: 'Bug tracking and test management systems', 
          match: true,
          resumeReference: 'Proper defects management using Jira and Agile methodologies',
          matchScore: 90
        },
        { 
          name: 'Build and deployment systems (Maven/GIT)', 
          match: true,
          resumeReference: 'Git experience, CI/CD pipelines in AWS Amplify',
          matchScore: 75
        },
        { 
          name: 'Open source testing frameworks (TestNG, Selenium)', 
          match: true,
          resumeReference: 'Selenium, Pytest, Cucumber, JUnit',
          matchScore: 90
        }
      ] 
    }
  ];
  
  const skills = [
    { name: 'Testing/QA', score: 95 },
    { name: 'API Testing', score: 95 },
    { name: 'Automated Testing', score: 90 },
    { name: 'Java Programming', score: 75 },
    { name: 'Python Programming', score: 90 },
    { name: 'Database Knowledge', score: 85 },
    { name: 'Linux/Unix', score: 70 },
    { name: 'Kafka/Message Queues', score: 90 },
    { name: 'CI/CD', score: 85 },
    { name: 'GitHub/Version Control', score: 80 },
    { name: 'Test Documentation', score: 90 },
    { name: 'Agile Methodologies', score: 90 }
  ];
  
  const strengths = [
    'Advanced degree (MS) in Computer Science',
    'Extensive experience with API testing using Postman',
    'Strong knowledge of asynchronous processing with Kafka',
    'Proven track record in automated testing',
    'Experience leading testing teams',
    'Strong data visualization and analytics skills'
  ];
  
  const overallMatch = 88;
  
  const MatchPercentage = ({ score }) => {
    let color = colors.danger;
    if (score >= 90) color = colors.success;
    else if (score >= 70) color = colors.warning;
    
    return (
      <div className="match-percentage">
        <div className="match-bar">
          <div className="match-fill" style={{ width: `${score}%`, backgroundColor: color }}></div>
        </div>
        <span style={{ color, fontWeight: 600 }}>{score}%</span>
      </div>
    );
  };
  
  return (
    <div style={{ 
      backgroundColor: colors.background, 
      minHeight: '100vh', 
      color: colors.dark,
    }}>
      <div className="container">
        <div className="header">
          <div className="title-container">
            <svg viewBox="0 0 24 24" width="32" height="32" fill={colors.dark}>
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginLeft: '10px', color: colors.dark }}>Resume Match Analysis</h1>
          </div>
          
          <div className="controls-container">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="toggle-switch"
              style={{ 
                backgroundColor: darkMode ? colors.primary : colors.secondary,
                width: `${toggleWidth}px`,
                height: `${toggleWidth * 0.5}px`, 
                borderRadius: `${toggleWidth * 0.25}px`
              }}
            >
              <div 
                className="toggle-slider"
                style={{ 
                  backgroundColor: colors.light,
                  width: `${sliderSize}px`,
                  height: `${sliderSize}px`,
                  position: 'absolute',
                  top: '50%',
                  left: darkMode ? `${toggleWidth - sliderSize - sliderOffset}px` : `${sliderOffset}px`,
                  transform: 'translateY(-50%)'
                }}
              ></div>
              <span style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
                Toggle Dark Mode
              </span>
            </button>
            
            <div style={{ 
              marginLeft: '20px',
              backgroundColor: colors.light,
              borderRadius: '20px',
              padding: '8px 16px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: overallMatch >= 90 ? colors.success : overallMatch >= 70 ? colors.warning : colors.danger,
                marginRight: '6px'
              }}></div>
              <span style={{ fontWeight: 'bold', color: colors.dark }}>{overallMatch}% Match</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="tabs">
            <button 
              className="tab-button"
              style={{ 
                borderBottom: activeTab === 'overview' ? `2px solid ${colors.primary}` : 'none',
                color: activeTab === 'overview' ? colors.primary : colors.secondary
              }}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className="tab-button"
              style={{ 
                borderBottom: activeTab === 'requirements' ? `2px solid ${colors.primary}` : 'none',
                color: activeTab === 'requirements' ? colors.primary : colors.secondary
              }}
              onClick={() => setActiveTab('requirements')}
            >
              Requirements
            </button>
            <button 
              className="tab-button"
              style={{ 
                borderBottom: activeTab === 'skills' ? `2px solid ${colors.primary}` : 'none',
                color: activeTab === 'skills' ? colors.primary : colors.secondary
              }}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'overview' && (
              <div>
                <div style={{ marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: colors.dark }}>Overall Match</h2>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${overallMatch}%`, 
                          background: `linear-gradient(90deg, ${colors.primary}, ${colors.highlight})`
                        }}
                      ></div>
                    </div>
                    <span style={{ marginLeft: '16px', fontSize: '22px', fontWeight: 'bold', color: colors.primary }}>{overallMatch}%</span>
                  </div>
                </div>
                
                <div className="grid">
                  <div>
                    <h3 style={{ fontWeight: 600, marginBottom: '12px', color: colors.success }}>Key Strengths</h3>
                    <ul className="list">
                      {strengths.map((strength, i) => (
                        <li key={i} className="list-item">
                          <span className="check-icon" style={{ color: colors.success }}>✓</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 style={{ fontWeight: 600, marginBottom: '12px', color: colors.primary }}>Apple Technology Match</h3>
                    <div className="logo-container">
                      <svg 
                        viewBox="0 0 24 24" 
                        width="120" 
                        height="120" 
                        fill={colors.primary}
                        className="animated-logo"
                      >
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                      <div className="logo-percentage" style={{ color: colors.light }}>{overallMatch}%</div>
                      <div className="logo-text" style={{ color: colors.primary }}>Perfect Match</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 style={{ fontWeight: 600, marginBottom: '12px', color: colors.dark }}>Qualification Categories</h3>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span>Minimum Qualifications</span>
                      <span style={{ color: colors.success }}>87%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: '87%', backgroundColor: colors.success }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span>Preferred Qualifications</span>
                      <span style={{ color: colors.primary }}>89%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: '89%', backgroundColor: colors.primary }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'requirements' && (
              <div>
                {requirements.map((category) => (
                  <div key={category.category} style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: colors.dark }}>{category.category}</h2>
                    <div>
                      {category.items.map((item) => (
                        <div key={item.name} className="requirement-card">
                          <div className="requirement-header">
                            <div className="requirement-title">
                              <div 
                                className="status-dot" 
                                style={{ backgroundColor: item.match ? colors.success : colors.danger }}
                              ></div>
                              <h3 style={{ fontWeight: 500 }}>{item.name}</h3>
                            </div>
                            <MatchPercentage score={item.matchScore} />
                          </div>
                          <p style={{ color: colors.secondary, fontSize: '14px' }}>
                            <span style={{ color: colors.primary, fontWeight: 500 }}>From Resume:</span> {item.resumeReference}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'skills' && (
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px', color: colors.dark }}>Skills Analysis</h2>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                  {skills.map((skill) => (
                    <div key={skill.name} style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: colors.dark }}>{skill.name}</span>
                        <span style={{ color: colors.primary }}>{skill.score}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-fill" 
                          style={{ 
                            width: `${skill.score}%`, 
                            backgroundColor: colors.primary 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="footer" style={{ color: colors.secondary }}>
          Resume analysis for Neha Pathak • {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default ResumeMatchVisualizer;