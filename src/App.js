import React, { Component } from 'react'
import User from './components/user/UserNav';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AppRouter from './AppRouter';
import Notification from './components/common/Notificatio';



class App extends Component {
  render() {
    return (
      <div>
        <User />
        <Notification />
        <Navbar />
        <AppRouter />
        <Footer />
      </div>
    )
  }
}

export default App
