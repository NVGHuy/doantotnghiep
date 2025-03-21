import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'
import BedsitBar from './BedsitBar/BedsitBar'
import BedsitContent from './BedsitContent/BedsitContent'
export default function Home() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar/>
      <BedsitBar/>
      <BedsitContent/>
    </Container>
  )
}
