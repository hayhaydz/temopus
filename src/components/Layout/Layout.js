import React from 'react';
import '../../styles/main.scss';

const Layout = ({ chlidren }) => {
    return (
        <main className="Layout">
            {chlidren}
        </main>
    )
}
export default Layout