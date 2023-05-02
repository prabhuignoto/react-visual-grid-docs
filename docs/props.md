# Properties

## Images

An array of images with a `src` and `alt` property. Each image is represented as an object with two properties: `src`, which is a string representing the URL of the image, and `alt`, which is a string representing the alternative text for the image (in case the image cannot be displayed). 

```jsx
const images = [
  {
    src: 'https://picsum.photos/200/300',
    alt: 'image 1'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'image 2'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'image 3'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'image 4'
  }
];

<Grid images={images} width={"90%"} height={"70%"}/>
```

## GridLayout

This property configures the layout of the grid. It can be set to either `HORIZONTAL` or `VERTICAL`. If not specified, it defaults to `VERTICAL`.

```jsx
<Grid gridLayout="VERTICAL" />
```

## ImageSizes

This property configures the dimensions of the thumbnails in the grid. It accepts an object with three keys (`1X`, `2X`, and `3X`) that represent three different zoom levels. The values associated with each key are objects containing two properties: `width` and `height`, which represent the dimensions of the thumbnail in pixels.

```jsx
<Grid
  images={images}
  gridLayout="vertical"
  width={1800}
  height={1200}
  imageSizes={{
    "1X": {
      width: 120,
      height: 100,
    },
    "2X": {
      width: 200,
      height: 180,
    },
    "3X": {
      width: 320,
      height: 280,
    },
  }}
/>
```

## Gap

This property configures the gap (in pixels) between the grid items (images). If not specified, it defaults to `20px`.

```jsx
<Grid gap="20px" />
```

## Height

This property sets the height of the grid. The height can be specified in pixels or as a percentage of the container's height. If not specified, it defaults to `600px`.

```jsx
<Grid height="600px" />
```
## Width

This property sets the width of the grid. The width can be specified in pixels or as a percentage of the container's width. If not specified, it defaults to `1200px`.

```jsx
<Grid width="1200px" />
```

## Theme

This property configures the theme of the grid. It accepts an object with the following keys:

| Name                    | Description                               | Type   | Default     |
| :---------------------- | :---------------------------------------- | :----- | :---------- |
| `primaryColor`          | The primary color of the gallery          | string | `#007fff`   |
| `backgroundColor`       | The background color of the gallery       | string | `#000`      |
| `controlBgColor`        | The background color of the control strip | string | `#303030`   |
| `controlBtnColor`       | The button color of the controls          | string | `#595959`   |
| `controlsBackDropColor` | The backdrop color of the controls        | string | `rgba(0, 0, |

```jsx
  <Grid
    gridLayout="vertical"
    theme={{
      backgroundColor: "#000",
      controlBgColor: "#303030",
      controlBtnColor: "#595959",
      controlsBackDropColor: "rgba(0, 0, 0, 0.95)",
      thumbnailBgColor: "#202020",
    }}
  />
```

## showProgressBar

The `showProgressBar` is a feature that displays a visual indicator of the loaded or seen images. Its default value is `true`.

```jsx
  <Grid showProgressBar />
```

## enableResize

The `enableResize` feature allows users to resize the grid. Its default value is `true`.

```jsx
  <Grid enableResize />
```

## enableDarkMode

The `enableDarkMode` feature enables a toggle button that users can click to switch between light and dark mode. Its default value is `true`.

```jsx
  <Grid enableDarkMode />
```
