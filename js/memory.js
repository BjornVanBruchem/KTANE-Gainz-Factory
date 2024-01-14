var inputPositionStage1 = document.getElementById('pos_stage_1');
var inputPositionStage2 = document.getElementById('pos_stage_2');
var inputPositionStage3 = document.getElementById('pos_stage_3');
var inputPositionStage4 = document.getElementById('pos_stage_4');
var inputLabelStage1 = document.getElementById('lbl_stage_1');
var inputLabelStage2 = document.getElementById('lbl_stage_2');
var inputLabelStage3 = document.getElementById('lbl_stage_3');
var inputLabelStage4 = document.getElementById('lbl_stage_4');

var textPositionStage1 = document.getElementsByClassName('txt_pos_stage_1');
var textPositionStage2 = document.getElementsByClassName('txt_pos_stage_2');
var textPositionStage3 = document.getElementsByClassName('txt_pos_stage_3');
var textPositionStage4 = document.getElementsByClassName('txt_pos_stage_4');
var textLabelStage1 = document.getElementsByClassName('txt_lbl_stage_1');
var textLabelStage2 = document.getElementsByClassName('txt_lbl_stage_2');
var textLabelStage3 = document.getElementsByClassName('txt_lbl_stage_3');
var textLabelStage4 = document.getElementsByClassName('txt_lbl_stage_4');

inputPositionStage1.addEventListener('input', e => {
    for (var t of textPositionStage1) {
        t.innerText = 'Position ' + e.target.value;
    }
});
inputPositionStage2.addEventListener('input', e => {
    for (var t of textPositionStage2) {
        t.innerText = 'Position ' + e.target.value;
    }
});
inputPositionStage3.addEventListener('input', e => {
    for (var t of textPositionStage3) {
        t.innerText = 'Position ' + e.target.value;
    }
});
inputPositionStage4.addEventListener('input', e => {
    for (var t of textPositionStage4) {
        t.innerText = 'Position ' + e.target.value;
    }
});

inputLabelStage1.addEventListener('input', e => {
    for (var t of textLabelStage1) {
        t.innerText = 'Label "' + e.target.value + '"';
    }
});
inputLabelStage2.addEventListener('input', e => {
    for (var t of textLabelStage2) {
        t.innerText = 'Label "' + e.target.value + '"';
    }
});
inputLabelStage3.addEventListener('input', e => {
    for (var t of textLabelStage3) {
        t.innerText = 'Label "' + e.target.value + '"';
    }
});
inputLabelStage4.addEventListener('input', e => {
    for (var t of textLabelStage4) {
        t.innerText = 'Label "' + e.target.value + '"';
    }
});