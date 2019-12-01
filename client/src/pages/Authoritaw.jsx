import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Login from '../components/Elements/Forms/Login';
import Signup from '../components/Elements/Forms/Signup';

const Auth = () => {
   return (
      <Wrapper>
         <Login />
         <Signup />
         <p><Link to="/"><code>&lt;-- home</code></Link></p>
      </Wrapper>
   )
};

export default Auth;

const Wrapper = styled.div`
   background-color: #fff;
   display: flex;
   justify-content: center;
   min-height: 100vh;
   min-width: 100%;
   position: relative;
   button {      
      border-radius: 4px;
      display: block;
      font-size: 18px;
      padding: 6px 20px;
   }
   p {
      position: absolute;
      bottom: 50px;
      text-align: center;
   }
`;