import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const homePage = () => {
    return (
        <section class="container profile">
        <div class="row">
          <!---About Me Section-->
            <article class="col-md-6">
                <img src="./Assets/Images/Uzo.jpeg" alt="Uzo-Profile-Picture" width="300px" height="300px">
                <h2 class="about-me" id="about">About Me</h2>
                <p>Welcome to my portfolio. My name is Uzo Obeki. I am a graduate of Kennesaw State University with a bachelor's degree in  
                  Marketing. I currently work as a Marketing Specialist for The Boston Consulting Group. My previous positions exposed 
                  me to coding with HTML and CSS, so I have decided to enroll in Georgia Tech's Full Stack Development bootcamp to 
                  strengthen the skills I have now and learn some new ones. This portfolio will be updated regularly, so be on the look out 
                  for all of the exciting changes to come!</p>
                </article>
            <!-- End About Me Section -->

            <!-- Slider -->
            <article class="col-md-6">
              <div class="card">
              <div class="card-header">
                Featured Work
              </div>
              <div class="card-body">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <a href="https://uzobeki.github.io/Access-Granted/"><img src="./Assets/Images/PG-Large.png" class="d-block w-100" alt="site-1" width="350px"></a>
                    </div>
                    <div class="carousel-item">
                      <a href="https://uzobeki.github.io/Weather-Dashboard/"><img src="./Assets/Images/WD-Large.png" class="d-block w-100" alt="site-2"></a>
                    </div>
                    <div class="carousel-item">
                      <a href="https://jpecheverryp.github.io/pass-me-the-aux/"><img src="./Assets/Images/PMTA- Large.png" class="d-block w-100" alt="site-3"></a>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </a>
                </div>
                <a href="./Pages/portfolio.html" class="btn btn-primary">Full Portfolio</a>
              </div>
              </div>
            </article>
            <!--End Slider-->
        </div>
      </section>
      <!--End Container--></article>
    )
}
export default homePage