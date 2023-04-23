function judeg(a, b, c, d) {
    const [x1, y1] = a;
    const [x2, y2] = b;
    const [x3, y3] = c;
    const [x4, y4] = d;
  
    // 判断线段 AB 和 CD 是否重合
    if (x1 === x2 && x2 === x3 && x3 === x4 && y1 === y2 && y2 === y3 && y3 === y4) {
      return false;
    }
  
    // 判断线段 AB 和 CD 是否有长度为 0 的情况
    if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
      return false;
    }
  
    const v1 = [x2 - x1, y2 - y1];
    const v2 = [x4 - x3, y4 - y3];
    const v3 = [x3 - x1, y3 - y1];
    const v4 = [x4 - x1, y4 - y1];
    const cross1 = crossProduct(v1, v3);
    const cross2 = crossProduct(v1, v4);
    const cross3 = crossProduct(v2, v3);
    const cross4 = crossProduct(v2, v4);
  
    return cross1 * cross2 < 0 && cross3 * cross4 < 0;
  }
  
  function crossProduct(v1, v2) {
    return v1[0] * v2[1] - v1[1] * v2[0];
  }
  
  console.log(judeg([0, 0], [3, 3], [0, 2], [2, 0])); // true
  