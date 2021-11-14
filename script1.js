var x = document.getElementById('inx');
var y = document.getElementById('iny');
var z = document.getElementById('inz');
let arr = [];
var sumSqX = 0;
var sumSqY = 0;
var sumXY = 0;
var sumXZ = 0;
var sumYZ = 0;
var sumX = 0;
var sumY = 0;
var sumZ = 0;
var sum1 = 0;
var k12 = 0;
var k13 = 0;
var k23 = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;

function add_points() {
    let point = [];
    point.push(Number(x.value), Number(y.value), Number(z.value));
    arr.push(point);
    document.getElementById('inx').value = '';
    document.getElementById('iny').value = '';
    document.getElementById('inz').value = '';
    sumSqX = 0;
    sumSqY = 0;
    sumXY = 0;
    sumXZ = 0;
    sumYZ = 0;
    sumX = 0;
    sumY = 0;
    sumZ = 0;
    sum1 = 0;
    for (var i = 0; i < arr.length; i++) {
        sumSqX = sumSqX + arr[i][0] * arr[i][0];
        sumSqY = sumSqY + arr[i][1] * arr[i][1];
        sumXY = sumXY + arr[i][0] * arr[i][1];
        sumXZ = sumXZ + arr[i][0] * arr[i][2];
        sumYZ = sumYZ + arr[i][1] * arr[i][2];
        sumX = Number(sumX) + Number(arr[i][0]);
        sumY = Number(sumY) + Number(arr[i][1]);
        sumZ = Number(sumZ) + Number(arr[i][2]);
        sum1 = sum1 + 1;
    }
}

