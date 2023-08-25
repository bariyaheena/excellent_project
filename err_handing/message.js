const message = {
  register: {
    password : "Password less than 6 characters",
    created:"create Successfully ",
    Email:"email is not valid",
    NotCreat:"user not successful create"
    }
  }

  const statusCode = {
    success: 200,
    created: 201,
    notFound: 404,
    noContent: 204,
    badRequest: 400,
    unAuthorized: 401
  }

  module.exports = {
    message,
    statusCode
  }