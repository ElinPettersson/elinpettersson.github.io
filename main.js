var a;
function show_hide() {

    if (a == 1) {
        document.getElementById("poffis").style.display = "inline";
        return a = 0;
    }
    else {
        document.getElementById("poffis").style.display = "none";
        return a = 1;
    }
}








for (var counter = 0; counter < 10; counter++) {
    console.log("POFFIS");
}






try {
    alllllert("HEJA GNAGET!");
}
catch (err) {
    document.getElementById("testError").innerHTML = err.message;
}

