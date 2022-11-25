import React, { Component } from 'react';
import NoInternet from '../Network/no-internet.png';
import Internet from '../Network/Connected.png';


  class NetworkConnection extends Component {
    state = {
      isConnected: false,
      isVisible: false
    }

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }


    handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const webPing = setInterval(
          () => {
            fetch('www.google.com')
              .then(() => {
                this.setState({ isConnected: false }, () => {
                  this.setState({ isVisible: true })
                  return clearInterval(webPing)
                });
              }).catch(() =>
                this.setState({ isConnected: true })
              )
          });
        return setTimeout(() => {
          return this.setState({ isVisible: false })
        }, 3000);
      }
      return this.setState({ isConnected: true });
    }

    render() {
      const { isConnected } = this.state;
      const { isVisible } = this.state;
      return (
        <div>
          {
            isVisible && (<div className="internet-connect">
              <img className='InternetConnect' src={Internet} alt="Internet"></img>
              <p>PACE OS Connected</p>
            </div>)
          }
          {isConnected && (<div className="internet-error">
            <img className='noInternet' src={NoInternet} alt="NoInternet"></img>
            <p>PACE OS Connection Lost</p>
          </div>)
          }
        </div>
      );
    }
  }


export default NetworkConnection;