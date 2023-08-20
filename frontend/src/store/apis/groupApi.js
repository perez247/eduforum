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
        getGroups: builder.query({
            query:({ userId }) => {
                return `/groupsList.json`;
            }
        }),
        
        // Query to get the user group
        getGroupStudents: builder.query({
            query:({ groupId }) => {
                return `/groupsStudents.json`;
            }
        }),

        // Query to get the list of chat of group
        getGroupMessage: builder.query({
            query:({ groupId, page, pageSize }) => {
                return `/groupMessage.json`;
            }
        }),

        postGroupMessage: builder.mutation({
            query: (body) => {
                return {
                    url: `/groupMessage.json`,
                }
            }
        }),
        
        // Query to get the list of chat of group
        getGroupMedia: builder.query({
            query:({ groupId, page, pageSize }) => {
                return `/groupMedia.json`;
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
    getGroups,
    getGroupStudents,
    getGroupMessage,
    postGroupMessage,
    getGroupMedia,
} = groupApi;