import React from 'react';
import { Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticating: true,
            isAuthenticated: false
        };
    }

    authenticate = () => {
        this.setState({ isAuthenticating: true })

        let cookie = document.cookie;
        cookie = cookie.slice(8)
        let data = {
            cookie: cookie
        }

        fetch('http://localhost:3001/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.message === 'Check for email and password was successful!'){
                document.cookie = `session=${data.session}`
                this.setState({ isAuthenticated: true, isAuthenticating: false })
            } else {
                this.setState({ isAuthenticating: false })
            }
        })

    }

    componentDidMount() {
        this.authenticate();
    }

    render() {
        let Component = this.props.component;

        if(this.state.isAuthenticating === false) {
            if(this.state.isAuthenticated === true) {
                return ( < Component /> )
            } else {
                return ( < Redirect to="/signin" /> )
            }
        } else {
            return ( <h1>Authenticating...</h1> )
        }
    }
}

export default ProtectedRoute;
