import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from '../components/Card'
import Header from '../components/Header'

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Card/>} ></Route>        
        </Routes>
      </BrowserRouter>
    )
  }
}
