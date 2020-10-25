import './custom.scss';






// Remove below code if it is problematic during routing
const changePage = function(e) {
    let href = e.target.getAttribute("href");
	if(e.target.getAttribute("classic") == "yes" || href.startsWith("#") || !href)
    	return 
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', href);
    xhr.onload = function() {
        if (xhr.status === 200) {
			var doc = new DOMParser().parseFromString(xhr.response, 'text/html');	
    		document.querySelector("html").replaceWith(doc.querySelector("html"));
    		window.history.pushState({}, '', href)
    		//add listeners again when dom is recreated
			document.querySelector("a").addEventListener('click', changePage, true);			
        } else {
            console.log("Unable to load page")
        }
    };
    xhr.send();
}
document.querySelector("a").addEventListener('click', changePage, true);