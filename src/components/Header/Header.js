import React, { useState } from 'react'
import { Link } from 'gatsby'
import { document } from 'browser-monads'

import Icon from './Icon/Icon'
import Navigation from './Navigation/Navigation'
import Logo from '../../img/logo.svg'

const Header = () => {
    const [open, setOpen] = useState(false);

    if(open) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    return (
        <header className="Header" id="root">
            <Icon open={open} setOpen={setOpen} />
            <Navigation open={open} setOpen={setOpen} />
            <Link to={`/`} className="Header__logo"><img src={Logo} alt="Temopus written in text with the o being displayed as a clock." className="Header__logo--img"/></Link>
        </header>
    )
}
export default Header