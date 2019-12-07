// getting the class instance here
const github = new Github;

// getting the UI instance here
const ui = new UI;

// getting the search input here
const seachText = document.querySelector('.searchGIT');

// adding the event listner to input field
seachText.addEventListener('keyup', (e) => {

    let gitUser = e.target.value;

    // validating the input here
    if (gitUser !== '') {
        github.getUser(gitUser)
            .then(data => {

                // checking for the null user
                if (data.userData.message === "Not Found") {
                    // show alert here
                    console.log('no')
                } else {
                    // show users
                    ui.showUser(data.userData)
                }
            })


    } else {

        // clearing the data here
        console.log('clear')
    }

})