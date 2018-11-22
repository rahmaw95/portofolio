import React from 'react';
import ReactDOM from 'react-dom';
import {AuthProvider} from './context/utils/auth';
import './index.css';
import Header from './layout/withHeader';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './routes';
import Landing from './containers/Landing';
import Dashboard from './containers/Dashboard';

const App = () => (
    <div>
        <Router>
            <AuthProvider>
                <Header />
                <Switch>
                    <ProtectedRoute path="/dashboard" component={Dashboard} />
                    <Route path="/" component={Landing} />
                </Switch>
            </AuthProvider>
        </Router>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
