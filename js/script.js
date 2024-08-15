function hitungBMI() {
  const berat = document.getElementById("beratBadan").value;
  const tinggi = document.getElementById("tinggiBadan").value;

  // Rumus BMI
  if (berat && tinggi) {
    const tinggiMeter = tinggi / 100;
    const bmi = (berat / (tinggiMeter * tinggiMeter)).toFixed(1);

    // Logic hasil BMI
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

    // Hasil BMI
    var hasilBmi = "<span class = 'bmi-value'>" + bmi + "</span><br>" +
    "<span class = 'status'> " + status + "</span>";
    document.getElementById('hasilBMI').innerHTML = hasilBmi;

    // Peringatan ketika tidak mengisi form
  } else {
    alert("Harap masukkan nilai berat dan tinggi badan yang valid!");
  }
}

// Reset form dan hasil
function resetForm() {
  document.getElementById("beratBadan").value = "";
  document.getElementById("tinggiBadan").value = "";
  document.getElementById("usia").value = "";
  document.getElementById("laki-laki").checked = false;
  document.getElementById("perempuan").checked = false;
  document.getElementById("hasilBMI").innerHTML = "";
}
