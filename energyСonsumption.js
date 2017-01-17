var counter = confirm("У вас двотарифний лічильник?")
	, totalConsumption 	//Загальне споживання
	, y1				//Споживання 1 рівня
	, y2				//Споживання 2 рівня
	, y3				//Споживання 3 рівня
	, tariff = [0.714, 1.29, 1.638] //Діючі тарифи для трьох рівнів
	, levelСonsumption = [100, 600] //Границі рівнів споживання
	, nightСonsumption	//Споживання вночі
	, dayСonsumption	//Споживання вдень
	, coeffReduceCost	//Коефіцієнт здешевлення вартості
	, totalCost		//Загальна вартість електроенергії
	;

if (counter == true){
	dayСonsumption = + prompt("Будь ласка введіть денне споживання кВт * год.", ""),
	nightСonsumption = + prompt("Будь ласка введіть нічне споживання кВт * год.", ""),
	totalConsumption = dayСonsumption + nightСonsumption,
	coeffReduceCost = (nightСonsumption * 0.5 + dayСonsumption * 1) / totalConsumption;
} else {
	totalConsumption = prompt("Будь ласка введіть загальне споживання кВт * год.", ""),
	coeffReduceCost = 1;
}

if (totalConsumption - levelСonsumption[1] > 0){
	y3 = totalConsumption - levelСonsumption[1];
	y2 = levelСonsumption[1]-levelСonsumption[0];
	y1 = levelСonsumption[0];
} else if(totalConsumption - levelСonsumption[0] > 0){
	y3 = 0;
	y2 = totalConsumption - levelСonsumption[0];
	y1 = levelСonsumption[0];
} else {
	y3 = 0;
	y2 = 0;
	y1 = totalConsumption;
}

i1 = coeffReduceCost*y1*tariff[0];

i2 = coeffReduceCost*y2*tariff[1];

i3 = coeffReduceCost*y3*tariff[2];
console.log(i1, i2, i3);


totalCost = i1 + i2 + i3;

alert("Вартість спожитої електроенергії складає: "+totalCost.toFixed(2)+"грн.");