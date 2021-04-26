'user strick'

let login_JSON;

function logincheck(){

    let id = document.getElementById('id');
    let pw = document.getElementById('pw');
    
    // test 파일 불러와서 json 파일로 만들기
    let selectedFile = new XMLHttpRequest();

    //selectedFile.open("GET","https://yooyoogithub.github.io/HSPELT/data/grammar_1.xlsx"); //파일명의 길이도 문제가 되는 것 같음. 짧게 유지
    selectedFile.open("GET","./data/login.xlsx");
    selectedFile.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    selectedFile.responseType = "blob"; //Blob형식으로 부탁합니다!
    selectedFile.send();  //위 요청을 보낸다.
    
    selectedFile.onload = function(){ 

        if(selectedFile.status === 200){

            let blob = new Blob([selectedFile.response], {type:'application/xlsx'}); //받은 파일의 내용을 blob 형태로 변환

            if(blob.size>0){
                let fileReader = new FileReader();
                fileReader.readAsBinaryString(blob);                    
                fileReader.onload = (event)=>{
                    let data = event.target.result;
                    let workbook = XLSX.read(data,{type:"binary"});
                    workbook.SheetNames.forEach(sheet => {
                        sheet = 'hsplogin';
                        let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                        let jsonexcelfile = JSON.stringify(rowObject, undefined, 4);
                        let jsonexcelfileparse = JSON.parse(jsonexcelfile);
                        login_JSON = JSON.parse(jsonexcelfile);
                    });

                    let confirm = false;
                    for(let i=0;i<login_JSON.length;i++){
                        console.log(`${i}번째 id값 ${login_JSON[i].id}, pw값 ${login_JSON[i].password}`);
                        console.log(`사용자 입력 id값 ${id.value}, pw값 ${pw.value}`);
                        if(login_JSON[i].id === id.value){
                            if(login_JSON[i].password === pw.value){
                                confirm = true;
                            }
                        }
                    }

                    if(confirm){
                        location.href = "hspstudy.html";
                    }else{
                        alert("아이디가 존재하지 않거나, 아이디와 비밀번호가 일치하지 않습니다.")
                    }
                }
            }
        }
    }

    

 //여기까지 파일 불러와서 jsonexcelfileparse에 저장 하기

    /*if($(id).val() == ""){
        $(id).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }
    else if($(pw).val() == ""){
        $(pw).next('label').addClass('warning');
        setTimeout(function(){
            $('label').removeClass('warning');
        },1500);
    }*/
}
    