import React from "react";
import "./StartupProjects.css";
import { projectInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from "./ProjectCard"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    //border:'3px solid black'
  },
}));

export default function StartupProject() {
  const classes = useStyles();

  function FormRow( {row} ) {
    console.log(row)
    return (
          <React.Fragment>
            {row.map((project,ind) => (
                <Grid item className={classes.paper} style={{paddingLeft : "10px",paddingRight : "10px"}}>
                  <div className="project-card" >
                  <ProjectCard project={project} xs/>
                  </div>
                </Grid>
                ))}
          </React.Fragment>
    );
  }

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className={classes.root} id="projects">
      <h1 className="project-heading" style={{width :"90%", margin :"0px auto", paddingLeft : "10px"}}>Projects</h1>
      <Grid container spacing={0} justify="space-around" direction="column" alignItems="stretch">{//GcC0
      }
      {projectInfo.projects.map((project_row,ind) => (
        <div key={ind}>
          <Grid container
            direction="row"
            justify="center"
            spacing={0}
            alignItems="flex-start">
            <FormRow row={project_row}/> 
          </Grid>
        </div>
      ))}
      </Grid>
    </div>
    </Fade>
  );
}

/*
export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            {bigProjects.projects.map(project => {
              return (
                <div className="saaya-health-div" onClick={() => openProjectInNewWindow(project.link)}>
                  <img alt="Saad Working" src={project.image}></img>
                </div>
              );
            })}
          </div>
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
    </Fade>
  );
}
*/
