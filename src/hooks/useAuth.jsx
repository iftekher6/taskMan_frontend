import React, { useContext } from 'react'

import { Context } from '../main';

function useAuth() {
  return useContext(Context)
}

export default useAuth;