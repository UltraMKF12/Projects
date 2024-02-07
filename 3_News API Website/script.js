const apiKeyInput = document.getElementById("apiKey");
const langUs = document.getElementById("englishCheckbox");
const langHu = document.getElementById("hungarianCheckbox");
const categories = document.querySelectorAll(".category-setting input");
const errorText = document.getElementById("errorText");
const main = document.querySelector("main");

async function getNewsFromApi(key, category, language) {
    try {
        // let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${language}${category}&pageSize=100&apiKey=${key}`);
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=`);
        if (response.ok) {
            return await response.json();
        }
        else {
            throw new Error("Invalid API Key");
        }
    }
    catch (error) {
        showErrorText(error);
    }
}

function showErrorText(text) {
    errorText.style.display = "block";
    errorText.textContent = text;
}

async function generateNews() {
    errorText.style.display = "none";
    main.innerHTML = "";
    const apiKey = apiKeyInput.value;
    let selectedCategory = "";
    for (let category of categories) {
        if (category.checked && category.value != "") {
            selectedCategory = `&category=${category.value}`;
            break;
        }
    }
    const language = (langUs.checked) ? "us" : "hu";

    try{
        let news = await getNewsFromApi(apiKey, selectedCategory, language);
        console.log(news);
        main.innerHTML = "";
        console.log(news.articles[0]);
        for (let article of news.articles) {
            if(article.title === "[Removed]") continue;
            
            let articleDescription = `<p>${article.description}</p>`;
            let articleImage = `<img src="${article.urlToImage}">`;

            if(article.description == null) articleDescription = "";
            if(article.urlToImage == null) articleImage = "";

            main.innerHTML +=
            `<article>
                <h2 class="article-title">
                    <a href="${article.url}">${article.title}</a>
                </h2>
                ${articleDescription}
                ${articleImage}
                <div class="article-time">
                    <p>${article.publishedAt.slice(0, 10)}</p>
                </div>
            </article>`;
        }
    }
    catch (error) {
        showErrorText(error);
    }
}