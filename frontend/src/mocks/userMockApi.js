import { rest } from 'msw';
import { userAffliationMock } from '../constants/userAffiliations';

export const userMockApi = {

    // Get my affliated educations
    getAffiliations: () => {
        return rest.get('/user-affiliation', (req, res, ctx) => {
            console.log(userAffliationMock);
            return res(
                ctx.status(200),
                ctx.json(userAffliationMock)
            )
        });
    }

}

