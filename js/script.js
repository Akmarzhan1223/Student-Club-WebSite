$(document).ready(function () {


    function passLevel(p) {
        var n = 0;
        if (p.length >= 8) n++;
        if (/[A-Z]/.test(p)) n++;
        if (/[0-9]/.test(p)) n++;
        if (/[^A-Za-z0-9]/.test(p)) n++;
        if (n <= 1) return "weak";
        if (n <= 3) return "medium";
        return "strong";
    }

    $("#userPass").on("keyup", function () {
        var lvl = passLevel($(this).val());
        $("#passStrength").text("Strength: " + lvl);
        $("#passStrength").removeClass("text-danger text-warning text-success");
        if (lvl === "weak") $("#passStrength").addClass("text-danger");
        else if (lvl === "medium") $("#passStrength").addClass("text-warning");
        else $("#passStrength").addClass("text-success");
    });

    $("#userPass2").on("keyup", function () {
        var ok = $(this).val() === $("#userPass").val();
        $("#passMatch").text(ok ? "Passwords match" : "Passwords do not match");
        $("#passMatch").removeClass("text-success text-danger");
        $("#passMatch").addClass(ok ? "text-success" : "text-danger");
    });

    $("#joinForm").on("submit", function (e) {
        var good = true;
        var mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var nm = $("#userName").val().trim();
        var em = $("#userEmail").val().trim();
        var ps = $("#userPass").val();
        var ps2 = $("#userPass2").val();
        var ms = $("#userMsg").val().trim();

        if (nm === "") { $("#errName").text("Name is required"); good = false; } else { $("#errName").text(""); }
        if (!mailPattern.test(em)) { $("#errEmail").text("Invalid email format"); good = false; } else { $("#errEmail").text(""); }
        if (passLevel(ps) === "weak") { $("#errPass").text("Password is too weak"); good = false; } else { $("#errPass").text(""); }
        if (ps !== ps2) { $("#errPass2").text("Passwords must match"); good = false; } else { $("#errPass2").text(""); }
        if (ms === "") { $("#errMsg").text("Message is required"); good = false; } else { $("#errMsg").text(""); }

        if (!good) {
            e.preventDefault();
        } else {
            alert("Thanks! Your message was sent.");
        }
    });


    function doFilter() {
        var word = $("#findBox").val().toLowerCase();
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
        $("#findBox").on("keyup", doFilter);
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
