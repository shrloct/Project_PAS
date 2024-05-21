const { validationResult } = require('express-validator');

//belum paham, pahamin nanti aja
const runValidation = async (validation, req) => {
  await Promise.all(validation.map(v => v.run(req)))
  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    const errMsg = errors.array().map(e => ({ [e.path]: e.msg }) )
    return errMsg
}
};

module.exports = runValidation;
