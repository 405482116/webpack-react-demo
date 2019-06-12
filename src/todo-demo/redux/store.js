import { createStore } from "redux";

// 远程调试工具
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from "./reducers";

export default createStore(rootReducer, devToolsEnhancer());
