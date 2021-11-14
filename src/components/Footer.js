import React from 'react'

export default function Footer() {
    let footerStyle={
        position:"fixed",
        bottom:"0",
        width:"100%"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p >
                Copyright &copy; Easy-study.com
            </p>
        </footer>
    )
}
