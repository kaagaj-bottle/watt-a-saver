const info = (...msg) => {
  console.log(msg)
}

const error = (...err) => {
  console.err(err)
}

export default { error, info }



