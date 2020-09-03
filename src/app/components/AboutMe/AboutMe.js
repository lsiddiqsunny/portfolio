import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import TitleHead from '../Header/titleHead';

import DP from '../../assets/sunny.jpg';
import styles from './AboutMeStyles';

function AboutMe(props) {
    const { classes } = props;

    return ( <
        div className = { classes.mainBody } >
        <
        div className = { classes.heading } >
        <
        TitleHead number = "01."
        caption = "About Me" / >
        <
        /div>

        <
        div className = { classes.content } >
        <
        div className = { classes.mobile } >
        <
        div className = { classes.mobilePara } >
        <
        p > Hi!I 'm Latif. I am in the final year of my undergrad course at <
        a className = { classes.link }
        href = "https://www.buet.ac.bd/web/"
        target = "blank" > BUET < /a>
        and expecting to complete graduation by October, 2020. My major is in
        <
        a className = { classes.link }
        href = "https://cse.buet.ac.bd/"
        target = "blank" > Computer Science and Engineering. < /a> <
        br / > < br / > I am currently working on a group project called < i > ShashtoSheba < /i> that telemedicine application will help to connect doctor and patient from remote area. <
        br / > < br / > I am doing my thesis work on < i > SQL Injection Vulnerability Detection and Removal < /i>. The target of this project is to remove and detection SQL injection vulnerabilties from Java code using JDBC to connect with database.</p >
        <
        /div> <
        div className = { classes.mobileImage } >
        <
        div className = { classes.mobileDpFrame } > < /div> <
        img className = { classes.mobileDp }
        src = { DP }
        alt = "" / >
        <
        div className = { classes.mobileDpCover } > < /div> < /
        div > <
        /div>

        <
        div className = { classes.web } >
        <
        div className = { classes.webPara } >
        <
        p > Hi!I 'm Latif. I am in the final year of my undergrad course at <
        a className = { classes.link }
        href = "https://www.buet.ac.bd/web/"
        target = "blank" > BUET < /a>
        and expecting to complete graduation by October, 2020. My major is in
        <
        a className = { classes.link }
        href = "https://cse.buet.ac.bd/"
        target = "blank" > Computer Science and Engineering. < /a> <
        br / > < br / > I am currently working on a group project called < i > ShashtoSheba < /i> that telemedicine application will help to connect doctor and patient from remote area. <
        br / > < br / > I am doing my thesis work on < i > SQL Injection Vulnerability Detection and Removal < /i>. The target of this project is to remove and detection SQL injection vulnerabilties from Java code using JDBC to connect with database.</p >
        <
        /div> <
        div className = { classes.webImage } >
        <
        div className = { classes.webImageContainer } >
        <
        img className = { classes.dp }
        src = { DP }
        alt = "" / >
        <
        div className = { classes.dpCover } > < /div> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div >
    );
}

AboutMe.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(AboutMe);