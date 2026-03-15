function frameOpen() {
  var assets = {
    "title" : "Clever | Portal",
    "icon" : "https://assets.clever.com/launchpad/a829c174f/favicon.ico?1"
  };
  var icon = document.getElementById("icon");
  var title = document.getElementById("title");
  icon.href = assets.icon;
  title.innerHTML = assets.title;
  const frame = document.createElement("iframe");
  frame.id = "frame";
  frame.src = document.getElementById("frameSource").value;
  document.body.appendChild(frame);
}
