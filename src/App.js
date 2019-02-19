import React, { Component } from 'react'
import './App.css'
import './Style/main.css'
import { FooterAdd, BtnAdd, HeadDex, ImgMon, DetailMon, CardMon, AllCard, CardMonSelect, AllCardMonModal } from './Style/Styled'
import Modal from "react-responsive-modal"
import { cards } from './mock/cards.json'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b",
  btBarBg: "#ec5656",
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      openModal: false,
    }
  }
  // -----------------------------------------------------------------------------------------------------------------------
  onOpenModal = () => { this.setState({ openModal: true }); };
  onCloseModal = () => { this.setState({ openModal: false }); };
  // -----------------------------------------------------------------------------------------------------------------------

  render() {
    const { openModal, } = this.state
    console.log(cards)
    return (
      <div className="App">
        <HeadDex>My Pokedex</HeadDex>
        <AllCard>
          {this.renderCardSelect()}
        </AllCard>
        <FooterAdd background={COLORS.btBarBg} >
          <BtnAdd background={COLORS.btBarBg} onClick={this.onOpenModal}>+</BtnAdd>
        </FooterAdd>
        <Modal
          open={openModal}
          onClose={this.onCloseModal}
          little
          classNames={{ modal: 'Look-modal trackingSmall ' }}>
          <div className="layout">
            <AllCardMonModal>
              {this.renderCards()}
            </AllCardMonModal>
          </div>
        </Modal>
      </div>
    )
  }
  renderCardSelect() {
    return cards.map((el, i) => {
      return <CardMon>
        <img className='imgMon' src={el.imageUrl} alt='' />
        <DetailMon>
          <p>{el.name}</p>
        </DetailMon>
        <h1 className='btnAddMon' >x</h1>
      </CardMon>
    })
  }
  renderCards() {
    return cards.map((el, i) => {
      return <CardMon>
        <img className='imgMon' src={el.imageUrl} alt='' />
        <DetailMon>
          <p>{el.name}</p>
        </DetailMon>
        <h1 className='btnAddMon' >Add</h1>
      </CardMon>
    })
  }
}
export default App
