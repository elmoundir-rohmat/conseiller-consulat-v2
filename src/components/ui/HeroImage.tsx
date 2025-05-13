import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="w-full h-full bg-center bg-cover" style={{ 
      backgroundImage: `url(https://images.pexels.com/photos/466448/pexels-photo-466448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` 
    }}></div>
  );
};

export default HeroImage;