//코드 작성 

//require("패키지명")은 include, import하는 것과 같다.

const express = require("express");

// express를 이용한 앱을 app이라는 이름으로 생성한다.
const app = express();

/* 생성할 로컬 웹 서버의 포트를 지정한다.
 * 실행 중인 여러 네트워크 프로그램을 구분하는 용도의 변화
 * 컴퓨터/ 전체 서버 - 집 / IP-주소 / 이름-포트
*/

const port = 3000;

//ejs view page : HTML템플릿 엔진 ejs 불러오기

const ejs = require("ejs");

//html 템플릿 엔진 연동 설정
app.set("views", __dirname+"/views");
app.set("view engine","ejs");

//웹 서버 생성
app.listen(port, function(error){
    if(error){
        console.log("에러발생 : ", error);
    }
    console.log("Connection"+port);
})

app.get("/",function(req,res){
    
    //DB에서 가져온 데이터라고 가정
    const data ={
        title: "rendering test",
        name: "홍길동"
    };

    //res.render("페이지명",데이터);
    res.render("test", data);
})


//클라이언트의 요청(request)를 받아서 처리하고 응답하는 함수 작성
app.get("/test",function(req, res){
    console.log("요청 받음!");
    res.send("Hello Node.js");
});

/* 파일명.html
 * 파일명.ejs --> html+백엔드에서 전달해준 데이터
 */

//DB연동 명령어
//select insert 