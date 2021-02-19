import { useRecoilValue } from 'recoil';
import { authenticatedState } from '../../../state/Atoms';

const User = () => {
    const authenticated = useRecoilValue(authenticatedState)

    const signout = () => {
        document.cookie = 'session=CORRUPTED';
        window.location.reload();
    }

    const signin = () => {
        window.location = '/signin';
    }

    if(authenticated) {
        return ( <button onClick={signout} className="navbarBtn signinBtn">Sign Out</button> )
    } else {
        return ( <button onClick={signin} className="navbarBtn signinBtn">Sign In</button> )
    }
}

export default User;