import React from 'react';
import './Username.css';

import { Link } from 'react-router-dom';

class Username extends React.Component {
    state = {
        showbtn: false
    };

    handleToggle = () => this.setState({ showbtn: !this.state.showbtn });

    render() {
        return (
        <>
            <span>|</span>
            <div className={`${this.state.showbtn ? "show" : ""}`} onMouseEnter={this.handleToggle} onMouseLeave={this.handleToggle}>
                <p className="navUsername">Jimmy John</p>
                <Link className="signout__link" to="/signout">
                    <div className="signout">
                        Sign Out
                    </div>
                </Link>
            </div>
        </>
        )
    }
}

export default Username;