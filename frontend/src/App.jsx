import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {
  
  return (
    <>
    <h1>WELCOME TO THE APP</h1>
    {/* "modal"	Opens a modal popup with the sign-in form (most common). */}
    {/* "redirect" (default)	Sends the user to the /sign-in route. */}
    <SignedOut>
    <SignInButton mode='modal'> 
    <button>Log In</button>
    </SignInButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton />
    </SignedIn>

     <UserButton />
    </>
  )
}

export default App
