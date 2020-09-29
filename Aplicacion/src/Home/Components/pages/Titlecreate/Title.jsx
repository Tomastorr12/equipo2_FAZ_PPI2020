import React from 'react';
import './Title.css'


const Title = ({text}) => {
    return(
        <div className='title-container'>
           <label className='title-label'>{text}</label> 
           <img src="https://1.bp.blogspot.com/-vMgoEm8XjoE/X1TCRgGg6TI/AAAAAAAAAII/s4cm2Jk-YEImwJFAfHXrChvwtTmxwm5ZQCLcBGAsYHQ/s320/logo-brochure.png" alt=""/>
        </div>
    )
};

export default Title;