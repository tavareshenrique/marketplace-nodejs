module.exports = {
  // Users
  UserAlreadyExists: { _id: 0, error: 'User already exists' },
  UserNotFound: { _id: 1, error: 'User not found' },
  UserInvalidPassword: { _id: 2, error: 'Invalid password' },

  // Token
  TokenNotProvided: { _id: 3, error: 'Token not provided' },
  TokenInvalid: { _id: 4, error: 'Token Invalid' },

  // Purchase
  ProductSold: { _id: 5, error: 'Product already sold' }
}
