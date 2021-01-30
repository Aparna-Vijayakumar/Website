import React from "react";
import ReactStars from "react-rating-stars-component";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";
//import ProgressBar from "../../components/progressBar";
import ProgressBar from 'react-bootstrap/ProgressBar'


const arr = [1,2,3,4,5];
export default function StackProgress() {
    
    if(techStack.viewSkillBars){
        return (
            <Fade bottom duration={1000} distance="20px">

        <h1 className="skills-heading" style={{width :"90%", margin :"0px auto", paddingLeft : "10px"}}>Skills</h1>
            <div className="skills-container" id="skill-prog-bar">
                
                <div className="skills-bar">
                    
                        
                            {techStack.experience.map((item, idx) => (
                                <div style={{margin : "0px auto", height:"60px", overflow:"auto",display:"flex",
                                justifyContent:"space-between"}}>
                                    <label style={{flex:"1"}}>{item.Stack}</label>
                                    <div style={{flex:"1"}}>
                                    <ReactStars count={5} value={item.progressPercentage} activeColor="#aaa5ff" isHalf={true} edit={false} size={"25"}/>
                                    </div>

                                </div>
                            ))}
                    
                </div>
            </div>
            
            </Fade>
        );
    }
    return null;
}
// <ProgressBar key={item.idx} skillName ={item.Stack} bgcolor={item.bgcolor} completed={item.progressPercentage} />
/*
{techStack.experience.map((item, idx) => (
                                <div style={{margin : "0px auto", height:"60px", overflow:"auto"}}>
                                    <label>{item.Stack}</label>
                                    <ProgressBar style={{color :"#aaa5ff"}} variant="info" now={item.progressPercentage} label={`${item.progressPercentage}%`} key={idx} />
                                </div>
                            ))}
                    */

/*
{techStack.experience.map((item, idx) => (
                                <div style={{margin : "0px auto", height:"60px", overflow:"auto",display:"flex",
                                justifyContent:"space-between"}}>
                                    <label style={{flex:"1"}}>{item.Stack}</label>
                                    <div style={{flex:"1"}}>
                                    {
                                        arr.map((value, index) => {
                                            return <span className="fas fa-star"></span>
                                        })
                                    }
                                    </div>

                                </div>
                            ))}
*/
