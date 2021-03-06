import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-171095156-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
