import React from 'react';
import { useKeyPress } from '../hooks/useKeyPress';

const KeyPressHook = () => {
    const isJapanPressed = useKeyPress('j')
    const isChinaPressed = useKeyPress('c')
    const isRussiaPressed = useKeyPress('r')

    return (
        <div>
            <h2>KeyPress custom hook</h2>
            <div style={{display: 'flex'}}>
                {isJapanPressed && <div>Japan</div>}
                {isChinaPressed && <div>China</div>}
                {isRussiaPressed && <div>Russia</div>}
            </div>
            <div>click button 'j', 'c', 'r' on keyboard</div>
        </div>
    )
}

export default KeyPressHook
