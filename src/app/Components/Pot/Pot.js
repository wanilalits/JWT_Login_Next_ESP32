import React from 'react';
import pot from './pot.module.css';
function Pot(props) {
    var a = props.wsdata


    return (
        <div className={pot.background}>

            <div className={pot.outer}>
                <div className={pot.knowb} style={{ transform: 'rotate(' + a + 'deg)', transition: 'transform 1s' }}>
                    <div className={pot.arrow} style={{ transform: 'rotate(' + a + 'deg)', transition: 'transform 1s' }}>
                        <div className={pot.leftarrow} ></div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Pot;
//style={{transform: 'rotate('+(data-28)*180+'deg)', transition: 'transform 1s' } }