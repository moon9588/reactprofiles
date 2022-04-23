import React from 'react';
import '../App.js';
import '../index.css';
import '../footer.css'

// import Avatar from '../assets/images/myHeathChart.png';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row abstract-back'>
                                <img className='avatar' src={Avatar} alt="My-Face"/>

                            </div>
                        </div>
                        <div className='card-body'>
                            <div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </React.Fragment>
    )
}

export default About;