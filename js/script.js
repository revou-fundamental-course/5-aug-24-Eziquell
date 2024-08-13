function hitungBMI() {
  const berat = document.getElementById("beratBadan").value;
  const tinggi = document.getElementById("tinggiBadan").value;

  if (berat && tinggi) {
    const tinggiMeter = tinggi / 100;
    const bmi = (berat / (tinggiMeter * tinggiMeter)).toFixed(1);

    let status;
    if (bmi < 18.5) {
      status = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Normal (ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
      status = "Kelebihan berat badan";
    } else {
      status = "Kegemukan (Obesitas)";
    }

    // hasil BMI
    var hasilBmi = "<span class = 'bmi-value'>" + bmi + "</span><br>" +
    "<span class = 'status'> " + status + "</span>";
    document.getElementById('hasilBMI').innerHTML = hasilBmi;
  } else {
    alert("Harap masukkan nilai berat dan tinggi badan yang valid!");
  }
}
