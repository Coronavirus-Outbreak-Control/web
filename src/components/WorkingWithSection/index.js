import React from 'react'

const WorkingWithSection = () => (
  <div className='container-fluid col-sm-12' id='working-with-container'>
        <div className='row'>
            <div className='col-3'></div>
            <div className='col-6'>
                <h1 style={{textAlign: 'center'}}>Collaboriamo con istituti sanitari e di ricerca riconosciuti</h1>
                <br/>
                <p style={{fontSize: '18px'}}>Stiamo lavorando a stretto contatto con le istituzioni sanitarie più riconosciute per distribuire il servizio in tutto il mondo. </p>
            </div>
            <div className='col-3'></div>
        </div>
        <div className='row'>
            <div className='col-3'></div>
            <div className='col-6'>
                <p style={{fontSize: '18px'}}>Collaboriamo con:</p>

                <ul>
                    <li><p>Raffaele Perego, Director of Research, ISTI-CNR</p></li>
                    <li><p>Vania Bogorny, Head of the Computer Science Graduate Program at Universidade Federal de Santa Catarina (UFSC) - Brazil</p></li>
                    <li><p>Stefano Leonardi, Full Professor at Sapienza University of Rome</p></li>
                </ul>
                <br/>
                <p style={{fontSize: '18px'}}>Abbiamo il supporto di:</p>
                <ul>
                    <li><p>Associazione Copernicani - mentor: Stefano Quintarelli - Member of the AI High Level Expert Group at European Commission and Chairman of the steering Committee of Agenzia per l’Italia Digitale (AGID)</p></li>
                    <li><p>Marco Trombetti, founder at Pi-Campus</p></li>
                    <li><p>Oreste Pollicino, Director of Bocconi LL.M. in Law of Internet Technology and full professor of Constitutional Law at Università Bocconi</p></li>
                    <li><p>Stefano Fratepietro, Group Head of Cybersecurity - Chief Security Officer at Be Think, Solve, Execute S.p.A.</p></li>
                    <li><p>Sébastien Bratières, Director of AI, Translated</p></li>
                    <li><p>Sebastian Filetti, STITCH (Sapienza information-based Technology InnovaTion Center for Health)</p></li>
                </ul>
                <br/>
                <p style={{fontSize: '18px'}}>In molti stanno supportando questa soluzione che, nel proteggere i cittadini, non mette in secondo piano la loro privacy.</p>
            </div>
            <div className='col-3'></div>
        </div>
    </div>
)

export default WorkingWithSection