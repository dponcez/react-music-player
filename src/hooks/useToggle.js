import React, { useState, useCallback } from 'react';

export const useToggle = (initialState) => {
  const [swtichOn, setSwitchOn] = useState(initialState);

  const toggle = useCallback(() => {
    setSwitchOn(state => !state)
  }, [])

  return [swtichOn, toggle]
}