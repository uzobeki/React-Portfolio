


const Contact = () => {
    return(
        <section class="container contact-form">
        <div class="row">
            <div class="col-md-6">  
                <header class="contact-header"><h1>Contact</h1></header>
                <div class="card contact-card" style="width: 35rem;">
                  <div class="card-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name">
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Talk to me!</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button type="submit" class="btn btn-primary">Submit</button>  
                      </div>
                  </div>
                </div>      
            </div>
            <!--End Contact Form-->

            <!--Contact Aside Text-->
            <aside class="col-md-6">
                <ul>
                  <li class="contact-info"><strong>Phone:</strong> 404-213-0475</li>
                  <li class="contact-info"><strong>Email:</strong> uobeki.40@gmail.com</li>
                </ul>
                <a href="https://www.facebook.com/uzo.obeki"><i class="fa fa-facebook social" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/_chukwunwike/"><i class="fa fa-instagram social" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/uobeki/"><i class="fa fa-linkedin social" aria-hidden="true"></i></a>
                <a href="https://github.com/uzobeki/"><i class="fa fa-github-alt social" aria-hidden="true"></i></a>
            </aside>
            <!--End Contact Aside Text-->
    )
}

export default Contact