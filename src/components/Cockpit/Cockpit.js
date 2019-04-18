import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log('useEffect Cockpit.')
    });

    const classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = styles.Red;
    }

    if (props.personsLength <= 2) {
        classes.push(styles.Red);
    }

    if (props.personsLength <= 1) {
        classes.push(styles.Bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Persons</h1>
            <p className={classes.join(' ')}>
                This is working!!
            </p>
            <button
                className={btnClass}
                onClick={props.togglePersonsHandler}
            >
                {props.showPersons ? 'ON' : 'OFF'}
            </button>
        </div>
    );
}

export default React.memo(cockpit);