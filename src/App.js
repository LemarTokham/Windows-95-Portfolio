import React, { useState } from "react";
import './App.css'


function App(){
  const [activeWindows, setActiveWindows] = useState(['about'])
  const [focusedWindow, setFocusedWindow] = useState(null)

  const openWindow = (windowName) => {
    // Make sure the same window can't be opened twice
    if (!activeWindows.includes(windowName)) {
      setActiveWindows([...activeWindows, windowName])
    }
    setFocusedWindow(windowName) // Window we just opened is now our focus
    console.log(focusedWindow)
  }

  const closeWindow = (windowName) => {
    setActiveWindows(activeWindows.filter(windonw => windonw !== windowName)) // No windows open
    if (focusedWindow === windowName){
      setFocusedWindow(null)
    }
  }

  const focusWondow = (windowName) => {
    setFocusedWindow(windowName) // Clicked window is brought to front
  }

  return (
    <div className="windows95-container">
      {/* Desktop */}
      <div>
        <h1 style={{color: 'white', textAlign: 'left', 'marginTop': '50px'}}>Welcome to Lemar's Windows 95</h1>

        {/* Desktop icons */}
        <DesktopIcon 
        icon="👤"
        label={'About Me'}
        position={{top: '150px', left: '50px'}}
        onClick={() => openWindow('about')}
        />

        <DesktopIcon 
        icon="💼"
        label={'Experience'}
        position={{top: '250px', left: '50px'}}
        onClick={() => openWindow('experience')}
        />

        <DesktopIcon 
        icon="💻"
        label={'Projects'}
        position={{top: '350px', left: '50px'}}
        onClick={() => openWindow('projects')}
        />


        <DesktopIcon 
        icon="⚙️"
        label={'Skills'}
        position={{top: '450px', left: '50px'}}
        onClick={() => openWindow('skills')}
        />

        <DesktopIcon 
        icon="📚"
        label={'Education'}
        position={{top: '550px', left: '50px'}}
        onClick={() => openWindow('education')}
        />

        <Window
        title="About Me - README.txt"
        isOpen={activeWindows.includes('about')}
        onClose={() => closeWindow('about')}
        onFocus={() => focusWondow('about')}
        position={{top: '150px', left:'200px'}}
        zIndexPos={focusedWindow === 'about'? 100:10} // z-index controls position on z axis, giving a sort of layering effect
        >
        <div className="about-header">
            <h2>LEMAR TOKHAM</h2>
            <p>System Administrator at Life.exe</p>
          </div>
          
          <div className="ascii-art">
            &gt; Initializing profile.bat...<br/>
            &gt; Loading passion for technology... [████████████] 100%<br/>
            &gt; Status: Ready to innovate!
          </div>

          <p>Hello World! I'm a Computer Science student at the University of Liverpool, currently on my year in industry as a Software Engineering Intern at JPMorgan Chase & Co.</p>
          <br/>
          <p>I'm passionate about leveraging technology to solve complex problems and drive innovation. With a focus on AI and Data Science, I love building scalable applications and exploring new technologies.</p>
          <br/>
          <h3>Quick Stats:</h3>
          <ul>
            <li>Location: Glasgow (Internship) / Liverpool (University)</li>
            <li>Languages: English (Fluent), French (Native)</li>
            <li>Featuring in Powerful Media's Future Leaders Magazine 2025</li>
            <li>2nd Place - BNY Mellon Hackathon</li>
            <li>Interests: Basketball, Chess, Hiking, Climbing, Mountain Biking</li>
          </ul>
        </Window>

        <Window
        title="Projects.exe"
        isOpen={activeWindows.includes('projects')}
        onClose={() => closeWindow('projects')}
        onFocus={() => focusWondow('projects')}
        position={{top: '250px', left:'210px'}}
        zIndexPos={focusedWindow === 'projects'? 100:10}

        >
        <h2>PROJECT PORTFOLIO</h2>
          
        <div className="section">
          <h3><a href="https://github.com/LemarTokham/Bus-Tracker-V2" target="_blank">Bus Tracker Dashboard</a></h3>
          <ul>
            <li>Real-time bus tracking for Liverpool using Google Maps API</li>
            <li>Data integration with GOV.UK Find Open Bus Data</li>
            <li>Built with Python/Flask backend and TypeScript/React frontend</li>
          </ul>
        </div>

        <div className="section">
          <h3><a href="https://github.com/LemarTokham/Context-Buddy/tree/main" target="_blank">Context Buddy - Chrome Extension</a></h3>
          <ul>
            <li>Chrome extension that gives smart definitions for highlighted text on any webpage</li>
            <li>Uses OpenAI API to understand context by looking at surrounding content</li>
          </ul>
        </div>

          <div className="section">
            <h3><a href="https://github.com/Axiom-208/Youtube-Clippa" target="_blank">Axiom: AI-Powered Video Content Generator</a></h3>
            <p><em>Team Project (6 members)</em></p>
            <ul>
              <li>Independently built complete video processing pipeline</li>
              <li>Tech stack: Python/Flask, ffmpeg, OpenAI APIs, Firebase</li>
              <li>Optimized performance by 80% - reduced 10+ min videos processing from 5+ min to under 1 min</li>
              <li>Implemented multithreaded background processing with real-time job tracking</li>
            </ul>
          </div>

          <div className="section">
            <h3>BNY Mellon Hackathon - 2nd Place</h3>
            <ul>
              <li>Solved complex coding challenges on HackerRank</li>
              <li>Demonstrated proficiency in algorithms and data structures</li>
              <li>Collaborated on OSINT challenges simulating real-world investigations</li>
            </ul>


          <div>
            (More coming...)
          </div>
          </div>
        </Window>

        <Window
        title="Experience.doc"
        isOpen={activeWindows.includes('experience')}
        onClose={() => closeWindow('experience')}
        onFocus={() => focusWondow('experience')}
        position={{top: '230px', left:'430px'}}
        zIndexPos={focusedWindow === 'experience'? 100:10}
        >
       <div className="section">
            <h3>JPMorgan Chase & Co. - Software Engineering Intern</h3>
            <p><em>Glasgow | June 2025 - June 2026</em></p>
            <ul>
              <li>Developing scalable web application for Market Risk team using Python/Flask and TypeScript/React</li>
            </ul>
          </div>

          <div className="section">
            <h3>University of Liverpool - Teaching Assistant</h3>
            <p><em>September 2024 - May 2025</em></p>
            <ul>
              <li>Teaching AI and algorithmic concepts to 70+ undergraduate students</li>
              <li>Covering search algorithms, intelligent agents, knowledge representation</li>
              <li>Topics include machine learning, complexity analysis, and reasoning under uncertainty</li>
            </ul>
          </div>

          <div className="section">
            <h3>Liverpool Hyperloop - Head of Software and Electronics</h3>
            <p><em>September 2024 - June 2025</em></p>
            <ul>
              <li>Leading research on scalable control architectures for Hyperloop systems</li>
              <li>Investigating Arduino and Raspberry Pi solutions for real-time communication</li>
              <li>Collaborating with multidisciplinary team using agile methodologies</li>
            </ul>
          </div>
        </Window>

        <Window
        title="Skills.dll"
        isOpen={activeWindows.includes('skills')}
        onClose={() => closeWindow('skills')}
        onFocus={() => focusWondow('skills')}
        position={{top: '150px', left:'350px'}}
        zIndexPos={focusedWindow === 'skills'? 100:10}
        >
        <h2>TECHNICAL SKILLS</h2>
          
          <div className="section">
            <h3>Programming Languages:</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">React</span>
            </div>
          </div>

          <div className="section">
            <h3>Tools & Technologies:</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">BitBucket</span>
              <span className="skill-tag">AWS (In Progress)</span>
              <span className="skill-tag">Google Cloud Platform</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">Linux</span>
            </div>
          </div>

          <div className="section">
            <h3>Testing Frameworks:</h3>
            <div className="skill-tags">
              <span className="skill-tag">Jest</span>
              <span className="skill-tag">React Testing Library</span>
              <span className="skill-tag">Pytest</span>
            </div>
          </div>

          <div className="section">
            <h3>Soft Skills:</h3>
            <ul>
              <li>Problem-solving & Analytical Thinking</li>
              <li>Team Leadership & Collaboration</li>
              <li>Communication & Adaptability</li>
              <li>Agile Methodologies</li>
            </ul>
          </div>
        </Window>

        <Window
        title="Education.doc"
        isOpen={activeWindows.includes('education')}
        onClose={() => closeWindow('education')}
        onFocus={() => focusWondow('education')}
        position={{top: '170px', left:'300px'}}
        zIndexPos={focusedWindow === 'education'? 100:10}
        >
        <h2>EDUCATION</h2>
          
          <div className="section">
            <h3>University of Liverpool</h3>
            <p><strong>B.Sc. in Computer Science with Year in Industry</strong></p>
            <p><em>Expected Graduation: July 2027</em></p>
            
            <p><strong>Concentrations:</strong> Artificial Intelligence and Data Science</p>
            
            <h3>Key Coursework & Grades:</h3>
            <ul>
              <li>Object-Oriented Programming in Java: 94%</li>
              <li>Complexity of Algorithms: 85%</li>
              <li>Software Engineering: 80%</li>
              <li>Analytic Techniques (Calculus & Linear Algebra): 80%</li>
              <li>Data Science: 75%</li>
              <li>Advanced Artificial Intelligence: 74%</li>
              <li>Computer-based Trading in Financial Markets: 74%</li>
            </ul>
          </div>

          <div className="section">
            <h3>Awards & Recognition:</h3>
            <ul>
              <li>Best Teaching Assistant Finalist - Liverpool CS Awards</li>
              <li>Featuring in Powerful Media's Future Leaders Magazine 2025</li>
              <li>2nd Place - BNY Mellon Hackathon</li>
            </ul>
          </div>
        </Window>

      
      </div>


      {/* Task bar*/}
      <div className="taskbar">
        <button className="start-button"
        onClick={() => alert('Welcome to Lemar\'s Portfolio OS! \n\nBuilt with React \nStyled like Windows 95 \n\nClick around and explore!!!!')}>
          <span className="start-logo">💻</span>
          Start
        </button>
        <div className="taskbar-windows">
          {activeWindows.map(window => (
            <button
            key={window}
            className={`taskbar-window ${focusedWindow === window ? 'active' : ''}`}
            onClick={() => focusWondow(window)}
            >
              {window}
            </button>
          ))}

        </div>
        <div className="taskbar-clock">
          Clock is here
        </div>
      </div>
    </div>
  )
}


function Window({title, isOpen, onClose, position,zIndexPos, onFocus, children}) {
    if (!isOpen) {
        return null
    }

    return (
        <div className="window" 
        style={{top: position.top, left: position.left, zIndex: zIndexPos}}
        onMouseDown={onFocus}
        >
            <div className="window-titlebar">
                <span>{title}</span>
                <button onClick={onClose}>X</button>
            </div>
            <div className="window-content">
                {children} 
            </div>
        </div>
    )
}

function DesktopIcon({icon, label, position, onClick}){
  return (
    <div className="desktop-icon" 
        style={{top: position.top, left: position.left}}
        onClick={onClick}>
          <div className="desktop-icon-image">{icon}</div>
          <div className="desktop-icon-text">{label}</div>
    </div>
  )
}

export default App
