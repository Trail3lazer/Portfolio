import React from 'react'
import { MDBCol, MDBContainer, MDBJumbotron } from 'mdbreact'
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <MDBContainer>
            <div className="row">
                <MDBCol sm='6'>
                    <MDBJumbotron className="about p-0 m-3 home-jumbo">
                        <Link to="/about">
                            <div class="home-img-overlay">
                                <div class="home-overlay-text">ABOUT</div>
                            </div>
                            <img className="image" src="https://d1p0m2aj917ekc.cloudfront.net/home-nav-picturers/rockySummit.webp" alt="Seneca Rocks" />
                        </Link>
                    </MDBJumbotron>
                </MDBCol>
                <MDBCol sm='6'>
                    <MDBJumbotron className="portfolio p-0 m-3 home-jumbo">
                        <Link to="/portfolio">
                            <div class="home-img-overlay">
                                <div class="home-overlay-text">PORTFOLIO</div>
                            </div>
                            <img className="image" src="https://d1p0m2aj917ekc.cloudfront.net/home-nav-picturers/sunset.webp" alt="Spruce Knob" />
                        </Link>
                    </MDBJumbotron>
                </MDBCol>
            </div>
        </MDBContainer>
    )
}

export default Portfolio;
