/* 4. Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5. */

function findMedianSortedArrays(nums1, nums2) {
  // if nums1 is longer, swap nums1 and nums2
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const m = nums1.length;
  const n = nums2.length;
  let iMin = 0;
  let iMax = m;
  while (iMin <= iMax) {
    const i = Math.floor((iMin + iMax) / 2);
    const j = Math.floor((m + n + 1) / 2 - i);
    const nums1Left = i === 0 ? -Infinity : nums1[i - 1];
    const nums1Right = i === m ? Infinity : nums1[i];
    const nums2Left = j === 0 ? -Infinity : nums2[j - 1];
    const nums2Right = j === n ? Infinity : nums2[j];
    if (nums1Right < nums2Left) {
      iMin = i + 1;
    } else if (nums1Left > nums2Right) {
      iMax = i - 1;
    } else {
      const maxLeft = Math.max(nums1Left, nums2Left);
      if ((m + n) % 2 === 1) {
        return maxLeft;
      }
      const minRight = Math.min(nums1Right, nums2Right);
      return (maxLeft + minRight) / 2;
    }
  }
  return 0;
}

// test the function
console.log(findMedianSortedArrays([1, 3], [2])); // should print 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // should print 2.5
