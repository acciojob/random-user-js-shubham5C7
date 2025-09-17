//your code here
 let DataUser = {};

    function fetchUser(){
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data =>{

             const user = data.results[0];

             DataUser.title =`${user.name.title} ${user.name.first} ${user.name.last}`;
                   DataUser.age = user.dob.age;
                   DataUser.email = user.email;
                   DataUser.phone = user.phone;
                   DataUser.picture = user.picture.large;

                   document.getElementById("useImage").src = DataUser.picture;
                    document.getElementById("title").innerText= DataUser.title;
        })
            .catch(error => console.error("Error fetching user:", error));
}
    fetchUser();

document.getElementById("btn-new").addEventListener("click", () => {
    fetchUser(); 
   document.getElementById("input").style.display = "none";
});



document.getElementById("btn-age").addEventListener("click", () => {
 const input = document.getElementById("input");
    input.style.display = "block"; 
    input.value = DataUser.age;

});
document.getElementById("btn-email").addEventListener("click", () => {
const input = document.getElementById("input");
    input.style.display = "block";
    input.value = DataUser.email;
});
document.getElementById("btn-phone").addEventListener("click", () => {
  const input = document.getElementById("input");
    input.style.display = "block";
    input.value = DataUser.phone;
});