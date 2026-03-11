import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import contactReduser from "./redusers/contactsReduser";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = applyMiddleware(sagaMiddleware, logger);
export default createStore(
  contactReduser,
  composeWithDevTools(loggerMiddleware),
);

sagaMiddleware.run(rootSaga);
