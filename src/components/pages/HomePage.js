import { Link } from "react-router-dom";
import { useGetProductQuery } from "../../services/accounts";
import { useEffect, useState } from "react";

function HomePage() {
  const pro = useGetProductQuery();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (pro.isSuccess && pro.data) {
      setProduct(pro.data);
    }
    console.log(pro);
    console.log(pro.data);
  }, [pro, pro.isSuccess, pro.data]);

  return (
    <>
    <div className="container my-4">
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/1400x300/?blogging" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1400x300/?blogging,nature" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1400x300/?blogging,website,love" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon btn-primary" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon btn-primary" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
      <div className="container">
        <div className="row">
        
       
          {pro.status === "fulfilled" ? (
            product.map((e) => (
              <div key={e.id} className="col-4">
                <div className="card mx-4 my-3" style={{ width: "16rem" , height : "350px"}}>
                  <img
                    // src="https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_1280.jpg"
                  src={`http://127.0.0.1:8000${e.product_img}`}
                 
                    style={{ width: "255px", height : "150px" }}
                    alt={e.product_name}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{e.product_name.slice(0, 20)}</h5>
                    <p className="card-text">
                      {e.product_discription.slice(0, 50)}
                    </p>
                    <p>Price Rs. {e.product_price}</p>
                    <Link to="/" className="btn btn-primary mx-2">
                      Add To Cart
                    </Link>
                    <Link to="/" className="btn btn-primary">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}

export default HomePage;

// {
//   "id": 1,
//   "product_name": "product111  1",
//   "product_img": "/media/product/images/pexels-photo-4622893.webp",
//   "product_discription": "hh",
//   "product_price": "54.00",
//   "created_at": "2023-09-11T16:05:55.603227Z",
//   "updated_at": "2023-09-11T16:05:55.603227Z",
//   "product_slug": "product111-1",
//   "category": 1
// },
// {
//   "id": 2,
//   "product_name": "qwer",
//   "product_img": "/media/product/images/pexels-photo-3746226.jpeg",
//   "product_discription": "3",
//   "product_price": "222.00",
//   "created_at": "2023-09-11T16:06:18.076360Z",
//   "updated_at": "2023-09-11T16:06:18.076360Z",
//   "product_slug": "qwer",
//   "category": 1
// }
