const status = {
  number: 0
}

//액션에 따른 실행 함수
export default function counterReducer(state = status, action) {
  switch (action.type) {
    case "DECREMENT_REQUEST":

      return { number: action.payload - 1 };
    case "INCREMENT_REQUEST":
      return { number: action.payload + 1 };
    default: return state;
  }
}
