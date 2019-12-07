class Github {

    constructor() {
        this.Client_ID = '5a8942b4aeacb3d20533';
        this.Client_Secret = '97fbe31b65d242dd9577d9d17378a8fea4c336f4';
    }

    // getting the user here
    async getUser(user) {

        // getting the user info here
        const userInfo = await fetch(`https://api.github.com/users/${user}?client_id=${this.Client_ID}&client_secret=${this.Client_Secret}`);

        // gettig the user repo here
        const userRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=4&sort=created: asc&client_id=${this.Client_ID}&client_secret=${this.Client_Secret}`);


        const userData = await userInfo.json();
        const userRepoInfo = await userRepo.json();

        // returing the obj here
        return {
            userData,
            userRepoInfo
        }
    }
}