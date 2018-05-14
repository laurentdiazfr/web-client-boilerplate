import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { LocaleProvider } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_FR';

import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

const { ConnectedRouter } = routerRedux;


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={frFR}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
