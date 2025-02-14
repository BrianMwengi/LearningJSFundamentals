// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// Mathematics Algorithms

// My solution..
// JavaScript
function solution(number){
    if (number < 0) return 0;
    let sum = 0;
    for (let i = 0; i < number; i++) { 
      if (i % 3 === 0 || i % 5 === 0){
        sum += i;
      }
    }
    return sum;
}

// The function uses a single loop that runs from 0 up to (but not including) the input number. This is why:

// Time Complexity O(n):
// The loop iterates n times (where n is the number passed to the function). In each iteration, it performs a constant amount of work (a couple of arithmetic operations and comparisons), which means that the total work done grows linearly with n.

// Space Complexity O(1):
// The function only uses a few extra variables (sum and i), regardless of the size of the input. No additional data structures are created that grow with n, so the space used is constant.

// What does "i" do in the loop?

// The variable i acts as an index and represents the current number being checked. For each value of i from 0 up to (but not including) the input number, the function checks whether i is divisible by 3 or 5. If it is, i is added to the running total sum.

// Example for clarity:

// For solution(10), the loop steps through the numbers 0, 1, 2, ..., 9:

// i = 0 → 0 is divisible (0 is considered a multiple) → add 0
// i = 1 → not divisible by 3 or 5 → nothing happens
// i = 2 → not divisible
// i = 3 → divisible by 3 → add 3
// i = 4 → not divisible
// i = 5 → divisible by 5 → add 5
// i = 6 → divisible by 3 → add 6
// i = 7 → not divisible
// i = 8 → not divisible
// i = 9 → divisible by 3 → add 9
// The sum becomes 0 + 3 + 5 + 6 + 9 = 23.