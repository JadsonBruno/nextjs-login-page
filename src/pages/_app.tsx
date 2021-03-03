/**
 * IMPORTS
 */
import {ThemeProvider} from 'styled-components';
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import {Provider} from 'react-redux';
import reducers from '../aggregates/index';
import Store from '../store/index';
import {theme} from '../styles/global';
import '../styles/montserrat.css';
import 'antd/dist/antd.css';

// combine reducers
const reducer = Store.combineReducers(reducers);

// create global redux store
const store = Store.create(reducer);


/**
 * EXPORTS
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>NextJS Login</title>
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
