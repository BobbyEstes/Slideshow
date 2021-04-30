const images = [
    "https://www.iphonehacks.com/wp-content/uploads/2019/11/Anamorphic-Pro-Visual-Effects-Mac-Bundle.jpg",
    "https://3.bp.blogspot.com/-GOrDSqA5-Mo/Ue1YsUBcC4I/AAAAAAAALWA/1ejSmtoEXtE/s1600/www.hdhut.blgsop.com+(25).jpg",
    "https://th.bing.com/th/id/R910df07e2b495db6588d9afd76f55e31?rik=zcjrUElBrVBhLQ&riu=http%3a%2f%2fpics.sixpacktech.com%2fwp-content%2fuploads%2f2019%2f01%2fEdinburgh-Scotland.jpg&ehk=uEEQVhx5pOiflPYz%2b9bXNkmli8sZ9frcPWlkGGr14rg%3d&risl=&pid=ImgRaw",
    "https://cdn.acidcow.com/pics/20140318/very_interesting_photos_19.jpg",
    "https://th.bing.com/th/id/Re7bc8d07866c442fedf82238ade9f85b?rik=gQJKEUDuhg6cLQ&riu=http%3a%2f%2fpics.sixpacktech.com%2fwp-content%2fuploads%2f2013%2f11%2fIceland.jpg&ehk=teeVk3BuM5M4OlDNrc6a9wcVNwLfObJvEd1p%2f6sBODU%3d&risl=&pid=ImgRaw",
  ],
  div = document.createElement("div"),
  rTrigger = document.createElement("b"),
  lTrigger = document.createElement("b");

let i = 0;

lTrigger.className = "lTrigger";
lTrigger.innerText = "<-";

rTrigger.className = "rTrigger";
rTrigger.innerText = "->";
div.className = "topImage";
document.body.append(div, lTrigger, rTrigger);

function displayImg(img = images[0]) {
  if (document.querySelector("div"))
    document.querySelector("div").innerHTML = "";
  div.innerHTML = `<img src=${img}>`;
}

document.querySelector(".lTrigger").onclick = function () {
  if (i <= 0) displayImg(images[(i = images.length)]);
  displayImg(images[(i -= 1)]);
};

document.querySelector(".rTrigger").onclick = function () {
  if (i > images.length) displayImg(images[(i = 0)]);
  displayImg(images[(i += 1)]);
};

function displayThumbs() {
  const container = document.createElement("div");
  container.className = "thumbs";
  document.body.append(container);
  for (x = 0; x < images.length; x++) {
    let image = document.createElement("img");
    console.log(image);
    image.className = `thumb${x}`;
    image.src = images[x];
    container.append(image);
    image.addEventListener("click", (e) => {
      div.innerHTML = `<img src=${e.target.src}>`;
    });
  }
}

displayImg();
displayThumbs();
