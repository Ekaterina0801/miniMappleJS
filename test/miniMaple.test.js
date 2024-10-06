import {MiniMaple} from "../src/miniMaple";

test('Single unit', () => {
	let mm = new MiniMaple('4*x^3', 'x')
    expect(mm.calc()).toBe('12*x^2');
});

test('Another variable', () => {
	let mm = new MiniMaple('4*x^3+x', 'y')
    expect(mm.calc()).toBe('');
});

test('Empty string', () => {
	let mm = new MiniMaple('', 'x')
    expect(mm.calc()).toBe('');
});

test('Several units', () => {
	let mm = new MiniMaple('4*x^3+x^2+x', 'x')
    expect(mm.calc()).toBe('12*x^2+2*x+1');
});

test('Several variables', () => {
    let mm = new MiniMaple('-4*y*x^3-x*y^2', 'x')
    expect(mm.calc()).toBe('-12*y*x^2-y^2');
});


test('Negative coeff', () => {
	let mm = new MiniMaple('-4*x^3-x^2', 'x')
    expect(mm.calc()).toBe('-12*x^2-2*x');
});

test('Big power', () => {
    let mm = new MiniMaple('x^8', 'x')
    expect(mm.calc()).toBe('8*x^7');
});

test('Two digit-numbers', () => {
    let mm = new MiniMaple('-30*x', 'x')
    expect(mm.calc()).toBe('-30');
});

