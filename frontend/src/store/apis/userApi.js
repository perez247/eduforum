import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../../constants/general';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ENV.baseUrl,
        prepareHeaders: (headers) => {
            return headers;
        }
    }),

    endpoints: (builder) => ({

        // Query to get the user group
        getUserAffiliations: builder.query({
            query:({ userId }) => {
                return `user-affiliation?userId=${userId}`;
            }
        }),
    }),
});


export const {
    useGetUserAffiliationsQuery,
} = userApi;