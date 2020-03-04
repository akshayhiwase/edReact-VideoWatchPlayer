import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import classes from './Topbar.module.css';

const Topbar = (props) => {
    return (
        <div className={classes.Topbar}>
            <Link to='/' className={classes.MenuItem}>Home</Link>
            <Link to='#' className={classes.MenuItem}>Contact</Link>
            <Link to='#' className={classes.MenuItem}>About</Link>
            <Link to='/history' className={classes.MenuItem}>History</Link>
            {
                <Link to='/login' className={classes.MenuItem}>LogIn</Link>
            }
            <div className={classes.counter}>
                <h3>Unique Count : {props.uniqueCount.length}</h3>
            </div>
        </div>
    );
}
const propsMapToGlobalStore = (globalStore) => {
    return {
        uniqueCount: globalStore.uniqueCount
    }
}

export default connect(propsMapToGlobalStore)(Topbar);