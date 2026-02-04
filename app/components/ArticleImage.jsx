// components/ArticleImage.jsx
export default function ArticleImage({ src, alt, width }) {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={width}
        height="auto"
        className="mx-auto"
      />
      <figcaption>{alt}</figcaption>
    </figure>
  )
}