function check() {
    document.querySelectorAll('.x_x')[0].value = sumSqX;
    document.querySelectorAll('.x_x')[1].value = sumSqX;
    document.querySelectorAll('.x_x')[2].value = sumSqX;
    document.querySelectorAll('.x_x')[3].value = sumSqX;
    document.querySelectorAll('.y_y')[0].value = sumSqY;
    document.querySelectorAll('.y_y')[1].value = sumSqY;
    document.querySelectorAll('.y_y')[2].value = sumSqY;
    document.querySelectorAll('.x_y')[0].value = sumXY;
    document.querySelectorAll('.x_y')[1].value = sumXY;
    document.querySelectorAll('.x_y')[2].value = sumXY;
    document.querySelectorAll('.x_y')[3].value = sumXY;
    document.querySelectorAll('.x_y')[4].value = sumXY;
    document.querySelectorAll('.x_y')[5].value = sumXY;
    document.querySelectorAll('.x_y')[6].value = sumXY;
    document.querySelectorAll('.x_z')[0].value = sumXZ;
    document.querySelectorAll('.x_z')[1].value = sumXZ;
    document.querySelectorAll('.x_z')[2].value = sumXZ;
    document.querySelectorAll('.x_z')[3].value = sumXZ;
    document.querySelectorAll('.x_z')[4].value = sumXZ;
    document.querySelectorAll('.y_z')[0].value = sumYZ;
    document.querySelectorAll('.y_z')[1].value = sumYZ;
    document.querySelectorAll('.y_z')[2].value = sumYZ;
    document.querySelectorAll('.x_1')[0].value = sumX;
    document.querySelectorAll('.x_1')[1].value = sumX;
    document.querySelectorAll('.x_1')[2].value = sumX;
    document.querySelectorAll('.x_1')[3].value = sumX;
    document.querySelectorAll('.x_1')[4].value = sumX;
    document.querySelectorAll('.x_1')[5].value = sumX;
    document.querySelectorAll('.x_1')[6].value = sumX;
    document.querySelectorAll('.y_1')[0].value = sumY;
    document.querySelectorAll('.y_1')[1].value = sumY;
    document.querySelectorAll('.y_1')[2].value = sumY;
    document.querySelectorAll('.y_1')[3].value = sumY;
    document.querySelectorAll('.y_1')[4].value = sumY;
    document.querySelectorAll('.z_1')[0].value = sumZ;
    document.querySelectorAll('.z_1')[1].value = sumZ;
    document.querySelectorAll('.n111')[0].value = sum1;
    document.querySelectorAll('.n111')[1].value = sum1;
    k12 = 0;
    k13 = 0;
    k23 = 0;
    k12 = (-1 * sumXY) / sumSqX;
    k13 = (-1 * sumX) / sumSqX;
    k23 = -1 * (sumY + k13 * sumXY) / (sumSqY + k12 * sumXY);
    x3 = ((sumZ + k13 * sumXZ) + k23 * (sumYZ + k12 * sumXZ)) / ((sum1 + k13 * sumX) + k23 * (sumY + k12 * sumX));
    x2 = (sumYZ + k12 * sumXZ - (sumY + k12 * sumX) * x3) / (sumSqY + k12 * sumXY);
    x1 = (sumXZ - sumXY * x2 - sumX * x3) / sumSqX;
    document.querySelectorAll('.k_12')[0].value = k12;
    document.querySelectorAll('.k_13')[0].value = k13;
    document.querySelectorAll('.k_23')[0].value = k23;
    document.querySelectorAll('.x3')[0].value = x3;
    document.querySelectorAll('.x2')[0].value = x2;
    document.querySelectorAll('.x1')[0].value = x1;
    document.querySelectorAll('.h3')[0].style = 'visibility: visible; color: #1CB520;';
    document.getElementById('span1').innerHTML = x1.toFixed(2);
    document.getElementById('span2').innerHTML = x2.toFixed(2);
    document.getElementById('span3').innerHTML = x3.toFixed(2);
    document.getElementById('span11').innerHTML = x1.toFixed(2);
    document.getElementById('span22').innerHTML = x2.toFixed(2);
    document.getElementById('span33').innerHTML = x3.toFixed(2);
    document.getElementById('span111').innerHTML = x1.toFixed(2);
    document.getElementById('span222').innerHTML = x2.toFixed(2);
    document.getElementById('span333').innerHTML = x3.toFixed(2);
    document.getElementById('span11_2').innerHTML = (x1 * 2).toFixed(2);
    document.getElementById('span22_2').innerHTML = (x2 * 2).toFixed(2);

    // var a = tf.scalar(x1);
    // var b = tf.scalar(x2);
    // var c = tf.scalar(x3);
    // var x_ = tf.variable(tf.tensor1d(arr[0]));
    // var y_ = tf.variable(tf.tensor1d(arr[1]));
    // var z_ = tf.variable(tf.tensor1d(arr[2]));
    // // f(x, y, z) = (a * x ^ 2 + b * y ^ 2 + c) / z
    // var f = () => a.mul(x_.square()).add(b.mul(y_.square())).add(c).div(z_).sum();
    // // df/dx = 2 * x * a / z,
    // // df/dy = 2 * y * b / z,
    // // df/dz = (a * x ^ 2 + b * y ^ 2 + c) / z ^ 2
    // const {value, grads} = tf.variableGrads(f);
    // Object.keys(grads).forEach(varName => grads[varName].print());

    var dudx = 0;
    var dudy = 0;
    var dudz = 0;

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        dudx = x1 * 2 * arr[i][0];
        dudy = x2 * 2 * arr[i][1];
        dudz = (x1 * Math.pow(arr[i][0], 2)
            + x2 * Math.pow(arr[i][1], 2) + x3) / Math.pow(arr[i][2], 2)
        console.log('du/dx = ', dudx);
        console.log('du/dy = ', dudy);
        console.log('du/dz = ', dudz);
        console.log('|grad(u)| = ', Math.sqrt(Math.pow(dudx, 2) + Math.pow(dudy, 2) + Math.pow(dudz, 2)));
    }
}

function s1() {
    if (document.getElementById('s1').checked) {
        document.getElementById('lr2').style = 'position: fixed; margin-left: 50%; visibility: visible;';
    }
    else {
        document.getElementById('lr2').style = 'position: fixed; margin-left: 50%; visibility: hidden;';
    }
}