import { removeDuplicates } from "./removeDuplicates";


describe("removeDuplicates", () => {
    test("works if array is empty", () => {
        const nums = []
        const expectedNums = []

        const k = removeDuplicates(nums)

        expect(k).toBe(expectedNums.length)
        expect(nums).toEqual(expectedNums)
    })

    test("removes a single duplicate", () => {
        const nums = [1,1,2]
        const expectedNums = [1,2]

        const k = removeDuplicates(nums)

        console.log(k)

        expect(k).toBe(expectedNums.length)
        expect(nums).toEqual(expectedNums)
    })

    test("removes multiple duplicates", () => {
        const nums = [0,0,1,1,1,2,2,3,3,4]
        const expectedNums = [0,1,2,3,4]

        const k = removeDuplicates(nums)

        console.log(k)

        expect(k).toBe(expectedNums.length)
        expect(nums).toEqual(expectedNums)
    })
})