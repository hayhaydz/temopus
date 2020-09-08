/* eslint-disable */
import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Navigation = ({open, setOpen}) => {
    return (
        <div className="Navigation" style={{ display: open ? 'flex' : 'none'}}>
            <nav className="Navigation__nav">
                <ul className="Navigation__nav--ul">
                    <li className="Navigation__nav--li" onClick={() => setOpen(!open)}><AnchorLink to={`/#root`} className="Navigation__nav--link">Home</AnchorLink></li>
                    <li className="Navigation__nav--li" onClick={() => setOpen(!open)}><AnchorLink to={`/#projects`} className="Navigation__nav--link">Projects</AnchorLink></li>
                    <li className="Navigation__nav--li" onClick={() => setOpen(!open)}><AnchorLink to={`/#pricing`} className="Navigation__nav--link">Pricing</AnchorLink></li>
                    <li className="Navigation__nav--li" onClick={() => setOpen(!open)}><AnchorLink to={`/#about`} className="Navigation__nav--link">About us</AnchorLink></li>
                    <li className="Navigation__nav--li" onClick={() => setOpen(!open)}><AnchorLink to={`/#contact`} className="Navigation__nav--link">Contact us</AnchorLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navigation