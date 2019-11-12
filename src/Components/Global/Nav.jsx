import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div className="container">
            <div className="row justify-content-between p-4 mb-4">
            <Link><div className="navbar-brand">
                    Jared Wight
                </div></Link>
                <div className="d-inline-flex">
                    <a href="/about">ABOUT</a><div className='px-2'>|</div><a href='/portfolio'>PORTFOLIO</a>
                </div>
            </div>
        </div>
    )
}
