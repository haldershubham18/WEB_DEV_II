import { useEffect, useMemo, useRef, useState } from 'react'

const objectLabels = ['Person', 'Car', 'Truck', 'Helmet', 'Bike']

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

function generateDetections() {
  const total = Math.floor(randomBetween(1, 4))

  return Array.from({ length: total }).map((_, index) => ({
    id: `${Date.now()}-${index}`,
    label: objectLabels[Math.floor(Math.random() * objectLabels.length)],
    confidence: Math.round(randomBetween(78, 99)),
    left: randomBetween(8, 62),
    top: randomBetween(10, 70),
    width: randomBetween(16, 28),
    height: randomBetween(14, 26),
  }))
}

function Sample() {
  const [videoUrl, setVideoUrl] = useState('')
  const [videoName, setVideoName] = useState('')
  const [status, setStatus] = useState('Upload a video to start detection')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isDetectionLive, setIsDetectionLive] = useState(false)
  const [detections, setDetections] = useState([])
  const [fps, setFps] = useState(0)

  const originalVideoRef = useRef(null)
  const outputVideoRef = useRef(null)
  const detectTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl)
      }
    }
  }, [videoUrl])

  useEffect(() => {
    return () => {
      if (detectTimerRef.current) {
        clearInterval(detectTimerRef.current)
      }
    }
  }, [])

  const handleUpload = (event) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    if (videoUrl) {
      URL.revokeObjectURL(videoUrl)
    }

    const nextUrl = URL.createObjectURL(file)
    setVideoUrl(nextUrl)
    setVideoName(file.name)
    setStatus('Video ready. Click Run Detection.')
    setIsAnalyzing(false)
    setIsDetectionLive(false)
    setDetections([])
    setFps(0)

    if (detectTimerRef.current) {
      clearInterval(detectTimerRef.current)
      detectTimerRef.current = null
    }
  }

  const startDetection = () => {
    if (!videoUrl) {
      setStatus('Please upload a video first.')
      return
    }

    setStatus('Analyzing video stream...')
    setIsAnalyzing(true)
    setIsDetectionLive(false)

    window.setTimeout(() => {
      setIsAnalyzing(false)
      setIsDetectionLive(true)
      setStatus('Detection is live: bounding boxes update in real-time.')

      if (originalVideoRef.current) {
        originalVideoRef.current.currentTime = 0
        originalVideoRef.current.play().catch(() => null)
      }

      if (outputVideoRef.current) {
        outputVideoRef.current.currentTime = 0
        outputVideoRef.current.play().catch(() => null)
      }

      if (detectTimerRef.current) {
        clearInterval(detectTimerRef.current)
      }

      detectTimerRef.current = window.setInterval(() => {
        setDetections(generateDetections())
        setFps(Math.floor(randomBetween(22, 31)))

        if (originalVideoRef.current && outputVideoRef.current) {
          const delta = Math.abs(
            originalVideoRef.current.currentTime - outputVideoRef.current.currentTime,
          )

          if (delta > 0.35) {
            outputVideoRef.current.currentTime = originalVideoRef.current.currentTime
          }
        }
      }, 450)
    }, 1500)
  }

  const stopDetection = () => {
    setIsAnalyzing(false)
    setIsDetectionLive(false)
    setStatus('Detection paused. You can run it again anytime.')
    setDetections([])
    setFps(0)

    if (originalVideoRef.current) {
      originalVideoRef.current.pause()
    }

    if (outputVideoRef.current) {
      outputVideoRef.current.pause()
    }

    if (detectTimerRef.current) {
      clearInterval(detectTimerRef.current)
      detectTimerRef.current = null
    }
  }

  const detectionSummary = useMemo(() => {
    if (!isDetectionLive) {
      return 'No active detections'
    }

    return `${detections.length} objects tracked in current frame`
  }, [detections.length, isDetectionLive])

  return (
    <section id="detector" className="detector-section">
      <div className="detector-header">
        <div>
          <h2>Detection Workspace</h2>
          <p>{status}</p>
        </div>
        <div className="detector-actions">
          <label className="upload-btn" htmlFor="videoUpload">
            Upload Video
          </label>
          <input
            id="videoUpload"
            type="file"
            accept="video/*"
            onChange={handleUpload}
          />
          <button
            className="primary-btn"
            type="button"
            onClick={startDetection}
            disabled={!videoUrl || isAnalyzing}
          >
            {isAnalyzing ? 'Analyzing...' : 'Run Detection'}
          </button>
          <button
            className="ghost-btn"
            type="button"
            onClick={stopDetection}
            disabled={!videoUrl}
          >
            Stop
          </button>
        </div>
      </div>

      <div className="status-bar" role="status">
        <span>{videoName || 'No file selected'}</span>
        <span>{detectionSummary}</span>
        <span>{isDetectionLive ? `${fps} FPS` : '-- FPS'}</span>
      </div>

      <div className="video-grid">
        <article className="video-panel">
          <h3>Input Video</h3>
          <div className="video-frame">
            {videoUrl ? (
              <video ref={originalVideoRef} src={videoUrl} controls playsInline />
            ) : (
              <div className="placeholder">Upload a video to preview the input stream</div>
            )}
          </div>
        </article>

        <article className="video-panel">
          <h3>Detection Output</h3>
          <div className="video-frame overlay-frame">
            {videoUrl ? (
              <>
                <video ref={outputVideoRef} src={videoUrl} muted playsInline />
                <div className="overlay-layer">
                  {isDetectionLive &&
                    detections.map((box) => (
                      <div
                        className="detection-box"
                        key={box.id}
                        style={{
                          left: `${box.left}%`,
                          top: `${box.top}%`,
                          width: `${box.width}%`,
                          height: `${box.height}%`,
                        }}
                      >
                        <span>{`${box.label} ${box.confidence}%`}</span>
                      </div>
                    ))}
                </div>
              </>
            ) : (
              <div className="placeholder">Detection output will appear here</div>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Sample
