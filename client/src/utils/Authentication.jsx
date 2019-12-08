import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

export default (WrappedComponent, passedProps) => {
   class Authentication extends Component {
      state = {
         redirect: false,
         destination: ''
      }

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
         if (required && !authenticated)
            this.setState({ redirect: true, destination: 'login'});

         // this will keep logged-in users from ending up on the login page (or any other page you want to hide from logged in users):
         if (!required && authenticated)
            this.setState({ redirect: true, destination: '' });
      }

      render() {
         if (this.state.redirect)
            return <Redirect to={`/${this.state.destination}`} />

         return <WrappedComponent {...this.props} {...passedProps} />;
      }
   }

   function mapStateToProps(state) {
      return { authenticated: state.auth.authenticated };
   }

   return connect(mapStateToProps)(Authentication);
}