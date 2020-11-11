import React from 'react';

import useDarkState from './useDarkState';
import Context from './context';

const DarkStateProvider=({children})=>{
    return (
        <Context.Provider
        value={useDarkState()}
        >
            {children}
        </Context.Provider>
    )
}
export default DarkStateProvider;

