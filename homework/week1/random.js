const member = [{
        name: "최정재",
        part: "Server",
        status: "OB",
        gender: "남"
    },
    {
        name: "박남선",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "신민상",
        part: "Server",
        status: "OB",
        gender: "남"
    },
    {
        name: "강효원",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "류세훈",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "이가영",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "이영현",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "남궁찬",
        part: "Server",
        status: "OB",
        gender: "남"
    },
    {
        name: "김민주",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "최정훈",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "박주은",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "이현준",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "김수민",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "김현상",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "김채림",
        part: "Server",
        status: "OB",
        gender: "여"
    },
    {
        name: "이현상",
        part: "Server",
        status: "YB",
        gender: "남"
    },
    {
        name: "홍혜진",
        part: "Server",
        status: "YB",
        gender: "여"
    },
    {
        name: "오승준",
        part: "Server",
        status: "YB",
        gender: "남"
    },
    {
        name: "양재욱",
        part: "Server",
        status: "YB",
        gender: "남"
    },
    {
        name: "최선준",
        part: "Server",
        status: "YB",
        gender: "남"
    },
    {
        name: "박상수",
        part: "Server",
        status: "YB",
        gender: "남"
    },
    {
        name: "임찬기",
        part: "Server",
        status: "YB",
        gender: "남"
    },
    {
        name: "박진호",
        part: "Server",
        status: "YB",
        gender: "남"
    },
    {
        name: "신지한",
        part: "Server",
        status: "YB",
        gender: "여"
    },
    {
        name: "김영은",
        part: "Server",
        status: "YB",
        gender: "여"
    },
    {
        name: "송정훈",
        part: "Server",
        status: "YB",
        gender: "남"
    },
    {
        name: "강준수",
        part: "Server",
        status: "YB",
        gender: "남"
    },
    {
        name: "김중현",
        part: "Server",
        status: "YB",
        gender: "여"
    },
    {
        name: "김기찬",
        part: "Server",
        status: "YB",
        gender: "남"
    },
    {
        name: "김우영",
        part: "Server",
        status: "YB",
        gender: "남"
    },
    {
        name: "윤가인",
        part: "Server",
        status: "YB",
        gender: "여"
    },
    {
        name: "이예진",
        part: "Server",
        status: "YB",
        gender: "여"
    },
    {
        name: "박수진",
        part: "Server",
        status: "YB",
        gender: "여"
    },
    {
        name: "최다슬",
        part: "Server",
        status: "YB",
        gender: "여"
    },
    {
        name: "한승아",
        part: "Server",
        status: "YB",
        gender: "여"
    },
    {
        name: "김재은",
        part: "Server",
        status: "YB",
        gender: "여"
    }
];

// 구성원 구분
let 남자_YB = member.filter(
    (member) => member.gender === "남" && member.status === "YB"
);
let 남자_OB = member.filter(
    (member) => member.gender === "남" && member.status === "OB"
);
let 여자_YB = member.filter(
    (member) => member.gender === "여" && member.status === "YB"
);
let 여자_OB = member.filter(
    (member) => member.gender === "여" && member.status === "OB"
);

// 팀 구분
let team1 = [];
let team2 = [];
let team3 = [];
let team4 = [];
let team5 = [];
let team6 = [];

// YB 남자 랜덤 뽑기
let 남자_YB_셔플 = 남자_YB
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

for (let i = 0; i < 남자_YB_셔플.length; i++) {
    if (i <= 1) {
        team1.push(남자_YB_셔플[i]);
    } else if (i <= 3 && i > 1) {
        team2.push(남자_YB_셔플[i]);
    } else if (i <= 5 && i > 3) {
        team3.push(남자_YB_셔플[i]);
    } else if (i <= 7 && i > 5) {
        team4.push(남자_YB_셔플[i]);
    } else if (i <= 9 && i > 7) {
        team5.push(남자_YB_셔플[i]);
    } else {
        team6.push(남자_YB_셔플[i]);
    }
}

// OB 남자 랜덤 뽑기
let 남자_OB_셔플 = 남자_OB
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

for (let i = 0; i < 남자_OB_셔플.length; i++) {
    if (i === 0) {
        team4.push(남자_OB_셔플[i]);
    } else if (i === 1) {
        team5.push(남자_OB_셔플[i]);
    } else {
        team6.push(남자_OB_셔플[i]);
    }
}

// YB 여자 랜덤 뽑기
let 여자_YB_셔플 = 여자_YB
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

for (let i = 0; i < 여자_YB_셔플.length; i++) {
    if (i <= 1) {
        team1.push(여자_YB_셔플[i]);
    } else if (i <= 3 && i > 1) {
        team2.push(여자_YB_셔플[i]);
    } else if (i <= 5 && i > 3) {
        team3.push(여자_YB_셔플[i]);
    } else if (i <= 6 && i > 5) {
        team4.push(여자_YB_셔플[i]);
    } else if (i <= 7 && i > 6) {
        team5.push(여자_YB_셔플[i]);
    } else {
        team6.push(남자_YB_셔플[i]);
    }
}

// OB 여자 랜덤 뽑기
let 여자_OB_셔플 = 여자_OB
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

for (let i = 0; i < 여자_OB_셔플.length; i++) {
    if (i <= 1) {
        team1.push(여자_OB_셔플[i]);
    } else if (i <= 3 && i > 1) {
        team2.push(여자_OB_셔플[i]);
    } else if (i <= 5 && i > 3) {
        team3.push(여자_OB_셔플[i]);
    } else if (i <= 7 && i > 5) {
        team4.push(여자_OB_셔플[i]);
    } else if (i <= 9 && i > 7) {
        team5.push(여자_OB_셔플[i]);
    } else {
        team6.push(여자_OB_셔플[i]);
    }
}


console.log("team1 :", team1);
console.log("team2 :", team2);
console.log("team3 :", team3);
console.log("team4 :", team4);
console.log("team5 :", team5);
console.log("team6 :", team6);