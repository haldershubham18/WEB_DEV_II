import './App.css'
import Sample from './components/sample.jsx'

const trustMetrics = [
  { label: 'Avg. Detection Accuracy', value: '96.4%' },
  { label: 'Frame Sync Latency', value: '120ms' },
  { label: 'Monitoring Sessions', value: '18.2K' },
]

const solutions = [
  {
    title: 'Live Surveillance Tracking',
    description:
      'Watch annotated frames in real-time with confidence scores for every detected object.',
  },
  {
    title: 'Road Safety Monitoring',
    description:
      'Track vehicles, lane behavior, and pedestrian movement from uploaded camera footage.',
  },
  {
    title: 'Factory Floor Intelligence',
    description:
      'Detect PPE compliance and unsafe activity patterns before incidents occur.',
  },
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-dot" aria-hidden="true"></span>
          <span className="brand-name">VisionGuard AI</span>
        </div>
        <nav className="top-nav" aria-label="Primary">
          <a href="#overview">Overview</a>
          <a href="#detector">Detector</a>
          <a href="#solutions">Solutions</a>
        </nav>
        <button className="primary-btn" type="button">
          Request Demo
        </button>
      </header>

      <section id="overview" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Computer Vision Platform</p>
          <h1>See exactly how your model detects objects, frame by frame.</h1>
          <p className="hero-subtext">
            Upload a video, run detection, and review the annotated output feed with
            confidence overlays in a production-grade dashboard.
          </p>
        </div>

        <div className="metric-grid" role="list" aria-label="Performance metrics">
          {trustMetrics.map((item) => (
            <article className="metric-card" key={item.label} role="listitem">
              <p>{item.label}</p>
              <h3>{item.value}</h3>
            </article>
          ))}
        </div>
      </section>

      <Sample />

      <section id="solutions" className="solutions-section">
        <h2>Built for real-world operations</h2>
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.title}>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
