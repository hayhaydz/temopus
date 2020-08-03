import React from 'react'
import { Link } from 'gatsby'

const Navigation = ({open, setOpen}) => {
    return (
        <div className="Navigation" style={{ display: open ? 'flex' : 'none'}}>
            <nav className="Navigation__nav">
                <ul className="Navigation__nav--ul">
                    <li className="Navigation__nav--li"><Link to={`/`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active" >Home</Link></li>
                    <li className="Navigation__nav--li" ><Link to={`/projects`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active" >Projects</Link></li>
                    <li className="Navigation__nav--li" ><Link to={`/pricing`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active" >Pricing</Link></li>
                    <li className="Navigation__nav--li" ><Link to={`/about`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active" >About Us</Link></li>
                    <li className="Navigation__nav--li" ><Link to={`/contact`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active" >Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navigation