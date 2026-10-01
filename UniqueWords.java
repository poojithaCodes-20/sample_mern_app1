import java.util.HashSet;
import java.util.Scanner;

public class UniqueWords {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a sentence:");
        String text = sc.nextLine();

        // Split text by spaces and convert to lowercase
        String[] words = text.toLowerCase().split("\\s+");
        HashSet<String> set = new HashSet<>();

        for (String word : words) {
            // Remove punctuation if necessary, or add directly
            if (!word.isEmpty()) {
                set.add(word);
            }
        }

        System.out.println("Unique Words:");
        for (String word : set) {
            System.out.println(word);
        }

        sc.close();
    }
}