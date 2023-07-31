'use strict'

const gradeInput = document.querySelector('.grade');
const subjectSelect = document.querySelector('.subject');
const subjectSelect1 = document.querySelector('.subject_1');

let subject=[];
let subject1=[];



// 학년 입력 --> 학년에 맞는 과목 대분류 option 생김
function getGrade() {
    const grade = gradeInput.value;

    switch(grade) {
        case '1':
            const array1 = ["공통(1학년)"];
            addSubjects(subjectSelect, subject, array1, 0);
            break;
        case '2':
            const array2 = ["공통(2학년)", "과학탐구(2학년)", "사회탐구(2학년)", "제2외국어(2학년)"];
            addSubjects(subjectSelect, subject, array2, 0);
            break;
        case '3':
            const array3 = ["국어(3학년)", "수학(3학년)", "영어(3학년)", "사회탐구(3학년)", "과학탐구(3학년)"];
            addSubjects(subjectSelect, subject, array3, 0);
            break;
    }
}

function getSubSelection() {
    const selectedSubject = subjectSelect.options[subjectSelect.selectedIndex].value;
    
    switch(selectedSubject) {
        case '공통(1학년)':
            const array1 = ["공통"];
            addSubjects(subjectSelect1, subject1, array1, 1);
            break;

        case '공통(2학년)':
            const array2 = ["공통(국/영/수)"];
            addSubjects(subjectSelect1, subject1, array2, 1);
            break;
        case '과학탐구(2학년)':
            const array3 = ["물리학Ⅰ", "화학Ⅰ", "생명과학Ⅰ", "지구과학Ⅰ"];
            addSubjects(subjectSelect1, subject1, array3, 1);
            break;
        case '사회탐구(2학년)':
            const array4 = ["생활과윤리", "세계지리", "정치와법", "경제"];
            addSubjects(subjectSelect1, subject1, array4, 1);
            break;
        case '제2외국어(2학년)':
            const array5 = ["일본어", "중국어", "한문", "프로그래밍(절대평가)"];
            addSubjects(subjectSelect1, subject1, array5, 1);
            break;
            //프로그래밍 disabled 넣기

        case '국어(3학년)':
            const array6 = [`화법과작문`, "언어와매체"];
            addSubjects(subjectSelect1, subject1, array6, 1);
            break;
        case '수학(3학년)':
            const array7 = ["심화수학", "통합수학"];
            addSubjects(subjectSelect1, subject1, array7, 1);
            break;
        case '영어(3학년)':
            const array8 = ["영어독해와작문", "진로영어"];
            addSubjects(subjectSelect1, subject1, array8, 1);
            break;
        case '사회탐구(3학년)':
            const array9 = ["국제경제"];
            addSubjects(subjectSelect1, subject1, array9, 1);
            break;
        case '과학탐구(3학년)':
            const array10 = ["물리학Ⅱ", "화학Ⅱ", "생명과학Ⅱ", "지구과학Ⅱ"];
            addSubjects(subjectSelect1, subject1, array10, 1);
            break;
    }
}

/* 과목 선택(소분류)
1학년) 공통
2학년) 공통: 문학/독서, 영어12, 수12
       과학탐구: 물 화 생 지
       사회탐구: 세계지리, 정치와법, 생활과윤리, 경제
       제2외국어: 일본어, 중국어, 한문, 프로그래밍(절대평가-disabled)
3학년)  */





// -------- 공통되는 함수 --------------------------------------------------------------------------

function addOption(select, lets, number) {
    const optgroup = document.createElement("optgroup");
    optgroup.classList.add(`optgroup${number}`);
    select.appendChild(optgroup);

    lets.forEach(element => {
        const option1 = document.createElement("option");
        option1.innerText = element;
        option1.value = element;
        option1.classList.add(element);
        optgroup.appendChild(option1); })
}

function removeOption(select, lets, number) {
    const optgroup = document.querySelector(`.optgroup${number}`);
    if (optgroup) {
        select.removeChild(optgroup);
        lets.splice(0);
    }
}

function addSubjects(select, lets, array, number) {
    removeOption(select, lets, number);
    lets = lets.concat(array);
    addOption(select, lets, number);
}


gradeInput.addEventListener('input', getGrade); //학년 입력하면 과목(대분류) 열림
subjectSelect.addEventListener("input", getSubSelection); //과목(대분류) 선택하면 과목(소분류) 열림




/* 등수로 등급 계산
1등급: 0.04*인원수 => 반올림 */