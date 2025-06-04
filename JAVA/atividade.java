package Aula1;

public class HelloWorld{
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        char x = 'B';
        int y = (int)x;
        System.out.println(y);
        
        double d = 2.8;
        System.out.println((int)d);
        
        int numerador = 10;
        int denominador = 3;
        double res = numerador / (double)denominador;
        System.out.println(res); 
    }
}