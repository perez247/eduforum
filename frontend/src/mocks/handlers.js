
// src/mocks/handlers.js
import { rest } from 'msw'
import { userMockApi } from './userMockApi'

export const handlers = [

  // Handles a GET request to get affiliations
  userMockApi.getAffiliations(),

  // Handles a GET /user request
  rest.get('/user', null),
]
