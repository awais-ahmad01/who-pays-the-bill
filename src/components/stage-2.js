
import React, { useContext } from "react";

import { MyContext } from "../context";


const Stage2= ()=> {

    
    const context = useContext(MyContext);

    return(
        <>
            <div className="result_wrapper">
                <h3>The Looser is:</h3>

                <div>
                    {context.state.result}
                </div>
            </div>

            <div className="action_button"
                onClick={()=> context.resetGame()}>
                    Start Over
            </div>

            <div className="action_button btn_2"
                onClick={()=> context.getNewLooser()}>
                    Get new Looser
            </div>
        
        </>
    )
}

export default Stage2