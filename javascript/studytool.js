'user strict'

let hspdata_JSON; //전체 데이타
let studydata = []; //실제 선택되어진 책,유닛 부분만 선택해서 저장
let recover;
let typingBool = false;
let typingIdx = 0;
let typingTxt;
let tyInt;
let loop;
let studywords = [];
let studysentence = [];
let voices = [];
let wordsanswer = []; //각 select에서 선택된 option value 저장
let madequestion; //단어 게임에서 만들어진 거 보관

function addbookselect() {
    let booktype = document.getElementById('booktype').value;


    if (booktype === 'Phonics') { //Phonics를 선택했을 때
        document.getElementById('bookselect').innerHTML = `
        <select name="bookname" id="bookname" class="bookname" onchange="addunit()">
            <option value="0">Alphabet Phonics</option>
            <option value="1">Easy Phonics</option>
            <option value="2">Easy Phonics Plus</option>
            <option value="3">Phonics Fun 1</option>
            <option value="4">Phonics Fun 2</option>
            <option value="5">Phonics Fun 3</option>
            <option value="6">Phonics Town 1</option>
            <option value="7">Phonics Town 2</option>
            <option value="8">Phonics Town 3</option>         
        </select>
        `;

        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">
            Unit 13: <input type="checkbox" class="realcheckbox" name="unit" value="13">
            Unit 14: <input type="checkbox" class="realcheckbox" name="unit" value="14">
            Unit 15: <input type="checkbox" class="realcheckbox" name="unit" value="15">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
        `;

        document.getElementById('menudisplay').innerHTML = `
            <div class="studymenu" id='ps'>
                PHONICS STUDY
            </div>
            <div class="studymenu" id='p1'>
                PHONICS PLAY #1
            </div>
            <div class="studymenu" id='p2'>
                PHONICS PLAY #2
            </div>
            <div class="studymenu" id='p3'>
                PHONICS PLAY #3
            </div>
            <div class="studymenu" id='p4'>
                PHONICS PLAY #4
            </div>
            <div class="studymenu" id='p5'>
                PHONICS PLAY #5
            </div>
            <div class="studymenu" id='p6'>
                PHONICS PLAY #6
            </div>  
        `;
    } else if (booktype === 'Power Voca') { //Power Voca를 선택했을 때
        document.getElementById('bookselect').innerHTML = `
        <select name="bookname" id="bookname" class="bookname" onchange="addunit()">
            <option value="1">Power Voca 1</option>
            <option value="2">Power Voca 2</option>
            <option value="3">Power Voca 3</option>
            <option value="4">Power Voca 4</option>
            <option value="5">Power Voca 5</option>
        </select>
        `;
        /*document.getElementById('bookselect').innerHTML = `
        <select name="bookname" id="bookname" class="bookname" onchange="addunit()">
            <option value="1">Power Voca 1</option>
            <option value="2">Power Voca 2</option>
            <option value="3">Power Voca 3</option>
            <option value="4">Power Voca 4</option>
            <option value="5">Power Voca 5</option>
            <option value="6">Power Voca 6</option>
            <option value="7">Power Voca 7</option>
            <option value="8">Power Voca 8</option>
            <option value="9">Power Voca 9</option>
            <option value="10">Power Voca 10</option>
            <option value="11">Power Voca 11</option>
            <option value="12">Power Voca 12</option>
            <option value="13">Power Voca 중등 숙어</option>
            <option value="14">Power Voca 고등 숙어</option>
            <option value="15">Power Voca 대학 숙어</option>
        </select>
        `;*/

        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">
            Unit 13: <input type="checkbox" class="realcheckbox" name="unit" value="13">
            Unit 14: <input type="checkbox" class="realcheckbox" name="unit" value="14">
            Unit 15: <input type="checkbox" class="realcheckbox" name="unit" value="15">
            Unit 16: <input type="checkbox" class="realcheckbox" name="unit" value="16">
            Unit 17: <input type="checkbox" class="realcheckbox" name="unit" value="17">
            Unit 18: <input type="checkbox" class="realcheckbox" name="unit" value="18">
            Unit 19: <input type="checkbox" class="realcheckbox" name="unit" value="19">
            Unit 20: <input type="checkbox" class="realcheckbox" name="unit" value="20">
            Unit 21: <input type="checkbox" class="realcheckbox" name="unit" value="21">
            Unit 22: <input type="checkbox" class="realcheckbox" name="unit" value="22">
            Unit 23: <input type="checkbox" class="realcheckbox" name="unit" value="23">
            Unit 24: <input type="checkbox" class="realcheckbox" name="unit" value="24">
            Unit 25: <input type="checkbox" class="realcheckbox" name="unit" value="25">
            Unit 26: <input type="checkbox" class="realcheckbox" name="unit" value="26">
            Unit 27: <input type="checkbox" class="realcheckbox" name="unit" value="27">
            Unit 28: <input type="checkbox" class="realcheckbox" name="unit" value="28">
            Unit 29: <input type="checkbox" class="realcheckbox" name="unit" value="29">
            Unit 30: <input type="checkbox" class="realcheckbox" name="unit" value="30">
            Unit 31: <input type="checkbox" class="realcheckbox" name="unit" value="31">
            Unit 32: <input type="checkbox" class="realcheckbox" name="unit" value="32">
            Unit 33: <input type="checkbox" class="realcheckbox" name="unit" value="33">
            Unit 34: <input type="checkbox" class="realcheckbox" name="unit" value="34">
            Unit 35: <input type="checkbox" class="realcheckbox" name="unit" value="35">
            Unit 36: <input type="checkbox" class="realcheckbox" name="unit" value="36">
            Unit 37: <input type="checkbox" class="realcheckbox" name="unit" value="37">
            Unit 38: <input type="checkbox" class="realcheckbox" name="unit" value="38">
            Unit 39: <input type="checkbox" class="realcheckbox" name="unit" value="39">
            Unit 40: <input type="checkbox" class="realcheckbox" name="unit" value="40">
            Unit 41: <input type="checkbox" class="realcheckbox" name="unit" value="41">
            Unit 42: <input type="checkbox" class="realcheckbox" name="unit" value="42">
            Unit 43: <input type="checkbox" class="realcheckbox" name="unit" value="43">
            Unit 44: <input type="checkbox" class="realcheckbox" name="unit" value="44">
            Unit 45: <input type="checkbox" class="realcheckbox" name="unit" value="45">
            Unit 46: <input type="checkbox" class="realcheckbox" name="unit" value="46">
            Unit 47: <input type="checkbox" class="realcheckbox" name="unit" value="47">
            Unit 48: <input type="checkbox" class="realcheckbox" name="unit" value="48">
            Unit 49: <input type="checkbox" class="realcheckbox" name="unit" value="49">
            Unit 50: <input type="checkbox" class="realcheckbox" name="unit" value="50">
            Unit 51: <input type="checkbox" class="realcheckbox" name="unit" value="51">
            Unit 52: <input type="checkbox" class="realcheckbox" name="unit" value="52">
            Unit 53: <input type="checkbox" class="realcheckbox" name="unit" value="53">
            Unit 54: <input type="checkbox" class="realcheckbox" name="unit" value="54">
            Unit 55: <input type="checkbox" class="realcheckbox" name="unit" value="55">
            Unit 56: <input type="checkbox" class="realcheckbox" name="unit" value="56">
            Unit 57: <input type="checkbox" class="realcheckbox" name="unit" value="57">
            Unit 58: <input type="checkbox" class="realcheckbox" name="unit" value="58">
            Unit 59: <input type="checkbox" class="realcheckbox" name="unit" value="59">
            Unit 60: <input type="checkbox" class="realcheckbox" name="unit" value="60">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="61">
        `;

        document.getElementById('menudisplay').innerHTML = `
            <div class="studymenu" id='wl'>
                WORDS LEARNING
            </div>
            <div class="studymenu" id='sl'>
                SENTECE LEARNING
            </div>
            <div class="studymenu" id='wp1'>
                WORDS PLAY #1
            </div>
            <div class="studymenu" id='wp2'>
                WORDS PLAY #2
            </div>
            <div class="studymenu" id='wp3'>
                WORDS PLAY #3
            </div>
            <div class="studymenu" id='sp1'>
                SENTENCE PLAY #1
            </div>
            <div class="studymenu" id='sp2'>
                SENTENCE PLAY #2
            </div>  
        `;
    } else if (booktype === 'Story Town') { //Story Town을 선택했을 때
        document.getElementById('bookselect').innerHTML = `
        <select name="bookname" id="bookname" class="bookname" onchange="addunit()">
            <option value="ST1-1">Story Town 1-1</option>
            <option value="ST1-2">Story Town 1-2</option>
            <option value="ST1-3">Story Town 1-3</option>
            <option value="ST1-4">Story Town 1-4</option>
            <option value="ST1-5">Story Town 1-5</option>
            <option value="ST2-1">Story Town 2-1</option>
            <option value="ST2-2">Story Town 2-2</option>
            <option value="ST2-3">Story Town 2-3</option>
            <option value="ST2-4">Story Town 2-4</option>
            <option value="ST2-5">Story Town 2-5</option>
            <option value="ST3-1">Story Town 3-1</option>
            <option value="ST3-2">Story Town 3-2</option>
            <option value="ST3-3">Story Town 3-3</option>
            <option value="ST3-4">Story Town 3-4</option>
            <option value="ST3-5">Story Town 3-5</option>
            <option value="ST4-1">Story Town 4-1</option>
            <option value="ST4-2">Story Town 4-2</option>
            <option value="ST4-3">Story Town 4-3</option>
            <option value="ST4-4">Story Town 4-4</option>
            <option value="ST4-5">Story Town 4-5</option>
        </select>
        `;

        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
        `;

        document.getElementById('menudisplay').innerHTML = `
            <div class="studymenu" id='wl'>
                WORDS LEARNING
            </div>
            <div class="studymenu" id='sl'>
                SENTECE LEARNING
            </div>
            <div class="studymenu" id='s'>
                SPEAKING
            </div>
            <div class="studymenu" id='gp'>
                GRAMMAR PLUS
            </div>
            <div class="studymenu" id='w'>
                WRITING
            </div>
            <div class="studymenu" id='pg'>
                PLAYING GAME
            </div>
            <div class="studymenu" id='p'>
                PROJECT
            </div>  
        `;
    } else if(booktype === 'Reading Town') { //Reading Town을 선택했을 때
        document.getElementById('bookselect').innerHTML = `
        <select name="bookname" id="bookname" class="bookname" onchange="addunit()">
            <option value="RT30-1">Reading Town 30-1</option>
            <option value="RT30-2">Reading Town 30-2</option>
            <option value="RT30-3">Reading Town 30-3</option>
            <option value="RT50-1">Reading Town 50-1</option>
            <option value="RT50-2">Reading Town 50-2</option>
            <option value="RT50-3">Reading Town 50-3</option>
            <option value="RT70-1">Reading Town 70-1</option>
            <option value="RT70-2">Reading Town 70-2</option>
            <option value="RT70-3">Reading Town 70-3</option>
            <option value="RT100-1">Reading Town 100-1</option>
            <option value="RT100-2">Reading Town 100-2</option>
            <option value="RT100-3">Reading Town 100-3</option>
            <option value="RT130-1">Reading Town 130-1</option>
            <option value="RT130-2">Reading Town 130-2</option>
            <option value="RT130-3">Reading Town 130-3</option>
        </select>
        `;

        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">
            Unit 13: <input type="checkbox" class="realcheckbox" name="unit" value="13">
            Unit 14: <input type="checkbox" class="realcheckbox" name="unit" value="14">
            Unit 15: <input type="checkbox" class="realcheckbox" name="unit" value="15">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
        `;

        document.getElementById('menudisplay').innerHTML = `
            <div class="studymenu" id='wl'>
                WORDS LEARNING
            </div>
            <div class="studymenu" id='sl'>
                SENTECE LEARNING
            </div>
            <div class="studymenu" id='s'>
                SPEAKING
            </div>
            <div class="studymenu" id='gp'>
                GRAMMAR PLUS
            </div>
            <div class="studymenu" id='w'>
                WRITING
            </div>
            <div class="studymenu" id='pg'>
                PLAYING GAME
            </div>
            <div class="studymenu" id='p'>
                PROJECT
            </div>  
        `;
    } else if (booktype === 'Speaking') { //Speaking을 선택했을 때
        document.getElementById('bookselect').innerHTML = `
        <select name="bookname" id="bookname" class="bookname" onchange="addunit()">
            <option value="TE1">Theme English 1</option>
            <option value="TE2">Theme English 2</option>
            <option value="TE3">Theme English 3</option>
            <option value="TE4">Theme English 4</option>
            <option value="TE5">Theme English 5</option>
            <option value="TE6">Theme English 6</option>
            <option value="TTE1">Talk Talk English 1</option>
            <option value="TTE2">Talk Talk English 2</option>
            <option value="TTE3">Talk Talk English 3</option>
            <option value="TTE4">Talk Talk English 4</option>
        </select>
        `;

        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">
            Unit 13: <input type="checkbox" class="realcheckbox" name="unit" value="13">
            Unit 14: <input type="checkbox" class="realcheckbox" name="unit" value="14">
            Unit 15: <input type="checkbox" class="realcheckbox" name="unit" value="15">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
        `;

        document.getElementById('menudisplay').innerHTML = `
            <div class="studymenu" id='wl'>
                WORDS LEARNING
            </div>
            <div class="studymenu" id='sl'>
                SENTECE LEARNING
            </div>
            <div class="studymenu" id='s'>
                SPEAKING
            </div>
            <div class="studymenu" id='gp'>
                GRAMMAR PLUS
            </div>
            <div class="studymenu" id='w'>
                WRITING
            </div>
            <div class="studymenu" id='pg'>
                PLAYING GAME
            </div>
            <div class="studymenu" id='p'>
                PROJECT
            </div>  
        `;
    } else if (booktype === "Reader's Solution") { //Reader's Solution을 선택했을 때
        document.getElementById('bookselect').innerHTML = `
        <select name="bookname" id="bookname" class="bookname" onchange="addunit()">
            <option value="RS_1">Reader's Solution 1</option>
            <option value="RS_2">Reader's Solution 2</option>
            <option value="RS_3">Reader's Solution 3</option>
        </select>
        `;

        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">
            
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
        `;

        document.getElementById('menudisplay').innerHTML = `
            <div class="studymenu" id='wl'>
                WORDS LEARNING
            </div>
            <div class="studymenu" id='sl'>
                SENTECE LEARNING
            </div>
            <div class="studymenu" id='s'>
                SPEAKING
            </div>
            <div class="studymenu" id='gp'>
                GRAMMAR PLUS
            </div>
            <div class="studymenu" id='w'>
                WRITING
            </div>
            <div class="studymenu" id='pg'>
                PLAYING GAME
            </div>
            <div class="studymenu" id='p'>
                PROJECT
            </div>  
        `;
    } else if (booktype === 'Grammar') { //Grammar을 선택했을 때
        document.getElementById('bookselect').innerHTML = `
        <select name="bookname" id="bookname" class="bookname" onchange="addunit()">
            <option value="0">Grammar Start 1</option>
            <option value="1">Grammar Start 2</option>
            <option value="2">Grammar Jump 1</option>
            <option value="3">Grammar Jump 2</option>
            <option value="4">Grammar Jump 3</option>
            <option value="5">Grammar Jump 4</option>
            <option value="6">Grammar Gateway 1</option>
            <option value="7">Grammar Gateway 2</option>
            <option value="8">Grammar Gateway 3</option>
        </select>
        `;

        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">
            Unit 13: <input type="checkbox" class="realcheckbox" name="unit" value="13">
            Unit 14: <input type="checkbox" class="realcheckbox" name="unit" value="14">
            Unit 15: <input type="checkbox" class="realcheckbox" name="unit" value="15">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
        `;

        document.getElementById('menudisplay').innerHTML = `
            <div class="studymenu" id='wl'>
                WORDS LEARNING
            </div>
            <div class="studymenu" id='sl'>
                SENTECE LEARNING
            </div>
            <div class="studymenu" id='s'>
                SPEAKING
            </div>
            <div class="studymenu" id='gp'>
                GRAMMAR PLUS
            </div>
            <div class="studymenu" id='w'>
                WRITING
            </div>
            <div class="studymenu" id='pg'>
                PLAYING GAME
            </div>
            <div class="studymenu" id='p'>
                PROJECT
            </div>  
        `;
    } else if (booktype === 'AIOL') { 
        document.getElementById('bookselect').innerHTML = `
        <select name="bookname" id="bookname" class="bookname" onchange="addunit()">
            <option value="AIOL-1">All in One Listening 1</option>
            <option value="AIOL-2">All in One Listening 2</option>
            <option value="AIOL-3">All in One Listening 3</option>
        </select>
        `;

        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">

            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
        `;

        document.getElementById('menudisplay').innerHTML = `
            <div class="studymenu" id='wl'>
                WORDS LEARNING
            </div>
            <div class="studymenu" id='sl'>
                SENTECE LEARNING
            </div>
            <div class="studymenu" id='s'>
                SPEAKING
            </div>
            <div class="studymenu" id='gp'>
                GRAMMAR PLUS
            </div>
            <div class="studymenu" id='w'>
                WRITING
            </div>
            <div class="studymenu" id='pg'>
                PLAYING GAME
            </div>
            <div class="studymenu" id='p'>
                PROJECT
            </div>  
        `;
    }else {

    }
}

