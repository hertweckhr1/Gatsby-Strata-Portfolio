import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://linkedin.com/in/hannahvanseeters/" className="icon fa-linkedin-square"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/hertweckhr1" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.instagram.com/wayoftheforest/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="mailto:hannahvanseeters@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
