import React from 'react';
import emailjs from 'emailjs-com';
import {
    ContactContainer,
    ContactEmail,
    ContactEmailH1,
    ContactEmailP,
    SContact,
    ContactH1,
    ContactDivDetails,
    Stext,
    InputWrapper,
    InputName,
    InputEmail,
    InputArea,
    InputButton,
    ContactDivIcon,
    Clocation,
    Cmail,
    CWatsup,
    Cnumber,
    FB,
    IN,
    TW,
    FbLink
} from './ContactElements';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vv8kpce', 'template_3kl4lk8', e.target, 'user_Rp1KtXFQU4qkx7XX0Ge4d')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        window.alert("Sent Successfully ");
        e.target.reset();
    }

    return (
        <ContactContainer id="contact">
            <ContactEmail>
                <ContactEmailH1>Get in Touch</ContactEmailH1>
                <ContactEmailP>Feel free to drop us a line below!</ContactEmailP>
                <InputWrapper onSubmit={sendEmail}>
                    <InputName
                        name="to_name" 
                        type="text" 
                        placeholder="Input your Name" required/>
                    <InputEmail
                        name="reply_to" 
                        type="email" 
                        placeholder="Input your Email" required/>
                    <InputArea
                        name="message" 
                        rows="4" 
                        cols="50" 
                        placeholder="Your Message to Us" required></InputArea>
                    <InputButton type="submit">Send</InputButton>
                </InputWrapper>


                <SContact>
                    <ContactH1>Contact Us</ContactH1>
                    <ContactDivDetails>
                        <Clocation />
                        <Stext>Bonifacio Global City, Taguig,<br /> Kalakhang Maynila</Stext>
                    </ContactDivDetails>
                    <ContactDivDetails>
                        <Cmail />
                        <Stext>webuild@gmail.com</Stext>
                    </ContactDivDetails>
                    <ContactDivDetails>
                        <CWatsup />
                        <Stext>webuild.company</Stext>
                    </ContactDivDetails>
                    <ContactDivDetails>
                        <Cnumber />
                        <Stext>+63 989 796 9594</Stext>
                    </ContactDivDetails>
                    <ContactDivIcon>
                        <FbLink href="https://www.facebook.com/" target="_blank"><FB /></FbLink>
                        <FbLink href="https://www.instagram.com/" target="_blank"><IN /></FbLink>
                        <FbLink href="https://twitter.com/" target="_blank"><TW /></FbLink>
                    </ContactDivIcon>
                </SContact>
            </ContactEmail>
        </ContactContainer>
    )
}

export default Contact;
