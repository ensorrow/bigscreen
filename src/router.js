import React from 'react';
import { IndexRoute, Router, Route } from 'dva/router';
import App from './routes/App';

import IndexPage from './routes/IndexPage';

import Discover from "./routes/Discover.js";

import More from "./routes/More.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
        <Route path="/discover" component={Discover} />
      	<Route path="/more" component={More} />
    	</Route>
    </Router>
  );
}

export default RouterConfig;
