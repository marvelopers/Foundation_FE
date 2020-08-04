
const data = {
  uid: '111111', //6자의 숫자 영자 조합 문자열
  previous_item: {
    item_name: "퍼피11",
    item_code: "100000067",
    item_thumbnail: "https://gdcdn.fitpetmall.com/data/goods/19/06/25/1000000015/t50_1000000015_magnify_066.jpg",
    item_description: "베터 퍼피 상품입니다.",
    is_changed: true,
  },
  altered_item: {
    item_name: "베터 퍼피11",
    item_code: "100000067",
    item_thumbnail: "https://gdcdn.fitpetmall.com/data/goods/19/06/25/1000000015/t50_1000000015_magnify_066.jpg",
    item_description: "베터 퍼피 상품입니다.",
    is_changed: true,
  },
  reason: 'inedible', //inedible, palatability, too_many, allergy, goods, snack, health_condition 중에 하나여야만 함
  reason_detail: '', //빈 문자열이어도 됨. 프로퍼티는 존재해야함
};


/////////////////////////function/////////////////////////


const validate = (data) => {

  const propertyList = [
    'uid',
    'previous_item',
    'altered_item',
    'reason',
    'reason_detail'
  ];

  const itemPropertyList = [
    'item_name',
    'item_code',
    'item_thumbnail',
    'item_description',
    'is_changed'
  ]

  const _uidCheck = (uid) => {
    return /^[A-za-z0-9]{6}$/.test(uid);
  }

  const itemPropertyNullCheck = (item) => {
    for (let i = 0; i < itemPropertyList.length; i++) {
      const property = itemPropertyList[i];
      if (!item[property]) {
        return false;
      }
    }

    return JSON.stringify(Object.keys(item)) === JSON.stringify(itemPropertyList);
  }

  const _reasonCheck = (reason) =>
    ['inedible',
      'palatability',
      'too_many',
      'allergy',
      'goods',
      'snack',
      'health_condition'].includes(reason);

  const _reasonDetailCheck = (data) =>
    data.hasOwnProperty("reason_detail");

  const _dataPropertyCheck = (data) => {

    for (let i = 0; i < propertyList.length; i++) {
      const property = propertyList[i];

      if (property === "reason_detail") continue;
      if (!data[property]) return false;

      if (typeof data[property] === "object" && !itemPropertyNullCheck(data[property])) {
        return false;
      }

    }

    return JSON.stringify(Object.keys(data)) === JSON.stringify(propertyList);
  };

  //property List check
  if (!_dataPropertyCheck(data)) {
    return false;
  }

  //uid check
  if (!_uidCheck(data.uid)) {
    return false;
  }

  //reason check
  if (!_reasonCheck(data.reason)) {
    return false;
  }

  return true;
}
///////////////////////////////////////////////////////////



/////////////////////////testCode/////////////////////////

const testData1 = {
  uid: '111111', //6자의 숫자 영자 조합 문자열
  previous_item: {
    item_name: "퍼피11",
    item_code: "100000067",
    item_thumbnail: "https://gdcdn.fitpetmall.com/data/goods/19/06/25/1000000015/t50_1000000015_magnify_066.jpg",
    item_description: "베터 퍼피 상품입니다.",
    is_changed: true,
  },
  altered_item: {
    item_name: "베터 퍼피11",
    item_code: "100000067",
    item_thumbnail: "https://gdcdn.fitpetmall.com/data/goods/19/06/25/1000000015/t50_1000000015_magnify_066.jpg",
    item_description: "베터 퍼피 상품입니다.",
    is_changed: true,
  },
  reason: 'inedible', //inedible, palatability, too_many, allergy, goods, snack, health_condition 중에 하나여야만 함
  reason_detail: '', //빈 문자열이어도 됨. 프로퍼티는 존재해야함
};
const testData2 = {
  uid: '111111', //6자의 숫자 영자 조합 문자열
  previous_item: {
    item_name: "",
    item_code: "",
    item_thumbnail: "https://gdcdn.fitpetmall.com/data/goods/19/06/25/1000000015/t50_1000000015_magnify_066.jpg",
    item_description: "베터 퍼피 상품입니다.",
    is_changed: true,
  },
  altered_item: {
    item_name: "베터 퍼피11",
    item_code: "100000067",
    item_thumbnail: "https://gdcdn.fitpetmall.com/data/goods/19/06/25/1000000015/t50_1000000015_magnify_066.jpg",
    item_description: "베터 퍼피 상품입니다.",
    is_changed: true,
  },
  reason: 'inedible', //inedible, palatability, too_many, allergy, goods, snack, health_condition 중에 하나여야만 함
  reason_detail: '', //빈 문자열이어도 됨. 프로퍼티는 존재해야함
};
const testData3 = {
  uid: '111111', //6자의 숫자 영자 조합 문자열
  previous_item: {
    item_name: "sdfdsf",
    item_code: "dfgdfgdfg",
    item_thumbnail: "https://gdcdn.fitpetmall.com/data/goods/19/06/25/1000000015/t50_1000000015_magnify_066.jpg",
    item_description: "베터 퍼피 상품입니다.",
    is_changed: true,
  },
  altered_item: {
    item_name: "베터 퍼피11",
    item_code: "100000067",
    item_thumbnail: "https://gdcdn.fitpetmall.com/data/goods/19/06/25/1000000015/t50_1000000015_magnify_066.jpg",
    item_description: "베터 퍼피 상품입니다.",
    is_changed: true,
  },
  reason: 'inedible222', //inedible, palatability, too_many, allergy, goods, snack, health_condition 중에 하나여야만 함
  reason_detail: '', //빈 문자열이어도 됨. 프로퍼티는 존재해야함
};
const testData4 = {
  uid: '', //6자의 숫자 영자 조합 문자열
  previous_item: {
    item_name: "sdfdsf",
    item_code: "dfgdfgdfg",
    item_thumbnail: "https://gdcdn.fitpetmall.com/data/goods/19/06/25/1000000015/t50_1000000015_magnify_066.jpg",
    item_description: "베터 퍼피 상품입니다.",
    is_changed: true,
  },
  altered_item: {
    item_name: "베터 퍼피11",
    item_code: "100000067",
    item_thumbnail: "https://gdcdn.fitpetmall.com/data/goods/19/06/25/1000000015/t50_1000000015_magnify_066.jpg",
    item_description: "베터 퍼피 상품입니다.",
    is_changed: true,
  },
  reason: 'inedible', //inedible, palatability, too_many, allergy, goods, snack, health_condition 중에 하나여야만 함
  reason_detail: '', //빈 문자열이어도 됨. 프로퍼티는 존재해야함
};


console.log("TEST1", assertEqual(true, validate(testData1)));
console.log("TEST2", assertEqual(true, validate(testData2))); //기대값 FALSE
console.log("TEST2", assertEqual(true, validate(testData3))); //기대값 FALSE
console.log("TEST2", assertEqual(true, validate(testData4))); //기대값 FALSE


function assertEqual(expect, result) {
  return expect === result;
}
