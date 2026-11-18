$(document).ready(function() {

    if (localStorage.getItem("theme") == "dark") {
        $("body").addClass("dark");
        $("#themeBtn").text("Light");
    }

    $("#themeBtn").click(function() {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("theme", "dark");
            $(this).text("Light");
        } else {
            localStorage.setItem("theme", "light");
            $(this).text("Dark");
        }
    });
    var savedName = localStorage.getItem("user");
    if (savedName) {
        $("#signInBtn").hide();
        $("#userInfo").show();
        $("#helloText").text("Hello, " + savedName);
    }

    $("#loginForm").submit(function(e) {
        e.preventDefault();
        var name = $("#nameInput").val();
        var email = $("#emailInput").val();
        
        if (name == "" || email == "") {
            alert("Please fill in both your name and email!");
        } else {
            localStorage.setItem("user", name);
            alert("Signed in successfully!");
            window.location.href = "index.html";
        }
    });

    $("#signOutBtn").click(function() {
        localStorage.removeItem("user");
        location.reload();
    });

    $(".question").click(function() {
        $(this).next(".answer").slideToggle(300);
        var icon = $(this).find("span");
        if (icon.text() == "+") {
            icon.text("-");
        } else {
            icon.text("+");
        }
    });

    $("#searchBtn").click(function() {
        var text = $("#searchInput").val();
        
        if (text == "") {
            alert("Please type a book name!");
            return;
        }

        $("#apiStatus").text("Loading...");
        $("#results").html("");

        fetch("https://openlibrary.org/search.json?q=" + text + "&limit=5")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.docs.length == 0) {
                $("#apiStatus").text("No books found.");
            } else {
                $("#apiStatus").text("Found " + data.docs.length + " books:");
                
                for (var i = 0; i < data.docs.length; i++) {
                    var bookTitle = data.docs[i].title;
                    var bookAuthor = "Unknown Author";
                    
                    if (data.docs[i].author_name) {
                        bookAuthor = data.docs[i].author_name[0];
                    }

                    $("#results").append(
                        "<div class='book-result'>" +
                        "<b>" + bookTitle + "</b><br>" +
                        "Author: " + bookAuthor +
                        "</div>"
                    );
                }
            }
        })
        .catch(function(error) {
            $("#apiStatus").text("Error loading data.");
        });
    });

});