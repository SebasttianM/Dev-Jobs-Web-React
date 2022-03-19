import React, { Component } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from '../components/Header'


export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>            
        </Routes>
      </BrowserRouter>
    )
  }
}
