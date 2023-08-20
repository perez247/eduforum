import { configureStore } from "@reduxjs/toolkit";
import { layoutSlice } from "./common/layoutSlice";
import { Provider } from "react-redux";
import { groupApi } from "./apis/groupApi";
import { userApi } from "./apis/userApi";

const AppStore = configureStore({
    reducer: {
        layout: layoutSlice.reducer,
        [groupApi.reducerPath]: groupApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
                  .concat(groupApi.middleware)
                  .concat(userApi.middleware);
    }
});

const StateProvider = props => {
    return (
        <Provider store={AppStore}>
            {props.children}
        </Provider>
    )
}

export default StateProvider;