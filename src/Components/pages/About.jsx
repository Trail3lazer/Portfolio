import React from 'react'
import { MDBCol, MDBContainer, MDBJumbotron } from 'mdbreact'

function About() {
    return (
        <MDBContainer>
            <div className="row">
                <MDBCol sm='6'>
                    <MDBJumbotron className="about p-0 m-3 home-jumbo">
                            <img className="image" src="https://d1p0m2aj917ekc.cloudfront.net/home-nav-picturers/rockySummit.webp" alt="Seneca Rocks" />
                    </MDBJumbotron>
                </MDBCol>
                <MDBCol sm='6'>
                    
                </MDBCol>
            </div>
        </MDBContainer>
    )
}

export default About;
