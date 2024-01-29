import React from "react";
import { motion } from "framer-motion";
import "./contact.css";
import RESUME from '../../assets/files/Vishal_updated_resume_react_tcs.pdf'
export default function Contact() {
  return (
    <motion.section about="Santosh contact us section" className="contactSection"
    
    initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div className="container fade-in-image">
      <h1 className="contactH1 pb-4 text-md-start text-center">Contact Me</h1>

        <div className="row">
          <div className="col">
            <p className="text-secondary px-md-0 px-2">
              Here's how to reach me, looking forward to talk with you all!.
            </p>
            <p className="text-secondary px-md-0 px-2">
              Inquiries via email at{" "}
              <a href="mailto:vishal352rathore@gmail.com">
                <u className="linkColor"> vishal352rathore@gmail.com </u>
              </a>{" "}
              or via socials below:.
            </p>
            <ul>
              <li className="pt-3">
                Github-{" "}
                <a className="linkColor" href="https://github.com/Vishal352Rathore">
                  https://github.com/Vishal352Rathore
                </a>{" "}
              </li>
              <li className="pt-3">
                Linkedin-{" "}
                <a
                  className="linkColor"
                  href="https://www.linkedin.com/in/vishal-rathore-229648149/"
                >
                  https://www.linkedin.com/in/vishal-rathore-229648149/
                </a>{" "}
              </li>
              {/* <li className="pt-3">
                Telegram-{" "}
                <a className="linkColor" href="https://t.me/MangoMan214">
                  https://t.me/MangoMan214
                </a>{" "}
              </li> */}
            </ul>
            <p className="pt-3 text-secondary">
              View my resume in{" "}
              <a
                href={RESUME}
                download
                className="linkColor"
              >
                pdf format.
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}