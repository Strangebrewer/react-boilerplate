import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { connect } from 'react-redux';

import { logout } from '../redux/actions/auth_actions';

const Content = props => {
   return (
      <Wrapper>
         <h2>Hi there!</h2>
         <h2>This is <em>protected content.</em></h2>
         <h3>You should only be able to see it if you are logged in.</h3>
         <h2>See for yourself : &nbsp;<Button onClick={props.logout}><code>Logout</code></Button></h2>
         <h3>You can also go back to the <Link to="/"><code>landing</code></Link> page</h3>
         <h3>But, since you're logged in, you cannot go to the <Link to="/"><code>login</code></Link> page - it will just redirect you to the landing page</h3>
         <h3>You can pass props through the second prop of the Authentication HOC</h3>
         <h4>Like so:</h4>
         <p>{props.otherProps}</p>
      </Wrapper>
   )
};

export default connect(state => ({}), { logout })(Content);

const Wrapper = styled.div`
   background-color: ${props => props.theme.bg};
   color: white;
   min-height: 100vh;
   padding: 50px;
   text-align: center;
   width: 100%;
   em, strong, p {
      color: ${props => props.theme.green};
   }
   h2, h4 {
      line-height: 1.5;
   }
   h3 {
      margin-top: 50px;
   }
   h4 {
      margin-bottom: 35px;
   }
`;

const Button = styled.button`
   background-color: transparent;
   border: none;
   cursor: pointer;
   font-family: unset;
   font-size: unset;
   /* outline: none; */
`;