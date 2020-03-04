import React from 'react'
import classes from './HistoryPage.module.css'
import Axios from 'axios';
import { connect } from 'react-redux'
import VideoCard from '../../Components/VideoCard/VideoCard'
class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watchVideo: localStorage.getItem("videoCount"),
            videoList: []
        }
    }

    componentDidMount() {
        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
            .then(response => {
                const watchVideos = [...response.data].filter(item => {
                    return this.props.watchvideolist.indexOf(item.id) >= 0;
                })
                this.setState({ videoList: [...watchVideos] });
            })
            .catch(err => {
                alert('Failed => ' + err.response.data);
            })
    }
    render() {
        const videoCards = this.state.videoList.map((item) => {
            return (
                <VideoCard id={item.id} title={item.title} thumbnail={item.thumbnail} key={item.id} />
            )
        })
        return (
            <div className={classes.historySection}>
                <br />
                <br />
                <br />
                <h1>History Page</h1>

                {videoCards}
            </div>
        );
    }
}
const mapPropsToGolbalStore = (globalStore) => {
    return {
        watchvideolist: globalStore.uniqueCount,
    }
}

export default connect(mapPropsToGolbalStore)(History);