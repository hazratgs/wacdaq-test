import React from 'react'
import { Container, Icon, Title, Button } from './styles'

interface IProps {
  handle: () => void
}

const ErrorMessage = (props: IProps) => {
  const { handle } = props

  return (
    <Container>
      <Icon src='/images/error.svg' alt='error' />
      <Title>При загрузке данных произошла ошибка</Title>
      <Button onClick={handle}>Повторить</Button>
    </Container>
  )
}

export default ErrorMessage
