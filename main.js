function frameOpen() {
  var title = document.getElementById("title");
  title.innerHTML = "Clever | Portal";
  const frame = document.createElement("iframe");
  frame.id = "frame";
  frame.src = document.getElementById("frameSource").value;
  document.body.appendChild(frame);
}
