let parms;

$().ready(
    () => {
        parms = getUrlParms();
        console.debug("Parms:", parms);

        refresh();

        $("#refresh").on("click", () => {
            refresh();
        });

        $("#delete").on("click", () => {
            remove();
        });
    });

const remove = () => {
    let id = parms.id;
    $.ajax({
        method: "DELETE",
        url: `http://localhost:57815/api/users/${id}`,
        contentType: "application/json"
    })
        .then((res) => {
            console.debug("DELETE response:", res);
            document.location.href = "index.html";
        })
        .fail((err) => {
            console.error("ERROR:", err);
        }); 
}


const refresh = () => {
    let id = parms.id;
    $.getJSON(`http://localhost:57815/api/users/${id}`)
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