export default async function getUser(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if(!res.ok) throw new Error('Failed fetch data user')

    return res.json()
}
