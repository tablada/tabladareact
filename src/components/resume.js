import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

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
                    <Cell className="resume-right-col" col={8}>Right Side</Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;