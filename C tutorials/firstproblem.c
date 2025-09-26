#include <stdio.h>
int main() {
    int length, breadth;
    printf("enter length: ");
    scanf("%d", &length);
    printf("enter breadth: ");
    scanf("%d", &breadth);
    int perimeter = 2 * (length + breadth);
    printf("perimeter is : %d", perimeter);
    return 0;
}