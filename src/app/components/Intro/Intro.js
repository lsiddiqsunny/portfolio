import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Colors from '../../styles/Colors';
import styles from './IntroStyles';

function Intro(props) {
    const { classes } = props;
    return ( <
        div >
        <
        div className = { classes.intro } >
        <
        div style = {
            { color: Colors.themeFontColor } }
        className = { classes.hi } >
        Hi, my name is < /div>

        <
        div style = {
            { color: Colors.nameColor } }
        className = { classes.name } >
        Latif Siddiq Sunny < /div>

        <
        div style = {
            { color: Colors.motoColor } }
        className = { classes.moto } >
        Software Engineering, System Design and Security Enthusiastic < /div>

        <
        div style = {
            { color: Colors.shortDescriptionColor } }
        className = { classes.shortDescription } >
        I 'm a final year cs undergrad student,<br /> seeking internship or full time opportunities.</div>

        <
        div className = { classes.mailMe } >
        <
        a className = { classes.mailLink }
        href = "mailto:lsiddiqsunny@gmail.com" > send me mail! < /a> <
        /div> <
        /div> <
        /div>
    );
}

Intro.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Intro);