import React from "react";

export default function GoogleMap() {
  return (
    <div className="mt-20">
      <iframe
        title="Location-restaurant"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.870320185899!2d39.986915215607866!3d40.962419630194134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40642f5edd4fc641%3A0xcfa90a9e327afc59!2sHamsiye%20bal%C4%B1k!5e0!3m2!1str!2str!4v1628867514347!5m2!1str!2str"
        className="w-full h-80 border-none"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
}
