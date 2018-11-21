import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlaJ6y73GzgoqotLhJBMR8jpQyvQu3wFZr1JGkXOVR6eDL9Wv"
                            alt="avatar"
                            className="avatar-img"
                         />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS | JavaScript | React | NodeJS | Express | MySQL | MongoDB </p>

                            <div className="social-links">

                                {/* Linkedin */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div> 
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;