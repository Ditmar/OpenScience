## Integration Documentation here
# `.hero-banner__content`

Defines styles for the content within the `heroBanner` and specifies each component:

- **align-items:** Aligns the elements vertically in the center.
- **bottom:** Positions an element absolutely or fixed, ensuring its bottom edge aligns with the bottom edge of its nearest positioned container.
- **left:** Positions an element at the left edge of its nearest positioned container.
- **right:** Positions an element at the right edge of its nearest positioned container.
- **color:** Applies the main color defined in global variables.
- **display:** Sets the display to flex.
- **justify-content:** Aligns child elements horizontally in the center.
- **padding:** Adds 20px of padding.
- **width:** Sets the width to 60%.

# Position

`.hero-banner__content` is positioned absolutely within the `.hero-banner` container, with `left: 0;`, `right: 0;`, and `bottom: 0;` properties ensuring it spans the full width of the container and sits at the bottom.

# Overlay

The content defined by `.hero-banner__content` overlays the image styled by `.hero-banner img`, creating a visual effect where text or other elements float above the image.

# Responsive Design

Both elements use responsive styles to ensure they look good on different screen sizes. The image adjusts its height at different breakpoints, while the content aligns and centers accordingly.

`.hero-banner img` and `.hero-banner__content` work together

- `.hero-banner img` defines the styles for the background image of the hero banner.
- `.hero-banner__content` defines the styles for the content that overlays the image.

# Fetch Cache.

The FetchCache class provides a simple interface for fetching data from an API with built-in caching. This implementation uses node-fetch for making HTTP requests and node-cache for caching responses. This is particularly useful for reducing the number of API calls and improving performance by serving cached data when available.

## Usage 

```
interface SomeTypeOfData {
  title: string;
  data: string;
}
```

```
const response = new FetchCache<SomeTypeOfData>('', {});
const data = await response.get();
console.log(data.title);

```