#JavaScript

객체(object) 기반의 스크립트 언어 

HTML : 웹의 내용 작성,  CSS : 웹 디자인 JS : 웹의 동작 구현
주로 웹 브라우저에 사용되나, Node.js와 같은 프레임 워크를 사용하면 서버 프로그래밍도 가능

특징 
1. 객체 기반의 스크립트 언어
2. 동적이며, 타입을 명시할 필요가 없는 인터프리터 언어 (컴파일 작업 없이 소스코드 실행 가능)
3. 객체 지향형과 함수현 프로그래밍 둘 다 가능

JA vs JS

JA_ 컴파일 언어 , 타입 명시 , 클래스 기반의 객체 지향 언어
JS_ 인터프리터 언어, 타입명시X, 프로토타입 기반의 객체지향 언어

JS표준 : ECMA(European Computer Manufacuurers Association)
현재 최신 표준 :  ECMAScript 6(2015년 발표)

HTML의 내용, 속성, 스타일을 변경할 수 있음.

JS 문법 
1.리터럴(literal) : 직접 표현되는 값 그 자체
12// 숫자 문자열 불리언 리터럴 

2.식별자(identifier) : 변수나 함수의 이름, 영문자, 숫자, _, $만 사용가능. unicode문자셋 사용.

3.키워드(keyword) : 미리 예약된 단어, 식별자로 사용가능.

***

JS출력
1.window.alert() 메소드
가장 간단하게 데이터를 출력할 수 있는 방법.
브라우저와는 별도의 대화상자를 띄워 데이터를 전달.

<pre>
<code>

</code>
</pre>

```
function alertDialogBox(){
    alert("확인 버튼을 누르면 다음 작업이 가능합니다.");
}
```

2. HTML DOM요소를 이용한  innerHTML 프로퍼티

document객체의 getElementById()나 getElementByTagName()등의 메소드를 통해 HTML 요소를 사용한다.

```
const str = document.getElementById("text");
str.innerHTML = "문장을 변경합니다." 

```
3. decument.write()메소드

document.write()메소드는 웹 페이지가 로딩될 때 실행됨.
웹 페이지에 가장 먼저 데이터를 출력, 테스트나 디버깅을 위해서 사용.

웹 페이지에 모든 내용이 로딩된 후에 document.write()메소드가 실행될 경우, 
페이지 내에 먼저 로딩된 모든 데이터를 지우고 자신의 데이터를 출력함.

```
document.write(4*5);
```






