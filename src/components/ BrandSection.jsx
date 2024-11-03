import React from "react";

const BrandSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Brands   that trust us
        </h2>
        <div className="flex flex-wrap justify-center">
          <img src="mg.png" alt="MG" className="w-24 h-12 mx-4 mb-4" />
          {/* ... other brand logos ... */}
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Testimonials
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-center mx-8">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
              <p className="font-bold mt-2">Magnus Hawthorne</p>
              <p>Owner, Bayleaf</p>
            </div>
            <div className="text-center mx-8">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
              <p className="font-bold mt-2">Thaddeus Montgomery</p>
              <p>Owner, Goldgarden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
