# Properties

## images

Array of images with a `src` and `alt` property. This prop is used to build traditional image grids using the `Grid` component

## gridLayout

configures the layout of the grid. can be either `HORIZONTAL` or `VERTICAL`. Defaults to `VERTICAL`

```jsx
  <Grid gridLayout="VERTICAL" />
```

## gap

configures the gap between the grid items (images). Defaults to `20px`.

```jsx
  <Grid gap="20px" />
```

## height

configures the height of the grid. The height can be specified as pixels or as percentage. Defaults to `600px`.

```jsx
  <Grid height="600px" />
```

## width

configures the width of the grid. The width can be specified as pixels or as percentage. Defaults to `1200px`.

```jsx
  <Grid width="1200px" />
```

## theme

```jsx
  <Grid theme="dark" />
```

## showProgressBar

The progress bar is a visual indicator of the images that have been loaded / seen. Defaults to `true`

```jsx
  <Grid showProgressBar />
```

## enableResize

Enables the grid to be resized. Defaults to `true`. This enables a special resize handle for resizing the grid. Defaults to `true`

```jsx
  <Grid enableResize />
```

## enableDarkMode

displays a toggle button to switch between light and dark mode. Defaults to `true`

```jsx
  <Grid enableDarkMode />
```