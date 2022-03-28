

$().ready(
    () => {
        refresh();

        $("#refresh").on("click", () => {
            refresh();
        });
    });

const refresh = () => {
    $.getJSON("http://localhost:57815/api/users/2")
        .then(
            (res) => { 
            console.debug(res);
            display(res);
        })
        .fail(
            (err) => { console.error(err); 
        });
}

const display = (user) => {
    $("#dId").text(user.id);
    $("#dName").text(`${user.firstName} ${user.lastName}`);
    $("#dUsername").text(user.username);
    $("#dPhone").text(user.phone);
    $("#dEmail").text(user.email);
    $("#dReviewer").text(user.isReviewer ? "Yes":"No");
    $("#dAdmin").text(user.isAdmin ? "Yes":"No");
}