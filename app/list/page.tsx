import Header from "../components/header"

export default function List() {

    const myList = ["Jackie", "Johnnie"]
    return (
        <div>
            <Header />
            <h1>Welcome to Lists</h1>
            <h2>List</h2>
            <p>
                {myList[1]}
            </p>
        </div>
    )
}