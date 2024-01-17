const showimg = document.querySelector(".right-block-carousel");
const arrinnerimg = [
    `
    <video width="100 % " class="ty-pict video-item" id="det_img_395" loop="" autoplay="" muted=""
    playsinline = "" >
    <source src="https://cdn.pnj.io/images/videos/resize_GN0000Y000143.mov.mp4" type="video/mp4">
    </video>
    `,
    `          
    <img src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/114/gn0000y000143-nhan-kim-tien-vang-18k-pnj-0001.png"
    alt="">
    `,
    `
    <img src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/73/gn0000y000143-nhan-kim-tien-vang-18k-pnj-0002.png"
                        alt="">
    `,
    `<img src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/73/gn0000y000143-nhan-kim-tien-vang-18k-pnj-0003.png"
    alt="">`,
    `<img src="https://cdn.pnj.io/images/thumbnails/485/485/detailed/73/gn0000y000143-nhan-kim-tien-vang-18k-pnj-0004.jpg"
    alt="">`,
]
showimg.innerHTML = arrinnerimg[0];
const arrimg = document.querySelectorAll("#img");
for (let i = 0; i < arrimg.length; i++) {
    arrimg[i].addEventListener('click', function () {
        showimg.innerHTML = arrinnerimg[i];
    })
}

