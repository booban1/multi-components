import './App.css';
import React from 'react';
import FQ from './MultiComponent';


function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {

  function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

  return (
        <div className="App">
      <div className="App-header">
        <FadeInSection>
          <FQ></FQ>
          <p>Step by step guide to the Everything of Nothing</p>
        </FadeInSection>
           
        <FadeInSection><div className="vl"></div></FadeInSection>
           <FadeInSection>
            <p style={{margin: "10px", fontSize: "30px"}}>1. Undestand that everything has all nothings</p>
           <p style={{margin: "10px", fontSize: "1rem"}}>This means that there can be infinite nothings where everything has occupied everything</p>
           </FadeInSection>
           <FadeInSection>
            <div className="vl"
            style={{margin: "10px"}}
           ></div>
           </FadeInSection>
           <FadeInSection><p style={{margin: "10px", fontSize: "30px"}}>2. Everything has nothing that is everything in its own</p>
           <p style={{margin: "10px", fontSize: "1rem", maxWidth: "700px"}}>Wait, even if you take all the nothings out of everything, you will  have all nothings that are essentially nothing, and remain with everything, which has some little nothings</p> 
           </FadeInSection>
           <FadeInSection>
            <div className="vl"
            style={{margin: "10px"}}
           ></div>
           </FadeInSection>
           <FadeInSection>
            <p style={{margin: "10px", fontSize: "30px"}}>3. You can't put evrything in nothing</p>
            </FadeInSection>           
            <FadeInSection>
              <p style={{margin: "10px", fontSize: "1rem"}}>But you can put all all nothings in everything, and well, still affect noting in everything...</p> 
            </FadeInSection>
            <FadeInSection><p>Well</p></FadeInSection>  
            <FadeInSection> <p>Just</p></FadeInSection>  
            <FadeInSection> <p>Dont</p></FadeInSection>  
            <FadeInSection><p>Be </p></FadeInSection>  
           <div className="App-header"></div>
      </div>


    </div>

    
  );
}

export default App;
