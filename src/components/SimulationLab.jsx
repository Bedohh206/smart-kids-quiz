import React, { useState, useEffect, useRef } from "react";
import "./SimulationLab.css";

// Available simulations - each subject has unique relevant simulations
const SIMULATIONS = {
  math: {
    fractions: {
      name: "🥧 Fraction Visualizer",
      description: "Visualize and compare fractions with interactive pie charts"
    },
    geometry: {
      name: "📐 Shape Explorer",
      description: "Calculate area and perimeter of different shapes"
    }
  },
  algebra: {
    equations: {
      name: "🧮 Equation Balance",
      description: "Balance equations and solve for variables"
    },
    graphs: {
      name: "📊 Function Grapher",
      description: "Plot linear and quadratic functions"
    }
  },
  geometry: {
    shapes: {
      name: "📐 Shape Explorer",
      description: "Explore geometric shapes, area, and perimeter"
    },
    angles: {
      name: "📏 Angle Measurer",
      description: "Measure and create different angle types"
    }
  },
  science: {
    pendulum: {
      name: "⚖️ Pendulum Motion",
      description: "Explore gravity, length, and oscillation"
    },
    solar: {
      name: "🌍 Solar System",
      description: "Interactive planetary orbits and motion"
    }
  },
  biology: {
    cells: {
      name: "🔬 Cell Explorer",
      description: "Explore plant and animal cell structures"
    },
    ecosystems: {
      name: "🌱 Ecosystem Simulator",
      description: "Model food chains and energy flow"
    }
  },
  chemistry: {
    molecules: {
      name: "🧪 Molecule Builder",
      description: "Build and explore chemical compounds"
    },
    reactions: {
      name: "⚗️ Reaction Lab",
      description: "Mix reactants and observe products"
    }
  },
  physics: {
    pendulum: {
      name: "⚖️ Pendulum Lab",
      description: "Study periodic motion and energy"
    },
    forces: {
      name: "⚡ Forces & Motion",
      description: "Explore Newton's laws of motion"
    }
  },
  geography: {
    continents: {
      name: "🗺️ World Explorer",
      description: "Explore continents, countries, and landmarks"
    },
    climate: {
      name: "🌡️ Climate Zones",
      description: "Discover different climate regions"
    }
  },
  history: {
    timeline: {
      name: "📜 Historical Timeline",
      description: "Explore major events through time"
    },
    civilizations: {
      name: "🏛️ Ancient Civilizations",
      description: "Discover ancient cultures and empires"
    }
  },
  computer: {
    binary: {
      name: "💾 Binary Converter",
      description: "Convert between binary and decimal"
    },
    logic: {
      name: "🔌 Logic Gates",
      description: "Explore AND, OR, NOT gates"
    }
  },
  coding: {
    algorithms: {
      name: "🤖 Algorithm Visualizer",
      description: "Watch sorting and searching algorithms"
    },
    loops: {
      name: "🔄 Loop Simulator",
      description: "Understand loops and iterations"
    }
  },
  music: {
    notes: {
      name: "🎵 Note Trainer",
      description: "Learn musical notes and scales"
    },
    rhythm: {
      name: "🥁 Rhythm Maker",
      description: "Create and play rhythmic patterns"
    }
  },
  art: {
    colors: {
      name: "🎨 Color Mixer",
      description: "Mix primary colors to create new ones"
    },
    symmetry: {
      name: "🖼️ Symmetry Studio",
      description: "Create symmetrical patterns and designs"
    }
  },
  health: {
    nutrition: {
      name: "🍎 Nutrition Calculator",
      description: "Learn about balanced meals and nutrients"
    },
    exercise: {
      name: "💪 Exercise Tracker",
      description: "Track activities and calculate calories"
    }
  },
  english: {
    grammar: {
      name: "📝 Grammar Builder",
      description: "Practice parts of speech and sentence structure"
    },
    vocabulary: {
      name: "📚 Word Explorer",
      description: "Build vocabulary with interactive games"
    }
  },
  // Continents - use geography-themed simulations
  africa: {
    continents: {
      name: "🌍 Africa Explorer",
      description: "Explore African geography and wildlife"
    },
    climate: {
      name: "🌡️ African Climate",
      description: "Discover Africa's diverse climate zones"
    }
  },
  asia: {
    continents: {
      name: "🌏 Asia Explorer",
      description: "Explore Asian geography and culture"
    },
    climate: {
      name: "🌡️ Asian Climate",
      description: "Discover Asia's diverse climates"
    }
  },
  europe: {
    continents: {
      name: "🗺️ Europe Explorer",
      description: "Explore European geography and history"
    },
    climate: {
      name: "🌡️ European Climate",
      description: "Discover Europe's climate patterns"
    }
  },
  northamerica: {
    continents: {
      name: "🌎 North America Explorer",
      description: "Explore North American geography"
    },
    climate: {
      name: "🌡️ North American Climate",
      description: "Discover varied climate zones"
    }
  },
  southamerica: {
    continents: {
      name: "🌎 South America Explorer",
      description: "Explore South American geography"
    },
    climate: {
      name: "🌡️ South American Climate",
      description: "Discover tropical and temperate zones"
    }
  },
  australia: {
    continents: {
      name: "🦘 Australia Explorer",
      description: "Explore Australian geography and wildlife"
    },
    climate: {
      name: "🌡️ Australian Climate",
      description: "Discover unique climate patterns"
    }
  },
  antarctica: {
    continents: {
      name: "🧊 Antarctica Explorer",
      description: "Explore the frozen continent"
    },
    climate: {
      name: "❄️ Polar Climate",
      description: "Study extreme cold environments"
    }
  }
};

