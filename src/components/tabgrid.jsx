import React, { useState } from 'react';
import '../styles/tabGrid.css';

import Tab from '../components/tab.jsx';
import HoverIcon from './hover-icon.jsx';

// Icon Images
import cssDark from '../assets/css-logo-dark.png';
import cssLight from '../assets/css-logo-light.png';
import htmlDark from '../assets/html-logo-dark.png';
import htmlLight from '../assets/html-logo-light.png';
import jsDark from '../assets/js-logo-dark.png';
import jsLight from '../assets/js-logo-light.png';
import reactDark from '../assets/react-logo-dark.png';
import reactLight from '../assets/react-logo-light.png';
import cpDark from '../assets/c++-logo-dark.png';
import cpLight from '../assets/c++-logo-light.png';
import figmaDark from '../assets/figma-logo-dark.png';
import figmaLight from '../assets/figma-logo-light.png';
import sqlDark from '../assets/sql-logo-dark.png';
import sqlLight from '../assets/sql-logo-light.png';
import nodeDark from '../assets/node-logo-dark.png';
import nodeLight from '../assets/node-logo-light.png';
import vscodeLight from '../assets/vscode-light.png';
import vscodeDark from '../assets/vscode-dark.png';
import pythonLight from '../assets/python-light.png';
import pythonDark from '../assets/python-dark.png';
import gitLight from '../assets/git-light.png';
import gitDark from '../assets/git-dark.png';
import googleLight from '../assets/google-cloud-light.png';
import googleDark from '../assets/google-cloud-dark.png';

