import React from 'react'

const HelpSection = () => (
  <div className='container-fluid col-sm-12 blue-soft-bkg' id='help-container'>
  <div className='row justify-content-md-center'>
      <div className='col-2'></div>
      <div className='col-8'>
          <h1><span className='dont-span'>Aiuta l'economia del tuo paese</span></h1>
          <br/>
          <p style={{fontSize: '18px'}}>Quando viene rilevato un caso di coronavirus, le istituzioni del tuo paese devono analizzare tutte le attività passate del paziente: con chi il paziente ha trascorso il suo tempo, dove è stato il paziente, quali mezzi di trasporto ha usato, ecc...</p>
          <br/>
          <p style={{fontSize: '18px'}}>Questa operazione è estremamente costosa e richiede molti sforzi.</p>
          <br/>
          <p style={{fontSize: '18px'}}>Quando il numero di infezioni aumenta al punto in cui questa operazione non può essere applicata a tutti i casi, i governi devono mettere in quarantena città, regioni o, peggio ancora, l'intero paese.</p>
          <br/>
          <p style={{fontSize: '18px'}}>Con la nostra soluzione, informeremo immediatamente chiunque sia stato vicino al paziente infetto negli ultimi 14 giorni per informarlo e fornirgli istruzioni precise su come comportarsi, aumentando l'efficienza della quarantena.</p>
          <br/>
          <p style={{fontSize: '18px'}}>Questo nuovo processo è gratuito per i cittadini, gratuito per le istituzioni sanitarie ed estremamente veloce. Puoi proteggere l'economia del tuo paese semplicemente scaricando questa app.</p>
      </div>
      <div className='col-2'></div>
  </div>
</div>
)

export default HelpSection