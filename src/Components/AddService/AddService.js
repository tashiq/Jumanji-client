import React, { useRef } from 'react';

const AddService = () => {
    const nameRef = useRef();
    const desRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    // const [success, setSucces] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const description = desRef.current.value;
        const newService = { name, description, img, price };
        e.target.reset();
        fetch('https://agile-thicket-23193.herokuapp.com/spots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data)
                    alert('Data inserted Successfully')
            })

    }
    return (
        <div className="pt-3 mt-5">

            <h1 className="text-dark text-center">Add an spot</h1>
            {/* inputs: img, name, description, price */}
            <form onSubmit={handleSubmit} className="w-50 mx-auto p-3 rounded text-center border m-4">
                <input type="text" name="" placeholder="Name of the service" id="" className="form-control mt-2" ref={nameRef} required />
                <textarea className="form-control mt-2" ref={desRef} required placeholder="Description">

                </textarea>
                <input type="text" name="price" className="form-control mt-2" placeholder="Price" id="" ref={priceRef} required />
                <input type="text" name="image" placeholder="Image URL" id="" className="form-control mt-2" ref={imgRef} required />
                <input type="submit" value="Add" className="btn btn-success mt-2 p-2" />
            </form>
        </div>
    );
};

export default AddService;