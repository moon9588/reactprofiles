import React from 'react';
import '../footer.css';

function Footer () {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="mailto:mamonam4@gmail.com?" target="_blank"
                    rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/email.png" alt="email" 
                    className="icon"/></a>
                
                <a href="https://github.com/moon9588" target="_blank" rel="noreferrer"><img 
                src="https://img.icons8.com/color/48/000000/github-2.png" alt="icon" 
                className="icon"/></a>

                <a href="https://linkedin.com/in/<myLinkedIn/" target="_blank" rel="noreferrer"><img 
                src="https://img.icons8.com/color/48/000000/github-2.png" alt="icon" 
                className="icon"/></a>
  
            </div>
            <p className='footer-info'>
                &copy; Mamona Masood | <a href=""
                className="link">Download Resume</a>  | 
                <a href="https://coolors.co/79b473-46acc2-26547c-db7f8e-ffdbda">coolers</a> | made with <img id="react-icon"
                src="https://img.icons8.com/color/48/000000/react-native.png" alt="react"/>


            </p>
        </div>
    )
}

export default Footer;


