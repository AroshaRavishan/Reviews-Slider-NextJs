# Reviews Component

This project contains a `Reviews` component built with React and Splide, designed to display a carousel of items with a progress bar and navigation arrows. The component is fully responsive and supports autoplay functionality.

## Features

- Responsive carousel with support for multiple items per view
- Autoplay with customizable interval
- Navigation arrows for manual slide control
- Progress bar indicating the current slide position
- Adjustable settings for different screen sizes


### Slider Data

The slider data is an array of objects, each containing the following properties:

- `id`: Unique identifier for the item
- `title`: Title of the item
- `description`: Description of the item
- `country`: Country associated with the item
- `image`: URL of the item's image
- `date`: Date associated with the item

### Splide Options

The `splideOptions` object contains configuration settings for the Splide carousel:

- `type`: Type of the carousel, set to `loop`
- `perPage`: Number of items to display per page
- `arrows`: Visibility of navigation arrows
- `pagination`: Visibility of pagination dots
- `gap`: Gap between slides
- `autoplay`: Enables autoplay
- `perMove`: Number of slides to move per transition
- `interval`: Interval for autoplay transitions
- `autoScroll`: Auto-scroll settings
- `breakpoints`: Responsive settings for different screen sizes


