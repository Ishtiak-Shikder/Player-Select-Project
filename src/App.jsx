
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import PlayerList from './Components/PlayerList'
import Footer from './Components/Footer'
import ShowSelected from './ShowSelected'
function App() {
 const [coin,setCoin] = useState(0)
 const [selectedPlayer,setSelectedPlayer] = useState([])
const [showSelected,setShowSelected] = useState(false);

 const addCoin =()=>{
  setCoin(coin + 1000000)
 }

 const choosePlayer =(player)=>{
    if(player.price <= coin){
      setCoin(coin-player.price);

      setSelectedPlayer([...selectedPlayer,player])
      
    }
    else{
      alert('not enough coin')
    }
 }

const removeSelectedPlayer = (player)=>{
 const newPlayer = selectedPlayer.filter(p=>p.id !==player.id);
  setSelectedPlayer(newPlayer)
  setCoin(coin + player.price)
}
  return (
    <>  
  <Header coin ={coin}/>
  <Banner addCoin={addCoin} coin = {coin}/>
  <PlayerList choosePlayer={choosePlayer} selectedPlayer={selectedPlayer} showSelected={showSelected} setShowSelected={setShowSelected} removeSelectedPlayer={removeSelectedPlayer}/>
  <Footer/>
    </>
  )
}

export default App
