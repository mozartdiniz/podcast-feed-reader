import React from 'react';

const episodeList = (props) => (
    <div>
        {props.episodes.map(episode => (
            <div key={episode.title}>{episode.title}</div>
        ))}
    </div>
);

export default episodeList;