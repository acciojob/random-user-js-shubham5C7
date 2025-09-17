let DataUser = {};

function fetchUser(){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];

        DataUser.title = `${user.name.first} ${user.name.last}`;
        DataUser.age = user.dob.age;
        DataUser.email = user.email;
        DataUser.phone = user.phone;
        DataUser.picture = user.picture.large;

        document.getElementById("userImage").src = DataUser.picture;
        document.getElementById("title").innerText = DataUser.title;

        // Clear previous additional info
        document.getElementById("additional-info").innerText = "";
    })
    .catch(error => console.error("Error fetching user:", error));
}

// Fetch first user on page load
fetchUser();

// GET ANOTHER USER button
document.getElementById("getUser").addEventListener("click", () => {
    fetchUser();
});

// Show Age, Email, or Phone in additional-info
document.querySelector('button[data-attr="age"]').addEventListener("click", () => {
    document.getElementById("additional-info").innerText = `${DataUser.age}`;
});
document.querySelector('button[data-attr="email"]').addEventListener("click", () => {
    document.getElementById("additional-info").innerText = `${DataUser.email}`;
});
document.querySelector('button[data-attr="phone"]').addEventListener("click", () => {
    document.getElementById("additional-info").innerText = ` ${DataUser.phone}`;
});
