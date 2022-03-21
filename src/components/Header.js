import React, { Component } from 'react'
import styled from 'styled-components'

const DivHeader = styled.div`
margin: 0 auto;
width: 1440px;
height: 160px;
border: 1px red solid;
background-image: url('https://res.cloudinary.com/djjgtili7/image/upload/v1647711364/job-listings/bg-header-desktop_gwgtuo.svg');
background-repeat: no-repeat;
background-size: 1440px 160px;
background-color: hsl(180, 29%, 50%);
margin-bottom: 30px;
@media screen and (max-width: 394px){
  width: 393px;
  background-size: 393px 60px;
  height: 60px;
  
}
`

export default class Header extends Component {
  render() {
    return (
      <div>
        <DivHeader />
      </div>
    )
  }
}
