import React from 'react'
import Navbars from "./Navbars"

const Layout = ({ children }) => {
    return (
        <>
            <Navbars />
            {children}
        </>
    )
}

export default Layout