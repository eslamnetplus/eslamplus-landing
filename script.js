function generateDesign() {
  const phone = document.getElementById('phoneInput').value;
  const network = document.getElementById('networkInput').value;

  if(phone) {
    document.getElementById('phoneText').innerText = phone;
  }

  if(network) {
    document.getElementById('networkText').innerText = network;
  }
}

function downloadImage() {
  html2canvas(document.querySelector(".poster")).then(canvas => {
    const link = document.createElement("a");
    link.download = "islamnp-design.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
