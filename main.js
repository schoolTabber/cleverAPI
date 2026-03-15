const assets = {
  "title" : "Clever | Portal",
  "icon" : "https://www.clever.com/wp-content/uploads/2023/06/cropped-Favicon-512px-32x32.png"
};
const icon = document.createElement("link");
icon.rel = "icon";
icon.type = "image/png";
icon.href = assets.icon;
const title = document.createElement("title");
title.innerHTML = assets.title;
document.head.appendChild(title);
document.head.appendChild(icon);
