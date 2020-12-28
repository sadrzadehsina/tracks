import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AccountLayout, DashboardLayout } from '@Layouts';
import { SignIn } from '@Components/account';
import { Tracks } from '@Components/dashboard';

export default function App() {
  
  return (
    <Router>
      <Switch>

        <Route path="/account/:path?" exact>
          <AccountLayout>
            <Switch>
              <Route path="/account/signin" component={SignIn} />
            </Switch>
          </AccountLayout>
        </Route>

        <Route path="/dashboard/:path?" exact>
          <DashboardLayout>
            <Switch>
              <Route path="/dashboard/tracks" component={Tracks} />
            </Switch>
          </DashboardLayout>
        </Route>

      </Switch>
    </Router>
  );

};