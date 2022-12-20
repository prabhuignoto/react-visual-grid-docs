# Properties

## images

Array of images with a `src` and `alt` property.

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

## gridLayout

Configures the layout of the grid. can be either `HORIZONTAL` or `VERTICAL`. Defaults to `VERTICAL`

```jsx
  <Grid gridLayout="VERTICAL" />
```

## gap

Configures the gap between the grid items (images). Defaults to `20px`.

```jsx
  <Grid gap="20px" />
```

## height

Sets the height of the grid. The height can be specified as pixels or as percentage. Defaults to `600px`.

```jsx
  <Grid height="600px" />
```

## width

Sets the width of the grid. The width can be specified as pixels or as percentage. Defaults to `1200px`.

```jsx
  <Grid width="1200px" />
```

## theme

Configures the theme of the grid.

| Name                  | Description                           | Type   | Default             |
| :-------------------- | :------------------------------------ | :----- | :------------------ |
| primaryColor          | Primary color of the gallery          | string | #007fff             |
| backgroundColor       | Background color of the gallery       | string | #000                |
| controlBgColor        | Background color of the control strip | string | #303030             |
| controlBtnColor       | Button color of the controls          | string | #595959             |
| controlsBackDropColor | Backdrop color of the controls        | string | rgba(0, 0, 0, 0.95) |
| thumbnailBgColor      | Background color of the Thumbnails    | string | #202020             |

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

The progress bar is a visual indicator of the images that have been loaded / seen. Defaults to `true`

```jsx
  <Grid showProgressBar />
```

## enableResize

Enables the grid resize feature. Defaults to `true`

```jsx
  <Grid enableResize />
```

## enableDarkMode

displays a toggle button to switch between light and dark mode. Defaults to `true`

```jsx
  <Grid enableDarkMode />
```
