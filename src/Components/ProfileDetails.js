import React from "react";
import "./ProfileDetails.css";
const ProfileDetails = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img
          className="image"
          style={{ borderRadius: "50%" }}
          src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&amp;h=152&amp;fit=crop&amp;crop=faces"
          alt=""
          width="150px"
          height="150px"
        />
      </div>

      <div className="profile">
        <div className="profile-details">
          <div className="title">
            <h1>rotter dam</h1>
          </div>

          <div className="button-container">
            <button className="profile-button">Message</button>

            <button className="profile-button">
              <i class="fas fa-user-check"></i>
            </button>

            <button className="profile-button">
              <i class="far fa-chevron-down"></i>
            </button>

            <span>
              <i class="fas fa-ellipsis-h"></i>
            </span>
          </div>
        </div>
        {/* 
        <div className='profile-statistics'>
          <div className='stats-container'>
            <span className='stats'>165</span>
            <p className='profile-text'>posts</p>
          </div>
          <div className='stats-container'>
            <span className='stats'>40.8k</span>
            <p className='profile-text'>followers</p>
          </div>
          <div className='stats-container'>
            <span className='stats'>952</span>
            <p className='profile-text'>following</p>
          </div>
        </div>
 */}
        {/* <div className='profile-bio'>
          <h1 className='profile-name'>ROTT | Cinematic Storyteller</h1>
          <span style={{ color: '#8E8E8E' }}>Entrepreneur</span>
          <br />
          <span>🏆 Award Winning Wedding Filmmaker</span>
          <br />
          <span>📺 Co-Creator of #SWIL</span>
          <span>👨🏾‍💻 Instagram Coach & Content Strategist</span>
          <br />
          <span>💍 Wife To @_bonybrown 🇪🇷 </span>
          <a
            author_id='1455908751'
            class='heKAw'
            href='https://l.instagram.com/?u=https%3A%2F%2Fukblackbusinessweek.com%2F25-top-black-entrepreneurs-to-watch-in-2021&amp;e=ATO3KwpXxe4aUJl6wB-ALf0CyhlbxOJ--u_zYzSmpF77gHtdGDhfO71heuFaAkRI2-WgWLc7ArpBdS9aHO3FoQ&amp;s=1'
            page_id='profilePage'
            rel='me nofollow noopener noreferrer'
            target='_blank'
          >
            ukblackbusinessweek.com/25-top-black-entrepreneurs-to-watch-in-2021
          </a>
        </div>
        <br />
        <div className='profile-updates'>
          <p>
            <span style={{ color: '#8E8E8E' }}>Followed by</span>
            myweddingnigeria, maxwelljennings, bellanaijaweddings
            <span style={{ color: '#8E8E8E' }}>+5 more</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileDetails;
