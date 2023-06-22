let lastScrollTop = 0;
const img1 = document.querySelector('.anima1');
const img2 = document.querySelector('.anima2');
const img3 = document.querySelector('.anima3');
const img4 = document.querySelector('.anima4');

window.addEventListener('scroll', handleScroll);
console.log('232');
function handleScroll() {
    console.log(lastScrollTop);
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(currentScrollTop);  


    if (currentScrollTop > 1294) {
        img1.style.left = '15%';
        img1.style.bottom = '89px';
        img2.style.bottom = '30px';
        img3.style.left = '8%';
        img3.style.top = '20px';
        img4.style.right = '8%';
        img4.style.top = '40px';
    }  
    
    
    if (currentScrollTop > 1400) {
        img1.style.left = '38%';
        img1.style.bottom = '158px';
        img2.style.bottom = '60px';
        img3.style.left = '16%';
        img3.style.top = '80px';
        img4.style.right = '22%';
        img4.style.top = '120px';

    }   

    if (currentScrollTop > 1500) {
        img1.style.left = '36%';
        img1.style.bottom = '165px';
        img2.style.bottom = '112px';
        img3.style.left = '38%';
        img3.style.top = '150px';
        img4.style.right = '38%';
        img4.style.top = '219px';
 
    }   

    if (currentScrollTop > 1600) {
        img1.style.left = '58%';
        img1.style.bottom = '240px';
        img4.style.right = '60%';
        img4.style.top = '270px';
    }   

    if (currentScrollTop > 1700) {
        img1.style.left = '78%';
        img1.style.bottom = '334px';
        img4.style.right = '74%';
        img4.style.top = '306px;';
    }   
   
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;


}

function isEndOfPage() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}