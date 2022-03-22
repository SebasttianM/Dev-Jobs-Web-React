import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Global from './Global';

const CardJob= styled.div`

width: 1200px;
height: 160px;
border: 1px red solid;
margin: 0 auto ;
display: flex;
justify-content: space-between;
background-color: hsl(180, 31%, 95%);
box-shadow: 0px 6px 8px 0px rgba(189,189,189,1);


@media screen and (max-width:394px){
  
  width: 335px;
  height: 250px;
  
}

`
const ProfileImg= styled.div`
display: flex;
flex-direction: row;

`
const Iprof= styled.div`
padding: 5px;
margin: 20px;
`
const Tags= styled.div`
justify-content: space-around;
font-weight: 700;
`
export default class Card extends Component {

  constructor(){
    super();
    this.state= {
      jobs: []
      , status: false
    }
  }
  
  getJobs=()=>{
    var url= Global.urljobs;
    var request = "/jobs"
    axios
    .get(url + request)
    .then((resp)=>{
      this.setState({
        jobs: resp.data,
        status: true
      });
    })
    .catch((err)=> console.error(err));
  };

  componentDidMount(){
    this.getJobs();
  }
  render() {

    return (

      <CardJob>
        <ProfileImg>
        <div>
          <Iprof />
          <div>
            <span className='cname'></span>
          </div>
        </div>
        <Tags>
          <p>1 month</p>
          <p>UK</p>
          <p>Free Weekends</p>
        </Tags>
        </ProfileImg>
       
        <div>Web Developemt</div>        
      </CardJob>
      
    )
  }
}
