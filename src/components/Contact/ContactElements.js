import styled from 'styled-components';
import { 
    IoLocationSharp,
    IoMailSharp,
    IoLogoWhatsapp,
    IoCallSharp,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter 
} from "react-icons/io5";

export const ContactContainer = styled.div`
    height: 670px;
    margin: 0 auto;

    @media screen and (max-width: 790px){
        height: 1090px;
    }
`



export const ContactEmail = styled.div`
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    margin: auto auto;
    max-width: 850px;
    height: 500px;
    background: #ffc50d;
    margin: 30px;
    position: relative;
    padding-left: 400px;
    margin-top: 150px;

    @media screen and (max-width: 790px){
        padding-left: 0px;
        left: 0;
        transform: translateX(0);
        height: 1100px;
        margin: 0;
        margin-top: 30px;
        text-align: center;
    }
`

export const ContactEmailH1 = styled.h1`
    font-size: 48px;
    padding-top: 58px;

    @media screen and (max-width: 790px){
        padding-top: 500px;
    }
`

export const ContactEmailP = styled.p`
    font-size: 1rem;
`


export const InputWrapper = styled.form`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 790px){
        justify-content: center;
        align-items: center;
        text-align: center
    }
`

export const InputName = styled.input`
    width: 300px;
    background: #cc9d0a;
    font-size: 1rem;
    border: none;
    padding: 10px;
    color: #fff;
    margin-top: 20px;
    margin-left: 10px;
    outline-color: #060606;

    ::placeholder{
        color: #fff;
    }
`

export const InputEmail = styled.input`
    width: 300px;
    background: #cc9d0a;
    font-size: 1rem;
    border: none;
    padding: 10px;
    color: #fff;
    margin-top: 20px;
    margin-left: 10px;
    outline-color: #060606;

    ::placeholder{
        color: #fff;
    }
`

export const InputArea = styled.textarea`
    width: 300px;
    background: #cc9d0a;
    font-size: 1rem;
    border: none;
    padding: 10px;
    color: #fff;
    margin-top: 20px;
    margin-left: 10px;
    outline-color: #060606;
    resize: none;

    ::placeholder{
        color: #fff;
    }
`

export const InputButton = styled.button`
    margin-top: 20px;
    margin-left: 10px;
    width: 180px;
    font-size: 16px;
    border: solid 3px #060606;
    padding: 10px;
    background: none;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background: #060606;
        color: white;
    }

`








export const SContact = styled.div`
    background: #060606;
    width: 400px;
    color: #fff;
    padding: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -60px;
    box-shadow: 4px 4px 10px #2a2a2a;

    @media screen and (max-width: 790px){
        width: 100%;
        left: 0;
        transform: translateY(0);
        top: 0;
    }
`

export const ContactH1 = styled.h1`
    font-size: 48px;
    padding-bottom: 10px;

    @media screen and (max-width: 790px){
        text-align: center;
    }
`

export const ContactDivDetails = styled.div`
    display: flex;
    flex-direction: row;
    margin: 25px 24px;
    align-items: center;
    
    @media screen and (max-width: 790px){
        justify-content: center;
    }
`

export const Stext = styled.p`
    font-size: 1rem;
`

export const ContactDivIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 45px;
    margin-bottom: 20px;
`

export const Clocation = styled(IoLocationSharp)`
    color: #fff;
    font-size: 1rem;
    margin-right: 12px;
`

export const Cmail = styled(IoMailSharp)`
    color: #fff;
    font-size: 1rem;
    margin-right: 12px;
`

export const CWatsup = styled(IoLogoWhatsapp)`
    color: #fff;
    font-size: 1rem;
    margin-right: 12px;
`

export const Cnumber = styled(IoCallSharp)`
    color: #fff;
    font-size: 1rem;
    margin-right: 12px;
`

export const FB = styled(IoLogoFacebook)`
    cursor: pointer;
    color: #ffc50d;
    font-size: 30px;
`

export const IN = styled(IoLogoInstagram)`
    cursor: pointer;
    color: #ffc50d;
    font-size: 30px;
`

export const TW = styled(IoLogoTwitter)`
    cursor: pointer;
    color: #ffc50d;
    font-size: 30px;
`

export const FbLink = styled.a`
    
`