function addunit() {
    let booktype = document.getElementById('booktype').value;
    let bookselect = document.getElementById('bookname').value;

    if ((booktype === 'Reading Town') && (bookselect === 'RT130-1' || bookselect === 'RT130-2' || bookselect === 'RT130-3')) {
        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
        `;
    } else if(booktype === "Reader's Solution"){
        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
    `; 
    } else if(booktype === "Power Voca"){
        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">
            Unit 13: <input type="checkbox" class="realcheckbox" name="unit" value="13">
            Unit 14: <input type="checkbox" class="realcheckbox" name="unit" value="14">
            Unit 15: <input type="checkbox" class="realcheckbox" name="unit" value="15">
            Unit 16: <input type="checkbox" class="realcheckbox" name="unit" value="16">
            Unit 17: <input type="checkbox" class="realcheckbox" name="unit" value="17">
            Unit 18: <input type="checkbox" class="realcheckbox" name="unit" value="18">
            Unit 19: <input type="checkbox" class="realcheckbox" name="unit" value="19">
            Unit 20: <input type="checkbox" class="realcheckbox" name="unit" value="20">
            Unit 21: <input type="checkbox" class="realcheckbox" name="unit" value="21">
            Unit 22: <input type="checkbox" class="realcheckbox" name="unit" value="22">
            Unit 23: <input type="checkbox" class="realcheckbox" name="unit" value="23">
            Unit 24: <input type="checkbox" class="realcheckbox" name="unit" value="24">
            Unit 25: <input type="checkbox" class="realcheckbox" name="unit" value="25">
            Unit 26: <input type="checkbox" class="realcheckbox" name="unit" value="26">
            Unit 27: <input type="checkbox" class="realcheckbox" name="unit" value="27">
            Unit 28: <input type="checkbox" class="realcheckbox" name="unit" value="28">
            Unit 29: <input type="checkbox" class="realcheckbox" name="unit" value="29">
            Unit 30: <input type="checkbox" class="realcheckbox" name="unit" value="30">
            Unit 31: <input type="checkbox" class="realcheckbox" name="unit" value="31">
            Unit 32: <input type="checkbox" class="realcheckbox" name="unit" value="32">
            Unit 33: <input type="checkbox" class="realcheckbox" name="unit" value="33">
            Unit 34: <input type="checkbox" class="realcheckbox" name="unit" value="34">
            Unit 35: <input type="checkbox" class="realcheckbox" name="unit" value="35">
            Unit 36: <input type="checkbox" class="realcheckbox" name="unit" value="36">
            Unit 37: <input type="checkbox" class="realcheckbox" name="unit" value="37">
            Unit 38: <input type="checkbox" class="realcheckbox" name="unit" value="38">
            Unit 39: <input type="checkbox" class="realcheckbox" name="unit" value="39">
            Unit 40: <input type="checkbox" class="realcheckbox" name="unit" value="40">
            Unit 41: <input type="checkbox" class="realcheckbox" name="unit" value="41">
            Unit 42: <input type="checkbox" class="realcheckbox" name="unit" value="42">
            Unit 43: <input type="checkbox" class="realcheckbox" name="unit" value="43">
            Unit 44: <input type="checkbox" class="realcheckbox" name="unit" value="44">
            Unit 45: <input type="checkbox" class="realcheckbox" name="unit" value="45">
            Unit 46: <input type="checkbox" class="realcheckbox" name="unit" value="46">
            Unit 47: <input type="checkbox" class="realcheckbox" name="unit" value="47">
            Unit 48: <input type="checkbox" class="realcheckbox" name="unit" value="48">
            Unit 49: <input type="checkbox" class="realcheckbox" name="unit" value="49">
            Unit 50: <input type="checkbox" class="realcheckbox" name="unit" value="50">
            Unit 51: <input type="checkbox" class="realcheckbox" name="unit" value="51">
            Unit 52: <input type="checkbox" class="realcheckbox" name="unit" value="52">
            Unit 53: <input type="checkbox" class="realcheckbox" name="unit" value="53">
            Unit 54: <input type="checkbox" class="realcheckbox" name="unit" value="54">
            Unit 55: <input type="checkbox" class="realcheckbox" name="unit" value="55">
            Unit 56: <input type="checkbox" class="realcheckbox" name="unit" value="56">
            Unit 57: <input type="checkbox" class="realcheckbox" name="unit" value="57">
            Unit 58: <input type="checkbox" class="realcheckbox" name="unit" value="58">
            Unit 59: <input type="checkbox" class="realcheckbox" name="unit" value="59">
            Unit 60: <input type="checkbox" class="realcheckbox" name="unit" value="60">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="61">
        `;
    }else if(booktype === "AIOL"){
        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
    `; 
    }else if(booktype === "Story Town"){
        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
        `;
    }else {
        document.getElementById('unitselect').innerHTML = `
            Unit 1: <input type="checkbox" class="realcheckbox" name="unit" value="1">
            Unit 2: <input type="checkbox" class="realcheckbox" name="unit" value="2">
            Unit 3: <input type="checkbox" class="realcheckbox" name="unit" value="3">
            Unit 4: <input type="checkbox" class="realcheckbox" name="unit" value="4">
            Unit 5: <input type="checkbox" class="realcheckbox" name="unit" value="5">
            Unit 6: <input type="checkbox" class="realcheckbox" name="unit" value="6">
            Unit 7: <input type="checkbox" class="realcheckbox" name="unit" value="7">
            Unit 8: <input type="checkbox" class="realcheckbox" name="unit" value="8">
            Unit 9: <input type="checkbox" class="realcheckbox" name="unit" value="9">
            Unit 10: <input type="checkbox" class="realcheckbox" name="unit" value="10">
            Unit 11: <input type="checkbox" class="realcheckbox" name="unit" value="11">
            Unit 12: <input type="checkbox" class="realcheckbox" name="unit" value="12">
            Unit 13: <input type="checkbox" class="realcheckbox" name="unit" value="13">
            Unit 14: <input type="checkbox" class="realcheckbox" name="unit" value="14">
            Unit 15: <input type="checkbox" class="realcheckbox" name="unit" value="15">
            전체유닛: <input type="checkbox" class="realcheckbox" name="unit" value="16">
        `;
    }
}

function changewords() {
    document.getElementById('question').innerHTML =
        `<div id="showtextanimation">
            <input type="button" value="PRESS THIS BUTTON" onclick="changewords()">
            REALLY????!!!
        </div>
        <input type="button" value="글자타이핑" onclick="typingletters()"><br>
        <div id="typing"></div>
    `;
    document.getElementById('progressbardiv').innerHTML =
        `<div class="progressbar">
            <div class="progress" id="progress">        </div>
        </div>`;
}

function typingletters(words) {

    typingTxt = "";
    typingBool = false;
    typingIdx = 0;

    document.getElementById('typing').innerHTML = "";

    typingTxt = words.split(""); // 한글자씩 자른다. 
    if (typingBool == false) { // 타이핑이 진행되지 않았다면 
        typingBool = true;
        tyInt = setInterval(typing, 100); // 반복동작 
    }

}

function typing() {
    if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
        document.getElementById('typing').append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
        typingIdx++;
    } else {
        clearInterval(tyInt); //끝나면 반복종료
    }
}

function progress(interval){
    let prg = document.getElementById('progress');
    let counter = 1;
    let progress = 1;
    
    prg.style.backgroundColor = "blueviolet";

    let id = setInterval(frame, interval); //40=4초
    let changecolor = false;

    function frame(){
        if(progress == 100 && counter == 100){
            clearInterval(id);           
        }else{
            progress += 1;
            counter += 1;
            prg.style.width = progress + '%';
            prg.innerHTML = counter + '%';
            /*if(counter > 60){
                if(changecolor == true){
                    prg.style.backgroundColor = "red";
                    changecolor = false;
                }else{
                    prg.style.backgroundColor = "blueviolet";
                    changecolor = true;
                }
            }*/
        }
    }
}

function studystart(){
    let booktype = document.getElementById('booktype').value;
    let bookselect = document.getElementById('bookname').value;


    // 초기화 
    if(hspdata_JSON){
        hspdata_JSON.splice(0,hspdata_JSON.length);
    }
    if(studydata.length>1){
        studydata.splice(0,studydata.length);
    }
    
    //엑셀에서 데이타 불러와서 주어진 책의 유닛에 해당되는 부분을 저장
    if(booktype == 'Phonics'){

        recover = document.getElementById('playground').innerHTML;
        document.getElementById('playground').innerHTML = `<container>
        <div class="article1" id="title">
                <div>학습을 시작하기 위해서 교재와 유닛을 선택해 주세요.</div>
        </div>
        <div class="article2" id="main"></div>
        <div class="article3" id="sub"></div>
        <div class="article4" id="sbutton">
            <input class="realbutton" type="button" id="startstudy" value="학습시작" onclick="StartStudy()">
            <input class="realbutton" type="button" id="endstudy" value="학습끝" onclick="EndStudy()">
        </div>
        </container>`;
        Getunits();
        //document.getElementById('upperplayground').innerHTML = recover;

    }else if(booktype == 'Power Voca'){
        //데이타 불러와서 studydata 변수에 저장
        recover = document.getElementById('playground').innerHTML;

        let selectedunit = document.getElementsByName('unit');
        for(let i=0;i<selectedunit.length;i++){
            if(selectedunit[i].checked){
                choiceismade = true;
            }
        }

        if(choiceismade){
            pvsavestudydata();
            document.getElementById('content').innerHTML=`
                                    <h2>GO</h2>
                                    <h3>학습시작</h3>
                                `;
            //학습 시작
            document.getElementById('sb').setAttribute("onClick","playpv()");
            //주어진 책의 종류에 따른 학습 방식을 표시
        }else{
            alert("Choice has not been made!!");
            EndStudy();
        }
    }else{
        //데이타 불러와서 studydata 변수에 저장
        recover = document.getElementById('playground').innerHTML;

        let selectedunit = document.getElementsByName('unit');
        for(let i=0;i<selectedunit.length;i++){
            if(selectedunit[i].checked){
                choiceismade = true;
            }
        }

        if(choiceismade){
            savestudydata();
            document.getElementById('content').innerHTML=`
                                    <h2>GO</h2>
                                    <h3>학습시작</h3>
                                `;
            //학습시작
            document.getElementById('sb').setAttribute("onClick","playstory()");            
            //주어진 책의 종류에 따른 학습 방식을 표시
        }else{
            alert("Choice has not been made!!");
            EndStudy();
        }
    }

//최초 학습시간 기록용
if(totalfirst){
    totalfirst = false;
    let startTime = new Date();
    document.getElementById('totalstudytime').innerHTML = "<font color='red'>[학습시작]</font>"+startTime.getHours()+"시"+startTime.getMinutes()+"분"+startTime.getSeconds()+"초";
    StudyStartTime = startTime.getHours()*60*60+startTime.getMinutes()*60+startTime.getSeconds();
  }

    // 끝 => 결과 표시 [학습결과 저장] => 초기화면으로 돌아기기


}

function EndStudy(){
    document.getElementById('playground').innerHTML = recover;
    studywords.splice(0,studywords.length);
    choiceismade=false;
}

function pvsavestudydata(){
    let book_no = document.getElementById('bookname').value;
    let selectedunit = document.getElementsByName('unit');
    let notdone = true;

    // test 파일 불러와서 json 파일로 만들기
    let selectedFile = new XMLHttpRequest();
    selectedFile.open("GET","https://yooyoogithub.github.io/HSPlearning/data/pvmaindata.xlsx"); //파일명의 길이도 문제가 되는 것 같음. 짧게 유지
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
                        if(notdone){
                            sheet = 'W';
                            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                            let jsonexcelfile = JSON.stringify(rowObject, undefined, 4);
                            let jsonexcelfileparse = JSON.parse(jsonexcelfile);
                            hspdata_JSON = JSON.parse(jsonexcelfile);

                            if(selectedunit[(selectedunit.length-1)].checked){
                                for(let i=0 ; i < hspdata_JSON.length; i++){
                                    if(hspdata_JSON[i].book_no == book_no){
                                        studydata.push(hspdata_JSON[i]);
                                    }
                                }
                            }else{
                                for(let i=0 ; i < hspdata_JSON.length; i++){
                                    if(hspdata_JSON[i].book_no == book_no){
                                        for(let j=0;j<selectedunit.length;j++){
                                            if(selectedunit[j].checked && (hspdata_JSON[i].unit === (j+1))){
                                                studydata.push(hspdata_JSON[i]);
                                            }
                                        }
                                    }
                                }
                            }
                            notdone = false;
                        }
                    });
                }
            }
        }
    }
    //여기까지 파일 불러와서 jsonexcelfileparse에 저장 하기
}

function savestudydata(){
    let studybook = document.getElementById('bookname').value;
    let selectedunit = document.getElementsByName('unit');
    let notdone = true;

    // test 파일 불러와서 json 파일로 만들기
    let selectedFile = new XMLHttpRequest();
    selectedFile.open("GET","https://yooyoogithub.github.io/HSPlearning/data/maindata.xlsx"); //파일명의 길이도 문제가 되는 것 같음. 짧게 유지
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
                        
                        let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                        let jsonexcelfile = JSON.stringify(rowObject, undefined, 4);
                        let jsonexcelfileparse = JSON.parse(jsonexcelfile);
                        hspdata_JSON = JSON.parse(jsonexcelfile);

                        if(notdone){
                            sheet = 'hspdata';
                            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                            let jsonexcelfile = JSON.stringify(rowObject, undefined, 4);
                            let jsonexcelfileparse = JSON.parse(jsonexcelfile);
                            hspdata_JSON = JSON.parse(jsonexcelfile);

                            if(selectedunit[(selectedunit.length-1)].checked){
                                for(let i=0 ; i < hspdata_JSON.length; i++){
                                    if(hspdata_JSON[i].Book == studybook){
                                        studydata.push(hspdata_JSON[i]);
                                    }
                                }
                            }else{
                                for(let i=0 ; i < hspdata_JSON.length; i++){
                                    if(hspdata_JSON[i].Book == studybook){
                                        for(let j=0;j<selectedunit.length;j++){
                                            if(selectedunit[j].checked && (hspdata_JSON[i].Unit === (j+1))){
                                                studydata.push(hspdata_JSON[i]);
                                            }
                                        }
                                    }
                                }
                            }
                            notdone = false;
                        }
                    });
                }                
            }
        }
    }
    //여기까지 파일 불러와서 jsonexcelfileparse에 저장 하기
}

function playpv(){

    // playground의 속성변화
    // studydata에 배열 studydata[i].book_no , unit , type = (s-문장, w-단어, g-문법, e-표현) , eng , kor 와 studydata.length를 활용하여 학습
    let question = document.getElementById('question');
    let examples = document.getElementById('examples');

    wordslearning(0);
}

function playstory(){
    // playground의 속성변화
    // studydata에 배열 studydata[i].Book, Unit, Type, English, Korean 활용
    
    let question = document.getElementById('question');
    let examples = document.getElementById('examples');

    wordslearning(1);

    //typingletters("이것은 테스트 입니다."); //여기에 질문을 넣음.
    //examples.innerHTML = "보기 1,2,3";

    //progress(50);

    //problemaudiosource = 'words/ST1-1/eng/kind_eng.mp3';
    //playquestion();

    //myaudio.pause();
    //myaudio.currentTime=0;
    
}

function setVoiceList(){
    voices = window.speechSynthesis.getVoices();
}

function speechenglish(txt){

    setVoiceList();

    if(window.speechSynthesis.onvoiceschanged !== undefined){
        window.speechSynthesis.onvoiceschanged = setVoiceList;
    }

    if(!window.speechSynthesis){
        alert("음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요");
        return;
    }

    //let lang = 'ko-KR';
    let lang = 'en-US';
    let utterThis = new SpeechSynthesisUtterance(txt);

    utterThis.onend = function (event) {
        console.log('end');
    };

    utterThis.onerror = function(event) {
        console.log('error', event);
    };

    let voiceFound = false;

    for(let i = 0; i < voices.length ; i++) {
        if(voices[i].lang.indexOf(lang) >= 0 || voices[i].lang.indexOf(lang.replace('-', '_')) >= 0) {
            utterThis.voice = voices[i];
            voiceFound = true;
        }
    }
    
    if(!voiceFound) {
        console.log('voice not found');
    return;
    }

    utterThis.lang = lang;
    utterThis.pitch = 1.2;
    utterThis.rate = 0.8; //속도
    window.speechSynthesis.speak(utterThis);

    /*
    let first = setInterval(()=>{
        window.speechSynthesis.speak(utterThis);
    }, 2000);

    let second = setInterval(()=>{
        window.speechSynthesis.speak(utterThis);
    }, 4000);*/
}

function wordslearning(notpv){

    let question = document.getElementById('question');
    let examples = document.getElementById('examples');
    wl = document.getElementById('wl');

    wl.style.backgroundColor = "blueviolet";
    wl.style.color = "white";

    typingletters("다음 단어를 잘 따라 말하세요.");

    for(let i=0;i<studydata.length;i++){        
        if(notpv){
            if(studydata[i].Type == 'w'){
                studywords.push([[studydata[i].English],[studydata[i].Korean]]);
            }
        }else{
            studywords.push([[studydata[i].English],[studydata[i].Korean]]);
        }
    }
    loop = 0;

    speechenglish("Ready?");

    //이거 없애고 
    //wordsgame01(notpv); 

    // 여기서 부터 건너뛰기
    
    examples.innerHTML = '<div></div>';

    let si = setInterval(()=>{
            if(loop == studywords.length){
                clearInterval(si);
                // 단어 게임 호출
                typingletters("단어학습이 끝났습니다. 다시 하시려면 '다시하기'를 다음으로 넘어가려면 '다음'을 누르세요.");
                if(notpv){
                    examples.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다시하기" onclick="wordslearning(1)"><input class="realbutton" type="button" id="nextstudy" value="다음" onclick="wordsgame01(1)"><input class="realbutton" type="button" id="endstudy" value="학습마침" onclick="EndStudy()">';
                }else{
                    examples.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다시하기" onclick="wordslearning(0)"><input class="realbutton" type="button" id="endstudy" value="다음" onclick="wordsgame01(0)"><input class="realbutton" type="button" id="endstudy" value="학습마침" onclick="EndStudy()">';
                }

                // 문장 플레이할때 "?"는 제거해야 함.
            }
            examples.innerHTML = `<h1>${studywords[loop][0]}</h1><br>
                                <h1>${studywords[loop][1]}</h1>`;

            speechenglish(studywords[loop][0]);
            //problemaudiosource = `words/eng/${studywords[loop][0]}_eng.mp3`;
            //playquestion();
            progress(40);
            loop++;
    }, 4000);
      
}

function wordsgame01(notpv){
    let question = document.getElementById('question');
    let examples = document.getElementById('examples');

    typingletters("다음 한글 뜻에 맞는 영어를 선택하세요.");

    wordsanswer.splice(0,wordsanswer.length);

    if(studywords.length > 0){
        loop = 0;
        wordsgame01routine(notpv);
    }else{
        alert("학습할 단어가 없습니다.");
        examples.innerHTML = `  <input class="realbutton" type="button" id="startstudy" value="다시하기" onclick="wordsgame01(${notpv})">
                                <input class="realbutton" type="button" id="endstudy" value="다음학습" onclick="wordsgame02(${notpv}">
                                <input class="realbutton" type="button" id="endstudy" value="끝내기" onclick="EndStudy()">
                            `;
    }

}

function wordsgame01routine(notpv){

    let question = document.getElementById('question');
    let examples = document.getElementById('examples');
    let randq; //보기에 들어갈 영어단어 랜덤
    let question_kor; //문제의 한글을 담는 변수
    let answer; //정답의 영어를 답는 변수
    let q1, q2, q3, q4; //1,2,3,4번의 영어를 담는 변수

    if(loop >= studywords.length){
        alert("첫번째 단어의 학습게임이 끝났습니다.");
        examples.innerHTML = `  <input class="realbutton" type="button" id="startstudy" value="다시하기" onclick="wordsgame01(${notpv})">
                                <input class="realbutton" type="button" id="endstudy" value="다음학습" onclick="wordsgame02(${notpv})">
                                <input class="realbutton" type="button" id="endstudy" value="학습마침" onclick="EndStudy()">
                            `;
    }else{
        let strwhole = [];
        for(let i=0;i<studywords.length;i++){
            strwhole.push(studywords[i]);
        }
        question_kor = strwhole[loop][1]; //문제의 한글을 담는 변수        
        let randno = Math.floor(Math.random()*4)+1; //정답을 넣을 번호 랜덤

        if(randno == 1){
            answer = 1;
            q1 = strwhole[loop][0];
            strwhole.splice(loop,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q2 = strwhole[randq][0];
            strwhole.splice(randq,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q3 = strwhole[randq][0];
            strwhole.splice(randq,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q4 = strwhole[randq][0];
            strwhole.splice(randq,1);
        }else if(randno == 2){
            answer = 2;
            q2 = strwhole[loop][0];
            strwhole.splice(loop,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q1 = strwhole[randq][0];
            strwhole.splice(randq,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q3 = strwhole[randq][0];
            strwhole.splice(randq,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q4 = strwhole[randq][0];
            strwhole.splice(randq,1);
        }else if(randno == 3){
            answer = 3;
            q3 = strwhole[loop][0];
            strwhole.splice(loop,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q1 = strwhole[randq][0];
            strwhole.splice(randq,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q2 = strwhole[randq][0];
            strwhole.splice(randq,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q4 = strwhole[randq][0];
            strwhole.splice(randq,1);
        }else if(randno == 4){
            answer = 4;
            q4 = strwhole[loop][0];
            strwhole.splice(loop,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q1 = strwhole[randq][0];
            strwhole.splice(randq,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q2 = strwhole[randq][0];
            strwhole.splice(randq,1);
            randq = Math.floor(Math.random()*(strwhole.length-1))+1;
            q3 = strwhole[randq][0];
            strwhole.splice(randq,1);
        }else{

        }

        examples.innerHTML = `  <h1>${question_kor}</h1>
                                <hr>
                                <button class="smallqbutton" width="200px" height="190px" onclick="wordsgame01answerclick(${answer},1,${notpv})">${q1}</button>
                                <button class="smallqbutton" width="200px" height="190px" onclick="wordsgame01answerclick(${answer},2,${notpv})">${q2}</button>
                                <div></div>
                                <button class="smallqbutton" width="200px" height="190px" onclick="wordsgame01answerclick(${answer},3,${notpv})">${q3}</button>
                                <button class="smallqbutton" width="200px" height="190px" onclick="wordsgame01answerclick(${answer},4,${notpv})">${q4}</button>
                                <hr>
                                <input class="realbutton" type="button" id="startstudy" value="다시하기" onclick="wordsgame01(${notpv})">
                                <input class="realbutton" type="button" id="endstudy" value="다음학습" onclick="wordsgame02(${notpv})">
                                <input class="realbutton" type="button" id="endstudy" value="학습마침" onclick="EndStudy()">
                            `;
        loop++;
    }
}

function wordsgame01answerclick(answer,useranswer,notpv){

    if(answer!=0){
      if(answer==useranswer){
        totalproblem++;
        correctanswer++;
        document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
        alert("정답입니다~~^^");
        wordsgame01routine(notpv);
      }
      else{
        totalproblem++;
        document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
        alert("아쉬워요, 틀렸어요....ㅠㅠ");
        wordsgame01routine(notpv);
      }
    }
    else{
      alert("아직 문제가 출제되지 않았거나, 정답이 정해지지 않았습니다.");
    }

}

function wordsgame02(notpv){

    let question = document.getElementById('question');
    let examples = document.getElementById('examples');

    typingletters("다음 단어의 빈칸에 알맞은 알파벳을 선택하세요.");

    wordsanswer.splice(0,wordsanswer.length);

    if(studywords.length > 0){
        loop = 0;
        wordsgame02routine(notpv);
    }else{
        alert("학습할 단어가 없습니다.");
        EndStudy();
    }
}

function wordsgame02routine(notpv){

    let question = document.getElementById('question');
    let examples = document.getElementById('examples');

    if(loop >= studywords.length){
        alert("두번째 단어의 게임이 끝났습니다.");
        sentencelearning(notpv);
    }else{
        let strwhole = studywords;
        let str = studywords[loop][1][0];
        let qstr = questionstring(studywords[loop][0][0]);
        examples.innerHTML = `  <h1>${str}</h1><dr>
                                <h1>${qstr}</h1><dr>
                                <input class="realbutton" type="button" id="startstudy" value="다시하기" onclick="wordsgame02(${notpv})">
                                <input class="realbutton" type="button" id="endstudy" value="다음" onclick="checkanswer('${studywords[loop][0][0]}',${notpv})">
                                <input class="realbutton" type="button" id="endstudy" value="문장학습" onclick="sentencelearning(${notpv})">
                                <input class="realbutton" type="button" id="endstudy" value="학습마침" onclick="EndStudy()">
                            `;
        loop++;
    }
    
}

function checkanswer(correct, notpv){

    //사용자의 정답을 확인

    let ox = true;

    for(let i = 0; i < wordsanswer.length;i++){
        let tempid = 'selectedalphabet'+i;
        madequestion = madequestion.replace(`_`, document.getElementById(tempid).value);
    }

    console.log(correct.toUpperCase());
    console.log(madequestion.toUpperCase());

    if(correct.toUpperCase() != madequestion.toUpperCase()){
        ox = false;
    }

    if(ox){
        speechenglish(correct);
        alert("정답입니다.");
        totalproblem++;
        correctanswer++;
        document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
    }else{
        speechenglish(correct);
        alert(`틀렸습니다. 정답은 ${correct} 입니다.`);
        totalproblem++;
        document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
    }

    wordsanswer.splice(0,wordsanswer.length);
    wordsgame02routine(notpv);
}

function questionstring(str){
    let tempstr = str;    
    let randcount = Math.floor((str.length/100)*70);

    if(str.length == 1){
        tempstr = '_';
        randcound = 1;
    }else{
        for(let i=0;i<randcount;){
            let randnum = Math.floor(Math.random()*tempstr.length);
            if(tempstr[randnum] !=' '){
                if(tempstr[randnum] != '_'){
                    wordsanswer.push(tempstr[randnum]);
                    tempstr = tempstr.substr(0,randnum)+'_'+tempstr.substr(randnum+1);
                    i++;
                }
            }
        }
    }

    madequestion = tempstr;

    for(let i=0;i<randcount;i++){
        tempstr = tempstr.replace(`_`,      `<select id="selectedalphabet${i}" class="selectalphabet">
                                            <option value="none">?</option>
                                            <option value="a">a</option>
                                            <option value="b">b</option>
                                            <option value="c">c</option>
                                            <option value="d">d</option>
                                            <option value="e">e</option>
                                            <option value="f">f</option>
                                            <option value="g">g</option>
                                            <option value="h">h</option>
                                            <option value="i">i</option>
                                            <option value="j">j</option>
                                            <option value="k">k</option>
                                            <option value="l">l</option>
                                            <option value="m">m</option>
                                            <option value="n">n</option>
                                            <option value="o">o</option>
                                            <option value="p">p</option>
                                            <option value="q">q</option>
                                            <option value="r">r</option>
                                            <option value="s">s</option>
                                            <option value="t">t</option>
                                            <option value="u">u</option>
                                            <option value="v">v</option>
                                            <option value="w">w</option>
                                            <option value="x">x</option>
                                            <option value="y">y</option>
                                            <option value="z">z</option>
                                        </select>`);
    }

    return tempstr;
}

function sentencelearning(notpv){
    let question = document.getElementById('question');
    let examples = document.getElementById('examples');

    if(notpv){
        //Power Voca가 아니면

        typingletters("다음 문장을 잘 따라 말하세요.");

        for(let i=0;i<studydata.length;i++){        
                if(studydata[i].Type == 's'){
                    studysentence.push([[studydata[i].English],[studydata[i].Korean]]);
                }
        }

        loop = 0;
    
        speechenglish("Ready?");

        examples.innerHTML = '<div></div>';
    
        let si = setInterval(()=>{
                if(loop == studysentence.length){
                    clearInterval(si);
                    // 단어 게임 호출
                    typingletters("문장학습이 끝났습니다. 다시 하시려면 '다시하기'를 다음으로 넘어가려면 '다음'을 누르세요.");
                    if(notpv){
                        examples.innerHTML = `<input class="realbutton" type="button" id="startstudy" value="다시하기" onclick="sentencelearning(1)"><input class="realbutton" type="button" id="nextstudy" value="다음" onclick="sentencegame01(${notpv})"><input class="realbutton" type="button" id="endstudy" value="학습마침" onclick="EndStudy()">`;
                    }else{
                        examples.innerHTML = `<input class="realbutton" type="button" id="startstudy" value="다시하기" onclick="sentencelearning(0)"><input class="realbutton" type="button" id="endstudy" value="다음" onclick="sentencegame01(${notpv})"><input class="realbutton" type="button" id="endstudy" value="학습마침" onclick="EndStudy()">`;
                    }
    
                    // 문장 플레이할때 "?"는 제거해야 함.
                }
                examples.innerHTML = `<h3>${studysentence[loop][0]}</h3><br>
                                    <h3>${studysentence[loop][1]}</h3>`;
    
                speechenglish(studysentence[loop][0]);
                //problemaudiosource = `words/eng/${studywords[loop][0]}_eng.mp3`;
                //playquestion();
                progress(40);
                loop++;
        }, 5000);

    }else{
        //Power Voca가 맞으면
        alert("Power Voca는 문장학습을 지원하지 않습니다.");
        EndStudy();
    }
}

function sentencegame01(notpv){

    let question = document.getElementById('question');
    let examples = document.getElementById('examples');

    if(notpv){
        //Power Voca가 아니라면



    }else{
        //Power Voca 라면


    }

    EndStudy();

}