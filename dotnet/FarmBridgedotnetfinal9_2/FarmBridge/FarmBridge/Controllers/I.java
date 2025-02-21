import java.util.Scanner;

public class MinimumCostGrid {

    public static long getMinimumCost(int[][] pixelIntensity) {
        int n = pixelIntensity.length;    
        int m = pixelIntensity[0].length;
        long totalCost = 0;

       
        for (int col = 0; col < m; col++) {
            
            for (int row = n - 2; row >= 0; row--) {
                if (pixelIntensity[row][col] >= pixelIntensity[row + 1][col]) {
                    
                    int decrement = pixelIntensity[row][col] - pixelIntensity[row + 1][col] + 1;
                    totalCost += decrement; 
                    pixelIntensity[row][col] -= decrement; 
                }
            }
        }

        return totalCost;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        
        int n = scanner.nextInt(); 
        int m = scanner.nextInt(); 

        int[][] pixelIntensity = new int[n][m];

    
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                pixelIntensity[i][j] = scanner.nextInt();
            }
        }

        
        long result = getMinimumCost(pixelIntensity);
        System.out.println(result);

        scanner.close();
    }
}
