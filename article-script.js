function getMediumFeed() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ilianafili", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            
            result["items"].forEach(item => {
                let title = item["title"];
                let link = item["link"];
                let author = item["author"]
                let date = new Date(item["pubDate"]).toDateString().substring(4);

                let imageURL;
                // Extract image URL from description using regular expression
                let description = item.description;
                let imageUrlMatch = description.match(/<img src=\"([^\"]+)\"/);
                if (imageUrlMatch) {
                    imageURL = imageUrlMatch[1];       
                }

                // Create Article Boxes
                var articleBox = `
                    <div class="article-content">
                        <a target="_blank" href="${link}">
                            <div class="project-box">
                                <div class="body">
                                    <div class="article-heading"><i class="fa-brands fa-medium"></i> &nbsp;&nbsp;${title}</div>
                                    <div class="article-img" style="background: var(--box-color) url(${imageURL}) center bottom no-repeat; background-size: 360px"></div>
                                    <div class="article-author-date">  <span class="span-author">${author}</span>  <span class="span-date">${date}</span> </div>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
                // Append article box to the container (replace 'containerId' with the actual ID of the container)
                document.getElementById('article-container-row').innerHTML += articleBox;



            });
        })
        .catch(error => console.log('error', error));       
}

getMediumFeed();
