import React from 'react'


const Footer = () => {
  return (
    <div>
      {" "}
      <section class="row bg-dark">
        <div class="col-md-4 p-2 text-light">
          <h3 class="text-center">About Us</h3>
          <p class="text-start">
            Opulent Delight Crafts cozy moments, one cup at a time. Your
            neighborhood spot for exceptional coffee and warm community.
          </p>
          <p class="text-start">
            Some benefits of coffee include Enhanced Cognitive Function
            ,Protection Against Certain Diseases and is Rich in Antioxidants
            which can help protect the body's cells from damage caused by free
            radicals. This may contribute to overall health and well-being.
          </p>
        </div>
        <div class="col-md-4 p-2">
          <h3 class="text-light text-center">Contact Us</h3>
          <form action="">
            <input
              type="email"
              placeholder="Enter Your email"
              class="form-control"
            />
            <br />
            <textarea
              rows="7"
              placeholder="Leave a Comment"
              class="form-control"
            ></textarea>
          </form>

          <br />
          <input
            type="submit"
            value="Send Message"
            class="text-dark btn btn-outline-light bg-warning form-control"
          />
        </div>
        <div class="col-md-4 text-light">
          <h4 class="text-center text-light">Stay Connected</h4>
          <div class="d-flex justify-content-center gap-3 mt-3">
            <a href="" target="_blank" class="text-light fs-4">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="" target="_blank" class="text-light fs-4">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="" target="_blank" class="text-light fs-4">
              <i class="bi bi-twitter"></i>
            </a>
            <a
              href="https://wa.me/+254101409885"
              target="_blank"
              class="text-light fs-4"
            >
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
          <p class="mt-3 text-center">
            Follow us on social media to stay updated on the latest offers and
            tech trends.
          </p>
        </div>
      </section>
      <div class="bg-muted text-center p-3">
        <b class="text-light">
          Developed by Opulent Delights, &copy; 2025. All Rights Reserved.
        </b>
      </div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
      />
    </div>
  );
}

export default Footer