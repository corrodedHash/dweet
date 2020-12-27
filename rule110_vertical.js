if (t == 0) { f = 9439 * 2; b = 0; v = 0 };
n = 0
wi = 20;
for (i = -1; i++ < 27;) {
    w = !!(110 & (1 << ((f >> i) & 7)));
    x.fillStyle = (w ^ v) ? 'blue' : 'red'; x.fillRect(b * wi, i * 40, 20, 40);
    n |= w << (i + 1);
}
f = n;
b++;
if (b == 1920 / wi) { b = 0; v = !v };

// Golfed
for(t||(o=f=16386,b=0),n=i=0;i<27;)f>>i+1&1&&x.fillRect(20*b,40*i,20,40),n|=!!(110&1<<(f>>i&7))<<++i;f=n,95<++b&&(f=o+=2,c.width|=b=0);