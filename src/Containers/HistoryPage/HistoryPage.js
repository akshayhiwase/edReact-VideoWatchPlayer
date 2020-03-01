import React from 'react'
import classes from './HistoryPage.module.css'
import Axios from 'axios'
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
                this.setState({ videoList: [...response.data] });
            })
            .catch(err => {
                alert('Failed => ' + err.response.data);
            })
    }
    render() {
        return (
            <div className={classes.historySection}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>This IS the History Page{this.state.watchVideo}</h1>
            </div>
        );
    }
}

export default History;