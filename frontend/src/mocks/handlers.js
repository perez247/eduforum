
// src/mocks/handlers.js
import { rest } from 'msw'
import { userMockApi } from './userMockApi'
import { groupMockApi } from './groupMockApi'

export const handlers = [

  // Handles a GET request to get affiliations
  userMockApi.getAffiliations(),

  // Get groups
  groupMockApi.getGroups(),
]
