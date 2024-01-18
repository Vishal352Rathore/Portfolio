import Navbarnav from '../navbar/navbarnav'
// import coderimg from '../../assets/mecoder.jpg'
import coderimg from '../../assets/header.svg'
import linkedin from '../../assets/socialicons/linkedin3.svg'
import instagram from '../../assets/socialicons/instagram2.svg'
import github from '../../assets/socialicons/github2.png'
import { motion } from 'framer-motion'
import Typewriter from "typewriter-effect";
import { useState } from 'react'
import "./home.css"

function Home(props) {

  const [Work, setWork] = useState("Front-End Developer");
  return (
    <div className='body container-fluid headerContainer'>

      <div className='row'>
        <div className='col  text-start' >
          <h1>Hey, I am  <span className='myName'>Vishal Rathore</span> </h1>
          <h1><Typewriter
            options={{
              strings: [
                " Full Stack Developer",
                "Web Developer",
                "Front End Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 80,
              wrapperClassName: "typewriter-wrapper",
              cursorClassName: "typewriter-cursor",
              cursorBlinkSpeed: 500,
              cursorBlink: true,
              cursor: "|",
              loopCount: Infinity,
              onComplete: () => {
                console.log("Completed");
              },
            }}
          />
          </h1>
          <h5>I am a Front-End / Full-Stack Developer, currently I am working at TCS as a Software Engineer.</h5>

          <div className="d-flex mt-4 justify-content-center justify-content-md-start">
            <a
              href="https://www.instagram.com/____mango____man/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagram}
                width={50}
                height={50}
                className="rounded-3 img-fluid mx-2"
                alt=""
              />
            </a>
            <a href="https://github.com/santosh214" target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                width={50}
                height={50}
                className="rounded-3 img-fluid mx-2"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/santosh-singhh/"
              target="_blank"
              rel="noreferrer"

            >
              <img
                src={linkedin}
                width={50}
                height={50}
                className="rounded-3 img-fluid mx-2"
                alt=""
              />
            </a>
          </div>

        </div>
        <div className='col'>
          <div className='img-wrapper'>
            <img className="inner-img img-fluid" src={coderimg} />
          </div>

        </div>
      </div>
    </div>

  )
}

export default Home;