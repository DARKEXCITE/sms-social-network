import React from "react";
import classes from './ProfileNewPost.module.css'

const ProfileNewPost = (props) => {
    const newPostElement = React.createRef()

    const addPost = () => {
        const postText = newPostElement.current.value
        console.log(postText)
    }

    return (
        <div className={ classes.profilePost }>
            <div className={ classes.postContent }>
                <div className={ classes.postMessage } ref={ newPostElement } contentEditable={true} suppressContentEditableWarning={true}>
                    Поздоровайтесь!
                </div>

                <div className={ classes.postMultimedia }>
                    <div className={ classes.multimediaItem }>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9957 13.5913V0L5.99871 1.94403V15.2713C5.43633 15.2713 4.69274 15.2938 3.28054 15.3443C0.618617 15.4342 0 16.5692 0 17.6648C0 19.0638 0.843569 20.1089 3.91166 19.9909C7.21095 19.8617 7.05473 17.2378 7.05473 15.3556V6.28157L18.9897 4.48363V13.5071C18.4273 13.5071 17.7462 13.5295 16.3277 13.5801C13.6658 13.67 13.0472 14.805 13.0472 15.9006C13.0472 17.2996 13.8595 18.3447 16.9339 18.2267C20.2456 18.0975 19.9957 15.4736 19.9957 13.5913Z" fill="#CACAEF"/>
                        </svg>
                    </div>

                    <div className={ classes.multimediaItem }>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 8.33334C16.1831 8.33334 17.1429 7.21355 17.1429 5.83334C17.1429 4.45314 16.1831 3.33334 15 3.33334C13.817 3.33334 12.8572 4.45314 12.8572 5.83334C12.8572 7.21355 13.817 8.33334 15 8.33334Z" fill="#CACAEF"/>
                            <path d="M18.75 0H1.25C0.553571 0 0 0.661458 0 1.47396V18.526C0 19.3385 0.553571 20 1.25 20H18.75C19.4464 20 20 19.3385 20 18.526V1.47396C20 0.661458 19.4464 0 18.75 0ZM14.1473 10.2969C14.0134 10.1146 13.808 9.97396 13.5759 9.97396C13.3482 9.97396 13.1875 10.099 13.0045 10.2708L12.1696 11.0938C11.9955 11.2396 11.8571 11.3385 11.6563 11.3385C11.4643 11.3385 11.2902 11.2552 11.1652 11.125C11.1205 11.0781 11.0402 10.9896 10.9732 10.9115L8.57143 7.88021C8.39286 7.64062 8.125 7.48958 7.82589 7.48958C7.52679 7.48958 7.25 7.66146 7.07589 7.89583L1.42857 15.8438V2.27604C1.47321 1.92187 1.70982 1.66667 2.01339 1.66667H17.9821C18.2902 1.66667 18.5402 1.93229 18.558 2.29167L18.5714 15.8542L14.1473 10.2969Z" fill="#CACAEF"/>
                        </svg>
                    </div>

                    <div className={ classes.multimediaItem }>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.25 7.49937H2.71154L19.1154 3.95752C19.524 3.87418 19.7885 3.45229 19.7115 3.01477L19.2837 0.650062C19.2067 0.21254 18.8125 -0.0687238 18.4038 0.0146138L0.610577 3.84814C0.201923 3.93148 -0.0625 4.35337 0.014423 4.78569L0.442308 7.15039C0.471154 7.29623 0.543269 7.42124 0.629808 7.52541C0.274038 7.58791 0 7.90043 0 8.30149V19.1979C0 19.6406 0.336538 20 0.75 20H19.25C19.6635 20 20 19.6406 20 19.1979V8.30149C20 7.85876 19.6635 7.49937 19.25 7.49937ZM9.91827 15.7342L7.48077 17.6249L8.41827 14.5831L12.3558 17.6249L8.99039 12.708L7.48077 17.6249L9.91827 15.7342Z" fill="#CACAEF"/>
                        </svg>
                    </div>

                    <div className={ classes.multimediaItem }>
                        <button onClick={ props.addPost('test') } className={ classes.multimediaBtn }>Опубликовать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileNewPost