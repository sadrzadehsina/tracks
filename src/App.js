import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AccountLayout, DashboardLayout } from '@Layouts';
import { SignIn } from '@Components/account';
import { Tracks } from '@Components/dashboard';

export default function App() {
  
  return (
    <Router>
      <Switch>

        <Route path="/tracks/account/:path?" exact>
          <AccountLayout>
            <Switch>
              <Route path="/tracks/account/signin" component={SignIn} />
            </Switch>
          </AccountLayout>
        </Route>

        <Route path="/tracks/dashboard/:path?" exact>
          <DashboardLayout>
            <Switch>
              <Route path="/tracks/dashboard/tracks" component={Tracks} />
            </Switch>
          </DashboardLayout>
        </Route>

        <Redirect to="/tracks/account/signin" />

      </Switch>
    </Router>
  );

};