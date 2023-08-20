import { rest } from 'msw';
import { userLogin } from '../constants/login';

export const userMockApi = {

    // Get my affliated educations
    login: () => {
        return rest.get('/login', (req, res, ctx) => {
            // get the information from req

            // check if user exists in the 
            const users = userLogin;

            // If data if found then save in local storage else throw an error
            return res(
                ctx.status(200)
            )
        });
    }

}