// Fraction Visualizer Component
function FractionVisualizer() {
  const [numerator, setNumerator] = useState(1);
  const [denominator, setDenominator] = useState(4);
  
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw fraction visualization
    const pieSize = Math.min(width, height) - 40;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = pieSize / 2;
    
    // Draw complete circle
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Draw divisions
    for (let i = 0; i < denominator; i++) {
      const angle = (2 * Math.PI / denominator) * i - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + radius * Math.cos(angle),
        centerY + radius * Math.sin(angle)
      );
      ctx.stroke();
    }
    
    // Fill the fraction parts
    ctx.fillStyle = 'rgba(79, 172, 254, 0.7)';
    for (let i = 0; i < Math.min(numerator, denominator); i++) {
      const startAngle = (2 * Math.PI / denominator) * i - Math.PI / 2;
      const endAngle = (2 * Math.PI / denominator) * (i + 1) - Math.PI / 2;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fill();
    }
  }, [numerator, denominator]);
  
  const decimal = denominator > 0 ? (numerator / denominator).toFixed(2) : 0;
  const percentage = denominator > 0 ? ((numerator / denominator) * 100).toFixed(1) : 0;
  
  return (
    <div className="simulation-content">
      <h3>🥧 Fraction Visualizer</h3>
      <canvas ref={canvasRef} width={300} height={300} className="sim-canvas" />
      
      <div className="sim-controls">
        <div className="control-group">
          <label>Numerator: {numerator}</label>
          <input
            type="range"
            min="0"
            max={denominator}
            value={numerator}
            onChange={(e) => setNumerator(parseInt(e.target.value))}
            className="slider"
          />
        </div>
        
        <div className="control-group">
          <label>Denominator: {denominator}</label>
          <input
            type="range"
            min="1"
            max="12"
            value={denominator}
            onChange={(e) => {
              const newDenom = parseInt(e.target.value);
              setDenominator(newDenom);
              if (numerator > newDenom) setNumerator(newDenom);
            }}
            className="slider"
          />
        </div>
      </div>
      
      <div className="sim-results">
        <div className="result-item">
          <span className="result-label">Fraction:</span>
          <span className="result-value">{numerator}/{denominator}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Decimal:</span>
          <span className="result-value">{decimal}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Percentage:</span>
          <span className="result-value">{percentage}%</span>
        </div>
      </div>
    </div>
  );
}

// Pendulum Simulation Component
function PendulumSimulation() {
  const [length, setLength] = useState(150);
  const [angle, setAngle] = useState(45);
  const [isRunning, setIsRunning] = useState(false);
  const [currentAngle, setCurrentAngle] = useState(45);
  const [velocity, setVelocity] = useState(0);
  
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    if (!isRunning) {
      setCurrentAngle(angle);
      return;
    }
    
    let angleRad = (currentAngle * Math.PI) / 180;
    let vel = velocity;
    const gravity = 0.5;
    const damping = 0.995;
    
    const animate = () => {
      const acceleration = (-gravity / length) * Math.sin(angleRad) * 500;
      vel += acceleration;
      vel *= damping;
      angleRad += vel * 0.01;
      
      const newAngle = (angleRad * 180) / Math.PI;
      setCurrentAngle(newAngle);
      setVelocity(vel);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, currentAngle, velocity, length, angle]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Origin point
    const originX = width / 2;
    const originY = 50;
    
    // Calculate pendulum position
    const angleRad = (currentAngle * Math.PI) / 180;
    const bobX = originX + length * Math.sin(angleRad);
    const bobY = originY + length * Math.cos(angleRad);
    
    // Draw pivot
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.arc(originX, originY, 8, 0, 2 * Math.PI);
    ctx.fill();
    
    // Draw string
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(bobX, bobY);
    ctx.stroke();
    
    // Draw bob
    ctx.fillStyle = '#4facfe';
    ctx.beginPath();
    ctx.arc(bobX, bobY, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 3;
    ctx.stroke();
  }, [currentAngle, length]);
  
  const period = 2 * Math.PI * Math.sqrt(length / 980);
  
  return (
    <div className="simulation-content">
      <h3>⚖️ Pendulum Motion</h3>
      <canvas ref={canvasRef} width={300} height={300} className="sim-canvas" />
      
      <div className="sim-controls">
        <div className="control-group">
          <label>Length: {length}px</label>
          <input
            type="range"
            min="50"
            max="200"
            value={length}
            onChange={(e) => {
              setLength(parseInt(e.target.value));
              if (!isRunning) setCurrentAngle(angle);
            }}
            className="slider"
            disabled={isRunning}
          />
        </div>
        
        <div className="control-group">
          <label>Initial Angle: {angle}°</label>
          <input
            type="range"
            min="-90"
            max="90"
            value={angle}
            onChange={(e) => {
              const newAngle = parseInt(e.target.value);
              setAngle(newAngle);
              if (!isRunning) setCurrentAngle(newAngle);
            }}
            className="slider"
            disabled={isRunning}
          />
        </div>
      </div>
      
      <div className="sim-actions">
        <button 
          className="sim-btn primary"
          onClick={() => {
            setIsRunning(!isRunning);
            if (isRunning) {
              setVelocity(0);
            }
          }}
        >
          {isRunning ? '⏸ Pause' : '▶ Start'}
        </button>
        <button 
          className="sim-btn"
          onClick={() => {
            setIsRunning(false);
            setCurrentAngle(angle);
            setVelocity(0);
          }}
        >
          🔄 Reset
        </button>
      </div>
      
      <div className="sim-results">
        <div className="result-item">
          <span className="result-label">Current Angle:</span>
          <span className="result-value">{currentAngle.toFixed(1)}°</span>
        </div>
        <div className="result-item">
          <span className="result-label">Period:</span>
          <span className="result-value">{period.toFixed(2)}s</span>
        </div>
      </div>
    </div>
  );
}

