import Link from "next/link"
export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/users")
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {
        response.map((user : any) => (
          <div>
            {/*              5   */}
            <Link href={`${user.id}`}>
              <h1 className="text-7xl">
                {user.name} &nbsp; &nbsp; {user.id}
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  )
};