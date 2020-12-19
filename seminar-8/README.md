# hellin-server

### 서비스 이름
헬린2분!

### 서비스 한 줄 소개
침대 중독에서 운동 중독으로! 핫바디가 되고 싶은 당신을 위한 막간 홈트레이닝 추천 서비스 🧚‍♂️

### models/index.js

```javascript
db.ExerciseVideo.hasMany(db.Hashtag, { onDelete: 'cascade', foreignKey: 'videoId', sourceKey: 'id' })
db.Hashtag.belongsTo(db.ExerciseVideo, { foreignKey: 'videoId', targetKey: 'id'})

/* M : N   User : Video => Like */
db.User.belongsToMany(db.ExerciseVideo, { through: db.Like, foreignKey: 'userId' })
db.ExerciseVideo.belongsToMany(db.User, { through: db.Like, foreignKey: 'videoId' })

db.ExerciseVideo.hasMany(db.WatchingHistory, { onDelete: 'cascade', foreignKey: 'videoId', sourceKey: 'id' })
db.WatchingHistory.belongsTo(db.ExerciseVideo, { foreignKey: 'videoId', targetKey: 'id'})

db.User.hasMany(db.WatchingHistory, { onDelete: 'cascade', foreignKey: 'userId', sourceKey: 'id' })
db.WatchingHistory.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id'})
```

### ERD

수정 진행중


### API 명세

[API 링크](https://github.com/sopt12-hackathon/hellin-server/wiki)

### 기능 소개

- 송정우 : 시청기록, 비디오 추천, 좋아요 기록, 유저 마이페이지

- 박상수 : 로그인, 회원가입
