import { useEffect, useState, useCallback } from 'react';
import { loadPosts } from '../../utils/load-posts'
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import './styles.css'
import TextInput from '../../components/TextInput';

export default function Home() {

  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(6)
  const [searchValue, setSearchValue] = useState('')


const  handleLoadPost = useCallback(async (page, postsPerPage) => {
  const postsAndPhotos = await loadPosts()
  
  setPosts(postsAndPhotos.slice(page, postsPerPage))
  setAllPosts(postsAndPhotos)
}, [] )

useEffect(() => {
  handleLoadPost(0, postsPerPage)
}, [handleLoadPost, postsPerPage])

  function loadMorePosts() {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }

  const noMorePosts = page + postsPerPage >= allPosts.length

  const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    :
    posts

  return (
    <section className='container'>
      <div className='search-container'>
        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )}
      {filteredPosts.length === 0 && (
        <p>não existem posts</p>
      )}
      <div className='button-container'>
        {!searchValue && (
          <Button text="Load more posts"
            disabled={noMorePosts}
            onClick={() => loadMorePosts()}
          />
        )}
      </div>
    </section>
  )
}

<<<<<<< HEAD
=======
// export class Home extends Component {




//   render() {


//     const filteredPosts = !!searchValue ?
//       allPosts.filter(post => {
//         return post.title.toLowerCase().includes(searchValue.toLowerCase())
//       })
//       :
//       posts

//     return (
     
//     );
//   }
// }
>>>>>>> origin/master

