import React from 'react';
import classes from './HomePage.module.css';
import Axios from 'axios';
import VideoCard from '../../Components/VideoCard/VideoCard';

class HomePage extends React.Component {
    state = {
        videoList: [],
        currentCount: 0,
    }

    componentDidMount() {
        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
            .then(response => {
                this.setState({ videoList: [...response.data] });
            })
            .catch(err => {
                alert('Failed => ' + err.response.data);
            })
    }
    onVideoClick = () => {
        const count = this.state.currentCount + 1;
        this.setState({ currentCount: count })
    }

    render() {
        const videoCards = this.state.videoList.map((item) => {
            return (
                <VideoCard key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} onVideoClick={this.onVideoClick} />
            )
        })
        return (
            <div className={classes.MainContainer}>
                <div className={classes.VideoGrid}>
                    {videoCards}
                </div>
            </div>
        );
    }
}

export default HomePage;