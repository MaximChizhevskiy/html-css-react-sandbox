import React, {useState} from "react";

export default {
    title: 'React.memo demo'
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
        <UsersInMemo users={users}/>
    </div>
}