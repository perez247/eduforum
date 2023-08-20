import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../../constants/general';

export const authApi = createApi({
    reducerPath: 'groupApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ENV.baseUrl,
        prepareHeaders: (headers) => {
            return headers;
        }
    }),

    endpoints: (builder) => ({

        // Query to register a user
        registerUser: builder.mutation({
            query: (body) => {
                return {
                    url: `/RegisterUser`,
                    method: 'POST',
                    body: body.body
                }
            }
        }),

        // Query to login a user
        loginUser: builder.mutation({
            query: (body) => {
                return {
                    url: `login`,
                    method: 'POST',
                    body: body.body
                }
            }
        }),

        // Query to get the user group
        getUserGroups: builder.query({
            query:({ userId }) => {
                return `groups?userId=${userId}`;
            }
        }),
    }),
});


export const {
    useGetUserGroupsQuery,
    useGetGroupChatQuery,
} = authApi;