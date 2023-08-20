import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../../constants/general';

export const universityApi = createApi({
    reducerPath: 'universityApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ENV.baseUrl,
        prepareHeaders: (headers) => {
            return headers;
        }
    }),

    endpoints: (builder) => ({
        
        // Query to get the user group
        getUniversity: builder.query({
            query:() => {
                return `/university.json`;
            }
        }),
        
        // Query to get the user group
        getUniversityStudents: builder.query({
            query:({ universityId }) => {
                return `/universityStudents.json`;
            }
        }),
        
        // Query to get the user group
        getUniversityGroup: builder.query({
            query:({ universityId }) => {
                return `/universityGroupList.json`;
            }
        }),
    }),
});


export const {
    getUniversity,
    getUniversityStudents,
    getUniversityGroup
} = universityApi;