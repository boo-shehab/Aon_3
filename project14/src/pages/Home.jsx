import { useEffect, useState } from "react"
import PopupForm from "../components/popupForm/PopupForm"
import usePostsStore from "../store/usePostsStore"
import PostCards from "../components/PostCards/PostCards"

const Home = () => {
    const {fetchPosts} = usePostsStore()
    const [isOpen, setIsOpen] = useState(false)
    const openPopup = () => setIsOpen(true)
    const closePopup = () => setIsOpen(false)
    
    useEffect(() => {
        const fetchData = async() => {
            try {
                await fetchPosts()
                
            }catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    
  return (
    <div className={`${isOpen ? "overflow-hidden" : ""}`}>
        
        <PopupForm isOpen={isOpen} onClose={closePopup} />
        <button onClick={openPopup} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Post</button>
        <PostCards />
    </div>
  )
}
export default Home