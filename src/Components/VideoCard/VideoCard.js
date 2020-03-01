import React from 'react';
import PropType from 'prop-types'
import classes from './VideoCard.module.css';
import { Link } from 'react-router-dom';
import { watchUrl } from '../../Utilities/Utils'

const VideoCard = (props) => {
    return (
        <div className={[classes.VideoCard, props.isPlaylist ? classes.PlaylistCard : null].join(' ')}>
            <Link to={watchUrl + props.id}>
                <img className={classes.VideoThumbnail} src={props.thumbnail} alt="Video Thumbnail" />
                <h3 className={classes.VideoTitle}>{props.title}</h3>
            </Link>
        </div>
    );
}
VideoCard.propTypes = {
    id: PropType.number.isRequired,
    thumbnail: PropType.string.isRequired
}
export default VideoCard;