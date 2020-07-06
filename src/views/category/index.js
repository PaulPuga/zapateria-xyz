import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

import category from "./Category";
import category_details from "./Category.details";

const Catalogue = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/:id`} component={category_details} />
      <Route exact path={`${path}/`} component={category} />
      {/* <Redirect exact from={`${path}/edit/`} to={`${path}`} />
      <Route path={`${path}/edit/:id`} component={clientes_edit} />
      <Route path={`${path}/details/:id`} component={clientes_details} /> */}
    </Switch>
  );
};

export default Catalogue;
