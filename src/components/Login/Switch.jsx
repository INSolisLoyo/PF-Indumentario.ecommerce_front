import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import userStore from '../GlobalStoreZustand/UserStore'

export default function SesionSwitch() {

  const setSessionOpen = userStore((state) => state.setSessionOpen)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setSessionOpen(enabled);
  }, enabled)

  return (
    
    <Switch
    checked={enabled}
    onChange={setEnabled}
    className={`${enabled ? 'bg-primary' : 'bg-[#fae8e6]'}
       relative inline-flex items-center h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-[#f6d5d2] transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
  >
    <span
      aria-hidden="true"
      className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
        pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
    />
  </Switch>
  
    
  )
}
