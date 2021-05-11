import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
    return (
        <section class="container">
    <header class="portfolio">
      <h1>Portfolio</h1>
    </header>
    <div class="row row-1">
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img src="../Assets/Images/PasswordGenerator.png" class="card-img-top" alt="password-generator" height="150px"
            width="150px">
          <div class="card-body">
            <h5 class="card-title">Access Granted</h5>
            <p class="folio-text">A password generator built with Javascript.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Technology:</b> HTML, CSS, Javascript</li>
            <li class="list-group-item"><b>Contributors:</b> Uzo Obeki</li>
            <li class="list-group-item">01.07.2021</li>
          </ul>
          <div class="card-body">
            <a href="https://github.com/uzobeki/Access-Granted" class="card-link">Github Repo</a>
            <a href="https://uzobeki.github.io/Access-Granted/" class="card-link">Deployed App</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mt-2" style="width: 18rem;">
          <img src="../Assets/Images/Weather-Dash.png" class="card-img-top" alt="weather-dashboard" height="150px"
            width="150px">
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <p class="folio-text">Weather app that populates information via an API and changes dymanically with JQuery.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Technology:</b>HTML, CSS, Javascript, JQuery, Open Weather Map API, Moment JS
            </li>
            <li class="list-group-item"><b>Contributors:</b> Uzo Obeki</li>
            <li class="list-group-item">01.31.2021</li>
          </ul>
          <div class="card-body">
            <a href="https://github.com/uzobeki/Weather-Dashboard/" class="card-link">GitHub Repo</a>
            <a href="https://uzobeki.github.io/Weather-Dashboard/" class="card-link">Deployed App</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img src="../Assets/Images/PMTA.png" class="card-img-top" alt="placeholder">
          <div class="card-body">
            <h5 class="card-title">Pass Me The Aux</h5>
            <p class="folio-text">An app that pulls lyrics and related songs of artist and holds user input in local
              storage to use for another search.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Technology:</b>HTML, CSS, Javascript, JQuery, SongKick API, Lyrics.ovh API
            </li>
            <li class="list-group-item"><b>Contributors:</b> Uzo O., Juan Echeverry, Aubrey Bennet, Julian Clay</li>
            <li class="list-group-item">02.07.2021</li>
          </ul>
          <div class="card-body">
            <a href="https://github.com/jpecheverryp/pass-me-the-aux" class="card-link">GitHub Repo</a>
            <a href="https://jpecheverryp.github.io/pass-me-the-aux/" class="card-link">Deployed App</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-2">
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img src="../Assets/Images/Electric-Sheep.png" class="card-img-top" alt="password-generator" height="150px"
            width="150px">
          <div class="card-body">
            <h5 class="card-title">Electric Sheep</h5>
            <p class="folio-text">A blog-style dream journal.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Technology:</b> Handlebars, Node JS, Zodiac-signs, Mysql, Bootstrap, Heroku</li>
            <li class="list-group-item"><b>Contributors:</b> Uzo O., Oliver Bewley, Heather Smith</li>
            <li class="list-group-item">04.03.2021</li>
          </ul>
          <div class="card-body">
            <a href="https://github.com/acbewley/young-vipers-electric-sheep" class="card-link">Github Repo</a>
            <a href="http://banana-crumble-13553.herokuapp.com/" class="card-link">Deployed App</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--End Portfolio Body--></div>
    )
}
export default Portfolio