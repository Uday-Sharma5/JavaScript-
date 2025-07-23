var c=Buffer.alloc(10,1);
c[1]=255;
console.log(c);
c[2]=256; // In case of overflow, when a number exceeds the maximum binary size (e.g., 8 bytes), only the least significant bits (i.e., the rightmost bits) that fit within the allowed size are retained. The extra higher-order bits on the left are discarded.
console.log(c);