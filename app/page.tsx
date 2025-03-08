import { SignIn, SignOut, SignUp } from "@/components/auth"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function ServerComponent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return (
    <main className="flex flex-col gap-3 items-center justify-center p-10">
      {!session ? (
        <div className="flex gap-3">
          <SignIn />
          <SignUp />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <SignOut />
        </div>
      )}
    </main>
  )
}
