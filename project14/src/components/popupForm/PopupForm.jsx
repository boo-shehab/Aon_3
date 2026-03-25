import { useState } from 'react'
import styles from './popupForm.module.css'
import useUserStore from '../../store/useUserStore'
import usePostsStore from '../../store/usePostsStore'

const PopupForm = ({ isOpen, onClose, }) => {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
    })
    const user = useUserStore((state) => state.user)
    const addPost = usePostsStore((state) => state.addPost)
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    userId: user.id,
                }),
            })
            if (response.ok) {
                const data = await response.json()
                addPost(data)
            } else {
                throw new Error("Failed to submit post")
            }
        } catch (error) {
            console.log(error);
        }
    }
    if (!isOpen) return null
    return (
        <div className='w-screen h-screen bg-[#00000060] absolute overflow-hidden' onClick={onClose}>
            <div className={styles['popup-form']}>
                <button onClick={onClose} className="absolute top-4 right-4">X</button>
                <h2>post a new post</h2>
                <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input type="text" placeholder='title' value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
                    <textarea placeholder='body' value={formData.body} onChange={(e) => setFormData({...formData, body: e.target.value})} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default PopupForm