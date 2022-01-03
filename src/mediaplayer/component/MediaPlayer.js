import React from 'react';
import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from "react-redux";

import '../styles/mediaplayer.css';
import Timeline from "./Timeline";
import timeList from '../../data/event.json'

let timeListData = [...timeList];
const MediaPlayer = () => {

    const stateData = useSelector(state => state);
    const dispatch = useDispatch();

    /**
     * Function to convert time from string type to seconds (as used by React Player)
     * @param {String} time
     * @return {int}
     */
    const convertToSeconds = (time) => {
        const timeArray = time.split(":");
        const seconds = parseInt(timeArray[0])*3600 + parseInt(timeArray[1])*60 + parseInt(timeArray[2]) + parseInt(timeArray)*0.001;
        return seconds;
    }

    /**
     * Handle Video Stream End
      */
    const handleVideoEnd = () => {
        //Update the caption timeline data
        timeListData = timeListData = [...timeList];
    }

    /**
     * Function to Handle time update on player
     * @param time
     */
    const handleTimeUpdate = (time) => {

          timeListData.map((data) => {

              // If timeline on player matches the entry in json data and the caption is different i.e. a different entry
                if(time.playedSeconds >= convertToSeconds(data.startTime) && time.playedSeconds <= convertToSeconds(data.endTime) && data.captionData != stateData.captions.captionData )
                {
                    const caption = {captionType: data.captionType, captionData: data.captionData}
                    dispatch({type:'pause', captions: caption});
                    timeListData.shift();      //Remove object if data has been displayed ->  to reduce unnecessary looping & computation

                }
            });

    }

    /**
     * Handle player state on click of play button
     *
     */
    const updatePlayState = () => {
        dispatch({type:'play'})
    }

    return (
        <div className="mediaHolder">
            <ReactPlayer
                className="player"
                url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_10MB.mp4'
                playing={stateData.playState.play}
                width="800px"
                height="500px"
                controls={true}
                progressInterval={100}
                onPlay={updatePlayState}
                onEnded={handleVideoEnd}
                onProgress={handleTimeUpdate}
            />
            <Timeline />
        </div>
    )
};

export default MediaPlayer;