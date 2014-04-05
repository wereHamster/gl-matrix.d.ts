// glMatrix 2.0
// -----------------------------------------------------------------------------

interface GlMatrixExport {
    glMatrix : GlMatrixStatic;

    mat2     : Mat2Static;
    mat3     : Mat3Static;
    mat4     : Mat4Static;
    quat     : QuatStatic;
    vec2     : Vec2Static;
    vec3     : Vec3Static;
    vec4     : Vec4Static;
}


interface GlMatrixStatic {
    setMatrixArrayType(type: any): void;
}



// mat2
// -----------------------------------------------------------------------------

interface Mat2 extends Float32Array {}
interface Mat2Static {
    adjoint(out, a)
    clone(a)
    copy(out, a)
    create()
    determinant(a)
    identity(out)
    invert(out, a)
    mul()
    multiply(out, a, b)
    rotate(out, a, rad)
    scale(out, a, v)
    str(mat)
    transpose(out, a)
}



// mat2d
// -----------------------------------------------------------------------------

interface Mat2d extends Float32Array {}
interface Mat2dStatic {
    clone(a)
    copy(out, a)
    create()
    determinant(a)
    identity(out)
    invert(out, a)
    mul()
    multiply(out, a, b)
    rotate(out, a, rad)
    scale(out, a, v)
    str(a)
    translate(out, a, v)
}



// mat3
// -----------------------------------------------------------------------------

interface Mat3 extends Float32Array {}
interface Mat3Static {
    adjoint(out, a)
    clone(a)
    copy(out, a)
    create()
    determinant(a)
    fromMat2d(out, a)
    fromMat4(out, a)
    fromQuat(out, q)
    identity(out)
    invert(out, a)
    mul()
    multiply(out, a, b)
    normalFromMat4(out, a)
    rotate(out, a, rad)
    scale(out, a, v)
    str(mat)
    translate(out, a, v)
    transpose(out, a)
}



// mat4
// -----------------------------------------------------------------------------

interface Mat4 extends Float32Array {}
interface Mat4Static {
    adjoint(out, a)
    clone(a)
    copy(out, a)
    create()
    determinant(a)
    fromQuat(out, q)
    fromRotationTranslation(out, q, v)
    frustum(out, left, right, bottom, top, near, far)
    identity(out)
    invert(out, a)
    lookAt(out, eye, center, up)
    mul()
    multiply(out, a, b)
    ortho(out, left, right, bottom, top, near, far)
    perspective(out, fovy, aspect, near, far)
    rotate(out, a, rad, axis)
    rotateX(out, a, rad)
    rotateY(out, a, rad)
    rotateZ(out, a, rad)
    scale(out, a, v)
    str(mat)
    translate(out, a, v)
    transpose(out, a)
}



// quat
// -----------------------------------------------------------------------------

interface Quat extends Float32Array {}
interface QuatStatic {
    add(out, a, b)
    calculateW(out, a)
    clone(a)
    conjugate(out, a)
    copy(out, a)
    create()
    dot(a, b)
    fromMat3(out, m)
    fromValues(x, y, z, w)
    identity(out)
    invert(out, a)
    len()
    length(a)
    lerp(out, a, b, t)
    mul()
    multiply(out, a, b)
    normalize(out, a)
    rotateX(out, a, rad)
    rotateY(out, a, rad)
    rotateZ(out, a, rad)
    scale(out, a, b)
    set(out, x, y, z, w)
    setAxisAngle(out, axis, rad)
    slerp(out, a, b, t)
    sqrLen()
    squaredLength(a)
    str(vec)
}



// vec2
// -----------------------------------------------------------------------------

interface Vec2 extends Float32Array {}
interface Vec2Static {
    add(out, a, b)
    clone(a)
    copy(out, a)
    create()
    cross(out, a, b)
    dist(a, b)
    distance(a, b)
    div()
    divide(out, a, b)
    dot(a, b)
    forEach(a, stride, offset, count, fn, arg)
    fromValues(x, y)
    len()
    length(a)
    lerp(out, a, b, t)
    max(out, a, b)
    min(out, a, b)
    mul()
    multiply(out, a, b)
    negate(out, a)
    normalize(out, a)
    random(out, scale)
    scale(out, a, b)
    scaleAndAdd(out, a, b, scale)
    set(out, x, y)
    sqrDist()
    sqrLen()
    squaredDistance(a, b)
    squaredLength(a)
    str(vec)
    sub(out, a, b)
    subtract(out, a, b)
    transformMat2(out, a, m)
    transformMat2d(out, a, m)
    transformMat3(out, a, m)
    transformMat4(out, a, m)
}



// vec3
// -----------------------------------------------------------------------------

interface Vec3 extends Float32Array {}
interface Vec3Static {
    add(out: Vec3, a, b): Vec3;
    clone(a)
    copy(out, a)
    create(): Vec3;
    cross(out, a, b)
    dist(a: Vec3, b: Vec3): number;
    distance(a: Vec3, b: Vec3): number;
    div()
    divide(out, a, b)
    dot(a, b)
    forEach(a, stride, offset, count, fn, arg)
    fromValues(x, y, z)
    len()
    length(a: Vec3): number;
    lerp(out, a, b, t)
    max(out, a, b)
    min(out, a, b)
    mul()
    multiply(out, a, b)
    negate(out, a)
    normalize(out: Vec3, a: Vec3): Vec3;
    random(out, scale)
    scale(out: Vec3, a: Vec3, b: number): Vec3;
    scaleAndAdd(out, a, b, scale)
    set(out, x, y, z)
    sqrDist()
    sqrLen()
    squaredDistance(a, b)
    squaredLength(a)
    str(vec)
    sub(out: Vec3, a: Vec3, b: Vec3): Vec3;
    subtract(out: Vec3, a: Vec3, b: Vec3): Vec3;
    transformMat3(out, a, m)
    transformMat4(out, a, m)
    transformQuat(out, a, q)
}



// vec4
// -----------------------------------------------------------------------------

interface Vec4 extends Float32Array {}
interface Vec4Static {
    add(out, a, b)
    clone(a)
    copy(out, a)
    create()
    dist(a, b)
    distance(a, b)
    div()
    divide(out, a, b)
    dot(a, b)
    forEach(a, stride, offset, count, fn, arg)
    fromValues(x, y, z, w)
    len()
    length(a)
    lerp(out, a, b, t)
    max(out, a, b)
    min(out, a, b)
    mul()
    multiply(out, a, b)
    negate(out, a)
    normalize(out, a)
    random(out, scale)
    scale(out, a, b)
    scaleAndAdd(out, a, b, scale)
    set(out, x, y, z, w)
    sqrDist()
    sqrLen()
    squaredDistance(a, b)
    squaredLength(a)
    str(vec)
    sub(out, a, b)
    subtract(out, a, b)
    transformMat4(out, a, m)
    transformQuat(out, a, q)
}
