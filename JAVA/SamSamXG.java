public class SamSamXG {
    private boolean ligada;
    private int volume;
    private int canal;

    public SamSamXG() {
        ligada = false;
        volume = 10; // volume padrão
        canal = 1;   // canal padrão
    }

    public void ligar() {
        ligada = true;
    }

    public void desligar() {
        ligada = false;
    }

    public void aumentarVolume() {
        if (ligada && volume < 100) {
            volume++;
        }
    }

    public void diminuirVolume() {
        if (ligada && volume > 0) {
            volume--;
        }
    }

    public void trocarDeCanal(int novoCanal) {
        if (ligada && novoCanal > 0 && novoCanal <= 999) {
            canal = novoCanal;
        }
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        if (volume >= 0 && volume <= 100) {
            this.volume = volume;
        }
    }

    public int getCanal() {
        return canal;
    }

    public boolean isLigada() {
        return ligada;
    }

    public void status() {
        System.out.println("TV " + (ligada ? "ligada" : "desligada"));
        if (ligada) {
            System.out.println("Volume: " + volume);
            System.out.println("Canal: " + canal);
        }
        System.out.println("------------------------");
    }
}


public class Main {
    public static void main(String[] args) {
        SamSamXG tvDaSala = new SamSamXG();
        SamSamXG tvDoQuarto = new SamSamXG();

        tvDaSala.ligar();
        tvDoQuarto.ligar();

        tvDaSala.aumentarVolume();
        tvDoQuarto.diminuirVolume();

        // tvDaSala.volume++; ❌ Removido: não pode acessar atributo privado

        tvDaSala.trocarDeCanal(45);
        tvDoQuarto.trocarDeCanal(12);

        tvDaSala.status();
        tvDoQuarto.status();
    }
}
