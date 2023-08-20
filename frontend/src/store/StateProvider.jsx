import { configureStore } from "@reduxjs/toolkit";
import { layoutSlice } from "./common/layoutSlice";
import { Provider } from "react-redux";
import { groupApi } from "./apis/groupApi";
import { universityApi } from "./apis/universityApi";
import { userApi } from "./apis/userApi";

const AppStore = configureStore({
    reducer: {
        layout: layoutSlice.reducer,
        [groupApi.reducerPath]: groupApi.reducer,
        [universityApi.reducerPath]: universityApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
                  .concat(groupApi.middleware)
                  .concat(universityApi.middleware)
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