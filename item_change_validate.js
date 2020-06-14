console.log('ITEM_CHANGE_VALIDATE');

const data = {
  uid: '111111', //6자의 숫자 영자 조합 문자열
  previous_item: {
    item_name: "",
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
  reason: '', //inedible, palatability, too_many, allergy, goods, snack, health_condition 중에 하나여야만 함
  reason_detail: '', //빈 문자열이어도 됨. 프로퍼티는 존재해야함
};

//uid test함수 : 숫자영자, length : 6
const _uidCheck = (uid) => {
  // test 메소드 사용한 검증
  return /^[A-za-z0-9]{6}$/.test(uid);
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
  const propertyList = [
    'uid',
    'previous_item',
    'altered_item',
    'reason',
    'reason_detail'
  ];
  return JSON.stringify(Object.keys(data)) === JSON.stringify(propertyList);
};


// 
const _item = (data) => {
  const itemPropertyList = [
    'item_name',
    'item_code',
    'item_thumbnail',
    'item_description',
    'is_changed'
  ]
  JSON.stringify(Object.keys(data))
}



console.log("value===>", Object.values(data.previous_item));


// Object.value(data)

//전체 property는 존재해야함.
function isEmpty(obj) {
  for (var values in obj) {
    if (obj.hasOwnProperty(values))
      console.log("ok");
    else {
      return false;
    }
  }
}
console.log("data___", isEmpty(data));


///////////////////////////////////////////////////////////


const validate = (data) => {
  // console.log("validate called");
  // console.log("parameter ==> ", data);


  // console.log("previous_item", data.previous_item);
  // console.log("reason", data.reason);

  // console.log("previous_item", data.previous_item.item_code);


  //property List check
  if (!_dataPropertyCheck) {
    return "Property Empty";
  } else {
    console.log("Property");
  }

  //uid check
  if (!_uidCheck(data.uid)) {
    return "uid error";
  }

  //reason check
  if (!_reasonCheck(data.reason)) {
    return "reason error";
  }

  //reason property has
  if (!_reasonDetailCheck(data)) {
    return "reason-detail error";
  }

  //data.previous_item & altered_item check  //altered_item length not null





  return true;
}
///////////////////////////////////////////////////////////////////////


//console.log("returned value from validate function ==> ", validate(data));


console.log("validate====>", validate(data));




