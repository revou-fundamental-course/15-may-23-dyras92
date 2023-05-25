function hitungLuasSq() {
    var sisiSquare = parseFloat(document.getElementById("sisi-luas-sq").value);
    var outputLuasSq = sisiSquare * sisiSquare;
    document.getElementById("rumus_luas-sq").innerHTML = "L = S x S";
    document.getElementById("perhitungan_luas-sq").innerHTML = "L = " + sisiSquare + " x " + sisiSquare;
    document.getElementById("output_luas-sq").innerHTML = "L = " + outputLuasSq;
}

function resetLuasSq() {
    document.getElementById("sisi-luas-sq").value = "";
    document.getElementById("rumus_luas-sq").innerHTML = "";
    document.getElementById("perhitungan_luas-sq").innerHTML = "";
    document.getElementById("output_luas-sq").innerHTML = "";
}

function hitungKelilingSq() {
    var sisiKelilingSquare = parseFloat(document.getElementById("sisi-keliling-sq").value);
    var outputKelilingSq = 4 * sisiKelilingSquare;
    document.getElementById("rumus_keliling-sq").innerHTML = "K = 4 x S";
    document.getElementById("perhitungan_keliling-sq").innerHTML = "K = 4 x " + sisiKelilingSquare;
    document.getElementById("output_keliling-sq").innerHTML = "K = " + outputKelilingSq;
}

function resetKelilingSq() {
    document.getElementById("sisi-keliling-sq").value = "";
    document.getElementById("rumus_keliling-sq").innerHTML = "";
    document.getElementById("perhitungan_keliling-sq").innerHTML = "";
    document.getElementById("output_keliling-sq").innerHTML = "";
}