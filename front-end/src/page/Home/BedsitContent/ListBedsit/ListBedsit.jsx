import React from 'react'
import Bedsit from './Bedsit/Bedsit'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
export default function ListBedsit() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap', /* Cho phép xuống dòng khi cần */
      gap: 5.5
    }}>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
      <Bedsit/>
    </Box>
  )
}
