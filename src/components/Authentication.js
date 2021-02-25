import React, {useEffect} from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Redirect } from "react-router-dom";
import LoadingScreen from '../components/loading screen/LoadingScreen';

import { authenticatingState, authenticatedState, userEmailState } from '../state/Atoms'

const Authentication = (props) => {
    let ORIGIN = process.env.NODE_ENV === 'production' ? 'http://localhost:3001' : 'https://diffusion-backend-development.up.railway.app';

    const [authenticating, setAuthenticating] = useRecoilState(authenticatingState);
    const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
    const setUserEmail = useSetRecoilState(userEmailState);

    const authenticate = () => {
        setAuthenticating(true)

        let cookie = document.cookie;
        cookie = cookie.slice(8)
        let data = {
            cookie: cookie
        }

        fetch(`${ORIGIN}/auth/check`, {
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
                setAuthenticating(false);
                setAuthenticated(true);
                setUserEmail(data.email);
            } else {
                setAuthenticating(false);
                setAuthenticated(false);
            }
        })
    }

    useEffect(() => {
        authenticate();
    }, []);

    if(!authenticating) {
        let Component = props.component;
        let path = props.path;

        switch(path) {
            case '/':
                if(authenticated) {
                    return ( < Redirect to="faq" /> )
                } else {
                    return ( < Component /> )
                }
            case '/signup':
                if(authenticated) {
                    return ( < Redirect to="faq" /> )
                } else {
                    return ( < Component /> )
                }
            case '/signin':
                if(authenticated) {
                    return ( < Redirect to="faq" /> )
                } else {
                    return ( < Component /> )
                }
            case '/write':
                if(authenticated) {
                    return ( < Component /> )
                } else {
                    return ( < Redirect to="signin" /> )
                }
            case '/read':
                if(authenticated) {
                    return ( < Component /> )
                } else {
                    return ( < Redirect to="signin" /> )
                }
            default:
                console.log('default case here');
        }
    } else {
        return ( < LoadingScreen /> )
    }
}

export default Authentication;
