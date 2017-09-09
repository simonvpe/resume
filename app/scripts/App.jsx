import React from 'react';
import { autobind } from 'core-decorators';
import Header from './components/Header';
import texts from '../texts.json';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: location.pathname.indexOf('en') > -1 ? 'en' : 'se',
      texts
    };
  }

  @autobind
  setLang(e) {
    const lang = e.currentTarget.checked ? 'en' : 'se';

    window.history.pushState('', '', (lang === 'se' ? '/' : '?en'));
    this.setState({
      lang
    });
  }

  render() {
    const state = this.state;
    const strings = state.texts;

    return (
      <div className="app">
        <Header lang={state.lang} setLang={this.setLang} texts={state.texts} />

        <main>
          <div className="section summary">
            <div className="container">
              <h3 className="section__title">{state.texts.summary.title[state.lang]}</h3>
              <ul className="section__list">
                {strings.summary.items[state.lang].map((item, i) =>
                  (<li key={i}>{item}</li>)
                )}
              </ul>
            </div>
          </div>

          <div className="section skills">
            <div className="container">
              <h3 className="section__title">{strings.skills.title[state.lang]}</h3>
              <ul className="section__list">
                <li>
                  <h4>C++</h4>
                  <p>C++17</p>
                </li>

                <li>
                  <h4>Linux</h4>
                  <p>Yocto, Bitbake, Drivers, Bash, RHEL, Centos, Fedora, Debian, Ubuntu</p>
                </li>	
	
                <li>
                  <h4>Continous Integration</h4>
                  <p>Gitlab, Gitlab-CI, Jenkins, Docker</p>
                </li>

                <li>
                  <h4>Development Tools</h4>
                  <p>Git, SVN, CMake, Gnu Make, Jira</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="section experience">
            <div className="container">
              <h3 className="section__title">{strings.experience.title[state.lang]}</h3>
              <ul className="section__list">
                {strings.experience.items[state.lang].map((item, i) =>
                  (<li key={i}>
                    <span className="timeframe">{item.timeframe}</span>
                    {item.title
                      ? (<a href={item.link} className="title" target="_blank">{item.title}</a>)
                      : ''
                    }
                    {item.description}

                    <em>{strings.experience.learned[state.lang]}: {item.experience}</em>
                  </li>)
                )}
              </ul>
            </div>
          </div>

          <div className="section">
            <div className="container">
              <h3 className="section__title">{strings.extra.title[state.lang]}</h3>

              <p>{strings.extra.text[state.lang]} – <a
                href="http://simonvpe.github.io"
                target="_blank">http://simonvpe.github.io</a>
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
