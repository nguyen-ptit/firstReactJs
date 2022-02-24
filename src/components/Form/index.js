import React from 'react';

import { Contact, Container, Grid } from './style';

const Form = () => {
    return (
        <>
            <Container>
            <Grid>
                <Contact>
                    <p className='title'>Contact</p>
                    <p>54/36 An Hoa Street, Mo Lao, Ha Dong, Ha Noi</p>
                    <p>nguyen11082k@gmail.com</p>
                    <p>0911150344</p>
                </Contact>
                <div>
                    <form>
                        <label htmlFor="fname">Name*:</label> <br />
                        <input type="text" id="fname" name="fname" placeholder='Enter your name' required />
                        <br/>
                        <label htmlFor="faddress">Address:</label> <br />
                        <input type="text" id="faddress" name="faddress" placeholder='Enter your name' />
                        <br />

                        <Grid>
                        <div className='email'>
                            <label htmlFor="fmail">Email*:</label> <br />
                            <input type="mail" id="fmail" name="fmail" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label htmlFor="fphone">Phone:</label> <br />
                            <input type="phone" id="fphone" name="fphone" placeholder='Enter your phone number'/>
                        </div>
                        </Grid>

                        <label htmlFor="fsubject">Subject:</label> <br />
                        <input type="text" id="fsubject" name="fsubject" placeholder='Enter your subject'/>
                        <br />
                        <label htmlFor="fmessage">Message:</label> <br />
                        <input type="text" id="fmessage" name="fmessage" placeholder='Enter your message'/>
                        <br />
                        <div className='submit'>
                            <input type="submit" ></input>
                        </div>
                    </form>
                </div>
            </Grid>
            </Container>
            
        </>
    )
}

export default Form;