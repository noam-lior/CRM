import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Clients from '../Clients/Clients'
import Actions from '../Actions/Actions'
import Analytics from '../Analytics/Analytics'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit"><Link to="/clients">Clients</Link></Button>
            <Button color="inherit"><Link to="/actions">Actions</Link></Button>
            <Button color="inherit"><Link to="/analytics">analytics</Link></Button>
          </Toolbar>
        </AppBar>
        <Route path="/clients" exact render={() =>
          <Clients data={props.data} />}>
        </Route>

        <Route path="/actions" exact render={() =>
          <Actions owners={props.owners}
            emailTypes={props.emailTypes}
            updateClientAction={props.updateClientAction}
            addNewClient={props.addNewClient} />}>
        </Route>

        <Route path="/analytics" exact render={() =>
           <Analytics
           getMonthsNewClient={props.getMonthsNewClient}
           emailsSent={props.emailsSent}
           />}>

           </Route>

      </Router>

    </div>
  );
}