$().ready(() => {

    $("#save").on("click", () => {
        create();
    })

});

const create = () => {
    let user = {
        id: 0,
        username: $("#inputUsername").val(),
        password: "Train@MAX",
        firstname: $("#inputFstName").val(),
        lastname: $("#inputLstName").val(),
        phone: $("#inputPhone").val(),
        email: $("#inputEmail").val(),
        isReviewer: $("#inputReviewer").prop("checked"),
        isAdmin: $("#inputAdmin").prop("checked")
    }
    console.debug(user);
    $.ajax({
        url: "http://localhost:57815/api/users",
        method: "POST",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .then((res) => {
            console.debug(res);
            document.location.href = "index.html";
        })
        .fail((err) => {
            console.error(err);
        });
}