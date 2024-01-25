import React, { useEffect, useState } from "react";
import ItemInfo from "./ItemInfo";

export default function Home() {
  const [InformationOfCard, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/prod/getAllprod")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // const InformationOfCard = [
  //     {
  //         "id": 1,
  //         "name": "jiophone",
  //         "description": "India ka smartphone",
  //         "price": 1500,
  //         "image_url": null,
  //         "location": "nagar",
  //         "isavailable": true,
  //         "categId": 1,
  //         "userId": 2
  //     },
  //     {
  //         "id": 2,
  //         "name": "cosmos",
  //         "description": "by carl sagan",
  //         "price": 500,
  //         "image_url": null,
  //         "location": "nagar",
  //         "isavailable": true,
  //         "categId": 2,
  //         "userId": 2
  //     },
  //     {
  //         "id": 3,
  //         "name": "cosmos",
  //         "description": "by carl sagan",
  //         "price": 500,
  //         "image_url": null,
  //         "location": "nagar",
  //         "isavailable": true,
  //         "categId": 2,
  //         "userId": 1
  //     },

  // ]

  return (
    <>
      <div className="container">
        <div className="row my-5">
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
    </>
  );
}

// name
// image url
// price
// description
