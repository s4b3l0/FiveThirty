export interface Credential {
  username?: string,
  email?: string,
  password?: string
}

export interface CredentialForm extends Credential {
  password2?: string
}
