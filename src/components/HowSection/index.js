import React from 'react'
import how_it_works_1 from '../../assets/images/screens/how_it_works_1.png'
import how_it_works_2 from '../../assets/images/screens/how_it_works_2.png'
import how_it_works_3 from '../../assets/images/screens/how_it_works_3.png'
import how_it_works_3b from '../../assets/images/screens/how_it_works_3_b.png'
import how_it_works_4 from '../../assets/images/screens/how_it_works_4.png'

const HowSection = () => (
  <div
    className='container-fluid col-sm-12 pt-5 pb-5 blue-soft-bkg'
    id='how-container'
  >
    <div className='row'>
      <div className='col-2' />
      <div className='col-8'>
        <h1>Come funziona</h1>
      </div>
      <div className='col-2' />
    </div>
    <div className='row pt-1 pb-1'>
      <div className='col-2' />
      <div className='col-2'>
        <img src={how_it_works_1} height='100' />
      </div>
      <div className='col-5 '>
        <p>
          1. Ogni smartphone è associato ad un identificativo anonimo che può
          essere letto a distanza usando la tecnologie di alta precisione per
          brevi distanze.
        </p>
      </div>
      <div className='col-3' />
    </div>
    <div className='row pt-1 pb-1'>
      <div className='col-3' />

      <div className='col-5 '>
        <p>
          2. CovidApp raccoglie costantemente gli ID anonimi dei telefoni vicino
          a te, memorizzandoli in un database cloud centralizzato sicuro.{' '}
        </p>{' '}
      </div>
      <div className='col-2'>
        <img src={how_it_works_2} height='100' />
      </div>
      <div className='col-2' />
    </div>
    <div className='row pt-1 pb-1'>
      <div className='col-2' />
      <div className='col-2'>
        <img src={how_it_works_3} height='100' />
      </div>
      <div className='col-4 '>
        <p>
          3. La nostra rete di medici certificati aggiorna quotidianamente il
          database con gli ID dei dispositivi appartenenti a pazienti che hanno
          contratto il coronavirus.
        </p>
      </div>
      <div className='col-2'>
        <img src={how_it_works_3b} height='100' />
      </div>
      <div className='col-2' />
    </div>
    <div className='row pt-1 pb-1'>
      <div className='col-2' />
      <div className='col-2'>
        <img src={how_it_works_4} height='100' />
      </div>
      <div className='col-5 '>
        <p>
          4. Se sei stato in prossimità di una persona infetta in passato,
          riceverai una notifica e chiare istruzioni sui passaggi successivi da
          seguire.
        </p>
      </div>
      <div className='col-3' />
    </div>
  </div>
);

export default HowSection;
