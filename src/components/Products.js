import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm"
import firebaseDb from "../firebase";

const Products = () => {

    var [productObjects, setproductObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDb.child('products').on('value', snapshot => {
            if (snapshot.val() != null)
                setproductObjects({
                    ...snapshot.val()
                })
            else {
                setproductObjects({})
            }
        })
    }, [])

    const addOrEdit = obj => {
        console.log({obj})
        if (currentId == '') {
            firebaseDb.child('products').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else {

                    }
                        setCurrentId('')
                }
            )
        }
        else {
            firebaseDb.child(`products/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else {
                        
                    }
                        setCurrentId('')
                }
            )
        }
            
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`products/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else {
                        setCurrentId('')
                    }
                }
            )
        }
    }

    return (
        <>
            <div className="row">
               
                <div className="col-md-7">
                    <div className="navbar navbar-expand-lg navbar-light bg-white">
                        <div className="container container-fluid">
                            <h1 className="display-4 text-center">Products</h1>
                        </div>
                    </div>
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>Cost</th>
                                <th>Amount in Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(productObjects).map(id => {
                                    return <tr key={id}>
                                        <td>{productObjects[id].category}</td>
                                        <td>{productObjects[id].name}</td>
                                        <td>{productObjects[id].size}</td>
                                        <td>{productObjects[id].price}</td>
                                        <td>{productObjects[id].cost}</td>
                                        <td>{productObjects[id].stock}</td>
                                        <td>
                                            <a className="btn text-primary" onClick={() => { setCurrentId(id) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(id) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>

                <div className="col-md-5">
                    <div className="navbar navbar-expand-lg navbar-light bg-white">
                        <div className="container container-fluid">
                            <h1 className="display-4 text-center">ADD PRODUCT</h1>
                        </div>
                    </div>
                    <ProductForm {...({ addOrEdit, currentId, productObjects })} />
                </div>
            </div>
        </>
    );
}

export default Products;