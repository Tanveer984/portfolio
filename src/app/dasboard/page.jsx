"use client"
import useSWR from 'swr';
import './dasboard.scss'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';




export default function Desboard() {
  // const [data,setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [err,setError]  = useState(false);
  //  useEffect(()=>{
  //   const getData=async()=>{
  //     setLoading(!loading)
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,
  //     {cache:"no-store"
  //   })
  //   if(res.ok)setError(!err);

  //   const data = await res.json();
  //   setData(data)
  //   setLoading(loading);
  //   setError(false);
  //   }
  //   getData();
  //  },[]);
  // instead of using the useState and useEffect we will  use react query (swr)becasue it comes inbuild handling error,  loading functions.


  const session = useSession();
  const router = useRouter();



  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, mutate,error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

  console.log("🚀 ~ file: page.jsx:40 ~ Desboard ~ dḁta:", data)


  if (session.status === "loading") return <p>Loading...</p>
  if (session.status === "unauthenticated") router?.push('/dasboard/login')


  const handleSumbmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const userName = e.target[3].value;
    const content = e.target[4].value;
    console.log("🚀 ~ file: page.jsx:54 ~ handleSumbmit ~ cont̥ent:", content)

    try {
      await fetch('/api/posts', {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          userName
        })
      })
      mutate()
      e.target.reset()
    } catch (err) {
      console.log(error)
    }
  }


  const handleDelete = async(id)=>{
    console.log("id",id)
    try {
      await fetch(`/api/posts/${id}`,{
        method:"DELETE"
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === "authenticated") {

    return (
      <div className='mainDes_container'>
        <div className="posts">
          {isLoading ? "loading..." : data.map(post =>
            <div className="post" key={post._id}>

              <div className="postImage">
                <Image src={post.img} alt={post.title} height={100} width={100} />
              </div>
              <h2 className="postTitle">{post.title}</h2>
              <span className="postDelete" onClick={()=>handleDelete(post._id)}>
                X
              </span>
            </div>
          )}
        </div>
        <form action="" className="new" onSubmit={handleSumbmit}>
          <h1>add New Post</h1>
          <input type="text" placeholder='title' className='input' />
          <input type="text" placeholder='description' className='input' />
          <input type="text" placeholder='Image Url' className="input" />
          <input type="text" placeholder='author' className='input' />
          <textarea name="" id="" cols="30" rows="10" placeholder='detail post' className='textArea' />
          <button className='btn'>SEND</button>
        </form>
      </div>
    )
  }
}
