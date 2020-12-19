function cetakPola(num) {
  for (let row = 0; row < num; row++) { // setiap row
    for (let kiri = row+1; kiri < row; kiri++) {
      process.stdout.write(kiri); 
    }
  }
}

cetakPola(10);