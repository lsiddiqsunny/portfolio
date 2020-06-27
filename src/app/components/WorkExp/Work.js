import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import TitleHead from '../Header/titleHead';

import Colors from '../../styles/Colors';
import styles from './WorkStyles';

function Work(props) {
  const { classes } = props;

  return (
    <div className={classes.mainBody}>
      <div className={classes.heading}>
        <TitleHead number="02." caption="Where I've Worked" />
      </div>
      <div className={classes.content}
        style={{ color: Colors.motoColor, fontSize: '22px' }}>
        I was working at Online Sohopathi, a website for students to ask their questions. I worked in a project with a group of twelve people in a cross-platform application called vashaShikkha to help peaople learn language.
        I am currently working on another group project which consists of five people under Dr. A. B. M. Alim Al Islam, Professor, Department of Computer Science and Engineering, BUET.
      </div>
    </div>
  );
}

Work.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Work);