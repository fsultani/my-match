(async () => {
  const userId = window.location.pathname.split('/')[2]
  const response = await axios.get(`/user/api/profile-data/${userId}`, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });

  const { authUser, lastActive, user } = response.data;

  const content = `
    <div class="wrapper">
      <div class="profile-photos-container" data-user-photos="${user.photos.length}">
        <div class="slider">
          <div class="photos-container">
            <div class="slider-wrapper">
              ${user.photos.length > 0 ? user.photos.map((photo, index) => `
              <div class="slide" id="${index}"><img src="${photo}" /></div>
              `).join('') : `<img
                src="${user.gender === 'male' ?
                'https://my-match.s3.amazonaws.com/male.png' :
                'https://my-match.s3.amazonaws.com/female.png'}"
              />
              `}
            </div>
            <div class="dots-wrapper">
              ${user.photos.length > 1 ? user.photos.map((photo, index) => `
              <span class="dot" onclick="goToImage(${index})"></span>
              `).join('') : ''}
            </div>
          </div>

          ${user.photos.length > 1 ? `
          <div class="image-previews-container">
            ${user.photos.map((photo, index) => `
            <div class="image-preview-wrapper">
              <img src="${photo}" class="user-photo" onclick="goToImage(${index})" />
            </div>
            `).join('')}
          </div>
          ` : ''}
        </div>
      </div>

      <div class="user-basic-info-container">
        <div class="top-row">
          <div class="user-basic-info-wrapper">
            <h5 class="user-name-age">${user.name}, ${user.age}</h5>
            <p class="user-location">Lives in ${user.city}, ${user.state !== null ? `${user.state}, ${user.country}` : user.country}</p>
            <p class="user-last-active">Last Active: ${lastActive}</p>
          </div>
          <div class="block-report-user-dropdown">
            <div class="ellipsis-menu" onclick="handleBlockReportUserMenu()">
              <div class="ellipsis-dot"></div>
              <div class="ellipsis-dot"></div>
              <div class="ellipsis-dot"></div>
            </div>
            <div class="block-report-user-dropdown-content">
              <div class="arrow"></div>
              <div class="inner-content">
                <div onclick="handleBlockUser()">Block</div>
                <div onclick="handleReportUser()">Report</div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-wrapper">
          <button onclick="handleSendMessage()"><i class="far fa-envelope fa-2x"></i></button>
          <button onclick="handleLikeUser()"><i class="far fa-star fa-2x"></i></button>
        </div>
      </div>

      <div class="user-details-container">
        <div class="user-details-wrapper">
          <h5 class="user-details-header">Details</h5>
          <div class="details-grid">
            <div class="details-key">Ethnicity:</div>
            <div class="details-value">Afghan</div>
            <div class="details-key">Raised in:</div>
            <div class="details-value">United States</div>
            <div class="details-key">Conviction:</div>
            <div class="details-value">Sunni</div>
            <div class="details-key">Values:</div>
            <div class="details-value">Moderate</div>
            <div class="details-key">Marital Status:</div>
            <div class="details-value">Never married</div>
            <div class="details-key">Education:</div>
            <div class="details-value">Bachelor's Degree</div>
            <div class="details-key">Profession:</div>
            <div class="details-value">Software Engineer</div>
            <div class="details-key">Languages:</div>
            <div class="details-value">English, Dari</div>
            <div class="details-key">Hijab:</div>
            <div class="details-value">No</div>
            <div class="details-key">Has children:</div>
            <div class="details-value">No</div>
            <div class="details-key">Wants children:</div>
            <div class="details-value">Yes</div>
            <div class="details-key">Body Type:</div>
            <div class="details-value">Athletic</div>
            <div class="details-key">Height:</div>
            <div class="details-value">5' 11"</div>
            <div class="details-key">Can relocate:</div>
            <div class="details-value">Yes</div>
            <div class="details-key">Diet:</div>
            <div class="details-value">Halal when possible</div>
            <div class="details-key">Interests:</div>
            <div class="details-value">
              Computers <span>&#9679;</span> Nature <span>&#9679;</span> Beach
            </div>
          </div>
        </div>
      </div>

      <div class="about-me">
        <h5>About me</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Amet facilisis magna etiam tempor orci eu. A iaculis at erat
          pellentesque. Ornare lectus sit amet est placerat in egestas. Nunc id cursus metus aliquam.
          Sit amet porttitor eget dolor morbi non arcu. Lectus magna fringilla urna porttitor rhoncus
          dolor. Placerat in egestas erat imperdiet. Sit amet luctus venenatis lectus magna fringilla
          urna porttitor rhoncus. Mi quis hendrerit dolor magna eget. Justo eget magna fermentum
          iaculis. Egestas purus viverra accumsan in. Et molestie ac feugiat sed lectus. Lorem donec
          massa sapien faucibus et molestie ac feugiat sed. Consectetur adipiscing elit ut aliquam. Eu
          facilisis sed odio morbi quis commodo odio aenean. Sollicitudin nibh sit amet commodo nulla
          facilisi nullam vehicula. Quis auctor elit sed vulputate mi. Porttitor leo a diam
          sollicitudin tempor id eu. Arcu odio ut sem nulla pharetra.
        </p>
      </div>

      <div class="about-match">
        <h5>About my match</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Amet facilisis magna etiam tempor orci eu. A iaculis at erat
          pellentesque. Ornare lectus sit amet est placerat in egestas. Nunc id cursus metus aliquam.
          Sit amet porttitor eget dolor morbi non arcu. Lectus magna fringilla urna porttitor rhoncus
          dolor. Placerat in egestas erat imperdiet. Sit amet luctus venenatis lectus magna fringilla
          urna porttitor rhoncus. Mi quis hendrerit dolor magna eget. Justo eget magna fermentum
          iaculis. Egestas purus viverra accumsan in. Et molestie ac feugiat sed lectus. Lorem donec
          massa sapien faucibus et molestie ac feugiat sed. Consectetur adipiscing elit ut aliquam. Eu
          facilisis sed odio morbi quis commodo odio aenean. Sollicitudin nibh sit amet commodo nulla
          facilisi nullam vehicula. Quis auctor elit sed vulputate mi. Porttitor leo a diam
          sollicitudin tempor id eu. Arcu odio ut sem nulla pharetra.
        </p>
      </div>
    </div>
  `;

  document.querySelector(`.loader`).style.display = 'none';
  document.querySelector(".profile-content").innerHTML = content;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '/static/client/views/app/profile/main.js';
  document.head.appendChild(script);
})();
