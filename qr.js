function generateQR(){
    let url = document.getElementById("WebsiteURL").value.trim();

    if (url === ""){
        alert("The input is Empty.Add a URL To Function Properly")
    }
    else{
        let Canvas = document.getElementById("QRCodecanvas");
        Canvas.innerHTML = "";
        QRCode.toCanvas(Canvas, url, function(error){
            if (error){
                console.log("Error Has Occured")
            }
            else{
                console.log("QR Code Generated Successfully")
            }
        });
    }
}