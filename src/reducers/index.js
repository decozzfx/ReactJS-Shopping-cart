import { combineReducers } from "redux";

const data = (posts = [] , { type, payload }) => {
    console.log(posts)
    switch(type) {
        case 'FETCH_DATA':
            return { ...posts, posts : payload }
        case 'INCRESING_QTY' :
            return { ...posts, posts : posts.posts.map((post) => post.id === payload.id ? post.qty+1 : post)  }
        case 'DECRESING_QTY' :
            return { ...posts, posts : posts.posts.map((post) => post.id === payload.id ? post.qty-1 : post)  }
        default :
            return posts

    }
}

export default combineReducers({ data })