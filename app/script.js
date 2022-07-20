var coll = document.getElementsByClassName("collapsible-acc");
var pre = document.getElementsByClassName("collapsible-pre");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        if (document.querySelector(".content-acc").style.display === "block") {
            document.querySelector(".content-acc").style.display = "none";
        } else {
            document.querySelector(".content-acc").style.display = "block";
        }
    });
    pre[i].addEventListener("click", function () {
        if (document.querySelector(".content-pre").style.display === "block") {
            document.querySelector(".content-pre").style.display = "none";
        } else {
            document.querySelector(".content-pre").style.display = "block";
        }
    });
}
