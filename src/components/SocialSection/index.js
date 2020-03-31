import React from 'react'

const SocialSection = () => (
  <div className='container-fluid col-sm-12 pt-5 pb-5 blue-soft-bkg' id='social-container'>
  <div className='row'>
      <div className="col-1"></div>
      <div className="col-10">
          <h1>Insieme possiamo salvare vite, condividilo ora:</h1>
          <div className="share-inside-container">
              <h4>+30% Interazioni Individuate</h4>
              <p>Rispetto a comuni soluzioni bluetooth</p>

              <h4>Open source + public protocol</h4>
              <p>La trasparenza per noi è importante! Tutto quello che facciamo è open source e disponibile.</p>

              <h4>Dashboard per Virologi</h4>
              <p>Diamo la possibilità direttamente a virologi esperti selezionati di stabilire le regole e le notifiche da mandare ai pazienti.</p>

              <h4>Pazienti Asintomatici</h4>
              <p>La nostra piattaforma è in grado di individuare anche i pazienti che non presentano sintomi.</p>
          </div>
          <div className='fb-share-button'
               data-href='https://coronavirus-outbreak-control.github.io/web/index.html'
               data-layout='button'
               data-size='large' style={{float: 'left', marginRight: '5px'}}>
          </div>
          <div style={{float: 'left'}}>
              <a href='https://twitter.com/share?ref_src=twsrc%5Etfw' data-size='large' className='twitter-share-button' data-text='Together we can save lives:' data-url='https://coronavirus-outbreak-control.github.io/web/index.html' data-show-count='false'>Tweet</a>
          </div>
      </div>
      <div className='col-1'></div>
  </div>
</div>
)

export default SocialSection