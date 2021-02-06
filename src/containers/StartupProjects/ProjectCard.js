import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import "./ProjectCard.css";
import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FormatBoldOutlined, PinDropSharp } from '@material-ui/icons';

const isDark = false;

function openUrlInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

const useClasses = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  iconContainer: {
    "&:hover $icon": {
        color: "#912F56",
    }
},
  icon: {
    color: "#521945",
},
}));

export default function ProjectCard( {project} ) {
  const classes = useClasses();

  return (
    <Card className={classes.root}>
      <CardHeader 
          title = {project.projectName} 
          titleTypographyProps={{style:{fontFamily:"Montserrat",fontWeight:"bold",color:"black",fontSize:"20px"}}}
          />
 
      <CardMedia
        className={classes.media}
        image={project.image}
      />
      <CardContent style={{textAlign:"left", fontSize:"16px",color:"#361F27"}}>
          {project.description}
      </CardContent>
      <CardActions disableSpacing>
      <div className="certificate-card-footer">
        
        {project.technologies.map((v, i) => {
          return (
            <span
              key={i}
              className={isDark ? "dark-mode project-tag" : "project-tag"}
            >
              {v}
            </span>
          );
        })}
      </div>
        <div className="card-actions" style={{marginLeft:"auto",marginTop:"auto",display:"flex",flexDirection:"row"}}>
        <IconButton classes={{
                root: classes.iconContainer
            }} aria-label="github" style={{border:"none", outline:"none"}}>
          <GitHubIcon className={classes.icon} onClick={() => openUrlInNewTab(project.github)}/>
          </IconButton>
        <IconButton classes={{
                root: classes.iconContainer
            }}aria-label="report" style={{border:"none", outline:"none"}}>
        <DescriptionIcon className={classes.icon} onClick={() => openUrlInNewTab(project.report)}/>
        </IconButton>
        </div>
        
        </CardActions>
    </Card>
  );
}
