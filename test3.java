public class test3 {
  public static void main(String[] args) {
    cetakPola(10);
  }

  public static void cetakPola(int tinggi) {
    // 10 * 2 - 2
    int spasi = (tinggi * 2) - 2;

    for(int i = 1; i <= tinggi; i++) {
      // Print bagian kiri row
      for(int kiri = 1; kiri <= i; kiri++) {
        System.out.print("*");
      }
        
      // Print spasi sisa
      for(int j = 1; j <= spasi; j++) {
        System.out.print(" ");
      }
            
      // Print bagian kanan row
      for(int kanan = 1; kanan <= i; kanan++) {
        System.out.print("*");
      }
        
      //print baris baru
      System.out.println();   
      spasi -= 2;
    }
  }
}
