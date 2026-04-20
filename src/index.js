function productExceptSelf(nums) {
    let n = nums.length;
    let result = new Array(n).fill(0);
    result[0] = 1;

    for (let i = 1; i < n; i++) {
        result[i] = nums[i - 1] * result[i - 1];
    }

    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
}
