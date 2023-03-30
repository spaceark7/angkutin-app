import { Alert, AlertTitle } from '@mui/material'

interface Props {
  message: string
}

const ErrorAlert = ({ message }: Props) => {
  return (
    <Alert severity='error'>
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  )
}

export default ErrorAlert
