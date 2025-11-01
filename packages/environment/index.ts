import { env as envEosfin } from './eosfin'
import { env as envEosloan } from './eosloan'

function getEnv() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME

  if (appName === 'eosloan') {
    return envEosloan
  }

  return envEosfin
}

export const env = getEnv()
