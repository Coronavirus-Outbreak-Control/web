import React from 'react'

const AboutSection = () => (
  <div className='container-fluid col-sm-12 blue-soft-bkg' id='about-container'>
        <div className='row justify-content-md-center'>
            <div className='col-2' />
            <div className='col-8'>
                <h1><span className='dont-span'>Chi siamo</span></h1>
                <br/>
                <p style={{fontSize: '18px'}}>Il team di Coronavirus Outbreak Control è composto da 22 persone da sei paesi differenti che lavorano da due continenti.</p>
                <br/>
                <p style={{fontSize: '18px'}}>Il team ha un background multidisciplinare: oltre 10 anni di esperienza in architetture distribuite e software mission-critical. La maggior parte del team ha già collaborato in passato alla costruzione di soluzioni di scala globale per partner internazionali come Airbnb, Google e Microsoft.</p>
            </div>
            <div className='col-2'></div>
        </div>
    </div>
)

export default AboutSection