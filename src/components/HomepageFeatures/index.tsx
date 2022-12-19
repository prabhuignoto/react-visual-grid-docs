import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Built for Performance',
    Svg: require('@site/static/img/zap.svg').default,
    description: (
      <>
        react-visual-grid is built with performance in mind.
        It uses the virtualization technique to render only the visible items efficiently.
      </>
    ),
  },
  {
    title: 'Support for Multiple layouts',
    Svg: require('@site/static/img/layout.svg').default,
    description: (
      <>
       Multiple layouts to satisfy the needs of different use cases.
       Rendering horizontal or vertical layouts is as easy as passing a prop.
      </>
    ),
  },
  {
    title: 'Masonry Grid',
    Svg: require('@site/static/img/grid.svg').default,
    description: (
      <>
        Build beautiful masonry grids with ease. Comes with 2 different modes to quickly & easily build your masonry grids.
      </>
    ),
  },
  {
    title: 'Customizable Thumbnail sizes',
    Svg: require('@site/static/img/image.svg').default,
    description: (
      <>
        Take control of the thumbnail sizes. You can set the width and height of the thumbnails. 3 different dimensions are supported.
      </>
    ),
  },
  {
    title: 'Resizable',
    Svg: require('@site/static/img/full-screen.svg').default,
    description: (
      <>
        Easily change the dimensions of the grid with the resizable feature. Drag with mouse or touch to resize the grid to your liking.
      </>
    ),
  },
  {
    title: 'Customizable color scheme',
    Svg: require('@site/static/img/heart.svg').default,
    description: (
      <>
        Change the color scheme of the grid to match your brand. Customize every element of the grid to match your needs.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles['feature-item'])}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
