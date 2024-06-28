import { Container } from './styles'

export function Input({icon: Icon, ...rest}){ //só mostra o icone se ele existir
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <input {...rest} />

    </Container>
  )
}