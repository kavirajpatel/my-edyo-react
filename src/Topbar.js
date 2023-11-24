import React from "react";

function Topbar() {
    return(
        <>
         <header>
        <div className="navbar">
            <div>
                <div className="logo">EDYODA
                </div>
                <p className="stories">Stories</p>
            </div>

            <div className="dropdowntext">
                <p>Explore categories <i class="fa-solid fa-caret-down"></i></p>
            </div>

        </div>
    </header>
        </>
    );
}

export default  Topbar;