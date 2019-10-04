export const selectSong = (song) => {
    //RETURN AN ACTION
    return {
        type: 'SONG-SELESTED',
        payload: song
    };
};

