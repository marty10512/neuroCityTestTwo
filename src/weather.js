function weather(html) {
  let req = new XMLHttpRequest();
  req.open('GET', html, false);
  req.setRequestHeader('X-Yandex-API-Key', 'cdef4f5e-2d4b-43ff-a952-96ae2674f7a3');
  req.send();

  if (req.status != 200) {
    alert(req.status + ': ' + req.statusText); 
  } else {
    let data = JSON.parse(req.responseText).fact;

    let temp = document.createElement('div');
    document.querySelector('.temp').innerHTML = '';
    temp.innerHTML = data.temp;
    document.querySelector('.temp').appendChild(temp);

    let feelsLike = document.createElement('div');
    document.querySelector('.feels-like').innerHTML = '';
    feelsLike.innerHTML = data.feels_like;
    document.querySelector('.feels-like').appendChild(feelsLike);

    let windSpeed = document.createElement('div');
    document.querySelector('.wind-speed').innerHTML = '';
    windSpeed.innerHTML = data.wind_speed;
    document.querySelector('.wind-speed').appendChild(windSpeed);

    let pressureMM = document.createElement('div');
    document.querySelector('.pressure-mm').innerHTML = '';
    pressureMM.innerHTML = data.pressure_mm;
    document.querySelector('.pressure-mm').appendChild(pressureMM);

    let humidity = document.createElement('div');
    document.querySelector('.humidity').innerHTML = '';
    humidity.innerHTML = data.humidity;
    document.querySelector('.humidity').appendChild(humidity);


  }
}

let msk = document.querySelector('.msk');
msk.addEventListener('click', function(){
  let req = new XMLHttpRequest();
  req.open('GET', 'https://api.weather.yandex.ru/v1/forecast?lat=55.75396&lon=37.620393', false);
  req.setRequestHeader('X-Yandex-API-Key', 'cdef4f5e-2d4b-43ff-a952-96ae2674f7a3');
  req.send();

  if (req.status != 200) {
    alert(req.status + ': ' + req.statusText); 
  } else {
    let data = JSON.parse(req.responseText).fact;

    let temp = document.createElement('div');
    document.querySelector('.temp').innerHTML = '';
    temp.innerHTML = data.temp;
    document.querySelector('.temp').appendChild(temp);

    let feelsLike = document.createElement('div');
    document.querySelector('.feels-like').innerHTML = '';
    feelsLike.innerHTML = data.feels_like;
    document.querySelector('.feels-like').appendChild(feelsLike);

    let windSpeed = document.createElement('div');
    document.querySelector('.wind-speed').innerHTML = '';
    windSpeed.innerHTML = data.wind_speed;
    document.querySelector('.wind-speed').appendChild(windSpeed);

    let pressureMM = document.createElement('div');
    document.querySelector('.pressure-mm').innerHTML = '';
    pressureMM.innerHTML = data.pressure_mm;
    document.querySelector('.pressure-mm').appendChild(pressureMM);

    let humidity = document.createElement('div');
    document.querySelector('.humidity').innerHTML = '';
    humidity.innerHTML = data.humidity;
    document.querySelector('.humidity').appendChild(humidity);


  }
});

let vrn = document.querySelector('.vrn');
vrn.addEventListener('click', function() {
  let req = new XMLHttpRequest();
  req.open('GET', 'https://api.weather.yandex.ru/v1/forecast?lat=51.4032246&lon=39.11058', false);
  req.setRequestHeader('X-Yandex-API-Key', 'cdef4f5e-2d4b-43ff-a952-96ae2674f7a3');
  req.send();

  if (req.status != 200) {
    alert(req.status + ': ' + req.statusText); 
  } else {
    let data = JSON.parse(req.responseText).fact;

    let temp = document.createElement('div');
    document.querySelector('.temp').innerHTML = '';
    temp.innerHTML = data.temp;
    document.querySelector('.temp').appendChild(temp);

    let feelsLike = document.createElement('div');
    document.querySelector('.feels-like').innerHTML = '';
    feelsLike.innerHTML = data.feels_like;
    document.querySelector('.feels-like').appendChild(feelsLike);

    let windSpeed = document.createElement('div');
    document.querySelector('.wind-speed').innerHTML = '';
    windSpeed.innerHTML = data.wind_speed;
    document.querySelector('.wind-speed').appendChild(windSpeed);

    let pressureMM = document.createElement('div');
    document.querySelector('.pressure-mm').innerHTML = '';
    pressureMM.innerHTML = data.pressure_mm;
    document.querySelector('.pressure-mm').appendChild(pressureMM);

    let humidity = document.createElement('div');
    document.querySelector('.humidity').innerHTML = '';
    humidity.innerHTML = data.humidity;
    document.querySelector('.humidity').appendChild(humidity);


  }
});

