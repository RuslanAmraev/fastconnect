var monday = [{lesson : "Философия", timeFrom : '9:35', timeTo: '10:25'},
			  {lesson : "Архитектура и организацтя комп. систем", timeFrom : '10:40', timeTo: '11:30'},
			  {lesson : "Технология программирования", timeFrom : '12:00', timeTo: '12:50'}]

var tuesday = [{lesson : "Физ. Культура", timeFrom : '9:35', timeTo: '10:25'},
			   {lesson : "Физ. Культура", timeFrom : '10:40', timeTo: '11:30'},
			   {lesson : "Модуль соц и полит знаний", timeFrom : '12:00', timeTo: '12:50'},
			   {lesson : "Модуль соц и полит знаний", timeFrom : '13:05', timeTo: '13:55'}]

var wendesday = [{lesson : "Философия", timeFrom : '10:40', timeTo: '11:30'},
			   {lesson : "Философия", timeFrom : '12:00', timeTo: '12:50'},
			   {lesson : "Мат логика", timeFrom : '13:05', timeTo: '13:55'}]

var thursday = [{lesson : "Архитектура и организацтя комп. систем", timeFrom : '9:35', timeTo: '10:25'},
			   {lesson : "Архитектура и организацтя комп. систем", timeFrom : '10:40', timeTo: '11:30'},
			   {lesson : "Мат логика", timeFrom : '12:00', timeTo: '12:50'},
			   {lesson : "Мат логика", timeFrom : '13:05', timeTo: '13:55'},
			   {lesson : "Технология программирования", timeFrom : '14:10', timeTo: '15:00'},
			   {lesson : "Технология программирования", timeFrom : '15:15', timeTo: '16:05'}]

var friday = [{lesson : "Модуль соц и полит знаний", timeFrom : '12:00', timeTo: '12:50'},
			 {lesson : "Модуль соц и полит знаний", timeFrom : '13:05', timeTo: '13:55'},
			 {lesson : "Модуль соц и полит знаний", timeFrom : '14:10', timeTo: '15:00'}]

var data = [monday, tuesday, wendesday, thursday, friday]

var date = new Date()


setLesson(dayChoose(data), date.getDay())


function timeEdit(time){
	let hour = time.slice(0, time.indexOf(':')) - 0
	let minute = time.slice(time.indexOf(':')+1) - 0
	return(hour*60+minute)
}

function dayChoose(data){
	return(data[date.getDay()-1])
}

function setLesson(data, day){
	if(day > 5 || day < 1){
		document.getElementById('now').append('Сегодня выходной')
	}else{
		data.map(el =>{
			if (timeEdit(el.timeFrom) <= date.getHours()*60+date.getMinutes() && timeEdit(el.timeTo) > date.getHours()*60+date.getMinutes()){
				document.getElementById('now').append(el.lesson)
				document.getElementById('time').append('До конца пары: ' + (timeEdit(el.timeTo) - (date.getHours()*60+date.getMinutes())) + ' минут')
			}
		})
	}
}