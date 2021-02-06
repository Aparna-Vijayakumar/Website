import React from "react";
import "./AchievementCard.css";
import Accordion from 'react-bootstrap/Accordion';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Collapse} from 'react-collapse';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function AchievementCard({ cardInfo, isDark ,idx}) {
  const abstract = cardInfo.abstract;
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const useClasses = makeStyles((theme) => ({
    root: {
      maxWidth: 385,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
  }));
  const [expandedId, setExpandedId] = React.useState(-1);
  const classes = useClasses();
  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
  }
  const ids = [{ _id: "1" }, { _id: "2" }, { _id: "3" }];
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"} key={idx}>
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
              onClick={() => openUrlInNewTab(v.url)}
            >
              {v.name}
            </span>
          );
        })}
        <span
            className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
            onClick={() => handleExpandClick(idx)}
            aria-expanded={expandedId === idx}
            aria-label="show more"
          >
            Abstract
        </span>
        <Collapse isOpened={expandedId === idx} timeout="auto" unmountOnExit>
        <CardContent style={{fontSize:"16px", color:"#361F27"}}>
        {abstract}
        </CardContent>
      </Collapse>
      </div>
    </div>
  );
}

