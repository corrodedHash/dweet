c.width |= 0;
for (i = 0; i++ < (m = 40);)
    for (j = 0; j++ < m;) {
        z = 7 - 3 * C(2 * t + i);
        xPos =
            ((960 +
                (400 - 8 * j) * C(t + (2 * Math.PI * i) / m - j / (1 + 0.8 * S(0.5 * t)))) %
                1920) -
            0.5 * z;
        yPos = ((540 + (400 - 8 * j) * S(t + (2 * Math.PI * i) / m - j)) % 1080) - 0.5 * z;
        x.fillRect(xPos, yPos, z, z);
    }
