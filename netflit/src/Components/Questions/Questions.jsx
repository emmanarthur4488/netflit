import React from 'react'
import "./questions.css"
import Add from '/src/IMG/add.png'
import {Link} from "react-router-dom"

const Questions = () => {
  return (
    <div>
      <div className="question">
          <h1>Frequently Asked Questions</h1>
          <ul>
              <Link className="link">
                <div className="net-questions">
                    <p className="faq">What is Netflix?</p>
                    <span>+</span>
                </div>
              </Link>

              <Link className="link">
                <div className="net-questions">
                    <p className="faq">How much does Netflix cost?</p>
                    <span>+</span>
                </div>
              </Link>

              <Link className="link">
                <div className="net-questions">
                    <p className="faq">What’s different on Basic with ads?</p>
                    <span>+</span>
                </div>
              </Link>

              <Link className="link">
                <div className="net-questions">
                    <p className="faq">Where can I watch?</p>
                    <span>+</span>
                </div>
              </Link>

              <Link className="link">
                <div className="net-questions">
                    <p className="faq">How do I cancel?</p>
                    <span>+</span>
                </div>
              </Link>
              
              <Link className="link">
                <div className="net-questions">
                    <p className="faq">Is Netflix good for kids?</p>
                    <span>+</span>
                </div>
              </Link>
          </ul>

            <div className="question-sub">
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
              <input type="text" placeholder="Enter address"/><button>Get Started</button>
            </div>
      </div>
    </div>
  )
}

export default Questions
