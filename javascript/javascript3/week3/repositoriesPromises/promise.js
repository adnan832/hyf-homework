// fetching repos of users
const classmate1 = fetch(
    "https://api.github.com/search/repositories?q=user:benna100"
).then(response => response.json());
const classmate2 = fetch(
    "https://api.github.com/search/repositories?q=user:islam-fawzy25"
).then(response => response.json());
const classmate3 = fetch(
    "https://api.github.com/search/repositories?q=user:Hani-far"
).then(response => response.json());
// promiseall
function promiseAll() {
    Promise.all([classmate1, classmate2, classmate3])
        .then(userData => {
            console.log(userData);
            userData.forEach(element => {
                const repoList = document.createElement("h3");
                document.body.append(repoList);
                const userName = element.items[0].owner.login;
                repoList.innerHTML = `**** ${userName} has total ${element.total_count} Repositories on Github****`;
                const ul = document.createElement("ul");
                repoList.append(ul);
                element.items.forEach(repoUrl => {
                    const newRepoLi = document.createElement("li");
                    ul.appendChild(newRepoLi);
                    newRepoLi.innerHTML = `${repoUrl.url}`;
                });
            });
        })
        .catch(error => console.log(error));
}
promiseAll();