function frameOpen() {
  var assets = {
    "title" : "Clever | Portal",
    "icon" : "https://www.clever.com/wp-content/uploads/2023/06/cropped-Favicon-512px-32x32.png"
  };
  var icon = document.getElementById("icon");
  var title = document.getElementById("title");
  icon.href = assets.icon;
  title.innerHTML = assets.title;
}
