class Github {

    constructor() {
        this.Client_ID = '5a8942b4aeacb3d20533';
        this.Client_Secret = '97fbe31b65d242dd9577d9d17378a8fea4c336f4';
    }

    // getting the user here
    async getUser(user) {

        const userInfo = await fetch(`https://api.github.com/users/${user}?client_id=${this.Client_ID}&client_secret=${this.Client_Secret}`);

        const userData = await userInfo.json();

        // returing the obj here
        return {
            userData
        }
    }
}