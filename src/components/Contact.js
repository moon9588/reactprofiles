import React, { useState } from 'react';
import { validateEmail } from '../utils/helper.js';
import '../App.css';

function ContactForm(){
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message} = formState;
    
    function handleChange(e) {
        if (e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('your email is invaild');
            } else {
                setErrorMessage('');
            }
            }
            else {
                if(!e.target.value.length){
                    setErrorMessage('${e.target.name} is required')
                }
                else
                {
                    setErrorMessage('');
                }
            }
        }
        setFormState ({...formState, [e.target.name]: e.target.value})
        console.log('errorMessage', errorMessage);

        if(!errorMessage){
            setFormState({ ...formState, [e.target.name]: e.target.value});
        }

    
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);

    }
    return (
        < section class= "contact" >
            <br></br>
            <h1 data-testid="h1tag" >Contact me</h1>
            <br></br>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" name="name" onBlur={handleChange}
                    defaultValue={name}/>
                </div>
                <br></br>

                <div>
                <label htmlFor="email">Your Email Address:</label>
                    <input type="email" name="email" onBlur={handleChange}
                    defaultValue={email}/>
                </div>
                <br></br>

                <div>
                <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" onBlur={handleChange}
                    defaultValue={message}/>
                </div>
                <br></br>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>

                )}

                <br></br>
                <button data-testedid="button" type="submit">Submit</button>

            </form>
        </section>
    );


export default ContactForm