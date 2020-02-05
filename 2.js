
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwoNumbers(l1, l2) {
  const l1Obj = {count: 0};
  const l2Obj = {count: 0};

  function unroll(linkedList, storage, num) {
    storage[num] = linkedList.val;
    storage['count'] = num;

    if (!linkedList.next) {
      return;
    }

    unroll(linkedList.next, storage, num + 1);
  }

  unroll(l1, l1Obj, 1);
  unroll(l2, l2Obj, 1);

  let l1Num = '';
  for (let i = 0; i < l1Obj['count']; i++) {
    l1Num += `${l1Obj[l1Obj['count'] - i]}`;
  }

  let l2Num = '';
  for (let j = 0; j < l2Obj['count']; j++) {
    l2Num += `${l2Obj[l2Obj['count'] - j]}`;
  }

  const finalNum = (parseInt(l1Num) + parseInt(l2Num)).toString();

  let output = new ListNode(parseInt(finalNum[finalNum.length - 1]));
  let curNode = output;

  if (finalNum.length > 1) {
    for (let k = 2; k <= finalNum.length; k++) {
      curNode.next = new ListNode(parseInt(finalNum[finalNum.length - k]));
      curNode = curNode.next;
    }
  }

  curNode.next = null;
  return output;
}