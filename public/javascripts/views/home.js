window.addEventListener('load', () => {
  if (window.location.pathname === '/home' && Cookies.get('token')) {
    axios.get('/api/all-members').then((res) => {
      const allMembers = res.data.all
      const welcome = `
          <center>
            <h1>Welcome home!</h1>
            <h3>All members on this site</h3>
        `;

        let output = `<div class="col-md-8 col-md-offset-2">`;

        allMembers.map((user) => {
          output += `
            <a href="/users/${user._id}/about" style="text-decoration: none">
              <div class="col-md-6">
                <div class="thumbnail" style="border-radius: 12px">
                  <h3 style="margin: 20px 0px">${user.first_name}</h3>
                </div>
              </div>
            </a>
          `;
        })

        output += `</div></center>`;
        const htmlOutput = beginLayout + authenticated + endLayout + welcome + output;
        document.getElementById('my-app').innerHTML = htmlOutput;
    })
  } else if (window.location.pathname === '/home') {
    const welcome = `
      <center>
        <h1>Welcome!</h1>
        <h4>Please log in or create an account</h4>
      </center>
    `;

    const htmlOutput = beginLayout + notAuthenticated + endLayout + welcome;
    document.getElementById('my-app').innerHTML = htmlOutput;
    }
})