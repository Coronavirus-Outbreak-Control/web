import React from 'react'
import anonymous from '../../assets/images/screens/anonymous.png'


const AnonymousSection = () => (
  <div className='container-fluid col-sm-12 pt-5 pb-5 ' id='anonymous-container'>
        <div className='row justify-content-md-center'>
            <div className='col-2'></div>
            <div className='col-8'>
                <h1>100% Anonimo e Open Source</h1>
                <br/>
                <p style={{fontSize: '18px'}}>Il nostro sistema si basa solo su degli ID anonimi generati dal nostro servizio, che non possono in alcun modo essere utilizzati per ottenere dati personali.</p>
                <br/>
            </div>
            <div className='col-2'></div>
        </div>
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-3'>
                <h5>Ma soprattutto:</h5>
                <br/>
                <p><span className='dont-span'>NON</span> traccia le posizioni GPS degli utenti.</p>
                <p><span className='dont-span'>NON</span> richiede alcun login.</p>
                <p><span className='dont-span'>NON</span> raccoglie alcun dato privato o sensibile: nome, cognome, numero di telefono.</p>
                <p><span className='dont-span'>NON</span> espone su di una mappa pubblica il tuo stato di salute associato ai luoghi che frequenti o al posto in cui vivi.</p>
            </div>
            <div className='col-7'>
                <img src={anonymous} height='310' style={{marginLeft: '80px', marginTop: '-18px'}}/>
            </div>
        </div>
        <div className='row justify-content-md-center'>
            <div className='col-2'></div>
            <div className='col-8'>
                <br/>
                <p style={{fontSize: '18px'}}>Tutto il codice prodotto e necessario per il funzionamento del servizio è open source e disponibile online per essere analizzato: <a href='https://github.com/Coronavirus-Outbreak-Control' target='_blank'>Coronavirus Outbreak Control</a></p>
            </div>
            <div className='col-2'></div>
        </div>
    </div>
)

export default AnonymousSection