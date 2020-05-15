import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";

const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// export default function configureStore(initState) {
//   return createStore(
//     rootReducer,
//     initState,
//     compose(
//       applyMiddleware(...middleware),
//       window.devToolsExtension ? window.devToolsExtension() : (f) => f
//     )
//   );
// }
