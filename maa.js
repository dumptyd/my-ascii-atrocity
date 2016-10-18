//jshint esversion:6
//jshint node:true
let charWidth = 5;
//space
let space = ['.', '.', '.', '.', '.'];
//A
let a1 = '..*..';
let a2 = '.*.*.';
let a3 = '*****';
let a4 = '*...*';
let a5 = '*...*';
let A = [a1, a2, a3, a4, a5];
//B
let b1 = '****.';
let b2 = '*...*';
let b3 = '****.';
let b4 = '*...*';
let b5 = '****.';
let B = [b1, b2, b3, b4, b5];
//C
let c1 = '*****';
let c2 = '*....';
let c3 = '*....';
let c4 = '*....';
let c5 = '*****';
let C = [c1, c2, c3, c4, c5];
//D
let d1 = '****.';
let d2 = '*...*';
let d3 = '*...*';
let d4 = '*...*';
let d5 = '****.';
let D = [d1, d2, d3, d4, d5];
//E
let e1 = '*****';
let e2 = '*....';
let e3 = '****.';
let e4 = '*....';
let e5 = '*****';
let E = [e1, e2, e3, e4, e5];
//F
let f1 = '*****';
let f2 = '*....';
let f3 = '****.';
let f4 = '*....';
let f5 = '*....';
let F = [f1, f2, f3, f4, f5];
//G
let g1 = '*****';
let g2 = '*....';
let g3 = '*..**';
let g4 = '*...*';
let g5 = '*****';
let G = [g1, g2, g3, g4, g5];
//H
let h1 = '*...*';
let h2 = '*...*';
let h3 = '*****';
let h4 = '*...*';
let h5 = '*...*';
let H = [h1, h2, h3, h4, h5];
//I
let i1 = '*****';
let i2 = '..*..';
let i3 = '..*..';
let i4 = '..*..';
let i5 = '*****';
let I = [i1, i2, i3, i4, i5];
//J
let j1 = '....*';
let j2 = '....*';
let j3 = '....*';
let j4 = '.*..*';
let j5 = '.****';
let J = [j1, j2, j3, j4, j5];
//K
let k1 = '*...*';
let k2 = '*..*.';
let k3 = '***..';
let k4 = '*..*.';
let k5 = '*...*';
let K = [k1, k2, k3, k4, k5];
//L
let l1 = '*....';
let l2 = '*....';
let l3 = '*....';
let l4 = '*....';
let l5 = '****.';
let L = [l1, l2, l3, l4, l5];
//M
let m1 = '*...*';
let m2 = '**.**';
let m3 = '*.*.*';
let m4 = '*...*';
let m5 = '*...*';
let M = [m1, m2, m3, m4, m5];
//N
let n1 = '*...*';
let n2 = '**..*';
let n3 = '*.*.*';
let n4 = '*..**';
let n5 = '*...*';
let N = [n1, n2, n3, n4, n5];
//O
let o1 = '*****';
let o2 = '*...*';
let o3 = '*...*';
let o4 = '*...*';
let o5 = '*****';
let O = [o1, o2, o3, o4, o5];
//P
let p1 = '*****';
let p2 = '*...*';
let p3 = '*****';
let p4 = '*....';
let p5 = '*....';
let P = [p1, p2, p3, p4, p5];
//Q
let q1 = '*****';
let q2 = '*...*';
let q3 = '*****';
let q4 = '...*.';
let q5 = '....*';
let Q = [q1, q2, q3, q4, q5];
//R
let r1 = '*****';
let r2 = '*...*';
let r3 = '*****';
let r4 = '*..*.';
let r5 = '*...*';
let R = [r1, r2, r3, r4, r5];
//S
let s1 = '*****';
let s2 = '*....';
let s3 = '*****';
let s4 = '....*';
let s5 = '*****';
let S = [s1, s2, s3, s4, s5];
//T
let t1 = '*****';
let t2 = '..*..';
let t3 = '..*..';
let t4 = '..*..';
let t5 = '..*..';
let T = [t1, t2, t3, t4, t5];
//U
let u1 = '*...*';
let u2 = '*...*';
let u3 = '*...*';
let u4 = '*...*';
let u5 = '*****';
let U = [u1, u2, u3, u4, u5];
//V
let v1 = '*...*';
let v2 = '*...*';
let v3 = '*...*';
let v4 = '.*.*.';
let v5 = '..*..';
let V = [v1, v2, v3, v4, v5];
//W
let w1 = '*...*';
let w2 = '*...*';
let w3 = '*.*.*';
let w4 = '**.**';
let w5 = '*...*';
let W = [w1, w2, w3, w4, w5];
//X
let x1 = '*...*';
let x2 = '.*.*.';
let x3 = '..*..';
let x4 = '.*.*.';
let x5 = '*...*';
let X = [x1, x2, x3, x4, x5];
//Y
let y1 = '*...*';
let y2 = '.*.*.';
let y3 = '..*..';
let y4 = '..*..';
let y5 = '..*..';
let Y = [y1, y2, y3, y4, y5];
//Z
let z1 = '*****';
let z2 = '...*.';
let z3 = '..*..';
let z4 = '.*...';
let z5 = '*****';
let Z = [z1, z2, z3, z4, z5];
//function
let draw = (str, repch = '*', repdot = ' ') => {
  str = str.toUpperCase();
  let out = '';
  for (let i = 0; i < charWidth; ++i) {
    for (let j = 0; j < str.length; ++j) {
      switch (str[j]) {
      case 'A':
        out += A[i];
        break;
      case 'B':
        out += B[i];
        break;
      case 'C':
        out += C[i];
        break;
      case 'D':
        out += D[i];
        break;
      case 'E':
        out += E[i];
        break;
      case 'F':
        out += F[i];
        break;
      case 'G':
        out += G[i];
        break;
      case 'H':
        out += H[i];
        break;
      case 'I':
        out += I[i];
        break;
      case 'J':
        out += J[i];
        break;
      case 'K':
        out += K[i];
        break;
      case 'L':
        out += L[i];
        break;
      case 'M':
        out += M[i];
        break;
      case 'N':
        out += N[i];
        break;
      case 'O':
        out += O[i];
        break;
      case 'P':
        out += P[i];
        break;
      case 'Q':
        out += Q[i];
        break;
      case 'R':
        out += R[i];
        break;
      case 'S':
        out += S[i];
        break;
      case 'T':
        out += T[i];
        break;
      case 'U':
        out += U[i];
        break;
      case 'V':
        out += V[i];
        break;
      case 'W':
        out += W[i];
        break;
      case 'X':
        out += X[i];
        break;
      case 'Y':
        out += Y[i];
        break;
      case 'Z':
        out += Z[i];
        break;
      case ' ':
        out += space[i];
        break;
      }
      out += space[i];
    }
    out += '\n';
  }
  if (repdot !== '.') out = out.replace(/\./g, repdot);
  if (repch !== '*') out = out.replace(/\*/g, repch);
  return out;
};
console.log(draw(process.argv[2], process.argv[3], process.argv[4]));