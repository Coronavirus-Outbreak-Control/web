import React from 'react'

const ContactSection = () => (
  <div className='container-fluid col-sm-12 ' id='contact-container'>
  <div className='row justify-content-md-center'>
      <div className='col-2'></div>
      <div className='col-4'>
          <h3><span className='dont-span'>Contattaci</span></h3>
          <br/>
          <p><a href='mailto:coronavirus.outbreak.control@gmail.com'>coronavirus.outbreak.control@gmail.com</a></p>
      </div>
      <div className='col-4'>
          <h3><span className='dont-span'>Scarica la descrizione del progetto</span></h3>
          <br/>
          <p style={{textDecoration: 'underline'}}><a target='_blank' rel='noopener noreferrer' href='/download/Coronavirus_Outbreak_Control_-_Full Proposal.pdf'>Coronavirus Outbreak Control - Proposta</a></p>
      </div>
      <div className='col-2'></div>
  </div>
</div>
)

export default ContactSection