/* eslint-disable */
import React from 'react'

const Contact = ({ budget, setBudget }) => {
    const handleChange = (event) => {
        setBudget(event.target.value)
    }
    return (
        <section className="Contact" id="contact">
            <h1 className="Contact__heading heading">Get in contact.</h1>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="Contact" className="Contact__form">
                <input type="hidden" name="bot-field"/>
                <input type="hidden" name="form-name" value="Contact"/>
                <div className="Contact__form--row">
                    <input type="text" className="Contact__form--input" name="Name" placeholder="Name" required />
                    <input type="Email" className="Contact__form--input" name="Email" placeholder="Email" required />
                </div>
                <div className="Contact__form--row">
                    <input type="text" className="Contact__form--input" name="Subject" placeholder="Subject" />
                    <select name="Budget" value={budget} className="Contact__form--input Contact__form--select" onChange={handleChange} required>
                        <option value="Budget">Budget</option>
                        <option value="£250+">£250+</option>
                        <option value="£500+">£500+</option>
                        <option value="£999+">£999+</option>
                    </select>
                </div>
                <textarea name="Message" className="Contact__form--input Contact__form--textarea" placeholder="Message"></textarea>
                <button type="submit" className="Contact__form--btn">Send</button>
            </form>
        </section>
    )
}
export default Contact