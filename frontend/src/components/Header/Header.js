import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <>
            <div>
                <ul>
                    <Link to="/"><li>메인</li></Link>
                    <Link to="/team"><li>팀</li></Link>
                </ul>
            </div>
        </>
    );
}

export default Header;