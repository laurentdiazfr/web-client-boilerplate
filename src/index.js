import '@babel/polyfill';
import 'url-polyfill';
import 'moment/locale/fr';
import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import { message } from 'antd';
import './index.css';
import router from './router';

const ERROR_MSG_DURATION = 3;

// 1. Initialize
const app = dva({
    history: createHistory(),
    initialState: {
     products: [
       { name: 'dva', id: 1 },
       { name: 'antd', id: 2 },
     ],
   },
   onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
 });


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

export default app._store; // eslint-disable-line
