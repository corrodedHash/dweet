if (t === 0) { f = [1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1]; b = 0; v = 0 };
n = [...f];
for (i = 0; i++ < 96;) {
    n[i] = !!(110 & (1 << (f[i - 1] + f[i] * 2 + f[i + 1] * 4)));
    (n[i] ^ v) ? x.fillStyle = 'blue' : x.fillStyle = 'red'; x.fillRect(i * 20, b * 20, 20, 20);
}
f = n;
b++;
if (b == 1080 / 20) { b = 0; v = !v };
