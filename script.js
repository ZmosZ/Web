// การทำงานของเมนู เมื่อคลิกแล้วจะเปิดหรือปิดเมนู
const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
let timeoutId;  // ประกาศตัวแปร timeoutId เป็น global

menu.onclick = () => {
    menu.classList.toggle('bo-x');
    nav.classList.toggle('active');
}

// ปิดเมนูอัตโนมัติเมื่อคลิกที่ลิงก์ใดๆ ในเมนู
document.querySelectorAll('.links a').forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bo-x');
        nav.classList.remove('active');
    }
});

// ฟังก์ชันสำหรับการเปลี่ยนภาพเมื่อวางเมาส์บนภาพ (เปลี่ยนภาพหลังจากรอ 100ms)
function changeImage(imageId, newSrc) {
    timeoutId = setTimeout(function() {
        document.getElementById(imageId).src = newSrc;
    }, 100);
}