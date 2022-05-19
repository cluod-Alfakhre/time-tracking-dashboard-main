const timeBtn=document.querySelectorAll('.controle-panel .bottom h2');
const boxCon=document.querySelector('.boxes');

fetch('https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json').then((res)=>{
    return res.json();
}).then((d)=>{
    return d;
}).then((res)=>{
    getClicked(res);
    boxCon.childElementCount===0?document.querySelector('.weekly').click():' ';
})
function getClicked(array){
    timeBtn.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            switch (btn.className){
                case 'daily':
                    boxCon.innerHTML=''
                    createBoxes(array,'daily','day');
                    break;
                case 'monthly':
                    boxCon.innerHTML=''
                    createBoxes(array,'monthly','month');
                    break;
                case 'weekly':
                    boxCon.innerHTML=''
                    createBoxes(array,'weekly','week');
                    break;
            }
            btn.classList.add('active');
        })
    })
}
function createBoxes(array,time,timeTitle){
    timeBtn.forEach((btn)=>{
        btn.classList.remove('active')
    })
    array.forEach((el)=>{
        let box=`
        <div class="box ${el.title.toLowerCase()}">
            <div class="img"></div>
            <div class="text">
            <div class="header">
                <h4>${el.title}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="5" ><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" class="dot"/></svg>
            </div>
            <div class="content">
                <h3>${el.timeframes[time].current}hrs</h3>
                <p>last-${timeTitle} - ${el.timeframes[time].previous}hrs</p>
            </div>
            </div>
        </div>
        `;
        boxCon.innerHTML+=box;
    })
}
window.onload=()=>{document.querySelector('.weekly').click()};