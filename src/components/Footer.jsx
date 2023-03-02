import React from "react";

function Footer(){
    const d = new Date();
    const year = d.getFullYear();

    return(

        <div>
            <footer>
                <p>copyright {year}</p>
            </footer>
        </div>
    
    )
}

export default Footer;