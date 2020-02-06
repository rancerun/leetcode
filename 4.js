
function findMedianSortedArrays(nums1, nums2) {
  const arr1 = nums1;
  const arr2 = nums2;

  function recursiveDance(arr, idx1, idx2, num) {
    const medianIdx = Math.round((idx2 + idx1) / 2);
    const medianEl = arr[medianIdx]
    if (medianEl == num || (medianEl > num && arr[medianIdx - 1] < num)) return arr.splice(medianIdx, 0, num);
    if (medianEl < num && arr[medianIdx + 1] > num) return arr.splice(medianIdx + 1, 0, num);
    if (medianEl > num) recursiveDance(arr, idx1, medianIdx, num);
    if (medianEl < num) recursiveDance(arr, medianIdx, idx2, num);
  }

  if (arr1.length) {
    while (arr2.length) {
      const poppedVar = arr2.pop();

      if (poppedVar >= arr1[arr1.length - 1]) {
        arr1.push(poppedVar);
        } else if (poppedVar <= arr1[0]) {
        arr1.unshift(poppedVar);
      } else {
        recursiveDance(arr1, 0, arr1.length - 1, poppedVar);
      } 
    }

    return arr1.length % 2 == 0 
      ? (arr1[arr1.length / 2] + arr1[(arr1.length / 2) - 1]) / 2
      : arr1[(arr1.length - 1) / 2]
  }

  return arr2.length % 2 == 0 
    ? (arr2[arr2.length / 2] + arr2[(arr2.length / 2) - 1]) / 2
    : arr2[(arr2.length - 1) / 2]
}

console.log(findMedianSortedArrays([1, 3, 5, 7, 10], [8]));