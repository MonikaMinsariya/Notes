import { useState } from 'react';

function KeepNotes(props) {
    const [expand, setExpand] = useState(false)
    const [notes, setNotes] = useState({
        title: '',
        task: '',
    })

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setNotes((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        })
    }
    const handleAdd = (e) => {
        e.preventDefault();
        props.handleAdd(notes)
        setNotes({
            title: '',
            task: '',
        })
    }

    return (
        <>
            <div className='container  w-50  p-3'>
                <form onSubmit={handleAdd}>
                    <div className='form-group p-3'>
                        {expand &&
                            <input type='text' className='form-control' placeholder='Title' value={notes.title} onChange={handleChange} name='title' />
                        }
                        <br />
                        <textarea rows='' className='form-control' column='' placeholder='Write Notes...' value={notes.task} onChange={handleChange} name='task' onClick={() => setExpand(true)} required />
                        {expand &&
                            <button className='btn btn-dark mt-3 p1' onSubmit={handleAdd} style={{ zIndex: '222' }}><i className="fa fa-plus"></i></button>
                        }
                    </div>
                </form>
                <ul>

                </ul>
            </div>
        </>

    )

}
export default KeepNotes;