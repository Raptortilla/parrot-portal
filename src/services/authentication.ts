import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userPool from './userPool';

export const authenticate = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => resolve(result),
      onFailure: (err) => reject(err),
      newPasswordRequired: function (userAttributes, _requiredAttributes) {
        // Hack:
        // With this logic we bypass the "create a new password" logic
        // that is enforced by AWS when the user is created by an admin.
        //
        // After first login with the password configured by the admin,
        // we just simply set that exact same password as a new
        // password.

        // Props not accepted by completeNewPasswordChallenge method
        delete userAttributes.email_verified;
        delete userAttributes.email;
        delete userAttributes.phone_number_verified;

        user.completeNewPasswordChallenge(password, userAttributes, this);
      },
    });
  });
};

export const logout = () => {
  const user = userPool.getCurrentUser();
  user?.signOut();
  window.location.href = '/';
};

export const getCurrentUser = () => {
  const user = userPool.getCurrentUser();
  return user;
};
