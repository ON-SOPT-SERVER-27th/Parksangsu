const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
const { User } = require('../../models');
router.post('/signup', async (req, res) => {
 const { email, password, userName } = req.body; // 1. req.body에서 데이터 가져오기
 //2. request data 확인하기, email, password, userName data가 없다면 NullValue 반환
 //3. 존재하는 이메일인지 확인하기. 이미 존재하는 이메일면 ALREADY ID 반환
 //4. salt 생성
 //5. 2차 세미나때 배웠던 pbkdf2 방식으로 (비밀번호 + salt) => 암호화된 password
 //6. User email, 암호화된 password, salt, userName 생성!
 //7. status: 200 message: SING_UP_SUCCESS, data: id, email, userName 반환! (비밀번호, salt 반환 금지!!)
})
router.post('/signin', async (req, res) => {
 const { email, password } = req.body; // 1. req.body에서 데이터 가져오기
 //2. request data 확인하기, email, password, userName data가 없다면 NullValue 반환
 //3. 존재하는 아이디인지 확인하기. 존재하지 않는 아이디면 NO USER 반환
 //4. 비밀번호 확인하기 - 로그인할 email의 salt를 DB에서 가져와서 사용자가 request로 보낸 password와 암호화를 한후 디비에 저장되어있는 password와 일치하면 true
 // 일치하지 않으면 Miss Match password 반환
 //5. status: 200 ,message: SIGN_IN_SUCCESS, data: id, email, userName 반환
})
router.get('/', async (req, res) => {
 //1. 모든 사용자 정보 (id, email, userName ) 리스폰스!
 // status: 200, message: READ_USER_ALL_SUCCESS, data: id, email, userName 반환
})
router.get('/:id', async (req, res) => {
 //1. parameter로 id값을 받아온다! (id값은 인덱스값)
 //2. id값이 유효한지 체크! 존재하지 않는 아이디면 NO_USER 반환
 //3. status:200 message: READ_USER_SUCCESS, id, email, userName 반환
})
module.exports = router;