import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { connect } from 'react-redux';

import { logout } from '../redux/actions/auth_actions';

const Landing = props => {

   const user_exists = !!Object.keys(props.user).length;

   return (
      <Wrapper>
         <Button1>Hi!</Button1>
         <p>
            Here's a bunch of crap.
         </p>
         <Button2>We are Siamese if you pleeease.</Button2>
         <Button3>We are Siamese if you <em>don't</em> please!</Button3>

         {
            user_exists
               ? (
                  <>
                     <p>You're here! Ain't that nice?</p>
                     <Button4 onClick={props.logout}>'I would like to log out.'</Button4>
                     <p>I would like to see <Link to="/content"><code>protected content</code></Link></p>
                  </>
               ) : (
                  <>
                     <p>Who are you?</p>
                     <Link to="/login"><Button4>'I would like to log in.'</Button4></Link>
                     <Link to="/login"><Button4>'I would like to sign up.'</Button4></Link>
                  </>
               )
         }
      </Wrapper>
   )
}

export default connect(state => ({ user: state.user }), { logout })(Landing);

const Wrapper = styled.div`
   background-color: ${props => props.theme.bg};
   color: white;
   min-height: 100vh;
   padding-top: 50px;
   text-align: center;
   width: 100%;
   button {
      border-radius: 4px;
      display: block;
      font-size: 18px;
      padding: 6px 20px;
   }
   p {
      line-height: 1.5;
   }
`;

const Button1 = styled.button`
   background: transparent;
   border: 1px solid ${props => props.theme.warning};
   color: ${props => props.theme.green};
   font-size: 24px !important;
   margin: 0 auto 20px auto;
`;

const Button2 = styled.button`
   background: transparent;
   border: 1px solid ${props => props.theme.green};
   color: ${props => props.theme.danger};
   margin: 20px auto;
`;

const Button3 = styled.button`
   background: transparent;
   border: 1px solid ${props => props.theme.danger};
   color: ${props => props.theme.warning};
   margin: 20px auto;
`;

const Button4 = styled.button`
   background: ${props => props.theme.primary};
   border: none;
   color: ${props => props.theme.warning};
   cursor: pointer;
   margin: 20px auto;
   :active {
      outline: none;
      transform: translateY(2px);
   }
`;