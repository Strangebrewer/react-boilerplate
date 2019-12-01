import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (WrappedComponent, passedProps) {
   class Authentication extends Component {

      componentDidMount() {
         this.checkAuthenticated(this.props);
      }

      componentDidUpdate(nextProps) {
         this.checkAuthenticated(nextProps);
      }

      checkAuthenticated = props => {
         const { required } = passedProps;
         const { authenticated } = props;
         // if authentication is required and the user is not logged in:
         if (required && !authenticated) this.props.history.push('/login');
         // this will keep logged-in users from ending up on the login page (or any other page you want to hide from logged in users):
         if (!required && authenticated) this.props.history.push('/');
      }

      render() {
         return <WrappedComponent {...this.props} {...passedProps} />;
      }
   }

   function mapStateToProps(state) {
      return { authenticated: state.auth.authenticated };
   }

   return connect(mapStateToProps)(Authentication);
}