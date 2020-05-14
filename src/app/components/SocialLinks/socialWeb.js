import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Colors from '../../styles/Colors';

const styles = () => ({
	outerSurface: {
		width: '100%',
		height: '90vh',

		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'no-wrap',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},

	lineBox: {
		width: '100%',
		height: '15vh',

		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'no-wrap',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},

	line: {
		height: '100%',
		width: '1px',
		backgroundColor: Colors.iconColor,
	},

	iconBox: {
		width: '100%',
		height: '75vh',

		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'no-wrap',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignContent: 'center',
	},

	iconBoxLayer2: {
		width: '100%',
		height: '70vh',

		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'no-wrap',
		justifyContent: 'flex-end',
		alignItems: 'center',
		alignContent: 'center',
	},

	iconBoxLayer1: {
		width: '100%',
		height: '5vh',
	},

	icon: {
		height: '40px',
		width: '20px',

		backgroundColor: Colors.mediumDarkNavy,
		cursor: 'pointer',

		transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
	},

	SVG: {
		width: '100%',
		height: '80%',
		marginTop: '20%',

		fill: Colors.iconColor,

		'&:hover': {
			marginTop: '10%',
			fill: Colors.themeFontColor,
		}
	}
});

function SocialWeb(props) {
	const { classes } = props;
	return (
		<div className={classes.outerSurface}>
			<div className={classes.iconBox}>
				<div className={classes.iconBoxLayer2}>
					<div className={classes.icon}>
						<a href="https://github.com/lsiddiqsunny" target="blank">
							<svg className={classes.SVG} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 438.549 438.549"><title>Github</title><path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path></svg>
						</a>
					</div>

					<div className={classes.icon}>
						<a href="https://www.linkedin.com/in/lsiddiqsunny/" target="blank">
							<svg className={classes.SVG} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1.05em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1046.16 1000"><path d="M237.485 1000V325.301H13.229V1000h224.256zM125.386 233.127c78.202 0 126.879-51.809 126.879-116.553C250.808 50.37 203.591-.001 126.87-.001C50.161-.001-.002 50.371-.002 116.574c0 64.747 48.665 116.553 123.924 116.553h1.457zM361.61 1000h224.256V623.215c0-20.165 1.457-40.309 7.379-54.724c16.212-40.289 53.111-82.017 115.06-82.017c81.149 0 113.613 61.872 113.613 152.572v360.949h224.242V613.129c0-207.241-110.636-303.668-258.183-303.668c-120.977 0-174.094 67.622-203.603 113.679h1.497v-97.853H361.615c2.943 63.31 0 674.699 0 674.699z" /></svg>
						</a>
					</div>

					<div className={classes.icon}>
						<a href="https://codeforces.com/profile/lsiddiqsunny" target="blank">
							<svg className={classes.SVG} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z" /></svg>
						</a>
					</div>

					<div className={classes.icon}>
						<a href="https://www.quora.com/profile/Latif-Siddiq-Sunny" target="blank">
							<svg className={classes.SVG} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19.995 17.682s-.097 1.434-1.39 1.434c-1 0-1.682-.768-2.32-1.765c1.814-1.597 2.966-3.982 2.966-6.646c0-4.808-3.75-8.705-8.374-8.705c-4.625 0-8.374 3.897-8.374 8.705s3.749 8.705 8.374 8.705c.84 0 1.65-.129 2.414-.368c.967 1.55 2.195 2.943 4.117 2.943c3.912 0 4.074-4.303 4.074-4.303h-1.487zm-9.118.293c-2.696 0-4.882-3.255-4.882-7.27s2.186-7.27 4.882-7.27c2.696 0 4.882 3.255 4.882 7.27c0 1.597-.346 3.073-.932 4.272c-.662-.953-1.456-1.764-2.592-2.022c-2.015-.459-3.75.456-4.3.912l.517 1.076s.523-.303 1.82 0c.817.19 1.452 1.334 2.18 2.646a3.459 3.459 0 0 1-1.575.386z" /></svg>
						</a>
					</div>

					<div className={classes.icon}>
						<a href="https://gitlab.com/lsiddiqsunny" target="blank">
							<svg className={classes.SVG} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M23.955 13.587l-1.342-4.135l-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.919 1.263C4.783.84 4.185.84 4.05 1.26L1.386 9.449L.044 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.625-8.443a.92.92 0 0 0 .33-1.024" /></svg>
						</a>
					</div>
				</div>
				<div className={classes.iconBoxLayer1}></div>
			</div>

			<div className={classes.lineBox}>
				<div className={classes.line}></div>
			</div>
		</div>
	);
}

SocialWeb.propTypes = {
	classes: PropTypes.object.isRequired
}


export default withStyles(styles)(SocialWeb);