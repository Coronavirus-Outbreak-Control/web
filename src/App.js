import React from 'react'
import Header from './components/Header'
import TopSection from './components/TopSection'
import VideoSection from './components/VideoSection'
import AppsSection from './components/AppsSection'
import SocialSection from './components/SocialSection'
import AnonymousSection from './components/AnonymousSection'
import HowSection from './components/HowSection'
import WorkingWithSection from './components/WorkingWithSection'
import AboutSection from './components/AboutSection'
import ProtectSection from './components/ProtectSection'
import HelpSection from './components/HelpSection'
import ContactSection from './components/ContactSection'
import localeData from "./locale/data";
import {IntlProvider} from "react-intl";

let DEFAULT_LANGUAGE = 'it'

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/de'); // Add locale data for de
}

if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/de'); // Add locale data for de
}

const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]


let i18nConfig = {
  locale: languageWithoutRegionCode || DEFAULT_LANGUAGE,
  messages : localeData[languageWithoutRegionCode] || localeData[language] || localeData[DEFAULT_LANGUAGE]
};


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      i18nConfig
    }
  }
  changeLanguage = (lang) => {
    let i18nConfig = {
      locale: lang,
      messages: localeData[lang]
    };
    debugger
    this.setState({i18nConfig});

  };

  render = () => {
    debugger
    return (
      <IntlProvider locale={this.state.i18nConfig.locale} messages={this.state.i18nConfig.messages}>
        <React.StrictMode>
          <main className="App">
            <Header onChangeLanguage={this.changeLanguage}/>
            <TopSection/>
            <VideoSection/>
            <AppsSection/>
            <SocialSection/>
            <AnonymousSection/>
            <HowSection/>
            <WorkingWithSection/>
            <AboutSection/>
            <ProtectSection/>
            <HelpSection/>
            <ContactSection/>
          </main>
        </React.StrictMode>
      </IntlProvider>
    );
  }
}

export default App;
