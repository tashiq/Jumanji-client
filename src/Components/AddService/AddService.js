import React, { useRef } from 'react';
import { useState } from 'react';

const AddService = () => {
    const nameRef = useRef();
    const desRef = useRef();
    const [img, setImg] = useState(null);
    const priceRef = useRef();
    // const [success, setSucces] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        // const img = imgRef.current.value;
        const description = desRef.current.value;
        const formData = new FormData();
        // const newService = { name, description, img, price };
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('img', img);
        fetch('https://agile-thicket-23193.herokuapp.com/spots', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Spot Insertion successful')
                    e.target.reset();
                }

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
                <input name="image" type="file" id="" accept='images/*' className="form-control mt-2" onChange={(e) => setImg(e.target.files[0])} />
                <input type="submit" value="Add" className="btn btn-success mt-2 p-2" />
            </form>
        </div>
    );
};

export default AddService;