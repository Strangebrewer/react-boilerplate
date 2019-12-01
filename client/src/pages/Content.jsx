import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { connect } from 'react-redux';

import { logout } from '../redux/actions/auth_actions';

const Content = props => {
   return (
      <Wrapper>
         <div>
            <h2>Hi there!</h2>
            <h2>This is <em>protected content.</em></h2>
         </div>

         <Stripe>
            <h3>You should only be able to see it if you are logged in.</h3>
            <h2>See for yourself : &nbsp;<Button onClick={props.logout}><code>Logout</code></Button></h2>
         </Stripe>

         <div>
            <h3>You can also go back to the <Link to="/"><code>landing</code></Link> page</h3>
         </div>

         <Stripe>
            <h3>But, since you're logged in, you cannot go to the <Link to="/login"><code>login</code></Link> page</h3>
            <h2>- it will just redirect you to the landing page</h2>
         </Stripe>

         <div>
            <h3>You can pass props as the second arg of the Authentication HOC</h3>
            <h4>Like so:</h4>
         </div>

         <Stripe>
            <p>{props.message}</p>
            <p>This is the current user:</p>
            <p>id: <code>{props.user._id}</code></p>
            <p>username: <code>{props.user.username}</code></p>
         </Stripe>
      </Wrapper>
   )
};

export default connect(state => ({}), { logout })(Content);

const Wrapper = styled.div`
   background-color: ${props => props.theme.bg};
   color: white;
   min-height: 100vh;
   padding: 50px 0;
   text-align: center;
   width: 100%;
   em, strong, p {
      color: ${props => props.theme.green};
   }
   h2, h3, h4, p {
      max-width: 800px;
      margin: auto;
   }
   h2, h4 {
      line-height: 1.5;
   }
   h3 {
      margin-bottom: 8px;
   }
   p {
      line-height: 1.2;
   }
`;

const Stripe = styled.div`
   background-color: ${props => props.theme.grey8};
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 30px auto;
   height: 100px;
   :last-child {
      height: 140px;
      margin-top: 10px;
   }
`;

const Button = styled.button`
   background-color: transparent;
   border: 1px solid ${props => props.theme.green};
   border-radius: 4px;
   padding: 3px 10px 6px 10px;
   cursor: pointer;
   font-family: unset;
   font-size: unset;
   :active {
      transform: translateY(2px);
   }
`;
