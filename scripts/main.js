let linkScroll = document.querySelectorAll('.nav-wrapper ul li a');
let body = document.querySelector('body');

let openMenu = () =>
{
    let listMenu = document.getElementById("list-menu");
    let trigger = listMenu.getAttribute("open");
    
    if(trigger == "false")
    {
        listMenu.style.display = "block";
        listMenu.setAttribute("open","true");
    }

    else if(trigger == "true")
    {
        listMenu.style.display = "none";
        listMenu.setAttribute("open","false");
    }
}

linkScroll.forEach(element => {
    element.addEventListener('click', (e) => {

        e.preventDefault();

        let id = element.getAttribute('href');

        let rect = document.querySelector(id).getBoundingClientRect();

        let offset = { 
        top: rect.top + window.scrollY, 
        left: rect.left + window.scrollX, 
        };

        window.scrollTo({
            top: offset.top,
            left: 0,
            behavior: 'smooth'
          });
    })
});