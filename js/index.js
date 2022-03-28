let users = []; 

$().ready(
    () => {
        console.log("jQuery is ready!")

        let url = "http://localhost:57815/api/users"

        $.getJSON(url)
            .then(
                (res) => {
                     console.debug(res);
                     users = res;
                     display(users);
                    }
            )
            .fail(
                (err) => { console.error(err); }
            );
    }
);

const display = (users) => {
    var tbody = $("#users");
    tbody.empty();
    for(let user of users) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        tr.append(tdId); // puts the td inside the tr (in the html)
        let tdName = $(`<td>${user.firstName} ${user.lastName}</td>`);
        tr.append(tdName);
        let tdUsername = $(`<td>${user.username}</td>`);
        tr.append(tdUsername); 
        let tdPhone = $(`<td>${user.phone}</td>`);
        tr.append(tdPhone);
        let tdEmail = $(`<td>${user.email}</td>`);
        tr.append(tdEmail);
        let tdReviewer = $(`<td>${(user.isReviewer ? "&#10004;":"&#10006;")}</td>`); // ternary to only view Y/N
        tr.append(tdReviewer);
        let tdAdmin = $(`<td>${(user.isAdmin ? "&#10004;":"&#10006;")}</td>`);
        tr.append(tdAdmin);
        tbody.append(tr); // puts the tr in the body (in the html)
    }
}
