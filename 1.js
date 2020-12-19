let itemTersedia = new Map();
itemTersedia.set('KD0023', {nama: 'Laptop Asus ROG', harga: 15000000});
itemTersedia.set('C42212', {nama: 'Iphone 12', harga: 12000000});
itemTersedia.set('D90312', {nama: 'Xiaomi Pocophone', harga: 7000000});
itemTersedia.set('HI2020', {nama: 'Playstation 5', harga: 15000000});

let checkout = (array_kode_barang, diskon) => {
  let checkouts = new Map();
  array_kode_barang.forEach((kode_barang) => {
    let count = 0
    if (checkouts.has(kode_barang)) {
      checkouts.set(kode_barang, {count: checkouts.get(kode_barang).count+1})
    } else {
      checkouts.set(kode_barang, {count: count+=1})
    }
  })

  let subTotal = 0;
  console.log("Item yang dibeli\n===============================\n");
  for (let [kode, jumlah] of checkouts) {
    subTotal+= itemTersedia.get(kode).harga * jumlah.count;
    console.log(`${itemTersedia.get(kode).nama} | ${jumlah.count} Pcs | ${formatNumber(itemTersedia.get(kode).harga * jumlah.count)}`)
  }
  console.log("\n===============================\n");
  let totalDiskon = (subTotal * diskon) / 100;
  console.log(`Sub Total: ${formatNumber(subTotal)}\nDiskon: ${formatNumber(totalDiskon)}`);
  console.log("\n===============================\n");
  console.log(`Total ${formatNumber(subTotal-totalDiskon)}`)
};

function checkDuplicate(arr, item) {
  let count = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      count++;
    }
  }

  if (count > 1) return true;
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

checkout(["KD0023", "KD0023","HI2020"], 10);