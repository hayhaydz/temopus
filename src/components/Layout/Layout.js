import React from 'react';
import '../../styles/main.scss';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SEO from '../SEO/SEO'

const Layout = ({ customTitle, customDescription, customImgSrc, children }) => {
    return (
        <main className="Layout">
            <Header />
            <SEO customTitle={customTitle} customDescription={customDescription} customImgSrc={customImgSrc} />
            {children}
            <Footer />
        </main>
    )
}
export default Layout