// import '../styles/globals.css'
// import { inject, observer } from "mobx-react";
//
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
//
// // export default observer(MyApp);
// export default inject('Users')(observer(MyApp));

import '../styles/globals.css'
import React        from 'react';
import App          from 'next/app';
import { Provider } from 'mobx-react';

import initializeStore from '../store/init';

class CustomApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.mobxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default CustomApp;
