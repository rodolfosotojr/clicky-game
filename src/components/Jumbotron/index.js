import React from "react"


//component for my Jumbotron
function Jumbotron() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Clicky Game!</h1>
                <p className="lead">Click on an image to earn points, but don't click on any more than once! If you click on an image more than once, the game ends and you can 
                restart the game at any time.</p>
            </div>
        </div>
    );
}

export default Jumbotron;