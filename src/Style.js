import styled from 'styled-components';
import {motion} from 'framer-motion';

export const About=styled(motion.div)`
    min-height:90vh;
    display:flex;
    justify-content:center;
    padding:5rem 10rem;
    color:white;

`
export const Description=styled.div`
    z-index:2;
    margin-top:5%;
    padding-right:5rem;
    h2{
        font:64px Roboto,sans-serif;
    }
    .descrip{
        font:24px Roboto,sans-serif;
        color:#617D98;
        margin:5rem;
    }
`
export const Image=styled.div`
    flex:1;
    z-index:2;
    overflow:hidden;
    img{
        width:100%;
        height:80vh;
        object-fit:cover;
    }
`

export const Hide=styled.div`
    overflow:hidden;
`