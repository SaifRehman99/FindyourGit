class UI {
    constructor() {
        this.prof = document.querySelector('.profile');
    }

    // showing the user here
    showUser(user) {
        console.log(user)

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
  <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Public Repository
    <span class="badge badge-primary badge-pill">${user.public_repos}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  Public Gist
    <span class="badge badge-primary badge-pill">${user.public_gists}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  followers
    <span class="badge badge-primary badge-pill">${user.followers}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  following
    <span class="badge badge-primary badge-pill">${user.following}</span>
  </li>
</ul>
  </div>
  </div>
  
  <div class="list-group mt-4 col-md-6 col-sm-12">
  <a href="#" class="list-group-item list-group-item-action">
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
 
</div>`
    }

}