import './custom.scss';






// Remove below code if it is problematic during routing
const changePage = function(e) {
    let href = e.target.getAttribute("href");
    if (e.target.getAttribute("classic") == "yes" || href.startsWith("#") || !href)
        return
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', href);
    xhr.onload = function() {
        try {
            if (xhr.status === 200) {
                if (xhr.getResponseHeader('Content-Type').includes("text/html")) {
                    var doc = new DOMParser().parseFromString(xhr.response, 'text/html');
                    document.querySelector("html").replaceWith(doc.querySelector("html"));
                    window.history.pushState({}, '', href)
                        //add listeners again when dom is recreated
                    document.querySelector("a").addEventListener('click', changePage, true);
                } else {
                    throw Error("Invalid HTML Page");
                }

            } else {
                throw Error("Error Occured. Trying Default Redirect");
            }

        } catch (e) {
            console.log(e.message)
            window.location = href;
        }
    };
    xhr.send();
}
document.querySelector("a").addEventListener('click', changePage, true);