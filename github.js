class GitHub{
    constructor(){
        this.client_id= '30ef69899a5d877c04cf';
        this.client_secret= 'd7d8ebc9bd61c8921238cfb6bd315b76de4e4392';
        this.repos_count=5;
        this.repos_sort= 'created: asc';
    }

    async getUser(user){
        const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profileData = await profileResponse.json();

        const repos = await repoResponse.json();

        return{
            profile: profileData,
            repo: repos
        }
    }
}