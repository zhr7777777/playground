const fn1 = source => {
    console.log('fn1 executed')
    source++
    return source
}

const fn2 = source => {
    console.log('fn2 executed')
    source++
    return source
}

const fn3 = source => {
    console.log('fn3 executed')
    source++
    return source
}

const fns = [fn1, fn2, fn3] // fn1( fn2( fn3() ) )

const compose = (i, src) => {
    if(i === fns.length - 1) {
        return fns[i](src)
    }
    const result = compose(i+1, src)
    return fns[i](result)
}

console.log(compose(0, 7))