const kc = (c) => {
  const seq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  let [...q] = seq
  document.addEventListener('keyup', e => {
    if (q[0] === e.keyCode) {
      q.shift()
      if (!q.length) {
        c();
        [...q] = seq
      }
    } else {
      [...q] = seq
    }
  })
}

export default kc
