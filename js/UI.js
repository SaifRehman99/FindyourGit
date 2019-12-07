class UI {
    constructor() {
        this.prof = document.querySelector('.profile');
    }

    // showing the user here
    showUser(user) {


        this.prof.innerHTML = `<div class="row">
        <div class="card col-md-5 col-sm-12 mr-4" >
    <img src='${user.avatar_url}' class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.login}</h5>
      <p class="card-text">${user.bio}</p>
      <a href="${user.html_url}" target="_blank" class="btn btn-primary">View Profile</a>
    </div>
  </div>

  <div class='col-md-6  col-sm-12 profileDetails'>
  <button type="button" class="btn btn-primary">
  Public Repo <span class="badge badge-light">${user.public_repos}</span>
</button>
<button type="button" class="btn btn-primary">
  Public Gist <span class="badge badge-light">${user.public_gists}</span>
</button>
<button type="button" class="btn btn-primary">
  Followers <span class="badge badge-light">${user.followers}</span>
</button>
<button type="button" class="btn btn-primary">
  Followings <span class="badge badge-light">${user.following}</span>
</button>
 
<a href="#" class="list-group-item list-group-item-action mt-4">
  <i class="fas fa-user"></i> ${user.name}
  </a>
  <a href="#" class="list-group-item list-group-item-action">
  <i class="fas fa-address-card"></i> ${user.bio}
  </a>
  <a href="#" class="list-group-item list-group-item-action">
  <i class="fas fa-envelope-open"></i> ${user.email}
  </a>
  <a href="#" class="list-group-item list-group-item-action ">
  <i class="fas fa-location-arrow"></i> ${user.location}
  </a>
  <a href="#" class="list-group-item list-group-item-action">
  <i class="fas fa-building"></i> ${user.company}
  </a>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
  <i class="fab fa-chrome"></i>
 ${user.blog}
  </a>
  </div>
  </div>`
    }


    // show user
    showRepo(repo) {

        let output = '';

        repo.forEach(data => {
            output += `<a href="${data.html_url}" target="_blank"
        <div class="card card-body mt-4">
        <div class="row">
        <div class="col-md-6">
        <h4 class="font-weight-bold">${data.name}</h4>
        </div>
        <div class="col-md-6 d-flex justify-content-end">
        <button type="button" class="btn btn-primary">
        <i class="fas fa-star"></i> <span class="badge badge-light">${data.stargazers_count}</span>
      </button>
        <button type="button" class="btn btn-primary">
        <i class="fas fa-eye"></i>  <span class="badge badge-light">${data.watchers_count}</span>
      </button>
        <button type="button" class="btn btn-primary">
        <i class="fas fa-code-branch"></i> <span class="badge badge-light">${data.forks_count}</span>
      </button>
        </div>
        </div>
        </div>  
        </a>`
        })

        document.querySelector('.repos').innerHTML = output;


    }



    // clearing the users here
    clearUser() {
        this.prof.innerHTML = '';
    }

    // alerting the user for 404
    alertUser() {
        this.clearAlert()

        const parent = document.querySelector('.jumbotron');

        const jumbo = document.querySelector('.heading');

        const div = document.createElement('div');

        div.classList = 'alert alert-danger';

        div.textContent = 'No User Found!';

        parent.insertBefore(div, jumbo);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2500);

    }

    clearAlert() {
        let hasAlert = document.querySelector('.alert');

        if (hasAlert) {
            hasAlert.remove();
        }
    }
}