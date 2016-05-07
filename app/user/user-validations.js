import {
  validator
}
from 'ember-cp-validations';


const userValidations = {
  username: {
    validators: [
      validator('presence', true),
      validator('length', {
        min: 4,
        max: 32
      })
    ]
  },
  name: {
    validators: [
      validator('presence', true),
      validator('length', {
        min: 4
      })
    ]
  }
  // email: [
  //   validator('presence', true),
  //   validator('format', { type: 'email' })
  // ],
  // emailConfirmation: [
  //   validator('presence', true),
  //   validator('confirmation', {
  //     on: 'email',
  //     message: '{description} do not match',
  //     description: 'Email addresses'
  //   })
  // ]
};

export default userValidations;
