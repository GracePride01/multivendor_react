import React from 'react';
import './widgetSm.css';

export default function Wsmall(){
    return(
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Memebers</span>
                <ul className='widgetSmList'>
                    <li className='widgetSmListItem'>
                        <img 
                        /* src={require("")} */
                        alt="" 
                        className='widgetSmImg'></img>
                        {/* https://www.youtube.com/watch?v=aTPkos3LKi8     1:03:43 */}
                        <div className='widgetSmUser'>
                            <span className='widgetSmUsername'>Ananthi</span>
                            <span className='widgetSmUsername'>Seller</span>
                        </div>
                        <button className='widgetSmButton'>
                            
                        </button>
                    </li>
                </ul>
        </div>
    )
}