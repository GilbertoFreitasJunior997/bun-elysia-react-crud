import { AuthLoginParams, AuthLoginResponse, AuthSignupParams, AuthSignupResponse } from './schemas';

import { apiPost } from '..';

const controller = 'auth';

export const authService = {
  login: (body: AuthLoginParams) => apiPost<AuthLoginResponse, AuthLoginParams>(controller, 'login', body),
  signup: (body: AuthSignupParams) => apiPost<AuthSignupResponse, AuthSignupParams>(controller, 'signup', body),
};
