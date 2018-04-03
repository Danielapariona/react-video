import React, { Component } from 'react'
import { render } from 'react-dom'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/components/containers/modal'

class Home extends Component {
  render() {
    return(
      <HomeLayout>
        <Related />
        <Categories categories={this.props.data.categories}/>
        <ModalContainer>
          <h1>Esto es un portal</h1>
        </ModalContainer> 
      </HomeLayout>
    )
  }
}

export default Home