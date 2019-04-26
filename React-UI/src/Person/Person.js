import React from 'react';
import './Person.css'

const person = () => {
    return (
      <div className="Person">
          <div>
          <img src="https://images.pexels.com/photos/1484530/pexels-photo-1484530.jpeg?cs=srgb&dl=4k-wallpaper-backlit-bright-1484530.jpg&fm=jpg"
               alt="mountains" height="500" width="1200"/></div>
          <h2><i>Welcome, you are reading about me!!!</i></h2>
          <p>So what is this? Well, I always wanted to build an app for just myself ever since my fascination with
          the development community began. However, could not really get my hands dirty for a long while.But now,
          here I am starting my own memoirs (my special dairy). So what am I up to? Im still deciding though!! To kick off,
          I want to add all the favorite holidays spots so whenever I see them I can always remind the joyous moments with the family,
          record daily events at the moment in my life, daily activities, making sure I do not forget the <b><i>new taco place that had some really good reviews</i></b>,
          <b><i>pick up my favorite sunset spots</i></b>,<b><i>finding a nice coffee shop</i></b>!
          </p>
      </div>
    );

};

export default person;
