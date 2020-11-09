import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import TitleHead from '../Header/titleHead';

import Colors from '../../styles/Colors';
import styles from './WorkStyles';

function Work(props) {
    const { classes } = props;

    return ( < div className = { classes.mainBody } >
        <
        div className = { classes.heading } >
        <
        TitleHead number = "02."
        caption = "Where I've Worked" / >
        <
        /div> < div className = { classes.content }
        style = {
            { color: Colors.motoColor, fontSize: '22px' }
        } >
        I was working at Online Sohopathi, a website
        for students to ask their questions.I worked in a project with a group of twelve people in a cross - platform application called Vasha Shikkha to help peaople learn language.I was currently working on another group project on telemedicine which consists of five people under Dr.A.B.M.Alim Al Islam, Professor, Department of Computer Science and Engineering, BUET.I also worked as a software engineer in SIGMIND.ai
        for a few months and now I am working as a software enigneer in LEADS Corporation Limited. < /div> </div >
    );
}

Work.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Work);