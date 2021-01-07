class appView {
    constructor() {
        this.app = document.querySelector('body');
        this.title = this.createElement('h1');
        this.title.textContent = "Search GitHub repositories";

        this.searchBlock = this.createElement('div', 'search');
        this.input = this.createElement('input', 'search__input');
        this.autocomplete = this.createElement('ul', 'search__autocomplete');
        this.searchBlock.append(this.input);
        this.searchBlock.append(this.autocomplete);

        this.favoriteRepos = this.createElement('div', 'favorite');


        this.app.append(this.title);
        this.app.append(this.searchBlock);
        this.app.append(this.favoriteRepos);
    }
    createElement(elTag, elClass) {
        const element = document.createElement(elTag);
        if (elClass) {
            element.classList.add(elClass);
        }
        return element;
    }
    createAutocomplete(repoData) {
        const repoEl = this.createElement('li', 'search__item');
        const repoName = repoData.name;
        const repoOwner = repoData.owner.login;
        const repoStars = repoData.stargazers_count;
        repoEl.textContent = repoName;
        this.autocomplete.append(repoEl);
        repoEl.addEventListener("click", () => this.addToFavorite(repoName, repoOwner, repoStars))
    }
    addToFavorite(name, owner, stars) {
        const favRepo = this.createElement('div', 'favorite__item');
        const favRepoText = this.createElement('p', 'favorite__text');
        const favRepoDelete = this.createElement('img', 'favorite__delete');
        favRepoDelete.src = 'img/delete.svg';
        favRepoDelete.alt = 'Delete button';
        favRepoDelete.addEventListener("click", () => favRepo.remove());
        favRepoText.innerHTML = `Name: ${name} <br> Owner: ${owner} <br> Stars: ${stars}`;
        favRepo.append(favRepoText);
        favRepo.append(favRepoDelete);
        this.favoriteRepos.append(favRepo);
        this.input.value = '';
        this.autocomplete.innerHTML = '';
    }
}
class SearchRepos {
    constructor(view) {
        this.view = view;
        this.view.input.addEventListener('keyup', this.debounce(this.searchRepos.bind(this), 300))
    }
    async searchRepos() {
        if (this.view.input.value) {
            this.clearRepos()
            return await fetch(`https://api.github.com/search/repositories?q=${this.view.input.value}&per_page=5`)
                .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(response => {
                                response.items.forEach(repo => this.view.createAutocomplete(repo))
                            })
                    }
                })
        } else {
            this.clearRepos()
        }
    }
    debounce(fn, ms) {
        let timeout;
        return function () {
            const fnCall = () => {fn.apply(this, arguments)};
            clearTimeout(timeout);
            timeout = setTimeout(fnCall, ms)
        };
    }
    clearRepos() {
        this.view.autocomplete.innerHTML = '';
    }
}
new SearchRepos(new appView());