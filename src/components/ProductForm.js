import React, { useState, useEffect } from "react";

const ProductForm = (props) => {
    const initialFieldValues = {
        category: '',
        name: '',
        size: '',
        price: '',
        cost: '',
        stock: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.productObjects[props.currentId]
            })
    }, [props.currentId, props.productObjects])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        console.log({values})
        props.addOrEdit(values)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Category" name="category"
                    value={values.category}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Name" name="name"
                        value={values.name}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <select className="form-control" placeholder="Size (Optional)" name="size"
                        value={values.email}
                        onChange={handleInputChange}
                    >
                        <option value="">Size (Optional)</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>

                    </select>
                </div>
            </div>
            <div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" type="number" placeholder="Price" name="price"
                        value={values.price}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" type="number" placeholder="Cost" name="cost"
                        value={values.cost}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" type="number" placeholder="Amount in Stock" name="stock"
                        value={values.stock}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group">
                <input variant="primary" type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form >
    );
}

export default ProductForm;