# **🖼️ Image Gallery**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

### JavaScript Version

```jsx
import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="image-gallery">
      <div className="gallery-main">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" />
        ) : (
          <img src={images[0]} alt="Gallery" />
        )}
      </div>
      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
            className={selectedImage === image ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
```

### TypeScript Version

```tsx
import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="image-gallery">
      <div className="gallery-main">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" />
        ) : (
          <img src={images[0]} alt="Gallery" />
        )}
      </div>
      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
            className={selectedImage === image ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
```
