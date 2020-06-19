import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./index";

export const history = createBrowserHistory();

const composeSetup =process.env.NODE_ENV !== "production" &&typeof window === "object" &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: compose;
export const store = createStore(
  rootReducer, // root reducer with router state
  composeSetup(
    applyMiddleware(
      thunk,
      routerMiddleware(history) // for dispatching history actions
      // ... other middlewares ...
    )
  )
);

export const persistor = persistStore(store);
