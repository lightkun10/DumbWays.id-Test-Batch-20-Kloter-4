function cekNilai(nilaiArr) {
  let total = 0, totalNilai = 0;
  let lulus = 0, tidakLulus = 0;
  nilaiArr.forEach((nilai) => {
    total++;
    totalNilai += nilai;
    if (nilai >= 65) lulus++;
    else tidakLulus++;
  })

  console.log(`========================
Jumlah Nilai yang disubmit: ${total}
Rata-rata Nilai: ${(totalNilai/total).toFixed(1)}
Lulus: ${lulus}
Tidak Lulus: ${tidakLulus}
`)
}

cekNilai([20,50,65,70,80,80,30,55,75]);