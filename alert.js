function show_alert(title, message, btnHide = false, btnLabel = "Close") {
    document.getElementById("modal-alert-title").innerHTML = title;
    document.getElementById("modal-alert-content").innerHTML = message;
    if(btnHide){
        document.getElementById("modal-button-primary").style.display = "none";    
    }else{
        document.getElementById("modal-button-primary").style.display = "block";    
    }
    document.getElementById("modal-button-primary").innerText = btnLabel;
    document.getElementById("modal-alert").style.display = "block";
}
