import React from 'react'

import Pricing from '../Pricing/Pricing'

const Cost = ({ setBudget }) => {
    return (
        <section className="Cost" id="pricing">
            <h1 className="Cost__heading heading">So what's the cost?</h1>
            <Pricing setBudget={setBudget} />
        </section>
    )
}
export default Cost