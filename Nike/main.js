// NAV SECTION
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// switching shoes
const sizes = document.querySelectorAll('.size_tallas');
const colors = document.querySelectorAll('.sneaker_color');
const sneaker = document.querySelectorAll('sneaker_img');


function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active')
}

function changeColor(){
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let sneakerColor = document.querySelectorAll(`.sneaker_img[colo="r${color}"]`);
    
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty(`--primary`, primary);

    sneaker.forEach(s => s.classList.remove('shows'))
    sneakerColor.classList.add('shows')
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor))