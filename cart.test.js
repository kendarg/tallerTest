const {calcularTotoal} = require('./cart');
const {descuento} = require('./cart');

test(`Suma un total entre 10, 20, 30 debde de dar 60 `, () =>{
    expect(calcularTotoal([10,20,30])).toBe(60);
});

test(`Suma un total entre 5, 5 debe de dar 10 `, () =>{
    expect(calcularTotoal([5,5])).toBe(10);
});
test(`Descuento del 10% del 100% devde de dar 90%`, () =>{
    expect(descuento(100,10)).toBe(90);
});

test(`Descuento del 50% del 200% devde de dar 90%`, () =>{
    expect(descuento(200,50)).toBe(100);
});

test(`Suma nada debde de dar 0`, () =>{
    expect(calcularTotoal([])).toBe(0);
});
test(`Suma 46 debde de dar 46`, () =>{
    expect(calcularTotoal([46])).toBe(46);
});