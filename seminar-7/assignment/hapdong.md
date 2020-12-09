<div align="center">

  <img height="50" width="120" src="https://user-images.githubusercontent.com/59385491/99065767-39ab4500-25eb-11eb-9490-9d2a4202dd96.png">

  # 대학생 연합 IT벤처 창업 동아리 SOPT

  <img height="250" width="250" src="https://user-images.githubusercontent.com/59385491/101639763-05546880-3a73-11eb-9091-ce057dc957bc.png">

  <h2> 🧑🏻‍💻 SOPT 클라이언트 합동 세미나</h2>
  <h3>공간 예약 서비스 스페이스클라우드 서버 구현</h3>

</div>


<br>

## 💁🏻 소개

이 레포지토리는 [ON-SOPT](http://sopt.org/wp/?page_id=2519) 27기 서버파트와 클라이언트 파트가 협업하는 합동세미나 내용을 정리하고자 만들어졌습니다. 

-   일정 : 2020년 12월 05일(토)
-   스페이스클라우드 API 구현 및 DB 설계

<br>

## 📕 API Docs

- [API Description Link](https://github.com/ON-SOPT-SERVER-3/Parksangsu/wiki)

<br>

## 💼 ERD(Entity Relation Diagram)

<img width="703" alt="스페이스클라우드 ERD" src="https://user-images.githubusercontent.com/59385491/101642220-1652a900-3a76-11eb-8115-d03cd7880d20.png">

<br>

## 🗂 models/index.js

```javascript
/* Post */
db.Post = require('./post')(sequelize, Sequelize);
db.PostDetail = require('./postDetail')(sequelize, Sequelize);
db.Facilities = require('./facilities')(sequelize, Sequelize);
db.PostDetailSelect = require('./postDetailSelect')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.PostDetailImage = require('./postDetailImage')(sequelize, Sequelize);

/* Banner */
db.Banner = require('./banner')(sequelize, Sequelize);


/** 1 : 1   Post : PostDetail */
db.Post.hasOne(db.PostDetail, { onDelete: 'cascade' });
db.PostDetail.belongsTo(db.Post);

/** 1 : 1   Post : PostDetailSelect */
db.Post.hasOne(db.PostDetailSelect, { onDelete: 'cascade' });
db.PostDetailSelect.belongsTo(db.Post);

/** 1 : N   PostDetail : PostDetailImage */
db.PostDetail.hasMany(db.PostDetailImage, { onDelete: 'cascade' });
db.PostDetailImage.belongsTo(db.PostDetail);

/** 1 : N   PostDetail : Facilities */
db.PostDetail.hasMany(db.Facilities, {onDelete: 'cascade' })
db.Facilities.belongsTo(db.PostDetail);

/** N : M   Post : PostDetail => Hashtag */
db.Post.belongsToMany(db.PostDetail, { through: 'Hashtag', as: 'hashed', onDelete: 'cascade' });
db.PostDetail.belongsToMany(db.Post, { through: 'Hashtag', as: 'hasher', onDelete: 'cascade' });
```

<br>

## 🏷 config/config.json

```javascript
{
  "development": {
    "username": "---",
    "password": "---",
    "database": "---",
    "host": "---",
    "dialect": "mysql"
  }
}
```

<br>

## 🏷 config/s3.json

```javascript
{
    "accessKeyId": "---",
    "secretAccessKey": "---",
    "region": "---"
}
```

<br>

## 🎙 Contributor

- [박상수](https://github.com/epitoneproject)