// Shape Explorer Component
function ShapeExplorer() {
  const [shape, setShape] = useState('rectangle');
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(80);
  const [radius, setRadius] = useState(50);
  
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const cWidth = canvas.width;
    const cHeight = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, cWidth, cHeight);
    
    ctx.fillStyle = '#4facfe';
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 3;
    
    const centerX = cWidth / 2;
    const centerY = cHeight / 2;
    
    if (shape === 'rectangle') {
      ctx.fillRect(centerX - width / 2, centerY - height / 2, width, height);
      ctx.strokeRect(centerX - width / 2, centerY - height / 2, width, height);
    } else if (shape === 'circle') {
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    } else if (shape === 'triangle') {
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - height / 2);
      ctx.lineTo(centerX - width / 2, centerY + height / 2);
      ctx.lineTo(centerX + width / 2, centerY + height / 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }, [shape, width, height, radius]);
  
  const calculateArea = () => {
    if (shape === 'rectangle') return width * height;
    if (shape === 'circle') return Math.PI * radius * radius;
    if (shape === 'triangle') return (width * height) / 2;
    return 0;
  };
  
  const calculatePerimeter = () => {
    if (shape === 'rectangle') return 2 * (width + height);
    if (shape === 'circle') return 2 * Math.PI * radius;
    if (shape === 'triangle') return width + 2 * Math.sqrt((width / 2) ** 2 + height ** 2);
    return 0;
  };
  
  return (
    <div className="simulation-content">
      <h3>📐 Shape Explorer</h3>
      <canvas ref={canvasRef} width={300} height={300} className="sim-canvas" />
      
      <div className="sim-controls">
        <div className="control-group">
          <label>Shape:</label>
          <div className="preset-buttons">
            <button className={`preset-btn ${shape === 'rectangle' ? 'active' : ''}`} onClick={() => setShape('rectangle')}>Rectangle</button>
            <button className={`preset-btn ${shape === 'circle' ? 'active' : ''}`} onClick={() => setShape('circle')}>Circle</button>
            <button className={`preset-btn ${shape === 'triangle' ? 'active' : ''}`} onClick={() => setShape('triangle')}>Triangle</button>
          </div>
        </div>
        
        {shape === 'circle' ? (
          <div className="control-group">
            <label>Radius: {radius}px</label>
            <input type="range" min="20" max="100" value={radius} onChange={(e) => setRadius(parseInt(e.target.value))} className="slider" />
          </div>
        ) : (
          <>
            <div className="control-group">
              <label>Width: {width}px</label>
              <input type="range" min="30" max="200" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} className="slider" />
            </div>
            <div className="control-group">
              <label>Height: {height}px</label>
              <input type="range" min="30" max="200" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} className="slider" />
            </div>
          </>
        )}
      </div>
      
      <div className="sim-results">
        <div className="result-item">
          <span className="result-label">Area:</span>
          <span className="result-value">{calculateArea().toFixed(2)} px²</span>
        </div>
        <div className="result-item">
          <span className="result-label">Perimeter:</span>
          <span className="result-value">{calculatePerimeter().toFixed(2)} px</span>
        </div>
      </div>
    </div>
  );
}

// Solar System Component
function SolarSystem() {
  const canvasRef = useRef(null);
  const [speed, setSpeed] = useState(1);
  const [isRunning, setIsRunning] = useState(true);
  const animationRef = useRef(null);
  const angleRef = useRef(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const planets = [
      { name: 'Mercury', distance: 40, size: 4, color: '#8c7853', speed: 0.04 },
      { name: 'Venus', distance: 60, size: 7, color: '#ffc649', speed: 0.03 },
      { name: 'Earth', distance: 85, size: 7, color: '#4facfe', speed: 0.02 },
      { name: 'Mars', distance: 110, size: 5, color: '#ff6b6b', speed: 0.015 }
    ];
    
    const animate = () => {
      if (!isRunning) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw sun
      ctx.fillStyle = '#ffd93d';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = '#ffb700';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw orbits and planets
      planets.forEach((planet) => {
        // Draw orbit
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.distance, 0, 2 * Math.PI);
        ctx.stroke();
        
        // Calculate planet position
        const angle = angleRef.current * planet.speed * speed;
        const x = centerX + planet.distance * Math.cos(angle);
        const y = centerY + planet.distance * Math.sin(angle);
        
        // Draw planet
        ctx.fillStyle = planet.color;
        ctx.beginPath();
        ctx.arc(x, y, planet.size, 0, 2 * Math.PI);
        ctx.fill();
      });
      
      angleRef.current += 0.1;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    if (isRunning) {
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, speed]);
  
  return (
    <div className="simulation-content">
      <h3>🌌 Solar System</h3>
      <canvas ref={canvasRef} width={300} height={300} className="sim-canvas" style={{ background: '#000' }} />
      
      <div className="sim-controls">
        <div className="control-group">
          <label>Speed: {speed}x</label>
          <input type="range" min="0.1" max="3" step="0.1" value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value))} className="slider" />
        </div>
      </div>
      
      <div className="sim-actions">
        <button className="sim-btn primary" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? '⏸ Pause' : '▶ Start'}
        </button>
        <button className="sim-btn" onClick={() => { angleRef.current = 0; }}>
          🔄 Reset
        </button>
      </div>
      
      <div className="sim-info">
        <p>Watch the inner planets orbit around the Sun!</p>
      </div>
    </div>
  );
}

