/* eslint-disable */

const Axios = require('axios')
    , Fs = require('fs')
    , { to } = require('await-to-js');

const PlaylistID = "PLO0Bcg9HddJaixdjP0wfVX7pL4k6MRJZT";

let Videos = [], Authors = {};

async function fetchVideos(opt = {}) {
    let err, result;

    [ err, result ] = await to(
        Axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
                playlistId: PlaylistID,
                part: 'snippet',
                maxResults: 50,
                key: process.argv[2],
            },
        })
    );

    if (err) {
        console.log('Failed to fetch Youtube playlist data', err);
        process.exit(1);
    }

    let vIDs = [];

    for (let i of result.data.items)
        vIDs.push(i.snippet.resourceId.videoId);

    if (vIDs.length <= 0) {
        console.log('Empty playlist data');
        process.exit(1);
    }

    [ err, result ] = await to(
        Axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                id: vIDs.join(','),
                part: 'snippet',
                maxResults: 50,
                key: process.argv[2],
            },
        })
    );

    let cIDs = [];

    for (let i of result.data.items) {
        Videos.push(i);

        if (!cIDs.includes(i.snippet.channelId))
            cIDs.push(i.snippet.channelId);
    }

    if (Videos.length <= 0) {
        console.log('Empty videos data');
        process.exit(1);
    }

    console.log(cIDs);

    [ err, result ] = await to(
        Axios.get('https://www.googleapis.com/youtube/v3/channels', {
            params: {
                id: cIDs.join(','),
                part: 'snippet',
                maxResults: 50,
                key: process.argv[2],
            },
        })
    );

    if (err) {
        console.log('Failed to fetch Youtube channel data', err);
        process.exit(1);
    }

    for (let i of result.data.items)
        Authors[i.id] = i;

    if (Object.keys(Videos).length <= 0) {
        console.log('Empty channel data');
        process.exit(1);
    }

    Fs.writeFileSync('src/assets/data/Videos.json', JSON.stringify({ Videos, Authors }));
}

fetchVideos();
