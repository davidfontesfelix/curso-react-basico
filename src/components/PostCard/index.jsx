import './styles.css'

export default function PostCard(props) {
  return (
    <div className="post" >
      <img src={props.post.cover} alt={props.title} />
      <div key={props.post.id} className='post-content'>
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
      </div>
     </div>
  )
}