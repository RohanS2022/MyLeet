import { removeDuplicates } from "./removeDuplicates";


describe("removeDuplicates", () => {
    it("should return the same array", () => {
        const nums = []
        expect(removeDuplicates(nums)).toBe(nums)
    })
})