function Special() {
  return (
    <>
      <section className="section special">
        <div className="container">
          <div
            className="special-banner"
            // style="background-image: url('./assets/images/special-banner.jpg')"
            style={{
              backgroundImage: "url('./assets/images/special-banner.jpg')",
            }}
          >
            <h2 className="h3 banner-title">New Trend Edition</h2>

            <a href="#" className="btn btn-link">
              <span>Explore All</span>

              <ion-icon
                name="arrow-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </a>
          </div>

          <div className="special-product">
            <h2 className="h2 section-title">
              <span className="text">Nike Special</span>

              <span className="line"></span>
            </h2>

            <ul className="has-scrollbar">
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
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Special;
