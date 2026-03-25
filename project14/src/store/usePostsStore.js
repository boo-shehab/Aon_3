import { create } from 'zustand'

const usePostsStore = create((set) => ({
  posts: [],
  loading: false,
  fetchPosts: async () => {
    try{
        const resposnse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resposnse.json();
        console.log('posts', data);
        
        set({posts: data})
    } catch (error) {
        console.log(error);
        
    }
  },
  addPost: (newPost) =>  set((state) => ({posts: [...state.posts, newPost]}) )
}))

export default usePostsStore