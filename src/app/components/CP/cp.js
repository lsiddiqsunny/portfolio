import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import TitleHead from '../Header/titleHead';
import CPRepo from './cpRepo';
import { fetchUserDetail, fetchRating } from './cpAxios';

import styles from './cpStyles';
import Colors from '../../styles/Colors';

class CP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
      userRating: {},

      currentRating: 'loading',
      mxRating: 'loading',
      totalContest: 'loading',
    }
  }

  componentDidMount() {
    fetchUserDetail((data) => {
      this.setState({ userDetails: data }, () => {
        this.parse1()
      });
    });

    fetchRating((data) => {
      this.setState({ userRating: data }, () => {
        this.parse2()
      });
    });
  }

  parse1 = () => {
    let { mxRating, currentRating } = this.state;
    const { userDetails } = this.state;

    mxRating = userDetails.data.result[0].maxRating;
    currentRating = userDetails.data.result[0].rating;

    this.setState({ mxRating });
    this.setState({ currentRating });
  }

  parse2 = () => {
    let { totalContest } = this.state;
    const { userRating } = this.state;

    totalContest = userRating.data.result.length;
    this.setState({ totalContest });
  }

  render() {
    const { classes } = this.props;
    //const { totalContest, mxRating, currentRating } = this.state;

    return (
      <div className={classes.mainBody}>
        <div className={classes.heading}>
          <TitleHead number="03."
            caption="Problem Solving" />
        </div>

        <div className={classes.content}>
          <div className={classes.para} style={{ color: Colors.motoColor }}>
            <p>I have participated in a few inter university programming contests and also participated in acm-icpc Dhaka Regional 2018.<br /><br />
              Mainly I participate in contests held in <a className={classes.link} href="https://codeforces.com/" target="blank">Codeforces</a>,<a className={classes.link} href="https://www.codechef.com/" target="blank">Codechef</a>. 
              Also I practice in <a className={classes.link} href="http://lightoj.com/login_main.php" target="blank">Light Oj</a> and <a className={classes.link} href="https://www.hackerrank.com/" target="blank">HackerRank</a>.<br /><br />

              I have participated in <a className={classes.link} href="./hashcode_2019_certificate.pdf" target="blank">Google HashCode 2019</a><br/>
            </p>
          </div>

          <div className={classes.solved}>My Codes</div>
          <div className={classes.repo}>
            <CPRepo
              projectName="Leetcode"
              profileURL="https://codeforces.com/profile/lsiddiqsunny"
              gitURL="https://github.com/lsiddiqsunny/Leetcode-solve"
              projectDescription="Problem solved in leetcode"
              gitAPI="https://api.github.com/search/repositories?q=user%3Alsiddiqsunny+repo%3ALeetcode-solve+Leetcode-solve"
            />
            <CPRepo
              projectName="LightOj"
              profileURL="http://lightoj.com/volume_userstat.php?user_id="
              gitURL="https://github.com/lsiddiqsunny/Solved-problem-from-lightoj"
              projectDescription="Accepted problems in Light Oj"
              
              gitAPI="https://api.github.com/search/repositories?q=user%3Alsiddiqsunny+repo%3ASolved-problem-from-lightoj+Solved-problem-from-lightoj"
            />
            <CPRepo
              projectName="Hash Code 2020"
              profileURL=""
              gitURL="https://github.com/lsiddiqsunny/Hash-Code-2020"
              projectDescription="Code for Hash Code 2020"
              gitAPI="https://api.github.com/search/repositories?q=user%3Alsiddiqsunny+repo%3AHash-Code-2020+Hash-Code-2020"
            />
            <CPRepo
              projectName="Days with programming"
              profileURL=""
              gitURL="https://github.com/lsiddiqsunny/Days-with-programming"
              //projectDescription="problems solved in various platform"
              gitAPI="https://api.github.com/search/repositories?q=user%3Alsiddiqsunny+repo%3ADays-with-programming+Days-with-programming"
            />
            <CPRepo
              projectName="Contest Code"
              profileURL=""
              gitURL="https://github.com/lsiddiqsunny/programming-contest"
              //projectDescription="problems solved in various platform"
              gitAPI="https://api.github.com/search/repositories?q=user%3Alsiddiqsunny+repo%3Aprogramming-contest+programming-contest"
            />
          </div>
        </div>
      </div>
    );
  }
}

CP.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(CP);