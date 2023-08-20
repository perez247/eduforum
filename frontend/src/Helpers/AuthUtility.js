export const authUtility = {
    getCurrentUser: () => {
        const userAsString = localStorage.getItem('user');

        try {
            const userAsObj = JSON.parse(userAsString);
            if (userAsObj.type) {
                return userAsObj
            } 

            return null;
            
        } catch (error) {
            return null;
        }
    },

    logOut: () => {
        localStorage.clear();
    }
}