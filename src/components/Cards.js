import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Cardsdata from "../data/CardsData";
import '../style/style.css';

function Cards() {
  const [data, setData] = useState(Cardsdata);

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Project</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((item, id) => {
          return (
            <>
              <Card 
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
              >
                <Card.Img 
                variant="top" 
                src={item.imgdata}
                style={{height: "16rem"}}
                className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{item.rname}</Card.Title>
                  <Card.Text>
                    Price: ₹{item.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                  <Button 
                  variant="primary"
                  className="col-lg-12"
                  >Add to Card</Button>
                  </div> 
                 
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
