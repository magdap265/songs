import {combineReducers } from 'redux';

const songsReduser = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All stars', duration: '3:15' },
        { title: 'I Want in That Way', duration: '1:45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG-DELECTED') {
        return action.payloady;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReduser,
    selectedSong: selectedSongReducer
})