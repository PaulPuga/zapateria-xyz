import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

import products from "./Products";
import product_create from "./Products.create";

const Catalogue = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={products} />
      <Route exact path={`${path}/create`} component={product_create} />
      {/* <Redirect exact from={`${path}/edit/`} to={`${path}`} />
      <Route path={`${path}/edit/:id`} component={clientes_edit} />
      <Route path={`${path}/details/:id`} component={clientes_details} /> */}
    </Switch>
  );
};

export default Catalogue;
