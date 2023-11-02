import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Paper,
  Typography,
} from '@mui/material'

import { useAuth0 } from '@auth0/auth0-react'

export function Home() {
  const { user, isAuthenticated } = useAuth0()

  return <>{isAuthenticated && <Box>Hello In  Home Page  </Box>}</>
}