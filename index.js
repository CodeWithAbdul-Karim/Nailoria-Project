$(document).ready(function () {
    // CONTACT FORM VALIDATIONS
    $("#nailoria-form").submit(function (e) {
        e.preventDefault();
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let comment = $("#comment").val().trim();
        let isValid = true
        $(".error").text("");

        if (name === "") {
            $("#name").next(".error").text("Please enter your name.");
            $("#name").css("border", "1px solid #dc3545");
            isValid = false;
        }
        if (email === "") {
            $("#email").next(".error").text("Please enter a valid email.");
            $("#email").css("border", "1px solid #dc3545");
            isValid = false;
        }
        if (comment === "") {
            $("#comment").next(".error").text("Message must be 10-1000 characters.");
            $("#comment").css("border", "1px solid #dc3545");
            isValid = false;
        } else if (comment.length < 10) {
            $("#comment").next(".error").text("Minimum 10 characters required.");
            $("#comment").css("border", "1px solid #dc3545");
            isValid = false;
        }

        if (isValid) {
            $("#nailoria-form")[0].reset();

            $("#successAlert").removeClass("d-none");

            setTimeout(function () {
                $("#successAlert").addClass("d-none");
            }, 5000);
        }
    });




    // FEEDBACK FORM VALIDATIONS
    $("#feedback-form").submit(function (e) {
        e.preventDefault();
        let name = $("#f-name").val().trim();
        let email = $("#f-email").val().trim();
        let rating = $("#rating").val();
        let feedback = $("#feedback").val().trim();
        let isValid = true;
        $(".error").text("");

        if (name === "") {
            $("#f-name").next(".error").text("Please enter your name.");
            $("#f-name").css("border", "1px solid #dc3545");
            isValid = false;
        }
        if (email === "") {
            $("#f-email").next(".error").text("Please enter a valid email.");
            $("#f-email").css("border", "1px solid #dc3545");
            isValid = false;
        }
        if (!rating) {
            $("#rating").next(".error").text("Please select a rating.");
            $("#rating").css("border", "1px solid #dc3545");
            isValid = false;
        }
        if (feedback === "") {
            $("#feedback").next(".error").text("Feedback must be 10-1000 characters.");
            $("#feedback").css("border", "1px solid #dc3545");
            isValid = false;
        } else if (feedback.length < 10) {
            $("#feedback").next(".error").text("Minimum 10 characters required.");
            $("#feedback").css("border", "1px solid #dc3545");
            isValid = false;
        }

        // RESET FORM FIELDS AND SUCCESSFUL ALERT
        if (isValid) {
            $("#feedback-form")[0].reset();

            $("#f-successAlert").removeClass("d-none");

            setTimeout(function () {
                $("#f-successAlert").addClass("d-none");
            }, 5000);
        }
    });

    // REAL TIME ERROR
    $("input, textarea, select").on("input", function () {
        if ($(this).val().trim() !== "") {
            $(this).siblings(".error").text("");
            $(this).css("border", "");
        }
    });

    //   NAVBAR
        const toggler = document.querySelector(".custom-toggler");
    
        toggler.addEventListener("click", function () {
            this.classList.toggle("active");
        });
});


