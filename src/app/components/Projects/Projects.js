import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './ProjectsStyles';

import TitleHead from '../Header//titleHead';
import FeatProject from './FeatProjects';
import OtherProject from './OtherProject';
import { fetchProjects } from './myProjects';
import { fetchUgrad } from './myUgrad';
import { fetchCourses } from './myCourses';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: fetchProjects(),
            courses: fetchCourses(),
            ugrad: fetchUgrad(),
            seeMore: true,
            seeMoreCoures: true,
            seeMoreUgrad: true,
        }
    }

    handleSeeMore = () => {
        let { seeMore } = this.state;
        seeMore = !seeMore;

        this.setState({ seeMore });
    }
    handleCourse = () => {
        let { seeMoreCoures } = this.state;
        seeMoreCoures = !seeMoreCoures;

        this.setState({ seeMoreCoures });
    }


    handleUgrad = () => {
        let { seeMoreUgrad } = this.state;
        seeMoreUgrad = !seeMoreUgrad;

        this.setState({ seeMoreUgrad });
    }

    render() {
        const { classes } = this.props;
        const { projects, seeMore, courses, seeMoreCoures, seeMoreUgrad, ugrad } = this.state;

        return ( <
            div className = { classes.mainBody } >
            <
            div className = { classes.heading } >
            <
            TitleHead number = "04."
            caption = "Things I've Developed" / >
            <
            /div>

            <
            div className = { classes.content } >
            <
            FeatProject mirror = { false }
            imageName = "Vasha Shikkha"
            projectName = "vasha Shikkha"
            projectDescription = "An application that helps us learn English in a very interactive way. In this app, we can practice speaking, reading, listening and writing. Different user will be assigned different tasks based on their chosen topic. In this app, the user can practice speaking, reading, listening and writing.
            This is a group project where i have worked in the web - app team.
            "
            technologiesUsed = {
                ["React", 'Flutter', 'Laravel'] }
            deployedLink = "https://vashasikkha.mainframelabs.ltd/"
            gitURL = "" /
            >

            <
            FeatProject mirror = { true }
            imageName = "Chess"
            projectName = "ShashoSheba"
            projectDescription = "A mobile application for connecting doctor and patient from remote area. "
            technologiesUsed = {
                ["Flutter", "Nodejs", 'AppRTC'] }
            deployedLink = ""
            gitURL = "https://github.com/lsiddiqsunny/ShashthoSheba" /
            >

            <
            div className = { classes.myProjects } > My Projects < /div> <
            div className = { classes.others } > {
                projects.map((data, idx) => (
                    seeMore === true && idx > 2 ? null :
                    <
                    OtherProject key = { idx }
                    projectName = { data.name }
                    projectDescription = { data.description }
                    gitURL = { data.gitURL }
                    technologiesUsed = { data.tech }
                    />
                ))
            } <
            /div>

            <
            div className = { classes.btnContainer } >
            <
            div className = { classes.seeMore }
            onClick = {
                () => this.handleSeeMore() } >
            { seeMore ? 'More Projects' : 'Fewer Projects' } < /div> <
            /div>

            <
            div className = { classes.myProjects } > My Coursework < /div> <
            div className = { classes.others } > {
                courses.map((data, idx) => (
                    seeMoreCoures === true && idx > 2 ? null :
                    <
                    OtherProject key = { idx }
                    projectName = { data.name }
                    projectDescription = { data.description }
                    gitURL = { data.gitURL }
                    technologiesUsed = { data.tech }
                    />
                ))
            } <
            /div>

            <
            div className = { classes.btnContainer } >
            <
            div className = { classes.seeMore }
            onClick = {
                () => this.handleCourse() } >
            { seeMore ? 'More Courses' : 'Fewer Courses' } < /div> <
            /div>

            <
            div className = { classes.myProjects } > Undergraduate Courses < /div> <
            div className = { classes.others } > {
                ugrad.map((data, idx) => (
                    seeMoreUgrad === true && idx > 2 ? null :
                    <
                    OtherProject key = { idx }
                    projectName = { data.name }
                    projectDescription = { data.description }
                    gitURL = { data.gitURL }
                    technologiesUsed = { data.tech }
                    />
                ))
            } <
            /div> <
            div className = { classes.btnContainer } >
            <
            div className = { classes.seeMore }
            onClick = {
                () => this.handleUgrad() } >
            { seeMoreUgrad ? 'More Courses' : 'Fewer Courses' } < /div> <
            /div> <
            /div> <
            /div>
        );
    }
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Projects);