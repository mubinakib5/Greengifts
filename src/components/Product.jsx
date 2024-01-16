function Product() {
  return (
    <>
      <section className="section product">
        <div className="container">
          <h2 className="h2 section-title">Bestsellers Products</h2>

          <ul className="filter-list">
            <li>
              <button className="filter-btn  active">All</button>
            </li>

            <li>
              <button className="filter-btn">Nike</button>
            </li>

            <li>
              <button className="filter-btn">Adidas</button>
            </li>

            <li>
              <button className="filter-btn">Puma</button>
            </li>

            <li>
              <button className="filter-btn">Bata</button>
            </li>

            <li>
              <button className="filter-btn">Apex</button>
            </li>
          </ul>

          <ul className="product-list">
            <li className="product-item">
              <div className="product-card" tabindex="0">
                <figure className="card-banner">
                  <img
                    src="./assets/images/product-1.jpg"
                    width="312"
                    height="350"
                    loading="lazy"
                    alt="Running Sneaker Shoes"
                    className="image-contain"
                  />

                  <div className="card-badge">New</div>

                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-1"
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">
                        Add to Cart
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-2"
                      >
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">
                        Add to Whishlist
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-3"
                      >
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">
                        Quick View
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-4"
                      >
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">
                        Compare
                      </div>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">
                      Men
                    </a>{" "}
                    /
                    <a href="#" className="card-cat-link">
                      Women
                    </a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Running Sneaker Shoes</a>
                  </h3>

                  <data className="card-price" value="180.85">
                    $180.85
                  </data>
                </div>
              </div>
            </li>

            <li className="product-item">
              <div className="product-card" tabindex="0">
                <figure className="card-banner">
                  <img
                    src="./assets/images/product-2.jpg"
                    width="312"
                    height="350"
                    loading="lazy"
                    alt="Leather Mens Slipper"
                    className="image-contain"
                  />

                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-1"
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">
                        Add to Cart
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-2"
                      >
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">
                        Add to Whishlist
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-3"
                      >
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">
                        Quick View
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-4"
                      >
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">
                        Compare
                      </div>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">
                      Men
                    </a>{" "}
                    /
                    <a href="#" className="card-cat-link">
                      Sports
                    </a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Leather Mens Slipper</a>
                  </h3>

                  <data className="card-price" value="190.85">
                    $190.85
                  </data>
                </div>
              </div>
            </li>

            <li className="product-item">
              <div className="product-card" tabindex="0">
                <figure className="card-banner">
                  <img
                    src="./assets/images/product-3.jpg"
                    width="312"
                    height="350"
                    loading="lazy"
                    alt="Simple Fabric Shoe"
                    className="image-contain"
                  />

                  <div className="card-badge">New</div>

                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-1"
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">
                        Add to Cart
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-2"
                      >
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">
                        Add to Whishlist
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-3"
                      >
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">
                        Quick View
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-4"
                      >
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">
                        Compare
                      </div>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">
                      Men
                    </a>{" "}
                    /
                    <a href="#" className="card-cat-link">
                      Women
                    </a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Simple Fabric Shoe</a>
                  </h3>

                  <data className="card-price" value="160.85">
                    $160.85
                  </data>
                </div>
              </div>
            </li>

            <li className="product-item">
              <div className="product-card" tabindex="0">
                <figure className="card-banner">
                  <img
                    src="./assets/images/product-4.jpg"
                    width="312"
                    height="350"
                    loading="lazy"
                    alt="Air Jordan 7 Retro "
                    className="image-contain"
                  />

                  <div className="card-badge"> -25%</div>

                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-1"
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">
                        Add to Cart
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-2"
                      >
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">
                        Add to Whishlist
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-3"
                      >
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">
                        Quick View
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-4"
                      >
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">
                        Compare
                      </div>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">
                      Men
                    </a>{" "}
                    /
                    <a href="#" className="card-cat-link">
                      Sports
                    </a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Air Jordan 7 Retro </a>
                  </h3>

                  <data className="card-price" value="170.85">
                    $170.85 <del>$200.21</del>
                  </data>
                </div>
              </div>
            </li>

            <li className="product-item">
              <div className="product-card" tabindex="0">
                <figure className="card-banner">
                  <img
                    src="./assets/images/product-5.jpg"
                    width="312"
                    height="350"
                    loading="lazy"
                    alt="Nike Air Max 270 SE"
                    className="image-contain"
                  />

                  <div className="card-badge">New</div>

                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-1"
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">
                        Add to Cart
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-2"
                      >
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">
                        Add to Whishlist
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-3"
                      >
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">
                        Quick View
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-4"
                      >
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">
                        Compare
                      </div>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">
                      Men
                    </a>{" "}
                    /
                    <a href="#" className="card-cat-link">
                      Women
                    </a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Nike Air Max 270 SE</a>
                  </h3>

                  <data className="card-price" value="120.85">
                    $120.85
                  </data>
                </div>
              </div>
            </li>

            <li className="product-item">
              <div className="product-card" tabindex="0">
                <figure className="card-banner">
                  <img
                    src="./assets/images/product-6.jpg"
                    width="312"
                    height="350"
                    loading="lazy"
                    alt="Adidas Sneakers Shoes"
                    className="image-contain"
                  />

                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-1"
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">
                        Add to Cart
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-2"
                      >
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">
                        Add to Whishlist
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-3"
                      >
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">
                        Quick View
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-4"
                      >
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">
                        Compare
                      </div>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">
                      Men
                    </a>{" "}
                    /
                    <a href="#" className="card-cat-link">
                      Women
                    </a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Adidas Sneakers Shoes</a>
                  </h3>

                  <data className="card-price" value="100.85">
                    $100.85
                  </data>
                </div>
              </div>
            </li>

            <li className="product-item">
              <div className="product-card" tabindex="0">
                <figure className="card-banner">
                  <img
                    src="./assets/images/product-7.jpg"
                    width="312"
                    height="350"
                    loading="lazy"
                    alt="Nike Basketball shoes"
                    className="image-contain"
                  />

                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-1"
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">
                        Add to Cart
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-2"
                      >
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">
                        Add to Whishlist
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-3"
                      >
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">
                        Quick View
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-4"
                      >
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">
                        Compare
                      </div>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">
                      Men
                    </a>{" "}
                    /
                    <a href="#" className="card-cat-link">
                      Sports
                    </a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Nike Basketball shoes</a>
                  </h3>

                  <data className="card-price" value="120.85">
                    $120.85
                  </data>
                </div>
              </div>
            </li>

            <li className="product-item">
              <div className="product-card" tabindex="0">
                <figure className="card-banner">
                  <img
                    src="./assets/images/product-8.jpg"
                    width="312"
                    height="350"
                    loading="lazy"
                    alt="Simple Fabric Shoe"
                    className="image-contain"
                  />

                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-1"
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-1">
                        Add to Cart
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-2"
                      >
                        <ion-icon name="heart-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-2">
                        Add to Whishlist
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-3"
                      >
                        <ion-icon name="eye-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-3">
                        Quick View
                      </div>
                    </li>

                    <li className="card-action-item">
                      <button
                        className="card-action-btn"
                        aria-labelledby="card-label-4"
                      >
                        <ion-icon name="repeat-outline"></ion-icon>
                      </button>

                      <div className="card-action-tooltip" id="card-label-4">
                        Compare
                      </div>
                    </li>
                  </ul>
                </figure>

                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">
                      Men
                    </a>{" "}
                    /
                    <a href="#" className="card-cat-link">
                      Women
                    </a>
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Simple Fabric Shoe</a>
                  </h3>

                  <data className="card-price" value="100.85">
                    $100.85
                  </data>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Product;
