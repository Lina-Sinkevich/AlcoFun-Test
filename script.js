// Polina version

//Объявление переменных страниц
const homepage = document.getElementById('homepage');
const page1 = document.getElementById('firstq');

const page2_1 = document.getElementById('secondq1');
const page2_2 = document.getElementById('secondq2');

const page3_1 = document.getElementById('thirdq1');
const page3_2 = document.getElementById('thirdq2');
const page3_3 = document.getElementById('thirdq3');
const page3_4 = document.getElementById('thirdq4');

const page4_1 = document.getElementById('forthq1');
const page4_2 = document.getElementById('forthq2');
const page4_3 = document.getElementById('forthq3');
const page4_4 = document.getElementById('forthq4');
const page4_5 = document.getElementById('forthq5');
const page4_6 = document.getElementById('forthq6');
const page4_7 = document.getElementById('forthq7');
const page4_8 = document.getElementById('forthq8');

const page_res_1 = document.getElementById('res1');
const page_res_2 = document.getElementById('res2');
const page_res_3 = document.getElementById('res3');
const page_res_4 = document.getElementById('res4');
const page_res_5 = document.getElementById('res5');
const page_res_6 = document.getElementById('res6');
const page_res_7 = document.getElementById('res7');
const page_res_8 = document.getElementById('res8');
const page_res_9 = document.getElementById('res9');
const page_res_10 = document.getElementById('res10');
const page_res_11 = document.getElementById('res11');
const page_res_12 = document.getElementById('res12');
const page_res_13 = document.getElementById('res13');
const page_res_14 = document.getElementById('res14');
const page_res_15 = document.getElementById('res15');
const page_res_16 = document.getElementById('res16');


// Объявление кнопок

const but1a = document.getElementById('Choice1a');
const but1b = document.getElementById('Choice1b');

const but2_1a = document.getElementById('Choice2-1a');
const but2_1b = document.getElementById('Choice2-1b');
const but2_2a = document.getElementById('Choice2-2a');
const but2_2b = document.getElementById('Choice2-2b');

const but3_1a = document.getElementById('Choice3-1a');
const but3_1b = document.getElementById('Choice3-1b');
const but3_2a = document.getElementById('Choice3-2a');
const but3_2b = document.getElementById('Choice3-2b');
const but3_3a = document.getElementById('Choice3-3a');
const but3_3b = document.getElementById('Choice3-3b');
const but3_4a = document.getElementById('Choice3-4a');
const but3_4b = document.getElementById('Choice3-4b');

const but4_1a = document.getElementById('Choice4-1a');
const but4_1b = document.getElementById('Choice4-1b');
const but4_2a = document.getElementById('Choice4-2a');
const but4_2b = document.getElementById('Choice4-2b');
const but4_3a = document.getElementById('Choice4-3a');
const but4_3b = document.getElementById('Choice4-3b');
const but4_4a = document.getElementById('Choice4-4a');
const but4_4b = document.getElementById('Choice4-4b');

const but4_5a = document.getElementById('Choice4-5a');
const but4_5b = document.getElementById('Choice4-5b');
const but4_6a = document.getElementById('Choice4-6a');
const but4_6b = document.getElementById('Choice4-6b');
const but4_7a = document.getElementById('Choice4-7a');
const but4_7b = document.getElementById('Choice4-7b');
const but4_8a = document.getElementById('Choice4-8a');
const but4_8b = document.getElementById('Choice4-8b');

const startButton = document.getElementById('start-button');
const homeButtons = Array.from(document.getElementsByClassName('home'));

startButton.addEventListener('click',() => openNextPage(homepage,page1));

homeButtons.forEach((item) => {
    const parent = item.closest('section');
    item.addEventListener('click',() => openNextPage(parent,homepage))

})

//Переходы по кнопкам

//1 вопросы
but1a.addEventListener('click',() => openNextPage(page1,page2_1));
but1b.addEventListener('click',() => openNextPage(page1,page2_2));

//2 вопросы
but2_1a.addEventListener('click',() => openNextPage(page2_1,page3_1));
but2_1b.addEventListener('click',() => openNextPage(page2_1,page3_2));

but2_2a.addEventListener('click',() => openNextPage(page2_2,page3_3));
but2_2b.addEventListener('click',() => openNextPage(page2_2,page3_4));

//3 вопросы
but3_1a.addEventListener('click',() => openNextPage(page3_1,page4_1));
but3_1b.addEventListener('click',() => openNextPage(page3_1,page4_2));

but3_2a.addEventListener('click',() => openNextPage(page3_2,page4_3));
but3_2b.addEventListener('click',() => openNextPage(page3_2,page4_4));

but3_3a.addEventListener('click',() => openNextPage(page3_3,page4_5));
but3_3b.addEventListener('click',() => openNextPage(page3_3,page4_6));

but3_4a.addEventListener('click',() => openNextPage(page3_4,page4_7));
but3_4b.addEventListener('click',() => openNextPage(page3_4,page4_8));

//4 вопросы
but4_1a.addEventListener('click',() => openNextPage(page4_1,page_res_1));
but4_1b.addEventListener('click',() => openNextPage(page4_1,page_res_2));

but4_2a.addEventListener('click',() => openNextPage(page4_2,page_res_3));
but4_2b.addEventListener('click',() => openNextPage(page4_2,page_res_4));

but4_3a.addEventListener('click',() => openNextPage(page4_3,page_res_5));
but4_3b.addEventListener('click',() => openNextPage(page4_3,page_res_6));

but4_4a.addEventListener('click',() => openNextPage(page4_4,page_res_7));
but4_4b.addEventListener('click',() => openNextPage(page4_4,page_res_8));


but4_5a.addEventListener('click',() => openNextPage(page4_5,page_res_9));
but4_5b.addEventListener('click',() => openNextPage(page4_5,page_res_10));

but4_6a.addEventListener('click',() => openNextPage(page4_6,page_res_11));
but4_6b.addEventListener('click',() => openNextPage(page4_6,page_res_12));

but4_7a.addEventListener('click',() => openNextPage(page4_7,page_res_13));
but4_7b.addEventListener('click',() => openNextPage(page4_7,page_res_14));

but4_8a.addEventListener('click',() => openNextPage(page4_8,page_res_15));
but4_8b.addEventListener('click',() => openNextPage(page4_8,page_res_16));


//Functions
function openNextPage(prev,next){
    prev.style.display = 'none';
    next.style.display = 'flex';        
}


