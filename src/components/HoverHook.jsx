import React from 'react';
import useHover from "../hooks/useHover";

const HoverHook = () => {
    const ref = React.useRef();
    const isHovering = useHover(ref);

    return (
        <div>
            <h2>Hover custom hook</h2>
            <span>ховер - {isHovering.toString()}</span>
            <div ref={ref} style={{ width: 100, height: 100, background: isHovering ? 'red' : 'green' }}>
            </div>
        </div>
    );
};

export default HoverHook;
