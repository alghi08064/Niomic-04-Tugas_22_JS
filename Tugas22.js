function tugas22() {
  var kalimat = "Saya ingin belajar bersama";
  var kalimat2 = kalimat.split(" ");
  kalimat2.forEach(function(item, index){
    console.log("Item:", item, "Index ke", index);
  })
}
tugas22();