let spb = document.querySelector('.spb');
spb.addEventListener('click', function(){
  let req = new XMLHttpRequest();
  req.open('GET', 'https://api.weather.yandex.ru/v1/forecast?lat=59.57&lon=30.19', false);
  req.setRequestHeader('X-Yandex-API-Key', 'cdef4f5e-2d4b-43ff-a952-96ae2674f7a3');
  req.send();

  if (req.status != 200) {
    alert(req.status + ': ' + req.statusText); 
  } else {
    let data = JSON.parse(req.responseText).fact;

    let temp = document.createElement('div');
    document.querySelector('.temp').innerHTML = '';
    temp.innerHTML = data.temp;
    document.querySelector('.temp').appendChild(temp);

    let feelsLike = document.createElement('div');
    document.querySelector('.feels-like').innerHTML = '';
    feelsLike.innerHTML = data.feels_like;
    document.querySelector('.feels-like').appendChild(feelsLike);

    let windSpeed = document.createElement('div');
    document.querySelector('.wind-speed').innerHTML = '';
    windSpeed.innerHTML = data.wind_speed;
    document.querySelector('.wind-speed').appendChild(windSpeed);

    let pressureMM = document.createElement('div');
    document.querySelector('.pressure-mm').innerHTML = '';
    pressureMM.innerHTML = data.pressure_mm;
    document.querySelector('.pressure-mm').appendChild(pressureMM);

    let humidity = document.createElement('div');
    document.querySelector('.humidity').innerHTML = '';
    humidity.innerHTML = data.humidity;
    document.querySelector('.humidity').appendChild(humidity);


  }
});

let sochi = document.querySelector('.sochi');
sochi.addEventListener('click', function() {
  let req = new XMLHttpRequest();
  req.open('GET', 'https://api.weather.yandex.ru/v1/forecast?lat=43&lon=35.1315', false);
  req.setRequestHeader('X-Yandex-API-Key', 'cdef4f5e-2d4b-43ff-a952-96ae2674f7a3');
  req.send();

  if (req.status != 200) {
    alert(req.status + ': ' + req.statusText); 
  } else {
    let data = JSON.parse(req.responseText).fact;

    let temp = document.createElement('div');
    document.querySelector('.temp').innerHTML = '';
    temp.innerHTML = data.temp;
    document.querySelector('.temp').appendChild(temp);

    let feelsLike = document.createElement('div');
    document.querySelector('.feels-like').innerHTML = '';
    feelsLike.innerHTML = data.feels_like;
    document.querySelector('.feels-like').appendChild(feelsLike);

    let windSpeed = document.createElement('div');
    document.querySelector('.wind-speed').innerHTML = '';
    windSpeed.innerHTML = data.wind_speed;
    document.querySelector('.wind-speed').appendChild(windSpeed);

    let pressureMM = document.createElement('div');
    document.querySelector('.pressure-mm').innerHTML = '';
    pressureMM.innerHTML = data.pressure_mm;
    document.querySelector('.pressure-mm').appendChild(pressureMM);

    let humidity = document.createElement('div');
    document.querySelector('.humidity').innerHTML = '';
    humidity.innerHTML = data.humidity;
    document.querySelector('.humidity').appendChild(humidity);


  }
});