import './App.css'

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Equine-Assisted Psychotherapy - Healing with Agriculture</h1>
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
      <div className="introduction-container">
        <div className="introduction">
          <h2>Introduction to EAP (Equine Assisted Psychotherapy)</h2>
          <p>Equine-Assisted Psychotherapy (referred to hereafter as EAP) is an emerging yet increasingly popular form of therapy used as a tool either independently or in conjunction with other methods "that helps clients of all ages address behavioral, emotional, spiritual, and relational issues using horses as an interventional tool." (Mandrell, 2014)</p>
          <br />
          <p>While recently EAP has become recognizable to a wider audience, there are still many misconceptions surrounding the practice, and as such I'd like to begin my background by clarifying what EAP isn't. It isn't therapy for the horse that happens to benefit the human working with it, it isn't physical therapy or hippotherapy (which is a method of therapy aiming to treat neurological/muscular disorders using the movements involved in riding a horse), and it isn't instilling character in an adolescent by tasking them with the responsibilities of raising a horse. (Mandrell, 2014)</p>
          <br />
          <p>Instead, EAP is a series of deliberately chosen and professionally guided activities that are designed to help a client confront and work through emotional and behavioral difficulties and to develop healthy skills and habits. These activities can vary widely, but a few examples are feeding, grooming, and leading the horse around a paddock. (Whitborne, 2022) Because horses are known to be extremely intelligent and emotional creatures and often mirror the emotions of their handler, they can help a client develop skills such as empathy, vulnerability, and self-exploration without having the fear of judgement that can sometimes come with a traditional therapy setting. Being able to work with a large and sometimes intimidating animal can also do a lot to further a clients self-esteem and ability to trust. (Burgon, 2015)</p>
          <br />
          <p>It is important to note that the experiences with the horses themselves are not sufficient to see the desired results of improved emotional and behavioral health – it must be combined with other, more standard methods in order for the clients to make the necessary connections and the lessons learned to take effect. (Mandrell, 2014)</p>
          <br />
          <p>EAP is young and emerging, but as more and more research is conducted, the benefits of using this tool in psychotherapy become increasingly clear.</p>
        </div>
      </div>
      <div className="sources-container">
        <div className="sources">
          <h2>Sources Cited</h2>
          <p>Burgon, H. L. (2015). Equine-assisted therapy and learning with at-risk young people Hannah Burgon. Palgrave Macmillan.</p>
          <br />
          <p>Mandrell, P. J. (2014). Introduction to equine-assisted psychotherapy: A comprehensive overview. The Author.</p>
          <br />
          <p>Whitborne, S. K. (2022, May 25). Equine-assisted therapy. Psychology Today. https://www.psychologytoday.com/us/therapy-types/equine-assisted-therapy</p>
        </div>
      </div>
    </div>
  )
}

export default App
