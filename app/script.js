const coll = document.getElementsByClassName("collapsible-acc");
const pre = document.getElementsByClassName("collapsible-pre");
const searchResults = document.getElementById("search-result");

let i;

// collapsible menu
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

// searching accounts
const searchAccount = () => {
    document.querySelector(".hero-images").style.display = "none";
    document.querySelector(".search-result").style.display = "block";
    document.querySelector(".search").style.display = "none";
    document.querySelector(".cross").style.display = "block";

    const input = document.getElementById("search-key");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const searchKey = document.getElementById("search-key");
            const searchText = searchKey.value;
            const url = `https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${searchText}`;
            fetch(url)
                .then((res) => res.json())
                .then((data) => displayResults(data));
        }
    });
};

// display results
const displayResults = (results) => {
    // clear previous results
    searchResults.innerHTML = " ";

    results.forEach((result) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-2">

                        <img src="./images/account-logo.png" class="account-logo" alt="" />    
                    </div>
                    <div class="col-8">
                        <p class="m-0 ps-3">${result.company}</p>
                        <p class="m-0 ps-3">${result.website}</p>
                    </div>
                    <div class="col-2">
                        <button type="button" onclick='console.log("${
                            result.company
                        } (${
            result.slug
        }) tracked at ${Date.now()}")' class="btn btn-outline-danger track-btn p-0 b-0">Track</button>
                    </div>
                </div>
            </div>
        `;
        searchResults.appendChild(div);
    });
};
