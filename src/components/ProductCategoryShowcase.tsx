'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface CategoryItem {
  id: string;
  title: string;
  imagePlacement: 'left' | 'right';
  imageSrc: string;
  imageAlt: string;
  isPlaceholder?: boolean;
  paragraphs: React.ReactNode[];
  buttonText: string;
  buttonHref: string;
}

export const PRODUCT_CATEGORIES: CategoryItem[] = [
  {
    id: 'water-purifiers',
    title: 'Water Purifiers',
    imagePlacement: 'right',
    imageSrc: '/assets/images/category-water-purifiers.png',
    imageAlt: 'Nice Water Purifiers - RO + Copper Charge Purifier',
    isPlaceholder: false,
    paragraphs: [
      <>
        Pure, clean and safe drinking water isn&apos;t available easily these days. Growing population, industrial development and environmental degradation are all causes for this. Given this situation, it becomes even more important for us to be aware of purification techniques and the available water purifiers in the market to ensure that our drinking water is of good quality.
      </>,
      <>
        We introduce <strong>Nice Water Solutions</strong> with advanced technology of purification method which involves RO+UF and UV+TDS control option. Best suited for placement in almost all location.
      </>,
    ],
    buttonText: 'View Our Products',
    buttonHref: '/products',
  },
  {
    id: 'water-treatment-plant',
    title: 'Water Treatment Plant',
    imagePlacement: 'left',
    imageSrc: '/assets/images/product-water-treatment-plant.png',
    imageAlt: 'Nice Water Treatment Plant - Dual FRP Vessel System',
    isPlaceholder: false,
    paragraphs: [
      <>
        <strong>Water treatment</strong> is any process that improves the quality of water to make it appropriate for a specific end-use. The end use may be drinking, industrial water supply, irrigation, river flow maintenance, water recreation or many other uses, including being safely returned to the environment. Water treatment removes contaminants and undesirable components, or reduces their concentration so that the water becomes fit for its desired end-use. This treatment is crucial to human health and allows humans to benefit from both drinking and irrigation use.
      </>,
      <>
        ABS plastic construction and non breakable feature. Impure water makes us weak brain and also creates digestion problems. We are serving the society with our water purification system from past 10 years and has been successfully satisfied our clients.
      </>,
    ],
    buttonText: 'View Our Products',
    buttonHref: '/products',
  },
  {
    id: 'water-treatment-ro-plant',
    title: 'Water Treatment RO Plant',
    imagePlacement: 'right',
    imageSrc: '/assets/images/category-ro-plant.png',
    imageAlt: 'Nice Water Treatment RO Plant - Dual FRP Skid System',
    isPlaceholder: false,
    paragraphs: [
      <>
        It is necessary to be sure of the quality of the water you are drinking. Using the best water purifier is an intelligent decision to move towards prevention of water borne diseases like: Blood Pressure, Sugar, jaundice, cholera, typhoid etc. It also removes all known disease causing bacteria, virus, etc. present in your water.
      </>,
      <>
        <strong>Nice Water Solutions</strong> RO water Purifier maintains essential Minerals and Nutrients in Purified Water. So that we will be able to gives your family not just pure, but healthy water.
      </>,
    ],
    buttonText: 'View Our Products',
    buttonHref: '/products',
  },
  {
    id: 'water-cooler',
    title: 'Water Cooler',
    imagePlacement: 'left',
    imageSrc: '/assets/images/product-water-cooler.png',
    imageAlt: 'Commercial Stainless Steel Water Cooler',
    isPlaceholder: false,
    paragraphs: [
      <>
        A <strong>water dispenser</strong>, known as <strong>water cooler</strong> (if used for cooling only), is a machine that cools or heats up and dispenses water with a refrigeration unit. It is commonly located near the restroom due to closer access to plumbing. A drain line is also provided from the water cooler into the sewer system.
      </>,
      <>
        Water dispensers come in a variety of form factors, ranging from wall-mounted to bottle filler water dispenser combination units, to bi-level units and other formats.
      </>,
    ],
    buttonText: 'View Our Products',
    buttonHref: '/products',
  },
];

export default function ProductCategoryShowcase() {
  return (
    <div className="category-showcase-list">
      {PRODUCT_CATEGORIES.map((cat) => {
        const isImageLeft = cat.imagePlacement === 'left';

        return (
          <div
            key={cat.id}
            id={cat.id}
            className={`category-showcase-row ${isImageLeft ? 'row-image-left' : ''}`}
          >
            {/* If image is placed on the left on desktop/laptop */}
            {isImageLeft && (
              <div className={`category-img-container ${!cat.isPlaceholder ? 'image-loaded' : ''}`}>
                {cat.isPlaceholder && <span className="image-placeholder-tag">Image Placeholder</span>}
                <Image
                  src={cat.imageSrc}
                  alt={cat.imageAlt}
                  width={340}
                  height={380}
                  style={{ width: 'auto', height: 'auto', maxHeight: '350px' }}
                />
              </div>
            )}

            {/* Text details column */}
            <div className="category-text-container">
              <h3 className="category-title-underline">{cat.title}</h3>
              {cat.paragraphs.map((p, idx) => (
                <p key={idx} className="category-desc">
                  {p}
                </p>
              ))}
              <Link href={cat.buttonHref} className="category-btn-view">
                {cat.buttonText}
              </Link>
            </div>

            {/* If image is placed on the right on desktop/laptop */}
            {!isImageLeft && (
              <div className={`category-img-container ${!cat.isPlaceholder ? 'image-loaded' : ''}`}>
                {cat.isPlaceholder && <span className="image-placeholder-tag">Image Placeholder</span>}
                <Image
                  src={cat.imageSrc}
                  alt={cat.imageAlt}
                  width={340}
                  height={380}
                  style={{ width: 'auto', height: 'auto', maxHeight: '350px' }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
