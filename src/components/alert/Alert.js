import React, { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { alertState } from '../../state/Atoms';

import './Alert.css';

const Alert = () => {
    const [alert, setAlert] = useRecoilState(alertState);

    useEffect(() => {
        setTimeout(() => { setAlert({ display: false, message: '' }) }, 3000)
    })

    if(alert.display) {
        return (
        <>
            <div className="alertDiv">
                <div className="timeoutBar"></div>
                <div className="alertBox">
                    <h4>{alert.message}</h4>
                </div>
            </div>
        </>
        )
    } else {
        return (<div></div>)
    }
}

export default Alert;