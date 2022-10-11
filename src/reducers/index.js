import { combineReducers } from "redux";

const data = (posts = [] , { type, payload }) => {
    console.log(posts)
    switch(type) {
        case 'FETCH_DATA':
            return { posts : payload }
        case 'INCRESING_QTY' :
            return { posts : posts.posts.map(post => post.id === payload ? {...post, qty : Number(post.qty) + 1} : post)}
        case 'DECRESING_QTY' :
            return { posts : posts.posts.map(post => post.id === payload ? {...post, qty : post.qty <= 1 ? 1 : post.qty-1} : post)}
        case 'REMOVE_ITEM' :
            return { posts : posts.posts.filter(post => post.id !== payload)}
        case 'ADD_TO_WISHLIST' :
            return { posts : posts.posts.map(post => post.id === payload ? {...post, wishlist : !post.wishlist} : post )}
        default :
            return posts

    }
}

export default combineReducers({ data })