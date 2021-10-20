public class Main {
  public static void main(String[] args) {
    // Printing to test if it works
    System.out.println(convertToBinary(128));
  }
  public static String convertToBinary(int number) {
    String binary = "";
    // Different scenario for input 0
    if (number == 0) {
      binary = "0";
    }
    // All numbers other than 0
    while (number != 0) {
      binary = (number % 2) + binary;
      number /= 2;
    }
    return binary;
  }
}
