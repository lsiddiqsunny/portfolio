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
        p > Hi!I 'm Latif. I am a Junior Sodtware Engineer at REVE Systems. I was graduated from <
        a className = { classes.link }
        href = "https://www.buet.ac.bd/web/"
        target = "blank" > BUET < /a>
        in February, 2021. My major is in
        <
        a className = { classes.link }
        href = "https://cse.buet.ac.bd/"
        target = "blank" > Computer Science and Engineering. < /a> </p >
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
        p >  Hi!I 'm Latif. I am a Junior Sodtware Engineer at REVE Systems. I was graduated from <
        a className = { classes.link }
        href = "https://www.buet.ac.bd/web/"
        target = "blank" > BUET < /a>
        in February, 2021. My major is in
        <
        a className = { classes.link }
        href = "https://cse.buet.ac.bd/"
        target = "blank" > Computer Science and Engineering. < /a></p >
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