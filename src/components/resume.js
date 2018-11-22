import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>    
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Raul Tablada</h2>
                        <h4 style={{color: 'grey'}}>Programer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>jwrtkburycr</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>12487326 fbdusykerf</p>
                        <h5>Phone</h5>
                        <p>346914578</p>
                        <h5>email</h5>
                        <p>sekirub@kudf.com</p>
                        <h5>Web</h5>
                        <p>website</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2013}
                            endYear={2014}
                            schoolName="Miami Dade"
                            schoolDescription="Web Development"
                        />
                        <Education
                            startYear={2017}
                            endYear={2018}
                            schoolName="University of Miami"
                            schoolDescription="Web Development"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience 
                            startYear={2013}
                            endYear={2015}
                            jobName="First Job"
                            jobDescription="duiehkr"
                        />

                        <Experience 
                            startYear={2016}
                            endYear={2018}
                            jobName="Second Job"
                            jobDescription="duiehkr"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill="javascript"
                            progress={100}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={90}
                        />
                        <Skills 
                            skill="NodeJS"
                            progress={60}
                        />
                        <Skills 
                            skill="React"
                            progress={67}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;