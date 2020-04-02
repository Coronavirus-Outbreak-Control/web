import React from 'react'
import { FormattedMessage } from 'react-intl'

const WorkingWithSection = () => (
  <div className='container-fluid col-sm-12' id='working-with-container'>
        <div className='row'>
            <div className='col-3'></div>
            <div className='col-6'>
                <h1 style={{textAlign: 'center'}}>
                <FormattedMessage id='WorkingWith.title' />
                </h1>
                <br/>
                <p style={{fontSize: '18px'}}>
                  <FormattedMessage id='WorkingWith.description' />
                </p>
            </div>
            <div className='col-3'></div>
        </div>
        <div className='row'>
            <div className='col-3'></div>
            <div className='col-6'>
                <p style={{fontSize: '18px'}}>
                  <FormattedMessage id='WorkingWith.collaborateWith' />
                </p>

                <ul>
                    <li><p>
                    <FormattedMessage id='WorkingWith.list1' />
                    </p></li>
                    <li><p>
                    <FormattedMessage id='WorkingWith.list2' />
                    </p></li>
                    <li><p>
                    <FormattedMessage id='WorkingWith.list3' />
                    </p></li>
                </ul>
                <br/>
                <p style={{fontSize: '18px'}}>
                <FormattedMessage id='WorkingWith.supported' />
                </p>
                <ul>
                    <li><p></p></li>
                    <li><p>Marco Trombetti, founder at Pi-Campus</p></li>
                    <li><p><FormattedMessage id='WorkingWith.list4' /></p></li>
                    <li><p><FormattedMessage id='WorkingWith.list5' /></p></li>
                    <li><p><FormattedMessage id='WorkingWith.list6' /></p></li>
                    <li><p><FormattedMessage id='WorkingWith.list7' /></p></li>
                </ul>
                <br/>
                <p style={{fontSize: '18px'}}><FormattedMessage id='WorkingWith.footer' /></p>
            </div>
            <div className='col-3'></div>
        </div>
    </div>
)

export default WorkingWithSection