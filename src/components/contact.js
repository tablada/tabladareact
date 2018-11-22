import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                   <Cell col={6}>
                        <h2>Tablada</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop:'1em'}}>lihwtrubvsruydlsviufcnrlsdtcjvxlihuearhx</p>


                   </Cell>
                   <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                   </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;