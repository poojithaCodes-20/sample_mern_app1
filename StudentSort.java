import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

class Student {
    String name;
    int marks;
    String branch;

    Student(String name, int marks, String branch) {
        this.name = name;
        this.marks = marks;
        this.branch = branch;
    }
}

class MarksComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        // Sort in descending order of marks
        return s2.marks - s1.marks;
    }
}

public class StudentSort {
    public static void main(String[] args) {
        ArrayList<Student> list = new ArrayList<>();
        list.add(new Student("Anil", 85, "CSE"));
        list.add(new Student("Ravi", 92, "IT"));
        list.add(new Student("Priya", 78, "ECE"));

        Collections.sort(list, new MarksComparator());

        System.out.println("Students Sorted by Marks:");
        for (Student s : list) {
            System.out.println(s.name + " " + s.marks + " " + s.branch);
        }
    }
}