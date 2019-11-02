import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import TitleHead from '../Header/titleHead';

import DP from '../../assets/sunny.jpg';
import Colors from '../../styles/Colors';
import styles from './AboutMeStyles';

class AboutMe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 45,
		}
	}

	dpFrameHandler = wh => {
		if (wh === 1)
			this.setState({ height: 43 });
		else
			this.setState({ height: 45 });
	}

	render() {
		const { classes } = this.props;
		const { height } = this.state;

		return (
			<div className={classes.mainBody}>
				<div className={classes.heading}>
					<TitleHead number="01." caption="About Me" />
				</div>

				<div className={classes.content}>
					<div className={classes.mobile}>
						<div className={classes.mobilePara} style={{ color: Colors.motoColor }}>
							<p>Hi! I'm Latif. I am in the final year of my undergrad course at
												<a className={classes.link} href="https://www.buet.ac.bd/web/" target="blank"> Bangladesh University of Engineering and Technology(BUET) </a>
								and expecting to complete graduation by July, 2020. My major is in
												<a className={classes.link} href="https://cse.buet.ac.bd/" target="blank"> Computer Science and Engineering. </a>
								<br /><br />I am currently working on a group project called <i>vashaShikkha</i> that will help to teach English at primary school level. The ui will also be in Bangla so that native Bengali kids finds it easier to learn.
												<br /><br />I am doing my thesis work on <i>SQL vulnerability detection and refactoring</i>. The goal of the project is detecting vulnerable sql query in java code and refactor them.</p>
						</div>
						<div className={classes.mobileImage}>
							<div className={classes.mobileDpFrame}></div>
							<img className={classes.mobileDp} src={DP} alt="" />
							<div className={classes.mobileDpCover}></div>
						</div>
					</div>

					<div className={classes.web}>
						<div className={classes.webPara} style={{ color: Colors.motoColor }}>
							<p>Hi! I'm Latif. I am in the final year of my undergrad course at
											 <a className={classes.link} href="https://www.buet.ac.bd/web/" target="blank"> Bangladesh University of Engineering and Technology(BUET) </a>
								and expecting to complete graduation by May, 2020. My major is in
											 <a className={classes.link} href="https://cse.buet.ac.bd/" target="blank"> Computer Science and Engineering. </a>
								<br /><br />I am currently working on a group project called <i>vashaShikkha</i> that will help to teach English at primary school level. The ui will also be in Bangla so that native Bengali kids finds it easier to learn.
											<br /><br />I am doing my thesis work on <i>SQL vulnerability detection and refactoring</i>. The goal of the project is detecting vulnerable sql query in java code and refactor them.</p>
						</div>
						<div className={classes.webImage}>
							<div
								className={classes.dpFrame}
								style={{ height: `${height}vh`, width: `${height}vh` }}
							></div>
							<img className={classes.dp} src={DP} alt="" />
							<div className={classes.dpCover}
								onMouseEnter={() => this.dpFrameHandler(1)}
								onMouseLeave={() => this.dpFrameHandler(2)}
							></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

AboutMe.propTypes = {
	classes: PropTypes.object.isRequired
}


export default withStyles(styles)(AboutMe);