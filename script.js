//Using fetch:

$(function () {

    let url ="https://randomuser.me/api/?results=20";
    let p = "";

    fetchInformation(url)

    function fetchInformation(url) {
        fetch(url)
        .then((response) =>(response.json()))
        .then(function(data) {

            data.results.forEach(person => {

                p = `<div class = "col-md-2">
                <img src="${person.picture.large}" class="rounded-circle">
                <h5 style="font-size:14px">${person.name.first} ${person.name.last}</h5>
                <div><span class="fi fi-${person.nat.toLowerCase()}"></span></div>
                <i class="fa-brands fa-github ${person.gender}"></i>
                <i class="fab fa-facebook-square ${person.gender}"></i>
                <i class="fab fa-twitter mb-3 ${person.gender}"></i> 
                </div>`
                console.log(p);

                $(".result.first").append(p);
                $(".result.second").append(p);

            });
        });
    };
})

//Using ajax:

// $(function () {
//     $.ajax({
//         url: 'https://randomuser.me/api/?results=20',
//         dataType: 'json',
//         success: function GetPeople(data) {
//             $.each(data.results, function (results, person) {
//                 $('.first, .second').append(`<div class = "col-md-2">
//                                <img src="${person.picture.large}" class="rounded-circle">
//                                <h5 style="font-size:14px">${person.name.first} ${person.name.last}</h5>
//                                <div><span class="fi fi-${person.nat.toLowerCase()}"></span></div>
//                                <i class="fa-brands fa-github ${person.gender}"></i>
//                                <i class="fab fa-facebook-square ${person.gender}"></i>
//                                <i class="fab fa-twitter mb-3 ${person.gender}"></i> 
//                                </div>`);

//             })

//         },

//         error: function (data) {
//             alert('error!');
//         }

//     })
// })