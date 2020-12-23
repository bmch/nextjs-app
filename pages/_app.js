import '../styles/global.css';
import { useStore } from '../store';
import './index.scss';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  // we pass in initial redux here
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
