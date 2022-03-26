
function CreatePage() {
    return (
    <div>
        <h1 className="header">Hello NYC</h1>
        <p>This is a paragraph</p>
    </div>
    )
}

ReactDOM.render(<CreatePage />, 
    document.getElementById("root")
)