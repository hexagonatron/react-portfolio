import React, {useRef} from 'react';

const ContactForm = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const sendMessage = (e) => {
        e.preventDefault()

        //Todo, API integration
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(messageRef.current.value)
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col col-12 col-md-8">
                    <h2 className="text-center mt-3">Find me across the internet</h2>
                    <div className="d-flex justify-content-center social-links">
                        <p><a
                            href="https://github.com/hexagonatron/" target="_blank" rel="noopener noreferrer"><i
                                className="fab fa-github pl-1"></i></a></p>
                        <p><a
                            href="https://www.linkedin.com/in/ben-fawcett-1595561a2/" target="_blank" rel="noopener noreferrer"><i
                                className="fab fa-linkedin pl-1"></i></a></p>
                    </div>
                    <h2 className="text-center">Send me a message</h2>
                    <form className="form my-2 col col-12"
                    onSubmit={sendMessage}
                    >
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" name="name"
                            ref={nameRef}/>
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="Your email" name="email"
                            ref={emailRef}/>
                        </div>

                        <div className="form-group">
                            <textarea className="contact-message" placeholder="Message" name="message"
                            ref={messageRef}></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn contact-button" value="Send"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;