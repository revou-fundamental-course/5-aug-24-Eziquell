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

    // Keterangan hasil BMI
    let moreStatus;
    if (bmi < 18.5) {
      moreStatus = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      moreStatus = `Hasil BMI anda diantara 18.5 dan 24.9
      Anda berada dalam kategori normal atau ideal.
      Cara terbaik untuk menjaga berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.
      Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menjaga pola makan dan hidup sehat.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      moreStatus = "Hasil BMI anda diantara 25 dan 29.9\n\nAnda berada dalam kategori overweight atau berat badan berlebih.\nCara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.\nJika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else {
      moreStatus = "Kegemukan (Obesitas)";
    }

    // Hasil BMI
    var hasilBmi = "<span class = 'bmi-value'>" + bmi + "</span><br>" +
    "<span class = 'status'> " + status + "</span>";
    document.getElementById('hasilBMI').innerHTML = hasilBmi;

    // Detail hasil BMI
    var detailHasil = moreStatus;
    document.getElementById('detailHasil').innerHTML = detailHasil;

    // Peringatan ketika tidak mengisi form
  } else {
    alert("Harap masukkan nilai berat dan tinggi badan yang valid!");
  }
}
