import { rest } from 'msw';
import { groupsMock } from '../constants/groups-mock';

export const groupMockApi = {

    // Get my affliated educations
    getGroups: () => {
        return rest.get('/groups', (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json(groupsMock)
            )
        });
    }

}