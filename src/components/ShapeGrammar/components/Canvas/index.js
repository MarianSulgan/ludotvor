import React, { Component } from 'react';

// import Svg from './components/Svg';
import './style.css';

class Canvas extends Component {
    render() {
        // const elem = (
        //     <g>
        //         <circle cx="150" cy="100" r="80" fill="green" />
        //         <text x="150" y="125" fontSize="60" textAnchor="middle" fill="white">SVG</text>
        //         <g transform="translate(200,275)">
        //             <g>
        //                 <circle cx="150" cy="100" r="80" fill="green" />
        //                 <text x="150" y="125" fontSize="60" textAnchor="middle" fill="white">SVG</text>
        //             </g>
        //         </g>
        //     </g>
            
        // );
        return (
            <div className="canvas canvas_editor">
                <div className="canvas__layer canvas__layer_product"></div>
                <div className="canvas__layer canvas__layer_svg"></div>
                {/* <Svg 
                    className="canvas__svg"
                    version="1.1"
                    baseProfile="full"
                    width="300px" 
                    height="300px"
                    xmlns="http://www.w3.org/2000/svg"
                    data={ elem } />*/}
            </div>
        );
    }
}

export default Canvas;
