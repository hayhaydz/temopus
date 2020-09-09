import React from 'react'

const Contact = ({ budget, setBudget }) => {

    const handleChange = (event) => {
        console.log(event.target);
        // setBudget("")
    }
    console.log(budget);
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
                    <select name="Budget" value={budget} className="Contact__form--select" onBlur={handleChange} required>
                        <option value="Budget">Budget</option>
                        <option value="£250+">£250+</option>
                        <option value="£500+">£500+</option>
                        <option value="£999+">£999+</option>
                    </select>
                </div>
            </form>
        </section>
    )
}
export default Contact