html 

html css js 

인터넷 
클라이언트와 서버 
클라이언트 요청  / 서버 응답 결과 
클라이언트, 브라우저를 통해 웹 사이트를 보고 있는 개인,
서버는 클라이언트의 요청에 응답
웹 상에서 대화를 주고 받을 때 http하는 규칙이 적용됨,
http 

hyper(연결링크) transfer(전송) protocol()
웹 상에서 대화를 주고 받기 위한 규칙

***

개발환경 
맥 윈도우 리눅스
언어 데이터베이스 프레임워크

크로스 브라우징 : 모든 브라우저에서 코드가 정상적으로 작동하는가 
개발자 도구 
***
HTML (hyperText Markup Language)
웹 상에 정보를 보여주기 위해 구조화된 언어 
element 엘리먼트 : <태그>내용</태그>

HMTL5
<!DOCTYPE HTML>

***

HTML
head :웹 페이지에 사용된 요소들의 정보를 미리 선언하는 태그
body: 콘텐츠를 담는 역할

<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
    </body>
<html>

태그의 포함관계

엘리먼트 안에 다른 엘리먼트를 작성하기 위한 관계


HTML Trees

태그 속성 
a : 콘텐츠에 대한 하이퍼링크 지정 가능

empty 태그 : 여는 태그로만 되는 것
-br :line break
-img:이미지 파일으 적용할 수 있는 태그

속성
id:하나의 페이지의 유일한 요소의 식별자 역할 
class:여러개 다중요소에 대한 식별자 역할


****
블럭요소와 인라인 요소 
블럭요소
1. 줄바꿈속성 2. 블럭 포함 X 3.인라인 포함 가능
div address ol ul li h1 dl dt area dd p
--div address li dd :블럭이자 범용요소

인라인 요소
1.줄바꿈이 없다  2.블럭은 포함X 인라인은 포함 가능 
q em abbr acronym strong sup sub img a map area span 

***
자주 사용되는 태그  table ul
table : 테이블 태그로만
thead : 테이블 태그의 제목 태그를 표현하기 위해 사용되는 태그
tr :하나의 행을 나타내는 태그로만
th : 제목행의 하나의 열을 나타내는 태그로만

tbody 내용을 표현하기 위해 사용하느 
td 내용의 하나의 열을 

tfoot 테이블 전체의 요약 
caption 테이블의 태그를 보여주는 태그 

static 
클라이언트 서버 
사용자의 행동이나 입력에 의존적이지 않은 콘텐츠
-이미지 파일 
웹에서 인정하는 이미지 파일은 png jepg gif

html 파일 경로

절대경로 상대경로

자원의 절대적 위치를 불러오는 것,
img  

상대경로 
파일명을 바로 입력하는 경로
.. 상위 폴더 내 이미지 파일 

