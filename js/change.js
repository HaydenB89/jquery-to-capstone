let user;

$().ready(() => {
    console.debug("ready");

    $("#get").on("click", () => {
        let id = $("#xId").val();
        display(id);
    })

    $("#save").on("click", () => {
        save();
    })
});

const display  = (id) => {
    $.getJSON("http://localhost:57815/api/users/" + id)
        .then((res) => {
            user = res;
            console.debug(res);
            $("#inputId").val(user.id);
            $("#inputUsername").val(user.username);
            $("#inputFstName").val(user.firstName);
            $("#inputLstName").val(user.lastName);
            $("#inputPhone").val(user.phone);
            $("#inputEmail").val(user.email);
            $("#inputReviewer").prop("checked", user.isReviewer);
            $("#inputAdmin").prop("checked", user.isAdmin);

        })
        .fail((err) => { console.error(err); });

}

const save = () => {
    let user = {
        id: +$("#inputId").val(),
        username: $("#inputUsername").val(),
        password: "Train@MAX",
        firstName: $("#inputFstName").val(),
        lastName: $("#inputLstName").val(),
        phone: $("#inputPhone").val(),
        email: $("#inputEmail").val(),
        isReviewer: $("#inputReviewer").prop("checked"),
        isAdmin: $("#inputAdmin").prop("checked")
    }
    console.debug(user);
    $.ajax({
        url: "http://localhost:57815/api/users/" + user.id,
        method: "PUT",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
    .then((res) => { console.log(res)})
    .fail((err) => { console.error(err)})
}