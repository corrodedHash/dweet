z = t * 2 * Math.PI
v = (v) => (C(z / v) + 1) * 75
x.fillStyle = `${R(v(3), v(4), v(5), 255)}`
for (j = 0; j < 7; ++j)
    for (i = 0; i <= 500; i += 15) {
        n = z / 10 - i / 500 * 2 + (S(z / 10) / 2 + .5) * j * 0.897
        x.fillRect(S(n) * i * 1.5 + 960, C(n) * i + 540, 30, 20)
    }

// boring version
z = t * 6.3
v = (C(z / 9) + 1) * 127
x.fillStyle = `${R(v, v, v, 50)}`
for (j = 0; j++ < 209;) {
    i = j / 7 << 4
    n = z / 9 + .9 * (j % 7) - i / 250
    x.fillRect(S(n) * i + 960, C(n) * i + 540, 30, 20)
}

// golfed
for(z=6.3*t,v=99*(C(z/9)+1),x.fillStyle=`${R(v,v,v,50)}`,j=0;j++<209;)i=j/7<<4,n=z/9+j%7*.9-i/250,x.fillRect(S(n)*i+960,C(n)*i+540,30,20);