// Molecule Builder Component
function MoleculeBuilder() {
  const [molecules, setMolecules] = useState([
    { symbol: 'H', count: 2, color: '#ff6b6b' },
    { symbol: 'O', count: 1, color: '#4ecdc4' }
  ]);
  
  const [moleculeName, setMoleculeName] = useState('Water (H₂O)');
  
  const presetMolecules = {
    water: { atoms: [{ symbol: 'H', count: 2, color: '#ff6b6b' }, { symbol: 'O', count: 1, color: '#4ecdc4' }], name: 'Water (H₂O)' },
    co2: { atoms: [{ symbol: 'C', count: 1, color: '#95e1d3' }, { symbol: 'O', count: 2, color: '#4ecdc4' }], name: 'Carbon Dioxide (CO₂)' },
    methane: { atoms: [{ symbol: 'C', count: 1, color: '#95e1d3' }, { symbol: 'H', count: 4, color: '#ff6b6b' }], name: 'Methane (CH₄)' },
    ammonia: { atoms: [{ symbol: 'N', count: 1, color: '#a8e6cf' }, { symbol: 'H', count: 3, color: '#ff6b6b' }], name: 'Ammonia (NH₃)' }
  };
  
  const loadMolecule = (key) => {
    const molecule = presetMolecules[key];
    setMolecules(molecule.atoms);
    setMoleculeName(molecule.name);
  };
  
  return (
    <div className="simulation-content">
      <h3>🧪 Molecule Builder</h3>
      
      <div className="molecule-display">
        <div className="molecule-visual">
          {molecules.map((atom, idx) => (
            <div key={idx} className="atom-group">
              {Array.from({ length: atom.count }).map((_, i) => (
                <div 
                  key={i}
                  className="atom"
                  style={{ backgroundColor: atom.color }}
                >
                  {atom.symbol}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="molecule-name">{moleculeName}</div>
      </div>
      
      <div className="preset-buttons">
        <button className="preset-btn" onClick={() => loadMolecule('water')}>H₂O</button>
        <button className="preset-btn" onClick={() => loadMolecule('co2')}>CO₂</button>
        <button className="preset-btn" onClick={() => loadMolecule('methane')}>CH₄</button>
        <button className="preset-btn" onClick={() => loadMolecule('ammonia')}>NH₃</button>
      </div>
      
      <div className="sim-info">
        <p>Click preset molecules to explore different chemical compounds!</p>
      </div>
    </div>
  );
}

// Additional Simulation Components

// Equation Balance (Algebra)
function EquationBalance() {
  const [leftSide, setLeftSide] = useState(5);
  const [rightSide, setRightSide] = useState(5);
  const [x, setX] = useState(3);
  
  const isBalanced = leftSide + x === rightSide + x;
  
  return (
    <div className="simulation-content">
      <h3>🧮 Equation Balance</h3>
      <div className="equation-display">
        <div className={`balance-scale ${isBalanced ? 'balanced' : 'unbalanced'}`}>
          <div className="scale-left">
            <div className="scale-pan">{leftSide} + x</div>
          </div>
          <div className="scale-center">⚖️</div>
          <div className="scale-right">
            <div className="scale-pan">{rightSide} + x</div>
          </div>
        </div>
      </div>
      <div className="sim-controls">
        <div className="control-group">
          <label>Left Side: {leftSide}</label>
          <input type="range" min="1" max="20" value={leftSide} onChange={(e) => setLeftSide(parseInt(e.target.value))} className="slider" />
        </div>
        <div className="control-group">
          <label>Right Side: {rightSide}</label>
          <input type="range" min="1" max="20" value={rightSide} onChange={(e) => setRightSide(parseInt(e.target.value))} className="slider" />
        </div>
        <div className="control-group">
          <label>x = {x}</label>
          <input type="range" min="1" max="20" value={x} onChange={(e) => setX(parseInt(e.target.value))} className="slider" />
        </div>
      </div>
      <div className="sim-results">
        <div className="result-item">
          <span className="result-label">Left:</span>
          <span className="result-value">{leftSide + x}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Right:</span>
          <span className="result-value">{rightSide + x}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Balanced:</span>
          <span className="result-value">{isBalanced ? '✓' : '✗'}</span>
        </div>
      </div>
    </div>
  );
}

// Nutrition Calculator (Health)
function NutritionCalculator() {
  const [meals, setMeals] = useState({
    fruits: 0,
    vegetables: 0,
    grains: 0,
    protein: 0,
    dairy: 0
  });
  
  const foodGroups = {
    fruits: { emoji: '🍎', calories: 60, servings: 2 },
    vegetables: { emoji: '🥦', calories: 25, servings: 3 },
    grains: { emoji: '🍞', calories: 80, servings: 6 },
    protein: { emoji: '🍗', calories: 150, servings: 2 },
    dairy: { emoji: '🥛', calories: 100, servings: 2 }
  };
  
  const totalCalories = Object.keys(meals).reduce((sum, key) => sum + (meals[key] * foodGroups[key].calories), 0);
  
  return (
    <div className="simulation-content">
      <h3>🍎 Nutrition Calculator</h3>
      <div className="nutrition-grid">
        {Object.keys(foodGroups).map(key => (
          <div key={key} className="food-group-card">
            <div className="food-emoji">{foodGroups[key].emoji}</div>
            <div className="food-name">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
            <div className="food-servings">
              <button onClick={() => setMeals({...meals, [key]: Math.max(0, meals[key] - 1)})}>−</button>
              <span>{meals[key]}</span>
              <button onClick={() => setMeals({...meals, [key]: meals[key] + 1})}>+</button>
            </div>
            <div className="food-recommended">Recommended: {foodGroups[key].servings}</div>
          </div>
        ))}
      </div>
      <div className="sim-results">
        <div className="result-item">
          <span className="result-label">Total Calories:</span>
          <span className="result-value">{totalCalories} cal</span>
        </div>
        <div className="result-item">
          <span className="result-label">Status:</span>
          <span className="result-value">{totalCalories >= 1200 && totalCalories <= 2000 ? '✓ Balanced' : '⚠️ Adjust'}</span>
        </div>
      </div>
    </div>
  );
}

// Color Mixer (Art)
function ColorMixer() {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
  
  return (
    <div className="simulation-content">
      <h3>🎨 Color Mixer</h3>
      <div className="color-display" style={{ backgroundColor: rgbColor, width: '200px', height: '200px', margin: '20px auto', borderRadius: '10px', border: '3px solid #333' }}></div>
      <div className="sim-controls">
        <div className="control-group">
          <label>Red: {red}</label>
          <input type="range" min="0" max="255" value={red} onChange={(e) => setRed(parseInt(e.target.value))} className="slider" style={{accentColor: 'red'}} />
        </div>
        <div className="control-group">
          <label>Green: {green}</label>
          <input type="range" min="0" max="255" value={green} onChange={(e) => setGreen(parseInt(e.target.value))} className="slider" style={{accentColor: 'green'}} />
        </div>
        <div className="control-group">
          <label>Blue: {blue}</label>
          <input type="range" min="0" max="255" value={blue} onChange={(e) => setBlue(parseInt(e.target.value))} className="slider" style={{accentColor: 'blue'}} />
        </div>
      </div>
      <div className="sim-results">
        <div className="result-item">
          <span className="result-label">RGB:</span>
          <span className="result-value">{rgbColor}</span>
        </div>
        <div className="result-item">
          <span className="result-label">HEX:</span>
          <span className="result-value">{hexColor}</span>
        </div>
      </div>
      <div className="preset-buttons">
        <button className="preset-btn" onClick={() => { setRed(255); setGreen(0); setBlue(0); }}>Red</button>
        <button className="preset-btn" onClick={() => { setRed(0); setGreen(255); setBlue(0); }}>Green</button>
        <button className="preset-btn" onClick={() => { setRed(0); setGreen(0); setBlue(255); }}>Blue</button>
        <button className="preset-btn" onClick={() => { setRed(255); setGreen(255); setBlue(0); }}>Yellow</button>
        <button className="preset-btn" onClick={() => { setRed(255); setGreen(0); setBlue(255); }}>Magenta</button>
        <button className="preset-btn" onClick={() => { setRed(0); setGreen(255); setBlue(255); }}>Cyan</button>
      </div>
    </div>
  );
}

// Binary Converter (Computer)
function BinaryConverter() {
  const [decimal, setDecimal] = useState(42);
  const binary = decimal.toString(2).padStart(8, '0');
  
  return (
    <div className="simulation-content">
      <h3>💾 Binary Converter</h3>
      <div className="sim-controls">
        <div className="control-group">
          <label>Decimal: {decimal}</label>
          <input type="range" min="0" max="255" value={decimal} onChange={(e) => setDecimal(parseInt(e.target.value))} className="slider" />
        </div>
      </div>
      <div className="binary-display">
        <div className="binary-bits">
          {binary.split('').map((bit, idx) => (
            <div key={idx} className={`bit ${bit === '1' ? 'on' : 'off'}`}>
              {bit}
            </div>
          ))}
        </div>
      </div>
      <div className="sim-results">
        <div className="result-item">
          <span className="result-label">Decimal:</span>
          <span className="result-value">{decimal}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Binary:</span>
          <span className="result-value">{binary}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Hexadecimal:</span>
          <span className="result-value">{decimal.toString(16).toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}

// World Explorer (Geography/Continents)
function WorldExplorer({ continent = "World" }) {
  const continentFacts = {
    africa: { area: "30.37 million km²", countries: 54, population: "1.3 billion", highest: "Mt. Kilimanjaro" },
    asia: { area: "44.58 million km²", countries: 48, population: "4.6 billion", highest: "Mt. Everest" },
    europe: { area: "10.18 million km²", countries: 44, population: "748 million", highest: "Mt. Elbrus" },
    northamerica: { area: "24.71 million km²", countries: 23, population: "580 million", highest: "Denali" },
    southamerica: { area: "17.84 million km²", countries: 12, population: "430 million", highest: "Aconcagua" },
    australia: { area: "8.6 million km²", countries: 14, population: "43 million", highest: "Mt. Kosciuszko" },
    antarctica: { area: "14.2 million km²", countries: 0, population: "~1,000 (seasonal)", highest: "Vinson Massif" }
  };
  
  const facts = continentFacts[continent.toLowerCase()] || continentFacts.africa;
  
  return (
    <div className="simulation-content">
      <h3>🗺️ {continent} Explorer</h3>
      <div className="continent-facts">
        <div className="fact-card">
          <div className="fact-label">Area</div>
          <div className="fact-value">{facts.area}</div>
        </div>
        <div className="fact-card">
          <div className="fact-label">Countries</div>
          <div className="fact-value">{facts.countries}</div>
        </div>
        <div className="fact-card">
          <div className="fact-label">Population</div>
          <div className="fact-value">{facts.population}</div>
        </div>
        <div className="fact-card">
          <div className="fact-label">Highest Peak</div>
          <div className="fact-value">{facts.highest}</div>
        </div>
      </div>
      <div className="sim-info">
        <p>Explore fascinating facts about {continent}!</p>
      </div>
    </div>
  );
}

// Grammar Builder (English)
function GrammarBuilder() {
  const [sentence, setSentence] = useState({ noun: 'cat', verb: 'runs', adjective: 'quick', adverb: 'quickly' });
  
  const words = {
    noun: ['cat', 'dog', 'bird', 'student', 'teacher'],
    verb: ['runs', 'jumps', 'sings', 'reads', 'writes'],
    adjective: ['quick', 'happy', 'smart', 'brave', 'kind'],
    adverb: ['quickly', 'happily', 'smartly', 'bravely', 'kindly']
  };
  
  const fullSentence = `The ${sentence.adjective} ${sentence.noun} ${sentence.verb} ${sentence.adverb}.`;
  
  return (
    <div className="simulation-content">
      <h3>📝 Grammar Builder</h3>
      <div className="sentence-display">
        <p className="built-sentence">{fullSentence}</p>
      </div>
      <div className="word-selector">
        {Object.keys(words).map(type => (
          <div key={type} className="word-group">
            <label>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
            <select value={sentence[type]} onChange={(e) => setSentence({...sentence, [type]: e.target.value})}>
              {words[type].map(word => <option key={word} value={word}>{word}</option>)}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

// Cell Explorer (Biology)
function CellExplorer() {
  const [cellType, setCellType] = useState('animal');
  
  const cellParts = {
    animal: [
      { name: 'Nucleus', emoji: '🔵', function: 'Controls cell activities' },
      { name: 'Mitochondria', emoji: '⚡', function: 'Produces energy' },
      { name: 'Cell Membrane', emoji: '🛡️', function: 'Protects the cell' },
      { name: 'Cytoplasm', emoji: '💧', function: 'Holds organelles' },
      { name: 'Ribosomes', emoji: '⚙️', function: 'Makes proteins' }
    ],
    plant: [
      { name: 'Cell Wall', emoji: '🧱', function: 'Rigid structure' },
      { name: 'Chloroplast', emoji: '🌿', function: 'Photosynthesis' },
      { name: 'Vacuole', emoji: '🫧', function: 'Stores water/nutrients' },
      { name: 'Nucleus', emoji: '🔵', function: 'Controls cell activities' },
      { name: 'Mitochondria', emoji: '⚡', function: 'Produces energy' }
    ]
  };
  
  return (
    <div className="simulation-content">
      <h3>🔬 Cell Explorer</h3>
      <div className="preset-buttons">
        <button className={`preset-btn ${cellType === 'animal' ? 'active' : ''}`} onClick={() => setCellType('animal')}>Animal Cell</button>
        <button className={`preset-btn ${cellType === 'plant' ? 'active' : ''}`} onClick={() => setCellType('plant')}>Plant Cell</button>
      </div>
      <div className="cell-parts-grid">
        {cellParts[cellType].map((part, idx) => (
          <div key={idx} className="cell-part-card">
            <div className="part-emoji">{part.emoji}</div>
            <div className="part-name">{part.name}</div>
            <div className="part-function">{part.function}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Logic Gates (Computer)
function LogicGates() {
  const [inputA, setInputA] = useState(true);
  const [inputB, setInputB] = useState(false);
  const [gate, setGate] = useState('AND');
  
  const calculateOutput = () => {
    switch(gate) {
      case 'AND': return inputA && inputB;
      case 'OR': return inputA || inputB;
      case 'NOT': return !inputA;
      case 'NAND': return !(inputA && inputB);
      case 'NOR': return !(inputA || inputB);
      case 'XOR': return inputA !== inputB;
      default: return false;
    }
  };
  
  const output = calculateOutput();
  
  return (
    <div className="simulation-content">
      <h3>🔌 Logic Gates</h3>
      <div className="logic-gate-display">
        <div className="gate-inputs">
          <div className={`input-btn ${inputA ? 'active' : ''}`} onClick={() => setInputA(!inputA)}>
            Input A: {inputA ? '1' : '0'}
          </div>
          {gate !== 'NOT' && (
            <div className={`input-btn ${inputB ? 'active' : ''}`} onClick={() => setInputB(!inputB)}>
              Input B: {inputB ? '1' : '0'}
            </div>
          )}
        </div>
        <div className="gate-symbol">
          <div className="gate-box">{gate}</div>
        </div>
        <div className="gate-output">
          <div className={`output-display ${output ? 'active' : ''}`}>
            Output: {output ? '1' : '0'}
          </div>
        </div>
      </div>
      <div className="preset-buttons">
        <button className={`preset-btn ${gate === 'AND' ? 'active' : ''}`} onClick={() => setGate('AND')}>AND</button>
        <button className={`preset-btn ${gate === 'OR' ? 'active' : ''}`} onClick={() => setGate('OR')}>OR</button>
        <button className={`preset-btn ${gate === 'NOT' ? 'active' : ''}`} onClick={() => setGate('NOT')}>NOT</button>
        <button className={`preset-btn ${gate === 'XOR' ? 'active' : ''}`} onClick={() => setGate('XOR')}>XOR</button>
      </div>
    </div>
  );
}

// Algorithm Visualizer (Coding)
function AlgorithmVisualizer() {
  const [array, setArray] = useState([5, 2, 8, 1, 9, 3, 7, 4, 6]);
  const [sorted, setSorted] = useState(false);
  
  const bubbleSort = () => {
    const arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    setArray(arr);
    setSorted(true);
  };
  
  const shuffle = () => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setArray(arr);
    setSorted(false);
  };
  
  return (
    <div className="simulation-content">
      <h3>🤖 Algorithm Visualizer</h3>
      <div className="algorithm-display">
        <div className="array-bars">
          {array.map((value, idx) => (
            <div key={idx} className="bar-container">
              <div className="bar" style={{ height: `${value * 20}px`, backgroundColor: sorted ? '#4CAF50' : '#4facfe' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="preset-buttons">
        <button className="preset-btn" onClick={bubbleSort}>Sort (Bubble Sort)</button>
        <button className="preset-btn" onClick={shuffle}>Shuffle</button>
      </div>
      <div className="sim-info">
        <p>Watch how the bubble sort algorithm arranges numbers!</p>
      </div>
    </div>
  );
}

// Loop Simulator (Coding)
function LoopSimulator() {
  const [loopType, setLoopType] = useState('for');
  const [iterations, setIterations] = useState(5);
  const [currentIteration, setCurrentIteration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    if (isRunning && currentIteration < iterations) {
      const timer = setTimeout(() => {
        setCurrentIteration(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else if (currentIteration >= iterations) {
      setIsRunning(false);
    }
  }, [isRunning, currentIteration, iterations]);
  
  const startLoop = () => {
    setCurrentIteration(0);
    setIsRunning(true);
  };
  
  const resetLoop = () => {
    setCurrentIteration(0);
    setIsRunning(false);
  };
  
  return (
    <div className="simulation-content">
      <h3>🔄 Loop Simulator</h3>
      <div className="loop-code">
        <code>
          {loopType === 'for' && `for (i = 0; i < ${iterations}; i++) {`}<br/>
          {loopType === 'while' && `while (i < ${iterations}) {`}<br/>
          &nbsp;&nbsp;console.log(i);<br/>
          {`}`}
        </code>
      </div>
      <div className="loop-visualization">
        <div className="iteration-display">
          Current Iteration: <span className="iteration-value">{currentIteration}</span> / {iterations}
        </div>
        <div className="iteration-blocks">
          {Array.from({ length: iterations }).map((_, idx) => (
            <div key={idx} className={`iteration-block ${idx < currentIteration ? 'completed' : ''} ${idx === currentIteration && isRunning ? 'active' : ''}`}>
              {idx}
            </div>
          ))}
        </div>
      </div>
      <div className="sim-controls">
        <div className="control-group">
          <label>Iterations: {iterations}</label>
          <input type="range" min="1" max="10" value={iterations} onChange={(e) => { setIterations(parseInt(e.target.value)); resetLoop(); }} className="slider" />
        </div>
      </div>
      <div className="preset-buttons">
        <button className="preset-btn" onClick={startLoop} disabled={isRunning}>Start Loop</button>
        <button className="preset-btn" onClick={resetLoop}>Reset</button>
      </div>
    </div>
  );
}

// Note Trainer (Music)
function NoteTrainer() {
  const [selectedNote, setSelectedNote] = useState('C');
  
  const notes = [
    { name: 'C', frequency: '261.63 Hz', position: 'Middle C' },
    { name: 'D', frequency: '293.66 Hz', position: 'Second' },
    { name: 'E', frequency: '329.63 Hz', position: 'Third' },
    { name: 'F', frequency: '349.23 Hz', position: 'Fourth' },
    { name: 'G', frequency: '392.00 Hz', position: 'Fifth' },
    { name: 'A', frequency: '440.00 Hz', position: 'Sixth' },
    { name: 'B', frequency: '493.88 Hz', position: 'Seventh' }
  ];
  
  const currentNote = notes.find(n => n.name === selectedNote);
  
  return (
    <div className="simulation-content">
      <h3>🎵 Note Trainer</h3>
      <div className="piano-keys">
        {notes.map(note => (
          <div 
            key={note.name} 
            className={`piano-key ${selectedNote === note.name ? 'active' : ''}`}
            onClick={() => setSelectedNote(note.name)}
          >
            {note.name}
          </div>
        ))}
      </div>
      <div className="sim-results">
        <div className="result-item">
          <span className="result-label">Note:</span>
          <span className="result-value">{currentNote?.name}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Frequency:</span>
          <span className="result-value">{currentNote?.frequency}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Position:</span>
          <span className="result-value">{currentNote?.position}</span>
        </div>
      </div>
    </div>
  );
}

// Historical Timeline (History)
function HistoricalTimeline() {
  const [selectedEra, setSelectedEra] = useState('ancient');
  
  const eras = {
    ancient: [
      { year: '3000 BCE', event: 'Ancient Egypt begins', emoji: '🏺' },
      { year: '776 BCE', event: 'First Olympic Games', emoji: '🏛️' },
      { year: '221 BCE', event: 'Great Wall of China built', emoji: '🏯' }
    ],
    medieval: [
      { year: '476 CE', event: 'Fall of Roman Empire', emoji: '⚔️' },
      { year: '1066 CE', event: 'Battle of Hastings', emoji: '👑' },
      { year: '1492 CE', event: 'Columbus reaches Americas', emoji: '⛵' }
    ],
    modern: [
      { year: '1776', event: 'American Independence', emoji: '🗽' },
      { year: '1969', event: 'Moon Landing', emoji: '🚀' },
      { year: '1991', event: 'World Wide Web', emoji: '🌐' }
    ]
  };
  
  return (
    <div className="simulation-content">
      <h3>📜 Historical Timeline</h3>
      <div className="preset-buttons">
        <button className={`preset-btn ${selectedEra === 'ancient' ? 'active' : ''}`} onClick={() => setSelectedEra('ancient')}>Ancient</button>
        <button className={`preset-btn ${selectedEra === 'medieval' ? 'active' : ''}`} onClick={() => setSelectedEra('medieval')}>Medieval</button>
        <button className={`preset-btn ${selectedEra === 'modern' ? 'active' : ''}`} onClick={() => setSelectedEra('modern')}>Modern</button>
      </div>
      <div className="timeline">
        {eras[selectedEra].map((event, idx) => (
          <div key={idx} className="timeline-event">
            <div className="event-emoji">{event.emoji}</div>
            <div className="event-year">{event.year}</div>
            <div className="event-description">{event.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Climate Zones (Geography)
function ClimateZones() {
  const [selectedZone, setSelectedZone] = useState('tropical');
  
  const zones = {
    tropical: { emoji: '🌴', temp: '25-30°C', rainfall: 'High', features: 'Hot and humid year-round' },
    desert: { emoji: '🏜️', temp: '30-50°C', rainfall: 'Very low', features: 'Hot days, cool nights' },
    temperate: { emoji: '🍂', temp: '10-20°C', rainfall: 'Moderate', features: 'Four distinct seasons' },
    polar: { emoji: '❄️', temp: '-40-10°C', rainfall: 'Low', features: 'Extremely cold, ice covered' }
  };
  
  const zone = zones[selectedZone];
  
  return (
    <div className="simulation-content">
      <h3>🌡️ Climate Zones</h3>
      <div className="preset-buttons">
        <button className={`preset-btn ${selectedZone === 'tropical' ? 'active' : ''}`} onClick={() => setSelectedZone('tropical')}>Tropical</button>
        <button className={`preset-btn ${selectedZone === 'desert' ? 'active' : ''}`} onClick={() => setSelectedZone('desert')}>Desert</button>
        <button className={`preset-btn ${selectedZone === 'temperate' ? 'active' : ''}`} onClick={() => setSelectedZone('temperate')}>Temperate</button>
        <button className={`preset-btn ${selectedZone === 'polar' ? 'active' : ''}`} onClick={() => setSelectedZone('polar')}>Polar</button>
      </div>
      <div className="climate-display">
        <div className="climate-emoji">{zone.emoji}</div>
        <div className="sim-results">
          <div className="result-item">
            <span className="result-label">Temperature:</span>
            <span className="result-value">{zone.temp}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Rainfall:</span>
            <span className="result-value">{zone.rainfall}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Features:</span>
            <span className="result-value">{zone.features}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exercise Tracker (Health)
function ExerciseTracker() {
  const [exercises, setExercises] = useState({
    running: 0,
    cycling: 0,
    swimming: 0,
    walking: 0
  });
  
  const exerciseData = {
    running: { emoji: '🏃', calories: 10 },
    cycling: { emoji: '🚴', calories: 8 },
    swimming: { emoji: '🏊', calories: 11 },
    walking: { emoji: '🚶', calories: 5 }
  };
  
  const totalCalories = Object.keys(exercises).reduce((sum, key) => 
    sum + (exercises[key] * exerciseData[key].calories), 0
  );
  
  return (
    <div className="simulation-content">
      <h3>💪 Exercise Tracker</h3>
      <div className="exercise-grid">
        {Object.keys(exerciseData).map(key => (
          <div key={key} className="exercise-card">
            <div className="exercise-emoji">{exerciseData[key].emoji}</div>
            <div className="exercise-name">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
            <div className="exercise-minutes">
              <button onClick={() => setExercises({...exercises, [key]: Math.max(0, exercises[key] - 5)})}>−5</button>
              <span>{exercises[key]} min</span>
              <button onClick={() => setExercises({...exercises, [key]: exercises[key] + 5})}>+5</button>
            </div>
            <div className="exercise-cal">{exercises[key] * exerciseData[key].calories} cal</div>
          </div>
        ))}
      </div>
      <div className="sim-results">
        <div className="result-item">
          <span className="result-label">Total Calories Burned:</span>
          <span className="result-value">{totalCalories} cal</span>
        </div>
      </div>
    </div>
  );
}

// Symmetry Studio (Art)
function SymmetryStudio() {
  const [pattern, setPattern] = useState('horizontal');
  const [color, setColor] = useState('#4facfe');
  
  return (
    <div className="simulation-content">
      <h3>🖼️ Symmetry Studio</h3>
      <div className="symmetry-display">
        <div className={`symmetry-pattern symmetry-${pattern}`}>
          <div className="pattern-section" style={{ backgroundColor: color }}></div>
          <div className="pattern-section" style={{ backgroundColor: color }}></div>
        </div>
      </div>
      <div className="sim-controls">
        <div className="control-group">
          <label>Pattern Type:</label>
          <div className="preset-buttons">
            <button className={`preset-btn ${pattern === 'horizontal' ? 'active' : ''}`} onClick={() => setPattern('horizontal')}>Horizontal</button>
            <button className={`preset-btn ${pattern === 'vertical' ? 'active' : ''}`} onClick={() => setPattern('vertical')}>Vertical</button>
            <button className={`preset-btn ${pattern === 'radial' ? 'active' : ''}`} onClick={() => setPattern('radial')}>Radial</button>
          </div>
        </div>
        <div className="control-group">
          <label>Color:</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

// Chemical Reactions (Chemistry)
function ChemicalReactions() {
  const [reaction, setReaction] = useState('combustion');
  
  const reactions = {
    combustion: {
      name: 'Combustion',
      reactants: ['CH₄', 'O₂'],
      products: ['CO₂', 'H₂O'],
      type: 'Exothermic',
      emoji: '🔥'
    },
    photosynthesis: {
      name: 'Photosynthesis',
      reactants: ['CO₂', 'H₂O'],
      products: ['C₆H₁₂O₆', 'O₂'],
      type: 'Endothermic',
      emoji: '🌱'
    },
    neutralization: {
      name: 'Neutralization',
      reactants: ['HCl', 'NaOH'],
      products: ['NaCl', 'H₂O'],
      type: 'Neutralization',
      emoji: '⚗️'
    }
  };
  
  const current = reactions[reaction];
  
  return (
    <div className="simulation-content">
      <h3>⚗️ Chemical Reactions</h3>
      <div className="preset-buttons">
        <button className={`preset-btn ${reaction === 'combustion' ? 'active' : ''}`} onClick={() => setReaction('combustion')}>Combustion</button>
        <button className={`preset-btn ${reaction === 'photosynthesis' ? 'active' : ''}`} onClick={() => setReaction('photosynthesis')}>Photosynthesis</button>
        <button className={`preset-btn ${reaction === 'neutralization' ? 'active' : ''}`} onClick={() => setReaction('neutralization')}>Neutralization</button>
      </div>
      <div className="reaction-display">
        <div className="reaction-emoji">{current.emoji}</div>
        <div className="reaction-equation">
          <div className="reactants">
            {current.reactants.map((r, i) => (
              <span key={i} className="chemical">{r}{i < current.reactants.length - 1 ? ' + ' : ''}</span>
            ))}
          </div>
          <div className="arrow">→</div>
          <div className="products">
            {current.products.map((p, i) => (
              <span key={i} className="chemical">{p}{i < current.products.length - 1 ? ' + ' : ''}</span>
            ))}
          </div>
        </div>
        <div className="reaction-type">{current.type} Reaction</div>
      </div>
    </div>
  );
}

// Function Grapher (Algebra)
function FunctionGrapher() {
  const [slope, setSlope] = useState(1);
  const [intercept, setIntercept] = useState(0);
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();
    
    // Draw function
    ctx.strokeStyle = '#4facfe';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for (let x = -150; x <= 150; x++) {
      const realX = x / 20;
      const realY = slope * realX + intercept;
      const canvasX = centerX + x;
      const canvasY = centerY - (realY * 20);
      
      if (x === -150) {
        ctx.moveTo(canvasX, canvasY);
      } else {
        ctx.lineTo(canvasX, canvasY);
      }
    }
    ctx.stroke();
  }, [slope, intercept]);
  
  return (
    <div className="simulation-content">
      <h3>📊 Function Grapher</h3>
      <div className="function-equation">
        y = {slope}x + {intercept}
      </div>
      <canvas ref={canvasRef} width={300} height={300} className="sim-canvas" />
      <div className="sim-controls">
        <div className="control-group">
          <label>Slope (m): {slope}</label>
          <input type="range" min="-5" max="5" step="0.5" value={slope} onChange={(e) => setSlope(parseFloat(e.target.value))} className="slider" />
        </div>
        <div className="control-group">
          <label>Y-Intercept (b): {intercept}</label>
          <input type="range" min="-10" max="10" value={intercept} onChange={(e) => setIntercept(parseInt(e.target.value))} className="slider" />
        </div>
      </div>
    </div>
  );
}

// Main Simulation Lab Component
export default function SimulationLab({ subject = "math", simulation, onClose }) {
  const [activeSimulation, setActiveSimulation] = useState(simulation || null);
  
  const availableSimulations = SIMULATIONS[subject] || SIMULATIONS.math;
  
  const renderSimulation = () => {
    if (!activeSimulation) {
      return (
        <div className="simulation-selector">
          <h3>Choose a Simulation</h3>
          <div className="simulation-grid">
            {Object.entries(availableSimulations).map(([key, sim]) => (
              <div 
                key={key}
                className="simulation-card"
                onClick={() => setActiveSimulation(key)}
              >
                <h4>{sim.name}</h4>
                <p>{sim.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    // Map simulation keys to implemented components
    const simulationMap = {
      // Math & Algebra
      fractions: <FractionVisualizer />,
      geometry: <ShapeExplorer />,
      shapes: <ShapeExplorer />,
      equations: <EquationBalance />,
      graphs: <FunctionGrapher />,
      angles: <ShapeExplorer />,
      
      // Science & Physics
      pendulum: <PendulumSimulation />,
      solar: <SolarSystem />,
      forces: <PendulumSimulation />,
      
      // Chemistry & Biology
      molecules: <MoleculeBuilder />,
      reactions: <ChemicalReactions />,
      cells: <CellExplorer />,
      ecosystems: <CellExplorer />,
      
      // Computer & Coding
      binary: <BinaryConverter />,
      logic: <LogicGates />,
      algorithms: <AlgorithmVisualizer />,
      loops: <LoopSimulator />,
      
      // Geography & Continents
      continents: <WorldExplorer continent={subject} />,
      climate: <ClimateZones />,
      
      // Health
      nutrition: <NutritionCalculator />,
      exercise: <ExerciseTracker />,
      
      // Art
      colors: <ColorMixer />,
      symmetry: <SymmetryStudio />,
      
      // Music
      notes: <NoteTrainer />,
      rhythm: <NoteTrainer />,
      
      // English
      grammar: <GrammarBuilder />,
      vocabulary: <GrammarBuilder />,
      
      // History
      timeline: <HistoricalTimeline />,
      civilizations: <HistoricalTimeline />
    };
    
    // Return the implemented simulation or placeholder
    if (simulationMap[activeSimulation]) {
      return simulationMap[activeSimulation];
    }
    
    // Placeholder for simulations under development
    return (
      <div className="simulation-placeholder">
        <h3>{availableSimulations[activeSimulation]?.name || '🔬 Simulation'}</h3>
        <div className="placeholder-content">
          <div className="placeholder-icon">🚧</div>
          <p className="placeholder-text">This simulation is under development!</p>
          <p className="coming-soon">Coming soon...</p>
          <p className="placeholder-hint">
            Try other simulations from the menu or explore different subjects!
          </p>
        </div>
      </div>
    );
  };
  
  return (
    <div className="simulation-overlay" onClick={onClose}>
      <div className="simulation-modal" onClick={(e) => e.stopPropagation()}>
        <button className="simulation-close-btn" onClick={onClose}>✕</button>
        
        <div className="simulation-header">
          <h2>🔬 Interactive Simulation Lab</h2>
          {activeSimulation && (
            <button 
              className="back-btn"
              onClick={() => setActiveSimulation(null)}
            >
              ← Back to Menu
            </button>
          )}
        </div>
        
        {renderSimulation()}
      </div>
    </div>
  );
}
