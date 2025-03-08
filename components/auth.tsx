"use client"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export const SignIn = () => {
  const router = useRouter()

  return (
    <button
      className="bg-neutral-700 text-white p-2 rounded-md"
      onClick={async () => {
        await authClient.signIn.email({
          email: "orcdev@test.com",
          password: "password123",
          // callbackURL: "/dashboard" -> enable to redirect to dashboard
        })
        router.refresh()
      }}
    >
      Sign in
    </button>
  )
}

export const SignUp = () => {
  const router = useRouter()

  return (
    <button
      className="bg-neutral-700 text-white p-2 rounded-md"
      onClick={async () => {
        await authClient.signUp.email({
          email: "orcdev@test.com",
          password: "password123",
          name: "Orc Dev",
          // callbackURL: "/dashboard" -> enable to redirect to dashboard
        })
        router.refresh()
      }}
    >
      Sign up
    </button>
  )
}

export const SignOut = () => {
  const router = useRouter()

  return (
    <button
      className="bg-neutral-700 text-white p-2 rounded-md"
      onClick={async () => {
        await authClient.signOut()
        router.refresh()
      }}
    >
      Sign out
    </button>
  )
}
