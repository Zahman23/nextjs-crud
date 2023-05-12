type Props = {
    promise: Promise<Posts[]>
}

export default async function UserPosts( { promise } : Props) {
    const posts = await promise

    const content = posts.map(post => {
        return(
            <div className="card w-96 bg-primary text-primary-content" key={post.id}>
              <div className="card-body">
                 <h2 className="card-title">{post.title}</h2>
                 <p>{post.body}</p>
                 <div className="card-actions justify-end">
                     <button className="btn">Buy Now</button>
                 </div>
                </div>
            </div>
        )
    })
  return (
    <div className="grid justify-center gap-y-4 lg:grid-cols-2 xl:grid-cols-3 lg:gap-y-5 ">
    {content}
    </div>
    )
}
