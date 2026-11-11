$(document).ready(function () {


    function passLevel(p) {
        if (p.length < 8 || !/[A-Za-z]/.test(p) || !/[0-9]/.test(p)) return "weak";
        if (/[a-z]/.test(p) && /[A-Z]/.test(p) && /[^A-Za-z0-9\s]/.test(p)) return "strong";
        return "medium";
    }

    function showError(fieldId, errorId, message) {
        $("#" + errorId).text(message);
        $("#" + fieldId).toggleClass("is-invalid", message !== "")
            .toggleClass("is-valid", message === "")
            .attr("aria-invalid", message !== "" ? "true" : "false");
        return message === "";
    }

    function checkName() {
        var name = $("#userName").val().trim();
        return showError("userName", "errName", name === "" ? "Name is required" : "");
    }

    function checkEmail() {
        var email = $("#userEmail").val().trim();
        var mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var error = email === "" ? "Email is required" : "";
        if (email !== "" && !mailPattern.test(email)) error = "Enter an email like name@example.com";
        return showError("userEmail", "errEmail", error);
    }

    function checkPassword() {
        var password = $("#userPass").val();
        var lvl = passLevel(password);
        $("#passStrength").text(password === "" ? "" : "Strength: " + lvl);
        $("#passStrength").removeClass("text-danger text-warning text-success");
        if (lvl === "weak") $("#passStrength").addClass("text-danger");
        else if (lvl === "medium") $("#passStrength").addClass("text-warning");
        else $("#passStrength").addClass("text-success");
        var error = password === "" ? "Password is required" : "";
        if (password !== "" && lvl === "weak") error = "Use at least 8 characters, including a letter and a number";
        return showError("userPass", "errPass", error);
    }

    function checkConfirmation() {
        var confirmation = $("#userPass2").val();
        var error = confirmation === "" ? "Please confirm your password" : "";
        if (confirmation !== "" && confirmation !== $("#userPass").val()) error = "Passwords do not match";
        $("#passMatch").text(error === "" ? "Passwords match" : "").addClass("text-success");
        return showError("userPass2", "errPass2", error);
    }

    function checkMessage() {
        var message = $("#userMsg").val().trim();
        return showError("userMsg", "errMsg", message === "" ? "Message is required" : "");
    }

    $("#userName").on("input", checkName);
    $("#userEmail").on("input", checkEmail);
    $("#userMsg").on("input", checkMessage);
    $("#userPass2").on("input", checkConfirmation);
    $("#userPass").on("input", function () {
        checkPassword();
        if ($("#userPass2").val() !== "" || $("#errPass2").text() !== "") checkConfirmation();
    });
    $("#joinForm input, #joinForm textarea, #joinForm select").on("input change", function () {
        $("#joinStatus").prop("hidden", true);
    });

    $("#joinForm").on("submit", function (e) {
        e.preventDefault();
        $("#joinStatus").prop("hidden", true);
        var checks = [checkName(), checkEmail(), checkPassword(), checkConfirmation(), checkMessage()];
        if (checks.indexOf(false) !== -1) {
            $(this).find(".is-invalid").first().trigger("focus");
            return;
        }

        this.reset();
        $(this).find(".is-valid, .is-invalid").removeClass("is-valid is-invalid").removeAttr("aria-invalid");
        $("#errName, #errEmail, #errPass, #errPass2, #errMsg, #passStrength, #passMatch").text("");
        $("#joinStatus").text("Thanks! All fields are valid. This practice form does not send messages or create accounts.")
            .prop("hidden", false).trigger("focus");
    });


    function doFilter() {
        var word = $("#findBox").val().trim().toLowerCase();
        var type = $(".pickBtn.active").data("type");
        $(".activity").each(function () {
            var txt = $(this).text().toLowerCase();
            var cat = $(this).data("type");
            var showText = txt.indexOf(word) !== -1;
            var showCat = (type === "all" || cat === type);
            if (showText && showCat) $(this).show(); else $(this).hide();
        });
    }

    if ($("#findBox").length > 0) {
        $("#findBox").on("input", doFilter);
        $(".pickBtn").on("click", function () {
            $(".pickBtn").removeClass("active btn-primary").addClass("btn-outline-primary");
            $(this).addClass("active btn-primary").removeClass("btn-outline-primary");
            doFilter();
        });
    }

    var schedule = [
        { day: "Monday", time: "17:00", activity: "Football", place: "Main Field" },
        { day: "Wednesday", time: "17:00", activity: "Basketball", place: "Gym" },
        { day: "Friday", time: "16:00", activity: "Volleyball", place: "Gym" },
        { day: "Saturday", time: "10:00", activity: "Running", place: "Stadium" }
    ];

    function drawTable() {
        $("#scheduleTable tbody").empty();
        for (var i = 0; i < schedule.length; i++) {
            var row = schedule[i];
            var html = "<tr>";
            html += "<td>" + row.day + "</td>";
            html += "<td>" + row.time + "</td>";
            html += "<td>" + row.activity + "</td>";
            html += "<td>" + row.place + "</td>";
            html += "<td><button class='btn btn-sm btn-warning editRow' data-index='" + i + "'>Edit</button> ";
            html += "<button class='btn btn-sm btn-danger removeRow' data-index='" + i + "'>Delete</button></td>";
            html += "</tr>";
            $("#scheduleTable tbody").append(html);
        }
    }

    if ($("#scheduleTable").length > 0) {
        drawTable();

        $("#addRow").on("click", function () {
            var d = $("#dayInput").val().trim();
            var t = $("#timeInput").val().trim();
            var a = $("#activityInput").val().trim();
            var p = $("#placeInput").val().trim();
            if (d === "" || t === "" || a === "" || p === "") {
                alert("Please fill all fields");
                return;
            }
            schedule.push({ day: d, time: t, activity: a, place: p });
            drawTable();
            $("#dayInput, #timeInput, #activityInput, #placeInput").val("");
        });

        $(document).on("click", ".removeRow", function () {
            var idx = parseInt($(this).attr("data-index"));
            if (confirm("Delete this row?")) {
                schedule.splice(idx, 1);
                drawTable();
            }
        });

        $(document).on("click", ".editRow", function () {
            var idx = parseInt($(this).attr("data-index"));
            $("#editIndex").val(idx);
            $("#editDay").val(schedule[idx].day);
            $("#editTime").val(schedule[idx].time);
            $("#editActivity").val(schedule[idx].activity);
            $("#editPlace").val(schedule[idx].place);
            var modal = new bootstrap.Modal(document.getElementById('editModal'));
            modal.show();
        });

        $("#saveEdit").on("click", function () {
            var idx = $("#editIndex").val();
            schedule[idx] = {
                day: $("#editDay").val().trim(),
                time: $("#editTime").val().trim(),
                activity: $("#editActivity").val().trim(),
                place: $("#editPlace").val().trim()
            };
            drawTable();
            bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
        });
    }

    if ($(".gallery-img").length > 0) {
        var pics = [];
        $(".gallery-img").each(function () { pics.push($(this).attr("src")); });
        var pos = 0;
        $(".gallery-img").on("click", function () {
            pos = pics.indexOf($(this).attr("src"));
            $("#bigImage").attr("src", pics[pos]);
            $("#lightbox").fadeIn(250).css("display", "flex");
        });
        $("#closeBox").on("click", function () { $("#lightbox").fadeOut(250); });
        $("#rightArrow").on("click", function () {
            pos = (pos + 1) % pics.length;
            $("#bigImage").fadeOut(150, function () { $(this).attr("src", pics[pos]).fadeIn(150); });
        });
        $("#leftArrow").on("click", function () {
            pos = (pos - 1 + pics.length) % pics.length;
            $("#bigImage").fadeOut(150, function () { $(this).attr("src", pics[pos]).fadeIn(150); });
        });
    }
});
