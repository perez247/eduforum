import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../../constants/general';

export const groupApi = createApi({
    reducerPath: 'groupApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ENV.baseUrl,
        prepareHeaders: (headers) => {
            return headers;
        }
    }),

    endpoints: (builder) => ({

        // Query to get the user group
        getUserGroups: builder.query({
            query:({ userId }) => {
                return `groups?userId=${userId}`;
            }
        }),

        // Query to get the list of chat of group
        getGroupChat: builder.query({
            query:({ groupId, page, pageSize }) => {
                return `chats?groupId=${groupId}&page=${page}&pageSize=${pageSize}`;
            }
        }),

        // *********************************************************************
        // This is a code sample for making other request other than get
        // *********************************************************************
        // toggleFavoriteMovie: builder.mutation({
        //     query: (body) => {
        //         return {
        //             url: `/account/${body.id}/favorite`,
        //             method: 'POST',
        //             body: body.body
        //         }
        //     }
        // })
    }),
});


export const {
    useGetUserGroupsQuery,
    useGetGroupChatQuery,
} = groupApi;