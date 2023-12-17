import React from 'react'
import './App.css'

function App() {

  return (
    <div className='website'>
    
   {/*  first Display page */}
     <div className="first-page">
        <header>
            <h1><span class="green">Tinker</span>  <span class="red">Toy</span>  <span class="yellow">Shop</span></h1>
            <p>For toy lovers and imagination kindlers</p>
        </header>
   </div>
      
      <div className="outer-block">
      <div className='blocks'>
          <div className="block"><img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D" alt="img1" className='img'/></div>
          <div className="block"><img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D" alt="img2" className='img'/></div>
          <div className="block"><img src="https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D" alt="img3" className='img'/></div>
          <div className="block"><img src="https://images.unsplash.com/photo-1599623560574-39d485900c95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D" alt="img4"  className='img'/></div>
          <div className="block"><img src="https://images.unsplash.com/photo-1536293182766-c9c0c4133b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D" alt="img5" className='img'/></div>
          <div className="block"><img src="https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D" alt="img6" className='img'/></div>
      </div>
   
      </div>

    
    <div className="outside-description-container">
    <div className="description-container">
        <div className="des1 des">
           <div className="icon-cont"><img src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/433737.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcwMjk0NDAwMCwicSI6bnVsbCwiaWF0IjoxNzAyNzUzMDc3fQ__.e28f99030646c95440c431a5752c37152ac1e71bfb6e40ced3501ccfad73848d" alt="flag-img" /></div>
           <div className='title'><h1>Experts in the field</h1></div>
           <div className='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis nemo assumenda facere corrupti et nesciunt tempora! Repellendus, ullam!</div>
        </div>


        <div className="des2 des">
        <div className="icon-cont"><img src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/433428.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcwMjk0NDAwMCwicSI6bnVsbCwiaWF0IjoxNzAyNzUzNDc1fQ__.6ad01776e87c6521067d6db51293e1f5a8c09f09b24e50928eb5060f4ba0d102" alt="trophy-img" /></div>
           <div className='title'><h1>Only the best toys</h1></div>
           <div className='p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dolor vitae perferendis sed numquam inventore sint, asperiores ab! Eius labore dignissimos fugit?</div>
        </div>
      </div>
    </div>
       
    
    <div className="outside-visit-cont" id="visit">
          <div className="visit-cont">
                
                <div className="visit">
                      <div className="visit-inner">
                         <div className='visit-title'><h1>Visit us</h1></div>
                         <div className="subtitle"><h3>1950 Lewis Avenue<br/>Brooklyn, NY 11201</h3></div> 
                         <div className="para"><p>In between Green Avenue and Lexington Avenue, close to Lafayette Avenue</p></div>
                      </div>
                      
                </div>

                <div className="visit">
                    <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.6547654405686!2d-73.93757336422611!3d40.68918013901307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b8aab37927d%3A0x20e5e5aa90c84be2!2sLewis%20Ave%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1702795695787!5m2!1sen!2sin"></iframe></div>
                </div>
          </div>
    </div>
    
        <footer id="footer-container">
               © Tinker Toy Shop.Design by Kalpesh More.
        </footer>

    </div>
    
  )
}

export default App
