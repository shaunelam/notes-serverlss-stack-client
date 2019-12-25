import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/login";
import AppliedRoute from "./components/AppliedRoute";
import ResetPassword from "./containers/ResetPassword";
import Signup from "./containers/Signup";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Settings from "./containers/Settings";
import ChangePassword from "./containers/ChangePassword";
import ChangeEmail from "./containers/ChangeEmail";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
      <AppliedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
      <AppliedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
      <AppliedRoute
        path="/signup"
        exact
        component={Signup}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/settings/password"
        exact
        component={ChangePassword}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/settings/email"
        exact
        component={ChangeEmail}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/Settings"
        exact
        component={Settings}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/login/reset"
        exact
        component={ResetPassword}
        appProps={appProps}
      />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
