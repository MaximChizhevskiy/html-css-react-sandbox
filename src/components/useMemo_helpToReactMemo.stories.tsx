import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo for React.memo'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersList = (props: { users: Array<string> }) => {
    console.log("Users rendered")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const UsersInMemo = React.memo(UsersList)

export const MainComponent = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(['Max', 'Daulet', 'Dauren'])

    const newArray = useMemo(() => {
        return users.filter((u) => u.toLowerCase().indexOf('e') > -1)
    }, [users]);

    const addUser = () => {
        setUsers([...users, 'newUser'])
    }
    return <div>
        <NewMessageCounter count={counter}/>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>Add</button>
        <UsersInMemo users={newArray}/>
    </div>
}
//========================================================================
//========================================================================

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<string[]>(['React', 'Redux', 'TypeScript'])


    /*const memoizedAddBook = useMemo(()=> {
        return () => {
            console.log('addBook')
            setBooks([...books, 'Vue'])
        }
    }, [books])*/

    const memoizedAddBook = useCallback(()=> {
            console.log('addBook')
            setBooks([...books, 'Vue'])
    }, [books])

    return <div>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
        <BooksInMemo addBook={memoizedAddBook}/>
    </div>
}


type BooksListPropsType = {
    //books: Array<string>,
    addBook: () => void
}

const BooksList = (props: BooksListPropsType) => {
    console.log("Books rendered")
    return <div>
        <button onClick={props.addBook}>Add</button>
        {/*{props.books.map((b, i) => <div key={i}>{b}</div>)}*/}
    </div>
}

const BooksInMemo = React.memo(BooksList)