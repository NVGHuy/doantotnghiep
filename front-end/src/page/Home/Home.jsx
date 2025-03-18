import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'
export default function Home() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar/>
    </Container>
  )
}
