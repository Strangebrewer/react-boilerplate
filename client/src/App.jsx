import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import Content from './pages/Content';
import Landing from './pages/Landing';
import Login from './pages/Authoritaw';
import Authentication from './utils/Authentication';
import Spinner from './components/Elements/Spinner';
import NoMatch from './pages/NoMatch';

import { getCurrentUser } from './redux/actions/auth_actions';

class App extends Component {
   state = {
      loading: true
   }

   async componentDidMount() {
      try {
         if (localStorage.getItem('token'))
            await this.props.getCurrentUser();
      } catch (e) {
         if (localStorage.getItem('token'))
            localStorage.removeItem('token');
      } finally {
         this.setState({ loading: false });
      }
   }

   render() {
      return (
         this.state.loading
            ? (
               <div>
                  <Spinner />
               </div>
            ) : (
               <Router>
                  <Switch>
                     <Route exact path="/">
                        {routeProps => <Landing {...routeProps} />}
                     </Route>

                     <Route
                        exact
                        path="/login"
                        component={Authentication(Login, { required: false })}
                     />

                     <Route
                        exact
                        path="/content"
                        component={Authentication(Content, {
                           message: "This message was passed as a prop",
                           required: true,
                           user: this.props.user
                        })}
                     />

                     <Route path="*" component={NoMatch} />
                  </Switch>
               </Router>
            )
      );
   }
}

function mapStateToProps(state) {
   return {
      user: state.user
   }
}

const mapDispatchToProps = { getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
