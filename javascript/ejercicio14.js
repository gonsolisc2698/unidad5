const title = document.getElementsByTagName('h1')[0];
title.style.color = 'red';
title.style.fontSize = '12px';


const title2 = document.getElementsByTagName('h2')[0];
console.log('t2', title2);

title2.classlist.remove('correcto');

title2.classlist.add("nuevaclase");