const TabGrid = () => {
  const [activeTab, setActiveTab] = useState('Education');

  const tabs = [
    {
      key: 'Education',
      content: [
        {
          '2021-09 to 2025-05': 'Michgan State University',
          degree: 'Bachelors of Science in Computer Science',
          minor: 'Minor in Spanish Language',
          gpa: '3.6',
        },
        {
          '2022-05 to 2022-07': 'University College Dublin',
          degree: 'Study Abroad Experince',
        },
      ],
    },
    { key: 'Experiences' },
    { key: 'Skills' },
    { key: 'Activities' },
  ];

  return (
    <div className="file-wrapper">
      <div className="tab-titles">
        <button
          className={`tablink ${activeTab === 'Education' ? 'active' : ''}`}
          onClick={() => setActiveTab('Education')}
        >
          Education
        </button>
        <button
          className={`tablink ${activeTab === 'Experiences' ? 'active' : ''}`}
          onClick={() => setActiveTab('Experiences')}
        >
          Experiences
        </button>
        <button
          className={`tablink ${activeTab === 'Skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('Skills')}
        >
          Skills
        </button>
      </div>

      <div className="tab-area">
        <Tab
          title="Education"
          isActive={activeTab === 'Education'}
          content={
            <>
              <h4>Michigan State University, College of Engineering</h4>
              <p>
                <strong>Bachelor of Science, Computer Science</strong> — GPA:
                3.6
                <br />
                Minor in Spanish Language
              </p>
              <p>
                <em>East Lansing, MI</em>
              </p>
              <p>September 2021 – May 2025</p>

              <p>
                <strong>Relevant Coursework:</strong>
              </p>
              <p>
                Web Application Development (CSE 477), Mobile Application
                Development (CSE 476),
                <br />
                Database Systmes (CSE 480), Biometrics and Patter Recognition
                (CSE 402) Obejct Oriented
                <br />
                Software Design (CSE335), Computer Organization and Assembly
                Language (CSE 320)
              </p>

              <br></br>
              <hr className="divider"></hr>
              <br></br>
              <h4>University College Dublin</h4>
              <p>
                <strong>Study Abroad Experience</strong>
                <br />
                Courses: Irish History, Physics II, Physics Lab
              </p>
              <p>
                <em>Dublin, Ireland</em>
              </p>
              <p>May 2022 – July 2022</p>
              <p>
                <strong>Relevant Coursework:</strong>
              </p>
              <p>
                Physics II for Scientists and Engineers, Physics Lab, Irish
                History
              </p>
            </>
          }
        />
        <Tab
          title="Experiences"
          isActive={activeTab === 'Experiences'}
          content={
            <>
            <div className="title-row">
                <h4>Avfuel Corporation</h4>
                <p className="title-meta">Ann Arbor, MI</p>
            </div>
            <p>
                <div className="title-row">
                  <strong className="second-banner">
                    <em>Billing Associate</em>
                  </strong>
                  <br />
                  <p className="title-meta">August 2025 – Present</p>
                </div>

                <ul>
                  <li>
                    Utilize company software to manage customer invoices and identify discrepancies ensuring accuracy to consistently meet
                    strict daily deadlines
                  </li>
                  <li>
                    Collaborate with customers and sales team to determine and bill according to exceptions while delivering excellent customer
                    service
                  </li>
                </ul>
            </p>
            <div className="title-row">
                <h4>NetJets Airport Capacity and Ground Space Management</h4>
                <p className="title-meta">East Lansing, MI</p>
              </div>
            <p>
                <div className="title-row">
                  <strong className="second-banner">
                    <em>Student Capstone Experience</em>
                  </strong>
                  <br />
                  <p className="title-meta">January 2025 – May 2025</p>
                </div>

                <ul>
                  <li>
                    Enhanced airport capacity decision making by delivering a full-stack web application with real-time monitoring,
                    interactive visualizations, recommendations, leveraging AWS (Amplify, API Gateway, RDS), Node.js, React.js, and
                    Google Maps API
                  </li>
                  <li>
                    Developed a dynamic recommendation engine, identified over-capacity risks, and 100% capacity scenarios,
                    optimizing aircraft parking and rerouting by integrating live FAA flight data with airport capacity model
                  </li>
                  <li>
                    Collaborated with a team of 6 through full software development lifecycle, from requirements gathering to AWS
                    deployment, ensuring seamless integration of backend services, frontend UI, and live data feeds
                  </li>
                  <li>
                    <a
                      className="link-text"
                      href="http://www.capstone.cse.msu.edu/2025-01/projects/netjets/"
                      target="_blank"
                    >
                      Earned the Amazon Sigma Award for best overall capstone, recognizing excellence in formal project planning,
                      presentation, software, and project video
                    </a>
                  </li>
                </ul>
                <br></br>
              </p>

              <div className="title-row">
                <h4>Michigan State University, College of Education</h4>
                <p className="title-meta">East Lansing, MI</p>
              </div>

              <p>
                <div className="title-row">
                  <strong className="second-banner">
                    <em>Student Tech</em>
                  </strong>
                  <br />
                  <p className="title-meta">September 2021 – May 2025</p>
                </div>

                <ul>
                  <li>
                    Minimized faculty and staff downtime by initiating contact within 24 hours to evaluate and resolve first-level
                    technical issues, troubleshoot hardware malfunctions, software bugs, and connectivity issues
                  </li>
                  <li>
                    Configured Mac and Windows desktop computers, laptops, and peripherals by installing operating systems,
                    setting up user profiles, and deploying essential software such as antivirus programs and productivity suites
                    using JAMF for automated MacOS deployment and manual deployment for windows systems
                  </li>
                  <li>
                    Performed fresh installs of operating systems, including system and driver updates to university devices, as well
                    as routine maintenance including antivirus scans to ensure optimal performance, security, and reliability
                  </li>
                </ul>
              </p>

              <br></br>

              <div className="title-row">
                <h4>Avfuel Corporation</h4>
                <p className="title-meta">Ann Arbor, MI</p>
              </div>

              <p>
                <div className="title-row">
                  <strong className="second-banner">
                    <em>Seasonal Intern</em>
                  </strong>
                  <br />
                  <p className="title-meta">June 2022 – August 2023</p>
                </div>

                <ul>
                  <li>
                    Improved organizational efficiency by developing a streamlined system to scan, file and archived employee
                    documents for over 400 staff members: purified and prepared data for migration to a new payroll system
                  </li>
                  <li>
                    Managed and updated accounting and tax databases, preparing data for over 100,000 accounts for seamless
                    migration to a new accounting system
                  </li>
                </ul>
              </p>

              <br></br>

            

              
            </>
          }
        />
        <Tab
          // title="Skills"
          isActive={activeTab === 'Skills'}
          content={
            <>
              <h2>Languages and Frameworks</h2>
              <div className="skills-grid">
                <div className="tooltip">
                  <HoverIcon
                    darkSrc={jsDark}
                    lightSrc={jsLight}
                    alt="JS Logo"
                  />
                  <div className="tooltip-text">Javascript</div>
                </div>
                <div className="tooltip">
                  <HoverIcon
                    darkSrc={htmlDark}
                    lightSrc={htmlLight}
                    alt="HTML Logo"
                  />
                  <div className="tooltip-text">HTML</div>
                </div>

                <div className="tooltip">
                  <HoverIcon
                    darkSrc={cssDark}
                    lightSrc={cssLight}
                    alt="CSS Logo"
                  />
                  <div className="tooltip-text">CSS</div>
                </div>
                <div className="tooltip">
                  <HoverIcon
                    darkSrc={reactDark}
                    lightSrc={reactLight}
                    alt="React Logo"
                  />
                  <div className="tooltip-text">React.js</div>
                </div>
                <div className="tooltip">
                  <HoverIcon
                    darkSrc={cpDark}
                    lightSrc={cpLight}
                    alt="C++ Logo"
                  />
                  <div className="tooltip-text">C++</div>
                </div>
                <div className="tooltip">
                  <HoverIcon
                    darkSrc={sqlDark}
                    lightSrc={sqlLight}
                    alt="SQL Logo"
                  />
                  <div className="tooltip-text">SQL</div>
                </div>
                <div className="tooltip">
                  <HoverIcon
                    darkSrc={nodeDark}
                    lightSrc={nodeLight}
                    alt="Node Logo"
                  />
                  <div className="tooltip-text">Node.js</div>
                </div>

                <div className="tooltip">
                  <HoverIcon
                    darkSrc={pythonDark}
                    lightSrc={pythonLight}
                    alt="Python Logo"
                  />
                  <div className="tooltip-text">Python</div>
                </div>
              </div>

              <h2>Developer and Design Tools</h2>
              <div className="skills-grid">
                <div className="tooltip">
                  <HoverIcon
                    darkSrc={figmaDark}
                    lightSrc={figmaLight}
                    alt="Figma Logo"
                  />
                  <div className="tooltip-text">Figma</div>
                </div>

                <div className="tooltip">
                  <HoverIcon
                    darkSrc={vscodeDark}
                    lightSrc={vscodeLight}
                    alt="VSCode Logo"
                  />
                  <div className="tooltip-text">VS Code</div>
                </div>
                <div className="tooltip">
                  <HoverIcon
                    darkSrc={gitDark}
                    lightSrc={gitLight}
                    alt="Git Logo"
                  />
                  <div className="tooltip-text">Git</div>
                </div>
                <div className="tooltip">
                  <HoverIcon
                    darkSrc={googleDark}
                    lightSrc={googleLight}
                    alt="Google Cloud Platform Logo"
                  />
                  <div className="tooltip-text">Google Cloud Platform</div>
                </div>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default TabGrid;
