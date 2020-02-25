function maxArea(height) {
  let max = 0;

  let leftIdx = 0;
  let rightIdx = height.length - 1;

  while (leftIdx < rightIdx) {
    const left = height[leftIdx];
    const right = height[rightIdx];

    const area = Math.min(left, right) * (rightIdx - leftIdx);

    max = max < area ? area : max; 

    if (left < right) {
      leftIdx ++;
    } else {
      rightIdx --;
    }
  }

  return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));