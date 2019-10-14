const personalInfoCss = () => {
  const mainCss = document.createElement('link')
  mainCss.rel = "stylesheet"
  mainCss.href = "/static/css/Register/style.css"
  document.head.appendChild(mainCss);

  const materialCss = document.createElement('link')
  materialCss.rel = "stylesheet"
  materialCss.href = "/static/css/Register/material-design-iconic-font.css"
  document.head.appendChild(materialCss);
}

const removeNonRegisterCss = () => {
  const list = document.getElementsByTagName('link')

  Object.entries(list).map(item => {
    if (!item[1].href.split('/').includes('Register')) {
      item[1].parentNode.removeChild(item[1])
    }
  })
}


const PersonalInfo = () => document.getElementById('app').innerHTML = `
  <div class="main">
    <section class="signup">
      <!-- <img src="images/signup-bg.jpg" alt=""> -->
      <div class="container">
        <div class="signup-content">
          <form method="POST" id="signup-form" class="signup-form">
            <h2 class="form-title">Create account</h2>
            <div class="form-group">
              <input type="text" class="form-input" name="name" id="name" placeholder="Your Name"/>
            </div>
            <div class="form-group">
              <input type="email" class="form-input" name="email" id="email" placeholder="Your Email"/>
            </div>
            <div class="form-group">
              <input type="text" class="form-input" name="password" id="password" placeholder="Password"/>
              <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
            </div>
            <div class="form-group">
              <input type="password" class="form-input" name="re_password" id="re_password" placeholder="Repeat your password"/>
            </div>
            <div class="form-group">
              <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
              <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
            </div>
            <div class="form-group">
              <input type="submit" name="submit" id="submit" class="form-submit" value="Sign up"/>
            </div>
          </form>
          <p class="loginhere">
            Have already an account ? <a href="#" class="loginhere-link">Login here</a>
          </p>
        </div>
      </div>
    </section>
  </div>
`;

export { removeNonRegisterCss, personalInfoCss, PersonalInfo }