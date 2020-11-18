<div align="center">

  <img height="50" width="120" src="https://user-images.githubusercontent.com/59385491/99065767-39ab4500-25eb-11eb-9490-9d2a4202dd96.png">

  # 대학생 연합 IT벤처 창업 동아리 SOPT

  <img height="500" width="500" src="https://user-images.githubusercontent.com/59385491/99067842-bb50a200-25ee-11eb-9252-4a4ae3644e8d.png">

  <h2> 👨‍💻 SOPT 27기 서버파트원 박상수입니다. </h2>

<p>누구에겐 쉬운 공부일지라도, 나에겐 크고 작은 어려움에 맞서 해답을 찾으려고 노력했던 시간들의 흔적.</p>
<p>무던히 포기하지 않고 견디고 견뎠던 그 시간들이 변함없는 단 하나의 해답임을 믿습니다.</p>

</div>

<br>

## 소개

이 레포지토리는 [ON-SOPT](http://sopt.org/wp/?page_id=2519) 27기 서버파트에서 활동하며 공부한 내용을 정리하고자 만들어졌습니다. 

-   일정 : 2020년 11월 07일(토) 과제

<br>

## 과제 설명

<br>


<div align="center">

|               과제 설명             |                과제                 |           
| :-------------------------------: | :-------------------------------: |
| 1. 데이터베이스 테이블 설계해보기  | [☝🏻]()    | 
| 2. 회원가입, 로그인 마무리하기 | [✌🏻](https://github.com/ON-SOPT-SERVER-3/Parksangsu/blob/master/seminar-4/routes/users/index.js)    | 
| 3. 회원정보 수정 및 삭제 하는 기능을 구현해보기 | [🤚🏻](https://github.com/ON-SOPT-SERVER-3/Parksangsu/blob/master/seminar-4/routes/users/index.js)  | 

</div>

<br>


### 1. 데이터베이스 테이블 설계해보기

<div align="center">

<img width="400" alt="4차세미나 과제1" src="https://user-images.githubusercontent.com/59385491/99526036-0814ee00-29de-11eb-9418-8d1bc2841971.png">

</div>

   - 조건1 : User 테이블에는 id(인덱스), name, email, password, salt 컬럼이 있다.
   - 조건2 : Post 테이블에는 id(인덱스), author, title, contents, createdAt, updatedAt 컬럼이 있다.
   - 조건3 : 모든 user는 모든 post에 좋아요를 누를 수 있다.
   - 조건4 : ERD를 설계할 필요는 없다. Markdown, 액셀으로 작성해도 괜찮음.


### 2. 회원가입, 로그인 마무리하기
    
   - 조건1 : 회원가입, 로그인을 Sequelize를 활용해서 기능을 구현하기.

### 3. 회원정보 수정 및 삭제 하는 기능을 구현해보기

   - 조건1 : user/ 라우터에서 delete 메소드와 put 메소드를 사용해서 회원정보 수정 및 삭제 하는 기능을 구현해보기.