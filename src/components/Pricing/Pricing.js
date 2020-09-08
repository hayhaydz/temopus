/* eslint-disable */
import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Pricing = ({ setBudget }) => {
    return (
        <div className="Pricing">
            <div className="Pricing__container Pricing__container--secondary">
                <h3 className="Pricing__container--title">Lite</h3>
                <h1 className="Pricing__container--price">&pound;250&#43;</h1>
                <span className="Pricing__container--linkContainer" onClick={() => setBudget(250)}><AnchorLink to={`/#contact`} className="Pricing__container--link">Contact</AnchorLink></span>
            </div>
            <div className="Pricing__container Pricing__container--primary">
                <h3 className="Pricing__container--title">Regular</h3>
                <h1 className="Pricing__container--price">&pound;500&#43;</h1>
                <span className="Pricing__container--linkContainer" onClick={() => setBudget(500)}><AnchorLink to={`/#contact`} className="Pricing__container--link">Contact</AnchorLink></span>
            </div>
            <div className="Pricing__container Pricing__container--secondary">
                <h3 className="Pricing__container--title">Custom</h3>
                <h1 className="Pricing__container--price">&pound;999&#43;</h1>
                <span className="Pricing__container--linkContainer" onClick={() => setBudget(999)}><AnchorLink to={`/#contact`} className="Pricing__container--link">Contact</AnchorLink></span>
            </div>
        </div>
    )
}
export default Pricing