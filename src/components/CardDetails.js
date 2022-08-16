import React from 'react';
import {Table} from 'react-bootstrap';

function CardDetails() {
  return (
   <>
   <div className='container mt-2'>
    <h2 className='text-center'>Item Details Page</h2>
    <section className="container mt-3">
        <div className='iteamsdetails'>
            <div className="items_img">
                <img 
                src="https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg"
                alt=""
                />
            </div>
            <div className="details">
                <Table>
                    <tr>
                        <td>
                            <p>
                                <strong>Restaurant</strong> : Massala Theory
                            </p>
                            <p>
                                <strong>Restaurant</strong> : Massala Theory
                            </p>
                            <p>
                                <strong>Restaurant</strong> : Massala Theory
                            </p>
                            <p>
                                <strong>Restaurant</strong> : Massala Theory
                            </p>
                        </td>
                    </tr>

                </Table>
            </div>
        </div>
    </section>
   </div>
   </>
  )
}

export default CardDetails