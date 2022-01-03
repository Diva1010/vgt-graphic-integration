import React from 'react';
import '../styles/mediaplayer.css'
import { useSelector} from "react-redux";

let logoAvailable = false;

const Timeline = () => {

    const captionUpdate = useSelector(state => state.captions);

    /**
     * Function to breakline when it encounters '\n' in a string (used for multiline captions)
     * @param {String} string
     */
    const escapedNewLineToLineBreakTag = (string) => string.split('\n').map((item, index) => (index === 0) ? item : [<br key={index} />, item])

    let caption = '';
    let title='';

    // Update Text based on caption type
    switch(captionUpdate.captionType)
        {
            case 'Logo': logoAvailable = true;
                break;
            case 'nameSuper':
                caption = Object.entries(captionUpdate.captionData).map(([k, v]) => `${v}`).join('\n');

                break;
            case 'title': title = Object.entries(captionUpdate.captionData).map(([k, v]) => `${v}`).join('\n');
                break;
        }



    return (
        <div className="caption">
            <div className={logoAvailable ? 'logo': ''}></div>
            <div className={caption && 'nameSupper'}>{escapedNewLineToLineBreakTag(caption)}</div>
            <div className={title && 'title'}>{title}</div>
        </div>
    )
}

export default Timeline;