//Objective is similar to 'Single Element', except this time the array is sorted

let nums = [1,1,2,3,3,4,4,8,8]


//O(n) solution using XOR

let ans = 0

for (let num of nums) {
    ans ^= num
}

return ans


//O(logn) solution using a modified binary search

let low = 0
let high = nums.length - 1

while (low < high) {
    let mid = Math.floor((low + high) / 2)
    
    //If the index is odd, move our pointer down
    if (mid % 2 == 1) {
        mid--
    }
    
    //If two adjacent numbers are the same, we can skip over both of them using +2
    if (nums[mid] == nums[mid + 1]) {
        low = mid + 2
    } else {
        high = mid
    }
}

return nums[low]