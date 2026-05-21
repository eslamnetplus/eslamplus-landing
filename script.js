function updatePoster() {
    const networkInput = document.getElementById("networkInput").value;
    const phoneInput = document.getElementById("phoneInput").value;

    document.getElementById("networkName").textContent =
        networkInput || "اسم الشبكة";

    document.getElementById("phoneNumber").textContent =
        phoneInput || "777000000";
}

function downloadPoster() {
    const poster = document.getElementById("poster");

    html2canvas(poster, {
        scale: 2,
        useCORS: true,
        backgroundColor: null
    }).then(function(canvas) {
        const link = document.createElement("a");
        link.download = "islamnp-design.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
