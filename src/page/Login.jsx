import React from 'react';
import userStore from '../store/user';

import BaseComponent from '../BaseComponent';

class Login extends BaseComponent {
    state = {
      email: ''
    };
  
    setInputEmail = (event) => {
      this.setState({
        email: (event.target.value || '').trim(),
      });
    };

    setId = () => {
      return this.state.email.split('@').shift().replace(/\W/g, '')
    }
  
    submit = async (event) => {
      event.preventDefault();
  
      if (!this.state.email) {
        alert('Use your @gmail.com account');
        return;
      }
      if (!this.state.email.endsWith('@gmail.com')) {
        alert('Use your @gmail.com account');
        return;
      }
      
      let id = this.setId();
  
      await userStore.editSingle({
        id,
        email: this.state.email,
      });
    };
  
    render() {
      return (
        <div>
          <section className="hero is-fullheight is-medium is-primary is-bold">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered">
                  <article className="card is-rounded">
                    <br />
                    <center>
                      <h1 className="title">
                        <div className="has-text-black">Tager Login</div>
                      </h1>
                    </center>
                    <div className="card-content">
                      <p className="control">
                        <input
                          className="input"
                          type="email"
                          value={this.state.email}
                          onChange={this.setInputEmail}
                          placeholder="name@gmail.com"
                        />
                      </p>
                      <br />
                      <p className="control">
                        <button
                          className="button is-primary is-fullwidth"
                          onClick={this.submit}
                        >
                          Login
                        </button>
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }

  export default Login;