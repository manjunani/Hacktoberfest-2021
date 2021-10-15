import java.util.Scanner;
public class kadanes
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter size of an array");
		int n = sc.nextInt();
		int a[] = new int[n];
		for(int i=0; i<n; i++)
		    a[i] = sc.nextInt();
		
		int sum = 0, maxsum = a[0];
		for(int i=0; i<n; i++){
		    sum+=a[i];
		    if(sum>maxsum)
		        maxsum = sum;
		    if(sum<0)
		        sum = 0;
		}
		System.out.println(maxsum);
	}
}

/*
INPUT
n = 5
a[] = {1,2,3,-2,5}

OUTPUT (MAXIMUM SUM SUBARRAY)
9
*/
