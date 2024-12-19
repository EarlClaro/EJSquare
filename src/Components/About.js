import React, { useEffect } from "react";
import "../CSS/About.css";

function About() {
  useEffect(() => {
    // Check if script is already loaded
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="about-section">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="/about.heic" alt="About Us" />
        </div>
        <div className="about-text">
          <p>
            Welcome to <strong>EJ Square</strong>, your go-to store for unique and
            creative items! We specialize in a variety of products, including memo
            pads, tote bags, keychains, stickers, button pins, and Genshin Impact
            phone charms. Each item is crafted with love and care to bring joy and
            creativity to your everyday life.
          </p>
          <p>
            Follow us on our journey to create exciting products and spread
            happiness to our customers. We’re dedicated to providing the best
            experience possible, whether it’s through our high-quality products or
            excellent customer service.
          </p>
          <p>Thank you for supporting our small business. ❤️</p>
        </div>
      </div>
      <div className="instagram-posts">
        <div
          className="instagram-post"
          dangerouslySetInnerHTML={{
            __html: `
            <blockquote class="instagram-media" 
              data-instgrm-captioned 
              data-instgrm-permalink="https://www.instagram.com/p/DCVZBpXBlaK/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14">
            </blockquote>
            `,
          }}
        ></div>
        <div
          className="instagram-post"
          dangerouslySetInnerHTML={{
            __html: `
            <blockquote class="instagram-media" 
              data-instgrm-captioned 
              data-instgrm-permalink="https://www.instagram.com/p/DDkKOyXTtqY/?utm_source=ig_embed&amp;utm_campaign=loading" 
              data-instgrm-version="14">
            </blockquote>
            `,
          }}
        ></div>
      </div>
    </section>
  );
}

export default About;
