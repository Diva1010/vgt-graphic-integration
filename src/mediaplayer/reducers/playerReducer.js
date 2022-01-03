import React from 'react';

const initialState = {
    playState: {play: false},
    captions: { captionType: '', captionData: ''}

}

const playerReducer = ((state = initialState, action) => {
    switch(action.type)
    {
        case 'play':
            return {...state, playState: {play: true}};
            break;

        case 'pause':
            return {...state, playState: {play: false}, captions: action.captions };
            break;
        default:
            return state;
            break;
    }
})

export default playerReducer;