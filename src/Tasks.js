
function Tasks(props) {

    const handleDelete = () => {
        props.handleDelete(props.id)
    }
    return (
        <>
            <div className='container p-3 text-white mt-3 ms-5 note'>
                <h3>{props.title}</h3>
                <br />
                <p>{props.task}</p>

                <button className="btn btn-outline-info" onClick={handleDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </>
    )

}
export default Tasks;