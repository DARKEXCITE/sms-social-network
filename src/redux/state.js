let state = {
    messagesPage: {
        dialogs: [
            {
                id: 1,
                name: 'Наполеон Бонапарт'
            },
            {
                id: 2,
                name: 'Александр Суворов'
            },
            {
                id: 3,
                name: 'Иосиф Сталин'
            }
        ],
        messages: [
            {
                id: 1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.',
                type: "recipient"
            },
            {
                id: 2,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.',
                type: "sender"
            },
            {
                id: 3,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.',
                type: "sender"
            },
            {
                id: 4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.',
                type: "recipient"
            },
            {
                id: 5,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.',
                type: "sender"
            },
            {
                id: 4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.',
                type: "recipient"
            },
            {
                id: 4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.',
                type: "recipient"
            },
            {
                id: 4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.',
                type: "sender"
            },
            {
                id: 4,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.',
                type: "sender"
            }
        ]
    },

    profilePage: {
        posts: [
            {
                id: 1,
                message: 'My name is Vladimir, i\'m live in Moscow!'
            },
            {
                id: 2,
                message: 'Hello world!'
            },
            {
                id: 3,
                message: 'Hello world! Thx for all!'
            },
            {
                id: 4,
                message: 'I eating eggs.'
            }
        ]
    }
}

export const addPost = (postMessage) => {
    const newPost = {
        id: 5,
        message: postMessage
    }
    state.profilePage.posts.push(newPost)
}

export default state;