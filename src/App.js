
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CameraStart from './Components/CameraStart'
// import NavBar from './Components/NavBar'
// import { Col } from 'react-bootstrap'
import './App.css';
import Associado from './Pages/Associado';
import Cadastroassociado from './Pages/Cadastroassociado';
import Login from './Pages/Login';

function App () {
    // const style = {
    //     background: '#efefef',
    //     boxShadow:
    //         '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19)'
    // }
    return (
        // <Container style={ style }>
            // <Associado />
            // <Cadastroassociado />
        // </Container>       

        //  <Container style={ style }>
        
        <Router>
            <Switch>
                {/* <Route exact path='/' component={ Associado } /> */ }
                
                <Route exact path='/' component={ Login } />
                <Route path='/associado' component={ Associado } />
                <Route path='/cadastroassociado' component={ Cadastroassociado } />

            </Switch>
        </Router>
            
        // </Container>

    )
}
export default App


