import React from 'react'
import ItemInfo from './ItemInfo';

export default function Profile() {

    const InformationOfCard = [
        {
            "id": 1,
            "name": "jiophone",
            "description": "India ka smartphone",
            "price": 1500,
            "image_url": null,
            "location": "nagar",
            "isavailable": true,
            "categId": 1,
            "userId": 2
        },
        {
            "id": 2,
            "name": "cosmos",
            "description": "by carl sagan",
            "price": 500,
            "image_url": null,
            "location": "nagar",
            "isavailable": true,
            "categId": 2,
            "userId": 2
        },
        {
            "id": 3,
            "name": "cosmos",
            "description": "by carl sagan",
            "price": 500,
            "image_url": null,
            "location": "nagar",
            "isavailable": true,
            "categId": 2,
            "userId": 1
        },

    ]
    return (
        <>
            <div className="container rounded bg-light mt-1 mb-3">
                <div className="row">
                    <div className="col-md-6  ">
                        <div className="p-3 py-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div class="row mt-2 ">
                                <div class="col-sm-8">
                                    <h6 class="mb-0">Full Name : Harsh Patil</h6>
                                </div>
                            </div>
                            <hr />
                            <div class="row mt-2">
                                <div class="col-sm-8">
                                    <h6 class="mb-0">Contact Number : 7020222815</h6>
                                </div>
                            </div>
                            <hr />
                            <div class="row mt-2">
                                <div class="col-sm-8">
                                    <h6 class="mb-0">Address : Trimurthi chowk, Katraj, Pune 413 564</h6>
                                </div>
                            </div>
                            <hr />
                            <div class="row mt-2">
                                <div class="col-sm-8">
                                    <h6 class="mb-0">Email ID : harshpatil@gmail.com</h6>
                                </div>
                            </div>
                            <hr />

                        </div>
                    </div>
                </div>
                <hr />
                <div className="container my-3">
                <h2 className="text-right">Favourite Products</h2>
                    <div className="row my-3">
                        {console.log("The size is ", InformationOfCard.length)}
                        {InformationOfCard.map((element) => {
                            return (
                                <div className="col-md-3" key={element.id}>
                                    <ItemInfo
                                        title={element.name}
                                        description={element.description}
                                        Imageurl={element.image_url}
                                        price={element.price}
                                        id={element.id}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>



                <hr />
                <div className="container my-3">
                <h2 className="text-right">My Products</h2>
                    <div className="row my-3">
                        {console.log("The size is ", InformationOfCard.length)}
                        {InformationOfCard.map((element) => {
                            return (
                                <div className="col-md-3" key={element.id}>
                                    <ItemInfo
                                        title={element.name}
                                        description={element.description}
                                        Imageurl={element.image_url}
                                        price={element.price}
                                        id={element.id}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>

        </>
    )
}
