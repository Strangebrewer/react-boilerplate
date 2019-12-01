import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NoMatch extends Component {
   render() {
      const style = {
         width: '100%',
         height: '100vh',
         background: '#282c34',
         textAlign: 'center',
         padding: '100px',
         color: '#09d3ac',
         color: 'white'
      }
      return (
         <div style={style}>
            <p>You look lost. <Link to="/"><code>Start over?</code></Link></p>
         </div>
      );
   }
}

export default NoMatch;