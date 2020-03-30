import React from 'react'
import mobileTop from '../../assets/images/screens/mobile-top.png'

const TopSection = () => (
  <div className='container-fluid col-sm-12 blue-bkg' id='top-container'>
        <div className='row'>
            <div className='col-8 mt-5'>
                <h1> CovidApp - Covid Community Alert</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-8 mt-5'>
                <h2>Monitora anonimamente le tue interazioni e scopri se sei stato esposto al virus, senza tracciamento GPS.</h2>
                <p></p>
                <p>La nostra app monitora anonimamente gli smartphone che si avvicinano a te, senza usare il GPS.</p>
                <p>Se stai stato vicino ad una persona infetta, riceverai una notifica e chiare istruzioni sui passaggi successivi da seguire.</p>
            </div>
            <div className='col-4 mt-2'>
                <div className='mobile-image-top'>
                    <img src={mobileTop} /></div>
            </div>

        </div>
    </div>
)

export default TopSection