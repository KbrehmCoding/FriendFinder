
// $(document.body).on('click', '.select', function (event) {

//     var $target = $(event.currentTarget);

//     $target.closest('.btn-group')
//         .find('[data-bind="label"]').text($target.text())
//         .end()
//         .children('.dropdown-toggle').dropdown('toggle');

//     return false;
// });

$("#submit").on("click", function (event) {
    event.preventDefault();

    function filledForm() {
        var filledIn = true;
        $(".control-form").each(function () {
            if ($(this).val() === "") {
                filledIn = false;
            }
        });

        $(".answersGiven").each(function () {
            if ($(this).val() === "") {
                filledIn = false;
            }
        });
        return filledIn;
    }

    if (filledForm()) {
        var userData = {
            name: $("#name").val(),
            image: $("#imageLink").val(),
            scores: [
                $("#question1").val(),
                $("#question2").val(),
                $("#question3").val(),
                $("#question4").val(),
                $("#question5").val(),
                $("#question6").val(),
                $("#question7").val(),
                $("#question8").val(),
                $("#question9").val(),
                $("#question10").val()
            ]
        };

        $.post("/api/public/friends", userData, function (data) {
            $("#friendName").text(data.name);
            $("#friendImg").attr("src", data.imageLink);
            $("#results-modal").modal("toggle");
        });
    } else {
        alert("Looks like you didn't fill it out completly, please fill in all fields.");
    }
});

