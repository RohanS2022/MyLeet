/**
 * @function - Removes duplicates in place so that each unique element appears only once.
 * @param {number[]} - An array of sorted numbers from smallest to largest.
 * @return {number[]} - An array of numbers with no duplicates 
 */

export const removeDuplicates = (nums) => {
    if(nums.length === 0) return 0

    let previousNumber = null
    let index = 0
    while (index < nums.length) {
        if(nums[index] === previousNumber){
            nums.splice(index, 1)
        } else {
            previousNumber = nums[index]
            index = index + 1
        }
    }
    return index
}