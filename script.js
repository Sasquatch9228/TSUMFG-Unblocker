// Hyperplexed my beloved

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("#title").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

const pages = document.querySelectorAll('section');
const clearPage = function() {
  pages.forEach(page => { page.style.display = "none"});
}

const setPage = function(index) {
  clearPage()
  var page = pages[index-1]
  page.style.display = "block"
}
setPage(1)

document.querySelector("#title").addEventListener("click", () => {
  setPage(2)
})
function create() {
            var url = document.getElementById('url').value;

            var win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url.startsWith("https://") ? url : "https://" + url
            win.document.body.appendChild(iframe);
        }
