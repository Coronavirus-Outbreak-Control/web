import React, { Component } from 'react'
import downloadIphone from '../../assets/images/screens/download-iphone.png'
import downloadAndroid from '../../assets/images/screens/download-android.png'
import downloadAppBig from '../../assets/images/screens/download-app-big.png'
import successIcon from '../../assets/images/screens/success-incon.png'

class AppsSection extends Component {
  state = {
    success: false
  }

  onLoad = () => {
    console.log('email sent!')
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ success: true })
  }

  render () {
    return (
      <div className='container-fluid col-sm-12 pt-5 pb-5' id='apps-container'>
            <div className='row justify-content-center'>
                <div className='col-5 align-self-center'>
                    <div className='download-app-container'>
                        <h2>Scarica le nostre App</h2>
                        <p>(In attesa del Governo Italiano)</p>
                        <div className='app-icons-container'>
                            <div className='row col-sm-12'>
                                <div className='col-12'>
                                    <img src={downloadIphone} height='43' width='148'/>
                                </div>
                                <div className='col-12 mt-2'>
                                    <img src={downloadAndroid} height='44' width='148'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='email-from-container'>
                        <h5>Ricevi un’email per sapere quando sarà disponibile:</h5>
                        <iframe name='hidden_iframe' id='hidden_iframe' style={{display: 'none'}}
                                onLoad={this.onLoad}></iframe>
                        <form className='form' action='https://docs.google.com/forms/d/e/1FAIpQLSf48TRm86_B-YmELAPiITt2qT0LscW1_1Z76zW-ycFohbz8bA/formResponse'
                              target='hidden_iframe' onSubmit={this.onSubmit}>
                            <input name='entry.1045781291' type='email' required />
                            &nbsp;
                            <button type='submit' className='btn btn-primary'>Send</button>
                            {this.state.success &&
                              <div className='success-icon' >
                                <img src={successIcon} height='24' width='24' />
                              </div>
                            }
                        </form>
                    </div>
                </div>
                <div className='col-7  image-mobile-download'>
                    <img src={downloadAppBig} />
                </div>
            </div>
        </div>
    )
  }
}

export default AppsSection