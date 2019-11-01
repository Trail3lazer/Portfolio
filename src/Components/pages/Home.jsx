import React from 'react'
import {MDBCol, MDBContainer, MDBJumbotron, MDBWaves } from 'mdbreact'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <MDBContainer className='h-100'>
            <div className="row"><MDBCol sm='6'>
            <MDBJumbotron className="m-3">Some text left</MDBJumbotron>
            </MDBCol>
            <MDBCol sm='6'>
            <MDBJumbotron className="m-3">Right</MDBJumbotron>
            </MDBCol></div>
        </MDBContainer>
    )
}

export default Home
