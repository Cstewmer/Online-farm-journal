import './App.css'

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Equine Therapy - Healing with Agriculture</h1>
      </div>
      <div className="banner-container">
        <img 
          src="/banner-image.jpg" 
          alt="Equine Therapy Banner" 
          className="banner-image"
        />
      </div>
      <div className="about-me-container">
        <div className="about-me">
          <h2>About Me</h2>
          <p>Hello there! Pleasure to meet you. I'm Charles Merriam - a tech major with a soft spot for things that grow.</p> 
          <p>My grandparents were farmers, so I grew up helping on their farm. I always wanted horses growing up, so now I ride my brother-in-law's as often as I can.</p>
        </div>
      </div>
    </div>
  )
}

export default App
