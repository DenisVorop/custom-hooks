import React from 'react';
import { useOutside } from '../hooks/useOutside';

const OutsideHook = () => {
    const { ref, isShow, setIsShow } = useOutside(false)

    return (
        <div>
            <h2>Outside cusom hook</h2>
            {isShow &&
                <div
                    ref={ref}
                    style={{ width: 100, height: 20, background: 'black', color: 'white' }}
                >
                    click outside this
                </div>
            }
            <button onClick={setIsShow}>visible / !visible</button>
        </div>
    )
}

export default OutsideHook
