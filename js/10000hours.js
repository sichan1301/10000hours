const startButton = document.querySelector('.start_btn');
const openButton = document.querySelector('.modal_btn');
const closeButton = document.querySelector('.close_btn');
const shareButton = document.querySelector('.share_btn');
const result = document.querySelector('.result');
const modal = document.querySelector('#modal');
const loading = document.querySelector('.result_loading');

function calculator(){
    const fieldValue = document.querySelector('#field_value');  //꿈 입력창
    let timeValue = document.querySelector('#time_value'); //시간 입력창
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector('.field_result'); //꿈 결과창
    const timeResult = document.querySelector('.time_result')  //시간 결과창

    if(fieldValue.value == ""){
        alert('입력되지 않았습니다')
        fieldValue.focus();
        return false;
    }else if(timeValue_int.value == ""){
        alert('입력되지 않았습니다');
        timeValue.focus();
        return false;
    }else if(timeValue_int > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요');
        return false;
    }
    
    result.style.display='none';
    loading.style.display ='flex';

    setTimeout(function(){
        result.style.display = 'flex';
        loading.style.display = 'none';
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int), 10);  //10000나누기 타입입력값을 10진수로 
    }, 1800)  //1.8초 뒤에 실행
}

function openModal(){
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';

}

window.onclick = function(event){
    if(event.target == modal){
        closeModal();
    }
}

function copyUrl(){
    let url = window.location.href;
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다");
}


shareButton.addEventListener('click',copyUrl);
openButton.addEventListener('click',openModal);
closeButton.addEventListener('click',closeModal);
startButton.addEventListener('click',calculator);
