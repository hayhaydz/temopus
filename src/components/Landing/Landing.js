import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Landing = () => {
    return (
        <section className="Landing">
            <h1 className="Landing__headings Landing__heading">Website design & development.</h1>
            <h2 className="Landing__headings Landing__subheading">Bringing the <b className="Landing__subheading--bold">past</b> into the <b className="Landing__subheading--bold">future</b>.</h2>
            <p className="Landing__paragraph">We are focussed on creating the best experience for our clients and their customers. Using modern technlogies to provide an enjoyable and unique experience to our users. <br/>Based in Somerset. Built in Somerset.</p>
            <div className="Landing__buttons">
                <AnchorLink to="/#contact" title="Contact" className="Landing__buttons--btn Landing__buttons--btn--primary" >Contact Us</AnchorLink>
                <AnchorLink to="/#projects" title="Projects" className="Landing__buttons--btn Landing__buttons--btn--secondary" >View Projects</AnchorLink>
            </div>
        </section>
    )
}
export default Landing