let link = document.querySelector('#link');
link.addEventListener('click', () => {
    document.querySelector('.login_panel').classList.add('show');
    document.querySelector('.Regester_panel').classList.add('hide');
})
let create = document.querySelector('#create');
create.addEventListener('click', () => {
    regesterShow();
})
window.onload = () => {
    let success = getParameterByName('success');
    let regester = getParameterByName('regester');
    if (success == "false") {
        console.log('loaded' + success);
        document.querySelector('.error').innerHTML = '<spanstyle="color:red"> Password/Email uncorrect <span>'
    }
    if (regester == 'true') {
        regesterShow();
        document.querySelector('.Reerror').innerHTML = '<span style="color:red"> Can not Regester Please try again<span>'

    }
    // "lorem"

}

function regesterShow() {
    document.querySelector('.login_panel').classList.add('hide');
    document.querySelector('.Regester_panel').classList.add('show');
}
// document.querySelector('#Regester_sub').addEventListener('click', () => {
//     create_account();
// })
// document.querySelector('#login').addEventListener('click', () => {
//     login_getData();
// })

$('#form_login type=[submit]').click(function(e) {
    e.preventDefault(); //prevents default form submit.
    $.ajax({ //fetches data from file and inserts it in <div id="data"></div>
        url: 'http://localhost/Social_media_app/public/php/login.php',
        data: { data: $('#form_login').serialize() },
        success: function(data) {
            $('#data').html(data);
        }
    });
});

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
//create an account
// function create_account() {
//     let user = document.querySelector('.user'),
//         fullname = document.querySelector('.fullname'),
//         email = document.querySelector('.email_re'),
//         password = document.querySelector('.password_re'),
//         repassword = document.querySelector('.repassword'),
//         day = document.querySelector('.day'),
//         month = document.querySelector('.month'),
//         year = document.querySelector('.year'),
//         gender = document.querySelectorAll('input[name=gender]:checked');
//     let _user = user.value,
//         _email = _email.value,
//         _passord = password.value;
//     login_In({ _user, _email, _passord });
//     console.log(user.value + ' \n' + email.value + ' \n' + password.value + ' \n' + repassword.value + ' \n' + gender[0].value)
// }

// function login_getData() {
//     let user = document.querySelector('.user'),
//         email = document.querySelector('.email_re'),
//         password = document.querySelector('.password_re');
//     let _user = user.value,
//         email = _email.value,
//         _passord = password.value;
//     console.log({ _user, _email, _passord });
//     login_In({ _user, _email, _passord });


// }


// function login_In({ email, user, password }) {
//     if (user != '' && email != '') {

//         postData('http://localhost/Social_media_app/public/php/login.php', { UserName: user, Email: email, Password: password })
//             .then(data => {
//                 console.log(data); // JSON data parsed by `data.json()` call
//             });
//     } else {
//         // no username or email been inserted 
//         //ask the user to enter the email or username

//     }

// }

// Example POST method implementation:
// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://example.com/answer', { answer: 42 })
//     .then(data => {
//         console.log(data); // JSON data parsed by `data.json()` call
//     });