'use strict';

import {Shape} from "./shapes.js";

const shape = document.getElementById('shape');
const color = document.getElementById('color');
const dropdown = document.querySelectorAll('option');

const makeBtn = document.querySelector('.make-btn');
const gridInfo = document.querySelector('.grid');
const shapeInfo = document.querySelector('.info');

const arr = [];
let count = 0;
makeBtn.addEventListener('click', () => {
    const shapes = new Shape (
        shape.value, 
        color.value,
        count
    );

    function createShape() {
        let div = document.createElement("div");
        div.classList.add('shape-item');
        
        arr.push(shapes.info); 
 
        if(shape.value == 'circle') {
            div.style.borderRadius = '50%';
        }

        switch(color.value) {
            case 'blue':
                div.style.backgroundColor = '#0099ff';
                gridInfo.append(div);
                break;
            case 'green':
                div.style.backgroundColor = '#00ff99'; 
                gridInfo.append(div);
                break;
            case 'orange':
                div.style.backgroundColor = '#ff9900'; 
                gridInfo.append(div);
                break;
            case 'pink':
                div.style.backgroundColor = '#ff0099'; 
                gridInfo.append(div);
                break;
            case 'purple':
                div.style.backgroundColor = '#9900ff'; 
                gridInfo.append(div);
                break;
            }
    }

    createShape();
    console.log(arr);
    ++count;
});

