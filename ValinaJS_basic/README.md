# JavaScript

- Vanilla JS : 원래의 JavaScript를 의미하는 것.
- 익명 함수를 사용하면 재귀적으로 부를 수 없는 문제점이 있음.
- IIFE(Immediately Invoked Function Expressions : 즉시 실행 함수 표현)

### 사용자 정의 객체
- 자바스크립트는 프로토타입 기반의 언어로 class 구문이 없다. 대신, Function을 class로 사용한다. 

## 클로저 Closure

#  JavaScript Dom 접근하는 방식 정리

1) id로 접근

getElementById(elementID) 
return Am Element Object

2) tag 이름으로 접근 
getElementsByTagName(tagname)
return A NodeList object

3) class 이름으로 접근
getElementsByClassName(className)
return A NodeList object

4) CSS기법으로 첫 번째 노드 선택
document.querySelector(CSS selectors)
return A Node object

5) CSS기법으로 전체 노드 선택
document.querySelectorAll(CSS selectors)
return A NodeList object

6) 상위 노드에 접근
node.parentNode
return A Node object

7) 상위 HTML 노드에 접근
node.parentElement
return An Element object

8) 하위 노드에 접근
node.childNodes
return A nodeList object

9) 하위 HTML 노드에 접근
element.chilren
return a live HTMLCollection object

10) 하위 처음 노드에 접근
node.firstChild
reruen A Node object

11) 하위 처음 HTML 노드에 접근
node.firstChild
return A node object

12) 하위 마지막 노드에 접근
node.lastChild
return A Node object

13) 하위 마지막 HTML 노드에 접근
node.lastElementChild
return A Node object

14) 이전 노드에 접근
node.previousSibling
return A Node object
동일한 트리 수준에서 지정된 노드의 이전 노드를 반환합니
다.

15) 이전 HTML 노드에 접근
node.previousElementSibling
return A Node object

16) 다음 노드에 접근
node.nextSibling
Return Value : A Node object


17) 다음 HTML 노드에 접근
nextElementSibling
return a Node object

18) 노드의 태그 이름 속성
element.tagName
return A String 

19) 노드의 id 속성
element.id
return A String 

20) 노드의 클래스 이름 속성
element.className
return A String 

21) 노드의 속성 읽기
element.getAttribute(attributeName)
return A String 

22) 노드의 속성 변경
element.setAttribute(attributeName,attributeValue)
return no return value 

22) 노드의 속성 제거
element.removeAttribute(attributeName)
return no return value 

23) 노드의 속성이 있는지 점검
element.hasAttribute(attributeName)
return A Boolean

24) 새로운 노드 생성
document.createElement(nodeName)
return An Element Object

24) 노드에 생성된 새로운 노드 추가
node.appendChild(node)
return A Node Object

25) 노드에 생성된 새로운 노드를 기준으로 노드 위치 이전 위치에 추가
node.insertBefore(newNode, existingNode)
return A Node object

26) 노드 삭제
node.removeChild(node)
return A Node object

27) 노드 복제
node.cloneNode(deep)
return A Node object


28) 하위 노드가 있는지 점검 
node.hacChildNodes()
return A boolean 

29) 노드 클래스 
element.classList
return A DOMTokenList
: 클래스 이름을 DOMTokenList객체로 변환시킨다.
DOMTokenList는 DOM 속성을 구분짓는 하나의 리스트 형식,
배열 모양의 객체이며 목록에 인덱스를 만들어 개별 속성을 가져올 수 있다.

30) 노드 클래스 추가
element.classList.add(class1, class2, ...)
return No return value

31) 노드 클래스 제거 
element.classList.remove(class1, class2, ...)
return No return value

32) 노드 클래스 여부
element.classList.contains(class)
return A boolean 

33) 노드 클래스 추가, 제거 토글
element.classList.toggle(class, true|false)
return A boolean 
: 지정된 클래스가 있다면, 지정된 클래스를 요소에서 제거하고 false를 반환한다. 반대로 지정된 클래스가 없다면 추가하고ture를 반환한다.
선택적인 두 번째 매개변수는 클래스가 이미 존재하는지 여부에 관계없이 클래스를 추가하거나 제거하도록 하는 boolean값이다. 


## JavaScript_내장함수

### for Each
배열 안에 있는 모든 원소 출력 가능

```
const super = ['A','B','C','D'];
super.forEach(text=>{
	console.log(text);
})
```

### map
배열 안의 원소를 변환하여 새로운 배열 생성
```
const arr =[1,2,3,4];

const square = n=> n*n;
const squared = arr.map(square);
```

### indexOf
원하는 항목이 몇 번째 원소인지 찾아주는 함수 (값이 숫자, 문자열, 불리언일 경우 사용)
```
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
```

### findIndex
배열안에 있는 값이 객체나 배열일 때 사용
```
const index = todos.findIndex(todo => todo.id === 3);
```

### find
찾아낸 값을 반환
```
const todo = todos.find(todo => todo.id === 3);
```


### filter
특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열생성
```
const tasksNotDone = todos.filter(todo => todo.done === false);
```

### splice
배열에서 특정 항목을 제거할 경우 사용(기존 배열 변형)
```
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
```

### slice
배열을 잘라냄, 기존 배열 변형 없음
```
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지
```

### shift, unshift
shift :  첫번째 원소를 배열에서 추출해줍니다.
unshift : 배열의 맨 앞에 새 원소를 추가합니다.

### push, pop
push: 배열의 맨 마지막에 새 항목 추가
pop: 맨 마지막 항목을 추출

### concat
```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);
```

### join
```
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
```

### reduce
```
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);
```
