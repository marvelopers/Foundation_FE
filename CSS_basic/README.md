# CSS

## 1.CSS
웹 페이지 스타일 지정 전용 언어
```
element{
    CSS code
}
```
```
.class{
    CSS code
}
```
```
#id{
    CSS code
}
```

## 2. CSS선택자  
CSS문법은 엘리먼트의 관계로 대상을 선택하는 방법이다

자손선택자
```
<head>
    <style>
        div#text1 p{
            color: green;                
        }
    </style>
</head>
```
자식선택자
```
<head>
    <style>
        div#text1 > p{
            color: green;                
        }
    </style>
</head>
```

인접형제선택자
````
<head>
    <style>
        div#text1 p#p1+p{
            color: green;                
        }
    </style>
</head>
```
일반형제선택자
````
<head>
    <style>
        div#text1 p#p1~p{
            color: green;                
        }
    </style>
</head>
```

## 3.스타일-박스모델
-width : 넓이,  height : 높이
 width와 height는 블럭요소만 사용이 가능하다. 인라인 요소는 사용이 불가능하다.

-border : 테두리
-padding : 콘텐츠과 테두리 간의 간격
-margin : 엘리먼트와 엘리먼트 간의 간격 

## 4.스타일 상속
like 태그를 통해 외부 CSS 파일을 불러올 수 있다.
주소에 존재하는 외부 CSS문서 불러오는 코드
```
<link rel="stylesheet" type="text/css" href="주소">
```
박스 모델과 관련된 속성(width, height)은 스타일 상속이 이루어지지 않는다.
엘리먼트 단위로 작성한 CSS 코드가 우선순위를 갖는다. 

## 5. 부트스트랩
트위터의 개발자가 오픈소스로 제공하고 있는 **웹 페이지 제작을 도와주는 프레임워크**
프레임워크? 프로그램 개발을 도와주는 이미 작성된 각종 소스코드의 집합 (Ex Djando, Spring)


