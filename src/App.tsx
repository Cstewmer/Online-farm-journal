import './App.css'

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Equine Therapy - Healing with Agriculture</h1>
      </div>
      <div className="banner-container">
        <img 
          src="./banner-image.jpg" 
          alt="Equine Therapy Banner" 
          className="banner-image"
        />
      </div>
      <div className="about-me-container">
        <div className="about-me">
          <h2>About Me</h2>
          <p>Hello there! Pleasure to meet you. I'm Charles Merriam - a tech major who loves nature.</p> 
          <br />
          <p>My grandparents were farmers, so I grew up feeding sheep and mending fences. I always wanted horses, but never got them until my sister married my brother-in-law. Now I ride his as often as I can.</p>
        </div>
      </div>
    </div>
  )
}

export default App
